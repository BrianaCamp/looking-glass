const puppeteer = require('puppeteer');
const expect = require('chai').expect;
const pixelmatch = require('pixelmatch');
const fs = require('fs');
const PNG = require('pngjs').PNG;
const Settings = require('./settings/settings');
const Components = require('./settings/components');

const testDir = Settings.testDir;
const goldenDir = Settings.goldenDir;

const sizes = Settings.sizes;

const components = Components.components;




// compare function
function compareScreenshots(fileName) {
    return new Promise((resolve, reject) => {
        let filesRead = 0;
        function doneReading() {
            // Wait until both files are read.
            if (++filesRead < 2) return;

            // The files should be the same size.
            expect(img1.width, 'image widths are the same').equal(img2.width);
            expect(img1.height, 'image heights are the same').equal(img2.height);

            // Do the visual diff.
            const diff = new PNG({width: img1.width, height: img2.height});
            const numDiffPixels = pixelmatch(
                img1.data, img2.data, diff.data, img1.width, img1.height,
                {threshold: 0.1});

            // The files should look the same.
            expect(numDiffPixels, 'number of different pixels').equal(0);
            resolve();
        }

        const img1 = fs.createReadStream(`${testDir}/${fileName}`).pipe(new PNG()).on('parsed', doneReading);
        const img2 = fs.createReadStream(`${goldenDir}/${fileName}`).pipe(new PNG()).on('parsed', doneReading);
    });
};




// - page is a reference to the Puppeteer page.
// - route is the path you're loading, which I'm using to name the file.
// - filePrefix is either "wide" or "narrow", since I'm automatically testing both.
async function takeAndCompareScreenshot(page, component, size) {
    // If you didn't specify a file, use the name of the route.
    let fileName = `${component}-${size}.png`;

    // Start the browser, go to that page, and take a screenshot.
    await page.goto( components[component].url );
    await page.screenshot({path: `${testDir}/${fileName}`});

    // Test to see if it's right.
    return compareScreenshots(fileName);
}




// run tests for each component
describe('👀 screenshots are correct', function() {
    let browser, page;

    // This is ran when the suite starts up.
    before(async function() {
        // Create the test directory if needed.
        if (!fs.existsSync(testDir)) fs.mkdirSync(testDir);
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
                return page.setViewport({width: sizes[size].width, height: sizes[size].height});
            });

            Object.keys(components).forEach(function(component) {
                it(component, async function() {
                    return takeAndCompareScreenshot(page, component, size);
                    // console.log(components[component].url);
                    // return true;
                });
            });
        });
    });
});
