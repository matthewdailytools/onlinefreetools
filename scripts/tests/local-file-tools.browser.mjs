/** Actual browser acceptance; run after building. Pass one of the four tool slugs. */
import {spawnSync} from 'node:child_process';
import {fileURLToPath} from 'node:url';
import {createServer} from 'node:http';
import fs from 'node:fs/promises';
import path from 'node:path';
import {chromium} from 'playwright-core';
import assert from 'node:assert/strict';
import {batchCases} from './local-file-tools-cases.mjs';
const root=process.cwd();
await fs.mkdir(path.join(root,'.cache/four-tools'),{recursive:true});
if(process.argv[2]==='--all'){for(const slug of ['extract-text-from-a-scanned-pdf','bulk-strip-photo-exif','batch-watermark-pdf-drafts','bulk-optimize-svg-icon-set']){const r=spawnSync(process.execPath,[fileURLToPath(import.meta.url),slug],{stdio:'inherit'});if(r.status)process.exit(r.status);}process.exit(0);}
const types={'.html':'text/html','.js':'text/javascript','.mjs':'text/javascript','.wasm':'application/wasm','.gz':'application/gzip','.css':'text/css','.svg':'image/svg+xml','.png':'image/png'};
const server=createServer(async(req,res)=>{try{let p=decodeURIComponent(new URL(req.url,'http://local').pathname);if(p.startsWith('/tools/'))p='/_pages/en'+p+'.html';else if(/^\/(zh|es|ar|pt|id|fr|ja|ru|de)\/tools\//.test(p))p='/_pages'+p+'.html';const file=path.resolve(root,'public','.'+p);if(!file.startsWith(root+'/public/'))throw 0;const b=await fs.readFile(file);res.writeHead(200,{'Content-Type':types[path.extname(file)]||'application/octet-stream'});res.end(b);}catch{res.writeHead(404);res.end();}});
await new Promise(r=>server.listen(0,'127.0.0.1',r));
let browser;
try{browser=await chromium.launch({executablePath:process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE||path.join(root,'.cache/playwright/chromium-1148/chrome-linux/chrome'),headless:true,args:['--no-sandbox']});const page=await browser.newPage({acceptDownloads:true});const errors=[];page.on('pageerror',e=>errors.push(e.message));const base='http://127.0.0.1:'+server.address().port;await page.route('**/*',route=>new URL(route.request().url()).origin===base?route.continue():route.abort());
const slug=process.argv[2]||'extract-text-from-a-scanned-pdf';await page.goto(base+'/tools/'+slug);await page.waitForTimeout(700);
if(slug==='extract-text-from-a-scanned-pdf'){
 assert.equal(await page.locator('#download').isDisabled(),true);assert.equal(await page.evaluate(()=>!!window.Tesseract),false,'OCR must not load automatically');
 await page.click('#sample');await page.waitForFunction(()=>!document.getElementById('download').disabled,{},{timeout:180000});
 const text=await page.locator('#text').inputValue();assert.match(text,/Order\s+1042/i);assert.match(text,/125/);await page.locator('#text').fill(text+'\nEDITED');const dp=page.waitForEvent('download');await page.click('#download');const dl=await dp;const dest=path.join(root,'.cache/four-tools/ocr-output.txt');await dl.saveAs(dest);assert.match(await fs.readFile(dest,'utf8'),/EDITED$/);
 await page.locator('#files').setInputFiles({name:'bad.pdf',mimeType:'application/pdf',buffer:Buffer.from('bad PDF')});await page.click('#run');await page.waitForFunction(()=>document.getElementById('hud').classList.contains('is-fail'));assert.equal(await page.locator('#download').isDisabled(),true);
 await page.click('#sample');await page.waitForFunction(()=>!document.getElementById('download').disabled,{},{timeout:180000});
 await page.locator('summary').click();await page.locator('#first').fill('0');await page.locator('#first').dispatchEvent('change');assert.equal(await page.locator('#download').isDisabled(),true);await page.click('#run');await page.waitForFunction(()=>document.getElementById('hud').classList.contains('is-fail'));
 console.log('PASS OCR: real raster PDF → recognized editable TXT → downloaded bytes; no automatic OCR; invalid PDF, retry and page-range rejection.');
}
if(slug!=='extract-text-from-a-scanned-pdf')await batchCases(page,slug);
assert.deepEqual(errors,[]);await page.setViewportSize({width:390,height:844});await page.screenshot({path:path.join(root,'.cache/four-tools/'+slug+'-mobile.png'),fullPage:true});
}finally{if(browser)await browser.close();await new Promise(r=>server.close(r));}
