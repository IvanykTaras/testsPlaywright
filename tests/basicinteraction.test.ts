import {test, expect } from "@playwright/test";

test("Interaction with inputs", async ({page})=>{
    await page.goto("https://www.lambdatest.com/selenium-playground/simple-form-demo");
    const messageInput = await page.locator("input#user-message");
    console.log(await messageInput.getAttribute("placeholder"))
    expect(messageInput).toHaveAttribute("placeholder", "Please enter your Message");
    console.log("before entering " + await messageInput.inputValue());
    await messageInput.type("Hi man");
    console.log("after entering " + await messageInput.inputValue());
});

test("Sum", async ({page})=>{
    page.goto("https://www.lambdatest.com/selenium-playground/simple-form-demo");
    const sum1input = await page.locator("#sum1");
    const sum2input = await page.locator("#sum2");

    const getValueBtn = await page.locator('//button[contains(text(),"Get Sum")]');


    let num1 = 121;
    let num2 = 546;
    await sum1input.type(num1.toString());
    await sum2input.type(num2.toString());
    await getValueBtn.click();
    const result = await page.locator("#addmessage");
    console.log(await result.textContent());
    await expect(result).toHaveText((num1 + num2).toString());
});