const PaymentUI=require('../paymentpage/payment.locators')
const jsonData=require('../../testData/credentials.json')

class PaymentTask{

    async switchToIframe(){
        const iframe=await browser.$("//iframe[@class='stripe_checkout_app']")
        await browser.switchToFrame(iframe);
        await browser.pause(5000)
    }

    async enterData(){
        await PaymentUI.EMAIL_INPUT.click()
        await PaymentUI.EMAIL_INPUT.setValue(jsonData.Email);
        // await PaymentUI.CARD_NUMER.setValue(jsonData.Card_Number);
        // await PaymentUI.EXP_DATE_INPUT.setValue(jsonData.Date);
         // Set card number using JavaScript
         await PaymentUI.CARD_NUMER.click()
    //     await browser.execute((selector, value) => {
    //     document.querySelector(selector).value = value;
    // }, '#card_number', jsonData.Card_Number);
    // await PaymentUI.EXP_DATE_INPUT.click()
    // // Set expiration date using JavaScript
    // await browser.execute((selector, value) => {
    //     document.querySelector(selector).value = value;
    // }, '#cc-exp', jsonData.Date);
    //     await PaymentUI.CVC_INPUT.setValue(jsonData.CVC);
    await browser.execute(() => {
        const cardInput = document.querySelector('#card_number');
        const expDateInput = document.querySelector('#cc-exp');
        // For example, simulate typing by using JavaScript
        cardInput.focus();
        cardInput.value = '4242424242424242'; // Example card number
        cardInput.dispatchEvent(new Event('input', { bubbles: true }));
    
        expDateInput.focus();
        expDateInput.value = '04/24'; // Example expiration date
        expDateInput.dispatchEvent(new Event('input', { bubbles: true }));
    });
        await browser.pause(10000)
    }
    
    async enterData(){

    }

    async clickPay(){
        await PaymentUI.PAY_BUTTON.click()
    }

    async enterValue(value, fieldLocator) {
        const script = `arguments[0].value = '${value}';`;
        await browser.execute(script, fieldLocator);
        await browser.execute("arguments[0].dispatchEvent(new Event('input'));", fieldLocator);
    }

}


module.exports=new PaymentTask()