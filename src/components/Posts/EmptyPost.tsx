import React from 'react'

const EmptyPost = () => {
  return (
    <div className='max-h-screen overflow-hidden relative'>
      <h2 className='mb-4 text-base font-medium leading-6 tracking-normal'>Your Posts</h2>
      <div className='flex flex-col relative'>
        <div className='bg-gradient-to-b from-transparent to-white absolute top-0 left-0 right-0 bottom-0 z-[1]'></div>
        <div className='bg-white border-md min-h-24 w-full mb-4 relative' />
        <div className='bg-white border-md min-h-24 w-full mb-4 relative' />
        <div className='bg-white border-md min-h-24 w-full mb-4 relative' />
        <div className='bg-white border-md min-h-24 w-full mb-4 relative' />
        <div className='bg-white border-md min-h-24 w-full mb-4 relative' />
        <div className='bg-white border-md min-h-24 w-full mb-4 relative' />
        <div className='bg-white border-md min-h-24 w-full mb-4 relative' />
        {/* ... (other divs) */}
        <div className='absolute top-32 left-1/2 transform -translate-x-1/2'>
          <div className='flex max-w-[135px] mx-auto'>
            <div
              className='w-full min-h-[121px] overflow-hidden rounded-md'
              style={{
                backgroundImage: 'url(/assets/empty-post.png)',
                backgroundSize: 'cover'
              }}
            ></div>
          </div>
          <p>Uh oh! You haven&apos;t posted anything.</p>
        </div>
      </div>
    </div>
  )
}

export default EmptyPost
