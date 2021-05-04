/// <reference types="cypress" />

describe('Acesso página principal e submete os campos', () => {
    beforeEach(() => cy.visit('/'));
    it('Titulo página visível', () => {
        cy.get('[src="/images/Toolsqa.jpg"]').should('be.visible')
    });

    it('Preencher os campos', () => {
        cy.get('.card-body').contains('Elements').click()
        cy.get('#item-0').click()
        cy.get('#userName').as('name').type('Mizael Tobias Nazareno')
        cy.get('#userEmail').as('email').type('mtszareno@gmail.com')
        cy.get('#currentAddress').as('currentAddress').type('Rio de Janeiro / BR')
        cy.get('#permanentAddress').as('permanAddress').type('Cabo Frio / BR')
        cy.get('#submit').click()
        cy.get('@name').should('be.empty')
        cy.get('@email').should('be.empty')
        cy.get('@currentAddress').should('be.empty')
        cy.get('@permanAddress').should('be.empty')
    });
});

describe('Teste de envio de Formulário', () => {
    beforeEach(() => cy.visit('/'));
    it('Preenche os campos do Form', () => {
        cy.get('.card-body').contains('Elements').click()
        cy.get(':nth-child(2) > .group-header > .header-wrapper').click()
        cy.get(':nth-child(2) > .element-list > .menu-list > #item-0').click()
        cy.get('#firstName').as('firstname').type('Carlos')
        cy.get('#lastName').as('lastname').type('Nazareno')
        cy.get('#userEmail').as('email').type('humildade@gmail.com')
        cy.get('#genterWrapper > .col-md-9 > :nth-child(1) > .custom-control-label').click()
        cy.get('#userNumber').type('2222222222')
        cy.get('#dateOfBirthInput').click()
        cy.get('.react-datepicker__day--020').click()
        cy.get('#hobbiesWrapper > .col-md-9 > :nth-child(1) > .custom-control-label').click()
        cy.get('#currentAddress').as('currentAddress').type('Rio de Janeiro / BR')
        cy.get('#state > .css-yk16xz-control > .css-1hwfws3 > .css-1wa3eu0-placeholder').click()
        cy.get('#react-select-3-option-0').click()
        cy.get('#city > .css-yk16xz-control > .css-1hwfws3 > .css-1wa3eu0-placeholder').click()
        cy.get('#react-select-4-option-0').click()
        cy.get('#submit').click()
        cy.get('#closeLargeModal').click()
        cy.get('@firstname').should('be.empty')
        cy.get('@lastname').should('be.empty')
        cy.get('@email').should('be.empty')
        cy.get('@currentAddress').should('be.empty')
    });
});

describe('Teste de tabelas', () => {
    beforeEach(() => cy.visit('/'));
    it('Preenche um usuário e deleta em seguida', () => {
        cy.get('.card-body').contains('Elements').click()
        cy.get('#item-3').click()
        cy.get('#addNewRecordButton').click()
        cy.get('#firstName').as('firstname').type('Pedro')
        cy.get('#lastName').as('lastname').type('Camargo')
        cy.get('#userEmail').as('email').type('salvesalve@gmail.com')
        cy.get('#age').type('20')
        cy.get('#salary').type('2200')
        cy.get('#department').as('department').type('Lojística')
        cy.get('@firstname').should('be.empty')
        cy.get('@lastname').should('be.empty')
        cy.get('@email').should('be.empty')
        cy.get('@department').should('be.empty')
        cy.get('#submit').click()
        cy.wait(2000)
        cy.get('#delete-record-4 > [stroke="currentColor"]').click()
    });
});