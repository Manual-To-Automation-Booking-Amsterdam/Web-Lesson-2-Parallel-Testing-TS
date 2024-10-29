// @ts-check
export {};
const { test, expect } = require('@playwright/test');

var username = "student";
var wrongUsername = "wrongStudent";
var password = "Password123";
var wrongPassword = "Password321";
var wrongUsernameText = "Incorrect username!";
var wrongPasswordText = "Incorrect password!";
var wrongUsernameAndPasswordText = "Incorrect username and password!";

test('wrong username', async ({ page } : { page:any }) => {
  await page.goto('http://browserstacktraining.site');

  await page.locator("#loginButton").click();

  await page.locator("#username").fill(wrongUsername);
  await page.locator("#password").fill(password);
  await page.locator("#submit").click();

  // Expect a title "to contain" a substring.
  await expect(page.locator("#message")).toHaveText(wrongUsernameText);
});

test('wrong password', async ({ page } : { page:any }) => {
  await page.goto('http://browserstacktraining.site');

  await page.locator("#loginButton").click();

  await page.locator("#username").fill(username);
  await page.locator("#password").fill(wrongPassword);
  await page.locator("#submit").click();

  // Expect a title "to contain" a substring.
  await expect(page.locator("#message")).toHaveText(wrongPasswordText);
});

test('wrong username and password', async ({ page } : { page:any }) => {
  await page.goto('http://browserstacktraining.site');

  await page.locator("#loginButton").click();

  await page.locator("#username").fill(wrongUsername);
  await page.locator("#password").fill(wrongPassword);
  await page.locator("#submit").click();

  // Expect a title "to contain" a substring.
  await expect(page.locator("#message")).toHaveText(wrongUsernameAndPasswordText);
});