/**
 * 年龄计算器：出生日期与截至日期 → 年/月/日 + 总整天数（UTC 日历日）。
 * 修复客户端禁止反斜杠导致的 YYYY-MM-DD 解析；提供「今日」快捷与分步。
 * slug: how-to-calculate-age（见 work-tasks/how-to-calculate-age/02-tool-info.md）。
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
	buildToolJsonLd,
	renderToolIgSections,
	renderToolReferencesSection,
} from './site/toolContent';

/** 本工具 i18n 键前缀。 */
const PREFIX = 'tool_age';

/** 为路径加上语言前缀（默认语无前缀）。 */
const withLangPrefix = (lang: SiteLang, pathname: string, defaultLang: SiteLang) => {
	const safe = pathname.startsWith('/') ? pathname : `/${pathname}`;
	return lang === defaultLang ? safe : `/${lang}${safe}`;
};

/**
 * 渲染 how-to-calculate-age 工具页 HTML。
 * @param opts.lang 当前语言
 * @param opts.defaultLang 站点默认语言
 * @param opts.enabledLangs 启用语言列表
 * @returns 完整页面 HTML
 */
export const renderHowToCalculateAgePage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	/** 读取本工具键。 */
	const tx = (key: string) => t(opts.lang, `${PREFIX}_${key}` as keyof typeof import('../site/i18n/en').default);

	const toolPath = '/tools/how-to-calculate-age';
	const canonicalPath = withLangPrefix(opts.lang, toolPath, opts.defaultLang);
	const title = `${tx('title')} | ${t(opts.lang, 'brand')}`;
	const description = tx('description');

	const navItems = buildToolPageNavItems(opts.lang, opts.defaultLang);

	/** 语言切换链接始终带显式语言前缀。 */
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
			currentSlug: 'how-to-calculate-age',
			currentAnchor: '#age',
		}),
		id: 'toolNav',
	});

	const footerHtml = renderFooter({ lang: opts.lang });

	const extraHeadHtml = `
  <style>
    .tool-card { max-width: var(--content-max); width: 100%; margin: 0 0 1.5rem; }
    .form-label { display:block; margin-bottom:.5rem; color:#495057; font-weight:500 }
    .form-hint { display:block; color:#6c757d; font-size:.85rem; margin:-.25rem 0 .75rem; }
    .form-group { margin-bottom:1rem; }
    .form-row { display:grid; grid-template-columns:repeat(2, minmax(0, 1fr)); gap:0 1rem; }
    @media (max-width:576px) { .form-row { grid-template-columns:minmax(0, 1fr); } }
    .btn-row { display:flex; flex-wrap:wrap; gap:.5rem; align-items:center; }
    .result { background:#f8f9fa; padding:1rem; border-radius:8px; margin-top:1rem; }
    .age-out { font-size:1.35rem; font-weight:600; font-variant-numeric:tabular-nums; }
    .age-row { color:#495057; font-size:.92rem; margin-top:.4rem; }
    .age-row strong { color:#343a40; }
    .age-h { font-size:1rem; font-weight:600; margin:1rem 0 .35rem; }
    .age-steps { margin:0; padding-inline-start:1.3rem; font-size:.92rem; }
    .age-steps li { margin-bottom:.35rem; }
    .result .muted { color:#6c757d; font-size:.9rem; margin-top:.75rem; }
    .result .muted.age-err { color:#b02a37; font-weight:500; margin-top:0; }
  </style>`;

	const contentHtml = `
    <div id="age" class="mb-3">
      <h1 class="h4 mb-1">${escapeHtml(tx('title'))}</h1>
      <p class="text-muted mb-0">${escapeHtml(description)}</p>
    </div>

    <div class="card tool-card">
      <div class="card-body">
        <form id="calcForm" novalidate>
          <span class="form-hint">${escapeHtml(tx('hint'))}</span>
          <div class="form-row">
            <div class="form-group">
              <label class="form-label" for="birth">${escapeHtml(tx('birth_label'))}</label>
              <input id="birth" class="input-lg" type="date" autocomplete="bday">
            </div>
            <div class="form-group">
              <label class="form-label" for="asof">${escapeHtml(tx('asof_label'))}</label>
              <input id="asof" class="input-lg" type="date">
            </div>
          </div>
          <div class="btn-row">
            <button type="submit" class="btn btn-primary">${escapeHtml(tx('calculate'))}</button>
            <button type="button" id="btnToday" class="btn btn-outline-secondary">${escapeHtml(tx('today'))}</button>
            <button type="button" id="btnSample" class="btn btn-outline-secondary">${escapeHtml(tx('sample'))}</button>
            <button type="button" id="btnClear" class="btn btn-outline-secondary">${escapeHtml(tx('clear'))}</button>
          </div>
        </form>
        <div id="calcResult" class="result" style="display:none" aria-live="polite">
          <div class="age-out"><span id="agePrimary"></span></div>
          <div id="ageRows"></div>
          <div id="ageStepsWrap">
            <div class="age-h">${escapeHtml(tx('steps_title'))}</div>
            <ol id="ageSteps" class="age-steps"></ol>
          </div>
          <div id="calcNote" class="muted"></div>
        </div>
      </div>
    </div>

    ${renderToolIgSections({
			lang: opts.lang,
			prefix: PREFIX,
			mode: 'formula',
			howItemCount: 4,
			whyChooseItemCount: 5,
			usecaseCount: 4,
			formulaItemCount: 5,
		})}`;

	const referencesHtml = renderToolReferencesSection({
		lang: opts.lang,
		links: [
			{ label: tx('ref_a_label'), href: 'https://en.wikipedia.org/wiki/Chronological_age' },
			{ label: tx('ref_b_label'), href: 'https://en.wikipedia.org/wiki/Calendar_date' },
		],
	});

	/** 前端文案（禁止在脚本模板字面量中使用反斜杠）。 */
	const clientText = {
		lang: opts.lang,
		err: tx('err_generic'),
		note: tx('result_note'),
		labelYmd: tx('ymdOut_label'),
		labelYears: tx('yearsOut_label'),
		labelMonths: tx('monthsOut_label'),
		labelDays: tx('daysOut_label'),
		labelTotal: tx('totalDaysOut_label'),
		stepYmd: tx('step_ymd_tpl'),
		stepBorrow: tx('step_borrow_tpl'),
		stepTotal: tx('step_total_tpl'),
	};

	const extraBodyHtml = `
  <script>
    (function () {
      /** 控件。 */
      var form = document.getElementById('calcForm');
      var birthEl = document.getElementById('birth');
      var asofEl = document.getElementById('asof');
      var result = document.getElementById('calcResult');
      var primaryEl = document.getElementById('agePrimary');
      var rowsEl = document.getElementById('ageRows');
      var stepsEl = document.getElementById('ageSteps');
      var stepsWrap = document.getElementById('ageStepsWrap');
      var noteEl = document.getElementById('calcNote');
      var T = ${JSON.stringify(clientText)};
      var sampleIndex = 0;
      var SAMPLES = [
        { birth: '2000-01-01', asof: '2026-08-09' },
        { birth: '2000-02-29', asof: '2024-02-28' },
        { birth: '1990-06-15', asof: '1990-06-15' },
        { birth: '1985-12-31', asof: '2026-01-01' }
      ];

      /**
       * 解析 YYYY-MM-DD 为 UTC 午夜（不用正则反斜杠）。
       * @param {string} s 日期字符串
       * @returns {Date|null}
       */
      function parseYMD(s) {
        var parts = String(s == null ? '' : s).trim().split('-');
        if (parts.length !== 3) return null;
        var y = Number(parts[0]);
        var mo = Number(parts[1]);
        var d = Number(parts[2]);
        if (!isFinite(y) || !isFinite(mo) || !isFinite(d)) return null;
        if (parts[0].length !== 4 || parts[1].length !== 2 || parts[2].length !== 2) return null;
        if (mo < 1 || mo > 12 || d < 1 || d > 31) return null;
        var dt = new Date(Date.UTC(y, mo - 1, d));
        if (dt.getUTCFullYear() !== y || dt.getUTCMonth() !== mo - 1 || dt.getUTCDate() !== d) return null;
        return dt;
      }

      /**
       * 格式化为 YYYY-MM-DD。
       * @param {Date} dt UTC 日期
       * @returns {string}
       */
      function toYMD(dt) {
        var y = dt.getUTCFullYear();
        var m = dt.getUTCMonth() + 1;
        var d = dt.getUTCDate();
        var ms = m < 10 ? '0' + m : String(m);
        var ds = d < 10 ? '0' + d : String(d);
        return y + '-' + ms + '-' + ds;
      }

      /**
       * 模板替换。
       * @param {string} tpl 模板
       * @param {Object} map 键值
       * @returns {string}
       */
      function fill(tpl, map) {
        var s = String(tpl || '');
        Object.keys(map).forEach(function (k) {
          s = s.split('{' + k + '}').join(String(map[k]));
        });
        return s;
      }

      /**
       * 显示错误。
       * @param {string} msg 错误文案
       */
      function showError(msg) {
        result.style.display = 'block';
        primaryEl.textContent = '—';
        rowsEl.innerHTML = '';
        stepsEl.innerHTML = '';
        stepsWrap.style.display = 'none';
        noteEl.className = 'muted age-err';
        noteEl.textContent = msg;
      }

      /** 核心计算。 */
      function run() {
        var birth = parseYMD(birthEl.value);
        var asof = parseYMD(asofEl.value);
        if (!birth || !asof || asof.getTime() < birth.getTime()) return showError(T.err);

        var years = asof.getUTCFullYear() - birth.getUTCFullYear();
        var months = asof.getUTCMonth() - birth.getUTCMonth();
        var days = asof.getUTCDate() - birth.getUTCDate();
        var borrowed = false;
        if (days < 0) {
          borrowed = true;
          months -= 1;
          var prev = new Date(Date.UTC(asof.getUTCFullYear(), asof.getUTCMonth(), 0));
          days += prev.getUTCDate();
        }
        if (months < 0) {
          years -= 1;
          months += 12;
        }
        var totalDays = Math.round((asof.getTime() - birth.getTime()) / 86400000);

        primaryEl.textContent =
          years + ' ' + T.labelYears + ', ' + months + ' ' + T.labelMonths + ', ' + days + ' ' + T.labelDays;
        rowsEl.innerHTML =
          '<div class="age-row"><strong>' + T.labelTotal + ':</strong> ' + totalDays + '</div>';

        var steps = [
          fill(T.stepYmd, {
            birth: toYMD(birth),
            asof: toYMD(asof),
            y: years,
            m: months,
            d: days
          }),
          fill(T.stepTotal, { total: totalDays })
        ];
        if (borrowed) {
          steps.splice(1, 0, T.stepBorrow);
        }
        stepsEl.innerHTML = steps.map(function (s) { return '<li>' + s + '</li>'; }).join('');
        stepsWrap.style.display = '';
        noteEl.className = 'muted';
        noteEl.textContent = T.note;
        result.style.display = 'block';
      }

      /** 截至日期设为今天（UTC 日历日）。 */
      function setToday() {
        var now = new Date();
        var utc = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate()));
        asofEl.value = toYMD(utc);
        run();
      }

      /** 加载样例。 */
      function loadSample() {
        var s = SAMPLES[sampleIndex % SAMPLES.length];
        sampleIndex += 1;
        birthEl.value = s.birth;
        asofEl.value = s.asof;
        run();
      }

      /** 清空。 */
      function clearAll() {
        form.reset();
        result.style.display = 'none';
        birthEl.focus();
      }

      form.addEventListener('submit', function (e) {
        e.preventDefault();
        run();
      });
      document.getElementById('btnToday').addEventListener('click', setToday);
      document.getElementById('btnSample').addEventListener('click', loadSample);
      document.getElementById('btnClear').addEventListener('click', clearAll);
      loadSample();
    })();
  </script>`;

	const toolMeta = getToolBySlug('how-to-calculate-age');
	const toolSeoHtml = toolMeta
		? renderToolExtraSections({ lang: opts.lang, defaultLang: opts.defaultLang, tool: toolMeta })
		: '';
	const toolJsonLd = toolMeta
		? buildToolJsonLd({
				lang: opts.lang,
				defaultLang: opts.defaultLang,
				tool: toolMeta,
				name: t(opts.lang, toolMeta.i18nKey as keyof typeof import('../site/i18n/en').default),
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
		contentHtml: `${contentHtml}${toolSeoHtml}${referencesHtml}`,
		footerHtml,
		extraHeadHtml: `${extraHeadHtml}${toolJsonLd}`,
		extraBodyHtml,
		includeSidebarToggleScript: true,
		sidebarAutoCloseSelector: '#toolNav a',
	});
};
