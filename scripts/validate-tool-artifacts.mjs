#!/usr/bin/env node
import { existsSync, readFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

export const validSlug = (slug) => /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug);

/** Inventory only: this does not certify copy, codec support or browser behavior. */
export function validateArtifacts(root, slug) {
	if (!validSlug(slug)) return ['invalid slug'];
	const errors = [];
	const requireFile = (relative) => {
		if (!existsSync(path.join(root, relative))) { errors.push(`missing: ${relative}`); return false; }
		return true;
	};
	const catalogPath = `src/site/tool-catalog.d/${slug}.json`;
	if (requireFile(catalogPath)) {
		try {
			const catalog = JSON.parse(readFileSync(path.join(root, catalogPath), 'utf8'));
			if (catalog.slug !== slug) errors.push('catalog slug mismatch');
			const module = catalog.page?.module;
			if (typeof module !== 'string' || !/^\.\.\/pages\/[A-Za-z0-9]+$/.test(module)) {
				errors.push('invalid page.module');
			} else {
				const pagePath = `src/pages/${path.basename(module)}.ts`;
				if (requireFile(pagePath)) {
					const source = readFileSync(path.join(root, pagePath), 'utf8');
					for (const match of source.matchAll(/fetch\(['"](\/samples\/[a-zA-Z0-9._/-]+)['"]/g)) {
						const asset = match[1];
						if (asset.split('/').includes('..')) errors.push(`unsafe sample path: ${asset}`);
						else requireFile(`public${asset}`);
					}
				}
			}
		} catch (error) { errors.push(`catalog: ${error.message}`); }
	}
	const icon = `public/icons/tools/${slug}.svg`;
	if (requireFile(icon) && !/^\s*(?:<\?xml[^>]*>\s*)?(?:<!--[\s\S]*?-->\s*)*<svg\b/.test(readFileSync(path.join(root, icon), 'utf8'))) {
		errors.push('icon must start with SVG, not concatenated catalog text');
	}
	for (const lang of ['en', 'zh', 'es', 'ar', 'pt', 'id', 'fr', 'ja', 'ru', 'de']) {
		requireFile(`src/site/i18n/tools/${slug}/${lang}.ts`);
	}
	// Existing tools without work-tasks remain supported. A tracked new tool must
	// have a completed engineering brief and genuinely completed locale brief.
	if (existsSync(path.join(root, 'work-tasks', slug))) {
		for (const file of ['00-request.md', '01-direction-discussion.md', '02-tool-info.md', '03-locale-briefs.md']) {
			const relative = `work-tasks/${slug}/${file}`;
			if (requireFile(relative) && /\*\*状态\*\*[^\n]*`draft`/.test(readFileSync(path.join(root, relative), 'utf8'))) {
				errors.push(`draft brief: ${relative}`);
			}
		}
		const localeBrief = path.join(root, 'work-tasks', slug, '03-locale-briefs.md');
		if (existsSync(localeBrief) && !/\*\*状态\*\*[^\n]*`i18n-done`/.test(readFileSync(localeBrief, 'utf8'))) {
			errors.push(`locale brief is not i18n-done: work-tasks/${slug}/03-locale-briefs.md`);
		}
	}
	return errors;
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
	const slug = process.argv.slice(2).find((arg) => arg.startsWith('--slug='))?.slice(7) || '';
	const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
	const errors = validateArtifacts(root, slug);
	for (const error of errors) console.error(`[artifacts] ${error}`);
	if (errors.length) process.exitCode = 1;
	else console.log(`[artifacts] OK slug=${slug} (inventory only)`);
}
