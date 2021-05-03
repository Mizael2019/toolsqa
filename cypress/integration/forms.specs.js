describe('Acesso página principal e clica em Elements', () => {
   beforeEach(() => cy.visit('https://demoqa.com/'));
   
    it('Titulo página visível', () => {
        cy.get('[src="/images/Toolsqa.jpg"]').should('be.visible')
    });


    it('Preencher os campos', () => {
        cy.get(':nth-child(1) > :nth-child(1) > .card-body > h5').click()
        cy.get(':nth-child(1) > .element-list > .menu-list > #item-0').click()
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


    it('Preencher o Forms', () => {
        cy.get(':nth-child(1) > :nth-child(1) > .card-body > h5').click()
        cy.get(':nth-child(2) > .group-header > .header-wrapper').click()
        cy.get(':nth-child(2) > .element-list > .menu-list > #item-0').click()

        cy.get('#firstName').as('firstname').type('Carlos')
        cy.get('#lastName').as('lastname').type('Nazareno')
        cy.get('#userEmail').as('email').type('mtszareno@gmail.com')
        cy.get('#genterWrapper > .col-md-9 > :nth-child(2) > .custom-control-label').click()
        cy.get('#userNumber').type('2222222222')
        cy.get('#dateOfBirthInput').click()
        cy.get('.react-datepicker__day--020').click()
        cy.get('.subjects-auto-complete__value-container').click()
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
