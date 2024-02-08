import React, { useEffect, useState } from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { getTrendingTopics } from '../../api'
import { useNavigate } from 'react-router-dom'

interface Topics {
  id?: string
  type: string
  attributes: {
    id: number
    title: string
    body: string
    commentsCount: number
    votesCount: number
    tags: string[]
    votes: {
      upvotes: number[]
      downvotes: number[]
    }
    user: {
      id: number
      name: string
    }
    createdAt: string
    isDraft: boolean
  }
}

const CommonCarousel: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const [trendingTopics, setTrendingTopics] = useState<Topics[]>([])

  const fetchTrendingTopics = async () => {
    try {
      setLoading(true)
      const res = await getTrendingTopics()

      if (res?.status === 200) {
        setTrendingTopics(res?.data.data)
      }
    } catch (error) {
      console.error('Error fetching trending topics:', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchTrendingTopics()
  }, [])

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  }

  const navigate = useNavigate()
  const viewTopic = (id: string | undefined) => {
    navigate(`/post/${id}/view-post`)
  }

  return (
    <Carousel arrows={false} infinite responsive={responsive}>
      {loading
        ? Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className='pr-4'>
              <div className='bg-neutral-200 min-h-32 w-full'></div>
            </div>
          ))
        : trendingTopics.map((topic) => (
            <div key={topic.id} className='pr-4'>
              {/* Use topic attributes as needed */}
              <div className='flex flex-col-reverse bg-indigo-500 min-h-32 w-full rounded-md cursor-pointer p-2 relative overflow-hidden' onClick={() => viewTopic(topic.id)}>
                <img width='140px' src='/assets/mg-logo-big.svg' alt='mg-logo' className='max-w-[240px] absolute -top-14 -left-8 z-10 block' />
                <div className='flex flex-row'>
                  <p className='font-medium text-white'>{topic.attributes.title}</p>
                </div>
              </div>
            </div>
          ))}
    </Carousel>
  )
}

export default CommonCarousel
