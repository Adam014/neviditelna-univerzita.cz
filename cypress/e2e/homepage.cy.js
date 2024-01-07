describe('HomePage test', () => {
  it('visits the app root url and tests components', () => {
    // Visit the homepage
    cy.visit('/');

    // Test NavbarComponent
    cy.get('header nav .nav-navigation h3').should('have.text', 'Ferda');
    cy.get('header nav .nav-profile .profile-info h3').should('have.text', 'Jan Musílek');

    // Toggle user menu and test visibility
    cy.get('header nav .nav-profile .profile-info').click();
    cy.get('header nav .nav-profile .user-menu').should('be.visible');

    // Click again on profile-info to hide the user menu
    cy.get('header nav .nav-profile .profile-info').click();
    cy.get('header nav .nav-profile .user-menu').should('not.be.visible');

    // Test SidebarComponent
    cy.get('aside h3').should('have.text', 'Applications');
    cy.get('aside .sidebar-content h4').should('have.text', 'Registry');

    // Test MainComponent
    cy.get('main h2 bold').should('have.text', 'neviditelna-univerzita.cz');

    // Test password toggle in your Vue component
    // Click on the button to show the password
    cy.get('.auth-container button').click();
    cy.get('.auth-container .secret-password').should('be.visible')

    // Click on the button again to hide the password
    cy.get('.auth-container button').click();
    cy.get('.auth-container .secret-password').should('not.be.visible');
  });
});