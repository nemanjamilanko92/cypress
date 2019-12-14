/// <reference types="cypress"/>
import Landing from "../support/PageObjects/login.page";
import MobilePage  from "../support/PageObjects/mobileMenu.page"
import Cart from "../support/PageObjects/cart.page"
describe("Adding more products than there is in a store",()=>{
  before(()=>{
   cy.visit(Cypress.env("url"))
    cy.fixture("loginData").then(function(data){
      this.data=data;
    })
    const landing = new Landing();
    landing.clickOnMobileMenu();
  })

it("Positive verification test",function(){

 const mobilePage = new MobilePage();
 mobilePage.pageTitle().should("have.text","Mobile")
 mobilePage.clickonAddSonyToCart()
 const cart = new Cart()
 cart.qty("1000")
 cart.errorMsg().should("contain.text",this.data.errorMsgOnMoreThen1000Units)

})

})