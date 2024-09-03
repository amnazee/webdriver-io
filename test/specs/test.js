const temperatureUI=require('../pageobjects/temperature/temperature.locator')
const temperatureTask=require('../pageobjects/temperature/temperature.task')
const TemperatureAssertions=require('../pageobjects/temperature/temperature.assertions')
const jsonData=require('../testData/data.json')
const moisturizerTask=require('../pageobjects/moisturizer/moisturizer.task')
const moisturizerUI=require('../pageobjects/moisturizer/moisturizer.locators')
const moisturizerAssertion = require('../pageobjects/moisturizer/moisturizer.assertion')
const paymentTask=require('../pageobjects/paymentpage/payment.task')
const paymentUI=require('../pageobjects/paymentpage/payment.locators')
const cartpageAssertions = require('../pageobjects/cartpage/cartpage.assertions')
const cartpageTask = require('../pageobjects/cartpage/cartpage.task')
const sunscreenTask=require('../pageobjects/sunscreen/sunscreen.task')
const sunscreenAssertions=require('../pageobjects/sunscreen/sunscreen.assertions')
const sunscreenUI=require('../pageobjects/sunscreen/sunscreen.locators')
const paymentAssertion = require('../pageobjects/paymentpage/payment.assertion')


describe("User is on the temperature page",function(){
    let totalPrice=0;

    it("and checks for the assertions on the temperature page",async()=>{
        browser.url("/")
        await TemperatureAssertions.TemperatureHeadingPresent();
        await TemperatureAssertions.productDescriptionAssertion(1, jsonData.MoisturizerMessage);
        await TemperatureAssertions.productDescriptionAssertion(2, jsonData.SunscreenMessage);


    });

    it("User checks the temperature and picks the product type based on temperature",async()=>{
         const isMoisturizerPage = await temperatureTask.selectProduct(); 
        
         if (isMoisturizerPage=="Moisturizers") {
             await moisturizerTask.verifyMoisturizerPageHeader();
             const initialCartValue = await moisturizerTask.getCartValue();
             console.log('Initial Cart Value:', initialCartValue);
             await moisturizerAssertion.assertDisplayedItemsSubset();
             totalPrice=await moisturizerTask.clickOnThreeCheapestProducts();
             await moisturizerAssertion.assertCartValueBeforeAndAfterSelection(initialCartValue);
             await moisturizerUI.cartButton.click()
             await moisturizerTask.returnToMoisturizerPage()
             await moisturizerTask.selectProductByIndex(2)
             await moisturizerUI.cartButton.click()
         }
          else {
             await sunscreenTask.verifySunscreenPageHeader();
             const initialCartValue = await sunscreenTask.getCartValue();
             console.log('Initial Cart Value:', initialCartValue);
             await sunscreenAssertions.assertDisplayedItemsSubset();
             totalPrice=await sunscreenTask.clickOnThreeExpensiveProducts();
             await sunscreenAssertions.assertCartValueBeforeAndAfterSelection(initialCartValue);
             await sunscreenUI.cartButton.click()
         }
    })

    it("User goes to cart page and checks the assertions on that page",async()=>{
        await cartpageAssertions.verifyTableHeaders()
        await cartpageAssertions.verifyTotalPrice(totalPrice);
    })

    it("User is on payment page and successfully makes a payment",async()=>{
        await paymentTask.switchToIframe();
        await paymentTask.enterData(); 
        await paymentTask.clickPay()
        await paymentAssertion.paymentSuccessful()
    })
})