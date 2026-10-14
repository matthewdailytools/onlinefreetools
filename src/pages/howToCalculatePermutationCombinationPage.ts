/**
 * 排列组合计算器工具页。
 * slug: how-to-calculate-permutation-combination（见 work-tasks/how-to-calculate-permutation-combination/02-tool-info.md）。
 *
 * 交互要点（2026-10-14 改写）：
 * - 两个问题（顺序是否重要 / 能否重复选）决定用哪个公式，并在结果中高亮；
 * - 四种计数（排列、组合、可重复排列 nʳ、可重复组合 C(n+r−1,r)）并列给出；
 * - BigInt 精确计算，大数给出位数与科学计数近似；展开乘积写出计算过程；
 * - 「1/X」概率行（彩票、密码类问题）；r > n 时无重复计数为 0 并说明原因。
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
const PREFIX = 'tool_permutation_combination';

/**
 * 为路径加上语言前缀（默认语无前缀）。
 * @param lang 当前语言
 * @param pathname 站内路径
 * @param defaultLang 站点默认语言
 * @returns 带（或不带）语言前缀的路径
 */
const withLangPrefix = (lang: SiteLang, pathname: string, defaultLang: SiteLang) => {
	const safe = pathname.startsWith('/') ? pathname : `/${pathname}`;
	return lang === defaultLang ? safe : `/${lang}${safe}`;
};

/**
 * 渲染 how-to-calculate-permutation-combination 工具页 HTML。
 * @param opts.lang 当前语言
 * @param opts.defaultLang 站点默认语言
 * @param opts.enabledLangs 启用语言列表
 * @returns 完整页面 HTML
 */
