/**
 * 多张 JPG/PNG/WebP 印刷体 OCR → 每张 TXT 打 ZIP（可选合并；点后加载 Tesseract；进页不自动跑）。
 * slug: batch-convert-jpg-to-text-with-ocr
 * 规格：work-tasks/batch-convert-jpg-to-text-with-ocr/02-tool-info.md
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
const PREFIX = 'tool_batch_convert_jpg_to_text_with_ocr';

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
 * 渲染「用 OCR 批量把 JPG 转成文字」工具页。
 * @param opts.lang 当前 UI 语言
 * @param opts.defaultLang 默认（无前缀）语言
 * @param opts.enabledLangs 启用语言列表
 */
export const renderBatchConvertJpgToTextWithOcrPage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	/** 工具规范路径。 */
	const toolPath = '/tools/batch-convert-jpg-to-text-with-ocr';
	/** 当前语言 canonical。 */
	const canonicalPath = withLangPrefix(opts.lang, toolPath, opts.defaultLang);
	/** 文档 title。 */
	const title = `${tx(opts.lang, 'title')} | ${t(opts.lang, 'brand')}`;
	/** meta description。 */
	const description = tx(opts.lang, 'description');
	/** 顶栏导航。 */
	const navItems = buildToolPageNavItems(opts.lang, opts.defaultLang);

	/**
	 * 语言切换用显式语言段。
	 * @param code 语言码
	 * @param pathname 工具路径
	 */
	const withExplicitLangPrefix = (code: SiteLang, pathname: string) => {
		const safe = pathname.startsWith('/') ? pathname : `/${pathname}`;
		return `/${code}${safe}`.replace(/\/{2,}/g, '/');
	};

	/** header 语言菜单映射。 */
	const langAlternates: Record<string, string> = Object.fromEntries(
		(supportedLangs || []).map((code) => [code, withExplicitLangPrefix(code, toolPath)])
	);

	/** hreflang。 */
	const alternates: HreflangAlternate[] = (supportedLangs || []).map((code) => ({
		lang: code,
		href: `https://onlinefreetools.org${withLangPrefix(code, toolPath, opts.defaultLang)}`,
	}));

	/** 顶栏 HTML。 */
	const headerHtml = renderHeader({
		lang: opts.lang,
		brandHref: withLangPrefix(opts.lang, '/', opts.defaultLang),
		navItems,
		enabledLangs: supportedLangs,
		langAlternates,
	});

	/** 侧栏 HTML。 */
	const sidebarHtml = renderSidebar({
		title: t(opts.lang, 'nav_tools'),
		groups: buildToolSidebarItems({
			lang: opts.lang,
			defaultLang: opts.defaultLang,
			currentSlug: 'batch-convert-jpg-to-text-with-ocr',
			currentAnchor: '#converter',
		}),
		id: 'toolNav',
	});

	/** 页脚。 */
	const footerHtml = renderFooter({ lang: opts.lang });

	/** 队列表与预览样式。 */
	const extraHeadHtml = `
  <style>
    .tools-bar { gap: .5rem; }
    .ocr-batch-table { font-size: .85rem; }
    .ocr-batch-table td, .ocr-batch-table th { vertical-align: middle; }
    #ocrBatchLangChips { display: flex; flex-wrap: wrap; gap: .5rem 1rem; }
    #ocrBatchLangChips label { font-size: .875rem; }
    #ocrBatchCombined { min-height: 140px; font-family: ui-monospace, SFMono-Regular, Menlo, monospace; font-size: .85rem; }
  </style>`;

	/** 首屏：多文件队列、整批语种、Convert all、ZIP。 */
	const contentHtml = `
    <div id="converter" class="tool-page-heading mb-3">
      <h1 class="h4 mb-0">${escapeHtml(tx(opts.lang, 'title'))}</h1>
    </div>

    <label class="tool-dropzone mb-3" id="ocrBatchDrop" for="ocrBatchFile">
      <input type="file" id="ocrBatchFile" accept="image/jpeg,image/png,image/webp,.jpg,.jpeg,.png,.webp" multiple>
      <span class="tool-dropzone-title">${escapeHtml(tx(opts.lang, 'choose_files'))}</span>
      <span class="tool-dropzone-hint">${escapeHtml(tx(opts.lang, 'drop_hint'))}</span>
      <span id="ocrBatchFileCount" class="tool-dropzone-file"></span>
    </label>

    <fieldset class="mb-3">
      <legend class="form-label small mb-1">${escapeHtml(tx(opts.lang, 'lang_legend'))}</legend>
      <div id="ocrBatchLangChips">
        <label><input type="radio" name="ocrBatchLang" value="zh_en" checked> ${escapeHtml(tx(opts.lang, 'lang_zh_en'))}</label>
        <label><input type="radio" name="ocrBatchLang" value="en"> ${escapeHtml(tx(opts.lang, 'lang_en'))}</label>
        <label><input type="radio" name="ocrBatchLang" value="zh"> ${escapeHtml(tx(opts.lang, 'lang_zh'))}</label>
        <label><input type="radio" name="ocrBatchLang" value="ar"> ${escapeHtml(tx(opts.lang, 'lang_ar'))}</label>
        <label><input type="radio" name="ocrBatchLang" value="ja"> ${escapeHtml(tx(opts.lang, 'lang_ja'))}</label>
      </div>
    </fieldset>

    <details class="mb-2">
      <summary>${escapeHtml(tx(opts.lang, 'advanced'))}</summary>
      <div class="mt-2">
        <div class="form-check mb-2">
          <input class="form-check-input" type="checkbox" id="ocrBatchCombinedCb" checked>
          <label class="form-check-label small" for="ocrBatchCombinedCb">${escapeHtml(tx(opts.lang, 'combined_label'))}</label>
          <p class="form-text mb-0">${escapeHtml(tx(opts.lang, 'combined_hint'))}</p>
        </div>
        <label class="form-label small mb-1" for="ocrBatchMaxEdge">${escapeHtml(tx(opts.lang, 'max_edge'))}</label>
        <input type="number" id="ocrBatchMaxEdge" class="form-control form-control-sm" value="2048" min="800" max="4096" inputmode="numeric">
        <p class="form-text mb-0">${escapeHtml(tx(opts.lang, 'max_edge_hint'))}</p>
      </div>
    </details>

    <div class="d-flex align-items-center tools-bar mb-2 flex-wrap">
      <button type="button" id="ocrBatchBtnConvert" class="btn btn-primary btn-sm">${escapeHtml(tx(opts.lang, 'convert_all'))}</button>
      <button type="button" id="ocrBatchBtnZip" class="btn btn-outline-primary btn-sm" disabled>${escapeHtml(tx(opts.lang, 'download_zip'))}</button>
      <button type="button" id="ocrBatchBtnCopy" class="btn btn-outline-primary btn-sm" disabled>${escapeHtml(tx(opts.lang, 'copy_combined'))}</button>
      <button type="button" id="ocrBatchBtnSample" class="btn btn-outline-secondary btn-sm">${escapeHtml(tx(opts.lang, 'sample'))}</button>
      <button type="button" id="ocrBatchBtnClear" class="btn btn-outline-secondary btn-sm">${escapeHtml(tx(opts.lang, 'clear'))}</button>
    </div>

    <p id="ocrBatchError" class="small text-danger mb-2" style="display:none;" role="alert"></p>
    <p id="ocrBatchStatus" class="small text-muted mb-2" role="status" aria-live="polite"></p>

    <div class="table-responsive mb-3">
      <table class="table table-sm table-striped ocr-batch-table mb-0">
        <thead>
          <tr>
            <th>${escapeHtml(tx(opts.lang, 'col_name'))}</th>
            <th>${escapeHtml(tx(opts.lang, 'col_pixels'))}</th>
            <th>${escapeHtml(tx(opts.lang, 'col_status'))}</th>
            <th>${escapeHtml(tx(opts.lang, 'col_chars'))}</th>
          </tr>
        </thead>
        <tbody id="ocrBatchTbody"></tbody>
      </table>
    </div>

    <label class="form-label small mb-1" for="ocrBatchCombined">${escapeHtml(tx(opts.lang, 'preview_label'))}</label>
    <textarea id="ocrBatchCombined" class="form-control mb-3" readonly rows="8" aria-readonly="true"></textarea>

    <p class="tool-lead mb-4">${escapeHtml(tx(opts.lang, 'desc'))}</p>`;

	/** How / Rules / Example / Use cases。 */
	const igHtml = renderToolIgSections({
		lang: opts.lang,
		prefix: PREFIX,
		mode: 'rules',
		usecaseCount: 3,
		ruleItemCount: 4,
		howItemCount: 4,
	});

	/** 权威引用。 */
	const referencesHtml = renderToolReferencesSection({
		lang: opts.lang,
		links: [
			{ label: 'Tesseract OCR', href: 'https://github.com/tesseract-ocr/tesseract' },
			{ label: 'tesseract.js', href: 'https://github.com/naptha/tesseract.js' },
			{ label: 'fflate', href: 'https://github.com/101arrowz/fflate' },
		],
	});

	/**
	 * 客户端：点 Convert all 才加载 /vendor/tesseract；ZIP 用 fflate；进页不自动 OCR。
	 * 正则若加入字类，须写成 \\w / \\d。
	 */
	const extraBodyHtml = `
  <script src="/vendor/fflate/index.js" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
  <script>
    (function () {
      /** 队列上限。 */
      var MAX_FILES = 10;
      /** 单文件上限（字节）。 */
      var MAX_BYTES = 12 * 1024 * 1024;
      /** Tesseract OEM LSTM_ONLY。 */
      var OEM_LSTM = 1;
      /** 同域脚本与模型。 */
      var TESS_JS = '/vendor/tesseract/tesseract.min.js';
      var WORKER_PATH = '/vendor/tesseract/worker.min.js';
      var CORE_PATH = '/vendor/tesseract/core';
      var LANG_PATH = '/vendor/tesseract/lang';

      var drop = document.getElementById('ocrBatchDrop');
      var fileInput = document.getElementById('ocrBatchFile');
      var countEl = document.getElementById('ocrBatchFileCount');
      var tbody = document.getElementById('ocrBatchTbody');
      var combinedEl = document.getElementById('ocrBatchCombined');
      var btnConvert = document.getElementById('ocrBatchBtnConvert');
      var btnZip = document.getElementById('ocrBatchBtnZip');
      var btnCopy = document.getElementById('ocrBatchBtnCopy');
      var btnSample = document.getElementById('ocrBatchBtnSample');
      var btnClear = document.getElementById('ocrBatchBtnClear');
      var errEl = document.getElementById('ocrBatchError');
      var statusEl = document.getElementById('ocrBatchStatus');
      var combinedCb = document.getElementById('ocrBatchCombinedCb');
      var maxEdgeInput = document.getElementById('ocrBatchMaxEdge');
      var busyBtns = [btnConvert, btnSample, btnClear];

      var msg = {
        empty: ${JSON.stringify(tx(opts.lang, 'empty'))},
        errEmpty: ${JSON.stringify(tx(opts.lang, 'err_empty'))},
        errEngine: ${JSON.stringify(tx(opts.lang, 'err_engine'))},
        errLoad: ${JSON.stringify(tx(opts.lang, 'err_load'))},
        errPdf: ${JSON.stringify(tx(opts.lang, 'err_pdf'))},
        errSize: ${JSON.stringify(tx(opts.lang, 'err_size'))},
        errFflate: ${JSON.stringify(tx(opts.lang, 'err_fflate'))},
        errTooMany: ${JSON.stringify(tx(opts.lang, 'err_too_many'))},
        loading: ${JSON.stringify(tx(opts.lang, 'status_loading'))},
        progress: ${JSON.stringify(tx(opts.lang, 'status_progress'))},
        done: ${JSON.stringify(tx(opts.lang, 'status_done'))},
        copied: ${JSON.stringify(tx(opts.lang, 'copied'))},
        countTpl: ${JSON.stringify(tx(opts.lang, 'count_tpl'))},
        stQueued: ${JSON.stringify(tx(opts.lang, 'st_queued'))},
        stReading: ${JSON.stringify(tx(opts.lang, 'st_reading'))},
        stDone: ${JSON.stringify(tx(opts.lang, 'st_done'))},
        stSkipped: ${JSON.stringify(tx(opts.lang, 'st_skipped'))}
      };

      /** @type {Array<{file: File, name: string, w: number, h: number, status: string, text: string, error: string}>} */
      var queue = [];
      /** @type {string} 合并预览文本 */
      var combinedText = '';
      /** @type {Array<{zipName: string, bytes: Uint8Array}>} ZIP 条目 */
      var zipParts = [];
      /** @type {any} Tesseract worker 缓存 */
      var tessWorker = null;
      /** @type {string} worker 对应的语种键 */
      var tessWorkerKey = '';

      /**
       * 显示或隐藏整页错误（入队超额等）；行错误写在表内。
       * @param {string} text 人话错误；空则隐藏
       */
      function setError(text) {
        errEl.textContent = text || '';
        errEl.style.display = text ? 'block' : 'none';
      }

      /**
       * 更新 aria-live 状态行。
       * @param {string} text 状态文案
       */
      function setStatus(text) {
        statusEl.textContent = text || '';
      }

      /**
       * 忙碌时禁用输入与动作按钮（ZIP/Copy 仍按是否有产物）。
       * @param {boolean} on 是否忙碌
       */
      function setBusy(on) {
        busyBtns.forEach(function (b) { b.disabled = on; });
        fileInput.disabled = on;
        drop.style.pointerEvents = on ? 'none' : '';
        document.querySelectorAll('input[name="ocrBatchLang"]').forEach(function (el) { el.disabled = on; });
        combinedCb.disabled = on;
        maxEdgeInput.disabled = on;
        if (on) btnConvert.setAttribute('aria-busy', 'true');
        else btnConvert.removeAttribute('aria-busy');
      }

      /**
       * 按成功行启用 Download ZIP / Copy combined。
       */
      function syncOutputButtons() {
        var hasText = queue.some(function (r) { return r.status === 'done' && r.text; });
        btnZip.disabled = zipParts.length === 0;
        btnCopy.disabled = !combinedText;
        if (!hasText) {
          btnZip.disabled = true;
          btnCopy.disabled = true;
        }
      }

      /**
       * 读取语种芯片 → Tesseract 语言代码数组。
       * @returns {string[]}
       */
      function selectedTessLangs() {
        var checked = document.querySelector('input[name="ocrBatchLang"]:checked');
        var v = checked ? checked.value : 'zh_en';
        if (v === 'en') return ['eng'];
        if (v === 'zh') return ['chi_sim'];
        if (v === 'ar') return ['ara'];
        if (v === 'ja') return ['jpn'];
        return ['chi_sim', 'eng'];
      }

      /**
       * 读取最长边上限。
       * @returns {number}
       */
      function maxEdge() {
        var n = parseInt(maxEdgeInput.value, 10);
        if (!n || n < 800) return 2048;
        if (n > 4096) return 4096;
        return n;
      }

      /**
       * 行状态文案。
       * @param {string} status queued|reading|done|skipped
       * @returns {string}
       */
      function statusLabel(status) {
        if (status === 'reading') return msg.stReading;
        if (status === 'done') return msg.stDone;
        if (status === 'skipped') return msg.stSkipped;
        return msg.stQueued;
      }

      /**
       * 重绘画队列表。
       */
      function renderQueue() {
        tbody.textContent = '';
        queue.forEach(function (row) {
          var tr = document.createElement('tr');
          var px = row.w && row.h ? row.w + '×' + row.h : '—';
          var note = row.error || (row.text ? String(row.text.length) : '');
          [row.name, px, statusLabel(row.status), note].forEach(function (cell) {
            var td = document.createElement('td');
            td.textContent = cell;
            tr.appendChild(td);
          });
          tbody.appendChild(tr);
        });
        countEl.textContent = queue.length ? msg.countTpl.replace('{n}', String(queue.length)) : '';
      }

      /**
       * 用成功行拼合并 TXT（文件名分隔）。
       * @returns {string}
       */
      function buildCombined() {
        var chunks = [];
        queue.forEach(function (row) {
          if (row.status !== 'done' || !row.text) return;
          chunks.push('--- ' + row.name + ' ---\\n' + row.text);
        });
        return chunks.join('\\n\\n');
      }

      /**
       * UTF-8 文本转 Uint8Array（ZIP 条目）。
       * @param {string} text 纯文本
       * @returns {Uint8Array}
       */
      function textToBytes(text) {
        return new TextEncoder().encode(text);
      }

      /**
       * ZIP 内唯一文件名（重名 stem (2).txt）。
       * @param {Object<string, boolean>} used 已占用名
       * @param {string} original 原文件名
       * @returns {string}
       */
      function uniqueZipName(used, original) {
        var stem = String(original || 'image').replace(/\\.[^.]+$/, '') || 'image';
        var name = stem + '.txt';
        var n = 2;
        while (used[name]) {
          name = stem + ' (' + n + ').txt';
          n += 1;
        }
        used[name] = true;
        return name;
      }

      /**
       * 根据当前队列重建 ZIP 内存条目。
       */
      function rebuildZipParts() {
        zipParts = [];
        var used = {};
        queue.forEach(function (row) {
          if (row.status !== 'done' || !row.text) return;
          zipParts.push({ zipName: uniqueZipName(used, row.name), bytes: textToBytes(row.text) });
        });
        combinedText = buildCombined();
        combinedEl.value = combinedText;
        if (combinedCb.checked && combinedText) {
          zipParts.push({ zipName: 'combined.txt', bytes: textToBytes(combinedText) });
        }
        syncOutputButtons();
      }

      /**
       * 懒加载 tesseract.min.js（仅一次）。
       * @returns {Promise<any>}
       */
      function loadTessScript() {
        if (window.Tesseract) return Promise.resolve(window.Tesseract);
        return new Promise(function (resolve, reject) {
          var s = document.createElement('script');
          s.src = TESS_JS;
          s.onload = function () {
            if (window.Tesseract) resolve(window.Tesseract);
            else reject(new Error('engine'));
          };
          s.onerror = function () { reject(new Error('engine')); };
          document.head.appendChild(s);
        });
      }

      /**
       * 取得或重建 worker（语种变化则 terminate 后重开）。整批复用一个 worker。
       * @param {string[]} langs Tesseract 语言码
       * @returns {Promise<any>}
       */
      function getWorker(langs) {
        var key = langs.slice().sort().join('+');
        if (tessWorker && tessWorkerKey === key) return Promise.resolve(tessWorker);
        var prev = tessWorker;
        tessWorker = null;
        tessWorkerKey = '';
        var start = prev && prev.terminate ? Promise.resolve(prev.terminate()) : Promise.resolve();
        return start.then(function () {
          return loadTessScript();
        }).then(function (Tesseract) {
          setStatus(msg.loading);
          return Tesseract.createWorker(langs, OEM_LSTM, {
            workerPath: WORKER_PATH,
            corePath: CORE_PATH,
            langPath: LANG_PATH,
            workerBlobURL: false,
            logger: function (m) {
              if (!m || !m.status) return;
              if (String(m.status).indexOf('loading') !== -1) setStatus(msg.loading);
            }
          });
        }).then(function (worker) {
          tessWorker = worker;
          tessWorkerKey = key;
          return worker;
        });
      }

      /**
       * 把图片缩到最长边上限后画到 canvas。
       * @param {Blob} blob 图片
       * @returns {Promise<{canvas: HTMLCanvasElement, w: number, h: number}>}
       */
      function blobToCanvas(blob) {
        return createImageBitmap(blob).then(function (bmp) {
          var w = bmp.width;
          var h = bmp.height;
          var edge = maxEdge();
          var scale = Math.min(1, edge / Math.max(w, h));
          var cw = Math.max(1, Math.round(w * scale));
          var ch = Math.max(1, Math.round(h * scale));
          var c = document.createElement('canvas');
          c.width = cw;
          c.height = ch;
          var ctx = c.getContext('2d');
          if (!ctx) {
            bmp.close();
            return Promise.reject(new Error('load'));
          }
          ctx.drawImage(bmp, 0, 0, cw, ch);
          bmp.close();
          return { canvas: c, w: cw, h: ch };
        });
      }

      /**
       * 判断是否可识别的图片类型。
       * @param {File} file 用户文件
       * @returns {string} 'ok' | 'pdf' | 'type' | 'size'
       */
      function classifyFile(file) {
        var name = (file && file.name ? file.name : '').toLowerCase();
        var type = (file && file.type ? file.type : '').toLowerCase();
        if (type === 'application/pdf' || /\\.pdf$/.test(name)) return 'pdf';
        var okType = type === 'image/jpeg' || type === 'image/jpg' || type === 'image/png' || type === 'image/webp'
          || /\\.(jpe?g|png|webp)$/.test(name);
        if (!okType) return 'type';
        if (file.size > MAX_BYTES) return 'size';
        return 'ok';
      }

      /**
       * 把文件列表追加进队列（上限 10；PDF 不入队）。
       * @param {FileList|File[]} files 新文件
       */
      function addFiles(files) {
        setError('');
        var list = Array.prototype.slice.call(files || []);
        var extra = false;
        list.forEach(function (file) {
          if (queue.length >= MAX_FILES) {
            extra = true;
            return;
          }
          var kind = classifyFile(file);
          if (kind === 'pdf') {
            setError(msg.errPdf);
            return;
          }
          if (kind === 'type') {
            queue.push({ file: file, name: file.name || 'image', w: 0, h: 0, status: 'skipped', text: '', error: msg.errLoad });
            return;
          }
          if (kind === 'size') {
            queue.push({ file: file, name: file.name || 'image', w: 0, h: 0, status: 'skipped', text: '', error: msg.errSize });
            return;
          }
          queue.push({ file: file, name: file.name || 'image', w: 0, h: 0, status: 'queued', text: '', error: '' });
        });
        if (extra) setError(msg.errTooMany);
        zipParts = [];
        combinedText = '';
        combinedEl.value = '';
        renderQueue();
        syncOutputButtons();
        queue.forEach(function (row) {
          if (row.status !== 'queued' || row.w) return;
          blobToCanvas(row.file).then(function (out) {
            row.w = out.w;
            row.h = out.h;
            renderQueue();
          }).catch(function () { /* 像素预览失败等 Convert 再 skip */ });
        });
      }

      /**
       * 识别单行；失败 skip，不抛到整批。
       * @param {object} row 队列行
       * @param {any} worker Tesseract worker
       * @param {number} index 1-based 进度
       * @returns {Promise<void>}
       */
      function recognizeRow(row, worker, index) {
        row.status = 'reading';
        setStatus(msg.progress.replace('{i}', String(index)).replace('{n}', String(queue.length)).replace('{name}', row.name));
        renderQueue();
        return blobToCanvas(row.file).then(function (out) {
          row.w = out.w;
          row.h = out.h;
          return worker.recognize(out.canvas);
        }).then(function (result) {
          var data = outData(result);
          var text = String(data.text || '').replace(/^\\s+/g, '').replace(/\\s+$/g, '');
          if (!text) {
            row.status = 'skipped';
            row.error = msg.errEmpty;
            return;
          }
          row.status = 'done';
          row.text = text;
          row.error = '';
        }).catch(function () {
          row.status = 'skipped';
          row.error = msg.errLoad;
        }).then(function () {
          renderQueue();
        });
      }

      /**
       * 取出 recognize 结果的 data 字段。
       * @param {any} result tesseract 返回值
       * @returns {any}
       */
      function outData(result) {
        return result && result.data ? result.data : {};
      }

      /**
       * 整批串行 Convert all。引擎加载失败则停止后续行，保留已完成行。
       * @returns {Promise<void>}
       */
      function convertAll() {
        if (!queue.length) {
          setError(msg.empty);
          return Promise.resolve();
        }
        var hasWork = queue.some(function (r) {
          return r.status === 'queued' || (r.status === 'skipped' && r.error === msg.errEmpty);
        });
        if (!hasWork && !queue.some(function (r) { return r.status === 'done'; })) {
          setError(msg.empty);
          return Promise.resolve();
        }
        setError('');
        setBusy(true);
        setStatus(msg.loading);
        var langs = selectedTessLangs();
        return getWorker(langs).then(function (worker) {
          var i = 0;
          function next() {
            if (i >= queue.length) return Promise.resolve();
            var row = queue[i];
            i += 1;
            if (row.status === 'done' && row.text) return next();
            if (row.status === 'skipped' && row.error && row.error !== msg.errEmpty) {
              /** 类型/体积错误不再重试。 */
              return next();
            }
            row.status = 'queued';
            row.text = '';
            row.error = '';
            return recognizeRow(row, worker, i).then(next);
          }
          return next();
        }).then(function () {
          rebuildZipParts();
          setStatus(msg.done);
        }).catch(function () {
          setError(msg.errEngine);
          queue.forEach(function (row) {
            if (row.status === 'queued' || row.status === 'reading') {
              row.status = 'skipped';
              row.error = msg.errEngine;
            }
          });
          renderQueue();
          rebuildZipParts();
          setStatus('');
        }).then(function () {
          setBusy(false);
        });
      }

      /**
       * 复制合并文本。
       */
      function copyCombined() {
        if (!combinedText) return;
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(combinedText).then(function () { setStatus(msg.copied); }).catch(function () {
            combinedEl.select();
            document.execCommand('copy');
            setStatus(msg.copied);
          });
        } else {
          combinedEl.select();
          document.execCommand('copy');
          setStatus(msg.copied);
        }
      }

      /**
       * 打包并下载 ZIP。
       */
      function downloadZip() {
        if (!zipParts.length) return;
        if (typeof fflate === 'undefined' || !fflate || typeof fflate.zipSync !== 'function') {
          setError(msg.errFflate);
          return;
        }
        var files = {};
        for (var i = 0; i < zipParts.length; i++) files[zipParts[i].zipName] = zipParts[i].bytes;
        try {
          var zipped = fflate.zipSync(files, { level: 1 });
          var blob = new Blob([zipped], { type: 'application/zip' });
          var a = document.createElement('a');
          var url = URL.createObjectURL(blob);
          a.href = url;
          a.download = 'jpg-ocr-text.zip';
          document.body.appendChild(a);
          a.click();
          a.remove();
          setTimeout(function () { URL.revokeObjectURL(url); }, 2000);
        } catch (e) {
          setError(msg.errFflate);
        }
      }

      /**
       * 画一张印刷体样例图。
       * @param {string[]} lines 行文
       * @param {string} filename 样例文件名
       * @returns {Promise<File>}
       */
      function makeSampleFile(lines, filename) {
        var c = document.createElement('canvas');
        c.width = 1100;
        c.height = 360;
        var ctx = c.getContext('2d');
        if (!ctx) return Promise.resolve(null);
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, c.width, c.height);
        ctx.fillStyle = '#111111';
        lines.forEach(function (line, idx) {
          ctx.font = idx === 0 ? 'bold 48px sans-serif' : '40px "PingFang SC", "Microsoft YaHei", "Noto Sans SC", sans-serif';
          ctx.fillText(line, 48, 90 + idx * 80);
        });
        return new Promise(function (resolve) {
          c.toBlob(function (blob) {
            if (!blob) { resolve(null); return; }
            resolve(new File([blob], filename, { type: 'image/jpeg' }));
          }, 'image/jpeg', 0.95);
        });
      }

      /**
       * 合成两张印刷体样例并走 Convert all（进页不自动调用）。
       * @returns {Promise<void>}
       */
      function loadSample() {
        return Promise.all([
          makeSampleFile(['ONLINEFREETOOLS', 'The quick brown fox'], 'sample-1.jpg'),
          makeSampleFile(['SAMPLE TWO', '印刷体样例'], 'sample-2.jpg')
        ]).then(function (files) {
          queue = [];
          zipParts = [];
          combinedText = '';
          combinedEl.value = '';
          addFiles(files.filter(Boolean));
          return convertAll();
        });
      }

      /**
       * 清空队列与结果。
       */
      function clearAll() {
        queue = [];
        zipParts = [];
        combinedText = '';
        combinedEl.value = '';
        fileInput.value = '';
        renderQueue();
        syncOutputButtons();
        setError('');
        setStatus('');
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
        if (fs && fs.length) addFiles(fs);
      });
      fileInput.addEventListener('change', function () {
        if (fileInput.files && fileInput.files.length) addFiles(fileInput.files);
        fileInput.value = '';
      });

      btnConvert.addEventListener('click', function () { convertAll(); });
      btnZip.addEventListener('click', downloadZip);
      btnCopy.addEventListener('click', copyCombined);
      btnSample.addEventListener('click', function () { loadSample(); });
      btnClear.addEventListener('click', clearAll);

      renderQueue();
      /** 进页不自动 loadSample：WASM + 多图串行会打坏 LCP。函数须存在供按钮与 lint。 */
    })();
  </script>`;

	const toolMeta = getToolBySlug('batch-convert-jpg-to-text-with-ocr');
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
