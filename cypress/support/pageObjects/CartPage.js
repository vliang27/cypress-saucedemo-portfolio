class CartPage {
  open() { cy.get('.shopping_cart_link').click() }
  checkout() { cy.contains('button', 'Checkout').click() }
}
export default CartPage
