const webdriverio = require('webdriverio')
const options = {
    host: 'localhost', // Use localhost as chrome driver server
    port: 9515,        // "9515" is the port opened by chrome driver.
    desiredCapabilities: {
        browserName: 'chrome',
        chromeOptions: {
            binary: '/Path-to-Your-App/electron', // Path to your Electron binary.
            args: [/* cli arguments */]           // Optional, perhaps 'app=' + /path/to/your/app/
        }
    }
}

let client = webdriverio.remote(options)

client
    .init()
    .url('http://google.com')
    .setValue('#q', 'webdriverio')
    .click('#btnG')
    .getTitle().then((title) => {
    console.log('Title was: ' + title)
})
    .end()