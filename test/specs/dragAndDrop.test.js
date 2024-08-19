const internetPage=require('../pageobjects/internet.page')


describe('Drag and Drop',function(){
    it('should drag and drop',async()=>{
        await browser.url(`${browser.options.baseUrl}/drag_and_drop`)
        await internetPage.dragColumnAToColumnB()
        await browser.pause(3000)
        assert.equal("B", await internetPage.columnA.getText())
    })
}) 