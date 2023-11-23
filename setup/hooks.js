const {BeforeAll, After, AfterAll, Status } = require('@cucumber/cucumber')
const { chromium, firefox, webkit,  } = require('playwright');

let browser;

BeforeAll(async function () {
    if (process.env.npm_config_browser.trim() == "chrome") {
     browser = await chromium.launch({headless: true, slowMo: 100})
    } else if (process.env.npm_config_browser.true() == "firefox") {
        browser = await firefox.launch({headless: true, slowMo: 100})
    } else {
        browser = await webkit.launch({headless: true, slowMo: 100})
    }
    const context = await browser.newContext();
    page = await context.newPage();
})


After(async function (scenario) {
    // For taking a screenshot after scenario failed execution 
    if(scenario.result.status == Status.FAILED) {
        const buffer = await page.screenshot()
        var world = this
        world.attach(buffer, "image/png")
    }
    await new Promise(r => setTimeout(() => r(), 10000))
})

AfterAll(async function() {
    await browser.close();
})