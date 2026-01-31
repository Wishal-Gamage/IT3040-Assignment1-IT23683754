// tests/assignment1.spec.js
const { test, expect } = require('@playwright/test');

const testCases = [
  { id: 'Pos_Fun_0001', input: 'mama bath kanavaa.' },
  { id: 'Pos_Fun_0002', input: 'mama kade yanavaa saha paan genenavaa.' },
  { id: 'Pos_Fun_0003', input: 'oya enavaanam mama balan innavaa.' },
  { id: 'Pos_Fun_0004', input: 'oyaata kohomadha?' },
  { id: 'Pos_Fun_0005', input: 'vahaama enna.' },
  { id: 'Pos_Fun_0006', input: 'mama ehema karannee naehae.' },
  { id: 'Pos_Fun_0007', input: 'mama iiyee gedhara giyaa.' },
  { id: 'Pos_Fun_0008', input: 'api iiLaGa sathiyee yamu.' },
  { id: 'Pos_Fun_0009', input: 'suba udhaeesanak!' },
  { id: 'Pos_Fun_0010', input: 'karuNaakaralaa mata podi udhavvak karanna puLuvandha?' },
  { id: 'Pos_Fun_0011', input: 'eeyi, ooka dhiyan.' },
  { id: 'Pos_Fun_0012', input: 'eyaalaa enavaa.' },
  { id: 'Pos_Fun_0013', input: 'Zoom meeting ekak thiyennee.' },
  { id: 'Pos_Fun_0014', input: 'api trip eka Kandy valata yamudha.' },
  { id: 'Pos_Fun_0015', input: 'ayubowan! kohomada?' },
  { id: 'Pos_Fun_0016', input: 'Rs. 5000' },
  { id: 'Pos_Fun_0017', input: '7.30 AM' },
  { id: 'Pos_Fun_0018', input: '2025-12-25' },
  { id: 'Pos_Fun_0019', input: 'mama  gedhara  yanavaa.' },
  { id: 'Pos_Fun_0020', input: 'mama yanavaa. \n oyaa enavadha?' },
  { id: 'Pos_Fun_0021', input: 'PIN code eka dhenna.' },
  { id: 'Pos_Fun_0022', input: 'poddak inna.' },
  { id: 'Pos_Fun_0023', input: 'tika tika yanna.' },
  { id: 'Pos_Fun_0024', input: 'mama gedhara yanavaa. mama gedhara yanavaa.' },
  { id: 'Neg_Fun_0001', input: 'mamagedharayanavaa' },
  { id: 'Neg_Fun_0002', input: 'mata 2wa oonee.' },
  { id: 'Neg_Fun_0003', input: 'mama yanawaa #123.' },
  { id: 'Neg_Fun_0004', input: 'mama gedhara yanawaaa.' },
  { id: 'Neg_Fun_0005', input: 'mma gdra ynwa.' },
  { id: 'Neg_Fun_0006', input: 'ayubowan!!??' },
  { id: 'Neg_Fun_0007', input: 'mama yaming innavaa.' },
  { id: 'Neg_Fun_0008', input: 'supridhaaithishayenma' },
  { id: 'Neg_Fun_0009', input: '10kg dhenna.' },
  { id: 'Neg_Fun_0010', input: 'mama \n \n gedhara yanavaa.' },
  { id: 'Pos_UI_0001', input: 'man gedhara yanavaa' } 
];

test.describe('Assignment 1', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
  });

  for (const data of testCases) {
    test(`${data.id}`, async ({ page }) => {
      
      // 1. More Robust Selectors (less likely to break)
      // We search for ANY textarea (usually the input)
      const inputSelector = 'textarea'; 
      // We search for the specific output div class
      const outputSelector = 'div.whitespace-pre-wrap.bg-slate-50';      

      // 2. Type the input
      await page.fill(inputSelector, data.input);

      // 3. SMART WAIT: Wait up to 10 seconds for the output box to have text
      // This fixes the "Timing" issue.
      const outputLocator = page.locator(outputSelector);
      await expect(outputLocator).not.toBeEmpty({ timeout: 10000 });

      // 4. Capture the text
      const actualOutput = await outputLocator.innerText();

      // 5. Print to console for your Excel file
      console.log(`[RESULT] ${data.id} | INPUT: ${data.input} | ACTUAL: ${actualOutput}`);
    });
  }
});