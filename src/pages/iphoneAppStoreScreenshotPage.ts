/**
 * iPhone 6.9 App Store 截图尺寸工具页：cover 铺满 1320×2868 等三档。
 * slug: iphone-app-store-screenshot；见 work-tasks/iphone-app-store-screenshot/02-tool-info.md。
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
const PREFIX = 'tool_iphone_app_store_screenshot';

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
 * 渲染 iPhone 6.9 截图尺寸工具页。
 * @param opts.lang 当前 UI 语言
 * @param opts.defaultLang 默认（无前缀）语言
 * @param opts.enabledLangs 启用语言列表
 */
export const renderIphoneAppStoreScreenshotPage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	/** 工具规范路径（无语言前缀）。 */
	const toolPath = '/tools/iphone-app-store-screenshot';
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
			currentSlug: 'iphone-app-store-screenshot',
			currentAnchor: '#converter',
		}),
		id: 'toolNav',
	});

	/** 页脚 HTML。 */
	const footerHtml = renderFooter({ lang: opts.lang });

	/** 本页局部样式：竖屏预览。 */
	const extraHeadHtml = `
  <style>
    .iph-preview { max-height: 420px; width: auto; max-width: 100%; aspect-ratio: 1320 / 2868; object-fit: contain; border: 1px solid #e9ecef; border-radius: .5rem; background: #111; }
    .iph-stats { display: flex; flex-wrap: wrap; gap: .5rem; }
    .iph-stat { border: 1px solid #e9ecef; border-radius: .5rem; padding: .45rem .65rem; background: #fff; min-width: 7.5rem; }
    .iph-stat strong { display: block; font-size: .92rem; }
  </style>`;

	/** 首屏交互区：选图、三档 6.9 尺寸、下载。 */
	const contentHtml = `
    <div id="converter" class="tool-hero">
      <h1 class="tool-title">${escapeHtml(tx(opts.lang, 'title'))}</h1>
      <p class="tool-lead">${escapeHtml(description)}</p>
    </div>

    <div class="tool-panel">
      <label class="tool-dropzone mb-3" id="iphDrop" for="iphFile">
        <input type="file" id="iphFile" accept="image/*">
        <span class="tool-dropzone-title">${escapeHtml(tx(opts.lang, 'choose_image'))}</span>
        <span class="tool-dropzone-hint">${escapeHtml(tx(opts.lang, 'drop_hint'))}</span>
      </label>

      <div class="d-flex align-items-center tools-bar mb-3 flex-wrap gap-2">
        <div class="btn-group btn-group-sm" role="group" aria-label="${escapeHtml(tx(opts.lang, 'out_size_label'))}">
          <input type="radio" class="btn-check" name="iphSize" id="iphSize2868" value="1320x2868" checked>
          <label class="btn btn-outline-secondary" for="iphSize2868">${escapeHtml(tx(opts.lang, 'size_2868'))}</label>
          <input type="radio" class="btn-check" name="iphSize" id="iphSize2796" value="1290x2796">
          <label class="btn btn-outline-secondary" for="iphSize2796">${escapeHtml(tx(opts.lang, 'size_2796'))}</label>
          <input type="radio" class="btn-check" name="iphSize" id="iphSize2736" value="1260x2736">
          <label class="btn btn-outline-secondary" for="iphSize2736">${escapeHtml(tx(opts.lang, 'size_2736'))}</label>
        </div>
        <label class="small mb-0 d-flex align-items-center gap-1" for="iphQuality">${escapeHtml(tx(opts.lang, 'quality_label'))}
          <input type="range" id="iphQuality" min="70" max="95" value="90">
        </label>
        <button type="button" id="iphBtnSample" class="btn btn-outline-secondary btn-sm">${escapeHtml(tx(opts.lang, 'load_sample'))}</button>
        <button type="button" id="iphBtnDownload" class="btn btn-primary btn-sm" disabled>${escapeHtml(tx(opts.lang, 'download'))}</button>
        <button type="button" id="iphBtnZip" class="btn btn-outline-primary btn-sm" disabled>${escapeHtml(tx(opts.lang, 'download_zip'))}</button>
        <button type="button" id="iphBtnClear" class="btn btn-outline-secondary btn-sm">${escapeHtml(tx(opts.lang, 'clear'))}</button>
      </div>

      <p id="iphError" class="alert alert-danger py-2 small mb-2" style="display:none;" role="alert"></p>
      <p id="iphStatus" class="small text-muted mb-3" role="status"></p>

      <div class="iph-stats mb-3" id="iphStats" hidden>
        <div class="iph-stat"><span class="small text-muted">${escapeHtml(tx(opts.lang, 'out_size_label'))}</span><strong id="iphOutSize">—</strong></div>
      </div>

      <img id="iphPreview" class="iph-preview" alt="" hidden>
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

	/** 权威引用：Apple 截图规格。 */
	const referencesHtml = renderToolReferencesSection({
		lang: opts.lang,
		links: [
			{
				label: 'Apple — Screenshot specifications',
				href: 'https://developer.apple.com/help/app-store-connect/reference/screenshot-specifications',
			},
			{
				label: 'MDN — Canvas API',
				href: 'https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API',
			},
		],
	});

	/** 浏览器内 cover 裁切；进页自动 loadSample()。 */
	const extraBodyHtml = `
  <script src="/vendor/fflate/index.js" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
  <script>
    (function () {
      /** 当期 iPhone 6.9 三档像素。 */
      var PRESETS = [
        { id: '1320x2868', w: 1320, h: 2868 },
        { id: '1290x2796', w: 1290, h: 2796 },
        { id: '1260x2736', w: 1260, h: 2736 }
      ];

      /** 拖放区。 */
      var drop = document.getElementById('iphDrop');
      /** 文件选择。 */
      var fileInput = document.getElementById('iphFile');
      /** JPEG 质量。 */
      var qualityEl = document.getElementById('iphQuality');
      /** 样例。 */
      var btnSample = document.getElementById('iphBtnSample');
      /** 下载当前档。 */
      var btnDownload = document.getElementById('iphBtnDownload');
      /** 三档 ZIP。 */
      var btnZip = document.getElementById('iphBtnZip');
      /** 清空。 */
      var btnClear = document.getElementById('iphBtnClear');
      /** 错误条。 */
      var errEl = document.getElementById('iphError');
      /** 状态条。 */
      var statusEl = document.getElementById('iphStatus');
      /** 芯片。 */
      var statsEl = document.getElementById('iphStats');
      /** 输出尺寸。 */
      var outSizeEl = document.getElementById('iphOutSize');
      /** 预览。 */
      var previewEl = document.getElementById('iphPreview');

      /** 界面文案。 */
      var msg = {
        empty: ${JSON.stringify(tx(opts.lang, 'empty'))},
        decode: ${JSON.stringify(tx(opts.lang, 'err_decode'))},
        fflate: ${JSON.stringify(tx(opts.lang, 'err_fflate'))},
        working: ${JSON.stringify(tx(opts.lang, 'status_working'))},
        done: ${JSON.stringify(tx(opts.lang, 'status_done'))}
      };

      /** 源位图。 */
      var sourceBmp = null;
      /** 源宽。 */
      var srcW = 0;
      /** 源高。 */
      var srcH = 0;
      /** 当前 JPEG Blob。 */
      var outBlob = null;
      /** 预览 URL。 */
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
       * 更新状态行。
       * @param {string} text 状态文案
       */
      function setStatus(text) {
        statusEl.textContent = text || '';
      }

      /**
       * 当前选中的预设。
       * @returns {{id:string,w:number,h:number}}
       */
      function currentPreset() {
        var el = document.querySelector('input[name="iphSize"]:checked');
        var id = el && el.value ? el.value : '1320x2868';
        var found = PRESETS.filter(function (p) { return p.id === id; })[0];
        return found || PRESETS[0];
      }

      /**
       * JPEG 质量 0–1。
       * @returns {number}
       */
      function currentQuality() {
        var n = parseInt(qualityEl && qualityEl.value ? qualityEl.value : '90', 10);
        return Math.max(0.7, Math.min(0.95, n / 100));
      }

      /**
       * 把 Blob 解码为位图。
       * @param {Blob} blob 图片字节
       * @returns {Promise<{bitmap: ImageBitmap|HTMLImageElement, w: number, h: number}>}
       */
      function decodeImage(blob) {
        if (typeof createImageBitmap === 'function') {
          return createImageBitmap(blob).then(function (bmp) {
            return { bitmap: bmp, w: bmp.width, h: bmp.height };
          });
        }
        return new Promise(function (resolve, reject) {
          var url = URL.createObjectURL(blob);
          var img = new Image();
          img.onload = function () {
            URL.revokeObjectURL(url);
            resolve({ bitmap: img, w: img.naturalWidth || img.width, h: img.naturalHeight || img.height });
          };
          img.onerror = function () {
            URL.revokeObjectURL(url);
            reject(new Error('decode'));
          };
          img.src = url;
        });
      }

      /**
       * Canvas 导出 JPEG。
       * @param {HTMLCanvasElement} canvas 画布
       * @param {number} q 质量
       * @returns {Promise<Blob>}
       */
      function canvasToJpeg(canvas, q) {
        return new Promise(function (resolve, reject) {
          canvas.toBlob(function (blob) {
            if (!blob) { reject(new Error('encode')); return; }
            resolve(blob);
          }, 'image/jpeg', q);
        });
      }

      /**
       * cover 铺满目标宽高（可能裁边）。
       * @param {number} tw 目标宽
       * @param {number} th 目标高
       * @returns {HTMLCanvasElement|null}
       */
      function coverCanvas(tw, th) {
        if (!sourceBmp || !srcW || !srcH) return null;
        var canvas = document.createElement('canvas');
        canvas.width = tw;
        canvas.height = th;
        var ctx = canvas.getContext('2d');
        if (!ctx) return null;
        var scale = Math.max(tw / srcW, th / srcH);
        var dw = srcW * scale;
        var dh = srcH * scale;
        var dx = (tw - dw) / 2;
        var dy = (th - dh) / 2;
        ctx.drawImage(sourceBmp, dx, dy, dw, dh);
        return canvas;
      }

      /**
       * 按当前预设渲染预览。
       * @returns {Promise<void>}
       */
      function renderShot() {
        if (!sourceBmp) {
          setError(msg.empty);
          return Promise.resolve();
        }
        setError('');
        setStatus(msg.working);
        var p = currentPreset();
        var canvas = coverCanvas(p.w, p.h);
        if (!canvas) return Promise.resolve();
        return canvasToJpeg(canvas, currentQuality()).then(function (blob) {
          outBlob = blob;
          if (previewUrl) URL.revokeObjectURL(previewUrl);
          previewUrl = URL.createObjectURL(blob);
          previewEl.src = previewUrl;
          previewEl.hidden = false;
          previewEl.style.aspectRatio = p.w + ' / ' + p.h;
          outSizeEl.textContent = p.w + '×' + p.h;
          statsEl.hidden = false;
          btnDownload.disabled = false;
          btnZip.disabled = false;
          setStatus(msg.done);
        }).catch(function () {
          setError(msg.decode);
        });
      }

      /**
       * 载入用户文件。
       * @param {File} file 本地图片
       * @returns {Promise<void>}
       */
      function loadFile(file) {
        return decodeImage(file).then(function (got) {
          sourceBmp = got.bitmap;
          srcW = got.w;
          srcH = got.h;
          return renderShot();
        }).catch(function () {
          setError(msg.decode);
        });
      }

      /** 清空。 */
      function reset() {
        sourceBmp = null;
        srcW = srcH = 0;
        outBlob = null;
        btnDownload.disabled = true;
        btnZip.disabled = true;
        statsEl.hidden = true;
        previewEl.hidden = true;
        if (previewUrl) { URL.revokeObjectURL(previewUrl); previewUrl = ''; }
        previewEl.removeAttribute('src');
        setError('');
        setStatus('');
      }

      /**
       * 进页样例：竖屏色块 cover 到 1320×2868。
       * 函数名必须是 loadSample，以满足 lint:tool-page --require-html。
       */
      function loadSample() {
        var c = document.createElement('canvas');
        c.width = 1170;
        c.height = 2532;
        var ctx = c.getContext('2d');
        if (!ctx) return;
        var g = ctx.createLinearGradient(0, 0, 0, c.height);
        g.addColorStop(0, '#0ea5e9');
        g.addColorStop(1, '#1e293b');
        ctx.fillStyle = g;
        ctx.fillRect(0, 0, c.width, c.height);
        ctx.fillStyle = '#fff';
        ctx.font = 'bold 64px sans-serif';
        ctx.fillText('6.9 sample', 80, 220);
        ctx.font = '36px sans-serif';
        ctx.fillText('1170 × 2532', 80, 290);
        c.toBlob(function (blob) {
          if (!blob) return;
          loadFile(new File([blob], 'sample-screenshot.jpg', { type: 'image/jpeg' }));
        }, 'image/jpeg', 0.92);
      }

      /** 下载当前档 JPEG。 */
      function downloadOut() {
        if (!outBlob) {
          setError(msg.empty);
          return;
        }
        var p = currentPreset();
        var a = document.createElement('a');
        var url = URL.createObjectURL(outBlob);
        a.href = url;
        a.download = 'iphone-6.9-' + p.w + 'x' + p.h + '.jpg';
        document.body.appendChild(a);
        a.click();
        a.remove();
        URL.revokeObjectURL(url);
      }

      /**
       * 把 Blob 读成 Uint8Array。
       * @param {Blob} blob JPEG
       * @returns {Promise<Uint8Array>}
       */
      function blobToU8(blob) {
        return blob.arrayBuffer().then(function (buf) { return new Uint8Array(buf); });
      }

      /** 打包三档 6.9 尺寸为 ZIP。 */
      function downloadZip() {
        if (!sourceBmp) {
          setError(msg.empty);
          return;
        }
        if (typeof fflate === 'undefined' || !fflate.zipSync) {
          setError(msg.fflate);
          return;
        }
        setStatus(msg.working);
        var q = currentQuality();
        var jobs = PRESETS.map(function (p) {
          var canvas = coverCanvas(p.w, p.h);
          if (!canvas) return Promise.reject(new Error('canvas'));
          return canvasToJpeg(canvas, q).then(function (blob) {
            return blobToU8(blob).then(function (u8) {
              return { name: 'iphone-6.9-' + p.w + 'x' + p.h + '.jpg', bytes: u8 };
            });
          });
        });
        Promise.all(jobs).then(function (parts) {
          var files = {};
          parts.forEach(function (part) { files[part.name] = part.bytes; });
          var zipped = fflate.zipSync(files, { level: 1 });
          var blob = new Blob([zipped], { type: 'application/zip' });
          var a = document.createElement('a');
          var url = URL.createObjectURL(blob);
          a.href = url;
          a.download = 'iphone-6.9-screenshots.zip';
          document.body.appendChild(a);
          a.click();
          a.remove();
          URL.revokeObjectURL(url);
          setStatus(msg.done);
        }).catch(function () {
          setError(msg.decode);
        });
      }

      drop.addEventListener('dragover', function (e) {
        e.preventDefault();
        drop.classList.add('dragover');
      });
      drop.addEventListener('dragleave', function () { drop.classList.remove('dragover'); });
      drop.addEventListener('drop', function (e) {
        e.preventDefault();
        drop.classList.remove('dragover');
        var f = e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0];
        if (f) loadFile(f);
      });
      fileInput.addEventListener('change', function () {
        var f = fileInput.files && fileInput.files[0];
        if (f) loadFile(f);
        fileInput.value = '';
      });
      btnSample.addEventListener('click', loadSample);
      btnDownload.addEventListener('click', downloadOut);
      btnZip.addEventListener('click', downloadZip);
      btnClear.addEventListener('click', reset);
      document.querySelectorAll('input[name="iphSize"]').forEach(function (el) {
        el.addEventListener('change', function () { if (sourceBmp) renderShot(); });
      });
      qualityEl.addEventListener('change', function () { if (sourceBmp) renderShot(); });

      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', loadSample);
      } else {
        loadSample();
      }
    })();
  </script>`;

	/** catalog 元数据。 */
	const toolMeta = getToolBySlug('iphone-app-store-screenshot');
	/** FAQ / related。 */
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
		contentHtml: `${contentHtml}${igHtml}${toolSeoHtml}${referencesHtml}`,
		footerHtml,
		extraHeadHtml: `${extraHeadHtml}${toolJsonLd}`,
		extraBodyHtml,
		includeSidebarToggleScript: true,
		sidebarAutoCloseSelector: '#toolNav a',
	});
};
