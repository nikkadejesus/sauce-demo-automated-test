# Sample Automated Test Using Cypress

This repository was created as a sample to demonstrate automated testing using **Cypress** with **Cucumber**. The tests are designed for the [SauceDemo](https://www.saucedemo.com) website, a demo platform used for practicing testing and demonstrating tools like Cypress and Cucumber.


## Requirements
- **Node.js:** Install a stable version of Node.js (LTS version is recommended). Cypress requires Node.js to be installed.
  - [Download Node.js](https://nodejs.org)
- **Browser Setup:** Cypress supports various browsers like Chrome, Edge, and Electron. Ensure at least one is installed on your system.

## Install Cypress

```
npm install cypress --save-dev
```

## Run tests
- To open the Cypress Test Runner:
  - Run:
  ```
  npx cypress open
  ```
  Then select any `.feature` file
  - A passing test will be displayed with a green checkmark (✔️).
  - A failing test will be displayed with a red X (❌).
- To run all tests in CLI:
  - Run:
  ```
  npx cypress run  --spec "cypress/regression/*.feature"
  ```

  - To run a specific test file, simply run:
  ```
  npx cypress run --spec "cypress/regression/[feature-file-name].feature"
  ```

### [![Cypress.io](https://img.shields.io/badge/tested%20with-Cypress-04C38E.svg)](https://www.cypress.io/)
