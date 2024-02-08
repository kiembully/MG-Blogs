import { render, screen } from '@testing-library/react'
import Overlay from './overlay'

describe('Overlay', () => {
  it('should show overlay and render childs inside', () => {
    render(
      <Overlay>
        <div>Test Overlay</div>
      </Overlay>
    )

    expect(screen.getByLabelText('overlay')).toBeInTheDocument()
    expect(screen.getByText('Test Overlay')).toBeInTheDocument()
  })
})

