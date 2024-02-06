import React, { FC, useEffect, useState } from 'react'
import Post from '../Posts'
import { SideMenuContainer } from '../Feed'
import EmptyPost from '../Posts/EmptyPost'
import { useParams } from 'react-router-dom'
import { User } from '../../helpers'

type Props = {
  variant?: 'empty' | 'own' | 'else' // profile states
}

const ProfileLayout: FC<Props> = () => {
  const { user_id } = useParams()
  const [variant, setVariant] = useState<boolean>(false)

  useEffect(() => {
    const data = localStorage.getItem('user')
    if (data) {
      setVariant(JSON.parse(data).id === user_id)
    }
  }, [])

  const renderPosts = (val: boolean) => {
    if (val) {
      return <Post />
    } else {
      return <EmptyPost />
    }
  }

  return (
    <div className='min-h-screen container pt-8 mx-auto max-w-[840px]'>
      <div className='mt-8 grid grid-cols-12 gap-8'>
        <div className='col-span-8'>{renderPosts(variant)}</div>
        <div className='col-span-4'>
          <SideMenuContainer variant='profile' />
        </div>
      </div>
    </div>
  )
}

export default ProfileLayout
