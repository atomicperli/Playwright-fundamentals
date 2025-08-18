import { test } from "@playwright/test";

test("Handle Basic Auth popup", async ({ browser }) => {
  const context = await browser.newContext({
    httpCredentials: {
      username: "admin",
      password: "admin",
    },
  });
  const page = await context.newPage();
  await page.goto("https://the-internet.herokuapp.com/basic_auth");
  await page.pause()
});

test("Handle Basic Auth popup2", async ({ page }) => {
  await page.goto("https://admin:admin@the-internet.herokuapp.com/basic_auth");
  await page.pause()
});