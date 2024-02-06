import React from 'react'
import { NavMenuLayout, PageLayout } from '../components'
import { ProfileLayout } from '../components/Profile'

const Profile = () => {
  return (
    <PageLayout>
      <NavMenuLayout>
        <ProfileLayout />
      </NavMenuLayout>
    </PageLayout>
  )
}

export default Profile
