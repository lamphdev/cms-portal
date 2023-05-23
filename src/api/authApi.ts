import { http } from './api-config'

export const login = async (username: string, password: string) => {
  const response = await http.post('/v1/auth/login')
  return response.data
}
