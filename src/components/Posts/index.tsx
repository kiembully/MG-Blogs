import React, { useState, useEffect } from 'react'
import PostCard from './PostCard.tsx'
import { PostData, Post as PostTypes } from '../../helpers/interfaces.js'
import { getAllPosts, getPostsByUserID } from '../../api'
import { useParams } from 'react-router'
import EmptyPost from './EmptyPost'

const Post = ({ variant }: { variant: string }) => {
  const [posts, setPosts] = useState<PostTypes[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const params = useParams()

  const fetchPosts = async () => {
    setLoading(true)
    if (variant === 'all') {
      const res: PostTypes[] = await getAllPosts()
      const sortedArray: PostTypes[] = res.sort(
        (a: any, b: any) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      )

      setPosts(sortedArray)
      setLoading(false)
    }

    if (variant === 'profile') {
      const userId = params['user_id']
      if (userId) {
        const res: PostTypes[] = await getPostsByUserID(userId)
        const sortedArray: PostTypes[] = res.sort(
          (a: any, b: any) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        )
        setPosts(sortedArray)
        setLoading(false)
      }
    }
  }

  useEffect(() => {
    fetchPosts()
  }, [params])

  return (
    <div>
      <h2 className='mb-4 text-base font-medium leading-6 tracking-normal'>Recent Posts</h2>
      {loading ? (
        <>Loading</>
      ) : posts.length > 0 ? (
        posts.map((post, index) => <PostCard key={`${post.title}${index}`} post={post} />)
      ) : (
        <EmptyPost />
      )}
    </div>
  )
}

export default Post
