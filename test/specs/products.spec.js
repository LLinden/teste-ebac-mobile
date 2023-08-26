const productViewScreen = require("../screens/productView.screen");

describe("Product List", () => {
  it("should list products", async () => {
    expect(await productViewScreen.product("Augusta Pullover")).toExist();
  });
});
