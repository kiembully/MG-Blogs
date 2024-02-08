import React, { useEffect, useState } from 'react'
import Button from '../Button'
import { useNavigate } from 'react-router-dom'
import { userData } from '../../hooks'
import { useParams } from 'react-router-dom'
import { User } from '../../helpers'
import { getUserByID } from '../../api'
import Modal from '../Modal'

const ProfileCard = () => {
  const navigate = useNavigate()
  const { user_id } = useParams()
  const [user, setUser] = useState<User>()
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const getUserInfo = async () => {
    if (!user_id) return navigate('/')
    if (userData()?.id.toString() === user_id) {
      setUser(userData())
    } else {
      const res = await getUserByID(user_id)
      setUser(res)
    }
  }

  const handleCreatePost = () => {
    if (!userData()) {
      setIsOpen(true)
    } else {
      navigate('/post/create-post')
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
        <Button fullWidth onClick={() => handleCreatePost()}>
          Create Post
        </Button>
      </div>
      <Modal title='Confirmation' isOpen={isOpen} setClose={() => setIsOpen(!isOpen)}>
        <div className='p-8 border-t border-neutral-200'>
          <p>You must log in to interact with other users.</p>
        </div>
        <div className='flex items-center flex-row-reverse gap-2 py-4 px-8 border-t border-neutral-200'>
          <Button type='button' size='sm' onClick={() => navigate('/login')}>
            Login
          </Button>
          <Button type='button' size='sm' variant='outlined' onClick={() => setIsOpen(false)}>
            Cancel
          </Button>
        </div>
      </Modal>
    </div>
  )
}

export default ProfileCard
