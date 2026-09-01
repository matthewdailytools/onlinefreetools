/**
 * 浏览器内把多文件打成 ZIP（次模式：单文件 Gzip）的工具页。
 * slug: create-zip-file；见 work-tasks/create-zip-file/02-tool-info.md。
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
const PREFIX = 'tool_create_zip_file';

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
 * 渲染「创建 ZIP」工具页。
 * @param opts.lang 当前 UI 语言
 * @param opts.defaultLang 默认（无前缀）语言
 * @param opts.enabledLangs 启用语言列表
 */
export const renderCreateZipFilePage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	/** 工具规范路径（无语言前缀）。 */
	const toolPath = '/tools/create-zip-file';
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
			currentSlug: 'create-zip-file',
			currentAnchor: '#converter',
		}),
		id: 'toolNav',
	});

	/** 页脚 HTML。 */
	const footerHtml = renderFooter({ lang: opts.lang });

	/** 本页局部样式：文件列表与体积芯片。 */
	const extraHeadHtml = `
  <style>
    .zip-list { max-height: 280px; overflow: auto; border: 1px solid #e9ecef; border-radius: .5rem; }
    .zip-row { display: grid; grid-template-columns: minmax(0, 1fr) auto; gap: .5rem; padding: .5rem .7rem; border-bottom: 1px solid #edf0f2; font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace; font-size: .84rem; }
    .zip-row:last-child { border-bottom: 0; }
    .zip-name { min-width: 0; overflow-wrap: anywhere; }
    .zip-meta { color: #6c757d; white-space: nowrap; }
    .zip-stats { display: flex; flex-wrap: wrap; gap: .5rem; }
    .zip-stat { border: 1px solid #e9ecef; border-radius: .5rem; padding: .45rem .65rem; background: #fff; min-width: 7.5rem; }
    .zip-stat strong { display: block; font-size: .92rem; }
  </style>`;

	/** 首屏交互区：选文件、ZIP/Gzip、样例与下载。 */
	const contentHtml = `
    <div id="converter" class="tool-hero">
      <h1 class="tool-title">${escapeHtml(tx(opts.lang, 'title'))}</h1>
      <p class="tool-lead">${escapeHtml(description)}</p>
    </div>

    <div class="tool-panel">
      <label class="tool-dropzone mb-3" id="zipDrop" for="zipFile">
        <input type="file" id="zipFile" multiple>
        <span class="tool-dropzone-title">${escapeHtml(tx(opts.lang, 'choose_files'))}</span>
        <span class="tool-dropzone-hint">${escapeHtml(tx(opts.lang, 'drop_hint'))}</span>
      </label>

      <div class="d-flex align-items-center tools-bar mb-3 flex-wrap gap-2">
        <div class="btn-group btn-group-sm" role="group" aria-label="${escapeHtml(tx(opts.lang, 'mode_zip'))}">
          <input type="radio" class="btn-check" name="zipMode" id="zipModeZip" value="zip" checked>
          <label class="btn btn-outline-secondary" for="zipModeZip">${escapeHtml(tx(opts.lang, 'mode_zip'))}</label>
          <input type="radio" class="btn-check" name="zipMode" id="zipModeGzip" value="gzip">
          <label class="btn btn-outline-secondary" for="zipModeGzip">${escapeHtml(tx(opts.lang, 'mode_gzip'))}</label>
        </div>
        <label class="small mb-0 d-flex align-items-center gap-1" for="zipLevel">${escapeHtml(tx(opts.lang, 'level_label'))}
          <select id="zipLevel" class="form-select form-select-sm" style="width:auto">
            <option value="1">1</option>
            <option value="6" selected>6</option>
            <option value="9">9</option>
          </select>
        </label>
        <button type="button" id="zipBtnSample" class="btn btn-outline-secondary btn-sm">${escapeHtml(tx(opts.lang, 'load_sample'))}</button>
        <button type="button" id="zipBtnDownload" class="btn btn-primary btn-sm" disabled>${escapeHtml(tx(opts.lang, 'download'))}</button>
        <button type="button" id="zipBtnClear" class="btn btn-outline-secondary btn-sm">${escapeHtml(tx(opts.lang, 'clear'))}</button>
      </div>

      <p id="zipError" class="alert alert-danger py-2 small mb-2" style="display:none;" role="alert"></p>
      <p id="zipStatus" class="small text-muted mb-3" role="status"></p>

      <div class="zip-stats mb-3" id="zipStats" hidden>
        <div class="zip-stat"><span class="small text-muted">${escapeHtml(tx(opts.lang, 'file_count_label'))}</span><strong id="zipCount">0</strong></div>
        <div class="zip-stat"><span class="small text-muted">${escapeHtml(tx(opts.lang, 'packed_size_label'))}</span><strong id="zipPacked">0 B</strong></div>
      </div>

      <div id="zipList" class="zip-list" aria-label="${escapeHtml(tx(opts.lang, 'file_count_label'))}"></div>
    </div>`;

	/** How / Rules / Example / Use cases / FAQ 区块。 */
	const igHtml = renderToolIgSections({
		lang: opts.lang,
		prefix: PREFIX,
		mode: 'rules',
		usecaseCount: 3,
		ruleItemCount: 4,
		howItemCount: 4,
	});

	/** 权威引用：ZIP 规范、fflate、File API。 */
	const referencesHtml = renderToolReferencesSection({
		lang: opts.lang,
		links: [
			{
				label: 'PKWARE ZIP APPNOTE',
				href: 'https://pkware.cachefly.net/webdocs/casestudies/APPNOTE.TXT',
			},
			{
				label: 'fflate',
				href: 'https://github.com/101arrowz/fflate',
			},
			{
				label: 'MDN — File API',
				href: 'https://developer.mozilla.org/en-US/docs/Web/API/File',
			},
		],
	});

	/**
	 * 浏览器内打包脚本：fflate zipSync / gzipSync；进页自动 loadSample()。
	 * 不使用 /{(\\w+)}/ 占位正则，避免 extraBodyHtml 转义门禁。
	 */
	const extraBodyHtml = `
  <script src="https://cdn.jsdelivr.net/npm/fflate@0.8.2/umd/index.js" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
  <script>
    (function () {
      /** 浏览器内软上限：超过则拒绝打包，避免标签页卡死。 */
      var SOFT_BYTES = 80 * 1024 * 1024;
      /** 1×1 PNG，用作样例 photo.png。 */
      var PNG1 = new Uint8Array([137,80,78,71,13,10,26,10,0,0,0,13,73,72,68,82,0,0,0,1,0,0,0,1,8,6,0,0,0,31,21,196,137,0,0,0,10,73,68,65,84,120,156,99,0,1,0,0,5,0,1,13,10,45,180,0,0,0,0,73,69,78,68,174,66,96,130]);

      /** 拖放区。 */
      var drop = document.getElementById('zipDrop');
      /** 多文件选择框。 */
      var fileInput = document.getElementById('zipFile');
      /** 加载三文件样例。 */
      var btnSample = document.getElementById('zipBtnSample');
      /** 下载已打包结果。 */
      var btnDownload = document.getElementById('zipBtnDownload');
      /** 清空列表与结果。 */
      var btnClear = document.getElementById('zipBtnClear');
      /** ZIP 模式单选。 */
      var modeZip = document.getElementById('zipModeZip');
      /** Gzip 模式单选。 */
      var modeGzip = document.getElementById('zipModeGzip');
      /** DEFLATE 级别。 */
      var levelEl = document.getElementById('zipLevel');
      /** 错误条。 */
      var errEl = document.getElementById('zipError');
      /** 状态条。 */
      var statusEl = document.getElementById('zipStatus');
      /** 体积芯片容器。 */
      var statsEl = document.getElementById('zipStats');
      /** 文件计数。 */
      var countEl = document.getElementById('zipCount');
      /** 打包后体积。 */
      var packedEl = document.getElementById('zipPacked');
      /** 条目列表。 */
      var listEl = document.getElementById('zipList');

      /** 界面文案（与当前语言 i18n 同步）。 */
      var msg = {
        empty: ${JSON.stringify(tx(opts.lang, 'empty'))},
        fflate: ${JSON.stringify(tx(opts.lang, 'err_fflate'))},
        gzipMany: ${JSON.stringify(tx(opts.lang, 'err_gzip_many'))},
        tooLarge: ${JSON.stringify(tx(opts.lang, 'err_too_large'))},
        packing: ${JSON.stringify(tx(opts.lang, 'status_packing'))},
        done: ${JSON.stringify(tx(opts.lang, 'status_done'))}
      };

      /** 待打包条目：{ name, bytes }。 */
      var entries = [];
      /** 最近一次打包出的 Blob。 */
      var packedBlob = null;
      /** 下载文件名。 */
      var packedName = 'archive.zip';

      /**
       * fflate 是否已挂到 window。
       * @returns {boolean}
       */
      function hasFflate() {
        return typeof fflate !== 'undefined' && fflate && typeof fflate.zipSync === 'function' && typeof fflate.gzipSync === 'function';
      }

      /**
       * 显示或隐藏错误。
       * @param {string} text 错误文案；空则隐藏
       */
      function setError(text) {
        errEl.textContent = text || '';
        errEl.style.display = text ? '' : 'none';
      }

      /**
       * 更新状态行。
       * @param {string} text 状态文案
       */
      function setStatus(text) {
        statusEl.textContent = text || '';
      }

      /**
       * 字节数格式化为 B / KB / MB。
       * @param {number} n 字节
       * @returns {string}
       */
      function formatBytes(n) {
        if (n < 1024) return n + ' B';
        if (n < 1024 * 1024) return (n / 1024).toFixed(1) + ' KB';
        return (n / (1024 * 1024)).toFixed(2) + ' MB';
      }

      /**
       * HTML 转义条目名。
       * @param {string} s 原始名
       * @returns {string}
       */
      function escapeText(s) {
        return String(s).replace(/[&<>"']/g, function (ch) {
          return ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[ch];
        });
      }

      /**
       * 清理 ZIP 路径：反斜杠、前导 /、.. 段。
       * @param {string} name 原始相对路径或文件名
       * @returns {string}
       */
      function safePath(name) {
        var s = String(name || 'file').replace(/\\\\/g, '/');
        s = s.replace(/^\\/+/, '');
        var parts = s.split('/').filter(function (p) { return p && p !== '.' && p !== '..'; });
        return parts.length ? parts.join('/') : 'file';
      }

      /**
       * 当前模式：zip 或 gzip。
       * @returns {string}
       */
      function currentMode() {
        return modeGzip && modeGzip.checked ? 'gzip' : 'zip';
      }

      /**
       * 当前压缩级别 1/6/9。
       * @returns {number}
       */
      function currentLevel() {
        var n = parseInt(levelEl && levelEl.value ? levelEl.value : '6', 10);
        return n === 1 || n === 9 ? n : 6;
      }

      /** 重绘文件列表与芯片。 */
      function renderList() {
        listEl.innerHTML = entries.map(function (e) {
          return '<div class="zip-row"><span class="zip-name">' + escapeText(e.name) + '</span><span class="zip-meta">' + formatBytes(e.bytes.length) + '</span></div>';
        }).join('');
        countEl.textContent = String(entries.length);
        statsEl.hidden = entries.length === 0 && !packedBlob;
      }

      /** 清空条目、结果与错误。 */
      function reset() {
        entries = [];
        packedBlob = null;
        packedName = 'archive.zip';
        btnDownload.disabled = true;
        packedEl.textContent = '0 B';
        statsEl.hidden = true;
        setError('');
        setStatus('');
        renderList();
      }

      /**
       * 用当前条目跑 zipSync 或 gzipSync。
       * @returns {boolean} 是否成功
       */
      function packNow() {
        if (!entries.length) {
          setError(msg.empty);
          return false;
        }
        if (!hasFflate()) {
          setError(msg.fflate);
          return false;
        }
        var total = 0;
        entries.forEach(function (e) { total += e.bytes.length; });
        if (total > SOFT_BYTES) {
          setError(msg.tooLarge);
          return false;
        }
        var mode = currentMode();
        if (mode === 'gzip' && entries.length !== 1) {
          setError(msg.gzipMany);
          packedBlob = null;
          btnDownload.disabled = true;
          return false;
        }
        setError('');
        setStatus(msg.packing);
        var level = currentLevel();
        var out;
        if (mode === 'gzip') {
          out = fflate.gzipSync(entries[0].bytes, { level: level });
          packedName = (entries[0].name.split('/').pop() || 'file') + '.gz';
        } else {
          var files = {};
          entries.forEach(function (e) { files[e.name] = e.bytes; });
          out = fflate.zipSync(files, { level: level });
          packedName = 'sample.zip';
          if (entries.length !== 3 || entries[0].name !== 'notes.txt') packedName = 'archive.zip';
        }
        packedBlob = new Blob([out], { type: mode === 'gzip' ? 'application/gzip' : 'application/zip' });
        packedEl.textContent = formatBytes(packedBlob.size);
        statsEl.hidden = false;
        btnDownload.disabled = false;
        setStatus(msg.done);
        return true;
      }

      /**
       * 把 FileList 读成条目后打包。
       * @param {FileList|File[]} files 用户选择或拖入的文件
       */
      function ingestFiles(files) {
        var list = Array.prototype.slice.call(files || []);
        if (!list.length) return;
        reset();
        var pending = list.length;
        list.forEach(function (file) {
          var reader = new FileReader();
          reader.onload = function () {
            var buf = new Uint8Array(reader.result || []);
            var raw = file.webkitRelativePath || file.name;
            entries.push({ name: safePath(raw), bytes: buf });
            pending -= 1;
            if (pending === 0) {
              renderList();
              packNow();
            }
          };
          reader.readAsArrayBuffer(file);
        });
      }

      /**
       * 进页 / 按钮用的三文件样例：notes.txt、photo.png、docs/readme.md。
       * 函数名必须是 loadSample，以满足 lint:tool-page --require-html。
       */
      function loadSample() {
        if (!hasFflate()) {
          setError(msg.fflate);
          return;
        }
        reset();
        entries = [
          { name: 'notes.txt', bytes: fflate.strToU8('Sample notes for the zip pack.\\n') },
          { name: 'photo.png', bytes: PNG1 },
          { name: 'docs/readme.md', bytes: fflate.strToU8('# Readme\\n\\nPacked with folder path preserved.\\n') }
        ];
        renderList();
        packNow();
      }

      /** 触发下载当前 packedBlob。 */
      function downloadPacked() {
        if (!packedBlob) {
          setError(msg.empty);
          return;
        }
        var a = document.createElement('a');
        var url = URL.createObjectURL(packedBlob);
        a.href = url;
        a.download = packedName;
        document.body.appendChild(a);
        a.click();
        a.remove();
        URL.revokeObjectURL(url);
      }

      drop.addEventListener('dragover', function (e) {
        e.preventDefault();
        drop.classList.add('dragover');
      });
      drop.addEventListener('dragleave', function () { drop.classList.remove('dragover'); });
      drop.addEventListener('drop', function (e) {
        e.preventDefault();
        drop.classList.remove('dragover');
        var fs = e.dataTransfer && e.dataTransfer.files;
        if (fs && fs.length) ingestFiles(fs);
      });
      fileInput.addEventListener('change', function () {
        if (fileInput.files && fileInput.files.length) ingestFiles(fileInput.files);
        fileInput.value = '';
      });
      btnSample.addEventListener('click', loadSample);
      btnDownload.addEventListener('click', downloadPacked);
      btnClear.addEventListener('click', reset);
      modeZip.addEventListener('change', function () { if (entries.length) packNow(); });
      modeGzip.addEventListener('change', function () { if (entries.length) packNow(); });
      levelEl.addEventListener('change', function () { if (entries.length) packNow(); });

      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', loadSample);
      } else {
        loadSample();
      }
    })();
  </script>`;

	/** catalog 元数据，用于 FAQ 与 JSON-LD。 */
	const toolMeta = getToolBySlug('create-zip-file');
	/** FAQ / related 区块。 */
	const toolSeoHtml = toolMeta
		? renderToolExtraSections({ lang: opts.lang, defaultLang: opts.defaultLang, tool: toolMeta })
		: '';
	/** WebApplication JSON-LD。 */
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
		contentHtml: `${contentHtml}${igHtml}${toolSeoHtml}${referencesHtml}`,
		footerHtml,
		extraHeadHtml: `${extraHeadHtml}${toolJsonLd}`,
		extraBodyHtml,
		includeSidebarToggleScript: true,
		sidebarAutoCloseSelector: '#toolNav a',
	});
};
