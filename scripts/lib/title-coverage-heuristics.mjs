/**
 * Title / 清单前覆盖启发式（供 lint:seo 门禁使用）。
 * 对齐 `.cursor/rules/tool-i18n-localization.mdc`：禁止参数枚举 H1；
 * 若 02 已含「清单前检索覆盖」专节，则须实质填写。
 * 本模块只做可机器判定的辅助检查，不能替代人工/Agent 的检索判断。
 */

/**
 * 去掉副标题末尾的本地/在线补语，避免「…，本地完成」被当成枚举段。
 * @param {string} sub
 * @returns {string}
 */
const stripLocalityTail = (sub) =>
	sub
		.replace(
			/[,，]?\s*(本地(处理|完成|计算|运行)?|在你的设备上|浏览器内|Local(ly)?|In[- ]Browser|Online|en tu dispositivo|en local)\s*$/i,
			''
		)
		.trim();

/**
 * 副标题是否像控件/格式目录（而非结果或场景）。
 * @param {string | null | undefined} title
 * @returns {boolean}
 */
export const isParamEnumTitle = (title) => {
	if (!title || typeof title !== 'string') return false;
	const m = title.match(/^(.+?)\s*[—–]\s*(.+)$/) || title.match(/^(.+?)\s+-\s+(.+)$/);
	if (!m) return false;
	const sub = stripLocalityTail(m[2].trim());
	if (!sub) return false;

	const cnSegs = sub.split(/[、，]/).map((s) => s.trim()).filter(Boolean);
	const enSegs = sub.split(/,\s*/).map((s) => s.trim()).filter(Boolean);

	/** ≥3 个顿号/逗号分段 → 典型目录腔 */
	if (cnSegs.length >= 3 || enSegs.length >= 3) return true;

	/**
	 * 控件/工程参数词表（有意收窄）。
	 * 命中且副标题含列表分隔或「A & B」式并列 → 判目录腔。
	 */
	const controlEn =
		/\b(max[\s-]?edge|target\s*size|target\s*kb|charset\s*options?|seconds?|milliseconds?|\bms\b|utf-?8|base64url|json\s*pointer|draft-?\d+|a\/cname|status codes?|delimiters?|multi-doc|mozjpeg|avif|webp)\b/i;
	const controlCn =
		/(最长边|目标体积|目标\s*KB|字符集可选|字符集|秒\s*\/\s*毫秒|毫秒|UTF-?8|Base64url|质量滑|画质|分隔符|多文档|密钥检查|状态码)/i;

	if (controlEn.test(sub) || controlCn.test(sub)) {
		if (/[、，,]/.test(sub)) return true;
		if (/\s&\s/.test(sub) && enSegs.length >= 2) return true;
		if (/[与和]/.test(sub) && cnSegs.length >= 2) return true;
		/** 单段但仍是控件目录：如 "Charset Options" / "秒/毫秒" */
		if (/^(charset\s*options?|seconds?\s*\/?\s*ms|秒\s*\/\s*毫秒)$/i.test(sub)) return true;
		if (/[\/]/.test(sub) && (controlEn.test(sub) || controlCn.test(sub))) return true;
	}

	/**
	 * 「A, B & C」且每段很短、像专名枚举（Escape, Unencode & … 已去 Local）。
	 * 要求：恰好 2 段逗号切分且含 &，或 2 段顿号且含与/和，且无动词结果向用词。
	 */
	const resultCue =
		/(缩小|压缩|转换|生成|查看|清除|对照|解码|编码|提交|校验|compare|shrink|convert|generate|decode|encode|read|strip|submit|validate|escape|unescape)/i;
	if (!resultCue.test(sub)) {
		if (enSegs.length === 2 && /\s&\s/.test(sub) && sub.length < 48) return true;
		if (cnSegs.length === 2 && /[与和]/.test(sub) && sub.length < 40) return true;
	}

	return false;
};

/**
 * 从 02-tool-info.md 判断清单前覆盖表是否实质填写（非空模板）。
 * @param {string} md
 * @returns {{ ok: boolean, reason?: string }}
 */
export const checkCoverageTableFilled = (md) => {
	if (!md || !/清单前检索覆盖/.test(md)) {
		return { ok: false, reason: 'missing 清单前检索覆盖 section' };
	}
	/** 兼容全称「主检索词 → title/H1」与简写「主词 → H1」 */
	const mainRow = md.match(/\|\s*主检索词[^|]*\|\s*([^|\n]+)\|/) || md.match(/\|\s*主词\s*→\s*H1\s*\|\s*([^|\n]+)\|/);
	if (!mainRow || !mainRow[1].trim() || /写出 H1|（写出/.test(mainRow[1])) {
		return { ok: false, reason: '主检索词 → title/H1 row empty or placeholder' };
	}
	/** 须有优化摘要；若仅有次词行则仍要求补「优化摘要」 */
	const summaryRow = md.match(/\|\s*优化摘要\s*\|\s*([^|\n]+)\|/);
	if (!summaryRow || !summaryRow[1].trim() || summaryRow[1].trim() === '（相对初稿改了什么）') {
		return { ok: false, reason: '优化摘要 empty or placeholder（须写清相对初稿改了什么）' };
	}
	const slugRow =
		md.match(/\|\s*slug 结论\s*\|\s*([^|\n]+)\|/) || md.match(/\|\s*slug\s*\|\s*([^|\n]+)\|/);
	if (!slugRow || !slugRow[1].trim() || /^保留 `…`/.test(slugRow[1].trim())) {
		return { ok: false, reason: 'slug 结论 empty or template placeholder' };
	}
	if (!/\[[xX]\]\s*已回写/.test(md)) {
		return { ok: false, reason: '未勾选「已回写…SEO 卡片」' };
	}
	return { ok: true };
};

/**
 * 从 03-locale-briefs.md 判断是否勾选清单前覆盖。
 * @param {string} md
 * @returns {boolean}
 */
export const hasLocaleBriefCoverageCheck = (md) => {
	if (!md) return false;
	return /\[[xX]\]\s*\*\*清单前检索覆盖已做\*\*/.test(md) || /\[[xX]\]\s*清单前检索覆盖已做/.test(md);
};

/**
 * 03 是否包含「清单前检索覆盖已做」检查项（旧 brief 可能无此行）。
 * @param {string} md
 * @returns {boolean}
 */
export const localeBriefHasCoverageItem = (md) => {
	if (!md) return false;
	return /清单前检索覆盖已做/.test(md);
};
