import jsdi from 'jsdi'
import Vue from 'vue'
import Vuex from 'vuex'

import example1 from '@stores/example1'
import example2 from '@stores/example2'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const storeObject = new Vuex.Store({
  modules: {
    example1: example1,
    example2: example2
  },
  strict: debug
})

jsdi.get().storeService.setStore(storeObject)

export const store = storeObject
