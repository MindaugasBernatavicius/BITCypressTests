describe("Test home page", () => {
	it("should open the home page succesfully", () => {
		// given
		let url = "http://127.0.0.1:5500/app";
		// when / then
		cy.visit(url);
	});
	it("has greeting message ", () => {
		// given
		let url = "http://127.0.0.1:5500/app";
		// when
		cy.visit(url);
		// then
		cy.contains("Hello world!");
	});
	it("has greeting message ", () => {
		// given
		let url = "http://127.0.0.1:5500/app";
		// when
		cy.visit(url);
		cy.get("#name_input").type("Mindaugai");
		cy.get("button").click();

		// then
		cy.contains("Labas Mindaugai!");
	});

    // it("is able to enter form data", () => {
	// 	// given
	// 	let url = "https://example.cypress.io";

    //     // when
    //     cy.visit(url);
    //     cy.contains('type').click()

    //     // then
    //     cy.url().should('include', '/commands/actions');

    //     cy.get('.action-email')
    //         .type('a@b.com')
    //         .should('have.value', 'a@b.com')
    // })
});
