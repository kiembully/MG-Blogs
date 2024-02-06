import React, { FC } from 'react'
import Post from '../Posts'
import { SideMenuContainer } from '../Feed'
import EmptyPost from '../Posts/EmptyPost'

type Props = {
  variant?: 'empty' | 'own' | 'else' // profile states
}

const ProfileLayout: FC<Props> = ({ variant = '' }) => {
  const renderPosts = (val: string) => {
    switch (val) {
      case 'else': {
        return <Post />
      }
      case 'own': {
        return <Post />
      }
      default: {
        return <EmptyPost />
      }
    }
  }

  return (
    <div className='min-h-screen container pt-8 mx-auto max-w-[840px]'>
      <div className='mt-8 grid grid-cols-12 gap-8'>
        <div className='col-span-8'>{renderPosts(variant)}</div>
        <div className='col-span-4'>
          <SideMenuContainer variant='profile' />
        </div>
      </div>
    </div>
  )
}

export default ProfileLayout
