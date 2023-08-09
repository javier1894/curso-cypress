import { LoginMethods } from "./pages/login/login.methods";

describe("template spec", () => {
  it("passes", () => {
    const usuario = "random01";
    const contrasena = "random01";
    cy.visit("https://demoblaze.com/");
    cy.get('a[data-target="#logInModal"]').click();
    LoginMethods.login(usuario, contrasena);
    cy.get("a#nameofuser").should("contain.text", "random01");
    cy.wait(10000);
  });
});
