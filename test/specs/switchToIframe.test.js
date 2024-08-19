const internetPage = require('../pageobjects/internet.page')


describe('Switch to iframe', function () {
    it('Should switch to iframe', async () => {
        await browser.url(`${browser.options.baseUrl}/iframe`)
        await internetPage.h3Header.waitForDisplayed()
        await internetPage.iframe.waitForDisplayed()
        console.log(await internetPage.iframe.isDisplayed());
        console.log(await internetPage.iframeBody.isDisplayed());
        await browser.switchToFrame(await internetPage.iframe)
        await internetPage.sendTextToBody("Hello world!")
        assert.equal("Hello world!", await internetPage.iframeBody.getText())
        browser.pause(2000)
    })
})