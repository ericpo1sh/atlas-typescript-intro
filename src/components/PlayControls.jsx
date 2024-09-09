import React from 'react'
import forward from '../assets/forward.svg'
import playicon from '../assets/playicon.svg'
import previous from '../assets/previous.svg'
import shuffle from '../assets/shuffle.svg'

const PlayControls = () => {
  return (
    <div className='flex-col flex items-center mt-6'>
      <div className='w-96 flex justify-between'>
        <p className='w-7 mt-2 text-2xl font-medium cursor-pointer'>1x</p>
        <img className='w-7 cursor-pointer' src={previous}></img>
        <div className="inline-block p-2 border-2 border-black rounded-md cursor-pointer">
          <img className="w-7 cursor-pointer" src={playicon} />
        </div>
        <img className='w-7 cursor-pointer' src={forward}></img>
        <img className='w-7 cursor-pointer' src={shuffle}></img>
      </div>
    </div>
  )
}

export default PlayControls
