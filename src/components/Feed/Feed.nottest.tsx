import { render, screen } from '@testing-library/react'
import Feed from './Feed'

// for some reason i get axios error?

describe('Feed component', () => {
  // eslint-disable-next-line react/react-in-jsx-scope
  render(<Feed />)

  it('should render feed', () => {
    expect(screen.getByLabelText('feed-container')).toBeInTheDocument()
  })

  it('should display Trending component', () => {
    expect(screen.getByLabelText('trending-component')).toBeInTheDocument()
  })
})
