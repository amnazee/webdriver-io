const internetPage=require('../pageobjects/internet.page')

describe('Wait For Exist', function () {
    it('should wait until the delete button exists', async() => {
        browser.url(`${browser.options.baseUrl}/add_remove_elements/`)
        await internetPage.clickExampleButton()
        await internetPage.deleteButton(1).waitForExist()
        assert.equal(true, await internetPage.deleteButton(1).isExisting())
        browser.pause(2000)
    })
    it('should wait for the delete button to not exist',async () => {
        await internetPage.clickDeleteButton(1)
        await internetPage.deleteButton(1).waitForExist({timeout:500, reverse:true})
        assert.equal(false, await internetPage.deleteButton(1).isExisting())
        browser.pause(2000)
    })
})