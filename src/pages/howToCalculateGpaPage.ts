/**
 * GPA 计算器：课程成绩点与学分 → 4.0 量表加权平均 GPA。
 * slug: how-to-calculate-gpa（见 work-tasks/how-to-calculate-gpa/02-tool-info.md）。
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
 * 渲染 GPA 计算器工具页 HTML。
 * @param opts.lang 当前语言
 * @param opts.defaultLang 站点默认语言
 * @param opts.enabledLangs 启用语言列表
 */
export const renderHowToCalculateGpaPage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	const toolPath = '/tools/how-to-calculate-gpa';
	const canonicalPath = withLangPrefix(opts.lang, toolPath, opts.defaultLang);
	const title = `${t(opts.lang, 'tool_gpa_title')} | ${t(opts.lang, 'brand')}`;
	const description = t(opts.lang, 'tool_gpa_description');

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
			currentSlug: 'how-to-calculate-gpa',
			currentAnchor: '#gpa',
		}),
		id: 'toolNav',
	});

	const footerHtml = renderFooter({ lang: opts.lang });

	const extraHeadHtml = `
  <style>
    .tool-card { max-width: var(--content-max); width: 100%; margin: 0 0 1.5rem; }
    .form-label { display:block; margin-bottom:.5rem; color:#495057; font-weight:500 }
    .form-group { margin-bottom:1rem; }
    .form-hint { color:#6c757d; font-size:.875rem; margin-top:.35rem }
    .btn-row { display:flex; flex-wrap:wrap; gap:.5rem; align-items:center; }
    .result { background:#f8f9fa; padding:1rem; border-radius:8px; margin-top:1rem; text-align:center }
    .result .muted { color:#6c757d; font-size:.9rem; margin-top:.35rem }
    textarea.input-lg { min-height:6.5rem; resize:vertical; font-family:inherit }
  </style>`;

	const contentHtml = `
    <div id="gpa" class="mb-3">
      <h1 class="h4 mb-1">${escapeHtml(t(opts.lang, 'tool_gpa_title'))}</h1>
      <p class="text-muted mb-0">${escapeHtml(description)}</p>
    </div>

    <div class="card tool-card">
      <div class="card-body">
        <form id="gpaForm">
          <div class="form-group">
            <label class="form-label" for="gpaCourses">${escapeHtml(t(opts.lang, 'tool_gpa_courses_label'))}</label>
            <textarea id="gpaCourses" class="input-lg" rows="5"
              placeholder="${escapeHtml(t(opts.lang, 'tool_gpa_courses_ph'))}" required></textarea>
            <p class="form-hint">${escapeHtml(t(opts.lang, 'tool_gpa_courses_hint'))}</p>
          </div>
          <div class="btn-row">
            <button type="submit" class="btn btn-primary">${escapeHtml(t(opts.lang, 'tool_gpa_calculate'))}</button>
            <button type="button" id="gpaSample" class="btn btn-outline-secondary">${escapeHtml(t(opts.lang, 'tool_gpa_sample'))}</button>
            <button type="button" id="gpaClear" class="btn btn-outline-secondary">${escapeHtml(t(opts.lang, 'tool_gpa_clear'))}</button>
          </div>
        </form>
        <div id="gpaResult" class="result" style="display:none" aria-live="polite">
          <div><strong>${escapeHtml(t(opts.lang, 'tool_gpa_result_label'))}:</strong> <span id="gpaValue"></span></div>
          <div id="gpaNote" class="muted"></div>
        </div>
      </div>
    </div>

    ${renderToolIgSections({ lang: opts.lang, prefix: 'tool_gpa', mode: 'formula' })}`;

	const referencesHtml = renderToolReferencesSection({
		lang: opts.lang,
		links: [
			{
				label: t(opts.lang, 'tool_gpa_ref_cb_label'),
				href: 'https://www.collegeboard.org/',
			},
			{
				label: t(opts.lang, 'tool_gpa_ref_wiki_label'),
				href: 'https://en.wikipedia.org/wiki/Academic_grading_in_the_United_States',
			},
		],
	});

	const extraBodyHtml = `
  <script>
    (function () {
      var form = document.getElementById('gpaForm');
      var coursesEl = document.getElementById('gpaCourses');
      var result = document.getElementById('gpaResult');
      var valueEl = document.getElementById('gpaValue');
      var noteEl = document.getElementById('gpaNote');
      var msgParse = ${JSON.stringify(t(opts.lang, 'tool_gpa_err_parse'))};
      var msgCredits = ${JSON.stringify(t(opts.lang, 'tool_gpa_err_credits'))};
      var noteScale = ${JSON.stringify(t(opts.lang, 'tool_gpa_result_note'))};

      /**
       * 解析每行「成绩点, 学分」。
       * @param {string} raw
       * @returns {{ok:true, rows:{g:number,c:number}[]}|{ok:false, err:string}}
       */
      function parseCourses(raw) {
        var lines = String(raw || '').split(/\r?\n/).map(function (l) { return l.trim(); }).filter(Boolean);
        if (!lines.length) return { ok: false, err: msgParse };
        var rows = [];
        for (var i = 0; i < lines.length; i++) {
          var parts = lines[i].split(/[,;\s，、]+/).filter(Boolean);
          if (parts.length < 2) return { ok: false, err: msgParse };
          var g = parseFloat(parts[0]);
          var c = parseFloat(parts[1]);
          if (!Number.isFinite(g) || !Number.isFinite(c)) return { ok: false, err: msgParse };
          if (!(c > 0)) return { ok: false, err: msgCredits };
          rows.push({ g: g, c: c });
        }
        return { ok: true, rows: rows };
      }

      /** 加权 GPA = Σ(g·c) / Σ(c)。 */
      function runCalc() {
        var parsed = parseCourses(coursesEl.value);
        result.style.display = 'block';
        if (!parsed.ok) {
          valueEl.textContent = '—';
          noteEl.textContent = parsed.err;
          return false;
        }
        var sumGC = 0;
        var sumC = 0;
        for (var i = 0; i < parsed.rows.length; i++) {
          sumGC += parsed.rows[i].g * parsed.rows[i].c;
          sumC += parsed.rows[i].c;
        }
        var gpa = sumGC / sumC;
        valueEl.textContent = gpa.toFixed(2);
        noteEl.textContent = noteScale;
        return true;
      }

      /** 样例：4.0×3 + 3.0×3 → 3.50。 */
      function loadSample() {
        coursesEl.value = '4.0, 3\n3.0, 3';
        runCalc();
      }

      form.addEventListener('submit', function (e) {
        e.preventDefault();
        runCalc();
      });
      document.getElementById('gpaSample').addEventListener('click', loadSample);
      document.getElementById('gpaClear').addEventListener('click', function () {
        form.reset();
        result.style.display = 'none';
      });
      loadSample();
    })();
  </script>`;

	const toolMeta = getToolBySlug('how-to-calculate-gpa');
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
