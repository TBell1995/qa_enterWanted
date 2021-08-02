//Enter Wanted Test Plan located at URL: https://dmutah.atlassian.net/browse/TB4DL-30
import { WebDriver, By, until, Builder, Capabilities, WebElement } from "selenium-webdriver";
import { headersToString } from "selenium-webdriver/http";
import { Name } from "selenium-webdriver/lib/command";
import EW from '../pageObjects/enterWantedBasePage'

const chromedriver = require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build();
const page = new EW(driver);
const submitButton: By = By.xpath("//*[@id= 'saveBtn']");
const clearButton: By = By.xpath("//*[@id= 'clearBtn']");
//Boilerplate


//Character limits can be found in the documentation or the testing breakdown tab of the test plan.
test("Header Field Valid Character Limit", async () => {
    await page.navigate();
    await page.enterheader("this is a test");
    await driver.findElement(submitButton).click();
    expect(await page.getResults()).not.toContain('The field named "Header" must be included.');
});

test("MKE Field Valid Character Limit", async () => {
    await page.navigate();
    await page.entermke("tb");
    await driver.findElement(submitButton).click();
    expect(await page.getResults()).not.toContain('The field named "MKE" must be included.');
});

test("Name Field Valid Character Limit", async () => {
    await page.navigate();
    await page.entername("Todd Bell");
    await driver.findElement(submitButton).click();
    expect(await page.getResults()).not.toContain('The field named "Name" must be included.');
});

afterAll(async () => {
    await driver.quit();
});

