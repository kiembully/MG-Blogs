import React, { FC, useState } from 'react'
import Button from '../../Button'
import { useNavigate } from 'react-router-dom'
import Interaction from '../Interaction'
import Conversation from '../Conversation'
import type { Post } from '../../../helpers'
import { userData } from '../../../hooks'
import relativeTime from 'dayjs/plugin/relativeTime'
import dayjs from 'dayjs'
import Modal from '../../Modal'
import { deletePost } from '../../../api'
import CommonSpinner from '../../CommonSpinner'
import Overlay from '../../Overlay/overlay'

type Props = {
  viewMode?: boolean
  post?: Post
}

const PostCard: FC<Props> = ({ viewMode, post }) => {
  const navigate = useNavigate()
  dayjs.extend(relativeTime)

  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [selectedPost, setSelectedPost] = useState<string | undefined>()
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<boolean>(false)
  const [resMessage, setResMessage] = useState<string>('')
  const handleSelectPost = (id: string | undefined) => {
    setSelectedPost(id)
    setIsOpen(true)
  }

  const handleDelete = async () => {
    setLoading(true)
    if (selectedPost) {
      const res = await deletePost(selectedPost)

      if (res === 200) {
        setLoading(false)
        setError(false)
        setResMessage('Success!')
        navigate('/')
      } else {
        setLoading(false)
        setError(true)
        setResMessage('Unable to delete post. try again!')
      }
    }
  }

  return (
    <div
      className={`flex w-full min-h-52 bg-white mb-4 rounded-md shadow-lg overflow-hidden z-0 ${viewMode && 'flex-col-reverse'}`}
      // onClick={() => navigate(`/post/${post?.id}/view-post`)}
    >
      {viewMode && <Conversation />}
      {viewMode && post && <Interaction post={post} />}
      <div className={`flex min-h-full gap-4 p-4 ${viewMode ? 'flex-row' : 'flex-col bg-neutral-100  w-14'}`}>
        <div className={`flex items-center ${viewMode ? 'flex-row' : 'flex-col flex-1 '}`}>
          <Button variant='ghost'>
            <img alt='up vote icon' src='/icons/arrow.svg' />
          </Button>
          <p className='text-sm'>1.1k</p>
          <Button variant='ghost'>
            <img className='rotate-180' alt='up vote icon' src='/icons/arrow.svg' />
          </Button>
        </div>
        <div className={`flex items-center ${viewMode ? 'flex-row w-full gap-4' : 'flex-col'}`}>
          <Button variant='ghost' classNames={viewMode ? 'flex gap-1' : 'mt-8'} onClick={() => navigate(`/post/${post?.id}/view-post`)}>
            <img alt='up vote icon' src='/icons/ion_chatbubbles-outline.svg' />
            <p className={`text-black text-sm ${viewMode && 'whitespace-nowrap'}`}>
              {post?.comments?.length || 0} {viewMode && 'Comments'}
            </p>
          </Button>
          <Button variant='ghost' classNames={viewMode ? 'flex flex-1 gap-1' : ''}>
            <img alt='up vote icon' src='/icons/share-icon.svg' />
            {viewMode && <p className='whitespace-nowrap my-auto text-sm text-black'>Share</p>}
          </Button>
          {userData()?.id === post?.user?.id && (
            <>
              <Button variant='ghost' classNames={viewMode ? 'flex gap-1' : ''} onClick={() => navigate(`/post/${post?.id}/edit-post`)}>
                <img alt='up vote icon' src='/icons/write-icon.svg' />
                {viewMode && <p className='whitespace-nowrap text-black text-sm'>Edit</p>}
              </Button>
              <Button variant='ghost' classNames={viewMode ? 'flex gap-1' : ''} onClick={() => handleSelectPost(post?.id)}>
                <img alt='up vote icon' src='/icons/delete-icon.svg' />
                {viewMode && <p className='whitespace-nowrap text-black text-sm'>Delete</p>}
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
      <Modal title='Confirmation' isOpen={isOpen} setClose={() => setIsOpen(!isOpen)}>
        <div className='p-8 border-t border-neutral-200'>
          {loading ? (
            <Overlay>
              <CommonSpinner />
            </Overlay>
          ) : (
            <></>
          )}
          <p>Do you confirm to delete this post? Tap yes, if you really want to delete it.</p>
          <p className={`text-left text-xs flex-1 mt-6 ${error && 'text-[red]'}`}>{resMessage}</p>
        </div>
        <div className='flex items-center flex-row-reverse gap-2 py-4 px-8 border-t border-neutral-200'>
          <Button type='button' size='sm' onClick={handleDelete}>
            Yes, I confirm
          </Button>
          <Button type='button' size='sm' variant='outlined' onClick={() => setIsOpen(false)}>
            Edi don&apos;t!
          </Button>
        </div>
      </Modal>
    </div>
  )
}

export default PostCard
