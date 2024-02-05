import React, { useState } from 'react'
import TextField from '../components/textfield'
import Button from '../components/button'
import { AuthenticationPagesLayout } from '../components'
import { LoginCredentials } from '../helpers'

const Login: React.FC = () => {
  const [credentials, setCredentials] = useState<LoginCredentials>({
    username: '',
    password: ''
  })

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setCredentials((prevState) => ({ ...prevState, [name]: value }))
  }

  const onSubmit = () => {
    console.log({ credentials })
  }

  return (
    <AuthenticationPagesLayout>
      <span className='absolute top-6 right-8'>
        New to Mashup Garage Blogs?{' '}
        <a href='/signup' className='underline text-primary-500 underline-offset-2'>
          Sign up
        </a>
      </span>
      <form className='relative w-72 flex flex-col item-start justify-start mb-28'>
        <p className='text-2xl font-medium'>Login</p>
        <TextField
          label='Username'
          type='text'
          value={credentials.username}
          name='username'
          fullWidth
          onChange={onChange}
          classNames='mt-2'
        />
        <TextField
          label='Password'
          type='password'
          value={credentials.password}
          name='password'
          fullWidth
          onChange={onChange}
          classNames='mt-2'
        />
        <a
          href={`/forgot-password?profileID=${'12321312qeqw'}`}
          className='text-xs text-primary-500 mt-2'
        >
          Forgot your password?
        </a>
        <Button classNames='mt-8' onClick={() => onSubmit()} fullWidth>
          Login
        </Button>
      </form>
    </AuthenticationPagesLayout>
  )
}

export default Login
