Cypress.Commands.add('loginUI', (username, password) => {
  cy.visit('/')
  cy.get('#user-name').type(username)
  cy.get('#password').type(password)
  cy.get('#login-button').click()
})

Cypress.Commands.add('addProductToCartByName', (name) => {
  cy.contains('.inventory_item', name)
    .contains('button', 'Add to cart')
    .click()
})

Cypress.Commands.add('openCart', () => {
  cy.get('.shopping_cart_link').click()
})
