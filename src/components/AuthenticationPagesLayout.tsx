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
      <div className='relative h-screen w-screen flex flex-row '>
        <div className='h-full w-0 sm:w-1/2 bg-[#17181C]'>
          <img height='24px' src='/assets/mg-logo-2.svg' alt='mg-logo' className='absolute top-10 left-10 z-10 hidden sm:block' />
          <img height='24px' src='/assets/mg-logo.svg' alt='mg-logo' className='w-[45px] absolute top-4 left-4 z-10 block sm:hidden' />
          <img width='60%' src='/assets/mg-logo-big.svg' alt='mg-logo' className='min-w-[500px] max-w-[1000px] absolute -bottom-48 -left-48 z-10 hidden sm:block' />
          <img width='60%' src='/assets/mg-logo.svg' alt='mg-logo' className='min-w-[500px] max-w-[1000px] absolute -bottom-48 -left-48 z-10 block sm:hidden opacity-[0.4]' />
        </div>
        <div className='relative h-full w-full md:w-1/2 sm:bg-transparent flex flex-col items-center justify-center py-4 md:py-8 z-20'>{children}</div>
      </div>
    </PageLayout>
  )
}

export default AuthenticationPagesLayout
