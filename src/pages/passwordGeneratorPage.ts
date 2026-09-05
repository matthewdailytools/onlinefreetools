/**
 * 随机密码生成工具页（crypto.getRandomValues CSPRNG）。
 * slug: password-generator；见 work-tasks/password-generator/02-tool-info.md。
 */
import type { SiteLang } from '../site/i18n';
import { t, supportedLangs } from '../site/i18n';
import { renderFooter } from './site/footer';
import { renderHeader } from './site/header';
import { buildToolPageNavItems } from './site/nav';
import { renderLayout, type HreflangAlternate, escapeHtml } from './site/layout';
import { renderSidebar, buildToolSidebarItems } from './site/sidebar';
import { getToolBySlug } from '../site/tools';
import {
	renderToolExtraSections,
	renderToolIgSections,
	renderToolReferencesSection,
	buildToolJsonLd,
} from './site/toolContent';

/**
 * 为路径加上语言前缀（默认语无前缀）。
 * @param lang 当前语言
 * @param pathname 目标路径
 * @param defaultLang 站点默认语言
 */
const withLangPrefix = (lang: SiteLang, pathname: string, defaultLang: SiteLang) => {
	const safe = pathname.startsWith('/') ? pathname : `/${pathname}`;
	return lang === defaultLang ? safe : `/${lang}${safe}`;
};

/**
 * 渲染随机密码生成工具页。
 * @param opts.lang 当前语言
 * @param opts.defaultLang 站点默认语言
 * @param opts.enabledLangs 启用语言列表
 */
