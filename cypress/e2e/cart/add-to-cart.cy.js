describe('Cart', () => {
  before(() => {
    cy.loginUI('standard_user', 'secret_sauce')
  })

  it('adds item and checks out', () => {
    cy.contains('.inventory_item', 'Sauce Labs Backpack')
      .contains('button', 'Add to cart').click()

    cy.openCart()
    cy.get('.cart_item').should('have.length', 1)
  })
})
