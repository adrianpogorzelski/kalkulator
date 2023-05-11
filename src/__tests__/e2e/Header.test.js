const { Builder, By, Key, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

describe('Test clicking on the brand link', () => {
    let driver;

    beforeAll(async () => {
        driver = new Builder()
            .forBrowser('chrome')
            .setChromeOptions(new chrome.Options().addArguments('--headless'))
            .build();

        await driver.get('https://qa-kalkulator-korzysci.netlify.app/');
    }, 10000);

    afterAll(async () => {
        await driver.quit();
    });

    it('should scroll to the #top section of the page when brand link is clicked', async () => {
        const brandLink = await driver.findElement(By.css('a[data-testid="brand"]'));
        await brandLink.click();

        // Wait for the page to scroll to the #top section
        await driver.wait(until.elementLocated(By.id('top')), 5000);

        // Verify that the #top section is now visible
        const topSection = await driver.findElement(By.id('top'));
        expect(await topSection.isDisplayed()).toBe(true);
    }, 10000);
});
