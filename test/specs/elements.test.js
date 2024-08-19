const internetPage=require('../pageobjects/internet.page')

describe('Interacting with elements',function(){
    it("Get Text For Element",async ()=>{
        await browser.url('/')
        let text=await $("//*[@id='page-footer']").getText()
        console.log("text is : "+text);
        await internetPage.getLiText()
        await internetPage.getSpecificElementText(3)
    })

    it("Is footer displayed",async()=>{
        await internetPage.pageFooter.isDisplayed()
        console.log(await internetPage.pageFooter.isDisplayed());
    })

    it("Does the header exist",async()=>{
        await internetPage.h3Header.isExisting()
        console.log(await internetPage.h3Header.isExisting());
    })

    // it("Is footer in view port",async()=>{
    //     await internetPage.pageFooter.isDisplayedInViewport()
    //     console.log(await internetPage.pageFooter.isDisplayedInViewport());
    // })

    it("Is subheader enabled?",async()=>{
        await internetPage.subHeading.isEnabled()
        console.log(await internetPage.subHeading.isEnabled());
    })

    it("Click Element",async()=>{
        await internetPage.clickOnLink()
    })
    
})