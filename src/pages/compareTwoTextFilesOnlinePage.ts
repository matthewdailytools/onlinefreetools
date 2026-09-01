/**
 * 在线对比两个文本文件：FileReader 解码 UTF-8 后按行 diff，无首屏大粘贴框。
 * slug: compare-two-text-files-online；见 work-tasks/compare-two-text-files-online/02-tool-info.md。
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

/** 本工具 i18n 键前缀，与 catalog faqPrefix 一致。 */
const PREFIX = 'tool_compare_two_text_files_online';

/**
 * 为路径加上语言前缀（默认语无前缀）。
 * @param lang 当前 UI 语言
 * @param pathname 以 / 开头的路径
 * @param defaultLang 站点默认语言
 */
const withLangPrefix = (lang: SiteLang, pathname: string, defaultLang: SiteLang) => {
	const safe = pathname.startsWith('/') ? pathname : `/${pathname}`;
	return lang === defaultLang ? safe : `/${lang}${safe}`;
};

/**
 * 读取本工具某一 i18n 后缀键。
 * @param lang 当前语言
 * @param suffix 如 title、description
 */
const tx = (lang: SiteLang, suffix: string) => t(lang, `${PREFIX}_${suffix}` as Parameters<typeof t>[1]);

/**
 * 渲染「在线对比两个文本文件」工具页。
 * @param opts.lang 当前 UI 语言
 * @param opts.defaultLang 默认（无前缀）语言
 * @param opts.enabledLangs 启用语言列表
 */
