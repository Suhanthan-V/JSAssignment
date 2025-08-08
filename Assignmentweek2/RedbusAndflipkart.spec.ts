import {chromium, test, firefox} from "@playwright/test";

test("launchRedbus", async() => {
    const browser = await chromium.launch({
        headless: false
    })
    const siteOne = await browser.newContext();
    const page = await siteOne.newPage();
    await page.goto('https://www.redbus.in');
    page.waitForTimeout(3000);
    console.log(await page.title());
    console.log(await page.url());
    });

test("launch Flipkart", async() => {
    const browser = await firefox.launch({
        headless: false
    })
    const suhan = await browser.newContext();
    const page = await suhan.newPage();
    await page.goto('https://www.flipkart.com ');
    console.log(await page.title());
    console.log(await page.url());
    });