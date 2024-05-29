import axios from 'axios'
import router from '../router'

let refresh = false

axios.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response && error.response.status === 401 && !refresh) {
      refresh = true
      try {
        const { status, data } = await axios.post(
          `${import.meta.env.VITE_APP_API}auth/refresh`,
          {},
          {
            headers: {
              Authorization: 'Bearer ' + localStorage.getItem('token')
            }
          }
        )

        if (status === 200) {
          localStorage.setItem('token', data.token)
          axios.defaults.headers.common['Authorization'] = 'Bearer ' + data.token

          return axios(error.config)
        }
      } catch (refreshError) {
        console.error('Failed to refresh token', refreshError)

        localStorage.removeItem('token')
        localStorage.removeItem('user')

        router.push('/login')
        return Promise.reject(refreshError)
      } finally {
        refresh = false
      }
    }

    return Promise.reject(error)
  }
)

axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token')

export default axios
