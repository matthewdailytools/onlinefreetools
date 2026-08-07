/**
 * 图片格式转换工具页：PNG / JPEG / WebP / AVIF（浏览器 Canvas toBlob）。
 * slug: image-format-converter；同页目标格式选择，不拆 png-to-webp 等近义 URL。
 * 见 work-tasks/image-format-converter/02-tool-info.md。
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

/** 为路径加上语言前缀（默认语无前缀）。 */
const withLangPrefix = (lang: SiteLang, pathname: string, defaultLang: SiteLang) => {
	const safe = pathname.startsWith('/') ? pathname : `/${pathname}`;
	return lang === defaultLang ? safe : `/${lang}${safe}`;
};

/**
 * 渲染图片格式转换工具页。
 * @param opts.lang 当前语言
 * @param opts.defaultLang 站点默认语言
 * @param opts.enabledLangs 启用语言列表（语言切换器用全量 supportedLangs）
 */
export const renderImageFormatConverterPage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	const toolPath = '/tools/image-format-converter';
	const canonicalPath = withLangPrefix(opts.lang, toolPath, opts.defaultLang);
	const title = `${t(opts.lang, 'tool_image_format_converter_title')} | ${t(opts.lang, 'brand')}`;
	const description = t(opts.lang, 'tool_image_format_converter_description');

	const navItems = buildToolPageNavItems(opts.lang, opts.defaultLang);

	/** 语言切换链接始终带显式语言前缀（含默认语）。 */
	const withExplicitLangPrefix = (code: SiteLang, pathname: string) => {
		const safe = pathname.startsWith('/') ? pathname : `/${pathname}`;
		return `/${code}${safe}`.replace(/\/{2,}/g, '/');
	};

	const langAlternates: Record<string, string> = Object.fromEntries(
		(supportedLangs || []).map((code) => [code, withExplicitLangPrefix(code, toolPath)])
	);

	const alternates: HreflangAlternate[] = (supportedLangs || []).map((code) => ({
		lang: code,
		href: `https://onlinefreetools.org${withLangPrefix(code, toolPath, opts.defaultLang)}`,
	}));

	const headerHtml = renderHeader({
		lang: opts.lang,
		brandHref: withLangPrefix(opts.lang, '/', opts.defaultLang),
		navItems,
		enabledLangs: supportedLangs,
		langAlternates,
	});

	const sidebarHtml = renderSidebar({
		title: t(opts.lang, 'nav_tools'),
		items: buildToolSidebarItems({
			lang: opts.lang,
			defaultLang: opts.defaultLang,
			currentSlug: 'image-format-converter',
			currentAnchor: '#converter',
		}),
		id: 'toolNav',
	});

	const footerHtml = renderFooter({ lang: opts.lang });

	/** 页内样式：拖放区、预览双栏、质量滑条与 JPEG 底色行。 */
	const extraHeadHtml = `
  <style>
    .tools-bar { gap: .5rem; }
    .opt-group { gap: .75rem; align-items: center; }
    .ifc-drop {
      border: 2px dashed #adb5bd; border-radius: .5rem; padding: 1.25rem; text-align: center;
      background: #f8f9fa; cursor: pointer; transition: border-color .15s, background .15s;
    }
    .ifc-drop.dragover { border-color: #0a6ebd; background: #e7f1f8; }
    .ifc-drop input[type=file] { display: none; }
    #ifcPreviewIn, #ifcPreviewOut {
      max-width: 100%; max-height: 280px; object-fit: contain; background:
        linear-gradient(45deg, #eee 25%, transparent 25%),
        linear-gradient(-45deg, #eee 25%, transparent 25%),
        linear-gradient(45deg, transparent 75%, #eee 75%),
        linear-gradient(-45deg, transparent 75%, #eee 75%);
      background-size: 16px 16px; background-position: 0 0, 0 8px, 8px -8px, -8px 0;
      border: 1px solid #dee2e6; border-radius: .5rem;
    }
    .ifc-preview-wrap { min-height: 120px; display: flex; align-items: center; justify-content: center; }
    #ifcQuality[disabled] { opacity: .5; }
    #ifcJpegBgRow[hidden] { display: none !important; }
  </style>`;

	const contentHtml = `
    <div id="converter" class="mb-3">
      <h1 class="h4 mb-1">${escapeHtml(t(opts.lang, 'tool_image_format_converter_title'))}</h1>
      <p class="text-muted mb-0">${escapeHtml(description)}</p>
    </div>

    <div class="d-flex align-items-center tools-bar mb-2 flex-wrap">
      <button type="button" id="ifcBtnConvert" class="btn btn-primary btn-sm">${escapeHtml(t(opts.lang, 'tool_image_format_converter_convert'))}</button>
      <button type="button" id="ifcBtnDownload" class="btn btn-outline-primary btn-sm" disabled>${escapeHtml(t(opts.lang, 'tool_image_format_converter_download'))}</button>
      <button type="button" id="ifcBtnSample" class="btn btn-outline-secondary btn-sm">${escapeHtml(t(opts.lang, 'tool_image_format_converter_sample'))}</button>
      <button type="button" id="ifcBtnClear" class="btn btn-outline-secondary btn-sm">${escapeHtml(t(opts.lang, 'tool_image_format_converter_clear'))}</button>
    </div>

    <div class="d-flex align-items-center opt-group mb-3 flex-wrap">
      <label class="form-label mb-0" for="ifcTarget">${escapeHtml(t(opts.lang, 'tool_image_format_converter_target_label'))}</label>
      <select id="ifcTarget" class="form-select form-select-sm" style="width:auto;">
        <option value="image/webp" selected>${escapeHtml(t(opts.lang, 'tool_image_format_converter_format_webp'))}</option>
        <option value="image/png">${escapeHtml(t(opts.lang, 'tool_image_format_converter_format_png'))}</option>
        <option value="image/jpeg">${escapeHtml(t(opts.lang, 'tool_image_format_converter_format_jpeg'))}</option>
        <option value="image/avif">${escapeHtml(t(opts.lang, 'tool_image_format_converter_format_avif'))}</option>
      </select>
      <label class="form-label mb-0" for="ifcQuality">${escapeHtml(t(opts.lang, 'tool_image_format_converter_quality_label'))}</label>
      <input type="range" id="ifcQuality" min="50" max="100" value="85" step="1" style="width:140px;">
      <span id="ifcQualityVal" class="small text-muted">0.85</span>
      <span id="ifcQualityHint" class="small text-muted"></span>
    </div>

    <div id="ifcJpegBgRow" class="d-flex align-items-center opt-group mb-3 flex-wrap" hidden>
      <span class="form-label mb-0">${escapeHtml(t(opts.lang, 'tool_image_format_converter_jpeg_bg_label'))}</span>
      <div class="btn-group" role="group" aria-label="${escapeHtml(t(opts.lang, 'tool_image_format_converter_jpeg_bg_label'))}">
        <input type="radio" class="btn-check" name="ifcJpegBg" id="ifcBgWhite" value="#ffffff" checked>
        <label class="btn btn-outline-secondary btn-sm" for="ifcBgWhite">${escapeHtml(t(opts.lang, 'tool_image_format_converter_jpeg_bg_white'))}</label>
        <input type="radio" class="btn-check" name="ifcJpegBg" id="ifcBgBlack" value="#000000">
        <label class="btn btn-outline-secondary btn-sm" for="ifcBgBlack">${escapeHtml(t(opts.lang, 'tool_image_format_converter_jpeg_bg_black'))}</label>
        <input type="radio" class="btn-check" name="ifcJpegBg" id="ifcBgCustom" value="custom">
        <label class="btn btn-outline-secondary btn-sm" for="ifcBgCustom">${escapeHtml(t(opts.lang, 'tool_image_format_converter_jpeg_bg_custom'))}</label>
      </div>
      <input type="color" id="ifcBgColor" value="#ffffff" title="${escapeHtml(t(opts.lang, 'tool_image_format_converter_jpeg_bg_custom'))}" style="width:2.25rem;height:1.75rem;padding:0;border:1px solid #ced4da;">
    </div>

    <label class="ifc-drop d-block mb-3" id="ifcDrop" for="ifcFile">
      <input type="file" id="ifcFile" accept="image/png,image/jpeg,image/webp,image/avif,image/gif,image/bmp,image/*">
      <strong>${escapeHtml(t(opts.lang, 'tool_image_format_converter_choose_file'))}</strong>
      <div class="small text-muted mt-1">${escapeHtml(t(opts.lang, 'tool_image_format_converter_drop_hint'))}</div>
      <div id="ifcFileName" class="small mt-2 mb-0"></div>
    </label>

    <p id="ifcWarn" class="small text-warning mb-2" style="display:none;" role="status"></p>
    <p id="ifcError" class="small text-danger mb-2" style="display:none;" role="alert"></p>
    <p id="ifcStatus" class="small text-muted mb-2" role="status"></p>

    <div class="row g-3 mb-4">
      <div class="col-12 col-lg-6">
        <label class="form-label">${escapeHtml(t(opts.lang, 'tool_image_format_converter_preview_in'))}</label>
        <div class="ifc-preview-wrap"><img id="ifcPreviewIn" alt="" hidden></div>
        <p id="ifcStatsIn" class="small text-muted mt-2 mb-0"></p>
      </div>
      <div class="col-12 col-lg-6">
        <label class="form-label">${escapeHtml(t(opts.lang, 'tool_image_format_converter_preview_out'))}</label>
        <div class="ifc-preview-wrap"><img id="ifcPreviewOut" alt="" hidden></div>
        <p id="ifcStatsOut" class="small text-muted mt-2 mb-0"></p>
      </div>
    </div>`;

	const igHtml = renderToolIgSections({
		lang: opts.lang,
		prefix: 'tool_image_format_converter',
		mode: 'rules',
		usecaseCount: 3,
		ruleItemCount: 4,
	});

	const referencesHtml = renderToolReferencesSection({
		lang: opts.lang,
		links: [
			{ label: 'MDN — HTMLCanvasElement.toBlob()', href: 'https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/toBlob' },
			{ label: 'WebP — Google Developers', href: 'https://developers.google.com/speed/webp' },
			{ label: 'AV1 Image File Format (AVIF)', href: 'https://aomediacodec.github.io/av1-avif/' },
			{ label: 'Portable Network Graphics (PNG)', href: 'https://www.w3.org/TR/png-3/' },
		],
	});

	/**
	 * 客户端逻辑：本地解码 → Canvas → toBlob；校验 blob.type；JPEG 底色；探测编码支持。
	 * 全部在浏览器内完成，不上传文件。
	 */
	const extraBodyHtml = `
  <script>
    (function () {
      /** 单文件软上限（字节），超出仍可试但提示卡顿/内存风险 */
      var SOFT_BYTES = 25 * 1024 * 1024;
      /** 单边像素软上限 */
      var SOFT_EDGE = 8192;

      var drop = document.getElementById('ifcDrop');
      var fileInput = document.getElementById('ifcFile');
      var fileNameEl = document.getElementById('ifcFileName');
      var targetSel = document.getElementById('ifcTarget');
      var qualityEl = document.getElementById('ifcQuality');
      var qualityVal = document.getElementById('ifcQualityVal');
      var qualityHint = document.getElementById('ifcQualityHint');
      var jpegBgRow = document.getElementById('ifcJpegBgRow');
      var bgColorEl = document.getElementById('ifcBgColor');
      var btnConvert = document.getElementById('ifcBtnConvert');
      var btnDownload = document.getElementById('ifcBtnDownload');
      var btnSample = document.getElementById('ifcBtnSample');
      var btnClear = document.getElementById('ifcBtnClear');
      var warnEl = document.getElementById('ifcWarn');
      var errEl = document.getElementById('ifcError');
      var statusEl = document.getElementById('ifcStatus');
      var previewIn = document.getElementById('ifcPreviewIn');
      var previewOut = document.getElementById('ifcPreviewOut');
      var statsIn = document.getElementById('ifcStatsIn');
      var statsOut = document.getElementById('ifcStatsOut');

      var msg = {
        empty: ${JSON.stringify(t(opts.lang, 'tool_image_format_converter_empty'))},
        decode: ${JSON.stringify(t(opts.lang, 'tool_image_format_converter_err_decode'))},
        encode: ${JSON.stringify(t(opts.lang, 'tool_image_format_converter_err_encode'))},
        mismatch: ${JSON.stringify(t(opts.lang, 'tool_image_format_converter_err_mime_mismatch'))},
        large: ${JSON.stringify(t(opts.lang, 'tool_image_format_converter_warn_large'))},
        edge: ${JSON.stringify(t(opts.lang, 'tool_image_format_converter_warn_edge'))},
        anim: ${JSON.stringify(t(opts.lang, 'tool_image_format_converter_warn_animation'))},
        qualityPng: ${JSON.stringify(t(opts.lang, 'tool_image_format_converter_quality_hint_png'))},
        qualityLossless: ${JSON.stringify(t(opts.lang, 'tool_image_format_converter_quality_hint_webp_lossless'))},
        avifOff: ${JSON.stringify(t(opts.lang, 'tool_image_format_converter_avif_unsupported'))},
        converting: ${JSON.stringify(t(opts.lang, 'tool_image_format_converter_status_converting'))},
        done: ${JSON.stringify(t(opts.lang, 'tool_image_format_converter_status_done'))},
        statsTpl: ${JSON.stringify(t(opts.lang, 'tool_image_format_converter_stats_tpl'))}
      };

      /** @type {File|null} 当前源文件 */
      var sourceFile = null;
      /** @type {Blob|null} 最近一次成功输出 */
      var outputBlob = null;
      /** @type {string} 输出建议文件名 */
      var outputName = 'converted.webp';
      /** @type {Record<string, boolean>} 编码探测缓存 */
      var encodeSupport = {};

      /** 显示或隐藏警告文案。 */
      function setWarn(text) {
        if (!text) { warnEl.style.display = 'none'; warnEl.textContent = ''; return; }
        warnEl.textContent = text;
        warnEl.style.display = '';
      }

      /** 显示或隐藏错误文案。 */
      function setError(text) {
        if (!text) { errEl.style.display = 'none'; errEl.textContent = ''; return; }
        errEl.textContent = text;
        errEl.style.display = '';
      }

      /** 设置状态行。 */
      function setStatus(text) {
        statusEl.textContent = text || '';
      }

      /**
       * 把字节数格式化为可读字符串。
       * @param {number} n
       */
      function formatBytes(n) {
        if (n < 1024) return n + ' B';
        if (n < 1024 * 1024) return (n / 1024).toFixed(1) + ' KB';
        return (n / (1024 * 1024)).toFixed(2) + ' MB';
      }

      /**
       * 用模板填充统计行：{mime} {w} {h} {bytes}
       * @param {string} mime
       * @param {number} w
       * @param {number} h
       * @param {number} bytes
       */
      function formatStats(mime, w, h, bytes) {
        return msg.statsTpl
          .replace('{mime}', mime || '—')
          .replace('{w}', String(w))
          .replace('{h}', String(h))
          .replace('{bytes}', formatBytes(bytes));
      }

      /**
       * 规范化 MIME：部分环境返回 image/jpg。
       * @param {string} mime
       */
      function normalizeMime(mime) {
        if (!mime) return '';
        var m = String(mime).toLowerCase();
        if (m === 'image/jpg') return 'image/jpeg';
        return m;
      }

      /**
       * 目标 MIME 对应扩展名。
       * @param {string} mime
       */
      function extFor(mime) {
        mime = normalizeMime(mime);
        if (mime === 'image/jpeg') return 'jpg';
        if (mime === 'image/png') return 'png';
        if (mime === 'image/webp') return 'webp';
        if (mime === 'image/avif') return 'avif';
        return 'bin';
      }

      /** 当前质量 0–1。 */
      function quality01() {
        return Math.max(0.5, Math.min(1, Number(qualityEl.value) / 100));
      }

      /** 当前 JPEG 底色（#rrggbb）。 */
      function jpegBg() {
        var picked = document.querySelector('input[name="ifcJpegBg"]:checked');
        var v = picked ? picked.value : '#ffffff';
        if (v === 'custom') return bgColorEl.value || '#ffffff';
        return v;
      }

      /** 按目标格式更新质量提示、JPEG 底色行、禁用态。 */
      function syncOptionsUi() {
        var mime = targetSel.value;
        var isPng = mime === 'image/png';
        var isJpeg = mime === 'image/jpeg';
        qualityEl.disabled = isPng;
        qualityVal.textContent = quality01().toFixed(2);
        if (isPng) {
          qualityHint.textContent = msg.qualityPng;
        } else if (mime === 'image/webp' && Number(qualityEl.value) >= 100) {
          qualityHint.textContent = msg.qualityLossless;
        } else {
          qualityHint.textContent = '';
        }
        jpegBgRow.hidden = !isJpeg;
        var avifOpt = targetSel.querySelector('option[value="image/avif"]');
        if (avifOpt && encodeSupport['image/avif'] === false) {
          avifOpt.disabled = true;
          avifOpt.title = msg.avifOff;
        }
      }

      /**
       * 探测浏览器是否能用 toBlob 编码指定 MIME（校验返回 type）。
       * @param {string} mime
       * @returns {Promise<boolean>}
       */
      function probeEncode(mime) {
        return new Promise(function (resolve) {
          try {
            var c = document.createElement('canvas');
            c.width = 2;
            c.height = 2;
            var ctx = c.getContext('2d');
            if (ctx) {
              ctx.fillStyle = '#808080';
              ctx.fillRect(0, 0, 2, 2);
            }
            if (!c.toBlob) {
              resolve(false);
              return;
            }
            c.toBlob(function (blob) {
              resolve(!!blob && normalizeMime(blob.type) === normalizeMime(mime));
            }, mime, 0.8);
          } catch (e) {
            resolve(false);
          }
        });
      }

      /** 启动时探测 WebP / AVIF 编码能力。 */
      function probeAll() {
        return Promise.all([
          probeEncode('image/webp').then(function (ok) { encodeSupport['image/webp'] = ok; }),
          probeEncode('image/avif').then(function (ok) { encodeSupport['image/avif'] = ok; }),
          probeEncode('image/jpeg').then(function (ok) { encodeSupport['image/jpeg'] = ok; }),
          probeEncode('image/png').then(function (ok) { encodeSupport['image/png'] = ok; })
        ]).then(function () {
          syncOptionsUi();
          if (encodeSupport['image/avif'] === false && targetSel.value === 'image/avif') {
            targetSel.value = 'image/webp';
            setWarn(msg.avifOff);
            syncOptionsUi();
          }
        });
      }

      /**
       * 从 File/Blob 解码为 ImageBitmap（优先）或 HTMLImageElement。
       * @param {Blob} blob
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
       * Canvas toBlob 封装为 Promise，并校验 MIME。
       * @param {HTMLCanvasElement} canvas
       * @param {string} mime
       * @param {number} q
       * @returns {Promise<Blob>}
       */
      function canvasToBlob(canvas, mime, q) {
        return new Promise(function (resolve, reject) {
          try {
            canvas.toBlob(function (blob) {
              if (!blob) {
                reject(new Error('encode'));
                return;
              }
              var got = normalizeMime(blob.type);
              var want = normalizeMime(mime);
              if (got && want && got !== want) {
                reject(new Error('mismatch'));
                return;
              }
              resolve(blob);
            }, mime, mime === 'image/png' ? undefined : q);
          } catch (e) {
            reject(e);
          }
        });
      }

      /**
       * 装载源文件：预览、统计、软上限警告。
       * @param {File} file
       */
      function loadFile(file) {
        setError('');
        setWarn('');
        outputBlob = null;
        btnDownload.disabled = true;
        previewOut.hidden = true;
        previewOut.removeAttribute('src');
        statsOut.textContent = '';
        sourceFile = file;
        fileNameEl.textContent = file.name || '';

        var warns = [];
        if (file.size > SOFT_BYTES) warns.push(msg.large);
        if (/gif/i.test(file.type) || /gif$/i.test(file.name || '')) warns.push(msg.anim);
        if (warns.length) setWarn(warns.join(' '));

        var inUrl = URL.createObjectURL(file);
        previewIn.onload = function () {
          URL.revokeObjectURL(inUrl);
        };
        previewIn.onerror = function () {
          URL.revokeObjectURL(inUrl);
        };
        previewIn.src = inUrl;
        previewIn.hidden = false;

        decodeImage(file)
          .then(function (dec) {
            if (dec.w > SOFT_EDGE || dec.h > SOFT_EDGE) {
              setWarn((warnEl.textContent ? warnEl.textContent + ' ' : '') + msg.edge);
            }
            statsIn.textContent = formatStats(file.type || 'image/*', dec.w, dec.h, file.size);
            if (dec.bitmap && typeof dec.bitmap.close === 'function') dec.bitmap.close();
          })
          .catch(function () {
            setError(msg.decode);
            statsIn.textContent = '';
          });
      }

      /** 执行转换。 */
      function convert() {
        setError('');
        if (!sourceFile) {
          setError(msg.empty);
          return;
        }
        var mime = targetSel.value;
        if (encodeSupport[mime] === false) {
          setError(mime === 'image/avif' ? msg.avifOff : msg.encode);
          return;
        }
        setStatus(msg.converting);
        btnConvert.disabled = true;
        var q = quality01();
        var bg = jpegBg();

        decodeImage(sourceFile)
          .then(function (dec) {
            var canvas = document.createElement('canvas');
            canvas.width = dec.w;
            canvas.height = dec.h;
            var ctx = canvas.getContext('2d');
            if (!ctx) throw new Error('encode');
            if (mime === 'image/jpeg') {
              ctx.fillStyle = bg;
              ctx.fillRect(0, 0, dec.w, dec.h);
            }
            ctx.drawImage(dec.bitmap, 0, 0);
            if (dec.bitmap && typeof dec.bitmap.close === 'function') dec.bitmap.close();
            return canvasToBlob(canvas, mime, q).then(function (blob) {
              return { blob: blob, w: dec.w, h: dec.h };
            });
          })
          .then(function (res) {
            outputBlob = res.blob;
            var base = (sourceFile.name || 'image').replace(/\\.[^.]+$/, '');
            outputName = base + '.' + extFor(mime);
            btnDownload.disabled = false;
            var outUrl = URL.createObjectURL(res.blob);
            previewOut.onload = function () { /* keep url until next convert */ };
            if (previewOut.dataset.url) URL.revokeObjectURL(previewOut.dataset.url);
            previewOut.dataset.url = outUrl;
            previewOut.src = outUrl;
            previewOut.hidden = false;
            statsOut.textContent = formatStats(res.blob.type || mime, res.w, res.h, res.blob.size);
            setStatus(msg.done);
          })
          .catch(function (e) {
            outputBlob = null;
            btnDownload.disabled = true;
            var code = e && e.message;
            if (code === 'mismatch') setError(msg.mismatch);
            else if (code === 'decode') setError(msg.decode);
            else setError(msg.encode);
            setStatus('');
          })
          .then(function () {
            btnConvert.disabled = false;
          });
      }

      /** 下载最近输出。 */
      function downloadOut() {
        if (!outputBlob) return;
        var url = URL.createObjectURL(outputBlob);
        var a = document.createElement('a');
        a.href = url;
        a.download = outputName;
        document.body.appendChild(a);
        a.click();
        a.remove();
        URL.revokeObjectURL(url);
      }

      /** 生成带透明棋盘色块的样例 PNG 并装载。 */
      function loadSample() {
        var c = document.createElement('canvas');
        c.width = 240;
        c.height = 160;
        var ctx = c.getContext('2d');
        // 透明底 + 半透明蓝圆 + 不透明橙条，便于演示 JPEG 铺底
        ctx.clearRect(0, 0, 240, 160);
        ctx.fillStyle = 'rgba(10, 110, 189, 0.85)';
        ctx.beginPath();
        ctx.arc(90, 80, 55, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = '#e67e22';
        ctx.fillRect(130, 40, 90, 80);
        c.toBlob(function (blob) {
          if (!blob) return;
          var file = new File([blob], 'sample-transparent.png', { type: 'image/png' });
          loadFile(file);
          // 默认演示：若当前是 JPEG 则马上转；否则转 WebP
          setTimeout(convert, 50);
        }, 'image/png');
      }

      /** 清空输入输出。 */
      function clearAll() {
        sourceFile = null;
        outputBlob = null;
        fileInput.value = '';
        fileNameEl.textContent = '';
        previewIn.hidden = true;
        previewIn.removeAttribute('src');
        previewOut.hidden = true;
        if (previewOut.dataset.url) {
          URL.revokeObjectURL(previewOut.dataset.url);
          delete previewOut.dataset.url;
        }
        previewOut.removeAttribute('src');
        statsIn.textContent = '';
        statsOut.textContent = '';
        btnDownload.disabled = true;
        setError('');
        setWarn('');
        setStatus('');
      }

      drop.addEventListener('dragover', function (e) {
        e.preventDefault();
        drop.classList.add('dragover');
      });
      drop.addEventListener('dragleave', function () {
        drop.classList.remove('dragover');
      });
      drop.addEventListener('drop', function (e) {
        e.preventDefault();
        drop.classList.remove('dragover');
        var f = e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0];
        if (f) loadFile(f);
      });
      fileInput.addEventListener('change', function () {
        var f = fileInput.files && fileInput.files[0];
        if (f) loadFile(f);
      });
      targetSel.addEventListener('change', syncOptionsUi);
      qualityEl.addEventListener('input', syncOptionsUi);
      document.querySelectorAll('input[name="ifcJpegBg"]').forEach(function (el) {
        el.addEventListener('change', syncOptionsUi);
      });
      btnConvert.addEventListener('click', convert);
      btnDownload.addEventListener('click', downloadOut);
      btnSample.addEventListener('click', loadSample);
      btnClear.addEventListener('click', clearAll);

      syncOptionsUi();
      probeAll();
    })();
  </script>`;

	const toolMeta = getToolBySlug('image-format-converter');
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
