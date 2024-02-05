import React from 'react'
import { NavMenuLayout } from '../../components'
import PostCard from '../../components/Posts/PostCard.tsx'

const ViewPost = () => {
  return (
    <NavMenuLayout>
      <div className='pt-8 px-4 mx-auto max-w-[840px] min-h-screen'>
        <PostCard viewMode />
      </div>
    </NavMenuLayout>
  )
}

export default ViewPost
