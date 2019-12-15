export default class CreateAcc{

  firstName(){
   return cy.get('#firstname')
  }
  lastName(){
   return cy.get('#lastname')
  }

  password(){
    return cy.get('#password')
  }
  confirmPassword(){
    return  cy.get('#confirmation')
  }
  email(){
    return cy.get('#email_address')
  }
  registerBtn(){
    return cy.get('.buttons-set > .button')
  }
  createAcc(firstName,lastName,email,password,confirmPassword){
    this.firstName().clear()
    this.lastName().clear()
    this.email().clear()
    this.password().clear()
    this.confirmPassword().clear()
    this.firstName().type(firstName)
    this.lastName().type(lastName)
    this.email().type(email)
    this.password().type(password)
    this.confirmPassword().type(confirmPassword)
    this.registerBtn().click()
  }
}