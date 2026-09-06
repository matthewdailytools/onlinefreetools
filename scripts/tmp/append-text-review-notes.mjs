/**
 * 在相关工具的 02-tool-info.md 末尾追加本轮「文本工具复审修正」记录。
 * 只追加事实性条目，便于后续回溯实现与文案的一致性依据。
 */
import { appendFile } from 'node:fs/promises';

/** slug → 追加的记录条目。 */
const notes = {
	'jwt-decoder': [
		'Base64url 解码补 UTF-8 还原：`atob` 只产出字节串，之前带重音或 CJK 的 claim 会乱码；现在经 `TextDecoder(\'utf-8\')` 再 `JSON.parse`。',
		'`rules_item_2` 十语同步说明该解码链路。',
	],
	'html-entity': [
		'`decodeOnce()` 在写入游离 textarea 前先把裸 `<` 转成 `&lt;`：否则输入含 `</textarea>` 时 RCDATA 解析提前结束，「直到稳定」多轮解码会静默丢弃后续文本。',
		'`rules_item_3` 十语补充「裸 < > 按字面保留」。',
	],
	'password-generator': [
		'`onePassword()` 改用拒绝采样：直接 `byte % poolLen` 在池长不整除 256 时让前若干字符概率偏高；现在丢弃越界字节重取。',
		'`rules_item_2` 十语补充等概率这一可验证增量。',
	],
	'on-page-seo-checker': [
		'URL 模式改为逐跳跟随重定向（上限 5 跳），每跳重新执行私网/localhost 拦截；原 `redirect: \'follow\'` 只校验首跳，公网页面可用 302 把抓取带向内网地址。',
		'`finalUrl` 改为返回实际最终 URL，canonical 自引用判断不再依赖 `res.url` 是否被填充。',
	],
	'open-graph-preview': [
		'与 on-page-seo-checker 共用 `fetchHtmlFollowingRedirects()`：逐跳校验主机名、上限 5 跳、返回真实最终 URL。',
	],
};

for (const [slug, items] of Object.entries(notes)) {
	const block = [
		'',
		'## 复审修正（2026-09-05）',
		'',
		...items.map((line) => `- ${line}`),
		'',
	].join('\n');
	await appendFile(`work-tasks/${slug}/02-tool-info.md`, block);
}
