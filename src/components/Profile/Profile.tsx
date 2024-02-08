import React, { useEffect, useState } from 'react'
import Post from '../Posts'
import { SideMenuContainer } from '../Feed'
import { Post as PostTypes } from '../../helpers/interfaces.js'
import { useParams } from 'react-router-dom'
import { getPostsByUserID } from '../../api'
import EmptyPost from '../Posts/EmptyPost'

const ProfileLayout = () => {
  const [posts, setPosts] = useState<PostTypes[]>([])
  const [localPosts, setLocalPosts] = useState<PostTypes[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const params = useParams()

  const fetchPosts = async () => {
    setLoading(true)
    const userId = params['user_id']
    if (userId) {
      const res: PostTypes[] = await getPostsByUserID(userId)
      setPosts(res)
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchPosts()
  }, [params])

  useEffect(() => {
    setLocalPosts(posts)
  }, [posts])

  return (
    <div className='min-h-screen container pt-8 mx-auto max-w-[840px] mt-20 px-4 md:px-8'>
      <div className='mt-8 grid grid-cols-12 gap-8'>
        <div className='col-span-12 md:col-span-8'>{loading ? <>Loading</> : posts.length > 0 ? <Post posts={localPosts} /> : <EmptyPost />}</div>
        <div className='col-span-4 hidden md:block'>
          <SideMenuContainer variant='profile' />
        </div>
      </div>
    </div>
  )
}

export default ProfileLayout
