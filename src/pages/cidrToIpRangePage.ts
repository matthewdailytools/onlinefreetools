/**
 * CIDR → IP range 工具页。
 * slug: cidr-to-ip-range（见 work-tasks/cidr-to-ip-range/02-tool-info.md）。
 * 首屏：IPv4 CIDR → 网络/广播/可用主机/掩码；进页自动跑 /24 样例。
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
const PREFIX = 'tool_cidr_to_ip_range';

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
 * 渲染 cidr-to-ip-range 工具页 HTML。
 * @param opts.lang 当前语言
 * @param opts.defaultLang 站点默认语言
 * @param opts.enabledLangs 启用语言列表
 */
export const renderCidrToIpRangePage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	/** 规范路径（无语言前缀）。 */
	const toolPath = '/tools/cidr-to-ip-range';
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
		groups: buildToolSidebarItems({
			lang: opts.lang,
			defaultLang: opts.defaultLang,
			currentSlug: 'cidr-to-ip-range',
			currentAnchor: '#cidr-to-ip-range',
		}),
		id: 'toolNav',
	});

	/** 页脚 HTML。 */
	const footerHtml = renderFooter({ lang: opts.lang });

	/** 本页局部样式。 */
	const extraHeadHtml = `
  <style>
    .tool-card { max-width: var(--content-max); width: 100%; margin: 0 0 1.5rem; }
    .form-label { display:block; margin-bottom:.5rem; color:#495057; font-weight:500 }
    .form-group { margin-bottom:1rem; }
    .btn-row { display:flex; flex-wrap:wrap; gap:.5rem; align-items:center; }
    .result { background:#f8f9fa; padding:1rem; border-radius:8px; margin-top:1rem; text-align:left }
    .result .muted { color:#6c757d; font-size:.9rem; margin-top:.35rem }
    .result .err { color:#842029; }
    .result .hint { color:#664d03; font-size:.9rem; margin-bottom:.5rem }
    .cidr-mono { font-family:ui-monospace,Menlo,Consolas,monospace; font-size:.92rem }
    .field-grid { display:grid; grid-template-columns:minmax(7rem,auto) 1fr; gap:.35rem .75rem; align-items:baseline }
    .field-grid .k { color:#6c757d; font-size:.9rem }
    .prefix-bar { height:10px; border-radius:4px; background:linear-gradient(90deg,#1a5f7a 0%,#1a5f7a var(--pct,75%),#dee2e6 var(--pct,75%)); margin-top:.75rem }
    #outExpand { white-space:pre-wrap; word-break:break-all; margin:.5rem 0 0; max-height:14rem; overflow:auto }
    #cidrInput, #maskInput, #secondInput { font-family:ui-monospace,Menlo,Consolas,monospace; font-size:.92rem }
  </style>`;

	/** 主内容：H1、表单、How/Formula。 */
	const contentHtml = `
    <div id="cidr-to-ip-range" class="mb-3">
      <h1 class="h4 mb-1">${escapeHtml(tx(opts.lang, 'title'))}</h1>
      <p class="text-muted mb-0">${escapeHtml(description)}</p>
    </div>

    <div class="card tool-card">
      <div class="card-body">
        <form id="cidrForm">
          <div class="form-group">
            <label class="form-label" for="modeSelect">${escapeHtml(tx(opts.lang, 'mode_label'))}</label>
            <select id="modeSelect" class="input-lg">
              <option value="range">${escapeHtml(tx(opts.lang, 'mode_range'))}</option>
              <option value="mask">${escapeHtml(tx(opts.lang, 'mode_mask'))}</option>
              <option value="check">${escapeHtml(tx(opts.lang, 'mode_check'))}</option>
              <option value="expand">${escapeHtml(tx(opts.lang, 'mode_expand'))}</option>
            </select>
          </div>
          <div class="form-group" id="cidrGroup">
            <label class="form-label" for="cidrInput">${escapeHtml(tx(opts.lang, 'input_label'))}</label>
            <input id="cidrInput" class="input-lg" type="text" autocomplete="off" spellcheck="false" placeholder="${escapeHtml(tx(opts.lang, 'input_ph'))}" />
          </div>
          <div class="form-group" id="maskGroup" style="display:none">
            <label class="form-label" for="maskInput">${escapeHtml(tx(opts.lang, 'mask_label'))}</label>
            <input id="maskInput" class="input-lg" type="text" autocomplete="off" spellcheck="false" placeholder="${escapeHtml(tx(opts.lang, 'mask_ph'))}" />
          </div>
          <div class="form-group" id="secondGroup" style="display:none">
            <label class="form-label" for="secondInput">${escapeHtml(tx(opts.lang, 'second_label'))}</label>
            <input id="secondInput" class="input-lg" type="text" autocomplete="off" spellcheck="false" placeholder="${escapeHtml(tx(opts.lang, 'second_ph'))}" />
          </div>
          <div class="btn-row">
            <button type="submit" class="btn btn-primary">${escapeHtml(tx(opts.lang, 'calculate'))}</button>
            <button type="button" id="btnSample" class="btn btn-outline-secondary">${escapeHtml(tx(opts.lang, 'sample'))}</button>
            <button type="button" id="btnClear" class="btn btn-outline-secondary">${escapeHtml(tx(opts.lang, 'clear'))}</button>
            <button type="button" id="btnCopy" class="btn btn-outline-secondary">${escapeHtml(tx(opts.lang, 'copy'))}</button>
          </div>
        </form>
        <div id="cidrResult" class="result" style="display:none" aria-live="polite">
          <div id="cidrError" class="err" style="display:none"></div>
          <div id="cidrOk">
            <div id="cidrHint" class="hint" style="display:none"></div>
            <div class="form-label">${escapeHtml(tx(opts.lang, 'result_label'))}</div>
            <div id="outFields" class="field-grid cidr-mono"></div>
            <div id="prefixBar" class="prefix-bar" style="display:none" title="prefix length"></div>
            <pre class="cidr-mono" id="outExpand" style="display:none"></pre>
          </div>
        </div>
      </div>
    </div>

    ${renderToolIgSections({ lang: opts.lang, prefix: PREFIX, mode: 'formula', ruleItemCount: 4, howItemCount: 5 })}`;

	/** 权威出站引用（RFC 4632 / RFC 3021）。 */
	const referencesHtml = renderToolReferencesSection({
		lang: opts.lang,
		links: [
			{
				label: tx(opts.lang, 'ref_rfc4632_label'),
				href: 'https://www.rfc-editor.org/rfc/rfc4632',
			},
			{
				label: tx(opts.lang, 'ref_rfc3021_label'),
				href: 'https://www.rfc-editor.org/rfc/rfc3021',
			},
		],
	});

	/** 非 YMYL：算术说明，非路由策略建议。 */
	const disclaimerHtml = `
    <p class="small text-muted mt-3 mb-0" id="disclaimer">${escapeHtml(tx(opts.lang, 'disclaimer'))}</p>`;

	/**
	 * 浏览器内 IPv4 CIDR 展开（进页自动跑 /24 样例）。
	 * 注意：模板字符串里正则须写 \\w / \\d，否则会被吃掉。
	 */
	const extraBodyHtml = `
  <script>
    (function () {
      /** 展开主机列表硬上限。 */
      var EXPAND_LIMIT = 1024;
      /** 主表单。 */
      var form = document.getElementById('cidrForm');
      /** 模式选择。 */
      var modeEl = document.getElementById('modeSelect');
      /** CIDR 输入。 */
      var cidrEl = document.getElementById('cidrInput');
      /** 掩码输入（mask 模式）。 */
      var maskEl = document.getElementById('maskInput');
      /** 第二地址/CIDR（check 模式）。 */
      var secondEl = document.getElementById('secondInput');
      /** 结果容器。 */
      var resultEl = document.getElementById('cidrResult');
      /** 错误区。 */
      var errEl = document.getElementById('cidrError');
      /** 成功区。 */
      var okEl = document.getElementById('cidrOk');
      /** 规范化提示。 */
      var hintEl = document.getElementById('cidrHint');
      /** 字段网格。 */
      var fieldsEl = document.getElementById('outFields');
      /** 前缀长度条。 */
      var barEl = document.getElementById('prefixBar');
      /** 展开列表。 */
      var expandEl = document.getElementById('outExpand');
      /** 最近一次可复制摘要。 */
      var lastCopy = '';

      var labelCopied = ${JSON.stringify(tx(opts.lang, 'copy_done'))};
      var labelCopy = ${JSON.stringify(tx(opts.lang, 'copy'))};
      var lblNetwork = ${JSON.stringify(tx(opts.lang, 'lbl_network'))};
      var lblBroadcast = ${JSON.stringify(tx(opts.lang, 'lbl_broadcast'))};
      var lblFirst = ${JSON.stringify(tx(opts.lang, 'lbl_first'))};
      var lblLast = ${JSON.stringify(tx(opts.lang, 'lbl_last'))};
      var lblHosts = ${JSON.stringify(tx(opts.lang, 'lbl_hosts'))};
      var lblMask = ${JSON.stringify(tx(opts.lang, 'lbl_mask'))};
      var lblWildcard = ${JSON.stringify(tx(opts.lang, 'lbl_wildcard'))};
      var lblPrefix = ${JSON.stringify(tx(opts.lang, 'lbl_prefix'))};
      var lblNormalized = ${JSON.stringify(tx(opts.lang, 'lbl_normalized'))};
      var normHint = ${JSON.stringify(tx(opts.lang, 'norm_hint'))};
      var expandLimitTpl = ${JSON.stringify(tx(opts.lang, 'expand_limit'))};
      var checkIn = ${JSON.stringify(tx(opts.lang, 'check_in'))};
      var checkOut = ${JSON.stringify(tx(opts.lang, 'check_out'))};
      var ovEqual = ${JSON.stringify(tx(opts.lang, 'overlap_equal'))};
      var ovContain = ${JSON.stringify(tx(opts.lang, 'overlap_contain'))};
      var ovInside = ${JSON.stringify(tx(opts.lang, 'overlap_inside'))};
      var ovOverlap = ${JSON.stringify(tx(opts.lang, 'overlap_overlap'))};
      var ovDisjoint = ${JSON.stringify(tx(opts.lang, 'overlap_disjoint'))};
      var maskToPrefixTpl = ${JSON.stringify(tx(opts.lang, 'mask_to_prefix'))};
      var prefixToMaskTpl = ${JSON.stringify(tx(opts.lang, 'prefix_to_mask'))};
      var errEmpty = ${JSON.stringify(tx(opts.lang, 'err_empty'))};
      var errParse = ${JSON.stringify(tx(opts.lang, 'err_parse'))};
      var errPrefix = ${JSON.stringify(tx(opts.lang, 'err_prefix'))};
      var errIpv6 = ${JSON.stringify(tx(opts.lang, 'err_ipv6'))};
      var errMask = ${JSON.stringify(tx(opts.lang, 'err_mask'))};
      var errSecond = ${JSON.stringify(tx(opts.lang, 'err_second'))};

      /**
       * 简单模板替换。
       * @param {string} tpl
       * @param {Record<string, string|number>} map
       */
      function fill(tpl, map) {
        return String(tpl).replace(/\\{(\\w+)\\}/g, function (_, k) {
          return map[k] != null ? String(map[k]) : '';
        });
      }

      /**
       * 把 32 位无符号整数写成点分 IPv4。
       * @param {number} n
       */
      function intToIp(n) {
        return [
          (n >>> 24) & 255,
          (n >>> 16) & 255,
          (n >>> 8) & 255,
          n & 255
        ].join('.');
      }

      /**
       * 解析点分 IPv4 为无符号 32 位整数；失败返回 null。
       * @param {string} s
       */
      function parseIpv4(s) {
        var t = String(s || '').trim();
        if (!t || t.indexOf(':') >= 0) return null;
        var parts = t.split('.');
        if (parts.length !== 4) return null;
        var n = 0;
        for (var i = 0; i < 4; i++) {
          if (!/^\\d{1,3}$/.test(parts[i])) return null;
          var o = Number(parts[i]);
          if (o < 0 || o > 255) return null;
          n = ((n << 8) | o) >>> 0;
        }
        return n;
      }

      /**
       * 前缀长度 → 掩码整数。
       * @param {number} p
       */
      function prefixToMaskInt(p) {
        if (p === 0) return 0;
        return (0xffffffff << (32 - p)) >>> 0;
      }

      /**
       * 掩码整数 → 前缀长度；非连续掩码返回 -1。
       * @param {number} m
       */
      function maskIntToPrefix(m) {
        var inv = (~m) >>> 0;
        if ((inv & (inv + 1)) !== 0) return -1;
        var bits = 0;
        var x = m >>> 0;
        while (x) {
          bits += x & 1;
          x >>>= 1;
        }
        return bits;
      }

      /**
       * 解析 IPv4 CIDR 或裸地址（默认 /32）。
       * @param {string} raw
       * @returns {{ ip:number, prefix:number }|null|{ error:string }}
       */
      function parseCidr(raw) {
        var t = String(raw || '').trim();
        if (!t) return { error: 'empty' };
        if (t.indexOf(':') >= 0) return { error: 'ipv6' };
        var slash = t.indexOf('/');
        var ipPart = slash >= 0 ? t.slice(0, slash).trim() : t;
        var prefPart = slash >= 0 ? t.slice(slash + 1).trim() : '32';
        var ip = parseIpv4(ipPart);
        if (ip == null) return { error: 'parse' };
        if (!/^\\d{1,2}$/.test(prefPart)) return { error: 'prefix' };
        var prefix = Number(prefPart);
        if (prefix < 0 || prefix > 32) return { error: 'prefix' };
        return { ip: ip, prefix: prefix };
      }

      /**
       * 由地址+前缀算出网段字段。
       * @param {number} ip
       * @param {number} prefix
       */
      function describeBlock(ip, prefix) {
        var mask = prefixToMaskInt(prefix);
        var network = (ip & mask) >>> 0;
        var broadcast = (network | ((~mask) >>> 0)) >>> 0;
        var normalized = network !== ip;
        var first = network;
        var last = broadcast;
        var hosts = 0;
        if (prefix === 32) {
          first = last = network;
          hosts = 1;
        } else if (prefix === 31) {
          first = network;
          last = broadcast;
          hosts = 2;
        } else {
          first = (network + 1) >>> 0;
          last = (broadcast - 1) >>> 0;
          hosts = Math.max(0, (broadcast - network - 1) >>> 0);
        }
        return {
          network: network,
          broadcast: broadcast,
          first: first,
          last: last,
          hosts: hosts,
          mask: mask,
          wildcard: (~mask) >>> 0,
          prefix: prefix,
          normalized: normalized,
          cidr: intToIp(network) + '/' + prefix
        };
      }

      /**
       * 按模式显示/隐藏次输入。
       */
      function syncModeUi() {
        var mode = modeEl.value;
        document.getElementById('maskGroup').style.display = mode === 'mask' ? 'block' : 'none';
        document.getElementById('secondGroup').style.display = mode === 'check' ? 'block' : 'none';
        document.getElementById('cidrGroup').style.display = 'block';
      }

      /**
       * 显示错误。
       * @param {string} msg
       */
      function showError(msg) {
        resultEl.style.display = 'block';
        errEl.style.display = 'block';
        okEl.style.display = 'none';
        errEl.textContent = msg;
        lastCopy = '';
      }

      /**
       * 显示成功区骨架。
       */
      function showOk() {
        resultEl.style.display = 'block';
        errEl.style.display = 'none';
        okEl.style.display = 'block';
      }

      /**
       * 渲染键值行。
       * @param {Array<{k:string,v:string}>} rows
       */
      function renderRows(rows) {
        fieldsEl.innerHTML = rows.map(function (r) {
          return '<div class="k">' + r.k + '</div><div>' + r.v + '</div>';
        }).join('');
      }

      /**
       * 默认 Prefix→range 与 Expand 共用的块结果。
       * @param {ReturnType<typeof describeBlock>} block
       * @param {boolean} doExpand
       */
      function renderBlock(block, doExpand) {
        showOk();
        hintEl.style.display = block.normalized ? 'block' : 'none';
        hintEl.textContent = block.normalized ? normHint : '';
        var rows = [
          { k: lblNormalized, v: block.cidr },
          { k: lblNetwork, v: intToIp(block.network) },
          { k: lblBroadcast, v: intToIp(block.broadcast) },
          { k: lblFirst, v: intToIp(block.first) },
          { k: lblLast, v: intToIp(block.last) },
          { k: lblHosts, v: String(block.hosts) },
          { k: lblMask, v: intToIp(block.mask) },
          { k: lblWildcard, v: intToIp(block.wildcard) },
          { k: lblPrefix, v: '/' + block.prefix }
        ];
        renderRows(rows);
        barEl.style.display = 'block';
        barEl.style.setProperty('--pct', (block.prefix / 32 * 100) + '%');
        lastCopy = rows.map(function (r) { return r.k + ': ' + r.v; }).join('\\n');
        if (doExpand) {
          var size = (block.broadcast - block.network + 1) >>> 0;
          var lines = [];
          var capped = size > EXPAND_LIMIT;
          var n = capped ? EXPAND_LIMIT : size;
          for (var i = 0; i < n; i++) {
            lines.push(intToIp((block.network + i) >>> 0));
          }
          expandEl.style.display = 'block';
          expandEl.textContent = lines.join('\\n') + (capped ? '\\n\\n' + fill(expandLimitTpl, { limit: EXPAND_LIMIT }) : '');
          lastCopy += '\\n\\n' + expandEl.textContent;
        } else {
          expandEl.style.display = 'none';
          expandEl.textContent = '';
        }
      }

      /**
       * 执行当前模式计算。
       */
      function runCalc() {
        var mode = modeEl.value;
        expandEl.style.display = 'none';
        barEl.style.display = 'none';

        if (mode === 'mask') {
          var maskRaw = String(maskEl.value || '').trim();
          var cidrRaw = String(cidrEl.value || '').trim();
          if (maskRaw) {
            var mi = parseIpv4(maskRaw);
            if (mi == null) return showError(errMask);
            var p = maskIntToPrefix(mi);
            if (p < 0) return showError(errMask);
            showOk();
            hintEl.style.display = 'none';
            renderRows([{ k: lblPrefix, v: fill(maskToPrefixTpl, { n: p }) }]);
            lastCopy = '/' + p;
            return;
          }
          var parsedM = parseCidr(cidrRaw);
          if (parsedM && parsedM.error === 'empty') return showError(errEmpty);
          if (parsedM && parsedM.error === 'ipv6') return showError(errIpv6);
          if (parsedM && parsedM.error === 'prefix') return showError(errPrefix);
          if (parsedM && parsedM.error) return showError(errParse);
          var maskInt = prefixToMaskInt(parsedM.prefix);
          showOk();
          hintEl.style.display = 'none';
          renderRows([{ k: lblMask, v: fill(prefixToMaskTpl, { mask: intToIp(maskInt) }) }]);
          lastCopy = intToIp(maskInt);
          return;
        }

        var parsed = parseCidr(cidrEl.value);
        if (parsed && parsed.error === 'empty') return showError(errEmpty);
        if (parsed && parsed.error === 'ipv6') return showError(errIpv6);
        if (parsed && parsed.error === 'prefix') return showError(errPrefix);
        if (parsed && parsed.error) return showError(errParse);
        var block = describeBlock(parsed.ip, parsed.prefix);

        if (mode === 'check') {
          var second = String(secondEl.value || '').trim();
          if (!second) return showError(errSecond);
          if (second.indexOf('/') >= 0) {
            var b2 = parseCidr(second);
            if (b2.error) return showError(b2.error === 'ipv6' ? errIpv6 : errParse);
            var o2 = describeBlock(b2.ip, b2.prefix);
            var a0 = block.network, a1 = block.broadcast, b0 = o2.network, b1 = o2.broadcast;
            var msg = ovDisjoint;
            if (a0 === b0 && a1 === b1) msg = ovEqual;
            else if (a0 <= b0 && a1 >= b1) msg = ovContain;
            else if (b0 <= a0 && b1 >= a1) msg = ovInside;
            else if (a0 <= b1 && b0 <= a1) msg = ovOverlap;
            showOk();
            hintEl.style.display = 'none';
            renderRows([
              { k: lblNormalized, v: block.cidr },
              { k: 'B', v: o2.cidr },
              { k: lblHosts, v: msg }
            ]);
            lastCopy = block.cidr + ' vs ' + o2.cidr + ': ' + msg;
            return;
          }
          var ip2 = parseIpv4(second);
          if (ip2 == null) return showError(errParse);
          var inside = ip2 >= block.network && ip2 <= block.broadcast;
          showOk();
          hintEl.style.display = block.normalized ? 'block' : 'none';
          hintEl.textContent = block.normalized ? normHint : '';
          renderRows([
            { k: lblNormalized, v: block.cidr },
            { k: lblHosts, v: inside ? checkIn : checkOut }
          ]);
          lastCopy = (inside ? checkIn : checkOut) + ' (' + block.cidr + ')';
          return;
        }

        renderBlock(block, mode === 'expand');
      }

      /**
       * 载入 /24 样例并计算。
       */
      function loadSample() {
        modeEl.value = 'range';
        syncModeUi();
        cidrEl.value = '192.168.1.0/24';
        maskEl.value = '';
        secondEl.value = '';
        runCalc();
      }

      /**
       * 复制结果摘要。
       * @param {HTMLElement} btn
       */
      function copyFields(btn) {
        if (!lastCopy) return;
        navigator.clipboard.writeText(lastCopy).then(function () {
          btn.textContent = labelCopied;
          setTimeout(function () { btn.textContent = labelCopy; }, 1200);
        });
      }

      form.addEventListener('submit', function (e) {
        e.preventDefault();
        runCalc();
      });
      modeEl.addEventListener('change', syncModeUi);
      document.getElementById('btnSample').addEventListener('click', loadSample);
      document.getElementById('btnClear').addEventListener('click', function () {
        cidrEl.value = '';
        maskEl.value = '';
        secondEl.value = '';
        resultEl.style.display = 'none';
        fieldsEl.innerHTML = '';
        expandEl.textContent = '';
        lastCopy = '';
      });
      document.getElementById('btnCopy').addEventListener('click', function () {
        copyFields(this);
      });
      syncModeUi();
      loadSample();
    })();
  </script>`;

	/** catalog 元数据（FAQ / related / updatedAt）。 */
	const toolMeta = getToolBySlug('cidr-to-ip-range');
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
