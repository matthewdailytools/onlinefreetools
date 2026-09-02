/**
 * One-shot generator for seven ai-prompt-template-builder cluster tools.
 * Run: node scripts/tmp/generate-seven-prompt-tools.mjs
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const launched = '2026-09-02T17:00:00.000Z';

/** @typedef {{ slug: string, prefix: string, camel: string, exportFn: string, titleBase: string, related: string[], fields: Array<{id:string,key:string,type?:'textarea'}>, sample: Record<string,string>, buildType: string, mainKw: string, secKw: string, igNote: string }} ToolDef */

/** @type {ToolDef[]} */
const TOOLS = [
	{
		slug: 'midjourney-prompt-builder',
		prefix: 'mpb',
		camel: 'midjourneyPromptBuilder',
		exportFn: 'renderMidjourneyPromptBuilderPage',
		titleBase: 'Midjourney prompt builder',
		related: ['prompt-template-builder', 'sketch-prompt-generator', 'writing-prompt-generator'],
		fields: [
			{ id: 'subject', key: 'subject' },
			{ id: 'style', key: 'style' },
			{ id: 'lighting', key: 'lighting' },
			{ id: 'aspect', key: 'aspect' },
			{ id: 'mj_flags', key: 'mj_flags', type: 'textarea' },
		],
		sample: {
			subject: 'A lone samurai on a misty bridge at dawn',
			style: 'Cinematic ink wash, muted teal palette',
			lighting: 'Soft rim light, volumetric fog',
			aspect: '16:9',
			mj_flags: '--v 6.1 --style raw --stylize 120',
		},
		buildType: 'midjourney',
		mainKw: 'Midjourney prompt builder',
		secKw: 'Midjourney --ar/--v mapping → rules table + FAQ q3; sketch style → desc',
		igNote: 'MJ parameter mapping table for --ar and --v',
	},
	{
		slug: 'sketch-prompt-generator',
		prefix: 'skg',
		camel: 'sketchPromptGenerator',
		exportFn: 'renderSketchPromptGeneratorPage',
		titleBase: 'Sketch prompt generator',
		related: ['prompt-template-builder', 'midjourney-prompt-builder', 'film-prompt-builder'],
		fields: [
			{ id: 'medium', key: 'medium' },
			{ id: 'stroke', key: 'stroke' },
			{ id: 'composition', key: 'composition' },
			{ id: 'artist_ref', key: 'artist_ref' },
		],
		sample: {
			medium: 'Graphite on toned paper',
			stroke: 'Loose cross-hatching, visible construction lines',
			composition: 'Three-quarter portrait, negative space on the left',
			artist_ref: 'Inspired by Kim Jung Gi line economy, not a copy',
		},
		buildType: 'sketch',
		mainKw: 'Sketch prompt generator',
		secKw: 'pencil sketch prompt → FAQ q4; art study → use case 2',
		igNote: 'Medium/stroke/composition fields for hand-drawn look',
	},
	{
		slug: 'film-prompt-builder',
		prefix: 'flm',
		camel: 'filmPromptBuilder',
		exportFn: 'renderFilmPromptBuilderPage',
		titleBase: 'Film prompt builder',
		related: ['prompt-template-builder', 'short-drama-prompt-generator', 'writing-prompt-generator'],
		fields: [
			{ id: 'logline', key: 'logline', type: 'textarea' },
			{ id: 'act1', key: 'act1', type: 'textarea' },
			{ id: 'act2', key: 'act2', type: 'textarea' },
			{ id: 'act3', key: 'act3', type: 'textarea' },
			{ id: 'scene_list', key: 'scene_list', type: 'textarea' },
			{ id: 'character_arc', key: 'character_arc' },
		],
		sample: {
			logline: 'Two rival food-truck owners must share a kitchen after a permit mix-up.',
			act1: 'Meet rivals, city inspection threat, forced partnership proposal.',
			act2: 'Shared service night succeeds; secret ingredient feud resurfaces at festival.',
			act3: 'Public cook-off; they merge menus and split the permit fairly.',
			scene_list: '1. Alley argument 2. Health inspector 3. First joint shift 4. Festival fallout 5. Finale cook-off',
			character_arc: 'Pride → reluctant respect → co-owners',
		},
		buildType: 'film',
		mainKw: 'Film prompt builder',
		secKw: 'screenplay beat sheet → how_item_2; three-act → rules_item_1',
		igNote: 'Three-act + scene list for feature film beats',
	},
	{
		slug: 'short-drama-prompt-generator',
		prefix: 'sdr',
		camel: 'shortDramaPromptGenerator',
		exportFn: 'renderShortDramaPromptGeneratorPage',
		titleBase: 'Short drama prompt generator',
		related: ['prompt-template-builder', 'film-prompt-builder', 'writing-prompt-generator'],
		fields: [
			{ id: 'episodes', key: 'episodes' },
			{ id: 'hook', key: 'hook', type: 'textarea' },
			{ id: 'cliffhanger', key: 'cliffhanger', type: 'textarea' },
			{ id: 'vertical_format', key: 'vertical_format' },
			{ id: 'genre', key: 'genre' },
		],
		sample: {
			episodes: '10',
			hook: 'CEO discovers the intern is their estranged sibling',
			cliffhanger: 'Episode ends on a leaked voice memo; next episode opens mid-confrontation',
			vertical_format: '9:16 mobile, 60–90s per episode, on-screen captions',
			genre: 'Modern workplace melodrama',
		},
		buildType: 'shortDrama',
		mainKw: 'Short drama prompt generator',
		secKw: 'vertical serial outline → desc; cliffhanger hooks → FAQ q4',
		igNote: 'Episodic hooks and cliffhangers for vertical binge',
	},
	{
		slug: 'product-design-prompt-builder',
		prefix: 'pdb',
		camel: 'productDesignPromptBuilder',
		exportFn: 'renderProductDesignPromptBuilderPage',
		titleBase: 'Product design prompt builder',
		related: ['prompt-template-builder', 'android-prompt-builder', 'ios-prompt-builder'],
		fields: [
			{ id: 'persona', key: 'persona' },
			{ id: 'problem', key: 'problem', type: 'textarea' },
			{ id: 'wireframe_scope', key: 'wireframe_scope', type: 'textarea' },
			{ id: 'design_tokens', key: 'design_tokens', type: 'textarea' },
		],
		sample: {
			persona: 'Busy parents scheduling kids\' activities on mobile',
			problem: 'Calendar apps feel noisy; they need one-tap week view and shared custody handoffs',
			wireframe_scope: 'Home week strip, event detail sheet, invite co-parent flow (3 screens max)',
			design_tokens: '8pt grid, primary #2563eb, rounded-lg cards, WCAG AA contrast',
		},
		buildType: 'productDesign',
		mainKw: 'Product design prompt builder',
		secKw: 'UX wireframe prompt → use case 1; design tokens → rules_item_2',
		igNote: 'Persona/problem/wireframe/tokens for UX briefs',
	},
	{
		slug: 'android-prompt-builder',
		prefix: 'adb',
		camel: 'androidPromptBuilder',
		exportFn: 'renderAndroidPromptBuilderPage',
		titleBase: 'Android prompt builder',
		related: ['prompt-template-builder', 'ios-prompt-builder', 'product-design-prompt-builder'],
		fields: [
			{ id: 'feature_spec', key: 'feature_spec', type: 'textarea' },
			{ id: 'kotlin_stack', key: 'kotlin_stack' },
			{ id: 'compose_ui', key: 'compose_ui', type: 'textarea' },
			{ id: 'gradle_constraints', key: 'gradle_constraints', type: 'textarea' },
		],
		sample: {
			feature_spec: 'Offline-first bookmark list with swipe-to-archive and share sheet export',
			kotlin_stack: 'Kotlin 2.0, Jetpack Compose, Material 3, Room, Hilt',
			compose_ui: 'LazyColumn, SwipeToDismiss, ModalBottomSheet for share targets',
			gradle_constraints: 'minSdk 26, targetSdk 35, single module app + :core:data',
		},
		buildType: 'android',
		mainKw: 'Android prompt builder',
		secKw: 'Kotlin Compose coding agent → desc; Gradle boundaries → FAQ q5',
		igNote: 'Kotlin/Compose/Gradle fields for mobile agent prompts',
	},
	{
		slug: 'ios-prompt-builder',
		prefix: 'iosb',
		camel: 'iosPromptBuilder',
		exportFn: 'renderIosPromptBuilderPage',
		titleBase: 'iOS prompt builder',
		related: ['prompt-template-builder', 'android-prompt-builder', 'product-design-prompt-builder'],
		fields: [
			{ id: 'feature_spec', key: 'feature_spec', type: 'textarea' },
			{ id: 'swift_stack', key: 'swift_stack' },
			{ id: 'swiftui_ui', key: 'swiftui_ui', type: 'textarea' },
			{ id: 'hig_constraints', key: 'hig_constraints', type: 'textarea' },
		],
		sample: {
			feature_spec: 'Health dashboard with weekly step trends and HealthKit read permissions',
			swift_stack: 'Swift 5.10, SwiftUI, iOS 17+, async/await, SwiftData cache',
			swiftui_ui: 'NavigationStack, Charts framework, permission gate sheet',
			hig_constraints: 'Dynamic Type, VoiceOver labels on chart points, no force-unwrap in samples',
		},
		buildType: 'ios',
		mainKw: 'iOS prompt builder',
		secKw: 'SwiftUI coding agent → desc; Apple HIG → rules_item_3',
		igNote: 'Swift/SwiftUI/HIG fields for iOS agent prompts',
	},
];

