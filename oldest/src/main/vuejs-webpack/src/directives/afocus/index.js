import Vue from 'vue'

Vue.directive('afocus', {
  inserted: function (el) {
    el.focus()
  }
})

export default {
}
