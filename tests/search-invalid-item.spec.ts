import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/homePage';
import { Data } from '../data/searchData';

test('Search invalid item', async ({ page }) => {

  const homePage = new HomePage(page);

  await homePage.goToHomePage();
  await homePage.searchItem(Data.invalidItemName);
  await page.waitForLoadState('load');

  const noResultsText = await page.isVisible(`text=No results for ${Data.invalidItemName}.`);
  expect(noResultsText).toBe(true);
});