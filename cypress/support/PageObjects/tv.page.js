export default class Tv{

  addTvToTheWishList(){
    return cy.get(':nth-child(1) > .product-info > .actions > .add-to-links > :nth-child(1) > .link-wishlist').click()
  }

}