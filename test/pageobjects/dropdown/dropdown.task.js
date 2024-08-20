const dropdownLocators = require('./dropdown.locators')

class DropdownTask{

    
    async clickDropdownMenu() {
        await dropdownLocators.dropdownMenu.waitForDisplayed()
        await dropdownLocators.dropdownMenu.click()
    }

    async openDropdown(){
        browser.url(`${browser.options.baseUrl}/dropdown`)
        await this.clickDropdownMenu()
    }
    
    async clickDropdownMenuOption(index) {
        await dropdownLocators.dropdownOptions(index).waitForDisplayed()
        await dropdownLocators.dropdownOptions(index).click()
    }

    async getSelectedOptionText() {
        const selectedOption = await dropdownLocators.dropdownMenu.$$('option');
        for (const option of selectedOption) {
            const isSelected = await option.getAttribute('selected');
            if (isSelected !== null) {
                console.log(option.getText());
                return await option.getText();
            }
        }
    }
}

module.exports=new DropdownTask()