/**
 * Schema JSON-LD 生成器工具页：类型下拉（FAQ / Article / Breadcrumb / Organization）→ 动态字段表单 → 输出
 * JSON-LD 与 `<script type="application/ld+json">` 包裹预览；必填字段缺失提示但允许生成并标注；纯浏览器本地计算。
 * slug: schema-jsonld-generator（见 work-tasks/schema-jsonld-generator/02-tool-info.md）。
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
 * 渲染 Schema JSON-LD 生成器工具页 HTML。
 * @param opts.lang 当前语言
 * @param opts.defaultLang 站点默认语言
 * @param opts.enabledLangs 启用语言列表
 */
export const renderSchemaJsonldGeneratorPage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	const toolPath = '/tools/schema-jsonld-generator';
	const canonicalPath = withLangPrefix(opts.lang, toolPath, opts.defaultLang);
	const title = `${t(opts.lang, 'tool_schema_title')} | ${t(opts.lang, 'brand')}`;
	const description = t(opts.lang, 'tool_schema_description');

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
			currentSlug: 'schema-jsonld-generator',
			currentAnchor: '#schema-jsonld-generator',
		}),
		id: 'toolNav',
	});

	const footerHtml = renderFooter({ lang: opts.lang });

	const extraHeadHtml = `
    <style>
      .tool-card { max-width: var(--content-max); width: 100%; margin: 0 0 1.5rem; }
      .form-label { display:block; margin-bottom:.5rem; color:#495057; font-weight:500 }
      .form-group { margin-bottom:1rem; }
      .btn-row { display:flex; flex-wrap:wrap; gap:.5rem; align-items:center; }
      .row-item { border:1px solid #dee2e6; border-radius:8px; padding:.75rem .75rem .25rem; margin-bottom:.75rem; background:#f8f9fa; }
      .row-item .form-label { font-size:.85rem; }
      .row-remove { margin:.25rem 0 .5rem; }
      .req-badge { display:inline-block; font-size:.7rem; font-weight:600; color:#b45309; border:1px solid #e0c3a0; border-radius:4px; padding:0 .35rem; margin-left:.35rem; vertical-align:middle; }
      .opt-badge { display:inline-block; font-size:.7rem; font-weight:600; color:#6c757d; border:1px solid #ced4da; border-radius:4px; padding:0 .35rem; margin-left:.35rem; vertical-align:middle; }
      #schemaWarn { margin:.5rem 0 1rem; }
      .warn-list { list-style:none; padding:0; margin:.35rem 0 0; font-size:.85rem; color:#b45309; }
      .ok-note { font-size:.85rem; color:#198754; }
      .output-head { display:flex; flex-wrap:wrap; gap:.75rem; align-items:center; margin-bottom:.5rem; }
      .wrap-check { font-size:.85rem; color:#495057; }
      pre.schema-out { background:#f8f9fa; border:1px solid #dee2e6; border-radius:8px; padding:.75rem; max-height:420px; overflow:auto; font-size:.8rem; white-space:pre-wrap; word-break:break-all; }
    </style>`;

	const contentHtml = `
      <div id="schema-jsonld-generator" class="mb-3">
        <h1 class="h4 mb-1">${escapeHtml(t(opts.lang, 'tool_schema_title'))}</h1>
        <p class="text-muted mb-0">${escapeHtml(description)}</p>
      </div>

      <div class="card tool-card">
        <div class="card-body">
          <div class="form-group">
            <label class="form-label" for="schemaType">${escapeHtml(t(opts.lang, 'tool_schema_type_label'))}</label>
            <select id="schemaType" class="input-lg">
              <option value="faq">${escapeHtml(t(opts.lang, 'tool_schema_type_faq'))}</option>
              <option value="article">${escapeHtml(t(opts.lang, 'tool_schema_type_article'))}</option>
              <option value="breadcrumb">${escapeHtml(t(opts.lang, 'tool_schema_type_breadcrumb'))}</option>
              <option value="organization">${escapeHtml(t(opts.lang, 'tool_schema_type_organization'))}</option>
            </select>
          </div>

          <div class="form-group">
            <label class="form-label">${escapeHtml(t(opts.lang, 'tool_schema_fields_label'))}</label>
            <div id="schemaFields"></div>
          </div>

          <div class="btn-row">
            <button type="button" id="schemaGenerate" class="btn btn-primary">${escapeHtml(t(opts.lang, 'tool_schema_generate'))}</button>
            <button type="button" id="schemaSample" class="btn btn-outline-secondary">${escapeHtml(t(opts.lang, 'tool_schema_sample'))}</button>
            <button type="button" id="schemaClear" class="btn btn-outline-secondary">${escapeHtml(t(opts.lang, 'tool_schema_clear'))}</button>
          </div>

          <div id="schemaWarn" aria-live="polite"></div>

          <div class="form-group mt-2 mb-0">
            <div class="output-head">
              <label class="form-label mb-0">${escapeHtml(t(opts.lang, 'tool_schema_output_label'))}</label>
              <label class="wrap-check"><input type="checkbox" id="schemaWrap" checked> ${escapeHtml(t(opts.lang, 'tool_schema_wrap_script'))}</label>
              <button type="button" id="schemaDownload" class="btn btn-sm btn-outline-secondary">${escapeHtml(t(opts.lang, 'tool_schema_download'))}</button>
              <button type="button" id="schemaCopy" class="btn btn-sm btn-outline-secondary">${escapeHtml(t(opts.lang, 'tool_schema_copy'))}</button>
            </div>
            <pre class="schema-out" id="schemaOutput"></pre>
          </div>
        </div>
      </div>

      ${renderToolIgSections({ lang: opts.lang, prefix: 'tool_schema', mode: 'rules', ruleItemCount: 4 })}`;

	const referencesHtml = renderToolReferencesSection({
		lang: opts.lang,
		links: [
			{
				label: t(opts.lang, 'tool_schema_ref_schema_label'),
				href: 'https://schema.org/',
			},
			{
				label: t(opts.lang, 'tool_schema_ref_google_label'),
				href: 'https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data',
			},
		],
	});

	const extraBodyHtml = `
    <script>
      (function () {
        var I = {
          required: ${JSON.stringify(t(opts.lang, 'tool_schema_required'))},
          optional: ${JSON.stringify(t(opts.lang, 'tool_schema_optional'))},
          missingRequired: ${JSON.stringify(t(opts.lang, 'tool_schema_missing_required'))},
          breadcrumbMin: ${JSON.stringify(t(opts.lang, 'tool_schema_breadcrumb_min'))},
          faqQuestion: ${JSON.stringify(t(opts.lang, 'tool_schema_faq_question'))},
          faqAnswer: ${JSON.stringify(t(opts.lang, 'tool_schema_faq_answer'))},
          faqAdd: ${JSON.stringify(t(opts.lang, 'tool_schema_faq_add'))},
          faqRemove: ${JSON.stringify(t(opts.lang, 'tool_schema_faq_remove'))},
          articleHeadline: ${JSON.stringify(t(opts.lang, 'tool_schema_article_headline'))},
          articleDescription: ${JSON.stringify(t(opts.lang, 'tool_schema_article_description'))},
          articleAuthor: ${JSON.stringify(t(opts.lang, 'tool_schema_article_author'))},
          articleDatePublished: ${JSON.stringify(t(opts.lang, 'tool_schema_article_date_published'))},
          articleDateModified: ${JSON.stringify(t(opts.lang, 'tool_schema_article_date_modified'))},
          articleImage: ${JSON.stringify(t(opts.lang, 'tool_schema_article_image'))},
          articleUrl: ${JSON.stringify(t(opts.lang, 'tool_schema_article_url'))},
          breadcrumbName: ${JSON.stringify(t(opts.lang, 'tool_schema_breadcrumb_name'))},
          breadcrumbUrl: ${JSON.stringify(t(opts.lang, 'tool_schema_breadcrumb_url'))},
          breadcrumbAdd: ${JSON.stringify(t(opts.lang, 'tool_schema_breadcrumb_add'))},
          orgName: ${JSON.stringify(t(opts.lang, 'tool_schema_org_name'))},
          orgUrl: ${JSON.stringify(t(opts.lang, 'tool_schema_org_url'))},
          orgLogo: ${JSON.stringify(t(opts.lang, 'tool_schema_org_logo'))},
          orgDescription: ${JSON.stringify(t(opts.lang, 'tool_schema_org_description'))},
          copyLabel: ${JSON.stringify(t(opts.lang, 'tool_schema_copy'))},
          copiedLabel: ${JSON.stringify(t(opts.lang, 'tool_schema_copied'))},
          errNoFields: ${JSON.stringify(t(opts.lang, 'tool_schema_err_no_fields'))}
        };

        var typeEl = document.getElementById('schemaType');
        var fieldsEl = document.getElementById('schemaFields');
        var warnEl = document.getElementById('schemaWarn');
        var outEl = document.getElementById('schemaOutput');
        var wrapEl = document.getElementById('schemaWrap');
        var copyBtn = document.getElementById('schemaCopy');
        var downloadBtn = document.getElementById('schemaDownload');

        /** 转义 HTML 属性/文本。 @param {string} s */
        function esc(s) {
          return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
        }

        /** 带必填/可选徽标的表单标签。 */
        function label(text, kind) {
          var badge = kind === 'req' ? '<span class="req-badge">' + esc(I.required) + '</span>'
            : '<span class="opt-badge">' + esc(I.optional) + '</span>';
          return '<label class="form-label">' + esc(text) + badge + '</label>';
        }

        /** 固定字段行（Article / Organization）。 */
        function fixedField(key, text, tag, kind, placeholder) {
          tag = tag || 'input';
          var ph = placeholder ? ' placeholder="' + esc(placeholder) + '"' : '';
          var ctrl = tag === 'textarea'
            ? '<textarea class="form-control" rows="2" data-key="' + key + '"' + ph + '></textarea>'
            : '<input class="input-lg" type="text" data-key="' + key + '"' + ph + '>';
          return '<div class="form-group">' + label(text, kind) + ctrl + '</div>';
        }

        /** FAQ 问题行（可重复）。 */
        function faqRow(n, q, a) {
          return '<div class="row-item faq-row">' +
            label(I.faqQuestion.replace('{n}', String(n)), 'req') +
            '<input class="input-lg" type="text" data-key="question" value="' + esc(q || '') + '">' +
            label(I.faqAnswer.replace('{n}', String(n)), 'req') +
            '<textarea class="form-control" rows="2" data-key="answer">' + esc(a || '') + '</textarea>' +
            '<button type="button" class="btn btn-sm btn-outline-secondary row-remove">' + esc(I.faqRemove) + '</button>' +
            '</div>';
        }

        /** 面包屑层级行（可重复）。 */
        function crumbRow(n, name, url) {
          return '<div class="row-item crumb-row">' +
            '<div class="form-group">' + label(I.breadcrumbName.replace('{n}', String(n)), 'req') +
            '<input class="input-lg" type="text" data-key="name" value="' + esc(name || '') + '"></div>' +
            '<div class="form-group">' + label(I.breadcrumbUrl.replace('{n}', String(n)), 'req') +
            '<input class="input-lg" type="text" data-key="url" value="' + esc(url || '') + '"></div>' +
            '<button type="button" class="btn btn-sm btn-outline-secondary row-remove">' + esc(I.faqRemove) + '</button>' +
            '</div>';
        }

        /** 按类型渲染表单。 */
        function renderForm(type) {
          var html = '';
          if (type === 'article') {
            html = fixedField('headline', I.articleHeadline, 'input', 'req') +
              fixedField('description', I.articleDescription, 'textarea', 'opt') +
              fixedField('author', I.articleAuthor, 'input', 'req') +
              fixedField('datePublished', I.articleDatePublished, 'input', 'opt', '2026-01-01') +
              fixedField('dateModified', I.articleDateModified, 'input', 'opt', '2026-01-01') +
              fixedField('image', I.articleImage, 'input', 'opt') +
              fixedField('url', I.articleUrl, 'input', 'opt');
          } else if (type === 'organization') {
            html = fixedField('name', I.orgName, 'input', 'req') +
              fixedField('url', I.orgUrl, 'input', 'req') +
              fixedField('logo', I.orgLogo, 'input', 'opt') +
              fixedField('description', I.orgDescription, 'textarea', 'opt');
          } else if (type === 'faq') {
            html = '<div id="faqRows">' + faqRow(1, '', '') + '</div>' +
              '<button type="button" id="faqAdd" class="btn btn-sm btn-outline-secondary">' + esc(I.faqAdd) + '</button>';
          } else if (type === 'breadcrumb') {
            html = '<div id="crumbRows">' + crumbRow(1, '', '') + crumbRow(2, '', '') + '</div>' +
              '<button type="button" id="crumbAdd" class="btn btn-sm btn-outline-secondary">' + esc(I.breadcrumbAdd) + '</button>';
          }
          fieldsEl.innerHTML = html;
        }

        /** 事件代理：FAQ/Breadcrumb 添加与删除行。 */
        fieldsEl.addEventListener('click', function (e) {
          var t = e.target;
          if (!(t && t.classList)) return;
          if (t.classList.contains('row-remove')) {
            var row = t.closest('.row-item');
            if (row && row.parentNode) {
              if (row.parentNode.querySelectorAll('.row-item').length > 1) row.parentNode.removeChild(row);
              else row.querySelectorAll('input,textarea').forEach(function (el) { el.value = ''; });
            }
          } else if (t.id === 'faqAdd') {
            var n = document.querySelectorAll('#faqRows .faq-row').length + 1;
            document.getElementById('faqRows').insertAdjacentHTML('beforeend', faqRow(n, '', ''));
          } else if (t.id === 'crumbAdd') {
            var m = document.querySelectorAll('#crumbRows .crumb-row').length + 1;
            document.getElementById('crumbRows').insertAdjacentHTML('beforeend', crumbRow(m, '', ''));
          }
        });

        /** FAQ：读取行内值，构造 mainEntity。 */
        function buildFaq() {
          var rows = Array.prototype.slice.call(document.querySelectorAll('#faqRows .faq-row'));
          var questions = [];
          var missing = [];
          rows.forEach(function (row, i) {
            var q = row.querySelector('[data-key=question]').value.trim();
            var a = row.querySelector('[data-key=answer]').value.trim();
            if (!q && !a) return;
            if (!q) missing.push(I.faqQuestion.replace('{n}', String(i + 1)));
            if (!a) missing.push(I.faqAnswer.replace('{n}', String(i + 1)));
            questions.push({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } });
          });
          if (questions.length === 0) missing.push(I.faqQuestion.replace('{n}', '1'));
          return { obj: { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: questions }, missing: missing };
        }

        /** Article：读取固定字段。 */
        function buildArticle() {
          var get = function (k) {
            var el = document.querySelector('#schemaFields [data-key="' + k + '"]');
            return el ? el.value.trim() : '';
          };
          var headline = get('headline');
          var author = get('author');
          var missing = [];
          if (!headline) missing.push(I.articleHeadline);
          if (!author) missing.push(I.articleAuthor);
          var obj = {
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: headline,
            author: { '@type': 'Person', name: author }
          };
          var desc = get('description'); if (desc) obj.description = desc;
          var dp = get('datePublished'); if (dp) obj.datePublished = dp;
          var dm = get('dateModified'); if (dm) obj.dateModified = dm;
          var img = get('image'); if (img) obj.image = img;
          var url = get('url'); if (url) obj.url = url;
          return { obj: obj, missing: missing };
        }

        /** Breadcrumb：读取层级行，position 自动编号。 */
        function buildBreadcrumb() {
          var rows = Array.prototype.slice.call(document.querySelectorAll('#crumbRows .crumb-row'));
          var items = [];
          var missing = [];
          rows.forEach(function (row, i) {
            var name = row.querySelector('[data-key=name]').value.trim();
            var url = row.querySelector('[data-key=url]').value.trim();
            if (!name && !url) return;
            if (!name) missing.push(I.breadcrumbName.replace('{n}', String(i + 1)));
            if (!url) missing.push(I.breadcrumbUrl.replace('{n}', String(i + 1)));
            items.push({ '@type': 'ListItem', position: i + 1, name: name, item: url });
          });
          if (items.length === 0) missing.push(I.breadcrumbName.replace('{n}', '1'));
          if (items.length < 2) missing.push(I.breadcrumbMin);
          return { obj: { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: items }, missing: missing };
        }

        /** Organization：读取固定字段。 */
        function buildOrganization() {
          var get = function (k) {
            var el = document.querySelector('#schemaFields [data-key="' + k + '"]');
            return el ? el.value.trim() : '';
          };
          var name = get('name');
          var url = get('url');
          var missing = [];
          if (!name) missing.push(I.orgName);
          if (!url) missing.push(I.orgUrl);
          var obj = { '@context': 'https://schema.org', '@type': 'Organization', name: name, url: url };
          var logo = get('logo'); if (logo) obj.logo = { '@type': 'ImageObject', url: logo };
          var desc = get('description'); if (desc) obj.description = desc;
          return { obj: obj, missing: missing };
        }

        /**
         * 执行生成：按类型构造对象 → JSON 序列化并回环校验 → 可选 script 包裹 → 渲染输出与缺失提示。
         */
        function runGenerate() {
          var type = typeEl.value;
          var builders = { faq: buildFaq, article: buildArticle, breadcrumb: buildBreadcrumb, organization: buildOrganization };
          var res = builders[type]();
          var text;
          try {
            text = JSON.stringify(res.obj, null, 2);
            JSON.parse(text);
          } catch (err) {
            outEl.textContent = 'JSON error: ' + err.message;
            warnEl.innerHTML = '';
            return;
          }
          if (wrapEl.checked) text = '<script type="application/ld+json">\\n' + text + '\\n<\\/script>';
          outEl.textContent = text;

          if (res.missing.length > 0) {
            var items = res.missing.map(function (f) { return '<li>' + esc(I.missingRequired.replace('{field}', f)) + '</li>'; }).join('');
            warnEl.innerHTML = '<ul class="warn-list">' + items + '</ul>';
          } else {
            warnEl.innerHTML = '';
          }
        }

        /** 加载默认样例：FAQ 两条问答，自动生成。 */
        function loadSample() {
          typeEl.value = 'faq';
          renderForm('faq');
          var rows = document.querySelectorAll('#faqRows .faq-row');
          if (rows[0]) {
            rows[0].querySelector('[data-key=question]').value = 'How do I install the SDK?';
            rows[0].querySelector('[data-key=answer]').value = 'Run npm install sdk-example in your project root.';
          }
          document.getElementById('faqAdd').click();
          rows = document.querySelectorAll('#faqRows .faq-row');
          if (rows[1]) {
            rows[1].querySelector('[data-key=question]').value = 'Is the data processed locally?';
            rows[1].querySelector('[data-key=answer]').value = 'Yes — this page keeps everything in your browser tab.';
          }
          runGenerate();
        }

        typeEl.addEventListener('change', function () { renderForm(typeEl.value); });
        document.getElementById('schemaGenerate').addEventListener('click', runGenerate);
        document.getElementById('schemaSample').addEventListener('click', loadSample);
        document.getElementById('schemaClear').addEventListener('click', function () {
          renderForm(typeEl.value);
          warnEl.innerHTML = '';
          outEl.textContent = '';
        });
        wrapEl.addEventListener('change', runGenerate);
        copyBtn.addEventListener('click', function () {
          if (!outEl.textContent) return;
          navigator.clipboard.writeText(outEl.textContent).then(function () {
            copyBtn.textContent = I.copiedLabel;
            setTimeout(function () { copyBtn.textContent = I.copyLabel; }, 1500);
          });
        });
        downloadBtn.addEventListener('click', function () {
          var text = outEl.textContent;
          if (!text) return;
          var blob = new Blob([text], { type: 'application/ld+json' });
          var url = URL.createObjectURL(blob);
          var a = document.createElement('a');
          a.href = url;
          a.download = 'schema.jsonld';
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
          URL.revokeObjectURL(url);
        });

        renderForm('faq');
        loadSample();
      })();
    </script>`;

	const toolMeta = getToolBySlug('schema-jsonld-generator');
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
