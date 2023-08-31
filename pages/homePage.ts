export class HomePage {

    page: any
    purchase_item: any
    search_textbox: any
    search_button: any
    cart_icon: any

    constructor(page) {

        this.page = page
        this.purchase_item = this.page.getByRole('link', { name: 'Shopping item' })
        this.search_textbox = this.page.getByPlaceholder('Search')
        this.search_button = this.page.getByRole('button', { name: 'Go' })
        this.cart_icon = this.page.getByText('Shopping cart')

    }

    async goToHomePage(){
        await this.page.goto('https://www.exampleshop.com/')
    }

    async clickOnItem(){
        await this.purchase_item.click()
    }

    async searchItem(searchData){
        await this.search_textbox.click();
        await this.search_textbox.fill(searchData);
        await this.search_button.click()
    }

    async clickOnCartIcon(){
        await this.cart_icon.click()
    }
    
}