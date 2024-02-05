import React, { useState } from 'react'
import TextField from '../../textfield'
import Button from '../../button'

type Tag = {
  name: string
  selected: boolean
}

type CreatePostTypes = {
  title: string
  bodyText: string
  tags: Tag[]
}

const NewPost = () => {
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

  return (
    <div className='pt-8 px-4 mx-auto max-w-[840px] min-h-screen'>
      <div className='flex'>
        <h1 className='flex-auto'>Create Post</h1>
        <p>
          Draft <span>12</span>
        </p>
      </div>
      <div className='p-4 rounded-md bg-white'>
        <TextField
          label='Title'
          type='text'
          value={newPost.title}
          name='title'
          fullWidth
          onChange={onChange}
          classNames='mt-2 w-auto'
        />
        <TextField
          label='Body text'
          type='text'
          value={newPost.bodyText}
          name='bodyText'
          fullWidth
          onChange={onChange}
          classNames='mt-2 w-auto'
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
                <button className='bg-[transparent]' onClick={() => handleTagClick(index)}>
                  {tag.selected ? '-' : '+'}
                </button>
                {tag.name}
              </div>
            ))}
          </div>
        </div>
        <div className='flex flex-row-reverse gap-2'>
          <Button classNames='mt-6'>Post</Button>
          <Button classNames='mt-6' variant='outlined'>
            Save as Draft
          </Button>
        </div>
      </div>
    </div>
  )
}

export default NewPost
