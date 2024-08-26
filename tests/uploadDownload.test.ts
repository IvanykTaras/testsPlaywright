import test from "@playwright/test";

test("Download files", async ({page})=>{
    await page.goto("https://www.lambdatest.com/selenium-playground/generate-file-to-download-demo");
    await page.type("#textbox","Like, share");
    await page.click("#create");
    const [download] = await Promise.all([
        page.waitForEvent('download'),
        page.click("#link-to-download")
    ]);
    
    const fileName = await download.suggestedFilename()
    await download.saveAs(fileName);
});