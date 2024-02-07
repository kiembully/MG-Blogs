import React from 'react'
import Post from '../Posts'
import { SideMenuContainer } from '../Feed'

const ProfileLayout = () => {
  return (
    <div className='min-h-screen container pt-8 mx-auto max-w-[840px]'>
      <div className='mt-8 grid grid-cols-12 gap-8'>
        <div className='col-span-8'>
          <Post variant={'profile'} />
        </div>
        <div className='col-span-4'>
          <SideMenuContainer variant='profile' />
        </div>
      </div>
    </div>
  )
}

export default ProfileLayout
