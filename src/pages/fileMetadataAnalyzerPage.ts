/**
 * 文件元数据分析器工具页：拖放/选择本地文件，展示容器与基础字段（名称、大小、MIME、修改时间；
 * 图片宽高、音视频时长；可选 magic-byte 提示）。slug: file-metadata-analyzer。
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
const PREFIX = 'tool_file_metadata_analyzer';

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
 * 渲染文件元数据分析器工具页。
 * @param opts.lang 当前 UI 语言
 * @param opts.defaultLang 默认（无前缀）语言
 * @param opts.enabledLangs 启用语言列表
 */
export const renderFileMetadataAnalyzerPage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	/** 工具规范路径（无语言前缀）。 */
	const toolPath = '/tools/file-metadata-analyzer';
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
			currentSlug: 'file-metadata-analyzer',
			currentAnchor: '#analyzer',
		}),
		id: 'toolNav',
	});

	/** 页脚 HTML。 */
	const footerHtml = renderFooter({ lang: opts.lang });

	/** 本页局部样式：结果表、拖放区。 */
	const extraHeadHtml = `
  <style>
    .tools-bar { gap: .5rem; }
    .fma-table { font-variant-numeric: tabular-nums; }
    .fma-table th { width: 38%; font-weight: 600; }
    .fma-table td { word-break: break-word; }
    .fma-empty { color: #6c757d; }
  </style>`;

	/** 首屏交互区：拖放、结果表、样例/清空。 */
	const contentHtml = `
    <div id="analyzer" class="tool-page-heading mb-3">
      <h1 class="h4 mb-0">${escapeHtml(tx(opts.lang, 'title'))}</h1>
    </div>

    <label class="tool-dropzone mb-3" id="fmaDrop" for="fmaFile">
      <input type="file" id="fmaFile">
      <span class="tool-dropzone-title">${escapeHtml(tx(opts.lang, 'choose_file'))}</span>
      <span class="tool-dropzone-hint">${escapeHtml(tx(opts.lang, 'drop_hint'))}</span>
      <span id="fmaFileName" class="tool-dropzone-file"></span>
    </label>

    <div class="d-flex align-items-center tools-bar mb-3 flex-wrap">
      <button type="button" id="fmaBtnSample" class="btn btn-outline-secondary btn-sm">${escapeHtml(tx(opts.lang, 'load_sample'))}</button>
      <button type="button" id="fmaBtnClear" class="btn btn-outline-secondary btn-sm">${escapeHtml(tx(opts.lang, 'clear'))}</button>
    </div>

    <p id="fmaError" class="small text-danger mb-2" style="display:none;" role="alert"></p>
    <p id="fmaStatus" class="small text-muted mb-2" role="status"></p>

    <div class="table-responsive mb-3">
      <table class="table table-sm table-bordered fma-table mb-0" aria-labelledby="fmaResultsCaption">
        <caption id="fmaResultsCaption" class="visually-hidden">${escapeHtml(tx(opts.lang, 'results_label'))}</caption>
        <tbody id="fmaResults">
          <tr><td colspan="2" class="fma-empty">${escapeHtml(tx(opts.lang, 'waiting'))}</td></tr>
        </tbody>
      </table>
    </div>

    <p class="tool-lead mb-4">${escapeHtml(description)}</p>`;

	/** How / Rules / Example / Use cases / FAQ 区块。 */
	const igHtml = renderToolIgSections({
		lang: opts.lang,
		prefix: PREFIX,
		mode: 'rules',
		usecaseCount: 3,
		ruleItemCount: 4,
		howItemCount: 4,
	});

	/** 权威参考链接。 */
	const referencesHtml = renderToolReferencesSection({
		lang: opts.lang,
		links: [
			{
				label: 'MDN — File API',
				href: 'https://developer.mozilla.org/en-US/docs/Web/API/File',
			},
			{
				label: 'MDN — HTMLMediaElement',
				href: 'https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement',
			},
			{
				label: 'MDN — createImageBitmap',
				href: 'https://developer.mozilla.org/en-US/docs/Web/API/createImageBitmap',
			},
		],
	});

	/** 客户端：读 File 字段、magic-byte、图片尺寸、音视频时长；首屏 loadSample。 */
	const extraBodyHtml = `
  <script>
    (function () {
      /** 拖放区与文件输入 */
      var dropZone = document.getElementById('fmaDrop');
      var fileInput = document.getElementById('fmaFile');
      var fileNameEl = document.getElementById('fmaFileName');
      var resultsBody = document.getElementById('fmaResults');
      var btnSample = document.getElementById('fmaBtnSample');
      var btnClear = document.getElementById('fmaBtnClear');
      var errEl = document.getElementById('fmaError');
      var statusEl = document.getElementById('fmaStatus');

      /** i18n 标签与消息（由服务端注入） */
      var L = {
        name: ${JSON.stringify(tx(opts.lang, 'field_name'))},
        size: ${JSON.stringify(tx(opts.lang, 'field_size'))},
        sizeHuman: ${JSON.stringify(tx(opts.lang, 'field_size_human'))},
        type: ${JSON.stringify(tx(opts.lang, 'field_type'))},
        modified: ${JSON.stringify(tx(opts.lang, 'field_modified'))},
        dimensions: ${JSON.stringify(tx(opts.lang, 'field_dimensions'))},
        duration: ${JSON.stringify(tx(opts.lang, 'field_duration'))},
        magic: ${JSON.stringify(tx(opts.lang, 'field_magic'))},
        decodeNote: ${JSON.stringify(tx(opts.lang, 'field_decode_note'))},
        empty: ${JSON.stringify(tx(opts.lang, 'empty'))},
        analyzing: ${JSON.stringify(tx(opts.lang, 'analyzing'))},
        done: ${JSON.stringify(tx(opts.lang, 'status_done'))},
        decodeFail: ${JSON.stringify(tx(opts.lang, 'decode_fail'))},
        waiting: ${JSON.stringify(tx(opts.lang, 'waiting'))},
        sampleName: ${JSON.stringify(tx(opts.lang, 'sample_name'))},
        dimTpl: ${JSON.stringify(tx(opts.lang, 'dim_tpl'))},
        durTpl: ${JSON.stringify(tx(opts.lang, 'dur_tpl'))},
        na: ${JSON.stringify(tx(opts.lang, 'na'))}
      };

      /** 当前 object URL，切换文件前须 revoke */
      var activeObjectUrl = '';

      /**
       * 清除错误提示。
       */
      function clearError() {
        errEl.style.display = 'none';
        errEl.textContent = '';
      }

      /**
       * 展示错误信息。
       * @param {string} msg
       */
      function showError(msg) {
        errEl.textContent = msg;
        errEl.style.display = '';
      }

      /**
       * 释放上一次媒体解码用的 blob URL。
       */
      function revokeObjectUrl() {
        if (activeObjectUrl) {
          URL.revokeObjectURL(activeObjectUrl);
          activeObjectUrl = '';
        }
      }

      /**
       * 字节数格式化为人类可读字符串（1024 进制）。
       * @param {number} bytes
       * @returns {string}
       */
      function formatBytes(bytes) {
        if (!Number.isFinite(bytes) || bytes < 0) return L.na;
        if (bytes === 0) return '0 B';
        var units = ['B', 'KB', 'MB', 'GB', 'TB'];
        var i = Math.min(units.length - 1, Math.floor(Math.log(bytes) / Math.log(1024)));
        var val = bytes / Math.pow(1024, i);
        return val.toFixed(i === 0 ? 0 : 2) + ' ' + units[i];
      }

      /**
       * 秒数格式化为 mm:ss 或 hh:mm:ss。
       * @param {number} sec
       * @returns {string}
       */
      function formatDuration(sec) {
        if (!Number.isFinite(sec) || sec < 0) return L.na;
        var total = Math.floor(sec);
        var h = Math.floor(total / 3600);
        var m = Math.floor((total % 3600) / 60);
        var s = total % 60;
        var pad = function (n) { return String(n).padStart(2, '0'); };
        if (h > 0) return h + ':' + pad(m) + ':' + pad(s);
        return m + ':' + pad(s);
      }

      /**
       * 格式化 lastModified 为本地日期时间字符串。
       * @param {number} ts
       * @returns {string}
       */
      function formatModified(ts) {
        if (!ts) return L.na;
        try {
          return new Date(ts).toLocaleString();
        } catch (e) {
          return String(ts);
        }
      }

      /**
       * 读取文件头 magic-byte 并返回容器提示标签。
       * @param {File} file
       * @returns {Promise<string>}
       */
      function detectMagicHint(file) {
        return file.slice(0, 12).arrayBuffer().then(function (buf) {
          var b = new Uint8Array(buf);
          if (b.length >= 4 && b[0] === 0x89 && b[1] === 0x50 && b[2] === 0x4E && b[3] === 0x47) return 'PNG';
          if (b.length >= 3 && b[0] === 0xFF && b[1] === 0xD8 && b[2] === 0xFF) return 'JPEG';
          if (b.length >= 4 && b[0] === 0x47 && b[1] === 0x49 && b[2] === 0x46 && b[3] === 0x38) return 'GIF';
          if (b.length >= 12 && b[0] === 0x52 && b[1] === 0x49 && b[2] === 0x46 && b[3] === 0x46 &&
              b[8] === 0x57 && b[9] === 0x45 && b[10] === 0x42 && b[11] === 0x50) return 'WebP';
          if (b.length >= 4 && b[0] === 0x25 && b[1] === 0x50 && b[2] === 0x44 && b[3] === 0x46) return 'PDF';
          if (b.length >= 4 && b[0] === 0x50 && b[1] === 0x4B && (b[2] === 0x03 || b[2] === 0x05 || b[2] === 0x07)) return 'ZIP';
          if (b.length >= 8 && b[4] === 0x66 && b[5] === 0x74 && b[6] === 0x79 && b[7] === 0x70) return 'MP4';
          return '';
        }).catch(function () { return ''; });
      }

      /**
       * 判断是否应按图片路径解码尺寸。
       * @param {File} file
       * @param {string} magic
       * @returns {boolean}
       */
      function shouldProbeImage(file, magic) {
        if (file.type && file.type.indexOf('image/') === 0) return true;
        return magic === 'PNG' || magic === 'JPEG' || magic === 'GIF' || magic === 'WebP';
      }

      /**
       * 判断是否应按音视频路径解码时长。
       * @param {File} file
       * @param {string} magic
       * @returns {boolean}
       */
      function shouldProbeMedia(file, magic) {
        if (file.type && (file.type.indexOf('video/') === 0 || file.type.indexOf('audio/') === 0)) return true;
        return magic === 'MP4';
      }

      /**
       * 用 createImageBitmap 或 Image 读取图片宽高。
       * @param {Blob} blob
       * @returns {Promise<{w:number,h:number}|null>}
       */
      function probeImageDimensions(blob) {
        if (typeof createImageBitmap === 'function') {
          return createImageBitmap(blob).then(function (bmp) {
            var out = { w: bmp.width, h: bmp.height };
            bmp.close();
            return out;
          }).catch(function () { return probeImageViaElement(blob); });
        }
        return probeImageViaElement(blob);
      }

      /**
       * Image 元素回退路径读取宽高。
       * @param {Blob} blob
       * @returns {Promise<{w:number,h:number}|null>}
       */
      function probeImageViaElement(blob) {
        return new Promise(function (resolve) {
          var url = URL.createObjectURL(blob);
          var img = new Image();
          img.onload = function () {
            var out = { w: img.naturalWidth, h: img.naturalHeight };
            URL.revokeObjectURL(url);
            resolve(out);
          };
          img.onerror = function () {
            URL.revokeObjectURL(url);
            resolve(null);
          };
          img.src = url;
        });
      }

      /**
       * 用 video/audio 元素读取时长；video 额外返回尺寸。
       * @param {File} file
       * @returns {Promise<{duration:number|null,videoW:number|null,videoH:number|null,failed:boolean}>}
       */
      function probeMediaMetadata(file) {
        return new Promise(function (resolve) {
          revokeObjectUrl();
          activeObjectUrl = URL.createObjectURL(file);
          var isVideo = file.type.indexOf('video/') === 0;
          var el = document.createElement(isVideo ? 'video' : 'audio');
          el.preload = 'metadata';
          el.muted = true;
          if (isVideo) el.playsInline = true;

          /** 元数据就绪时读取 duration / videoWidth / videoHeight */
          function onMeta() {
            cleanup();
            resolve({
              duration: Number.isFinite(el.duration) ? el.duration : null,
              videoW: isVideo && el.videoWidth ? el.videoWidth : null,
              videoH: isVideo && el.videoHeight ? el.videoHeight : null,
              failed: false
            });
          }

          /** 解码失败 */
          function onFail() {
            cleanup();
            resolve({ duration: null, videoW: null, videoH: null, failed: true });
          }

          /** 移除监听并 revoke（probe 结束） */
          function cleanup() {
            el.removeEventListener('loadedmetadata', onMeta);
            el.removeEventListener('error', onFail);
          }

          el.addEventListener('loadedmetadata', onMeta);
          el.addEventListener('error', onFail);
          el.src = activeObjectUrl;
        });
      }

      /**
       * 向结果表追加一行。
       * @param {string} label
       * @param {string} value
       */
      function appendRow(label, value) {
        var tr = document.createElement('tr');
        var th = document.createElement('th');
        th.scope = 'row';
        th.textContent = label;
        var td = document.createElement('td');
        td.textContent = value;
        tr.appendChild(th);
        tr.appendChild(td);
        resultsBody.appendChild(tr);
      }

      /**
       * 清空结果表并显示占位。
       * @param {string} [placeholder]
       */
      function resetResults(placeholder) {
        resultsBody.innerHTML = '';
        var tr = document.createElement('tr');
        var td = document.createElement('td');
        td.colSpan = 2;
        td.className = 'fma-empty';
        td.textContent = placeholder || L.waiting;
        tr.appendChild(td);
        resultsBody.appendChild(tr);
      }

      /**
       * 分析单个 File 并渲染结果表。
       * @param {File|null} file
       */
      async function analyzeFile(file) {
        clearError();
        revokeObjectUrl();
        if (!file) {
          showError(L.empty);
          resetResults(L.waiting);
          fileNameEl.textContent = '';
          statusEl.textContent = '';
          return;
        }

        fileNameEl.textContent = file.name;
        statusEl.textContent = L.analyzing;
        resultsBody.innerHTML = '';

        appendRow(L.name, file.name || L.na);
        appendRow(L.size, String(file.size));
        appendRow(L.sizeHuman, formatBytes(file.size));
        var mime = file.type || L.na;
        appendRow(L.type, mime);
        appendRow(L.modified, formatModified(file.lastModified));

        var magic = await detectMagicHint(file);
        if (magic) appendRow(L.magic, magic);

        var decodeNotes = [];

        if (shouldProbeImage(file, magic)) {
          var dim = await probeImageDimensions(file);
          if (dim && dim.w && dim.h) {
            appendRow(L.dimensions, L.dimTpl.replace('{w}', String(dim.w)).replace('{h}', String(dim.h)));
          } else {
            decodeNotes.push(L.decodeFail);
          }
        }

        if (shouldProbeMedia(file, magic)) {
          var media = await probeMediaMetadata(file);
          if (media.duration != null) {
            appendRow(L.duration, L.durTpl.replace('{t}', formatDuration(media.duration)));
          } else if (media.failed) {
            decodeNotes.push(L.decodeFail);
          }
          if (media.videoW && media.videoH) {
            appendRow(L.dimensions, L.dimTpl.replace('{w}', String(media.videoW)).replace('{h}', String(media.videoH)));
          }
        }

        if (decodeNotes.length) {
          appendRow(L.decodeNote, decodeNotes.join(' '));
        }

        statusEl.textContent = L.done;
      }

      /**
       * 用 canvas 合成 16×16 PNG 样例 File 并分析。
       */
      function loadSample() {
        clearError();
        fileInput.value = '';
        statusEl.textContent = L.analyzing;

        var canvas = document.createElement('canvas');
        canvas.width = 16;
        canvas.height = 16;
        var ctx = canvas.getContext('2d');
        if (!ctx) {
          showError(L.decodeFail);
          return;
        }
        ctx.fillStyle = '#6366f1';
        ctx.fillRect(0, 0, 16, 16);
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(4, 4, 8, 8);

        canvas.toBlob(function (blob) {
          if (!blob) {
            showError(L.decodeFail);
            return;
          }
          var sampleFile = new File([blob], L.sampleName, { type: 'image/png', lastModified: Date.now() });
          analyzeFile(sampleFile);
        }, 'image/png');
      }

      /** 清空选择与结果 */
      function clearAll() {
        fileInput.value = '';
        fileNameEl.textContent = '';
        statusEl.textContent = '';
        clearError();
        revokeObjectUrl();
        resetResults(L.waiting);
      }

      /** 拖放处理 */
      if (dropZone) {
        dropZone.addEventListener('dragover', function (e) {
          e.preventDefault();
          dropZone.classList.add('is-dragover');
        });
        dropZone.addEventListener('dragleave', function () {
          dropZone.classList.remove('is-dragover');
        });
        dropZone.addEventListener('drop', function (e) {
          e.preventDefault();
          dropZone.classList.remove('is-dragover');
          var files = e.dataTransfer && e.dataTransfer.files;
          if (files && files[0]) analyzeFile(files[0]);
        });
      }

      fileInput.addEventListener('change', function () {
        var file = fileInput.files && fileInput.files[0];
        analyzeFile(file || null);
      });
      btnSample.addEventListener('click', loadSample);
      btnClear.addEventListener('click', clearAll);

      loadSample();
    })();
  </script>`;

	const toolMeta = getToolBySlug('file-metadata-analyzer');
	const toolSeoHtml = toolMeta
		? renderToolExtraSections({ lang: opts.lang, defaultLang: opts.defaultLang, tool: toolMeta })
		: '';
	const toolJsonLd = toolMeta
		? buildToolJsonLd({
				lang: opts.lang,
				defaultLang: opts.defaultLang,
				tool: toolMeta,
				name: t(opts.lang, toolMeta.i18nKey as any),
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
