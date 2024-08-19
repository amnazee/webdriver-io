const { expect, browser } = require('@wdio/globals')
const LoginPage = require('../pageobjects/login.page')
const SecurePage = require('../pageobjects/secure.page')

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open()

        await LoginPage.login('tomsmith', 'SuperSecretPassword!')
        wdioExpect(await SecurePage.flashAlert).toBeExisting()
        // await wdioExpect(SecurePage.flashAlert).toHaveText(expect.stringContaining('You logged into a secure area!'))
    })
})


describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open()

        await LoginPage.login('tomsmith', 'SuperSecretPassword!')
        console.log("TEXT IS: "+ await SecurePage.flashAlert.getText());
        await expect(SecurePage.flashAlert).toBeExisting()
        assert.equal(true, await SecurePage.flashAlert.isExisting())
        await expect(SecurePage.flashAlert).toHaveTextContaining('You logged into a secure area!')
        assert.equal('https://the-internet.herokuapp.com/secure',await browser.getUrl())
    })
})
