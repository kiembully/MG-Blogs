import { render, screen } from '@testing-library/react'
import CommonSpinner from '.'

describe('Common spinner', () => {
  render(<CommonSpinner />)
  it('should display spinner correctly', () => {
    expect(screen.getByRole('status')).toBeInTheDocument()
  })
})
