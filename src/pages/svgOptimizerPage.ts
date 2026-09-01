/**
 * SVG 优化器工具页：粘贴/拖放 SVG，浏览器内轻量优化（选项芯片 + 体积对比 + 预览）。
 * slug: svg-optimizer；见 work-tasks/svg-optimizer/02-tool-info.md。
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
const PREFIX = 'tool_svg_optimizer';

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
 * 渲染 SVG 优化器工具页。
 * @param opts.lang 当前 UI 语言
 * @param opts.defaultLang 默认（无前缀）语言
 * @param opts.enabledLangs 启用语言列表
 */
export const renderSvgOptimizerPage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	/** 工具规范路径（无语言前缀）。 */
	const toolPath = '/tools/svg-optimizer';
	/** 当前语言下的 canonical 路径。 */
	const canonicalPath = withLangPrefix(opts.lang, toolPath, opts.defaultLang);
	/** 文档 title：H1 + 品牌。 */
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
			currentSlug: 'svg-optimizer',
			currentAnchor: '#optimizer',
		}),
		id: 'toolNav',
	});

	/** 页脚 HTML。 */
	const footerHtml = renderFooter({ lang: opts.lang });

	/** 本页局部样式：等宽输入、预览区、选项芯片。 */
	const extraHeadHtml = `
  <style>
    .tools-bar { gap: .5rem; }
    .svo-io {
      min-height: 200px; font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
      font-size: .85rem;
    }
    .svo-out {
      min-height: 160px; max-height: 320px; overflow: auto;
      font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
      font-size: .8rem; white-space: pre-wrap; word-break: break-word;
      background: #fff; border: 1px solid #dee2e6; border-radius: .5rem; padding: .75rem;
    }
    .svo-preview-wrap {
      max-width: 280px; min-height: 120px; border: 1px dashed #ced4da;
      border-radius: .5rem; padding: 1rem; background: #f8f9fa;
      display: flex; align-items: center; justify-content: center;
    }
    .svo-preview-wrap img { max-width: 100%; max-height: 160px; }
    .svo-stats { font-variant-numeric: tabular-nums; }
    .svo-opt-chips .form-check { margin-bottom: 0; }
  </style>`;

	/** 首屏交互区：拖放/粘贴、选项芯片、体积对比、预览、复制/下载。 */
	const contentHtml = `
    <div id="optimizer" class="tool-page-heading mb-3">
      <h1 class="h4 mb-0">${escapeHtml(tx(opts.lang, 'title'))}</h1>
    </div>

    <label class="tool-dropzone mb-3" id="svoDrop" for="svoFile">
      <input type="file" id="svoFile" accept=".svg,image/svg+xml,text/xml,text/plain">
      <span class="tool-dropzone-title">${escapeHtml(tx(opts.lang, 'choose_file'))}</span>
      <span class="tool-dropzone-hint">${escapeHtml(tx(opts.lang, 'drop_hint'))}</span>
      <span id="svoFileName" class="tool-dropzone-file"></span>
    </label>

    <label class="form-label" for="svoInput">${escapeHtml(tx(opts.lang, 'input_label'))}</label>
    <textarea id="svoInput" class="form-control svo-io mb-2" rows="8" spellcheck="false" placeholder="${escapeHtml(tx(opts.lang, 'input_ph'))}"></textarea>

    <div class="d-flex align-items-center tools-bar mb-2 flex-wrap">
      <button type="button" id="svoBtnOptimize" class="btn btn-primary btn-sm">${escapeHtml(tx(opts.lang, 'optimize'))}</button>
      <button type="button" id="svoBtnCopy" class="btn btn-outline-primary btn-sm" disabled>${escapeHtml(tx(opts.lang, 'copy'))}</button>
      <button type="button" id="svoBtnDownload" class="btn btn-outline-primary btn-sm" disabled>${escapeHtml(tx(opts.lang, 'download'))}</button>
      <button type="button" id="svoBtnSample" class="btn btn-outline-secondary btn-sm">${escapeHtml(tx(opts.lang, 'load_sample'))}</button>
      <button type="button" id="svoBtnClear" class="btn btn-outline-secondary btn-sm">${escapeHtml(tx(opts.lang, 'clear'))}</button>
    </div>

    <fieldset class="svo-opt-chips mb-3">
      <legend class="form-label mb-1">${escapeHtml(tx(opts.lang, 'options_label'))}</legend>
      <div class="d-flex flex-wrap gap-3 small">
        <div class="form-check">
          <input class="form-check-input" type="checkbox" id="svoOptComments" checked>
          <label class="form-check-label" for="svoOptComments">${escapeHtml(tx(opts.lang, 'opt_strip_comments'))}</label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" id="svoOptMetadata" checked>
          <label class="form-check-label" for="svoOptMetadata">${escapeHtml(tx(opts.lang, 'opt_strip_metadata'))}</label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" id="svoOptWhitespace" checked>
          <label class="form-check-label" for="svoOptWhitespace">${escapeHtml(tx(opts.lang, 'opt_collapse_whitespace'))}</label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" id="svoOptRound" checked>
          <label class="form-check-label" for="svoOptRound">${escapeHtml(tx(opts.lang, 'opt_round_numbers'))}</label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" id="svoOptEmpty" checked>
          <label class="form-check-label" for="svoOptEmpty">${escapeHtml(tx(opts.lang, 'opt_strip_empty'))}</label>
        </div>
      </div>
    </fieldset>

    <p id="svoError" class="small text-danger mb-2" style="display:none;" role="alert"></p>
    <p id="svoStatus" class="small text-muted svo-stats mb-2" role="status"></p>

    <div class="row g-3 mb-3">
      <div class="col-12 col-md-4">
        <p class="small fw-semibold mb-1">${escapeHtml(tx(opts.lang, 'preview_label'))}</p>
        <div class="svo-preview-wrap" id="svoPreviewWrap" hidden>
          <img id="svoPreview" alt="">
        </div>
      </div>
      <div class="col-12 col-md-8">
        <label class="form-label" for="svoOutput">${escapeHtml(tx(opts.lang, 'output_label'))}</label>
        <pre id="svoOutput" class="svo-out mb-0" tabindex="0" aria-live="polite"></pre>
      </div>
    </div>

    <p class="tool-lead mb-4">${escapeHtml(description)}</p>`;

	/** How / Rules / Example / Use cases。 */
	const igHtml = renderToolIgSections({
		lang: opts.lang,
		prefix: PREFIX,
		mode: 'rules',
		usecaseCount: 3,
		ruleItemCount: 4,
		howItemCount: 4,
	});

	/** 权威引用：SVGOMG 与 SVGO。 */
	const referencesHtml = renderToolReferencesSection({
		lang: opts.lang,
		links: [
			{
				label: 'SVGOMG — Jake Archibald',
				href: 'https://jakearchibald.github.io/svgomg/',
			},
			{
				label: 'SVGO — SVG Optimizer',
				href: 'https://github.com/svg/svgo',
			},
		],
	});

	/** 浏览器内轻量 SVG 优化；进页自动 loadSample()。 */
	const extraBodyHtml = `
  <script>
    (function () {
      /** UTF-8 字节长度（与 Blob size 一致）。 */
      function byteLen(str) {
        return new Blob([str]).size;
      }

      /**
       * 判断文本是否像 SVG。
       * @param {string} text 输入
       */
      function looksLikeSvg(text) {
        return /<svg[\\s\\/>]/i.test(text || '');
      }

      /**
       * 读取当前选项。
       * @returns {{stripComments:boolean,stripMetadata:boolean,collapseWhitespace:boolean,roundNumbers:boolean,stripEmpty:boolean}}
       */
      function readOpts() {
        return {
          stripComments: document.getElementById('svoOptComments').checked,
          stripMetadata: document.getElementById('svoOptMetadata').checked,
          collapseWhitespace: document.getElementById('svoOptWhitespace').checked,
          roundNumbers: document.getElementById('svoOptRound').checked,
          stripEmpty: document.getElementById('svoOptEmpty').checked
        };
      }

      /**
       * 轻量 SVG 文本优化（非完整 SVGO）。
       * @param {string} input 原始 SVG
       * @param {ReturnType<readOpts>} opt 选项
       */
      function optimizeSvg(input, opt) {
        var s = input;

        if (opt.stripComments) {
          s = s.replace(/<!--[\\s\\S]*?-->/g, '');
        }

        if (opt.stripMetadata) {
          s = s.replace(/<metadata[\\s\\S]*?<\\/metadata>/gi, '');
          s = s.replace(/<sodipodi:namedview[\\s\\S]*?\\/>/gi, '');
          s = s.replace(/<sodipodi:namedview[\\s\\S]*?<\\/sodipodi:namedview>/gi, '');
          s = s.replace(/\\s+(inkscape|sodipodi|adobe|sketch|serif):[\\w-]+="[^"]*"/gi, '');
          s = s.replace(/\\s+(inkscape|sodipodi|adobe|sketch|serif):[\\w-]+='[^']*'/gi, '');
          s = s.replace(/\\s+xmlns:(inkscape|sodipodi|adobe|sketch|serif)="[^"]*"/gi, '');
        }

        if (opt.roundNumbers) {
          s = s.replace(/(-?\\d+\\.\\d+)/g, function (m) {
            var n = parseFloat(m);
            if (!isFinite(n)) return m;
            var r = Math.round(n * 100) / 100;
            return String(r);
          });
        }

        if (opt.stripEmpty) {
          s = s.replace(/\\s{2,}/g, ' ');
          var prev;
          do {
            prev = s;
            s = s.replace(/<g\\s*>\\s*<\\/g>/gi, '');
            s = s.replace(/<g\\s+[^>]*?\\s*>\\s*<\\/g>/gi, function (tag) {
              if (/\\b(id|class|transform|style|fill|stroke)=/i.test(tag)) return tag;
              return '';
            });
          } while (s !== prev);
        }

        if (opt.collapseWhitespace) {
          s = s.replace(/>\\s+</g, '><');
          s = s.replace(/^\\s+|\\s+$/g, '');
        }

        return s;
      }

      /** 拖放区。 */
      var drop = document.getElementById('svoDrop');
      /** 文件选择。 */
      var fileInput = document.getElementById('svoFile');
      /** 文件名展示。 */
      var fileNameEl = document.getElementById('svoFileName');
      /** 输入区。 */
      var inputEl = document.getElementById('svoInput');
      /** 输出区。 */
      var outputEl = document.getElementById('svoOutput');
      /** 预览容器。 */
      var previewWrap = document.getElementById('svoPreviewWrap');
      /** 预览图。 */
      var previewImg = document.getElementById('svoPreview');
      /** 优化按钮。 */
      var btnOptimize = document.getElementById('svoBtnOptimize');
      /** 复制。 */
      var btnCopy = document.getElementById('svoBtnCopy');
      /** 下载。 */
      var btnDownload = document.getElementById('svoBtnDownload');
      /** 样例。 */
      var btnSample = document.getElementById('svoBtnSample');
      /** 清空。 */
      var btnClear = document.getElementById('svoBtnClear');
      /** 错误条。 */
      var errEl = document.getElementById('svoError');
      /** 状态条。 */
      var statusEl = document.getElementById('svoStatus');
      /** 选项复选框列表。 */
      var optEls = [
        document.getElementById('svoOptComments'),
        document.getElementById('svoOptMetadata'),
        document.getElementById('svoOptWhitespace'),
        document.getElementById('svoOptRound'),
        document.getElementById('svoOptEmpty')
      ];

      /** 界面文案。 */
      var msg = {
        empty: ${JSON.stringify(tx(opts.lang, 'empty'))},
        notSvg: ${JSON.stringify(tx(opts.lang, 'err_not_svg'))},
        done: ${JSON.stringify(tx(opts.lang, 'status_done'))},
        copied: ${JSON.stringify(tx(opts.lang, 'status_copied'))},
        statsTpl: ${JSON.stringify(tx(opts.lang, 'stats_tpl'))},
        copyLabel: ${JSON.stringify(tx(opts.lang, 'copy'))},
        sampleSvg: ${JSON.stringify(tx(opts.lang, 'sample_svg'))}
      };

      /** 最近一次优化结果。 */
      var lastOut = '';
      /** 预览 object URL，便于 revoke。 */
      var previewUrl = '';

      /**
       * 显示或隐藏错误。
       * @param {string} text 错误文案
       */
      function setError(text) {
        errEl.textContent = text || '';
        errEl.style.display = text ? '' : 'none';
      }

      /**
       * 更新状态行（字节对比）。
       * @param {number} orig 原始字节
       * @param {number} opt 优化后字节
       */
      function setStats(orig, opt) {
        if (!orig && !opt) {
          statusEl.textContent = '';
          return;
        }
        var saved = orig > 0 ? Math.max(0, Math.round((1 - opt / orig) * 1000) / 10) : 0;
        statusEl.textContent = msg.statsTpl
          .replace('{orig}', String(orig))
          .replace('{opt}', String(opt))
          .replace('{pct}', String(saved));
      }

      /**
       * 更新预览图（data URI）。
       * @param {string} svgText 优化后 SVG
       */
      function updatePreview(svgText) {
        if (previewUrl) {
          URL.revokeObjectURL(previewUrl);
          previewUrl = '';
        }
        if (!svgText || !looksLikeSvg(svgText)) {
          previewWrap.hidden = true;
          previewImg.removeAttribute('src');
          return;
        }
        try {
          var blob = new Blob([svgText], { type: 'image/svg+xml' });
          previewUrl = URL.createObjectURL(blob);
          previewImg.src = previewUrl;
          previewWrap.hidden = false;
        } catch (e) {
          previewWrap.hidden = true;
        }
      }

      /**
       * 执行优化并刷新 UI。
       */
      function runOptimize() {
        setError('');
        var raw = (inputEl.value || '');
        if (!raw.trim()) {
          outputEl.textContent = '';
          lastOut = '';
          setStats(0, 0);
          updatePreview('');
          btnCopy.disabled = true;
          btnDownload.disabled = true;
          setError(msg.empty);
          return;
        }
        if (!looksLikeSvg(raw)) {
          outputEl.textContent = '';
          lastOut = '';
          setStats(0, 0);
          updatePreview('');
          btnCopy.disabled = true;
          btnDownload.disabled = true;
          setError(msg.notSvg);
          return;
        }
        var opt = readOpts();
        var out = optimizeSvg(raw, opt);
        var origBytes = byteLen(raw);
        var optBytes = byteLen(out);
        outputEl.textContent = out;
        lastOut = out;
        setStats(origBytes, optBytes);
        updatePreview(out);
        btnCopy.disabled = !out;
        btnDownload.disabled = !out;
        statusEl.textContent = msg.statsTpl
          .replace('{orig}', String(origBytes))
          .replace('{opt}', String(optBytes))
          .replace('{pct}', String(origBytes > 0 ? Math.max(0, Math.round((1 - optBytes / origBytes) * 1000) / 10) : 0));
      }

      /** 载入内置样例并优化。 */
      function loadSample() {
        inputEl.value = msg.sampleSvg;
        if (fileNameEl) fileNameEl.textContent = '';
        runOptimize();
      }

      /** 复制优化结果。 */
      async function copyOut() {
        if (!lastOut) return;
        await navigator.clipboard.writeText(lastOut);
        var prev = btnCopy.textContent;
        btnCopy.textContent = msg.copied;
        setTimeout(function () { btnCopy.textContent = prev || msg.copyLabel; }, 1200);
      }

      /** 下载优化结果为 .svg 文件。 */
      function downloadOut() {
        if (!lastOut) return;
        var blob = new Blob([lastOut], { type: 'image/svg+xml' });
        var a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        a.download = 'optimized.svg';
        a.click();
        setTimeout(function () { URL.revokeObjectURL(a.href); }, 500);
      }

      /**
       * 读取拖放/选择的 SVG 文件。
       * @param {File} file 用户文件
       */
      function readFile(file) {
        if (!file) return;
        var reader = new FileReader();
        reader.onload = function () {
          inputEl.value = String(reader.result || '');
          if (fileNameEl) fileNameEl.textContent = file.name || '';
          runOptimize();
        };
        reader.readAsText(file);
      }

      btnOptimize.addEventListener('click', runOptimize);
      btnCopy.addEventListener('click', copyOut);
      btnDownload.addEventListener('click', downloadOut);
      btnSample.addEventListener('click', loadSample);
      btnClear.addEventListener('click', function () {
        inputEl.value = '';
        outputEl.textContent = '';
        lastOut = '';
        if (fileNameEl) fileNameEl.textContent = '';
        setError('');
        setStats(0, 0);
        updatePreview('');
        btnCopy.disabled = true;
        btnDownload.disabled = true;
      });
      optEls.forEach(function (el) {
        el.addEventListener('change', function () {
          if ((inputEl.value || '').trim()) runOptimize();
        });
      });
      inputEl.addEventListener('input', function () {
        if ((inputEl.value || '').length < 80000) runOptimize();
      });
      fileInput.addEventListener('change', function () {
        var f = fileInput.files && fileInput.files[0];
        readFile(f);
        fileInput.value = '';
      });
      if (drop) {
        drop.addEventListener('dragover', function (e) { e.preventDefault(); });
        drop.addEventListener('drop', function (e) {
          e.preventDefault();
          var f = e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0];
          readFile(f);
        });
      }

      loadSample();
    })();
  </script>`;

	const toolMeta = getToolBySlug('svg-optimizer');
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
