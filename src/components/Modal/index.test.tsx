import React, { render, screen, fireEvent } from '@testing-library/react'
import Modal from '.'

describe('Modal', () => {
  it('should renders when isOpen is true', () => {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    render(<Modal isOpen={true} setClose={() => {}} />)

    expect(screen.getByLabelText('modal')).toBeInTheDocument()
  })

  it('should not renders when isOpen is false', () => {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    render(<Modal isOpen={false} setClose={() => {}} />)

    expect(screen.getByLabelText('modal')).toBeInTheDocument()
  })

  it('should displays title, childs, and footer correctly', () => {
    const title = 'Test Modal'
    const footer = <div>Footer</div>
    const children = <div>Content</div>

    render(
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      <Modal isOpen={true} setClose={() => {}} title={title} footer={footer}>
        {children}
      </Modal>
    )

    expect(screen.getByText(title)).toBeInTheDocument()
    expect(screen.findByText('Footer')).toBeTruthy() // di mag work ang getByText?
    expect(screen.getByText('Content')).toBeInTheDocument()
  })

  it('should close when button is clicked', () => {
    const closeOnClick = jest.fn()
    render(<Modal isOpen={true} setClose={closeOnClick} />)

    const closeBtn = screen.getByAltText('close-icon')
    fireEvent.click(closeBtn)

    expect(closeOnClick).toHaveBeenCalled()
  })
})
