export class ItemDetails {

    page: any
    addToCart_button: any
    proceedToCart_button: any
    back_button: any
    
    constructor(page) {
    
    this.page = page
    this.addToCart_button = this.page.getByRole('button', { name: 'Add to cart' })
    this.proceedToCart_button = this.page.getByRole('link', { name: 'Go to cart' })
    this.back_button = this.page.getByRole('link', { name: 'Back' })
    
    }

    async goToItemDetailsPage(){
        await this.page.goto('https://www.itemdetailspage.com/')
    }

    async addToCartAndCloseModalWindow(){
        await this.addToCart_button.click();
        await this.back_button.click()
    }
    
    async addToCartAndOpenCart() {
        await this.addToCart_button.click();
        await this.proceedToCart_button.click()
    }
    
    }