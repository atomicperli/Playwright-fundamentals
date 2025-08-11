// 3 types of timeouts - test timeout, action timeout, expect timeout

// test timeout - How much time a test can run before it fails - Default value is 30 seconds
// action timeout - Action timeout tells you how much time I can wait for an action to be performed on an element (click, sending some value, scrolling or whatever)
// expect timeout - Means how much time my assertion should wait before it fails

import {test, expect} from '@playwright/test'

test('Timeouts Explanation', async ({page}) => {

    // test timeout
        test.setTimeout(15000)
        await page.goto("https://3dhkilcqq87e.manussite.space/")
        await new Promise<void>((resolve) => {
            setTimeout(() => {
                resolve()
            }, 2000)
        })

    //action timeout - It will keep retrying until test timeout is reached
        await page.goto("https://www.saucedemo.com/"); // 1 second
        const userNameField = page.locator("#something") // Retry Mechanism and Auto Waiting Mechanism
        await userNameField.fill("standard_user", {timeout: 7000});

    // expect timeout (Assertion timeout)
        await page.goto("https://www.saucedemo.com/")
        const userNameField2 = page.locator(".login_logo")
        await expect(userNameField2).toHaveText("Swagg Labs", {timeout: 2000})

}) 