/**
 * @param {string} slug
 */
const faqPrefix = (slug) => `tool_${slug.replace(/-/g, '_')}`;

/**
 * @param {ToolDef} t
 */
const writeCatalog = (t) => {
	const fp = faqPrefix(t.slug);
	const json = {
		slug: t.slug,
		path: `/tools/${t.slug}`,
		updatedAt: launched,
		launchedAt: launched,
		category: 'developer',
		primaryTopic: 'ai-prompt-template-builder',
		featured: false,
		ymyl: false,
		i18nKey: `${fp}_title`,
		homeTitleKey: `${fp}_title`,
		homeDescKey: `${fp}_desc`,
		faqPrefix: fp,
		related: t.related,
		logo: `/icons/tools/${t.slug}.svg`,
		page: {
			module: `../pages/${t.camel}Page`,
			export: t.exportFn,
			style: 'opts',
		},
		localProcessing: true,
		scenario: 'developer',
		subject: 'text',
	};
	const p = path.join(root, 'src/site/tool-catalog.d', `${t.slug}.json`);
	fs.mkdirSync(path.dirname(p), { recursive: true });
	fs.writeFileSync(p, `${JSON.stringify(json, null, 2)}\n`);
};

/**
 * @param {ToolDef} t
 */
const writeIcon = (t) => {
	const colors = {
		'midjourney-prompt-builder': '#6366f1',
		'sketch-prompt-generator': '#78716c',
		'film-prompt-builder': '#dc2626',
		'short-drama-prompt-generator': '#db2777',
		'product-design-prompt-builder': '#0891b2',
		'android-prompt-builder': '#16a34a',
		'ios-prompt-builder': '#2563eb',
	};
	const c = colors[t.slug] || '#0d9488';
	const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" role="img" aria-label="${t.titleBase}">
  <!-- Prompt tool icon (ASCII comment only). -->
  <rect width="32" height="32" rx="8" fill="${c}"/>
  <rect x="6" y="8" width="18" height="3" rx="1" fill="#fff" opacity="0.95"/>
  <rect x="6" y="13" width="14" height="3" rx="1" fill="#fff" opacity="0.75"/>
  <rect x="6" y="18" width="20" height="3" rx="1" fill="#fff" opacity="0.55"/>
  <circle cx="24" cy="24" r="4" fill="#fff" opacity="0.9"/>
</svg>
`;
	const p = path.join(root, 'public/icons/tools', `${t.slug}.svg`);
	fs.mkdirSync(path.dirname(p), { recursive: true });
	fs.writeFileSync(p, svg);
};

/**
 * @param {ToolDef} t
 */
const writeEn = (t) => {
	const fp = faqPrefix(t.slug);
	const title = `${t.titleBase} — Local + Optional AI`;
	const fieldKeys = t.fields.flatMap((f) => [
		`\t${fp}_${f.key}_label: '${capLabel(f.key)}',`,
		`\t${fp}_${f.key}_ph: 'Sample ${f.key.replace(/_/g, ' ')}…',`,
	]);
	const extraMj =
		t.buildType === 'midjourney'
			? `\t${fp}_rules_table_title: 'Midjourney flag mapping',
\t${fp}_rules_table_ar: 'Aspect → --ar',
\t${fp}_rules_table_v: 'Version → --v',
\t${fp}_rules_table_note: 'Append flags from the table when aspect or version is set.',
\t${fp}_rules_map_1_label: '1:1 square',
\t${fp}_rules_map_1_flag: '--ar 1:1',
\t${fp}_rules_map_2_label: '16:9 landscape',
\t${fp}_rules_map_2_flag: '--ar 16:9',
\t${fp}_rules_map_3_label: '9:16 vertical',
\t${fp}_rules_map_3_flag: '--ar 9:16',
\t${fp}_rules_map_4_label: 'MJ v6 default',
\t${fp}_rules_map_4_flag: '--v 6.1',`
			: '';

	const content = `/**
 * i18n tool shard (${t.slug} / en).
 * Master H1: ${t.titleBase}; local assembly + optional Cloudflare AI (Turnstile).
 */
import type { SiteLangDict } from '../../../types';

const en: SiteLangDict = {
\t${fp}_article:
\t\t'Build paste-ready ${t.titleBase.toLowerCase()} prompts on this page. Fill the scene fields, copy Markdown or JSON into ChatGPT, Gemini, Claude, or DeepSeek. Local assembly stays in your browser; optional Expand/Polish uses Cloudflare Workers AI with Turnstile. Text stays on your device unless you choose AI.',
\t${fp}_build: 'Build prompt',
\t${fp}_clear: 'Clear',
\t${fp}_copy: 'Copy',
\t${fp}_desc:
\t\t'${t.titleBase} for ChatGPT, Gemini, Claude & DeepSeek — local + optional AI; stays on device.',
\t${fp}_description:
\t\t'${t.titleBase} for ChatGPT, Gemini, Claude, and DeepSeek: assemble structured prompts locally, then optionally Expand/Polish via Cloudflare Workers AI (Turnstile required). Example: the default sample runs on first paint. Markdown default; JSON for pipelines. Local text stays on your device and is not uploaded unless you use optional AI.',
\t${fp}_download: 'Download',
\t${fp}_empty: 'Fill at least one field before building.',
\t${fp}_example:
\t\t'Load sample fills the default preset, builds Markdown, and enables Copy. Optional AI sends only the text you submit for that click after Turnstile.',
\t${fp}_example_title: 'Example',
\t${fp}_faq_a1:
\t\t'Local assembly runs in this browser tab — nothing is uploaded by default. Optional Expand/Polish sends only the text you submit for that click to Cloudflare Workers AI, not to OpenAI, Google, Anthropic, or DeepSeek from our servers.',
\t${fp}_faq_a2:
\t\t'Local mode only formats your fields in this tab. Optional Expand/Polish uses Cloudflare Workers AI after a Turnstile check — it does not call ChatGPT, Gemini, Claude, or DeepSeek APIs from our servers.',
\t${fp}_faq_a3:
\t\t'Prompt template builder covers generic Role/Task/Constraints/Output templates. This page focuses on ${t.titleBase.toLowerCase()} fields with a dedicated sample and rules for this scenario.',
\t${fp}_faq_a4:
\t\t'Yes. Complete the Turnstile widget in the optional AI panel before Expand or Polish. Without a valid token, AI buttons show an error and local mode still works.',
\t${fp}_faq_a5:
\t\t'Yes. The JSON chip emits structured fields plus assembled prompt text for tests or config pipelines.',
\t${fp}_faq_a6:
\t\t'Yes. Copy the finished prompt into ChatGPT, Gemini, Claude, or DeepSeek. We do not split URLs per platform because the job is formatting text, not calling APIs.',
\t${fp}_faq_q1: 'Is my prompt uploaded?',
\t${fp}_faq_q2: 'Does this call ChatGPT or other LLM APIs?',
\t${fp}_faq_q3: 'How is this different from Prompt template builder?',
\t${fp}_faq_q4: 'Why do I need Turnstile for optional AI?',
\t${fp}_faq_q5: 'Can I get JSON output?',
\t${fp}_faq_q6: 'Can I use this with ChatGPT, Gemini, Claude, or DeepSeek?',
\t${fp}_faq_q7: 'What is the difference between local and optional Cloudflare AI?',
\t${fp}_faq_a7:
\t\t'Local mode formats your fields in this tab only — nothing is uploaded. Optional Expand/Polish sends the text you submit for that click to Cloudflare Workers AI (rate-limited, Turnstile required). On failure or quota, keep using local mode.',
\t${fp}_ai_expand: 'Expand with AI',
\t${fp}_ai_polish: 'Polish with AI',
\t${fp}_ai_panel_label: 'Optional Cloudflare AI (Turnstile)',
\t${fp}_ai_consent_title: 'Send text to Cloudflare Workers AI?',
\t${fp}_ai_consent_body:
\t\t'This optional step sends your current draft to Cloudflare Workers AI for inference. It is not sent to OpenAI, Google, Anthropic, or DeepSeek from our servers. Local assembly still works without AI.',
\t${fp}_ai_consent_ok: 'Continue',
\t${fp}_ai_consent_cancel: 'Cancel',
\t${fp}_ai_working: 'Cloudflare AI is working…',
\t${fp}_ai_done: 'AI suggestion applied. Review before copying.',
\t${fp}_ai_err_generic: 'AI failed. Your local prompt is unchanged.',
\t${fp}_ai_err_rate: 'AI quota reached. Use local mode or try tomorrow (UTC).',
\t${fp}_ai_err_turnstile: 'Complete the Turnstile check before using AI.',
\t${fp}_fmt_json: 'JSON',
\t${fp}_fmt_label: 'Output format',
\t${fp}_fmt_md: 'Markdown',
${fieldKeys.join('\n')}
${extraMj}
\t${fp}_how_body:
\t\t'Fill ${t.titleBase.toLowerCase()} fields, build a prompt locally, optionally Expand/Polish with Turnstile, then paste into ChatGPT, Gemini, Claude, or DeepSeek.',
\t${fp}_how_item_1: 'Load sample already ran the default preset on first paint.',
\t${fp}_how_item_2: 'Edit fields, click Build prompt, or switch to JSON if you need structured export.',
\t${fp}_how_item_3: 'Optional: complete Turnstile, then Expand or Polish via Cloudflare Workers AI.',
\t${fp}_how_item_4: 'Copy or download, then paste into ChatGPT, Gemini, Claude, or DeepSeek.',
\t${fp}_how_title: 'How it works',
\t${fp}_load_sample: 'Load sample',
\t${fp}_platforms_lead:
\t\t'Built for ChatGPT, Gemini, Claude, and DeepSeek — copy the finished prompt into any of those chat UIs.',
\t${fp}_result_label: 'Prompt output',
\t${fp}_rules_body:
\t\t'${t.igNote}. Local assembly is default; optional AI is rate-limited and requires Turnstile.',
\t${fp}_rules_item_1: 'Structured fields map to Role/Task/Constraints/Output blocks in Markdown export.',
\t${fp}_rules_item_2: 'Default export is Markdown. JSON is a chip on the same canvas.',
\t${fp}_rules_item_3: 'Optional Cloudflare AI never replaces local mode — review AI output before copying.',
\t${fp}_rules_item_4: 'This tool assembles text only; it does not run ${t.titleBase.toLowerCase()} engines or call chat APIs locally.',
\t${fp}_rules_title: 'Rules you should expect',
\t${fp}_sec_constraints: 'Constraints',
\t${fp}_sec_output: 'Output format',
\t${fp}_sec_role: 'Role',
\t${fp}_sec_task: 'Task',
\t${fp}_status_copied: 'Copied to clipboard.',
\t${fp}_status_done: 'Prompt ready.',
\t${fp}_status_working: 'Building prompt…',
\t${fp}_title: '${title}',
\t${fp}_usecase_1:
\t\t'Ship a paste-ready ${t.titleBase.toLowerCase()} brief for your team chat in ChatGPT, Gemini, Claude, or DeepSeek.',
\t${fp}_usecase_2:
\t\t'Export JSON for a pipeline test, then refine with optional Cloudflare AI after Turnstile.',
\t${fp}_usecase_3:
\t\t'Compare with Prompt template builder when you need generic four-field templates instead of this scenario.',
\t${fp}_usecase_4:
\t\t'Keep sensitive draft text local — only opt into AI when you accept the consent modal.',
\t${fp}_usecases_title: 'Good fits',
};

export default en;
`;
	const p = path.join(root, 'src/site/i18n/tools', t.slug, 'en.ts');
	fs.mkdirSync(path.dirname(p), { recursive: true });
	fs.writeFileSync(p, content);
};

/** @param {string} k */
const capLabel = (k) =>
	k
		.split('_')
		.map((w) => w.charAt(0).toUpperCase() + w.slice(1))
		.join(' / ');

/**
 * @param {ToolDef} t
 */
const write02 = (t) => {
	const md = `# 02 — 工具信息定稿

**状态**：\`ready\`  
**slug**：\`${t.slug}\`  
**路径**：\`/tools/${t.slug}\`  
**主方向**：B  
**YMYL**：否  
**Topic**：\`ai-prompt-template-builder\`

---

## 使用场景

| 场景 | 进页默认 | 说明 |
|---|---|---|
| ${t.titleBase} | **是** | H1 |
| 通用四字段模板 | — | **有意不满足**（链到 prompt-template-builder） |
| 云端代写全文 | — | **有意不满足** |

---

## 清单前检索覆盖优化

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-09-02 |
| slug | 保留 \`${t.slug}\` |
| 主检索词 → H1 | **${t.mainKw}** |
| 次词 | ${t.secKw} |
| 用户习惯 | 搜 ${t.titleBase.toLowerCase()} 要进页即用字段 + 样例 + 本地组装 |
| 优化摘要 | H1 锁定 ${t.mainKw} — Local + Optional AI；次词落 desc/FAQ/use cases；vs prompt-template-builder FAQ 划界 |
| [x] coverage:gate 0b | 2026-09-02 |
| [x] 已回写上方 SEO 卡片 Title / Description 与建议 slug | |

## 用户意图审查

| 项 | 结论 |
|---|---|
| 日期 | 2026-09-02 |
| 总判 | **满足**：场景字段 + 进页样例 + 本地组装 + 可选 AI/Turnstile |
| 主任务 | ${t.titleBase.toLowerCase()} 本地组装并粘贴到 ChatGPT 等 |
| 超出 / 边界 | 不代写全文、不调用 ChatGPT API；AI 可选且 rate-limited |
| [x] 已回写 How / FAQ / desc | |

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| Title (en) / H1 | **${t.titleBase} — Local + Optional AI** |
| \`localProcessing\` | **true**（可选 AI 须 consent + Turnstile） |
| \`page.style\` | **opts** |
| \`primaryTopic\` | **ai-prompt-template-builder** |
| related | ${t.related.map((r) => `\`${r}\``).join(', ')} |
| DOM 前缀 | \`${t.prefix}\` |

## 交互规格

- 字段：${t.fields.map((f) => f.key).join(', ')}
- 输出：Markdown（Role/Task/Constraints/Output）或 JSON
- **进页样例**：\`loadSample()\` 默认预设
- 可选 AI：Expand/Polish + Turnstile（共享 promptAiPanel）

## 页面模块清单

- [x] H1 + 首屏交互 + loadSample
- [x] How / Rules / Example / Use cases / FAQ / Related / References
- [x] Optional AI panel + Turnstile
`;
	const p = path.join(root, 'work-tasks', t.slug, '02-tool-info.md');
	fs.mkdirSync(path.dirname(p), { recursive: true });
	fs.writeFileSync(p, md);
};

