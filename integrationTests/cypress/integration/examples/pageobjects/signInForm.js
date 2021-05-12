
import BaseElement from "./BaseElement"
export default class SignInForm extends BaseElement
{
    constructor(locator)
    {
        super(locator)
    }    

    get EmailInput() {return super.Find("#email_create")}

}