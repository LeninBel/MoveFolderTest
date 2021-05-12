/// <reference types="cypress" />

import BaseElement from "./baseElement";

export default class Header extends BaseElement{

    constructor(locator)
    {
        super(locator)
    }

    get SinginButton(){ return super.Find(".login")};
}
