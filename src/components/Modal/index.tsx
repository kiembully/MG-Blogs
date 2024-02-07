import React, { FC, ReactNode } from 'react'
import cn from 'classnames'
import Button from '../Button'
import CloseIcon from '/icons/close-icon.svg'

type Props = {
  isOpen: boolean
  setClose: () => void
  title?: ReactNode
  footer?: ReactNode
  children?: ReactNode
  classNames?: string
}

const Modal: FC<Props> = ({ isOpen, setClose, title = ' ', footer, children, classNames }) => {
  return (
    <div
      aria-label='modal'
      className={cn(
        isOpen ? '' : 'hidden',
        'z-50 fixed overflow-hidden h-screen w-screen top-0 left-0 backdrop-blur-[2px] backdrop-brightness-50'
      )}
    >
      <div className='flex justify-center h-full'>
        <div className='m-auto bg-white max-w-[25rem] rounded-md overflow-hidden relative'>
          <div className='flex flex-row justify-between bg-neutral-100 py-4 px-8'>
            <div className='text-20 font-semibold leading-20 tracking-normal text-left'>
              {title}
            </div>
            <Button classNames='bg-white border-2' onClick={setClose}>
              <img src='/icons/close-icon.svg' alt='close-icon' />
            </Button>
          </div>
          {children}
        </div>
      </div>
    </div>
  )
}

export default Modal
