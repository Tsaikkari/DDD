const storedToken = localStorage.getItem('authToken')

export const config = {
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${storedToken}`,
  },
}
