import React, { useState } from 'react'
import Button from '../../Button'

type Comment = {
  id: number
  name: string
  text: string
  date: string
  votes: number
  replies?: Comment[]
}

const Conversation: React.FC<Comment> = ({ id, name, text, date, replies, votes }) => {
  const [replyText, setReplyText] = useState<string>('')
  const [showReplies, setShowReplies] = useState<boolean>(false)

  const [commentVotes, setCommentVotes] = useState<number>(votes)
  const handleVote = (voteType: 'upvote' | 'downvote') => {
    // Implement logic to handle upvote and downvote
    if (voteType === 'upvote') {
      setCommentVotes(commentVotes + 1)
    } else if (voteType === 'downvote') {
      setCommentVotes(commentVotes - 1)
    }
  }

  const handleReply = () => {
    // Implement logic to handle adding a reply
    console.log(`Replying to comment ${id} with text: ${replyText}`)
  }

  return (
    <div className='flex flex-col w-full min-h-full px-4 py-2'>
      <p className='flex text-base font-medium leading-4 tracking-normal items-center'>
        <div className='size-[1.5rem] bg-neutral-100 rounded-full mr-2'></div>
        {name} <span className='text-sm font-normal leading-3 tracking-normal ml-2'>{date}</span>
      </p>
      <div className='pl-8 pb-4 relative'>
        <div className='border-l-2 border-neutral-200 h-full absolute left-3 top-3'></div>
        <p className='text-base font-normal leading-4 tracking-normal mt-2'>{text}</p>
        <div className='flex gap-2 mt-2'>
          <div className='flex items-center'>
            <Button variant='ghost' onClick={() => handleVote('upvote')}>
              <img alt='up vote icon' src='/icons/arrow.svg' />
            </Button>
            <p className='text-xs font-medium leading-3 tracking-normal'>{commentVotes}</p>
            <Button variant='ghost' onClick={() => handleVote('downvote')}>
              <img className='rotate-180' alt='up vote icon' src='/icons/arrow.svg' />
            </Button>
          </div>
          <button onClick={() => setShowReplies(!showReplies)}>
            {showReplies ? 'Hide Replies' : 'Show Replies'}
          </button>
        </div>
      </div>
      {showReplies &&
        replies &&
        replies.map((reply) => (
          // eslint-disable-next-line react/jsx-key
          <div className='relative pl-4 overflow-hidden'>
            <div className='border-l-2 border-neutral-200 h-full absolute left-3 top-3'></div>
            <Conversation key={reply.id} {...reply} />
          </div>
        ))}
      <div className='mt-[0.5rem]'>
        <input
          type='text'
          placeholder='Reply...'
          value={replyText}
          onChange={(e) => setReplyText(e.target.value)}
        />
        <button onClick={handleReply}>Reply</button>
      </div>
    </div>
  )
}

const SampleConvo: React.FC = () => {
  const comments: Comment[] = [
    {
      id: 4,
      name: 'Adrian Castueras',
      text: 'This looks awesome! Thanks for this, Kirbs!',
      date: '6hours',
      votes: 0,
      replies: [
        {
          id: 5,
          name: 'Arnaldo Tayao',
          text: 'This looks awesome! Thanks for this, Kirbs!',
          votes: 0,
          date: '6hours',
          replies: [
            {
              id: 6,
              name: 'Adrian Castueras',
              text: 'This looks awesome! Thanks for this, Kirbs!',
              votes: 0,
              date: '6hours'
            }
          ]
        }
      ]
    },
    {
      id: 1,
      name: 'Adrian Castueras',
      text: 'Top-level Comment 1',
      votes: 0,
      date: '6hours',
      replies: [
        {
          id: 2,
          name: 'Adrian Castueras',
          text: 'This looks awesome! Thanks for this, Kirbs!',
          votes: 0,
          date: '6hours'
        },
        {
          id: 3,
          name: 'Adrian Castueras',
          text: 'This looks awesome! Thanks for this, Kirbs!',
          votes: 0,
          date: '6hours'
        }
      ]
    }
  ]

  return (
    <div>
      {comments.map((comment) => (
        <Conversation key={comment.id} {...comment} />
      ))}
    </div>
  )
}

export default SampleConvo
