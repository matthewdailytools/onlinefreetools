/**
 * iOS 应用图标工具页：logo contain 到不透明正方形 PNG（默认 1024×1024）。
 * slug: ios-app-icon-size；见 work-tasks/ios-app-icon-size/02-tool-info.md。
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
const PREFIX = 'tool_ios_app_icon_size';

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
 * 渲染 iOS app icon size 工具页。
 * @param opts.lang 当前 UI 语言
 * @param opts.defaultLang 默认（无前缀）语言
 * @param opts.enabledLangs 启用语言列表
 */
export const renderIosAppIconSizePage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	/** 工具规范路径（无语言前缀）。 */
	const toolPath = '/tools/ios-app-icon-size';
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
			currentSlug: 'ios-app-icon-size',
			currentAnchor: '#converter',
		}),
		id: 'toolNav',
	});

	/** 页脚 HTML。 */
	const footerHtml = renderFooter({ lang: opts.lang });

	/** 本页局部样式：正方形预览。 */
	const extraHeadHtml = `
  <style>
    .iai-preview { max-width: 280px; width: 100%; aspect-ratio: 1 / 1; object-fit: contain; border: 1px solid #e9ecef; border-radius: .5rem; background: #fff; }
    .iai-stats { display: flex; flex-wrap: wrap; gap: .5rem; }
    .iai-stat { border: 1px solid #e9ecef; border-radius: .5rem; padding: .45rem .65rem; background: #fff; min-width: 7.5rem; }
    .iai-stat strong { display: block; font-size: .92rem; }
  </style>`;

	/** 首屏交互区：选图、四档边长、底色、PNG 与 ZIP。 */
	const contentHtml = `
    <div id="converter" class="tool-hero">
      <h1 class="tool-title">${escapeHtml(tx(opts.lang, 'title'))}</h1>
      <p class="tool-lead">${escapeHtml(description)}</p>
    </div>

    <div class="tool-panel">
      <label class="tool-dropzone mb-3" id="iaiDrop" for="iaiFile">
        <input type="file" id="iaiFile" accept="image/*">
        <span class="tool-dropzone-title">${escapeHtml(tx(opts.lang, 'choose_image'))}</span>
        <span class="tool-dropzone-hint">${escapeHtml(tx(opts.lang, 'drop_hint'))}</span>
      </label>

      <div class="d-flex align-items-center tools-bar mb-3 flex-wrap gap-2">
        <div class="btn-group btn-group-sm" role="group" aria-label="${escapeHtml(tx(opts.lang, 'out_size_label'))}">
          <input type="radio" class="btn-check" name="iaiSize" id="iaiSize1024" value="1024" checked>
          <label class="btn btn-outline-secondary" for="iaiSize1024">${escapeHtml(tx(opts.lang, 'size_1024'))}</label>
          <input type="radio" class="btn-check" name="iaiSize" id="iaiSize180" value="180">
          <label class="btn btn-outline-secondary" for="iaiSize180">${escapeHtml(tx(opts.lang, 'size_180'))}</label>
          <input type="radio" class="btn-check" name="iaiSize" id="iaiSize167" value="167">
          <label class="btn btn-outline-secondary" for="iaiSize167">${escapeHtml(tx(opts.lang, 'size_167'))}</label>
          <input type="radio" class="btn-check" name="iaiSize" id="iaiSize512" value="512">
          <label class="btn btn-outline-secondary" for="iaiSize512">${escapeHtml(tx(opts.lang, 'size_512'))}</label>
        </div>
        <label class="small mb-0 d-flex align-items-center gap-1" for="iaiBg">${escapeHtml(tx(opts.lang, 'bg_label'))}
          <input type="color" id="iaiBg" value="#ffffff">
        </label>
        <button type="button" id="iaiBtnSample" class="btn btn-outline-secondary btn-sm">${escapeHtml(tx(opts.lang, 'load_sample'))}</button>
        <button type="button" id="iaiBtnDownload" class="btn btn-primary btn-sm" disabled>${escapeHtml(tx(opts.lang, 'download'))}</button>
        <button type="button" id="iaiBtnZip" class="btn btn-outline-primary btn-sm" disabled>${escapeHtml(tx(opts.lang, 'download_zip'))}</button>
        <button type="button" id="iaiBtnClear" class="btn btn-outline-secondary btn-sm">${escapeHtml(tx(opts.lang, 'clear'))}</button>
      </div>

      <p id="iaiError" class="alert alert-danger py-2 small mb-2" style="display:none;" role="alert"></p>
      <p id="iaiStatus" class="small text-muted mb-3" role="status"></p>

      <div class="iai-stats mb-3" id="iaiStats" hidden>
        <div class="iai-stat"><span class="small text-muted">${escapeHtml(tx(opts.lang, 'out_size_label'))}</span><strong id="iaiOutSize">—</strong></div>
      </div>

      <img id="iaiPreview" class="iai-preview" alt="" hidden>
    </div>`;

	/** How / Rules / Example / Use cases 区块。 */
	const igHtml = renderToolIgSections({
		lang: opts.lang,
		prefix: PREFIX,
		mode: 'rules',
		usecaseCount: 3,
		ruleItemCount: 4,
		howItemCount: 4,
	});

	/** 权威引用：Apple HIG 应用图标、App Store Connect 应用信息。 */
	const referencesHtml = renderToolReferencesSection({
		lang: opts.lang,
		links: [
			{
				label: 'Apple — Human Interface Guidelines: App Icons',
				href: 'https://developer.apple.com/design/human-interface-guidelines/app-icons',
			},
			{
				label: 'Apple — App Store Connect: App information',
				href: 'https://developer.apple.com/help/app-store-connect/reference/app-information/',
			},
		],
	});

	/** 浏览器内 contain + 不透明 PNG；ZIP 含倍率与 Play 512；进页自动 loadSample()。 */
	const extraBodyHtml = `
  <script src="/vendor/fflate/index.js" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
  <script>
    (function () {
      /** 预览芯片：默认 App Store 1024，其余 iPhone / iPad / Play。 */
      var PRESETS = [
        { id: '1024', w: 1024, h: 1024, name: 'AppStore-1024.png' },
        { id: '180', w: 180, h: 180, name: 'iPhone-180.png' },
        { id: '167', w: 167, h: 167, name: 'iPadPro-167.png' },
        { id: '512', w: 512, h: 512, name: 'PlayHighRes-512.png' }
      ];
      /** ZIP 额外 iOS 槽位（Settings / Spotlight / Notification / iPad 76pt）。 */
      var ZIP_EXTRA = [
        { w: 152, h: 152, name: 'iPad-152.png' },
        { w: 120, h: 120, name: 'iPhone-120.png' },
        { w: 87, h: 87, name: 'Settings-87.png' },
        { w: 80, h: 80, name: 'Spotlight-80.png' },
        { w: 58, h: 58, name: 'Settings-58.png' },
        { w: 40, h: 40, name: 'Notification-40.png' }
      ];

      /** 拖放区。 */
      var drop = document.getElementById('iaiDrop');
      /** 文件选择。 */
      var fileInput = document.getElementById('iaiFile');
      /** 底色取色器。 */
      var bgEl = document.getElementById('iaiBg');
      /** 样例。 */
      var btnSample = document.getElementById('iaiBtnSample');
      /** 下载当前档 PNG。 */
      var btnDownload = document.getElementById('iaiBtnDownload');
      /** 多尺寸 ZIP。 */
      var btnZip = document.getElementById('iaiBtnZip');
      /** 清空。 */
      var btnClear = document.getElementById('iaiBtnClear');
      /** 错误条。 */
      var errEl = document.getElementById('iaiError');
      /** 状态条。 */
      var statusEl = document.getElementById('iaiStatus');
      /** 尺寸芯片容器。 */
      var statsEl = document.getElementById('iaiStats');
      /** 输出尺寸。 */
      var outSizeEl = document.getElementById('iaiOutSize');
      /** 预览。 */
      var previewEl = document.getElementById('iaiPreview');

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
      /** 当前 PNG Blob。 */
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
       * 当前选中的预览预设。
       * @returns {{id:string,w:number,h:number,name:string}}
       */
      function currentPreset() {
        var el = document.querySelector('input[name="iaiSize"]:checked');
        var id = el && el.value ? el.value : '1024';
        var found = PRESETS.filter(function (p) { return p.id === id; })[0];
        return found || PRESETS[0];
      }

      /**
       * 不透明底色（默认白）。
       * @returns {string}
       */
      function currentBg() {
        return bgEl && bgEl.value ? bgEl.value : '#ffffff';
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
       * Canvas 导出 PNG。
       * @param {HTMLCanvasElement} canvas 画布
       * @returns {Promise<Blob>}
       */
      function canvasToPng(canvas) {
        return new Promise(function (resolve, reject) {
          canvas.toBlob(function (blob) {
            if (!blob) { reject(new Error('encode')); return; }
            resolve(blob);
          }, 'image/png');
        });
      }

      /**
       * contain 居中 logo 到不透明正方形（不裁边、不画圆角）。
       * @param {number} tw 目标宽
       * @param {number} th 目标高
       * @returns {HTMLCanvasElement|null}
       */
      function containCanvas(tw, th) {
        if (!sourceBmp || !srcW || !srcH) return null;
        var canvas = document.createElement('canvas');
        canvas.width = tw;
        canvas.height = th;
        var ctx = canvas.getContext('2d');
        if (!ctx) return null;
        ctx.fillStyle = currentBg();
        ctx.fillRect(0, 0, tw, th);
        var scale = Math.min(tw / srcW, th / srcH);
        var dw = srcW * scale;
        var dh = srcH * scale;
        var dx = (tw - dw) / 2;
        var dy = (th - dh) / 2;
        ctx.drawImage(sourceBmp, dx, dy, dw, dh);
        return canvas;
      }

      /**
       * 按当前预设渲染预览 PNG。
       * @returns {Promise<void>}
       */
      function renderIcon() {
        if (!sourceBmp) {
          setError(msg.empty);
          return Promise.resolve();
        }
        setError('');
        setStatus(msg.working);
        var p = currentPreset();
        var canvas = containCanvas(p.w, p.h);
        if (!canvas) return Promise.resolve();
        return canvasToPng(canvas).then(function (blob) {
          outBlob = blob;
          if (previewUrl) URL.revokeObjectURL(previewUrl);
          previewUrl = URL.createObjectURL(blob);
          previewEl.src = previewUrl;
          previewEl.hidden = false;
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
          return renderIcon();
        }).catch(function () {
          setError(msg.decode);
        });
      }

      /** 清空源图与预览。 */
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
       * 进页样例：合成一张 logo 色块再 contain 到 1024×1024。
       * 函数名必须是 loadSample，以满足 lint:tool-page --require-html。
       */
      function loadSample() {
        var c = document.createElement('canvas');
        c.width = 512;
        c.height = 512;
        var ctx = c.getContext('2d');
        if (!ctx) return;
        ctx.fillStyle = '#1e3a8a';
        ctx.fillRect(0, 0, c.width, c.height);
        ctx.fillStyle = '#93c5fd';
        ctx.beginPath();
        ctx.arc(256, 240, 140, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = '#fff';
        ctx.font = 'bold 64px sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText('iOS', 256, 264);
        c.toBlob(function (blob) {
          if (!blob) return;
          loadFile(new File([blob], 'sample-ios-icon.png', { type: 'image/png' }));
        }, 'image/png');
      }

      /** 下载当前档 PNG。 */
      function downloadOut() {
        if (!outBlob) {
          setError(msg.empty);
          return;
        }
        var p = currentPreset();
        var a = document.createElement('a');
        var url = URL.createObjectURL(outBlob);
        a.href = url;
        a.download = p.name;
        document.body.appendChild(a);
        a.click();
        a.remove();
        URL.revokeObjectURL(url);
      }

      /**
       * 把 Blob 读成 Uint8Array。
       * @param {Blob} blob PNG
       * @returns {Promise<Uint8Array>}
       */
      function blobToU8(blob) {
        return blob.arrayBuffer().then(function (buf) { return new Uint8Array(buf); });
      }

      /**
       * 把一套尺寸画成 PNG 条目。
       * @param {{w:number,h:number,name:string}} spec 目标
       * @returns {Promise<{name:string,bytes:Uint8Array}>}
       */
      function pngEntry(spec) {
        var canvas = containCanvas(spec.w, spec.h);
        if (!canvas) return Promise.reject(new Error('canvas'));
        return canvasToPng(canvas).then(function (blob) {
          return blobToU8(blob).then(function (u8) {
            return { name: spec.name, bytes: u8 };
          });
        });
      }

      /** 打包预览档 + ZIP 额外槽位。 */
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
        var jobs = PRESETS.concat(ZIP_EXTRA).map(pngEntry);
        Promise.all(jobs).then(function (parts) {
          var files = {};
          parts.forEach(function (part) { files[part.name] = part.bytes; });
          var zipped = fflate.zipSync(files, { level: 1 });
          var blob = new Blob([zipped], { type: 'application/zip' });
          var a = document.createElement('a');
          var url = URL.createObjectURL(blob);
          a.href = url;
          a.download = 'ios-app-icon-sizes.zip';
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
      document.querySelectorAll('input[name="iaiSize"]').forEach(function (el) {
        el.addEventListener('change', function () { if (sourceBmp) renderIcon(); });
      });
      bgEl.addEventListener('input', function () { if (sourceBmp) renderIcon(); });

      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', loadSample);
      } else {
        loadSample();
      }
    })();
  </script>`;

	/** catalog 元数据。 */
	const toolMeta = getToolBySlug('ios-app-icon-size');
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
