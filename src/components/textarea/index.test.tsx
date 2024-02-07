import { fireEvent, render, screen } from '@testing-library/react'
import TextArea from '.'

describe('Text area', () => {
  it('should display a text area with label', () => {
    render(<TextArea label='Comment' name='title' placeholder='Write a comment...' />)

    expect(screen.getByLabelText('label')).toHaveTextContent('Comment')
    expect(screen.getByPlaceholderText('Write a comment...')).toBeInTheDocument()
    expect(screen.getByLabelText('text-area')).toBeEnabled()
  })
})
