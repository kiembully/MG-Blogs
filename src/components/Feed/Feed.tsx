import React, { FC, useEffect, useState } from 'react'
import CommonDivider from '../CommonDivider'
import Post from '../Posts'
import Trending from './Trending'
import { SideMenuContainer } from './index'

const Feed: FC = () => {
  const [isUserActive, setIsUserActive] = useState(false)

  useEffect(() => {
    const auth = localStorage.getItem('authorization')
    const user = localStorage.getItem('user')
    if (auth && user) {
      setIsUserActive(true)
    }
  }, [])

  return (
    <div aria-label='feed-container' className='container mt-20 min-h-screen pt-8 mx-auto max-w-[840px] px-4 md:px-8'>
      <Trending />
      <CommonDivider orientation='horizontal' />
      <div className='mt-8 grid grid-cols-12 gap-8'>
        <div className='col-span-12 md:col-span-8'>
          <Post variant='all' />
        </div>
        <div className='col-span-4 hidden md:block relative'>
          <SideMenuContainer variant='feed' isUserActive={isUserActive} />
        </div>
      </div>
    </div>
  )
}

export default Feed
