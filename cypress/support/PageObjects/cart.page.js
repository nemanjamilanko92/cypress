export default class Cart{
  
  qty(value){
    cy.get('.product-cart-actions > .input-text').type(value)
    cy.get('.product-cart-actions > .button > :nth-child(1) > span').click()
  }
  errorMsg(){
    return cy.get('li > span')
    
  }
}