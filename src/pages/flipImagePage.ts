/**
 * Flip-image tool page: mirror a local image horizontally and/or vertically via Canvas scale.
 * slug: flip-image（单页；不拆 mirror-horizontal / flip-vertical 薄 URL）。
 * Spec: work-tasks/flip-image/02-tool-info.md
 * UI：主按钮 Flip → Download；高级设置折叠；金标 .bcw-hud。
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
import { bcwHudCss } from './site/bcwHudCss';

/**
 * 非默认语言时在路径前加语言前缀。
 * @param lang 当前界面语言
 * @param pathname 站点路径
 * @param defaultLang 默认（无前缀）语言
 */
const withLangPrefix = (lang: SiteLang, pathname: string, defaultLang: SiteLang) => {
	const safe = pathname.startsWith('/') ? pathname : `/${pathname}`;
	return lang === defaultLang ? safe : `/${lang}${safe}`;
};

/**
 * 渲染图片翻转工具页。
 * @param opts.lang 当前界面语言
 * @param opts.defaultLang 默认语言
 * @param opts.enabledLangs 已启用语言列表
 */
export const renderFlipImagePage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	const toolPath = '/tools/flip-image';
	const canonicalPath = withLangPrefix(opts.lang, toolPath, opts.defaultLang);
	/** 取本工具 i18n 文案。 */
	const tx = (key: string) => t(opts.lang, `tool_flip_image_${key}` as never);
	const title = `${tx('title')} | ${t(opts.lang, 'brand')}`;
	const description = tx('description');

	const navItems = buildToolPageNavItems(opts.lang, opts.defaultLang);

	/** hreflang 映射始终带语言段。 */
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
		groups: buildToolSidebarItems({
			lang: opts.lang,
			defaultLang: opts.defaultLang,
			currentSlug: 'flip-image',
			currentAnchor: '#converter',
		}),
		id: 'toolNav',
	});

	const footerHtml = renderFooter({ lang: opts.lang });

	/** 页内样式：预览棋盘格、质量禁用态、HUD。 */
	const extraHeadHtml = `
  <style>
    ${bcwHudCss({ hudId: 'fiHud', convertBtnId: 'fiBtnFlip' })}
    #fiHud.is-error { border-color:#b91c1c; background:#fff1f2; }
    #fiHud:not(.is-on) .bcw-hud-spin { animation:none; }
    .tools-bar { gap: .5rem; }
    .opt-group { gap: .75rem; align-items: center; }
    #fiPreview {
      max-width: 100%; max-height: 420px;
      border: 1px solid #dee2e6; border-radius: .5rem; background:
        linear-gradient(45deg, #eee 25%, transparent 25%),
        linear-gradient(-45deg, #eee 25%, transparent 25%),
        linear-gradient(45deg, transparent 75%, #eee 75%),
        linear-gradient(-45deg, transparent 75%, #eee 75%);
      background-size: 16px 16px; background-position: 0 0, 0 8px, 8px -8px, -8px 0;
    }
    .fi-preview-wrap { min-height: 120px; display: flex; align-items: center; justify-content: center; }
    #fiQuality[disabled] { opacity: .5; }
    #fiJpegBgWrap[hidden] { display: none !important; }
  </style>`;

	const contentHtml = `
    <div id="converter" class="tool-page-heading mb-3">
      <h1 class="h4 mb-0">${escapeHtml(tx('title'))}</h1>
    </div>

    <label class="tool-dropzone fi-drop mb-3" id="fiDrop" for="fiFile">
      <input type="file" id="fiFile" accept="image/jpeg,image/png,image/webp,image/gif,image/*">
      <span class="tool-dropzone-title">${escapeHtml(tx('choose_file'))}</span>
      <span class="tool-dropzone-hint">${escapeHtml(tx('drop_hint'))}</span>
      <span id="fiFileName" class="tool-dropzone-file"></span>
    </label>

    <div class="d-flex align-items-center opt-group mb-2 flex-wrap">
      <div class="form-check">
        <input class="form-check-input" type="checkbox" id="fiFlipH" checked>
        <label class="form-check-label" for="fiFlipH">${escapeHtml(tx('flip_h'))}</label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="checkbox" id="fiFlipV">
        <label class="form-check-label" for="fiFlipV">${escapeHtml(tx('flip_v'))}</label>
      </div>
    </div>

    <div class="d-flex align-items-center tools-bar mb-2 flex-wrap">
      <button type="button" id="fiBtnFlip" class="btn btn-primary btn-sm">${escapeHtml(tx('flip'))}</button>
      <button type="button" id="fiBtnDownload" class="btn btn-outline-primary btn-sm" disabled>${escapeHtml(tx('download'))}</button>
      <button type="button" id="fiBtnSample" class="btn btn-outline-secondary btn-sm">${escapeHtml(tx('sample'))}</button>
      <button type="button" id="fiBtnClear" class="btn btn-outline-secondary btn-sm">${escapeHtml(tx('clear'))}</button>
    </div>

    <details class="mb-3" id="fiAdvanced">
      <summary>${escapeHtml(tx('advanced'))}</summary>
      <div class="row g-2 mt-1">
        <div class="col-6 col-md-3">
          <label class="form-label mb-0" for="fiFormat">${escapeHtml(tx('format_label'))}</label>
          <select id="fiFormat" class="form-select form-select-sm">
            <option value="image/jpeg">${escapeHtml(tx('format_jpeg'))}</option>
            <option value="image/webp" selected>${escapeHtml(tx('format_webp'))}</option>
            <option value="image/png">${escapeHtml(tx('format_png'))}</option>
          </select>
          <p class="form-text mb-0">${escapeHtml(tx('format_hint'))}</p>
        </div>
        <div class="col-6 col-md-3">
          <label class="form-label mb-0" for="fiQuality">${escapeHtml(tx('quality_label'))}</label>
          <input type="range" id="fiQuality" class="form-range" min="50" max="100" value="90">
          <span id="fiQualityVal" class="small">0.90</span>
          <p class="form-text mb-0">${escapeHtml(tx('quality_hint'))}</p>
        </div>
        <div class="col-6 col-md-3" id="fiJpegBgWrap">
          <label class="form-label mb-0" for="fiJpegBg">${escapeHtml(tx('jpeg_bg_label'))}</label>
          <input type="color" id="fiJpegBg" class="form-control form-control-color form-control-sm" value="#ffffff">
          <p class="form-text mb-0">${escapeHtml(tx('jpeg_bg_hint'))}</p>
        </div>
      </div>
    </details>

    <div id="fiHud" class="bcw-hud mb-3" role="status" aria-live="polite" hidden>
      <div class="bcw-hud-top">
        <div class="bcw-hud-spin" aria-hidden="true"></div>
        <div class="bcw-hud-pct" id="fiPct">0%</div>
        <div class="bcw-hud-copy">
          <div class="bcw-hud-title">${escapeHtml(tx('progress'))}</div>
          <div class="bcw-hud-step" id="fiStep"></div>
          <div class="bcw-hud-time" id="fiTime"></div>
        </div>
      </div>
      <div class="progress" style="height:1.35rem">
        <div id="fiBar" class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div>
        <span class="bcw-hud-sheen" aria-hidden="true"></span>
      </div>
      <ol class="bcw-hud-steps">
        <li data-step="decode">${escapeHtml(tx('step_decode'))}</li>
        <li data-step="flip">${escapeHtml(tx('step_flip'))}</li>
        <li data-step="encode">${escapeHtml(tx('step_encode'))}</li>
      </ol>
    </div>

    <p id="fiWarn" class="small text-warning mb-2" style="display:none;" role="status"></p>
    <p id="fiError" class="small text-danger mb-2" style="display:none;" role="alert"></p>
    <p id="fiStatus" class="small text-muted mb-2" role="status"></p>
    <p id="fiStats" class="small text-muted mb-2" style="display:none;"></p>

    <div class="mb-3">
      <label class="form-label">${escapeHtml(tx('preview_label'))}</label>
      <div class="fi-preview-wrap">
        <canvas id="fiPreview" hidden></canvas>
      </div>
    </div>

    <p class="tool-lead mb-4">${escapeHtml(description)}</p>`;

	const igHtml = renderToolIgSections({
		lang: opts.lang,
		prefix: 'tool_flip_image',
		mode: 'rules',
		howItemCount: 4,
		whyChooseItemCount: 5,
		usecaseCount: 4,
		ruleItemCount: 5,
	});

	const referencesHtml = renderToolReferencesSection({
		lang: opts.lang,
		links: [
			{ label: tx('ref_a_label'), href: 'https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/scale' },
			{ label: tx('ref_b_label'), href: 'https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/toBlob' },
		],
	});

	/**
	 * 客户端脚本：解码 → Canvas scale 翻转 → 导出；金标 HUD；Clear 不重载样例。
	 */
	const extraBodyHtml = `
  <script>
    (function () {
      /** 单文件超过此字节数时软警告。 */
      var SOFT_BYTES = 25 * 1024 * 1024;
      /** 边长超过此像素时软警告。 */
      var SOFT_EDGE = 8192;
      /** 预览最大显示边长。 */
      var PREVIEW_MAX_EDGE = 480;

      var drop = document.getElementById('fiDrop');
      var fileInput = document.getElementById('fiFile');
      var fileNameEl = document.getElementById('fiFileName');
      var flipHEl = document.getElementById('fiFlipH');
      var flipVEl = document.getElementById('fiFlipV');
      var formatEl = document.getElementById('fiFormat');
      var qualityEl = document.getElementById('fiQuality');
      var qualityVal = document.getElementById('fiQualityVal');
      var jpegBgWrap = document.getElementById('fiJpegBgWrap');
      var jpegBgEl = document.getElementById('fiJpegBg');
      var btnFlip = document.getElementById('fiBtnFlip');
      var btnDownload = document.getElementById('fiBtnDownload');
      var btnSample = document.getElementById('fiBtnSample');
      var btnClear = document.getElementById('fiBtnClear');
      var warnEl = document.getElementById('fiWarn');
      var errEl = document.getElementById('fiError');
      var statusEl = document.getElementById('fiStatus');
      var statsEl = document.getElementById('fiStats');
      var preview = document.getElementById('fiPreview');
      var hud = document.getElementById('fiHud');
      var pctEl = document.getElementById('fiPct');
      var stepEl = document.getElementById('fiStep');
      var timeEl = document.getElementById('fiTime');
      var barEl = document.getElementById('fiBar');

      var msg = {
        empty: ${JSON.stringify(tx('empty'))},
        noFlip: ${JSON.stringify(tx('no_flip'))},
        decodeFail: ${JSON.stringify(tx('err_decode'))},
        encodeFail: ${JSON.stringify(tx('err_encode'))},
        large: ${JSON.stringify(tx('warn_large'))},
        edge: ${JSON.stringify(tx('warn_edge'))},
        animation: ${JSON.stringify(tx('warn_animation'))},
        working: ${JSON.stringify(tx('status_working'))},
        done: ${JSON.stringify(tx('status_done'))},
        statsTpl: ${JSON.stringify(tx('stats_tpl'))},
        decodeStep: ${JSON.stringify(tx('decode_step'))},
        flipStep: ${JSON.stringify(tx('flip_step'))},
        encodeStep: ${JSON.stringify(tx('encode_step'))},
        elapsed: ${JSON.stringify(tx('elapsed'))},
        fmtJpeg: ${JSON.stringify(tx('format_jpeg'))},
        fmtPng: ${JSON.stringify(tx('format_png'))},
        fmtWebp: ${JSON.stringify(tx('format_webp'))}
      };

      /** @type {{ file: File, bitmap: ImageBitmap|HTMLImageElement, w: number, h: number }|null} */
      var sourceLayer = null;
      /** @type {Blob|null} 上次导出的 Blob。 */
      var resultBlob = null;
      /** 忙碌锁。 */
      var busy = false;
      /** HUD 计时起点。 */
      var startedAt = 0;
      /** HUD 计时器句柄。 */
      var tickTimer = 0;

      /** 用 {key} 填充模板。 */
      function fill(tpl, map) {
        return tpl.replace(/\\{(\\w+)\\}/g, function (_, k) { return map[k] != null ? map[k] : ''; });
      }

      /** 格式化字节数。 */
      function formatBytes(n) {
        if (n < 1024) return n + ' B';
        if (n < 1024 * 1024) return (n / 1024).toFixed(1) + ' KB';
        return (n / (1024 * 1024)).toFixed(2) + ' MB';
      }

      /** MIME → 短格式名。 */
      function fmtLabel(mime) {
        if (mime === 'image/png') return msg.fmtPng;
        if (mime === 'image/webp') return msg.fmtWebp;
        return msg.fmtJpeg;
      }

      /** 显示或隐藏警告行。 */
      function setWarn(text) {
        if (!text) { warnEl.style.display = 'none'; warnEl.textContent = ''; return; }
        warnEl.textContent = text;
        warnEl.style.display = '';
      }

      /** 显示或隐藏错误行。 */
      function setError(text) {
        if (!text) { errEl.style.display = 'none'; errEl.textContent = ''; return; }
        errEl.textContent = text;
        errEl.style.display = '';
      }

      /** 更新状态行。 */
      function setStatus(text) { statusEl.textContent = text || ''; }

      /** 翻转期间禁用控件。 */
      function lock(on) {
        busy = on;
        [btnFlip, btnSample, btnClear, fileInput, flipHEl, flipVEl, formatEl, qualityEl, jpegBgEl].forEach(function (el) {
          el.disabled = on;
        });
        btnDownload.disabled = on || !resultBlob;
        btnFlip.setAttribute('aria-busy', String(on));
        syncUiLabels();
      }

      /** 刷新 HUD 已用时。 */
      function tickTime() {
        var sec = Math.max(0, Math.floor((Date.now() - startedAt) / 1000));
        timeEl.textContent = fill(msg.elapsed, { s: String(sec) });
      }

      /**
       * 更新进度 HUD。
       * @param {number} pct 0–100
       * @param {string} stepKey decode|flip|encode
       * @param {string} stepText 步骤说明
       */
      function progress(pct, stepKey, stepText) {
        hud.hidden = false;
        hud.classList.add('is-on');
        hud.classList.remove('is-error', 'is-done');
        var p = Math.max(0, Math.min(100, Math.round(pct)));
        pctEl.textContent = p + '%';
        barEl.style.width = p + '%';
        barEl.setAttribute('aria-valuenow', String(p));
        stepEl.textContent = stepText || '';
        var order = ['decode', 'flip', 'encode'];
        hud.querySelectorAll('.bcw-hud-steps li').forEach(function (li) {
          var k = li.getAttribute('data-step');
          li.classList.toggle('is-done', k !== stepKey && order.indexOf(k) < order.indexOf(stepKey));
          li.classList.toggle('is-active', k === stepKey);
        });
      }

      /** 结束 HUD。 */
      function endHud(ok) {
        if (tickTimer) { clearInterval(tickTimer); tickTimer = 0; }
        hud.classList.remove('is-on');
        if (ok) {
          hud.classList.add('is-done');
          pctEl.textContent = '100%';
          barEl.style.width = '100%';
        } else {
          hud.classList.add('is-error');
        }
      }

      /**
       * 将 Blob 解码为 ImageBitmap 或 HTMLImageElement。
       * @param {Blob} blob
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

      /** 若适用则关闭 ImageBitmap。 */
      function disposeSource(layer) {
        if (!layer) return;
        if (layer.bitmap && typeof layer.bitmap.close === 'function') layer.bitmap.close();
      }

      /** 读取翻转复选框状态。 */
      function readFlipOptions() {
        return { flipH: !!flipHEl.checked, flipV: !!flipVEl.checked };
      }

      /**
       * 用 scale 变换构建全分辨率翻转画布。
       * @param {ImageBitmap|HTMLImageElement} bitmap
       * @param {number} w 源宽
       * @param {number} h 源高
       * @param {boolean} flipH 水平镜像
       * @param {boolean} flipV 垂直镜像
       * @param {boolean} forJpeg JPEG 是否需要底色
       */
      function buildFlippedCanvas(bitmap, w, h, flipH, flipV, forJpeg) {
        var canvas = document.createElement('canvas');
        canvas.width = w;
        canvas.height = h;
        var ctx = canvas.getContext('2d');
        if (!ctx) throw new Error('encode');
        if (forJpeg) {
          ctx.fillStyle = jpegBgEl.value || '#ffffff';
          ctx.fillRect(0, 0, w, h);
        }
        ctx.save();
        ctx.translate(flipH ? w : 0, flipV ? h : 0);
        ctx.scale(flipH ? -1 : 1, flipV ? -1 : 1);
        ctx.drawImage(bitmap, 0, 0);
        ctx.restore();
        return canvas;
      }

      /** 同步质量标签与格式相关 UI。 */
      function syncUiLabels() {
        var isPng = formatEl.value === 'image/png';
        if (!busy) qualityEl.disabled = isPng;
        var q = Math.max(0.5, Math.min(1, Number(qualityEl.value) / 100));
        qualityVal.textContent = isPng ? '\\u2014' : q.toFixed(2);
        jpegBgWrap.hidden = formatEl.value !== 'image/jpeg';
      }

      /** 刷新文件大小、边长、动图警告。 */
      function refreshWarnings() {
        var warns = [];
        if (sourceLayer && sourceLayer.file.size > SOFT_BYTES) warns.push(msg.large);
        if (sourceLayer && (sourceLayer.w > SOFT_EDGE || sourceLayer.h > SOFT_EDGE)) warns.push(msg.edge);
        if (sourceLayer && ((sourceLayer.file.type || '').indexOf('gif') >= 0 || /\\.gif$/i.test(sourceLayer.file.name || ''))) {
          warns.push(msg.animation);
        }
        setWarn(warns.join(' '));
      }

      /**
       * 在预览画布上绘制翻转结果（缩放显示）。
       * @param {boolean} [keepResult] 重绘预览时保留导出 Blob
       */
      function drawPreview(keepResult) {
        if (!keepResult) {
          resultBlob = null;
          btnDownload.disabled = true;
          statsEl.style.display = 'none';
        }
        if (!sourceLayer) {
          preview.hidden = true;
          return;
        }
        var opts = readFlipOptions();
        var displayScale = Math.min(1, PREVIEW_MAX_EDGE / Math.max(sourceLayer.w, sourceLayer.h, 1));
        preview.width = Math.max(1, Math.round(sourceLayer.w * displayScale));
        preview.height = Math.max(1, Math.round(sourceLayer.h * displayScale));
        preview.hidden = false;
        var ctx = preview.getContext('2d');
        if (!ctx) return;
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.clearRect(0, 0, preview.width, preview.height);
        ctx.save();
        ctx.translate(opts.flipH ? preview.width : 0, opts.flipV ? preview.height : 0);
        ctx.scale(opts.flipH ? -1 : 1, opts.flipV ? -1 : 1);
        ctx.drawImage(sourceLayer.bitmap, 0, 0, preview.width, preview.height);
        ctx.restore();
      }

      /**
       * 从文件加载源图。
       * @param {File} file
       */
      function loadFile(file) {
        setError('');
        return decodeImage(file)
          .then(function (dec) {
            disposeSource(sourceLayer);
            sourceLayer = { file: file, bitmap: dec.bitmap, w: dec.w, h: dec.h };
            fileNameEl.textContent = file.name || '';
            refreshWarnings();
            drawPreview(false);
          })
          .catch(function () {
            setError(msg.decodeFail);
          });
      }

      /**
       * 导出翻转后的图片并启用下载。
       * @returns {Promise<void>}
       */
      function applyFlip() {
        setError('');
        resultBlob = null;
        btnDownload.disabled = true;
        statsEl.style.display = 'none';
        if (!sourceLayer) {
          setError(msg.empty);
          return Promise.resolve();
        }
        var opts = readFlipOptions();
        if (!opts.flipH && !opts.flipV) {
          setError(msg.noFlip);
          return Promise.resolve();
        }

        setStatus(msg.working);
        lock(true);
        startedAt = Date.now();
        if (tickTimer) clearInterval(tickTimer);
        tickTimer = setInterval(tickTime, 250);
        tickTime();
        progress(5, 'decode', msg.decodeStep);

        var mime = formatEl.value;
        var forJpeg = mime === 'image/jpeg';
        var q = Math.max(0.5, Math.min(1, Number(qualityEl.value) / 100));

        return new Promise(function (resolve) {
          requestAnimationFrame(function () {
            setTimeout(function () {
              try {
                progress(35, 'flip', msg.flipStep);
                var canvas = buildFlippedCanvas(
                  sourceLayer.bitmap, sourceLayer.w, sourceLayer.h,
                  opts.flipH, opts.flipV, forJpeg
                );
                progress(70, 'encode', fill(msg.encodeStep, { fmt: fmtLabel(mime) }));
                canvas.toBlob(function (blob) {
                  lock(false);
                  if (!blob) {
                    setError(msg.encodeFail);
                    setStatus('');
                    endHud(false);
                    resolve();
                    return;
                  }
                  resultBlob = blob;
                  btnDownload.disabled = false;
                  setStatus(msg.done);
                  statsEl.textContent = fill(msg.statsTpl, {
                    w: String(sourceLayer.w),
                    h: String(sourceLayer.h),
                    fmt: fmtLabel(mime),
                    bytes: formatBytes(blob.size)
                  });
                  statsEl.style.display = '';
                  progress(100, 'encode', fill(msg.encodeStep, { fmt: fmtLabel(mime) }));
                  endHud(true);
                  drawPreview(true);
                  resolve();
                }, mime, mime === 'image/png' ? undefined : q);
              } catch (e) {
                lock(false);
                setError(msg.encodeFail);
                setStatus('');
                endHud(false);
                resolve();
              }
            }, 40);
          });
        });
      }

      /** 触发下载上次导出的 Blob。 */
      function downloadResult() {
        if (!resultBlob) return;
        var mime = resultBlob.type || formatEl.value;
        var ext = mime === 'image/png' ? 'png' : mime === 'image/webp' ? 'webp' : 'jpg';
        var url = URL.createObjectURL(resultBlob);
        var a = document.createElement('a');
        a.href = url;
        a.download = 'flipped.' + ext;
        document.body.appendChild(a);
        a.click();
        a.remove();
        URL.revokeObjectURL(url);
      }

      /**
       * 生成不对称色块样例，默认水平翻转并导出。
       * @returns {Promise<void>}
       */
      function loadSample() {
        clearAll(false);
        var c = document.createElement('canvas');
        c.width = 480;
        c.height = 320;
        var ctx = c.getContext('2d');
        if (!ctx) return Promise.resolve();
        ctx.fillStyle = '#1c83a8';
        ctx.fillRect(0, 0, 240, 160);
        ctx.fillStyle = '#e8a838';
        ctx.fillRect(240, 0, 240, 160);
        ctx.fillStyle = '#2d6a4f';
        ctx.fillRect(0, 160, 240, 160);
        ctx.fillStyle = '#9b2226';
        ctx.fillRect(240, 160, 240, 160);
        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 48px sans-serif';
        ctx.fillText('A', 48, 120);
        ctx.fillText('B', 288, 120);
        ctx.fillText('C', 48, 280);
        ctx.fillText('D', 288, 280);
        return new Promise(function (resolve) {
          c.toBlob(function (blob) {
            if (!blob) { resolve(); return; }
            loadFile(new File([blob], 'sample-flip.png', { type: 'image/png' }))
              .then(function () {
                flipHEl.checked = true;
                flipVEl.checked = false;
                drawPreview(false);
                return applyFlip();
              })
              .then(resolve);
          }, 'image/png');
        });
      }

      /**
       * 真正清空，不重新加载样例。
       * @param {boolean} resetInputs 是否清空文件输入
       */
      function clearAll(resetInputs) {
        if (tickTimer) { clearInterval(tickTimer); tickTimer = 0; }
        disposeSource(sourceLayer);
        sourceLayer = null;
        if (resetInputs !== false) fileInput.value = '';
        fileNameEl.textContent = '';
        resultBlob = null;
        btnDownload.disabled = true;
        preview.hidden = true;
        setError('');
        setWarn('');
        setStatus('');
        statsEl.style.display = 'none';
        hud.hidden = true;
        hud.classList.remove('is-on', 'is-done', 'is-error');
        flipHEl.checked = true;
        flipVEl.checked = false;
        formatEl.value = 'image/webp';
        qualityEl.value = '90';
        jpegBgEl.value = '#ffffff';
        syncUiLabels();
      }

      /** 绑定拖放与文件选择。 */
      function wireDropzone() {
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
        });
      }

      wireDropzone();

      [flipHEl, flipVEl].forEach(function (el) {
        el.addEventListener('change', function () { drawPreview(false); });
      });
      formatEl.addEventListener('change', syncUiLabels);
      qualityEl.addEventListener('input', syncUiLabels);

      btnFlip.addEventListener('click', function () { applyFlip(); });
      btnDownload.addEventListener('click', downloadResult);
      btnSample.addEventListener('click', function () { loadSample(); });
      btnClear.addEventListener('click', function () { clearAll(true); });

      syncUiLabels();
      /** 进页自动跑样例。 */
      loadSample();
    })();
  </script>`;

	const toolMeta = getToolBySlug('flip-image');
	const toolSeoHtml = toolMeta
		? renderToolExtraSections({ lang: opts.lang, defaultLang: opts.defaultLang, tool: toolMeta })
		: '';
	const toolJsonLd = toolMeta
		? buildToolJsonLd({
				lang: opts.lang,
				defaultLang: opts.defaultLang,
				tool: toolMeta,
				name: t(opts.lang, toolMeta.i18nKey as never),
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
