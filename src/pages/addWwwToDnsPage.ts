/**
 * 给域名添加 www DNS 记录：生成 A/CNAME 方案、可选 DoH 查询、分服务商教程。
 * slug: add-www-to-dns；见 work-tasks/add-www-to-dns/02-tool-info.md。
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

/** Provider guide 锚点与官方文档（全语种共用 URL） */
const GUIDE_META: Array<{
	id: string;
	titleKey: keyof typeof import('../site/i18n/en').default;
	whenKey: keyof typeof import('../site/i18n/en').default;
	schemeKey: keyof typeof import('../site/i18n/en').default;
	stepsKey: keyof typeof import('../site/i18n/en').default;
	notesKey: keyof typeof import('../site/i18n/en').default;
	docsHref: string;
	docsLabel: string;
}> = [
	{
		id: 'guide-generic',
		titleKey: 'tool_add_www_to_dns_guide_g1_title',
		whenKey: 'tool_add_www_to_dns_guide_g1_when',
		schemeKey: 'tool_add_www_to_dns_guide_g1_scheme',
		stepsKey: 'tool_add_www_to_dns_guide_g1_steps',
		notesKey: 'tool_add_www_to_dns_guide_g1_notes',
		docsHref: 'https://datatracker.ietf.org/doc/html/rfc1034',
		docsLabel: 'RFC 1034',
	},
	{
		id: 'guide-cloudflare',
		titleKey: 'tool_add_www_to_dns_guide_g2_title',
		whenKey: 'tool_add_www_to_dns_guide_g2_when',
		schemeKey: 'tool_add_www_to_dns_guide_g2_scheme',
		stepsKey: 'tool_add_www_to_dns_guide_g2_steps',
		notesKey: 'tool_add_www_to_dns_guide_g2_notes',
		docsHref: 'https://developers.cloudflare.com/dns/manage-dns-records/how-to/create-dns-records/',
		docsLabel: 'Cloudflare DNS docs',
	},
	{
		id: 'guide-route53',
		titleKey: 'tool_add_www_to_dns_guide_g3_title',
		whenKey: 'tool_add_www_to_dns_guide_g3_when',
		schemeKey: 'tool_add_www_to_dns_guide_g3_scheme',
		stepsKey: 'tool_add_www_to_dns_guide_g3_steps',
		notesKey: 'tool_add_www_to_dns_guide_g3_notes',
		docsHref: 'https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/resource-record-sets-creating.html',
		docsLabel: 'AWS Route 53 docs',
	},
	{
		id: 'guide-vercel',
		titleKey: 'tool_add_www_to_dns_guide_g4_title',
		whenKey: 'tool_add_www_to_dns_guide_g4_when',
		schemeKey: 'tool_add_www_to_dns_guide_g4_scheme',
		stepsKey: 'tool_add_www_to_dns_guide_g4_steps',
		notesKey: 'tool_add_www_to_dns_guide_g4_notes',
		docsHref: 'https://vercel.com/docs/projects/domains/add-a-domain',
		docsLabel: 'Vercel Domains docs',
	},
	{
		id: 'guide-netlify',
		titleKey: 'tool_add_www_to_dns_guide_g5_title',
		whenKey: 'tool_add_www_to_dns_guide_g5_when',
		schemeKey: 'tool_add_www_to_dns_guide_g5_scheme',
		stepsKey: 'tool_add_www_to_dns_guide_g5_steps',
		notesKey: 'tool_add_www_to_dns_guide_g5_notes',
		docsHref: 'https://docs.netlify.com/domains-https/custom-domains/',
		docsLabel: 'Netlify Domains docs',
	},
	{
		id: 'guide-aliyun',
		titleKey: 'tool_add_www_to_dns_guide_g6_title',
		whenKey: 'tool_add_www_to_dns_guide_g6_when',
		schemeKey: 'tool_add_www_to_dns_guide_g6_scheme',
		stepsKey: 'tool_add_www_to_dns_guide_g6_steps',
		notesKey: 'tool_add_www_to_dns_guide_g6_notes',
		docsHref: 'https://help.aliyun.com/document_detail/29725.html',
		docsLabel: 'Alibaba Cloud DNS docs',
	},
	{
		id: 'guide-vps',
		titleKey: 'tool_add_www_to_dns_guide_g7_title',
		whenKey: 'tool_add_www_to_dns_guide_g7_when',
		schemeKey: 'tool_add_www_to_dns_guide_g7_scheme',
		stepsKey: 'tool_add_www_to_dns_guide_g7_steps',
		notesKey: 'tool_add_www_to_dns_guide_g7_notes',
		docsHref: 'https://developers.google.com/search/docs/crawling-indexing/canonicalization',
		docsLabel: 'Google — URL canonicalization',
	},
];

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
 * 将步骤文案（用 | 分隔）渲染为有序列表。
 * @param stepsRaw i18n 步骤串
 */
