import React, { FC, useState } from 'react'
import { Options, Languages, Footer } from './index'
import Tags from '../Tags'
import Button from '../Button'
import ProfileCard from '../Profile/ProfileCard'
import { useNavigate } from 'react-router-dom'
import Modal from '../Modal'

type Props = {
  variant?: 'feed' | 'profile'
  isUserActive?: boolean // profile states
}

const SideMenuContainer: FC<Props> = ({ variant, isUserActive }) => {
  const navigate = useNavigate()

  const [isOpen, setIsOpen] = useState<boolean>(false)

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
          <Button onClick={() => setIsOpen(!isOpen)}>Testing modal</Button>
          <Modal isOpen={isOpen} setClose={() => setIsOpen(!isOpen)}>
            wasup
          </Modal>
        </>
      ) : (
        <ProfileCard />
      )}
    </>
  )
}

export default SideMenuContainer
