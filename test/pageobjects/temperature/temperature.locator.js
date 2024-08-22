class TemperatureUI{
    
    productPageButton(index){
        return $(`(//button[contains(@class, 'btn-primary')])[${index}]`)
    }

    get Temperature(){
        return $('span#temperature')
    }

    get TemperatureHeading(){
        return $('h2')
    }

    productDescription(index){
        return $(`(//p)[${index}]`)
    }

}

module.exports=new TemperatureUI()