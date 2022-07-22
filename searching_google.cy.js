/// <reference type="cypress" >
describe("Searching Google", ()=>{
    it("Searches google.com for the keyword Michael Jordan", ()=>{
        cy.visit("https://www.google.com/")
        cy.get("[class='gLFyf gsfi']").type("Michael Jordan {enter}")
      //  cy.contains("Wikipedia").click()

      //navigating to the next page by clicking the next button
      let count=1;
      for(count=1;count<15;count++){
      cy.get("[style='display:block;margin-left:53px']").click()

      }
       //navigating to the previous page by clicking the previous button
       for(count=15;count<=1;count--){

        cy.get("[style='display:block;margin-right:35px;clear:right']").click()
       }
      


    })
})