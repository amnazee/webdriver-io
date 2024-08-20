const dropdownTask=require('./AssertionsDropdown.test')



describe('User is on dropdown page',function(){
    it('and user selects option 1 from the dropdown', async()=>{
        await dropdownTask.openDropdown()
        await dropdownTask.clickDropdownMenuOption(2)
        await browser.pause(5000)
        await dropdownTask.getSelectedOption('Option 1')
    })
})
