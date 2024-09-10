import React, {useContext} from 'react';
import { MusicContext } from '../Context/MusicContext';

const SongTitle: React.FC = () => {
  const musicContext = useContext(MusicContext);
  if (!musicContext) {
    return <div>Not Found</div>;
  }
  const { CurrentSong } = musicContext;
  return (
    <div className="flex-col flex items-center mt-4">
      <div className="w-96 text-left">
        <h1 className="text-2xl font-bold">{CurrentSong?.title}</h1>
        <p className="text-jacarta-500 font-medium">{CurrentSong?.artist}</p>
      </div>
    </div>
  );
};

export default SongTitle;
