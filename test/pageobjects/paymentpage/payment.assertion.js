const paymentTask=require('../paymentpage/payment.task')
const paymentUI=require('../paymentpage/payment.locators')

class PaymentAssertion{
    async paymentSuccessful(){
        await paymentTask.clickPay()
        await paymentUI.PAYMENT_SUCCESS.waitForDisplayed()
        assert.equal("PAYMENT SUCCESS",await paymentUI.PAYMENT_SUCCESS)
    }
}


module.exports=new PaymentAssertion()