/**
 * 工具侧栏共享 chrome 内容指纹（由 scripts/build-tool-chrome 在构建时写入）。
 * Worker 将其并入 HTML Cache API 版本，使菜单更新无需重传全部工具页也能失效旧组合缓存。
 */
export const CHROME_CACHE_VERSION = 'c478570049f8077b';
