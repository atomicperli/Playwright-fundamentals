import { test, expect } from "@playwright/test";

//test.use({viewport: {width: 350, height: 800}})
test("Multiple tabs with known behavior Explanation", async ({ page }) => {
    // let context = await browser.newContext({viewport: {width: 1920, height: 1440}})
    // let page = await context.newPage()
    await page.goto('https://www.saucedemo.com/')
    await page
      .getByPlaceholder("Username")
      .fill("standard_user");
    await page.getByPlaceholder("Password").fill("secret_sauce");
    await page.getByRole('button', {name: 'Login'}).click()
    await page.waitForURL('https://www.saucedemo.com/inventory.html', {waitUntil: 'load'})
    await page.pause()
});


test.only("Multiple tabs with known behavior Explanation2", async ({ browser }) => {
    let context = await browser.newContext({viewport: {width: 330, height: 800}})
    let page = await context.newPage()
    await page.goto('https://www.saucedemo.com/')
    await page
      .getByPlaceholder("Username")
      .fill("standard_user");
    await page.getByPlaceholder("Password").fill("secret_sauce");
    await page.getByRole('button', {name: 'Login'}).click()
    await page.waitForURL('https://www.saucedemo.com/inventory.html', {waitUntil: 'load'})
});