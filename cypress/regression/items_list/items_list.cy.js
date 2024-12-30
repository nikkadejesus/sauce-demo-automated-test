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

        // sorted_prices.forEach(price => cy.log(price));
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

        // sorted_names.forEach(name => cy.log(name));
        expect(item_names).to.deep.equal(sorted_names);
    });
});