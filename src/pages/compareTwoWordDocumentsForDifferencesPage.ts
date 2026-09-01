/**
 * 对比两份 Word：mammoth 抽可见文本后 jsdiff，不是审阅窗格。
 * slug: compare-two-word-documents-for-differences。
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

/** 本工具 i18n 键前缀。 */
const PREFIX = 'tool_compare_two_word_documents_for_differences';

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
 * 渲染 Word 文档文字差异对比页。
 * @param opts.lang 当前 UI 语言
 * @param opts.defaultLang 默认语言
 * @param opts.enabledLangs 启用语言列表
 */
export const renderCompareTwoWordDocumentsForDifferencesPage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	/** 工具规范路径。 */
	const toolPath = '/tools/compare-two-word-documents-for-differences';
	/** 当前语言 canonical。 */
	const canonicalPath = withLangPrefix(opts.lang, toolPath, opts.defaultLang);
	/** 文档 title。 */
	const title = `${tx(opts.lang, 'title')} | ${t(opts.lang, 'brand')}`;
	/** meta description。 */
	const description = tx(opts.lang, 'description');
	/** 顶栏导航。 */
	const navItems = buildToolPageNavItems(opts.lang, opts.defaultLang);

	/**
	 * 语言切换始终带语言段。
	 * @param code 语言码
	 * @param pathname 工具路径
	 */
	const withExplicitLangPrefix = (code: SiteLang, pathname: string) => {
		const safe = pathname.startsWith('/') ? pathname : `/${pathname}`;
		return `/${code}${safe}`.replace(/\/{2,}/g, '/');
	};

	/** header 语言菜单路径。 */
	const langAlternates: Record<string, string> = Object.fromEntries(
		(supportedLangs || []).map((code) => [code, withExplicitLangPrefix(code, toolPath)])
	);

	/** hreflang。 */
	const alternates: HreflangAlternate[] = (supportedLangs || []).map((code) => ({
		lang: code,
		href: `https://onlinefreetools.org${withLangPrefix(code, toolPath, opts.defaultLang)}`,
	}));

	/** 顶栏。 */
	const headerHtml = renderHeader({
		lang: opts.lang,
		brandHref: withLangPrefix(opts.lang, '/', opts.defaultLang),
		navItems,
		enabledLangs: supportedLangs,
		langAlternates,
	});

	/** 侧栏。 */
	const sidebarHtml = renderSidebar({
		title: t(opts.lang, 'nav_tools'),
		groups: buildToolSidebarItems({
			lang: opts.lang,
			defaultLang: opts.defaultLang,
			currentSlug: 'compare-two-word-documents-for-differences',
			currentAnchor: '#compare-word',
		}),
		id: 'toolNav',
	});

	/** 页脚。 */
	const footerHtml = renderFooter({ lang: opts.lang });

	/** Diff 高亮样式。 */
	const extraHeadHtml = `
  <style>
    #wordDiffOut { min-height: 160px; max-height: 480px; overflow: auto; background: #fff; border: 1px solid #dee2e6; border-radius: .5rem; padding: .75rem 1rem; font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace; font-size: .875rem; white-space: pre-wrap; word-break: break-word; }
    .diff-add { background: #d1e7dd; color: #0f5132; }
    .diff-del { background: #f8d7da; color: #842029; text-decoration: line-through; }
    .diff-eq { color: #212529; }
  </style>`;

	/** 首屏：两个 .docx 选择器。 */
	const contentHtml = `
    <div id="compare-word" class="tool-hero">
      <h1 class="tool-title">${escapeHtml(tx(opts.lang, 'title'))}</h1>
      <p class="tool-lead">${escapeHtml(description)}</p>
    </div>
    <div class="tool-panel">
      <div class="row g-3 mb-3">
        <div class="col-12 col-md-6">
          <label class="form-label" for="wordFileA">${escapeHtml(tx(opts.lang, 'label_a'))}</label>
          <input type="file" class="form-control" id="wordFileA" accept=".docx,application/vnd.openxmlformats-officedocument.wordprocessingml.document">
          <p class="small text-muted mb-0 mt-1" id="wordNameA"></p>
        </div>
        <div class="col-12 col-md-6">
          <label class="form-label" for="wordFileB">${escapeHtml(tx(opts.lang, 'label_b'))}</label>
          <input type="file" class="form-control" id="wordFileB" accept=".docx,application/vnd.openxmlformats-officedocument.wordprocessingml.document">
          <p class="small text-muted mb-0 mt-1" id="wordNameB"></p>
        </div>
      </div>
      <div class="d-flex flex-wrap gap-2 mb-3">
        <button type="button" id="wordBtnCompare" class="btn btn-primary btn-sm">${escapeHtml(tx(opts.lang, 'compare'))}</button>
        <button type="button" id="wordBtnSample" class="btn btn-outline-secondary btn-sm">${escapeHtml(tx(opts.lang, 'load_sample'))}</button>
        <button type="button" id="wordBtnClear" class="btn btn-outline-secondary btn-sm">${escapeHtml(tx(opts.lang, 'clear'))}</button>
      </div>
      <p id="wordError" class="alert alert-danger py-2 small mb-2" style="display:none;" role="alert"></p>
      <p id="wordSummary" class="small text-muted mb-2" aria-live="polite"></p>
      <p class="small text-muted mb-1">${escapeHtml(tx(opts.lang, 'legend'))}</p>
      <div id="wordDiffOut" aria-label="${escapeHtml(tx(opts.lang, 'result_label'))}"></div>
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

	/** mammoth 与 jsdiff 引用。 */
	const referencesHtml = renderToolReferencesSection({
		lang: opts.lang,
		links: [
			{ label: 'mammoth.js', href: 'https://github.com/mwilliamson/mammoth.js' },
			{ label: 'jsdiff', href: 'https://github.com/kpdecker/jsdiff' },
		],
	});

	/**
	 * 客户端：最小 OOXML 样例 + mammoth 抽文本 + 行 diff。
	 * 函数名必须是 loadSample。
	 */
	const extraBodyHtml = `
  <script src="https://cdn.jsdelivr.net/npm/fflate@0.8.2/umd/index.js" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
  <script src="https://cdn.jsdelivr.net/npm/mammoth@1.8.0/mammoth.browser.min.js" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
  <script src="https://cdn.jsdelivr.net/npm/diff@5.2.0/dist/diff.min.js" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
  <script>
    (function () {
      /** 文件选择器 A。 */
      var inputA = document.getElementById('wordFileA');
      /** 文件选择器 B。 */
      var inputB = document.getElementById('wordFileB');
      /** 样例按钮。 */
      var btnSample = document.getElementById('wordBtnSample');
      /** 对比按钮。 */
      var btnCompare = document.getElementById('wordBtnCompare');
      /** 清空按钮。 */
      var btnClear = document.getElementById('wordBtnClear');
      /** 文件名 A。 */
      var nameA = document.getElementById('wordNameA');
      /** 文件名 B。 */
      var nameB = document.getElementById('wordNameB');
      /** 错误条。 */
      var errEl = document.getElementById('wordError');
      /** 摘要。 */
      var summaryEl = document.getElementById('wordSummary');
      /** Diff 输出。 */
      var outEl = document.getElementById('wordDiffOut');
      /** 持有的 File A。 */
      var heldA = null;
      /** 持有的 File B。 */
      var heldB = null;
      /** 文案。 */
      var msg = {
        empty: ${JSON.stringify(tx(opts.lang, 'empty'))},
        needLib: ${JSON.stringify(tx(opts.lang, 'need_lib'))},
        extractFail: ${JSON.stringify(tx(opts.lang, 'err_extract'))},
        notDocx: ${JSON.stringify(tx(opts.lang, 'err_not_docx'))},
        noText: ${JSON.stringify(tx(opts.lang, 'err_no_text'))},
        noDiff: ${JSON.stringify(tx(opts.lang, 'no_diff'))},
        summary: ${JSON.stringify(tx(opts.lang, 'summary'))},
        sampleA: ${JSON.stringify(tx(opts.lang, 'sample_a'))},
        sampleB: ${JSON.stringify(tx(opts.lang, 'sample_b'))},
        sampleAName: ${JSON.stringify(tx(opts.lang, 'sample_a_name'))},
        sampleBName: ${JSON.stringify(tx(opts.lang, 'sample_b_name'))}
      };

      /**
       * 显示错误。
       * @param {string} text 文案
       */
      function showErr(text) {
        if (!text) { errEl.style.display = 'none'; errEl.textContent = ''; return; }
        errEl.textContent = text; errEl.style.display = '';
      }

      /**
       * HTML 转义。
       * @param {string} s 原文
       */
      function esc(s) {
        return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
      }

      /**
       * XML 文本转义（写入 document.xml）。
       * @param {string} s 段落文本
       */
      function xmlEsc(s) {
        return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
      }

      /**
       * 用 fflate 打一份最小 .docx。
       * @param {string} text 可见段落（换行分段）
       * @param {string} filename 文件名
       * @returns {File}
       */
      function makeDocx(text, filename) {
        var paras = String(text).split('\\n').map(function (line) {
          return '<w:p><w:r><w:t xml:space="preserve">' + xmlEsc(line) + '</w:t></w:r></w:p>';
        }).join('');
        var documentXml = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><w:document xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main"><w:body>' + paras + '</w:body></w:document>';
        var types = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="xml" ContentType="application/xml"/><Override PartName="/word/document.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml"/></Types>';
        var rels = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="word/document.xml"/></Relationships>';
        var docRels = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"></Relationships>';
        var enc = new TextEncoder();
        var zipped = fflate.zipSync({
          '[Content_Types].xml': enc.encode(types),
          '_rels/.rels': enc.encode(rels),
          'word/document.xml': enc.encode(documentXml),
          'word/_rels/document.xml.rels': enc.encode(docRels)
        });
        return new File([zipped], filename, { type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' });
      }

      /**
       * 把 File 写入 input。
       * @param {HTMLInputElement} input 选择器
       * @param {File} file 文件
       */
      function assignInput(input, file) {
        try { var dt = new DataTransfer(); dt.items.add(file); input.files = dt.files; } catch (e) {}
      }

      /**
       * mammoth 抽纯文本。
       * @param {File} file docx
       * @returns {Promise<string>}
       */
      function extractText(file) {
        var lower = (file.name || '').toLowerCase();
        if (lower && lower.indexOf('.docx') === -1 && file.type.indexOf('wordprocessingml') === -1) {
          return Promise.reject(new Error('not-docx'));
        }
        return file.arrayBuffer().then(function (buf) {
          if (typeof mammoth === 'undefined') throw new Error('need-lib');
          return mammoth.extractRawText({ arrayBuffer: buf });
        }).then(function (res) {
          return String((res && res.value) || '').replace(/\\r\\n/g, '\\n').replace(/\\r/g, '\\n').trim();
        });
      }

      /**
       * 抽两份文本并 diff。
       */
      function runCompare() {
        showErr('');
        if (typeof Diff === 'undefined' || typeof mammoth === 'undefined' || typeof fflate === 'undefined') {
          outEl.textContent = msg.needLib; summaryEl.textContent = ''; return;
        }
        var fa = heldA || (inputA.files && inputA.files[0]);
        var fb = heldB || (inputB.files && inputB.files[0]);
        if (!fa || !fb) { outEl.textContent = ''; summaryEl.textContent = msg.empty; return; }
        nameA.textContent = fa.name || '';
        nameB.textContent = fb.name || '';
        Promise.all([extractText(fa), extractText(fb)]).then(function (pair) {
          var a = pair[0]; var b = pair[1];
          if (!a && !b) { showErr(msg.noText); outEl.textContent = ''; summaryEl.textContent = ''; return; }
          var parts = Diff.diffLines(a + '\\n', b + '\\n');
          var added = 0, removed = 0, html = '';
          for (var i = 0; i < parts.length; i++) {
            var p = parts[i];
            var cls = p.added ? 'diff-add' : p.removed ? 'diff-del' : 'diff-eq';
            if (p.added) added += 1; if (p.removed) removed += 1;
            html += '<span class="' + cls + '">' + esc(p.value) + '</span>';
          }
          outEl.innerHTML = html;
          summaryEl.textContent = (added === 0 && removed === 0) ? msg.noDiff : msg.summary.replace('{added}', String(added)).replace('{removed}', String(removed));
        }).catch(function (e) {
          var m = msg.extractFail;
          if (e && e.message === 'not-docx') m = msg.notDocx;
          if (e && e.message === 'need-lib') m = msg.needLib;
          showErr(m); outEl.textContent = ''; summaryEl.textContent = '';
        });
      }

      /**
       * 进页样例：两份最小 docx。
       */
      function loadSample() {
        if (typeof fflate === 'undefined') { showErr(msg.needLib); return; }
        heldA = makeDocx(msg.sampleA, msg.sampleAName);
        heldB = makeDocx(msg.sampleB, msg.sampleBName);
        assignInput(inputA, heldA); assignInput(inputB, heldB);
        runCompare();
      }

      btnCompare.addEventListener('click', function () {
        heldA = (inputA.files && inputA.files[0]) || heldA;
        heldB = (inputB.files && inputB.files[0]) || heldB;
        runCompare();
      });
      btnSample.addEventListener('click', loadSample);
      btnClear.addEventListener('click', function () {
        heldA = null; heldB = null; inputA.value = ''; inputB.value = '';
        nameA.textContent = ''; nameB.textContent = ''; outEl.innerHTML = '';
        summaryEl.textContent = msg.empty; showErr('');
      });
      inputA.addEventListener('change', function () { heldA = inputA.files && inputA.files[0]; runCompare(); });
      inputB.addEventListener('change', function () { heldB = inputB.files && inputB.files[0]; runCompare(); });
      if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', loadSample);
      else loadSample();
    })();
  </script>`;

	const toolMeta = getToolBySlug('compare-two-word-documents-for-differences');
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
