Feature: User can login on the Sauce demo site

    Background:
        Given user is in login page
        When inputs "<username>" and password
        And clicks the login button
        Then user should be able to see the products page

        Examples:
            | username                |
            | standard_user           |
            | locked_out_user         |
            | problem_user            |
            | performance_glitch_user |