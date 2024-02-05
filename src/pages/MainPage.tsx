import React from 'react'
// import NavMenu from '../components/NavMenu'
// import TextField from '../components/textfield'
import { Feed, PageLayout, NavMenuLayout } from '../components'

const MainPage: React.FC = () => {
  return (
    <PageLayout>
      <NavMenuLayout>
        <Feed />
      </NavMenuLayout>
    </PageLayout>
  )
}

export default MainPage
