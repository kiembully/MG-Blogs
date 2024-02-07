import { render, screen } from '@testing-library/react'
import TextArea from '.'
import React from 'react'

describe('Text area', () => {
  it('should display a text area with label', () => {
    // Mock function for the onChange prop
    const mockOnChange = jest.fn()

    render(<TextArea label='Comment' name='title' placeholder='Write a comment...' onChange={mockOnChange} />)

    expect(screen.getByLabelText('label')).toHaveTextContent('Comment')
    expect(screen.getByPlaceholderText('Write a comment...')).toBeInTheDocument()
    expect(screen.getByLabelText('text-area')).toBeEnabled()
  })
})
