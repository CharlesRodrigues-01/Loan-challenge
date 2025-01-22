Cypress.Commands.add('fillInLoginInformation', (cpf) => {
    cy.get('#mat-input-0').should('be.visible').type(cpf)
    cy.get('.bg-primary-500').should('be.visible').click()
  })