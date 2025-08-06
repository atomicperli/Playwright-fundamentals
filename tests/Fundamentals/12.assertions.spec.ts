import {test, expect} from "@playwright/test";

test("Test for Change in the URL", async ({ page }) => {
  await page.goto("https://saucedemo.com/");
  await page.getByPlaceholder("Username").fill("standard_user");
  await page.getByPlaceholder("Password").fill("secret_sauce");
  await page.getByRole("button", { name: "Login" }).click();
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')
});


test("Test for Title", async ({ page }) => {
  await page.goto("https://saucedemo.com/");
  await page.getByPlaceholder("Username").fill("standard_user");
  await page.getByPlaceholder("Password").fill("secret_sauce");
  await page.getByRole("button", { name: "Login" }).click();
  await expect(page).toHaveTitle('Swag Labs')
});

test("Test for ToHaveText", async ({ page }) => {
  await page.goto("https://saucedemo.com/");
  await page.getByPlaceholder("Username").fill("standard_user");
  await page.getByPlaceholder("Password").fill("secret_sauce");
  await page.getByRole("button", { name: "Login" }).click();
  const productsTitle = page.locator('.title')
  await expect(productsTitle).toHaveText('Products')
});

test.only("Test for ToContainText", async ({ page }) => {
  await page.goto("https://saucedemo.com/");
  await page.getByPlaceholder("Username").fill("standard_user");
  await page.getByPlaceholder("Password").fill("secret_sauce");
  await page.getByRole("button", { name: "Login" }).click();
  const productsTitle = page.locator('.inventory_item_price')
  for(let i = 0; i < await productsTitle.count(); i++) {
    const product = productsTitle.nth(i)
    console.log(await product.textContent())
    expect(product).toContainText('$')
  }
  //await expect(productsTitle).toHaveText('Products')
});