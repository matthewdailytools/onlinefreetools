/**
 * LinkedIn 个人横幅工具页：cover 铺满 1584×396，并叠安全区（导出 JPEG 不含遮罩）。
 * slug: linkedin-banner-size；见 work-tasks/linkedin-banner-size/02-tool-info.md。
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
const PREFIX = 'tool_linkedin_banner_size';

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
 * 渲染 LinkedIn banner size 工具页。
 * @param opts.lang 当前 UI 语言
 * @param opts.defaultLang 默认（无前缀）语言
 * @param opts.enabledLangs 启用语言列表
 */
export const renderLinkedinBannerSizePage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	/** 工具规范路径（无语言前缀）。 */
	const toolPath = '/tools/linkedin-banner-size';
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
			currentSlug: 'linkedin-banner-size',
			currentAnchor: '#converter',
		}),
		id: 'toolNav',
	});

	/** 页脚 HTML。 */
	const footerHtml = renderFooter({ lang: opts.lang });

	/** 本页局部样式：超宽横幅预览 + 安全区叠层。 */
	const extraHeadHtml = `
  <style>
    .lb-wrap { position: relative; display: inline-block; max-width: 100%; }
    .lb-preview { max-height: 220px; width: auto; max-width: 100%; object-fit: contain; border: 1px solid #e9ecef; border-radius: .5rem; background: #111; display: block; }
    .lb-safe { position: absolute; inset: 0; width: 100%; height: 100%; pointer-events: none; border-radius: .5rem; }
    .lb-stats { display: flex; flex-wrap: wrap; gap: .5rem; }
    .lb-stat { border: 1px solid #e9ecef; border-radius: .5rem; padding: .45rem .65rem; background: #fff; min-width: 7.5rem; }
    .lb-stat strong { display: block; font-size: .92rem; }
  </style>`;

	/** 首屏交互区：选图、四档封面、质量、下载 JPEG。 */
	const contentHtml = `
    <div id="converter" class="tool-hero">
      <h1 class="tool-title">${escapeHtml(tx(opts.lang, 'title'))}</h1>
      <p class="tool-lead">${escapeHtml(description)}</p>
    </div>

    <div class="tool-panel">
      <label class="tool-dropzone mb-3" id="lbDrop" for="lbFile">
        <input type="file" id="lbFile" accept="image/*">
        <span class="tool-dropzone-title">${escapeHtml(tx(opts.lang, 'choose_image'))}</span>
        <span class="tool-dropzone-hint">${escapeHtml(tx(opts.lang, 'drop_hint'))}</span>
      </label>

      <div class="d-flex align-items-center tools-bar mb-3 flex-wrap gap-2">
        <div class="btn-group btn-group-sm" role="group" aria-label="${escapeHtml(tx(opts.lang, 'out_size_label'))}">
          <input type="radio" class="btn-check" name="lbSize" id="lbSizeLi" value="linkedin" checked>
          <label class="btn btn-outline-secondary" for="lbSizeLi">${escapeHtml(tx(opts.lang, 'size_linkedin'))}</label>
          <input type="radio" class="btn-check" name="lbSize" id="lbSizeFb" value="facebook">
          <label class="btn btn-outline-secondary" for="lbSizeFb">${escapeHtml(tx(opts.lang, 'size_facebook'))}</label>
          <input type="radio" class="btn-check" name="lbSize" id="lbSizeX" value="x">
          <label class="btn btn-outline-secondary" for="lbSizeX">${escapeHtml(tx(opts.lang, 'size_x'))}</label>
          <input type="radio" class="btn-check" name="lbSize" id="lbSizeYt" value="youtube">
          <label class="btn btn-outline-secondary" for="lbSizeYt">${escapeHtml(tx(opts.lang, 'size_youtube'))}</label>
        </div>
        <label class="small mb-0 d-flex align-items-center gap-1" for="lbQuality">${escapeHtml(tx(opts.lang, 'quality_label'))}
          <input type="range" id="lbQuality" min="70" max="95" value="90">
        </label>
        <button type="button" id="lbBtnSample" class="btn btn-outline-secondary btn-sm">${escapeHtml(tx(opts.lang, 'load_sample'))}</button>
        <button type="button" id="lbBtnDownload" class="btn btn-primary btn-sm" disabled>${escapeHtml(tx(opts.lang, 'download'))}</button>
        <button type="button" id="lbBtnClear" class="btn btn-outline-secondary btn-sm">${escapeHtml(tx(opts.lang, 'clear'))}</button>
      </div>

      <p id="lbError" class="alert alert-danger py-2 small mb-2" style="display:none;" role="alert"></p>
      <p id="lbStatus" class="small text-muted mb-3" role="status"></p>
      <p id="lbSafeHint" class="small text-muted mb-2">${escapeHtml(tx(opts.lang, 'safe_hint'))}</p>

      <div class="lb-stats mb-3" id="lbStats" hidden>
        <div class="lb-stat"><span class="small text-muted">${escapeHtml(tx(opts.lang, 'out_size_label'))}</span><strong id="lbOutSize">—</strong></div>
      </div>

      <div class="lb-wrap" id="lbWrap" hidden>
        <img id="lbPreview" class="lb-preview" alt="">
        <canvas id="lbSafe" class="lb-safe"></canvas>
      </div>
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

	/** 权威引用：LinkedIn 背景图帮助、YouTube 频道图安全区。 */
	const referencesHtml = renderToolReferencesSection({
		lang: opts.lang,
		links: [
			{
				label: 'LinkedIn Help — Background photo',
				href: 'https://www.linkedin.com/help/linkedin/answer/a1516715',
			},
			{
				label: 'YouTube Help — Channel art',
				href: 'https://support.google.com/youtube/answer/2972003',
			},
		],
	});

	/** 浏览器内 cover JPEG + 预览安全区；进页自动 loadSample()。 */
	const extraBodyHtml = `
  <script>
    (function () {
      /** 封面四档：默认 LinkedIn 个人横幅。 */
      var PRESETS = [
        { id: 'linkedin', w: 1584, h: 396, name: 'linkedin-banner-1584x396.jpg' },
        { id: 'facebook', w: 851, h: 315, name: 'facebook-cover-851x315.jpg' },
        { id: 'x', w: 1500, h: 500, name: 'x-header-1500x500.jpg' },
        { id: 'youtube', w: 2560, h: 1440, name: 'youtube-channel-2560x1440.jpg' }
      ];

      /** 拖放区。 */
      var drop = document.getElementById('lbDrop');
      /** 文件选择。 */
      var fileInput = document.getElementById('lbFile');
      /** JPEG 质量。 */
      var qualityEl = document.getElementById('lbQuality');
      /** 样例。 */
      var btnSample = document.getElementById('lbBtnSample');
      /** 下载。 */
      var btnDownload = document.getElementById('lbBtnDownload');
      /** 清空。 */
      var btnClear = document.getElementById('lbBtnClear');
      /** 错误条。 */
      var errEl = document.getElementById('lbError');
      /** 状态条。 */
      var statusEl = document.getElementById('lbStatus');
      /** 芯片。 */
      var statsEl = document.getElementById('lbStats');
      /** 输出尺寸。 */
      var outSizeEl = document.getElementById('lbOutSize');
      /** 预览包装。 */
      var wrapEl = document.getElementById('lbWrap');
      /** 预览图。 */
      var previewEl = document.getElementById('lbPreview');
      /** 安全区画布。 */
      var safeEl = document.getElementById('lbSafe');

      /** 界面文案。 */
      var msg = {
        empty: ${JSON.stringify(tx(opts.lang, 'empty'))},
        decode: ${JSON.stringify(tx(opts.lang, 'err_decode'))},
        working: ${JSON.stringify(tx(opts.lang, 'status_working'))},
        done: ${JSON.stringify(tx(opts.lang, 'status_done'))}
      };

      /** 源位图。 */
      var sourceBmp = null;
      /** 源宽。 */
      var srcW = 0;
      /** 源高。 */
      var srcH = 0;
      /** 当前 JPEG Blob（无遮罩）。 */
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
       * @returns {{id:string,w:number,h:number,name:string}}
       */
      function currentPreset() {
        var el = document.querySelector('input[name="lbSize"]:checked');
        var id = el && el.value ? el.value : 'linkedin';
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
       * 在预览上画半透明不安全区（不写入下载 JPEG）。
       * @param {string} id 预设 id
       */
      function paintSafeZone(id) {
        if (!safeEl || !previewEl) return;
        var w = previewEl.clientWidth || previewEl.naturalWidth;
        var h = previewEl.clientHeight || previewEl.naturalHeight;
        if (!w || !h) return;
        safeEl.width = w;
        safeEl.height = h;
        var ctx = safeEl.getContext('2d');
        if (!ctx) return;
        ctx.clearRect(0, 0, w, h);
        ctx.fillStyle = 'rgba(15, 23, 42, 0.42)';
        if (id === 'linkedin') {
          ctx.beginPath();
          ctx.arc(w * 0.11, h * 1.05, h * 0.95, 0, Math.PI * 2);
          ctx.rect(0, h * 0.52, w * 0.28, h * 0.48);
          ctx.fill();
        } else if (id === 'youtube') {
          var sx = ((2560 - 1546) / 2) / 2560 * w;
          var sy = ((1440 - 423) / 2) / 1440 * h;
          var sw = 1546 / 2560 * w;
          var sh = 423 / 1440 * h;
          ctx.fillRect(0, 0, w, sy);
          ctx.fillRect(0, sy + sh, w, h - sy - sh);
          ctx.fillRect(0, sy, sx, sh);
          ctx.fillRect(sx + sw, sy, w - sx - sw, sh);
        } else if (id === 'facebook') {
          ctx.fillRect(0, 0, w * 0.1, h);
          ctx.fillRect(w * 0.9, 0, w * 0.1, h);
        } else {
          ctx.fillRect(0, 0, w * 0.08, h);
          ctx.fillRect(w * 0.92, 0, w * 0.08, h);
        }
      }

      /**
       * 按当前预设渲染预览 JPEG，并叠安全区。
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
          previewEl.onload = function () {
            wrapEl.hidden = false;
            paintSafeZone(p.id);
          };
          previewEl.src = previewUrl;
          previewEl.hidden = false;
          previewEl.style.aspectRatio = p.w + ' / ' + p.h;
          outSizeEl.textContent = p.w + '\\u00d7' + p.h;
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
          return renderShot();
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
        wrapEl.hidden = true;
        previewEl.hidden = true;
        if (previewUrl) { URL.revokeObjectURL(previewUrl); previewUrl = ''; }
        previewEl.removeAttribute('src');
        setError('');
        setStatus('');
      }

      /**
       * 进页样例：超宽横图 cover 到 1584×396。
       * 函数名必须是 loadSample，以满足 lint:tool-page --require-html。
       */
      function loadSample() {
        var c = document.createElement('canvas');
        c.width = 2000;
        c.height = 600;
        var ctx = c.getContext('2d');
        if (!ctx) return;
        var g = ctx.createLinearGradient(0, 0, c.width, 0);
        g.addColorStop(0, '#0a66c2');
        g.addColorStop(1, '#062a4d');
        ctx.fillStyle = g;
        ctx.fillRect(0, 0, c.width, c.height);
        ctx.fillStyle = '#fff';
        ctx.font = 'bold 64px sans-serif';
        ctx.fillText('LinkedIn sample', 520, 280);
        ctx.font = '32px sans-serif';
        ctx.fillText('Keep type out of the avatar', 520, 340);
        c.toBlob(function (blob) {
          if (!blob) return;
          loadFile(new File([blob], 'sample-linkedin-banner.jpg', { type: 'image/jpeg' }));
        }, 'image/jpeg', 0.92);
      }

      /** 下载当前档 JPEG（无安全区遮罩）。 */
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
      document.querySelectorAll('input[name="lbSize"]').forEach(function (el) {
        el.addEventListener('change', function () { if (sourceBmp) renderShot(); });
      });
      qualityEl.addEventListener('input', function () { if (sourceBmp) renderShot(); });
      window.addEventListener('resize', function () {
        if (!sourceBmp) return;
        paintSafeZone(currentPreset().id);
      });

      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', loadSample);
      } else {
        loadSample();
      }
    })();
  </script>`;

	/** catalog 元数据。 */
	const toolMeta = getToolBySlug('linkedin-banner-size');
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
