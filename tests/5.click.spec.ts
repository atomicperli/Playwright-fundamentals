import {test, expect} from '@playwright/test'

test('Single Click', async ({page}) => {
    await page.goto("https://lmhdslrb.manus.space/")
    const singleClickButton = page.getByRole("button", {name: "SINGLE CLICK"})
    await singleClickButton.click()
    const singleClickDetectedText = page.getByText("Single click detected!")
    await expect(singleClickDetectedText).toBeVisible()
})  


test('Double Click', async ({page}) => {
    await page.goto("https://lmhdslrb.manus.space/")
    const doubleClickButton = page.getByRole("button", {name: "DOUBLE CLICK"})
    await doubleClickButton.dblclick()
    const doubleClickButtonDetectedText = page.getByText("Double click detected!")
    await expect(doubleClickButtonDetectedText).toBeVisible()
})


test('Right Click', async ({page}) => {
    await page.goto("https://lmhdslrb.manus.space/")
    const rightClickButton = page.getByRole("button", {name: "RIGHT CLICK"})
    await rightClickButton.click({button: 'right'})
    const rightClickButtonDetectedText = page.getByText("Right click detected!")
    await expect(rightClickButton).toBeVisible()
})

test('Control + Click', async ({page}) => {
    await page.goto("https://lmhdslrb.manus.space/")
    const controlClickButton = page.getByRole("button", {name: "CTRL + CLICK"})
    await controlClickButton.click({modifiers: ['ControlOrMeta']})
    const controlClickButtonDetectedText = page.getByText("Ctrl + Click detected!")
    await expect(controlClickButtonDetectedText).toBeVisible()
})

