const temperatureUI=require('../temperature/temperature.locator')
const temperatureTask=require('../temperature/temperature.task')
const jsonData=require('../../testData/data.json')

class TemperatureAssertions{

    async TemperatureHeadingPresent(){
        const temperatureText = await temperatureTask.getTemperatureHeading();
        // Log the fetched text to the console for debugging
        console.log("Fetched Temperature Text: " + temperatureText);
        // Assert that the fetched text matches the expected value
        assert.equal(temperatureText, "Current temperature"); 
    }

    // Function to perform the assertion for product descriptions
    async productDescriptionAssertion(index, expectedMessage) {
    const productDescription = await temperatureTask.getProductDescription(index);
    console.log(`Fetched product description: ${productDescription}`);
    assert.equal(productDescription, expectedMessage);
}
}


module.exports=new TemperatureAssertions()