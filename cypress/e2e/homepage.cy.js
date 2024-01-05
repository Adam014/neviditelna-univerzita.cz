describe('My First Test', () => {
  it('visits the app root url', () => {
    cy.visit('/')
    cy.contains('h3', 'Jan Musílek')
    cy.contains('h3', 'Ferda')
  })
})
