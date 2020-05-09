import axios from 'axios'
import config from '../config'

const resourceFactory = {

  axios: null,

  newAxios: function () {
    const conf = {
      baseURL: config.resources.jsonUrl,
      timeout: config.resources.timeout,
      headers: {
        abc: 'def'
      }
    }
    this.axios = axios.create(conf)
    this.addInterceptors()
    return this.axios
  },

  addInterceptors: function () {
    this.axios.interceptors.request.use(function (config) {
      // console.log('Request interceptor')
      return config
    }, function (error) {
      // console.log('Request error interceptor')
      return Promise.reject(error)
    })
    this.axios.interceptors.response.use(function (response) {
      // console.log('Response interceptor')
      return response
    }, function (error) {
      // console.log('Response error interceptor')
      return Promise.reject(error)
    })
  }
}

window.resourceFactory = resourceFactory
export default resourceFactory
