class PaymentUI{

    get EMAIL_INPUT(){
        return $("#email")
    }

    get CARD_NUMER(){
        return $("//input[@id='card_number']")
    }

    get EXP_DATE_INPUT(){
        return $("//input[@id='cc-exp']")
    }

    get CVC_INPUT(){
        return $("//input[@id='cc-csc']")
    }

    get ZIP_CODE_INPUT(){
        return $("//input[@name='zip']")
    }

    get CONFIRM_PAYMENT_BUTTON(){
        return $("//span[@class='iconTick']")
    }

    get PAYMENT_SUCCESS(){
        return $("//h2")
    }

    get Iframe(){
        return $("//iframe[@class='stripe_checkout_app']")
    }

    get PAY_BUTTON(){
        return $("//button[@class='stripe-button-el']")
    }
    
    get Header(){
        return $("//h1")
    }
}

module.exports=new PaymentUI()