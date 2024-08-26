import test, { expect } from "@playwright/test";

test("Interaction with inputs", async ({page})=>{
    await page.goto("https://www.lambdatest.com/selenium-playground/simple-form-demo");
    const messageInput = await page.locator("input#user-message");
    console.log(await messageInput.getAttribute("placeholder"))
    expect(messageInput).toHaveAttribute("placeholder", "Please enter your Message");
    console.log("before entering " + await messageInput.inputValue());
    await messageInput.type("Hi man");
    console.log("after entering " + await messageInput.inputValue());
})