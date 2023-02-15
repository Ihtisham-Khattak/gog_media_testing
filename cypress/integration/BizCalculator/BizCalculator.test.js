///<reference types="Cypress" />

const random_number = Math.random() * 10;

describe("Biz-Calculator", () => {
  it("URL check", () => {
    cy.visit("https://biz-calculator-frontend.web.app/");
    cy.url().should("contain", "biz-calculator-frontend.web.app");
  });

  //   it("Mobile View Port", () => {
  //     cy.viewport("macbook-15");
  //     cy.viewport("macbook-15");
  //     cy.wait(800);
  //     cy.viewport("macbook-13");
  //     cy.wait(800);
  //     cy.viewport("macbook-11");
  //     cy.wait(800);
  //     cy.viewport("ipad-2");
  //     cy.wait(800);
  //     cy.screenshot();
  //     cy.viewport("ipad-mini");
  //     cy.wait(800);
  //     cy.viewport("iphone-6+");
  //     cy.wait(800);
  //     cy.viewport("iphone-6");
  //     cy.wait(800);
  //     cy.viewport("iphone-5");
  //     cy.wait(800);
  //     cy.viewport("iphone-4");
  //     cy.wait(800);
  //     cy.viewport("iphone-3");
  //     cy.wait(800);
  //   });

  it("Values Input", () => {
    for (var i = 0; i <= 51; i++) {
      cy.get('[name="amount"]')
        .eq(i++)
        .type(random_number)
        .click({ multiple: true, force: true });
    }
    cy.get(".mt-sm-0 > #amount").type("Peshawar Pakistan");
    cy.get(".mt-lg-0 > #amount").type("1234");
    cy.get(
      ":nth-child(2) > .card > .card-body > :nth-child(1) > :nth-child(6) > #amount"
    ).type(1234);
    cy.get(
      ":nth-child(2) > .card > .card-body > :nth-child(1) > :nth-child(8) > #amount"
    ).type(random_number);
    cy.get(
      ":nth-child(2) > .card > .card-body > :nth-child(1) > :nth-child(6) > #amount"
    ).type(random_number);
    cy.get(":nth-child(1) > :nth-child(10) > #amount").type(random_number);
    cy.get(":nth-child(1) > :nth-child(11) > .form-control").type(
      random_number
    );
    cy.get(":nth-child(12) > .form-control").type(random_number);
    cy.get(":nth-child(1) > :nth-child(13) > .form-control").type(
      random_number
    );
    cy.get(":nth-child(1) > :nth-child(14) > .form-control").type(
      random_number
    );
    cy.get(":nth-child(15) > .form-control").type(random_number);
    cy.get(":nth-child(1) > :nth-child(16) > .form-control").type(
      random_number
    );
    cy.get(":nth-child(1) > :nth-child(17) > .form-control").type(
      random_number
    );
    cy.get(":nth-child(18) > .form-control").type(random_number);
    cy.get(":nth-child(1) > :nth-child(19) > .form-control").type(
      random_number
    );
    cy.get(":nth-child(1) > :nth-child(20) > .form-control").type(
      random_number
    );
    cy.get(":nth-child(21) > .form-control").type(random_number);
    cy.get(':nth-child(2) > .card > .card-body > :nth-child(2) > :nth-child(4) > #amount').type(23)
    cy.get(':nth-child(2) > :nth-child(8) > #amount').type(22)
    cy.get(':nth-child(2) > .card > .card-body > :nth-child(3) > :nth-child(2) > #amount').type(random_number)
    cy.get(':nth-child(3) > :nth-child(8) > #amount').type(random_number)
    cy.get(':nth-child(14) > #amount').type(random_number)
    cy.get(':nth-child(20) > #amount').type(random_number)
    cy.get(':nth-child(26) > #amount').type(random_number)
    cy.get(':nth-child(32) > #amount').type(random_number)
    cy.get(':nth-child(38) > #amount').type(random_number)
    cy.get(':nth-child(44) > #amount').type(random_number)

    
  });
});
