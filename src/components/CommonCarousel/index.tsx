import React from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

const CommonCarousel = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  }

  return (
    <Carousel arrows={false} autoPlay infinite responsive={responsive}>
      <div className='pr-4'>
        <div className='bg-neutral-200 min-h-32 w-full'></div>
      </div>
      <div className='pr-4'>
        <div className='bg-neutral-200 min-h-32 w-full'></div>
      </div>
      <div className='pr-4'>
        <div className='bg-neutral-200 min-h-32 w-full'></div>
      </div>
      <div className='pr-4'>
        <div className='bg-neutral-200 min-h-32 w-full'></div>
      </div>
      <div className='pr-4'>
        <div className='bg-neutral-200 min-h-32 w-full'></div>
      </div>
      <div className='pr-4'>
        <div className='bg-neutral-200 min-h-32 w-full'></div>
      </div>
    </Carousel>
  )
}

export default CommonCarousel
