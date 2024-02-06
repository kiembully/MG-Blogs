import React, { useEffect } from 'react'
import { PageLayout } from './layouts'
import { useNavigate } from 'react-router'

type ChildrenProps = {
  children: JSX.Element | JSX.Element[]
}

const AuthenticationPagesLayout: React.FC<ChildrenProps> = ({ children }: ChildrenProps) => {
  const navigate = useNavigate()
  // const restrictedClientRoute = ['/signin', '/login']

  useEffect(() => {
    const data = localStorage.getItem('user')
    if (data) {
      navigate('/')
    }
  }, [])

  return (
    <PageLayout>
      <div className='relative h-screen w-screen flex flex-row'>
        <img
          src='/assets/mg-background.png'
          alt='mg-background'
          className='relative h-full w-1/2 aspect-auto'
        />
        <div className='relative h-full w-1/2 bg-white flex flex-col items-center justify-center'>
          {children}
        </div>
      </div>
    </PageLayout>
  )
}

export default AuthenticationPagesLayout
