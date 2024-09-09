import React from 'react'
import volume from '../assets/volume.svg'

const VolumeControls = () => {
  return (
    <div className='flex-col flex items-center mt-6 pb-1.5'>
      <div className='w-96 flex justify-between gap-4'>
        <img src={volume} className='w-5'></img>
        <input type='range' min='0' max='100' className='w-full cursor-pointer caret-jacarta-800 bg-jacarta-800 accent-jacarta-800 rounded-lg '></input>
      </div>
    </div>
  )
}

export default VolumeControls
