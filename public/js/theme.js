/**
 * 站点 chrome 脚本：
 * 1) 主题切换：四套品牌主色（teal / green / amber / navy）。
 *    - 写入 html[data-theme]，由 site.css 覆盖 --accent*
 *    - localStorage key: oft-theme
 *    - 顶栏 [data-theme-set] 按钮触发；页头内联脚本防 FOUC
 * 2) 顶栏分类下拉：打开时取消 .navbar-nav 的 overflow 裁剪（见文件末尾 IIFE）
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

/**
 * 顶栏分类下拉：`.navbar-nav` 为横向滚动设置了 overflow，会裁掉绝对定位菜单。
 * 在 Bootstrap 显示下拉前取消裁剪，关闭后恢复，并尽量保持横向 scrollLeft。
 */
(function () {
	/** 打开下拉时加在 `.navbar-nav` 上，对应 site.css 的 overflow: visible */
	var OPEN_CLASS = 'navbar-nav--dropdown-open';

	/**
	 * 从下拉触发器找到顶栏 `.navbar-nav`。
	 * @param {EventTarget|null} target
	 * @returns {HTMLElement|null}
	 */
	function navFromToggle(target) {
		if (!target || !target.closest) return null;
		return target.closest('.navbar.site-navbar .navbar-nav');
	}

	/**
	 * 切换 overflow class 时保留当前横向滚动位置（改为 visible 时浏览器可能把 scrollLeft 置 0）。
	 * @param {HTMLElement} nav
	 * @param {boolean} open
	 */
	function setNavDropdownOpen(nav, open) {
		var sl = nav.scrollLeft;
		if (open) nav.classList.add(OPEN_CLASS);
		else nav.classList.remove(OPEN_CLASS);
		nav.scrollLeft = sl;
	}

	document.addEventListener('show.bs.dropdown', function (e) {
		var nav = navFromToggle(e.target);
		if (nav) setNavDropdownOpen(nav, true);
	});

	document.addEventListener('hidden.bs.dropdown', function (e) {
		var nav = navFromToggle(e.target);
		if (!nav) return;
		if (nav.querySelector('.dropdown-menu.show')) return;
		setNavDropdownOpen(nav, false);
	});
})();
