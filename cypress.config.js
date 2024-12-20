const { defineConfig } = require("cypress");

require('dotenv').config()

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
        baseUrl: process.env.BASE_URL,
        specPattern: ['**/*.{cy.js,feature,features}'],
    },
    retries: {
        runMode: Number(process.env.CYPRESS_RUNMODE),
        openMode: Number(process.env.CYPRESS_OPENMODE),
    },
});