<template lang="pug">
  .div(class="about pug")
    .h1 {{text}}
</template>

<script>
  import testService from '@services/testService'

  export default {
    name: 'Pug',
    data: function () {
      return {
        text: testService.foo()
      }
    }
  }

</script>

<style scoped>
</style>
