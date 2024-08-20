class DropdownPage{

    get dropdownMenu() { return $('#dropdown') }
 
    dropdownOptions(index){
        return $(`#dropdown option:nth-child(${index})`)
    }

    async clickDropdownMenu() {
        await this.dropdownMenu.waitForDisplayed()
        await this.dropdownMenu.click()
    }
}

module.exports=new DropdownPage()