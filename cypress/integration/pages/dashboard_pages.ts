export class DashboardPage{

    link_sauceLabsBackpack = 'Sauce Labs Backpack'
    cart_sauceLabsBackpack = '#add-to-cart-sauce-labs-backpack' 
    btn_cart = '#shopping_cart_container'

    sauceLabsBackpack(){
        cy.contains(this.link_sauceLabsBackpack).click()
        cy.contains('Sauce Labs Backpack').should('be.visible') 
    }
    
    addCartSauceLabsBackpack(){
        cy.get(this.cart_sauceLabsBackpack).click()
    }

    assertCartBackpack(){
        cy.get(this.btn_cart).click()
        cy.get('#item_4_title_link').should('be.visible')
        cy.contains('Sauce Labs Backpack')
    }
}
