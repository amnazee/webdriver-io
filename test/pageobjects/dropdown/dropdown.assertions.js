const dropdownLocators = require("./dropdown.locators")
const dropdownTask = require("./dropdown.task")

class DropdownAssertions{
    
    async getSelectedOption(expectedText){
        const selectedText=await dropdownTask.getSelectedOptionText()
        assert.equal(expectedText,await selectedText)
       }

   }

   module.exports=new DropdownAssertions()
