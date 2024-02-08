import { checkTokenExpiration } from '.'

describe('checkTokenExpiration', () => {
  it('should returns true if token is empty', () => {
    const token = ''

    expect(checkTokenExpiration(token)).toBe(true)
  })

  // it('should returns true if token is invalid', () => {
  //   const invalidToken = ''

  //   expect(checkTokenExpiration(invalidToken)).toBe(true)
  // })

  // it('should returns true if token is expired', () => {
  //   const expiredToken = ''

  //   jest.mock('jwt-decode', () => jest.fn(() => ({ exp: Date.now() / 1000 - 3600 })))

  //   expect(checkTokenExpiration(expiredToken)).toBe(true)
  // })

  // it('should returns false if token is valid and not expired', () => {
  //   const validToken = ''

  //   jest.mock('jwt-decode', () => jest.fn(() => ({ exp: Date.now() / 1000 + 3600 })))

  //   expect(checkTokenExpiration(validToken)).toBe(true)
  // })
})

