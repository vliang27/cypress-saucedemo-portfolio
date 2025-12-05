import ProductsPage from '../../support/pageObjects/ProductsPage'
import products from '../../fixtures/products.json'

describe('Products', () => {
  const p = new ProductsPage()

  beforeEach(() => {
    cy.loginUI('standard_user', 'secret_sauce')
  })

  it('opens a product', () => {
    const target = products[0].name
    p.openProduct(target)
    cy.get('.inventory_details_name').should('contain', target)
  })
})
