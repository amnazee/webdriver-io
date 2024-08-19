const internetPage = require('../pageobjects/internet.page')

describe('WebdriverIO API Actions', function () { 
    it('should hover on figure 1', async () => {
        await browser.url(`${browser.options.baseUrl}/hovers`)
        await internetPage.hoverOnFigure(1)
        assert.equal("name: user1",await internetPage.getFigureDetailsText(1))
        browser.pause(2000)
    })

    it('should send keyboard value', async () => {
        await browser.url(`${browser.options.baseUrl}/key_presses`)
        await internetPage.clickTarget()
        await internetPage.sendKeysToTarget("Backspace")
        assert.equal("You entered: BACK_SPACE",await internetPage.getResultText())
        await browser.pause(5000)
    });
})
