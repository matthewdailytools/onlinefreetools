/**
 * 多图转 PowerPoint：本地将每张图生成一页幻灯片并导出 PPTX；可选 16:9/4:3、contain/cover、背景色。
 * slug: images-to-ppt（见 work-tasks/images-to-ppt/02-tool-info.md）。
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
 * 为路径加上语言前缀（默认语无前缀）。
 * @param lang 当前语言
 * @param pathname 站点路径
 * @param defaultLang 站点默认语言
 */
const withLangPrefix = (lang: SiteLang, pathname: string, defaultLang: SiteLang) => {
	const safe = pathname.startsWith('/') ? pathname : `/${pathname}`;
	return lang === defaultLang ? safe : `/${lang}${safe}`;
};

/**
 * 渲染多图转 PowerPoint（PPTX）工具页。
 * @param opts.lang 当前 UI 语言
 * @param opts.defaultLang 默认（无前缀）语言
 * @param opts.enabledLangs 启用语言列表
 */
export const renderImagesToPptPage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	const toolPath = '/tools/images-to-ppt';
	const canonicalPath = withLangPrefix(opts.lang, toolPath, opts.defaultLang);
	const title = `${t(opts.lang, 'tool_images_to_ppt_title')} | ${t(opts.lang, 'brand')}`;
	const description = t(opts.lang, 'tool_images_to_ppt_description');

	const navItems = buildToolPageNavItems(opts.lang, opts.defaultLang);

	/** 语言切换 map 值始终带显式语言段。 */
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
			currentSlug: 'images-to-ppt',
			currentAnchor: '#converter',
		}),
		id: 'toolNav',
	});

	const footerHtml = renderFooter({ lang: opts.lang });

	/** 取本工具 i18n 文案。 */
	const tx = (key: string) => t(opts.lang, `tool_images_to_ppt_${key}` as never);

	/** 页内样式：文件列表、缩略图、HUD。 */
	const extraHeadHtml = `
  <style>
    ${bcwHudCss({ hudId: 'img2pptHud', convertBtnId: 'img2pptBtnConvert' })}
    #img2pptHud.is-error { border-color:#b91c1c; background:#fff1f2; }
    #img2pptHud:not(.is-on) .bcw-hud-spin { animation:none; }
    .tools-bar { gap: .5rem; }
    .img2ppt-file-list { list-style: none; padding: 0; margin: 0; }
    .img2ppt-file-item {
      display: flex; align-items: center; gap: .5rem; padding: .35rem 0;
      border-bottom: 1px solid #eee;
    }
    .img2ppt-thumb {
      width: 48px; height: 48px; object-fit: cover; border-radius: .25rem;
      border: 1px solid #dee2e6; background: #f8f9fa;
    }
    .img2ppt-file-name { flex: 1; font-size: .85rem; word-break: break-all; }
    .img2ppt-file-actions { display: flex; gap: .25rem; flex-shrink: 0; }
    #img2pptBg { max-width: 8rem; height: 2rem; padding: .15rem; }
  </style>`;

	const contentHtml = `
    <div id="converter" class="tool-page-heading mb-3">
      <h1 class="h4 mb-0">${escapeHtml(tx('title'))}</h1>
    </div>

    <label class="tool-dropzone img2ppt-drop mb-3" id="img2pptDrop" for="img2pptFiles">
      <input type="file" id="img2pptFiles" accept="image/jpeg,image/png,image/webp,image/gif,image/*" multiple>
      <span class="tool-dropzone-title">${escapeHtml(tx('choose_files'))}</span>
      <span class="tool-dropzone-hint">${escapeHtml(tx('drop_hint'))}</span>
    </label>

    <ul id="img2pptList" class="img2ppt-file-list mb-3" aria-live="polite"></ul>

    <div class="d-flex align-items-center tools-bar mb-2 flex-wrap">
      <button type="button" id="img2pptBtnConvert" class="btn btn-primary btn-sm">${escapeHtml(tx('convert'))}</button>
      <button type="button" id="img2pptBtnDownload" class="btn btn-outline-primary btn-sm" disabled>${escapeHtml(tx('download'))}</button>
      <button type="button" id="img2pptBtnSample" class="btn btn-outline-secondary btn-sm">${escapeHtml(tx('sample'))}</button>
      <button type="button" id="img2pptBtnClear" class="btn btn-outline-secondary btn-sm">${escapeHtml(tx('clear'))}</button>
    </div>

    <details class="mb-3" id="img2pptAdvanced">
      <summary>${escapeHtml(tx('advanced'))}</summary>
      <div class="row g-2 mt-1">
        <div class="col-6 col-md-4">
          <label class="form-label mb-0" for="img2pptLayout">${escapeHtml(tx('layout_label'))}</label>
          <select id="img2pptLayout" class="form-select form-select-sm">
            <option value="16x9" selected>${escapeHtml(tx('layout_16x9'))}</option>
            <option value="4x3">${escapeHtml(tx('layout_4x3'))}</option>
          </select>
          <p class="form-text mb-0">${escapeHtml(tx('layout_hint'))}</p>
        </div>
        <div class="col-6 col-md-4">
          <label class="form-label mb-0" for="img2pptFit">${escapeHtml(tx('fit_label'))}</label>
          <select id="img2pptFit" class="form-select form-select-sm">
            <option value="contain" selected>${escapeHtml(tx('fit_contain'))}</option>
            <option value="cover">${escapeHtml(tx('fit_cover'))}</option>
          </select>
          <p class="form-text mb-0">${escapeHtml(tx('fit_hint'))}</p>
        </div>
        <div class="col-6 col-md-4">
          <label class="form-label mb-0" for="img2pptBg">${escapeHtml(tx('bg_label'))}</label>
          <input type="color" id="img2pptBg" class="form-control form-control-color" value="#ffffff" title="${escapeHtml(tx('bg_label'))}">
          <p class="form-text mb-0">${escapeHtml(tx('bg_hint'))}</p>
        </div>
      </div>
    </details>

    <div id="img2pptHud" class="bcw-hud mb-3" role="status" aria-live="polite" hidden>
      <div class="bcw-hud-top">
        <div class="bcw-hud-spin" aria-hidden="true"></div>
        <div class="bcw-hud-pct" id="img2pptPct">0%</div>
        <div class="bcw-hud-copy">
          <div class="bcw-hud-title">${escapeHtml(tx('progress'))}</div>
          <div class="bcw-hud-step" id="img2pptStep"></div>
          <div class="bcw-hud-time" id="img2pptTime"></div>
        </div>
      </div>
      <div class="progress" style="height:1.35rem">
        <div id="img2pptBar" class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div>
        <span class="bcw-hud-sheen" aria-hidden="true"></span>
      </div>
      <ol class="bcw-hud-steps">
        <li data-step="encode">${escapeHtml(tx('step_encode'))}</li>
        <li data-step="build">${escapeHtml(tx('step_build'))}</li>
        <li data-step="pack">${escapeHtml(tx('step_pack'))}</li>
      </ol>
    </div>

    <p id="img2pptWarn" class="small text-warning mb-2" style="display:none;" role="status"></p>
    <p id="img2pptError" class="small text-danger mb-2" style="display:none;" role="alert"></p>
    <p id="img2pptStatus" class="small text-muted mb-2" role="status"></p>
    <p id="img2pptStats" class="small text-muted mb-3" style="display:none;"></p>

    <p class="tool-lead mb-4">${escapeHtml(description)}</p>`;

	const igHtml = renderToolIgSections({
		lang: opts.lang,
		prefix: 'tool_images_to_ppt',
		mode: 'rules',
		howItemCount: 4,
		whyChooseItemCount: 5,
		usecaseCount: 4,
		ruleItemCount: 5,
	});

	const referencesHtml = renderToolReferencesSection({
		lang: opts.lang,
		links: [
			{ label: tx('ref_a_label'), href: 'https://gitbrent.github.io/PptxGenJS/' },
			{ label: tx('ref_b_label'), href: 'https://developer.mozilla.org/en-US/docs/Web/API/Blob' },
		],
	});

	/**
	 * 客户端脚本：多图列表、布局/适配设置、进度 HUD、懒加载 PptxGenJS、生成 PPTX。
	 */
	const extraBodyHtml = `
  <script>
    (function () {
      /** 单文件软警告阈值（字节）。 */
      var SOFT_BYTES = 25 * 1024 * 1024;
      /** 单边像素软警告阈值。 */
      var SOFT_EDGE = 8192;

      var drop = document.getElementById('img2pptDrop');
      var fileInput = document.getElementById('img2pptFiles');
      var listEl = document.getElementById('img2pptList');
      var layoutEl = document.getElementById('img2pptLayout');
      var fitEl = document.getElementById('img2pptFit');
      var bgEl = document.getElementById('img2pptBg');
      var btnConvert = document.getElementById('img2pptBtnConvert');
      var btnDownload = document.getElementById('img2pptBtnDownload');
      var btnSample = document.getElementById('img2pptBtnSample');
      var btnClear = document.getElementById('img2pptBtnClear');
      var warnEl = document.getElementById('img2pptWarn');
      var errEl = document.getElementById('img2pptError');
      var statusEl = document.getElementById('img2pptStatus');
      var statsEl = document.getElementById('img2pptStats');
      var hud = document.getElementById('img2pptHud');
      var pctEl = document.getElementById('img2pptPct');
      var stepEl = document.getElementById('img2pptStep');
      var timeEl = document.getElementById('img2pptTime');
      var barEl = document.getElementById('img2pptBar');
      var busy = false;
      var startedAt = 0;
      var tickTimer = 0;

      var msg = {
        empty: ${JSON.stringify(tx('empty'))},
        decodeFail: ${JSON.stringify(tx('err_decode'))},
        convertFail: ${JSON.stringify(tx('err_convert'))},
        libFail: ${JSON.stringify(tx('err_lib'))},
        large: ${JSON.stringify(tx('warn_large'))},
        edge: ${JSON.stringify(tx('warn_edge'))},
        animation: ${JSON.stringify(tx('warn_animation'))},
        converting: ${JSON.stringify(tx('status_converting'))},
        done: ${JSON.stringify(tx('status_done'))},
        moveUp: ${JSON.stringify(tx('move_up'))},
        moveDown: ${JSON.stringify(tx('move_down'))},
        remove: ${JSON.stringify(tx('remove'))},
        statsTpl: ${JSON.stringify(tx('stats_tpl'))},
        elapsed: ${JSON.stringify(tx('elapsed'))},
        encodeStep: ${JSON.stringify(tx('encode_step'))},
        buildStep: ${JSON.stringify(tx('build_step'))},
        packStep: ${JSON.stringify(tx('pack_step'))}
      };

      /**
       * @typedef {{ id: string, file: File, bitmap: ImageBitmap|HTMLImageElement, w: number, h: number, thumbUrl: string }} PptItem
       */

      /** @type {PptItem[]} 有序源图列表。 */
      var items = [];
      /** @type {Blob|null} 最近一次生成的 PPTX Blob。 */
      var resultBlob = null;
      /** 列表行自增 id。 */
      var nextId = 1;
      /** @type {Promise<Function>|null} PptxGenJS 构造函数加载缓存。 */
      var pptxLibPromise = null;

      /** 用 {key} 占位符填充模板。 */
      function fill(tpl, map) {
        return tpl.replace(/\\{(\\w+)\\}/g, function (_, k) { return map[k] != null ? map[k] : ''; });
      }

      /** 显示或隐藏软警告。 */
      function setWarn(text) {
        if (!text) { warnEl.style.display = 'none'; warnEl.textContent = ''; return; }
        warnEl.textContent = text;
        warnEl.style.display = '';
      }

      /** 显示或隐藏错误信息。 */
      function setError(text) {
        if (!text) { errEl.style.display = 'none'; errEl.textContent = ''; return; }
        errEl.textContent = text;
        errEl.style.display = '';
      }

      /** 更新状态行文案。 */
      function setStatus(text) {
        statusEl.textContent = text || '';
      }

      /** HTML 转义（列表渲染用）。 */
      function escapeHtml(s) {
        return String(s)
          .replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')
          .replace(/"/g, '&quot;');
      }

      /** 格式化字节数为可读字符串。 */
      function formatBytes(n) {
        if (n < 1024) return n + ' B';
        if (n < 1024 * 1024) return (n / 1024).toFixed(1) + ' KB';
        return (n / (1024 * 1024)).toFixed(2) + ' MB';
      }

      /** 转换期间禁用控件。 */
      function lock(on) {
        busy = on;
        [btnConvert, btnSample, btnClear, fileInput, layoutEl, fitEl, bgEl].forEach(function (el) {
          el.disabled = on;
        });
        btnDownload.disabled = on || !resultBlob;
        btnConvert.setAttribute('aria-busy', String(on));
        listEl.querySelectorAll('button').forEach(function (b) { b.disabled = on; });
      }

      /** 刷新 HUD 已用时。 */
      function tickTime() {
        var sec = Math.max(0, Math.floor((Date.now() - startedAt) / 1000));
        timeEl.textContent = fill(msg.elapsed, { s: String(sec) });
      }

      /**
       * 更新进度 HUD。
       * @param {number} pct 0–100
       * @param {string} stepKey encode|build|pack
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
        hud.querySelectorAll('.bcw-hud-steps li').forEach(function (li) {
          var k = li.getAttribute('data-step');
          li.classList.toggle('is-done', k !== stepKey && (['encode', 'build', 'pack'].indexOf(k) < ['encode', 'build', 'pack'].indexOf(stepKey)));
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
       * 按当前布局返回幻灯片内容区（英寸）。
       * @returns {{ layout: string, x: number, y: number, w: number, h: number }}
       */
      function slideBox() {
        if (layoutEl.value === '4x3') {
          return { layout: 'LAYOUT_4x3', x: 0.25, y: 0.25, w: 9.5, h: 7 };
        }
        return { layout: 'LAYOUT_16x9', x: 0.25, y: 0.25, w: 9.5, h: 5.125 };
      }

      /**
       * 从同域 /vendor/pptxgenjs 加载 PptxGenJS UMD bundle。
       * @returns {Promise<Function>} PptxGenJS 构造函数
       */
      function loadPptxLib() {
        if (pptxLibPromise) return pptxLibPromise;
        pptxLibPromise = new Promise(function (resolve, reject) {
          if (window.PptxGenJS) {
            resolve(window.PptxGenJS);
            return;
          }
          var script = document.createElement('script');
          script.src = '/vendor/pptxgenjs/pptxgen.bundle.js';
          script.async = true;
          script.onload = function () {
            if (window.PptxGenJS) resolve(window.PptxGenJS);
            else reject(new Error('lib'));
          };
          script.onerror = function () { reject(new Error('lib')); };
          document.head.appendChild(script);
        });
        return pptxLibPromise;
      }

      /**
       * 解码 Blob 为 ImageBitmap 或 HTMLImageElement。
       * @param {Blob} blob 图片 Blob
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
       * 将列表项绘制到 Canvas 并导出 data URL。
       * @param {PptItem} item 源图项
       * @returns {Promise<string>}
       */
      function itemToDataUrl(item) {
        return new Promise(function (resolve, reject) {
          var canvas = document.createElement('canvas');
          canvas.width = item.w;
          canvas.height = item.h;
          var ctx = canvas.getContext('2d');
          if (!ctx) { reject(new Error('encode')); return; }
          ctx.drawImage(item.bitmap, 0, 0);
          try {
            var mime = (item.file.type || '').indexOf('jpeg') >= 0 || /\\.jpe?g$/i.test(item.file.name || '')
              ? 'image/jpeg'
              : 'image/png';
            resolve(canvas.toDataURL(mime, mime === 'image/jpeg' ? 0.92 : undefined));
          } catch (e) {
            reject(new Error('encode'));
          }
        });
      }

      /** 释放单条列表项的资源。 */
      function disposeItem(item) {
        if (item.thumbUrl) URL.revokeObjectURL(item.thumbUrl);
        if (item.bitmap && typeof item.bitmap.close === 'function') item.bitmap.close();
      }

      /** 清除转换结果与下载状态。 */
      function clearResult() {
        resultBlob = null;
        btnDownload.disabled = true;
        statsEl.style.display = 'none';
        statsEl.textContent = '';
      }

      /** 重绘有序文件列表。 */
      function renderList() {
        listEl.innerHTML = '';
        items.forEach(function (item, idx) {
          var li = document.createElement('li');
          li.className = 'img2ppt-file-item';
          li.dataset.id = item.id;
          li.innerHTML =
            '<img class="img2ppt-thumb" src="' + escapeHtml(item.thumbUrl) + '" alt="">' +
            '<span class="img2ppt-file-name">' + escapeHtml(item.file.name || ('#' + (idx + 1))) + '</span>' +
            '<span class="img2ppt-file-actions">' +
            '<button type="button" class="btn btn-outline-secondary btn-sm img2ppt-up" data-id="' + escapeHtml(item.id) + '" title="' + escapeHtml(msg.moveUp) + '"' + (idx === 0 || busy ? ' disabled' : '') + '>&#8593;</button>' +
            '<button type="button" class="btn btn-outline-secondary btn-sm img2ppt-down" data-id="' + escapeHtml(item.id) + '" title="' + escapeHtml(msg.moveDown) + '"' + (idx === items.length - 1 || busy ? ' disabled' : '') + '>&#8595;</button>' +
            '<button type="button" class="btn btn-outline-danger btn-sm img2ppt-remove" data-id="' + escapeHtml(item.id) + '" title="' + escapeHtml(msg.remove) + '"' + (busy ? ' disabled' : '') + '>&times;</button>' +
            '</span>';
          listEl.appendChild(li);
        });
      }

      /** 根据当前列表刷新软警告。 */
      function refreshWarnings() {
        var warns = [];
        var hasGif = false;
        var hasLarge = false;
        var hasEdge = false;
        items.forEach(function (it) {
          if (it.file.size > SOFT_BYTES) hasLarge = true;
          if (it.w > SOFT_EDGE || it.h > SOFT_EDGE) hasEdge = true;
          var mime = it.file.type || '';
          var name = it.file.name || '';
          if (mime.indexOf('gif') >= 0 || /\\.gif$/i.test(name)) hasGif = true;
        });
        if (hasLarge) warns.push(msg.large);
        if (hasEdge) warns.push(msg.edge);
        if (hasGif) warns.push(msg.animation);
        setWarn(warns.join(' '));
      }

      /**
       * 追加解码后的文件到队列。
       * @param {FileList|File[]} files 用户选择的文件
       * @returns {Promise<void>}
       */
      function addFiles(files) {
        setError('');
        clearResult();
        var arr = Array.prototype.slice.call(files || []);
        if (!arr.length) return Promise.resolve();
        /** 按选择顺序串行解码，避免 Promise.all 竞态打乱幻灯片顺序。 */
        var chain = Promise.resolve();
        arr.forEach(function (file) {
          chain = chain.then(function () {
            return decodeImage(file).then(function (dec) {
              items.push({
                id: String(nextId++),
                file: file,
                bitmap: dec.bitmap,
                w: dec.w,
                h: dec.h,
                thumbUrl: URL.createObjectURL(file)
              });
            });
          });
        });
        return chain
          .then(function () {
            renderList();
            refreshWarnings();
          })
          .catch(function () {
            setError(msg.decodeFail);
          });
      }

      /**
       * 按列表顺序生成 PPTX。
       * @returns {Promise<void>}
       */
      function convert() {
        setError('');
        clearResult();
        if (!items.length) {
          setError(msg.empty);
          return Promise.resolve();
        }
        setStatus(msg.converting);
        lock(true);
        startedAt = Date.now();
        tickTime();
        tickTimer = setInterval(tickTime, 500);
        progress(2, 'encode', fill(msg.encodeStep, { i: '0', n: String(items.length) }));

        var box = slideBox();
        var fit = fitEl.value === 'cover' ? 'cover' : 'contain';
        var bg = (bgEl.value || '#ffffff').replace(/^#/, '').toUpperCase();

        return loadPptxLib()
          .then(function (PptxGenJS) {
            var dataUrls = [];
            var chain = Promise.resolve();
            items.forEach(function (item, idx) {
              chain = chain.then(function () {
                progress(5 + (idx / items.length) * 55, 'encode', fill(msg.encodeStep, { i: String(idx + 1), n: String(items.length) }));
                return itemToDataUrl(item).then(function (url) { dataUrls.push(url); });
              });
            });
            return chain.then(function () {
              progress(65, 'build', msg.buildStep);
              var pptx = new PptxGenJS();
              pptx.layout = box.layout;
              dataUrls.forEach(function (dataUrl) {
                var slide = pptx.addSlide();
                slide.background = { color: bg };
                slide.addImage({
                  data: dataUrl,
                  x: box.x,
                  y: box.y,
                  w: box.w,
                  h: box.h,
                  sizing: { type: fit, w: box.w, h: box.h }
                });
              });
              progress(85, 'pack', msg.packStep);
              return pptx.write({ outputType: 'blob' });
            });
          })
          .then(function (blob) {
            lock(false);
            if (!blob) {
              setError(msg.convertFail);
              setStatus('');
              endHud(false);
              return;
            }
            resultBlob = blob;
            btnDownload.disabled = false;
            statsEl.textContent = fill(msg.statsTpl, { n: String(items.length), bytes: formatBytes(blob.size) });
            statsEl.style.display = '';
            setStatus(msg.done);
            progress(100, 'pack', msg.packStep);
            endHud(true);
          })
          .catch(function (err) {
            lock(false);
            if (err && err.message === 'lib') setError(msg.libFail);
            else setError(msg.convertFail);
            setStatus('');
            endHud(false);
          });
      }

      /** 触发下载最近一次生成的 PPTX。 */
      function downloadResult() {
        if (!resultBlob) return;
        var url = URL.createObjectURL(resultBlob);
        var a = document.createElement('a');
        a.href = url;
        a.download = 'images.pptx';
        document.body.appendChild(a);
        a.click();
        a.remove();
        URL.revokeObjectURL(url);
      }

      /**
       * 生成 3 张色块样例图，加入列表并自动转换。
       * @returns {Promise<void>}
       */
      function loadSample() {
        clearAll(false);
        var specs = [
          { w: 960, h: 540, color: '#7c3aed', name: 'sample-a.png' },
          { w: 960, h: 540, color: '#ea580c', name: 'sample-b.png' },
          { w: 960, h: 540, color: '#0891b2', name: 'sample-c.png' }
        ];
        var filePromises = specs.map(function (spec) {
          return new Promise(function (resolve) {
            var c = document.createElement('canvas');
            c.width = spec.w;
            c.height = spec.h;
            var ctx = c.getContext('2d');
            ctx.fillStyle = spec.color;
            ctx.fillRect(0, 0, spec.w, spec.h);
            ctx.fillStyle = '#fff';
            ctx.font = '28px sans-serif';
            ctx.fillText(spec.name.replace('.png', ''), 40, spec.h / 2);
            c.toBlob(function (blob) {
              resolve(blob ? new File([blob], spec.name, { type: 'image/png' }) : null);
            }, 'image/png');
          });
        });
        return Promise.all(filePromises)
          .then(function (files) { return addFiles(files.filter(Boolean)); })
          .then(function () { if (items.length) return convert(); });
      }

      /**
       * 重置全部状态。
       * @param {boolean} resetInput 是否清空 file input
       */
      function clearAll(resetInput) {
        items.forEach(disposeItem);
        items = [];
        if (resetInput !== false) fileInput.value = '';
        listEl.innerHTML = '';
        clearResult();
        setError('');
        setWarn('');
        setStatus('');
        hud.hidden = true;
        hud.classList.remove('is-on', 'is-done', 'is-error');
        layoutEl.value = '16x9';
        fitEl.value = 'contain';
        bgEl.value = '#ffffff';
      }

      listEl.addEventListener('click', function (e) {
        if (busy) return;
        var tEl = e.target;
        if (!tEl || !tEl.closest) return;
        var up = tEl.closest('.img2ppt-up');
        var down = tEl.closest('.img2ppt-down');
        var rem = tEl.closest('.img2ppt-remove');
        var id = (up || down || rem) && (up || down || rem).getAttribute('data-id');
        if (!id) return;
        var idx = items.findIndex(function (it) { return it.id === id; });
        if (idx < 0) return;
        if (up && idx > 0) {
          var tmp = items[idx - 1];
          items[idx - 1] = items[idx];
          items[idx] = tmp;
          renderList();
          clearResult();
        } else if (down && idx < items.length - 1) {
          var tmp2 = items[idx + 1];
          items[idx + 1] = items[idx];
          items[idx] = tmp2;
          renderList();
          clearResult();
        } else if (rem) {
          disposeItem(items[idx]);
          items.splice(idx, 1);
          renderList();
          refreshWarnings();
          clearResult();
        }
      });

      ['change'].forEach(function (ev) {
        layoutEl.addEventListener(ev, clearResult);
        fitEl.addEventListener(ev, clearResult);
        bgEl.addEventListener(ev, clearResult);
      });

      drop.addEventListener('dragover', function (e) {
        e.preventDefault();
        drop.classList.add('dragover');
      });
      drop.addEventListener('dragleave', function () { drop.classList.remove('dragover'); });
      drop.addEventListener('drop', function (e) {
        e.preventDefault();
        drop.classList.remove('dragover');
        if (busy) return;
        var fs = e.dataTransfer && e.dataTransfer.files;
        if (fs && fs.length) addFiles(fs);
      });
      fileInput.addEventListener('change', function () {
        if (busy) return;
        if (fileInput.files && fileInput.files.length) addFiles(fileInput.files);
        fileInput.value = '';
      });

      btnConvert.addEventListener('click', function () { convert(); });
      btnDownload.addEventListener('click', downloadResult);
      btnSample.addEventListener('click', function () { loadSample(); });
      btnClear.addEventListener('click', function () { clearAll(true); });

      /** 进页自动跑样例并生成可下载 PPTX。 */
      loadSample();
    })();
  </script>`;

	const toolMeta = getToolBySlug('images-to-ppt');
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
