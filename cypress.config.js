const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.saucedemo.com',
    supportFile: 'cypress/support/e2e.js',
    setupNodeEvents(on, config) {
      return config
    }
  },
  component: {
    devServer: {
      framework: 'react',
      bundler: 'webpack'
    }
  },
  video: true,
  screenshotsFolder: 'cypress/screenshots',
  videosFolder: 'cypress/videos'
})