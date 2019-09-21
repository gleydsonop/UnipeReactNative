import axios from 'axios'

export default Api = axios.create({
  baseURL: 'https://node-todo-dev.herokuapp.com'
})
