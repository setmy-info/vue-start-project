import axios from "axios";

const resourceFactory = {

  axios: null,

  init: function () {
    this.axios = axios.create()
    this.axios.defaults.timeout = 2500
    this.axios.interceptors.request.use(function (config) {
      console.log("Request interceptor");
      return config;
    }, function (error) {
      console.log("Request error interceptor");
      return Promise.reject(error);
    });
    this.axios.interceptors.response.use(function (response) {
      console.log("Response interceptor");
      return response;
    }, function (error) {
      console.log("Response error interceptor");
      return Promise.reject(error);
    });
  },

  getAxios: function () {
    return this.axios;
  }
}

resourceFactory.init();

window.resourceFactory = resourceFactory;
export default resourceFactory;
