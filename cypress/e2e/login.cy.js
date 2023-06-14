/// <reference types="Cypress" />

describe('Registar', () => { 

    // beforeEach(() => {
    //   cy.task('cleanDatabase')
   //  })
   
       it('registar admin', () => {
          
   
           cy.visit("https://automationintesting.online/#/admin") 
           cy.url().should('include', '/admin') //Assertion

           cy.get('#collapseBanner > div > div:nth-child(3) > div.col-2.text-center > button').click()
           cy.contains('h2', 'Log into your account').should('exist') //Assertion

           cy.get("#username").type("admin")
           cy.get("#password").type("password")
    
           cy.get("#doLogin").click() 

           cy.contains("#reportLink", "Report") //Assertion
           cy.contains('B&B Booking Management').should('exist') //Assertion
   
       
    
           
    });  
   
   })
   