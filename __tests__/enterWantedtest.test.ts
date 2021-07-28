import { WebDriver, By, until, Builder, Capabilities } from "selenium-webdriver";
import EW from '../pageObjects/enterWantedBasePage'

const chromedriver = require('chromedriver')
const driver = new Builder().withCapabilities(Capabilities.chrome()).build()


test('Open Enter Wanted', async () => {
    await driver.get('https://devmountain-qa.github.io/enter-wanted/1.4_Assignment/index.html')
})