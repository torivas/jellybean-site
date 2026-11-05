/**
 * Browser QA against a locally served preview, without deploying the site.
 * Requires a user-installed Playwright package and Chromium browser.
 * Run: python3 -m http.server 8000
 * Then: SITE_URL=http://127.0.0.1:8000 node tools/browser-qa.mjs
 * Captures screenshots into qa-output/ (ignored only locally unless explicitly gitignored).
 */
import { chromium } from 'playwright';
import { mkdir } from 'node:fs/promises';

const base = process.env.SITE_URL || 'http://127.0.0.1:8000';
await mkdir('qa-output', { recursive: true });
const browser = await chromium.launch({ headless: true });
let failed = 0;

try {
  for (const [label, width, height] of [
    ['mobile-360', 360, 800],
    ['mobile-390', 390, 844],
    ['tablet-768', 768, 1024],
    ['desktop-1440', 1440, 900]
  ]) {
    const page = await browser.newPage({ viewport: { width, height }, deviceScaleFactor: 1 });
    try {
      await page.goto(base, { waitUntil: 'domcontentloaded', timeout: 30000 });
      await page.evaluate(() => document.fonts.ready);
      await page.locator('#hero-title').waitFor();
      const overflow = await page.evaluate(() =>
        document.documentElement.scrollWidth > window.innerWidth + 2
      );
      const instagram = page.locator('.header-instagram');
      const instagramVisible = await instagram.isVisible();
      const link = await instagram.getAttribute('href');
      const heroPhoto = await page.locator('.editorial-hero-image img').evaluate(img =>
        img.complete && img.naturalWidth > 0
      );
      await page.screenshot({ path: 'qa-output/' + label + '.png', fullPage: true });
      const good = !overflow && instagramVisible &&
        link === 'https://www.instagram.com/bandajellybean/' && heroPhoto;
      console.log((good ? 'PASS' : 'FAIL') + ' ' + label +
        ' overflow=' + overflow + ' instagram=' + instagramVisible +
        ' heroLoaded=' + heroPhoto);
      if (!good) failed++;
    } catch (err) {
      failed++;
      console.error('FAIL ' + label + ': ' + err.message);
    } finally {
      await page.close();
    }
  }
} finally {
  await browser.close();
}
console.log('Browser QA ' + (failed ? failed + ' failed viewport(s)' : 'passed') +
  '. Inspect screenshots and facial recognition framing manually.');
process.exitCode = failed ? 1 : 0;
