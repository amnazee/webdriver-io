const cartUI=require('../cartpage/cartpage.locators')
const cartTask=require('../cartpage/cartpage.task')


class CartAssertion{

    async verifyCartPageHeader(){
        const selectedText=await cartTask.getHeading()
        assert.equal("Checkout",await selectedText)
    }


    async verifyTableHeaders() {
        // Get the headers text using the task function
        const headers = await cartTask.getTableHeaders();
        console.log(headers[0]);
        console.log("New values: "+headers[1]);
        // Verify that the first header is "Item"
        assert.strictEqual(headers[0], "Item", 'The first header is not "Item"');
        // Verify that the second header is "Price"
        console.log(headers[1]);
        assert.strictEqual(headers[1], "Price", 'The second header is not "Price"');
        console.log('Both headers are verified successfully.');
        console.log("new");
    }


    async verifyTotalPrice(expectedTotalPrice) {
        // Wait for the cart total price element to be visible
        console.log(await cartUI.cartTotalAmount.isDisplayed());
        await cartUI.cartTotalAmount.waitForDisplayed(); 
        // Get the displayed total price from the cart
        const displayedTotalPriceText = await cartUI.cartTotalAmount.getText();
        // Remove any non-numeric characters from the displayed price (e.g., currency symbols)
        const displayedTotalPrice = parseFloat(displayedTotalPriceText.replace(/[^0-9.-]+/g, ""));
        // Log the values for debugging
        console.log(`Displayed Total Price: ${displayedTotalPrice}`);
        console.log(`Expected Total Price: ${expectedTotalPrice}`);
        // Verify that the displayed total price matches the expected total price
        expect(displayedTotalPrice).to.be.closeTo(expectedTotalPrice, 0.01, 'Total price does not match');
        await cartUI.payButton.click()
    }
}


module.exports=new CartAssertion()