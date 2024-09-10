import React, {useContext} from 'react';
import { MusicContext } from '../Context/MusicContext';

const CoverArt: React.FC = () => {
  const musicContext = useContext(MusicContext);
  if (!musicContext) {
    return <div>Not Found</div>;
  }
  const { CurrentSong } = musicContext;
  return (
    <div className="flex items-center justify-center">
      <img src={CurrentSong?.cover} className="rounded-2xl w-96 h-96" alt="Cover Art" />
    </div>
  );
};

export default CoverArt;
