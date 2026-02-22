import user from '../../fixtures/users.json'
import LoginPage from '../pages/loginPage'

const loginPage = new LoginPage()

describe('Successful Login', () => {

    it('Login with valid username and password', () => {
        loginPage.accessLoginPage()
        loginPage.acessLoginWithUser(user.validUser.username, user.validUser.password)
    })
})