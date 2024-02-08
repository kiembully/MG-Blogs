import { render, screen } from '@testing-library/react'
import CommonCarousel from '.'

describe('Common Carousel', () => {
  it('should render Commmon carousel', () => {
    render(<CommonCarousel />)

    // How to get class name?
    // expect(screen.getByText(/react-multi-carousel-list/)).toBeInTheDocument()
  })
})
