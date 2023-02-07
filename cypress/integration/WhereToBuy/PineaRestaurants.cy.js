///<reference types="Cypress" />

describe('Pinea Restaurants', () => { 
    it('Fist Page', () => {
        cy.visit('https://wheretobuy-mdp.web.app/')
        cy.get('.d-flex > .mt-5').should('have.text', 'Where to Buy Professional Grade and Detailing Supplies Near You')
        cy.get('#exampleEmail').type('25000')
        cy.get('.ml-2 > #exampleSelect').select(['20 mi'])
        cy.get('.col-12 > .mapSection__select > #exampleSelect').select(['50 mi'])        
    });

    it('Let Us Know Page', () => {
        cy.get('.btn').should("have.text", "Let Us Know").click()

        
    });
 })