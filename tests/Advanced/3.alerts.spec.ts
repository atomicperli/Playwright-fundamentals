import {test, expect} from '@playwright/test'

test('alerts Explanation', async({page}) => {
    await page.goto("https://demo.automationtesting.in/Alerts.html")
    page.on('dialog', (dialog) => {dialog.accept("Automation Testing user")})
    
    //Alert
    await page.getByText('Alert with OK').first().click();
    // page.once('dialog', (dialog) => {
    //     console.log(dialog.message())
    //     dialog.accept()
    // })
    await page.getByText('click the button to display an  alert box:').click();
    
    
    //Dialog
    await page.getByText('Alert with OK & Cancel').first().click()  
    // page.once('dialog', (dialog) => {
    //     console.log(dialog.message())
    //     dialog.dismiss()
    // })
    await page.getByText('click the button to display a confirm box').click();


    //Prompt
    await page.getByText('Alert with Textbox').first().click()
    // page.once('dialog', (dialog) => {
    //     console.log(dialog.message())
    //     dialog.accept("Yash")
    // })
    await page.getByText('click the button to demonstrate the prompt box').click()
    await expect(page.getByText("Hello Automation Testing user How are you today")).toBeVisible()

})