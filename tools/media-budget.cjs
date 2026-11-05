#!/usr/bin/env node
/** Audit original photo transfer weights without altering a single pixel.
 * Usage: node tools/media-budget.cjs
 * Nonzero exit status means a required photo is missing, not merely oversized.
 */
const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
const limits = {
  'img/hero/jellybean-banda-oficial.jpg': 500 * 1024,
  'img/Membros/walter-delanno.jpg': 500 * 1024,
  'img/Membros/paulinho-carvalho.jpg': 500 * 1024,
  'img/Membros/fernando-vasques.jpg': 500 * 1024,
  'img/Membros/henrique-duarte.jpg': 500 * 1024,
  'img/shows/colonus-banda.jpg': 900 * 1024,
  'img/shows/colonus-vocal.jpg': 900 * 1024,
  'img/shows/coordenadas-palco.jpg': 900 * 1024
};
let missing = 0, oversized = 0, total = 0;
for (const [relative, limit] of Object.entries(limits)) {
  const file = path.join(root, relative);
  if (!fs.existsSync(file)) {
    console.error('MISSING', relative); missing++; continue;
  }
  const size = fs.statSync(file).size; total += size;
  const over = size > limit;
  if (over) oversized++;
  console.log((over ? 'OPTIMIZE' : 'OK') + ' ' + relative + ' ' +
    (size / 1048576).toFixed(2) + ' MiB / budget ' +
    (limit / 1048576).toFixed(2) + ' MiB');
}
console.log('\nOriginal photo inventory: ' + (total / 1048576).toFixed(2) +
  ' MiB; above budget: ' + oversized + '; missing: ' + missing);
console.log('Budgets are engineering targets, NOT measured network performance.');
console.log('Never replace identity-locked portraits with generated or face-altered content.');
process.exitCode = missing ? 1 : 0;
