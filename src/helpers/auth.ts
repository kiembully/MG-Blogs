import { jwtDecode } from 'jwt-decode'

export const checkTokenExpiration = (token: string) => {
  if (!token) {
    console.log('Token not found.')
    return true
  }

  try {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const decodedToken: any = jwtDecode(token)
    const isTokenExpired = decodedToken.exp < Date.now() / 1000

    if (!isTokenExpired) return false

    return true
  } catch (error) {
    console.error('Error decoding the token:', error)
    return true
  }
}
