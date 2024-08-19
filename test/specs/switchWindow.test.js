const internetPage  = require('../pageobjects/internet.page')


describe("Switch window", function () {
     it('Should switch to the next window', async () => {  
        await browser.url(`${browser.options.baseUrl}/windows`)
        await internetPage.clickHereLink()
        await browser.switchWindow(`${browser.options.baseUrl}/windows/new`)
        assert.equal(true, await internetPage.h3Header.isExisting())
        assert.equal(true, await internetPage.h3Header.getText() === 'New Window')
        browser.pause(2000) 
     });
 })
