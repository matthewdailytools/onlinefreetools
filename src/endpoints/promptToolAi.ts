/**
 * Prompt 工具簇 — 可选 Cloudflare Workers AI（Expand / Polish）。
 * 路由：`GET|POST /api/tools/:slug/ai`（`:slug` 须在 PROMPT_AI_SLUGS 白名单）
 * 兼容：`GET|POST /api/tools/prompt-template-builder/ai`（旧路径保留）
 */
import type { Context } from 'hono';
import { isAllowedSiteRequest, parseAllowedOrigins } from '../lib/allowedSiteOrigin';
import { allowMinuteRate, checkPromptAiDailyLimits } from '../lib/promptAiRateLimit';
import {
	isPromptAiSlug,
	promptAiDomainHint,
	type PromptAiSlug,
} from '../lib/promptAiSlugs';
import { verifyTurnstileToken } from './turnstileSiteverify';

/** 允许的 action 白名单。 */
const ACTIONS = new Set(['expand', 'polish']);

/** Worker 推理硬超时（毫秒）。 */
const AI_TIMEOUT_MS = 25_000;

/** 默认模型（可被 env.PROMPT_AI_MODEL 覆盖）。 */
const DEFAULT_MODEL = '@cf/meta/llama-3.2-1b-instruct';

/** JSON 错误响应体。 */
interface AiErrorBody {
	ok: false;
	code: string;
	message: string;
}

/** JSON 成功响应体。 */
interface AiOkBody {
	ok: true;
	text: string;
	model: string;
	action: string;
	slug: string;
}

/**
 * 读取客户端 IP。
 * @param c Hono 上下文
 */
const clientIp = (c: Context): string => {
	const cf = c.req.header('CF-Connecting-IP');
	if (cf?.trim()) return cf.trim();
	const xff = c.req.header('X-Forwarded-For');
	if (xff) {
		const first = xff.split(',')[0]?.trim();
		if (first) return first;
	}
	return 'unknown';
};

/**
 * 解析正整数 env，带默认值。
 * @param raw 环境变量字符串
 * @param fallback 默认值
 */
const envInt = (raw: string | undefined, fallback: number): number => {
	const n = Number.parseInt(String(raw ?? ''), 10);
	return Number.isFinite(n) && n > 0 ? n : fallback;
};

/**
 * 是否启用 Prompt AI（`PROMPT_AI_ENABLED` !== false/0/off）。
 * @param raw 环境变量
 */
export const isPromptAiEnabled = (raw: string | undefined): boolean => {
	const v = String(raw ?? 'true').trim().toLowerCase();
	return v !== 'false' && v !== '0' && v !== 'off';
};

/**
 * 从路由或 query 解析 slug 并校验白名单。
 * @param c Hono 上下文
 */
const resolveSlug = (c: Context): PromptAiSlug | null => {
	const fromParam = c.req.param('slug')?.trim();
	if (fromParam && isPromptAiSlug(fromParam)) return fromParam;
	const path = c.req.path;
	const m = path.match(/\/api\/tools\/([^/]+)\/ai/);
	if (m?.[1] && isPromptAiSlug(m[1])) return m[1];
	return null;
};

/**
 * 从 Workers AI 响应中提取文本。
 * @param result env.AI.run 返回值
 */
const extractAiText = (result: unknown): string => {
	if (result == null) return '';
	if (typeof result === 'string') return result.trim();
	if (typeof result !== 'object') return String(result).trim();

	const r = result as Record<string, unknown>;
	if (typeof r.response === 'string') return r.response.trim();

	const choices = r.choices;
	if (Array.isArray(choices) && choices[0] && typeof choices[0] === 'object') {
		const msg = (choices[0] as { message?: { content?: string } }).message;
		if (msg && typeof msg.content === 'string') return msg.content.trim();
	}

	return JSON.stringify(result);
};

/**
 * 构建 Expand / Polish 的 system 提示（含场景 domain hint）。
 * @param action expand | polish
 * @param slug 白名单 slug
 */