const renderStepsOl = (stepsRaw: string) => {
	const steps = stepsRaw
		.split('|')
		.map((s) => s.trim())
		.filter(Boolean);
	if (!steps.length) return '';
	return `<ol class="mb-2">${steps.map((s) => `<li class="text-muted">${escapeHtml(s)}</li>`).join('')}</ol>`;
};

/**
 * 渲染同页 Provider guides（可见 HTML，可索引）。
 * @param lang 语言
 */
const renderProviderGuides = (lang: SiteLang) => {
	const items = GUIDE_META.map((g, idx) => {
		const open = idx === 0 ? ' open' : '';
		return `
      <details class="border rounded mb-2 p-2"${open} id="${escapeHtml(g.id)}">
        <summary class="fw-semibold">${escapeHtml(t(lang, g.titleKey))}</summary>
        <div class="mt-2 small">
          <p class="mb-1"><strong>${escapeHtml(t(lang, 'tool_add_www_to_dns_guide_when_label'))}</strong> ${escapeHtml(t(lang, g.whenKey))}</p>
          <p class="mb-2"><strong>${escapeHtml(t(lang, 'tool_add_www_to_dns_guide_scheme_label'))}</strong> ${escapeHtml(t(lang, g.schemeKey))}</p>
          <p class="mb-1 fw-semibold">${escapeHtml(t(lang, 'tool_add_www_to_dns_guide_steps_label'))}</p>
          ${renderStepsOl(t(lang, g.stepsKey))}
          <p class="mb-2"><strong>${escapeHtml(t(lang, 'tool_add_www_to_dns_guide_notes_label'))}</strong> ${escapeHtml(t(lang, g.notesKey))}</p>
          <p class="mb-0"><a href="${escapeHtml(g.docsHref)}" rel="noopener noreferrer" target="_blank">${escapeHtml(g.docsLabel)}</a></p>
        </div>
      </details>`;
	}).join('\n');

	return `
    <section class="mt-4" id="guides" aria-labelledby="guides-heading">
      <h2 class="h5" id="guides-heading">${escapeHtml(t(lang, 'tool_add_www_to_dns_guides_title'))}</h2>
      <p class="text-muted small">${escapeHtml(t(lang, 'tool_add_www_to_dns_guides_intro'))}</p>
      ${items}
      <p class="small text-muted mt-2 mb-0">${escapeHtml(t(lang, 'tool_add_www_to_dns_disclaimer'))}</p>
    </section>`;
};

/**
 * 渲染 Add WWW to DNS 工具页。
 * @param opts.lang 当前语言
 * @param opts.defaultLang 站点默认语言
 * @param opts.enabledLangs 启用语言列表
 */
