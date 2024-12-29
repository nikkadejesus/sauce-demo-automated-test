require('dotenv').config()
const { defineConfig } = require("cypress");
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
const preprocessor = require('@badeball/cypress-cucumber-preprocessor');
const createEsbuildPlugin = require('@badeball/cypress-cucumber-preprocessor/esbuild');

async function setupNodeEvents(on, config) {
    await preprocessor.addCucumberPreprocessorPlugin(on, config);
    on(
        'file:preprocessor',
        createBundler({
            plugins: [createEsbuildPlugin.default(config)],
        })
    );
    return config;
}

module.exports = defineConfig({
    env: {
        username: process.env.USERNAME,
        password: process.env.PASSWORD,
    },
    e2e: {
        setupNodeEvents,
        chromeWebSecurity: false,
        proxy: false,
        baseUrl: process.env.BASE_URL,
        specPattern: ['**/*.{cy.js,feature,features}'],
        defaultCommandTimeout: 200000,
        responseTimeout: 200000,
        pageLoadTimeout: 200000,
    },
    retries: {
        runMode: Number(process.env.CYPRESS_RUNMODE),
        openMode: Number(process.env.CYPRESS_OPENMODE),
    },
});