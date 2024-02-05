import React from 'react'
import { Options, Languages, Footer } from './index'
import Tags from '../Tags'
import Button from '../button'

const SideMenuContainer: React.FC = () => {
  return (
    <>
      <Button fullWidth>Create Post</Button>
      <Tags />
      <Options />
      <Languages />
      <Footer />
    </>
  )
}

export default SideMenuContainer
