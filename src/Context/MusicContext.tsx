import React, { useEffect, useState, createContext, ReactNode } from 'react'
import SongTitle from '../components/SongTitle';

interface Song {
  id: number;
  title: string;
  artist: string;
  genre: string;
  duration: string;
  cover: string;
}

interface MusicContextProps {
  Music: Song[];
  CurrentSong: Song | null;
  prevSong: () => void;
  nextSong: () => void;
  clickedFromPlaylist: (id: number) => void;
  nowPlaying: (id: number) => boolean
}

interface MusicProviderProps {
  children: ReactNode;
}

export const MusicContext = createContext<MusicContextProps | undefined>(undefined);

export const MusicContextProvider: React.FC<MusicProviderProps> = ({ children }) => {
  const [Music, setMusic] = useState<Song[]>([]);
  const [currentSongIndex, setCurrentSongIndex] = useState<number>(0)

  
  useEffect(() => {
    fetch('https://raw.githubusercontent.com/atlas-jswank/atlas-music-player-api/main/playlist')
    .then((response) => response.json())
    .then((data) => setMusic(data))
  })
  
  const CurrentSong = Music[currentSongIndex] || null;;
  
  const prevSong = () => {
    if (currentSongIndex > 0) {
      setCurrentSongIndex(currentSongIndex - 1);
    };
    console.log('Going to the previous song...')
  }

  const nextSong = () => {
    if (currentSongIndex < Music.length - 1) {
      setCurrentSongIndex(currentSongIndex + 1);
    };
    console.log('Going to the next song...')
  }

  const clickedFromPlaylist = (id: number) => {
    const songIndex = Music.findIndex((song) => song.id === id)
    if (songIndex !== -1) {
      setCurrentSongIndex(songIndex);
    }
    console.log(`Now playing ${Music[songIndex].title}`)
  }

  const nowPlaying = (id: number) => {
    const songIndex = Music.findIndex((song) => song.id === id)
    if (Music[songIndex] === CurrentSong) {
      return true;
    } else {
      return false;
    }
  }

  return (
    <MusicContext.Provider
      value={{
        Music,
        CurrentSong,
        prevSong,
        nextSong,
        clickedFromPlaylist,
        nowPlaying,
      }}
    >
      {children}
    </MusicContext.Provider>
  )
}

export default MusicContextProvider
