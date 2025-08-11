import { test, expect, BrowserContext } from "@playwright/test";

test.beforeAll(
  "should be able to store and retrieve data",
  async ({ browser }) => {
    let context = await browser.newContext();
    let page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    await page
      .getByPlaceholder("email@example.com")
      .fill("yashwanth.perli@gmail.com");
    await page.getByPlaceholder("enter your passsword").fill("Test@123");
    await page.locator("#login").first().click();
    await page.waitForURL(
      "https://rahulshettyacademy.com/client/#/dashboard/dash",
      { waitUntil: "networkidle" }
    );
    //   await page.getByRole('button', {name:'Add To Cart'}).first().waitFor({state:'visible'})
    await context.storageState({ path: "sessionstorage.json" });
  }
);

test("Access Inventory page without logging", async ({ browser }) => {
  let context = await browser.newContext({
    storageState: "sessionstorage.json",
  });
  let page = await context.newPage();
  await page.goto("https://rahulshettyacademy.com/client/#/dashboard/myorders");
  await page.pause();
  await page.getByRole("button", { name: "Orders" }).first().click();
});
