export class CartPage {
    page: any
    proceed_button: any
    close_button: any

    constructor(page) {

        this.page = page
        this.proceed_button = this.page.getByRole('button', { name: 'Proseed with order' })
        this.close_button = this.page.getByRole('link', { name: 'close' })

    }

    async clickProceedButton(){
        await this.proceed_button.click()
    }

    async closeModalWindow(){
        await this.close_button.click()
    }

}