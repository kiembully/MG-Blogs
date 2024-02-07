import { jwtDecode } from 'jwt-decode'

export const checkTokenExpiration = (token: string) => {
  if (token) {
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const decodedToken: any = jwtDecode(token)
      const isTokenExpired = decodedToken.exp < Date.now() / 1000
      if (isTokenExpired) {
        console.log('Token is expired. Log out the user.')
        return true
      } else {
        console.log('Token is valid.')
        return false
      }
    } catch (error) {
      console.error('Error decoding the token:', error)
      return true
    }
  } else {
    console.log('Token not found.')
    return true
  }
}
