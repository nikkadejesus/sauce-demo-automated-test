const { Before, Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");

When('selects filter {string}', (order) => {
    cy.get('select.product_sort_container').select(order);
});

Then('user should see items listed by {string}', (order) => {
    let list_prices, sorted_prices
    cy.get('.inventory_item_price').then(($prices) => {
        const prices = $prices.toArray().map((el) => {
            return parseFloat(el.innerText.replace('$', ''));
        });

        list_prices = [...prices];

        if (order == "Price (low to high)") {
            sorted_prices = [...prices].sort((a, b) => a - b);
        } else {
            sorted_prices = [...prices].sort((a, b) => b - a);
        }

        expect(list_prices).to.deep.equal(sorted_prices);
    });
});

Then('user should see items listed alphabetically by {string}', (order) => {
    let item_names, sorted_names
    cy.get('.inventory_item_name').then(($item_names) => {
        item_names = $item_names.toArray().map((el) => el.innerText.trim());

        if (order == "Name (A to Z)") {
            sorted_names = [...item_names].sort();
        } else {
            sorted_names = [...item_names].sort().reverse();
        }

        expect(item_names).to.deep.equal(sorted_names);
    });
});

When('user adds the {string} to cart', (item) => {
    let add_btn_id

    add_btn_id = (item === 'Test.allTheThings() T-Shirt (Red)')
        ? '#add-to-cart-test\\.allthethings\\(\\)-t-shirt\\-\\(red\\)'
        : `#add-to-cart-${item.toLowerCase().replaceAll(' ', '-')}`;

    cy.get(add_btn_id).click();
});

When('clicks the cart icon', () => {
    cy.get('.shopping_cart_link').click();
});

Then('user should see the {string} in cart', (item) => {
    cy.get('.cart_list').should('exist');
    cy.get('.inventory_item_name').invoke('text').should('equal', item);
});

When('sees the {string} in cart', (item) => {
    cy.get('.cart_list').should('exist');
    cy.get('.inventory_item_name').invoke('text').should('equal', item);
});

When('removes the {string}', (item) => {
    let remove_btn_id

    remove_btn_id = (item === 'Test.allTheThings() T-Shirt (Red)')
        ? '#remove-test\\.allthethings\\(\\)-t-shirt\\-\\(red\\)'
        : `#remove-${item.toLowerCase().replaceAll(' ', '-')}`;

    cy.get(remove_btn_id).click();
});

Then('user should see the {string} has been removed from cart', (item) => {
    cy.get('.cart_list').should('exist').and('not.contain', item);
});