const homeScreen = require("../screens/home.screen");
const loginScreen = require("../screens/login.screen");
const myStoreScreen = require("../screens/myStore.screen");
const priceScreen = require("../screens/price.screen");
const productScreen = require("../screens/product.screen");

let usuario = "gerente";
let senha = "GD*peToHNJ1#c$sgk08EaYJQ";
let urlLoja = "http://lojaebac.ebaconline.art.br/";
let nomeProduto = "Teste"
let descricao = "Teste"
let precoNormal = 20
let precoVenda = 10
let sku = 123

describe("Cadastro de produto", () => {
  it("deve cadastrar produto com sucesso", async () => {
    await homeScreen.skipScreen();
    await homeScreen.goToLogin();
    await loginScreen.setStoreAddress(urlLoja);
    await loginScreen.clickContinue();
    await loginScreen.clickCredentials();
    await loginScreen.login(usuario, senha);
    await loginScreen.gotwoFactorPasswordButton();
    await loginScreen.twoFactorLogin(senha);
    await myStoreScreen.clickProductScreen();
    await productScreen.clickAddProduct();
    await productScreen.clickAddSimpleProduct();
    await productScreen.fillProductName(nomeProduto)
    await productScreen.fillProductDescription(descricao)
    await productScreen.clickBack()
    await productScreen.clickAddPrice()
    await priceScreen.fillRegularPrice(precoNormal)
    await priceScreen.fillSalePrice(precoVenda)
    await productScreen.clickBack()
    await productScreen.clickInventory()
    await productScreen.fillSku(sku)
    await productScreen.clickBack()
    


    expect(await myStoreScreen.getStoreLogo()).toBeTruthy();
    expect(await myStoreScreen.getStoreName()).toEqual("EBAC - Shop");
  });
});
