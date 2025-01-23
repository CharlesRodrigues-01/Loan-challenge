import './../support/commands'

describe('login', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  it('should redirect to the logged in page successfully', () => {
    cy.fillInLoginInformation(Cypress.env('validCpf'))
    cy.get('.text-header').should('be.visible')
    .and('have.text', 'Gerencie seus contratos')
  })
  it('should validate invalid cpf', () => {
    cy.fillInLoginInformation(Cypress.env('invalidCpf'))
    cy.get('#mat-mdc-error-0').should('be.visible')
    .and('have.text', '*CPF Inválido')
  })
  it('should validate help center link successfully', () => {
    cy.get('.text-primary-700').should('be.visible').click()
    cy.origin('https://picpay.com/canais-de-atendimento', () => {
        cy.get('#onetrust-reject-all-handler').should('be.visible').click()
        cy.get('hgroup > .sc-p448vw-0').should('be.visible').and('have.text', 'Canais de atendimento PicPay')
      })
  })
})