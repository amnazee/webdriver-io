const paymentTask=require('../paymentpage/payment.task')
const paymentUI=require('../paymentpage/payment.locators')

class PaymentAssertion{
    async paymentSuccessful(){
        const heading=await browser.$("//h2")
        await heading.waitForDisplayed()
        assert.equal("PAYMENT SUCCESS",await paymentUI.paymentSuccess.getText())
        await browser.pause(5000)
    }
}


module.exports=new PaymentAssertion()