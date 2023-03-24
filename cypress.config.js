const { defineConfig } = require("cypress");
const env = require('./cypress.env.js');



module.exports = defineConfig({
  chromeWebSecurity: false,
  viewportWidth: 1440,
  viewportHeight: 900,
  e2e: {
    baseUrl: 'https://demo.automationtesting.in/',
    setupNodeEvents(on, config) {
      config.env = env;
      return config;
    },
  },
});
