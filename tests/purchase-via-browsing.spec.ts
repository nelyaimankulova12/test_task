import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/homePage';
import { ItemDetails } from '../pages/itemDetailsPage';
import { CartPage } from '../pages/cartPage';


test('Purchase using browse functionality', async ({ page }) => {

  const homePage = new HomePage(page);
  const itemDetailsPage = new ItemDetails(page);
  const cartPage = new CartPage(page);

  await homePage.goToHomePage();
  await homePage.clickOnItem();
  await itemDetailsPage.addToCartAndOpenCart();
  await cartPage.clickProceedButton();
});