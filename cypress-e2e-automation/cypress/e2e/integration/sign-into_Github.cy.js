context('first test', function(){
    specify('greeting', function(){
        cy.visit('https://www.google.com/')
        cy.get('.gLFyf').type('Michael Jordan{enter}')
    })
})

context('Github login', function(){
    specify('SIGN IN', function(){
        cy.visit('https://github.com/login')
        cy.get('#login_field').type('gmamgbi1999@gmail.com')
        cy.get('#password').type('Ne17991999@')
        cy.get('.btn').click()

        

    })
})
