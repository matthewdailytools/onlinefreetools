/**
 * 解析工具页 Open Graph / SERP 偏好图 URL。
 * 资产路径：public/og/tools/{slug}.{webp|png|jpg|jpeg|avif}
 */
import fs from 'node:fs';
import path from 'node:path';

/** 站点绝对根 URL（与 layout.ts 一致） */
const SITE_BASE_URL = 'https://onlinefreetools.org';

/** 无 per-slug 资产时的全站默认 OG 图 */
export const DEFAULT_OG_IMAGE_URL = `${SITE_BASE_URL}/og-image.png`;

/** 按优先级探测的扩展名（与 scripts/lib/changed-tools.mjs 一致） */
const OG_EXTENSIONS = ['webp', 'png', 'jpg', 'jpeg', 'avif'] as const;

/**
 * public/og/tools 目录的绝对路径（构建/预渲染时从仓库根解析）。
 */
const ogToolsDir = () => path.join(process.cwd(), 'public', 'og', 'tools');

/**
 * 若存在 per-slug 位图，返回其绝对 HTTPS URL；否则回退默认站图。
 * @param slug 工具 catalog slug
 */
export const resolveToolOgImageUrl = (slug: string): string => {
	const dir = ogToolsDir();
	for (const ext of OG_EXTENSIONS) {
		const filePath = path.join(dir, `${slug}.${ext}`);
		if (fs.existsSync(filePath)) {
			return `${SITE_BASE_URL}/og/tools/${slug}.${ext}`;
		}
	}
	return DEFAULT_OG_IMAGE_URL;
};

/**
 * 是否已有专用 OG 位图（用于决定是否插入可见预览 `<img>`）。
 * @param slug 工具 catalog slug
 */
export const hasToolOgImage = (slug: string): boolean =>
	resolveToolOgImageUrl(slug) !== DEFAULT_OG_IMAGE_URL;
