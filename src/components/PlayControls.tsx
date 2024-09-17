import React, { useContext, useState } from 'react';
import forward from '../assets/forward.svg';
import playicon from '../assets/playicon.svg';
import pause from '../assets/pause.svg';
import previous from '../assets/previous.svg';
import shuffle from '../assets/shuffle.svg';
import inactivePrevious from '../assets/previous-inactive.svg';
import inactiveForward from '../assets/forward-inactive.svg';
import shuffleActive from '../assets/shuffleActive.svg';
import { MusicContext } from '../Context/MusicContext';

const PlayControls: React.FC = () => {
  const musicContext = useContext(MusicContext);
  const [musicSpeed, setMusicSpeed] = useState<number>(1);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isShuffle, setIsShuffle] = useState<boolean>(false);

  const musicSpeedHandler = () => {
    setMusicSpeed((prevMusicSpeed) => {
      const newSpeed = prevMusicSpeed === 3 ? 1 : prevMusicSpeed + 1;
      return newSpeed;
    });
  };

  const togglePlayPause = () => {
    setIsPlaying((prevIsPlaying) => !prevIsPlaying);
  };

  const toggleShuffle = () => {
    setIsShuffle((prevIsShuffle) => !prevIsShuffle);
  };

  const handleNextSong = () => {
    if (!musicContext) return;

    if (isShuffle) {
      const randomIndex = Math.floor(Math.random() * musicContext.Music.length);
      const randomSong = musicContext.Music[randomIndex];
      musicContext.clickedFromPlaylist(randomSong.id);
    } else {
      musicContext.nextSong();
    }
  };

  if (!musicContext) {
    return <div>Not Found</div>;
  }

  const { prevSong, Music, CurrentSong } = musicContext;

  const canGoBack = CurrentSong ? Music.findIndex(song => song.id === CurrentSong.id) > 0 : false;
  const canGoForward = CurrentSong ? Music.findIndex(song => song.id === CurrentSong.id) < Music.length - 1 : false;

  return (
    <div className="flex-col flex items-center mt-6">
      <div className="w-96 flex justify-between">
        <button 
          className="w-7 text-2xl font-medium cursor-pointer" 
          onClick={musicSpeedHandler}
        >
          {musicSpeed}x
        </button>
        <img 
          className="w-7 cursor-pointer"
          src={canGoBack ? previous : inactivePrevious} 
          alt="Previous" 
          onClick={canGoBack ? prevSong : undefined}
        />
        <div 
          className="inline-block p-2 border-2 border-black rounded-md cursor-pointer"
          onClick={togglePlayPause}
        >
          <img 
            className="w-7 cursor-pointer" 
            src={isPlaying ? pause : playicon} 
            alt={isPlaying ? "Pause" : "Play"} 
          />
        </div>
        <img 
          className="w-7 cursor-pointer"
          src={canGoForward ? forward : inactiveForward} 
          alt="Forward" 
          onClick={handleNextSong}
        />
        <img 
          className="w-7 cursor-pointer"
          src={isShuffle ? shuffleActive : shuffle}
          alt="Shuffle"
          onClick={toggleShuffle}
        />
      </div>
    </div>
  );
};

export default PlayControls;
