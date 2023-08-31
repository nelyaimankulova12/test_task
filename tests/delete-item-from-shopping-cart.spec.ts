import { test, expect } from '@playwright/test';
import { ItemDetails } from '../pages/itemDetailsPage';
import { CartPage } from '../pages/cartPage';

test('Delete an item from the shopping cart', async ({ page }) => {

  const itemDetailsPage = new ItemDetails(page);
  const cartPage = new CartPage(page);

  await itemDetailsPage.goToItemDetailsPage();
  await page.waitForSelector('button', { state: 'attached' });
  await page.evaluate(() => {
    window.scrollTo(0, document.body.scrollHeight);
  });
  await page.waitForSelector('button', { state: 'visible' });
  await itemDetailsPage.addToCartAndOpenCart();
  await cartPage.closeModalWindow();

  const emptyCart = await page.isVisible('text=Shopping cart is empty.');
  expect(emptyCart).toBe(true);
});