// vue.config.js

const path = require('path')

module.exports = {

  devServer: {
    // https://webpack.js.org/configuration/dev-server/
    host: '0.0.0.0',
    port: 8443,
    http2: true,
    https: {
      /*
      key: fs.readFileSync('/path/to/server.key'),
      cert: fs.readFileSync('/path/to/server.crt'),
      ca: fs.readFileSync('/path/to/ca.pem')
      */
    },
    disableHostCheck: true,
    compress: true
  },

  configureWebpack: {
    resolve: {
      // https://webpack.js.org/configuration/resolve/#resolve
      alias: {
        '@': path.resolve(__dirname, 'src'),
        '@views': path.resolve(__dirname, 'src/views'),
        '@components': path.resolve(__dirname, 'src/components'),
        '@stores': path.resolve(__dirname, 'src/stores'),
        '@filters': path.resolve(__dirname, 'src/filters'),
        '@directives': path.resolve(__dirname, 'src/directives'),
        '@services': path.resolve(__dirname, 'src/services'),
        '@resources': path.resolve(__dirname, 'src/resources'),
        '@styles': path.resolve(__dirname, 'src/styles'),
        '@config': path.resolve(__dirname, 'src/config')
      }
    }
  }
}
