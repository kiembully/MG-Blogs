import React from 'react'
import PostCard from './PostCard.tsx'
import { Post as PostTypes } from '../../helpers/interfaces.js'

const Post = ({ posts }: { posts: PostTypes[] }) => {
  return (
    <div>
      <h2 className='mb-4 text-base font-medium leading-6 tracking-normal'>Recent Posts</h2>
      {posts.map((post, index) => (
        <PostCard key={`${post.title}${index}`} post={post} />
      ))}
    </div>
  )
}

export default Post
