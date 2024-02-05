import React, { useState } from 'react'
import { AuthenticationPagesLayout } from '../components'
import { SignUpCredentials } from '../helpers'
import TextField from '../components/textfield'
import Button from '../components/button'

const SignUp: React.FC = () => {
  const [user, setUser] = useState<SignUpCredentials>({
    name: '',
    email: '',
    username: '',
    password: ''
  })

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setUser((prevState) => ({ ...prevState, [name]: value }))
  }

  const onSubmit = () => {
    console.log({ user })
  }

  return (
    <AuthenticationPagesLayout>
      <span className='absolute top-6 right-8'>
        Already a member?{' '}
        <a href='/login' className='underline text-indigo-500 underline-offset-2'>
          Sign in
        </a>
      </span>
      <form className='w-72 h-screen flex items-center justify-center'>
        <div className='relative my-autoflex flex-col item-start justify-start'>
          <p className='text-2xl font-medium'>Sign Up</p>
          <TextField
            label='Full name'
            type='text'
            name='name'
            value={user.name}
            onChange={onChange}
            fullWidth
            classNames='mt-4'
          />
          <TextField
            label='Email'
            type='text'
            name='email'
            value={user.email}
            onChange={onChange}
            fullWidth
            classNames='mt-4'
          />
          <TextField
            label='Username'
            type='text'
            name='username'
            value={user.username}
            onChange={onChange}
            fullWidth
            classNames='mt-4'
          />
          <TextField
            label='Password'
            type='password'
            name='password'
            value={user.password}
            onChange={onChange}
            fullWidth
            classNames='mt-4'
          />
          <span className='text-sm mt-6'>
            By continuing you are setting up a Mashup Garage Blog account and agree to our{' '}
            <a href='#' className='underline text-indigo-500 underline-offset-2'>
              User Agreement
            </a>{' '}
            and{' '}
            <a href='#' className='underline text-indigo-500 underline-offset-2'>
              Privacy Policy
            </a>
          </span>
          <Button classNames='mt-6' fullWidth onClick={() => onSubmit()}>
            Sign up
          </Button>
        </div>
      </form>
    </AuthenticationPagesLayout>
  )
}

export default SignUp
