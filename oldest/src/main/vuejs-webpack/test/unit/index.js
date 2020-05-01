import Vue from 'vue'

Vue.config.productionTip = false

const testsContext = require.context('./specs', true, /.*Component\.spec\.js$/)
testsContext.keys().forEach(testsContext)

const srcContext = require.context('../../src', true, /^\.\/(?!main(\.js)?$)/)
srcContext.keys().forEach(srcContext)
