import React, { useState } from 'react'
import { AuthenticationPagesLayout } from '../components'
import { SignUpCredentials } from '../helpers'
import TextField from '../components/TextField'
import Button from '../components/Button'
import { signup } from '../api'

const SignUp: React.FC = () => {
  const [user, setUser] = useState<SignUpCredentials>({
    fullname: '',
    email: '',
    username: '',
    password: ''
  })

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setUser((prevState) => ({ ...prevState, [name]: value }))
  }

  const onSubmit = async () => {
    const res = await signup({
      fullname: user.fullname,
      email: user.email,
      username: user.username,
      password: user.password
    })

    window.alert(res.message)
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
            name='fullname'
            value={user.fullname}
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
