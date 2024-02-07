import { fireEvent, render, screen } from '@testing-library/react'
import TextField from '.'

describe('Input Field', () => {
  it('should display input with label', () => {
    render(<TextField type='text' label='Username' placeholder='Enter your username' />)
    expect(screen.getByLabelText('label')).toHaveTextContent('Username')
    expect(screen.getByPlaceholderText('Enter your username')).toBeInTheDocument()
    expect(screen.getByLabelText('input-field')).toBeEnabled()
  })

  it('should handles onChange event correctly', () => {
    const mockOnChange = jest.fn()
    render(
      <TextField type='text' label='Username' name='Username' value='' onChange={mockOnChange} />
    )

    fireEvent.change(screen.getByLabelText('input-field'), { target: { value: 'username-here' } })
    expect(mockOnChange).toHaveBeenCalledWith(expect.any(Object))
  })
})
