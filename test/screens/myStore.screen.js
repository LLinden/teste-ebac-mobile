class MyStoreScreen {
    get myStoreName(){
        return $('id:com.woocommerce.android:id/toolbar_subtitle')
    }

    get myStoreLogo(){
        return $('~My store')
    }

    async getStoreName() {
        return await this.myStoreName.getText()
    }

    async getStoreLogo() {
        return await this.myStoreLogo.isDisplayed()
    }
}
module.exports = new MyStoreScreen