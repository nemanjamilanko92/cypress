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
  //  SonyXPrice(){
  //    const price = cy.get('#product-price-1 > .price')
  //    price.then(e=>{
  //     const priceOfSony = e.text()
  //     Number(priceOfSony)
  //     this.clickOnSony().click()
  //     this.detailPrice().then(j=>{
  //      let dPrice = j.text()
  //       Number(dPrice)
  //      expect(priceOfSony).to.equal(dPrice)
  //     })
  //    })
  //   }
 

     
}