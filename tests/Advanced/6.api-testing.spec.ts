import { test, expect } from "@playwright/test";


// GET - Gets you some data from the server / DB
// POST(201) - When you want to create some data into DB / Server
// PUT - When you want update the data completely for a particular thing in the DB/Server
// PATCH - When you want update the data field by field for a particular thing in DB/ Server
// DELETE - When you want to delete some entry from DB / Server


// 200 - OK - Your request is succesfull - got the Data Happily
// 201 - Created - This means something is created on the server/DB
// 204 - No Content - There is nothing for me to show you
// 400 - Bad Request - You request is having a problem , you are not sending the right data
// 401 - Unauthorized - Wrong Credentials or No Credentials
// 403 - Forbidden - You are authenticated to the application but you are not having rights to access this resource
// 500 - Internal Server Error - If there is a problem on the server side code you'll get this 500
// 503 - Service Unavailable - The service is not available now, maybe you can try later
// 504 - Gateway timeout - If certain timelimit mentioned by dev exceeds we will get 504 

const baseURL = "https://jsonplaceholder.typicode.com";

test.only("GET - Fetch a post", async ({ request }) => { 
  const response = await request.get(`https://reqres.in/api/users`, {
   params: {
      page: 2
   }
  })
  console.log(await response.json())
//   expect(response.status()).toBe(200)
//   expect(await response.json()).toHaveProperty("id", 1)
});

test("POST - Create a new post", async ({ request }) => {
  const newPost = {
    title: "Learn Playwright API Testing",
    body: "Playwright is awesome for API tests!",
    userId: 101,
  };

//   const header = {
//    Accept: '*/*',
//    Connection: 'keep-alive'
//   }

  const response = await request.post(`${baseURL}/posts`, {
    data: newPost,
    //headers: header
  });
  expect(response.status()).toBe(201);
  const data = await response.json();
  console.log("POST Response:", data);
  expect(data).toHaveProperty("title", newPost.title);
});

test("PUT - Update an existing post", async ({ request }) => {
  const updatedPost = {
    id: 1,
    title: "Updated Title",
    body: "Updated body content",
    userId: 1,
  };

  const response = await request.put(`${baseURL}/posts/1`, {
    data: updatedPost,
  });

  expect(response.ok()).toBeTruthy();
  const data = await response.json();
  console.log("PUT Response:", data);
  expect(data).toHaveProperty("title", updatedPost.title);
});

test("DELETE - Delete a post", async ({ request }) => {
  const response = await request.delete(`${baseURL}/posts/1`);
  expect(response.status()).toBe(200);
  console.log("DELETE Response: Post deleted");
});
