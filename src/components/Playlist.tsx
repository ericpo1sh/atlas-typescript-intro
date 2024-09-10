import React, { useContext } from 'react';
import PlayListItem from './PlayListItem';
import { MusicContext } from '../Context/MusicContext';

const Playlist: React.FC = () => {
  const musicContext = useContext(MusicContext);
  if (!musicContext) {
    return <div>Not Found</div>;
  }
  const { Music, clickedFromPlaylist, nowPlaying } = musicContext;
  return (
    <div>
      <div className=''>
        {Music.map((song) => (
          <div key={song.id}>
            <PlayListItem
              title={song.title}
              artist={song.artist}
              duration={song.duration}
              onClick={() => console.log(`Clicked on song: ${song.title}`)}
              className={nowPlaying(song.id) ? 'bg-slate-200 rounded' : ''}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Playlist
