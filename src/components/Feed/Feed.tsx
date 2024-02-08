import React, { FC, useEffect, useState } from 'react'
import CommonDivider from '../CommonDivider'
import Post from '../Posts'
import Trending from './Trending'
import { SideMenuContainer } from './index'
import { Post as PostTypes } from '../../helpers/interfaces.js'
import { useParams } from 'react-router-dom'
import { getAllPosts } from '../../api'
import EmptyPost from '../Posts/EmptyPost'

const Feed: FC = () => {
  const [isUserActive, setIsUserActive] = useState(false)
  const [posts, setPosts] = useState<PostTypes[]>([])
  const [localPosts, setLocalPosts] = useState<PostTypes[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const params = useParams()

  const fetchPosts = async () => {
    setLoading(true)
    const res: PostTypes[] = await getAllPosts()

    setPosts(res)
    setLoading(false)
  }

  const filterObjectsByTag = (objects: PostTypes[], targetTag: string) => {
    return objects.filter((obj) => obj.tags.includes(targetTag))
  }

  useEffect(() => {
    fetchPosts()
  }, [params])

  useEffect(() => {
    const tag = params['tag-id']
    if (tag) {
      setLocalPosts(filterObjectsByTag(posts, `@${tag}`))
    } else {
      setLocalPosts(posts)
    }
  }, [posts])

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
        <div className='col-span-12 md:col-span-8'>{loading ? <>Loading</> : posts.length > 0 ? <Post posts={localPosts} /> : <EmptyPost />}</div>
        <div className='col-span-4 hidden md:block relative'>
          <SideMenuContainer variant='feed' isUserActive={isUserActive} />
        </div>
      </div>
    </div>
  )
}

export default Feed