export const renderPasswordGeneratorPage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	const toolPath = '/tools/password-generator';
	const canonicalPath = withLangPrefix(opts.lang, toolPath, opts.defaultLang);
	const title = `${t(opts.lang, 'tool_password_generator_title')} | ${t(opts.lang, 'brand')}`;
	const description = t(opts.lang, 'tool_password_generator_description');

	const navItems = buildToolPageNavItems(opts.lang, opts.defaultLang);

	/** 语言切换链接始终带显式语言前缀（含默认语）。 */
	const withExplicitLangPrefix = (code: SiteLang, pathname: string) => {
		const safe = pathname.startsWith('/') ? pathname : `/${pathname}`;
		return `/${code}${safe}`.replace(/\/{2,}/g, '/');
	};

	const langAlternates: Record<string, string> = Object.fromEntries(
		(supportedLangs || []).map((code) => [code, withExplicitLangPrefix(code, toolPath)])
	);

	const alternates: HreflangAlternate[] = (supportedLangs || []).map((code) => ({
		lang: code,
		href: `https://onlinefreetools.org${withLangPrefix(code, toolPath, opts.defaultLang)}`,
	}));

	const headerHtml = renderHeader({
		lang: opts.lang,
		brandHref: withLangPrefix(opts.lang, '/', opts.defaultLang),
		navItems,
		enabledLangs: supportedLangs,
		langAlternates,
	});

	const sidebarHtml = renderSidebar({
		title: t(opts.lang, 'nav_tools'),
		groups: buildToolSidebarItems({
			lang: opts.lang,
			defaultLang: opts.defaultLang,
			currentSlug: 'password-generator',
			currentAnchor: '#converter',
		}),
		id: 'toolNav',
	});

	const footerHtml = renderFooter({ lang: opts.lang });

	const extraHeadHtml = `
  <style>
    .tools-bar { gap: .5rem; }
    #pwdOutput { font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace; font-size: .9rem; min-height: 100px; white-space: pre-wrap; word-break: break-all; }
    .charset-group { gap: .75rem 1.25rem; }
    #lenValue { min-width: 2.5rem; display: inline-block; }
  </style>`;

	const contentHtml = `
    <div id="converter" class="tool-hero">
      <h1 class="tool-title">${escapeHtml(t(opts.lang, 'tool_password_generator_title'))}</h1>
      <p class="tool-lead">${escapeHtml(description)}</p>
    </div>

    <div class="alert alert-secondary py-2 small mb-3" role="note">
      ${escapeHtml(t(opts.lang, 'tool_password_generator_disclaimer'))}
    </div>

    <div class="tool-panel">
    <div class="d-flex align-items-center tools-bar mb-3 flex-wrap">
      <button type="button" id="btnGenerate" class="btn btn-primary">${escapeHtml(t(opts.lang, 'tool_password_generator_generate'))}</button>
      <button type="button" id="btnCopy" class="btn btn-outline-primary">${escapeHtml(t(opts.lang, 'tool_password_generator_copy'))}</button>
      <button type="button" id="btnSample" class="btn btn-outline-secondary btn-sm">${escapeHtml(t(opts.lang, 'tool_password_generator_sample'))}</button>
      <button type="button" id="btnClear" class="btn btn-outline-secondary btn-sm">${escapeHtml(t(opts.lang, 'tool_password_generator_clear'))}</button>
    </div>

    <div class="row g-3 mb-3">
      <div class="col-12 col-md-6">
        <label class="form-label" for="lenRange">${escapeHtml(t(opts.lang, 'tool_password_generator_length_label'))}: <span id="lenValue">16</span></label>
        <input type="range" class="form-range" id="lenRange" min="8" max="128" value="16">
      </div>
      <div class="col-12 col-md-6">
        <label class="form-label" for="countInput">${escapeHtml(t(opts.lang, 'tool_password_generator_count_label'))}</label>
        <input type="number" id="countInput" class="form-control" min="1" max="100" value="1">
      </div>
    </div>

    <fieldset class="mb-3">
      <legend class="form-label small text-muted mb-1">${escapeHtml(t(opts.lang, 'tool_password_generator_charset_label'))}</legend>
      <div class="d-flex flex-wrap charset-group">
        <div class="form-check"><input class="form-check-input" type="checkbox" id="chkUpper" checked><label class="form-check-label" for="chkUpper">${escapeHtml(t(opts.lang, 'tool_password_generator_upper'))}</label></div>
        <div class="form-check"><input class="form-check-input" type="checkbox" id="chkLower" checked><label class="form-check-label" for="chkLower">${escapeHtml(t(opts.lang, 'tool_password_generator_lower'))}</label></div>
        <div class="form-check"><input class="form-check-input" type="checkbox" id="chkDigits" checked><label class="form-check-label" for="chkDigits">${escapeHtml(t(opts.lang, 'tool_password_generator_digits'))}</label></div>
        <div class="form-check"><input class="form-check-input" type="checkbox" id="chkSymbols" checked><label class="form-check-label" for="chkSymbols">${escapeHtml(t(opts.lang, 'tool_password_generator_symbols'))}</label></div>
        <div class="form-check"><input class="form-check-input" type="checkbox" id="chkExcludeAmbig"><label class="form-check-label" for="chkExcludeAmbig">${escapeHtml(t(opts.lang, 'tool_password_generator_exclude_ambiguous'))}</label></div>
      </div>
    </fieldset>

    <div id="pwdError" class="alert alert-danger py-2 small mb-2" style="display:none" role="alert"></div>

    <label class="form-label" for="pwdOutput">${escapeHtml(t(opts.lang, 'tool_password_generator_output_label'))}</label>
    <pre id="pwdOutput" class="border rounded p-3 bg-light mb-0" tabindex="0"></pre>
    </div>`;

	const igHtml = renderToolIgSections({
		lang: opts.lang,
		prefix: 'tool_password_generator',
		mode: 'rules',
		usecaseCount: 3,
		ruleItemCount: 4,
	});

	const referencesHtml = renderToolReferencesSection({
		lang: opts.lang,
		links: [
			{
				label: 'NIST SP 800-63B — Authentication',
				href: 'https://pages.nist.gov/800-63-3/sp800-63b.html',
			},
			{
				label: 'OWASP — Password Storage Cheat Sheet',
				href: 'https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html',
			},
			{
				label: 'MDN — crypto.getRandomValues',
				href: 'https://developer.mozilla.org/en-US/docs/Web/API/Crypto/getRandomValues',
			},
		],
	});

	/** 客户端：CSPRNG 密码生成；禁止 Math.random。 */
	const extraBodyHtml = `
  <script>
    (function () {
      /** 大写、小写、数字、符号字符池 */
      var POOLS = {
        upper: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
        lower: 'abcdefghijklmnopqrstuvwxyz',
        digits: '0123456789',
        symbols: '!@#$%^&*()-_=+[]{}|;:,.<>?'
      };
      /** 易混字符（排除选项） */
      var AMBIGUOUS = '0OIl1';

      var lenRange = document.getElementById('lenRange');
      var lenValue = document.getElementById('lenValue');
      var countInput = document.getElementById('countInput');
      var chkUpper = document.getElementById('chkUpper');
      var chkLower = document.getElementById('chkLower');
      var chkDigits = document.getElementById('chkDigits');
      var chkSymbols = document.getElementById('chkSymbols');
      var chkExcludeAmbig = document.getElementById('chkExcludeAmbig');
      var pwdOutput = document.getElementById('pwdOutput');
      var pwdError = document.getElementById('pwdError');
      var btnGenerate = document.getElementById('btnGenerate');
      var btnCopy = document.getElementById('btnCopy');
      var btnSample = document.getElementById('btnSample');
      var btnClear = document.getElementById('btnClear');

      var labelCopy = ${JSON.stringify(t(opts.lang, 'tool_password_generator_copy'))};
      var labelCopyDone = ${JSON.stringify(t(opts.lang, 'tool_password_generator_copy_done'))};
      var msgEmptyCharset = ${JSON.stringify(t(opts.lang, 'tool_password_generator_empty_charset'))};

      /**
       * 构建当前字符集池。
       * @returns {string}
       */
      function buildPool() {
        var pool = '';
        if (chkUpper.checked) pool += POOLS.upper;
        if (chkLower.checked) pool += POOLS.lower;
        if (chkDigits.checked) pool += POOLS.digits;
        if (chkSymbols.checked) pool += POOLS.symbols;
        if (chkExcludeAmbig.checked) {
          var filtered = '';
          for (var i = 0; i < pool.length; i++) {
            if (AMBIGUOUS.indexOf(pool[i]) < 0) filtered += pool[i];
          }
          pool = filtered;
        }
        return pool;
      }

      /**
       * 解析数量 1–100。
       * @returns {number}
       */
      function getCount() {
        var n = parseInt(countInput.value, 10);
        if (isNaN(n) || n < 1) n = 1;
        if (n > 100) n = 100;
        countInput.value = String(n);
        return n;
      }

      /**
       * 用 crypto.getRandomValues 生成单条密码。
       * 采用拒绝采样：直接对随机字节取模会让字符池前若干个字符概率偏高
       * （256 通常不是池长度的整数倍），这里丢弃落在最后不完整区间的字节。
       * @param {number} length 长度
       * @param {string} pool 字符池
       * @returns {string}
       */
      function onePassword(length, pool) {
        var out = '';
        var poolLen = pool.length;
        /** 可用字节区间上界（不含），保证每个字符等概率。 */
        var limit = 256 - (256 % poolLen);
        while (out.length < length) {
          var bytes = new Uint8Array(length - out.length);
          crypto.getRandomValues(bytes);
          for (var i = 0; i < bytes.length && out.length < length; i++) {
            if (bytes[i] >= limit) continue;
            out += pool[bytes[i] % poolLen];
          }
        }
        return out;
      }

      /** 清除错误 */
      function clearError() {
        pwdError.style.display = 'none';
        pwdError.textContent = '';
      }

      /**
       * 展示错误。
       * @param {string} msg
       */
      function showError(msg) {
        pwdError.textContent = msg;
        pwdError.style.display = '';
      }

      /** 批量生成密码 */
      function generatePasswords() {
        clearError();
        var pool = buildPool();
        if (!pool.length) {
          showError(msgEmptyCharset);
          pwdOutput.textContent = '';
          return;
        }
        var length = parseInt(lenRange.value, 10) || 16;
        var count = getCount();
        var lines = [];
        for (var i = 0; i < count; i++) {
          lines.push(onePassword(length, pool));
        }
        pwdOutput.textContent = lines.join('\\n');
      }

      /** 复制输出 */
      async function copyOut() {
        var value = pwdOutput.textContent || '';
        if (!value) {
          generatePasswords();
          value = pwdOutput.textContent || '';
        }
        if (!value || pwdError.style.display !== 'none') return;
        await navigator.clipboard.writeText(value);
        btnCopy.textContent = labelCopyDone;
        setTimeout(function () { btnCopy.textContent = labelCopy; }, 1200);
      }

      /** 载入样例选项并生成 */
      function loadSample() {
        lenRange.value = '16';
        lenValue.textContent = '16';
        countInput.value = '1';
        chkUpper.checked = true;
        chkLower.checked = true;
        chkDigits.checked = true;
        chkSymbols.checked = true;
        chkExcludeAmbig.checked = false;
        generatePasswords();
      }

      lenRange.addEventListener('input', function () {
        lenValue.textContent = lenRange.value;
      });
      btnGenerate.addEventListener('click', generatePasswords);
      btnCopy.addEventListener('click', copyOut);
      btnSample.addEventListener('click', loadSample);
      btnClear.addEventListener('click', function () {
        pwdOutput.textContent = '';
        clearError();
      });

      loadSample();
    })();
  </script>`;

	const toolMeta = getToolBySlug('password-generator');
	const toolSeoHtml = toolMeta
		? renderToolExtraSections({ lang: opts.lang, defaultLang: opts.defaultLang, tool: toolMeta })
		: '';
	const toolJsonLd = toolMeta
		? buildToolJsonLd({
				lang: opts.lang,
				defaultLang: opts.defaultLang,
				tool: toolMeta,
				name: t(opts.lang, toolMeta.i18nKey as any),
				description,
				canonicalPath,
			})
		: '';

	return renderLayout({
		lang: opts.lang,
		title,
		description,
		canonicalPath,
		ogImageUrl: 'https://onlinefreetools.org/og-image.png',
		ogType: 'website',
		alternates,
		headerHtml,
		sidebarHtml,
		contentHtml: `${contentHtml}${igHtml}${toolSeoHtml}${referencesHtml}`,
		footerHtml,
		extraHeadHtml: `${extraHeadHtml}${toolJsonLd}`,
		extraBodyHtml,
		includeSidebarToggleScript: true,
		sidebarAutoCloseSelector: '#toolNav a',
	});
};
