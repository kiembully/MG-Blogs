import React from 'react'
import TrendingCard from './TrendingCard'
import CommonCarousel from '../../CommonCarousel'

const Trending = () => {
  return (
    <div className='mb-8'>
      <h1 className='mb-2 text-neutral-800 text-xl font-semibold'>Trending today</h1>
      <div className='h-full min-h-10'>
        <CommonCarousel />
      </div>
      {/* <TrendingCard /> */}
    </div>
  )
}

export default Trending
