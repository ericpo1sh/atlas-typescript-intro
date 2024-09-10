import React from 'react';
import CoverArt from './CoverArt';
import SongTitle from './SongTitle';
import PlayControls from './PlayControls';
import VolumeControls from './VolumeControls';

const CurrentlyPlaying: React.FC = () => {
  return (
    <div>
      <div>
        <CoverArt />
        <SongTitle />
        <PlayControls />
        <VolumeControls />
      </div>
    </div>
  );
};

export default CurrentlyPlaying;
