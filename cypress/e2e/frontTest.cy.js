/// <reference types="cypress" />

describe('Front', () => {
    it('deve realizar o login de um usuário', () => {
        cy.intercept('*/login')
        cy.visit('https://front.serverest.dev/login')
        cy.get('[data-testid="email"]').type('GabriellaChafir2023@qa.com.br')
        cy.get('[data-testid="senha"]').type('teste12345')
        cy.get('[data-testid="entrar"]').click()

    });

    it('deve realizar o login de um usuário', () => {
        cy.intercept('*/login')
        cy.visit('https://front.serverest.dev/login')
        cy.get('[data-testid="email"]').type('GabriellaChafir2017@qa.com.br')
        cy.get('[data-testid="senha"]').type('teste12345')
        cy.get('[data-testid="entrar"]').click()


    });

});