class MyStoreScreen {
    get myStoreName(){
        return $('id:com.woocommerce.android:id/toolbar_subtitle')
    }

    get myStoreLogo(){
        return $('~My store')
    }

    async getStoreName() {
        await this.myStoreName.waitForExist()
        return await this.myStoreName.getText()
    }

    async getStoreLogo() {
        await this.myStoreLogo.waitForExist()
        return await this.myStoreLogo.isDisplayed()
    }
}
module.exports = new MyStoreScreen