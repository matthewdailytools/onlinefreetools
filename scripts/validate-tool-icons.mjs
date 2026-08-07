/**
 * 校验 public/icons/tools/*.svg：禁止 XML 非法控制字符，并做轻量 well-formed 检查。
 * 历史问题：中文注释经部分写入管道会混入 0x07/0x18/0x1A 等控制符，浏览器报
 * xmlParseComment: invalid xmlChar。
 *
 * 约定：工具图标 SVG 注释优先用 ASCII；勿依赖「中文注释一定安全」。
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const iconsDir = path.join(root, 'public', 'icons', 'tools');

/**
 * 字节是否为 XML 1.0 禁止的 C0 控制符（TAB/LF/CR 除外）。
 * @param {number} c 字节值
 * @returns {boolean}
 */
const isIllegalXmlControl = (c) => c < 0x20 && c !== 0x09 && c !== 0x0a && c !== 0x0d;

/**
 * 扫描全部工具图标。
 * @returns {number} 失败文件数
 */
export function validateToolIcons() {
	if (!fs.existsSync(iconsDir)) {
		console.warn(`[ICON-WARN] missing dir ${iconsDir}`);
		return 1;
	}

	let failures = 0;
	const files = fs.readdirSync(iconsDir).filter((f) => f.endsWith('.svg'));

	for (const file of files) {
		const full = path.join(iconsDir, file);
		const buf = fs.readFileSync(full);
		const badOffsets = [];
		for (let i = 0; i < buf.length; i++) {
			if (isIllegalXmlControl(buf[i])) {
				badOffsets.push({ i, hex: '0x' + buf[i].toString(16) });
			}
		}
		if (badOffsets.length) {
			const sample = badOffsets
				.slice(0, 5)
				.map((x) => `${x.hex}@${x.i}`)
				.join(', ');
			console.warn(
				`[ICON-FAIL] ${file}: illegal XML control char(s) (${badOffsets.length}): ${sample}`
			);
			failures += 1;
			continue;
		}

		const text = buf.toString('utf8');
		if (!text.includes('<svg') || !text.trimEnd().endsWith('</svg>')) {
			console.warn(`[ICON-FAIL] ${file}: missing <svg>…</svg> wrapper`);
			failures += 1;
			continue;
		}

		const commentRe = /<!--([\s\S]*?)-->/g;
		let m;
		while ((m = commentRe.exec(text))) {
			if (m[1].includes('--')) {
				console.warn(`[ICON-FAIL] ${file}: comment must not contain "--"`);
				failures += 1;
				break;
			}
		}
	}

	return failures;
}

/** 直接运行本文件时作为 CLI。 */
const isCli =
	process.argv[1] && pathToFileURL(path.resolve(process.argv[1])).href === import.meta.url;
if (isCli) {
	const n = validateToolIcons();
	if (n === 0) console.log('Icon validator: OK — tool SVGs look clean');
	else console.log(`Icon validator: ${n} file(s) failed`);
	process.exit(n === 0 ? 0 : 2);
}
