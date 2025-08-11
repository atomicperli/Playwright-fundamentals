import {test, expect} from '@playwright/test'

test('Press or Fill Values', async ({page}) => {
    await page.goto("https://lmhdslrb.manus.space/")
    const textBox = page.getByPlaceholder("Type here...")
    await textBox.pressSequentially("Hell", {delay: 1000})
    
})


test('Fill and Clear', async ({page}) => {
    await page.goto("https://lmhdslrb.manus.space/")
    const textBox = page.getByPlaceholder("Enter your name")
    await textBox.fill("Yash")
    await textBox.clear()
    
})