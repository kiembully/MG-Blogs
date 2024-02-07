import React, { useEffect, useState } from 'react'
import { AuthenticationPagesLayout } from '../components'
import { useSearchParams } from 'react-router-dom'

const ForgotPassword: React.FC = () => {
  const profileID = useSearchParams()[0].get('profileID')
  const [, setProfile] = useState('') //profileTypes

  useEffect(() => {
    //get the userinfo using the ID fromt he searchParams
    setProfile('')
  }, [profileID])

  return (
    <AuthenticationPagesLayout>
      <span className='absolute top-6 right-8'>
        Remembered your account?{' '}
        <a href='/login' className='underline text-primary-500 underline-offset-2'>
          Sign in
        </a>
      </span>
      <form className='relative w-96 flex flex-col item-start justify-start mb-28'>
        <p className='text-2xl font-medium'>Forgot password?</p>
        <p className='mt-4'>Enter the email address you used when you joined and we&apos;ll send you instructions to reset your password.</p>
        <p className='mt-8'>For security purposes, we do NOT store your password. So rest assured that we will never send your password via email.</p>
        <p className='mt-8 font-medium'>Email</p>
        <input type='email' className='mt-4 h-12 w-full bg-neutral-100 outline-none pl-4' />
        <button type='button' className='mt-8 h-10 w-full bg-primary-500 text-white'>
          Send Reset Instructions
        </button>
        <a href='#' className='mt-4 mx-auto text-primary-500 underline underline-offset-2'>
          Didn&apos;t receive confirmation instructions?
        </a>
      </form>
    </AuthenticationPagesLayout>
  )
}

export default ForgotPassword
