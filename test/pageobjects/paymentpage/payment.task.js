const PaymentUI=require('../paymentpage/payment.locators')
const jsonData=require('../../testData/credentials.json')

class PaymentTask{

    async switchToIframe(){
        const iframe=await browser.$("//iframe[@class='stripe_checkout_app']")
        await browser.switchToFrame(iframe);
        await browser.pause(5000)
    }

    
    async enterData(){
        await PaymentUI.EMAIL_INPUT.setValue(jsonData.Email);
        await PaymentUI.CARD_NUMER.click();
        await browser.keys(jsonData.Card_Number);
        await PaymentUI.EXP_DATE_INPUT.click()
        await browser.keys(jsonData.Date)
        await PaymentUI.CVC_INPUT.click()
        await browser.keys(jsonData.CVC)
        await PaymentUI.ZIP_CODE_INPUT.click()
        await browser.keys(jsonData.ZIP_CODE)
        await browser.pause(5000)
    }


    async clickPay(){
        await PaymentUI.CONFIRM_PAYMENT_BUTTON.click()
    }


}


module.exports=new PaymentTask()