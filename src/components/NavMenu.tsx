import React, { useEffect, useState } from 'react'
import { User } from '../helpers'
import { ProfileOptionModal } from './index'
import { useNavigate } from 'react-router-dom'

const NavMenu: React.FC = () => {
  const [user, setUser] = useState<User | null>()
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false)
  const [isScrolled, setIsScrolled] = useState<boolean>(false)
  const navigate = useNavigate()

  useEffect(() => {
    const data = localStorage.getItem('user')
    if (data) {
      setUser(JSON.parse(data))
    }
  }, [])

  useEffect(() => {
    const data = localStorage.getItem('user')
    if (data) {
      setUser(JSON.parse(data))
    }
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const renderActiveUserMenu = (): JSX.Element => {
    return (
      <>
        <button
          type='button'
          className='h-12 w-12 rounded-md bg-neutral-100 flex items-center justify-center lg:hidden'
        >
          <img alt='search icon' src='/icons/search-icon.png' className='h-md' />
        </button>
        <button
          type='button'
          className='h-12 w-12 rounded-md bg-neutral-100 flex items-center justify-center'
          onClick={() => navigate('/post/create-post')}
        >
          <img alt='add icon' src='/icons/add-icon.png' />
        </button>
        <span className='h-12 w-[1px] bg-neutral-200'></span>
        <div
          className='relative flex flex-row gap-4 px-3 py-2 rounded cursor-pointer hover:bg-neutral-100'
          onClick={() => setIsDropdownOpen((prevState) => !prevState)}
        >
          <div className='flex justify-center items-center gap-4'>
            <img alt='avatar icon' src='/icons/default-avatar.png'></img>
            <p className='font-medium text-[1rem]'>{user?.name}</p>
          </div>
          <button>
            <img alt='toggle icon' src='/icons/caret-down-icon.png' />
          </button>
          {isDropdownOpen && <ProfileOptionModal user={user!} />}
        </div>
      </>
    )
  }

  const renderDefaultUserMenu = (): JSX.Element => {
    return (
      <>
        <a
          href='/login'
          className='rounded-md bg-white px-4 py-4 text-primary-500 text-lg leading-none'
        >
          Login
        </a>
        <a
          href='/signup'
          className='rounded-md bg-primary-500 px-4 py-4 text-white text-lg leading-none'
        >
          Signup
        </a>
      </>
    )
  }

  return (
    <div
      className={`bg-white px-0 px-8 md:px-16 fixed w-full top-0 z-10 transition-all duration-300 ${
        isScrolled ? 'shadow-lg' : ''
      }`}
    >
      <div className='flex gap-4 min-h-20 justify-center items-center w-full mx-auto max-w-[1440px] px-4 lg:px-8'>
        <div className='flex gap-2 items-center'>
          <img
            height='24px'
            src='/icons/mg-logo.svg'
            alt='mg-logo'
            className='cursor-pointer hidden md:flex'
            onClick={() => navigate('/')}
          />
          <img
            height='24px'
            src='/assets/mg-logo.svg'
            alt='mg-logo'
            className='cursor-pointer flex md:hidden'
            onClick={() => navigate('/')}
          />
          <span className='neutral-800 text-25 font-semibold leading-25 tracking-normal'>
            {' '}
            Blogs
          </span>
        </div>
        <div className='flex flex-auto px-12 justify-center'>
          <div className='hidden items-center max-w-[600px] h-12 bg-neutral-100 w-full px-4 rounded-md flex lg:flex'>
            <img alt='search icon' src='/icons/search-icon.png' className='h-md' />
            <input
              className='bg-[transparent] w-full outline-none px-3'
              type='text'
              placeholder='Search Post'
            />
          </div>
        </div>
        <div className='flex gap-4'>{user ? renderActiveUserMenu() : renderDefaultUserMenu()}</div>
      </div>
    </div>
  )
}

export default NavMenu
