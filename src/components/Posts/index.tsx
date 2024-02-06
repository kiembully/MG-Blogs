import React from 'react'
import PostCard from './PostCard.tsx'

const Post = () => {
  return (
    <div>
      <h2 className='mb-4 text-base font-medium leading-6 tracking-normal'>Recent Posts</h2>
      <PostCard />
      <PostCard />
    </div>
  )
}

export default Post
