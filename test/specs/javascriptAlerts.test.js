const internetPage = require('../pageobjects/internet.page')


describe('Javascript Alerts',function(){
    it('should get text of alert',async()=>{
        await browser.url(`${browser.options.baseUrl}/javascript_alerts`)
        await internetPage.clickJavascriptAlertButton(1)
        assert.equal('I am a JS Alert',await browser.getAlertText())
        console.log(await browser.getAlertText());
        await browser.pause(5000)
    })
})