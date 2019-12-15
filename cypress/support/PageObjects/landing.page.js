export default class Landing{

  pageTitle = cy.get("h2")
  mobileMenu = cy.get(".nav-1 > .level0")
  
  

  clickOnMobileMenu(){
    this.mobileMenu.click()
  }

    AccBtn(){
    return  cy.get('.skip-account')
  }

  MyAcc(){
      return cy.get('#header-account > .links > ul > .first > a')
  }
  createAccLink(){
    return cy.get('.col-1 > .buttons-set > .button > :nth-child(1) > span')
  }
  CreateAcc(){
    this.AccBtn().click()
    this.MyAcc().click()
    this.createAccLink().click()
  }

}