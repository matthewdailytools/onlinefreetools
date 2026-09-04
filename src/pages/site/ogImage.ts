/**
 * 解析工具页 Open Graph / SERP 偏好图 URL。
 * 本地源：public/og/tools/{slug}.{webp|png|jpg|jpeg|avif}（入库 Git，不进 Worker Assets）。
 * 公开 URL：https://assets.onlinefreetools.org/og/tools/{slug}.{ext}（R2 桶 `assets` 自定义域）。
 */
import fs from 'node:fs';
import path from 'node:path';

/** 站点绝对根 URL（默认站图仍走主域 Assets） */
const SITE_BASE_URL = 'https://onlinefreetools.org';

/**
 * OG 位图公开根（R2 桶 `assets` 的自定义域）。
 * 须与 scripts/upload-r2-og-assets.mjs 的 OG_ASSETS_PUBLIC_BASE 保持一致。
 */
export const OG_ASSETS_BASE_URL = 'https://assets.onlinefreetools.org';

/** 无 per-slug 资产时的全站默认 OG 图（仍在主域 public/og-image.png） */
export const DEFAULT_OG_IMAGE_URL = `${SITE_BASE_URL}/og-image.png`;

/** 按优先级探测的扩展名（与 scripts/lib/changed-tools.mjs 一致） */
const OG_EXTENSIONS = ['webp', 'png', 'jpg', 'jpeg', 'avif'] as const;

/**
 * public/og/tools 目录的绝对路径（构建/预渲染时从仓库根解析）。
 */
const ogToolsDir = () => path.join(process.cwd(), 'public', 'og', 'tools');

/**
 * 若存在 per-slug 位图，返回 R2 自定义域上的绝对 HTTPS URL；否则回退默认站图。
 * @param slug 工具 catalog slug
 */
export const resolveToolOgImageUrl = (slug: string): string => {
	const dir = ogToolsDir();
	for (const ext of OG_EXTENSIONS) {
		const filePath = path.join(dir, `${slug}.${ext}`);
		if (fs.existsSync(filePath)) {
			return `${OG_ASSETS_BASE_URL}/og/tools/${slug}.${ext}`;
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

/**
 * 页内 `<img src>`：CDN 资产用绝对 URL（与 og:image / JSON-LD 同址）。
 * @param absoluteUrl resolveToolOgImageUrl 返回值
 */
export const toolOgImagePathFromUrl = (absoluteUrl: string): string => absoluteUrl;

/**
 * 渲染 SERP 偏好图可见 `<figure>`（仅应在 hasToolOgImage 为真时调用）。
 * @param slug 工具 catalog slug
 * @param alt 图片 alt（通常为工具 H1/title，禁止堆砌关键词）
 */
export const renderToolPreferredImageHtml = (slug: string, alt: string): string => {
	if (!hasToolOgImage(slug)) return '';
	const absoluteUrl = resolveToolOgImageUrl(slug);
	const src = toolOgImagePathFromUrl(absoluteUrl);
	/** 简单转义，避免依赖 layout 循环引用 */
	const safeAlt = String(alt || slug)
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;');
	const safeSrc = src.replace(/&/g, '&amp;').replace(/"/g, '&quot;');
	return `
    <figure class="tool-preview-figure mb-4">
      <img src="${safeSrc}" width="1280" height="720"
        alt="${safeAlt}"
        class="img-fluid rounded border w-100" loading="lazy" decoding="async" />
    </figure>`;
};
