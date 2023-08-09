import { HomeMethods } from "./pages/home/home.methods";
import { LoginMethods } from "./pages/login/login.methods";

describe("template spec", () => {
  it("passes", () => {
    // const usuario = "random01";
    // const contrasena = "random01";
    cy.visit("https://demoblaze.com/");
    HomeMethods.clickOnProductLink("Iphone 6 32gb");
    cy.wait(10000);
  });
});