const systemPromptFor = (action: string, slug: PromptAiSlug): string => {
	const hint = promptAiDomainHint(slug);
	if (action === 'polish') {
		return [
			'You rewrite user text into a clearer, reusable AI prompt.',
			'Keep Role, Task, Constraints, and Output structure when present.',
			'Output only the improved prompt text — no preamble.',
			hint,
		].join(' ');
	}
	return [
		'You expand a short draft into structured prompt fields or a complete prompt block.',
		'Output plain text with lines starting Role:, Task:, Constraints:, Output: when possible.',
		'No markdown fences; no commentary.',
		hint,
	].join(' ');
};

/**
 * GET /api/tools/:slug/ai/health — 不调用模型。
 */
export const handlePromptToolAiHealth = async (c: Context) => {
	const slug = resolveSlug(c);
	if (!slug) {
		return c.json({ ok: false, code: 'bad_slug', message: 'Unknown or missing prompt tool slug.' }, 404);
	}
	const enabled = isPromptAiEnabled(c.env.PROMPT_AI_ENABLED);
	const hasAi = Boolean(c.env.AI);
	const hasKv = Boolean(c.env.RATE_LIMIT_KV);
	return c.json({
		ok: true,
		slug,
		enabled,
		hasAiBinding: hasAi,
		hasRateLimitKv: hasKv,
		model: String(c.env.PROMPT_AI_MODEL || DEFAULT_MODEL),
	});
};

/**
 * POST /api/tools/:slug/ai
 * Body: { action, input, turnstile?, locale?, maxTokens? }
 */
