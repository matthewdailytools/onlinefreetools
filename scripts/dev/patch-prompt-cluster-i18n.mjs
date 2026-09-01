/**
 * 批量 patch prompt 工具簇 i18n：title（含本地+可选 AI）、desc/description、ai_*、FAQ 隐私/AI。
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const toolsDir = path.join(root, 'src/site/i18n/tools');

const SLUGS = [
	'prompt-template-builder',
	'writing-prompt-generator',
	'midjourney-prompt-builder',
	'sketch-prompt-generator',
	'film-prompt-builder',
	'short-drama-prompt-generator',
	'product-design-prompt-builder',
	'android-prompt-builder',
	'ios-prompt-builder',
];

const LANGS = ['en', 'zh', 'es', 'ar', 'pt', 'id', 'fr', 'ja', 'ru', 'de'];

const AI_SUFFIX = {
	en: ' — Local + Optional AI',
	zh: ' — 本地 + 可选 AI',
	es: ' — Local + IA opcional',
	ar: ' — محلي + ذكاء اصطناعي اختياري',
	pt: ' — Local + IA opcional',
	id: ' — Lokal + AI opsional',
	fr: ' — Local + IA optionnelle',
	ja: ' — ローカル + オプションAI',
	ru: ' — Локально + опциональный ИИ',
	de: ' — Lokal + optionale KI',
};

const TITLE_BASE = {
	'prompt-template-builder': {
		en: 'Prompt template builder',
		zh: 'Prompt 模板构建器',
		es: 'Constructor de plantillas de Prompt',
		ar: 'منشئ قوالب Prompt',
		pt: 'Construtor de modelos de Prompt',
		id: 'Pembuat templat Prompt',
		fr: 'Générateur de modèles de Prompt',
		ja: 'Promptテンプレートビルダー',
		ru: 'Конструктор шаблонов Prompt',
		de: 'Prompt-Vorlagen-Builder',
	},
	'writing-prompt-generator': {
		en: 'Writing prompt generator',
		zh: '写作 Prompt 生成器',
		es: 'Generador de prompts de escritura',
		ar: 'مولّد prompts للكتابة',
		pt: 'Gerador de prompts de escrita',
		id: 'Generator prompt menulis',
		fr: 'Générateur de prompts d\'écriture',
		ja: 'ライティングPromptジェネレーター',
		ru: 'Генератор writing prompt',
		de: 'Schreib-Prompt-Generator',
	},
	'midjourney-prompt-builder': {
		en: 'Midjourney prompt builder',
		zh: 'Midjourney Prompt 构建器',
		es: 'Constructor de prompts Midjourney',
		ar: 'منشئ prompts Midjourney',
		pt: 'Construtor de prompts Midjourney',
		id: 'Pembuat prompt Midjourney',
		fr: 'Constructeur de prompts Midjourney',
		ja: 'Midjourney Promptビルダー',
		ru: 'Конструктор Midjourney prompt',
		de: 'Midjourney-Prompt-Builder',
	},
	'sketch-prompt-generator': {
		en: 'Sketch prompt generator',
		zh: '素描 Prompt 生成器',
		es: 'Generador de prompts de boceto',
		ar: 'مولّد prompts للرسم',
		pt: 'Gerador de prompts de esboço',
		id: 'Generator prompt sketsa',
		fr: 'Générateur de prompts de croquis',
		ja: 'スケッチPromptジェネレーター',
		ru: 'Генератор sketch prompt',
		de: 'Skizzen-Prompt-Generator',
	},
	'film-prompt-builder': {
		en: 'Film prompt builder',
		zh: '电影 Prompt 构建器',
		es: 'Constructor de prompts de cine',
		ar: 'منشئ prompts للأفلام',
		pt: 'Construtor de prompts de filme',
		id: 'Pembuat prompt film',
		fr: 'Constructeur de prompts cinéma',
		ja: '映画Promptビルダー',
		ru: 'Конструктор film prompt',
		de: 'Film-Prompt-Builder',
	},
	'short-drama-prompt-generator': {
		en: 'Short drama prompt generator',
		zh: '短剧 Prompt 生成器',
		es: 'Generador de prompts de drama corto',
		ar: 'مولّد prompts للدراما القصيرة',
		pt: 'Gerador de prompts de drama curto',
		id: 'Generator prompt drama pendek',
		fr: 'Générateur de prompts de mini-série',
		ja: 'ショートドラマPromptジェネレーター',
		ru: 'Генератор short drama prompt',
		de: 'Kurzdrama-Prompt-Generator',
	},
	'product-design-prompt-builder': {
		en: 'Product design prompt builder',
		zh: '产品设计 Prompt 构建器',
		es: 'Constructor de prompts de diseño de producto',
		ar: 'منشئ prompts لتصميم المنتج',
		pt: 'Construtor de prompts de design de produto',
		id: 'Pembuat prompt desain produk',
		fr: 'Constructeur de prompts design produit',
		ja: 'プロダクトデザインPromptビルダー',
		ru: 'Конструктор product design prompt',
		de: 'Produktdesign-Prompt-Builder',
	},
	'android-prompt-builder': {
		en: 'Android prompt builder',
		zh: 'Android Prompt 构建器',
		es: 'Constructor de prompts Android',
		ar: 'منشئ prompts لـ Android',
		pt: 'Construtor de prompts Android',
		id: 'Pembuat prompt Android',
		fr: 'Constructeur de prompts Android',
		ja: 'Android Promptビルダー',
		ru: 'Конструктор Android prompt',
		de: 'Android-Prompt-Builder',
	},
	'ios-prompt-builder': {
		en: 'iOS prompt builder',
		zh: 'iOS Prompt 构建器',
		es: 'Constructor de prompts iOS',
		ar: 'منشئ prompts لـ iOS',
		pt: 'Construtor de prompts iOS',
		id: 'Pembuat prompt iOS',
		fr: 'Constructeur de prompts iOS',
		ja: 'iOS Promptビルダー',
		ru: 'Конструктор iOS prompt',
		de: 'iOS-Prompt-Builder',
	},
};

const PATCH = {
	en: {
		desc: (b) => `${b} — local default + optional Cloudflare AI Expand/Polish (Turnstile); Markdown/JSON on device.`,
		description: (b) =>
			`${b} — Local + Optional AI for ChatGPT, Gemini, Claude, and DeepSeek: assemble structured prompts locally by default, then optionally Expand/Polish via Cloudflare Workers AI (Turnstile required, rate-limited). Example runs on first paint. Markdown default; JSON for pipelines. Local text stays on your device unless you use optional AI.`,
		ai: {
			ai_expand: 'Expand with AI',
			ai_polish: 'Polish with AI',
			ai_panel_label: 'Optional Cloudflare AI (Turnstile)',
			ai_consent_title: 'Send text to Cloudflare Workers AI?',
			ai_consent_body:
				'This optional step sends your current draft to Cloudflare Workers AI for inference. It is not sent to OpenAI, Google, Anthropic, or DeepSeek from our servers. Local assembly still works without AI.',
			ai_consent_ok: 'Continue',
			ai_consent_cancel: 'Cancel',
			ai_working: 'Cloudflare AI is working…',
			ai_done: 'AI suggestion applied. Review before copying.',
			ai_err_generic: 'AI failed. Your local prompt is unchanged.',
			ai_err_rate: 'AI quota reached. Use local mode or try tomorrow (UTC).',
			ai_err_turnstile: 'Complete the Turnstile check before using AI.',
		},
		faq_a1:
			'Local assembly runs in this browser tab — nothing is uploaded by default. Optional Expand/Polish sends only the text you submit for that click to Cloudflare Workers AI, not to OpenAI, Google, Anthropic, or DeepSeek from our servers.',
		faq_a2:
			'Local mode only formats your fields in this tab. Optional Expand/Polish uses Cloudflare Workers AI after a Turnstile check — it does not call ChatGPT, Gemini, Claude, or DeepSeek APIs from our servers.',
		faq_q4: 'Why do I need Turnstile for optional AI?',
		faq_a4:
			'Yes. Complete the Turnstile widget in the optional AI panel before Expand or Polish. Without a valid token, AI buttons show an error and local mode still works.',
		faq_q7: 'What is the difference between local and optional Cloudflare AI?',
		faq_a7:
			'Local mode formats your fields in this tab only — nothing is uploaded. Optional Expand/Polish sends the text you submit for that click to Cloudflare Workers AI (rate-limited, Turnstile required). On failure or quota, keep using local mode.',
	},
	zh: {
		desc: (b) => `${b} — 默认本地组装，可选 Cloudflare AI 扩写/润色（Turnstile）；Markdown/JSON 留在本机。`,
		description: (b) =>
			`${b} — 本地 + 可选 AI：面向 ChatGPT、Gemini、Claude、DeepSeek，默认在本浏览器本地组装 Prompt，可选 Cloudflare Workers AI 扩写/润色（须 Turnstile、有频率限制）。进页自动展示样例。默认 Markdown；JSON 便于流水线。不用 AI 时文本不出本机。`,
		ai: {
			ai_expand: 'AI 扩写',
			ai_polish: 'AI 润色',
			ai_panel_label: '可选 Cloudflare AI（Turnstile）',
			ai_consent_title: '发送到 Cloudflare Workers AI？',
			ai_consent_body:
				'此可选步骤会把当前草稿发往 Cloudflare Workers AI；不会从我们的服务器调用 OpenAI、Google、Anthropic 或 DeepSeek。不用 AI 也能本地组装。',
			ai_consent_ok: '继续',
			ai_consent_cancel: '取消',
			ai_working: 'Cloudflare AI 处理中…',
			ai_done: '已应用 AI 建议，复制前请核对。',
			ai_err_generic: 'AI 失败，本地 Prompt 未改。',
			ai_err_rate: 'AI 配额已满，请用本地模式或明日（UTC）再试。',
			ai_err_turnstile: '使用 AI 前请完成 Turnstile 验证。',
		},
		faq_a1:
			'默认只在本浏览器标签页本地组装。可选「AI 扩写/润色」仅把该次点击提交的文字发往 Cloudflare Workers AI，不会从我们的服务器调用 OpenAI、Google、Anthropic 或 DeepSeek。',
		faq_a2:
			'本地模式只在本标签页整理字段，不调用 ChatGPT、Gemini、Claude、DeepSeek API。可选 AI 使用 Cloudflare Workers AI（须 Turnstile）。',
		faq_q4: '为什么可选 AI 需要 Turnstile？',
		faq_a4: '可以。使用 Expand/Polish 前须在可选 AI 面板完成 Turnstile；无有效 token 时 AI 按钮报错，本地模式仍可用。',
		faq_q7: '本地模式与可选 Cloudflare AI 有何区别？',
		faq_a7:
			'本地模式只在本标签页整理文字，不上传。可选 Expand/Polish 发往 Cloudflare Workers AI（须 Turnstile、有频率限制）。失败或超额时继续用本地模式。',
	},
	es: {
		desc: (b) => `${b} — local por defecto + Expand/Polish opcional Cloudflare AI (Turnstile); Markdown/JSON en el dispositivo.`,
		description: (b) =>
			`${b} — Local + IA opcional para ChatGPT, Gemini, Claude y DeepSeek: ensambla prompts localmente por defecto y opcionalmente Expand/Polish con Cloudflare Workers AI (Turnstile obligatorio, límite de uso). Ejemplo al abrir. Markdown por defecto; JSON para pipelines. Texto en el dispositivo salvo que uses IA.`,
		ai: {
			ai_expand: 'Expandir con IA',
			ai_polish: 'Pulir con IA',
			ai_panel_label: 'Cloudflare AI opcional (Turnstile)',
			ai_consent_title: '¿Enviar texto a Cloudflare Workers AI?',
			ai_consent_body:
				'Este paso opcional envía tu borrador a Cloudflare Workers AI. No va a OpenAI, Google, Anthropic ni DeepSeek desde nuestros servidores.',
			ai_consent_ok: 'Continuar',
			ai_consent_cancel: 'Cancelar',
			ai_working: 'Cloudflare AI trabajando…',
			ai_done: 'Sugerencia de IA aplicada. Revisa antes de copiar.',
			ai_err_generic: 'La IA falló. Tu prompt local no cambió.',
			ai_err_rate: 'Cuota de IA agotada. Modo local o prueba mañana (UTC).',
			ai_err_turnstile: 'Completa Turnstile antes de usar IA.',
		},
		faq_a1:
			'Por defecto el ensamblaje es local en esta pestaña. Expand/Polish opcional envía solo el texto de ese clic a Cloudflare Workers AI.',
		faq_a2:
			'Modo local solo formatea aquí. Expand/Polish opcional usa Cloudflare Workers AI tras Turnstile — no llama APIs de chat.',
		faq_q4: '¿Por qué Turnstile para IA opcional?',
		faq_a4: 'Sí. Completa Turnstile en el panel de IA antes de Expand o Polish.',
		faq_q7: '¿Diferencia entre local y Cloudflare AI opcional?',
		faq_a7: 'Local: solo esta pestaña, sin subida. Expand/Polish opcional a Cloudflare Workers AI (Turnstile, límite).',
	},
	ja: {
		desc: (b) => `${b} — ローカル既定、任意 Cloudflare AI 拡張/推敲（Turnstile）；Markdown/JSON は端末内。`,
		description: (b) =>
			`${b} — ローカル + オプションAI（ChatGPT/Gemini/Claude/DeepSeek）：既定はブラウザ内ローカル組み立て、任意で Cloudflare Workers AI Expand/Polish（Turnstile 必須・レート制限）。初回表示でサンプル。Markdown 既定。AI 未使用時は端末外に出ません。`,
		ai: {
			ai_expand: 'AI で拡張',
			ai_polish: 'AI で推敲',
			ai_panel_label: '任意 Cloudflare AI（Turnstile）',
			ai_consent_title: 'Cloudflare Workers AI に送信しますか？',
			ai_consent_body: '任意のステップで下書きを Cloudflare Workers AI に送ります。当サーバーから OpenAI 等には送りません。',
			ai_consent_ok: '続行',
			ai_consent_cancel: 'キャンセル',
			ai_working: 'Cloudflare AI 処理中…',
			ai_done: 'AI 提案を適用しました。コピー前に確認してください。',
			ai_err_generic: 'AI 失敗。ローカル Prompt は変更されていません。',
			ai_err_rate: 'AI クォータ到達。ローカルモードか明日（UTC）再試行。',
			ai_err_turnstile: 'AI 利用前に Turnstile を完了してください。',
		},
		faq_a1: '既定はこのタブ内ローカル。任意 Expand/Polish はそのクリック分のみ Cloudflare Workers AI へ。',
		faq_a2: 'ローカルはこのタブのみ。任意 AI は Turnstile 後 Cloudflare Workers AI — チャット API は呼びません。',
		faq_q4: '任意 AI に Turnstile が必要な理由は？',
		faq_a4: 'はい。Expand/Polish 前に Turnstile を完了してください。',
		faq_q7: 'ローカルと任意 Cloudflare AI の違いは？',
		faq_a7: 'ローカルはこのタブのみ非アップロード。任意 Expand/Polish は Cloudflare Workers AI（Turnstile・制限）。',
	},
};

/** 为 ar/pt/id/fr/ru/de 复制 es 结构并简调 */
for (const lang of ['ar', 'pt', 'id', 'fr', 'ru', 'de']) {
	if (!PATCH[lang]) {
		PATCH[lang] = {
			...PATCH.es,
			desc: PATCH.es.desc,
			description: PATCH.es.description,
			ai: { ...PATCH.es.ai },
		};
	}
}

