describe('Article App', () => {
  beforeEach(() => {
    // Assumes your app is being served at http://localhost:3000
    cy.visit('http://localhost:5173');
  });

  it('should display the home page with preloaded articles', () => {
    cy.get('h2').should('contain', 'Home Page');

    // Check existence of GUI elements
    cy.get('header').should('be.visible');
    cy.get('header a').should('have.length', 2);
    cy.get('li').should('have.length', 3);
  });

  it('should navigate to an article page, click the button, and display article content', () => {
    cy.get('li a').first().click();
    cy.get('h2').should('contain', 'Article 1');
    cy.get('p').should('contain', 'This is the content for Article 1.');

    cy.get('button').click()
    cy.get('button').should('contain', '1');

    // Check existence of GUI elements
    cy.get('header').should('be.visible');
    cy.get('header a').should('have.length', 2);
  });

  it('should navigate to the add article page, submit a new article, and check GUI elements', () => {
    cy.get('header a').contains('Add Article').click();
    cy.get('h2').should('contain', 'Add Article Page');

    // Check existence of GUI elements
    cy.get('header').should('be.visible');
    cy.get('header a').should('have.length', 2);
    cy.get('form').should('be.visible');
    cy.get('input[name="title"]').should('be.visible');
    cy.get('input[name="content"]').should('be.visible');
    cy.get('button[type="submit"]').should('be.visible');
    
    cy.get('input[name="title"]').type('New Article');
    cy.get('input[name="content"]').type('New Article Content');
    cy.get('button[type="submit"]').click();

    // After submission, it should navigate back to the home page
    cy.get('h2').should('contain', 'Home Page');

    // There should now be one more article in the list
    cy.get('li').should('have.length', 4);
  });
});