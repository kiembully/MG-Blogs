import React from 'react'

type ChildrenProps = {
  children: JSX.Element | JSX.Element[]
}

const Overlay: React.FC<ChildrenProps> = ({ children }: ChildrenProps) => {
  return (
    <div
      id='overlay'
      className='absolute w-full h-full top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 z-2 flex items-center justify-center'
    >
      {children}
    </div>
  )
}

export default Overlay
