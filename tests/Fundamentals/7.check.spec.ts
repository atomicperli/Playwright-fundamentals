import {test, expect} from '@playwright/test'

test('Checkboxes', async ({page}) => {
    await page.goto("https://lmhdslrb.manus.space/")
    const textBox = page.getByLabel("Subscribe to newsletter")
    await textBox.check()
    await expect(textBox).toBeChecked()
    await textBox.uncheck()
    await textBox.uncheck()
    await expect(textBox).not.toBeChecked()
    await page.pause()
})  


test('Radio Button', async ({page}) => {
    await page.goto("https://lmhdslrb.manus.space/")
    const radioInput = page.getByLabel("Small")
    await radioInput.check()
    await expect(radioInput).toBeChecked()
})