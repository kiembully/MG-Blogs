import React from 'react'
import Button from '../Button'
import { useNavigate } from 'react-router-dom'

const ProfileCard = () => {
  const navigate = useNavigate()

  return (
    <div className='flex flex-col min-h-[12rem] bg-white rounded-md w-full overflow-hidden'>
      <div className='min-h-[8rem] bg-indigo-500 w-full'></div>
      <div className='size-[4.5rem] rounded-full bg-neutral-100 border border-[4px] border-[white] mt-[-2.25rem] ml-[1.5rem]'></div>
      <div className='flex flex-col px-[1.5rem] py-[1rem] gap-2'>
        <p>Kirby Borromeo</p>
        <Button fullWidth onClick={() => navigate('/post/1/create-post')}>
          Create Post
        </Button>
      </div>
    </div>
  )
}

export default ProfileCard
