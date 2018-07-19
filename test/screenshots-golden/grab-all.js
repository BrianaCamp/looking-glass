// node ./test/screenshots-golden/grab-all.js


const puppeteer = require('puppeteer');
const fs = require('fs');
const Settings = require('../settings/settings');
const Components = require('../settings/components');

const goldenDir = Settings.goldenDir;

const sizes = Settings.sizes;

const components = Components.components;


// - page is a reference to the Puppeteer page.
// - route is the path you're loading, which I'm using to name the file.
// - filePrefix is either "wide" or "narrow",
//   since I'm automatically testing both.
async function grabGoldenScreenshot(page, component, size) {
    // If you didn't specify a file, use the name of the route.
    let fileName = `${component}-${size}.png`;

    // Start the browser, go to that page, and take a screenshot.
    await page.goto(components[component].url, {waitUntil: 'networkidle2'});
    await page.screenshot({path: `${goldenDir}/${fileName}`});

    return true;
}


// grab new screenshots for each component
describe('golden screenshots captured', function() {
    let browser;
    let page;

    // This is ran when the suite starts up.
    before(async function() {
        // Create the directory if needed.
        if (!fs.existsSync(goldenDir)) fs.mkdirSync(goldenDir);
    });

    // This is ran before every test. It's where you start a clean browser.
    beforeEach(async function() {
        browser = await puppeteer.launch({
            ignoreHTTPSErrors: true,
        });
        page = await browser.newPage();
    });

    // This is ran after every test; clean up after your browser.
    afterEach(() => browser.close());

    // Tests for each screen site
    Object.keys(sizes).forEach(function(size) {
        describe(size + ' screen', function() {
            beforeEach(function() {
                return page.setViewport({
                    width: sizes[size].width,
                    height: sizes[size].height},
                );
            });

            Object.keys(components).forEach(function(component) {
                it(component, async function() {
                    return grabGoldenScreenshot(page, component, size);
                });
            });
        });
    });
});
