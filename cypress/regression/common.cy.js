const { Before, Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");
const password = Cypress.env('password');

Given('user is in login page', () => {
    cy.visit('/');
    cy.log('user is in login page');
});

When('user inputs {string} and password', (username) => {
    cy.get('#user-name').type(username);
    cy.get('#password').type(password);
});

When('clicks the login button', () => {
    cy.get('#login-button').click();
});

When('user sees the products page', () => {
    cy.get('.title').should('contain', 'Products');
    cy.url().should('include', '/inventory.html');
});