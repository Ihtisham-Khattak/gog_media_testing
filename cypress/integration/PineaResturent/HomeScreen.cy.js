///<reference types="Cypress" />
describe('Pinea Resturents', () => { 

    before(() =>{
        cy.visit('https://pinea-restaurant.web.app/auth/login')
        cy.url().should("eq", "https://pinea-restaurant.web.app/auth/login")
        cy.title().should('eq', "Pinea MenuX Dashboard")
        cy.location("protocol").should("contain", "https")
    })
    
    it.only('Login Screen', () => {      
        cy.get('[type="email"]').click().type('testadmin@gmail.com')
        cy.get('[type="password"]').click().type('1234567')
        cy.get('[type="submit"]').should("have.text", "Sign in").click()
    });

    it.only('Dashboard Section', () => {
        cy.get('.ml-2 > .mb-0').should("have.text", "Jessica Jones").click()
        cy.viewport("macbook-15");
        cy.viewport("macbook-15");
        cy.wait(800);
        cy.viewport("macbook-13");
        cy.wait(800);
        cy.viewport("macbook-11");
        cy.wait(800);
        cy.viewport("ipad-2");
        cy.wait(800);
        cy.screenshot()
        cy.viewport("ipad-mini");
        cy.wait(800);
        cy.viewport("iphone-6+");
        cy.wait(800);
        cy.viewport("iphone-6");
        cy.wait(800);
        cy.viewport("iphone-5");
        cy.wait(800);
        cy.viewport("iphone-4");
        cy.wait(800);
        cy.viewport("iphone-3");
        cy.wait(800);
    });
 })