class LoginPage {
    selectorsList() {
        const selectors = {
        usernameField: "[name='username']",
        passwordField: "[name='password']",
        submitButton: "[type='submit']",
        dashboardIcon: ".NavBar-logo",
        }
        return selectors
 }

    accessLoginPage() {
        cy.visit('/login')
    }

    acessLoginWithUser(username, password) {
        cy.get(this.selectorsList().usernameField).type(username)
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().submitButton).click()
        cy.get(this.selectorsList().dashboardIcon).should('be.visible')
    }
}

export default LoginPage