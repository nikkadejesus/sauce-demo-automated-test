Feature: User can sort the list of items

    Background:
        Given user is in login page
        When user inputs "standard_user" and password
        And clicks the login button
        And user sees the products page

    Scenario: User can sort items by price '<order>'
        And selects filter '<order>'
        Then user should see items listed by '<order>'

        Examples:
            | order               |
            | Price (low to high) |
            | Price (high to low) |

    Scenario: User can sort items in alphabetical or reverse alphabetical '<order>'
        And selects filter '<order>'
        Then user should see items listed alphabetically by '<order>'

        Examples:
            | order         |
            | Name (A to Z) |
            | Name (Z to A) |