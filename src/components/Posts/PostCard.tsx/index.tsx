import React, { FC } from 'react'
import Button from '../../button'
import { useNavigate } from 'react-router-dom'
import Interaction from '../Interaction'

type Props = {
  viewMode?: boolean
}

const PostCard: FC<Props> = ({ viewMode }) => {
  const navigate = useNavigate()

  return (
    <div
      className={`flex w-full min-h-72 bg-white mb-4 rounded-md shadow-lg overflow-hidden z-0 ${viewMode && 'flex-col-reverse'}`}
      // onClick={() => navigate('/post/1/view-post')}
    >
      {viewMode && <Interaction />}
      <div
        className={`flex min-h-full p-4 ${viewMode ? 'flex-row' : 'flex-col bg-neutral-100  w-14'}`}
      >
        <div className={`flex items-center ${viewMode ? 'flex-row' : 'flex-col flex-1 '}`}>
          <Button variant='ghost'>
            <img alt='up vote icon' src='/icons/arrow.svg' />
          </Button>
          <p>1.1k</p>
          <Button variant='ghost'>
            <img className='rotate-180' alt='up vote icon' src='/icons/arrow.svg' />
          </Button>
        </div>
        <div
          className={`flex items-center gap-1 ${viewMode ? 'flex-row w-full gap-2' : 'flex-col'}`}
        >
          <Button variant='ghost' classNames={viewMode ? 'flex gap-1' : ''}>
            <img alt='up vote icon' src='/icons/ion_chatbubbles-outline.svg' />
            <p className={`text-black ${viewMode && 'whitespace-nowrap'}`}>
              24 {viewMode && 'Comments'}
            </p>
          </Button>
          <Button variant='ghost' classNames={viewMode ? 'flex flex-1 gap-1' : ''}>
            <img alt='up vote icon' src='/icons/share-icon.svg' />
            {viewMode && <p className='whitespace-nowrap text-black'>Share</p>}
          </Button>
          <Button
            variant='ghost'
            classNames={viewMode ? 'flex gap-1' : ''}
            onClick={() => navigate('/post/1/edit-post')}
          >
            <img alt='up vote icon' src='/icons/write-icon.svg' />
            {viewMode && <p className='whitespace-nowrap text-black'>Edit</p>}
          </Button>
          <Button variant='ghost' classNames={viewMode ? 'flex gap-1' : ''}>
            <img alt='up vote icon' src='/icons/delete-icon.svg' />
            {viewMode && <p className='whitespace-nowrap text-black'>Delete</p>}
          </Button>
        </div>
      </div>
      <div className='w-full p-4'>
        <div className='mb-4'>
          <div className='flex gap-2 flex-auto items-center'>
            <img alt='post avatar' src='/icons/default-avatar.png' className='h-5 w-5' />
            <a href='/profile' className='font-medium flex-auto'>
              Kirby Borromeo
            </a>
            <div className='flex items-center gap-1 text-gray-500'>
              <img alt='clock icon' src='/icons/ion_time-outline.svg' className='w-4 h-4' />
              <p>6 hours ago</p>
            </div>
          </div>
          <p className='text-gray-500 text-sm'>@design-talks</p>
        </div>

        <div>
          <p className='font-medium text-lg mb-2'>First UI/UX Session in MG Bootcamp 2023</p>

          <div className='min-h-48 w-full overflow-hidden rounded-md'>
            <div
              className='min-h-48 w-full overflow-hidden rounded-md bg-neutral-100'
              style={{
                backgroundImage: 'url(/assets/post-sample-upload.png)',
                backgroundSize: 'cover'
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PostCard
