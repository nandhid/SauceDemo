import LoginPage from '../../pages/LoginPage'
import InventoryPage from '../../pages/InventoryPage'
import CartPage from '../../pages/CartPage'
import CheckoutPage from '../../pages/CheckoutPage'

const loginPage = new LoginPage()
const inventoryPage = new InventoryPage()
const cartPage = new CartPage()
const checkoutPage = new CheckoutPage()

describe('Checkout Flow Tests (POM)', () => {

  beforeEach(() => {
    loginPage.login('standard_user', 'secret_sauce')
    inventoryPage.addToCart('sauce-labs-backpack')
    inventoryPage.openCart()
    cartPage.clickCheckout()
  })

  it('Completes checkout with valid information', () => {
    checkoutPage.enterInformation('John', 'Doe', '12345')
    checkoutPage.clickContinue()
    checkoutPage.verifySummaryPage()
    checkoutPage.clickFinish()
    checkoutPage.verifyConfirmation()
  })

  it('Shows error when required fields are missing', () => {
    checkoutPage.clickContinue()
    checkoutPage.verifyError()
  })

})
