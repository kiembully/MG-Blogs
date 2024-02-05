import React, { FC } from 'react'
import { Options, Languages, Footer } from './index'
import Tags from '../Tags'
import Button from '../button'
import ProfileCard from '../Profile/ProfileCard'

type Props = {
  variant?: 'feed' | 'profile' // profile states
}

const SideMenuContainer: FC<Props> = ({ variant }) => {
  return (
    <>
      {variant === 'feed' ? (
        <>
          <Button fullWidth>Create Post</Button>
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
