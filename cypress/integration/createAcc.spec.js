/// <reference types="cypress"/>
import Landing from "../support/PageObjects/landing.page";
import CreateAcc  from "../support/PageObjects/createAccForm.page"
import MyAccount from "../support/PageObjects/myAccount.page"
import Tv from "../support/PageObjects/tv.page"
describe("Create acc and add product to the wish list",()=>{


  before(()=>{
   
   cy.visit(Cypress.env("url"))
 
 cy.fixture("createAccData").then(function(data){
      this.data=data;
    })
    
  })

it("Create acc and Add product to the wish list and share wish list",function(){

 const landing = new Landing();
 landing.pageTitle.should("have.be.at.least","This is demo site for")
landing.CreateAcc()
const createAcc = new CreateAcc()
    createAcc.createAcc(this.data.firstName,this.data.lastName,this.data.email,this.data.password,this.data.confrimPassword)
   const myAccount = new MyAccount()
   myAccount.confrimRegMsg().should("contain.text",this.data.createdAccMsg)
   myAccount.tvMenuLink()
  const tv = new Tv()
  tv.addTvToTheWishList()
myAccount.wishList()
myAccount.shareWishListh(this.data.email,"Some random text")
myAccount.succesfulySharedWishListMsg().should("contain.text",this.data.successfullySharedWishList)
  
})


})