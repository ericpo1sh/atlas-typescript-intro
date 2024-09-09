import React from 'react'

const PlayListItem = ({ title, artist, duration, className }) => {
  return (
    <div className='w-96 flex-col mt-2.5'>
      <div className={`flex justify-between ${className}`}>
        <div className='text-left'>
          <p className='text-base  font-bold'>{title}</p>
          <p className='text-jacarta-600 font-medium'>{artist}</p>
        </div>
        <p className='text-jacarta-400 font-medium text-lg mt-2'>{duration}</p>
      </div>
    </div>
  )
}

export default PlayListItem
