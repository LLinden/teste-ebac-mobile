const productsViewScreen = requeire("../screens/productView.screen");

describe("Product List", () => {
  it("should list products", async () => {
    expect(await productsViewScreen.product("Augusta Pullover")).toExist();
  });
});
