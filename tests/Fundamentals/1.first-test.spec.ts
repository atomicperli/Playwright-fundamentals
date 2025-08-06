import {test, expect} from '@playwright/test'

test('My First test', async ({page}) => {
    await page.goto("https://3dhkilcqq87e.manussite.space/")
    expect(await page.title()).toBe('Playwright with TypeScript: Comprehensive Automation Curriculum')
})  