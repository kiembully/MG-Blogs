import React, { useEffect, useState } from 'react'
import { User } from '../helpers'
import { ProfileOptionModal } from './index'
import { useNavigate } from 'react-router-dom'
import CommonSpinner from './CommonSpinner'
import Overlay from './Overlay/overlay'
// import { Post as PostTypes } from '../helpers/interfaces.js'
import { getAllPosts } from '../api'

interface PostTypes {
  id: number
  title: string
  body: string
  commentsCount: number
  votesCount: number
  tags: string[]
  votes: {
    upvotes: string[]
    downvotes: string[]
  }
  user: {
    id: number
    name: string
  }
  createdAt: string
  isDraft: boolean
}

const NavMenu: React.FC = () => {
  const [user, setUser] = useState<User | null>()
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false)
  const [isScrolled, setIsScrolled] = useState<boolean>(false)
  const navigate = useNavigate()

  const [isSearchVisible, setSearchVisibility] = useState<boolean>(false)
  const [searchFilter, setSearchFilter] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)
  const handleSearching = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchFilter(event.target.value)
  }

  const handleSearchFilter = (data: PostTypes[], searchTerm: string): PostTypes[] | null => {
    const lowercaseSearchTerm = searchTerm.toLowerCase()
    const filteredData = data.filter((post) => post.title.toLowerCase().includes(lowercaseSearchTerm) || post.body.toLowerCase().includes(lowercaseSearchTerm))
    return filteredData
  }

  useEffect(() => {
    fetchPosts()
    if (searchFilter.length > 0) {
      setSearchVisibility(true)
    } else {
      setSearchVisibility(false)
    }
  }, [searchFilter])

  const [posts, setPosts] = useState<PostTypes[]>([])
  const [filteredPosts, setFilteredPosts] = useState<PostTypes[] | null>([])
  const fetchPosts = async () => {
    setLoading(true)
    const res: PostTypes[] = await getAllPosts()

    setPosts(res)
    setLoading(false)
  }

  useEffect(() => {
    const data = handleSearchFilter(posts, searchFilter)
    setFilteredPosts(data)
  }, [posts])

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
        <button type='button' className='h-12 w-12 rounded-md bg-neutral-100 flex items-center justify-center lg:hidden'>
          <img alt='search icon' src='/icons/search-icon.png' className='h-md' />
        </button>
        <button type='button' className='h-12 w-12 rounded-md bg-neutral-100 flex items-center justify-center' onClick={() => navigate('/post/create-post')}>
          <img alt='add icon' src='/icons/add-icon.png' />
        </button>
        <span className='h-12 w-[1px] bg-neutral-200'></span>
        <div className='relative flex flex-row gap-4 px-3 py-2 rounded cursor-pointer hover:bg-neutral-100' onClick={() => setIsDropdownOpen((prevState) => !prevState)}>
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
        <a href='/login' className='rounded-md bg-white px-4 py-4 text-primary-500 text-lg leading-none'>
          Login
        </a>
        <a href='/signup' className='rounded-md bg-primary-500 px-4 py-4 text-white text-lg leading-none'>
          Signup
        </a>
      </>
    )
  }

  return (
    <div className={`bg-white px-0 px-8 md:px-16 fixed w-full top-0 z-10 transition-all duration-300 ${isScrolled ? 'shadow-lg' : ''}`}>
      <div className='flex gap-4 min-h-20 justify-center items-center w-full mx-auto max-w-[1440px] px-4 lg:px-8'>
        <div className='flex gap-2 items-center'>
          <img height='24px' src='/icons/mg-logo.svg' alt='mg-logo' className='cursor-pointer hidden md:flex' onClick={() => navigate('/')} />
          <img height='24px' src='/assets/mg-logo.svg' alt='mg-logo' className='cursor-pointer flex md:hidden' onClick={() => navigate('/')} />
          <span className='neutral-800 text-25 font-semibold leading-25 tracking-normal'> Blogs</span>
        </div>
        <div className='flex flex-auto px-12 justify-center'>
          <div className='hidden items-center max-w-[600px] relative h-12 bg-neutral-100 w-full px-4 rounded-md flex lg:flex'>
            <img alt='search icon' src='/icons/search-icon.png' className='h-md' />
            <input className='bg-[transparent] w-full outline-none px-3' type='text' placeholder='Search Post' value={searchFilter} onChange={handleSearching} />
            <div className={`bg-white min-h-[8rem] max-h-[12rem] overflow-y-auto absolute top-14 w-full left-0 shadow-lg border border-neutral-100 overflow-hidden rounded-md ${!isSearchVisible && 'hidden'}`}>
              {loading ? (
                <Overlay>
                  <CommonSpinner />
                </Overlay>
              ) : (
                filteredPosts &&
                filteredPosts.map((item, index) => {
                  return (
                    <div key={`item-${index}`} className='p-2 flex'>
                      <a href='/' className='flex-auto'>
                        {item.title}
                      </a>
                      <span>6hours ago</span>
                    </div>
                  )
                })
              )}
            </div>
          </div>
        </div>
        <div className='flex gap-4'>{user ? renderActiveUserMenu() : renderDefaultUserMenu()}</div>
      </div>
    </div>
  )
}

export default NavMenu
