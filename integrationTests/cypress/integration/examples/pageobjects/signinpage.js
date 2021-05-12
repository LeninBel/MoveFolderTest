/// <reference types="cypress" />
import SignInForm from "./signInForm"
import BasePage from "./BasePage"

export default class SignInPage extends BasePage
{
     get SignInF() { return new SignInForm("#create-account_form") }

}

