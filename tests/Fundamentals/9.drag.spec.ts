import {test, expect} from '@playwright/test'

test('Drag and Drop', async ({page}) => {
    await page.goto("https://lmhdslrb.manus.space/")
    const item1 = page.getByText("Item 1")
    const item2 = page.getByText("Drop items here")
    await item1.dragTo(item2)
    
})  
