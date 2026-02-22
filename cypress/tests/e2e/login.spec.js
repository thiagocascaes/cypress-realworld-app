import user from '../../fixtures/users.json'
import LoginPage from '../pages/loginPage'

const loginPage = new LoginPage()

describe('Successful Login', () => {

    it('Login with valid username and password', () => {
        loginPage.accessloginPage()
        cy.get(loginPage.selectorsList.usernameField).type(user.validUser.username)
        cy.get(loginPage.selectorsList.passwordField).type(user.validUser.password)
        cy.get(loginPage.selectorsList.submitButton).click()
        cy.get(loginPage.selectorsList.dashboardIcon).should('be.visible')
    })
})