// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage'),
      require('@angular-devkit/build-angular/plugins/karma'),
      require('karma-spec-reporter'),
    ],
    client: {
      clearContext: false, // leave Jasmine Spec Runner output visible in browser
    },
    preprocessors: {
      'src/**/*.ts': ['coverage'],
    },
    coverageReporter: {
      dir: require('path').join(__dirname, '../../coverage/translate-object-loader'),
      subdir: '.',
      includeAllSources: true,
      reporters: [{ type: 'cobertura', file: 'cobertura-coverage.xml' }, { type: 'html' }, { type: 'text-summary' }],
    },
    reporters: ['spec', 'kjhtml', 'coverage'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_WARN,
    autoWatch: true,
    browsers: ['ChromeNoSandbox'],
    customLaunchers: {
      ChromeNoSandbox: {
        base: 'ChromeHeadless',
        flags: ['--no-sandbox'],
      },
    },
    singleRun: true,
    restartOnFileChange: true,
  });
};
