/**
 * 私网 / 特殊用途 CIDR 分类工具页。
 * slug: private-cidr-ranges（见 work-tasks/private-cidr-ranges/02-tool-info.md）。
 * 首屏：粘贴 IP/CIDR → 命中表项；进页自动跑 CGNAT 样例 100.64.1.10。
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

/** i18n 键前缀（与 catalog faqPrefix 一致）。 */
const PREFIX = 'tool_private_cidr_ranges';

/**
 * 为路径加上语言前缀（默认语无前缀）。
 * @param lang 当前语言
 * @param pathname 以 / 开头的路径
 * @param defaultLang 站点默认语言
 */
const withLangPrefix = (lang: SiteLang, pathname: string, defaultLang: SiteLang) => {
	const safe = pathname.startsWith('/') ? pathname : `/${pathname}`;
	return lang === defaultLang ? safe : `/${lang}${safe}`;
};

/**
 * 读取本工具 i18n 字符串。
 * @param lang 当前语言
 * @param suffix 前缀之后的键名，如 `title`
 */
const tx = (lang: SiteLang, suffix: string) =>
	t(lang, `${PREFIX}_${suffix}` as keyof typeof import('../site/i18n/en').default);

/**
 * 渲染 private-cidr-ranges 工具页 HTML。
 * @param opts.lang 当前语言
 * @param opts.defaultLang 站点默认语言
 * @param opts.enabledLangs 启用语言列表
 */
