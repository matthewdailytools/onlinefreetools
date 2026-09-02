/**
 * robots.txt 解析与路径匹配（RFC 9309 / Google 最长匹配习惯的简化实现）。
 * 用于 check-robots-txt-url-blocked Worker API。
 */

/** 单条 Allow/Disallow 规则 */
export type RobotsRule = {
	/** allow | disallow */
	type: 'allow' | 'disallow';
	/** 路径前缀（可含 * $） */
	path: string;
};

/** 一个 User-agent 组 */
export type RobotsGroup = {
	/** UA 名列表（小写） */
	userAgents: string[];
	/** 规则列表 */
	rules: RobotsRule[];
};

/**
 * 解析 robots.txt 正文为 UA 组。
 * @param text robots.txt 原文
 */
export const parseRobotsTxt = (text: string): RobotsGroup[] => {
	const groups: RobotsGroup[] = [];
	let current: RobotsGroup | null = null;
	let pendingAgents: string[] = [];

	const flushAgents = () => {
		if (pendingAgents.length) {
			current = { userAgents: pendingAgents, rules: [] };
			groups.push(current);
			pendingAgents = [];
		}
	};

	for (const rawLine of (text || '').split(/\r?\n/)) {
		const line = rawLine.replace(/#.*$/, '').trim();
		if (!line) continue;
		const idx = line.indexOf(':');
		if (idx < 0) continue;
		const key = line.slice(0, idx).trim().toLowerCase();
		const value = line.slice(idx + 1).trim();
		if (key === 'user-agent') {
			if (current && current.rules.length) {
				pendingAgents = [value.toLowerCase()];
				current = null;
			} else {
				pendingAgents.push(value.toLowerCase());
			}
			continue;
		}
		if (key === 'allow' || key === 'disallow') {
			flushAgents();
			if (!current) {
				current = { userAgents: ['*'], rules: [] };
				groups.push(current);
			}
			current.rules.push({ type: key, path: value || '' });
		}
	}
	return groups;
};

/**
 * 将 robots 路径模式转为正则（支持 * 与末尾 $）。
 * @param pattern Disallow/Allow 值
 */
const patternToRegExp = (pattern: string): RegExp => {
	let p = pattern;
	let endAnchor = false;
	if (p.endsWith('$')) {
		endAnchor = true;
		p = p.slice(0, -1);
	}
	const escaped = p
		.replace(/[.+?^{}()|[\]\\]/g, '\\$&')
		.replace(/\*/g, '.*');
	return new RegExp(`^${escaped}${endAnchor ? '$' : ''}`);
};

/**
 * 在给定 UA 下判断 path 是否被允许，并返回最长匹配规则。
 * @param groups 解析后的组
 * @param userAgent 查询 UA（如 Googlebot）
 * @param pathName URL pathname + search
 */
export const evaluateRobotsPath = (
	groups: RobotsGroup[],
	userAgent: string,
	pathName: string,
): {
	/** 是否允许抓取 */
	allowed: boolean;
	/** 命中的规则（最长匹配） */
	matched: RobotsRule | null;
	/** 选用的 UA 组 */
	groupAgents: string[];
} => {
	const ua = (userAgent || '*').toLowerCase();
	const path = pathName.startsWith('/') ? pathName : `/${pathName}`;

	let group =
		groups.find((g) => g.userAgents.some((a) => a === ua)) ||
		groups.find((g) => g.userAgents.includes('*')) ||
		null;

	if (!group || group.rules.length === 0) {
		return { allowed: true, matched: null, groupAgents: group?.userAgents || ['*'] };
	}

	let best: RobotsRule | null = null;
	let bestLen = -1;
	for (const rule of group.rules) {
		if (!rule.path) {
			// 空 Disallow = 允许全部；空 Allow 忽略
			if (rule.type === 'disallow') {
				if (0 >= bestLen) {
					best = rule;
					bestLen = 0;
				}
			}
			continue;
		}
		try {
			if (patternToRegExp(rule.path).test(path)) {
				const len = rule.path.replace(/\$$/, '').length;
				if (len > bestLen) {
					best = rule;
					bestLen = len;
				} else if (len === bestLen && best && rule.type === 'disallow' && best.type === 'allow') {
					// 同长度时 Google：Allow 优先于 Disallow —— 保持 Allow
				} else if (len === bestLen && best && rule.type === 'allow' && best.type === 'disallow') {
					best = rule;
				}
			}
		} catch {
			continue;
		}
	}

	if (!best) return { allowed: true, matched: null, groupAgents: group.userAgents };
	if (best.type === 'disallow' && best.path === '') {
		return { allowed: true, matched: best, groupAgents: group.userAgents };
	}
	return {
		allowed: best.type === 'allow',
		matched: best,
		groupAgents: group.userAgents,
	};
};

/**
 * 从 robots.txt 提取 Sitemap: 行。
 * @param text robots 原文
 */
export const extractSitemapDirectives = (text: string): string[] => {
	const out: string[] = [];
	for (const rawLine of (text || '').split(/\r?\n/)) {
		const line = rawLine.replace(/#.*$/, '').trim();
		const m = line.match(/^sitemap:\s*(.+)$/i);
		if (m) out.push(m[1].trim());
	}
	return out;
};
