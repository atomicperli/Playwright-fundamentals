import { test, expect } from "@playwright/test";

test("Explaining route.fulfill and abort concepts", async ({ page }) => {


    // rote.fulfill(). -> You can mock the response data and actually make sure the response is whatever you want - 
    // route.continue() -> You can actually change the request fields
    // route.abort(). -> You can actually cancel this request - don't let it pass.

  await page.goto("https://rahulshettyacademy.com/client/auth/login");
  await page.getByPlaceholder("email@example.com").fill("");
  await page.getByPlaceholder("enter your passsword").fill("");
  await page.locator('#login').click()
  await page.route('https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/64d3d9377244490f959c27b0', async (route) => {
        route.fulfill({
            body: JSON.stringify({
                data: [{
                    _id: "68961b446f585eb60d68c51b",
                    orderById: "64d3d9377244490f959c27b0",
                    orderBy: "yashwanth.perli@gmail.com",
                    productOrderedId: "Fri Aug 08",
                    productName: "ZARA COAT 10",
                    country: "India",
                    productDescription: "Adidas Originals",
                    productImage: "https://rahulshettyacademy.com/api/ecom/uploads/productImage_1650649434146.jpeg",
                    orderDate: null,
                    orderPrice: "10",
                    __v: 0
                }],
                count: 0
            })
        })
        //route.abort()
        //console.log(route.request().headers())
    })
});



test("Explaining route concepts", async ({ page }) => {


    // rote.fulfill(). -> You can mock the response data and actually make sure the response is whatever you want - 
    // route.continue() -> You can actually change the request fields
    // route.abort(). -> You can actually cancel this request - don't let it pass.

  await page.goto("https://rahulshettyacademy.com/client/auth/login");
  await page.getByPlaceholder("email@example.com").fill("");
  await page.getByPlaceholder("enter your passsword").fill("");
  await page.locator('#login').click()
  await page.route('https://rahulshettyacademy.com/api/ecom/user/add-to-cart', async (route) => {
    console.log(route.request().headers())
    await route.continue({
        postData: {
            _id: "64d3d9377244490f959c27b0",
            product: {
                _id: "67a8df1ac0d3e6622a297ccb",
                productName: "ADIDAS ORIGINAL",
                productCategory: "fashion",
                productSubCategory: "shirts",
                productPrice: 1500,
                productDescription: "Addias Originals",
                productImage: "https://rahulshettyacademy.com/api/ecom/uploads/productImage_1650649488046.jpg",
                productRating: "0",
                productTotalOrders: "0",
                productStatus: true,
                productFor: "women",
                productAddedBy: "admin@gmail.com",
                "__v": 0
            }
        }
    })
  });
  await page.getByRole("button", { name: "Add To cart" }).first().click();
  await page.getByRole("button", { name: "Cart" }).first().click();
  await page.pause()
});
