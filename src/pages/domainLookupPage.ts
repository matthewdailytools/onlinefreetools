/**
 * 域名查询工具页：并行查 DNS（DoH）与 RDAP 注册信息，分区展示。
 * slug: domain-lookup；主方向 A.10（见 work-tasks/domain-lookup/02-tool-info.md）。
 */
import type { SiteLang } from '../site/i18n/types';
import { t, supportedLangs } from '../site/i18n';
import { renderHeader } from './site/header';
import { buildToolPageNavItems } from './site/nav';
import { renderSidebar, buildToolSidebarItems } from './site/sidebar';
import { getToolBySlug } from '../site/tools';
import {
	renderToolExtraSections,
	buildToolJsonLd,
	renderToolIgSections,
	renderToolReferencesSection,
} from './site/toolContent';
import { renderFooter } from './site/footer';
import { renderLayout, type HreflangAlternate, escapeHtml } from './site/layout';

/**
 * 渲染 Domain Lookup 工具页。
 *
 * @param lang - 当前语言
 * @param defaultLang - 站点默认语言
 * @returns 完整 HTML 文档字符串
 */
export const renderDomainLookupPage = (lang: SiteLang, defaultLang: SiteLang) => {
	/**
	 * 为路径加上语言前缀（默认语无前缀）。
	 *
	 * @param code - 语言码
	 * @param pathname - 站点内路径
	 * @returns 带前缀路径
	 */
	const withLangPrefix = (code: SiteLang, pathname: string) => {
		const safe = pathname.startsWith('/') ? pathname : `/${pathname}`;
		return code === defaultLang ? safe : `/${code}${safe}`;
	};

	/** 工具规范路径（无语言前缀） */
	const toolPath = '/tools/domain-lookup';
	/** 当前语种 canonical 路径 */
	const canonicalPath = withLangPrefix(lang, toolPath);
	/** 页面 title（含品牌） */
	const title = `${t(lang, 'tool_domain_lookup_title')} | ${t(lang, 'brand')}`;
	/** meta / 摘要 description */
	const description = t(lang, 'tool_domain_lookup_description');

	/** 顶栏导航项 */
	const navItems = buildToolPageNavItems(lang, defaultLang);

	/**
	 * 语言切换链接始终带显式语言前缀。
	 *
	 * @param code - 语言码
	 * @param pathname - 路径
	 * @returns 显式前缀路径
	 */
	const withExplicitLangPrefix = (code: SiteLang, pathname: string) => {
		const safe = pathname.startsWith('/') ? pathname : `/${pathname}`;
		return `/${code}${safe}`.replace(/\/{2,}/g, '/');
	};

	/** 语言切换器用的各语路径表 */
	const langAlternates: Record<string, string> = Object.fromEntries(
		(supportedLangs || []).map((code) => [code, withExplicitLangPrefix(code, toolPath)]),
	);

	/** hreflang 交替链接 */
	const alternates: HreflangAlternate[] = (supportedLangs || []).map((code) => ({
		lang: code,
		href: `https://onlinefreetools.org${withLangPrefix(code, toolPath)}`,
	}));

	/** 顶栏 HTML */
	const headerHtml = renderHeader({
		lang,
		brandHref: withLangPrefix(lang, '/'),
		navItems,
		enabledLangs: supportedLangs,
		langAlternates,
	});

	/** 侧栏 HTML */
	const sidebarHtml = renderSidebar({
		title: t(lang, 'nav_tools'),
		items: buildToolSidebarItems({
			lang: lang,
			defaultLang: defaultLang,
			currentSlug: 'domain-lookup',
			currentAnchor: '#domain-lookup',
		}),
		id: 'toolNav',
	});

	/** 页脚 HTML */
	const footerHtml = renderFooter({ lang });

	/** 主内容：H1、表单、结果区、How/Rules/Example/Use cases */
	const contentHtml = `
    <div id="domain-lookup" class="mb-3">
      <h1 class="h4 mb-1">${escapeHtml(t(lang, 'tool_domain_lookup_title'))}</h1>
      <p class="text-muted mb-0">${escapeHtml(description)}</p>
    </div>

    <form id="form" class="row g-2 align-items-end mb-3">
      <div class="col-12 col-md-7">
        <label for="domain" class="form-label">${escapeHtml(t(lang, 'tool_domain_lookup_domain_label'))}</label>
        <input id="domain" name="domain" class="input-lg" placeholder="${escapeHtml(t(lang, 'tool_domain_lookup_domain_placeholder'))}" required autocomplete="off" />
      </div>
      <div class="col-6 col-md-2">
        <div class="form-check mt-4">
          <input class="form-check-input" type="checkbox" id="wantDns" checked />
          <label class="form-check-label" for="wantDns">${escapeHtml(t(lang, 'tool_domain_lookup_opt_dns'))}</label>
        </div>
      </div>
      <div class="col-6 col-md-3">
        <div class="form-check mt-4">
          <input class="form-check-input" type="checkbox" id="wantRdap" checked />
          <label class="form-check-label" for="wantRdap">${escapeHtml(t(lang, 'tool_domain_lookup_opt_rdap'))}</label>
        </div>
      </div>
      <div class="col-12 col-md-4">
        <button class="btn btn-primary w-100" type="submit" id="btnLookup">${escapeHtml(t(lang, 'tool_domain_lookup_lookup'))}</button>
      </div>
      <div class="col-6 col-md-4">
        <button class="btn btn-outline-secondary w-100" type="button" id="btnSample">${escapeHtml(t(lang, 'tool_domain_lookup_sample'))}</button>
      </div>
      <div class="col-6 col-md-4">
        <button class="btn btn-outline-secondary w-100" type="button" id="btnClear">${escapeHtml(t(lang, 'tool_domain_lookup_clear'))}</button>
      </div>
    </form>

    <p id="formError" class="text-danger small mb-2" hidden></p>

    <div class="card mb-3">
      <div class="card-header d-flex justify-content-between align-items-center">
        <span>${escapeHtml(t(lang, 'tool_domain_lookup_dns_heading'))}</span>
        <button type="button" class="btn btn-sm btn-outline-secondary" id="btnCopy">${escapeHtml(t(lang, 'tool_domain_lookup_copy'))}</button>
      </div>
      <div class="card-body">
        <p id="dnsStatus" class="text-muted small mb-2">-</p>
        <div class="table-responsive">
          <table class="table table-sm mb-0">
            <thead>
              <tr>
                <th>${escapeHtml(t(lang, 'tool_domain_lookup_col_type'))}</th>
                <th>${escapeHtml(t(lang, 'tool_domain_lookup_col_name'))}</th>
                <th>${escapeHtml(t(lang, 'tool_domain_lookup_col_ttl'))}</th>
                <th>${escapeHtml(t(lang, 'tool_domain_lookup_col_data'))}</th>
              </tr>
            </thead>
            <tbody id="dnsBody">
              <tr><td colspan="4" class="text-muted">-</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <div class="card mb-3">
      <div class="card-header">${escapeHtml(t(lang, 'tool_domain_lookup_rdap_heading'))}</div>
      <div class="card-body">
        <p id="rdapStatus" class="text-muted small mb-2">-</p>
        <dl class="row mb-0 small" id="rdapDl">
          <dt class="col-sm-3">${escapeHtml(t(lang, 'tool_domain_lookup_registrar'))}</dt>
          <dd class="col-sm-9" id="rdapRegistrar">-</dd>
          <dt class="col-sm-3">${escapeHtml(t(lang, 'tool_domain_lookup_status'))}</dt>
          <dd class="col-sm-9" id="rdapStatuses">-</dd>
          <dt class="col-sm-3">${escapeHtml(t(lang, 'tool_domain_lookup_events'))}</dt>
          <dd class="col-sm-9" id="rdapEvents">-</dd>
          <dt class="col-sm-3">${escapeHtml(t(lang, 'tool_domain_lookup_rdap_ns'))}</dt>
          <dd class="col-sm-9" id="rdapNs">-</dd>
          <dt class="col-sm-3">${escapeHtml(t(lang, 'tool_domain_lookup_rdap_link'))}</dt>
          <dd class="col-sm-9" id="rdapLink">-</dd>
        </dl>
      </div>
    </div>

    <p id="nsCompare" class="small text-muted mb-3" hidden></p>

    ${renderToolIgSections({ lang, prefix: 'tool_domain_lookup', mode: 'rules', ruleItemCount: 5 })}`;

	/** References 区块 */
	const referencesHtml = renderToolReferencesSection({
		lang,
		links: [
			{
				label: t(lang, 'tool_domain_lookup_ref_doh_label'),
				href: 'https://developers.cloudflare.com/1.1.1.1/encryption/dns-over-https/make-api-requests/',
			},
			{
				label: t(lang, 'tool_domain_lookup_ref_icann_label'),
				href: 'https://lookup.icann.org/en',
			},
			{
				label: t(lang, 'tool_domain_lookup_ref_rfc8484_label'),
				href: 'https://datatracker.ietf.org/doc/html/rfc8484',
			},
			{
				label: t(lang, 'tool_domain_lookup_ref_rfc1035_label'),
				href: 'https://datatracker.ietf.org/doc/html/rfc1035',
			},
		],
	});

	/** 客户端脚本：查询、样例、清空、复制 */
	const extraBodyHtml = `
  <script>
    (function () {
      /** 表单元素 */
      var form = document.getElementById('form');
      /** 域名输入框 */
      var domainInput = document.getElementById('domain');
      /** 是否查 DNS */
      var wantDnsEl = document.getElementById('wantDns');
      /** 是否查 RDAP */
      var wantRdapEl = document.getElementById('wantRdap');
      /** 表单级错误 */
      var formError = document.getElementById('formError');
      /** DNS 状态行 */
      var dnsStatus = document.getElementById('dnsStatus');
      /** DNS 表体 */
      var dnsBody = document.getElementById('dnsBody');
      /** RDAP 状态行 */
      var rdapStatus = document.getElementById('rdapStatus');
      /** 注册商 */
      var rdapRegistrar = document.getElementById('rdapRegistrar');
      /** 状态 */
      var rdapStatuses = document.getElementById('rdapStatuses');
      /** 事件 */
      var rdapEvents = document.getElementById('rdapEvents');
      /** RDAP NS */
      var rdapNs = document.getElementById('rdapNs');
      /** RDAP 链接容器 */
      var rdapLink = document.getElementById('rdapLink');
      /** NS 对照提示 */
      var nsCompare = document.getElementById('nsCompare');
      /** 最近一次可复制摘要 */
      var lastPlain = '';

      /** i18n：错误前缀 */
      var errPrefix = ${JSON.stringify(t(lang, 'error_prefix'))};
      /** i18n：加载中 */
      var msgLoading = ${JSON.stringify(t(lang, 'tool_domain_lookup_loading'))};
      /** i18n：空域名 */
      var msgEmpty = ${JSON.stringify(t(lang, 'tool_domain_lookup_err_empty'))};
      /** i18n：需至少选一类 */
      var msgNeedOne = ${JSON.stringify(t(lang, 'tool_domain_lookup_err_need_one'))};
      /** i18n：无 DNS 记录 */
      var msgNoDns = ${JSON.stringify(t(lang, 'tool_domain_lookup_dns_empty'))};
      /** i18n：DNS 失败 */
      var msgDnsFail = ${JSON.stringify(t(lang, 'tool_domain_lookup_dns_fail'))};
      /** i18n：RDAP 失败 */
      var msgRdapFail = ${JSON.stringify(t(lang, 'tool_domain_lookup_rdap_fail'))};
      /** i18n：RDAP 成功提示 */
      var msgRdapOk = ${JSON.stringify(t(lang, 'tool_domain_lookup_rdap_ok'))};
      /** i18n：NS 不一致 */
      var msgNsMismatch = ${JSON.stringify(t(lang, 'tool_domain_lookup_ns_mismatch'))};
      /** i18n：已复制 */
      var msgCopied = ${JSON.stringify(t(lang, 'tool_domain_lookup_copied'))};
      /** i18n：复制按钮默认文案 */
      var labelCopy = ${JSON.stringify(t(lang, 'tool_domain_lookup_copy'))};
      /** 样例域名 */
      var sampleDomain = 'example.com';

      /**
       * 显示或隐藏表单错误。
       * @param {string} msg
       */
      function showError(msg) {
        if (!msg) {
          formError.hidden = true;
          formError.textContent = '';
          return;
        }
        formError.hidden = false;
        formError.textContent = msg;
      }

      /**
       * 转义 HTML 文本。
       * @param {string} s
       * @returns {string}
       */
      function esc(s) {
        return String(s)
          .replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')
          .replace(/"/g, '&quot;');
      }

      /**
       * 清空结果区到占位态。
       */
      function resetResults() {
        dnsStatus.textContent = '-';
        dnsBody.innerHTML = '<tr><td colspan="4" class="text-muted">-</td></tr>';
        rdapStatus.textContent = '-';
        rdapRegistrar.textContent = '-';
        rdapStatuses.textContent = '-';
        rdapEvents.textContent = '-';
        rdapNs.textContent = '-';
        rdapLink.textContent = '-';
        nsCompare.hidden = true;
        nsCompare.textContent = '';
        lastPlain = '';
      }

      /**
       * 渲染 DNS 表格与状态。
       * @param {*} dns
       */
      function renderDns(dns) {
        if (!dns || dns.error === 'skipped') {
          dnsStatus.textContent = '-';
          dnsBody.innerHTML = '<tr><td colspan="4" class="text-muted">-</td></tr>';
          return;
        }
        if (!dns.ok) {
          dnsStatus.textContent = msgDnsFail + (dns.error ? ' ' + dns.error : '');
          dnsBody.innerHTML = '<tr><td colspan="4" class="text-muted">-</td></tr>';
          return;
        }
        var records = dns.records || [];
        if (!records.length) {
          dnsStatus.textContent = msgNoDns + (dns.error ? ' (' + dns.error + ')' : '');
          dnsBody.innerHTML = '<tr><td colspan="4" class="text-muted">' + esc(msgNoDns) + '</td></tr>';
          return;
        }
        dnsStatus.textContent = records.length + (dns.error ? ' — ' + dns.error : '');
        dnsBody.innerHTML = records.map(function (r) {
          return '<tr><td>' + esc(r.typeName || '') + '</td><td>' + esc(r.name || '') +
            '</td><td>' + esc(String(r.TTL != null ? r.TTL : '')) + '</td><td>' + esc(r.data || '') + '</td></tr>';
        }).join('');
      }

      /**
       * 渲染 RDAP 分区。
       * @param {*} rdap
       */
      function renderRdap(rdap) {
        if (!rdap || rdap.error === 'skipped') {
          rdapStatus.textContent = '-';
          return;
        }
        if (!rdap.ok || !rdap.summary) {
          rdapStatus.textContent = msgRdapFail + (rdap.error ? ' ' + rdap.error : '');
          rdapRegistrar.textContent = '-';
          rdapStatuses.textContent = '-';
          rdapEvents.textContent = '-';
          rdapNs.textContent = '-';
          rdapLink.textContent = '-';
          return;
        }
        var s = rdap.summary;
        rdapStatus.textContent = msgRdapOk;
        rdapRegistrar.textContent = s.registrar || '(unavailable / redacted)';
        rdapStatuses.textContent = (s.status && s.status.length) ? s.status.join(', ') : '-';
        rdapEvents.textContent = (s.events && s.events.length)
          ? s.events.map(function (e) { return e.action + (e.date ? ': ' + e.date : ''); }).join('; ')
          : '-';
        rdapNs.textContent = (s.nameservers && s.nameservers.length) ? s.nameservers.join(', ') : '-';
        if (s.rdapUrl) {
          rdapLink.innerHTML = '<a href="' + esc(s.rdapUrl) + '" rel="noopener noreferrer" target="_blank">' + esc(s.rdapUrl) + '</a>';
        } else {
          rdapLink.textContent = '-';
        }
      }

      /**
       * 构建纯文本摘要供复制。
       * @param {string} name
       * @param {*} data
       * @returns {string}
       */
      function buildPlain(name, data) {
        var lines = ['Domain: ' + name];
        var dns = data.dns || {};
        if (dns.ok && dns.records && dns.records.length) {
          lines.push('DNS:');
          dns.records.forEach(function (r) {
            lines.push('  ' + (r.typeName || '') + ' ' + (r.name || '') + ' ' + (r.TTL != null ? r.TTL : '') + ' ' + (r.data || ''));
          });
        } else if (dns.error && dns.error !== 'skipped') {
          lines.push('DNS: ' + (dns.error || 'failed'));
        }
        var rdap = data.rdap || {};
        if (rdap.ok && rdap.summary) {
          var s = rdap.summary;
          lines.push('Registration:');
          lines.push('  Registrar: ' + (s.registrar || '-'));
          lines.push('  Status: ' + ((s.status || []).join(', ') || '-'));
          lines.push('  Nameservers: ' + ((s.nameservers || []).join(', ') || '-'));
        } else if (rdap.error && rdap.error !== 'skipped') {
          lines.push('Registration: ' + (rdap.error || 'failed'));
        }
        return lines.join('\\n');
      }

      /**
       * 执行查询。
       */
      async function runLookup() {
        showError('');
        var name = (domainInput.value || '').trim();
        if (!name) {
          showError(msgEmpty);
          return;
        }
        var wantDns = wantDnsEl.checked;
        var wantRdap = wantRdapEl.checked;
        if (!wantDns && !wantRdap) {
          showError(msgNeedOne);
          return;
        }
        dnsStatus.textContent = msgLoading;
        rdapStatus.textContent = msgLoading;
        try {
          var url = '/api/tools/domain-lookup?name=' + encodeURIComponent(name) +
            '&dns=' + (wantDns ? '1' : '0') +
            '&rdap=' + (wantRdap ? '1' : '0');
          var res = await fetch(url, { headers: { Accept: 'application/json' } });
          var data = await res.json();
          if (!res.ok) throw new Error(data && data.error ? data.error : 'Request failed');
          renderDns(data.dns);
          renderRdap(data.rdap);
          lastPlain = buildPlain(data.name || name, data);
          if (data.nsCompare && data.nsCompare.mismatch) {
            nsCompare.hidden = false;
            nsCompare.textContent = msgNsMismatch;
          } else {
            nsCompare.hidden = true;
            nsCompare.textContent = '';
          }
        } catch (err) {
          showError(errPrefix + (err && err.message ? err.message : String(err)));
          resetResults();
        }
      }

      /**
       * 加载样例并查询（与进页自动路径一致）。
       */
      function loadSample() {
        domainInput.value = sampleDomain;
        wantDnsEl.checked = true;
        wantRdapEl.checked = true;
        runLookup();
      }

      form.addEventListener('submit', function (e) {
        e.preventDefault();
        runLookup();
      });
      document.getElementById('btnSample').addEventListener('click', loadSample);
      document.getElementById('btnClear').addEventListener('click', function () {
        domainInput.value = '';
        showError('');
        resetResults();
      });
      document.getElementById('btnCopy').addEventListener('click', async function () {
        if (!lastPlain) return;
        try {
          await navigator.clipboard.writeText(lastPlain);
          var btn = document.getElementById('btnCopy');
          btn.textContent = msgCopied;
          setTimeout(function () { btn.textContent = labelCopy; }, 1200);
        } catch (e) {}
      });

      // 进页自动跑样例（只读查询，允许）
      loadSample();
    })();
  </script>`;

	/** catalog 元数据 */
	const toolMeta = getToolBySlug('domain-lookup');
	/** FAQ / Related 等 */
	const toolSeoHtml = toolMeta
		? renderToolExtraSections({ lang, defaultLang, tool: toolMeta })
		: '';
	/** JSON-LD */
	const toolJsonLd = toolMeta
		? buildToolJsonLd({
				lang,
				defaultLang,
				tool: toolMeta,
				name: t(lang, toolMeta.i18nKey as keyof typeof import('../site/i18n/en').default),
				description,
				canonicalPath,
			})
		: '';

	return renderLayout({
		lang,
		title,
		description,
		canonicalPath,
		ogImageUrl: 'https://onlinefreetools.org/og-image.png',
		ogType: 'website',
		alternates,
		headerHtml,
		sidebarHtml,
		contentHtml: `${contentHtml}${toolSeoHtml}${referencesHtml}`,
		extraHeadHtml: toolJsonLd,
		footerHtml,
		extraBodyHtml,
		includeSidebarToggleScript: true,
		sidebarAutoCloseSelector: '#toolNav a',
	});
};
