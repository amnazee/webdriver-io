const dropdownTask=require('../pageobjects/dropdown/dropdown.task')
const dropdownAssertion=require('../pageobjects/dropdown/dropdown.assertions')

describe('User is on dropdown page',function(){
    it('and user selects option 1 from the dropdown', async()=>{
        await dropdownTask.openDropdown()
        await dropdownTask.clickDropdownMenuOption(2)
        await dropdownAssertion.getSelectedOption('Option 1')
    })
})