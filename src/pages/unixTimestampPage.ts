/**
 * Unix 时间戳转换工具页：Timestamp↔Date 双向 Tab，Tier 0 原生 Date/Intl。
 * slug: unix-timestamp；见 work-tasks/unix-timestamp/02-tool-info.md。
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
 * 渲染 Unix 时间戳转换工具页。
 * @param opts.lang 当前语言
 * @param opts.defaultLang 站点默认语言
 * @param opts.enabledLangs 启用语言列表（语言切换器用全量 supportedLangs）
 */
export const renderUnixTimestampPage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	const toolPath = '/tools/unix-timestamp';
	const canonicalPath = withLangPrefix(opts.lang, toolPath, opts.defaultLang);
	const title = `${t(opts.lang, 'tool_unix_timestamp_title')} | ${t(opts.lang, 'brand')}`;
	const description = t(opts.lang, 'tool_unix_timestamp_description');

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
		items: buildToolSidebarItems({ lang: opts.lang, defaultLang: opts.defaultLang, currentSlug: 'unix-timestamp', currentAnchor: '#converter' }),
		id: 'toolNav',
	});

	const footerHtml = renderFooter({ lang: opts.lang });

	/** 页内样式：结果区、datetime 输入。 */
	const extraHeadHtml = `
  <style>
    .tools-bar { gap: .5rem; }
    .result-box {
      font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
      font-size: .9rem; white-space: pre-wrap; word-break: break-word;
    }
    #tsInput { font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace; }
    .opt-group { gap: .75rem; }
  </style>`;

	const contentHtml = `
    <div id="converter" class="tool-hero">
      <h1 class="tool-title">${escapeHtml(t(opts.lang, 'tool_unix_timestamp_title'))}</h1>
      <p class="tool-lead">${escapeHtml(description)}</p>
    </div>

    <div class="tool-panel">
    <div class="d-flex align-items-center tools-bar mb-2 flex-wrap">
      <div class="btn-group" role="group" aria-label="${escapeHtml(t(opts.lang, 'tool_unix_timestamp_dir_label'))}">
        <input type="radio" class="btn-check" name="tsDir" id="dirTsToDate" value="ts2date" checked>
        <label class="btn btn-outline-primary btn-sm" for="dirTsToDate">${escapeHtml(t(opts.lang, 'tool_unix_timestamp_tab_ts_to_date'))}</label>
        <input type="radio" class="btn-check" name="tsDir" id="dirDateToTs" value="date2ts">
        <label class="btn btn-outline-primary btn-sm" for="dirDateToTs">${escapeHtml(t(opts.lang, 'tool_unix_timestamp_tab_date_to_ts'))}</label>
      </div>
      <button type="button" id="btnConvert" class="btn btn-primary">${escapeHtml(t(opts.lang, 'tool_unix_timestamp_convert'))}</button>
      <button type="button" id="btnNow" class="btn btn-outline-secondary btn-sm">${escapeHtml(t(opts.lang, 'tool_unix_timestamp_now'))}</button>
      <button type="button" id="btnCopy" class="btn btn-outline-primary">${escapeHtml(t(opts.lang, 'tool_unix_timestamp_copy'))}</button>
      <button type="button" id="btnSample" class="btn btn-outline-secondary btn-sm">${escapeHtml(t(opts.lang, 'tool_unix_timestamp_sample'))}</button>
      <button type="button" id="btnClear" class="btn btn-outline-secondary btn-sm">${escapeHtml(t(opts.lang, 'tool_unix_timestamp_clear'))}</button>
    </div>

    <div class="d-flex flex-wrap align-items-center opt-group mb-3 small">
      <span class="text-muted">${escapeHtml(t(opts.lang, 'tool_unix_timestamp_unit_label'))}</span>
      <div class="btn-group btn-group-sm" role="group" aria-label="${escapeHtml(t(opts.lang, 'tool_unix_timestamp_unit_label'))}">
        <input type="radio" class="btn-check" name="tsUnit" id="unitSec" value="seconds" checked>
        <label class="btn btn-outline-secondary" for="unitSec">${escapeHtml(t(opts.lang, 'tool_unix_timestamp_unit_seconds'))}</label>
        <input type="radio" class="btn-check" name="tsUnit" id="unitMs" value="milliseconds">
        <label class="btn btn-outline-secondary" for="unitMs">${escapeHtml(t(opts.lang, 'tool_unix_timestamp_unit_milliseconds'))}</label>
      </div>
    </div>

    <div id="convertError" class="alert alert-danger py-2 small mb-2" style="display:none" role="alert"></div>

    <div id="paneTsToDate">
      <div class="mb-3">
        <label for="tsInput" class="form-label">${escapeHtml(t(opts.lang, 'tool_unix_timestamp_ts_input_label'))}</label>
        <input type="text" id="tsInput" class="form-control" inputmode="numeric" placeholder="${escapeHtml(t(opts.lang, 'tool_unix_timestamp_ts_input_placeholder'))}" spellcheck="false">
      </div>
      <div class="row g-3 mb-3">
        <div class="col-12 col-md-6">
          <label class="form-label">${escapeHtml(t(opts.lang, 'tool_unix_timestamp_utc_label'))}</label>
          <pre id="outUtc" class="result result-box mb-0 border rounded p-3 bg-light" tabindex="0"></pre>
        </div>
        <div class="col-12 col-md-6">
          <label class="form-label">${escapeHtml(t(opts.lang, 'tool_unix_timestamp_local_label'))}</label>
          <pre id="outLocal" class="result result-box mb-0 border rounded p-3 bg-light" tabindex="0"></pre>
        </div>
      </div>
    </div>

    <div id="paneDateToTs" hidden>
      <div class="mb-3">
        <label for="dtInput" class="form-label">${escapeHtml(t(opts.lang, 'tool_unix_timestamp_dt_input_label'))}</label>
        <input type="datetime-local" id="dtInput" class="form-control">
      </div>
      <div class="mb-3">
        <label class="form-label" for="outTs">${escapeHtml(t(opts.lang, 'tool_unix_timestamp_ts_output_label'))}</label>
        <pre id="outTs" class="result result-box mb-0 border rounded p-3 bg-light" tabindex="0"></pre>
      </div>
    </div>
    </div>`;

	const igHtml = renderToolIgSections({
		lang: opts.lang,
		prefix: 'tool_unix_timestamp',
		mode: 'rules',
		usecaseCount: 3,
		ruleItemCount: 4,
	});

	const referencesHtml = renderToolReferencesSection({
		lang: opts.lang,
		links: [
			{
				label: 'Wikipedia — Unix time',
				href: 'https://en.wikipedia.org/wiki/Unix_time',
			},
			{
				label: 'MDN — Date',
				href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date',
			},
		],
	});

	/** 客户端：Tier 0 原生时间戳转换（Date/Intl，无外部库）。 */
	const extraBodyHtml = `
  <script>
    (function () {
      /** ECMAScript Date 合法毫秒范围（±100 百万年量级） */
      var MIN_MS = -8640000000000000;
      var MAX_MS = 8640000000000000;

      var paneTsToDate = document.getElementById('paneTsToDate');
      var paneDateToTs = document.getElementById('paneDateToTs');
      var tsInput = document.getElementById('tsInput');
      var dtInput = document.getElementById('dtInput');
      var outUtc = document.getElementById('outUtc');
      var outLocal = document.getElementById('outLocal');
      var outTs = document.getElementById('outTs');
      var btnConvert = document.getElementById('btnConvert');
      var btnNow = document.getElementById('btnNow');
      var btnCopy = document.getElementById('btnCopy');
      var btnSample = document.getElementById('btnSample');
      var btnClear = document.getElementById('btnClear');
      var convertError = document.getElementById('convertError');

      var labelCopy = ${JSON.stringify(t(opts.lang, 'tool_unix_timestamp_copy'))};
      var labelCopyDone = ${JSON.stringify(t(opts.lang, 'tool_unix_timestamp_copy_done'))};
      var msgInvalid = ${JSON.stringify(t(opts.lang, 'tool_unix_timestamp_error_invalid'))};
      var msgRange = ${JSON.stringify(t(opts.lang, 'tool_unix_timestamp_error_range'))};
      var sampleTs = ${JSON.stringify(t(opts.lang, 'tool_unix_timestamp_sample_ts'))};

      /** 当前模式：ts2date | date2ts */
      function getDir() {
        var el = document.querySelector('input[name="tsDir"]:checked');
        return el ? el.value : 'ts2date';
      }

      /** 是否 Timestamp → Date 模式 */
      function isTsToDate() {
        return getDir() === 'ts2date';
      }

      /** 当前单位：seconds | milliseconds */
      function getUnit() {
        var el = document.querySelector('input[name="tsUnit"]:checked');
        return el ? el.value : 'seconds';
      }

      /**
       * 解析时间戳字符串为毫秒（BigInt 中间值防溢出）。
       * @param {string} raw 输入
       * @param {string} unit seconds | milliseconds
       */
      function parseTimestampMs(raw, unit) {
        var cleaned = (raw || '').trim().replace(/[,_\\s]/g, '');
        if (!cleaned || !/^-?\\d+(\\.\\d+)?$/.test(cleaned)) throw new Error(msgInvalid);
        if (cleaned.indexOf('.') >= 0) {
          var num = Number(cleaned);
          if (!Number.isFinite(num)) throw new Error(msgInvalid);
          return unit === 'seconds' ? num * 1000 : num;
        }
        var bi = BigInt(cleaned);
        var msBi = unit === 'seconds' ? bi * 1000n : bi;
        if (msBi < BigInt(MIN_MS) || msBi > BigInt(MAX_MS)) throw new Error(msgRange);
        return Number(msBi);
      }

      /**
       * 根据数字位数猜测秒/毫秒（≥13 位或绝对值 >1e12 视为毫秒）。
       * @param {string} raw
       */
      function autoDetectUnit(raw) {
        var cleaned = (raw || '').trim().replace(/[,_\\s]/g, '');
        if (!/^-?\\d+$/.test(cleaned)) return null;
        var digits = cleaned.replace('-', '').length;
        if (digits >= 13 || Math.abs(Number(cleaned)) > 1e12) return 'milliseconds';
        if (digits <= 10) return 'seconds';
        return null;
      }

      /**
       * 毫秒格式化为 UTC ISO 串。
       * @param {number} ms
       */
      function formatUtc(ms) {
        return new Date(ms).toISOString();
      }

      /**
       * 毫秒格式化为本地可读串。
       * @param {number} ms
       */
      function formatLocal(ms) {
        try {
          return new Intl.DateTimeFormat(undefined, {
            dateStyle: 'full',
            timeStyle: 'long'
          }).format(new Date(ms));
        } catch (e) {
          return new Date(ms).toString();
        }
      }

      /**
       * datetime-local 值转毫秒（按浏览器本地时区解析）。
       * @param {string} value YYYY-MM-DDTHH:mm
       */
      function parseDatetimeLocal(value) {
        if (!value) throw new Error(msgInvalid);
        var ms = new Date(value).getTime();
        if (!Number.isFinite(ms)) throw new Error(msgInvalid);
        if (ms < MIN_MS || ms > MAX_MS) throw new Error(msgRange);
        return ms;
      }

      /**
       * 毫秒格式化为 datetime-local 输入值。
       * @param {number} ms
       */
      function toDatetimeLocalValue(ms) {
        var d = new Date(ms);
        var pad = function (n) { return String(n).padStart(2, '0'); };
        return d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate()) +
          'T' + pad(d.getHours()) + ':' + pad(d.getMinutes());
      }

      /** 展示错误 */
      function showError(err) {
        var msg = (err && err.message) ? String(err.message) : String(err || 'Error');
        convertError.textContent = msg;
        convertError.style.display = '';
      }

      /** 清除错误 */
      function clearError() {
        convertError.style.display = 'none';
        convertError.textContent = '';
      }

      /** 切换 Tab 面板可见性 */
      function applyDirUi() {
        var ts2date = isTsToDate();
        paneTsToDate.hidden = !ts2date;
        paneDateToTs.hidden = ts2date;
        clearError();
      }

      /** 执行转换 */
      function convert() {
        clearError();
        try {
          if (isTsToDate()) {
            var raw = tsInput.value || '';
            if (!raw.trim()) {
              outUtc.textContent = '';
              outLocal.textContent = '';
              return;
            }
            var detected = autoDetectUnit(raw);
            var unit = getUnit();
            if (detected && detected !== unit) {
              var el = document.getElementById(detected === 'milliseconds' ? 'unitMs' : 'unitSec');
              if (el) el.checked = true;
              unit = detected;
            }
            var ms = parseTimestampMs(raw, unit);
            if (!Number.isFinite(ms)) throw new Error(msgInvalid);
            var d = new Date(ms);
            if (Number.isNaN(d.getTime())) throw new Error(msgInvalid);
            outUtc.textContent = formatUtc(ms);
            outLocal.textContent = formatLocal(ms);
          } else {
            var dtVal = dtInput.value || '';
            if (!dtVal) {
              outTs.textContent = '';
              return;
            }
            var ms2 = parseDatetimeLocal(dtVal);
            var unit2 = getUnit();
            var out = unit2 === 'seconds'
              ? String(Math.trunc(ms2 / 1000))
              : String(Math.trunc(ms2));
            outTs.textContent = out;
          }
        } catch (e) {
          showError(e);
          if (isTsToDate()) {
            outUtc.textContent = '';
            outLocal.textContent = '';
          } else {
            outTs.textContent = '';
          }
        }
      }

      /** 填入当前时刻 */
      function fillNow() {
        var nowMs = Date.now();
        if (isTsToDate()) {
          var unit = getUnit();
          tsInput.value = unit === 'seconds'
            ? String(Math.trunc(nowMs / 1000))
            : String(nowMs);
        } else {
          dtInput.value = toDatetimeLocalValue(nowMs);
        }
        convert();
      }

      /** 复制主输出 */
      async function copyOut() {
        convert();
        if (convertError.style.display !== 'none') return;
        var value = '';
        if (isTsToDate()) {
          value = (outUtc.textContent || '') + '\\n' + (outLocal.textContent || '');
        } else {
          value = outTs.textContent || '';
        }
        if (!value.trim()) return;
        await navigator.clipboard.writeText(value);
        btnCopy.textContent = labelCopyDone;
        setTimeout(function () { btnCopy.textContent = labelCopy; }, 1200);
      }

      /** 载入样例 */
      function loadSample() {
        if (isTsToDate()) {
          document.getElementById('unitSec').checked = true;
          tsInput.value = sampleTs;
        } else {
          dtInput.value = '2018-01-18T09:30';
        }
        convert();
      }

      btnConvert.addEventListener('click', convert);
      btnNow.addEventListener('click', fillNow);
      btnCopy.addEventListener('click', copyOut);
      btnSample.addEventListener('click', loadSample);
      btnClear.addEventListener('click', function () {
        tsInput.value = '';
        dtInput.value = '';
        outUtc.textContent = '';
        outLocal.textContent = '';
        outTs.textContent = '';
        clearError();
      });
      document.querySelectorAll('input[name="tsDir"]').forEach(function (el) {
        el.addEventListener('change', applyDirUi);
      });
      document.querySelectorAll('input[name="tsUnit"]').forEach(function (el) {
        el.addEventListener('change', convert);
      });
      tsInput.addEventListener('input', convert);
      dtInput.addEventListener('input', convert);

      document.getElementById('unitSec').checked = true;
      tsInput.value = sampleTs;
      applyDirUi();
      convert();
    })();
  </script>`;

	const toolMeta = getToolBySlug('unix-timestamp');
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
