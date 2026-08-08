/**
 * 站点主题切换：四套品牌主色（teal / green / amber / navy）。
 * - 写入 html[data-theme]，由 site.css 覆盖 --accent*
 * - localStorage key: oft-theme
 * - 顶栏 [data-theme-set] 按钮触发；页头内联脚本防 FOUC
 */
(function () {
	/** @type {readonly string[]} */
	var THEMES = ['teal', 'green', 'amber', 'navy'];
	/** localStorage 键名 */
	var STORAGE_KEY = 'oft-theme';
	/** 默认主题 id（青石蓝） */
	var DEFAULT_THEME = 'teal';

	/**
	 * 校验主题 id。
	 * @param {string|null|undefined} id
	 * @returns {string}
	 */
	function normalize(id) {
		return THEMES.indexOf(id || '') >= 0 ? id : DEFAULT_THEME;
	}

	/**
	 * 应用主题到 documentElement，并同步切换器 UI。
	 * @param {string} id
	 * @param {{persist?: boolean}} [opts]
	 */
	function applyTheme(id, opts) {
		var theme = normalize(id);
		document.documentElement.setAttribute('data-theme', theme);
		if (!opts || opts.persist !== false) {
			try {
				localStorage.setItem(STORAGE_KEY, theme);
			} catch (_) {}
		}
		document.querySelectorAll('[data-theme-swatch]').forEach(function (el) {
			el.className = 'theme-swatch theme-swatch--' + theme;
		});
		document.querySelectorAll('[data-theme-set]').forEach(function (btn) {
			var bid = btn.getAttribute('data-theme-set');
			if (bid === theme) btn.setAttribute('aria-current', 'true');
			else btn.removeAttribute('aria-current');
		});
	}

	/**
	 * 从 storage 读取并应用（供 DOMContentLoaded 后同步 UI）。
	 */
	function bootFromStorage() {
		var saved = null;
		try {
			saved = localStorage.getItem(STORAGE_KEY);
		} catch (_) {}
		applyTheme(saved || DEFAULT_THEME, { persist: false });
	}

	document.addEventListener('click', function (e) {
		var t = e.target;
		if (!t || !t.closest) return;
		var btn = t.closest('[data-theme-set]');
		if (!btn) return;
		e.preventDefault();
		applyTheme(btn.getAttribute('data-theme-set'));
	});

	if (document.readyState === 'loading') {
		document.addEventListener('DOMContentLoaded', bootFromStorage);
	} else {
		bootFromStorage();
	}

	window.OftTheme = { apply: applyTheme, themes: THEMES, defaultTheme: DEFAULT_THEME };
})();
