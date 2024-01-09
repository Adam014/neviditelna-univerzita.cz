import { getEventData, formatDate } from '../../src/utils/utils';

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
    cy.get('main .main-title h2').should('have.text', 'neviditelna-univerzita.cz');

    // Test your Vue component
    cy.get('.events-container').should('be.visible'); // Check if the component is visible
    cy.get('.owner-container').should('be.visible');
    cy.get('.keyset-container').should('be.visible');
    cy.get('.nsset-container').should('be.visible');
    cy.get('.admin-container .admin-information').should('be.visible');
    cy.get('.state-flags-container .state-flags-information').should('be.visible');
    cy.get('.verbose-view-container .cl-toggle-switch').click();
    cy.get('.state-flags-container .grid-layout').should('be.visible');
    cy.get('.admin-container .admins-information').should('be.visible');
    cy.get('.verbose-view-container .cl-toggle-switch').click();

    // Check the formatted event data using data-text attribute
    cy.get('.column .create-event .event-date').should('have.text', formatDate(getEventData().registered.timestamp));
    cy.get('.column .update-event .event-date').should('have.text', formatDate(getEventData().updated.timestamp));
    cy.get('.column .transfer-event .event-date').should('have.text', formatDate(getEventData().transferred.timestamp));

    // Test password toggle in your Vue component
    // Click on the button to show the password
    cy.get('.auth-container button').click();
    cy.get('.auth-container .secret-password').should('be.visible')

    // Click on the button again to hide the password
    cy.get('.auth-container button').click();
    cy.get('.auth-container .secret-password').should('not.be.visible');
  });
});
