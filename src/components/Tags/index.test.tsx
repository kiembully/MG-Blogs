import { render, screen } from '@testing-library/react'
import Tags from '.'

const tags = ['@design-talks', '@react', '@ruby', '@case-studies', '@tech-stack', '@bootcamp']

describe('Tags', () => {
  it('should render the component', () => {
    render(<Tags />)

    expect(screen.getByLabelText('tags')).toBeInTheDocument()
  })

  it('should render the tags', () => {
    render(<Tags />)

    const tagLinks = screen.getAllByRole('link')

    expect(tagLinks).toHaveLength(6)
    tagLinks.forEach((link, index) => {
      expect(link).toHaveTextContent(tags[index])
    })
  })
})
