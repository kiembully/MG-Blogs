import React, { useState } from 'react'
import TextArea from '../../textarea'
import Button from '../../button'
import CommonDivider from '../../CommonDivider'

type CommentProps = {
  comment: string
}

const Interaction = () => {
  const [newPost, setNewPost] = useState<CommentProps>({
    comment: ''
  })

  return (
    <div className='flex flex-col w-full min-h-full p-4'>
      <div className='w-full'>
        <TextArea
          rows={6}
          resize={false}
          fullWidth
          label='Comment'
          value={newPost.comment}
          name='title'
          placeholder='Write a comment...'
          classNames='mt-2 w-auto'
        />
      </div>
      <div className='w-full flex flex-row-reverse mb-8'>
        <Button classNames='mt-6'>Comment</Button>
      </div>
      <CommonDivider orientation='horizontal' />
    </div>
  )
}

export default Interaction
