/**
 * 仅供本地 R2 灌桶的空 Worker：getPlatformProxy 需要一个 main，
 * 但不能打包站点入口（否则会拉 assets / AI 并卡住远程 preview）。
 */
export default {
	/**
	 * 占位 fetch；灌桶脚本不会发 HTTP。
	 * @returns {Response}
	 */
	fetch() {
		return new Response('r2-seed-only', { status: 200 });
	},
};
