
const internetPage=require('../pageobjects/internet.page')


describe('Drag and Drop',function(){
    it('should drag column A to column B',async()=>{
        await browser.url(`${browser.options.baseUrl}/drag_and_drop`)
        await internetPage.dragColumnAToColumnB()
        // await browser.pause(3000)
        assert.equal("B", await internetPage.columnA.getText())
    })

    it('Should drag and drop',async ()=>{
        await browser.url('https://crossbrowsertesting.github.io/drag-and-drop.html')
        await internetPage.dragDraggableToDroppable()
        // await browser.pause(5000)
        assert.equal("Dropped!", await internetPage.droppableParagraph.getText())
    })
}) 