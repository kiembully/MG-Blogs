import React, { useState } from 'react'
import { AuthenticationPagesLayout } from '../components'
import { SignUpCredentials } from '../helpers'
import TextField from '../components/TextField'
import Button from '../components/Button'
import { signup } from '../api'
import CommonSpinner from '../components/CommonSpinner'
import { useNavigate } from 'react-router'

const SignUp: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<boolean | undefined>(false)
  const [resMessage, setResMessage] = useState<string>('')
  const [user, setUser] = useState<SignUpCredentials>({
    fullname: '',
    email: '',
    username: '',
    password: ''
  })
  const navigate = useNavigate()

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setUser((prevState) => ({ ...prevState, [name]: value }))
  }

  const onSubmit = async () => {
    setLoading(true)
    await signup({
      fullname: user.fullname,
      email: user.email,
      username: user.username,
      password: user.password
    }).then((res) => {
      setLoading(false)
      setError(res.error)
      setResMessage(res.message)

      if (!res.error) {
        navigate('/')
      }
    })

    // window.alert(res.message)
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
            disabled={loading}
          />
          <TextField
            label='Email'
            type='text'
            name='email'
            value={user.email}
            onChange={onChange}
            fullWidth
            classNames='mt-4'
            disabled={loading}
          />
          <TextField
            label='Username'
            type='text'
            name='username'
            value={user.username}
            onChange={onChange}
            fullWidth
            classNames='mt-4'
            disabled={loading}
          />
          <TextField
            label='Password'
            type='password'
            name='password'
            value={user.password}
            onChange={onChange}
            fullWidth
            classNames='mt-4'
            disabled={loading}
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
          <Button classNames='mt-6' fullWidth onClick={() => onSubmit()} disabled={loading}>
            {loading ? <CommonSpinner /> : 'Sign up'}
          </Button>
          <p className={`text-center text-xs ${error && 'text-[red]'}`}>{resMessage}</p>
        </div>
      </form>
    </AuthenticationPagesLayout>
  )
}

export default SignUp
