import userEvent from '@testing-library/user-event'
import Button from '.'
import { render, screen } from '@testing-library/react'

describe('Button component', () => {
  // screen.debug()
  it('should display correct button', () => {
    render(<Button type='button'>Button Label</Button>)
    const button = screen.getByLabelText('button')
    expect(button).toHaveTextContent('Button Label')
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

  // it('should be clickable', async () => {
  //   const onChange = jest.fn()

  //   render(<Button type='button'>Button Label</Button>)
  //   const button = screen.getByLabelText('button')

  //   await userEvent.click(button)

  //   expect(onChange).toHaveBeenCalled()
  // })
})
