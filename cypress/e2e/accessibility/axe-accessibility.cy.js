describe('Accessibility', () => {
  it('checks homepage accessibility', () => {
    cy.visit('/')
    cy.injectAxe()
    cy.checkA11y()
  })
})
