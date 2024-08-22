const paymentTask=require('../paymentpage/payment.task')
const paymentUI=require('../paymentpage/payment.locators')

class PaymentAssertion{
    async paymentSuccessful(){
        await paymentTask.clickPay()
        await browser.pause(5000)
        await paymentUI.paymentSuccess.waitForDisplayed()
        assert.equal("PAYMENT SUCCESS",await paymentUI.paymentSuccess.getText())
        await browser.pause(5000)
    }
}


module.exports=new PaymentAssertion()