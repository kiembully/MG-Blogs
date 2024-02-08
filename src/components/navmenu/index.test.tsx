import React, { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import * as router from 'react-router-dom'
import NavMenu from '.'

const mockNavigate = jest.fn()

describe('Nav menu', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  // beforeEach(() => {
  //   jest.spyOn(router, 'useNavigate').mockImplementation(() => mockNavigate)
  // })

  it('should render default user menu', () => {
    render(<NavMenu />)

    expect(screen.getByText('Login')).toBeInTheDocument()
    expect(screen.getByText('Signup')).toBeInTheDocument()
  })

  // it('should navigate/redirect when signup button is clicked', () => {
  //   render(<NavMenu />)
  //   const signupButton = screen.getByText('Signup')

  //   userEvent.click(signupButton)

  //   expect(mockNavigate).toHaveBeenCalledWith('/signup')
  // })
})
