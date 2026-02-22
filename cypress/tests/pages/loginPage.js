class LoginPage {
    selectorsList = {
        usernameField: '[name="username"]',
        passwordField: '[name="password"]',
        submitButton: '[type="submit"]',
        dashboardIcon: '.NavBar-logo'

    }

    accessloginPage() {
        cy.visit('/login')
    }
}

export default LoginPage