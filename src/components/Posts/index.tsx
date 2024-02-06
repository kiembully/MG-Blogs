import React, { useState, useEffect } from 'react'
import PostCard from './PostCard.tsx'
import { Post as PostTypes } from '../../helpers/interfaces.js'
import { getAllPosts } from '../../api'

const Post = ({ variant }: { variant: string }) => {
  const [posts, setPosts] = useState<PostTypes[]>([])

  const fetchPosts = async () => {
    if (variant === 'all') {
      const res: PostTypes[] = await getAllPosts()
      setPosts(res)
    }
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  return (
    <div>
      <h2 className='mb-4 text-base font-medium leading-6 tracking-normal'>Recent Posts</h2>
      {posts.map((post, index) => {
        return <PostCard key={`${post.title}${index}`} post={post} />
      })}
    </div>
  )
}

export default Post
