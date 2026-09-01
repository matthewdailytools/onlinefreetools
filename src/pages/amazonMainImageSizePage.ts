/**
 * 亚马逊主图尺寸工具页：一张商品图 → 白底正方形 JPEG（默认 2000×2000）。
 * slug: amazon-main-image-size；见 work-tasks/amazon-main-image-size/02-tool-info.md。
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
const PREFIX = 'tool_amazon_main_image_size';

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
 * 渲染亚马逊主图尺寸工具页。
 * @param opts.lang 当前 UI 语言
 * @param opts.defaultLang 默认（无前缀）语言
 * @param opts.enabledLangs 启用语言列表
 */
export const renderAmazonMainImageSizePage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	/** 工具规范路径（无语言前缀）。 */
	const toolPath = '/tools/amazon-main-image-size';
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
			currentSlug: 'amazon-main-image-size',
			currentAnchor: '#converter',
		}),
		id: 'toolNav',
	});

	/** 页脚 HTML。 */
	const footerHtml = renderFooter({ lang: opts.lang });

	/** 本页局部样式：预览与芯片。 */
	const extraHeadHtml = `
  <style>
    .amz-preview { max-width: 420px; width: 100%; aspect-ratio: 1 / 1; object-fit: contain; border: 1px solid #e9ecef; border-radius: .5rem; background: #fff; }
    .amz-stats { display: flex; flex-wrap: wrap; gap: .5rem; }
    .amz-stat { border: 1px solid #e9ecef; border-radius: .5rem; padding: .45rem .65rem; background: #fff; min-width: 7.5rem; }
    .amz-stat strong { display: block; font-size: .92rem; }
  </style>`;

	/** 首屏交互区：选图、2000/1600、85% 占框、下载。 */
	const contentHtml = `
    <div id="converter" class="tool-hero">
      <h1 class="tool-title">${escapeHtml(tx(opts.lang, 'title'))}</h1>
      <p class="tool-lead">${escapeHtml(description)}</p>
    </div>

    <div class="tool-panel">
      <label class="tool-dropzone mb-3" id="amzDrop" for="amzFile">
        <input type="file" id="amzFile" accept="image/*">
        <span class="tool-dropzone-title">${escapeHtml(tx(opts.lang, 'choose_image'))}</span>
        <span class="tool-dropzone-hint">${escapeHtml(tx(opts.lang, 'drop_hint'))}</span>
      </label>

      <div class="d-flex align-items-center tools-bar mb-3 flex-wrap gap-2">
        <div class="btn-group btn-group-sm" role="group" aria-label="${escapeHtml(tx(opts.lang, 'out_size_label'))}">
          <input type="radio" class="btn-check" name="amzSide" id="amzSide2000" value="2000" checked>
          <label class="btn btn-outline-secondary" for="amzSide2000">${escapeHtml(tx(opts.lang, 'size_2000'))}</label>
          <input type="radio" class="btn-check" name="amzSide" id="amzSide1600" value="1600">
          <label class="btn btn-outline-secondary" for="amzSide1600">${escapeHtml(tx(opts.lang, 'size_1600'))}</label>
        </div>
        <label class="small mb-0 d-flex align-items-center gap-1">
          <input type="checkbox" id="amzFill85" checked>
          ${escapeHtml(tx(opts.lang, 'check_fill'))}
        </label>
        <label class="small mb-0 d-flex align-items-center gap-1" for="amzQuality">${escapeHtml(tx(opts.lang, 'quality_label'))}
          <input type="range" id="amzQuality" min="70" max="95" value="90">
        </label>
        <button type="button" id="amzBtnSample" class="btn btn-outline-secondary btn-sm">${escapeHtml(tx(opts.lang, 'load_sample'))}</button>
        <button type="button" id="amzBtnDownload" class="btn btn-primary btn-sm" disabled>${escapeHtml(tx(opts.lang, 'download'))}</button>
        <button type="button" id="amzBtnClear" class="btn btn-outline-secondary btn-sm">${escapeHtml(tx(opts.lang, 'clear'))}</button>
      </div>

      <p id="amzError" class="alert alert-danger py-2 small mb-2" style="display:none;" role="alert"></p>
      <p id="amzStatus" class="small text-muted mb-3" role="status"></p>

      <div class="amz-stats mb-3" id="amzStats" hidden>
        <div class="amz-stat"><span class="small text-muted">${escapeHtml(tx(opts.lang, 'out_size_label'))}</span><strong id="amzOutSize">—</strong></div>
        <div class="amz-stat"><span class="small text-muted">${escapeHtml(tx(opts.lang, 'zoom_label'))}</span><strong id="amzZoom">—</strong></div>
        <div class="amz-stat"><span class="small text-muted">${escapeHtml(tx(opts.lang, 'fill_label'))}</span><strong id="amzFill">—</strong></div>
      </div>

      <img id="amzPreview" class="amz-preview" alt="" hidden>
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

	/** 权威引用：Seller 主图帮助、Canvas。 */
	const referencesHtml = renderToolReferencesSection({
		lang: opts.lang,
		links: [
			{
				label: 'Amazon Seller Central — Product image requirements',
				href: 'https://sellercentral.amazon.com/help/hub/reference/G1641',
			},
			{
				label: 'MDN — Canvas API',
				href: 'https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API',
			},
		],
	});

	/** 浏览器内 contain + 白底 JPEG；进页自动 loadSample()。 */
	const extraBodyHtml = `
  <script>
    (function () {
      /** 亚马逊缩放建议的最长边下限（像素）。 */
      var ZOOM_FLOOR = 1000;
      /** 建议商品约占框比例。 */
      var FILL_RATIO = 0.85;

      /** 拖放区。 */
      var drop = document.getElementById('amzDrop');
      /** 文件选择。 */
      var fileInput = document.getElementById('amzFile');
      /** 2000 边长。 */
      var side2000 = document.getElementById('amzSide2000');
      /** 85% 占框开关。 */
      var fillEl = document.getElementById('amzFill85');
      /** JPEG 质量滑杆。 */
      var qualityEl = document.getElementById('amzQuality');
      /** 样例按钮。 */
      var btnSample = document.getElementById('amzBtnSample');
      /** 下载按钮。 */
      var btnDownload = document.getElementById('amzBtnDownload');
      /** 清空按钮。 */
      var btnClear = document.getElementById('amzBtnClear');
      /** 错误条。 */
      var errEl = document.getElementById('amzError');
      /** 状态条。 */
      var statusEl = document.getElementById('amzStatus');
      /** 芯片容器。 */
      var statsEl = document.getElementById('amzStats');
      /** 输出边长芯片。 */
      var outSizeEl = document.getElementById('amzOutSize');
      /** 缩放地板芯片。 */
      var zoomEl = document.getElementById('amzZoom');
      /** 占框芯片。 */
      var fillChipEl = document.getElementById('amzFill');
      /** 预览图。 */
      var previewEl = document.getElementById('amzPreview');

      /** 界面文案。 */
      var msg = {
        empty: ${JSON.stringify(tx(opts.lang, 'empty'))},
        decode: ${JSON.stringify(tx(opts.lang, 'err_decode'))},
        working: ${JSON.stringify(tx(opts.lang, 'status_working'))},
        done: ${JSON.stringify(tx(opts.lang, 'status_done'))},
        zoomOk: ${JSON.stringify(tx(opts.lang, 'zoom_ok'))},
        zoomFail: ${JSON.stringify(tx(opts.lang, 'zoom_fail'))}
      };

      /** 当前源图位图（ImageBitmap 或 HTMLImageElement）。 */
      var sourceBmp = null;
      /** 源宽。 */
      var srcW = 0;
      /** 源高。 */
      var srcH = 0;
      /** 最近一次导出 Blob。 */
      var outBlob = null;
      /** 预览 object URL。 */
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
       * 当前正方形边长。
       * @returns {number}
       */
      function currentSide() {
        return side2000 && side2000.checked ? 2000 : 1600;
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
       * Canvas 导出 JPEG Blob。
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
       * 在白底正方形上 contain 绘制商品图。
       * @returns {Promise<void>}
       */
      function renderMain() {
        if (!sourceBmp || !srcW || !srcH) {
          setError(msg.empty);
          return Promise.resolve();
        }
        setError('');
        setStatus(msg.working);
        var side = currentSide();
        var canvas = document.createElement('canvas');
        canvas.width = side;
        canvas.height = side;
        var ctx = canvas.getContext('2d');
        if (!ctx) return Promise.resolve();
        ctx.fillStyle = 'rgb(255,255,255)';
        ctx.fillRect(0, 0, side, side);
        var fit = fillEl && fillEl.checked ? FILL_RATIO : 1;
        var scale = Math.min(side / srcW, side / srcH) * fit;
        var dw = srcW * scale;
        var dh = srcH * scale;
        var dx = (side - dw) / 2;
        var dy = (side - dh) / 2;
        ctx.drawImage(sourceBmp, dx, dy, dw, dh);
        var fillPct = Math.round(Math.max(dw / side, dh / side) * 100);
        return canvasToJpeg(canvas, currentQuality()).then(function (blob) {
          outBlob = blob;
          if (previewUrl) URL.revokeObjectURL(previewUrl);
          previewUrl = URL.createObjectURL(blob);
          previewEl.src = previewUrl;
          previewEl.hidden = false;
          outSizeEl.textContent = side + '×' + side;
          zoomEl.textContent = side >= ZOOM_FLOOR ? msg.zoomOk : msg.zoomFail;
          fillChipEl.textContent = fillPct + '%';
          statsEl.hidden = false;
          btnDownload.disabled = false;
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
          return renderMain();
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
        statsEl.hidden = true;
        previewEl.hidden = true;
        if (previewUrl) { URL.revokeObjectURL(previewUrl); previewUrl = ''; }
        previewEl.removeAttribute('src');
        setError('');
        setStatus('');
      }

      /**
       * 进页样例：合成一张非正方形商品色块图再导出 2000×2000。
       * 函数名必须是 loadSample，以满足 lint:tool-page --require-html。
       */
      function loadSample() {
        var c = document.createElement('canvas');
        c.width = 1400;
        c.height = 900;
        var ctx = c.getContext('2d');
        if (!ctx) return;
        ctx.fillStyle = '#dbe8ef';
        ctx.fillRect(0, 0, c.width, c.height);
        ctx.fillStyle = '#2f6f8f';
        ctx.fillRect(280, 80, 840, 740);
        ctx.fillStyle = '#fff';
        ctx.font = 'bold 48px sans-serif';
        ctx.fillText('Sample product', 320, 200);
        ctx.font = '28px sans-serif';
        ctx.fillText('1400 × 900', 320, 250);
        c.toBlob(function (blob) {
          if (!blob) return;
          var file = new File([blob], 'sample-main.jpg', { type: 'image/jpeg' });
          loadFile(file);
        }, 'image/jpeg', 0.92);
      }

      /** 下载当前 JPEG。 */
      function downloadOut() {
        if (!outBlob) {
          setError(msg.empty);
          return;
        }
        var a = document.createElement('a');
        var url = URL.createObjectURL(outBlob);
        a.href = url;
        a.download = 'amazon-main-' + currentSide() + '.jpg';
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
      btnClear.addEventListener('click', reset);
      side2000.addEventListener('change', function () { if (sourceBmp) renderMain(); });
      document.getElementById('amzSide1600').addEventListener('change', function () { if (sourceBmp) renderMain(); });
      fillEl.addEventListener('change', function () { if (sourceBmp) renderMain(); });
      qualityEl.addEventListener('change', function () { if (sourceBmp) renderMain(); });

      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', loadSample);
      } else {
        loadSample();
      }
    })();
  </script>`;

	/** catalog 元数据，用于 FAQ 与 JSON-LD。 */
	const toolMeta = getToolBySlug('amazon-main-image-size');
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
