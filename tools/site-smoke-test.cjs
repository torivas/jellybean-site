#!/usr/bin/env node
/**
 * Jelly Bean static smoke checks. No third-party packages, no network calls.
 * Run: node tools/site-smoke-test.cjs
 */
const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
const read = filename => fs.readFileSync(path.join(root, filename), 'utf8');
const html = read('index.html');
const css = read('editorial-2026.css');
const js = read('script.js');
let failures = 0;
function check(condition, message) {
  console.log((condition ? 'PASS' : 'FAIL') + ' ' + message);
  if (!condition) failures++;
}
const imageTags = [...html.matchAll(/<img\b[^>]*>/g)].map(match => match[0]);
const srcs = imageTags.map(tag => (tag.match(/\bsrc="([^"]+)"/) || [])[1]).filter(Boolean);
check(!html.includes('/ decoding="async">'), 'No malformed image decoding attributes');
check(imageTags.every(tag => /\balt="[^"]*"/.test(tag)), 'Every image has an alt attribute');
check(imageTags.every(tag => /\bdecoding="async"/.test(tag)), 'Every image requests async decoding');
check([...html.matchAll(/id="([^"]+)"/g)].every((m, i, a) => a.findIndex(x => x[1] === m[1]) === i), 'HTML ids are unique');
for (const src of srcs.filter(src => !/^https?:\/\//.test(src))) {
  check(fs.existsSync(path.join(root, src)), 'Local image exists: ' + src);
}
check(/fetchpriority="high"/.test(html), 'Hero image is high priority');
check(/loading="lazy"/.test(html), 'Offscreen images use lazy loading');
check(html.includes('https://www.instagram.com/bandajellybean/'), 'Official Instagram link is present');
const galleryMarkup = (html.match(/<div class="gallery-editorial" id="gallery-collection">([\\s\\S]*?)<\\/div>/) || [])[1] || '';
const gallerySources = [...galleryMarkup.matchAll(/<img\\b[^>]*\\bsrc="([^"]+)"/g)].map(match => match[1]);
const approvedGallery = new Set([
  'img/hero/jellybean-banda-oficial.jpg',
  'img/shows/colonus-vocal.jpg',
  'img/shows/coordenadas-palco.jpg',
  'img/shows/colonus-banda.jpg'
]);
check(gallerySources.length === 4, 'Gallery includes four verified photographs');
check(gallerySources.every(src => approvedGallery.has(src)), 'Gallery uses only approved local photographs');
check(/id="gallery-dialog"/.test(html), 'Gallery dialog exists');
check(js.includes("source.addEventListener('error'"), 'Gallery handles failed images');
check(css.includes('.gallery-image-unavailable'), 'Gallery fallback has styling');
check(/prefers-reduced-motion/.test(css), 'Reduced-motion styles are present');
console.log('\n' + (failures ? failures + ' check(s) failed.' : 'Static checks passed.') + ' Browser and network QA are still required.');
process.exitCode = failures ? 1 : 0;
