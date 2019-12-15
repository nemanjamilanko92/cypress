/// <reference types="cypress"/>
import Landing from "../support/PageObjects/landing.page";
import MobilePage  from "../support/PageObjects/mobileMenu.page"

describe("Verification of the product cost",()=>{
  before(()=>{
   cy.visit(Cypress.env("url"))
    cy.fixture("loginData").then(function(data){
      this.data=data;
    })
    const landing = new Landing();
    landing.clickOnMobileMenu();
  })

it("Positive verification Test",function(){

 const mobilePage = new MobilePage();
 mobilePage.pageTitle().should("have.text","Mobile")
 mobilePage.SonyXPrice().then(e=>{
  const priceOfSony = e.text()
  Number(priceOfSony)
  mobilePage.clickOnSony().click()
  mobilePage.detailPrice().then(j=>{
   let dPrice = j.text()
    Number(dPrice)
   expect(priceOfSony).to.equal(dPrice)
  })
 })

})

})