export default class MyAccount{
  confrimRegMsg(){
    return cy.get("body > div > div > div.main-container.col2-left-layout > div > div.col-main > div > div > ul > li > ul > li > span")
  }

  tvMenuLink(){
return cy.get('.nav-2 > .level0').click()
  }

 wishList(){
   cy.contains("Share Wishlist").click()
 }
 emailAdress(){
   return cy.get("#email_address")
 }
 message(){
   return cy.get("#message")
 }

 shareWishListh(email,msg){
   this.emailAdress().clear()
   this.message().clear()
   this.emailAdress().type(email)
   this.message().type(msg)
   cy.get("button[title*='Share']").click()
 }
 succesfulySharedWishListMsg(){
   return cy.contains("Your Wishlist has been shared.")
 }

}