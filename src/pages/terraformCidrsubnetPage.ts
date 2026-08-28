/**
 * Terraform cidrsubnet 求值工具页。
 * slug: terraform-cidrsubnet（见 work-tasks/terraform-cidrsubnet/02-tool-info.md）。
 * 首屏只求值 cidrsubnet；cidrhost / cidrnetmask 放在结果区下方折叠块。
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
const PREFIX = 'tool_terraform_cidrsubnet';

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
 * 渲染 terraform-cidrsubnet 工具页 HTML。
 * @param opts.lang 当前语言
 * @param opts.defaultLang 站点默认语言
 * @param opts.enabledLangs 启用语言列表
 */
export const renderTerraformCidrsubnetPage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	/** 规范路径（无语言前缀）。 */
	const toolPath = '/tools/terraform-cidrsubnet';
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
			currentSlug: 'terraform-cidrsubnet',
			currentAnchor: '#terraform-cidrsubnet',
		}),
		id: 'toolNav',
	});

	/** 页脚 HTML。 */
	const footerHtml = renderFooter({ lang: opts.lang });

	/** 本页局部样式：主表单、结果表、次函数折叠区。 */
	const extraHeadHtml = `
  <style>
    .tool-card { max-width: var(--content-max); width: 100%; margin: 0 0 1.5rem; }
    .form-label { display:block; margin-bottom:.5rem; color:#495057; font-weight:500 }
    .form-group { margin-bottom:1rem; }
    .form-row { display:grid; grid-template-columns:1fr 1fr 1fr; gap:1rem; }
    .form-row-2 { display:grid; grid-template-columns:1fr 1fr; gap:1rem; }
    @media (max-width:576px) { .form-row, .form-row-2 { grid-template-columns:1fr; } }
    .btn-row { display:flex; flex-wrap:wrap; gap:.5rem; align-items:center; }
    .result { background:#f8f9fa; padding:1rem; border-radius:8px; margin-top:1rem; text-align:left }
    .result .muted { color:#6c757d; font-size:.9rem; margin-top:.35rem }
    .result .err { color:#842029; }
    .cidr-table { width:100%; border-collapse:collapse; font-size:.95rem }
    .cidr-table th { text-align:left; font-weight:500; color:#495057; padding:.2rem .5rem .2rem 0; width:40% }
    .cidr-table td { font-variant-numeric:tabular-nums; padding:.2rem 0; word-break:break-all }
    .cidr-mono { font-family:ui-monospace,Menlo,Consolas,monospace; font-size:.92rem }
    .net-table { width:100%; border-collapse:collapse; font-size:.9rem; margin-top:.5rem }
    .net-table th, .net-table td { border-bottom:1px solid #dee2e6; padding:.35rem .25rem; font-variant-numeric:tabular-nums }
    .cidr-details { margin-top:1.25rem; border-top:1px solid #e9ecef; padding-top:1rem }
    .cidr-details > summary { cursor:pointer; font-weight:500; color:#343a40 }
  </style>`;

	/** 主内容：H1、cidrsubnet 表单、次函数、How/Formula。 */
	const contentHtml = `
    <div id="terraform-cidrsubnet" class="mb-3">
      <h1 class="h4 mb-1">${escapeHtml(tx(opts.lang, 'title'))}</h1>
      <p class="text-muted mb-0">${escapeHtml(description)}</p>
    </div>

    <div class="card tool-card">
      <div class="card-body">
        <form id="cidrForm">
          <div class="form-group">
            <label class="form-label" for="cidrPrefix">${escapeHtml(tx(opts.lang, 'prefix_label'))}</label>
            <input id="cidrPrefix" class="input-lg cidr-mono" type="text" autocomplete="off" spellcheck="false" placeholder="${escapeHtml(tx(opts.lang, 'prefix_ph'))}">
          </div>
          <div class="form-row">
            <div class="form-group">
              <label class="form-label" for="cidrNewbits">${escapeHtml(tx(opts.lang, 'newbits_label'))}</label>
              <input id="cidrNewbits" class="input-lg" type="number" step="1" min="0">
            </div>
            <div class="form-group">
              <label class="form-label" for="cidrNetnum">${escapeHtml(tx(opts.lang, 'netnum_label'))}</label>
              <input id="cidrNetnum" class="input-lg" type="number" step="1" min="0">
            </div>
          </div>
          <div class="btn-row">
            <button type="submit" class="btn btn-primary">${escapeHtml(tx(opts.lang, 'evaluate'))}</button>
            <button type="button" id="btnSample" class="btn btn-outline-secondary">${escapeHtml(tx(opts.lang, 'sample'))}</button>
            <button type="button" id="btnClear" class="btn btn-outline-secondary">${escapeHtml(tx(opts.lang, 'clear'))}</button>
            <button type="button" id="btnCopyCidr" class="btn btn-outline-secondary">${escapeHtml(tx(opts.lang, 'copy_cidr'))}</button>
            <button type="button" id="btnCopyHcl" class="btn btn-outline-secondary">${escapeHtml(tx(opts.lang, 'copy_hcl'))}</button>
          </div>
        </form>
        <div id="cidrResult" class="result" style="display:none" aria-live="polite">
          <div id="cidrError" class="err" style="display:none"></div>
          <div id="cidrOk">
            <table class="cidr-table">
              <tbody>
                <tr><th>${escapeHtml(tx(opts.lang, 'result_cidr_label'))}</th><td class="cidr-mono" id="outCidr"></td></tr>
                <tr><th>${escapeHtml(tx(opts.lang, 'result_hcl_label'))}</th><td class="cidr-mono" id="outHcl"></td></tr>
                <tr><th>${escapeHtml(tx(opts.lang, 'result_len_label'))}</th><td id="outLen"></td></tr>
                <tr><th>${escapeHtml(tx(opts.lang, 'result_range_label'))}</th><td id="outRange"></td></tr>
                <tr><th>${escapeHtml(tx(opts.lang, 'result_bits_label'))}</th><td id="outBits"></td></tr>
              </tbody>
            </table>
            <div id="netnumWrap" style="display:none">
              <div class="muted">${escapeHtml(tx(opts.lang, 'table_title'))}</div>
              <table class="net-table">
                <thead>
                  <tr>
                    <th>${escapeHtml(tx(opts.lang, 'table_col_netnum'))}</th>
                    <th>${escapeHtml(tx(opts.lang, 'table_col_cidr'))}</th>
                  </tr>
                </thead>
                <tbody id="netnumBody"></tbody>
              </table>
            </div>
          </div>
        </div>

        <details class="cidr-details" id="relatedPanel">
          <summary>${escapeHtml(tx(opts.lang, 'related_heading'))}</summary>
          <form id="hostForm" class="mt-3 mb-3">
            <div class="form-row-2">
              <div class="form-group">
                <label class="form-label" for="hostPrefix">${escapeHtml(tx(opts.lang, 'host_prefix_label'))}</label>
                <input id="hostPrefix" class="input-lg cidr-mono" type="text" autocomplete="off" spellcheck="false">
              </div>
              <div class="form-group">
                <label class="form-label" for="hostNum">${escapeHtml(tx(opts.lang, 'hostnum_label'))}</label>
                <input id="hostNum" class="input-lg" type="number" step="1">
              </div>
            </div>
            <div class="btn-row">
              <button type="submit" class="btn btn-outline-primary">${escapeHtml(tx(opts.lang, 'host_evaluate'))}</button>
              <button type="button" id="btnCopyHost" class="btn btn-outline-secondary">${escapeHtml(tx(opts.lang, 'copy_ip'))}</button>
            </div>
            <div id="hostResult" class="result" style="display:none" aria-live="polite">
              <div id="hostError" class="err" style="display:none"></div>
              <div id="hostOk"><strong>${escapeHtml(tx(opts.lang, 'host_result_label'))}:</strong> <span class="cidr-mono" id="outHost"></span></div>
            </div>
          </form>
          <form id="maskForm" class="mb-0">
            <div class="form-group">
              <label class="form-label" for="maskPrefix">${escapeHtml(tx(opts.lang, 'netmask_prefix_label'))}</label>
              <input id="maskPrefix" class="input-lg cidr-mono" type="text" autocomplete="off" spellcheck="false">
            </div>
            <div class="btn-row">
              <button type="submit" class="btn btn-outline-primary">${escapeHtml(tx(opts.lang, 'netmask_evaluate'))}</button>
              <button type="button" id="btnCopyMask" class="btn btn-outline-secondary">${escapeHtml(tx(opts.lang, 'copy_ip'))}</button>
            </div>
            <div id="maskResult" class="result" style="display:none" aria-live="polite">
              <div id="maskError" class="err" style="display:none"></div>
              <div id="maskOk"><strong>${escapeHtml(tx(opts.lang, 'netmask_result_label'))}:</strong> <span class="cidr-mono" id="outMask"></span></div>
            </div>
          </form>
        </details>
      </div>
    </div>

    ${renderToolIgSections({ lang: opts.lang, prefix: PREFIX, mode: 'formula', ruleItemCount: 4, howItemCount: 5 })}`;

	/** 权威出站引用（HashiCorp 三函数 + RFC 4632）。 */
	const referencesHtml = renderToolReferencesSection({
		lang: opts.lang,
		links: [
			{
				label: tx(opts.lang, 'ref_cidrsubnet_label'),
				href: 'https://developer.hashicorp.com/terraform/language/functions/cidrsubnet',
			},
			{
				label: tx(opts.lang, 'ref_cidrhost_label'),
				href: 'https://developer.hashicorp.com/terraform/language/functions/cidrhost',
			},
			{
				label: tx(opts.lang, 'ref_cidrnetmask_label'),
				href: 'https://developer.hashicorp.com/terraform/language/functions/cidrnetmask',
			},
			{
				label: tx(opts.lang, 'ref_rfc_label'),
				href: 'https://www.rfc-editor.org/rfc/rfc4632#section-3.1',
			},
		],
	});

	/** 非 YMYL：语义对齐声明，不是医疗/财务免责。 */
	const disclaimerHtml = `
    <p class="small text-muted mt-3 mb-0" id="disclaimer">${escapeHtml(tx(opts.lang, 'disclaimer'))}</p>`;

	/** 浏览器内 cidrsubnet / cidrhost / cidrnetmask 求值（进页自动跑官方 IPv4 样例）。 */
	const extraBodyHtml = `
  <script>
    (function () {
      /** 主表单。 */
      var form = document.getElementById('cidrForm');
      /** 父前缀输入。 */
      var prefixEl = document.getElementById('cidrPrefix');
      /** newbits 输入。 */
      var newbitsEl = document.getElementById('cidrNewbits');
      /** netnum 输入。 */
      var netnumEl = document.getElementById('cidrNetnum');
      /** 主结果容器。 */
      var resultEl = document.getElementById('cidrResult');
      /** 主错误行。 */
      var errEl = document.getElementById('cidrError');
      /** 主成功块。 */
      var okEl = document.getElementById('cidrOk');
      /** 子网 CIDR 输出。 */
      var outCidr = document.getElementById('outCidr');
      /** HCL 调用输出。 */
      var outHcl = document.getElementById('outHcl');
      /** 新前缀长度。 */
      var outLen = document.getElementById('outLen');
      /** 合法 netnum 范围。 */
      var outRange = document.getElementById('outRange');
      /** 位分解说明。 */
      var outBits = document.getElementById('outBits');
      /** netnum 全表容器。 */
      var netWrap = document.getElementById('netnumWrap');
      /** netnum 全表 tbody。 */
      var netBody = document.getElementById('netnumBody');
      /** cidrhost 表单。 */
      var hostForm = document.getElementById('hostForm');
      /** cidrhost 前缀。 */
      var hostPrefixEl = document.getElementById('hostPrefix');
      /** cidrhost hostnum。 */
      var hostNumEl = document.getElementById('hostNum');
      /** cidrhost 结果容器。 */
      var hostResult = document.getElementById('hostResult');
      /** cidrhost 错误。 */
      var hostError = document.getElementById('hostError');
      /** cidrhost 成功块。 */
      var hostOk = document.getElementById('hostOk');
      /** cidrhost 地址。 */
      var outHost = document.getElementById('outHost');
      /** cidrnetmask 表单。 */
      var maskForm = document.getElementById('maskForm');
      /** cidrnetmask 前缀。 */
      var maskPrefixEl = document.getElementById('maskPrefix');
      /** cidrnetmask 结果容器。 */
      var maskResult = document.getElementById('maskResult');
      /** cidrnetmask 错误。 */
      var maskError = document.getElementById('maskError');
      /** cidrnetmask 成功块。 */
      var maskOk = document.getElementById('maskOk');
      /** 点分掩码。 */
      var outMask = document.getElementById('outMask');
      /** 复制成功文案。 */
      var labelCopied = ${JSON.stringify(tx(opts.lang, 'copy_done'))};
      /** 复制 CIDR 按钮原文。 */
      var labelCopyCidr = ${JSON.stringify(tx(opts.lang, 'copy_cidr'))};
      /** 复制 HCL 按钮原文。 */
      var labelCopyHcl = ${JSON.stringify(tx(opts.lang, 'copy_hcl'))};
      /** 复制地址按钮原文。 */
      var labelCopyIp = ${JSON.stringify(tx(opts.lang, 'copy_ip'))};
      /** 空输入错误。 */
      var msgEmpty = ${JSON.stringify(tx(opts.lang, 'err_empty'))};
      /** 非法前缀错误。 */
      var msgPrefix = ${JSON.stringify(tx(opts.lang, 'err_prefix'))};
      /** newbits 非法错误。 */
      var msgNewbits = ${JSON.stringify(tx(opts.lang, 'err_newbits'))};
      /** netnum 越界模板。 */
      var msgNetnum = ${JSON.stringify(tx(opts.lang, 'err_netnum'))};
      /** hostnum 越界错误。 */
      var msgHostnum = ${JSON.stringify(tx(opts.lang, 'err_hostnum'))};
      /** cidrnetmask 遇 IPv6。 */
      var msgMaskV6 = ${JSON.stringify(tx(opts.lang, 'err_netmask_v6'))};
      /** 范围句模板。 */
      var rangeTpl = ${JSON.stringify(tx(opts.lang, 'range_tpl'))};
      /** 位分解句模板。 */
      var bitsTpl = ${JSON.stringify(tx(opts.lang, 'bits_tpl'))};

      /**
       * 解析 IPv4（八位组前导零按十进制，对齐 HashiCorp 历史行为）。
       * @param {string} s 点分地址
       * @returns {bigint}
       */
      function parseIPv4(s) {
        var parts = s.split('.');
        if (parts.length !== 4) throw new Error('v4');
        var n = 0n;
        for (var i = 0; i < 4; i++) {
          if (!/^[0-9]{1,3}$/.test(parts[i])) throw new Error('v4');
          var v = parseInt(parts[i], 10);
          if (v > 255) throw new Error('v4');
          n = (n << 8n) + BigInt(v);
        }
        return n;
      }

      /**
       * 解析 IPv6（支持单个 :: 压缩）。
       * @param {string} s 冒号地址
       * @returns {bigint}
       */
      function parseIPv6(s) {
        if ((s.match(/::/g) || []).length > 1) throw new Error('v6');
        var dbl = s.indexOf('::');
        var left;
        var right;
        if (dbl >= 0) {
          var head = s.slice(0, dbl);
          var tail = s.slice(dbl + 2);
          left = head ? head.split(':') : [];
          right = tail ? tail.split(':') : [];
        } else {
          left = s.split(':');
          right = [];
        }
        var need = 8 - left.length - right.length;
        if (dbl < 0 && need !== 0) throw new Error('v6');
        if (dbl >= 0 && need < 1) throw new Error('v6');
        var groups = left.concat(Array(Math.max(need, 0)).fill('0')).concat(right);
        if (groups.length !== 8) throw new Error('v6');
        var n = 0n;
        for (var g = 0; g < 8; g++) {
          if (!/^[0-9a-fA-F]{1,4}$/.test(groups[g])) throw new Error('v6');
          n = (n << 16n) + BigInt(parseInt(groups[g], 16));
        }
        return n;
      }

      /**
       * 解析 CIDR 前缀。
       * @param {string} raw 用户输入
       * @returns {{ ip: bigint, plen: number, bits: number, v6: boolean }}
       */
      function parsePrefix(raw) {
        var s = String(raw || '').trim();
        var slash = s.lastIndexOf('/');
        if (slash <= 0) throw new Error('cidr');
        var addr = s.slice(0, slash);
        var plen = Number(s.slice(slash + 1));
        if (!Number.isInteger(plen) || plen < 0) throw new Error('cidr');
        var v6 = addr.indexOf(':') >= 0;
        var bits = v6 ? 128 : 32;
        if (plen > bits) throw new Error('cidr');
        var ip = v6 ? parseIPv6(addr) : parseIPv4(addr);
        return { ip: ip, plen: plen, bits: bits, v6: v6 };
      }

      /**
       * 把地址规范成该前缀的网络地址。
       * @param {bigint} ip
       * @param {number} plen
       * @param {number} bits
       */
      function networkAddr(ip, plen, bits) {
        if (plen === 0) return 0n;
        if (plen >= bits) return ip;
        var host = BigInt(bits - plen);
        return ip & ~((1n << host) - 1n);
      }

      /**
       * 格式化 IPv4。
       * @param {bigint} n
       */
      function formatIPv4(n) {
        var a = [];
        var x = n;
        for (var i = 0; i < 4; i++) {
          a.unshift(String(Number(x & 255n)));
          x >>= 8n;
        }
        return a.join('.');
      }

      /**
       * 格式化 IPv6（最长连续 0 组压缩为 ::，至少 2 组）。
       * @param {bigint} n
       */
      function formatIPv6(n) {
        var g = [];
        var x = n;
        for (var i = 0; i < 8; i++) {
          g.unshift(Number(x & 0xffffn).toString(16));
          x >>= 16n;
        }
        var bestS = -1;
        var bestL = 0;
        var curS = -1;
        var curL = 0;
        for (var j = 0; j <= 8; j++) {
          if (j < 8 && g[j] === '0') {
            if (curS < 0) curS = j;
            curL += 1;
          } else {
            if (curL > bestL) {
              bestS = curS;
              bestL = curL;
            }
            curS = -1;
            curL = 0;
          }
        }
        if (bestL < 2) return g.join(':');
        var head = g.slice(0, bestS).join(':');
        var tail = g.slice(bestS + bestL).join(':');
        if (!head && !tail) return '::';
        if (!head) return '::' + tail;
        if (!tail) return head + '::';
        return head + '::' + tail;
      }

      /**
       * 求值 cidrsubnet。
       * @param {string} prefix
       * @param {number} newbits
       * @param {number} netnum
       */
      function cidrsubnet(prefix, newbits, netnum) {
        var p = parsePrefix(prefix);
        if (!Number.isInteger(newbits) || newbits < 0) throw new Error('newbits');
        if (!Number.isInteger(netnum) || netnum < 0) throw new Error('netnum');
        var newLen = p.plen + newbits;
        if (newLen > p.bits) throw new Error('newbits');
        var max = 1n << BigInt(newbits);
        if (BigInt(netnum) >= max) throw new Error('range');
        var net = networkAddr(p.ip, p.plen, p.bits);
        var hostAfter = p.bits - newLen;
        var result = net | (BigInt(netnum) << BigInt(hostAfter));
        var addr = p.v6 ? formatIPv6(result) : formatIPv4(result);
        return { cidr: addr + '/' + newLen, newLen: newLen, maxNet: Number(max - 1n), parentLen: p.plen, newbits: newbits, netnum: netnum, hostBits: hostAfter, v6: p.v6 };
      }

      /**
       * 求值 cidrhost。
       * @param {string} prefix
       * @param {number} hostnum
       */
      function cidrhost(prefix, hostnum) {
        var p = parsePrefix(prefix);
        if (!Number.isInteger(hostnum)) throw new Error('host');
        var space = 1n << BigInt(p.bits - p.plen);
        var h = BigInt(hostnum);
        if (h < 0n) h = space + h;
        if (h < 0n || h >= space) throw new Error('host');
        var ip = networkAddr(p.ip, p.plen, p.bits) | h;
        return p.v6 ? formatIPv6(ip) : formatIPv4(ip);
      }

      /**
       * 求值 cidrnetmask（仅 IPv4）。
       * @param {string} prefix
       */
      function cidrnetmask(prefix) {
        var p = parsePrefix(prefix);
        if (p.v6) throw new Error('v6mask');
        var host = BigInt(32 - p.plen);
        var mask = p.plen === 0 ? 0n : (~((1n << host) - 1n)) & 0xffffffffn;
        return formatIPv4(mask);
      }

      /**
       * 模板替换 {name}。
       * extraBodyHtml 是 TypeScript 模板字符串，必须写成 \\w，否则 \\w 会被吃掉变成字面 w，占位符无法替换。
       * @param {string} tpl
       * @param {Record<string, string|number>} map
       */
      function fill(tpl, map) {
        return tpl.replace(/{(\\w+)}/g, function (_, k) {
          return map[k] == null ? '' : String(map[k]);
        });
      }

      /**
       * 显示主表单错误并清掉旧 CIDR。
       * @param {string} msg
       */
      function showMainError(msg) {
        resultEl.style.display = 'block';
        errEl.style.display = 'block';
        errEl.textContent = msg;
        okEl.style.display = 'none';
        outCidr.textContent = '';
        outHcl.textContent = '';
      }

      /**
       * 运行主 cidrsubnet 求值。
       */
      function runMain() {
        var prefix = prefixEl.value.trim();
        var nbRaw = newbitsEl.value.trim();
        var nnRaw = netnumEl.value.trim();
        if (!prefix || !nbRaw || !nnRaw) {
          showMainError(msgEmpty);
          return;
        }
        var nb = Number(nbRaw);
        var nn = Number(nnRaw);
        try {
          var got = cidrsubnet(prefix, nb, nn);
          resultEl.style.display = 'block';
          errEl.style.display = 'none';
          okEl.style.display = 'block';
          outCidr.textContent = got.cidr;
          outHcl.textContent = 'cidrsubnet("' + prefix.replace(/"/g, '') + '", ' + nb + ', ' + nn + ')';
          outLen.textContent = String(got.newLen);
          outRange.textContent = fill(rangeTpl, { max: got.maxNet });
          outBits.textContent = fill(bitsTpl, { old: got.parentLen, nb: got.newbits, neu: got.newLen, nn: got.netnum, hb: got.hostBits });
          if (got.newbits <= 4) {
            netWrap.style.display = 'block';
            netBody.innerHTML = '';
            for (var i = 0; i < (1 << got.newbits); i++) {
              var row = cidrsubnet(prefix, nb, i);
              var tr = document.createElement('tr');
              tr.innerHTML = '<td>' + i + '</td><td class="cidr-mono">' + row.cidr + '</td>';
              netBody.appendChild(tr);
            }
          } else {
            netWrap.style.display = 'none';
            netBody.innerHTML = '';
          }
        } catch (e) {
          if (e && e.message === 'range') {
            var max = Number((1n << BigInt(nb)) - 1n);
            showMainError(fill(msgNetnum, { nb: nb, max: max, nn: nn }));
          } else if (e && e.message === 'newbits') {
            showMainError(msgNewbits);
          } else {
            showMainError(msgPrefix);
          }
        }
      }

      /**
       * 运行 cidrhost。
       */
      function runHost() {
        hostResult.style.display = 'block';
        try {
          var ip = cidrhost(hostPrefixEl.value, Number(hostNumEl.value));
          hostError.style.display = 'none';
          hostOk.style.display = 'block';
          outHost.textContent = ip;
        } catch (e) {
          hostOk.style.display = 'none';
          outHost.textContent = '';
          hostError.style.display = 'block';
          hostError.textContent = e && e.message === 'host' ? msgHostnum : msgPrefix;
        }
      }

      /**
       * 运行 cidrnetmask。
       */
      function runMask() {
        maskResult.style.display = 'block';
        try {
          var mask = cidrnetmask(maskPrefixEl.value);
          maskError.style.display = 'none';
          maskOk.style.display = 'block';
          outMask.textContent = mask;
        } catch (e) {
          maskOk.style.display = 'none';
          outMask.textContent = '';
          maskError.style.display = 'block';
          maskError.textContent = e && e.message === 'v6mask' ? msgMaskV6 : msgPrefix;
        }
      }

      /**
       * 复制文本并短暂改按钮文案。
       * @param {HTMLButtonElement} btn
       * @param {string} restore
       * @param {string} value
       */
      function copyText(btn, restore, value) {
        if (!value) return;
        navigator.clipboard.writeText(value).then(function () {
          btn.textContent = labelCopied;
          setTimeout(function () { btn.textContent = restore; }, 1200);
        });
      }

      /**
       * 载入 HashiCorp 官方 IPv4 样例并求值。
       */
      function loadSample() {
        prefixEl.value = '10.1.2.0/24';
        newbitsEl.value = '4';
        netnumEl.value = '15';
        runMain();
        hostPrefixEl.value = '10.1.2.240/28';
        hostNumEl.value = '1';
        maskPrefixEl.value = '10.1.2.240/28';
      }

      form.addEventListener('submit', function (e) {
        e.preventDefault();
        runMain();
      });
      hostForm.addEventListener('submit', function (e) {
        e.preventDefault();
        runHost();
      });
      maskForm.addEventListener('submit', function (e) {
        e.preventDefault();
        runMask();
      });
      document.getElementById('btnSample').addEventListener('click', loadSample);
      document.getElementById('btnClear').addEventListener('click', function () {
        prefixEl.value = '';
        newbitsEl.value = '';
        netnumEl.value = '';
        resultEl.style.display = 'none';
        outCidr.textContent = '';
        outHcl.textContent = '';
      });
      document.getElementById('btnCopyCidr').addEventListener('click', function () {
        copyText(this, labelCopyCidr, outCidr.textContent);
      });
      document.getElementById('btnCopyHcl').addEventListener('click', function () {
        copyText(this, labelCopyHcl, outHcl.textContent);
      });
      document.getElementById('btnCopyHost').addEventListener('click', function () {
        copyText(this, labelCopyIp, outHost.textContent);
      });
      document.getElementById('btnCopyMask').addEventListener('click', function () {
        copyText(this, labelCopyIp, outMask.textContent);
      });
      loadSample();
    })();
  </script>`;

	/** catalog 元数据（FAQ / related / updatedAt）。 */
	const toolMeta = getToolBySlug('terraform-cidrsubnet');
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
