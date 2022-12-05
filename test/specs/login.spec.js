const homeScreen = require("../screens/home.screen");
const loginScreen = require("../screens/login.screen");
const myStoreScreen = require("../screens/myStore.screen");

let usuario = "";
let senha = "";
let urlLoja = "";

describe("Access Admin Panel", () => {
  it("should login with valid credentials", async () => {
    await homeScreen.skipScreen();
    await homeScreen.goToLogin();
    await loginScreen.setStoreAddress(urlLoja);
    await loginScreen.clickContinue();
    await loginScreen.clickCredentials();
    await loginScreen.login(usuario, senha);
    await loginScreen.gotwoFactorPasswordButton();
    await loginScreen.twoFactorLogin(senha);

    expect(await myStoreScreen.getStoreLogo()).toBeTruthy();
    expect(await myStoreScreen.getStoreName()).toEqual("EBAC - Shop");
  });
});
