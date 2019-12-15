export default class MobilePage{
  
  pageTitle(){
   return cy.get("h1");
  }
  selectMenu(){
   return cy.get('.category-products > :nth-child(1) > .sorter > .sort-by > select');
  }
    getSelectOption(option){
      this.selectMenu().select(option)
    }
    clickOnSony(){
      return cy.get('#product-collection-image-1')
    }
    detailPrice(){
      return cy.get('.price')
    }
    SonyXPrice(){
      return cy.get('#product-price-1 > .price')
    }
    clickonAddSonyToCart(){
     cy.get(':nth-child(1) > .product-info > .actions > .button > :nth-child(1) > span').click()
    }

}