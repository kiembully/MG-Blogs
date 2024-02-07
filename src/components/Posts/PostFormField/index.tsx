import React, { useState } from 'react'
import TextField from '../../TextField'
import Button from '../../Button'
import { createPost } from '../../../api'
import Overlay from '../../Overlay/overlay'
import CommonSpinner from '../../CommonSpinner'
import { useNavigate } from 'react-router-dom'

type Tag = {
  name: string
  selected: boolean
}

type CreatePostTypes = {
  title: string
  bodyText: string
  tags: Tag[]
}

type PostFormFieldProps = {
  variant: string
}

const PostFormField: React.FC<PostFormFieldProps> = ({ variant }) => {
  const navigate = useNavigate()
  const [newPost, setNewPost] = useState<CreatePostTypes>({
    title: '',
    bodyText: '',
    tags: [
      { name: '@react', selected: false },
      { name: '@ruby', selected: false },
      { name: '@tech-stack', selected: false },
      { name: '@case-studies', selected: false },
      { name: '@bootcamp', selected: true },
      { name: '@design-talks', selected: true }
    ]
  })

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setNewPost((prevState) => ({ ...prevState, [name]: value }))
  }

  const handleTagClick = (index: number) => {
    setNewPost((prevState) => {
      const updatedTags = [...prevState.tags]
      updatedTags[index] = { ...updatedTags[index], selected: !updatedTags[index].selected }
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
      body: newPost.bodyText
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

  return (
    <form className='pt-8 px-4 mx-auto max-w-[640px] min-h-screen' onSubmit={createPostHandler}>
      <div className='flex'>
        <h1 className='flex-auto'>{variant === 'create' ? 'Create Post' : 'Edit Post'}</h1>
        <p>
          Draft <span>12</span>
        </p>
      </div>
      <div className='overflow-hidden relative p-4 rounded-md bg-white'>
        {loading && (
          <Overlay>
            <CommonSpinner />
          </Overlay>
        )}
        <TextField
          label='Title'
          type='text'
          value={newPost.title}
          name='title'
          fullWidth
          onChange={onChange}
          classNames='mt-2 w-auto'
          disabled={loading}
        />
        <TextField
          label='Body text'
          type='text'
          value={newPost.bodyText}
          name='bodyText'
          fullWidth
          onChange={onChange}
          classNames='mt-2 w-auto'
          disabled={loading}
        />
        <div>
          <p>Tags</p>
          <div className='flex flex-wrap gap-2'>
            {newPost.tags.map((tag, index) => (
              <div
                className={`flex justify-center items-center border rounded-md px-2 py-1 whitespace-nowrap gap-1 ${
                  tag.selected && 'text-primary-500 border-primary-500'
                }`}
                key={tag.name}
              >
                <button
                  type='button'
                  className='bg-[transparent]'
                  onClick={() => handleTagClick(index)}
                >
                  {tag.selected ? '-' : '+'}
                </button>
                {tag.name}
              </div>
            ))}
          </div>
        </div>
        <div className='flex items-center flex-row-reverse gap-2'>
          <Button type='submit' classNames='mt-6'>
            {variant === 'create' ? 'Post' : 'Update'}
          </Button>
          <Button type='button' classNames='mt-6' variant='outlined'>
            Save as Draft
          </Button>
          <p className={`text-left text-xs flex-1 mt-6 ${error && 'text-[red]'}`}>{resMessage}</p>
        </div>
      </div>
    </form>
  )
}

export default PostFormField
