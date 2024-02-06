import React from 'react'
import NavMenu from '../NavMenu'

type ChildrenType = {
  children: JSX.Element | JSX.Element[]
}

const NavMenuLayout: React.FC<ChildrenType> = ({ children }: ChildrenType) => {
  return (
    <div className='relative h-full w-full bg-feed'>
      {/* can enclose the navmenu and its children to a context provider */}
      {/* basically making every page that has a navMenu component has a shared context with navMenu */}
      <NavMenu />
      {children}
      {/* can enclose the navmenu and its children to a context provider */}
    </div>
  )
}

export default NavMenuLayout
