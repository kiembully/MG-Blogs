import React, { useState } from 'react'
import TextArea from '../../textarea'
import Button from '../../Button'
import CommonDivider from '../../CommonDivider'
import { Post } from '../../../helpers'
import { addComment } from '../../../api'
import { useNavigate } from 'react-router'
import Overlay from '../../Overlay/overlay'
import CommonSpinner from '../../CommonSpinner'

type CommentProps = {
  comment: string
}

type InterfactionProps = {
  post: Post
}

const Interaction = ({ post }: InterfactionProps) => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<boolean>(false)
  const [resMessage, setResMessage] = useState<string>('')
  const [newPost, setNewPost] = useState<CommentProps>({
    comment: ''
  })

  const addCommentHandler = async () => {
    if (post.id && post.user) {
      if (newPost.comment.length <= 0) {
        setError(true)
        setResMessage('Comment cannot be empty.')
        return
      }

      setLoading(true)
      const res: any = await addComment(post.id, {
        message: newPost.comment,
        voteCounts: { upVotes: [], downVotes: [] },
        sender_name: post.user.name
      })

      if (res?.data?.data) {
        setLoading(false)
        setError(false)
        setResMessage('')
        setNewPost((prevState) => ({ ...prevState, comment: '' }))
        window.location.reload()
      } else {
        setLoading(false)
        setError(true)
        setResMessage('Unable to post comment. try again!')
      }
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
      <p className={`text-center text-xs ${error && 'text-[red]'}`}>{resMessage}</p>
      <div className='w-full flex flex-row-reverse mb-8'>
        <Button classNames='mt-6' onClick={() => addCommentHandler()}>
          Comment
        </Button>
      </div>
      <CommonDivider orientation='horizontal' />
      {loading ? (
        <Overlay>
          <CommonSpinner />
        </Overlay>
      ) : (
        <></>
      )}
    </div>
  )
}

export default Interaction
