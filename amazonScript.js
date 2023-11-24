
const { Builder, By, Key, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

async function runScript() {
  // Set up the Chrome browser
  const options = new chrome.Options();
  options.addArguments('--start-maximized'); // Optional: Maximize the browser window

  // Create a new WebDriver instance
  const driver = await new Builder()
    .forBrowser('chrome')
    .setChromeOptions(options)
    .build();

  try {
    
    await driver.get('https://www.amazon.in/?&ext_vrnc=hi&tag=googhydrabk1-21&ref=pd_sl_7hz2t19t5c_e&adgrpid=58355126069&hvpone=&hvptwo=&hvadid=676742234347&hvpos=&hvnetw=g&hvrand=1014074764218675171&hvqmt=e&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9062010&hvtargid=kwd-10573980&hydadcr=14453_2367553&gclid=CjwKCAiAjfyqBhAsEiwA-UdzJDZEcviN6opbKgEtmaThqkrjhx3osj5fIgdRNEYhaUtLK7tl6rexbBoCLVQQAvD_BwE/');

    
    await driver.findElement(By.id('twotabsearchtextbox')).sendKeys('laptops', Key.RETURN);

    
    await driver.wait(until.titleIs('Amazon.com: laptops'), 5000);

  
    const resultCount = await driver.findElement(By.css('.a-section span.a-size-base')).getText();
    console.log('Number of search results:', resultCount);
  } finally {
  
    await driver.quit();
  }
}


runScript();
