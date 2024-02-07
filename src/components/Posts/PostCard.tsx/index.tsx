import React, { FC } from 'react'
import Button from '../../Button'
import { useNavigate } from 'react-router-dom'
import Interaction from '../Interaction'
import Conversation from '../Conversation'
import type { Post } from '../../../helpers'
import { userData } from '../../../hooks'
import relativeTime from 'dayjs/plugin/relativeTime'
import dayjs from 'dayjs'

type Props = {
  viewMode?: boolean
  post?: Post
}

const PostCard: FC<Props> = ({ viewMode, post }) => {
  const navigate = useNavigate()
  dayjs.extend(relativeTime)

  return (
    <div
      className={`flex w-full min-h-52 bg-white mb-4 rounded-md shadow-lg overflow-hidden z-0 ${viewMode && 'flex-col-reverse'}`}
      // onClick={() => navigate('/post/1/view-post')}
    >
      {viewMode && <Conversation />}
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
          <Button variant='ghost' classNames={viewMode ? 'flex gap-1' : 'mt-8'}>
            <img alt='up vote icon' src='/icons/ion_chatbubbles-outline.svg' />
            <p className={`text-black ${viewMode && 'whitespace-nowrap'}`}>
              24 {viewMode && 'Comments'}
            </p>
          </Button>
          <Button variant='ghost' classNames={viewMode ? 'flex flex-1 gap-1' : ''}>
            <img alt='up vote icon' src='/icons/share-icon.svg' />
            {viewMode && <p className='whitespace-nowrap text-black'>Share</p>}
          </Button>
          {userData().id === post?.user?.id && (
            <>
              <Button
                variant='ghost'
                classNames={viewMode ? 'flex gap-1' : ''}
                onClick={() => navigate(`/post/${post?.id}/edit-post`)}
              >
                <img alt='up vote icon' src='/icons/write-icon.svg' />
                {viewMode && <p className='whitespace-nowrap text-black'>Edit</p>}
              </Button>
              <Button variant='ghost' classNames={viewMode ? 'flex gap-1' : ''}>
                <img alt='up vote icon' src='/icons/delete-icon.svg' />
                {viewMode && <p className='whitespace-nowrap text-black'>Delete</p>}
              </Button>
            </>
          )}
        </div>
      </div>
      <div className='w-full p-4'>
        <div className='mb-4'>
          <div className='flex gap-2 flex-auto items-center'>
            <img alt='post avatar' src='/icons/default-avatar.png' className='h-5 w-5' />
            <a href={`/profile/${post?.user?.id}`} className='font-medium flex-auto'>
              {post?.user?.name}
            </a>
            <div className='flex items-center gap-1 text-gray-500'>
              <img alt='clock icon' src='/icons/ion_time-outline.svg' className='w-4 h-4' />
              <p>{post && dayjs(post.createdAt).fromNow()}</p>
            </div>
          </div>
          <div className='relative flex flex-row gap-2'>
            {post?.tags?.length ? (
              post?.tags.map((tag, index) => {
                return (
                  <p className='text-gray-500 text-sm' key={`${tag}${index}`}>
                    {tag}
                  </p>
                )
              })
            ) : (
              <p className='text-gray-500 text-sm'>No tags</p>
            )}
          </div>
        </div>

        <div>
          <p className='font-medium text-lg mb-2'>{post?.title}</p>

          <div className='w-full flex flex-col gap-4 overflow-hidden rounded-md'>
            <p className=' mb-2'>{post?.body}</p>
            {post?.image && (
              <div
                className='min-h-48 w-full overflow-hidden rounded-md bg-neutral-100'
                style={{
                  backgroundImage: 'url(/assets/post-sample-upload.png)',
                  backgroundSize: 'cover'
                }}
              ></div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PostCard
