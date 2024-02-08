import React from 'react'
import { PageLayout, NavMenuLayout } from '../../components'
import PostFormField from '../../components/Posts/PostFormField'

const EditPost = () => {
  return (
    <PageLayout>
      <NavMenuLayout>
        <PostFormField variant='update' />
      </NavMenuLayout>
    </PageLayout>
  )
}

export default EditPost
