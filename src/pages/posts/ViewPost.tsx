import React, { useEffect, useState } from 'react'
import { NavMenuLayout } from '../../components'
import PostCard from '../../components/Posts/PostCard.tsx'
import { useParams, useNavigate } from 'react-router-dom'
import { Post } from '../../helpers'
import { getPostByID } from '../../api'

const ViewPost = () => {
  const { post_id } = useParams()
  const navigate = useNavigate()
  const [post, setPost] = useState<Post>()

  const getPostHandler = async () => {
    if (!post_id) return navigate('/')

    const res = await getPostByID(post_id)
    setPost(res)
  }

  useEffect(() => {
    getPostHandler()
  }, [post_id])

  return (
    <NavMenuLayout>
      <div className='pt-8 px-4 mx-auto max-w-[840px] min-h-screen mt-20'>
        <PostCard viewMode post={post} />
      </div>
    </NavMenuLayout>
  )
}

export default ViewPost
