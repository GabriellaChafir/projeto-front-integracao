/// <reference types="cypress" />

describe('GET', () => {
    it('deve realizar o método get na API ', () => {

        cy.request('https://serverest.dev/usuarios').then(res => expect(res.status).to.eq(200))
        cy.request('https://serverest.dev/usuarios').then(res => expect(res.status).to.eq(201))

    });

});