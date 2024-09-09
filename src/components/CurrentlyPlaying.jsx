import CoverArt from "./CoverArt";
import SongTitle from ".//SongTitle";
import PlayControls from "./PlayControls"
import VolumeControls from "./VolumeControls";
import React from 'react'

const CurrentlyPlaying = () => {
  return (
    <div>
      <div className="">
      <CoverArt/>
      <SongTitle/>
      <PlayControls/>
      <VolumeControls/>
      </div>
    </div>
  )
}

export default CurrentlyPlaying
