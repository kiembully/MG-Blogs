import { render, screen } from '@testing-library/react'
import Feed from './Feed'

describe('Feed component', () => {
  render(<Feed />)

  it('should render feed', () => {
    expect(screen.getByLabelText('feed-container')).toBeInTheDocument()
  })

  it('should display Trending component', () => {
    expect(screen.getByLabelText('trending-component')).toBeInTheDocument()
  })
})
