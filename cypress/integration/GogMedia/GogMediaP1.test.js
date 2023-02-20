///<reference types="Cypress" />

describe("GOG Media Testing", () => {
  it("GoG Media Part 1 Testing", () => {
    cy.visit("https://gogpersonality.web.app/admin/mypersonalitytest");
    cy.url().should("eq","https://gogpersonality.web.app/admin/mypersonalitytest");
  });

  it("GoG Media Part 1", () => {

    for( let i=1; i<=50; i++) {
    cy.on("uncaught:exception", (err, runnable) => {
      expect(err.message).to.include("of undefined");
      done();
      return false;
    });
    cy.get(`:nth-child(${i}) > .col > :nth-child(1) > div > .personality-test-part__input-field`)
      .select("1=disagree").should("have.value", "1");}

      cy.get('form > .d-flex > .btn').click()
  });
});
