const moisturizerUI=require("../moisturizer/moisturizer.locators")
const moisturizerTask = require("./moisturizer.task");
const data=require('../../testData/data.json')


class MoisturizerAssertion{

async assertCartValueBeforeAndAfterSelection(initialCartValue) {
    // Step 1: Get the initial cart value and assert it's empty;
    assert.equal(initialCartValue,"Empty")
    console.log("Initial cart value: " + initialCartValue);

    // Step 3: Get the updated cart value and assert it's 3
    const updatedCartValue = await moisturizerTask.getCartValue();
    assert.equal(updatedCartValue, '3 item(s)', "Cart should contain 3 items after selection");
    console.log("Updated cart value: " + updatedCartValue);
    }

    async assertDisplayedItemsSubset() {
        browser.pause(5000)
        const displayedItems = await moisturizerTask.getDisplayedItems();
        
        if (displayedItems.length === 0) {
            console.log('No items to verify.');
            return;
        }
        // Check if all displayed items are within the predefined list
        const isValidSubset = displayedItems.every(item => data.Moisturizers.includes(item));
        
        if (isValidSubset) {
            console.log('Displayed items are a valid subset.');
        } else {
            console.log('Some displayed items are incorrect.');
            console.log('Displayed items:', displayedItems);
            console.log('Expected items:', data.Moisturizers);
        }
    }
}

module.exports=new MoisturizerAssertion()