export const renderAddWwwToDnsPage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	const toolPath = '/tools/add-www-to-dns';
	const canonicalPath = withLangPrefix(opts.lang, toolPath, opts.defaultLang);
	const title = `${t(opts.lang, 'tool_add_www_to_dns_title')} | ${t(opts.lang, 'brand')}`;
	const description = t(opts.lang, 'tool_add_www_to_dns_description');

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
		groups: buildToolSidebarItems({ lang: opts.lang, defaultLang: opts.defaultLang, currentSlug: 'add-www-to-dns', currentAnchor: '#converter' }),
		id: 'toolNav',
	});

	const footerHtml = renderFooter({ lang: opts.lang });

	const extraHeadHtml = `
  <style>
    .tools-bar { gap: .5rem; }
    #recordTable { font-size: .9rem; }
    #recordTable td, #recordTable th { vertical-align: middle; }
    #plainOut, #lookupOut {
      font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace; font-size: .85rem;
      white-space: pre-wrap; word-break: break-word; min-height: 4rem;
      background: #fff; border: 1px solid #dee2e6; border-radius: .5rem; padding: .75rem 1rem;
    }
    #cdnTargetWrap[hidden] { display: none !important; }
    .guide-chips { gap: .35rem; flex-wrap: wrap; }
  </style>`;

	const guideChips = GUIDE_META.map(
		(g) =>
			`<a class="btn btn-outline-secondary btn-sm" href="#${escapeHtml(g.id)}">${escapeHtml(
				t(opts.lang, g.titleKey)
			)}</a>`
	).join('\n');

	const contentHtml = `
    <div id="converter" class="mb-3">
      <h1 class="h4 mb-1">${escapeHtml(t(opts.lang, 'tool_add_www_to_dns_title'))}</h1>
      <p class="text-muted mb-0">${escapeHtml(description)}</p>
    </div>

    <div class="row g-3 mb-3">
      <div class="col-12 col-md-6">
        <label class="form-label" for="domainInput">${escapeHtml(t(opts.lang, 'tool_add_www_to_dns_domain_label'))}</label>
        <input id="domainInput" class="form-control" type="text" autocomplete="off" spellcheck="false"
          placeholder="${escapeHtml(t(opts.lang, 'tool_add_www_to_dns_domain_placeholder'))}" />
      </div>
      <div class="col-6 col-md-3">
        <label class="form-label" for="ipv4Input">${escapeHtml(t(opts.lang, 'tool_add_www_to_dns_ipv4_label'))}</label>
        <input id="ipv4Input" class="form-control" type="text" autocomplete="off" spellcheck="false"
          placeholder="203.0.113.10" />
      </div>
      <div class="col-6 col-md-3">
        <label class="form-label" for="ipv6Input">${escapeHtml(t(opts.lang, 'tool_add_www_to_dns_ipv6_label'))}</label>
        <input id="ipv6Input" class="form-control" type="text" autocomplete="off" spellcheck="false"
          placeholder="2001:db8::1" />
      </div>
    </div>

    <div class="mb-3">
      <div class="form-label">${escapeHtml(t(opts.lang, 'tool_add_www_to_dns_scheme_label'))}</div>
      <div class="btn-group flex-wrap" role="group" aria-label="${escapeHtml(t(opts.lang, 'tool_add_www_to_dns_scheme_label'))}">
        <input type="radio" class="btn-check" name="dnsScheme" id="scheme1" value="1" checked>
        <label class="btn btn-outline-primary btn-sm" for="scheme1">${escapeHtml(t(opts.lang, 'tool_add_www_to_dns_scheme_1'))}</label>
        <input type="radio" class="btn-check" name="dnsScheme" id="scheme2" value="2">
        <label class="btn btn-outline-primary btn-sm" for="scheme2">${escapeHtml(t(opts.lang, 'tool_add_www_to_dns_scheme_2'))}</label>
        <input type="radio" class="btn-check" name="dnsScheme" id="scheme3" value="3">
        <label class="btn btn-outline-primary btn-sm" for="scheme3">${escapeHtml(t(opts.lang, 'tool_add_www_to_dns_scheme_3'))}</label>
      </div>
    </div>

    <div class="row g-3 mb-3">
      <div class="col-12 col-md-8" id="cdnTargetWrap" hidden>
        <label class="form-label" for="cdnTarget">${escapeHtml(t(opts.lang, 'tool_add_www_to_dns_cdn_label'))}</label>
        <input id="cdnTarget" class="form-control" type="text" autocomplete="off" spellcheck="false"
          placeholder="cname.vercel-dns.com" />
      </div>
      <div class="col-12 col-md-4">
        <label class="form-label" for="ttlInput">${escapeHtml(t(opts.lang, 'tool_add_www_to_dns_ttl_label'))}</label>
        <input id="ttlInput" class="form-control" type="number" min="60" max="86400" value="3600" />
      </div>
    </div>

    <div class="d-flex tools-bar mb-3 flex-wrap">
      <button type="button" id="btnGenerate" class="btn btn-primary btn-sm">${escapeHtml(t(opts.lang, 'tool_add_www_to_dns_generate'))}</button>
      <button type="button" id="btnCopy" class="btn btn-outline-primary btn-sm">${escapeHtml(t(opts.lang, 'tool_add_www_to_dns_copy'))}</button>
      <button type="button" id="btnLookup" class="btn btn-outline-secondary btn-sm">${escapeHtml(t(opts.lang, 'tool_add_www_to_dns_lookup'))}</button>
      <button type="button" id="btnSample" class="btn btn-outline-secondary btn-sm">${escapeHtml(t(opts.lang, 'tool_add_www_to_dns_sample'))}</button>
      <button type="button" id="btnClear" class="btn btn-outline-secondary btn-sm">${escapeHtml(t(opts.lang, 'tool_add_www_to_dns_clear'))}</button>
    </div>

    <div class="d-flex guide-chips mb-3">${guideChips}</div>

    <div id="formError" class="alert alert-danger py-2 small mb-2" style="display:none" role="alert"></div>
    <div id="formWarn" class="alert alert-warning py-2 small mb-2" style="display:none" role="status"></div>

    <div class="table-responsive mb-3">
      <table class="table table-sm table-bordered" id="recordTable">
        <thead>
          <tr>
            <th>${escapeHtml(t(opts.lang, 'tool_add_www_to_dns_col_type'))}</th>
            <th>${escapeHtml(t(opts.lang, 'tool_add_www_to_dns_col_name'))}</th>
            <th>${escapeHtml(t(opts.lang, 'tool_add_www_to_dns_col_value'))}</th>
            <th>${escapeHtml(t(opts.lang, 'tool_add_www_to_dns_col_ttl'))}</th>
            <th>${escapeHtml(t(opts.lang, 'tool_add_www_to_dns_col_notes'))}</th>
          </tr>
        </thead>
        <tbody id="recordBody"></tbody>
      </table>
    </div>

    <label class="form-label" for="plainOut">${escapeHtml(t(opts.lang, 'tool_add_www_to_dns_plain_label'))}</label>
    <pre id="plainOut" class="mb-3" tabindex="0"></pre>

    <label class="form-label" for="lookupOut">${escapeHtml(t(opts.lang, 'tool_add_www_to_dns_lookup_label'))}</label>
    <pre id="lookupOut" class="mb-4" tabindex="0"></pre>`;

	const igHtml = renderToolIgSections({
		lang: opts.lang,
		prefix: 'tool_add_www_to_dns',
		mode: 'rules',
		usecaseCount: 3,
		ruleItemCount: 4,
	});

	const guidesHtml = renderProviderGuides(opts.lang);

	const referencesHtml = renderToolReferencesSection({
		lang: opts.lang,
		links: [
			{ label: 'RFC 1034', href: 'https://datatracker.ietf.org/doc/html/rfc1034' },
			{
				label: 'Cloudflare DNS-over-HTTPS',
				href: 'https://developers.cloudflare.com/1.1.1.1/encryption/dns-over-https/make-api-requests/',
			},
			{
				label: 'Google — URL canonicalization',
				href: 'https://developers.google.com/search/docs/crawling-indexing/canonicalization',
			},
		],
	});

	const extraBodyHtml = `
  <script>
    (function () {
      var domainInput = document.getElementById('domainInput');
      var ipv4Input = document.getElementById('ipv4Input');
      var ipv6Input = document.getElementById('ipv6Input');
      var cdnTarget = document.getElementById('cdnTarget');
      var cdnTargetWrap = document.getElementById('cdnTargetWrap');
      var ttlInput = document.getElementById('ttlInput');
      var recordBody = document.getElementById('recordBody');
      var plainOut = document.getElementById('plainOut');
      var lookupOut = document.getElementById('lookupOut');
      var formError = document.getElementById('formError');
      var formWarn = document.getElementById('formWarn');

      var msgEmpty = ${JSON.stringify(t(opts.lang, 'tool_add_www_to_dns_empty'))};
      var msgInvalid = ${JSON.stringify(t(opts.lang, 'tool_add_www_to_dns_invalid_domain'))};
      var msgNeedIp = ${JSON.stringify(t(opts.lang, 'tool_add_www_to_dns_need_ip'))};
      var msgApexAlias = ${JSON.stringify(t(opts.lang, 'tool_add_www_to_dns_apex_alias_note'))};
      var msgWarn301 = ${JSON.stringify(t(opts.lang, 'tool_add_www_to_dns_warn_301'))};
      var msgLookupFail = ${JSON.stringify(t(opts.lang, 'tool_add_www_to_dns_lookup_fail'))};
      var msgLookupCnameApex = ${JSON.stringify(t(opts.lang, 'tool_add_www_to_dns_lookup_cname_apex'))};
      var labelCopy = ${JSON.stringify(t(opts.lang, 'tool_add_www_to_dns_copy'))};
      var labelCopied = ${JSON.stringify(t(opts.lang, 'tool_add_www_to_dns_copy_done'))};
      var noteWwwCname = ${JSON.stringify(t(opts.lang, 'tool_add_www_to_dns_note_www_cname'))};
      var noteApexA = ${JSON.stringify(t(opts.lang, 'tool_add_www_to_dns_note_apex_a'))};
      var noteDual = ${JSON.stringify(t(opts.lang, 'tool_add_www_to_dns_note_dual'))};
      var noteCdnWww = ${JSON.stringify(t(opts.lang, 'tool_add_www_to_dns_note_cdn_www'))};
      var lastPlain = '';

      /**
       * 当前方案编号：1 | 2 | 3
       * @returns {string}
       */
      function getScheme() {
        var el = document.querySelector('input[name="dnsScheme"]:checked');
        return el ? el.value : '1';
      }

      /** 读取 TTL */
      function getTtl() {
        var n = parseInt(ttlInput && ttlInput.value, 10);
        if (!Number.isFinite(n) || n < 60) return 3600;
        if (n > 86400) return 86400;
        return n;
      }

      /**
       * 规范化域名：去协议、路径、www. 前缀、尾点；小写。
       * @param {string} raw
       * @returns {string|null}
       */
      function normalizeDomain(raw) {
        var s = (raw || '').trim().toLowerCase();
        if (!s) return null;
        s = s.replace(/^https?:\\/\\//, '').replace(/\\/.*$/, '').replace(/:\\d+$/, '');
        if (s.startsWith('www.')) s = s.slice(4);
        if (s.endsWith('.')) s = s.slice(0, -1);
        if (!s || s.indexOf(' ') >= 0 || s.indexOf('/') >= 0) return null;
        if (!/^[a-z0-9]([a-z0-9-]*[a-z0-9])?(\\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)+$/.test(s)) return null;
        return s;
      }

      /** 切换方案 3 时显示 CDN 目标 */
      function applySchemeUi() {
        cdnTargetWrap.hidden = getScheme() !== '3';
      }

      /**
       * 展示错误。
       * @param {string} msg
       */
      function showError(msg) {
        formError.textContent = msg || '';
        formError.style.display = msg ? '' : 'none';
      }

      /**
       * 展示警告。
       * @param {string} msg
       */
      function showWarn(msg) {
        formWarn.textContent = msg || '';
        formWarn.style.display = msg ? '' : 'none';
      }

      /**
       * 渲染记录表与纯文本。
       * @param {Array<{type:string,name:string,value:string,ttl:number,notes:string}>} rows
       */
      function renderRows(rows) {
        recordBody.innerHTML = '';
        var lines = [];
        rows.forEach(function (r) {
          var tr = document.createElement('tr');
          [r.type, r.name, r.value, String(r.ttl), r.notes].forEach(function (cell) {
            var td = document.createElement('td');
            td.textContent = cell;
            tr.appendChild(td);
          });
          recordBody.appendChild(tr);
          lines.push(r.type + '\\t' + r.name + '\\t' + r.value + '\\t' + r.ttl);
        });
        lastPlain = lines.join('\\n');
        plainOut.textContent = lastPlain;
      }

      /** 根据表单生成 DNS 记录行 */
      function generate() {
        showError('');
        var domain = normalizeDomain(domainInput.value);
        if (!domain) {
          showError(domainInput.value.trim() ? msgInvalid : msgEmpty);
          renderRows([]);
          return;
        }
        var scheme = getScheme();
        var ttl = getTtl();
        var ipv4 = (ipv4Input.value || '').trim();
        var ipv6 = (ipv6Input.value || '').trim();
        var rows = [];
        var warnings = [msgWarn301];

        if (scheme === '1') {
          if (ipv4) rows.push({ type: 'A', name: '@', value: ipv4, ttl: ttl, notes: noteApexA });
          if (ipv6) rows.push({ type: 'AAAA', name: '@', value: ipv6, ttl: ttl, notes: noteApexA });
          if (!ipv4 && !ipv6) warnings.unshift(msgNeedIp);
          rows.push({ type: 'CNAME', name: 'www', value: domain, ttl: ttl, notes: noteWwwCname });
        } else if (scheme === '2') {
          if (!ipv4 && !ipv6) {
            showError(msgNeedIp);
            renderRows([]);
            return;
          }
          if (ipv4) {
            rows.push({ type: 'A', name: '@', value: ipv4, ttl: ttl, notes: noteDual });
            rows.push({ type: 'A', name: 'www', value: ipv4, ttl: ttl, notes: noteDual });
          }
          if (ipv6) {
            rows.push({ type: 'AAAA', name: '@', value: ipv6, ttl: ttl, notes: noteDual });
            rows.push({ type: 'AAAA', name: 'www', value: ipv6, ttl: ttl, notes: noteDual });
          }
        } else {
          var target = (cdnTarget.value || '').trim().replace(/\\.$/, '');
          if (!target) {
            showError(msgEmpty);
            renderRows([]);
            return;
          }
          rows.push({ type: 'CNAME', name: 'www', value: target, ttl: ttl, notes: noteCdnWww });
          rows.push({
            type: 'ALIAS/A',
            name: '@',
            value: ipv4 || msgApexAlias,
            ttl: ttl,
            notes: msgApexAlias
          });
          if (ipv6) {
            rows.push({ type: 'AAAA', name: '@', value: ipv6, ttl: ttl, notes: noteApexA });
          }
        }

        showWarn(warnings.filter(Boolean).join(' '));
        renderRows(rows);
      }

      /** 复制纯文本记录 */
      async function copyOut() {
        generate();
        if (!lastPlain) return;
        await navigator.clipboard.writeText(lastPlain);
        var btn = document.getElementById('btnCopy');
        btn.textContent = labelCopied;
        setTimeout(function () { btn.textContent = labelCopy; }, 1200);
      }

      /**
       * 查询单个类型。
       * @param {string} name
       * @param {string} type
       */
      async function lookupType(name, type) {
        var res = await fetch('/api/tools/dns-lookup?name=' + encodeURIComponent(name) + '&type=' + type, {
          headers: { Accept: 'application/json' }
        });
        var data = await res.json();
        if (!res.ok) throw new Error(data && data.error ? data.error : msgLookupFail);
        return data;
      }

      /** DoH 查询 apex 与 www */
      async function lookup() {
        showError('');
        var domain = normalizeDomain(domainInput.value);
        if (!domain) {
          showError(domainInput.value.trim() ? msgInvalid : msgEmpty);
          return;
        }
        lookupOut.textContent = '...';
        try {
          var types = ['A', 'AAAA', 'CNAME'];
          var lines = [];
          var apexCname = false;
          for (var i = 0; i < types.length; i++) {
            var apex = await lookupType(domain, types[i]);
            var www = await lookupType('www.' + domain, types[i]);
            function fmt(label, payload) {
              var ans = (payload.Answer || []).map(function (a) {
                return a.data;
              }).join(', ') || '(none)';
              return label + ' ' + types[i] + ': ' + ans;
            }
            lines.push(fmt(domain, apex));
            lines.push(fmt('www.' + domain, www));
            if (types[i] === 'CNAME' && apex.Answer && apex.Answer.length) apexCname = true;
          }
          if (apexCname) lines.push(msgLookupCnameApex);
          lookupOut.textContent = lines.join('\\n');
        } catch (e) {
          lookupOut.textContent = '';
          showError((e && e.message) ? e.message : msgLookupFail);
        }
      }

      document.getElementById('btnGenerate').addEventListener('click', generate);
      document.getElementById('btnCopy').addEventListener('click', copyOut);
      document.getElementById('btnLookup').addEventListener('click', lookup);
      document.getElementById('btnSample').addEventListener('click', function () {
        domainInput.value = 'example.com';
        ipv4Input.value = '203.0.113.10';
        ipv6Input.value = '';
        document.getElementById('scheme1').checked = true;
        applySchemeUi();
        generate();
      });
      document.getElementById('btnClear').addEventListener('click', function () {
        domainInput.value = '';
        ipv4Input.value = '';
        ipv6Input.value = '';
        cdnTarget.value = '';
        renderRows([]);
        lookupOut.textContent = '';
        showError('');
        showWarn('');
      });
      document.querySelectorAll('input[name="dnsScheme"]').forEach(function (el) {
        el.addEventListener('change', function () {
          applySchemeUi();
          if (domainInput.value.trim()) generate();
        });
      });

      applySchemeUi();
      domainInput.value = 'example.com';
      ipv4Input.value = '203.0.113.10';
      generate();
    })();
  </script>`;

	const toolMeta = getToolBySlug('add-www-to-dns');
	const toolSeoHtml = toolMeta
		? renderToolExtraSections({ lang: opts.lang, defaultLang: opts.defaultLang, tool: toolMeta })
		: '';
	const toolJsonLd = toolMeta
		? buildToolJsonLd({
				lang: opts.lang,
				defaultLang: opts.defaultLang,
				tool: toolMeta,
				name: t(opts.lang, toolMeta.i18nKey as any),
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
		contentHtml: `${contentHtml}${igHtml}${guidesHtml}${toolSeoHtml}${referencesHtml}`,
		footerHtml,
		extraHeadHtml: `${extraHeadHtml}${toolJsonLd}`,
		extraBodyHtml,
		includeSidebarToggleScript: true,
		sidebarAutoCloseSelector: '#toolNav a',
	});
};
