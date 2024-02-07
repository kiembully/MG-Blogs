import Button from '.'
import { render, screen, fireEvent } from '@testing-library/react'

describe('Button component', () => {
  // screen.debug()
  it('should display correct default button', () => {
    render(<Button>Button Label</Button>)
    const button = screen.getByLabelText('button')
    expect(button).toHaveTextContent('Button Label')
  })

  it('should display button with ghost styles', () => {
    render(<Button variant='ghost'>Click me</Button>)
    const button = screen.getByLabelText('button')

    expect(button).toHaveClass('text-indigo-500')
  })

  it('should display button with outlined styles', () => {
    render(<Button variant='outlined'>Click me</Button>)
    const button = screen.getByLabelText('button')

    expect(button).toHaveClass('border text-indigo-500')
  })

  it('should display button with specified size and type', () => {
    render(
      <Button size='lg' type='submit'>
        Submit
      </Button>
    )
    const button = screen.getByLabelText('button')

    expect(button).toHaveClass('text-lg')
    expect(button).toHaveAttribute('type', 'submit')
  })

  it('should be disabled', () => {
    render(
      <Button disabled type='button'>
        Button Label
      </Button>
    )
    const button = screen.getByLabelText('button')

    expect(button).toBeDisabled()
  })

  it('should calls onClick handler when the button is clicked', () => {
    const onClick = jest.fn()
    render(<Button onClick={onClick}>Click me</Button>)
    const button = screen.getByLabelText('button')

    fireEvent.click(button)

    expect(onClick).toHaveBeenCalledTimes(1)
  })
})
