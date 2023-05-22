import Axios, { AxiosError, InternalAxiosRequestConfig } from 'axios'

const http = Axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL
})


const TOKEN_FIELD = 'access_token'
const REFRESH_TOKEN_FIELD = 'refresh_token'

const setupInterceptor = () => {
  const initToken = localStorage.getItem(TOKEN_FIELD)
  let refreshing = false
  let tokenPromise = Promise.resolve(initToken)

  const refreshToken = async () => {
    const refreshToken = localStorage.getItem(REFRESH_TOKEN_FIELD)
    if (!refreshToken) {
      return
    }
    refreshing = true
    tokenPromise = new Promise(async (resolve, reject) => {
      try {
        const response = await http.post('/refresh', {
          refreshToken
        })
        const { data } = response.data
        const { access_token, refresh_token } = data
        localStorage.setItem(TOKEN_FIELD, access_token)
        localStorage.setItem(REFRESH_TOKEN_FIELD, refresh_token)
        resolve(access_token)
      } catch (e) {
        reject(e)
      } finally {
        refreshing = false
      }
    })
  }

  const requestInterceptor = (config: InternalAxiosRequestConfig) => {
    const token = localStorage.getItem(TOKEN_FIELD)
    if (token) {
      ;(config.headers as any).set('Authorization', `Bearer ${token}`)
    }
    return config
  }

  const responseInterceptor = async (error: AxiosError) => {
    const { status, config } = error
    if (status === 401) {
      if (!refreshing) {
        refreshToken()
      }
      const token = await tokenPromise
      config?.headers.set('Authorization', `Bearer ${token}`)
    }

    return Axios(config as any)
  }

  return {
    requestInterceptor,
    responseInterceptor
  }
}

const interceptors = setupInterceptor()
http.interceptors.request.use(interceptors.requestInterceptor)

http.interceptors.response.use(
  response => response,
  interceptors.responseInterceptor
)

export { http }
