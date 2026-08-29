/**
 * 时区转换工具页：单时间点 Intl 多时区对照（Tier 0）。
 * slug: timezone-converter；见 work-tasks/timezone-converter/02-tool-info.md。
 * 边界：即时多区表格，非 meeting-timezone-pack（无团队导出包）。
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
 * 渲染时区转换工具页。
 * @param opts.lang 当前语言
 * @param opts.defaultLang 站点默认语言
 * @param opts.enabledLangs 启用语言列表
 */
export const renderTimezoneConverterPage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	const toolPath = '/tools/timezone-converter';
	const canonicalPath = withLangPrefix(opts.lang, toolPath, opts.defaultLang);
	const title = `${t(opts.lang, 'tool_timezone_converter_title')} | ${t(opts.lang, 'brand')}`;
	const description = t(opts.lang, 'tool_timezone_converter_description');

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
			currentSlug: 'timezone-converter',
			currentAnchor: '#converter',
		}),
		id: 'toolNav',
	});

	const footerHtml = renderFooter({ lang: opts.lang });

	/** 页内样式：对照表与多选时区区。 */
	const extraHeadHtml = `
  <style>
    .tools-bar { gap: .5rem; }
    #tzTable { font-size: .9rem; }
    #tzTable th { white-space: nowrap; }
    #tzTable td { vertical-align: middle; }
    .tz-zone-name { font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace; font-size: .85rem; }
    .tz-check-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(11rem, 1fr)); gap: .35rem .75rem; }
    .tz-check-grid label { font-size: .85rem; margin-bottom: 0; }
  </style>`;

	const contentHtml = `
    <div id="converter" class="tool-hero">
      <h1 class="tool-title">${escapeHtml(t(opts.lang, 'tool_timezone_converter_title'))}</h1>
      <p class="tool-lead">${escapeHtml(description)}</p>
    </div>

    <div class="tool-panel">
    <div class="d-flex align-items-center tools-bar mb-3 flex-wrap">
      <button type="button" id="btnConvert" class="btn btn-primary">${escapeHtml(t(opts.lang, 'tool_timezone_converter_convert'))}</button>
      <button type="button" id="btnNow" class="btn btn-outline-primary btn-sm">${escapeHtml(t(opts.lang, 'tool_timezone_converter_now'))}</button>
      <button type="button" id="btnSample" class="btn btn-outline-secondary btn-sm">${escapeHtml(t(opts.lang, 'tool_timezone_converter_sample'))}</button>
      <button type="button" id="btnClear" class="btn btn-outline-secondary btn-sm">${escapeHtml(t(opts.lang, 'tool_timezone_converter_clear'))}</button>
    </div>

    <div class="row g-3 mb-3">
      <div class="col-12 col-md-6">
        <label for="srcDatetime" class="form-label">${escapeHtml(t(opts.lang, 'tool_timezone_converter_source_time'))}</label>
        <input type="datetime-local" id="srcDatetime" class="form-control" step="60">
      </div>
      <div class="col-12 col-md-6">
        <label for="srcTz" class="form-label">${escapeHtml(t(opts.lang, 'tool_timezone_converter_source_tz'))}</label>
        <select id="srcTz" class="form-select"></select>
      </div>
    </div>

    <div class="mb-3">
      <div class="form-label mb-2">${escapeHtml(t(opts.lang, 'tool_timezone_converter_compare_zones'))}</div>
      <div id="targetChecks" class="tz-check-grid"></div>
    </div>

    <div id="convertError" class="alert alert-danger py-2 small mb-2" style="display:none" role="alert"></div>

    <div class="table-responsive">
      <table id="tzTable" class="table table-sm table-striped align-middle mb-0">
        <thead>
          <tr>
            <th scope="col">${escapeHtml(t(opts.lang, 'tool_timezone_converter_col_zone'))}</th>
            <th scope="col">${escapeHtml(t(opts.lang, 'tool_timezone_converter_col_local'))}</th>
            <th scope="col">${escapeHtml(t(opts.lang, 'tool_timezone_converter_col_offset'))}</th>
          </tr>
        </thead>
        <tbody id="tzTableBody"></tbody>
      </table>
    </div>
    </div>`;

	const igHtml = renderToolIgSections({
		lang: opts.lang,
		prefix: 'tool_timezone_converter',
		mode: 'rules',
		usecaseCount: 3,
		ruleItemCount: 4,
	});

	const referencesHtml = renderToolReferencesSection({
		lang: opts.lang,
		links: [
			{
				label: 'IANA — Time Zone Database',
				href: 'https://www.iana.org/time-zones',
			},
			{
				label: 'MDN — Intl.DateTimeFormat',
				href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat',
			},
		],
	});

	/** 客户端：Tier 0 Intl.DateTimeFormat 多时区对照（无上传、无外部 API）。 */
	const extraBodyHtml = `
  <script>
    (function () {
      /** 精选 IANA 时区列表（对照表候选） */
      var CURATED_ZONES = [
        'UTC',
        'America/New_York',
        'America/Los_Angeles',
        'America/Chicago',
        'America/Sao_Paulo',
        'Europe/London',
        'Europe/Paris',
        'Europe/Berlin',
        'Europe/Moscow',
        'Asia/Shanghai',
        'Asia/Tokyo',
        'Asia/Singapore',
        'Asia/Kolkata',
        'Asia/Dubai',
        'Australia/Sydney',
        'Pacific/Auckland'
      ];

      /** 进页样例：源时刻与默认勾选的对照区 */
      var SAMPLE_DATETIME = '2026-06-15T14:30';
      var SAMPLE_SOURCE_TZ = 'America/Los_Angeles';
      var DEFAULT_TARGETS = ['UTC', 'America/New_York', 'Europe/London', 'Asia/Tokyo'];

      var pageLocale = ${JSON.stringify(opts.lang === 'zh' ? 'zh-CN' : opts.lang)};
      var msgEmpty = ${JSON.stringify(t(opts.lang, 'tool_timezone_converter_error_empty'))};
      var msgInvalid = ${JSON.stringify(t(opts.lang, 'tool_timezone_converter_error_invalid'))};
      var msgDstGap = ${JSON.stringify(t(opts.lang, 'tool_timezone_converter_error_dst_gap'))};
      var labelLocalTz = ${JSON.stringify(t(opts.lang, 'tool_timezone_converter_local_tz'))};

      var srcDatetime = document.getElementById('srcDatetime');
      var srcTz = document.getElementById('srcTz');
      var targetChecks = document.getElementById('targetChecks');
      var tzTableBody = document.getElementById('tzTableBody');
      var convertError = document.getElementById('convertError');
      var btnConvert = document.getElementById('btnConvert');
      var btnNow = document.getElementById('btnNow');
      var btnSample = document.getElementById('btnSample');
      var btnClear = document.getElementById('btnClear');

      /** 浏览器本地 IANA 时区（若可用且不在列表中则追加） */
      var browserTz = '';
      try {
        browserTz = Intl.DateTimeFormat().resolvedOptions().timeZone || '';
      } catch (e) { browserTz = ''; }

      /** 源区下拉 + 对照多选所用完整时区列表 */
      var allZones = CURATED_ZONES.slice();
      if (browserTz && allZones.indexOf(browserTz) < 0) {
        allZones.unshift(browserTz);
      }

      /**
       * 填充源时区下拉选项。
       * @param {string[]} zones IANA 名称数组
       */
      function fillSourceSelect(zones) {
        srcTz.innerHTML = '';
        zones.forEach(function (z) {
          var opt = document.createElement('option');
          opt.value = z;
          var label = z === browserTz ? z + ' (' + labelLocalTz + ')' : z;
          opt.textContent = label;
          srcTz.appendChild(opt);
        });
      }

      /**
       * 渲染对照区多选复选框。
       * @param {string[]} zones IANA 名称数组
       * @param {string[]} checked 默认勾选的时区
       */
      function fillTargetChecks(zones, checked) {
        targetChecks.innerHTML = '';
        zones.forEach(function (z) {
          var id = 'tz_' + z.replace(/\\//g, '_');
          var wrap = document.createElement('div');
          var input = document.createElement('input');
          input.type = 'checkbox';
          input.className = 'form-check-input me-1';
          input.id = id;
          input.value = z;
          input.checked = checked.indexOf(z) >= 0;
          input.addEventListener('change', function () {
            if ((srcDatetime.value || '').trim()) convert();
          });
          var label = document.createElement('label');
          label.className = 'form-check-label';
          label.htmlFor = id;
          label.textContent = z === browserTz ? z + ' (' + labelLocalTz + ')' : z;
          wrap.appendChild(input);
          wrap.appendChild(label);
          targetChecks.appendChild(wrap);
        });
      }

      /** 读取当前勾选的对照时区列表 */
      function getSelectedTargets() {
        var out = [];
        targetChecks.querySelectorAll('input[type=checkbox]:checked').forEach(function (el) {
          out.push(el.value);
        });
        return out;
      }

      /**
       * 将 datetime-local 字符串解析为 UTC 毫秒（源时区墙上时钟）。
       * @param {string} localStr 如 2026-06-15T14:30
       * @param {string} timeZone IANA 源时区
       * @returns {{ ok: true, ms: number } | { ok: false, reason: string }}
       */
      function wallClockToUtcMs(localStr, timeZone) {
        var m = /^(\\d{4})-(\\d{2})-(\\d{2})T(\\d{2}):(\\d{2})(?::(\\d{2}))?$/.exec(localStr);
        if (!m) return { ok: false, reason: 'invalid' };
        var y = +m[1], mo = +m[2], d = +m[3], h = +m[4], mi = +m[5], s = +(m[6] || 0);
        var desiredUtc = Date.UTC(y, mo - 1, d, h, mi, s);
        var ms = desiredUtc;
        var fmt = new Intl.DateTimeFormat('en-US', {
          timeZone: timeZone,
          hour12: false,
          year: 'numeric', month: '2-digit', day: '2-digit',
          hour: '2-digit', minute: '2-digit', second: '2-digit'
        });

        /** 读取某 UTC 时刻在目标时区的分量 */
        function readParts(utcMs) {
          var parts = fmt.formatToParts(new Date(utcMs));
          var g = function (t) {
            var p = parts.find(function (x) { return x.type === t; });
            return p ? parseInt(p.value, 10) : 0;
          };
          return { y: g('year'), mo: g('month'), d: g('day'), h: g('hour'), mi: g('minute'), s: g('second') };
        }

        for (var i = 0; i < 4; i++) {
          var p = readParts(ms);
          var actualUtc = Date.UTC(p.y, p.mo - 1, p.d, p.h, p.mi, p.s);
          var diff = desiredUtc - actualUtc;
          if (diff === 0) break;
          ms += diff;
        }

        var back = readParts(ms);
        if (back.y !== y || back.mo !== mo || back.d !== d || back.h !== h || back.mi !== mi) {
          return { ok: false, reason: 'gap' };
        }
        return { ok: true, ms: ms };
      }

      /**
       * 在指定 IANA 时区格式化本地日期时间。
       * @param {number} ms UTC 毫秒
       * @param {string} timeZone 目标时区
       */
      function formatLocal(ms, timeZone) {
        return new Intl.DateTimeFormat(pageLocale, {
          timeZone: timeZone,
          weekday: 'short',
          year: 'numeric',
          month: 'short',
          day: '2-digit',
          hour: '2-digit',
          minute: '2-digit',
          hour12: false
        }).format(new Date(ms));
      }

      /**
       * 获取某时刻相对 UTC 的偏移字符串（如 GMT-7）。
       * @param {number} ms UTC 毫秒
       * @param {string} timeZone IANA 时区
       */
      function formatOffset(ms, timeZone) {
        try {
          var parts = new Intl.DateTimeFormat('en-US', {
            timeZone: timeZone,
            timeZoneName: 'shortOffset'
          }).formatToParts(new Date(ms));
          var off = parts.find(function (p) { return p.type === 'timeZoneName'; });
          return off ? off.value : '';
        } catch (e) {
          return '';
        }
      }

      /** 清除错误提示 */
      function clearError() {
        convertError.style.display = 'none';
        convertError.textContent = '';
      }

      /**
       * 展示错误信息。
       * @param {string} msg 用户可见文案
       */
      function showError(msg) {
        convertError.textContent = msg;
        convertError.style.display = '';
      }

      /** 将当前浏览器「现在」填入源时刻（源区不变） */
      function setNow() {
        var tz = srcTz.value;
        var fmt = new Intl.DateTimeFormat('en-CA', {
          timeZone: tz,
          year: 'numeric', month: '2-digit', day: '2-digit',
          hour: '2-digit', minute: '2-digit',
          hour12: false
        });
        var parts = fmt.formatToParts(new Date());
        var g = function (t) {
          var p = parts.find(function (x) { return x.type === t; });
          return p ? p.value : '00';
        };
        srcDatetime.value = g('year') + '-' + g('month') + '-' + g('day') + 'T' + g('hour') + ':' + g('minute');
        convert();
      }

      /** 载入固定样例并转换 */
      function loadSample() {
        srcDatetime.value = SAMPLE_DATETIME;
        srcTz.value = SAMPLE_SOURCE_TZ;
        fillTargetChecks(allZones, DEFAULT_TARGETS);
        convert();
      }

      /** 执行转换并刷新对照表 */
      function convert() {
        clearError();
        tzTableBody.innerHTML = '';
        var raw = (srcDatetime.value || '').trim();
        if (!raw) {
          showError(msgEmpty);
          return;
        }
        var sourceZone = srcTz.value;
        var parsed = wallClockToUtcMs(raw, sourceZone);
        if (!parsed.ok) {
          showError(parsed.reason === 'gap' ? msgDstGap : msgInvalid);
          return;
        }
        var targets = getSelectedTargets();
        if (!targets.length) {
          showError(msgEmpty);
          return;
        }
        targets.forEach(function (z) {
          var tr = document.createElement('tr');
          var tdZone = document.createElement('td');
          tdZone.className = 'tz-zone-name';
          tdZone.textContent = z;
          var tdLocal = document.createElement('td');
          tdLocal.textContent = formatLocal(parsed.ms, z);
          var tdOff = document.createElement('td');
          tdOff.textContent = formatOffset(parsed.ms, z);
          tr.appendChild(tdZone);
          tr.appendChild(tdLocal);
          tr.appendChild(tdOff);
          tzTableBody.appendChild(tr);
        });
      }

      btnConvert.addEventListener('click', convert);
      btnNow.addEventListener('click', setNow);
      btnSample.addEventListener('click', loadSample);
      btnClear.addEventListener('click', function () {
        srcDatetime.value = '';
        tzTableBody.innerHTML = '';
        clearError();
      });
      srcTz.addEventListener('change', function () {
        if ((srcDatetime.value || '').trim()) convert();
      });

      fillSourceSelect(allZones);
      loadSample();
    })();
  </script>`;

	const toolMeta = getToolBySlug('timezone-converter');
	const toolSeoHtml = toolMeta
		? renderToolExtraSections({ lang: opts.lang, defaultLang: opts.defaultLang, tool: toolMeta })
		: '';
	const toolJsonLd = toolMeta
		? buildToolJsonLd({
				lang: opts.lang,
				defaultLang: opts.defaultLang,
				tool: toolMeta,
				name: t(opts.lang, toolMeta.i18nKey as 'tool_timezone_converter_title'),
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
