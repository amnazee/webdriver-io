const dropdownPage=require('../dragAndDrop/dropdown.page')

class DropdownTask{

    async openDropdown(){
        browser.url(`${browser.options.baseUrl}/dropdown`)
        await dropdownPage.clickDropdownMenu()
    }

    async clickDropdownMenuOption(index) {
        await dropdownPage.dropdownOptions(index).waitForDisplayed()
        await dropdownPage.dropdownOptions(index).click()
    }

    async getSelectedOptionText() {
        const selectedOption = await dropdownPage.dropdownMenu.$$('option');
        for (const option of selectedOption) {
            const isSelected = await option.getAttribute('selected');
            if (isSelected !== null) {
                console.log(option.getText());
                return await option.getText();
            }
        }
    }

   async getSelectedOption(expectedText){
    const selectedText=await this.getSelectedOptionText()
    assert.equal(expectedText,await selectedText)
   }
}

module.exports=new DropdownTask()