import {test, expect} from '@playwright/test'

test('Single Select Dropdowns', async ({page}) => {
    await page.goto("https://lmhdslrb.manus.space/")
    const dropdown = page.getByRole("combobox", {name: "Choose a color:"})
    await dropdown.scrollIntoViewIfNeeded()
    await dropdown.selectOption({index: 6})
    
})  


test('Mutli Select Dropdown', async ({page}) => {
    await page.goto("https://lmhdslrb.manus.space/")
    const dropdown = page.getByRole('listbox', {name: "Choose multiple fruits:"})
    await dropdown.scrollIntoViewIfNeeded()
    await dropdown.selectOption(["Apple", "Banana", "Orange"])
    await dropdown.selectOption(["Apple", "Banana"])
    await dropdown.selectOption([])
    
})