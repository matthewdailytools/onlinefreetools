/**
 * 生成通用计算器工具页 TypeScript（表单字段 + 内嵌 calc JS）。
 * @param {object} t 工具定义（见 tools/*.mjs）
 * @returns {string} 文件内容
 */
export const generateCalculatorPage = (t) => {
	const fileBase = t.pageFile;
	const exp = t.pageExport;
	const prefix = t.prefix;
	const slug = t.slug;
	const anchor = t.anchor || slug.replace(/^how-to-calculate-/, '').replace(/-/g, '');
	const fields = t.fields || [];

	/** 生成表单控件 HTML 片段（服务端模板字符串内）。 */
	const fieldHtml = fields
		.map((f) => {
			if (f.type === 'select') {
				const opts = (f.options || [])
					.map(
						(o) =>
							`<option value="${o.value}"${o.selected ? ' selected' : ''}>\${escapeHtml(t(opts.lang, '${prefix}_${o.labelKey}'))}</option>`
					)
					.join('\n              ');
				return `
          <div class="form-group${f.half ? ' form-half' : ''}">
            <label class="form-label" for="${f.id}">\${escapeHtml(t(opts.lang, '${prefix}_${f.labelKey}'))}</label>
            <select id="${f.id}" class="input-lg">
              ${opts}
            </select>
          </div>`;
			}
			/** textarea：现金流列表等多行输入 */
			if (f.type === 'textarea') {
				return `
          <div class="form-group${f.half ? ' form-half' : ''}" style="grid-column:1/-1">
            <label class="form-label" for="${f.id}">\${escapeHtml(t(opts.lang, '${prefix}_${f.labelKey}'))}</label>
            <textarea id="${f.id}" class="input-lg" rows="${f.rows || 4}"
              placeholder="\${escapeHtml(t(opts.lang, '${prefix}_${f.phKey}'))}" style="min-height:6rem;resize:vertical;font-family:inherit"></textarea>
          </div>`;
			}
			/** text / date：日期与需保留原始字符串的输入；其余默认 number */
			const inputType = f.type === 'text' || f.type === 'date' ? f.type : 'number';
			const stepAttr = inputType === 'number' ? ' step="any"' : '';
			const phAttr =
				inputType === 'date'
					? ''
					: ` placeholder="\${escapeHtml(t(opts.lang, '${prefix}_${f.phKey}'))}"`;
			return `
          <div class="form-group${f.half ? ' form-half' : ''}">
            <label class="form-label" for="${f.id}">\${escapeHtml(t(opts.lang, '${prefix}_${f.labelKey}'))}</label>
            <input id="${f.id}" class="input-lg" type="${inputType}"${stepAttr}${phAttr}>
          </div>`;
		})
		.join('\n');

	const resultLines = (t.results || [])
		.map(
			(r, i) =>
				`<div${i ? ' class="muted"' : ''}><strong>\${escapeHtml(t(opts.lang, '${prefix}_${r.labelKey}'))}:</strong> <span id="${r.id}"></span></div>`
		)
		.join('\n          ');

	const refLinks = (t.refs || [])
		.map(
			(r) => `{
				label: t(opts.lang, '${prefix}_${r.labelKey}'),
				href: '${r.href}',
			}`
		)
		.join(',\n			');

	const fieldIds = fields.map((f) => f.id);
	const elDecls = fieldIds.map((id) => `var ${id}El = document.getElementById('${id}');`).join('\n      ');
	const resultIds = (t.results || []).map((r) => r.id);
	const resDecls = resultIds.map((id) => `var ${id}El = document.getElementById('${id}');`).join('\n      ');

	return `/**
 * ${t.nameZh || slug} 计算器工具页。
 * slug: ${slug}（见 work-tasks/${slug}/02-tool-info.md）。
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
	const safe = pathname.startsWith('/') ? pathname : \`/\${pathname}\`;
	return lang === defaultLang ? safe : \`/\${lang}\${safe}\`;
};

/**
 * 渲染 ${slug} 工具页 HTML。
 * @param opts.lang 当前语言
 * @param opts.defaultLang 站点默认语言
 * @param opts.enabledLangs 启用语言列表
 */
export const ${exp} = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	const toolPath = '/tools/${slug}';
	const canonicalPath = withLangPrefix(opts.lang, toolPath, opts.defaultLang);
	const title = \`\${t(opts.lang, '${prefix}_title')} | \${t(opts.lang, 'brand')}\`;
	const description = t(opts.lang, '${prefix}_description');

	const navItems = buildToolPageNavItems(opts.lang, opts.defaultLang);

	/** 语言切换链接始终带显式语言前缀。 */
	const withExplicitLangPrefix = (code: SiteLang, pathname: string) => {
		const safe = pathname.startsWith('/') ? pathname : \`/\${pathname}\`;
		return \`/\${code}\${safe}\`.replace(/\\/{2,}/g, '/');
	};

	const langAlternates: Record<string, string> = Object.fromEntries(
		(supportedLangs || []).map((code) => [code, withExplicitLangPrefix(code, toolPath)])
	);

	const alternates: HreflangAlternate[] = (supportedLangs || []).map((code) => ({
		lang: code,
		href: \`https://onlinefreetools.org\${withLangPrefix(code, toolPath, opts.defaultLang)}\`,
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
			currentSlug: '${slug}',
			currentAnchor: '#${anchor}',
		}),
		id: 'toolNav',
	});

	const footerHtml = renderFooter({ lang: opts.lang });

	const extraHeadHtml = \`
  <style>
    .tool-card { max-width: var(--content-max); width: 100%; margin: 0 0 1.5rem; }
    .form-label { display:block; margin-bottom:.5rem; color:#495057; font-weight:500 }
    .form-group { margin-bottom:1rem; }
    .form-row { display:grid; grid-template-columns:1fr 1fr; gap:1rem; }
    .form-half { }
    @media (max-width:576px) { .form-row { grid-template-columns:1fr; } }
    .btn-row { display:flex; flex-wrap:wrap; gap:.5rem; align-items:center; }
    .result { background:#f8f9fa; padding:1rem; border-radius:8px; margin-top:1rem; text-align:center }
    .result .muted { color:#6c757d; font-size:.9rem; margin-top:.35rem }
  </style>\`;

	const contentHtml = \`
    <div id="${anchor}" class="mb-3">
      <h1 class="h4 mb-1">\${escapeHtml(t(opts.lang, '${prefix}_title'))}</h1>
      <p class="text-muted mb-0">\${escapeHtml(description)}</p>
    </div>

    <div class="card tool-card">
      <div class="card-body">
        <form id="calcForm">
          <div class="form-row">
${fieldHtml}
          </div>
          <div class="btn-row">
            <button type="submit" class="btn btn-primary">\${escapeHtml(t(opts.lang, '${prefix}_calculate'))}</button>
            <button type="button" id="btnSample" class="btn btn-outline-secondary">\${escapeHtml(t(opts.lang, '${prefix}_sample'))}</button>
            <button type="button" id="btnClear" class="btn btn-outline-secondary">\${escapeHtml(t(opts.lang, '${prefix}_clear'))}</button>
          </div>
        </form>
        <div id="calcResult" class="result" style="display:none" aria-live="polite">
          ${resultLines}
          <div id="calcNote" class="muted"></div>
        </div>
      </div>
    </div>

    \${renderToolIgSections({ lang: opts.lang, prefix: '${prefix}', mode: 'formula' })}\`;

	const referencesHtml = renderToolReferencesSection({
		lang: opts.lang,
		links: [
			${refLinks}
		],
	});

	const extraBodyHtml = \`
  <script>
    (function () {
      var form = document.getElementById('calcForm');
      var result = document.getElementById('calcResult');
      var noteEl = document.getElementById('calcNote');
      ${elDecls}
      ${resDecls}
      var msgErr = \${JSON.stringify(t(opts.lang, '${prefix}_err_generic'))};
      var noteEdu = \${JSON.stringify(t(opts.lang, '${prefix}_result_note'))};

      /** 格式化数字（默认 2 位小数）。 */
      function fmt(n, d) {
        d = d == null ? 2 : d;
        return Number.isFinite(n) ? n.toFixed(d) : '—';
      }

      /**
       * 核心计算（由工具定义注入）。
       * @returns {{ ok: boolean, error?: string, values?: Record<string, string|number> }}
       */
      function compute() {
${t.computeJs}
      }

      /** 执行计算并刷新结果区。 */
      function runCalc() {
        var out = compute();
        result.style.display = 'block';
        if (!out || !out.ok) {
          ${(t.results || []).map((r) => `${r.id}El.textContent = '—';`).join('\n          ')}
          noteEl.textContent = (out && out.error) || msgErr;
          return false;
        }
        var v = out.values || {};
        ${(t.results || []).map((r) => `${r.id}El.textContent = v.${r.id} != null ? String(v.${r.id}) : '—';`).join('\n        ')}
        noteEl.textContent = noteEdu;
        return true;
      }

      /** 加载进页样例。 */
      function loadSample() {
${t.sampleJs}
        runCalc();
      }

      form.addEventListener('submit', function (e) {
        e.preventDefault();
        runCalc();
      });
      document.getElementById('btnSample').addEventListener('click', loadSample);
      document.getElementById('btnClear').addEventListener('click', function () {
        form.reset();
        result.style.display = 'none';
      });
      loadSample();
    })();
  </script>\`;

	const toolMeta = getToolBySlug('${slug}');
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
		contentHtml: \`\${contentHtml}\${toolSeoHtml}\${referencesHtml}\`,
		footerHtml,
		extraHeadHtml: \`\${extraHeadHtml}\${toolJsonLd}\`,
		extraBodyHtml,
		includeSidebarToggleScript: true,
		sidebarAutoCloseSelector: '#toolNav a',
	});
};
`;
};
