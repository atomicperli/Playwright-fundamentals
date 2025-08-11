import test, { expect } from "@playwright/test";

test('Explaining Locators', async({page}) => {

    // getByRole
    // getByPlaceholder
    // getByText
    // getByLabel
    // getByAltText
    // getByTitle
    // getByTestId
    

    // Getting fields using getByRole
        // await page.goto("https://www.saucedemo.com/")
        // const userNameField = page.getByRole("textbox", {name: "Username"})
        // const passwordField = page.getByRole("textbox", {name: "Password"})
        // await userNameField.fill("standard_user")
        // await passwordField.fill("secret_sauce")
        // const submitButton = page.getByRole("button", {name: 'Login'})
        // await submitButton.click()

    // Getting fields using getByPlaceholder
        // await page.goto("https://www.saucedemo.com/")
        // const userNameField = page.getByPlaceholder("Username")
        // const passwordField = page.getByPlaceholder("Password")
        // await userNameField.fill("standard_user")
        // await passwordField.fill("secret_sauce")
    
    // Getting fields using getByText

        // await page.goto("https://www.saucedemo.com/")
        // const userNameField = page.getByText("Swag")
        // console.log(await userNameField.textContent())

        // await page.goto("https://www.saucedemo.com/")
        // const userNameField = page.getByText("Swag", {exact: true})
        // console.log(await userNameField.textContent())

    // Getting fields using getByLabel
    
        // await page.goto("https://www.w3schools.com/html/html_forms.asp", {waitUntil: "domcontentloaded"})
        // const userNameField = page.getByLabel("First name:")
        // const passwordField = page.getByLabel("Last name:")
        // await userNameField.fill("Mahendra Singh")
        // await passwordField.fill("Dhoni")

    // Getting fields using getByAltText - Used for Images
    
        // await page.goto("https://rahulshettyacademy.com/")
        // const landingPageImage = page.getByAltText("First slide")
        // const sourceUrl = await landingPageImage.getAttribute('src')
        // console.log(sourceUrl)

    // Getting fields using getByTitle
    
        // await page.goto("https://faeenidz.manussite.space/title-locator")
        // const highCpuUsageErrorText = page.getByTitle("High CPU usage detected on server 3")
        // console.log(await highCpuUsageErrorText.textContent())
    
    // Getting fields using getByTestId (data-testid)
        // await page.goto("https://faeenidz.manussite.space/test-id-locator")
        // const userNameField2 = page.getByTestId("user-name-input")
        // await userNameField2.fill("standard_user")
       

    
})