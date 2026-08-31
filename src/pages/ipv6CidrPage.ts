/**
 * IPv6 CIDR 计算器页。
 * slug: ipv6-cidr（见 work-tasks/ipv6-cidr/02-tool-info.md）。
 * 首屏：IPv6 CIDR → 网络/末地址/压缩展开；进页自动跑 /64 样例。
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
const PREFIX = 'tool_ipv6_cidr';

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
 * 渲染 ipv6-cidr 工具页 HTML。
 * @param opts.lang 当前语言
 * @param opts.defaultLang 站点默认语言
 * @param opts.enabledLangs 启用语言列表
 */
export const renderIpv6CidrPage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	/** 规范路径（无语言前缀）。 */
	const toolPath = '/tools/ipv6-cidr';
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
			currentSlug: 'ipv6-cidr',
			currentAnchor: '#ipv6-cidr',
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
    .result .note { color:#0c5460; font-size:.9rem; margin-top:.5rem }
    .cidr-mono { font-family:ui-monospace,Menlo,Consolas,monospace; font-size:.92rem }
    .field-grid { display:grid; grid-template-columns:minmax(9rem,auto) 1fr; gap:.35rem .75rem; align-items:baseline }
    .field-grid .k { color:#6c757d; font-size:.9rem }
    #ipv6Input { font-family:ui-monospace,Menlo,Consolas,monospace; font-size:.92rem }
  </style>`;

	/** 主内容：H1、表单、How/Formula。 */
	const contentHtml = `
    <div id="ipv6-cidr" class="mb-3">
      <h1 class="h4 mb-1">${escapeHtml(tx(opts.lang, 'title'))}</h1>
      <p class="text-muted mb-0">${escapeHtml(description)}</p>
    </div>

    <div class="card tool-card">
      <div class="card-body">
        <form id="ipv6Form">
          <div class="form-group">
            <label class="form-label" for="ipv6Input">${escapeHtml(tx(opts.lang, 'input_label'))}</label>
            <input id="ipv6Input" class="input-lg" type="text" autocomplete="off" spellcheck="false" placeholder="${escapeHtml(tx(opts.lang, 'input_ph'))}" />
          </div>
          <div class="btn-row">
            <button type="submit" class="btn btn-primary">${escapeHtml(tx(opts.lang, 'calculate'))}</button>
            <button type="button" id="btnSample" class="btn btn-outline-secondary">${escapeHtml(tx(opts.lang, 'sample'))}</button>
            <button type="button" id="btnClear" class="btn btn-outline-secondary">${escapeHtml(tx(opts.lang, 'clear'))}</button>
            <button type="button" id="btnCopy" class="btn btn-outline-secondary">${escapeHtml(tx(opts.lang, 'copy'))}</button>
          </div>
        </form>
        <div id="ipv6Result" class="result" style="display:none" aria-live="polite">
          <div id="ipv6Error" class="err" style="display:none"></div>
          <div id="ipv6Ok">
            <div id="ipv6Hint" class="hint" style="display:none"></div>
            <div class="form-label">${escapeHtml(tx(opts.lang, 'result_label'))}</div>
            <div id="outFields" class="field-grid cidr-mono"></div>
            <div id="ipv6Note" class="note" style="display:none"></div>
          </div>
        </div>
      </div>
    </div>

    ${renderToolIgSections({ lang: opts.lang, prefix: PREFIX, mode: 'formula', ruleItemCount: 4, howItemCount: 5 })}`;

	/** 权威出站引用（RFC 4291 / 5952 / 6164）。 */
	const referencesHtml = renderToolReferencesSection({
		lang: opts.lang,
		links: [
			{
				label: tx(opts.lang, 'ref_rfc4291_label'),
				href: 'https://www.rfc-editor.org/rfc/rfc4291',
			},
			{
				label: tx(opts.lang, 'ref_rfc5952_label'),
				href: 'https://www.rfc-editor.org/rfc/rfc5952',
			},
			{
				label: tx(opts.lang, 'ref_rfc6164_label'),
				href: 'https://www.rfc-editor.org/rfc/rfc6164',
			},
		],
	});

	/** 非 YMYL：算术说明，非路由策略建议。 */
	const disclaimerHtml = `
    <p class="small text-muted mt-3 mb-0" id="disclaimer">${escapeHtml(tx(opts.lang, 'disclaimer'))}</p>`;

	/**
	 * 浏览器内 IPv6 CIDR 展开（进页自动跑 /64 样例）。
	 * 注意：模板字符串里正则须写 \\w / \\d，否则会被吃掉。
	 */
	const extraBodyHtml = `
  <script>
    (function () {
      /** 主表单。 */
      var form = document.getElementById('ipv6Form');
      /** CIDR 输入。 */
      var inputEl = document.getElementById('ipv6Input');
      /** 结果容器。 */
      var resultEl = document.getElementById('ipv6Result');
      /** 错误区。 */
      var errEl = document.getElementById('ipv6Error');
      /** 成功区。 */
      var okEl = document.getElementById('ipv6Ok');
      /** nibble 提示。 */
      var hintEl = document.getElementById('ipv6Hint');
      /** 字段网格。 */
      var fieldsEl = document.getElementById('outFields');
      /** /64 /127 /128 短注。 */
      var noteEl = document.getElementById('ipv6Note');
      /** 最近一次可复制摘要。 */
      var lastCopy = '';

      var labelCopied = ${JSON.stringify(tx(opts.lang, 'copy_done'))};
      var labelCopy = ${JSON.stringify(tx(opts.lang, 'copy'))};
      var lblNetwork = ${JSON.stringify(tx(opts.lang, 'lbl_network'))};
      var lblNetworkExp = ${JSON.stringify(tx(opts.lang, 'lbl_network_exp'))};
      var lblLast = ${JSON.stringify(tx(opts.lang, 'lbl_last'))};
      var lblLastExp = ${JSON.stringify(tx(opts.lang, 'lbl_last_exp'))};
      var lblPrefix = ${JSON.stringify(tx(opts.lang, 'lbl_prefix'))};
      var lblCount = ${JSON.stringify(tx(opts.lang, 'lbl_count'))};
      var lblNibble = ${JSON.stringify(tx(opts.lang, 'lbl_nibble'))};
      var nibbleYes = ${JSON.stringify(tx(opts.lang, 'nibble_yes'))};
      var nibbleNo = ${JSON.stringify(tx(opts.lang, 'nibble_no'))};
      var note64 = ${JSON.stringify(tx(opts.lang, 'note_64'))};
      var note127 = ${JSON.stringify(tx(opts.lang, 'note_127'))};
      var note128 = ${JSON.stringify(tx(opts.lang, 'note_128'))};
      var errEmpty = ${JSON.stringify(tx(opts.lang, 'err_empty'))};
      var errParse = ${JSON.stringify(tx(opts.lang, 'err_parse'))};
      var errPrefix = ${JSON.stringify(tx(opts.lang, 'err_prefix'))};
      var errIpv4 = ${JSON.stringify(tx(opts.lang, 'err_ipv4'))};

      /**
       * 转义写入 innerHTML 的文本。
       * @param {string} s 原文
       */
      function esc(s) {
        return String(s)
          .replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')
          .replace(/"/g, '&quot;');
      }

      /**
       * 把 8 个 16-bit 组解析成 BigInt。
       * @param {string[]} groups 长度须为 8
       */
      function groupsToBig(groups) {
        var n = 0n;
        var i;
        for (i = 0; i < 8; i++) {
          var g = groups[i] || '0';
          if (!/^[0-9a-f]{1,4}$/i.test(g)) return null;
          n = (n << 16n) + BigInt(parseInt(g, 16));
        }
        return n;
      }

      /**
       * 解析 IPv6 地址文本（不含前缀）为 128-bit BigInt。
       * @param {string} addr 压缩或展开写法
       */
      function parseAddr(addr) {
        var raw = String(addr || '').trim().toLowerCase();
        if (!raw) return null;
        if (/^\\d+\\.\\d+\\.\\d+\\.\\d+/.test(raw) || raw.indexOf('.') !== -1) {
          return { err: 'ipv4' };
        }
        if ((raw.match(/::/g) || []).length > 1) return null;
        var sides = raw.split('::');
        var left;
        var right;
        var miss;
        var groups;
        var split = function (s) {
          if (!s) return [];
          return s.split(':');
        };
        if (sides.length === 2) {
          left = split(sides[0]);
          right = split(sides[1]);
          miss = 8 - left.length - right.length;
          if (miss < 0) return null;
          groups = left.concat(Array(miss).fill('0')).concat(right);
        } else {
          groups = split(raw);
          if (groups.length !== 8) return null;
        }
        if (groups.length !== 8) return null;
        var n = groupsToBig(groups);
        if (n === null) return null;
        return { n: n };
      }

      /**
       * 展开为 8×4 位十六进制。
       * @param {bigint} n 128-bit 地址
       */
      function expand(n) {
        var parts = [];
        var i;
        for (i = 7; i >= 0; i--) {
          var g = Number((n >> BigInt(i * 16)) & 0xffffn);
          parts.push(('0000' + g.toString(16)).slice(-4));
        }
        return parts.join(':');
      }

      /**
       * RFC 5952 压缩（最长零段、小写、单组 0 不压）。
       * @param {bigint} n 128-bit 地址
       */
      function compress(n) {
        var parts = [];
        var i;
        for (i = 7; i >= 0; i--) {
          parts.push(Number((n >> BigInt(i * 16)) & 0xffffn).toString(16));
        }
        var bestStart = -1;
        var bestLen = 0;
        var curStart = -1;
        var curLen = 0;
        for (i = 0; i <= 8; i++) {
          if (i < 8 && parts[i] === '0') {
            if (curStart < 0) curStart = i;
            curLen += 1;
          } else {
            if (curLen > bestLen) {
              bestLen = curLen;
              bestStart = curStart;
            }
            curStart = -1;
            curLen = 0;
          }
        }
        if (bestLen < 2) return parts.join(':');
        var head = parts.slice(0, bestStart).join(':');
        var tail = parts.slice(bestStart + bestLen).join(':');
        return head + '::' + tail;
      }

      /**
       * 前缀掩码（高 prefix 位置 1）。
       * @param {number} prefix 0–128
       */
      function maskBits(prefix) {
        if (prefix <= 0) return 0n;
        if (prefix >= 128) return (1n << 128n) - 1n;
        return ((1n << BigInt(prefix)) - 1n) << BigInt(128 - prefix);
      }

      /**
       * 地址数量展示：/128 → 1；否则 2^k。
       * @param {number} prefix 前缀长度
       */
      function countLabel(prefix) {
        var k = 128 - prefix;
        if (k === 0) return '1';
        return '2^' + k;
      }

      /**
       * 渲染一行字段。
       * @param {string} k 标签
       * @param {string} v 值
       */
      function row(k, v) {
        return '<div class="k">' + esc(k) + '</div><div>' + esc(v) + '</div>';
      }

      /**
       * 显示错误并隐藏成功区。
       * @param {string} msg 错误文案
       */
      function showErr(msg) {
        resultEl.style.display = 'block';
        errEl.style.display = 'block';
        errEl.textContent = msg;
        okEl.style.display = 'none';
        lastCopy = '';
      }

      /**
       * 解析并计算当前输入。
       */
      function runCalc() {
        var raw = (inputEl.value || '').trim();
        if (!raw) {
          showErr(errEmpty);
          return;
        }
        var slash = raw.lastIndexOf('/');
        var addrPart = slash === -1 ? raw : raw.slice(0, slash);
        var prefixStr = slash === -1 ? '128' : raw.slice(slash + 1).trim();
        if (!/^\\d+$/.test(prefixStr)) {
          showErr(errPrefix);
          return;
        }
        var prefix = parseInt(prefixStr, 10);
        if (prefix < 0 || prefix > 128) {
          showErr(errPrefix);
          return;
        }
        var parsed = parseAddr(addrPart);
        if (parsed && parsed.err === 'ipv4') {
          showErr(errIpv4);
          return;
        }
        if (!parsed || parsed.n === undefined) {
          showErr(errParse);
          return;
        }
        var mask = maskBits(prefix);
        var network = parsed.n & mask;
        var last = network | (~mask & ((1n << 128n) - 1n));
        var aligned = prefix % 4 === 0;
        var netC = compress(network);
        var netE = expand(network);
        var lastC = compress(last);
        var lastE = expand(last);
        var count = countLabel(prefix);
        errEl.style.display = 'none';
        okEl.style.display = 'block';
        resultEl.style.display = 'block';
        hintEl.style.display = 'block';
        hintEl.textContent = aligned ? nibbleYes : nibbleNo;
        fieldsEl.innerHTML =
          row(lblNetwork, netC) +
          row(lblNetworkExp, netE) +
          row(lblLast, lastC) +
          row(lblLastExp, lastE) +
          row(lblPrefix, '/' + prefix) +
          row(lblCount, count) +
          row(lblNibble, aligned ? 'yes' : 'no');
        var note = '';
        if (prefix === 64) note = note64;
        else if (prefix === 127) note = note127;
        else if (prefix === 128) note = note128;
        noteEl.style.display = note ? 'block' : 'none';
        noteEl.textContent = note;
        lastCopy =
          netC +
          '/' +
          prefix +
          '\\n' +
          netE +
          '\\n' +
          lastC +
          '\\n' +
          lastE +
          '\\n' +
          count;
      }

      /**
       * 填入默认样例并计算（与 H2 Example 一致）。
       */
      function loadSample() {
        inputEl.value = '2001:db8:1::/64';
        runCalc();
      }

      /**
       * 复制结果摘要。
       * @param {HTMLButtonElement} btn 复制按钮
       */
      function copyFields(btn) {
        if (!lastCopy) return;
        var done = function () {
          btn.textContent = labelCopied;
          setTimeout(function () {
            btn.textContent = labelCopy;
          }, 1200);
        };
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(lastCopy).then(done).catch(function () {});
        }
      }

      form.addEventListener('submit', function (e) {
        e.preventDefault();
        runCalc();
      });
      document.getElementById('btnSample').addEventListener('click', loadSample);
      document.getElementById('btnClear').addEventListener('click', function () {
        inputEl.value = '';
        resultEl.style.display = 'none';
        fieldsEl.innerHTML = '';
        lastCopy = '';
      });
      document.getElementById('btnCopy').addEventListener('click', function () {
        copyFields(this);
      });
      loadSample();
    })();
  </script>`;

	/** catalog 元数据（FAQ / related / updatedAt）。 */
	const toolMeta = getToolBySlug('ipv6-cidr');
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
