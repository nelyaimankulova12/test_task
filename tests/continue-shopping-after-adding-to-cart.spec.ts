import { test, expect } from '@playwright/test';
import { ItemDetails } from '../pages/itemDetailsPage';

test('Continue shopping after adding to cart', async ({ page }) => {

  const itemDetailsPage = new ItemDetails(page);

  await itemDetailsPage.goToItemDetailsPage();
  await itemDetailsPage.addToCartAndCloseModalWindow();
  
  expect(page.url()).toBe('https://www.itemdetailspage.com/');
});