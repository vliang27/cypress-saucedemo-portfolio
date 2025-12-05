import LoginPage from '../../support/pageObjects/LoginPage'
import users from '../../fixtures/users.json'

describe('Login', () => {
  const loginPage = new LoginPage()
  const creds = users.standard_user

  it('logs in successfully', () => {
    cy.loginUI(creds.username, creds.password)
    cy.url().should('include', '/inventory.html')
  })
})
