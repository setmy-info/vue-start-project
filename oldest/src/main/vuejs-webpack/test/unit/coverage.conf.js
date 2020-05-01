
module.exports = function (config) {
  config.set({
    basePath: '../..',
    files: [
      // External web libraries
      'node_modules/es6-promise/dist/es6-promise.auto.js',
      'node_modules/babel-polyfill/dist/polyfill.min.js',
      'static/js/lib/axios/dist/axios.min.js',
      'static/js/lib/servicejs/dist/servicejs.min.js',
      'static/js/lib/servedjs/dist/servedjs.min.js',

      // Project services
      'static/js/services/*Service.js',

      'test/unit/specs/*Service.spec.js'
    ],
    preprocessors: {
      'static/js/services/*Service.js': ['coverage']
    },
    autoWatch: true,
    colors: true,
    logLevel: config.LOG_INFO,
    port: 9876,
    singleRun: false,
    reporters: ['progress',  /*'spec',*/ 'coverage' , 'html'],
    frameworks: ['jasmine', /* 'mocha', 'sinon-chai', 'phantomjs-shim'*/],
    browsers: [/*'Chrome',*/'PhantomJS'],
    plugins: [
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-phantomjs-launcher',
      'karma-jasmine',
      'karma-html-reporter',
      'karma-coverage'
    ],
    htmlReporter: {
      outputDir: 'target/services-html'
    },
    coverageReporter: {
      //type: 'html',
      dir: 'target/services-coverage',
      reporters: [
        { type: 'lcov', subdir: '.' },
        { type: 'text-summary' }
      ]
    }
  })
}
