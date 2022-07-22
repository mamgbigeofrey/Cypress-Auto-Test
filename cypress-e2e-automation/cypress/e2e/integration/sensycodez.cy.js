/// <reference type="cypress">
describe("Testing the SensyCodez website", ()=>{
    it("Finds an item and performs the necessary actions",()=>{
        cy.visit("http://localhost/SensyCodez/")
        cy.contains("SensyCodez-green").click()
        cy.get("#name").type("Mamgbi Geofrey")
        cy.get("#email").type("geofrey@cypress.com")
        cy.get("#subject").type("Cypress auto testing")
        cy.get("[data-msg='Please write something for us']").type("I am trying to implement some cypress automation testing to test the website")
        cy.get("#my_form button").click()
    })
    it("Visits the local host dash board and loads the database", ()=>{
        cy.visit("http://localhost/dashboard/")
        cy.contains("phpMyAdmin").click()
        cy.contains("id16938512_sensycodez").click()
        cy.contains("contact_us").click()
      

    })
})