// node ./test/screenshots-golden/grab.js button http://localhost:4000/styleguide/section-components.html#kss-fullscreen-kssref-components-button


const puppeteer = require('puppeteer');
const util = require('util');
const fs = require('fs');
const Settings = require('../settings/settings');
const Components = require('../settings/components');

const component = process.argv[2];
const URL = process.argv[3];
const goldenDir = Settings.goldenDir;

const sizes = Settings.sizes;


// grab the screenshots for each size from settings
const grabScreenShot = async (size) => {
    const browser = await puppeteer.launch({
        ignoreHTTPSErrors: true,
    });
    const page = await browser.newPage();

    // set the viewport
    page.setViewport({
        width: sizes[size].width,
        height: sizes[size].height},
    );

    // Start the browser, go to that page, and take a screenshot.
    await page.goto(URL, {waitUntil: 'networkidle2'});
    await page.screenshot({path: `${goldenDir}${component}-${size}.png`});

    await browser.close();
};
Object.keys(sizes).forEach( (size) => grabScreenShot(size) );


// write components file to include this item
let components = Components.components;
// push component name to components object
components[component] = {url: URL};
// save text for js file
let fileText = `const components = ${util.inspect(components)};

module.exports={
    components
}`;
// write out js to file
fs.writeFileSync('./test/settings/components.js', fileText, 'utf-8');
