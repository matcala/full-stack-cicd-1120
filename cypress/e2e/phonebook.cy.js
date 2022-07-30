describe('Phonebook', function () {

   beforeEach(function () { cy.visit('http://localhost:3001') })

   it('front page can be opened', function () {
      cy.contains('Phonebook')
   })

   it('person can be added', function () {
      cy.get('input[id="name"]').type('test')
      cy.get('input[id="number"]').type('123-34534543')
      cy.contains('add').click()
      cy.contains('test')
   })

   it('person can be deleted', function () {
      cy.contains('test').contains('delete').click()
      cy.get('test').should('not.exist')
   })
})
