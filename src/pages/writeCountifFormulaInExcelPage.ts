/**
 * Excel COUNTIF 公式生成页：输入 A1 区域与条件，生成可复制的 =COUNTIF(...)，
 * 并在进页样例表上即时显示匹配个数（通配符 * ?、比较运算符、空白）。
 * slug: write-countif-formula-in-excel（见 work-tasks/write-countif-formula-in-excel/02-tool-info.md）。
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

/** 本工具 i18n 键前缀。 */
const PREFIX = 'tool_write_countif_formula_in_excel';

/** 为路径加上语言前缀（默认语无前缀）。 */
const withLangPrefix = (lang: SiteLang, pathname: string, defaultLang: SiteLang) => {
	const safe = pathname.startsWith('/') ? pathname : `/${pathname}`;
	return lang === defaultLang ? safe : `/${lang}${safe}`;
};

/**
 * 渲染 write-countif-formula-in-excel 工具页 HTML。
 * @param opts.lang 当前语言
 * @param opts.defaultLang 站点默认语言
 * @param opts.enabledLangs 启用语言列表
 * @returns 完整页面 HTML
 */
export const renderWriteCountifFormulaInExcelPage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	/** 读取本工具键。 */
	const tx = (key: string) => t(opts.lang, `${PREFIX}_${key}` as keyof typeof import('../site/i18n/en').default);

	const toolPath = '/tools/write-countif-formula-in-excel';
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
			currentSlug: 'write-countif-formula-in-excel',
			currentAnchor: '#write',
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
    .form-row2 { display:grid; grid-template-columns:repeat(2, minmax(0, 1fr)); gap:0 1rem; }
    @media (max-width:576px) { .form-row2 { grid-template-columns:minmax(0, 1fr); } }
    .btn-row { display:flex; flex-wrap:wrap; gap:.5rem; align-items:center; }
    .chip-row { display:flex; flex-wrap:wrap; gap:.4rem; margin-bottom:.75rem; }
    .chip-row button { font-size:.85rem; }
    .result { background:#f8f9fa; padding:1rem; border-radius:8px; margin-top:1rem; }
    .cf-formula { font-family:ui-monospace, SFMono-Regular, Menlo, Consolas, monospace; font-size:1.05rem; font-weight:600; word-break:break-all; }
    .cf-row { color:#495057; font-size:.92rem; margin-top:.45rem; }
    .cf-row strong { color:#343a40; }
    .cf-h { font-size:1rem; font-weight:600; margin:1rem 0 .35rem; }
    .cf-table { width:100%; border-collapse:collapse; font-size:.9rem; font-variant-numeric:tabular-nums; }
    .cf-table th, .cf-table td { padding:.3rem .5rem; border-bottom:1px solid #dee2e6; text-align:start; }
    .cf-table th { color:#495057; font-weight:600; }
    .cf-table tr.cf-hit td { background:#e7f1ff; font-weight:600; }
    .cf-steps { margin:0; padding-inline-start:1.3rem; font-size:.92rem; }
    .cf-steps li { margin-bottom:.35rem; }
    .result .muted { color:#6c757d; font-size:.9rem; margin-top:.75rem; }
    .result .muted.cf-err { color:#b02a37; font-weight:500; margin-top:0; }
  </style>`;

	const contentHtml = `
    <div id="write" class="mb-3">
      <h1 class="h4 mb-1">${escapeHtml(tx('title'))}</h1>
      <p class="text-muted mb-0">${escapeHtml(description)}</p>
    </div>

    <div class="card tool-card">
      <div class="card-body">
        <form id="calcForm" novalidate>
          <div class="form-row2">
            <div class="form-group">
              <label class="form-label" for="cfRange">${escapeHtml(tx('range'))}</label>
              <input id="cfRange" class="input-lg" type="text" autocomplete="off" spellcheck="false" placeholder="${escapeHtml(tx('range_ph'))}">
            </div>
            <div class="form-group">
              <label class="form-label" for="cfCrit">${escapeHtml(tx('criteria'))}</label>
              <input id="cfCrit" class="input-lg" type="text" autocomplete="off" spellcheck="false" placeholder="${escapeHtml(tx('crit_ph'))}">
            </div>
          </div>
          <span class="form-hint">${escapeHtml(tx('hint'))}</span>
          <div class="chip-row" id="cfChips" aria-label="${escapeHtml(tx('chips_label'))}"></div>
          <div class="btn-row">
            <button type="submit" id="cfBtnWrite" class="btn btn-primary">${escapeHtml(tx('write'))}</button>
            <button type="button" id="cfBtnSample" class="btn btn-outline-secondary">${escapeHtml(tx('sample'))}</button>
            <button type="button" id="cfBtnCopy" class="btn btn-outline-secondary">${escapeHtml(tx('copy'))}</button>
            <button type="button" id="cfBtnClear" class="btn btn-outline-secondary">${escapeHtml(tx('clear'))}</button>
          </div>
        </form>
        <div id="calcResult" class="result" style="display:none" aria-live="polite">
          <div class="cf-h">${escapeHtml(tx('formula'))}</div>
          <div id="cfFormula" class="cf-formula"></div>
          <div id="cfRows"></div>
          <div id="cfTableWrap">
            <div class="cf-h">${escapeHtml(tx('preview_title'))}</div>
            <table class="cf-table">
              <thead><tr><th id="cfColAddr">${escapeHtml(tx('col_cell'))}</th><th id="cfColVal">${escapeHtml(tx('col_value'))}</th></tr></thead>
              <tbody id="cfBody"></tbody>
            </table>
          </div>
          <div id="cfStepsWrap">
            <div class="cf-h">${escapeHtml(tx('steps_title'))}</div>
            <ol id="cfSteps" class="cf-steps"></ol>
          </div>
          <div id="calcNote" class="muted"></div>
        </div>
      </div>
    </div>

    ${renderToolIgSections({
			lang: opts.lang,
			prefix: PREFIX,
			mode: 'rules',
			howItemCount: 4,
			whyChooseItemCount: 5,
			usecaseCount: 4,
			ruleItemCount: 5,
		})}`;

	const referencesHtml = renderToolReferencesSection({
		lang: opts.lang,
		links: [
			{
				label: tx('ref_ms_label'),
				href: 'https://support.microsoft.com/office/countif-function-e0de10c6-f885-4e71-abb4-1f464816df34',
			},
		],
	});

	/** 前端文案。 */
	const clientText = {
		lang: opts.lang,
		empty: tx('empty'),
		errRange: tx('err_range'),
		copied: tx('copied'),
		rowCount: tx('row_count'),
		rowQuoted: tx('row_quoted'),
		rowMatch: tx('row_match_tpl'),
		stepRange: tx('step_range_tpl'),
		stepCrit: tx('step_crit_tpl'),
		stepLit: tx('step_lit_tpl'),
		stepOut: tx('step_out_tpl'),
		noteEdu: tx('result_note'),
		chipEq: tx('chip_eq'),
		chipContains: tx('chip_contains'),
		chipGt: tx('chip_gt'),
		chipBlank: tx('chip_blank'),
		headerRegion: tx('header_region'),
		headerQty: tx('header_qty'),
	};

	const extraBodyHtml = `
  <script>
    (function () {
      /** 输入与结果控件。 */
      var form = document.getElementById('calcForm');
      var rangeEl = document.getElementById('cfRange');
      var critEl = document.getElementById('cfCrit');
      var chipsEl = document.getElementById('cfChips');
      var result = document.getElementById('calcResult');
      var formulaEl = document.getElementById('cfFormula');
      var rowsEl = document.getElementById('cfRows');
      var bodyEl = document.getElementById('cfBody');
      var colVal = document.getElementById('cfColVal');
      var stepsEl = document.getElementById('cfSteps');
      var stepsWrap = document.getElementById('cfStepsWrap');
      var noteEl = document.getElementById('calcNote');
      var T = ${JSON.stringify(clientText)};
      /** 样例轮换。 */
      var SAMPLES = [
        { range: 'A2:A6', crit: 'West', kind: 'text', header: T.headerRegion, cells: ['West', 'East', 'West', 'North', 'West'] },
        { range: 'A2:A6', crit: '*west*', kind: 'text', header: T.headerRegion, cells: ['West', 'Midwest', 'East', 'northwest', 'South'] },
        { range: 'B2:B6', crit: '>10', kind: 'num', header: T.headerQty, cells: ['8', '12', '10', '15', '3'] },
        { range: 'A2:A6', crit: '', kind: 'blank', header: T.headerRegion, cells: ['West', '', 'East', '', 'North'] }
      ];
      /** 空白条件在 Excel 中写作 ""。 */
      var BLANK_CRIT = '=""';
      var sampleIndex = 0;
      /** 当前预览表数据。 */
      var preview = SAMPLES[0];
      /** 上次生成的公式文本。 */
      var lastFormula = '';

      /** 模板替换。 */
      function fill(tpl, map) {
        var s = String(tpl || '');
        Object.keys(map).forEach(function (k) { s = s.split('{' + k + '}').join(String(map[k])); });
        return s;
      }

      /** HTML 转义。 */
      function escapeH(s) {
        return String(s).replace(/[&<>"]/g, function (ch) {
          return ch === '&' ? '&amp;' : ch === '<' ? '&lt;' : ch === '>' ? '&gt;' : '&quot;';
        });
      }

      /** 反斜杠字符（避免在页面模板字符串里写 \\）。 */
      var BS = String.fromCharCode(92);

      /**
       * 是否为可用作 COUNTIF 裸数字条件的字符串。
       * @param {string} raw 原文
       * @returns {boolean}
       */
      function isPlainNumber(raw) {
        var s = String(raw || '');
        var i = 0;
        if (s.charAt(0) === '-' || s.charAt(0) === '+') i = 1;
        if (i >= s.length) return false;
        var sawDigit = false;
        var sawDot = false;
        for (; i < s.length; i++) {
          var ch = s.charAt(i);
          if (ch >= '0' && ch <= '9') { sawDigit = true; continue; }
          if (ch === '.' && !sawDot) { sawDot = true; continue; }
          if ((ch === 'e' || ch === 'E') && sawDigit) {
            i++;
            if (s.charAt(i) === '+' || s.charAt(i) === '-') i++;
            var expOk = false;
            for (; i < s.length; i++) {
              if (s.charAt(i) < '0' || s.charAt(i) > '9') return false;
              expOk = true;
            }
            return expOk;
          }
          return false;
        }
        return sawDigit;
      }

      /**
       * 把条件写成 COUNTIF 字面量（数字裸写，其余加引号并双写内部引号）。
       * @param {string} c 条件原文
       * @returns {{ lit: string, quoted: boolean }}
       */
      function criteriaLiteral(c) {
        var raw = String(c == null ? '' : c);
        if (raw === '') return { lit: '""', quoted: true };
        if (isPlainNumber(raw)) return { lit: raw, quoted: false };
        return { lit: '"' + raw.split('"').join('""') + '"', quoted: true };
      }

      /**
       * 正则特殊字符转义（不用字面反斜杠）。
       * @param {string} ch 单字符
       * @returns {string}
       */
      function escapeReChar(ch) {
        return '.*+?^$()[]{}|'.indexOf(ch) >= 0 ? BS + ch : ch;
      }

      /**
       * 通配符模式转正则（* → .*，? → .，~ 转义下一字符）。
       * @param {string} pat 条件串
       * @returns {RegExp}
       */
      function wildcardRe(pat) {
        var out = '';
        for (var i = 0; i < pat.length; i++) {
          var ch = pat.charAt(i);
          if (ch === '~' && i + 1 < pat.length) { out += escapeReChar(pat.charAt(++i)); }
          else if (ch === '*') out += '.*';
          else if (ch === '?') out += '.';
          else out += escapeReChar(ch);
        }
        return new RegExp('^' + out + '$', 'i');
      }

      /**
       * 读取比较运算符前缀。
       * @param {string} c 条件
       * @returns {{ op: string, rhs: string }|null}
       */
      function cmpParts(c) {
        if (c.indexOf('<>') === 0) return { op: '<>', rhs: c.slice(2) };
        if (c.indexOf('<=') === 0) return { op: '<=', rhs: c.slice(2) };
        if (c.indexOf('>=') === 0) return { op: '>=', rhs: c.slice(2) };
        if (c.charAt(0) === '<') return { op: '<', rhs: c.slice(1) };
        if (c.charAt(0) === '>') return { op: '>', rhs: c.slice(1) };
        return null;
      }

      /**
       * 判断单元格是否匹配 COUNTIF 条件（简化浏览器预览，非完整 Excel 引擎）。
       * @param {string} cell 单元格文本
       * @param {string} crit 条件
       * @returns {boolean}
       */
      function matches(cell, crit) {
        var c = String(crit == null ? '' : crit);
        var v = String(cell == null ? '' : cell);
        if (c === '' || c === '=""') return v === '';
        var cmp = cmpParts(c);
        if (cmp) {
          var nv = Number(v);
          var nr = Number(cmp.rhs);
          if (!isFinite(nv) || !isFinite(nr)) return false;
          if (cmp.op === '>') return nv > nr;
          if (cmp.op === '>=') return nv >= nr;
          if (cmp.op === '<') return nv < nr;
          if (cmp.op === '<=') return nv <= nr;
          if (cmp.op === '<>') return nv !== nr;
        }
        if (c.indexOf('*') >= 0 || c.indexOf('?') >= 0 || c.indexOf('~') >= 0) return wildcardRe(c).test(v);
        return v.toLowerCase() === c.toLowerCase();
      }

      /**
       * 解析一个 A1 角点（如 A2、$B$10）。
       * @param {string} s 角点文本
       * @returns {boolean}
       */
      function validCorner(s) {
        var i = 0;
        if (s.charAt(i) === '$') i++;
        var letters = 0;
        while (i < s.length) {
          var ch = s.charAt(i).toUpperCase();
          if (ch < 'A' || ch > 'Z') break;
          letters++;
          i++;
          if (letters > 3) return false;
        }
        if (!letters) return false;
        if (s.charAt(i) === '$') i++;
        var digits = 0;
        while (i < s.length && s.charAt(i) >= '0' && s.charAt(i) <= '9') { digits++; i++; }
        return digits >= 1 && digits <= 7 && i === s.length;
      }

      /**
       * 校验 A1 区域写法。
       * @param {string} r 区域
       * @returns {boolean}
       */
      function validRange(r) {
        var s = String(r || '').trim();
        var parts = s.split(':');
        if (parts.length === 1) return validCorner(parts[0]);
        if (parts.length === 2) return validCorner(parts[0]) && validCorner(parts[1]);
        return false;
      }

      /** 渲染条件芯片。 */
      function renderChips() {
        var chips = [
          { label: T.chipEq, range: 'A2:A6', crit: 'West', kind: 'text', header: T.headerRegion, cells: ['West', 'East', 'West', 'North', 'West'] },
          { label: T.chipContains, range: 'A2:A6', crit: '*west*', kind: 'text', header: T.headerRegion, cells: ['West', 'Midwest', 'East', 'northwest', 'South'] },
          { label: T.chipGt, range: 'B2:B6', crit: '>10', kind: 'num', header: T.headerQty, cells: ['8', '12', '10', '15', '3'] },
          { label: T.chipBlank, range: 'A2:A6', crit: '', kind: 'blank', header: T.headerRegion, cells: ['West', '', 'East', '', 'North'] }
        ];
        chipsEl.innerHTML = '';
        chips.forEach(function (ch) {
          var b = document.createElement('button');
          b.type = 'button';
          b.className = 'btn btn-outline-secondary btn-sm';
          b.textContent = ch.label;
          b.addEventListener('click', function () {
            preview = ch;
            rangeEl.value = ch.range;
            critEl.value = ch.crit;
            run();
          });
          chipsEl.appendChild(b);
        });
      }

      /** 显示错误。 */
      function showError(msg) {
        result.style.display = 'block';
        formulaEl.textContent = '';
        rowsEl.innerHTML = '';
        bodyEl.innerHTML = '';
        stepsEl.innerHTML = '';
        stepsWrap.style.display = 'none';
        noteEl.className = 'muted cf-err';
        noteEl.textContent = msg;
        lastFormula = '';
      }

      /** 生成公式并刷新预览。 */
      function run() {
        var r = (rangeEl.value || '').trim();
        var c = critEl.value;
        if (!(r && (c !== '' || preview.kind === 'blank'))) {
          showError(T.empty);
          return;
        }
        if (!validRange(r)) {
          showError(T.errRange);
          return;
        }
        var critForLit = preview.kind === 'blank' && String(c) === '' ? '' : c;
        var litInfo = criteriaLiteral(critForLit);
        var formula = '=COUNTIF(' + r + ',' + litInfo.lit + ')';
        lastFormula = formula;
        formulaEl.textContent = formula;

        var hits = 0;
        var startRow = 2;
        var digitBuf = '';
        for (var di = 0; di < r.length; di++) {
          var dch = r.charAt(di);
          if (dch >= '0' && dch <= '9') digitBuf += dch;
          else if (digitBuf) break;
        }
        if (digitBuf) startRow = parseInt(digitBuf, 10);
        var colLetter = 'A';
        var colBuf = '';
        for (var ci = 0; ci < r.length; ci++) {
          var cch = r.charAt(ci).toUpperCase();
          if (cch >= 'A' && cch <= 'Z') colBuf += cch;
          else if (colBuf) break;
        }
        if (colBuf) colLetter = colBuf;
        colVal.textContent = preview.header;
        var html = '';
        preview.cells.forEach(function (cell, i) {
          var hit = matches(cell, critForLit === '' && preview.kind === 'blank' ? '' : c);
          if (hit) hits++;
          html += '<tr class="' + (hit ? 'cf-hit' : '') + '"><td>' + escapeH(colLetter + (startRow + i)) + '</td><td>' + escapeH(cell === '' ? '—' : cell) + '</td></tr>';
        });
        bodyEl.innerHTML = html;

        rowsEl.innerHTML =
          '<div class="cf-row"><strong>' + escapeH(T.rowCount) + ':</strong> ' + hits + '</div>' +
          '<div class="cf-row"><strong>' + escapeH(T.rowQuoted) + ':</strong> ' + escapeH(litInfo.quoted ? litInfo.lit : litInfo.lit + ' (number)') + '</div>' +
          '<div class="cf-row">' + escapeH(fill(T.rowMatch, { n: String(hits), total: String(preview.cells.length) })) + '</div>';

        stepsEl.innerHTML = [
          fill(T.stepRange, { r: r }),
          fill(T.stepCrit, { c: critForLit === '' ? '""' : c }),
          fill(T.stepLit, { lit: litInfo.lit }),
          fill(T.stepOut, { f: formula })
        ].map(function (s) { return '<li>' + escapeH(s) + '</li>'; }).join('');
        stepsWrap.style.display = '';
        noteEl.className = 'muted';
        noteEl.textContent = T.noteEdu;
        result.style.display = 'block';
      }

      /** 加载样例。 */
      function loadSample() {
        preview = SAMPLES[sampleIndex % SAMPLES.length];
        sampleIndex += 1;
        rangeEl.value = preview.range;
        critEl.value = preview.crit;
        run();
      }

      /** 清空。 */
      function clearAll() {
        rangeEl.value = '';
        critEl.value = '';
        lastFormula = '';
        result.style.display = 'none';
        rangeEl.focus();
      }

      /** 复制公式。 */
      function copyFormula() {
        if (!lastFormula) return;
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(lastFormula).then(function () {
            noteEl.className = 'muted';
            noteEl.textContent = T.copied;
          });
        }
      }

      form.addEventListener('submit', function (e) { e.preventDefault(); run(); });
      document.getElementById('cfBtnSample').addEventListener('click', loadSample);
      document.getElementById('cfBtnClear').addEventListener('click', clearAll);
      document.getElementById('cfBtnCopy').addEventListener('click', copyFormula);
      renderChips();
      loadSample();
    })();
  </script>`;

	const toolMeta = getToolBySlug('write-countif-formula-in-excel');
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
