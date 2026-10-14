/**
 * 加速度计算器：匀变速直线 a=(v−v0)/t，可解 a / v / v0 / t，附计算过程。
 * slug: how-to-calculate-acceleration（见 work-tasks/how-to-calculate-acceleration/02-tool-info.md）。
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
 * 渲染 how-to-calculate-acceleration 工具页 HTML。
 * @param opts.lang 当前语言
 * @param opts.defaultLang 站点默认语言
 * @param opts.enabledLangs 启用语言列表
 */
export const renderHowToCalculateAccelerationPage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	const toolPath = '/tools/how-to-calculate-acceleration';
	const canonicalPath = withLangPrefix(opts.lang, toolPath, opts.defaultLang);
	const title = `${t(opts.lang, 'tool_acceleration_title')} | ${t(opts.lang, 'brand')}`;
	const description = t(opts.lang, 'tool_acceleration_description');

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
			currentSlug: 'how-to-calculate-acceleration',
			currentAnchor: '#acceleration',
		}),
		id: 'toolNav',
	});

	const footerHtml = renderFooter({ lang: opts.lang });

	/** 单个数值输入字段。 */
	const numField = (id: string, labelKey: string, phKey: string) => `
            <div class="form-group form-half" data-field="${id}">
              <label class="form-label" for="${id}">${escapeHtml(t(opts.lang, labelKey as never))}</label>
              <input id="${id}" class="input-lg" type="number" step="any" inputmode="decimal" placeholder="${escapeHtml(t(opts.lang, phKey as never))}">
            </div>`;

	const extraHeadHtml = `
  <style>
    .tool-card { max-width: var(--content-max); width: 100%; margin: 0 0 1.5rem; }
    .form-label { display:block; margin-bottom:.5rem; color:#495057; font-weight:500 }
    .form-group { margin-bottom:1rem; }
    .form-row { display:grid; grid-template-columns:1fr 1fr; gap:1rem; }
    @media (max-width:576px) { .form-row { grid-template-columns:1fr; } }
    .btn-row { display:flex; flex-wrap:wrap; gap:.5rem; align-items:center; }
    .result { background:#f8f9fa; padding:1rem; border-radius:8px; margin-top:1rem; text-align:center }
    .result .muted { color:#6c757d; font-size:.9rem; margin-top:.35rem }
    .result .work { font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace; font-size:.92rem; margin-top:.35rem; word-break:break-word }
    .form-half[hidden] { display:none !important; }
  </style>`;

	const contentHtml = `
    <div id="acceleration" class="mb-3">
      <h1 class="h4 mb-1">${escapeHtml(t(opts.lang, 'tool_acceleration_title'))}</h1>
      <p class="text-muted mb-0">${escapeHtml(description)}</p>
    </div>

    <div class="card tool-card">
      <div class="card-body">
        <form id="calcForm">
          <div class="form-group">
            <label class="form-label" for="solve">${escapeHtml(t(opts.lang, 'tool_acceleration_solve_label'))}</label>
            <select id="solve" class="input-lg">
              <option value="a" selected>${escapeHtml(t(opts.lang, 'tool_acceleration_solve_a'))}</option>
              <option value="v">${escapeHtml(t(opts.lang, 'tool_acceleration_solve_v'))}</option>
              <option value="v0">${escapeHtml(t(opts.lang, 'tool_acceleration_solve_v0'))}</option>
              <option value="t">${escapeHtml(t(opts.lang, 'tool_acceleration_solve_t'))}</option>
            </select>
          </div>
          <div class="form-row">
            ${numField('v0', 'tool_acceleration_v0_label', 'tool_acceleration_v0_ph')}
            ${numField('v', 'tool_acceleration_v_label', 'tool_acceleration_v_ph')}
            ${numField('t', 'tool_acceleration_t_label', 'tool_acceleration_t_ph')}
            ${numField('a', 'tool_acceleration_a_label', 'tool_acceleration_a_ph')}
          </div>
          <div class="btn-row">
            <button type="submit" class="btn btn-primary">${escapeHtml(t(opts.lang, 'tool_acceleration_calculate'))}</button>
            <button type="button" id="btnSample" class="btn btn-outline-secondary">${escapeHtml(t(opts.lang, 'tool_acceleration_sample'))}</button>
            <button type="button" id="btnClear" class="btn btn-outline-secondary">${escapeHtml(t(opts.lang, 'tool_acceleration_clear'))}</button>
          </div>
        </form>
        <div id="calcResult" class="result" style="display:none" aria-live="polite">
          <div><strong><span id="outLabel"></span>:</strong> <span id="accOut"></span></div>
          <div id="workWrap" class="work"><strong>${escapeHtml(t(opts.lang, 'tool_acceleration_work_label'))}:</strong> <span id="workOut" dir="ltr"></span></div>
          <div id="calcNote" class="muted"></div>
        </div>
      </div>
    </div>

    ${renderToolIgSections({ lang: opts.lang, prefix: 'tool_acceleration', mode: 'formula', usecaseCount: 4 })}`;

	const referencesHtml = renderToolReferencesSection({
		lang: opts.lang,
		links: [
			{
				label: t(opts.lang, 'tool_acceleration_ref_a_label'),
				href: 'https://en.wikipedia.org/wiki/Acceleration',
			},
			{
				label: t(opts.lang, 'tool_acceleration_ref_b_label'),
				href: 'https://physics.info/motion-equations/',
			},
		],
	});

	const extraBodyHtml = `
  <script>
    (function () {
      var form = document.getElementById('calcForm');
      var solveEl = document.getElementById('solve');
      var result = document.getElementById('calcResult');
      var outLabel = document.getElementById('outLabel');
      var accOutEl = document.getElementById('accOut');
      var workWrap = document.getElementById('workWrap');
      var workOut = document.getElementById('workOut');
      var noteEl = document.getElementById('calcNote');
      var LANG = ${JSON.stringify(opts.lang)};
      var msgFinite = ${JSON.stringify(t(opts.lang, 'tool_acceleration_err_finite'))};
      var msgTime = ${JSON.stringify(t(opts.lang, 'tool_acceleration_err_time'))};
      var msgZeroA = ${JSON.stringify(t(opts.lang, 'tool_acceleration_err_zero_a'))};
      var noteEdu = ${JSON.stringify(t(opts.lang, 'tool_acceleration_result_note'))};
      var labels = {
        a: ${JSON.stringify(t(opts.lang, 'tool_acceleration_accOut_label'))},
        v: ${JSON.stringify(t(opts.lang, 'tool_acceleration_vOut_label'))},
        v0: ${JSON.stringify(t(opts.lang, 'tool_acceleration_v0Out_label'))},
        t: ${JSON.stringify(t(opts.lang, 'tool_acceleration_tOut_label'))}
      };
      var nf = new Intl.NumberFormat(LANG + '-u-nu-latn', { maximumFractionDigits: 4, useGrouping: false });

      /** 格式化数字。 */
      function fmt(n) {
        return Number.isFinite(n) ? nf.format(n) : '—';
      }

      /** 计算过程中的操作数：负数加括号，避免出现 “20 + -9.8”。 */
      function par(n) {
        return n < 0 ? '(' + fmt(n) + ')' : fmt(n);
      }

      /** 读取输入；空为 NaN。 */
      function num(id) {
        var raw = document.getElementById(id).value;
        return raw === '' ? NaN : Number(raw);
      }

      /** 隐藏要求解的那个输入框。 */
      function syncSolve() {
        var target = solveEl.value;
        ['v0', 'v', 't', 'a'].forEach(function (id) {
          var wrap = form.querySelector('[data-field=\"' + id + '\"]');
          wrap.hidden = id === target;
        });
      }

      /**
       * 按 a=(v−v0)/t 解所求量。
       * @returns {{ ok: boolean, error?: string, value?: number, work?: string, kind?: string }}
       */
      function compute() {
        var kind = solveEl.value;
        if (kind === 'a') {
          var v0 = num('v0'), v = num('v'), t = num('t');
          if (![v0, v, t].every(Number.isFinite)) return { ok: false, error: msgFinite };
          if (!(t > 0)) return { ok: false, error: msgTime };
          var a = (v - v0) / t;
          return { ok: true, kind: 'a', value: a, work: 'a = (' + fmt(v) + ' − ' + par(v0) + ') ÷ ' + fmt(t) + ' = ' + fmt(a) };
        }
        if (kind === 'v') {
          var v0b = num('v0'), ab = num('a'), tb = num('t');
          if (![v0b, ab, tb].every(Number.isFinite)) return { ok: false, error: msgFinite };
          if (!(tb > 0)) return { ok: false, error: msgTime };
          var vf = v0b + ab * tb;
          return { ok: true, kind: 'v', value: vf, work: 'v = ' + fmt(v0b) + ' + ' + par(ab) + ' × ' + fmt(tb) + ' = ' + fmt(vf) };
        }
        if (kind === 'v0') {
          var vc = num('v'), ac = num('a'), tc = num('t');
          if (![vc, ac, tc].every(Number.isFinite)) return { ok: false, error: msgFinite };
          if (!(tc > 0)) return { ok: false, error: msgTime };
          var v0c = vc - ac * tc;
          return { ok: true, kind: 'v0', value: v0c, work: 'v0 = ' + fmt(vc) + ' − ' + par(ac) + ' × ' + fmt(tc) + ' = ' + fmt(v0c) };
        }
        var v0d = num('v0'), vd = num('v'), ad = num('a');
        if (![v0d, vd, ad].every(Number.isFinite)) return { ok: false, error: msgFinite };
        if (ad === 0) return { ok: false, error: msgZeroA };
        var td = (vd - v0d) / ad;
        if (!(td > 0)) return { ok: false, error: msgTime };
        return { ok: true, kind: 't', value: td, work: 't = (' + fmt(vd) + ' − ' + par(v0d) + ') ÷ ' + par(ad) + ' = ' + fmt(td) };
      }

      /** 执行计算并刷新结果区。 */
      function runCalc() {
        var out = compute();
        result.style.display = 'block';
        if (!out || !out.ok) {
          outLabel.textContent = labels[solveEl.value];
          accOutEl.textContent = '—';
          workWrap.style.display = 'none';
          noteEl.textContent = (out && out.error) || msgFinite;
          return false;
        }
        outLabel.textContent = labels[out.kind];
        accOutEl.textContent = fmt(out.value);
        workOut.textContent = out.work;
        workWrap.style.display = '';
        noteEl.textContent = noteEdu;
        return true;
      }

      /** 样例：v0=0, v=10, t=2 → a=5。 */
      function loadSample() {
        solveEl.value = 'a';
        syncSolve();
        document.getElementById('v0').value = '0';
        document.getElementById('v').value = '10';
        document.getElementById('t').value = '2';
        document.getElementById('a').value = '';
        runCalc();
      }

      solveEl.addEventListener('change', function () {
        syncSolve();
        result.style.display = 'none';
      });
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        runCalc();
      });
      document.getElementById('btnSample').addEventListener('click', loadSample);
      document.getElementById('btnClear').addEventListener('click', function () {
        form.reset();
        syncSolve();
        result.style.display = 'none';
      });
      syncSolve();
      loadSample();
    })();
  </script>`;

	const toolMeta = getToolBySlug('how-to-calculate-acceleration');
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
