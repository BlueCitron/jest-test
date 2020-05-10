const puppeteer = require('puppeteer');

let browser = null;

describe('Puppeteer Test', () => {

    beforeAll(async () => {
      browser = await puppeteer.launch({ headless: true });
    });

    it('Basic',async done => {
        const page = await browser.newPage();
        await page.goto('https://www.google.com');
        const title = await page.title();
        expect(title).toBe('Google');
        done();
    });

    afterAll(async() => {
        await browser.close();
    });
})