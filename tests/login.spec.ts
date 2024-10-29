// @ts-check
export {};
const { test, expect } = require('@playwright/test');

test('has title', async ({ page } : { page:any }) => {
  var username = "student";
  var password = "Password123";

  await page.goto('http://browserstacktraining.site');

  await page.locator("#loginButton").click();

  await page.locator("#username").fill(username);
  await page.locator("#password").fill(password);
  await page.locator("#submit").click();



  // Expect a title "to contain" a substring.
  await expect(page.locator("#message")).toHaveText("Login successful!");
});