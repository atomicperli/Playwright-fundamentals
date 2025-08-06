import { test, expect } from "@playwright/test";

test("Upload Explanation", async ({ page }) => {
  await page.goto(
    "https://rahulshettyacademy.com/upload-download-test/index.html"
  );
  await expect(page.locator('#row-0').locator('#cell-4-undefined', {hasText: '299'})).toBeVisible()
  await page.locator('#fileinput').setInputFiles('/Users/yashwanthperli/Downloads/download (1).xlsx')
//   await page.locator('#fileinput').setInputFiles(['/Users/yashwanthperli/Downloads/download (1).xlsx', '/Users/yashwanthperli/Downloads/download (1).xlsx']) // To send multipple files
  await expect(page.locator('#row-0').locator('#cell-4-undefined', {hasText: '500'})).toBeVisible()
});

test.only("Download Explanation", async ({ page }) => {
  await page.goto(
    "https://rahulshettyacademy.com/upload-download-test/index.html"
  );
  page.once('download', (download) => {
    download.saveAs('/Users/yashwanthperli/Downloads/MyDownload.xlsx')
  })
  await page.getByRole("button", { name: "Download" }).click();
});
