import { render, screen } from '@testing-library/react'
import Options from './Options'

describe('Options', () => {
  it('should display options correctly', () => {
    render(<Options />)

    const options = screen.getAllByRole('link')
    expect(options).toHaveLength(4)

    const expectedOptions = [
      { label: 'User Agreement', link: '#' },
      { label: 'Privacy Policy', link: '#' },
      { label: 'Content Policy', link: '#' },
      { label: 'Moderator Code of Conduct', link: '#' }
    ]

    options.forEach((option, index) => {
      expect(option).toHaveTextContent(expectedOptions[index].label)
      expect(option).toHaveAttribute('href', expectedOptions[index].link)
    })
  })
})
