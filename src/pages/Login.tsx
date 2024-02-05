import { useState } from 'react'
import { PageLayout } from '../components'
import TextField from '../components/textfield'
import Button from '../components/button'
import { AuthenticationPagesLayout } from '../components'

type LoginTypes = {
  username: string
  password: string
}

const Login: React.FC = () => {
  const [credentials, setCredentials] = useState<LoginTypes>({
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
        <p className='text-sm mt-6'>Username</p>
        <input
          type='text'
          value={credentials.username}
          name='username'
          onChange={onChange}
          className='h-10 w-full mt-2 bg-neutral-100 outline-none text-sm pl-4 text-black/75'
        />
        <div className='relative h-full w-1/2 bg-white flex items-center justify-center'>
          <span className='absolute top-6 right-8 text-sm'>
            New to Mashup Garage Blogs?{' '}
            <a href='/signup' className='underline text-primary-500 underline-offset-2'>
              Sign up
            </a>
          </span>
          <form className='relative w-72 flex flex-col item-start justify-start mb-28'>
            <p className='text-xl'>Login</p>
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
            <a href='#' className='text-xs text-primary-500 mt-2'>
              Forgot your password?
            </a>
            <Button classNames='mt-8' onClick={() => onSubmit()} fullWidth>
              Login
            </Button>
          </form>
        </div>
      </form>
    </AuthenticationPagesLayout>
  )
}

export default Login
