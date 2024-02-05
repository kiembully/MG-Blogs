import React, { FC } from 'react'
import { Options, Languages, Footer } from './index'
import Tags from '../Tags'
import Button from '../button'
import ProfileCard from '../Profile/ProfileCard'
import { useNavigate } from 'react-router-dom'

type Props = {
  variant?: 'feed' | 'profile'
  isUserActive?: boolean // profile states
}

const SideMenuContainer: FC<Props> = ({ variant, isUserActive }) => {
  const navigate = useNavigate()

  return (
    <>
      {variant === 'feed' ? (
        <>
          {isUserActive && (
            <Button onClick={() => navigate('/post/1/create-post')} fullWidth>
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
    </>
  )
}

export default SideMenuContainer
