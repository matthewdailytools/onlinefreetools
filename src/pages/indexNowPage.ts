/**
 * IndexNow 工具页：生成 key、下载验证文件、检查线上 key、代理提交 URL。
 * slug: indexnow；见 work-tasks/indexnow/02-tool-info.md。
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
 * 渲染 IndexNow 工具页。
 * @param opts.lang 当前语言
 * @param opts.defaultLang 站点默认语言
 * @param opts.enabledLangs 启用语言列表
 */
export const renderIndexNowPage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	const toolPath = '/tools/indexnow';
	const canonicalPath = withLangPrefix(opts.lang, toolPath, opts.defaultLang);
	const title = `${t(opts.lang, 'tool_indexnow_title')} | ${t(opts.lang, 'brand')}`;
	const description = t(opts.lang, 'tool_indexnow_description');

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
		items: buildToolSidebarItems({ lang: opts.lang, defaultLang: opts.defaultLang, currentSlug: 'indexnow', currentAnchor: '#indexnow' }),
		id: 'toolNav',
	});

	const footerHtml = renderFooter({ lang: opts.lang });

	const extraHeadHtml = `
  <style>
    .tools-bar { gap: .5rem; }
    #urlList, #previewOut {
      min-height: 160px; font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace; font-size: .875rem;
    }
    #previewOut {
      white-space: pre-wrap; word-break: break-word; background: #fff;
      border: 1px solid #dee2e6; border-radius: .5rem; padding: 1rem; overflow: auto;
    }
    #statusTable td:first-child { font-weight: 600; white-space: nowrap; width: 4.5rem; }
  </style>`;

	const contentHtml = `
    <div id="indexnow" class="tool-hero">
      <h1 class="tool-title">${escapeHtml(t(opts.lang, 'tool_indexnow_title'))}</h1>
      <p class="tool-lead">${escapeHtml(description)}</p>
    </div>

    <div class="tool-panel">
    <div class="alert alert-warning py-2 small mb-3" role="note">
      ${escapeHtml(t(opts.lang, 'tool_indexnow_warn_banner'))}
    </div>

    <div class="row g-3 mb-3">
      <div class="col-12 col-md-6">
        <label class="form-label" for="hostInput">${escapeHtml(t(opts.lang, 'tool_indexnow_host_label'))}</label>
        <input id="hostInput" class="form-control form-control-sm" type="text" autocomplete="off" spellcheck="false" placeholder="${escapeHtml(t(opts.lang, 'tool_indexnow_host_placeholder'))}">
      </div>
      <div class="col-12 col-md-6">
        <label class="form-label" for="keyInput">${escapeHtml(t(opts.lang, 'tool_indexnow_key_label'))}</label>
        <div class="input-group input-group-sm">
          <input id="keyInput" class="form-control" type="text" autocomplete="off" spellcheck="false" placeholder="${escapeHtml(t(opts.lang, 'tool_indexnow_key_placeholder'))}">
          <button type="button" id="btnGenerate" class="btn btn-outline-secondary">${escapeHtml(t(opts.lang, 'tool_indexnow_generate'))}</button>
        </div>
      </div>
      <div class="col-12">
        <label class="form-label" for="keyLocInput">${escapeHtml(t(opts.lang, 'tool_indexnow_keyloc_label'))}</label>
        <input id="keyLocInput" class="form-control form-control-sm" type="url" autocomplete="off" spellcheck="false" placeholder="${escapeHtml(t(opts.lang, 'tool_indexnow_keyloc_placeholder'))}">
        <div class="form-text">${escapeHtml(t(opts.lang, 'tool_indexnow_keyloc_hint'))}</div>
      </div>
      <div class="col-12 col-md-4">
        <label class="form-label" for="endpointSelect">${escapeHtml(t(opts.lang, 'tool_indexnow_endpoint_label'))}</label>
        <select id="endpointSelect" class="form-select form-select-sm">
          <option value="indexnow">${escapeHtml(t(opts.lang, 'tool_indexnow_endpoint_indexnow'))}</option>
          <option value="bing">${escapeHtml(t(opts.lang, 'tool_indexnow_endpoint_bing'))}</option>
        </select>
      </div>
    </div>

    <div class="d-flex align-items-center tools-bar mb-3 flex-wrap">
      <button type="button" id="btnDownload" class="btn btn-outline-primary btn-sm">${escapeHtml(t(opts.lang, 'tool_indexnow_download'))}</button>
      <button type="button" id="btnCheck" class="btn btn-outline-primary">${escapeHtml(t(opts.lang, 'tool_indexnow_check'))}</button>
      <button type="button" id="btnPreview" class="btn btn-outline-secondary btn-sm">${escapeHtml(t(opts.lang, 'tool_indexnow_preview'))}</button>
      <button type="button" id="btnSubmit" class="btn btn-primary">${escapeHtml(t(opts.lang, 'tool_indexnow_submit'))}</button>
      <button type="button" id="btnSample" class="btn btn-outline-secondary btn-sm">${escapeHtml(t(opts.lang, 'tool_indexnow_sample'))}</button>
      <button type="button" id="btnClear" class="btn btn-outline-secondary btn-sm">${escapeHtml(t(opts.lang, 'tool_indexnow_clear'))}</button>
    </div>

    <div class="mb-3">
      <label class="form-label" for="urlList">${escapeHtml(t(opts.lang, 'tool_indexnow_urls_label'))}</label>
      <textarea id="urlList" class="form-control" spellcheck="false" placeholder="${escapeHtml(t(opts.lang, 'tool_indexnow_urls_placeholder'))}"></textarea>
      <div class="form-text">${escapeHtml(t(opts.lang, 'tool_indexnow_urls_hint'))}</div>
    </div>

    <div id="formError" class="alert alert-danger py-2 small mb-2" style="display:none" role="alert"></div>
    <div id="formWarn" class="alert alert-warning py-2 small mb-2" style="display:none" role="status"></div>
    <div id="formOk" class="alert alert-success py-2 small mb-2" style="display:none" role="status"></div>

    <div>
      <label class="form-label" for="previewOut">${escapeHtml(t(opts.lang, 'tool_indexnow_preview_label'))}</label>
      <pre id="previewOut" class="result mb-0" tabindex="0"></pre>
    </div>
    </div>`;

	const igHtml = renderToolIgSections({
		lang: opts.lang,
		prefix: 'tool_indexnow',
		mode: 'rules',
		usecaseCount: 3,
		ruleItemCount: 5,
	});

	/** 状态码对照表（可索引可见 HTML） */
	const statusTableHtml = `
    <section class="mb-4" id="status-codes" aria-labelledby="statusCodesTitle">
      <h2 class="h5" id="statusCodesTitle">${escapeHtml(t(opts.lang, 'tool_indexnow_status_title'))}</h2>
      <p class="text-muted small">${escapeHtml(t(opts.lang, 'tool_indexnow_status_intro'))}</p>
      <div class="table-responsive">
        <table class="table table-sm table-bordered align-middle" id="statusTable">
          <thead><tr>
            <th scope="col">${escapeHtml(t(opts.lang, 'tool_indexnow_status_col_code'))}</th>
            <th scope="col">${escapeHtml(t(opts.lang, 'tool_indexnow_status_col_meaning'))}</th>
            <th scope="col">${escapeHtml(t(opts.lang, 'tool_indexnow_status_col_next'))}</th>
          </tr></thead>
          <tbody>
            <tr><td>200</td><td>${escapeHtml(t(opts.lang, 'tool_indexnow_status_200'))}</td><td>${escapeHtml(t(opts.lang, 'tool_indexnow_status_200_next'))}</td></tr>
            <tr><td>202</td><td>${escapeHtml(t(opts.lang, 'tool_indexnow_status_202'))}</td><td>${escapeHtml(t(opts.lang, 'tool_indexnow_status_202_next'))}</td></tr>
            <tr><td>400</td><td>${escapeHtml(t(opts.lang, 'tool_indexnow_status_400'))}</td><td>${escapeHtml(t(opts.lang, 'tool_indexnow_status_400_next'))}</td></tr>
            <tr><td>403</td><td>${escapeHtml(t(opts.lang, 'tool_indexnow_status_403'))}</td><td>${escapeHtml(t(opts.lang, 'tool_indexnow_status_403_next'))}</td></tr>
            <tr><td>422</td><td>${escapeHtml(t(opts.lang, 'tool_indexnow_status_422'))}</td><td>${escapeHtml(t(opts.lang, 'tool_indexnow_status_422_next'))}</td></tr>
            <tr><td>429</td><td>${escapeHtml(t(opts.lang, 'tool_indexnow_status_429'))}</td><td>${escapeHtml(t(opts.lang, 'tool_indexnow_status_429_next'))}</td></tr>
          </tbody>
        </table>
      </div>
    </section>`;

	const disclaimerHtml = `
    <p class="small text-muted mb-4">${escapeHtml(t(opts.lang, 'tool_indexnow_disclaimer'))}</p>`;

	const referencesHtml = renderToolReferencesSection({
		lang: opts.lang,
		links: [
			{
				label: 'IndexNow — Documentation',
				href: 'https://www.indexnow.org/documentation',
			},
			{
				label: 'Bing — IndexNow',
				href: 'https://www.bing.com/indexnow',
			},
			{
				label: 'Bing Webmaster Tools',
				href: 'https://www.bing.com/webmasters',
			},
		],
	});

	const extraBodyHtml = `
<script>
(function () {
  /** @type {HTMLInputElement} */
  var hostInput = document.getElementById('hostInput');
  /** @type {HTMLInputElement} */
  var keyInput = document.getElementById('keyInput');
  /** @type {HTMLInputElement} */
  var keyLocInput = document.getElementById('keyLocInput');
  /** @type {HTMLSelectElement} */
  var endpointSelect = document.getElementById('endpointSelect');
  /** @type {HTMLTextAreaElement} */
  var urlListEl = document.getElementById('urlList');
  var previewOut = document.getElementById('previewOut');
  var formError = document.getElementById('formError');
  var formWarn = document.getElementById('formWarn');
  var formOk = document.getElementById('formOk');

  var msgEmptyHost = ${JSON.stringify(t(opts.lang, 'tool_indexnow_err_host'))};
  var msgInvalidHost = ${JSON.stringify(t(opts.lang, 'tool_indexnow_err_host_invalid'))};
  var msgInvalidKey = ${JSON.stringify(t(opts.lang, 'tool_indexnow_err_key'))};
  var msgEmptyUrls = ${JSON.stringify(t(opts.lang, 'tool_indexnow_err_urls'))};
  var msgMismatch = ${JSON.stringify(t(opts.lang, 'tool_indexnow_err_host_mismatch'))};
  var msgCheckFail = ${JSON.stringify(t(opts.lang, 'tool_indexnow_err_check'))};
  var msgSubmitFail = ${JSON.stringify(t(opts.lang, 'tool_indexnow_err_submit'))};
  var msgCheckOk = ${JSON.stringify(t(opts.lang, 'tool_indexnow_ok_check'))};
  var msgSubmitOk = ${JSON.stringify(t(opts.lang, 'tool_indexnow_ok_submit'))};
  var msgForceConfirm = ${JSON.stringify(t(opts.lang, 'tool_indexnow_force_confirm'))};
  var msgUncheckedWarn = ${JSON.stringify(t(opts.lang, 'tool_indexnow_warn_unchecked'))};
  var msgLimit = ${JSON.stringify(t(opts.lang, 'tool_indexnow_err_limit'))};
  var msgSitemap = ${JSON.stringify(t(opts.lang, 'tool_indexnow_err_sitemap'))};
  var lastKeyOk = false;

  /**
   * 展示错误 / 警告 / 成功条。
   * @param {'error'|'warn'|'ok'|''} kind
   * @param {string} msg
   */
  function setBanner(kind, msg) {
    formError.style.display = 'none';
    formWarn.style.display = 'none';
    formOk.style.display = 'none';
    if (!msg) return;
    if (kind === 'error') { formError.textContent = msg; formError.style.display = ''; }
    else if (kind === 'warn') { formWarn.textContent = msg; formWarn.style.display = ''; }
    else if (kind === 'ok') { formOk.textContent = msg; formOk.style.display = ''; }
  }

  /**
   * 规范化 host（保留 www，与 IndexNow host 字段一致）。
   * @param {string} raw
   * @returns {string|null}
   */
  function normalizeHost(raw) {
    var s = (raw || '').trim().toLowerCase();
    if (!s) return null;
    s = s.replace(/^https?:\\/\\//, '').replace(/\\/.*$/, '').replace(/:\\d+$/, '');
    if (s.endsWith('.')) s = s.slice(0, -1);
    if (!s || s.indexOf(' ') >= 0) return null;
    if (!/^[a-z0-9]([a-z0-9-]*[a-z0-9])?(\\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)+$/.test(s)) return null;
    return s;
  }

  /**
   * 校验 key。
   * @param {string} key
   * @returns {boolean}
   */
  function isValidKey(key) {
    return /^[A-Za-z0-9-]{8,128}$/.test(key || '');
  }

  /**
   * 默认 keyLocation。
   * @param {string} host
   * @param {string} key
   * @returns {string}
   */
  function defaultKeyLocation(host, key) {
    return 'https://' + host + '/' + key + '.txt';
  }

  /**
   * 用密码学随机生成 32 位合法 key。
   * @returns {string}
   */
  function generateKey() {
    var alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-';
    var bytes = new Uint8Array(32);
    crypto.getRandomValues(bytes);
    var out = '';
    for (var i = 0; i < bytes.length; i++) out += alphabet[bytes[i] % alphabet.length];
    return out;
  }

  /**
   * 判断绝对 URL 是否像 sitemap（应交给 Worker 展开，不能直接当页面提交）。
   * @param {string} raw
   * @returns {boolean}
   */
  function looksLikeSitemapUrl(raw) {
    try {
      var u = new URL(String(raw || '').trim());
      var path = u.pathname.toLowerCase();
      if (path.slice(-4) === '.xml' || path.slice(-7) === '.xml.gz') {
        return path.indexOf('sitemap') >= 0;
      }
      return /\\/sitemap(?:[_-]|$|index)/i.test(path);
    } catch (e) {
      return false;
    }
  }

  /**
   * 从多行文本或 sitemap XML 提取候选 URL（可能仍含子 sitemap URL）。
   * @param {string} raw
   * @returns {string[]}
   */
  function extractCandidateUrls(raw) {
    var text = raw || '';
    var urls = [];
    var isXml = /<urlset[\\s>]/i.test(text) || /<sitemapindex[\\s>]/i.test(text);
    if (isXml) {
      var locRe = /<loc>\\s*([^<\\s]+)\\s*<\\/loc>/gi;
      var m;
      while ((m = locRe.exec(text))) urls.push(m[1].trim());
    } else {
      text.split(/\\r?\\n/).forEach(function (line) {
        var s = line.replace(/#.*$/, '').trim();
        if (!s) return;
        if (/^https?:\\/\\//i.test(s)) urls.push(s);
      });
    }
    var seen = Object.create(null);
    var out = [];
    urls.forEach(function (u) {
      if (seen[u]) return;
      seen[u] = 1;
      out.push(u);
    });
    return out;
  }

  /**
   * 收集并校验表单基础字段；URL 展开由 resolveUrlsAsync 完成。
   * @param {{ requireUrls?: boolean }} opts
   * @returns {{ host: string, key: string, keyLocation: string, endpoint: string, rawText: string, candidates: string[] }|null}
   */
  function collectBase(opts) {
    opts = opts || {};
    setBanner('', '');
    var host = normalizeHost(hostInput.value);
    if (!host) {
      setBanner('error', hostInput.value.trim() ? msgInvalidHost : msgEmptyHost);
      return null;
    }
    var key = (keyInput.value || '').trim();
    if (!isValidKey(key)) {
      setBanner('error', msgInvalidKey);
      return null;
    }
    var keyLocation = (keyLocInput.value || '').trim() || defaultKeyLocation(host, key);
    try {
      var ku = new URL(keyLocation);
      if (ku.hostname.toLowerCase() !== host) {
        setBanner('error', msgMismatch);
        return null;
      }
    } catch (e) {
      setBanner('error', msgMismatch);
      return null;
    }
    var rawText = urlListEl.value || '';
    var candidates = extractCandidateUrls(rawText);
    if (opts.requireUrls !== false) {
      if (candidates.length === 0) {
        setBanner('error', msgEmptyUrls);
        return null;
      }
      if (candidates.length > 500) {
        setBanner('error', msgLimit);
        return null;
      }
    }
    return {
      host: host,
      key: key,
      keyLocation: keyLocation,
      endpoint: endpointSelect.value || 'indexnow',
      rawText: rawText,
      candidates: candidates
    };
  }

  /**
   * 经 Worker 把 sitemap URL / sitemapindex 展开为页面 urlList。
   * IndexNow 只提交页面列表，绝不把 sitemap 地址本身当作变更页。
   * @param {{ host: string, rawText: string, candidates: string[] }} base
   * @returns {Promise<string[]|null>}
   */
  async function resolveUrlsAsync(base) {
    var needsResolve = false;
    var i;
    for (i = 0; i < base.candidates.length; i++) {
      if (looksLikeSitemapUrl(base.candidates[i])) {
        needsResolve = true;
        break;
      }
    }
    if (/<sitemapindex[\\s>]/i.test(base.rawText)) needsResolve = true;

    if (!needsResolve) {
      for (i = 0; i < base.candidates.length; i++) {
        try {
          var u = new URL(base.candidates[i]);
          if (u.hostname.toLowerCase() !== base.host) {
            setBanner('error', msgMismatch + ' ' + base.candidates[i]);
            return null;
          }
        } catch (e2) {
          setBanner('error', msgMismatch + ' ' + base.candidates[i]);
          return null;
        }
      }
      return base.candidates.slice();
    }

    try {
      var res = await fetch('/api/tools/indexnow/resolve-urls', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ host: base.host, text: base.rawText })
      });
      var json = await res.json();
      if (!res.ok || !json || !json.ok || !Array.isArray(json.urlList) || json.urlList.length === 0) {
        setBanner('error', (json && json.error) || msgSitemap);
        previewOut.textContent = json ? JSON.stringify(json, null, 2) : '';
        return null;
      }
      if (json.urlList.length > 500) {
        setBanner('error', msgLimit);
        return null;
      }
      return json.urlList;
    } catch (e3) {
      setBanner('error', msgSitemap);
      return null;
    }
  }

  /**
   * 收集完整提交载荷（含已展开的页面 urlList）。
   * @param {{ requireUrls?: boolean }} opts
   * @returns {Promise<{ host: string, key: string, keyLocation: string, urlList: string[], endpoint: string }|null>}
   */
  async function collectAsync(opts) {
    var base = collectBase(opts);
    if (!base) return null;
    if (opts && opts.requireUrls === false) {
      return {
        host: base.host,
        key: base.key,
        keyLocation: base.keyLocation,
        urlList: [],
        endpoint: base.endpoint
      };
    }
    var urls = await resolveUrlsAsync(base);
    if (!urls) return null;
    return {
      host: base.host,
      key: base.key,
      keyLocation: base.keyLocation,
      urlList: urls,
      endpoint: base.endpoint
    };
  }

  /** 生成 key 并填充默认 keyLocation */
  function onGenerate() {
    var key = generateKey();
    keyInput.value = key;
    lastKeyOk = false;
    var host = normalizeHost(hostInput.value);
    if (host && !(keyLocInput.value || '').trim()) {
      keyLocInput.value = defaultKeyLocation(host, key);
    } else if (host) {
      keyLocInput.value = defaultKeyLocation(host, key);
    }
  }

  /** 下载 {key}.txt */
  async function onDownload() {
    var data = await collectAsync({ requireUrls: false });
    if (!data) return;
    var blob = new Blob([data.key], { type: 'text/plain;charset=utf-8' });
    var a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = data.key + '.txt';
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(a.href);
  }

  /** 预览 POST JSON（若输入为 sitemap URL，先展开为页面列表） */
  async function onPreview() {
    previewOut.textContent = '...';
    var data = await collectAsync({ requireUrls: true });
    if (!data) {
      if (previewOut.textContent === '...') previewOut.textContent = '';
      return;
    }
    previewOut.textContent = JSON.stringify({
      host: data.host,
      key: data.key,
      keyLocation: data.keyLocation,
      urlList: data.urlList
    }, null, 2);
  }

  /** Check key via Worker */
  async function onCheck() {
    var data = await collectAsync({ requireUrls: false });
    if (!data) return;
    previewOut.textContent = '...';
    lastKeyOk = false;
    try {
      var res = await fetch('/api/tools/indexnow/check-key?url=' + encodeURIComponent(data.keyLocation) + '&key=' + encodeURIComponent(data.key), {
        headers: { Accept: 'application/json' }
      });
      var json = await res.json();
      previewOut.textContent = JSON.stringify(json, null, 2);
      if (!res.ok) {
        setBanner('error', (json && json.error) || msgCheckFail);
        return;
      }
      lastKeyOk = !!json.ok;
      if (json.ok) setBanner('ok', msgCheckOk);
      else setBanner('warn', msgCheckFail + (json.error ? ' — ' + json.error : ''));
    } catch (e) {
      setBanner('error', msgCheckFail);
      previewOut.textContent = '';
    }
  }

  /** Submit via Worker（服务端也会再展开 sitemap，双保险） */
  async function onSubmit() {
    previewOut.textContent = '...';
    var data = await collectAsync({ requireUrls: true });
    if (!data) {
      if (previewOut.textContent === '...') previewOut.textContent = '';
      return;
    }
    if (!lastKeyOk) {
      if (!window.confirm(msgForceConfirm)) {
        setBanner('warn', msgUncheckedWarn);
        previewOut.textContent = '';
        return;
      }
    }
    try {
      var res = await fetch('/api/tools/indexnow/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(data)
      });
      var json = await res.json();
      previewOut.textContent = JSON.stringify(json, null, 2);
      if (!res.ok) {
        setBanner('error', (json && json.error) || msgSubmitFail);
        return;
      }
      if (json.ok) setBanner('ok', msgSubmitOk + ' HTTP ' + json.status + ' (' + (json.urlCount || data.urlList.length) + ' URLs)');
      else setBanner('warn', msgSubmitFail + ' HTTP ' + json.status);
    } catch (e) {
      setBanner('error', msgSubmitFail);
      previewOut.textContent = '';
    }
  }

  /** 载入示例（不提交真实站点） */
  function onSample() {
    hostInput.value = 'www.example.com';
    keyInput.value = 'indexnowdemokey01';
    keyLocInput.value = 'https://www.example.com/indexnowdemokey01.txt';
    urlListEl.value = 'https://www.example.com/page\\nhttps://www.example.com/news';
    endpointSelect.value = 'indexnow';
    lastKeyOk = false;
    onPreview();
  }

  /** 清空 */
  function onClear() {
    hostInput.value = '';
    keyInput.value = '';
    keyLocInput.value = '';
    urlListEl.value = '';
    previewOut.textContent = '';
    lastKeyOk = false;
    setBanner('', '');
  }

  document.getElementById('btnGenerate').addEventListener('click', onGenerate);
  document.getElementById('btnDownload').addEventListener('click', onDownload);
  document.getElementById('btnCheck').addEventListener('click', onCheck);
  document.getElementById('btnPreview').addEventListener('click', onPreview);
  document.getElementById('btnSubmit').addEventListener('click', onSubmit);
  document.getElementById('btnSample').addEventListener('click', onSample);
  document.getElementById('btnClear').addEventListener('click', onClear);
})();
</script>`;

	const toolMeta = getToolBySlug('indexnow');
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
		contentHtml: `${contentHtml}${igHtml}${statusTableHtml}${toolSeoHtml}${referencesHtml}${disclaimerHtml}`,
		footerHtml,
		extraHeadHtml: `${extraHeadHtml}${toolJsonLd}`,
		extraBodyHtml,
		includeSidebarToggleScript: true,
		sidebarAutoCloseSelector: '#toolNav a',
	});
};
