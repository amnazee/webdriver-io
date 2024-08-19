class Internet {
    get pageHeader() { return $('h1.heading') }
    get subHeading() { return $('h2') }
    get h3Header() { return $('h3') }
    get pageFooter() { return $('#page-footer') }
    get parent() { return $('ul') }
    get childElements() { return this.parent.$$('li') }
    specificChildElement(index) { return this.parent.$(`li:nth-child(${index})`) }

    get firstLink() { return $('ul li:nth-child(1) a') }
    link(index) { return $(`ul li:nth-child(${index}) a`) }

    checkboxes(index) { return $(`#checkboxes input:nth-child(${index})`) }

    get username() { return $('#username') }
    get password() { return $('#password') }

    // figures(index) { return $(`.example .figure:nth-child(${index}) img`) }
    figures(index) { return $(`.example .figure:nth-of-type(${index}) img`) }
    figureDetails(index) { return $(`.example .figure:nth-of-type(${index}) .figcaption h5`) }

    get target() { return $('.example #target') }
    get result() { return $('.example #result') }

    get hereLink() { return $('.example a') }

    get iframe() { return $('#mce_0_ifr') }
    get iframeBody() { return $('#tinymce') }

    get columnA() { return $('#column-a') }
    get columnB() { return $('#column-b') }

    get columnAHeader() { return $('#column-a header') }
    get columnBHeader() { return $('#column-b header') }

    get draggable() { return $('#draggable') }
    get droppable() { return $('#droppable') }
    get droppableParagraph() { return $('#droppable p') }

    get dropdownMenu() { return $('#dropdown') }
    get dropdownMenuOption1() { return $('#dropdown option:nth-child(2)') }
    get dropdownMenuOption2() { return $('#dropdown option:nth-child(3)') }

    javascriptAlertButton(index) { return $(`.example li:nth-child(${index}) button`) }

    get exampleButton() { return $('.example button') }
    deleteButton(index) { return $(`#elements button:nth-child(${index})`) }

    get pageButton() { return $('#checkbox-example button') }

    get enableButton() { return $('#input-example button') }
    get inputEnabledField() { return $('#input-example input') }

    /** 
     * Click the Enable/Disable Button
     */
    clickEnableButton() {
        this.enableButton.waitForDisplayed()
        this.enableButton.click()
    }

    /** 
     * Click the Page Button
     */
    clickPageButton() {
        this.pageButton.waitForDisplayed()
        this.pageButton.click()
    }

    /** 
     * Click the Example Button
     */
    clickExampleButton() {
        this.exampleButton.waitForDisplayed()
        this.exampleButton.click()
    }
    /**
     * Clicks the delete button
     * @param {Number} index index of the element
     */
    clickDeleteButton(index) {
        this.deleteButton(index).waitForDisplayed()
        this.deleteButton(index).click()
    }

    /**
     * Click the specified javascript alert button
     * @param {Number} index the index of the element
     */
    clickJavascriptAlertButton(index) {
        this.javascriptAlertButton(index).waitForDisplayed()
        this.javascriptAlertButton(index).click()
    }

    /** 
     * Click the dropdown Button
     */
    async clickDropdownMenu() {
        await this.dropdownMenu.waitForDisplayed()
        await this.dropdownMenu.click()
    }

    async clickDropdownMenuOption1() {
        await this.dropdownMenuOption1.waitForDisplayed()
        await this.dropdownMenuOption1.click()
    }

    clickDropdownMenuOption2() {
        this.dropdownMenuOption2.waitForDisplayed()
        this.dropdownMenuOption2.click()
    }


    /**
     * Drag and drop
     */
    async dragDraggableToDroppable() {
        await this.draggable.waitForDisplayed()
        await this.draggable.dragAndDrop(await this.droppable)

    }

    /**
     * Drag box A to box B
     */
    async dragColumnAToColumnB() {
        await this.columnA.waitForDisplayed()
        await this.columnA.dragAndDrop(await this.columnB)
    }

    /**
     * Enter text in the iframe
     * @param {String} text the text to be entered
     */
    async sendTextToBody(text) {
        await this.iframeBody.waitForDisplayed()
        // await this.iframeBody.click()
        // await this.iframeBody.clearValue()
        // // await this.iframeBody.keys(text)
        // await browser.keys(text)
    }

    /**
     * Click the "click here" link
     */
    async clickHereLink() {
        await this.hereLink.waitForDisplayed()
        await this.hereLink.click()
    }

    /**
     * scrolls to the page footer
     */
    async scrollToPageFooter() {
        await this.pageFooter.moveTo()
    }


    /**
     * Clicks the target input field
     */
    async clickTarget() {
        await this.target.waitForDisplayed()
        await this.target.click()
    }

    /**
     * Send keybord keys to Target
     * @param {String} text The keyboard text to enter
     */
    async sendKeysToTarget(text) {
        await this.target.waitForDisplayed()
        await this.target.click()
        await browser.keys(text)
    }

    /**
     * return the text of the return element
     */
    async getResultText() {
        await this.result.waitForDisplayed()
        return await this.result.getText()
    }

    /**
     * Hovers over the specified image
     * @param {Number} index the specific index of the image
     */
    async hoverOnFigure(index) {
        console.log(await this.figures(index).isDisplayed());
        await this.figures(index).waitForDisplayed()
        await this.figures(index).moveTo(1, 1)
    }

    /**
     * Returns the text of the figure details
     * @param {Number} index the index of the element
     */
    async getFigureDetailsText(index) {
        await this.figureDetails(index).waitForDisplayed()
        return this.figureDetails(index).getText()
    }
    /**
     * Enter the username into the field
     * @param {String} text username to be entered
     */
    async enterUsername(text) {
        await this.username.waitForDisplayed()
        await this.username.setValue(text)
    }

    /**
     * Enter the password into the field
     * @param {String} text password to be entered
     */
    async enterPassword(text) {
        await this.password.waitForDisplayed()
        await this.password.setValue(text)
    }

    /**
     * Clicks on the link based on the index provided
     * @param {Number} index the index of the element
     */
    async clickLink(index) {
        await this.link(index).waitForDisplayed()
        await this.link(index).click()
    }

    async clickCheckbox(index) {
        await this.checkboxes(index).waitForDisplayed()
        await this.checkboxes(index).click()
    }

    async getLiText() {
        await this.childElements.filter((element) => {
            console.log(element.getText())
        })
    }

    async getSpecificElementText(index) {
        await this.specificChildElement(index).waitForDisplayed()
        console.log(this.specificChildElement(index).getText());
        return this.specificChildElement(index).getText()
    }

    async clickOnLink() {
        if (await this.firstLink.isDisplayed() === true) {
            await this.firstLink.click()
        }
        await this.h3Header.waitForDisplayed()
    }

}
module.exports = new Internet()