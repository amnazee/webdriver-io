const internetPage = require('../pageobjects/internet.page')

describe('Scroll to element', function () {
    it('Should scroll to the footer', async () => {
        await browser.url('/')
        await internetPage.pageHeader.waitForDisplayed()
        await internetPage.scrollToPageFooter()
        assert.equal(true, await isDisplayedInViewport(internetPage.pageFooter))
        browser.pause(2000)
    })
})