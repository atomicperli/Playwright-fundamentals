import { test, expect } from "@playwright/test";

//test.use({viewport: {width: 350, height: 800}})
test("Multiple tabs with known behavior Explanation", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");
  await page.getByPlaceholder("Username").fill("visual_user");
  await page.getByPlaceholder("Password").fill("secret_sauce");
  await page.getByRole("button", { name: "Login" }).click();
  await page.waitForURL("https://www.saucedemo.com/inventory.html", {
    waitUntil: "load",
  });
  await expect(page).toHaveScreenshot("products-page.png", {
    mask: [page.locator(""), page.locator("")],
    maxDiffPixelRatio: 0.04,
    maxDiffPixels: 33000,
  });
});
