///<reference types="Cypress" />

describe("Gog Media Testing", () => {
  it("Part 4", () => {
    cy.visit("https://gogpersonality.web.app/admin/mypersonalitytest");
    cy.get(":nth-child(4) > .personalityt-test__tab")
      .should("have.text", "Part 4")
      .click();

    // cy.viewport("macbook-15");
    // cy.wait(800);
    // cy.viewport("macbook-13");
    // cy.wait(800);
    // cy.viewport("macbook-11");
    // cy.wait(800);
    // cy.viewport("ipad-2");
    // cy.wait(800);
    // cy.screenshot();
    // cy.viewport("ipad-mini");
    // cy.wait(800);
    // cy.viewport("iphone-6+");
    // cy.wait(800);
    // cy.viewport("iphone-6");
    // cy.wait(800);
    // cy.viewport("iphone-5");
    // cy.wait(800);
    // cy.viewport("iphone-4");
    // cy.wait(800);
    // cy.viewport("iphone-3");
    // cy.wait(800);
  });

  it("Part 4 | Checkboxes", () => {
    cy.get('[type="radio"]').click({ multiple: true, force: true });
  });

  // it(' Next Button', () => {
  //     cy.get('.float-right > :nth-child(2)').should("have.text", "Next").click()
  // })
});
