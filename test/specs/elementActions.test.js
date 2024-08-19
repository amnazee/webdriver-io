const internetPage = require("../pageobjects/internet.page");

describe("Test element actions", function () {
    it("should click element", async() => {
       await browser.url("/");
       await internetPage.clickOnLink();
       expect(await browser.getUrl()).equals("https://the-internet.herokuapp.com/abtest");
    //    await assert.equal("https://the-internet.herokuapp.com/abtest",
    //    await browser.getUrl());
    });

    it("should get text for element", async() => {
        await browser.url("/");
        expect(await internetPage.getSpecificElementText(1)).equals("A/B Testing");
    });

    it("Should click checkbox", async() => {
        await internetPage.clickLink(6);
        await internetPage.clickCheckbox(1);
        expect(await internetPage.checkboxes(1).isSelected()).equals(true);
    });

    it("Should uncheck checkbox", async() => {
        await internetPage.clickCheckbox(1);
        expect(await internetPage.checkboxes(1).isSelected()).equals(false);
    });

    it("Should enter username", async () => {
        await browser.url(`${browser.options.baseUrl}/login`);
        await internetPage.enterUsername("Amna");
        assert.equal("Amna", await internetPage.username.getValue());
    });

    it('Should enter password', async () => {
        await internetPage.enterPassword("password");
        assert.equal("password", await internetPage.password.getValue());
    });

    it('Should clear value', async () => {        
        await internetPage.enterUsername("Amna");
        await internetPage.username.clearValue();
        assert.equal("", await internetPage.username.getValue());
    });

   
});