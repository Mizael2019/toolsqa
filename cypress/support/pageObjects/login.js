class login{
    username(){
        return cy.get('#userName').type('Mizael')
    }
    password(){
        return cy.get('#password').type('Beli@s1984')
    }
    signInButton(){
         return cy.get('#login').click()
    }
}
export default login