export default class Landing{

  pageTitle = cy.get("h2")
  mobileMenu = cy.get(".nav-1 > .level0")
  
  

  clickOnMobileMenu(){
    this.mobileMenu.click()
  }


}