export const renderHowToCalculatePermutationCombinationPage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	/** 读取本工具键（自动拼前缀）。 */
	const tx = (key: string) => t(opts.lang, `${PREFIX}_${key}` as keyof typeof import('../site/i18n/en').default);

	const toolPath = '/tools/how-to-calculate-permutation-combination';
	const canonicalPath = withLangPrefix(opts.lang, toolPath, opts.defaultLang);
	const title = `${tx('title')} | ${t(opts.lang, 'brand')}`;
	const description = tx('description');

	const navItems = buildToolPageNavItems(opts.lang, opts.defaultLang);

	/** 语言切换链接始终带显式语言前缀。 */
	const withExplicitLangPrefix = (code: SiteLang, pathname: string) => {
		const safe = pathname.startsWith('/') ? pathname : `/${pathname}`;
		return `/${code}${safe}`.replace(/\/{2,}/g, '/');
	};

	/** 语言切换器用的各语言链接。 */
	const langAlternates: Record<string, string> = Object.fromEntries(
		(supportedLangs || []).map((code) => [code, withExplicitLangPrefix(code, toolPath)])
	);

	/** hreflang 备用链接。 */
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
			currentSlug: 'how-to-calculate-permutation-combination',
			currentAnchor: '#permutation-combination',
		}),
		id: 'toolNav',
	});

	const footerHtml = renderFooter({ lang: opts.lang });

	/**
	 * 渲染一组是/否单选（顺序 / 重复）。
	 * @param name 单选组 name
	 * @param labelKey 问题文案键
	 * @param yesKey 「是」文案键
	 * @param noKey 「否」文案键
	 * @returns fieldset HTML
	 */
	const renderYesNo = (name: string, labelKey: string, yesKey: string, noKey: string) => `
          <fieldset class="form-group pc-q">
            <legend class="form-label">${escapeHtml(tx(labelKey))}</legend>
            <label class="pc-radio"><input type="radio" name="${name}" value="yes"> ${escapeHtml(tx(yesKey))}</label>
            <label class="pc-radio"><input type="radio" name="${name}" value="no" checked> ${escapeHtml(tx(noKey))}</label>
          </fieldset>`;

	/** 四种计数表格的行定义：[行 id, 名称键, 公式文本]。 */
	const tableRows: Array<[string, string, string]> = [
		['perm', 'perm_label', 'n! ÷ (n − r)!'],
		['comb', 'comb_label', 'n! ÷ (r! (n − r)!)'],
		['permRep', 'perm_rep_label', 'nʳ'],
		['combRep', 'comb_rep_label', '(n + r − 1)! ÷ (r! (n − 1)!)'],
	];

	const extraHeadHtml = `
  <style>
    .tool-card { max-width: var(--content-max); width: 100%; margin: 0 0 1.5rem; }
    .form-label { display:block; margin-bottom:.5rem; color:#495057; font-weight:500 }
    .form-group { margin-bottom:1rem; }
    .form-row { display:grid; grid-template-columns:1fr 1fr; gap:1rem; }
    @media (max-width:576px) { .form-row { grid-template-columns:1fr; } }
    .pc-q { border:0; padding:0; margin:0 0 1rem; min-width:0; }
    .pc-q legend { font-size:1rem; }
    .pc-radio { display:inline-flex; align-items:center; gap:.35rem; margin-right:1.25rem; cursor:pointer; }
    .btn-row { display:flex; flex-wrap:wrap; gap:.5rem; align-items:center; }
    .result { background:#f8f9fa; padding:1rem; border-radius:8px; margin-top:1rem; }
    .pc-kind { color:#495057; font-weight:500; text-align:center; }
    .pc-main { font-size:1.6rem; font-weight:600; text-align:center; margin:.25rem 0; word-break:break-all; font-variant-numeric:tabular-nums; }
    .pc-sub { text-align:center; color:#495057; font-size:.95rem; word-break:break-word; }
    .pc-table { width:100%; border-collapse:collapse; margin-top:1rem; font-size:.92rem; }
    .pc-table th, .pc-table td { padding:.4rem .5rem; border-bottom:1px solid #dee2e6; text-align:start; vertical-align:top; }
    .pc-table td.pc-num { font-variant-numeric:tabular-nums; word-break:break-all; }
    .pc-table tr.pc-active td { background:#e7f1ff; font-weight:600; }
    .result .muted { color:#6c757d; font-size:.9rem; margin-top:.75rem; }
  </style>`;

	const contentHtml = `
    <div id="permutation-combination" class="mb-3">
      <h1 class="h4 mb-1">${escapeHtml(tx('title'))}</h1>
      <p class="text-muted mb-0">${escapeHtml(description)}</p>
    </div>

    <div class="card tool-card">
      <div class="card-body">
        <form id="calcForm" novalidate>
          <div class="form-row">
            <div class="form-group">
              <label class="form-label" for="pcN">${escapeHtml(tx('n_label'))}</label>
              <input id="pcN" class="input-lg" type="text" inputmode="numeric" autocomplete="off" placeholder="${escapeHtml(tx('n_ph'))}">
            </div>
            <div class="form-group">
              <label class="form-label" for="pcR">${escapeHtml(tx('r_label'))}</label>
              <input id="pcR" class="input-lg" type="text" inputmode="numeric" autocomplete="off" placeholder="${escapeHtml(tx('r_ph'))}">
            </div>
          </div>
          <div class="form-row">
            ${renderYesNo('pcOrder', 'order_label', 'order_yes', 'order_no')}
            ${renderYesNo('pcRepeat', 'repeat_label', 'repeat_yes', 'repeat_no')}
          </div>
          <div class="btn-row">
            <button type="submit" id="pcBtnCalc" class="btn btn-primary">${escapeHtml(tx('calculate'))}</button>
            <button type="button" id="pcBtnSample" class="btn btn-outline-secondary">${escapeHtml(tx('sample'))}</button>
            <button type="button" id="pcBtnClear" class="btn btn-outline-secondary">${escapeHtml(tx('clear'))}</button>
          </div>
        </form>
        <div id="calcResult" class="result" style="display:none" aria-live="polite">
          <div id="pcKind" class="pc-kind"></div>
          <div id="pcMain" class="pc-main" dir="ltr"></div>
          <div id="pcDetails">
            <div id="pcApprox" class="pc-sub" dir="ltr"></div>
            <div class="pc-sub"><span>${escapeHtml(tx('work_label'))}:</span> <span id="pcWork" dir="ltr"></span></div>
            <div id="pcOddsRow" class="pc-sub"><span>${escapeHtml(tx('odds_label'))}:</span> <span id="pcOdds"></span></div>
            <table class="pc-table">
              <thead><tr><th scope="col">${escapeHtml(tx('table_kind'))}</th><th scope="col">${escapeHtml(tx('table_formula'))}</th><th scope="col">${escapeHtml(tx('table_count'))}</th></tr></thead>
              <tbody>
                ${tableRows
									.map(
										([id, key, formula]) =>
											`<tr id="pcRow_${id}"><td>${escapeHtml(tx(key))}</td><td dir="ltr">${escapeHtml(formula)}</td><td class="pc-num" id="pcVal_${id}" dir="ltr"></td></tr>`
									)
									.join('')}
              </tbody>
            </table>
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
			ruleItemCount: 5,
		})}`;

	const referencesHtml = renderToolReferencesSection({
		lang: opts.lang,
		links: [
			{
				label: tx('ref_a_label'),
				href: 'https://en.wikipedia.org/wiki/Permutation',
			},
			{
				label: tx('ref_b_label'),
				href: 'https://en.wikipedia.org/wiki/Combination',
			},
			{
				label: tx('ref_c_label'),
				href: 'https://dlmf.nist.gov/26.3',
			},
		],
	});

	/** 前端脚本需要的文案（一次性注入）。 */
	const clientText = {
		kindPerm: tx('perm_label'),
		kindComb: tx('comb_label'),
		kindPermRep: tx('perm_rep_label'),
		kindCombRep: tx('comb_rep_label'),
		errN: tx('err_n'),
		errR: tx('err_r'),
		errBig: tx('err_big'),
		note: tx('result_note'),
		zeroNote: tx('zero_note'),
		approx: tx('approx_tpl'),
		odds: tx('odds_tpl'),
	};

	const extraBodyHtml = `
  <script>
    (function () {
      /** 表单与输入控件。 */
      var form = document.getElementById('calcForm');
      var nEl = document.getElementById('pcN');
      var rEl = document.getElementById('pcR');
      /** 结果区各输出位。 */
      var result = document.getElementById('calcResult');
      var detailsEl = document.getElementById('pcDetails');
      var kindEl = document.getElementById('pcKind');
      var mainEl = document.getElementById('pcMain');
      var approxEl = document.getElementById('pcApprox');
      var workEl = document.getElementById('pcWork');
      var oddsRowEl = document.getElementById('pcOddsRow');
      var oddsEl = document.getElementById('pcOdds');
      var noteEl = document.getElementById('calcNote');
      /** 当前页面语言（决定千分位写法）。 */
      var LANG = ${JSON.stringify(opts.lang)};
      /** 本地化文案字典。 */
      var T = ${JSON.stringify(clientText)};
      /** n 与 r 的上限（BigInt 计算量与展示长度的折中）。 */
      var MAX_N = 1000000;
      var MAX_R = 5000;
      /** 结果超过这么多位时，主结果改为科学计数近似 + 位数。 */
      var MAX_SHOW_DIGITS = 40;
      /** 样例轮换：[n, r, 顺序重要?, 可重复?]；首个与 Example 一致。 */
      var SAMPLES = [
        ['5', '2', 'no', 'no'],
        ['49', '6', 'no', 'no'],
        ['10', '4', 'yes', 'yes'],
        ['8', '3', 'yes', 'no'],
        ['5', '3', 'no', 'yes']
      ];
      /** 下一次点击「加载样例」使用的样例下标。 */
      var sampleIndex = 0;

      /** 千分位格式器（拉丁数字）；不可用时退回原样字符串。 */
      var numberFormat = null;
      try {
        numberFormat = new Intl.NumberFormat(LANG + '-u-nu-latn', { maximumFractionDigits: 0 });
      } catch (e) {
        numberFormat = null;
      }
      /** 页面语言的小数点（科学计数近似用）。 */
      var DEC = '.';
      try {
        var parts = new Intl.NumberFormat(LANG + '-u-nu-latn').formatToParts(1.5);
        for (var pi = 0; pi < parts.length; pi++) {
          if (parts[pi].type === 'decimal') DEC = parts[pi].value;
        }
      } catch (e) {
        DEC = '.';
      }

      /**
       * 用 split/join 替换 {name} 占位符。
       * @param {string} template 含占位符的文案
       * @param {Object<string, string|number>} map 占位符 → 替换值
       * @returns {string} 替换结果
       */
      function fill(template, map) {
        var s = String(template);
        for (var k in map) {
          if (Object.prototype.hasOwnProperty.call(map, k)) s = s.split('{' + k + '}').join(String(map[k]));
        }
        return s;
      }

      /**
       * BigInt 转带千分位的文本。
       * @param {bigint} v 数值
       * @returns {string} 显示文本
       */
      function fmtBig(v) {
        if (numberFormat) {
          try {
            return numberFormat.format(v);
          } catch (e) {
            /* 旧浏览器不支持格式化 BigInt 时退回纯数字 */
          }
        }
        return v.toString();
      }

      /**
       * BigInt 的科学计数近似（3 位小数）。
       * @param {bigint} v 正整数
       * @returns {string} 如 8.066 × 10^67
       */
      function sciApprox(v) {
        var s = v.toString();
        var mant = s.charAt(0) + (s.length > 1 ? DEC + s.slice(1, 4) : '');
        return mant + ' × 10^' + (s.length - 1);
      }

      /**
       * 主结果/表格用的数值文本：位数过多时给近似值。
       * @param {bigint} v 数值
       * @returns {string} 显示文本
       */
      function showBig(v) {
        var digits = v.toString().length;
        return digits > MAX_SHOW_DIGITS ? fill(T.approx, { a: sciApprox(v), d: digits }) : fmtBig(v);
      }

      /**
       * 连乘 from × (from−1) × … × (to)（from ≥ to）；空乘积为 1。
       * @param {number} from 起始因子
       * @param {number} to 结束因子
       * @returns {bigint} 乘积
       */
      function fallingProduct(from, to) {
        var p = BigInt(1);
        for (var i = from; i >= to; i--) p *= BigInt(i);
        return p;
      }

      /**
       * 组合数 C(a, b)：用较小的 b 做乘除，保持整数。
       * @param {number} a 总数
       * @param {number} b 选取数
       * @returns {bigint} 组合数（b > a 时为 0）
       */
      function choose(a, b) {
        if (b < 0 || b > a) return BigInt(0);
        var k = Math.min(b, a - b);
        var c = BigInt(1);
        for (var i = 1; i <= k; i++) {
          c = (c * BigInt(a - k + i)) / BigInt(i);
        }
        return c;
      }

      /**
       * 写出连乘式：因子多时省略中间（52 × 51 × 50 × … × 48）。
       * @param {number} from 起始因子
       * @param {number} count 因子个数
       * @returns {string} 连乘文本
       */
      function productText(from, count) {
        if (count <= 0) return '1';
        if (count <= 6) {
          var list = [];
          for (var i = 0; i < count; i++) list.push(String(from - i));
          return list.join(' × ');
        }
        return from + ' × ' + (from - 1) + ' × ' + (from - 2) + ' × … × ' + (from - count + 1);
      }

      /**
       * 读取非负整数输入（允许空格/千分位逗号/点）。
       * @param {HTMLInputElement} el 输入框
       * @returns {number|null} 整数；无效时 null
       */
      function readInt(el) {
        var raw = String(el.value || '').trim();
        /** 去掉空格、NBSP、窄 NBSP、撇号这类千分位写法。 */
        var s = '';
        for (var i = 0; i < raw.length; i++) {
          var code = raw.charCodeAt(i);
          if (code === 32 || code === 160 || code === 8239 || code === 39 || code === 8217) continue;
          s += raw.charAt(i);
        }
        /** 纯数字，或每 3 位用点/逗号分组的整数（1,000,000 / 1.000.000）。 */
        if (/^[0-9]{1,3}([.,][0-9]{3})+$/.test(s)) s = s.split(',').join('').split('.').join('');
        if (!/^[0-9]+$/.test(s)) return null;
        var v = Number(s);
        return Number.isSafeInteger(v) ? v : null;
      }

      /**
       * 读取单选组当前值。
       * @param {string} name 单选组 name
       * @returns {string} yes / no
       */
      function radioValue(name) {
        var el = form.querySelector('input[name="' + name + '"]:checked');
        return el ? el.value : 'no';
      }

      /**
       * 设置单选组的值。
       * @param {string} name 单选组 name
       * @param {string} value yes / no
       */
      function setRadio(name, value) {
        var el = form.querySelector('input[name="' + name + '"][value="' + value + '"]');
        if (el) el.checked = true;
      }

      /**
       * 计算四种计数，并按两问选出主结果与过程。
       * @returns {{ ok: boolean, error?: string, values?: Object }}
       */
      function compute() {
        var n = readInt(nEl);
        if (n == null) return { ok: false, error: T.errN };
        var r = readInt(rEl);
        if (r == null) return { ok: false, error: T.errR };
        if (n > MAX_N || r > MAX_R) return { ok: false, error: T.errBig };
        var order = radioValue('pcOrder') === 'yes';
        var repeat = radioValue('pcRepeat') === 'yes';

        var perm = r > n ? BigInt(0) : fallingProduct(n, n - r + 1);
        var rFact = fallingProduct(r, 1);
        var comb = r > n ? BigInt(0) : perm / rFact;
        var permRep = n === 0 && r === 0 ? BigInt(1) : BigInt(n) ** BigInt(r);
        var combRep = n === 0 ? (r === 0 ? BigInt(1) : BigInt(0)) : choose(n + r - 1, r);

        var key;
        var main;
        var work;
        if (order && !repeat) {
          key = 'perm';
          main = perm;
          work = r > n ? 'P(' + n + ', ' + r + ') = 0'
            : 'P(' + n + ', ' + r + ') = ' + productText(n, r) + ' = ' + showBig(perm);
        } else if (!order && !repeat) {
          key = 'comb';
          main = comb;
          work = r > n ? 'C(' + n + ', ' + r + ') = 0'
            : 'C(' + n + ', ' + r + ') = (' + productText(n, r) + ') ÷ (' + productText(r, r) + ') = '
              + showBig(perm) + ' ÷ ' + showBig(rFact) + ' = ' + showBig(comb);
        } else if (order && repeat) {
          key = 'permRep';
          main = permRep;
          work = n + '^' + r + ' = ' + showBig(permRep);
        } else {
          key = 'combRep';
          main = combRep;
          work = 'C(' + n + ' + ' + r + ' − 1, ' + r + ') = C(' + (n + r - 1) + ', ' + r + ') = ' + showBig(combRep);
        }
        return {
          ok: true,
          values: {
            key: key,
            main: main,
            work: work,
            zero: !repeat && r > n,
            all: { perm: perm, comb: comb, permRep: permRep, combRep: combRep },
          },
        };
      }

      /** 主结果对应的名称文案。 */
      var KIND = { perm: T.kindPerm, comb: T.kindComb, permRep: T.kindPermRep, combRep: T.kindCombRep };

      /** 执行计算并刷新结果区；失败时隐藏明细并显示具体错误。 */
      function runCalc() {
        var out = compute();
        result.style.display = 'block';
        if (!out || !out.ok) {
          kindEl.textContent = '';
          mainEl.textContent = '—';
          detailsEl.style.display = 'none';
          noteEl.textContent = (out && out.error) || T.errN;
          return false;
        }
        var v = out.values;
        kindEl.textContent = KIND[v.key];
        var digits = v.main.toString().length;
        mainEl.textContent = digits > MAX_SHOW_DIGITS ? sciApprox(v.main) : fmtBig(v.main);
        approxEl.textContent = digits > MAX_SHOW_DIGITS ? fill(T.approx, { a: sciApprox(v.main), d: digits }) : '';
        approxEl.style.display = digits > MAX_SHOW_DIGITS ? '' : 'none';
        workEl.textContent = v.work;
        if (v.main > BigInt(0)) {
          oddsEl.textContent = fill(T.odds, { x: showBig(v.main) });
          oddsRowEl.style.display = '';
        } else {
          oddsRowEl.style.display = 'none';
        }
        var ids = ['perm', 'comb', 'permRep', 'combRep'];
        for (var i = 0; i < ids.length; i++) {
          document.getElementById('pcVal_' + ids[i]).textContent = showBig(v.all[ids[i]]);
          document.getElementById('pcRow_' + ids[i]).className = ids[i] === v.key ? 'pc-active' : '';
        }
        detailsEl.style.display = '';
        noteEl.textContent = v.zero ? T.zeroNote : T.note;
        return true;
      }

      /** 加载样例：依次轮换（首个与 Example 一致），同时设置两问的答案。 */
      function loadSample() {
        var s = SAMPLES[sampleIndex];
        sampleIndex = (sampleIndex + 1) % SAMPLES.length;
        nEl.value = s[0];
        rEl.value = s[1];
        setRadio('pcOrder', s[2]);
        setRadio('pcRepeat', s[3]);
        runCalc();
      }

      form.addEventListener('submit', function (e) {
        e.preventDefault();
        runCalc();
      });
      /** 改两问的答案时，若已有输入则立即重算。 */
      form.addEventListener('change', function (e) {
        var target = e.target;
        if (target && target.type === 'radio' && String(nEl.value).trim() && String(rEl.value).trim()) runCalc();
      });
      document.getElementById('pcBtnSample').addEventListener('click', loadSample);
      /** 清空：只清输入、恢复默认两问并隐藏结果，不重新加载样例。 */
      document.getElementById('pcBtnClear').addEventListener('click', function () {
        nEl.value = '';
        rEl.value = '';
        setRadio('pcOrder', 'no');
        setRadio('pcRepeat', 'no');
        result.style.display = 'none';
        nEl.focus();
      });
      loadSample();
    })();
  </script>`;

	const toolMeta = getToolBySlug('how-to-calculate-permutation-combination');
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
