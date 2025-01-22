import './../support/commands'

describe('login', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  it('should redirect to the logged in page successfully', () => {
    cy.fillInLoginInformation(Cypress.env('cpf'))
    cy.get('.text-header').should('be.visible')
    .and('have.text', 'teste')
  })
})