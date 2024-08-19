const internetPage=require('../pageobjects/internet.page')

describe("Dropdown menu",function(){
    it('should select option 1',async()=>{
        browser.url(`${browser.options.baseUrl}/dropdown`)
        await internetPage.clickDropdownMenu()
        await internetPage.clickDropdownMenuOption1()
        assert.equal(true,await internetPage.dropdownMenuOption1.isSelected())
    })

    it('should select option 2',async()=>{
        await internetPage.clickDropdownMenu()
        await internetPage.clickDropdownMenuOption2()
        assert.equal(true,await internetPage.dropdownMenuOption2.isSelected())
    })
})
