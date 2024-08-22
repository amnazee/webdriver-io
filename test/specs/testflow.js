const temperatureUI = require('../pageobjects/temperature/temperature.locator');
const temperatureTask = require('../pageobjects/temperature/temperature.task');
const TemperatureAssertions = require('../pageobjects/temperature/temperature.assertions');
const jsonData = require('../testData/data.json');
const moisturizerTask = require('../pageobjects/moisturizer/moisturizer.task');
const moisturizerUI = require('../pageobjects/moisturizer/moisturizer.locators');
const moisturizerAssertion = require('../pageobjects/moisturizer/moisturizer.assertion');
const sunscreenTask = require('../pageobjects/sunscreen/sunscreen.task');
const sunscreenUI = require('../pageobjects/sunscreen/sunscreen.locators');
const sunscreenAssertion = require('../pageobjects/sunscreen/sunscreen.assertion');
const paymentTask = require('../pageobjects/paymentpage/payment.task');
const paymentUI = require('../pageobjects/paymentpage/payment.locators');
const cartpageAssertions = require('../pageobjects/cartpage/cartpage.assertions');

describe("E-Commerce Flow Test", function() {
    it("should perform the complete flow of temperature-based product selection and purchase", async () => {
        // Step 1: User is on the temperature page, sees temperature, and selects a product based on temperature
        await browser.url("/");
        await browser.pause(5000);
        await TemperatureAssertions.TemperatureHeadingPresent();
        await TemperatureAssertions.productDescriptionAssertion(1, jsonData.MoisturizerMessage);
        await TemperatureAssertions.productDescriptionAssertion(2, jsonData.SunscreenMessage);
        
        // Determine the page based on temperature
        const isMoisturizerPage = await temperatureTask.selectProduct(); // Implement this function
        
        if (isMoisturizerPage) {
            // Step 2: On the moisturizer page, perform assertions
            await moisturizerTask.verifyMoisturizerPageHeader();
            // await moisturizerTask.getCartValue();
            const initialCartValue = await moisturizerTask.getCartValue();
            console.log('Initial Cart Value:', initialCartValue);
            // await moisturizerTask.getAllProductNames();
            
            // Step 3: Pick the least price moisturizer
            const cheapestProduct = await moisturizerTask.clickOnThreeCheapestProducts();
            // await moisturizerTask.selectProduct(cheapestProduct);

            // Assertions after selection
            await moisturizerAssertion.assertCartValueBeforeAndAfterSelection(initialCartValue);
            await moisturizerAssertion.assertDisplayedItemsSubset();
        // } else {
        //     // Step 4: On the sunscreen page, perform assertions
        //     await sunscreenTask.verifySunscreenPageHeader();
        //     await sunscreenTask.getCartValue();
        //     await sunscreenTask.getAllProductNames();
            
        //     // Step 5: Pick the max price sunscreen
        //     const maxPriceProducts = await sunscreenTask.getMaxPriceProducts(); 
        //     await sunscreenTask.selectProduct(maxPriceProducts);
            
        //     // Assertions after selection
        //     await sunscreenAssertion.assertCartValueBeforeAndAfterSelection();
        //     await sunscreenAssertion.assertDisplayedItemsSubset();
        // }

        // Step 6: Go to cart page
        await moisturizerUI.cartButton.click(); // or appropriate cart button
        await cartpageAssertions.verifyTableHeaders();

        // Step 7: Navigate back to product page and pick another product
        await browser.back();
        await temperatureUI.productPageButton(1).waitForDisplayed();
        await temperatureUI.productPageButton(1).click();
        await browser.pause(5000);

        // Step 8: Go to cart page again
        await moisturizerUI.cartButton.click(); // or appropriate cart button

        // Step 9: Check the total price
        await cartpageAssertions.verifyTotalPrice(); // Implement this function

        // Step 10: Go to payment modal, fill in details, and click on pay button
        await paymentTask.switchToIframe();
        await paymentTask.enterData(); // Implement this function
        await paymentUI.PAY_BUTTON.click();
    }
});
});
