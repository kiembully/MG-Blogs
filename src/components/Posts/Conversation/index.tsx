import React, { useState, useEffect } from 'react'
import Button from '../../Button'
import { useNavigate, useParams } from 'react-router-dom'
import { addReply, commentVote, getCommentsByPost } from '../../../api'
import { Comment } from '../../../helpers'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import { userData } from '../../../hooks'
import Modal from '../../Modal'

const Conversation: React.FC<Comment> = (props: Comment) => {
  dayjs.extend(relativeTime)
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const navigate = useNavigate()
  const { post_id } = useParams()

  const [replyText, setReplyText] = useState<string>('')
  const [showReplies, setShowReplies] = useState<boolean>(false)

  const handleVote = async (voteType: 'upvote' | 'downvote') => {
    if (!userData() || !post_id || !props.id) {
      setIsOpen(true)
      return
    }
    // Implement logic to handle upvote and downvote
    await commentVote(post_id, props.id, voteType)
  }

  const handleReply = async () => {
    if (!props.id || !post_id || !userData()) return
    // Implement logic to handle adding a reply
    // console.log(`Replying to comment ${id} with text: ${replyText}`)
    const res = await addReply(post_id, {
      id: props.id,
      message: replyText
    })
  }

  console.log(props)

  return (
    <div className='flex flex-col w-full min-h-full px-4 py-2'>
      <div className='flex text-base font-medium leading-4 tracking-normal items-center'>
        <div className='size-[1.5rem] bg-neutral-100 rounded-full mr-2 overflow-hidden'>
          <img alt='post avatar' src='/icons/default-avatar.png' className='h-5 w-5' />
        </div>
        {props.user?.name} <span className='text-sm font-normal text-neutral-400 leading-3 tracking-normal ml-2'>{dayjs(props.createdAt).fromNow()}</span>
      </div>
      <div className='pl-8 pb-4 relative'>
        <div className='border-l-2 border-neutral-200 h-full absolute left-3 top-3'></div>
        <p className='text-base font-normal leading-4 tracking-normal mt-2'>{props.message}</p>
        <div className='flex gap-2 mt-2'>
          <div className='flex items-center'>
            <Button variant='ghost' onClick={() => handleVote('upvote')}>
              <img alt='up vote icon' src='/icons/arrow.svg' />
            </Button>
            <p className='text-sm font-medium leading-3 tracking-normal'>{props.votes && props.votes.upvotes.length + props.votes.downvotes.length}</p>
            <Button variant='ghost' onClick={() => handleVote('downvote')}>
              <img className='rotate-180' alt='up vote icon' src='/icons/arrow.svg' />
            </Button>
          </div>
          <div className='flex flex-row gap-1 items-center justify-center cursor-pointer' onClick={() => setShowReplies((prevState) => !prevState)}>
            <img src='/icons/ion_chatbubbles-outline.svg' alt='' className='h-5 w-5' />
            <p className='text-neutral-800 text-sm'>{props.replies?.data?.length} Replies</p>
          </div>
          {/* <button onClick={() => setShowReplies(!showReplies)}>{showReplies ? 'Hide Replies' : 'Show Replies'}</button> */}
        </div>
        <div className='mt-[0.5rem] flex gap-2'>
          <input type='text' placeholder='Add a reply' className='text-sm pl-2 outline-none border-b-[1px] border-b-neutral-400' value={replyText} onChange={(e) => setReplyText(e.target.value)} />
          <button onClick={() => handleReply()} className='text-sm hover:font-bold'>
            Reply
          </button>
        </div>
      </div>
      {/* {props.replies &&
        props.replies.data.map(({ attributes }, index) => {
          return <p key={index}>{attributes.message}</p>
        })} */}
      {showReplies &&
        props.replies &&
        props.replies.data.map(({ attributes }) => (
          // eslint-disable-next-line react/jsx-key
          <div className='relative ml-4 overflow-hidden'>
            <div className='border-l-2 border-neutral-200 h-full absolute left-3 top-3'></div>
            <Conversation key={attributes.id} {...attributes} />
          </div>
        ))}

      <Modal title='Confirmation' isOpen={isOpen} setClose={() => setIsOpen(!isOpen)}>
        <div className='p-8 border-t border-neutral-200'>
          <p>You must log in to vote.</p>
        </div>
        <div className='flex items-center flex-row-reverse gap-2 py-4 px-8 border-t border-neutral-200'>
          <Button type='button' size='sm' onClick={() => navigate('/login')}>
            Login
          </Button>
          <Button type='button' size='sm' variant='outlined' onClick={() => setIsOpen(false)}>
            Cancel
          </Button>
        </div>
      </Modal>
    </div>
  )
}

const SampleConvo: React.FC = () => {
  const { post_id } = useParams()
  const [comments, setComments] = useState<Comment[]>([])
  const getAllComments = async () => {
    if (!post_id) return
    const res = await getCommentsByPost(post_id)
    const sortedComments: Comment[] = res.sort((a: any, b: any) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    setComments(sortedComments)
  }

  useEffect(() => {
    getAllComments()
  }, [post_id])

  return (
    <div>
      {comments.map((comment, index) => (
        <Conversation key={`${comment}${index}`} {...comment} />
      ))}
    </div>
  )
}

export default SampleConvo
