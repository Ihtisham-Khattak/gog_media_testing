///<reference types="Cypress" />

describe('Gog Media Testing', () => { 

    it('Part 4', () => {
        cy.visit('https://mc-gog-media.web.app/admin/mypersonalitytest')
        cy.get(':nth-child(4) > .personalityt-test__tab').should('have.text', "Part 4").click()
    });

    it('Part 4 | Checkboxes', () => {
        cy.get('[type="radio"]').click({multiple: true, force: true})
    });
 })