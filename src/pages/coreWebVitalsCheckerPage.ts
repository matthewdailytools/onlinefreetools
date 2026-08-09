/**
 * Core Web Vitals 评级工具页：粘贴 LCP / INP / CLS → Good / Needs improvement / Poor，
 * 并展示与 Microsoft Clarity Performance metrics 对齐的成因与改进建议。
 * slug: core-web-vitals-checker（见 work-tasks/core-web-vitals-checker/02-tool-info.md）。
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

/** 为路径加上语言前缀（默认语无前缀）。 */
const withLangPrefix = (lang: SiteLang, pathname: string, defaultLang: SiteLang) => {
	const safe = pathname.startsWith('/') ? pathname : `/${pathname}`;
	return lang === defaultLang ? safe : `/${lang}${safe}`;
};

/**
 * 渲染 Core Web Vitals 评级工具页 HTML。
 * @param opts.lang 当前语言
 * @param opts.defaultLang 站点默认语言
 * @param opts.enabledLangs 启用语言列表
 */
export const renderCoreWebVitalsCheckerPage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	const toolPath = '/tools/core-web-vitals-checker';
	const canonicalPath = withLangPrefix(opts.lang, toolPath, opts.defaultLang);
	const title = `${t(opts.lang, 'tool_cwv_title')} | ${t(opts.lang, 'brand')}`;
	const description = t(opts.lang, 'tool_cwv_description');

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
		items: buildToolSidebarItems({
			lang: opts.lang,
			defaultLang: opts.defaultLang,
			currentSlug: 'core-web-vitals-checker',
			currentAnchor: '#cwv',
		}),
		id: 'toolNav',
	});

	const footerHtml = renderFooter({ lang: opts.lang });

	const extraHeadHtml = `
  <style>
    .tool-card { max-width: var(--content-max); width: 100%; margin: 0 0 1.5rem; }
    .form-label { display:block; margin-bottom:.5rem; color:#495057; font-weight:500 }
    .form-group { margin-bottom:1rem; }
    .form-row { display:grid; grid-template-columns:1fr 1fr 1fr; gap:1rem; }
    @media (max-width:768px) { .form-row { grid-template-columns:1fr; } }
    .btn-row { display:flex; flex-wrap:wrap; gap:.5rem; align-items:center; }
    .unit-row { display:flex; gap:.75rem; flex-wrap:wrap; margin:.25rem 0 .75rem; font-size:.9rem; }
    .result { background:#f8f9fa; padding:1rem; border-radius:8px; margin-top:1rem; text-align:left }
    .result .muted { color:#6c757d; font-size:.9rem; margin-top:.35rem }
    .cwv-metric { border:1px solid #dee2e6; border-radius:8px; padding:.75rem; margin-top:.75rem; background:#fff }
    .cwv-badge { display:inline-block; font-size:.8rem; font-weight:600; padding:.15rem .5rem; border-radius:999px }
    .cwv-good { background:#d1e7dd; color:#0f5132 }
    .cwv-ni { background:#fff3cd; color:#664d03 }
    .cwv-poor { background:#f8d7da; color:#842029 }
  </style>`;

	const contentHtml = `
    <div id="cwv" class="mb-3">
      <h1 class="h4 mb-1">${escapeHtml(t(opts.lang, 'tool_cwv_title'))}</h1>
      <p class="text-muted mb-0">${escapeHtml(description)}</p>
    </div>

    <div class="card tool-card">
      <div class="card-body">
        <form id="cwvForm">
          <div class="unit-row" role="group" aria-label="${escapeHtml(t(opts.lang, 'tool_cwv_lcp_unit_group'))}">
            <label><input type="radio" name="lcpUnit" value="s" checked> ${escapeHtml(t(opts.lang, 'tool_cwv_lcp_unit_s'))}</label>
            <label><input type="radio" name="lcpUnit" value="ms"> ${escapeHtml(t(opts.lang, 'tool_cwv_lcp_unit_ms'))}</label>
          </div>
          <div class="form-row">
            <div class="form-group">
              <label class="form-label" for="cwvLcp">${escapeHtml(t(opts.lang, 'tool_cwv_lcp_label'))}</label>
              <input id="cwvLcp" class="input-lg" type="number" min="0" step="any"
                placeholder="${escapeHtml(t(opts.lang, 'tool_cwv_lcp_ph'))}">
            </div>
            <div class="form-group">
              <label class="form-label" for="cwvInp">${escapeHtml(t(opts.lang, 'tool_cwv_inp_label'))}</label>
              <input id="cwvInp" class="input-lg" type="number" min="0" step="any"
                placeholder="${escapeHtml(t(opts.lang, 'tool_cwv_inp_ph'))}">
            </div>
            <div class="form-group">
              <label class="form-label" for="cwvCls">${escapeHtml(t(opts.lang, 'tool_cwv_cls_label'))}</label>
              <input id="cwvCls" class="input-lg" type="number" min="0" step="any"
                placeholder="${escapeHtml(t(opts.lang, 'tool_cwv_cls_ph'))}">
            </div>
          </div>
          <div class="btn-row">
            <button type="submit" class="btn btn-primary">${escapeHtml(t(opts.lang, 'tool_cwv_grade'))}</button>
            <button type="button" id="cwvSample" class="btn btn-outline-secondary">${escapeHtml(t(opts.lang, 'tool_cwv_sample'))}</button>
            <button type="button" id="cwvClear" class="btn btn-outline-secondary">${escapeHtml(t(opts.lang, 'tool_cwv_clear'))}</button>
          </div>
        </form>
        <div id="cwvResult" class="result" style="display:none" aria-live="polite">
          <div><strong>${escapeHtml(t(opts.lang, 'tool_cwv_summary_label'))}:</strong> <span id="cwvSummary"></span></div>
          <p class="muted mb-0" id="cwvNote"></p>
          <div id="cwvCards"></div>
        </div>
      </div>
    </div>

    ${renderToolIgSections({ lang: opts.lang, prefix: 'tool_cwv', mode: 'rules', ruleItemCount: 5 })}`;

	const referencesHtml = renderToolReferencesSection({
		lang: opts.lang,
		links: [
			{
				label: t(opts.lang, 'tool_cwv_ref_clarity_label'),
				href: 'https://learn.microsoft.com/en-us/clarity/insights/performance-widget',
			},
			{
				label: t(opts.lang, 'tool_cwv_ref_clarity_zh_label'),
				href: 'https://learn.microsoft.com/zh-cn/clarity/insights/performance-widget',
			},
			{
				label: t(opts.lang, 'tool_cwv_ref_webdev_label'),
				href: 'https://web.dev/articles/vitals',
			},
			{
				label: t(opts.lang, 'tool_cwv_ref_google_label'),
				href: 'https://developers.google.com/search/docs/appearance/core-web-vitals',
			},
		],
	});

	const extraBodyHtml = `
  <script>
    (function () {
      /** 表单与结果区节点 */
      var form = document.getElementById('cwvForm');
      var lcpEl = document.getElementById('cwvLcp');
      var inpEl = document.getElementById('cwvInp');
      var clsEl = document.getElementById('cwvCls');
      var result = document.getElementById('cwvResult');
      var summaryEl = document.getElementById('cwvSummary');
      var noteEl = document.getElementById('cwvNote');
      var cardsEl = document.getElementById('cwvCards');

      /** 文案（构建期注入，避免运行时再请求） */
      var msgEmpty = ${JSON.stringify(t(opts.lang, 'tool_cwv_err_empty'))};
      var msgLcp = ${JSON.stringify(t(opts.lang, 'tool_cwv_err_lcp'))};
      var msgInp = ${JSON.stringify(t(opts.lang, 'tool_cwv_err_inp'))};
      var msgCls = ${JSON.stringify(t(opts.lang, 'tool_cwv_err_cls'))};
      var noteP75 = ${JSON.stringify(t(opts.lang, 'tool_cwv_note_p75'))};
      var labelGood = ${JSON.stringify(t(opts.lang, 'tool_cwv_grade_good'))};
      var labelNi = ${JSON.stringify(t(opts.lang, 'tool_cwv_grade_ni'))};
      var labelPoor = ${JSON.stringify(t(opts.lang, 'tool_cwv_grade_poor'))};
      var causeLabel = ${JSON.stringify(t(opts.lang, 'tool_cwv_cause_label'))};
      var fixLabel = ${JSON.stringify(t(opts.lang, 'tool_cwv_fix_label'))};
      var nameLcp = ${JSON.stringify(t(opts.lang, 'tool_cwv_metric_lcp'))};
      var nameInp = ${JSON.stringify(t(opts.lang, 'tool_cwv_metric_inp'))};
      var nameCls = ${JSON.stringify(t(opts.lang, 'tool_cwv_metric_cls'))};
      var causeLcp = ${JSON.stringify(t(opts.lang, 'tool_cwv_lcp_cause'))};
      var fixLcp = ${JSON.stringify(t(opts.lang, 'tool_cwv_lcp_fix'))};
      var causeInp = ${JSON.stringify(t(opts.lang, 'tool_cwv_inp_cause'))};
      var fixInp = ${JSON.stringify(t(opts.lang, 'tool_cwv_inp_fix'))};
      var causeCls = ${JSON.stringify(t(opts.lang, 'tool_cwv_cls_cause'))};
      var fixCls = ${JSON.stringify(t(opts.lang, 'tool_cwv_cls_fix'))};
      var summaryTpl = ${JSON.stringify(t(opts.lang, 'tool_cwv_summary_tpl'))};

      /**
       * 读取当前 LCP 单位：秒 (s) 或毫秒 (ms)。
       * @returns {'s'|'ms'}
       */
      function lcpUnit() {
        var el = form.querySelector('input[name="lcpUnit"]:checked');
        return el && el.value === 'ms' ? 'ms' : 's';
      }

      /**
       * 将可选输入解析为有限非负数字；空字符串视为未填。
       * @param {HTMLInputElement} el
       * @returns {{ok:true,empty:true}|{ok:true,empty:false,value:number}|{ok:false}}
       */
      function parseOptional(el) {
        var raw = String(el.value || '').trim();
        if (!raw) return { ok: true, empty: true };
        var n = parseFloat(raw);
        if (!Number.isFinite(n) || n < 0) return { ok: false };
        return { ok: true, empty: false, value: n };
      }

      /**
       * 按公开阈值评级（对齐 web.dev / Google；Clarity「理想」目标与 Good 档一致）。
       * @param {'lcp'|'inp'|'cls'} kind
       * @param {number} value LCP 与 INP 以毫秒计；CLS 无量纲
       * @returns {'good'|'ni'|'poor'}
       */
      function grade(kind, value) {
        if (kind === 'lcp') {
          if (value <= 2500) return 'good';
          if (value <= 4000) return 'ni';
          return 'poor';
        }
        if (kind === 'inp') {
          if (value <= 200) return 'good';
          if (value <= 500) return 'ni';
          return 'poor';
        }
        if (value <= 0.1) return 'good';
        if (value <= 0.25) return 'ni';
        return 'poor';
      }

      /**
       * 档位 → 可见标签与 CSS class。
       * @param {'good'|'ni'|'poor'} g
       */
      function badge(g) {
        if (g === 'good') return { text: labelGood, cls: 'cwv-good' };
        if (g === 'ni') return { text: labelNi, cls: 'cwv-ni' };
        return { text: labelPoor, cls: 'cwv-poor' };
      }

      /**
       * 转义文本后插入 HTML。
       * @param {string} s
       */
      function esc(s) {
        return String(s)
          .replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')
          .replace(/"/g, '&quot;');
      }

      /**
       * 渲染单指标卡片。
       * @param {string} name
       * @param {string} displayValue
       * @param {'good'|'ni'|'poor'} g
       * @param {string} cause
       * @param {string} fix
       */
      function metricCard(name, displayValue, g, cause, fix) {
        var b = badge(g);
        return (
          '<div class="cwv-metric">' +
          '<div><strong>' +
          esc(name) +
          '</strong> · ' +
          esc(displayValue) +
          ' <span class="cwv-badge ' +
          b.cls +
          '">' +
          esc(b.text) +
          '</span></div>' +
          (g === 'good'
            ? ''
            : '<p class="muted mb-1"><strong>' +
              esc(causeLabel) +
              ':</strong> ' +
              esc(cause) +
              '</p><p class="muted mb-0"><strong>' +
              esc(fixLabel) +
              ':</strong> ' +
              esc(fix) +
              '</p>') +
          '</div>'
        );
      }

      /**
       * 执行评级并更新结果区。
       * @returns {boolean} 是否成功出结果
       */
      function runGrade() {
        var lcpP = parseOptional(lcpEl);
        var inpP = parseOptional(inpEl);
        var clsP = parseOptional(clsEl);
        result.style.display = 'block';
        cardsEl.innerHTML = '';

        if (!lcpP.ok) {
          summaryEl.textContent = '—';
          noteEl.textContent = msgLcp;
          return false;
        }
        if (!inpP.ok) {
          summaryEl.textContent = '—';
          noteEl.textContent = msgInp;
          return false;
        }
        if (!clsP.ok) {
          summaryEl.textContent = '—';
          noteEl.textContent = msgCls;
          return false;
        }
        if (lcpP.empty && inpP.empty && clsP.empty) {
          summaryEl.textContent = '—';
          noteEl.textContent = msgEmpty;
          return false;
        }

        /** @type {number} */
        var goodCount = 0;
        /** @type {number} */
        var gradedCount = 0;
        var html = '';

        if (!lcpP.empty) {
          var lcpMs = lcpUnit() === 'ms' ? lcpP.value : lcpP.value * 1000;
          var gL = grade('lcp', lcpMs);
          if (gL === 'good') goodCount++;
          gradedCount++;
          var lcpDisp =
            lcpUnit() === 'ms'
              ? Math.round(lcpMs) + ' ms'
              : (lcpMs / 1000).toFixed(2) + ' s (' + Math.round(lcpMs) + ' ms)';
          html += metricCard(nameLcp, lcpDisp, gL, causeLcp, fixLcp);
        }
        if (!inpP.empty) {
          var gI = grade('inp', inpP.value);
          if (gI === 'good') goodCount++;
          gradedCount++;
          html += metricCard(nameInp, Math.round(inpP.value) + ' ms', gI, causeInp, fixInp);
        }
        if (!clsP.empty) {
          var gC = grade('cls', clsP.value);
          if (gC === 'good') goodCount++;
          gradedCount++;
          html += metricCard(nameCls, String(clsP.value), gC, causeCls, fixCls);
        }

        summaryEl.textContent = summaryTpl
          .replace('{good}', String(goodCount))
          .replace('{n}', String(gradedCount));
        noteEl.textContent = noteP75;
        cardsEl.innerHTML = html;
        return true;
      }

      /**
       * 加载默认样例：LCP 3.2s、INP 280ms、CLS 0.18（均为 Needs improvement）。
       */
      function loadSample() {
        var sRadio = form.querySelector('input[name="lcpUnit"][value="s"]');
        if (sRadio) sRadio.checked = true;
        lcpEl.value = '3.2';
        inpEl.value = '280';
        clsEl.value = '0.18';
        runGrade();
      }

      form.addEventListener('submit', function (e) {
        e.preventDefault();
        runGrade();
      });
      document.getElementById('cwvSample').addEventListener('click', loadSample);
      document.getElementById('cwvClear').addEventListener('click', function () {
        form.reset();
        var sRadio = form.querySelector('input[name="lcpUnit"][value="s"]');
        if (sRadio) sRadio.checked = true;
        result.style.display = 'none';
        cardsEl.innerHTML = '';
      });
      loadSample();
    })();
  </script>`;

	const toolMeta = getToolBySlug('core-web-vitals-checker');
	const toolSeoHtml = toolMeta
		? renderToolExtraSections({ lang: opts.lang, defaultLang: opts.defaultLang, tool: toolMeta })
		: '';
	const toolJsonLd = toolMeta
		? buildToolJsonLd({
				lang: opts.lang,
				tool: toolMeta,
				canonicalPath,
				description,
			})
		: '';

	return renderLayout({
		lang: opts.lang,
		title,
		description,
		canonicalPath,
		alternates,
		headerHtml,
		sidebarHtml,
		footerHtml,
		contentHtml: `${contentHtml}${toolSeoHtml}${referencesHtml}`,
		extraHeadHtml,
		extraBodyHtml,
		ogImageUrl: 'https://onlinefreetools.org/og-image.png',
		jsonLd: toolJsonLd,
	});
};
