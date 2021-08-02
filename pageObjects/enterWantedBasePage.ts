//Enter Wanted Test Plan located at URL: https://dmutah.atlassian.net/browse/TB4DL-30
import { WebDriver, By, until } from "selenium-webdriver";
export default class EW {
    driver: WebDriver
    url: string = 'https://devmountain-qa.github.io/enter-wanted/1.4_Assignment/index.html'
    
   
    headerField: By = By.xpath("//*[@name= 'hdrInput']");
    mkeField: By = By.xpath("//*[@name= 'mkeInput']");
    nameField: By = By.xpath("//*[@name= 'namInput']");
    fields: By = By.xpath("//*[@class= 'inputField']");
    results: By = By.xpath("//*[@name= 'queryBody']");

    constructor(driver: WebDriver) {
        this.driver = driver;
    }

    async navigate() {
        await this.driver.get(this.url);
        await this.driver.wait(until.elementLocated(this.fields));
        await this.driver.wait(until.elementIsVisible(await this.driver.findElement(this.fields)));
    }
    async sendKeys(elementBy: By, keys) {
        await this.driver.wait(until.elementLocated(elementBy));
        return this.driver.findElement(elementBy).sendKeys(keys);
    }
    async getText(elementBy: By) {
        await this.driver.wait(until.elementLocated(elementBy));
        return (await this.driver.findElement(elementBy)).getText();
    }
    async enterheader(text: string) {
        return this.sendKeys(this.headerField, '${text}');
    }
    async entermke(text: string) {
        return this.sendKeys(this.mkeField, '${text}');
    }
    async entername(text: string) {
        return this.sendKeys(this.nameField, '${text}');
    }
    async getResults() {
        return this.getText(this.results);
    }
}