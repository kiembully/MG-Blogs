import React, { FC, ReactNode } from 'react'
import cn from 'classnames'

type Props = {
  children?: ReactNode
  label?: string
  type: string
  placeholder?: string
  insideLogo?: string
  value?: string
  name?: string
  fullWidth?: boolean
  classNames?: string
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  onValueChange?: () => void
}

const TextField: FC<Props> = ({
  // children,
  label,
  // insideLogo,
  placeholder,
  value,
  type = 'text',
  name,
  fullWidth,
  classNames,
  onChange
}) => {
  return (
    <div className={classNames}>
      <p className='mb-2'>{label}</p>
      <input
        name={name}
        value={value}
        type={type}
        className={cn(
          'rounded-sm h-12 px-4 py-2 outline-indigo-200 text-sm text-black/75 bg-neutral-100',
          fullWidth ? 'w-full' : 'w-max'
        )}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  )
}

export default TextField
