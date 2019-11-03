import axios from 'axios'

export default Api = axios.create({
  baseURL: 'http://192.168.0.4:8080/api/'
})
