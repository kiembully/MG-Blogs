import React, { FC } from 'react'

interface CommonDividerProps {
  orientation?: 'vertical' | 'horizontal'
}

const CommonDivider: FC<CommonDividerProps> = ({ orientation = 'vertical' }) => {
  const containerClass = orientation === 'horizontal' ? 'w-full h-[1px]' : 'w-[1px] h-full'

  return <div className={`${containerClass} bg-neutral-200`}></div>
}

export default CommonDivider
