import React, { useEffect, useState } from 'react'
import Button from '../Button'
import { useNavigate } from 'react-router-dom'
import { userData } from '../../hooks'
import { useParams } from 'react-router-dom'
import { User } from '../../helpers'
import { getUserByID } from '../../api'

const ProfileCard = () => {
  const navigate = useNavigate()
  const { user_id } = useParams()
  const [user, setUser] = useState<User>()

  const getUserInfo = async () => {
    if (!user_id) return navigate('/')
    if (userData()?.id.toString() === user_id) {
      setUser(userData())
    } else {
      const res = await getUserByID(user_id)
      setUser(res)
    }
  }

  useEffect(() => {
    getUserInfo()
  }, [user_id])

  return (
    <div className='flex flex-col min-h-[12rem] bg-white rounded-md w-full overflow-hidden'>
      <div className='min-h-[8rem] bg-indigo-500 w-full'></div>
      <div className='size-[4.5rem] rounded-full bg-neutral-100 border-[4px] border-[white] mt-[-2.25rem] ml-[1.5rem] overflow-hidden'></div>
      <div className='flex flex-col px-[1.5rem] py-[1rem] gap-2'>
        <p>{user?.name}</p>
        <Button fullWidth onClick={() => navigate('/post/create-post')}>
          Create Post
        </Button>
      </div>
    </div>
  )
}

export default ProfileCard
