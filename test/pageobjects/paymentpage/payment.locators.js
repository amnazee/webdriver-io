class PaymentUI{

    get emailInput(){
        return $("#email")
    }

    get cardNumber(){
        return $("//input[@id='card_number']")
    }

    get expiryDateInput(){
        return $("//input[@id='cc-exp']")
    }

    get cvcInput(){
        return $("//input[@id='cc-csc']")
    }

    get zipCodeInput(){
        return $("//input[@name='zip']")
    }

    get confirmPaymentButton(){
        return $("//span[@class='iconTick']")
    }

    get paymentSuccess(){
        return $("//h2")
    }

    get Iframe(){
        return $("//iframe[@class='stripe_checkout_app']")
    }

    get payButton(){
        return $("//button[@class='stripe-button-el']")
    }
    
    get header(){
        return $("//h1")
    }
}

module.exports=new PaymentUI()