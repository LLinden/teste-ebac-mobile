class LoginScreen {

    get storeAddress() {
        return $('id:com.woocommerce.android:id/input')
    }

    get continue() {
        return $('id:com.woocommerce.android:id/bottom_button')
    }

    get credentials () {
        return $('id:com.woocommerce.android:id/login_site_creds')
    }

    get username() {
        return $('android=new UiSelector().text("Username").className("android.widget.EditText")')
    }

    get password() {
        return $('android=new UiSelector().text("Password").className("android.widget.EditText")')
    }

    get twoFactorPasswordButton() {
        return $('id:com.woocommerce.android:id/login_enter_password')
    }

    async setStoreAddress(url) {
        this.storeAddress.setValue(url)
    }

    async clickContinue() {
        this.continue.click()
    }

    async clickCredentials() {
        this.credentials.click()
    }

    async login(username, password) {
        this.username.setValue(username)
        this.password.setValue(password)
        this.continue.click()
    }

    async gotwoFactorPasswordButton() {
        this.twoFactorPasswordButton.click()
    }

    async twoFactorLogin(password) {
        await this.password.setValue(password)
        await this.continue.click()
    }

}
module.exports = new LoginScreen