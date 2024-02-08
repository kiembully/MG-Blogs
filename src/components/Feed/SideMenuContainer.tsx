import React, { FC, useEffect, useState } from 'react'
import { Options, Languages, Footer } from './index'
import Tags from '../Tags'
import Button from '../Button'
import ProfileCard from '../Profile/ProfileCard'
import { useNavigate } from 'react-router-dom'

type Props = {
  variant?: 'feed' | 'profile'
  isUserActive?: boolean // profile states
}

const SideMenuContainer: FC<Props> = ({ variant, isUserActive }) => {
  const navigate = useNavigate()
  const [isFixed, setIsFixed] = useState<boolean>(false)
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const catchPoint = variant === 'feed' ? 230 : 40

      if (scrollPosition >= catchPoint) {
        setIsFixed(true)
      } else {
        setIsFixed(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className={`${isFixed && 'fixed top-24 w-full max-w-[238px] z-2'}`}>
      {variant === 'feed' ? (
        <>
          {isUserActive && (
            <Button onClick={() => navigate('/post/create-post')} fullWidth>
              Create Post
            </Button>
          )}
          <Tags />
          <Options />
          <Languages />
          <Footer />
        </>
      ) : (
        <ProfileCard />
      )}
    </div>
  )
}

export default SideMenuContainer
