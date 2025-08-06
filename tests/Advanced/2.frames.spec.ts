import {test, expect} from '@playwright/test'

test('Frames Explanation', async({page}) => {
    await page.goto("https://practice-automation.com/iframes/", {waitUntil: 'domcontentloaded'})
    await page.frameLocator('#iframe-1').getByRole("link", {name: 'GET STARTED'}).click()
    await page.getByText('Courses').click()
    //console.log(page.frames().length)
})
