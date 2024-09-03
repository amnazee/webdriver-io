class MoisturizerUI{

    get moisturizerHeading(){
        return $('h2')
    }

    get cartValue(){
        return $("//span[@id='cart']")
    }

    addButton(index){
        return $(`(//button[@class='btn btn-primary'])[${index}]`)
    }

    get productNameSelector() {
        return "//p[@class='font-weight-bold top-space-10']";
    }

    productName(index) {
        return $(`(${this.productNameSelector})[${index}]`);
    }

    productPrice(index) {
        return $(`(${this.productPriceSelector})[${index}]`);
    }

    async getProductPriceCount() {
        return await $$(this.productPriceSelector).length;
    }

    get productPriceSelector() {
        return "//p[contains(text(),'Price: ')]";
    }

    get cartButton(){
        return $("//button[contains(.,'Cart')]")
    }

}

module.exports=new MoisturizerUI()