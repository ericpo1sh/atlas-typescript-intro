import React, { useContext, useState, useRef } from 'react';
import forward from '../assets/forward.svg';
import playicon from '../assets/playicon.svg';
import previous from '../assets/previous.svg';
import shuffle from '../assets/shuffle.svg';
import { MusicContext } from '../Context/MusicContext';

const PlayControls: React.FC = () => {
  const musicContext = useContext(MusicContext);
  const [ musicSpeed, setMusicSpeed ] = useState<number>(1)

  const audioRef = useRef<HTMLAudioElement | null>(null);

  const musicSpeedHandler = () => {
    setMusicSpeed((prevMusicSpeed) => {
      const newSpeed = prevMusicSpeed === 3 ? 1 : prevMusicSpeed + 1;
      if (audioRef.current) {
        audioRef.current.playbackRate = newSpeed;
      }
      return newSpeed;
    });
  };
  if (!musicContext) {
    return <div>Not Found</div>;
  }
  const { prevSong, nextSong } = musicContext;
  return (
    <div className="flex-col flex items-center mt-6">
      <div className="w-96 flex justify-between">
        <button className="w-7 mt-2 text-2xl font-medium cursor-pointer" onClick={() => {musicSpeedHandler}}>{musicSpeed}x</button>
        <img className="w-7 cursor-pointer" src={previous} alt="Previous" onClick={() => {prevSong()}}/>
        <div className="inline-block p-2 border-2 border-black rounded-md cursor-pointer">
          <img className="w-7 cursor-pointer" src={playicon} alt="Play" />
        </div>
        <img className="w-7 cursor-pointer" src={forward} alt="Forward" onClick={() => {nextSong()}} />
        <img className="w-7 cursor-pointer" src={shuffle} alt="Shuffle" />
      </div>
    </div>
  );
};

export default PlayControls;
