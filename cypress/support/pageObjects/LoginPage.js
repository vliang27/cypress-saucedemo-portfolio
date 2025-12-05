class LoginPage {
  visit() { cy.visit('/') }
  fillUsername(u) { cy.get('#user-name').clear().type(u) }
  fillPassword(p) { cy.get('#password').clear().type(p) }
  submit() { cy.get('#login-button').click() }
}
export default LoginPage
