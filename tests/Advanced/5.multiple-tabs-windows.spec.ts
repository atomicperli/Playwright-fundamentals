import { test, expect, Page } from "@playwright/test";

test("Multiple tabs with known behavior Explanation", async ({ browser }) => {
    
    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/")
    let tabs: Page[] = []
    context.once('page', async (page) => {tabs.push(page)})
    await page.getByRole("link", {name: "Open Tab"}).click()
    //await page.getByRole("button", {name: "Open Window"}).click()
    let QACLickAcadaemyPage = tabs[0]
    console.log(await QACLickAcadaemyPage.title())

});


test.only("Multiple tabs with unknown behavior Explanation", async ({ browser }) => {
    
    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto("http://localhost:3000/")
    let tabs: Page[] = []
    context.on('page', async (page) => {tabs.push(page)})
    await page.getByRole("button", {name: 'Open Tabs'}).click()
    await page.waitForTimeout(4000)
    console.log(tabs.length)
    for(let tab of tabs) {
        if(await tab.title() === 'Wikipedia') {
            await tab.bringToFront()
            await tab.locator('#searchInput').fill('Yash')
        }
    }
});
