import resourceFactory from "./resourceFactory"

const testResource = {

  axios: resourceFactory.axios,

  bar: function () {
    this.axios.get('rest/testResource/12345').catch(function (error) {
      console.log("Had an error: ", error.config);
    });
  }
}

window.testResource = testResource;
export default testResource;
