/// <reference types="cypress"/>
import Landing from "../support/PageObjects/login.page";
import MobilePage  from "../support/PageObjects/mobileMenu.page"
describe("Testing of login functionality",()=>{


  before(()=>{
   
   cy.visit(Cypress.env("url"))
    cy.fixture("loginData").then(function(data){
      this.data=data;
    })
    
  })

it("Positive Login Test",function(){

 const landing = new Landing();
 landing.pageTitle.should("have.be.at.least","This is demo site for")
 landing.clickOnMobileMenu();
 const mobilePage = new MobilePage();
 mobilePage.pageTitle().should("have.text","Mobile")
 mobilePage.selectMenu().select("Name").should("have.contain.text","Name")




})

})