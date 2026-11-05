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
const issues = [];
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
      await page.waitForFunction(() => {
        const img = document.querySelector('.editorial-hero-image img');
        return img && img.complete;
      }, undefined, { timeout: 15000 });
      const overflow = await page.evaluate(() =>
        document.documentElement.scrollWidth > window.innerWidth + 2
      );
      const instagram = page.locator('.header-instagram');
      const instagramVisible = await instagram.isVisible();
      const link = await instagram.getAttribute('href');
      const heroPhoto = await page.locator('.editorial-hero-image img').evaluate(img =>
        img.complete && img.naturalWidth > 0
      );
      const menu = page.locator('.menu-btn');
      let menuWorks = true;
      if (width <= 980) {
        await menu.click();
        menuWorks = await menu.getAttribute('aria-expanded') === 'true'
          && await page.locator('#site-nav').isVisible();
        await page.keyboard.press('Escape');
        menuWorks = menuWorks && await menu.getAttribute('aria-expanded') === 'false';
      }
      // Do not attempt gallery interaction until its lazy-loaded photographs are available.
      // Test the lightbox using the first available local gallery photograph.
      await page.locator('#fotos').scrollIntoViewIfNeeded();
      const firstPhoto = page.locator('#gallery-collection .gallery-item img[src^="img/"]').first();
      await firstPhoto.evaluate(img => img.scrollIntoView({ block: 'center' }));
      await firstPhoto.evaluate(img => img.decode().catch(() => {}));
      let lightboxWorks = await firstPhoto.evaluate(img => img.naturalWidth > 0);
      if (lightboxWorks) {
        const tile = firstPhoto.locator('xpath=..');
        await tile.focus();
        await page.keyboard.press('Enter');
        lightboxWorks = await page.locator('#gallery-dialog').isVisible();
        await page.keyboard.press('Escape');
        lightboxWorks = lightboxWorks && !(await page.locator('#gallery-dialog').isVisible());
      }
      await page.screenshot({ path: 'qa-output/' + label + '.png', fullPage: true });
      const good = !overflow && instagramVisible &&
        link === 'https://www.instagram.com/bandajellybean/' && heroPhoto && menuWorks && lightboxWorks;
      console.log((good ? 'PASS' : 'FAIL') + ' ' + label +
        ' overflow=' + overflow + ' instagram=' + instagramVisible +
        ' heroLoaded=' + heroPhoto + ' menu=' + menuWorks + ' lightbox=' + lightboxWorks);
      if (!good) { failed++; issues.push(label); }
    } catch (err) {
      failed++; issues.push(label);
      console.error('FAIL ' + label + ': ' + err.message);
    } finally {
      await page.close();
    }
  }
} finally {
  await browser.close();
}
console.log('Browser QA ' + (failed ? failed + ' failed viewport(s): ' + issues.join(', ') : 'passed') +
  '. Inspect screenshots and facial recognition framing manually.');
process.exitCode = failed ? 1 : 0;
