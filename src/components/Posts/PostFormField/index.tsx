import React, { useEffect, useState } from 'react'
import TextField from '../../TextField'
import Button from '../../Button'
import { createPost, getPostByID, updatePost } from '../../../api'
import Overlay from '../../Overlay/overlay'
import CommonSpinner from '../../CommonSpinner'
import { useNavigate, useParams } from 'react-router-dom'

type CreatePostTypes = {
  title: string
  bodyText: string
  tags: string[]
  commentsCount: number
}

type PostFormFieldProps = {
  variant: string
}

const allTags = ['@design-talks', '@react', '@ruby', '@case-studies', '@tech-stack', '@bootcamp']

const PostFormField: React.FC<PostFormFieldProps> = ({ variant }) => {
  const navigate = useNavigate()
  const [newPost, setNewPost] = useState<CreatePostTypes>({
    title: '',
    bodyText: '',
    tags: [],
    commentsCount: 0
  })

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setNewPost((prevState) => ({ ...prevState, [name]: value }))
  }

  const handleTagClick = (clickedTag: string) => {
    setNewPost((prevState) => {
      const updatedTags = [...prevState.tags]
      const index = updatedTags.indexOf(clickedTag)

      if (index !== -1) {
        updatedTags.splice(index, 1)
      } else {
        updatedTags.push(clickedTag)
      }
      return { ...prevState, tags: updatedTags }
    })
  }

  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<boolean>(false)
  const [resMessage, setResMessage] = useState<string>()
  const createPostHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!newPost.title || !newPost.bodyText) {
      setError(true)
      setResMessage('Title and Body text cannot be empty')
      return
    }

    setLoading(true)
    const res = await createPost({
      title: newPost.title,
      body: newPost.bodyText,
      tags: newPost.tags,
      commentsCount: 0,
      voteCounts: { downVotes: [], upVotes: [] }
    })

    if (res === 200) {
      setLoading(false)
      setError(false)
      setResMessage('Success!')
      navigate('/')
    } else {
      setLoading(false)
      setError(true)
      setResMessage('Unable to create post. try again!')
    }
  }

  const updatePostHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!newPost.title || !newPost.bodyText) {
      setError(true)
      setResMessage('Title and Body text cannot be empty')
      return
    }

    const postId = params['post-id']

    setLoading(true)
    const res = await updatePost({
      title: newPost.title,
      body: newPost.bodyText,
      tags: newPost.tags,
      commentsCount: newPost.commentsCount,
      voteCounts: { downVotes: [], upVotes: [] },
      id: postId || ''
    })

    if (res === 200) {
      setLoading(false)
      setError(false)
      setResMessage('Success!')
      navigate('/')
    } else {
      setLoading(false)
      setError(true)
      setResMessage('Unable to update post. try again!')
    }
  }

  const fetchPost = async (id: string) => {
    setLoading(true)
    if (variant === 'update') {
      const res = await getPostByID(id)
      const post: CreatePostTypes = {
        title: res?.title,
        bodyText: res?.body,
        tags: res?.tags,
        commentsCount: res?.commentsCount
      }
      setNewPost(post)
      setLoading(false)
    }
  }

  const params = useParams()
  useEffect(() => {
    const postId = params['post-id']
    if (postId) {
      fetchPost(postId)
    }
  }, [params['post-id']])

  return (
    <form className='pt-8 px-4 mx-auto max-w-[640px] min-h-screen mt-20' onSubmit={variant === 'create' ? createPostHandler : updatePostHandler}>
      <div className='flex mb-4'>
        <h1 className='flex-auto text-25 font-bold leading-25 tracking-semibold'>{variant === 'create' ? 'Create Post' : 'Edit Post'}</h1>
        <p className='text-16 font-medium leading-16 tracking-normal text-indigo-500'>
          Draft <span className='p-1 bg-[#312E81] text-white text-xs rounded-sm'>12</span>
        </p>
      </div>
      <div className='overflow-hidden relative rounded-md bg-white border border-solid border-neutral-200'>
        <div className='p-6 flex flex-col gap-4'>
          {loading && (
            <Overlay>
              <CommonSpinner />
            </Overlay>
          )}
          <TextField label='Title' type='text' value={newPost.title} name='title' fullWidth onChange={onChange} classNames='mt-2 w-auto text-base font-medium leading-16 tracking-normal' disabled={loading} />
          <TextField label='Body text' type='text' value={newPost.bodyText} name='bodyText' fullWidth onChange={onChange} classNames='mt-2 w-auto text-base font-medium leading-16 tracking-normal' disabled={loading} />
          <div>
            <p className='text-base font-medium leading-16 tracking-normal mb-2'>Tags</p>
            <div className='flex flex-wrap gap-2'>
              {allTags.map((tag) => {
                return (
                  <button className={`flex justify-center items-center border rounded-md px-2 py-1 whitespace-nowrap gap-1 ${newPost.tags.includes(tag) && 'text-primary-500 border-primary-500'}`} key={tag} type='button' onClick={() => handleTagClick(tag)}>
                    <div>{newPost.tags.includes(tag) ? '-' : '+'}</div>
                    {tag}
                  </button>
                )
              })}
            </div>
          </div>
        </div>
        <div className='flex items-center flex-row-reverse gap-2 p-6 bg-neutral-100'>
          <Button type='submit'>{variant === 'create' ? 'Post' : 'Update'}</Button>
          <Button type='button' variant='outlined'>
            Save as Draft
          </Button>
          <p className={`text-left text-xs flex-1 ${error && 'text-[red]'}`}>{resMessage}</p>
        </div>
      </div>
    </form>
  )
}

export default PostFormField
