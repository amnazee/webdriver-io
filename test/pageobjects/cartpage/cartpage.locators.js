class CartUI{

    get heading(){
        return $('//h2')
    }

    get cartTotalAmount(){
        return $("//p[@id='total']")
    }

    get payButton(){
        return $("//button[@class='stripe-button-el']")
    }

    get tableHeaders(){
            return $$('//th');
    }
}

module.exports=new CartUI()