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

    // Method to get a specific product name by index
    productName(index) {
        return $(`(${this.productNameSelector})[${index}]`);
    }

    // Method to get a specific product price by index
    productPrice(index) {
        return $(`(${this.productPriceSelector})[${index}]`);
    }

    // Method to get the count of all product prices
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