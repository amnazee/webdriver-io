const dropdownTask=require('../dragAndDrop/dropdownTask.test')



describe('User is on dropdown page',function(){
    it('and user selects option 1 from the dropdown', async()=>{
        await dropdownTask.openDropdown()
        await dropdownTask.clickDropdownMenuOption(1)
        await dropdownTask.getSelectedOption('Option 1')
    })
})
