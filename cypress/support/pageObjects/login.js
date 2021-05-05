class login{
    username(){
        return cy.get('#userName').type('Mizael')
    }
    password(){
        return cy.get('#password').type('mizael')
    }
    signInButton(){
         return cy.get('#login').contains('Login')
    }
}
export default login