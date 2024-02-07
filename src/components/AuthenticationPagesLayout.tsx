import React, { useEffect } from 'react'
import { PageLayout } from './layouts'
import { useNavigate } from 'react-router'
import { userData, authorizationData } from '../hooks'

type ChildrenProps = {
  children: JSX.Element | JSX.Element[]
}

const AuthenticationPagesLayout: React.FC<ChildrenProps> = ({ children }: ChildrenProps) => {
  const navigate = useNavigate()
  // const restrictedClientRoute = ['/signin', '/login']

  useEffect(() => {
    const data = userData()
    const auth = authorizationData()
    if (data && auth) {
      navigate('/')
    }
  }, [])

  return (
    <PageLayout>
      <div className='relative h-screen w-screen flex flex-row'>
        <img src='/assets/mg-background.png' alt='mg-background' className='relative h-full w-1/2 aspect-auto hidden md:flex' />
        <div className='relative h-full w-full md:w-1/2 bg-white flex flex-col items-center justify-center py-4 md:py-8'>{children}</div>
      </div>
    </PageLayout>
  )
}

export default AuthenticationPagesLayout
