import React from 'react'
import { NavMenuLayout } from '../../components'
import PostFormField from '../../components/Posts/PostFormField'

const CreatePost = () => {
  return (
    <NavMenuLayout>
      <PostFormField variant='create' />
    </NavMenuLayout>
  )
}

export default CreatePost
