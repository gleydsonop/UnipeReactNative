import axios from 'axios'

export default Api = axios.create({
  baseURL: 'https://pets-unipe.herokuapp.com/pets'
})
