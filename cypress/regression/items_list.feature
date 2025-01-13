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

    Scenario: User can add an item to the cart
        And user adds the '<item>' to cart
        And clicks the cart icon
        Then user should see the '<item>' in cart

        Examples:
            | item                              |
            | Sauce Labs Backpack               |
            | Sauce Labs Bike Light             |
            | Sauce Labs Bolt T-Shirt           |
            | Sauce Labs Fleece Jacket          |
            | Sauce Labs Onesie                 |
            | Test.allTheThings() T-Shirt (Red) |

    Scenario: User can remove a product from the cart
        And user adds the '<item>' to cart
        And clicks the cart icon
        And sees the '<item>' in cart
        And removes the '<item>'
        Then user should see the '<item>' has been removed from cart

        Examples:
            | item                              |
            | Sauce Labs Backpack               |
            | Sauce Labs Bike Light             |
            | Sauce Labs Bolt T-Shirt           |
            | Sauce Labs Fleece Jacket          |
            | Sauce Labs Onesie                 |
            | Test.allTheThings() T-Shirt (Red) |