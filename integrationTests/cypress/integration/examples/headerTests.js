/// <reference types="cypress" />
import HomePage from './pageobjects/HomePage'
import SignInPage from './pageobjects/signinpage';

context('Header', () => {
    it('Sign in button', () => {
       let homePage = new HomePage();
       homePage.header.SinginButton.should(($button) => 
       {
        const reg = new RegExp("\\n|\\t","g");
        const actualText = $button.text().replaceAll(reg,"");
        expect(actualText).to.eq("Sign in");
       });
      })

      it("Click Sign in button", () => {
        let homePage = new HomePage();
        homePage.header.SinginButton.click();
        let signInPage = new SignInPage();
        signInPage.SignInF.Container.should("be.visible");
      })
    })