/**
 * @param {ToolDef} t
 */
const write03 = (t) => {
	const md = `# 03 — 各语言 Locale Brief + 禁词核查

**工具 slug**：\`${t.slug}\`  
**母版语言**：en  
**状态**：\`draft\`

---

## 共用禁词 / 禁模式

- [x] title/H1 非参数枚举目录腔
- [x] 隐私句说清设备 + 不上服务器（本地默认；AI 可选 consent）
- [x] **清单前检索覆盖已做**
- [x] **用户意图审查已做**
- [ ] **检索覆盖已优化**

---

## en

- 检索词：${t.titleBase.toLowerCase()}; ${t.mainKw.toLowerCase()}; ai prompt builder
- Title / H1：**${t.titleBase} — Local + Optional AI**
- 按钮：Build prompt / Load sample / Expand with AI

## zh

- 检索词：（待步 3 重写）
- Title：（待步 3）

---

## 多轮记录

| 轮次 | 日期 | 做了什么 | 结果 |
|---|---|---|---|
| 0b | 2026-09-02 | H1 ${t.mainKw}; local+optional AI+Turnstile in desc; vs prompt-template-builder FAQ | 覆盖表回写 02 |
`;
	const p = path.join(root, 'work-tasks', t.slug, '03-locale-briefs.md');
	fs.writeFileSync(p, md);
};

