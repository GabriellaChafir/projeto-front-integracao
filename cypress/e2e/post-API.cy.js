/// <reference types="cypress" />

describe('Teste Post', () => {
    it('deve realizar o teste na API ', () => {
        cy.request('POST', 'https://serverest.dev/usuarios', {

            'nome': 'Fulano',
            'email': 'fulanodetal8788@qa.com.br',
            'password': 'teste12345',
            'administrador': 'true'
        }).then(
            (response) => {

                expect(response.body).to.have.property('message', 'Cadastro realizado com sucesso', 'id')
            }
        )

    });
    it('deve realizar teste de usuário ', () => {
        cy.request('POST', 'https://serverest.dev/usuarios', {

            'nome': 'Fulaninho',
            'email': 'Fulanodetal8788@qa.com.br',
            'password': 'teste12345',
            'administrador': 'true'
        }).then(
            (response) => {

                expect(response.body).to.have.property('message', 'Este email já está sendo usado', 'id')
            }
        )

    });
});











