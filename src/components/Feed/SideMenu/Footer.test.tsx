import Footer from './Footer'
import { render, screen } from '@testing-library/react'

describe('Footer components', () => {
  it('should render footer correctly', () => {
    // eslint-disable-next-line react/react-in-jsx-scope
    render(<Footer />)
    expect(screen.getByText('Mashup Garage Blogs © 2023')).toBeInTheDocument()
    expect(screen.getByText('All rights reserved.')).toBeInTheDocument()
  })
})
