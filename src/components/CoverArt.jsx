import React from 'react'
import placeholder from '../assets/placeholder.svg'

const CoverArt = () => {
  return (
    <div className='flex items-center justify-center'>
      <img src={placeholder} className='rounded-2xl w-96 h-96'></img>
    </div>
  )
}

export default CoverArt