export const renderCompareTwoTextFilesOnlinePage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	/** 工具规范路径（无语言前缀）。 */
	const toolPath = '/tools/compare-two-text-files-online';
	/** 当前语言下的 canonical 路径。 */
	const canonicalPath = withLangPrefix(opts.lang, toolPath, opts.defaultLang);
	/** 文档 title：H1 原句 + 品牌。 */
	const title = `${tx(opts.lang, 'title')} | ${t(opts.lang, 'brand')}`;
	/** meta description，与可见文案同源。 */
	const description = tx(opts.lang, 'description');
	/** 顶栏导航项。 */
	const navItems = buildToolPageNavItems(opts.lang, opts.defaultLang);

	/**
	 * 语言切换链接始终带显式语言段。
	 * @param code 语言码
	 * @param pathname 工具路径
	 */
	const withExplicitLangPrefix = (code: SiteLang, pathname: string) => {
		const safe = pathname.startsWith('/') ? pathname : `/${pathname}`;
		return `/${code}${safe}`.replace(/\/{2,}/g, '/');
	};

	/** header 语言菜单用的绝对路径映射。 */
	const langAlternates: Record<string, string> = Object.fromEntries(
		(supportedLangs || []).map((code) => [code, withExplicitLangPrefix(code, toolPath)])
	);

	/** hreflang 列表。 */
	const alternates: HreflangAlternate[] = (supportedLangs || []).map((code) => ({
		lang: code,
		href: `https://onlinefreetools.org${withLangPrefix(code, toolPath, opts.defaultLang)}`,
	}));

	/** 站点顶栏 HTML。 */
	const headerHtml = renderHeader({
		lang: opts.lang,
		brandHref: withLangPrefix(opts.lang, '/', opts.defaultLang),
		navItems,
		enabledLangs: supportedLangs,
		langAlternates,
	});

	/** 工具侧栏 HTML。 */
	const sidebarHtml = renderSidebar({
		title: t(opts.lang, 'nav_tools'),
		groups: buildToolSidebarItems({
			lang: opts.lang,
			defaultLang: opts.defaultLang,
			currentSlug: 'compare-two-text-files-online',
			currentAnchor: '#compare-files',
		}),
		id: 'toolNav',
	});

	/** 页脚 HTML。 */
	const footerHtml = renderFooter({ lang: opts.lang });

	/** 页内样式：文件选择区与 Diff 高亮。 */
	const extraHeadHtml = `
  <style>
    #txtDiffOut { min-height: 160px; max-height: 480px; overflow: auto; background: #fff; border: 1px solid #dee2e6; border-radius: .5rem; padding: .75rem 1rem; font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace; font-size: .875rem; white-space: pre-wrap; word-break: break-word; }
    .diff-add { background: #d1e7dd; color: #0f5132; }
    .diff-del { background: #f8d7da; color: #842029; text-decoration: line-through; }
    .diff-eq { color: #212529; }
  </style>`;

	/** 首屏：两个文件选择器，无大粘贴框。 */
	const contentHtml = `
    <div id="compare-files" class="tool-hero">
      <h1 class="tool-title">${escapeHtml(tx(opts.lang, 'title'))}</h1>
      <p class="tool-lead">${escapeHtml(description)}</p>
    </div>

    <div class="tool-panel">
      <div class="row g-3 mb-3">
        <div class="col-12 col-md-6">
          <label class="form-label" for="txtFileA">${escapeHtml(tx(opts.lang, 'label_a'))}</label>
          <input type="file" class="form-control" id="txtFileA" accept=".txt,.text,text/plain">
          <p class="small text-muted mb-0 mt-1" id="txtNameA"></p>
        </div>
        <div class="col-12 col-md-6">
          <label class="form-label" for="txtFileB">${escapeHtml(tx(opts.lang, 'label_b'))}</label>
          <input type="file" class="form-control" id="txtFileB" accept=".txt,.text,text/plain">
          <p class="small text-muted mb-0 mt-1" id="txtNameB"></p>
        </div>
      </div>
      <div class="d-flex align-items-center flex-wrap gap-2 mb-3">
        <button type="button" id="txtBtnCompare" class="btn btn-primary btn-sm">${escapeHtml(tx(opts.lang, 'compare'))}</button>
        <button type="button" id="txtBtnSample" class="btn btn-outline-secondary btn-sm">${escapeHtml(tx(opts.lang, 'load_sample'))}</button>
        <button type="button" id="txtBtnClear" class="btn btn-outline-secondary btn-sm">${escapeHtml(tx(opts.lang, 'clear'))}</button>
      </div>
      <p id="txtError" class="alert alert-danger py-2 small mb-2" style="display:none;" role="alert"></p>
      <p id="txtSummary" class="small text-muted mb-2" aria-live="polite"></p>
      <p class="small text-muted mb-1">${escapeHtml(tx(opts.lang, 'legend'))}</p>
      <div id="txtDiffOut" class="mb-2" aria-label="${escapeHtml(tx(opts.lang, 'result_label'))}"></div>
    </div>`;

	/** How / Rules / Example / Use cases。 */
	const igHtml = renderToolIgSections({
		lang: opts.lang,
		prefix: PREFIX,
		mode: 'rules',
		usecaseCount: 3,
		ruleItemCount: 4,
		howItemCount: 4,
	});

	/** 权威引用：FileReader 与 jsdiff。 */
	const referencesHtml = renderToolReferencesSection({
		lang: opts.lang,
		links: [
			{
				label: 'MDN — FileReader',
				href: 'https://developer.mozilla.org/en-US/docs/Web/API/FileReader',
			},
			{
				label: 'jsdiff (npm: diff)',
				href: 'https://github.com/kpdecker/jsdiff',
			},
		],
	});

	/**
	 * 客户端：读两个文本文件、去 BOM、拒绝二进制、jsdiff 按行对比。
	 * 函数名必须是 loadSample，以满足 lint:tool-page --require-html。
	 */
	const extraBodyHtml = `
  <script src="https://cdn.jsdelivr.net/npm/diff@5.2.0/dist/diff.min.js" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
  <script>
    (function () {
      /** 单侧软上限（字节），超出仍可读但提示卡顿。 */
      var SOFT_BYTES = 1024 * 1024;
      /** 第一个文件选择器。 */
      var inputA = document.getElementById('txtFileA');
      /** 第二个文件选择器。 */
      var inputB = document.getElementById('txtFileB');
      /** 载入样例。 */
      var btnSample = document.getElementById('txtBtnSample');
      /** 开始对比。 */
      var btnCompare = document.getElementById('txtBtnCompare');
      /** 清空。 */
      var btnClear = document.getElementById('txtBtnClear');
      /** 文件名 A。 */
      var nameA = document.getElementById('txtNameA');
      /** 文件名 B。 */
      var nameB = document.getElementById('txtNameB');
      /** 错误条。 */
      var errEl = document.getElementById('txtError');
      /** 摘要。 */
      var summaryEl = document.getElementById('txtSummary');
      /** Diff 输出。 */
      var outEl = document.getElementById('txtDiffOut');
      /** 当前选中的文件对象（样例可能无法写入 input.files）。 */
      var heldA = null;
      /** 当前选中的文件对象 B。 */
      var heldB = null;

      /** 界面文案。 */
      var msg = {
        empty: ${JSON.stringify(tx(opts.lang, 'empty'))},
        needLib: ${JSON.stringify(tx(opts.lang, 'need_lib'))},
        binary: ${JSON.stringify(tx(opts.lang, 'err_binary'))},
        tooLarge: ${JSON.stringify(tx(opts.lang, 'err_too_large'))},
        noDiff: ${JSON.stringify(tx(opts.lang, 'no_diff'))},
        summary: ${JSON.stringify(tx(opts.lang, 'summary'))},
        sampleAName: ${JSON.stringify(tx(opts.lang, 'sample_a_name'))},
        sampleBName: ${JSON.stringify(tx(opts.lang, 'sample_b_name'))},
        sampleA: ${JSON.stringify(tx(opts.lang, 'sample_a'))},
        sampleB: ${JSON.stringify(tx(opts.lang, 'sample_b'))}
      };

      /**
       * 显示或隐藏错误条。
       * @param {string} text 错误文案；空则隐藏
       */
      function showErr(text) {
        if (!text) {
          errEl.style.display = 'none';
          errEl.textContent = '';
          return;
        }
        errEl.textContent = text;
        errEl.style.display = '';
      }

      /**
       * HTML 转义，避免文件内容注入。
       * @param {string} s 原始文本
       */
      function esc(s) {
        return String(s)
          .replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')
          .replace(/"/g, '&quot;');
      }

      /**
       * 去掉 UTF-8 BOM。
       * @param {string} s 解码后的文本
       */
      function stripBom(s) {
        return s.charCodeAt(0) === 0xfeff ? s.slice(1) : s;
      }

      /**
       * 含 NUL 则视为二进制拒绝。
       * @param {string} s 文本
       */
      function isBinary(s) {
        return s.indexOf('\\0') !== -1;
      }

      /**
       * 把 File 读成 UTF-8 文本。
       * @param {File} file 用户文件
       * @returns {Promise<string>}
       */
      function readUtf8(file) {
        return file.arrayBuffer().then(function (buf) {
          if (buf.byteLength > SOFT_BYTES) {
            var err = new Error('too-large');
            throw err;
          }
          var dec = new TextDecoder('utf-8', { fatal: false });
          return stripBom(dec.decode(buf));
        });
      }

      /**
       * 把 File 赋给 input（支持则同步文件名芯片）。
       * @param {HTMLInputElement} input 文件框
       * @param {File} file 文件
       */
      function assignInput(input, file) {
        try {
          var dt = new DataTransfer();
          dt.items.add(file);
          input.files = dt.files;
        } catch (e) {
          /* 部分浏览器不允许脚本写入 files */
        }
      }

      /**
       * 执行对比并渲染高亮。
       */
      function runCompare() {
        showErr('');
        if (typeof Diff === 'undefined') {
          outEl.textContent = msg.needLib;
          summaryEl.textContent = '';
          return;
        }
        var fa = heldA || (inputA.files && inputA.files[0]);
        var fb = heldB || (inputB.files && inputB.files[0]);
        if (!fa || !fb) {
          outEl.textContent = '';
          summaryEl.textContent = msg.empty;
          return;
        }
        nameA.textContent = fa.name || '';
        nameB.textContent = fb.name || '';
        Promise.all([readUtf8(fa), readUtf8(fb)])
          .then(function (pair) {
            var a = pair[0];
            var b = pair[1];
            if (isBinary(a) || isBinary(b)) {
              showErr(msg.binary);
              outEl.textContent = '';
              summaryEl.textContent = '';
              return;
            }
            var parts = Diff.diffLines(a, b);
            var added = 0;
            var removed = 0;
            var html = '';
            for (var i = 0; i < parts.length; i++) {
              var p = parts[i];
              var cls = p.added ? 'diff-add' : p.removed ? 'diff-del' : 'diff-eq';
              if (p.added) added += 1;
              if (p.removed) removed += 1;
              html += '<span class="' + cls + '">' + esc(p.value) + '</span>';
            }
            outEl.innerHTML = html;
            if (added === 0 && removed === 0) summaryEl.textContent = msg.noDiff;
            else
              summaryEl.textContent = msg.summary
                .replace('{added}', String(added))
                .replace('{removed}', String(removed));
          })
          .catch(function (e) {
            showErr(e && e.message === 'too-large' ? msg.tooLarge : msg.binary);
            outEl.textContent = '';
            summaryEl.textContent = '';
          });
      }

      /**
       * 进页自动跑样例（与 Example 同语种两段短日志）。
       */
      function loadSample() {
        heldA = new File([msg.sampleA], msg.sampleAName, { type: 'text/plain' });
        heldB = new File([msg.sampleB], msg.sampleBName, { type: 'text/plain' });
        assignInput(inputA, heldA);
        assignInput(inputB, heldB);
        runCompare();
      }

      btnCompare.addEventListener('click', function () {
        heldA = (inputA.files && inputA.files[0]) || heldA;
        heldB = (inputB.files && inputB.files[0]) || heldB;
        runCompare();
      });
      btnSample.addEventListener('click', loadSample);
      btnClear.addEventListener('click', function () {
        heldA = null;
        heldB = null;
        inputA.value = '';
        inputB.value = '';
        nameA.textContent = '';
        nameB.textContent = '';
        outEl.innerHTML = '';
        summaryEl.textContent = msg.empty;
        showErr('');
      });
      inputA.addEventListener('change', function () {
        heldA = inputA.files && inputA.files[0];
        runCompare();
      });
      inputB.addEventListener('change', function () {
        heldB = inputB.files && inputB.files[0];
        runCompare();
      });

      if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', loadSample);
      else loadSample();
    })();
  </script>`;

	const toolMeta = getToolBySlug('compare-two-text-files-online');
	const toolSeoHtml = toolMeta
		? renderToolExtraSections({ lang: opts.lang, defaultLang: opts.defaultLang, tool: toolMeta })
		: '';
	const toolJsonLd = toolMeta
		? buildToolJsonLd({
				lang: opts.lang,
				defaultLang: opts.defaultLang,
				tool: toolMeta,
				name: t(opts.lang, toolMeta.i18nKey as Parameters<typeof t>[1]),
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
		contentHtml: `${contentHtml}${igHtml}${toolSeoHtml}${referencesHtml}`,
		footerHtml,
		extraHeadHtml: `${extraHeadHtml}${toolJsonLd}`,
		extraBodyHtml,
		includeSidebarToggleScript: true,
		sidebarAutoCloseSelector: '#toolNav a',
	});
};
