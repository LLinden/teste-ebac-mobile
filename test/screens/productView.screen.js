class ProductViewScreen {
  async product(name) {
    let selector = `-ios predicate string:name CONTAINS '${name}'`;
    await $(selector).waitForDisplayed({
      timeout: 10000,
    });
    return await $(selector);
  }
}
module.exports = new ProductViewScreen();
