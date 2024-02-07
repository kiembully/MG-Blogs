export const userData = () => {
  const data = localStorage.getItem('user')
  const parsedData = data ? JSON.parse(data) : null
  return parsedData
}

export const authorizationData = () => {
  const data = localStorage.getItem('authorization')
  return data
}
