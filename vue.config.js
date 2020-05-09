// vue.config.js

const path = require('path')
const webpack = require('webpack')

module.exports = {
  lintOnSave: false,
  devServer: {
    // https://webpack.js.org/configuration/dev-server/
    host: '0.0.0.0',
    port: 8080,
    // port: 8443,
    // http2: true,
    // https: {
    /*
      key: fs.readFileSync('/path/to/server.key'),
      cert: fs.readFileSync('/path/to/server.crt'),
      ca: fs.readFileSync('/path/to/ca.pem')
      */
    // },
    disableHostCheck: true,
    compress: true
  },

  configureWebpack: {
    devtool: false,
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
    },
    plugins: [
      new webpack.LoaderOptionsPlugin({
        options: {
          rules: [
            /* {
              test: /\.vue$/,
              loader: 'vue-loader',
              options: {
                hotReload: false // disables Hot Reload
              }
            } */
          ]
        }
      })
    ]
  }
}
