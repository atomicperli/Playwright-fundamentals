
// Browser - The Browser itself
// Browser Context - A separate instance of a browser , For eg: Opening a New Incognito Window
// Page = Tab in the Browser Context

import { test, Browser, BrowserContext, Page } from "@playwright/test";


let browser: Browser
let browserContext: BrowserContext
let page: Page

// Something that we want to run (Prerequisite, PostRequisite - Hooks)

 // 1. Before all test cases start execution
 // 2. Before each test case starts executing
 // 3. After all test cased end exeuction
 // 4. After each test case ends execution

 test.beforeAll(async ({playwright}) => {
    browser = await playwright.chromium.launch()
    browserContext = await browser.newContext()
    page = await browserContext.newPage()
 })

 test('Navigate to a URL', async({page}) => {
    await page.goto("https://3dhkilcqq87e.manussite.space/")
 })

 test('Print the title of the webPage', async({page}) => {
    console.log(await page.title())
 })