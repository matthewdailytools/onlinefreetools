#!/usr/bin/env node
import { promises as fs } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
let marked;
try { marked = (await import('marked')).marked; } catch {
  marked = require('marked').marked;
}

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const srcDir = path.join(root, 'dev-logs');
const outDir = path.join(root, 'public', 'devlogs');

const baseTemplate = ({ title, description, canonical, ogImage, body }) => `<!doctype html>
<html lang="zh">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>${title}</title>
  <meta name="description" content="${description}" />
  <link rel="canonical" href="${canonical}" />
  <meta property="og:title" content="${title}" />
  <meta property="og:description" content="${description}" />
  <meta property="og:type" content="article" />
  <meta property="og:url" content="${canonical}" />
  <meta property="og:image" content="${ogImage}" />
  <meta name="twitter:card" content="summary_large_image" />
  <link href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.3/css/bootstrap.min.css" rel="stylesheet" crossorigin="anonymous" referrerpolicy="no-referrer" />
</head>
<body class="bg-light">
  <div class="container py-4">
    <header class="d-flex justify-content-between align-items-center mb-3">
      <h1 class="h4 mb-0">${title}</h1>
      <a class="btn btn-outline-secondary btn-sm" href="/devlogs/">返回日志清单</a>
    </header>
    <article class="bg-white shadow-sm p-3 p-md-4 rounded">${body}</article>
  </div>
</body>
</html>`;

const indexTemplate = ({ items }) => `<!doctype html>
<html lang="zh">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>开发日志清单 | Online Free Tools</title>
  <meta name="description" content="Online Free Tools 开发日志清单，按日期汇总所有问答记录。" />
  <link rel="canonical" href="https://www.onlinefreetools.org/devlogs/" />
  <meta property="og:title" content="开发日志清单 | Online Free Tools" />
  <meta property="og:description" content="按日期浏览项目的开发问答与实施记录。" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://www.onlinefreetools.org/devlogs/" />
  <meta property="og:image" content="https://www.onlinefreetools.org/og-image.png" />
  <meta name="twitter:card" content="summary_large_image" />
  <link href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.3/css/bootstrap.min.css" rel="stylesheet" crossorigin="anonymous" referrerpolicy="no-referrer" />
  <script type="application/ld+json">{
    "@context":"https://schema.org","@type":"CollectionPage","name":"开发日志清单","url":"https://www.onlinefreetools.org/devlogs/",
    "breadcrumb":{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"首页","item":"https://www.onlinefreetools.org/"},{"@type":"ListItem","position":2,"name":"开发日志","item":"https://www.onlinefreetools.org/devlogs/"}]}
  }</script>
</head>
<body class="bg-light">
  <div class="container py-4">
    <header class="d-flex justify-content-between align-items-center mb-3">
      <div>
        <h1 class="h4 mb-1">开发日志清单</h1>
        <p class="text-muted mb-0">按日期列出所有问答记录，点击打开查看详情。</p>
      </div>
      <a class="btn btn-outline-secondary btn-sm" href="/">返回首页</a>
    </header>
    <ul class="list-group shadow-sm">
      ${items.map(i => `
      <li class="list-group-item d-flex justify-content-between align-items-center">
        <a href="${i.href}" class="text-decoration-none">${i.title}</a>
        <span class="badge text-bg-secondary">${i.date}</span>
      </li>`).join('')}
    </ul>
  </div>
</body>
</html>`;

const ensureDir = async (dir) => { await fs.mkdir(dir, { recursive: true }); };

const parseMeta = (md) => {
  const lines = md.split(/\r?\n/);
  let date = '', summary = '';
  for (const line of lines) {
    if (!date && line.startsWith('日期：')) date = line.replace('日期：','').trim();
    if (!summary && line.startsWith('摘要：')) summary = line.replace('摘要：','').trim();
    if (date && summary) break;
  }
  return { date, summary };
};

const main = async () => {
  await ensureDir(outDir);
  const files = (await fs.readdir(srcDir)).filter(f => f.endsWith('.md'));
  // Sort by filename descending
  files.sort((a,b)=> b.localeCompare(a));
  const items = [];
  for (const file of files) {
    const md = await fs.readFile(path.join(srcDir, file), 'utf-8');
    const { date, summary } = parseMeta(md);
    const htmlBody = marked.parse(md);
    const base = file.replace(/\.md$/,'');
    const outFile = path.join(outDir, `${base}.html`);
    const title = summary ? `${summary} | 开发日志` : base;
    const description = summary || 'Online Free Tools 开发日志';
    const canonical = `https://www.onlinefreetools.org/devlogs/${encodeURIComponent(base)}.html`;
    const ogImage = `https://www.onlinefreetools.org/og-image.png`;
    const page = baseTemplate({ title, description, canonical, ogImage, body: htmlBody });
    await fs.writeFile(outFile, page, 'utf-8');
    items.push({ href: `/devlogs/${base}.html`, title: `${base.replace(/^[0-9-]+/, '').trim() || summary || base}`, date: (date || '').split(' ')[0] || date || '' });
  }
  const index = indexTemplate({ items });
  await fs.writeFile(path.join(outDir, 'index.html'), index, 'utf-8');
  console.log(`Generated ${items.length} log pages to ${outDir}`);
};

main().catch(err => { console.error(err); process.exit(1); });
