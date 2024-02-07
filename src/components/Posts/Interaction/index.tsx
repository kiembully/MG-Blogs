import React, { useState } from 'react'
import TextArea from '../../textarea'
import Button from '../../Button'
import CommonDivider from '../../CommonDivider'
import { Post } from '../../../helpers'
import { addComment } from '../../../api'

type CommentProps = {
  comment: string
}

type InterfactionProps = {
  post: Post
}

const Interaction = ({ post }: InterfactionProps) => {
  const [newPost, setNewPost] = useState<CommentProps>({
    comment: ''
  })

  const addCommentHandler = async () => {
    if (post.id && post.user) {
      const res = await addComment(post.id, {
        message: newPost.comment,
        voteCounts: { upVotes: [], downVotes: [] },
        sender_name: post.user.name
      })
    }
  }

  const onChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = event.target
    setNewPost((prevState) => ({ ...prevState, [name]: value }))
  }

  return (
    <div className='flex flex-col w-full min-h-full p-4'>
      <div className='w-full'>
        <TextArea rows={6} resize={false} fullWidth label='Comment' value={newPost.comment} name='comment' placeholder='Write a comment...' classNames='mt-2 w-auto' onChange={onChange} />
      </div>
      <div className='w-full flex flex-row-reverse mb-8'>
        <Button classNames='mt-6' onClick={() => addCommentHandler()}>
          Comment
        </Button>
      </div>
      <CommonDivider orientation='horizontal' />
    </div>
  )
}

export default Interaction
