// https://on.cypress.io/api

describe('My First Test', () => {
  it('visits the app root url', () => {
    cy.visit('/')
    cy.contains('h1', 'Turn on the Selly')
    cy.contains('h3', 'Balance screen time with kindness in mind!')
  })
})
