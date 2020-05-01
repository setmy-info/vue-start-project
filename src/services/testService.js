import testResource from '../resources/testResource'

const testService = {
  foo: function () {
    testResource.bar()
    return 'Foo for Pug!'
  }
}

window.testService = testService

export default testService
