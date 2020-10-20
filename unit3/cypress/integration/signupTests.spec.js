describe('create-user-form', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })

    const textInput = () => cy.get('input[name="name"]')
    const emailInput = () => cy.get('input[name="email"]')
    const pwdInput = () => cy.get('input[name="password"]')
    const pwdConfInput = () => cy.get('input[name="passwordConfirmation"]')
    const langSelect = () => cy.get('select[name="language"]')
    const roleSelect = () => cy.get('select[name="position"]')
    const agreeChk =() => cy.get('input[name="tos"]')
    const submitBtn = () => cy.get('button[name="submitButton"]')

    it('elements are there', () => {
        textInput().should('exist')
        emailInput().should('exist')
        pwdInput().should('exist')
        pwdConfInput().should('exist')
        langSelect().should('exist')
        roleSelect().should('exist')
        agreeChk().should('exist')
        submitBtn().should('exist')

    })
    
    it('button and checkbox work or not work as they should or should not', () => {
        submitBtn().should('be.disabled')
        agreeChk().should('not.be.checked')
            .click()
            .should('be.checked')
            .click()
            .should('not.be.checked')
    })

    it('can select language and role from drop-downs', () => {
        langSelect().should('have.value','')
            .select('Java')
            .should('have.value', 'java')
            .select('- Select an option -')
            .should('have.value', '')
        roleSelect().should('have.value','')
            .select('UI/UX')
            .should('have.value', 'uiux')
            .select('- Select an option -')
            .should('have.value', '')
    })

    it('can type in all text fields and that activates submit button and it submits', () => {
        textInput().type('text@text.text')
        emailInput().type('text@text.text')
        pwdInput().type('text@text.text')
        pwdConfInput().type('text@text.text')
        textInput().should('have.value','text@text.text')
        emailInput().should('have.value','text@text.text')
        pwdInput().should('have.value','text@text.text')
        pwdConfInput().should('have.value','text@text.text')
        langSelect().select('Java')
        roleSelect().select('Team Lead')
        agreeChk().click()
        submitBtn().should('be.enabled').click()

    })
})