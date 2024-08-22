const paymentTask=require('../paymentpage/payment.task')
const paymentUI=require('../paymentpage/payment.locators')

class PaymentAssertion{
    async paymentSuccessful(){
        await browser.switchToParentFrame();
        await browser.waitUntil(
            async () => (await browser.execute(() => document.readyState)) === 'complete',
            {
                timeout: 20000,
                timeoutMsg: 'Page did not load within 20 seconds'
            }
        );
        const heading=await browser.$("//h2")
        await heading.waitForDisplayed()
        assert.equal("PAYMENT SUCCESS",await paymentUI.paymentSuccess.getText())
        await browser.pause(5000)
    }
}


module.exports=new PaymentAssertion()