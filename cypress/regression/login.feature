Feature: User can login/logout on the Sauce demo site

    Background:
        Given user is in login page

    Scenario: User can successfully login using the username standard_user
        When user inputs "standard_user" and password
        And clicks the login button
        Then user should be able to see the products page

    Scenario: User should not be able to login using the username locked_out_user
        When user inputs "locked_out_user" and password
        And clicks the login button
        Then user should be able to see the error message "Epic sadface: Sorry, this user has been locked out."

    Scenario: User can successfully logout
        When user inputs "standard_user" and password
        And clicks the login button
        And user sees the products page
        And clicks the hamburger menu
        And clicks logout
        Then user should be redirected to the login page