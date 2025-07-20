import {test, expect} from '@playwright/test'

test('Hover', async ({page}) => {
    await page.goto("https://lmhdslrb.manus.space/")
    const item1 = page.getByText("Hover me!")
    await item1.hover()
    await page.pause()
})  
