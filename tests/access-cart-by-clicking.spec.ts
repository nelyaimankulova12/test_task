import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/homePage';
import { ItemDetails } from '../pages/itemDetailsPage';
import { Data } from '../data/searchData';

test('Access shopping cart by clicking a cart icon', async ({ page }) => {

  const homePage = new HomePage(page);
  const itemDetailsPage = new ItemDetails(page);

  await itemDetailsPage.goToItemDetailsPage();
  await page.waitForSelector('button', { state: 'attached' });
  await page.evaluate(() => {
    window.scrollTo(0, document.body.scrollHeight);
  });
  await page.waitForSelector('button', { state: 'visible' });
  await itemDetailsPage.addToCartAndCloseModalWindow();
  await homePage.clickOnCartIcon();

  const addedItem = await page.isVisible('text=Shopping item');
  expect(addedItem).toBe(true);
});