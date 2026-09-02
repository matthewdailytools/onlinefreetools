/**
 * Topic leaf H1 启发式：禁止把站点内部名词（page / 页）当成产品名；
 * `ai-prompt-template-builder` 须写出 builder/generator（当地说法）并覆盖簇内场景。
 * `lint:seo` 读生成物；`build:topic-ig` 请直接 import `checkTopicLeafTitle`（避免生成时加载旧扁平文件）。
 */
import { topicIgTranslations } from './site/i18n-topic-ig.mjs';
import {
	isTopicLeafH1Key,
	topicIdFromLeafTitleKey,
	checkTopicLeafTitle,
} from './lib/topic-title-heuristics.mjs';

export { checkTopicLeafTitle } from './lib/topic-title-heuristics.mjs';

/**
 * 校验已生成的 topic IG 文案（`lint:seo` 用）。
 * @returns {string[]} 失败说明（空数组 = 通过）
 */
export const validateTopicLeafTitles = () => {
	/** @type {string[]} */
	const errors = [];
	for (const [lang, keys] of Object.entries(topicIgTranslations || {})) {
		if (!keys || typeof keys !== 'object') continue;
		for (const [key, value] of Object.entries(keys)) {
			if (!isTopicLeafH1Key(key)) continue;
			errors.push(
				...checkTopicLeafTitle(lang, topicIdFromLeafTitleKey(key), String(value || ''))
			);
		}
	}
	return errors;
};
