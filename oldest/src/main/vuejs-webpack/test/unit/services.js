
const servicesContext = require.context('../../static/js/services', true, /(.*)Service.js$/)
servicesContext.keys().forEach(servicesContext)
