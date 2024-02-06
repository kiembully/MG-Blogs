import React from 'react'
import { User } from '../helpers'
import { useNavigate } from 'react-router-dom'

const ProfileOptionModal: React.FC<{ user: User }> = ({ user }) => {
  const navigate = useNavigate()

  const logoutHandler = () => {
    localStorage.removeItem('authorization')
    localStorage.removeItem('user')
    navigate('/login')
  }
  return (
    <div className='absolute top-15 right-0 w-full flex flex-col rounded bg-white py-2 border-[1px] border-[#111215]/10'>
      <div
        className='relative h-12 w-full hover:bg-primary-50 flex flex-row items-center justify-start gap-2'
        onClick={() => navigate(user?.id ? `/profile/${user.id}` : '#')}
      >
        <img src='' alt='' className='relative ml-2 h-4 w-4' />
        <p>My Profile</p>
      </div>
      <div
        className='relative h-12 w-full hover:bg-primary-50 flex flex-row items-center justify-start gap-2'
        onClick={() => logoutHandler()}
      >
        <img src='' alt='' className='relative ml-2 h-4 w-4' />
        <p>Logout</p>
      </div>
    </div>
  )
}

export default ProfileOptionModal
