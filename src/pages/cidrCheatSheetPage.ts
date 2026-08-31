/**
 * CIDR 速查表页。
 * slug: cidr-cheat-sheet（见 work-tasks/cidr-cheat-sheet/02-tool-info.md）。
 * 首屏：可点选 /8–/32 表；进页自动高亮 /24。
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
const PREFIX = 'tool_cidr_cheat_sheet';

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
 * 渲染 cidr-cheat-sheet 工具页 HTML。
 * @param opts.lang 当前语言
 * @param opts.defaultLang 站点默认语言
 * @param opts.enabledLangs 启用语言列表
 */
export const renderCidrCheatSheetPage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	/** 规范路径（无语言前缀）。 */
	const toolPath = '/tools/cidr-cheat-sheet';
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
			currentSlug: 'cidr-cheat-sheet',
			currentAnchor: '#cidr-cheat-sheet',
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
    .jump-row { display:flex; flex-wrap:wrap; gap:.5rem; align-items:flex-end; }
    .jump-row .input-lg { max-width:6rem; }
    .result { background:#f8f9fa; padding:1rem; border-radius:8px; margin-top:1rem; text-align:left }
    .result .err { color:#842029; }
    .result .note { color:#0c5460; font-size:.9rem; margin-top:.5rem }
    .cidr-mono { font-family:ui-monospace,Menlo,Consolas,monospace; font-size:.92rem }
    .field-grid { display:grid; grid-template-columns:minmax(8rem,auto) 1fr; gap:.35rem .75rem; align-items:baseline }
    .field-grid .k { color:#6c757d; font-size:.9rem }
    .sheet-wrap { overflow:auto; max-height:22rem; margin-top:1rem; border:1px solid #dee2e6; border-radius:8px }
    .sheet-table { width:100%; border-collapse:collapse; font-size:.88rem }
    .sheet-table th, .sheet-table td { padding:.35rem .5rem; border-bottom:1px solid #eee; text-align:left }
    .sheet-table tbody tr { cursor:pointer }
    .sheet-table tbody tr:hover { background:#eef6f0 }
    .sheet-table tbody tr.is-on { background:#d4edda }
    .sheet-table th { position:sticky; top:0; background:#f8f9fa; z-index:1 }
  </style>`;

	/** 主内容：H1、跳转、表、How/Rules。 */
	const contentHtml = `
    <div id="cidr-cheat-sheet" class="mb-3">
      <h1 class="h4 mb-1">${escapeHtml(tx(opts.lang, 'title'))}</h1>
      <p class="text-muted mb-0">${escapeHtml(description)}</p>
    </div>

    <div class="card tool-card">
      <div class="card-body">
        <form id="sheetForm">
          <div class="jump-row">
            <div class="form-group mb-0">
              <label class="form-label" for="jumpInput">${escapeHtml(tx(opts.lang, 'jump_label'))}</label>
              <input id="jumpInput" class="input-lg cidr-mono" type="text" inputmode="numeric" autocomplete="off" placeholder="${escapeHtml(tx(opts.lang, 'jump_ph'))}" />
            </div>
            <button type="submit" class="btn btn-primary">${escapeHtml(tx(opts.lang, 'jump'))}</button>
            <button type="button" id="btnSample" class="btn btn-outline-secondary">${escapeHtml(tx(opts.lang, 'sample'))}</button>
            <button type="button" id="btnClear" class="btn btn-outline-secondary">${escapeHtml(tx(opts.lang, 'clear'))}</button>
          </div>
        </form>
        <div id="sheetResult" class="result" style="display:none" aria-live="polite">
          <div id="sheetError" class="err" style="display:none"></div>
          <div id="sheetOk">
            <div class="form-label">${escapeHtml(tx(opts.lang, 'result_label'))}</div>
            <div id="outFields" class="field-grid cidr-mono"></div>
            <div id="sheetNote" class="note" style="display:none"></div>
          </div>
        </div>
        <div class="sheet-wrap">
          <table class="sheet-table cidr-mono" id="sheetTable">
            <thead>
              <tr>
                <th>${escapeHtml(tx(opts.lang, 'col_prefix'))}</th>
                <th>${escapeHtml(tx(opts.lang, 'col_mask'))}</th>
                <th>${escapeHtml(tx(opts.lang, 'col_wild'))}</th>
                <th>${escapeHtml(tx(opts.lang, 'col_hosts'))}</th>
                <th>${escapeHtml(tx(opts.lang, 'col_comptia'))}</th>
              </tr>
            </thead>
            <tbody id="sheetBody"></tbody>
          </table>
        </div>
      </div>
    </div>

    ${renderToolIgSections({ lang: opts.lang, prefix: PREFIX, mode: 'formula', ruleItemCount: 4, howItemCount: 5 })}`;

	/** 权威出站引用。 */
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

	/** 非 YMYL：算术说明 + 非官方考试声明。 */
	const disclaimerHtml = `
    <p class="small text-muted mt-3 mb-0" id="disclaimer">${escapeHtml(tx(opts.lang, 'disclaimer'))}</p>`;

	/**
	 * 浏览器内生成 /8–/32 表并高亮样例。
	 * 注意：模板字符串里正则须写 \\d，否则会被吃掉。
	 */
	const extraBodyHtml = `
  <script>
    (function () {
      /** 主表单。 */
      var form = document.getElementById('sheetForm');
      /** 跳转输入。 */
      var jumpEl = document.getElementById('jumpInput');
      /** 表体。 */
      var bodyEl = document.getElementById('sheetBody');
      /** 结果容器。 */
      var resultEl = document.getElementById('sheetResult');
      /** 错误区。 */
      var errEl = document.getElementById('sheetError');
      /** 成功区。 */
      var okEl = document.getElementById('sheetOk');
      /** 字段网格。 */
      var fieldsEl = document.getElementById('outFields');
      /** /31 /32 脚注。 */
      var noteEl = document.getElementById('sheetNote');
      /** CompTIA 常考前缀。 */
      var COMPTIA = { 8:1, 16:1, 24:1, 25:1, 26:1, 27:1, 28:1, 30:1 };

      var colPrefix = ${JSON.stringify(tx(opts.lang, 'col_prefix'))};
      var colMask = ${JSON.stringify(tx(opts.lang, 'col_mask'))};
      var colWild = ${JSON.stringify(tx(opts.lang, 'col_wild'))};
      var colHosts = ${JSON.stringify(tx(opts.lang, 'col_hosts'))};
      var colComptia = ${JSON.stringify(tx(opts.lang, 'col_comptia'))};
      var comptiaYes = ${JSON.stringify(tx(opts.lang, 'comptia_yes'))};
      var comptiaNo = ${JSON.stringify(tx(opts.lang, 'comptia_no'))};
      var lblTotal = ${JSON.stringify(tx(opts.lang, 'lbl_total'))};
      var note31 = ${JSON.stringify(tx(opts.lang, 'note_31'))};
      var note32 = ${JSON.stringify(tx(opts.lang, 'note_32'))};
      var errJump = ${JSON.stringify(tx(opts.lang, 'err_jump'))};

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
       * 前缀 → 点分掩码。
       * @param {number} n 8–32
       */
      function dottedMask(n) {
        var bits = n === 0 ? 0 : (0xffffffff << (32 - n)) >>> 0;
        return [
          (bits >>> 24) & 255,
          (bits >>> 16) & 255,
          (bits >>> 8) & 255,
          bits & 255
        ].join('.');
      }

      /**
       * 通配符 = 掩码取反。
       * @param {number} n 前缀
       */
      function dottedWild(n) {
        var bits = n === 0 ? 0xffffffff : (~((0xffffffff << (32 - n)) >>> 0)) >>> 0;
        return [
          (bits >>> 24) & 255,
          (bits >>> 16) & 255,
          (bits >>> 8) & 255,
          bits & 255
        ].join('.');
      }

      /**
       * 可用主机数。
       * @param {number} n 前缀
       */
      function usable(n) {
        if (n === 32) return 1;
        if (n === 31) return 2;
        return Math.pow(2, 32 - n) - 2;
      }

      /**
       * 总地址数。
       * @param {number} n 前缀
       */
      function total(n) {
        return Math.pow(2, 32 - n);
      }

      /**
       * 一行详情对象。
       * @param {number} n 前缀
       */
      function rowData(n) {
        return {
          n: n,
          mask: dottedMask(n),
          wild: dottedWild(n),
          hosts: usable(n),
          total: total(n),
          comptia: !!COMPTIA[n]
        };
      }

      /**
       * 渲染详情区。
       * @param {number} n 前缀
       */
      function showDetail(n) {
        var d = rowData(n);
        errEl.style.display = 'none';
        okEl.style.display = 'block';
        resultEl.style.display = 'block';
        fieldsEl.innerHTML =
          '<div class="k">' + esc(colPrefix) + '</div><div>/' + d.n + '</div>' +
          '<div class="k">' + esc(colMask) + '</div><div>' + esc(d.mask) + '</div>' +
          '<div class="k">' + esc(colWild) + '</div><div>' + esc(d.wild) + '</div>' +
          '<div class="k">' + esc(colHosts) + '</div><div>' + d.hosts + '</div>' +
          '<div class="k">' + esc(lblTotal) + '</div><div>' + d.total + '</div>' +
          '<div class="k">' + esc(colComptia) + '</div><div>' + esc(d.comptia ? comptiaYes : comptiaNo) + '</div>';
        var note = '';
        if (n === 31) note = note31;
        else if (n === 32) note = note32;
        noteEl.style.display = note ? 'block' : 'none';
        noteEl.textContent = note;
        jumpEl.value = String(n);
        var rows = bodyEl.querySelectorAll('tr');
        var i;
        for (i = 0; i < rows.length; i++) {
          rows[i].className = Number(rows[i].getAttribute('data-n')) === n ? 'is-on' : '';
        }
      }

      /**
       * 显示跳转错误。
       * @param {string} msg 文案
       */
      function showErr(msg) {
        resultEl.style.display = 'block';
        errEl.style.display = 'block';
        errEl.textContent = msg;
        okEl.style.display = 'none';
      }

      /**
       * 构建 /8–/32 表。
       */
      function buildTable() {
        var html = '';
        var n;
        for (n = 8; n <= 32; n++) {
          var d = rowData(n);
          html +=
            '<tr data-n="' + n + '"><td>/' + n + '</td><td>' +
            esc(d.mask) + '</td><td>' + esc(d.wild) + '</td><td>' +
            d.hosts + '</td><td>' + esc(d.comptia ? comptiaYes : comptiaNo) +
            '</td></tr>';
        }
        bodyEl.innerHTML = html;
      }

      /**
       * 选中 /24（与 H2 Example 一致）。
       */
      function loadSample() {
        showDetail(24);
        var on = bodyEl.querySelector('tr[data-n="24"]');
        if (on && on.scrollIntoView) on.scrollIntoView({ block: 'nearest' });
      }

      buildTable();
      bodyEl.addEventListener('click', function (e) {
        var tr = e.target.closest('tr');
        if (!tr) return;
        var n = Number(tr.getAttribute('data-n'));
        if (n >= 8 && n <= 32) showDetail(n);
      });
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        var raw = (jumpEl.value || '').trim().replace(/^\\//, '');
        if (!/^\\d+$/.test(raw)) {
          showErr(errJump);
          return;
        }
        var n = parseInt(raw, 10);
        if (n < 8 || n > 32) {
          showErr(errJump);
          return;
        }
        showDetail(n);
      });
      document.getElementById('btnSample').addEventListener('click', loadSample);
      document.getElementById('btnClear').addEventListener('click', function () {
        resultEl.style.display = 'none';
        jumpEl.value = '';
        var rows = bodyEl.querySelectorAll('tr');
        var i;
        for (i = 0; i < rows.length; i++) rows[i].className = '';
      });
      loadSample();
    })();
  </script>`;

	/** catalog 元数据。 */
	const toolMeta = getToolBySlug('cidr-cheat-sheet');
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
