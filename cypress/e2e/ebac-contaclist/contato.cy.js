/// <reference types="cypress" />

describe("Testes para a home", () => {
  beforeEach(() => {
    cy.visit("https://agenda-contatos-react.vercel.app/");
  });
  it("Deve adicionar um contato", () => {
    cy.get('[type="text"]').type("Lucas");
    cy.get('[type="email"]').type("lucassilva@gmail.com");
    cy.get('[type="tel"]').type("33999310681");
    cy.get(".adicionar").click();
  });

  it("Deve editar um contato", () => {
    cy.get(":nth-child(2) > .sc-gueYoa > .edit").click();
    cy.get('[type="text"]').clear().type("Amanda Souza");
    cy.get('[type="email"]')
      .should("not.be.disabled")
      .clear()
      .type("amandasouza@gmail.com");
    cy.get('[type="tel"]').clear().type("3399419524");
    cy.get(".alterar").click();
    cy.screenshot("editar-contato");
  });

  it("Deve remover um contato", () => {
    cy.get(":nth-child(2) > .sc-gueYoa > .delete").click();
    cy.screenshot("remover-contato");
  });
});