/**
 * 替换或插入键值。
 * @param {string} code
 * @param {string} key
 * @param {string} val
 */
function setKey(code, key, val) {
	const escaped = val.replace(/\\/g, '\\\\').replace(/'/g, "\\'");
	const re = new RegExp(`\\t${key}:\\s*\\n?\\s*'(?:\\\\'|[^'])*',?`, 'm');
	const line = `\t${key}:\n\t\t'${escaped}',`;
	if (re.test(code)) return code.replace(re, line);
	const insertAt = code.lastIndexOf('};');
	return code.slice(0, insertAt) + line + '\n' + code.slice(insertAt);
}

function prefix(slug) {
	return `tool_${slug.replace(/-/g, '_')}`;
}

for (const slug of SLUGS) {
	const p = prefix(slug);
	for (const lang of LANGS) {
		const fp = path.join(toolsDir, slug, `${lang}.ts`);
		if (!fs.existsSync(fp)) continue;
		let code = fs.readFileSync(fp, 'utf8');
		const base = TITLE_BASE[slug][lang];
		const patch = PATCH[lang] || PATCH.en;

		code = setKey(code, `${p}_title`, base + AI_SUFFIX[lang]);
		code = setKey(code, `${p}_desc`, patch.desc(base));
		code = setKey(code, `${p}_description`, patch.description(base));

		for (const [k, v] of Object.entries(patch.ai)) {
			code = setKey(code, `${p}_${k}`, v);
		}
		code = setKey(code, `${p}_faq_a1`, patch.faq_a1);
		code = setKey(code, `${p}_faq_a2`, patch.faq_a2);
		if (patch.faq_q4) code = setKey(code, `${p}_faq_q4`, patch.faq_q4);
		if (patch.faq_a4) code = setKey(code, `${p}_faq_a4`, patch.faq_a4);
		if (patch.faq_q7) code = setKey(code, `${p}_faq_q7`, patch.faq_q7);
		if (patch.faq_a7) code = setKey(code, `${p}_faq_a7`, patch.faq_a7);

		fs.writeFileSync(fp, code, 'utf8');
		console.log(`patched ${slug}/${lang}.ts`);
	}
}
