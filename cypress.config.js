const { defineConfig } = require("cypress");
const env = require('./cypress.env.js');



module.exports = defineConfig({
  projectId: "hab357",
  chromeWebSecurity: false,
  viewportWidth: 1000,
  viewportHeight: 660,
  e2e: {
    baseUrl: 'https://demo.automationtesting.in/',
    setupNodeEvents(on, config) {
      config.env = env;
      return config;
    },
  },
});
