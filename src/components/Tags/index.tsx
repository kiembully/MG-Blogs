import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Tags = () => {
  const [activeTag, setActiveTag] = useState<string>('')
  const param = useParams()

  useEffect(() => {
    const tag = param['tag-id']
    if (tag) {
      setActiveTag(tag)
    } else {
      setActiveTag('')
    }
  }, [])

  return (
    <div aria-label='tags' className='w-full flex flex-col items-start justify-start mt-8'>
      <p className='text-neutral-800'>Popular Tags</p>
      <div className='relative mt-2 h-48 w-full bg-white px-2'>
        <div className='relative h-full w-full flex flex-col items-start justify-evenly'>
          <a href='/t/design-talks' className={`text-sm ${activeTag === 'design-talks' ? 'text-indigo-500' : 'text-neutral-800'}`}>
            @design-talks
          </a>
          <a href='/t/react' className={`text-sm ${activeTag === 'react' ? 'text-indigo-500' : 'text-neutral-800'}`}>
            @react
          </a>
          <a href='/t/ruby' className={`text-sm ${activeTag === 'ruby' ? 'text-indigo-500' : 'text-neutral-800'}`}>
            @ruby
          </a>
          <a href='/t/case-studies' className={`text-sm ${activeTag === 'case-studies' ? 'text-indigo-500' : 'text-neutral-800'}`}>
            @case-studies
          </a>
          <a href='/t/tech-stack' className={`text-sm ${activeTag === 'tech-stack' ? 'text-indigo-500' : 'text-neutral-800'}`}>
            @tech-stack
          </a>
          <a href='/t/bootcamp' className={`text-sm ${activeTag === 'bootcamp' ? 'text-indigo-500' : 'text-neutral-800'}`}>
            @bootcamp
          </a>
        </div>
      </div>
    </div>
  )
}

export default Tags
