import {test, expect} from '@playwright/test'

test('waitFor Explanation @regression', async({page}) => {
    await page.goto("https://the-internet.herokuapp.com/dynamic_loading/1", {waitUntil: 'domcontentloaded'})
    await page.getByRole("button", {name: "Start"}).click()
    const loadingBar = page.locator('#loading')
    await loadingBar.waitFor({state: 'visible'})
    await loadingBar.waitFor({state: 'hidden'})
    await expect(page.locator('#finish')).toHaveText('Hello World!')
})

test('waitForURLs Explanation @regression', async({page}) => {
    await page.goto("https://rahulshettyacademy.com/")
    await page.locator('.social-icon-one').locator('li').nth(1).click()
    await page.waitForURL(/linkedin.com/)
})

test('waitForFunction Explanation @regression', async({page}) => {
    await page.goto("https://the-internet.herokuapp.com/dynamic_loading/2", {timeout: 60000})
    await page.getByRole("button", {name: "Start"}).click()
    await page.waitForFunction(() => {
        const el = document.querySelector('#finish');
        return el && el.childNodes.length == 1
    });
})

test('domContentLoaded Explanation @regression', async({page}) => {
    const startTime = Date.now()
    await page.goto("https://www.w3schools.com/html/html_forms.asp", {waitUntil: 'load'})
    const endTime = Date.now()
    const executionTime = endTime - startTime;
    console.log(`Operation took ${executionTime} ms`);
})

test('NetworkIdle Explanation @regression', async({page}) => {
    test.setTimeout(60000)
    const startTime = Date.now()
    await page.goto("https://rahulshettyacademy.com/", {waitUntil: 'networkidle'})
    const endTime = Date.now()
    const executionTime = endTime - startTime;
    console.log(`Operation took ${executionTime} ms`);
})

