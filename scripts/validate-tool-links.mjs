/**
 * 工具内链 / 出站 References 校验。
 * - related ≥ 2；slug 存在；无自链 / 重复 → fail
 * - 零 inbound related → warn（不抬升退出码）
 * - 页面 References ≥1；YMYL ≥2 → fail
 * page.module 从 tool-catalog.d 分片读取（合并后的 catalog.json 不含 page）。
 * @returns {{ fails: number, warns: number }}
 */
import fs from 'fs';
import path from 'path';
import { createRequire } from 'module';
import { fileURLToPath } from 'url';

const require = createRequire(import.meta.url);
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const catalog = require(path.join(root, 'src/site/tool-catalog.json'));
const catalogDir = path.join(root, 'src/site/tool-catalog.d');

/**
 * 从 catalog 分片读取 page.module。
 * @param {string} slug
 */
const readPageModule = (slug) => {
	const shard = path.join(catalogDir, `${slug}.json`);
	if (!fs.existsSync(shard)) return null;
	try {
		const raw = JSON.parse(fs.readFileSync(shard, 'utf8'));
		return raw?.page?.module || null;
	} catch {
		return null;
	}
};

/**
 * 将 catalog.page.module（如 ../pages/fooPage）解析为 src 下 .ts 路径。
 * @param {string} modulePath
 */
const resolvePageFile = (modulePath) => {
	const cleaned = String(modulePath || '')
		.replace(/^\.\.\//, 'src/')
		.replace(/\.ts$/, '');
	const base = path.join(root, cleaned);
	for (const ext of ['.ts', '.tsx', '.js', '.mjs']) {
		const p = base + ext;
		if (fs.existsSync(p)) return p;
	}
	return null;
};

/**
 * 统计页面源码中出站引用条数。
 * @param {string} code
 */
const countReferenceHrefs = (code) => {
	if (!code) return 0;
	const fromHelper = (code.match(/renderToolReferencesSection\s*\(/g) || []).length;
	if (fromHelper) {
		const block = code.match(/renderToolReferencesSection\s*\(\s*\{[\s\S]*?\}\s*\)/);
		if (block) {
			return (block[0].match(/href:\s*['"]https?:\/\//g) || []).length;
		}
	}
	const refsSection = code.match(/id=["']references["'][\s\S]{0,4000}?<\/section>/i);
	if (refsSection) {
		return (refsSection[0].match(/href=["']https?:\/\//gi) || []).length;
	}
	return 0;
};

/**
 * 运行链接校验。
 */
export const validateToolLinks = () => {
	let fails = 0;
	let warns = 0;
	/** @type {Record<string, number>} */
	const inbound = {};

	for (const tool of catalog) {
		const related = Array.isArray(tool.related) ? tool.related : [];
		const seen = new Set();

		if (related.length < 2) {
			console.warn(`[LINK-FAIL] ${tool.slug}: related needs ≥2 (found ${related.length})`);
			fails += 1;
		}

		for (const slug of related) {
			if (slug === tool.slug) {
				console.warn(`[LINK-FAIL] ${tool.slug}: related must not self-link`);
				fails += 1;
			}
			if (seen.has(slug)) {
				console.warn(`[LINK-FAIL] ${tool.slug}: duplicate related slug "${slug}"`);
				fails += 1;
			}
			seen.add(slug);
			const target = catalog.find((t) => t.slug === slug);
			if (!target) {
				console.warn(`[LINK-FAIL] ${tool.slug}: related slug not in catalog: "${slug}"`);
				fails += 1;
			} else {
				inbound[slug] = (inbound[slug] || 0) + 1;
			}
		}

		const modulePath = readPageModule(tool.slug);
		const pageFile = modulePath ? resolvePageFile(modulePath) : null;
		if (!pageFile) {
			console.warn(
				`[LINK-FAIL] ${tool.slug}: cannot resolve page module ${modulePath || '(missing in tool-catalog.d)'}`
			);
			fails += 1;
			continue;
		}
		const code = fs.readFileSync(pageFile, 'utf8');
		const refCount = countReferenceHrefs(code);
		const minRefs = tool.ymyl ? 2 : 1;
		if (refCount < minRefs) {
			console.warn(
				`[LINK-FAIL] ${tool.slug}: References need ≥${minRefs}${tool.ymyl ? ' (YMYL)' : ''} (found ${refCount}) in ${path.relative(root, pageFile)}`
			);
			fails += 1;
		}
	}

	for (const tool of catalog) {
		if (!inbound[tool.slug]) {
			console.warn(`[LINK-WARN] ${tool.slug}: zero inbound related (orphan in related graph)`);
			warns += 1;
		}
	}

	return { fails, warns };
};

/** CLI */
if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
	const { fails, warns } = validateToolLinks();
	if (fails === 0) {
		console.log(`Link validator: OK — related/refs look good (${warns} inbound warn(s))`);
		process.exit(0);
	}
	console.log(`Link validator: ${fails} fail(s), ${warns} warn(s).`);
	process.exit(2);
}
