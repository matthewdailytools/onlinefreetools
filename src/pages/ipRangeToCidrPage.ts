/**
 * IP range → CIDR 汇总工具页。
 * slug: ip-range-to-cidr（见 work-tasks/ip-range-to-cidr/02-tool-info.md）。
 * 首屏：多行起止范围 → 覆盖前缀列表；进页自动跑对齐样例。
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
const PREFIX = 'tool_ip_range_to_cidr';

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
 * 渲染 ip-range-to-cidr 工具页 HTML。
 * @param opts.lang 当前语言
 * @param opts.defaultLang 站点默认语言
 * @param opts.enabledLangs 启用语言列表
 */
export const renderIpRangeToCidrPage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	/** 规范路径（无语言前缀）。 */
	const toolPath = '/tools/ip-range-to-cidr';
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
			currentSlug: 'ip-range-to-cidr',
			currentAnchor: '#ip-range-to-cidr',
		}),
		id: 'toolNav',
	});

	/** 页脚 HTML。 */
	const footerHtml = renderFooter({ lang: opts.lang });

	/** 本页局部样式：表单、结果区、等宽地址。 */
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
    #outCidrs { white-space:pre-wrap; word-break:break-all; margin:0; min-height:3rem }
    #rangeInput { min-height:7rem; font-family:ui-monospace,Menlo,Consolas,monospace; font-size:.92rem }
  </style>`;

	/** 主内容：H1、范围表单、How/Formula。 */
	const contentHtml = `
    <div id="ip-range-to-cidr" class="mb-3">
      <h1 class="h4 mb-1">${escapeHtml(tx(opts.lang, 'title'))}</h1>
      <p class="text-muted mb-0">${escapeHtml(description)}</p>
    </div>

    <div class="card tool-card">
      <div class="card-body">
        <form id="rangeForm">
          <div class="form-group">
            <label class="form-label" for="rangeInput">${escapeHtml(tx(opts.lang, 'input_label'))}</label>
            <textarea id="rangeInput" class="input-lg" rows="5" autocomplete="off" spellcheck="false" placeholder="${escapeHtml(tx(opts.lang, 'input_ph'))}"></textarea>
          </div>
          <div class="btn-row">
            <button type="submit" class="btn btn-primary">${escapeHtml(tx(opts.lang, 'convert'))}</button>
            <button type="button" id="btnSample" class="btn btn-outline-secondary">${escapeHtml(tx(opts.lang, 'sample'))}</button>
            <button type="button" id="btnClear" class="btn btn-outline-secondary">${escapeHtml(tx(opts.lang, 'clear'))}</button>
            <button type="button" id="btnCopy" class="btn btn-outline-secondary">${escapeHtml(tx(opts.lang, 'copy'))}</button>
          </div>
        </form>
        <div id="rangeResult" class="result" style="display:none" aria-live="polite">
          <div id="rangeError" class="err" style="display:none"></div>
          <div id="rangeOk">
            <div id="rangeHint" class="hint" style="display:none"></div>
            <div class="muted" id="outMeta"></div>
            <div class="form-label mt-2">${escapeHtml(tx(opts.lang, 'result_label'))}</div>
            <pre class="cidr-mono" id="outCidrs"></pre>
          </div>
        </div>
      </div>
    </div>

    ${renderToolIgSections({ lang: opts.lang, prefix: PREFIX, mode: 'formula', ruleItemCount: 4, howItemCount: 4 })}`;

	/** 权威出站引用（RFC 4632 / RFC 4291）。 */
	const referencesHtml = renderToolReferencesSection({
		lang: opts.lang,
		links: [
			{
				label: tx(opts.lang, 'ref_rfc4632_label'),
				href: 'https://www.rfc-editor.org/rfc/rfc4632#section-3.1',
			},
			{
				label: tx(opts.lang, 'ref_rfc4291_label'),
				href: 'https://www.rfc-editor.org/rfc/rfc4291',
			},
		],
	});

	/** 非 YMYL：覆盖区间声明，非医疗/财务免责。 */
	const disclaimerHtml = `
    <p class="small text-muted mt-3 mb-0" id="disclaimer">${escapeHtml(tx(opts.lang, 'disclaimer'))}</p>`;

	/**
	 * 浏览器内起止→CIDR（进页自动跑对齐样例）。
	 * 注意：模板字符串里正则须写 \\w / \\d，否则会被吃掉。
	 */
	const extraBodyHtml = `
  <script>
    (function () {
      /** 主表单。 */
      var form = document.getElementById('rangeForm');
      /** 多行范围输入。 */
      var inputEl = document.getElementById('rangeInput');
      /** 结果外层。 */
      var resultEl = document.getElementById('rangeResult');
      /** 错误文案节点。 */
      var errEl = document.getElementById('rangeError');
      /** 成功区。 */
      var okEl = document.getElementById('rangeOk');
      /** 乱序交换提示。 */
      var hintEl = document.getElementById('rangeHint');
      /** 摘要行（条数·族）。 */
      var outMeta = document.getElementById('outMeta');
      /** CIDR 列表输出。 */
      var outCidrs = document.getElementById('outCidrs');

      /** 文案：交换提示。 */
      var labelSwap = ${JSON.stringify(tx(opts.lang, 'swap_hint'))};
      /** 文案：空输入。 */
      var labelEmpty = ${JSON.stringify(tx(opts.lang, 'err_empty'))};
      /** 文案：解析失败。 */
      var labelParse = ${JSON.stringify(tx(opts.lang, 'err_parse'))};
      /** 文案：混族。 */
      var labelMixed = ${JSON.stringify(tx(opts.lang, 'err_mixed'))};
      /** 文案：前缀过多。 */
      var labelLimit = ${JSON.stringify(tx(opts.lang, 'err_limit'))};
      /** 文案：摘要模板。 */
      var metaTpl = ${JSON.stringify(tx(opts.lang, 'meta_tpl'))};
      /** 文案：复制成功。 */
      var labelCopied = ${JSON.stringify(tx(opts.lang, 'copy_done'))};
      /** 文案：复制按钮默认。 */
      var labelCopy = ${JSON.stringify(tx(opts.lang, 'copy'))};
      /** 单次转换允许的最大前缀条数（防卡死）。 */
      var MAX_PREFIXES = 4096;

      /**
       * 简单模板替换（extraBodyHtml 内勿用单反斜杠 \\w）。
       * @param {string} tpl
       * @param {Record<string, string|number>} map
       */
      function fill(tpl, map) {
        return String(tpl).replace(/\\{(\\w+)\\}/g, function (_, k) {
          return map[k] != null ? String(map[k]) : '';
        });
      }

      /**
       * 解析 IPv4 点分地址为 BigInt（八位组前导零按十进制）。
       * @param {string} s
       * @returns {bigint}
       */
      function parseIPv4(s) {
        var parts = s.split('.');
        if (parts.length !== 4) throw new Error('v4');
        var n = 0n;
        for (var i = 0; i < 4; i++) {
          if (!/^\\d{1,3}$/.test(parts[i])) throw new Error('v4');
          var o = Number(parts[i]);
          if (!Number.isInteger(o) || o < 0 || o > 255) throw new Error('v4');
          n = (n << 8n) + BigInt(o);
        }
        return n;
      }

      /**
       * 展开 IPv6 压缩写法为 8 组十六进制。
       * @param {string} s
       * @returns {string[]}
       */
      function expandIPv6Groups(s) {
        if ((s.match(/::/g) || []).length > 1) throw new Error('v6');
        var dbl = s.indexOf('::');
        var left;
        var right;
        if (dbl >= 0) {
          left = s.slice(0, dbl).split(':').filter(Boolean);
          right = s.slice(dbl + 2).split(':').filter(Boolean);
          var miss = 8 - left.length - right.length;
          if (miss < 0) throw new Error('v6');
          var mid = [];
          for (var i = 0; i < miss; i++) mid.push('0');
          return left.concat(mid, right);
        }
        var g = s.split(':');
        if (g.length !== 8) throw new Error('v6');
        return g;
      }

      /**
       * 解析 IPv6 地址为 BigInt。
       * @param {string} s
       * @returns {bigint}
       */
      function parseIPv6(s) {
        var groups = expandIPv6Groups(s);
        var n = 0n;
        for (var i = 0; i < 8; i++) {
          if (!/^[0-9a-fA-F]{1,4}$/.test(groups[i])) throw new Error('v6');
          n = (n << 16n) + BigInt(parseInt(groups[i], 16));
        }
        return n;
      }

      /**
       * 识别并解析单个 IP；返回 { family, value }。
       * @param {string} raw
       */
      function parseIp(raw) {
        var s = String(raw || '').trim();
        if (!s) throw new Error('empty');
        if (s.indexOf(':') >= 0) return { family: 'ipv6', value: parseIPv6(s) };
        return { family: 'ipv4', value: parseIPv4(s) };
      }

      /**
       * 将 BigInt 格式化为 IPv4 点分。
       * @param {bigint} n
       */
      function formatIPv4(n) {
        var parts = [];
        var x = n;
        for (var i = 0; i < 4; i++) {
          parts.unshift(String(Number(x & 255n)));
          x >>= 8n;
        }
        return parts.join('.');
      }

      /**
       * 将 BigInt 格式化为压缩较少的 IPv6（每组去前导零；不二次压缩 ::）。
       * @param {bigint} n
       */
      function formatIPv6(n) {
        var parts = [];
        var x = n;
        for (var i = 0; i < 8; i++) {
          parts.unshift((Number(x & 0xffffn)).toString(16));
          x >>= 16n;
        }
        return parts.join(':');
      }

      /**
       * 按族格式化地址。
       * @param {bigint} n
       * @param {string} family
       */
      function formatIp(n, family) {
        return family === 'ipv6' ? formatIPv6(n) : formatIPv4(n);
      }

      /**
       * 统计整数末尾连续 0 比特数（对齐用）。
       * @param {bigint} n
       * @param {number} bits 族位宽 32/128
       */
      function trailingZeros(n, bits) {
        if (n === 0n) return bits;
        var z = 0;
        var x = n;
        while ((x & 1n) === 0n && z < bits) {
          z++;
          x >>= 1n;
        }
        return z;
      }

      /**
       * 闭区间 [start,end] → 覆盖 CIDR 列表（贪心对齐）。
       * @param {bigint} start
       * @param {bigint} end
       * @param {string} family
       * @param {string[]} bucket 追加目标
       */
      function rangeToCidrs(start, end, family, bucket) {
        var bits = family === 'ipv6' ? 128 : 32;
        var cur = start;
        while (cur <= end) {
          if (bucket.length >= MAX_PREFIXES) throw new Error('limit');
          var tz = trailingZeros(cur, bits);
          var rem = end - cur + 1n;
          var k = 0;
          while (k < tz && (1n << BigInt(k + 1)) <= rem) k++;
          var prefixLen = bits - k;
          bucket.push(formatIp(cur, family) + '/' + prefixLen);
          cur += 1n << BigInt(k);
        }
      }

      /**
       * 解析一行：单 IP 或 start-end / start - end。
       * @param {string} line
       * @returns {{ start: bigint, end: bigint, family: string, swapped: boolean }}
       */
      function parseLine(line) {
        var s = String(line || '').trim();
        if (!s) throw new Error('empty');
        var m = s.match(/^(.+?)\\s*-\\s*(.+)$/);
        var a;
        var b;
        if (m) {
          a = parseIp(m[1]);
          b = parseIp(m[2]);
        } else {
          a = parseIp(s);
          b = a;
        }
        if (a.family !== b.family) throw new Error('mixed');
        var swapped = false;
        var start = a.value;
        var end = b.value;
        if (start > end) {
          var t = start;
          start = end;
          end = t;
          swapped = true;
        }
        return { start: start, end: end, family: a.family, swapped: swapped };
      }

      /**
       * 显示错误并隐藏成功区。
       * @param {string} msg
       */
      function showError(msg) {
        resultEl.style.display = 'block';
        errEl.style.display = 'block';
        errEl.textContent = msg;
        okEl.style.display = 'none';
      }

      /**
       * 运行转换：读 textarea → 写 CIDR 列表。
       */
      function runConvert() {
        var raw = String(inputEl.value || '');
        var lines = raw.split(/\\r?\\n/).map(function (l) { return l.trim(); }).filter(Boolean);
        if (!lines.length) {
          showError(labelEmpty);
          return;
        }
        var cidrs = [];
        var family = null;
        var anySwap = false;
        try {
          for (var i = 0; i < lines.length; i++) {
            var r = parseLine(lines[i]);
            if (family && r.family !== family) throw new Error('mixed');
            family = r.family;
            if (r.swapped) anySwap = true;
            rangeToCidrs(r.start, r.end, r.family, cidrs);
          }
        } catch (e) {
          var code = e && e.message;
          if (code === 'limit') showError(labelLimit);
          else if (code === 'mixed') showError(labelMixed);
          else showError(labelParse);
          return;
        }
        resultEl.style.display = 'block';
        errEl.style.display = 'none';
        okEl.style.display = 'block';
        hintEl.style.display = anySwap ? 'block' : 'none';
        hintEl.textContent = anySwap ? labelSwap : '';
        outMeta.textContent = fill(metaTpl, {
          n: cidrs.length,
          family: family === 'ipv6' ? 'IPv6' : 'IPv4',
        });
        outCidrs.textContent = cidrs.join('\\n');
      }

      /**
       * 载入对齐样例并转换。
       */
      function loadSample() {
        inputEl.value = '192.168.1.0 - 192.168.1.255';
        runConvert();
      }

      /**
       * 复制结果列表。
       * @param {HTMLElement} btn
       */
      function copyCidrs(btn) {
        var value = outCidrs.textContent || '';
        if (!value) return;
        navigator.clipboard.writeText(value).then(function () {
          btn.textContent = labelCopied;
          setTimeout(function () { btn.textContent = labelCopy; }, 1200);
        });
      }

      form.addEventListener('submit', function (e) {
        e.preventDefault();
        runConvert();
      });
      document.getElementById('btnSample').addEventListener('click', loadSample);
      document.getElementById('btnClear').addEventListener('click', function () {
        inputEl.value = '';
        resultEl.style.display = 'none';
        outCidrs.textContent = '';
      });
      document.getElementById('btnCopy').addEventListener('click', function () {
        copyCidrs(this);
      });
      loadSample();
    })();
  </script>`;

	/** catalog 元数据（FAQ / related / updatedAt）。 */
	const toolMeta = getToolBySlug('ip-range-to-cidr');
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
