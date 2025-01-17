const { Before, Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");

Then('user should be able to see the products page', () => {
    cy.get('.title').should('contain', 'Products');
});

When('clicks the hamburger menu', () => {
    cy.get('button#react-burger-menu-btn').click();
});

When('clicks logout', () => {
    cy.get('a#logout_sidebar_link').click();
});

When('user inputs invalid {string}', (credential) => {
    cy.get(`#${credential}`).type('invalid');

    const input = (credential === 'user-name') ? Cypress.env('password') : 'standard_user';
    const target_field = (credential === 'user-name') ? '#password' : '#user-name';

    cy.get(target_field).type(input);
});

Then('user should be able to see the error message {string}', (msg) => {
    cy.get('h3[data-test="error"]').should('contain', msg)
        .find('button[data-test="error-button"]').should('be.visible');

});

Then('user should be redirected to the login page', () => {
    cy.get('#user-name').should('be.visible');
    cy.get('#password').should('be.visible');
    cy.get('#login-button').should('be.visible');
    cy.get('#login_credentials').should('be.visible');
    cy.get('.login_password').should('be.visible');
});