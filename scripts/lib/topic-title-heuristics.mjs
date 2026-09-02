/**
 * Topic 叶子 H1 启发式常量与单条校验（不读生成物，供 build:topic-ig 在扁平化前调用）。
 */

/**
 * 叶子 H1 键：`topic_{id}_title`，排除 table/example/choose/limits/guide 标题。
 * @param {string} key i18n 键
 * @returns {boolean} 是否为叶子页 H1
 */
export const isTopicLeafH1Key = (key) =>
	/^topic_[a-z0-9_]+_title$/.test(key) &&
	!/_(table|example|choose|limits|guide)_title$/.test(key);

/**
 * 「选哪张 X 页 / which X page」等同构机翻：把网站 chrome 当成用户会搜的产品类型。
 * 表头、FAQ、正文仍可用 page 指具体 URL；H1 不行。
 */
export const SITE_CHROME_TITLE_RES = [
	/\bwhich\s+\w+\s+page\b/i,
	/\bprompt page\b/i,
	/\bcompare page\b/i,
	/qué página de/i,
	/quelle page de/i,
	/qual página de/i,
	/welche\s+[\w-]*seite/i,
	/halaman prompt/i,
	/选哪张.{0,16}页/,
	/哪个.{0,8}页/,
	/どの.{0,20}ページ/,
	/какая страница/,
	/أي صفحة/,
];

/**
 * Prompt 簇各语须出现的产品类型（用户搜 builder/generator，不是 page）。
 * @type {Record<string, RegExp>}
 */
export const PROMPT_PRODUCT_TYPE = {
	en: /\bbuilders?\b|\bgenerators?\b/i,
	zh: /构建器|生成器/,
	es: /constructor|generador/i,
	ar: /منشئ|مولد|مولّد/,
	pt: /construtor|gerador/i,
	id: /pembuat|generator/i,
	fr: /constructeur|générateur/i,
	ja: /ビルダー|ジェネレーター/,
	ru: /конструктор|генератор/i,
	de: /Builder|Generator/i,
};

/**
 * Prompt 簇场景词：H1 须覆盖绝大多数独立场景，禁止只抽 3 个填「A、B or C」模板。
 * @type {Record<string, string[]>}
 */
export const PROMPT_SCENE_TOKENS = {
	en: ['writing', 'midjourney', 'sketch', 'film', 'drama', 'product', 'android', 'ios'],
	zh: ['写作', 'midjourney', '线稿', '电影', '短剧', '产品', 'android', 'ios'],
	es: ['escritura', 'midjourney', 'boceto', 'cine', 'drama', 'producto', 'android', 'ios'],
	ar: ['كتابة', 'midjourney', 'رسم', 'سينما', 'دراما', 'تصميم', 'android', 'ios'],
	pt: ['escrita', 'midjourney', 'esboço', 'filme', 'drama', 'produto', 'android', 'ios'],
	id: ['tulisan', 'midjourney', 'sketsa', 'film', 'drama', 'desain', 'android', 'ios'],
	fr: ['écriture', 'midjourney', 'croquis', 'film', 'drama', 'produit', 'android', 'ios'],
	ja: ['執筆', 'midjourney', '線画', '映画', 'ドラマ', 'デザイン', 'android', 'ios'],
	ru: ['текст', 'midjourney', 'скетч', 'кино', 'драм', 'дизайн', 'android', 'ios'],
	de: ['schreiben', 'midjourney', 'skizze', 'film', 'drama', 'produkt', 'android', 'ios'],
};

/** 场景词至少命中数（9 个工具里 S0 通用模板可不单独点名）。 */
export const MIN_PROMPT_SCENE_HITS = 6;

/**
 * 统计 title 命中了多少个场景词（大小写不敏感）。
 * @param {string} title H1 文案
 * @param {string[]} tokens 场景词
 * @returns {number} 命中个数
 */
export const countSceneHits = (title, tokens) => {
	const lower = String(title).toLowerCase();
	return tokens.filter((tok) => lower.includes(String(tok).toLowerCase())).length;
};

/**
 * 从扁平化键还原 topic id（`topic_ai_prompt_template_builder_title` → `ai-prompt-template-builder`）。
 * @param {string} key 叶子 H1 键
 * @returns {string} topic id
 */
export const topicIdFromLeafTitleKey = (key) =>
	key.replace(/^topic_/, '').replace(/_title$/, '').replace(/_/g, '-');

/**
 * 校验单条叶子 H1（生成前即可调用，不依赖扁平化产物）。
 * @param {string} lang 语言码
 * @param {string} topicId topic id（kebab）
 * @param {string} title H1 文案
 * @returns {string[]} 失败说明
 */
export const checkTopicLeafTitle = (lang, topicId, title) => {
	/** @type {string[]} */
	const errors = [];
	const text = String(title || '');
	const label = `${lang} ${topicId}`;
	for (const re of SITE_CHROME_TITLE_RES) {
		if (re.test(text)) {
			errors.push(`${label}: H1 把站点 chrome（page/页）当成产品名 — "${text}"`);
			break;
		}
	}
	if (topicId === 'ai-prompt-template-builder') {
		if (!text) {
			errors.push(`${label}: missing title`);
			return errors;
		}
		const productRe = PROMPT_PRODUCT_TYPE[lang];
		if (productRe && !productRe.test(text)) {
			errors.push(`${label}: 须点名 builder/generator（当地说法），禁止 prompt page — "${text}"`);
		}
		const tokens = PROMPT_SCENE_TOKENS[lang];
		if (tokens) {
			const hits = countSceneHits(text, tokens);
			if (hits < MIN_PROMPT_SCENE_HITS) {
				errors.push(
					`${label}: 场景覆盖 ${hits}/${tokens.length}（至少 ${MIN_PROMPT_SCENE_HITS}）— "${text}"`
				);
			}
		}
	}
	return errors;
};
