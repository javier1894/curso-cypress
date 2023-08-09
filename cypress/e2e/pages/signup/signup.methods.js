import { SignupElements } from "./signup.elements";

export class SignupMethods {
  static insertUsername(username) {
    SignupElements.textBoxes.username.invoke("val", username);
  }

  static insertPassword(password) {
    SignupElements.textBoxes.password.invoke("val", password);
  }

  static clickOnSignupButton() {
    SignupElements.buttons.signup.click();
  }

  static signup(username, password) {
    this.insertUsername(username);
    this.insertPassword(password);
    this.clickOnSignupButton();
  }
}