/**
 * @param {ToolDef} t
 */
const buildLogicJs = (t) => {
	if (t.buildType === 'midjourney') {
		return `
      function mapAspectToAr(aspect) {
        var a = (aspect || '').trim();
        if (!a) return '';
        if (a.indexOf('--ar') >= 0) return a;
        if (/^\\d+:\\d+$/.test(a)) return '--ar ' + a;
        var lower = a.toLowerCase();
        if (lower.indexOf('square') >= 0 || lower === '1:1') return '--ar 1:1';
        if (lower.indexOf('vertical') >= 0 || lower === '9:16') return '--ar 9:16';
        if (lower.indexOf('landscape') >= 0 || lower === '16:9') return '--ar 16:9';
        return '--ar ' + a;
      }

      function buildMjLine(f) {
        var parts = [];
        if (f.subject) parts.push(f.subject);
        if (f.style) parts.push(f.style);
        if (f.lighting) parts.push(f.lighting);
        var flags = (f.mj_flags || '').trim();
        var ar = mapAspectToAr(f.aspect);
        if (ar && flags.indexOf('--ar') < 0) flags = (flags ? flags + ' ' : '') + ar;
        if (flags && flags.indexOf('--v') < 0 && !/--v\\s/.test(flags)) flags = (flags ? flags + ' ' : '') + '--v 6.1';
        if (flags) parts.push(flags.trim());
        return parts.join(', ');
      }

      function buildBlocks(f) {
        var mjLine = buildMjLine(f);
        return {
          role: 'You are a Midjourney prompt assistant. Output concise, paste-ready image prompts — not finished renders.',
          task: 'Compose a Midjourney prompt for: ' + (f.subject || '(unspecified subject)') + '. Style: ' + (f.style || '(unspecified)') + '. Lighting: ' + (f.lighting || '(unspecified)') + '.',
          constraints: 'Use English tags. Include aspect/version flags when provided. Suggested line: ' + (mjLine || '(fill fields first)') + '.',
          output: 'One Midjourney prompt line plus 3 optional negative-prompt bullets.'
        };
      }`;
	}

	const roleByType = {
		sketch: 'You are an art-direction assistant for hand-drawn sketch prompts.',
		film: 'You are a feature-film screenwriting consultant for beat-sheet prompts.',
		shortDrama: 'You are a vertical short-drama serial editor for episodic hooks.',
		productDesign: 'You are a UX/product design prompt coach for wireframe briefs.',
		android: 'You are a senior Android engineer (Kotlin, Jetpack Compose).',
		ios: 'You are a senior iOS engineer (Swift, SwiftUI, Apple HIG).',
	};

	const taskLines = t.fields
		.map((f) => `' + (f.${f.key} ? '${capLabel(f.key)}: ' + f.${f.key} + '. ' : '') + '`)
		.join('\n          ');

	return `
      function buildBlocks(f) {
        var taskParts = '';
        ${t.fields.map((f) => `if (f.${f.key}) taskParts += '${capLabel(f.key)}: ' + f.${f.key} + '\\n';`).join('\n        ')}
        return {
          role: '${roleByType[t.buildType] || 'You are a prompt coach.'}',
          task: 'Assemble a structured prompt from these inputs:\\n' + (taskParts || '(unspecified)'),
          constraints: 'Stay factual. Do not execute tools or APIs. Keep paste-ready for chat UIs.',
          output: 'Markdown sections: Role, Task, Constraints, Output — plus a one-paragraph summary block.'
        };
      }`;
};

