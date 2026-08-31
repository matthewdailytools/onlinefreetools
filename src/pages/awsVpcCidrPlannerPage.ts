/**
 * AWS VPC CIDR 规划器页。
 * slug: aws-vpc-cidr-planner（见 work-tasks/aws-vpc-cidr-planner/02-tool-info.md）。
 * 首屏：VPC CIDR + AZ 数 → 公有/私有子网表；进页自动跑 10.0.0.0/16 × 3 AZ。
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
const PREFIX = 'tool_aws_vpc_cidr_planner';

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
 * @param suffix 前缀之后的键名
 */
const tx = (lang: SiteLang, suffix: string) =>
	t(lang, `${PREFIX}_${suffix}` as keyof typeof import('../site/i18n/en').default);

/**
 * 渲染 aws-vpc-cidr-planner 工具页 HTML。
 * @param opts.lang 当前语言
 * @param opts.defaultLang 站点默认语言
 * @param opts.enabledLangs 启用语言列表
 */
export const renderAwsVpcCidrPlannerPage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	/** 规范路径（无语言前缀）。 */
	const toolPath = '/tools/aws-vpc-cidr-planner';
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
			currentSlug: 'aws-vpc-cidr-planner',
			currentAnchor: '#aws-vpc-cidr-planner',
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
    .result .err { color:#842029; }
    .result .warn { color:#664d03; font-size:.9rem; margin-bottom:.5rem }
    .result .note { color:#0c5460; font-size:.9rem; margin-top:.5rem }
    .cidr-mono { font-family:ui-monospace,Menlo,Consolas,monospace; font-size:.92rem }
    .plan-table { width:100%; border-collapse:collapse; font-size:.9rem }
    .plan-table th, .plan-table td { padding:.4rem .5rem; border-bottom:1px solid #eee; text-align:left }
    #vpcInput { font-family:ui-monospace,Menlo,Consolas,monospace; font-size:.92rem }
  </style>`;

	/** 主内容：H1、表单、How/Formula。 */
	const contentHtml = `
    <div id="aws-vpc-cidr-planner" class="mb-3">
      <h1 class="h4 mb-1">${escapeHtml(tx(opts.lang, 'title'))}</h1>
      <p class="text-muted mb-0">${escapeHtml(description)}</p>
    </div>

    <div class="card tool-card">
      <div class="card-body">
        <form id="vpcForm">
          <div class="form-group">
            <label class="form-label" for="vpcInput">${escapeHtml(tx(opts.lang, 'input_label'))}</label>
            <input id="vpcInput" class="input-lg" type="text" autocomplete="off" spellcheck="false" placeholder="${escapeHtml(tx(opts.lang, 'input_ph'))}" />
          </div>
          <div class="form-group">
            <label class="form-label" for="azSelect">${escapeHtml(tx(opts.lang, 'az_label'))}</label>
            <select id="azSelect" class="input-lg">
              <option value="2">${escapeHtml(tx(opts.lang, 'az_2'))}</option>
              <option value="3" selected>${escapeHtml(tx(opts.lang, 'az_3'))}</option>
            </select>
          </div>
          <div class="form-group">
            <label class="form-label" for="platSelect">${escapeHtml(tx(opts.lang, 'plat_label'))}</label>
            <select id="platSelect" class="input-lg">
              <option value="aws">${escapeHtml(tx(opts.lang, 'plat_aws'))}</option>
              <option value="azure">${escapeHtml(tx(opts.lang, 'plat_azure'))}</option>
            </select>
          </div>
          <div class="btn-row">
            <button type="submit" class="btn btn-primary">${escapeHtml(tx(opts.lang, 'plan'))}</button>
            <button type="button" id="btnSample" class="btn btn-outline-secondary">${escapeHtml(tx(opts.lang, 'sample'))}</button>
            <button type="button" id="btnClear" class="btn btn-outline-secondary">${escapeHtml(tx(opts.lang, 'clear'))}</button>
            <button type="button" id="btnCopy" class="btn btn-outline-secondary">${escapeHtml(tx(opts.lang, 'copy'))}</button>
          </div>
        </form>
        <div id="vpcResult" class="result" style="display:none" aria-live="polite">
          <div id="vpcError" class="err" style="display:none"></div>
          <div id="vpcOk">
            <div id="vpcWarn" class="warn" style="display:none"></div>
            <div class="form-label">${escapeHtml(tx(opts.lang, 'result_label'))}</div>
            <table class="plan-table cidr-mono">
              <thead>
                <tr>
                  <th>${escapeHtml(tx(opts.lang, 'col_role'))}</th>
                  <th>${escapeHtml(tx(opts.lang, 'col_cidr'))}</th>
                  <th>${escapeHtml(tx(opts.lang, 'col_usable'))}</th>
                </tr>
              </thead>
              <tbody id="planBody"></tbody>
            </table>
            <div id="vpcNote" class="note"></div>
          </div>
        </div>
      </div>
    </div>

    ${renderToolIgSections({ lang: opts.lang, prefix: PREFIX, mode: 'formula', ruleItemCount: 4, howItemCount: 5 })}`;

	/** AWS 文档引用。 */
	const referencesHtml = renderToolReferencesSection({
		lang: opts.lang,
		links: [
			{
				label: tx(opts.lang, 'ref_vpc_label'),
				href: 'https://docs.aws.amazon.com/vpc/latest/userguide/vpc-cidr-blocks.html',
			},
			{
				label: tx(opts.lang, 'ref_subnet_label'),
				href: 'https://docs.aws.amazon.com/vpc/latest/userguide/subnet-sizing.html',
			},
		],
	});

	/** 非 YMYL：非官方架构建议。 */
	const disclaimerHtml = `
    <p class="small text-muted mt-3 mb-0" id="disclaimer">${escapeHtml(tx(opts.lang, 'disclaimer'))}</p>`;

	/**
	 * 浏览器内 VPC 切分（进页自动跑 /16 × 3 AZ）。
	 * 注意：模板字符串里正则须写 \\d，否则会被吃掉。
	 */
	const extraBodyHtml = `
  <script>
    (function () {
      /** 主表单。 */
      var form = document.getElementById('vpcForm');
      /** VPC CIDR 输入。 */
      var inputEl = document.getElementById('vpcInput');
      /** AZ 数。 */
      var azEl = document.getElementById('azSelect');
      /** 平台规则。 */
      var platEl = document.getElementById('platSelect');
      /** 结果容器。 */
      var resultEl = document.getElementById('vpcResult');
      /** 错误区。 */
      var errEl = document.getElementById('vpcError');
      /** 成功区。 */
      var okEl = document.getElementById('vpcOk');
      /** Docker 重叠警告。 */
      var warnEl = document.getElementById('vpcWarn');
      /** 子网表体。 */
      var bodyEl = document.getElementById('planBody');
      /** 保留地址说明。 */
      var noteEl = document.getElementById('vpcNote');
      /** 最近一次可复制摘要。 */
      var lastCopy = '';
      /** Docker 默认桥 172.17.0.0/16。 */
      var DOCKER = (172 << 24) | (17 << 16);

      var labelCopied = ${JSON.stringify(tx(opts.lang, 'copy_done'))};
      var labelCopy = ${JSON.stringify(tx(opts.lang, 'copy'))};
      var rolePub = ${JSON.stringify(tx(opts.lang, 'role_pub'))};
      var rolePriv = ${JSON.stringify(tx(opts.lang, 'role_priv'))};
      var warnDocker = ${JSON.stringify(tx(opts.lang, 'warn_docker'))};
      var reservedAws = ${JSON.stringify(tx(opts.lang, 'reserved_aws'))};
      var reservedAzure = ${JSON.stringify(tx(opts.lang, 'reserved_azure'))};
      var errEmpty = ${JSON.stringify(tx(opts.lang, 'err_empty'))};
      var errParse = ${JSON.stringify(tx(opts.lang, 'err_parse'))};
      var errVpc = ${JSON.stringify(tx(opts.lang, 'err_vpc'))};
      var errFit = ${JSON.stringify(tx(opts.lang, 'err_fit'))};
      var errIpv6 = ${JSON.stringify(tx(opts.lang, 'err_ipv6'))};

      /**
       * HTML 转义。
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
       * 点分 IPv4 → 无符号 32-bit。
       * @param {string} s a.b.c.d
       */
      function parseOctets(s) {
        var p = String(s || '').split('.');
        if (p.length !== 4) return null;
        var n = 0;
        var i;
        for (i = 0; i < 4; i++) {
          if (!/^\\d+$/.test(p[i])) return null;
          var o = parseInt(p[i], 10);
          if (o < 0 || o > 255) return null;
          n = (n << 8) + o;
        }
        return n >>> 0;
      }

      /**
       * 32-bit → 点分。
       * @param {number} n 无符号地址
       */
      function toDotted(n) {
        n = n >>> 0;
        return [(n >>> 24) & 255, (n >>> 16) & 255, (n >>> 8) & 255, n & 255].join('.');
      }

      /**
       * 前缀掩码。
       * @param {number} p 0–32
       */
      function maskOf(p) {
        if (p <= 0) return 0;
        if (p >= 32) return 0xffffffff >>> 0;
        return (0xffffffff << (32 - p)) >>> 0;
      }

      /**
       * 两块是否相交。
       * @param {number} a 地址 A
       * @param {number} ap 前缀 A
       * @param {number} b 地址 B
       * @param {number} bp 前缀 B
       */
      function overlaps(a, ap, b, bp) {
        var p = Math.min(ap, bp);
        var m = maskOf(p);
        return ((a & m) >>> 0) === ((b & m) >>> 0);
      }

      /**
       * 显示错误。
       * @param {string} msg 文案
       */
      function showErr(msg) {
        resultEl.style.display = 'block';
        errEl.style.display = 'block';
        errEl.textContent = msg;
        okEl.style.display = 'none';
        lastCopy = '';
      }

      /**
       * 规划当前输入。
       */
      function runPlan() {
        var raw = (inputEl.value || '').trim();
        if (!raw) {
          showErr(errEmpty);
          return;
        }
        if (raw.indexOf(':') !== -1) {
          showErr(errIpv6);
          return;
        }
        var slash = raw.lastIndexOf('/');
        if (slash < 0) {
          showErr(errParse);
          return;
        }
        var addr = parseOctets(raw.slice(0, slash));
        var prefStr = raw.slice(slash + 1).trim();
        if (addr === null || !/^\\d+$/.test(prefStr)) {
          showErr(errParse);
          return;
        }
        var vpcPref = parseInt(prefStr, 10);
        if (vpcPref < 16 || vpcPref > 28) {
          showErr(errVpc);
          return;
        }
        addr = (addr & maskOf(vpcPref)) >>> 0;
        var az = parseInt(azEl.value, 10) || 3;
        var slots = 2 * az;
        var extra = Math.ceil(Math.log(slots) / Math.LN2);
        var subPref = vpcPref + extra;
        if (subPref > 28) {
          showErr(errFit.replace('{slots}', String(slots)));
          return;
        }
        var block = 1 << (32 - subPref);
        var usable = (1 << (32 - subPref)) - 5;
        var rows = [];
        var i;
        for (i = 0; i < az; i++) {
          rows.push({ role: rolePub.replace('{n}', String(i + 1)), n: (addr + i * block) >>> 0, pref: subPref, usable: usable });
        }
        for (i = 0; i < az; i++) {
          rows.push({
            role: rolePriv.replace('{n}', String(i + 1)),
            n: (addr + (az + i) * block) >>> 0,
            pref: subPref,
            usable: usable
          });
        }
        var html = '';
        var lines = [];
        for (i = 0; i < rows.length; i++) {
          var cidr = toDotted(rows[i].n) + '/' + rows[i].pref;
          html += '<tr><td>' + esc(rows[i].role) + '</td><td>' + esc(cidr) + '</td><td>' + rows[i].usable + '</td></tr>';
          lines.push(rows[i].role + '\\t' + cidr + '\\t' + rows[i].usable);
        }
        errEl.style.display = 'none';
        okEl.style.display = 'block';
        resultEl.style.display = 'block';
        bodyEl.innerHTML = html;
        var dockerHit = overlaps(addr, vpcPref, DOCKER, 16);
        warnEl.style.display = dockerHit ? 'block' : 'none';
        warnEl.textContent = dockerHit ? warnDocker : '';
        noteEl.textContent = platEl.value === 'azure' ? reservedAzure : reservedAws;
        lastCopy = lines.join('\\n');
      }

      /**
       * 默认样例：10.0.0.0/16、3 AZ、AWS。
       */
      function loadSample() {
        inputEl.value = '10.0.0.0/16';
        azEl.value = '3';
        platEl.value = 'aws';
        runPlan();
      }

      form.addEventListener('submit', function (e) {
        e.preventDefault();
        runPlan();
      });
      document.getElementById('btnSample').addEventListener('click', loadSample);
      document.getElementById('btnClear').addEventListener('click', function () {
        inputEl.value = '';
        resultEl.style.display = 'none';
        bodyEl.innerHTML = '';
        lastCopy = '';
      });
      document.getElementById('btnCopy').addEventListener('click', function () {
        if (!lastCopy) return;
        var btn = this;
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(lastCopy).then(function () {
            btn.textContent = labelCopied;
            setTimeout(function () { btn.textContent = labelCopy; }, 1200);
          }).catch(function () {});
        }
      });
      loadSample();
    })();
  </script>`;

	/** catalog 元数据。 */
	const toolMeta = getToolBySlug('aws-vpc-cidr-planner');
	/** FAQ、相关工具。 */
	const toolSeoHtml = toolMeta
		? renderToolExtraSections({ lang: opts.lang, defaultLang: opts.defaultLang, tool: toolMeta })
		: '';
	/** JSON-LD。 */
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
