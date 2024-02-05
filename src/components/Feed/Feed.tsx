import React, { FC } from 'react'
import CommonDivider from '../CommonDivider'
import Post from '../Posts'
// import Tags from '../Tags'
import Trending from './Trending'
import { SideMenuContainer } from './index'

type Props = {
  isUserActive?: boolean
}

const Feed: FC<Props> = ({ isUserActive }) => {
  return (
    <div className='container min-h-screen pt-8 mx-auto max-w-[840px]'>
      <Trending />
      <CommonDivider orientation='horizontal' />
      <div className='mt-8 grid grid-cols-12 gap-8'>
        <div className='col-span-8'>
          <Post />
        </div>
        <div className='col-span-4'>
          <SideMenuContainer variant='feed' isUserActive={isUserActive} />
        </div>
      </div>
    </div>
  )
}

export default Feed
