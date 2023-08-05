describe ('Оформление заказа на сайте', function () {
    it('Оформление заказа', function (){
        cy.visit('https://huntingpony.com/');
        cy.get('[data-index="0"] > .header__collections-controls > .header__collections-link').click();
        cy.get('[data-product-id="338932952"] > .product-preview__content > .product-preview__area-photo > .product-preview__photo > .img-ratio > .img-ratio__inner > a > :nth-child(1) > .product-preview__img-1').click();
        cy.get('.add-cart-counter__btn').click();
        cy.get('.header__cart > .icon').click();
        cy.get('.is-count-up').click();
        cy.get('.cart-controls > .button').click();
        cy.get('.decorated-title').contains('Оформление заказа').should('be.visible');
    })
});

