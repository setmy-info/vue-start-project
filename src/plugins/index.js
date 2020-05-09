const plugin = {
  install: function (Vue, options) {
    Vue.mixin({
      created: function () {
        // console.log('Plugin: ', this.$options.name)
      }
    })
  }
}

export default plugin
