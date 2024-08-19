const internetPage = require('../pageobjects/internet.page')


describe("Wait for Enabled",function(){

    it("Should wait for the input field to be enabled",()=>{
        browser.url('https://the-internet.herokuapp.com/dynamic_controls')
        internetPage.enableButton.waitForDisplayed()
        internetPage.enableButton.click()
        internetPage.inputEnabledField.waitForEnabled({timeout:4000})
        expect(internetPage.inputEnabledField)
        expect(internetPage.inputEnabledField).not.toBeDisabled()
        expect(internetPage.enableButton).toHaveAttribute('autocomplete','off')
    })

    it('should wait for the input field to be displayed',()=>{
        internetPage.enableButton.waitForDisplayed()
        internetPage.enableButton.click()
        internetPage.inputEnabledField.waitForEnabled({
            timeout:4000,
            reverse:true
        })
    })
})