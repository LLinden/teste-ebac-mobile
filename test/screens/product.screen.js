class ProductScreen {
  get addProduct() {
    return $("id:com.woocommerce.android:id/addProductButton");
  }

  get addSimpleProduct() {
    return $(
      "//hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.widget.LinearLayout/androidx.recyclerview.widget.RecyclerView/android.view.ViewGroup[1]"
    );
  }

  get productName() {
    return $("id:com.woocommerce.android:id/editText");
  }

  get productDescription() {
    return $("id:com.woocommerce.android:id/textPropertyName");
  }

  get back() {
    return $("id:Navigate up");
  }

  get addPrice() {
    return $(
      'android=new UiSelector().text("Add price").className("android.widget.TextView")'
    );
  }

  get addInventory() {
    return $(
      'android=new UiSelector().text("Inventory").className("android.widget.TextView")'
    );
  }

  get sku() {
    return $('id:com.woocommerce.android:id/edit_text');
  }

  get publish() {
    return $('id:com.woocommerce.android:id/menu_publish')
  }

  async clickAddProduct() {
    await this.addProduct.click();
  }

  async clickAddSimpleProduct() {
    await this.addSimpleProduct.click();
  }

  async fillProductName(name) {
    await this.productName.setValue(name);
  }

  async fillProductDescription(description) {
    await this.productDescription(description);
  }

  async clickBack() {
    await this.back.click();
  }

  async clickAddPrice() {
    await this.addPrice.click();
  }

  async clickInventory() {
    await this.addInventory.click();
  }

  async fillSku(sku) {
    await this.sku.setValue(sku);
  }

  async clickPublish() {
    await this.publish.click();
  }
}
module.exports = new ProductScreen();
