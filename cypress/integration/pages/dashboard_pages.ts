export class DashboardPage{
    link_sauceLabsBackpack = 'Sauce Labs Backpack'

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
