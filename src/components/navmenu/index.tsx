import React, { useEffect, useState } from 'react'

const NavMenu = () => {
  const [isUserActive, setUserActive] = useState<boolean>(false)
  useEffect(() => {
    // apply logic here
    const active = false
    setUserActive(active)
  }, [])

  const renderActiveUserMenu = (): JSX.Element => {
    return (
      <>
        <button type='button' className='h-10 w-10 rounded-md bg-neutral-100 flex items-center justify-center lg:hidden'>
          <img alt='search icon' src='./icons/search-icon.png' className='h-md' />
        </button>
        <button type='button' className='h-10 w-10 rounded-md bg-neutral-100 flex items-center justify-center'>
          <img alt='add icon' src='/icons/add-icon.png' />
        </button>
        <span className='h-10 w-[1px] bg-neutral-200'></span>
        <div className='flex justify-center items-center gap-4'>
          <img alt='avatar icon' src='/icons/default-avatar.png'></img>
          <p>Kirby Borromeo</p>
        </div>
        <button>
          <img alt='toggle icon' src='/icons/caret-down-icon.png' />
        </button>
      </>
    )
  }

  const renderDefaultUserMenu = (): JSX.Element => {
    return (
      <>
        <a href='/login' className='rounded-md bg-white px-4 py-3 text-primary-500 text-lg leading-[normal]'>
          Login
        </a>
        <a href='/signup' className='rounded-md bg-primary-500 px-4 py-3 text-[white] text-lg leading-[normal]'>
          Signup
        </a>
      </>
    )
  }

  return (
    <div className='bg-white fixed w-full top-0 left-0 right-0'>
      <div className='flex gap-4 min-h-20 justify-center items-center w-full mx-auto max-w-[1440px] px-8 lg:px-16'>
        <div className='flex gap-4'>
          <a className='h-8 w-8 rounded-full border-4 border-solid border-orange' href='/'>
            {/* icon here  */}
          </a>
          <p className='neutral-800'>
            <span className='text-lg text-[tail]'>MASHUP</span>
            garage
            <span>Blogs</span>
          </p>
        </div>
        <div className='flex flex-auto px-10 justify-center'>
          <div className='hidden items-center max-w-[600px] h-12 bg-neutral-100 w-full px-4 rounded-md flex lg:flex'>
            <img alt='search icon' src='./icons/search-icon.png' className='h-md' />
            <input className='bg-[transparent] w-full outline-none px-3' type='text' placeholder='Search Post' />
          </div>
        </div>
        <div className='flex gap-4'>{isUserActive ? renderActiveUserMenu() : renderDefaultUserMenu()}</div>
      </div>
    </div>
  )
}

export default NavMenu
