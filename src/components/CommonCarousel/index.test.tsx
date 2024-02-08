import Raect, { render, screen } from '@testing-library/react'
import CommonCarousel from '.'

describe('Common Carousel', () => {
  it('should render Commmon carousel', () => {
    // eslint-disable-next-line react/react-in-jsx-scope
    render(<CommonCarousel />)

    // How to get class name?
    // expect(screen.getByText(/react-multi-carousel-list/)).toBeInTheDocument()
  })
})
