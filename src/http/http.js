import axios from 'axios'

// axios.defaults.timeout = 5000
// axios.defaults.baseURL = 'http://127.0.0.1:5000'
//
// axios.post('/login', {
//   username: 'dong',
//   password: 'abc'
// })
//   .then(response => {
//     console.log(response)
//   })
//   .catch(error => {
//     console.log(error)
//   })

let instance = axios.create({
  baseURL: 'http://127.0.0.1:5000',
  timeout: 5000
})

export default instance
