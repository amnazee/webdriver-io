const temperatureUI=require('../temperature/temperature.locator')
const moisturizerUI = require('../../pageobjects/moisturizer/moisturizer.locators')
const sunscreenUI = require('../../pageobjects/sunscreen/sunscreen.locators');

class TemperatureTask{
    async getTemperatureHeading(){
        const headingText = await temperatureUI.temperatureHeading.getText();
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
            await temperatureUI.temperatureHeading.waitForDisplayed()
            const elementText = await temperatureUI.temperature.getText();
            const weatherTemp = parseInt(elementText.substring(0, elementText.length - 2).trim(), 10);
            console.log("Temperature is: "+weatherTemp);
            let pageHeader;

            if(weatherTemp<28){
                console.log("We are choosing moisturizers :)");
                await temperatureUI.productPageButton(1).waitForDisplayed()
                await temperatureUI.productPageButton(1).click()
                pageHeader = await moisturizerUI.moisturizerHeading.getText();
            }

            else if(weatherTemp>=28){
                console.log("We are choosing sunscreen :)");
                await temperatureUI.productPageButton(2).waitForDisplayed()
                await temperatureUI.productPageButton(2).click()
                pageHeader = await sunscreenUI.sunscreenHeading.getText();
            }
            return pageHeader;
        }
        
}

module.exports=new TemperatureTask()