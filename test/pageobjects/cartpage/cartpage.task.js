const cartUI=require('../cartpage/cartpage.locators')


class CartTask{

    async getHeading(){
        await cartUI.Heading.waitForDisplayed()
        const heading=await cartUI.Heading.getText()
        console.log("CART PAGE HEADING: "+heading);
        return heading;
    }


    async getTableHeaders() {
        const headers = await cartUI.tableHeaders;
        console.log("headers"+headers);
        // Fetch the text of each header and store in an array
        const headerTexts = [];
        for (let i = 0; i < headers.length; i++) {
            const headerText = await headers[i].getText();
            headerTexts.push(headerText);
        }

        console.log("Table Headers: ", headerTexts);
        return headerTexts;
    }

    async returnToCartPage(){
        browser.url(`${browser.options.baseUrl}/cart`)
        await cartUI.Heading.waitForDisplayed()
        browser.pause(2000)
    }

}

module.exports=new CartTask()