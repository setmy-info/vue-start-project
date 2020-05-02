<template lang="pug">
  .div(class="about pug")
    .h1 {{text}}
    .i(class="material-icons") face
    .div {{money | inCurrency('EUR')}}
</template>

<script>
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

</script>

<style scoped>
</style>
