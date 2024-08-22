const paymentTask=require('../paymentpage/payment.task')
const paymentUI=require('../paymentpage/payment.locators')

class PaymentAssertion{
    async paymentSuccessful(){
        await paymentTask.clickPay()
        browser.pause(5000)
        await paymentUI.PAYMENT_SUCCESS.waitForDisplayed()
        assert.equal("PAYMENT SUCCESS",await paymentUI.PAYMENT_SUCCESS.getText())
        await browser.pause(5000)
    }
}


module.exports=new PaymentAssertion()