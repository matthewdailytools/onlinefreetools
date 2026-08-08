/**
 * 调用 Cloudflare Turnstile siteverify API（服务端）。
 * 密钥来自 Worker Secret：`TURNSTILE_SECRET_KEY`（勿写入仓库）。
 */

/** Cloudflare 官方 siteverify 端点 */
const SITEVERIFY_URL = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';

/** siteverify 成功时的精简结果 */
export interface TurnstileVerifyOk {
	/** 校验通过 */
	ok: true;
}

/** siteverify 失败时的精简结果 */
export interface TurnstileVerifyFail {
	/** 校验未通过 */
	ok: false;
	/** 可读错误（可给客户端） */
	error: string;
	/** Cloudflare 返回的 error-codes（若有） */
	codes?: string[];
}

/**
 * 用 secret + token 向 Cloudflare 校验 Turnstile 响应。
 *
 * @param secret - TURNSTILE_SECRET_KEY
 * @param token - 浏览器 widget 签发的 token
 * @param remoteip - 可选客户端 IP
 * @returns 校验结果
 */
export const verifyTurnstileToken = async (
	secret: string,
	token: string,
	remoteip?: string,
): Promise<TurnstileVerifyOk | TurnstileVerifyFail> => {
	const trimmed = token.trim();
	if (!secret) {
		return { ok: false, error: 'Turnstile is not configured' };
	}
	if (!trimmed) {
		return { ok: false, error: 'Turnstile token is required' };
	}

	/** 表单正文 */
	const body = new URLSearchParams();
	body.set('secret', secret);
	body.set('response', trimmed);
	if (remoteip) {
		body.set('remoteip', remoteip);
	}

	try {
		const response = await fetch(SITEVERIFY_URL, {
			method: 'POST',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body,
		});
		const payload = (await response.json()) as {
			success?: boolean;
			'error-codes'?: string[];
		};
		if (payload.success === true) {
			return { ok: true };
		}
		const codes = Array.isArray(payload['error-codes']) ? payload['error-codes'] : [];
		return {
			ok: false,
			error: 'Turnstile verification failed',
			codes,
		};
	} catch {
		return { ok: false, error: 'Turnstile verification request failed' };
	}
};
