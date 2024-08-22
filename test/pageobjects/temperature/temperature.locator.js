class TemperatureUI{
    
    productPageButton(index){
        return $(`(//button[contains(@class, 'btn-primary')])[${index}]`)
    }

    get temperature(){
        return $('span#temperature')
    }

    get temperatureHeading(){
        return $('h2')
    }

    productDescription(index){
        return $(`(//p)[${index}]`)
    }

}

module.exports=new TemperatureUI()