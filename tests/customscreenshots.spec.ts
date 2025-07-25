import {test, expect} from '@playwright/test'

test("sauce labs", async ({ page }) => {
  await page.goto("https://saucedemo.com/");
  await page.getByPlaceholder("Username").press('Shift+a')
  // await page.getByPlaceholder("Password").fill("secret_sauce");
  // const loginButton = page.getByRole("button", { name: "Login" })
  // await loginButton.screenshot({path: './screenshots/LoginButton.png'})
  // await page.getByRole("button", { name: "Login" }).click();
  // await page.screenshot({path: './screenshots/afterLoggingIn.png', fullPage: true})
  await page.pause()
})