
import Header from './Header'

class BasePage
{
    get header() { return new Header('#header')};
}

export default BasePage;