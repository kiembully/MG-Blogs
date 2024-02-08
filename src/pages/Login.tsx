import React, { useState } from 'react'
import TextField from '../components/TextField'
import Button from '../components/Button'
import { AuthenticationPagesLayout } from '../components'
import { LoginCredentials } from '../helpers'
import { signin } from '../api'
import { useNavigate } from 'react-router-dom'
import CommonSpinner from '../components/CommonSpinner'

const Login: React.FC = () => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<boolean>(false)
  const [resMessage, setResMessage] = useState<string>('')
  const [credentials, setCredentials] = useState<LoginCredentials>({
    email: '',
    password: ''
  })

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setCredentials((prevState) => ({ ...prevState, [name]: value }))
  }

  const onSubmit = async () => {
    setLoading(true)
    const res = await signin({
      email: credentials.email,
      password: credentials.password
    })

    if (res.code === 200) {
      setLoading(false)
      setError(false)
      setResMessage('Success!')
      navigate('/')
    } else {
      setLoading(false)
      setError(true)
      setResMessage('Unable to login user. try again!')
    }
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
        <TextField label='Username' type='text' value={credentials.email} name='email' fullWidth onChange={onChange} classNames='mt-2' disabled={loading} />
        <TextField label='Password' type='password' value={credentials.password} name='password' fullWidth onChange={onChange} classNames='mt-2' disabled={loading} />
        <a href={`/forgot-password?profileID=${'12321312qeqw'}`} className='text-xs text-primary-500 mt-2'>
          Forgot your password?
        </a>
        <Button classNames='mt-8' onClick={() => onSubmit()} disabled={loading} fullWidth>
          {loading ? <CommonSpinner /> : 'Login'}
        </Button>
        <p className={`text-center text-xs ${error && 'text-[red]'}`}>{resMessage}</p>
      </form>
    </AuthenticationPagesLayout>
  )
}

export default Login
