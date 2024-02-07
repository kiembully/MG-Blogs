import React from 'react'
import { NavMenuLayout, PageLayout } from '../../components'
import PostFormField from '../../components/Posts/PostFormField'

const CreatePost = () => {
  return (
    <PageLayout>
      <NavMenuLayout>
        <PostFormField variant='create' />
      </NavMenuLayout>
    </PageLayout>
  )
}

export default CreatePost
