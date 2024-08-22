const temperatureUI=require('../temperature/temperature.locator')
const moisturizerUI = require('../../pageobjects/moisturizer/moisturizer.locators')
const sunscreenUI = require('../../pageobjects/sunscreen/sunscreen.locators');

class TemperatureTask{
    async getTemperatureHeading(){
        const headingText = await temperatureUI.TemperatureHeading.getText();
        // Log the text to the console
        console.log("Heading: " + headingText);
        // Return the fetched text
        return headingText;
    }

    // Function to get the product description based on the index
        async getProductDescription(index) {
            const productDescription = await temperatureUI.productDescription(index).getText();
            console.log(`Product Description (Index ${index}): ${productDescription}`);
            return productDescription;
        }


        async selectProduct(){
            await temperatureUI.TemperatureHeading.waitForDisplayed()
            const elementText = await temperatureUI.Temperature.getText();
            const weatherTemp = parseInt(elementText.substring(0, elementText.length - 2).trim(), 10);
            console.log("Temperature is: "+weatherTemp);
            let pageHeader;

            if(weatherTemp<28){
                console.log("We are choosing moisturizers :)");
                await temperatureUI.productPageButton(1).waitForDisplayed()
                await temperatureUI.productPageButton(1).click()
                pageHeader = await moisturizerUI.MoisturizerHeading.getText();
            }

            else if(weatherTemp>=28){
                console.log("We are choosing sunscreen :)");
                await temperatureUI.productPageButton(2).waitForDisplayed()
                await temperatureUI.productPageButton(2).click()
                pageHeader = await sunscreenUI.SunscreenHeading.getText();
            }
            return pageHeader;
        }
        
}

module.exports=new TemperatureTask()