/**
 * snake_case field id → DOM PascalCase（mj_flags → MjFlags）。
 * @param {string} id
 */
const domId = (id) =>
	id
		.split('_')
		.map((part) => part.charAt(0).toUpperCase() + part.slice(1))
		.join('');

/**
 * @param {ToolDef} t
 */
const writePage = (t) => {
	const fp = faqPrefix(t.slug);
	const PREFIX = fp;
	const p = t.prefix;

	const fieldsHtml = t.fields
		.map((f) => {
			const elId = `${p}${domId(f.id)}`;
			const col = f.type === 'textarea' ? 'col-12' : 'col-md-6';
			const rows = f.type === 'textarea' ? ' rows="2"' : '';
			const tag = f.type === 'textarea' ? 'textarea' : 'input';
			const typeAttr = f.type === 'textarea' ? '' : ' type="text"';
			return `          <div class="${col}"><label class="form-label" for="${elId}">\${escapeHtml(tx(opts.lang, '${f.key}_label'))}</label><${tag} id="${elId}" class="form-control ${p}-field"${typeAttr}${rows} spellcheck="false" placeholder="\${escapeHtml(tx(opts.lang, '${f.key}_ph'))}"></${tag}></div>`;
		})
		.join('\n');

	const mjTable =
		t.buildType === 'midjourney'
			? `
      <div class="table-responsive mb-3">
        <p class="small fw-semibold mb-1">\${escapeHtml(tx(opts.lang, 'rules_table_title'))}</p>
        <table class="table table-sm table-bordered mb-0">
          <thead><tr><th>\${escapeHtml(tx(opts.lang, 'rules_table_ar'))}</th><th>\${escapeHtml(tx(opts.lang, 'rules_table_v'))}</th></tr></thead>
          <tbody>
            <tr><td>\${escapeHtml(tx(opts.lang, 'rules_map_1_label'))}</td><td><code>\${escapeHtml(tx(opts.lang, 'rules_map_1_flag'))}</code></td></tr>
            <tr><td>\${escapeHtml(tx(opts.lang, 'rules_map_2_label'))}</td><td><code>\${escapeHtml(tx(opts.lang, 'rules_map_2_flag'))}</code></td></tr>
            <tr><td>\${escapeHtml(tx(opts.lang, 'rules_map_3_label'))}</td><td><code>\${escapeHtml(tx(opts.lang, 'rules_map_3_flag'))}</code></td></tr>
            <tr><td>\${escapeHtml(tx(opts.lang, 'rules_map_4_label'))}</td><td><code>\${escapeHtml(tx(opts.lang, 'rules_map_4_flag'))}</code></td></tr>
          </tbody>
        </table>
        <p class="small text-muted mt-1 mb-0">\${escapeHtml(tx(opts.lang, 'rules_table_note'))}</p>
      </div>`
			: '';

	const fieldCollect = t.fields
		.map(
			(f) =>
				`          ${f.key}: val(document.getElementById('${p}${domId(f.id)}'))`
		)
		.join(',\n');

	const fieldSet = t.fields
		.map((f) => `        document.getElementById('${p}${domId(f.id)}').value = preset.${f.key} || '';`)
		.join('\n');

	const firstFieldDom = `${p}${domId(t.fields[0].id)}`;
	const sampleJson = JSON.stringify(t.sample);

	const page = `/**
 * ${t.titleBase}：场景字段本地组装 + 可选 Cloudflare AI（Turnstile）。
 * slug: ${t.slug}；见 work-tasks/${t.slug}/02-tool-info.md。
 */
import type { SiteLang } from '../site/i18n';
import { t, supportedLangs } from '../site/i18n';
import { renderFooter } from './site/footer';
import { renderHeader } from './site/header';
import { buildToolPageNavItems } from './site/nav';
import { renderLayout, type HreflangAlternate, escapeHtml } from './site/layout';
import { renderSidebar, buildToolSidebarItems } from './site/sidebar';
import { getToolBySlug } from '../site/tools';
import {
	renderToolExtraSections,
	renderToolIgSections,
	renderToolReferencesSection,
	buildToolJsonLd,
} from './site/toolContent';
import {
	buildPromptAiLabels,
	renderPromptAiPanelHtml,
	renderPromptAiClientScript,
	PROMPT_AI_TURNSTILE_SCRIPT,
} from './site/promptAiPanel';

/** 本工具 i18n 键前缀，与 catalog faqPrefix 一致。 */
const PREFIX = '${PREFIX}';

/** catalog slug（API + Turnstile action）。 */
const SLUG = '${t.slug}';

/** DOM / 脚本 id 前缀。 */
const DOM_PREFIX = '${p}';

/**
 * 为路径加上语言前缀（默认语无前缀）。
 * @param lang 当前 UI 语言
 * @param pathname 以 / 开头的路径
 * @param defaultLang 站点默认语言
 */
const withLangPrefix = (lang: SiteLang, pathname: string, defaultLang: SiteLang) => {
	const safe = pathname.startsWith('/') ? pathname : \`/\${pathname}\`;
	return lang === defaultLang ? safe : \`/\${lang}\${safe}\`;
};

/**
 * 读取本工具某一 i18n 后缀键。
 * @param lang 当前语言
 * @param suffix 如 title、description
 */
const tx = (lang: SiteLang, suffix: string) => t(lang, \`\${PREFIX}_\${suffix}\` as Parameters<typeof t>[1]);

/**
 * 渲染 ${t.titleBase} 工具页。
 * @param opts.lang 当前 UI 语言
 * @param opts.defaultLang 默认（无前缀）语言
 * @param opts.enabledLangs 启用语言列表
 */
export const ${t.exportFn} = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	const toolPath = '/tools/${t.slug}';
	const canonicalPath = withLangPrefix(opts.lang, toolPath, opts.defaultLang);
	const title = \`\${tx(opts.lang, 'title')} | \${t(opts.lang, 'brand')}\`;
	const description = tx(opts.lang, 'description');
	const navItems = buildToolPageNavItems(opts.lang, opts.defaultLang);

	const withExplicitLangPrefix = (code: SiteLang, pathname: string) => {
		const safe = pathname.startsWith('/') ? pathname : \`/\${pathname}\`;
		return \`/\${code}\${safe}\`.replace(/\\/{2,}/g, '/');
	};

	const langAlternates: Record<string, string> = Object.fromEntries(
		(supportedLangs || []).map((code) => [code, withExplicitLangPrefix(code, toolPath)])
	);

	const alternates: HreflangAlternate[] = (supportedLangs || []).map((code) => ({
		lang: code,
		href: \`https://onlinefreetools.org\${withLangPrefix(code, toolPath, opts.defaultLang)}\`,
	}));

	const headerHtml = renderHeader({
		lang: opts.lang,
		brandHref: withLangPrefix(opts.lang, '/', opts.defaultLang),
		navItems,
		enabledLangs: supportedLangs,
		langAlternates,
	});

	const sidebarHtml = renderSidebar({
		title: t(opts.lang, 'nav_tools'),
		groups: buildToolSidebarItems({
			lang: opts.lang,
			defaultLang: opts.defaultLang,
			currentSlug: SLUG,
			currentAnchor: '#builder',
		}),
		id: 'toolNav',
	});

	const footerHtml = renderFooter({ lang: opts.lang });

	const aiLabels = buildPromptAiLabels((suffix) => tx(opts.lang, suffix));
	const aiLabelsJson = JSON.stringify({
		empty: tx(opts.lang, 'empty'),
		ai_err_generic: aiLabels.ai_err_generic,
		ai_err_rate: aiLabels.ai_err_rate,
		ai_err_turnstile: aiLabels.ai_err_turnstile,
		ai_consent_body: aiLabels.ai_consent_body,
		ai_working: aiLabels.ai_working,
		ai_done: aiLabels.ai_done,
	});

	const extraHeadHtml = \`
  <style>
    .${p}-field { min-height: 72px; font-size: .875rem; }
    .${p}-out { white-space: pre-wrap; word-break: break-word; background: #fff; border: 1px solid #dee2e6; border-radius: .5rem; padding: 1rem; overflow: auto; min-height: 220px; font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace; font-size: .875rem; }
    .${p}-meta { font-size: .85rem; color: #6c757d; }
    .${p}-platforms { font-size: .9rem; color: #495057; margin-bottom: .75rem; }
  </style>\`;

	const contentHtml = \`
    <div id="builder" class="tool-hero">
      <h1 class="tool-title">\${escapeHtml(tx(opts.lang, 'title'))}</h1>
      <p class="tool-lead">\${escapeHtml(description)}</p>
      <p class="${p}-platforms">\${escapeHtml(tx(opts.lang, 'platforms_lead'))}</p>
    </div>

    <div class="tool-panel">
      <div class="row g-3 mb-3">
${fieldsHtml}
      </div>
${mjTable}

      <div class="d-flex align-items-center tools-bar mb-3 flex-wrap gap-2">
        <div class="btn-group btn-group-sm" role="group" aria-label="\${escapeHtml(tx(opts.lang, 'fmt_label'))}">
          <input type="radio" class="btn-check" name="${p}Fmt" id="${p}FmtMd" value="md" checked>
          <label class="btn btn-outline-secondary" for="${p}FmtMd">\${escapeHtml(tx(opts.lang, 'fmt_md'))}</label>
          <input type="radio" class="btn-check" name="${p}Fmt" id="${p}FmtJson" value="json">
          <label class="btn btn-outline-secondary" for="${p}FmtJson">\${escapeHtml(tx(opts.lang, 'fmt_json'))}</label>
        </div>
        <button type="button" id="${p}BtnBuild" class="btn btn-primary btn-sm">\${escapeHtml(tx(opts.lang, 'build'))}</button>
        <button type="button" id="${p}BtnSample" class="btn btn-outline-secondary btn-sm">\${escapeHtml(tx(opts.lang, 'load_sample'))}</button>
        <button type="button" id="${p}BtnCopy" class="btn btn-outline-secondary btn-sm" disabled>\${escapeHtml(tx(opts.lang, 'copy'))}</button>
        <button type="button" id="${p}BtnDownload" class="btn btn-outline-secondary btn-sm" disabled>\${escapeHtml(tx(opts.lang, 'download'))}</button>
        <button type="button" id="${p}BtnClear" class="btn btn-outline-secondary btn-sm">\${escapeHtml(tx(opts.lang, 'clear'))}</button>
      </div>

      \${renderPromptAiPanelHtml({ prefix: DOM_PREFIX, slug: SLUG, labels: aiLabels })}

      <p id="${p}Error" class="alert alert-danger py-2 small mb-2" style="display:none;" role="alert"></p>
      <p id="${p}Status" class="${p}-meta mb-2" role="status"></p>
      <label class="form-label" for="${p}Result">\${escapeHtml(tx(opts.lang, 'result_label'))}</label>
      <pre id="${p}Result" class="${p}-out" aria-live="polite"></pre>
    </div>\`;

	const igHtml = renderToolIgSections({
		lang: opts.lang,
		prefix: PREFIX,
		mode: 'rules',
		usecaseCount: 4,
		ruleItemCount: 4,
		howItemCount: 4,
	});

	const referencesHtml = renderToolReferencesSection({
		lang: opts.lang,
		links: [
			{
				label: 'OpenAI — Prompt engineering guide',
				href: 'https://platform.openai.com/docs/guides/prompt-engineering',
			},
			{
				label: 'Anthropic — Prompt engineering overview',
				href: 'https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview',
			},
		],
	});

	const promptAiScript = renderPromptAiClientScript({
		prefix: DOM_PREFIX,
		slug: SLUG,
		labelsJson: 'aiLabelsJson',
		setErrorFn: 'setError',
		setStatusFn: 'setStatus',
	});

	const extraBodyHtml = \`
  <script>
    (function () {
      var resultEl = document.getElementById('${p}Result');
      var errEl = document.getElementById('${p}Error');
      var statusEl = document.getElementById('${p}Status');
      var btnBuild = document.getElementById('${p}BtnBuild');
      var btnSample = document.getElementById('${p}BtnSample');
      var btnCopy = document.getElementById('${p}BtnCopy');
      var btnDownload = document.getElementById('${p}BtnDownload');
      var btnClear = document.getElementById('${p}BtnClear');
      var aiLabelsJson = \${aiLabelsJson};

      var msg = {
        empty: \${JSON.stringify(tx(opts.lang, 'empty'))},
        working: \${JSON.stringify(tx(opts.lang, 'status_working'))},
        done: \${JSON.stringify(tx(opts.lang, 'status_done'))},
        copied: \${JSON.stringify(tx(opts.lang, 'status_copied'))},
        secRole: \${JSON.stringify(tx(opts.lang, 'sec_role'))},
        secTask: \${JSON.stringify(tx(opts.lang, 'sec_task'))},
        secConstraints: \${JSON.stringify(tx(opts.lang, 'sec_constraints'))},
        secOutput: \${JSON.stringify(tx(opts.lang, 'sec_output'))}
      };

      var lastOut = '';
      var lastExt = 'md';
      var PRESET = ${sampleJson};

      function setError(text) {
        errEl.textContent = text || '';
        errEl.style.display = text ? '' : 'none';
      }

      function setStatus(text) {
        statusEl.textContent = text || '';
      }

      function val(el) {
        return el && el.value ? String(el.value).trim() : '';
      }

      function currentFmt() {
        var el = document.querySelector('input[name="${p}Fmt"]:checked');
        return el && el.value === 'json' ? 'json' : 'md';
      }

      function collectFields() {
        return {
${fieldCollect}
        };
      }

      function isEmpty(o) {
        return !Object.keys(o).some(function (k) { return o[k]; });
      }
${buildLogicJs(t)}

      function toMarkdown(b) {
        return ['## ' + msg.secRole, b.role, '', '## ' + msg.secTask, b.task, '', '## ' + msg.secConstraints, b.constraints, '', '## ' + msg.secOutput, b.output].join('\\\\n');
      }

      function toJson(f, b) {
        return JSON.stringify({ fields: f, role: b.role, task: b.task, constraints: b.constraints, output: b.output }, null, 2);
      }

      function showResult(text, ext) {
        lastOut = text;
        lastExt = ext;
        resultEl.textContent = text;
        btnCopy.disabled = !text;
        btnDownload.disabled = !text;
        setStatus(msg.done);
      }

      function buildPrompt() {
        setError('');
        setStatus(msg.working);
        var f = collectFields();
        if (isEmpty(f)) {
          setError(msg.empty);
          setStatus('');
          return;
        }
        var b = buildBlocks(f);
        var fmt = currentFmt();
        showResult(fmt === 'json' ? toJson(f, b) : toMarkdown(b), fmt === 'json' ? 'json' : 'md');
      }

      function applyPreset() {
        var preset = PRESET;
${fieldSet}
        var mdRadio = document.getElementById('${p}FmtMd');
        if (mdRadio) mdRadio.checked = true;
        buildPrompt();
      }

      /** 进页样例：写入预设并构建 Markdown。 */
      function loadSample() {
        applyPreset();
      }

      function reset() {
        document.querySelectorAll('.${p}-field').forEach(function (el) { el.value = ''; });
        resultEl.textContent = '';
        lastOut = '';
        btnCopy.disabled = true;
        btnDownload.disabled = true;
        setError('');
        setStatus('');
      }

      window.promptAiAssembleInput = function (action) {
        if (action === 'polish' && lastOut) return lastOut;
        var f = collectFields();
        if (isEmpty(f)) return '';
        var b = buildBlocks(f);
        return toMarkdown(b);
      };

      window.promptAiApplyText = function (action, text) {
        if (action === 'polish') {
          showResult(text, currentFmt() === 'json' ? 'json' : 'md');
          return;
        }
        var firstLine = (text || '').split('\\\\n')[0] || '';
        var subj = document.getElementById('${firstFieldDom}');
        if (subj && firstLine) subj.value = firstLine.slice(0, 500);
        buildPrompt();
      };

      btnBuild.addEventListener('click', buildPrompt);
      btnSample.addEventListener('click', loadSample);
      btnClear.addEventListener('click', reset);

      document.querySelectorAll('input[name="${p}Fmt"]').forEach(function (el) {
        el.addEventListener('change', function () {
          if (lastOut || !isEmpty(collectFields())) buildPrompt();
        });
      });

      btnCopy.addEventListener('click', function () {
        if (!lastOut) return;
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(lastOut).then(function () { setStatus(msg.copied); });
        }
      });

      btnDownload.addEventListener('click', function () {
        if (!lastOut) return;
        var blob = new Blob([lastOut], { type: 'text/plain;charset=utf-8' });
        var a = document.createElement('a');
        var url = URL.createObjectURL(blob);
        a.href = url;
        a.download = '${t.slug}.' + lastExt;
        document.body.appendChild(a);
        a.click();
        a.remove();
        URL.revokeObjectURL(url);
      });

\` + promptAiScript + \`

      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', loadSample);
      } else {
        loadSample();
      }
    })();
  </script>
\` + PROMPT_AI_TURNSTILE_SCRIPT;

	const toolMeta = getToolBySlug(SLUG);
	const toolSeoHtml = toolMeta
		? renderToolExtraSections({ lang: opts.lang, defaultLang: opts.defaultLang, tool: toolMeta })
		: '';
	const toolJsonLd = toolMeta
		? buildToolJsonLd({
				lang: opts.lang,
				defaultLang: opts.defaultLang,
				tool: toolMeta,
				name: tx(opts.lang, 'title'),
				description,
				canonicalPath,
			})
		: '';

	return renderLayout({
		lang: opts.lang,
		title,
		description,
		canonicalPath,
		ogImageUrl: 'https://onlinefreetools.org/og-image.png',
		ogType: 'website',
		alternates,
		headerHtml,
		sidebarHtml,
		contentHtml: \`\${contentHtml}\${igHtml}\${toolSeoHtml}\${referencesHtml}\`,
		footerHtml,
		extraHeadHtml: \`\${extraHeadHtml}\${toolJsonLd}\`,
		extraBodyHtml,
		includeSidebarToggleScript: true,
		sidebarAutoCloseSelector: '#toolNav a',
	});
};
`;

	const outPath = path.join(root, 'src/pages', `${t.camel}Page.ts`);
	fs.writeFileSync(outPath, page);
};
for (const tool of TOOLS) {
	writeCatalog(tool);
	writeIcon(tool);
	writeEn(tool);
	write02(tool);
	write03(tool);
	writePage(tool);
	console.log('wrote', tool.slug);
}

console.log('done', TOOLS.length, 'tools');
