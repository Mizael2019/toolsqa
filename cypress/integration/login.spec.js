/// <reference types="cypress" />

import Login from '../support/pageObjects/login'

describe('Login na página', function(){
    const login = new Login()
    it('Sign in', function(){
    cy.visit('/');
    cy.get('.card-body').contains('Book Store Application').click()
    cy.get(':nth-child(6) > .group-header > .header-wrapper').click()
    cy.get(':nth-child(6) > .element-list > .menu-list > #item-0').click( {force: true} )
    login.username()
    login.password()
    login.signInButton()
    cy.get('.playgound-header').should('have.text', 'Profile')
    });
});