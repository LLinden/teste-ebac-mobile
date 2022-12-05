const homeScreen = require("../screens/home.screen");
const loginScreen = require("../screens/login.screen");
const myStoreScreen = require("../screens/myStore.screen");

let usuario = "";
let senha = "";
let urlLoja = "";

describe("Acessar painel de admin", () => {
  it("deve logar com credenciais válidas", async () => {
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
