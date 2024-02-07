import React from 'react'

const Tags = () => {
  return (
    <div className='w-full flex flex-col items-start justify-start mt-8'>
      <p className='text-neutral-800'>Popular Tags</p>
      <div className='relative mt-2 h-48 w-full bg-white px-2'>
        <div className='relative h-full w-full flex flex-col items-start justify-evenly'>
          <a href='#' className='text-neutral-800 text-sm'>
            @design-talks
          </a>
          <a href='#' className='text-neutral-800 text-sm'>
            @react
          </a>
          <a href='#' className='text-neutral-800 text-sm'>
            @ruby
          </a>
          <a href='#' className='text-neutral-800 text-sm'>
            @case-studies
          </a>
          <a href='#' className='text-neutral-800 text-sm'>
            @tech-stack
          </a>
          <a href='#' className='text-neutral-800 text-sm'>
            @bootcamp
          </a>
        </div>
      </div>
    </div>
  )
}

export default Tags
