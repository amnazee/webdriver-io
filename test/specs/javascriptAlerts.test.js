const internetPage = require('../pageobjects/internet.page')


describe('Javascript Alerts',function(){
    it('should get text of alert',async()=>{
        await browser.url(`${browser.options.baseUrl}/javascript_alerts`)
        await internetPage.clickJavascriptAlertButton(1)
        assert.equal('I am a JS Alert',await browser.getAlertText())
        console.log(browser.getAlertText());
    })


    it('Should accept alert',async ()=>{
        browser.acceptAlert()
        assert.equal("You successfully clicked an alert", await internetPage.getResultText())
    })

  it('Should dismiss alert',async()=>{
        await internetPage.clickJavascriptAlertButton(2)
        browser.dismissAlert()
        assert.equal("You clicked: Cancel", await internetPage.getResultText())
    })

    it('Should send text to the alert',async()=>{
        await internetPage.clickJavascriptAlertButton(3)
        browser.sendAlertText('This is some text')
        browser.acceptAlert()
        console.log(internetPage.getResultText());
        // assert.equal('You entered: This is some text',await internetPage.getResultText())
        browser.pause(3000)
    })

})