export const handlePromptToolAi = async (c: Context) => {
	const slug = resolveSlug(c);
	if (!slug) {
		return c.json<AiErrorBody>(
			{ ok: false, code: 'bad_slug', message: 'Unknown or missing prompt tool slug.' },
			404,
		);
	}

	if (!isPromptAiEnabled(c.env.PROMPT_AI_ENABLED)) {
		return c.json<AiErrorBody>(
			{ ok: false, code: 'disabled', message: 'Prompt AI is temporarily disabled.' },
			503,
		);
	}

	if (!c.env.AI) {
		return c.json<AiErrorBody>(
			{ ok: false, code: 'no_binding', message: 'Workers AI binding is not configured.' },
			503,
		);
	}

	const allowed = parseAllowedOrigins(c.env.SITE_ALLOWED_ORIGINS);
	if (!isAllowedSiteRequest(c.req.header('Origin'), c.req.header('Referer'), allowed)) {
		return c.json<AiErrorBody>(
			{ ok: false, code: 'origin', message: 'Request origin is not allowed.' },
			403,
		);
	}

	let body: {
		action?: string;
		input?: string;
		turnstile?: string;
		locale?: string;
		maxTokens?: number;
	};
	try {
		body = await c.req.json();
	} catch {
		return c.json<AiErrorBody>(
			{ ok: false, code: 'bad_json', message: 'Invalid JSON body.' },
			400,
		);
	}

	const action = String(body.action || '').trim().toLowerCase();
	if (!ACTIONS.has(action)) {
		return c.json<AiErrorBody>(
			{ ok: false, code: 'bad_action', message: 'action must be expand or polish.' },
			400,
		);
	}

	const input = String(body.input || '').trim();
	const maxInput = envInt(c.env.PROMPT_AI_MAX_INPUT_CHARS, 6000);
	if (!input) {
		return c.json<AiErrorBody>(
			{ ok: false, code: 'empty_input', message: 'input is required.' },
			400,
		);
	}
	if (input.length > maxInput) {
		return c.json<AiErrorBody>(
			{ ok: false, code: 'input_too_long', message: `input exceeds ${maxInput} characters.` },
			400,
		);
	}

	const turnstileToken =
		String(body.turnstile || '').trim() ||
		c.req.header('cf-turnstile-response')?.trim() ||
		c.req.header('x-turnstile-token')?.trim() ||
		'';

	const secret = String(c.env.TURNSTILE_SECRET_KEY || '');
	const captcha = await verifyTurnstileToken(secret, turnstileToken, clientIp(c));
	if (!captcha.ok) {
		const status = captcha.error === 'Turnstile is not configured' ? 503 : 403;
		return c.json<AiErrorBody>(
			{ ok: false, code: 'turnstile', message: captcha.error },
			status,
		);
	}

	const ip = clientIp(c);
	const minuteLimit = envInt(c.env.PROMPT_AI_MINUTE_LIMIT_PER_IP, 4);
	if (!allowMinuteRate(ip, minuteLimit)) {
		return c.json<AiErrorBody>(
			{ ok: false, code: 'rate_limit_minute', message: 'Too many requests. Try again in a minute.' },
			429,
		);
	}

	const ipDaily = envInt(c.env.PROMPT_AI_DAILY_LIMIT_PER_IP, 8);
	const siteDaily = envInt(c.env.PROMPT_AI_SITE_DAILY_LIMIT, 200);
	const daily = await checkPromptAiDailyLimits({
		kv: c.env.RATE_LIMIT_KV,
		ip,
		ipDailyLimit: ipDaily,
		siteDailyLimit: siteDaily,
	});
	if (!daily.ok) {
		return c.json<AiErrorBody>(
			{
				ok: false,
				code: daily.code,
				message:
					daily.code === 'rate_limit_site'
						? 'Daily AI quota reached for this site. Use local mode or try tomorrow (UTC).'
						: 'Daily AI quota reached for your IP. Use local mode or try tomorrow (UTC).',
			},
			429,
		);
	}

	const model = String(c.env.PROMPT_AI_MODEL || DEFAULT_MODEL).trim() || DEFAULT_MODEL;
	const maxTokensCap = envInt(c.env.PROMPT_AI_MAX_OUTPUT_TOKENS, 384);
	const requested = Number(body.maxTokens);
	const maxTokens =
		Number.isFinite(requested) && requested > 0
			? Math.min(requested, maxTokensCap)
			: maxTokensCap;

	const controller = new AbortController();
	const timer = setTimeout(() => controller.abort(), AI_TIMEOUT_MS);

	try {
		const result = await c.env.AI.run(model, {
			messages: [
				{ role: 'system', content: systemPromptFor(action, slug) },
				{ role: 'user', content: input },
			],
			max_tokens: maxTokens,
		});

		const text = extractAiText(result);
		if (!text) {
			return c.json<AiErrorBody>(
				{ ok: false, code: 'empty_response', message: 'Model returned empty text.' },
				502,
			);
		}

		return c.json<AiOkBody>({ ok: true, text, model, action, slug });
	} catch (err) {
		const msg = err instanceof Error ? err.message : String(err);
		const lower = msg.toLowerCase();
		if (lower.includes('abort') || lower.includes('timeout')) {
			return c.json<AiErrorBody>(
				{ ok: false, code: 'timeout', message: 'AI request timed out. Use local mode.' },
				504,
			);
		}
		if (lower.includes('403') || lower.includes('paid')) {
			return c.json<AiErrorBody>(
				{ ok: false, code: 'model_forbidden', message: 'Model not available on current plan.' },
				403,
			);
		}
		if (lower.includes('429') || lower.includes('neuron') || lower.includes('quota')) {
			return c.json<AiErrorBody>(
				{ ok: false, code: 'neurons_exhausted', message: 'Daily Neurons quota exhausted. Use local mode.' },
				429,
			);
		}
		return c.json<AiErrorBody>(
			{ ok: false, code: 'ai_error', message: 'AI request failed. Use local mode.' },
			502,
		);
	} finally {
		clearTimeout(timer);
	}
};

/** @deprecated 保留旧导出别名，供 index 兼容注册。 */
export const handlePromptTemplateBuilderAiHealth = handlePromptToolAiHealth;

/** @deprecated 保留旧导出别名，供 index 兼容注册。 */
export const handlePromptTemplateBuilderAi = handlePromptToolAi;
