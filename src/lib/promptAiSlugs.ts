/**
 * Prompt 工具簇：允许调用 Workers AI Expand/Polish 的 catalog slug 白名单。
 * 与 topic `ai-prompt-template-builder` 成员一致；Worker 路由与 Turnstile action 校验用。
 */
export const PROMPT_AI_SLUGS = [
	'prompt-template-builder',
	'writing-prompt-generator',
	'midjourney-prompt-builder',
	'sketch-prompt-generator',
	'film-prompt-builder',
	'short-drama-prompt-generator',
	'product-design-prompt-builder',
	'android-prompt-builder',
	'ios-prompt-builder',
] as const;

/** Prompt AI 白名单 slug 类型。 */
export type PromptAiSlug = (typeof PROMPT_AI_SLUGS)[number];

/**
 * 判断 slug 是否在 Prompt AI 白名单内。
 * @param slug catalog slug
 */
export const isPromptAiSlug = (slug: string): slug is PromptAiSlug =>
	(PROMPT_AI_SLUGS as readonly string[]).includes(slug);

/**
 * 各场景 slug 的 Workers AI system 提示 domain hint（追加在通用 Expand/Polish 指令后）。
 * @param slug 白名单 slug
 */
export const promptAiDomainHint = (slug: PromptAiSlug): string => {
	const hints: Record<PromptAiSlug, string> = {
		'prompt-template-builder':
			'Context: generic Role/Task/Constraints/Output template builder for ChatGPT, Gemini, Claude, or DeepSeek.',
		'writing-prompt-generator':
			'Context: creative writing prompts — dialogue, character, script beats, or random story starters.',
		'midjourney-prompt-builder':
			'Context: Midjourney image prompt — subject, style, lighting, aspect ratio; include --ar or --v when relevant.',
		'sketch-prompt-generator':
			'Context: sketch or line-art image prompt — medium, stroke weight, composition, artist reference.',
		'film-prompt-builder':
			'Context: feature film or screenplay — logline, three-act beats, scene list, character arc.',
		'short-drama-prompt-generator':
			'Context: vertical short drama serial — episode hooks, cliffhangers, episode count, mobile format.',
		'product-design-prompt-builder':
			'Context: product/UX design brief — persona, problem, wireframe scope, design tokens.',
		'android-prompt-builder':
			'Context: Android dev agent — Kotlin, Jetpack Compose, feature spec, Gradle constraints.',
		'ios-prompt-builder':
			'Context: iOS dev agent — Swift, SwiftUI, feature spec, Apple HIG constraints.',
	};
	return hints[slug];
};
