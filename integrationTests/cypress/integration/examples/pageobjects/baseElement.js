/// <reference types="cypress" />

export default class BaseElement
{
    constructor(locator)
    {
        this.locator = locator
    }

    get Container() { return cy.get(this.locator)}

    Find(childLocator) {return this.Container.find(childLocator)}
}