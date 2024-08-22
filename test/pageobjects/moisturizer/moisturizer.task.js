const moisturizerUI=require("../moisturizer/moisturizer.locators")
const data=require('../../testData/data.json')


class MoisturizerTask{

    async verifyMoisturizerPageHeader(){
        const headingText= await moisturizerUI.MoisturizerHeading.getText()
        console.log("Heading of moisturizer page: "+headingText);
        return headingText;
    }

    async getCartValue(){
        const cartValue=await moisturizerUI.CartValue.getText()
        console.log("Cart value"+cartValue);
        return cartValue;
    }

    async getAllProductNames() {
        await browser.url(`${browser.options.baseUrl}/moisturizer`)
        // Determine the number of products
        const productCount = await $$(moisturizerUI.productNameSelector).length;
        // Initialize an empty array to hold product names
        const productNames = [];
        // Loop through each product and get its name
        for (let i = 1; i <= productCount; i++) {
            const productNameElement = await moisturizerUI.productName(i);
            const productNameText = await productNameElement.getText();
            productNames.push(productNameText);
        }
        return productNames;
    }


    async getAllProductDetails() {
        const productCount = await moisturizerUI.getProductPriceCount();
        const products = [];
    
        for (let i = 1; i <= productCount; i++) {
            const productNameElement = await moisturizerUI.productName(i);
            const productPriceElement = await moisturizerUI.productPrice(i);
            
            const productNameText = await productNameElement.getText();
            const productPriceText = await productPriceElement.getText();
            
            console.log("Products Names:"+ productNameText);
            console.log("Products Prices: " + productPriceText);

             // Extract the last 3 characters from the text content
            const lastThreeChars = productPriceText.substring(productPriceText.length - 3);

            // Convert the extracted substring to an integer
            const priceValue = parseInt(lastThreeChars, 10);

            products.push({
                index: i, // Store the index to later identify the product
                name: productNameText,
                price: priceValue
            });
        }
    
        return products;
    }
    
    async getThreeCheapestProducts() {
        const products = await this.getAllProductDetails();
    
        // Print all the products with their prices
        console.log("All Products:");
        products.forEach(product => {
            console.log(`Product: ${product.name}, Price: ${product.price}`);
        });

        // Sort the products by price in ascending order
        products.sort((a, b) => a.price - b.price);
    
        // Select the top 3 cheapest products
        const threeCheapestProducts = products.slice(0, 3);
    
        // Print the three cheapest products
        console.log("\nSelected Products (Cheapest 3):");
        threeCheapestProducts.forEach(product => {
            console.log(`Product: ${product.name}, Price: ${product.price}`);
        });
    
        return threeCheapestProducts;
    }

    async clickOnThreeCheapestProducts() {
        let totalPrice = 0;
        // Get the three cheapest products
        const threeCheapestProducts = await this.getThreeCheapestProducts();
    
        // Iterate over each selected product and click the add button
        for (const product of threeCheapestProducts) {
            await moisturizerUI.addButton(product.index).click();
            console.log(`Clicked to add product: ${product.name}, Price: ${product.price}`);
            totalPrice += product.price
        }
        console.log(`Total Price of the three cheapest products: ${totalPrice}`)
        return totalPrice;
    }

    async returnToMoisturizerPage() {
        await browser.execute('window.history.go(-1)');
        await browser.pause(2000);
        await this.scrollToTop()
        await browser.waitUntil(async () => {
            return (await moisturizerUI.MoisturizerHeading.isDisplayed()); 
        }, {
            timeout: 5000,
            timeoutMsg: 'Moisturizer page did not load correctly'
        });
    }

    async scrollToTop() {
        await browser.execute(() => window.scrollTo(0, 0));
    }

    async getDisplayedItems() {
        // Get all products using XPath
        const productElements = await $$('//p[@class="font-weight-bold top-space-10"]');
        
        if (productElements.length === 0) {
            console.log('No product elements found.');
            return [];
        }
        
        // Get the text from each product element
        const productTexts = [];
        for (const element of productElements) {
            const text = await element.getText();
            productTexts.push(text.trim());
        }
        
        return productTexts;
    }

    async selectProductByIndex(productIndex) {
        await browser.waitUntil(async () => {
            const productElement = await moisturizerUI.productName(productIndex);
            return productElement.isDisplayed(); // Ensure the element is visible
        }, { 
            timeout: 5000, // Adjust timeout as needed
            timeoutMsg: `Product with index ${productIndex} did not become visible`
        });
    
        // Retrieve the product element and log its text
        const productElement = await moisturizerUI.productName(productIndex);
        console.log((await productElement.getText()) + " PRODUCT ELEMENT");
    
    // Click the add button for the product
    const addButton = await moisturizerUI.addButton(productIndex); // Replace with actual add button selector
    await addButton.click();
    
    console.log(`Selected product with index: ${productIndex}`);
}
}

module.exports=new MoisturizerTask()