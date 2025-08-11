import { test, expect } from "@playwright/test";

// test.beforeEach - This runs before each test
// test.beforeAll - This runs before all the tests once
// test.afterEach - This run after each test
// test.afterAll - This runs once after all the tests are done
// test.describe - used to group tests in a single file including hooks

test.describe("This is for UI Tests", async () => {
  test.beforeAll(async ({}) => {
    console.log("This is before All Hook");
  });

  test.afterAll(async ({}) => {
    console.log("This is after All Hook");
  });

  test.beforeEach(async ({ page }) => {
    console.log("This is before Each Hook");
  });

  test.afterEach(async ({ page }) => {
    console.log("This is after Each Hook");
  });

  test("Login UI Test", async ({ page }) => {
    console.log("This is a UI Test");
  });

});

test.describe("This is for API Tests", async () => {
  test.beforeAll(async ({}) => {
    console.log("This is before All API Hook");
  });

  test.afterAll(async ({}) => {
    console.log("This is after All API Hook");
  });

  test.beforeEach(async ({ page }) => {
    console.log("This is before Each API Hook");
  });

  test.afterEach(async ({ page }) => {
    console.log("This is after Each API Hook");
  });

  test("Login API Test", async ({ page }) => {
    console.log("This is a API Test");
  });
});
