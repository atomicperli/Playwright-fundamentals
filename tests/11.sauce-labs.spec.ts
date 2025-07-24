import {test, expect} from "@playwright/test";

test("sauce labs", async ({ page }) => {
  await page.goto("https://saucedemo.com/");
  await page.getByPlaceholder("Username").fill("standard_user");
  await page.getByPlaceholder("Password").fill("secret_sauce");
  await page.getByRole("button", { name: "Login" }).click();
  const products = page.locator(".inventory_item");
  const count = await products.count();
  let numberOfProductsAdded: number = 0
  for (let i = 0; i < count; i++) {
    let price = "";
    const product = products.nth(i);
    const priceText = await product
      .locator(".inventory_item_price")
      .textContent();

    if(priceText)  
      price = priceText.replace("$", "");

    if (Number(price) < 20) {
      await product.getByRole("button", {name: 'Add to cart'}).click();
      numberOfProductsAdded += 1
    }
  }
  const removeButtons = page.getByRole('button', {name: 'Remove'})
  console.log(numberOfProductsAdded)
  console.log(await removeButtons.count())
  expect(await removeButtons.count()).toBe(numberOfProductsAdded)
  await page.pause()
  // await page.goto('https://www.saucedemo.com/');
  //   await page.getByPlaceholder('Username').fill('standard_user');
  //   await page.getByPlaceholder('Password').fill('secret_sauce');
  //   await page.getByRole('button', { name: 'Login' }).click();
 
  //   console.log(await page.locator('.pricebar').count());
  //   const pricesSection =  page.locator('.pricebar');
  //   for (let i = 0; i <await pricesSection.count(); i++) {
 
  //       const priceText =await pricesSection.nth(i).locator('.inventory_item_price').textContent();
       
  //       if( typeof priceText==="string"){
  //       const priceValue = parseFloat(priceText.replace('$', ''));
  //       console.log(priceValue);
  //       if( priceValue > 9) {
  //           console.log(`Clicking on item with price: ${priceValue}`);
           
  //           await pricesSection.nth(i).getByRole('button', { name: 'Add to cart' }).click();
  //           //
  //       }
  //   }
       
       
});