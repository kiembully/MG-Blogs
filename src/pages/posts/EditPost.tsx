import React from 'react'
import { NavMenuLayout } from '../../components'
import PostFormField from '../../components/Posts/PostFormField'

const EditPost = () => {
  return (
    <NavMenuLayout>
      <PostFormField variant='update' />
    </NavMenuLayout>
  )
}

export default EditPost
