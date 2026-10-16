/**
 * Excel 嵌套 IF 公式生成器：有序条件 → =IF(...) 嵌套；浏览器试算后复制。
 * slug: write-nested-if-formula-for-excel。
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
const PREFIX = 'tool_write_nested_if_formula_for_excel';

/** 为路径加上语言前缀（默认语无前缀）。 */
const withLangPrefix = (lang: SiteLang, pathname: string, defaultLang: SiteLang) => {
	const safe = pathname.startsWith('/') ? pathname : `/${pathname}`;
	return lang === defaultLang ? safe : `/${lang}${safe}`;
};

/**
 * 渲染 write-nested-if-formula-for-excel 工具页 HTML。
 * @param opts.lang 当前语言
 * @param opts.defaultLang 站点默认语言
 * @param opts.enabledLangs 启用语言列表
 * @returns 完整页面 HTML
 */
export const renderWriteNestedIfFormulaForExcelPage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	/** 读取本工具键。 */
	const tx = (key: string) => t(opts.lang, `${PREFIX}_${key}` as keyof typeof import('../site/i18n/en').default);

	const toolPath = '/tools/write-nested-if-formula-for-excel';
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
			currentSlug: 'write-nested-if-formula-for-excel',
			currentAnchor: '#nested-if',
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
    .form-row { display:grid; grid-template-columns:repeat(3, minmax(0, 1fr)); gap:0 1rem; }
    @media (max-width:768px) { .form-row { grid-template-columns:minmax(0, 1fr); } }
    .btn-row { display:flex; flex-wrap:wrap; gap:.5rem; align-items:center; }
    .nif-table { width:100%; border-collapse:collapse; font-size:.92rem; margin-bottom:.75rem; }
    .nif-table th, .nif-table td { border:1px solid #dee2e6; padding:.4rem .45rem; vertical-align:middle; }
    .nif-table th { background:#e9ecef; text-align:start; }
    .nif-table select, .nif-table input { width:100%; }
    .result { background:#f8f9fa; padding:1rem; border-radius:8px; margin-top:1rem; }
    .nif-h { font-size:1rem; font-weight:600; margin:0 0 .35rem; }
    .nif-out { white-space:pre-wrap; word-break:break-all; font-family:ui-monospace, SFMono-Regular, Menlo, Consolas, monospace; font-size:.9rem; margin:0; }
    .nif-trial { margin-top:.65rem; font-size:.95rem; }
    .result .muted { color:#6c757d; font-size:.9rem; margin-top:.5rem; }
    .result .muted.nif-err { color:#b02a37; font-weight:500; }
    .result .muted.nif-ok { color:#0f5132; }
  </style>`;

	const contentHtml = `
    <div id="nested-if" class="mb-3">
      <h1 class="h4 mb-1">${escapeHtml(tx('title'))}</h1>
      <p class="text-muted mb-0">${escapeHtml(description)}</p>
    </div>

    <div class="card tool-card">
      <div class="card-body">
        <form id="nifForm" novalidate>
          <span class="form-hint">${escapeHtml(tx('hint'))}</span>
          <div class="form-row">
            <div class="form-group">
              <label class="form-label" for="nifCell">${escapeHtml(tx('cell_label'))}</label>
              <input id="nifCell" class="input-lg" type="text" autocomplete="off" placeholder="${escapeHtml(tx('cell_ph'))}" value="A1">
            </div>
            <div class="form-group">
              <label class="form-label" for="nifTrial">${escapeHtml(tx('trial_label'))}</label>
              <input id="nifTrial" class="input-lg" type="text" autocomplete="off" placeholder="${escapeHtml(tx('trial_ph'))}">
            </div>
            <div class="form-group">
              <label class="form-label" for="nifElse">${escapeHtml(tx('else_label'))}</label>
              <input id="nifElse" class="input-lg" type="text" autocomplete="off" placeholder="${escapeHtml(tx('else_ph'))}">
            </div>
          </div>
          <div class="table-responsive">
            <table class="nif-table">
              <thead>
                <tr>
                  <th>${escapeHtml(tx('col_op'))}</th>
                  <th>${escapeHtml(tx('col_val'))}</th>
                  <th>${escapeHtml(tx('col_then'))}</th>
                </tr>
              </thead>
              <tbody id="nifRows"></tbody>
            </table>
          </div>
          <div class="btn-row">
            <button type="button" id="nifAdd" class="btn btn-outline-secondary">${escapeHtml(tx('add'))}</button>
            <button type="submit" class="btn btn-primary">${escapeHtml(tx('write'))}</button>
            <button type="button" id="nifSample" class="btn btn-outline-secondary">${escapeHtml(tx('sample'))}</button>
            <button type="button" id="nifClear" class="btn btn-outline-secondary">${escapeHtml(tx('clear'))}</button>
            <button type="button" id="nifCopy" class="btn btn-outline-secondary">${escapeHtml(tx('copy'))}</button>
          </div>
        </form>
        <div id="nifResult" class="result" style="display:none" aria-live="polite">
          <div class="nif-h">${escapeHtml(tx('formula_label'))}</div>
          <pre id="nifOut" class="nif-out"></pre>
          <div class="nif-trial"><strong>${escapeHtml(tx('trial_result_label'))}:</strong> <span id="nifTrialOut"></span></div>
          <div id="nifNote" class="muted"></div>
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
				label: tx('ref_a_label'),
				href: 'https://support.microsoft.com/office/if-function-69aed7c9-4e8a-4755-a9bc-aa8bbff73be2',
			},
			{
				label: tx('ref_b_label'),
				href: 'https://support.microsoft.com/office/ifs-function-36329a26-050b-428d-846d-2eac9e9efc3c',
			},
		],
	});

	/** 前端文案。 */
	const clientText = {
		empty: tx('empty'),
		copied: tx('copied'),
		copyFail: tx('copy_fail'),
		opEq: tx('op_eq'),
		opContains: tx('op_contains'),
		opBlank: tx('op_blank'),
	};

	const extraBodyHtml = `
  <script>
    (function () {
      /** 控件。 */
      var form = document.getElementById('nifForm');
      var cellEl = document.getElementById('nifCell');
      var elseEl = document.getElementById('nifElse');
      var trialEl = document.getElementById('nifTrial');
      var body = document.getElementById('nifRows');
      var result = document.getElementById('nifResult');
      var out = document.getElementById('nifOut');
      var trialOut = document.getElementById('nifTrialOut');
      var noteEl = document.getElementById('nifNote');
      var T = ${JSON.stringify(clientText)};
      var sampleIndex = 0;

      /**
       * Excel 字符串引号加倍。
       * @param {string} s 原文
       * @returns {string}
       */
      function xlQ(s) {
        return '"' + String(s).replace(/"/g, '""') + '"';
      }

      /**
       * 条件表达式。
       * @param {string} cell 单元格
       * @param {string} op 运算符
       * @param {string} val 值
       * @returns {string}
       */
      function testExpr(cell, op, val) {
        if (op === 'blank') return cell + '=""';
        if (op === 'contains') return 'ISNUMBER(SEARCH(' + xlQ(val) + ',' + cell + '))';
        var n = String(val).trim();
        if (/^-?\\d+(\\.\\d+)?$/.test(n)) return cell + '=' + n;
        return cell + '=' + xlQ(val);
      }

      /**
       * Then/Else 字面量。
       * @param {string} val 值
       * @returns {string}
       */
      function lit(val) {
        var n = String(val).trim();
        if (/^-?\\d+(\\.\\d+)?$/.test(n)) return n;
        return xlQ(val);
      }

      /** 读取条件行。 */
      function rows() {
        var list = [];
        body.querySelectorAll('tr').forEach(function (tr) {
          list.push({
            op: tr.querySelector('.exOp').value,
            val: tr.querySelector('.exVal').value,
            then: tr.querySelector('.exThen').value
          });
        });
        return list;
      }

      /**
       * 自内向外嵌套 IF。
       * @param {string} cell 单元格
       * @param {{op:string,val:string,then:string}[]} list 条件
       * @param {string} els else
       * @returns {string}
       */
      function emitNested(cell, list, els) {
        var acc = lit(els);
        for (var i = list.length - 1; i >= 0; i--) {
          acc = 'IF(' + testExpr(cell, list[i].op, list[i].val) + ',' + lit(list[i].then) + ',' + acc + ')';
        }
        return '=' + acc;
      }

      /**
       * 浏览器试算。
       * @param {string} cellVal 试算值
       * @param {string} op 运算符
       * @param {string} val 条件值
       * @returns {boolean}
       */
      function jsTest(cellVal, op, val) {
        var a = String(cellVal);
        if (op === 'blank') return a === '';
        if (op === 'contains') return a.toLowerCase().indexOf(String(val).toLowerCase()) >= 0;
        return a.trim().toLowerCase() === String(val).trim().toLowerCase();
      }

      /**
       * 试算结果。
       * @param {{op:string,val:string,then:string}[]} list 条件
       * @param {string} cellVal 试算
       * @param {string} els else
       * @returns {string}
       */
      function trial(list, cellVal, els) {
        for (var i = 0; i < list.length; i++) {
          if (jsTest(cellVal, list[i].op, list[i].val)) return list[i].then;
        }
        return els;
      }

      /**
       * 追加一行条件。
       * @param {string} op 运算符
       * @param {string} val 值
       * @param {string} thenv Then
       */
      function addRow(op, val, thenv) {
        var tr = document.createElement('tr');
        tr.innerHTML =
          '<td><select class="exOp input-lg"><option value="eq">' + T.opEq + '</option><option value="contains">' + T.opContains + '</option><option value="blank">' + T.opBlank + '</option></select></td>' +
          '<td><input class="exVal input-lg" type="text"></td>' +
          '<td><input class="exThen input-lg" type="text"></td>';
        body.appendChild(tr);
        tr.querySelector('.exOp').value = op || 'eq';
        tr.querySelector('.exVal').value = val || '';
        tr.querySelector('.exThen').value = thenv || '';
      }

      /** 生成公式与试算。 */
      function run() {
        var cell = (cellEl.value || 'A1').trim() || 'A1';
        var list = rows();
        result.style.display = 'block';
        if (!list.length) {
          out.textContent = '';
          trialOut.textContent = '—';
          noteEl.className = 'muted nif-err';
          noteEl.textContent = T.empty;
          return false;
        }
        out.textContent = emitNested(cell, list, elseEl.value);
        trialOut.textContent = String(trial(list, trialEl.value, elseEl.value));
        noteEl.className = 'muted';
        noteEl.textContent = '';
        return true;
      }

      /** 轮换样例。 */
      function loadSample() {
        body.innerHTML = '';
        var samples = [
          function () {
            cellEl.value = 'A1';
            trialEl.value = 'West';
            elseEl.value = 'Other';
            addRow('eq', 'West', 'A');
            addRow('eq', 'East', 'B');
          },
          function () {
            cellEl.value = 'B2';
            trialEl.value = '85';
            elseEl.value = 'C';
            addRow('eq', '90', 'A');
            addRow('eq', '80', 'B');
          },
          function () {
            cellEl.value = 'C1';
            trialEl.value = 'spring promo';
            elseEl.value = 'No';
            addRow('contains', 'promo', 'Yes');
            addRow('blank', '', 'Missing');
          }
        ];
        samples[sampleIndex % samples.length]();
        sampleIndex += 1;
        run();
      }

      form.addEventListener('submit', function (e) {
        e.preventDefault();
        run();
      });
      document.getElementById('nifAdd').addEventListener('click', function () { addRow('eq', '', ''); });
      document.getElementById('nifSample').addEventListener('click', loadSample);
      document.getElementById('nifClear').addEventListener('click', function () {
        body.innerHTML = '';
        out.textContent = '';
        trialOut.textContent = '';
        result.style.display = 'none';
      });
      document.getElementById('nifCopy').addEventListener('click', function () {
        var text = out.textContent || '';
        result.style.display = 'block';
        if (!text) {
          noteEl.className = 'muted nif-err';
          noteEl.textContent = T.empty;
          return;
        }
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(text).then(function () {
            noteEl.className = 'muted nif-ok';
            noteEl.textContent = T.copied;
          }).catch(function () {
            noteEl.className = 'muted nif-err';
            noteEl.textContent = T.copyFail;
          });
        } else {
          noteEl.className = 'muted nif-err';
          noteEl.textContent = T.copyFail;
        }
      });
      loadSample();
    })();
  </script>`;

	const toolMeta = getToolBySlug('write-nested-if-formula-for-excel');
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
