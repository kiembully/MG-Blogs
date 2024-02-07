import React, { useEffect, useState } from 'react'
import Modal from '../Modal'
import Button from '../Button'
import { checkTokenExpiration } from '../../helpers/auth'
import { useNavigate } from 'react-router-dom'
import { userData, authorizationData } from '../../hooks'

type PageLayoutProps = {
  is404?: boolean
  children: JSX.Element
}

const PageLayout: React.FC<PageLayoutProps> = ({ is404, children }: PageLayoutProps) => {
  const navigate = useNavigate()
  useEffect(() => {
    document.title = is404 ? '404 not found' : 'MG Blogs'
  }, [])

  const [isOpen, setIsOpen] = useState<boolean>(false)
  useEffect(() => {
    const auth = authorizationData()
    const user = userData()

    if (auth && user) {
      if (auth) {
        if (checkTokenExpiration(auth)) {
          setIsOpen(true)
        }
      }
    } else {
      navigate('/login')
    }

    if (auth) {
      if (checkTokenExpiration(auth)) {
        setIsOpen(true)
      }
    }
  }, [])

  const logoutUser = () => {
    localStorage.removeItem('authorization')
    localStorage.removeItem('user')
    setIsOpen(false)
    navigate('/login')
  }

  return (
    <div>
      <Modal isOpen={isOpen} setClose={() => setIsOpen(!isOpen)}>
        <div className='flex flex-col items-center justify-center'>
          <h1 className='text-xl mb-6'>Token is expired! Please logout.</h1>
          <Button variant='default' onClick={() => logoutUser()}>
            Logout
          </Button>
        </div>
      </Modal>
      {children}
    </div>
  )
}

export default PageLayout
