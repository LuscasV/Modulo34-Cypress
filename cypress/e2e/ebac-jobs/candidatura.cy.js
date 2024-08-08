/// <reference types="cypress" />

describe("Testes para a pagina candidatura", () => {
  it("Deve levar o usuario até o formulario de inscrição", () => {
    cy.visit("https://ebac-jobs-e2e.vercel.app/");
    cy.get(".Vaga_vagaLink__DeFkk").first().click();
    cy.get("input").should("have.length", 7);
    cy.screenshot("tela-inscricao");
  });

  it("Deve preencher o formulário de inscrição", () => {
    cy.visit("https://ebac-jobs-e2e.vercel.app/vagas/1");
    cy.get('input[name="telefone"]').type("11 23456784");
    cy.get('input[name="nome-completo"]').type("lucas silva");
    cy.get('input[name="email"]').type("lucassilva@teste.com");
    cy.get('input[name="endereco"]').type(
      "rua jest, bairro cypress, minas gerais"
    );
    cy.get("#linux").check();
    cy.get('select[name="escolaridade"]').select("outros");
    cy.get(".Aplicacao_button__tw2AE").click();

    cy.on("window:alert", (conteudo) => {
      expect(conteudo).contain("Obrigado pela candidatura!");
    });
    cy.screenshot("tela-inscricao-preenchido");
  });
});
