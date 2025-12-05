class ProductsPage {
  addProductByName(name) {
    cy.contains('.inventory_item', name)
      .contains('button', 'Add to cart').click()
  }
  productNames() { return cy.get('.inventory_item_name') }
  openProduct(name) {
    cy.contains('.inventory_item', name).find('a').click()
  }
}
export default ProductsPage
