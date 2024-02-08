import { userData, authorizationData } from './getLocalStorage'

describe('User data', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  it('should return null if localStorage is empty', () => {
    expect(userData()).toBeNull()
  })

  it('should return data from localStorage', () => {
    const mockUser = { id: 1, name: 'Doe John', email: 'doe@example.com' }
    localStorage.setItem('user', JSON.stringify(mockUser))

    expect(userData()).toEqual(mockUser)
  })
})

describe('Authorization', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  it('should return null if authorization is empty', () => {
    expect(authorizationData()).toBeNull()
  })

  it('should return data from localStorage', () => {
    const mockToken = 'mock-token'
    localStorage.setItem('authorization', mockToken)

    expect(authorizationData()).toEqual(mockToken)
  })
})

