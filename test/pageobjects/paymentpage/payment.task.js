const PaymentUI=require('../paymentpage/payment.locators')
const jsonData=require('../../testData/credentials.json')

class PaymentTask{

    async switchToIframe(){
        const iframe=await browser.$("//iframe[@class='stripe_checkout_app']")
        await browser.switchToFrame(iframe);
        await browser.pause(5000)
    }
    
    async enterData(){
        await PaymentUI.emailInput.setValue(jsonData.email);
        await PaymentUI.cardNumber.click();
        await browser.keys(jsonData.cardNumber);
        await PaymentUI.expiryDateInput.click()
        await browser.keys(jsonData.date)
        await PaymentUI.cvcInput.click()
        await browser.keys(jsonData.cvc)
        await PaymentUI.zipCodeInput.click()
        await browser.keys(jsonData.zipCode)
        await browser.pause(5000)
    }

    async clickPay(){
        await PaymentUI.confirmPaymentButton.click()
    }

}


module.exports=new PaymentTask()