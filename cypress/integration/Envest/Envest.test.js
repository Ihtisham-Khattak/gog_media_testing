///<reference types="Cypress" />

describe("Envest ", () => {
  it("Envest Visit Page", () => {
    cy.visit("https://envest-29b14.web.app/");
  });

  it("Envest Contact Page", () => {
    for (var i = 1; i <= 7; i++) {
      cy.get(`:nth-child(${i}) > .nav-link`).click();
    }
  });

  it("Envest Home Screen", () => {
    cy.get(":nth-child(1) > .nav-link").contains("Home").click();
    cy.viewport("macbook-15");
    cy.wait(1000);
    cy.viewport("macbook-13");
    cy.wait(1000);
    cy.viewport("macbook-11");
    cy.wait(1000);
    cy.viewport("ipad-2");
    cy.wait(1000);
    cy.screenshot();
    cy.viewport("ipad-mini");
    cy.wait(1000);
    cy.viewport("iphone-6+");
    cy.wait(1000);
    cy.viewport("iphone-6");
    cy.wait(1000);
    cy.viewport("iphone-5");
    cy.wait(1000);
    cy.viewport("iphone-4");
    cy.wait(1000);
    cy.viewport("iphone-3");
    cy.wait(1000);
  });
});
