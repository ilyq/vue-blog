import axios from 'axios'
import router from '@/router/index'

axios.interceptors.response.use(
  response => {
    if (response.data.code === 109) {
      router.push({
        name: 'Login'
      })
    }
    return response
  },
  error => {
    return Promise.reject(error)
  }
)

export default axios
