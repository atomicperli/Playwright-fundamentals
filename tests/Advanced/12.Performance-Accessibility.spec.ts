import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

/*
	•	Time to First Byte (TTFB) – Time from request to the first byte of response; shows how fast the server starts responding.
	•	DOM Load / Load Event – Time taken for the HTML document to be fully loaded and parsed.
	•	First Contentful Paint (FCP) – Time when the first text or image is painted on the screen.
	•	Largest Contentful Paint (LCP) – Time when the largest visible element (image or text block) is fully rendered.
	•	Total Blocking Time (TBT) – Total time the main thread is blocked and unable to respond to user input.
	•	Cumulative Layout Shift (CLS) – Measures visual stability; how much elements unexpectedly shift while loading.
	•	Speed Index – How quickly the visible content of a page is displayed during load.

*/

test('Basic performance metrics', async ({ page }) => {
  const start = Date.now();
  await page.goto('https://saucedemo.com');
  
  const timing = JSON.parse(
    await page.evaluate(() => JSON.stringify(window.performance.timing))
  );

  console.log(`Time to First Byte: ${timing.responseStart - timing.requestStart} ms`);
  console.log(`DOM Load: ${timing.domContentLoadedEventEnd - timing.navigationStart} ms`);
  console.log(`Total Load Time: ${Date.now() - start} ms`);

});

/*

	The Web Content Accessibility Guidelines (WCAG) are a set of internationally recognized standards for making web content more accessible to people with disabilities

    Core principles:
	•	Perceivable (content must be visible and understandable)
	•	Operable (users must be able to interact)
	•	Understandable (clear, consistent navigation)
	•	Robust (works with assistive technologies)

 */   

 test.only('Basic accessibility check', async ({ page }) => {
  await page.goto('https://saucedemo.com');
  const accessibilityScanResults = await new AxeBuilder({ page }).analyze();
  console.log('Accessibility issues:', accessibilityScanResults.violations);
  expect( accessibilityScanResults.violations.length).toBeLessThan(2)
});   