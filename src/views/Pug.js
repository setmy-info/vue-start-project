import testService from '@services/testService'

export default {
  name: 'Pug',
  data: function () {
    return {
      text: testService.foo(),
      money: 1234
    }
  }
}
