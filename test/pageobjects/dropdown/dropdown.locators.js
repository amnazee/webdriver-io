class DropdownPage{

    get dropdownMenu() { return $('#dropdown') }
 
    dropdownOptions(index){
        return $(`#dropdown option:nth-child(${index})`)
    }
}

module.exports=new DropdownPage()