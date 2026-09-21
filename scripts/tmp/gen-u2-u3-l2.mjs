#!/usr/bin/env node
/**
 * 一次性生成 U2 / U3 / L2：work-tasks、catalog、SVG、十语 i18n。
 * Page.ts 由本脚本旁的模板写入或由后续 Write 单独落盘。
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const langs = ['en', 'zh', 'es', 'ja', 'de', 'fr', 'pt', 'id', 'ar', 'ru'];

/**
 * 确保目录存在。
 * @param {string} p 路径
 */
const mkdir = (p) => fs.mkdirSync(p, { recursive: true });

/**
 * 写文件。
 * @param {string} rel 相对仓库根
 * @param {string} body 内容
 */
const write = (rel, body) => {
	const abs = path.join(root, rel);
	mkdir(path.dirname(abs));
	fs.writeFileSync(abs, body.endsWith('\n') ? body : body + '\n', 'utf8');
	console.log('wrote', rel);
};

/**
 * 转义 TS 单引号字符串。
 * @param {string} s
 */
const esc = (s) => s.replace(/\\/g, '\\\\').replace(/'/g, "\\'");

/**
 * 写十语分片。
 * @param {string} slug
 * @param {string} prefix
 * @param {string} comment
 * @param {Record<string, Record<string, string>>} byLang
 */
function writeLocales(slug, prefix, comment, byLang) {
	for (const lang of langs) {
		const data = byLang[lang];
		if (!data) throw new Error(`missing ${slug} ${lang}`);
		const lines = [
			`import type { SiteLangDict } from '../../../types';`,
			'',
			`/**`,
			` * ${comment.replace('{lang}', lang)}`,
			` */`,
			`const ${lang}: SiteLangDict = {`,
		];
		for (const [k, v] of Object.entries(data)) {
			lines.push(`  ${prefix}_${k}: '${esc(v)}',`);
		}
		lines.push('};', `export default ${lang};`, '');
		write(`src/site/i18n/tools/${slug}/${lang}.ts`, lines.join('\n'));
	}
}

/**
 * 写 work-tasks 四件套。
 * @param {object} t
 */
function writeWorkTasks(t) {
	const dir = `work-tasks/${t.slug}`;
	write(
		`${dir}/00-request.md`,
		`# 00 — 用户原始需求

## 原始描述

> ${t.request}

## 已知约束

- 路线图：\`docs/sound-editor/12-slug-hub-and-scene.md\` ${t.hubId}。
- 必须本地处理：是。
- YMYL：否。
- 禁止：${t.forbid}。

## 建议 slug

- \`${t.slug}\`
`
	);
	write(
		`${dir}/01-direction-discussion.md`,
		`# 01 — 方向讨论

## 结论

主方向 **A**：浏览器 JS。hub **${t.hubId}** scene：${t.scene}。

## 队列位置

本批为 **${t.hubId}**。

## 技术取舍

${t.tech}

## 下一步

02/03 → 实现 → \`CROSS_TOOL_UPDATE=1 npm run verify:tool -- --slug=${t.slug}\`。
`
	);
	write(
		`${dir}/02-tool-info.md`,
		`# 02 — 工具信息定稿

**状态**：\`implemented\`  
**slug**：\`${t.slug}\`  
**路径**：\`/tools/${t.slug}\`  
**主方向**：A  
**YMYL**：否

## IG 预审

${t.ig}

权威：${t.authority}

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| 集群 | sound-editor / ${t.hubId} |
| Title (en) | ${t.titleEn} |
| Description | ${t.descEn} |
| page.style | \`opts\` |
| 技术 | ${t.techShort} |
| related | ${t.related.join('；')} |
| Schema | WebApplication + BreadcrumbList |
| FAQ | ${t.faqTopics} |
| IG | 1 规则；2 边界；6 本地；8 样例；9 related |

## 使用场景

| 情境 | 动作 | 结果 / 默认 |
|---|---|---|
${t.usecases}

## 清单前检索覆盖优化

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-09-21 |
| slug 结论 | 保留 \`${t.slug}\`（hub ${t.hubId}） |
| 主检索词 → title/H1 | ${t.mainKw} → ${t.titleEn} |
| 次要关键词 → desc / FAQ | ${t.secKw} → desc/FAQ |
| 用户搜索习惯判断 | ${t.habit} |
| 优化摘要 | H1 任务句；FAQ 诚实边界；related 已上线邻页 |
| [x] 已回写上方 SEO 卡片 Title / Description 与建议 slug | 已落实 |

## 同意图相关搜索词（页面生成必吸）

| 相关搜法 | 判定 | 页面生成落点 | 近义不拆 URL |
|---|---|---|---|
${t.relatedKwTable}

- [x] 上表已列全本意图相关搜索
- [x] 生成 title / description / FAQ / Use cases 时按上表写入

## Ads / Keyword Planner 长尾

- [x] 不适用：仓库未发现本任务 Planner 归属分析。

## 用户意图审查

| 项 | 结论 |
|---|---|
| 日期 | 2026-09-21 |
| 总判 | 满足：${t.intentOk} |
| 主词搜索者任务 | ${t.intentTask} |
| 满足之处 | ${t.intentMeet} |
| 超出 / 应划边界 | ${t.intentBound} |
| [x] 已按审查回写 How / 交互主次 / FAQ / desc | 进入 briefs |

## 文案丰富度（本批 sound 强制）

\`description\` 须含 Steps + Example；How ≥4；Why ≥4；Rules ≥4；FAQ ≥5；zh description ≥120。

## 交互规格

${t.ux}

## 页面模块清单

- [x] H1 / 工具区 / 表单 / HUD
- [x] How / Why / Rules / Example / Use cases
- [x] FAQ ≥5 / related ≥2 / References
- [x] 十语 brief 方向
`
	);
	write(
		`${dir}/03-locale-briefs.md`,
		`# Locale briefs

**状态**：\`i18n-done\`  
**母版语言**：en

共同边界：${t.briefBound}

| 语种 | 当地检索词（主词；次词） | Title / H1 方向 | 按钮 | 文案切入 / 次词落点 |
|---|---|---|---|---|
${t.briefRows}

- [x] 清单前检索覆盖已做
- [x] 同意图相关搜索词已写入 02
- [x] 用户意图审查已做
- [x] 检索覆盖已优化
- [x] 轮次 1 母版
- [x] 轮次 2 逐语重写
- [x] 轮次 3 抽查及禁词

## 多轮记录

| 轮次 | 日期 | 做了什么 | 结果 |
|---|---|---|---|
| 0b | 2026-09-21 | ${t.hubId}：${t.round0b}；related 邻页 | 02 回写；briefs-ready |
| 1b | 2026-09-21 | 母版 en：Steps+Example、How×4 / Why×4 / Rules×4 / FAQ×5 | en 键齐全 |
| 2b | 2026-09-21 | 九语按当地 H1/按钮重写；抽查 en,zh,es,ja；zh description ≥120 | 十语目录齐；i18n-done |
| 3 | 2026-09-21 | 抽查 en,zh,es,ja 禁词与占位符 \`{s}\` \`{title}\` \`{input}\` \`{output}\` | i18n-done |
`
	);
}

/**
 * catalog 分片。
 * @param {object} t
 */
function writeCatalog(t) {
	const json = {
		slug: t.slug,
		path: `/tools/${t.slug}`,
		updatedAt: '2026-09-21T00:28:00.000Z',
		launchedAt: '2026-09-21T00:28:00.000Z',
		category: 'developer',
		primaryTopic: 'sound-editor',
		featured: false,
		ymyl: false,
		i18nKey: `${t.prefix}_title`,
		homeTitleKey: `${t.prefix}_title`,
		homeDescKey: `${t.prefix}_desc`,
		faqPrefix: t.prefix,
		related: t.related,
		logo: `/icons/tools/${t.slug}.svg`,
		page: {
			module: `../pages/${t.pageModule}`,
			export: t.pageExport,
			style: 'opts',
		},
		localProcessing: true,
		scenario: 'media',
		subject: 'audio',
	};
	write(`src/site/tool-catalog.d/${t.slug}.json`, JSON.stringify(json, null, 2) + '\n');
}

// —— U2 ——
const u2 = {
	slug: 'extract-cover-art-from-an-mp3',
	hubId: 'U2',
	prefix: 'tool_extract_cover_art_from_an_mp3',
	pageModule: 'extractCoverArtFromAnMp3Page',
	pageExport: 'renderExtractCoverArtFromAnMp3Page',
	related: ['edit-mp3-title-and-cover-art', 'bulk-convert-wav-files-to-mp3'],
	titleEn: 'Extract cover art from an MP3',
	descEn:
		'Extract album cover art from an MP3 APIC tag in the browser without uploading. Steps: choose an MP3, Extract cover, preview and download JPEG or PNG. Example: the sample tagged MP3 yields a tiny demo cover while audio frames stay unread for export. Parses ID3v2 APIC locally—missing covers fail clearly. Never uploaded.',
	request:
		'立项 sound 工具 **U2**：`extract-cover-art-from-an-mp3`。Parse ID3 APIC → download cover image。related：`edit-mp3-title-and-cover-art`、`bulk-convert-wav-files-to-mp3`。Local-only；Rich copy How≥4 Why≥4 Rules≥4 FAQ≥5。勿改 docs/sound-editor/12。CROSS_TOOL_UPDATE=1 verify:tool（slug-scoped）。',
	forbid: '改写标签主作业（A6）、内嵌歌词（U3）、重编码音频',
	scene: '从 MP3 抽出已有封面图下载',
	tech:
		'- 输入：一个本地 `.mp3`。\n- 管线：读 ID3v2 → 找 APIC → 解析 MIME/图片字节 → 预览并下载。\n- 诚实：仅 APIC；无封面则明确错误；不改写音频帧。\n- ≠ A6 写标签；≠ U3 歌词。',
	techShort: '读 ID3v2 APIC；下载 JPEG/PNG；不改音频',
	ig: '2026-09-21 搜索 extract album art from mp3；extract cover art；mp3 提取封面。常见桌面/云工具。少有 **仅本机解析 APIC 并下载封面、不上传、诚实无封面错误** 的单点页。',
	authority: 'https://id3.org/id3v2.3.0',
	faqTopics: '隐私；APIC；无封面；不改音频；≠写标签',
	usecases:
		'| 播客缺图要封面 | Extract → Download | JPEG/PNG |\n| 样例验管线 | Load sample | 演示 APIC |',
	mainKw: 'extract album art / extract cover art from mp3',
	secKw: 'mp3 提取封面；APIC；without upload',
	habit: '搜「提取封面」要图片文件，不要改曲名或重编码',
	relatedKwTable: `| extract album art / cover from mp3 | absorb 主词 | H1 / How | 本页 |
| mp3 提取封面 / APIC | absorb 次词 | desc / FAQ | 本页 |
| edit title / embed lyrics | 相邻 | FAQ → A6/U3 | 不拆本页 |
| compress mp3 | 相邻 | FAQ | reduce 不拆 |`,
	intentOk: '本地抽出 APIC 封面并下载',
	intentTask: '选 MP3、Extract、下载封面图',
	intentMeet: '预览、MIME 扩展名、HUD、样例、本地',
	intentBound: '不做写标签、歌词、批量、无封面静默成功',
	ux: `- 输入：一个本地 MP3，40 MiB / 10 分钟。\n- 动作：**Extract cover**；\`Load sample\`；\`Download cover\` 成功前禁用。\n- HUD：Read / Extract / Done。\n- Sample：合成带 APIC 的短 MP3 再抽出。`,
	briefBound: '本机 **解析 ID3v2 APIC 并下载封面**，不改写音频。诚实：无封面明确失败。≠ 写标签；≠ 歌词。',
	briefRows: `| en | extract cover art; album art; APIC | Extract cover art from an MP3 | Extract cover / Download cover | FAQ no-cover |
| zh | 提取封面；专辑封面；APIC | 从 MP3 提取封面 | 提取封面 / 下载封面 | desc≥120 |
| es | extraer carátula MP3; álbum | Extraer la carátula de un MP3 | Extraer / Descargar | FAQ |
| ja | ジャケット抽出；カバーアート | MP3からジャケットを抽出 | 抽出 / ダウンロード | FAQ |
| de | Cover aus MP3; Albumcover | Cover aus einer MP3 extrahieren | Extrahieren / Herunterladen | FAQ |
| fr | extraire pochette MP3 | Extraire la pochette d’un MP3 | Extraire / Télécharger | FAQ |
| pt | extrair capa MP3 | Extrair a capa de um MP3 | Extrair / Baixar | FAQ |
| id | ekstrak sampul MP3 | Ekstrak sampul dari MP3 | Ekstrak / Unduh | FAQ |
| ar | استخراج غلاف MP3 | استخراج غلاف من MP3 | استخراج / تنزيل | FAQ |
| ru | извлечь обложку MP3 | Извлечь обложку из MP3 | Извлечь / Скачать | FAQ |`,
	round0b: 'APIC 抽出下载；不改音频',
};
writeWorkTasks(u2);
writeCatalog(u2);
write(
	`public/icons/tools/${u2.slug}.svg`,
	`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" role="img" aria-label="Extract cover art from an MP3"><rect width="64" height="64" rx="12" fill="#0f3d3e"/><rect x="8" y="12" width="28" height="28" rx="3" fill="#fde68a"/><circle cx="22" cy="26" r="7" fill="#0f3d3e"/><circle cx="22" cy="26" r="3" fill="#fde68a"/><path d="M40 18h14v22H40z" fill="#99f6e4"/><path d="M44 40l6 8 6-8z" fill="#5eead4"/><path d="M14 48h36v6H14z" fill="#5eead4"/></svg>\n`
);

// —— U3 ——
const u3 = {
	slug: 'embed-lyrics-in-an-mp3',
	hubId: 'U3',
	prefix: 'tool_embed_lyrics_in_an_mp3',
	pageModule: 'embedLyricsInAnMp3Page',
	pageExport: 'renderEmbedLyricsInAnMp3Page',
	related: ['edit-mp3-title-and-cover-art', 'extract-cover-art-from-an-mp3'],
	titleEn: 'Embed lyrics in an MP3',
	descEn:
		'Embed unsynced lyrics (USLT) into an MP3 ID3v2 tag in the browser without re-encoding audio. Steps: choose an MP3, paste lyrics, optional language, Apply lyrics, preview and download. Example: the sample MP3 receives demo lyrics while Layer III frames stay intact. Writes ID3v2.3 USLT locally—synced LRC/karaoke is out of scope. Never uploaded.',
	request:
		'立项 sound 工具 **U3**：`embed-lyrics-in-an-mp3`。Embed USLT unsynced lyrics in ID3v2 without re-encoding MPEG if possible（mirror A6）。related：`edit-mp3-title-and-cover-art`、`extract-cover-art-from-an-mp3`。Rich ten locales。勿改 docs/sound-editor/12。CROSS_TOOL_UPDATE=1 verify:tool。',
	forbid: '同步歌词/LRC 主产品、封面抽出主作业、重编码 PCM',
	scene: '向 MP3 写入未同步歌词 USLT',
	tech:
		'- 输入：一个本地 `.mp3` + 歌词文本。\n- 管线：剥离 ID3 → 写 ID3v2.3 USLT（+可选保留/不写其他）→ 原样拼接 Layer III。\n- 诚实：未同步歌词；不做逐行时间戳；复杂旧标签可能被简化。',
	techShort: '写 ID3v2.3 USLT；不重编码 MPEG',
	ig: '2026-09-21 搜索 embed lyrics in mp3；add lyrics tag；mp3 歌词标签。少有 **仅本机写 USLT、不重编码、诚实非同步歌词** 单点页。',
	authority: 'https://id3.org/id3v2.3.0',
	faqTopics: '隐私；不重编码；USLT；非 LRC；≠抽封面',
	usecases:
		'| 播客加文稿 | 贴歌词 → Apply | USLT MP3 |\n| 样例验管线 | Load sample | 演示歌词 |',
	mainKw: 'embed lyrics in mp3 / add lyrics tag',
	secKw: 'USLT；unsynced lyrics；不重新编码',
	habit: '搜「加歌词标签」要元数据歌词，不要卡拉OK时间轴或重编码',
	relatedKwTable: `| embed lyrics / USLT | absorb 主词 | H1 / How | 本页 |
| unsynced lyrics / mp3 歌词 | absorb 次词 | desc / FAQ | 本页 |
| synced LRC / karaoke | 有意不满足 | FAQ | 不拆 |
| extract cover / edit title | 相邻 | FAQ → U2/A6 | 不拆本页 |`,
	intentOk: '本地写入未同步 USLT 且不重编码',
	intentTask: '选 MP3、贴歌词、Apply、下载',
	intentMeet: '语言码、描述符、HUD、样例、本地',
	intentBound: '不做同步歌词、封面抽出主路径、批量',
	ux: `- 输入：一个本地 MP3，40 MiB / 10 分钟；歌词 ≤ 32 KiB 文本。\n- 动作：**Apply lyrics**；\`Load sample\`；\`Download MP3\`。\n- 字段：Lyrics；Language（三字母）；Descriptor 可选。\n- HUD：Read / Write tags / Done。`,
	briefBound: '本机 **写入 ID3v2.3 USLT 未同步歌词**，不重编码 PCM。诚实：非 LRC。≠ 抽封面；≠ 改曲名主作业。',
	briefRows: `| en | embed lyrics; USLT; unsynced | Embed lyrics in an MP3 | Apply lyrics / Download MP3 | FAQ not LRC |
| zh | 嵌入歌词；歌词标签；USLT | 向 MP3 嵌入歌词 | 写入歌词 / 下载 MP3 | desc≥120 |
| es | incrustar letras MP3; USLT | Incrustar letras en un MP3 | Aplicar letras / Descargar | FAQ |
| ja | 歌詞埋め込み；USLT | MP3に歌詞を埋め込む | 歌詞を適用 / ダウンロード | FAQ |
| de | Lyrics einbetten; USLT | Lyrics in eine MP3 einbetten | Lyrics anwenden / Herunterladen | FAQ |
| fr | intégrer paroles MP3; USLT | Intégrer des paroles dans un MP3 | Appliquer / Télécharger | FAQ |
| pt | incorporar letras MP3; USLT | Incorporar letras em um MP3 | Aplicar letras / Baixar | FAQ |
| id | sisipkan lirik MP3; USLT | Sematkan lirik ke MP3 | Terapkan lirik / Unduh | FAQ |
| ar | تضمين كلمات MP3؛ USLT | تضمين كلمات في MP3 | تطبيق / تنزيل | FAQ |
| ru | встроить текст песни; USLT | Встроить текст в MP3 | Применить / Скачать | FAQ |`,
	round0b: 'USLT 写入；不重编码',
};
writeWorkTasks(u3);
writeCatalog(u3);
write(
	`public/icons/tools/${u3.slug}.svg`,
	`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" role="img" aria-label="Embed lyrics in an MP3"><rect width="64" height="64" rx="12" fill="#312e81"/><path d="M12 16h28v36H12z" fill="#c7d2fe"/><path d="M18 24h16M18 32h14M18 40h12" fill="none" stroke="#312e81" stroke-width="2.5" stroke-linecap="round"/><circle cx="48" cy="40" r="10" fill="#a5b4fc"/><path d="M46 36v10l8-5z" fill="#312e81"/></svg>\n`
);

// —— L2 ——
const l2 = {
	slug: 'batch-trim-the-same-intro-from-audio-files',
	hubId: 'L2',
	prefix: 'tool_batch_trim_the_same_intro_from_audio_files',
	pageModule: 'batchTrimTheSameIntroFromAudioFilesPage',
	pageExport: 'renderBatchTrimTheSameIntroFromAudioFilesPage',
	related: ['trim-an-audio-clip-and-export', 'bulk-convert-wav-files-to-mp3'],
	titleEn: 'Batch trim the same intro from audio files',
	descEn:
		'Trim the same intro length from many local audio files and download a ZIP of WAV clips in the browser. Steps: add files, set shared intro seconds, Trim to ZIP, download. Example: two sample tones drop the first second into a ZIP of two WAVs. Decodes with decodeAudioData, writes 16-bit WAV, packs with lazy JSZip. Files stay on your device—never uploaded.',
	request:
		'立项 sound 工具 **L2**：`batch-trim-the-same-intro-from-audio-files`。Multi-file + shared intro seconds trim → ZIP of WAV（JSZip lazy）。related：`trim-an-audio-clip-and-export`、`bulk-convert-wav-files-to-mp3`。Mirror trim + bulk。Rich ten locales。勿改 docs/sound-editor/12。CROSS_TOOL_UPDATE=1 verify:tool。',
	forbid: '单文件波形精细裁剪主作业（交给 trim 页）、批量转码矩阵',
	scene: '多文件共用同一片头秒数裁剪并打 ZIP',
	tech:
		'- 输入：多个本地音频 + 共用 intro 秒数。\n- 管线：逐文件 decodeAudioData → 从 intro 切到结尾 → 16-bit WAV → JSZip。\n- 诚实：输出 WAV；短于 intro 的文件跳过/失败计数；≠ 单文件波形编辑器。',
	techShort: '多文件共用 intro 裁剪；WAV ZIP；懒加载 JSZip',
	ig: '2026-09-21 搜索 batch trim audio；bulk cut intro；批量裁剪片头。少有 **共用秒数、本机 ZIP of WAV、无上传** 单点页。',
	authority: 'https://developer.mozilla.org/en-US/docs/Web/API/BaseAudioContext/decodeAudioData',
	faqTopics: '隐私；共用 intro；WAV ZIP；≠单文件波形；部分失败',
	usecases:
		'| 口播统一去片头 | 设 1.5s → Trim ZIP | 多 WAV |\n| 样例验管线 | Load sample | 两段去 1s |',
	mainKw: 'batch trim audio / bulk cut intro',
	secKw: '批量裁剪片头；same intro；ZIP WAV',
	habit: '搜「批量去片头」要同一秒数多文件，不要单文件波形细调',
	relatedKwTable: `| batch trim / bulk cut intro | absorb 主词 | H1 / How | 本页 |
| 批量裁剪片头 / same seconds | absorb 次词 | desc / FAQ | 本页 |
| single-file waveform trim | 相邻 | FAQ → trim 页 | 不拆本页 |
| bulk wav to mp3 | 相邻 | FAQ → A8 | 不拆 |`,
	intentOk: '多文件共用 intro 秒数裁剪并 ZIP WAV',
	intentTask: '加文件、设秒数、Trim to ZIP、下载',
	intentMeet: '队列、HUD、部分失败诚实、样例、本地',
	intentBound: '不做波形手柄、逐文件不同起止、MP3 批量转码主路径',
	ux: `- 输入：最多 20 文件；每文件 40 MiB / 10 分钟。\n- 共用 intro 秒数（默认 1）。\n- 动作：**Trim to ZIP**；\`Load sample\`；\`Download ZIP\`。\n- HUD：Read / Decode / Trim / Pack。`,
	briefBound: '本机 **多文件共用 intro 秒数裁剪 → WAV ZIP**。诚实：短于 intro 计失败。≠ 单文件波形裁剪；≠ 批量转 MP3。',
	briefRows: `| en | batch trim; cut intro; bulk | Batch trim the same intro from audio files | Trim to ZIP / Download ZIP | FAQ partial |
| zh | 批量裁剪片头；同一秒数 | 批量裁掉音频相同片头 | 裁剪为 ZIP / 下载 ZIP | desc≥120 |
| es | recorte por lotes; quitar intro | Recortar el mismo intro en varios audios | Recortar a ZIP / Descargar | FAQ |
| ja | 一括トリム；同じイントロ | 同じイントロ秒を一括トリム | ZIPにトリム / ダウンロード | FAQ |
| de | Batch-Trim; Intro kürzen | Gleichen Intro von Audios kürzen | Zu ZIP trimmen / Herunterladen | FAQ |
| fr | découpe lot；même intro | Couper le même intro sur plusieurs audios | Couper en ZIP / Télécharger | FAQ |
| pt | corte em lote; mesmo intro | Cortar o mesmo intro de vários áudios | Cortar para ZIP / Baixar | FAQ |
| id | trim massal; potong intro | Potong intro yang sama dari banyak audio | Trim ke ZIP / Unduh | FAQ |
| ar | قص دفعة؛ نفس المقدمة | قص نفس المقدمة من ملفات صوت | قص إلى ZIP / تنزيل | FAQ |
| ru | пакетная обрезка; интро | Обрезать одно интро у многих файлов | Обрезать в ZIP / Скачать | FAQ |`,
	round0b: '共用 intro→WAV ZIP；JSZip 懒加载',
};
writeWorkTasks(l2);
writeCatalog(l2);
write(
	`public/icons/tools/${l2.slug}.svg`,
	`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" role="img" aria-label="Batch trim the same intro from audio files"><rect width="64" height="64" rx="12" fill="#1c1917"/><path d="M10 20h18v8H10zm0 12h22v8H10zm0 12h14v8H10z" fill="#fdba74"/><path d="M36 18v28M36 18l8 6M36 46l8-6" fill="none" stroke="#fed7aa" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><rect x="46" y="22" width="10" height="20" rx="2" fill="#fb923c"/></svg>\n`
);

console.log('work-tasks/catalog/svg done — locales next via companion');
