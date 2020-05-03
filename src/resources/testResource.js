import resourceFactory from './resourceFactory'

const testResource = {

  axios: resourceFactory.newAxios(),

  bar: function () {
    this.axios.get('/test.json').catch(function (error) {
      console.log('Had an error: ', error.config)
    })
  }
}

window.testResource = testResource
export default testResource
