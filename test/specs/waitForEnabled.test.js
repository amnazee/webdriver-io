const internetPage = require('../pageobjects/internet.page')


describe("Wait for Enabled",function(){

    it("Should wait for the input field to be enabled",async()=>{
        browser.url('https://the-internet.herokuapp.com/dynamic_controls')
        await internetPage.enableButton.waitForDisplayed()
        await internetPage.enableButton.click()
        await internetPage.inputEnabledField.waitForEnabled({timeout:4000})
        expect(await internetPage.inputEnabledField)
        // expect(internetPage.inputEnabledField).not.toBeDisabled()
        // expect(internetPage.enableButton).toHaveAttribute('autocomplete','off')
    })

    it('should wait for the input field to be displayed',async()=>{
        await internetPage.enableButton.waitForDisplayed()
        await internetPage.enableButton.click()
        await internetPage.inputEnabledField.waitForEnabled({
            timeout:4000,
            reverse:true
        })
        assert.equal(false,await internetPage.inputEnabledField.isEnabled())
    })
})