export const renderPrivateCidrRangesPage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	/** 规范路径（无语言前缀）。 */
	const toolPath = '/tools/private-cidr-ranges';
	/** 当前语种下的 canonical 路径。 */
	const canonicalPath = withLangPrefix(opts.lang, toolPath, opts.defaultLang);
	/** 文档 title：工具 H1 + 品牌。 */
	const title = `${tx(opts.lang, 'title')} | ${t(opts.lang, 'brand')}`;
	/** meta / 摘要用 description。 */
	const description = tx(opts.lang, 'description');

	/** 顶栏导航项。 */
	const navItems = buildToolPageNavItems(opts.lang, opts.defaultLang);

	/**
	 * 语言切换链接始终带显式语言前缀。
	 * @param code 目标语言
	 * @param pathname 工具路径
	 */
	const withExplicitLangPrefix = (code: SiteLang, pathname: string) => {
		const safe = pathname.startsWith('/') ? pathname : `/${pathname}`;
		return `/${code}${safe}`.replace(/\/{2,}/g, '/');
	};

	/** 顶栏语言菜单用的各语种 URL。 */
	const langAlternates: Record<string, string> = Object.fromEntries(
		(supportedLangs || []).map((code) => [code, withExplicitLangPrefix(code, toolPath)])
	);

	/** hreflang 交替链接。 */
	const alternates: HreflangAlternate[] = (supportedLangs || []).map((code) => ({
		lang: code,
		href: `https://onlinefreetools.org${withLangPrefix(code, toolPath, opts.defaultLang)}`,
	}));

	/** 页头 HTML。 */
	const headerHtml = renderHeader({
		lang: opts.lang,
		brandHref: withLangPrefix(opts.lang, '/', opts.defaultLang),
		navItems,
		enabledLangs: supportedLangs,
		langAlternates,
	});

	/** 侧栏工具列表。 */
	const sidebarHtml = renderSidebar({
		title: t(opts.lang, 'nav_tools'),
		items: buildToolSidebarItems({
			lang: opts.lang,
			defaultLang: opts.defaultLang,
			currentSlug: 'private-cidr-ranges',
			currentAnchor: '#private-cidr-ranges',
		}),
		id: 'toolNav',
	});

	/** 页脚 HTML。 */
	const footerHtml = renderFooter({ lang: opts.lang });

	/** 本页局部样式：输入、过滤芯片、结果、参考表。 */
	const extraHeadHtml = `
  <style>
    .tool-card { max-width: var(--content-max); width: 100%; margin: 0 0 1.5rem; }
    .form-label { display:block; margin-bottom:.5rem; color:#495057; font-weight:500 }
    .form-group { margin-bottom:1rem; }
    .btn-row { display:flex; flex-wrap:wrap; gap:.5rem; align-items:center; }
    .filter-row { display:flex; flex-wrap:wrap; gap:.4rem; margin-bottom:1rem; }
    .filter-row button { font-size:.85rem; }
    .filter-row button.is-active { background:#1a5f4a; color:#fff; border-color:#1a5f4a; }
    .result { background:#f8f9fa; padding:1rem; border-radius:8px; margin-top:1rem; text-align:left }
    .result .muted { color:#6c757d; font-size:.9rem; margin-top:.35rem }
    .result .err { color:#842029; }
    .result .tip { color:#0c5460; background:#d1ecf1; padding:.5rem .65rem; border-radius:6px; margin-top:.65rem; font-size:.9rem }
    .hit-list { list-style:none; padding:0; margin:.5rem 0 0; }
    .hit-list li { padding:.55rem .65rem; border:1px solid #dee2e6; border-radius:6px; margin-bottom:.4rem; background:#fff }
    .hit-list .cidr-mono { font-family:ui-monospace,Menlo,Consolas,monospace; font-size:.92rem }
    .hit-list .hit-name { font-weight:600; }
    .ref-wrap { overflow-x:auto; margin-top:.75rem; }
    .ref-table { width:100%; border-collapse:collapse; font-size:.9rem; }
    .ref-table th, .ref-table td { border:1px solid #dee2e6; padding:.4rem .5rem; text-align:left; }
    .ref-table th { background:#eef5f2; }
    .ref-table tr[data-cidr] { cursor:pointer; }
    .ref-table tr[data-cidr]:hover { background:#e8f5f0; }
    .ref-table .cidr-mono { font-family:ui-monospace,Menlo,Consolas,monospace; }
    #addrInput { font-family:ui-monospace,Menlo,Consolas,monospace; font-size:.95rem }
  </style>`;

	/** 主内容：H1、分类表单、How/Rules。 */
	const contentHtml = `
    <div id="private-cidr-ranges" class="mb-3">
      <h1 class="h4 mb-1">${escapeHtml(tx(opts.lang, 'title'))}</h1>
      <p class="text-muted mb-0">${escapeHtml(description)}</p>
    </div>

    <div class="card tool-card">
      <div class="card-body">
        <form id="privForm">
          <div class="form-group">
            <label class="form-label" for="addrInput">${escapeHtml(tx(opts.lang, 'input_label'))}</label>
            <input id="addrInput" class="input-lg" type="text" autocomplete="off" spellcheck="false" placeholder="${escapeHtml(tx(opts.lang, 'input_ph'))}" />
          </div>
          <div class="btn-row">
            <button type="submit" class="btn btn-primary">${escapeHtml(tx(opts.lang, 'check'))}</button>
            <button type="button" id="btnSample" class="btn btn-outline-secondary">${escapeHtml(tx(opts.lang, 'sample'))}</button>
            <button type="button" id="btnClear" class="btn btn-outline-secondary">${escapeHtml(tx(opts.lang, 'clear'))}</button>
            <button type="button" id="btnCopy" class="btn btn-outline-secondary">${escapeHtml(tx(opts.lang, 'copy'))}</button>
          </div>
        </form>
        <div id="privResult" class="result" style="display:none" aria-live="polite">
          <div id="privError" class="err" style="display:none"></div>
          <div id="privOk">
            <div class="form-label">${escapeHtml(tx(opts.lang, 'result_label'))}</div>
            <ul class="hit-list" id="hitList"></ul>
            <div id="noMatch" class="muted" style="display:none"></div>
            <div id="tailscaleTip" class="tip" style="display:none"></div>
          </div>
        </div>
        <div class="mt-3">
          <div class="form-label">${escapeHtml(tx(opts.lang, 'table_title'))}</div>
          <div class="filter-row" role="group" aria-label="table filter">
            <button type="button" class="btn btn-outline-secondary is-active" data-filter="all">${escapeHtml(tx(opts.lang, 'filter_all'))}</button>
            <button type="button" class="btn btn-outline-secondary" data-filter="ipv4">${escapeHtml(tx(opts.lang, 'filter_v4'))}</button>
            <button type="button" class="btn btn-outline-secondary" data-filter="ipv6">${escapeHtml(tx(opts.lang, 'filter_v6'))}</button>
          </div>
          <div class="ref-wrap">
            <table class="ref-table" id="refTable">
              <thead>
                <tr>
                  <th>${escapeHtml(tx(opts.lang, 'col_cidr'))}</th>
                  <th>${escapeHtml(tx(opts.lang, 'col_name'))}</th>
                  <th>${escapeHtml(tx(opts.lang, 'col_family'))}</th>
                  <th>${escapeHtml(tx(opts.lang, 'col_spec'))}</th>
                </tr>
              </thead>
              <tbody id="refBody"></tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

    ${renderToolIgSections({ lang: opts.lang, prefix: PREFIX, mode: 'formula', ruleItemCount: 4, howItemCount: 5 })}`;

	/** 权威出站引用（RFC1918 / 6598 / 4193 / 5737）。 */
	const referencesHtml = renderToolReferencesSection({
		lang: opts.lang,
		links: [
			{ label: tx(opts.lang, 'ref_rfc1918_label'), href: 'https://www.rfc-editor.org/rfc/rfc1918' },
			{ label: tx(opts.lang, 'ref_rfc6598_label'), href: 'https://www.rfc-editor.org/rfc/rfc6598' },
			{ label: tx(opts.lang, 'ref_rfc4193_label'), href: 'https://www.rfc-editor.org/rfc/rfc4193' },
			{ label: tx(opts.lang, 'ref_rfc5737_label'), href: 'https://www.rfc-editor.org/rfc/rfc5737' },
		],
	});

	/** 非 YMYL：RFC 对齐声明，非医疗/财务免责。 */
	const disclaimerHtml = `
    <p class="small text-muted mt-3 mb-0" id="disclaimer">${escapeHtml(tx(opts.lang, 'disclaimer'))}</p>`;

	/** 内置表项：id 对应 i18n name_/note_ 后缀。 */
	const rangeIds = [
		'rfc1918_10',
		'rfc1918_172',
		'rfc1918_192',
		'cgnat',
		'loopback',
		'linklocal_v4',
		'doc_testnet1',
		'doc_testnet2',
		'doc_testnet3',
		'ula',
		'linklocal_v6',
		'doc_v6',
	] as const;

	/** 传给浏览器脚本的本地化名称 / 说明。 */
	const nameMap: Record<string, string> = {};
	/** 传给浏览器脚本的说明句。 */
	const noteMap: Record<string, string> = {};
	for (const id of rangeIds) {
		nameMap[id] = tx(opts.lang, `name_${id}`);
		noteMap[id] = tx(opts.lang, `note_${id}`);
	}

	/**
	 * 浏览器内分类逻辑（进页自动跑 CGNAT 样例）。
	 * 注意：模板字符串里正则须写 \\w / \\d，否则会被吃掉。
	 */
	const extraBodyHtml = `
  <script>
    (function () {
      /** 主表单。 */
      var form = document.getElementById('privForm');
      /** 地址/CIDR 输入。 */
      var inputEl = document.getElementById('addrInput');
      /** 结果外层。 */
      var resultEl = document.getElementById('privResult');
      /** 错误文案节点。 */
      var errEl = document.getElementById('privError');
      /** 成功区。 */
      var okEl = document.getElementById('privOk');
      /** 命中列表。 */
      var hitList = document.getElementById('hitList');
      /** 未命中提示。 */
      var noMatchEl = document.getElementById('noMatch');
      /** Tailscale/CGNAT 提示。 */
      var tipEl = document.getElementById('tailscaleTip');
      /** 参考表 tbody。 */
      var refBody = document.getElementById('refBody');
      /** 当前表过滤：all | ipv4 | ipv6。 */
      var tableFilter = 'all';
      /** 最近一次成功摘要（供复制）。 */
      var lastSummary = '';

      /** 文案：空输入。 */
      var labelEmpty = ${JSON.stringify(tx(opts.lang, 'err_empty'))};
      /** 文案：解析失败。 */
      var labelParse = ${JSON.stringify(tx(opts.lang, 'err_parse'))};
      /** 文案：未命中。 */
      var labelNoMatch = ${JSON.stringify(tx(opts.lang, 'no_match'))};
      /** 文案：Tailscale 提示。 */
      var labelTailscale = ${JSON.stringify(tx(opts.lang, 'tailscale_tip'))};
      /** 文案：复制成功。 */
      var labelCopied = ${JSON.stringify(tx(opts.lang, 'copy_done'))};
      /** 文案：复制按钮默认。 */
      var labelCopy = ${JSON.stringify(tx(opts.lang, 'copy'))};
      /** 本地化名称表。 */
      var NAMES = ${JSON.stringify(nameMap)};
      /** 本地化说明表。 */
      var NOTES = ${JSON.stringify(noteMap)};

      /**
       * 内置私网/特殊用途前缀表。
       * @type {{id:string,cidr:string,family:string,spec:string,prefix:number}[]}
       */
      var RANGES = [
        { id: 'rfc1918_10', cidr: '10.0.0.0/8', family: 'ipv4', spec: 'RFC 1918', prefix: 8 },
        { id: 'rfc1918_172', cidr: '172.16.0.0/12', family: 'ipv4', spec: 'RFC 1918', prefix: 12 },
        { id: 'rfc1918_192', cidr: '192.168.0.0/16', family: 'ipv4', spec: 'RFC 1918', prefix: 16 },
        { id: 'cgnat', cidr: '100.64.0.0/10', family: 'ipv4', spec: 'RFC 6598', prefix: 10 },
        { id: 'loopback', cidr: '127.0.0.0/8', family: 'ipv4', spec: 'RFC 1122', prefix: 8 },
        { id: 'linklocal_v4', cidr: '169.254.0.0/16', family: 'ipv4', spec: 'RFC 3927', prefix: 16 },
        { id: 'doc_testnet1', cidr: '192.0.2.0/24', family: 'ipv4', spec: 'RFC 5737', prefix: 24 },
        { id: 'doc_testnet2', cidr: '198.51.100.0/24', family: 'ipv4', spec: 'RFC 5737', prefix: 24 },
        { id: 'doc_testnet3', cidr: '203.0.113.0/24', family: 'ipv4', spec: 'RFC 5737', prefix: 24 },
        { id: 'ula', cidr: 'fc00::/7', family: 'ipv6', spec: 'RFC 4193', prefix: 7 },
        { id: 'linklocal_v6', cidr: 'fe80::/10', family: 'ipv6', spec: 'RFC 4291', prefix: 10 },
        { id: 'doc_v6', cidr: '2001:db8::/32', family: 'ipv6', spec: 'RFC 3849', prefix: 32 }
      ];

      /**
       * 解析 IPv4 点分地址为无符号 32 位整数；失败返回 null。
       * @param {string} s
       * @returns {number|null}
       */
      function parseIpv4(s) {
        var parts = String(s).trim().split('.');
        if (parts.length !== 4) return null;
        var n = 0;
        for (var i = 0; i < 4; i++) {
          if (!/^\\d{1,3}$/.test(parts[i])) return null;
          var o = Number(parts[i]);
          if (o > 255) return null;
          n = (n * 256 + o) >>> 0;
        }
        return n >>> 0;
      }

      /**
       * 将 32 位整数格式化为点分 IPv4。
       * @param {number} n
       * @returns {string}
       */
      function fmtIpv4(n) {
        return [(n >>> 24) & 255, (n >>> 16) & 255, (n >>> 8) & 255, n & 255].join('.');
      }

      /**
       * 解析 IPv6 为 128 位 BigInt；失败返回 null。
       * @param {string} s
       * @returns {bigint|null}
       */
      function parseIpv6(s) {
        var raw = String(s).trim().toLowerCase();
        if (!raw || raw.indexOf(':') < 0) return null;
        if (raw.indexOf('.') >= 0) return null;
        var halves = raw.split('::');
        if (halves.length > 2) return null;
        /** @type {string[]} */
        var head = halves[0] ? halves[0].split(':') : [];
        /** @type {string[]} */
        var tail = halves.length === 2 ? (halves[1] ? halves[1].split(':') : []) : [];
        if (halves.length === 1) {
          head = raw.split(':');
          tail = [];
        }
        var missing = 8 - (head.length + tail.length);
        if (halves.length === 2) {
          if (missing < 0) return null;
        } else if (head.length !== 8) {
          return null;
        }
        /** @type {string[]} */
        var full = head.concat(halves.length === 2 ? Array(missing).fill('0') : []).concat(tail);
        if (full.length !== 8) return null;
        var v = 0n;
        for (var i = 0; i < 8; i++) {
          if (!/^[0-9a-f]{1,4}$/.test(full[i])) return null;
          v = (v << 16n) + BigInt(parseInt(full[i], 16));
        }
        return v;
      }

      /**
       * 生成 IPv4 掩码（前缀长度 0–32）。
       * @param {number} p
       * @returns {number}
       */
      function maskV4(p) {
        if (p <= 0) return 0;
        if (p >= 32) return 0xffffffff >>> 0;
        return ((0xffffffff << (32 - p)) >>> 0);
      }

      /**
       * 生成 IPv6 掩码（前缀长度 0–128）。
       * @param {number} p
       * @returns {bigint}
       */
      function maskV6(p) {
        if (p <= 0) return 0n;
        if (p >= 128) return (1n << 128n) - 1n;
        return ((1n << 128n) - 1n) << BigInt(128 - p);
      }

      /**
       * 解析「地址」或「CIDR」输入。
       * @param {string} raw
       * @returns {{family:string,addr:number|bigint,prefix:number,isCidr:boolean}|null}
       */
      function parseInput(raw) {
        var s = String(raw || '').trim();
        if (!s) return null;
        var slash = s.indexOf('/');
        var addrPart = slash >= 0 ? s.slice(0, slash).trim() : s;
        var prefStr = slash >= 0 ? s.slice(slash + 1).trim() : '';
        var v4 = parseIpv4(addrPart);
        if (v4 !== null) {
          var p4 = slash >= 0 ? Number(prefStr) : 32;
          if (!Number.isInteger(p4) || p4 < 0 || p4 > 32) return null;
          var net4 = (v4 & maskV4(p4)) >>> 0;
          return { family: 'ipv4', addr: net4, prefix: p4, isCidr: slash >= 0 };
        }
        var v6 = parseIpv6(addrPart);
        if (v6 !== null) {
          var p6 = slash >= 0 ? Number(prefStr) : 128;
          if (!Number.isInteger(p6) || p6 < 0 || p6 > 128) return null;
          var net6 = v6 & maskV6(p6);
          return { family: 'ipv6', addr: net6, prefix: p6, isCidr: slash >= 0 };
        }
        return null;
      }

      /**
       * 预解析表项网络地址。
       * @param {{cidr:string,family:string,prefix:number}} row
       * @returns {{net:number|bigint}|null}
       */
      function parseRowNet(row) {
        var parsed = parseInput(row.cidr);
        if (!parsed || parsed.family !== row.family) return null;
        return { net: parsed.addr };
      }

      /** 表项缓存：id → 网络地址。 */
      var ROW_NET = {};
      for (var ri = 0; ri < RANGES.length; ri++) {
        var rn = parseRowNet(RANGES[ri]);
        if (rn) ROW_NET[RANGES[ri].id] = rn.net;
      }

      /**
       * 判断输入是否被某表项完全包含。
       * @param {{family:string,addr:number|bigint,prefix:number}} input
       * @param {{id:string,family:string,prefix:number}} row
       * @returns {boolean}
       */
      function isContained(input, row) {
        if (input.family !== row.family) return false;
        if (input.prefix < row.prefix) return false;
        var rowNet = ROW_NET[row.id];
        if (rowNet === undefined) return false;
        if (input.family === 'ipv4') {
          var m = maskV4(row.prefix);
          return ((Number(input.addr) & m) >>> 0) === ((Number(rowNet) & m) >>> 0);
        }
        var m6 = maskV6(row.prefix);
        return (input.addr & m6) === (rowNet & m6);
      }

      /**
       * 渲染参考表（按过滤）。
       */
      function renderTable() {
        refBody.innerHTML = '';
        for (var i = 0; i < RANGES.length; i++) {
          var row = RANGES[i];
          if (tableFilter !== 'all' && row.family !== tableFilter) continue;
          var tr = document.createElement('tr');
          tr.setAttribute('data-cidr', row.cidr);
          tr.innerHTML =
            '<td class="cidr-mono">' + row.cidr + '</td>' +
            '<td>' + (NAMES[row.id] || row.id) + '</td>' +
            '<td>' + (row.family === 'ipv6' ? 'IPv6' : 'IPv4') + '</td>' +
            '<td>' + row.spec + '</td>';
          tr.addEventListener('click', function (ev) {
            var cidr = ev.currentTarget.getAttribute('data-cidr');
            inputEl.value = cidr;
            runCheck();
          });
          refBody.appendChild(tr);
        }
      }

      /**
       * 显示错误态。
       * @param {string} msg
       */
      function showError(msg) {
        resultEl.style.display = 'block';
        errEl.style.display = 'block';
        errEl.textContent = msg;
        okEl.style.display = 'none';
        lastSummary = '';
      }

      /**
       * 执行分类并更新结果区。
       */
      function runCheck() {
        var raw = inputEl.value;
        if (!String(raw || '').trim()) {
          showError(labelEmpty);
          return;
        }
        var parsed = parseInput(raw);
        if (!parsed) {
          showError(labelParse);
          return;
        }
        /** @type {typeof RANGES} */
        var hits = [];
        for (var i = 0; i < RANGES.length; i++) {
          if (isContained(parsed, RANGES[i])) hits.push(RANGES[i]);
        }
        hits.sort(function (a, b) { return b.prefix - a.prefix; });

        resultEl.style.display = 'block';
        errEl.style.display = 'none';
        errEl.textContent = '';
        okEl.style.display = 'block';
        hitList.innerHTML = '';
        noMatchEl.style.display = 'none';
        tipEl.style.display = 'none';

        if (!hits.length) {
          noMatchEl.style.display = 'block';
          noMatchEl.textContent = labelNoMatch;
          lastSummary = String(raw).trim() + ' → (no match)';
          return;
        }

        var lines = [];
        var showTailscale = false;
        for (var h = 0; h < hits.length; h++) {
          var hit = hits[h];
          var li = document.createElement('li');
          var name = NAMES[hit.id] || hit.id;
          var note = NOTES[hit.id] || '';
          li.innerHTML =
            '<div class="hit-name">' + name + '</div>' +
            '<div class="cidr-mono">' + hit.cidr + ' · ' + hit.spec + '</div>' +
            '<div class="muted">' + note + '</div>';
          hitList.appendChild(li);
          lines.push(name + ': ' + hit.cidr + ' (' + hit.spec + ')');
          if (hit.id === 'cgnat') showTailscale = true;
        }
        if (showTailscale) {
          tipEl.style.display = 'block';
          tipEl.textContent = labelTailscale;
        }
        lastSummary = String(raw).trim() + ' → ' + lines.join('; ');
      }

      /**
       * 载入默认 CGNAT 样例并检查。
       */
      function loadSample() {
        inputEl.value = '100.64.1.10';
        runCheck();
      }

      /**
       * 复制结果摘要。
       * @param {HTMLElement} btn
       */
      function copySummary(btn) {
        if (!lastSummary) return;
        navigator.clipboard.writeText(lastSummary).then(function () {
          btn.textContent = labelCopied;
          setTimeout(function () { btn.textContent = labelCopy; }, 1200);
        });
      }

      form.addEventListener('submit', function (e) {
        e.preventDefault();
        runCheck();
      });
      document.getElementById('btnSample').addEventListener('click', loadSample);
      document.getElementById('btnClear').addEventListener('click', function () {
        inputEl.value = '';
        resultEl.style.display = 'none';
        hitList.innerHTML = '';
        lastSummary = '';
      });
      document.getElementById('btnCopy').addEventListener('click', function () {
        copySummary(this);
      });
      var filterBtns = document.querySelectorAll('.filter-row button[data-filter]');
      for (var fi = 0; fi < filterBtns.length; fi++) {
        filterBtns[fi].addEventListener('click', function () {
          tableFilter = this.getAttribute('data-filter') || 'all';
          for (var j = 0; j < filterBtns.length; j++) {
            filterBtns[j].classList.toggle('is-active', filterBtns[j] === this);
          }
          renderTable();
        });
      }
      renderTable();
      loadSample();
    })();
  </script>`;

	/** catalog 元数据（FAQ / related / updatedAt）。 */
	const toolMeta = getToolBySlug('private-cidr-ranges');
	/** FAQ、相关工具、分享与反馈。 */
	const toolSeoHtml = toolMeta
		? renderToolExtraSections({ lang: opts.lang, defaultLang: opts.defaultLang, tool: toolMeta })
		: '';
	/** WebApplication + BreadcrumbList JSON-LD。 */
	const toolJsonLd = toolMeta
		? buildToolJsonLd({
				lang: opts.lang,
				defaultLang: opts.defaultLang,
				tool: toolMeta,
				name: tx(opts.lang, 'title'),
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
		contentHtml: `${contentHtml}${toolSeoHtml}${referencesHtml}${disclaimerHtml}`,
		footerHtml,
		extraHeadHtml: `${extraHeadHtml}${toolJsonLd}`,
		extraBodyHtml,
		includeSidebarToggleScript: true,
		sidebarAutoCloseSelector: '#toolNav a',
	});
};
