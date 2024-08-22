class CartUI{

    get Heading(){
        return $('//h2')
    }

    get CART_TOTAL_AMOUNT(){
        return $("//p[@id='total']")
    }

    get PAY_BUTTON(){
        return $("//button[@class='stripe-button-el']")
    }

    get tableHeaders(){
            return $$('//th');
    }
}

module.exports=new CartUI()