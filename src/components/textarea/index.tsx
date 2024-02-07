import React, { FC, ReactNode } from 'react'
import cn from 'classnames'

type Props = {
  children?: ReactNode
  label?: string
  rows?: number
  placeholder?: string
  insideLogo?: string
  value?: string
  name?: string
  resize?: boolean
  fullWidth?: boolean
  classNames?: string
}

const TextArea: FC<Props> = ({
  label,
  placeholder,
  rows,
  value,
  name,
  fullWidth,
  resize,
  classNames
}) => {
  return (
    <div className={classNames}>
      <p aria-label='label' className='text-sm mb-2'>
        {label}
      </p>
      <textarea
        aria-label='text-area'
        name={name}
        value={value}
        className={cn(
          'rounded-md px-4 py-2 outline-indigo-200 text-sm text-black/75 bg-neutral-100',
          fullWidth ? 'w-full' : 'w-max',
          resize ? 'resize' : 'resize-none'
        )}
        rows={rows}
        placeholder={placeholder}
      />
    </div>
  )
}

export default TextArea
