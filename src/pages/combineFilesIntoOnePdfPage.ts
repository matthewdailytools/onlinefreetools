/**
 * Combine files into one PDF 工具页：支持队列中的 PDF 与图片文件（纯客户端合并/导出）。
 * slug: combine-files-into-one-pdf
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
import {
	pdfWorkUiBlockHtml,
	pdfWorkUiClientScript,
	pdfWorkUiCss,
	pdfWorkUiLabels,
} from './site/pdfWorkUi';

/** 非默认语言时为路径加语言前缀。 */
const withLangPrefix = (lang: SiteLang, pathname: string, defaultLang: SiteLang) => {
	const safe = pathname.startsWith('/') ? pathname : `/${pathname}`;
	return lang === defaultLang ? safe : `/${lang}${safe}`;
};

/**
 * 渲染 combine-files-into-one-pdf 工具页。
 * @param opts.lang 当前 UI 语言
 * @param opts.defaultLang 默认（无前缀）语言
 * @param opts.enabledLangs 启用语言列表
 */
export const renderCombineFilesIntoOnePdfPage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	const toolPath = '/tools/combine-files-into-one-pdf';
	const canonicalPath = withLangPrefix(opts.lang, toolPath, opts.defaultLang);

	/** 文案 i18n 前缀（必须与 i18n shard 一致） */
	const prefix = 'tool_combine_files_into_one_pdf';
	const title = `${t(opts.lang, prefix + '_title')} | ${t(opts.lang, 'brand')}`;
	const description = t(opts.lang, prefix + '_description');

	/** 顶部导航条目 */
	const navItems = buildToolPageNavItems(opts.lang, opts.defaultLang);

	/** hreflang 映射始终带显式语言段。 */
	const withExplicitLangPrefix = (code: SiteLang, pathname: string) => {
		const safe = pathname.startsWith('/') ? pathname : `/${pathname}`;
		return `/${code}${safe}`.replace(/\/{2,}/g, '/');
	};

	const langAlternates: Record<string, string> = Object.fromEntries(
		(supportedLangs || []).map((code) => [code, withExplicitLangPrefix(code, toolPath)])
	);

	/** 用于渲染页头语言切换链接 */
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
			currentSlug: 'combine-files-into-one-pdf',
			currentAnchor: '#converter',
		}),
		id: 'toolNav',
	});

	const footerHtml = renderFooter({ lang: opts.lang });

	const pdfWorkLabels = pdfWorkUiLabels(opts.lang);
	const extraHeadHtml = `
  <style>
    .combine-list-item { display:flex; align-items:center; gap:.5rem; padding:.25rem .25rem; }
    .combine-list-item .name { flex:1; min-width: 0; overflow:hidden; text-overflow:ellipsis; white-space:nowrap; }
    .tools-bar { gap: .5rem; }
    ${pdfWorkUiCss()}
  </style>`;

	const contentHtml = `
    <div id="converter" class="tool-page-heading mb-3">
      <h1 class="h4 mb-0">${escapeHtml(t(opts.lang, prefix + '_title'))}</h1>
    </div>

    <label class="tool-dropzone mb-3 combine-pdf-drop" id="combineDrop" for="combineFiles">
      <input type="file" id="combineFiles" accept="application/pdf,image/png,image/jpeg,.pdf,.png,.jpg,.jpeg" multiple>
      <span class="tool-dropzone-title">${escapeHtml(t(opts.lang, prefix + '_choose_files'))}</span>
      <span class="tool-dropzone-hint">${escapeHtml(t(opts.lang, prefix + '_drop_hint'))}</span>
    </label>

    <ul id="combineFilesList" class="list-group mb-3"></ul>

    <div class="d-flex align-items-center tools-bar mb-2 flex-wrap">
      <button type="button" id="combineBtnCombine" class="btn btn-primary btn-sm" disabled>${escapeHtml(t(opts.lang, prefix + '_combine'))}</button>
      <button type="button" id="combineBtnDownload" class="btn btn-outline-primary btn-sm" disabled>${escapeHtml(t(opts.lang, prefix + '_download'))}</button>
      <button type="button" id="combineBtnSample" class="btn btn-outline-secondary btn-sm">${escapeHtml(t(opts.lang, prefix + '_sample'))}</button>
      <button type="button" id="combineBtnClear" class="btn btn-outline-secondary btn-sm">${escapeHtml(t(opts.lang, prefix + '_clear'))}</button>
    </div>

    <p id="combineWarn" class="small text-warning mb-2" style="display:none;" role="status"></p>
    <p id="combineError" class="small text-danger mb-2" style="display:none;" role="alert"></p>
    <p id="combineStatus" class="small text-muted mb-2" role="status"></p>
    ${pdfWorkUiBlockHtml({ idPrefix: 'combinePdf', labels: pdfWorkLabels })}

    <p class="tool-lead mb-4">${escapeHtml(description)}</p>`;

	const igHtml = renderToolIgSections({
		lang: opts.lang,
		prefix,
		mode: 'rules',
		usecaseCount: 3,
		ruleItemCount: 4,
	});

	const referencesHtml = renderToolReferencesSection({
		lang: opts.lang,
		links: [{ label: 'pdf-lib', href: 'https://pdf-lib.js.org/' }],
	});

	/**
	 * 客户端脚本：读取文件队列，按顺序合并 PDF 与图片到单一 PDF，并支持 loadSample 自动演示。
	 * 注：这里的脚本全部在浏览器端运行；不上传服务器。
	 */
	const extraBodyHtml = `
  ${pdfWorkUiClientScript()}
  <script src="/vendor/pdf-lib/pdf-lib.min.js" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
  <script>
    (function () {
      /** 软警告阈值：超过该字节总和可能导致处理变慢。 */
      var SOFT_BYTES = 25 * 1024 * 1024;

      /** 文件输入与 DOM 引用 */
      var fileInput = document.getElementById('combineFiles');
      var dropEl = document.getElementById('combineDrop');
      var listEl = document.getElementById('combineFilesList');
      var btnCombine = document.getElementById('combineBtnCombine');
      var btnDownload = document.getElementById('combineBtnDownload');
      var btnSample = document.getElementById('combineBtnSample');
      var btnClear = document.getElementById('combineBtnClear');
      var warnEl = document.getElementById('combineWarn');
      var errEl = document.getElementById('combineError');
      var statusEl = document.getElementById('combineStatus');
      var work = window.OftPdfWork.bind('combinePdf');
      var busyBtns = [btnCombine, btnSample, btnClear, btnDownload];

      /** 结果字节（用于下载） */
      var resultBytes = null;

      /** 单项队列：{ name, kind:'pdf'|'image', imageKind:'png'|'jpg'|null, bytes: Uint8Array } */
      var items = [];

      var msg = {
        empty: ${JSON.stringify(t(opts.lang, prefix + '_empty'))},
        encrypted: ${JSON.stringify(t(opts.lang, prefix + '_err_encrypted'))},
        loadFail: ${JSON.stringify(t(opts.lang, prefix + '_err_load'))},
        mergeFail: ${JSON.stringify(t(opts.lang, prefix + '_err_convert'))},
        large: ${JSON.stringify(t(opts.lang, prefix + '_warn_large'))},
        pdflibMissing: ${JSON.stringify(t(opts.lang, 'tool_merge_pdf_warn_pdflib'))},
        working: ${JSON.stringify(t(opts.lang, prefix + '_status_working'))},
        done: ${JSON.stringify(t(opts.lang, prefix + '_status_done'))},
        combineLabel: ${JSON.stringify(t(opts.lang, prefix + '_combine'))},
        moveUp: ${JSON.stringify(t(opts.lang, prefix + '_move_up'))},
        moveDown: ${JSON.stringify(t(opts.lang, prefix + '_move_down'))},
        remove: ${JSON.stringify(t(opts.lang, prefix + '_remove'))},
      };

      /** 判断环境是否具备 pdf-lib（用于兜底报错） */
      function hasPdfLib() {
        return typeof PDFLib !== 'undefined' && PDFLib && typeof PDFLib.PDFDocument === 'function';
      }

      /** 错误展示 */
      function setErr(text) {
        if (!text) {
          errEl.style.display = 'none';
          errEl.textContent = '';
          return;
        }
        errEl.textContent = text;
        errEl.style.display = '';
      }

      /** 警告展示 */
      function setWarn(text) {
        if (!text) {
          warnEl.style.display = 'none';
          warnEl.textContent = '';
          return;
        }
        warnEl.textContent = text;
        warnEl.style.display = '';
      }

      /** 状态展示 */
      function setStatus(text) {
        statusEl.textContent = text || '';
      }

      /** 重置所有 UI 状态 */
      function clearAll(disableSample) {
        resultBytes = null;
        items = [];
        listEl.innerHTML = '';
        btnDownload.disabled = true;
        btnCombine.disabled = true;
        work.clearPreview();
        work.hideProgress();
        setErr('');
        setWarn('');
        setStatus('');
        if (disableSample) btnSample.disabled = true;
        else btnSample.disabled = false;
      }

      /** 根据文件判断其类型：PDF 或图片 */
      function detectItemKind(file) {
        var nameLower = (file && file.name ? file.name : '').toLowerCase();
        var type = file && file.type ? file.type : '';
        if (type === 'application/pdf' || nameLower.endsWith('.pdf')) {
          return { kind: 'pdf' };
        }
        var isPng = type === 'image/png' || nameLower.endsWith('.png');
        var isJpg = type === 'image/jpeg' || type === 'image/jpg' || nameLower.endsWith('.jpg') || nameLower.endsWith('.jpeg');
        if (isPng) return { kind: 'image', imageKind: 'png' };
        if (isJpg) return { kind: 'image', imageKind: 'jpg' };
        return null;
      }

      /** 渲染队列列表（含上移/下移/移除按钮） */
      function renderList() {
        listEl.innerHTML = '';
        items.forEach(function (it, idx) {
          var li = document.createElement('li');
          li.className = 'list-group-item p-2 combine-list-item';

          var name = document.createElement('span');
          name.className = 'name';
          name.textContent = it.name;

          var kindTag = document.createElement('span');
          kindTag.className = 'badge text-bg-secondary';
          kindTag.style.whiteSpace = 'nowrap';
          kindTag.textContent = it.kind === 'pdf' ? 'PDF' : 'IMG';

          /** 上移按钮 */
          var btnUp = document.createElement('button');
          btnUp.type = 'button';
          btnUp.className = 'btn btn-outline-secondary btn-sm';
          btnUp.textContent = msg.moveUp;
          btnUp.disabled = idx === 0;
          btnUp.dataset.action = 'up';
          btnUp.dataset.index = String(idx);

          /** 下移按钮 */
          var btnDown = document.createElement('button');
          btnDown.type = 'button';
          btnDown.className = 'btn btn-outline-secondary btn-sm';
          btnDown.textContent = msg.moveDown;
          btnDown.disabled = idx === items.length - 1;
          btnDown.dataset.action = 'down';
          btnDown.dataset.index = String(idx);

          /** 移除按钮 */
          var btnRemove = document.createElement('button');
          btnRemove.type = 'button';
          btnRemove.className = 'btn btn-outline-danger btn-sm';
          btnRemove.textContent = msg.remove;
          btnRemove.dataset.action = 'remove';
          btnRemove.dataset.index = String(idx);

          li.appendChild(kindTag);
          li.appendChild(name);
          li.appendChild(btnUp);
          li.appendChild(btnDown);
          li.appendChild(btnRemove);
          listEl.appendChild(li);
        });

        btnCombine.disabled = items.length === 0;
      }

      /** 处理队列按钮点击（事件委托） */
      listEl.addEventListener('click', function (e) {
        var t = e.target;
        if (!t || !t.dataset) return;
        var action = t.dataset.action;
        var index = Number(t.dataset.index);
        if (!Number.isFinite(index)) return;
        if (action === 'remove') {
          items.splice(index, 1);
          resultBytes = null;
          btnDownload.disabled = true;
          work.clearPreview();
          setErr('');
          setWarn('');
          renderList();
        } else if (action === 'up' && index > 0) {
          var tmp = items[index - 1];
          items[index - 1] = items[index];
          items[index] = tmp;
          renderList();
        } else if (action === 'down' && index < items.length - 1) {
          var tmp2 = items[index + 1];
          items[index + 1] = items[index];
          items[index] = tmp2;
          renderList();
        }
      });

      /** 读取文件字节并加入 items 队列 */
      function addFiles(fileList) {
        if (!fileList || !fileList.length) return;
        setErr('');
        setWarn('');
        setStatus('');
        resultBytes = null;
        btnDownload.disabled = true;
        work.clearPreview();
        items = [];

        /** 累计字节数（用于大型文件提示） */
        var totalBytes = 0;

        var fileArr = Array.prototype.slice.call(fileList);
        var loadPromises = fileArr.map(function (f) {
          var kind = detectItemKind(f);
          if (!kind) return Promise.resolve(null);
          totalBytes += (f.size || 0);
          return f.arrayBuffer().then(function (ab) {
            return {
              name: f.name || 'file',
              kind: kind.kind,
              imageKind: kind.imageKind || null,
              bytes: new Uint8Array(ab),
            };
          });
        });

        Promise.all(loadPromises)
          .then(function (loaded) {
            items = loaded.filter(Boolean);
            if (items.length === 0) {
              setErr(msg.empty);
              btnCombine.disabled = true;
              return;
            }
            if (totalBytes > SOFT_BYTES) setWarn(msg.large);
            renderList();
          })
          .catch(function () {
            setErr(msg.loadFail);
          });
      }

      /** 下载结果 PDF */
      function downloadResult() {
        if (!resultBytes) return;
        var blob = new Blob([resultBytes], { type: 'application/pdf' });
        var url = URL.createObjectURL(blob);
        var a = document.createElement('a');
        a.href = url;
        a.download = 'combined.pdf';
        document.body.appendChild(a);
        a.click();
        a.remove();
        URL.revokeObjectURL(url);
      }

      /**
       * 将 items 队列合并为单 PDF。
       * @param {(done: number, total: number) => void} [onProgress] 每处理完一个文件回调
       * @returns {Promise<{bytes: Uint8Array}>}
       */
      function buildCombined(onProgress) {
        if (!hasPdfLib()) return Promise.reject(new Error('pdflib'));
        if (!items.length) return Promise.reject(new Error('empty'));

        return PDFLib.PDFDocument.create().then(function (outDoc) {
          var pagesAdded = 0;
          var total = items.length;
          var done = 0;
          var p = Promise.resolve();
          items.forEach(function (it) {
            p = p.then(function () {
              return window.OftPdfWork.yieldUi().then(function () {
                if (it.kind === 'pdf') {
                  return PDFLib.PDFDocument.load(it.bytes).then(function (srcDoc) {
                    var pageIndices = srcDoc.getPageIndices();
                    return outDoc.copyPages(srcDoc, pageIndices).then(function (copiedPages) {
                      copiedPages.forEach(function (pp) {
                        outDoc.addPage(pp);
                        pagesAdded += 1;
                      });
                    });
                  });
                }
                // 图片：嵌入为新页面
                var embed = it.imageKind === 'png' ? outDoc.embedPng : outDoc.embedJpg;
                return embed.call(outDoc, it.bytes).then(function (img) {
                  // 简单缩放：避免图片过大导致页面异常
                  var MAX_W = 612; // 8.5in*72
                  var MAX_H = 792; // 11in*72
                  var scale = Math.min(MAX_W / img.width, MAX_H / img.height, 1);
                  var w = img.width * scale;
                  var h = img.height * scale;
                  var page = outDoc.addPage([w, h]);
                  page.drawImage(img, { x: 0, y: 0, width: w, height: h });
                  pagesAdded += 1;
                });
              }).then(function () {
                done += 1;
                if (onProgress) onProgress(done, total);
              });
            });
          });

          return p.then(function () {
            return outDoc.save().then(function (bytes) {
              return { bytes: new Uint8Array(bytes), pagesAdded: pagesAdded };
            });
          });
        });
      }

      /** 生成用于示例的单页 PDF（在队列中当作“另一个 PDF”合并） */
      function makeSamplePdf(label, fileName) {
        return PDFLib.PDFDocument.create().then(function (doc) {
          var page = doc.addPage([420, 300]);
          return doc.embedFont(PDFLib.StandardFonts.HelveticaBold).then(function (font) {
            page.drawText(label || 'Combine sample', { x: 48, y: 170, size: 24, font: font });
            page.drawText('Sample page', { x: 48, y: 128, size: 12, font: font });
            return doc.save();
          });
        }).then(function (bytes) {
          return new File([bytes], fileName, { type: 'application/pdf' });
        });
      }

      /**
       * 跑合并并刷新进度/预览。
       * @returns {Promise<void>}
       */
      function runCombine() {
        work.setBusy(busyBtns, true);
        work.setProgress(null);
        setStatus(msg.working);
        return window.OftPdfWork.yieldUi()
          .then(function () {
            return buildCombined(function (done, total) {
              work.setProgress((done / total) * 80);
            });
          })
          .then(function (res) {
            resultBytes = res.bytes;
            work.setProgress(90);
            return work.showPreview(res.bytes).then(function () { return res; });
          })
          .then(function (res) {
            work.setProgress(100);
            btnDownload.disabled = false;
            setStatus(msg.done);
            return res;
          })
          .catch(function (err) {
            var eStr = String(err && err.message ? err.message : err);
            if (/password/i.test(eStr)) setErr(msg.encrypted);
            else setErr(msg.mergeFail);
            setStatus('');
            work.clearPreview();
          })
          .finally(function () {
            work.setBusy(busyBtns, false);
            work.hideProgress();
            btnCombine.disabled = items.length === 0;
            btnDownload.disabled = !resultBytes;
          });
      }

      /** 清理并执行 loadSample：自动生成样例并合并 */
      function loadSample() {
        clearAll(false);
        if (!hasPdfLib()) {
          setErr(msg.pdflibMissing || 'pdf-lib missing');
          return;
        }
        work.setBusy(busyBtns, true);
        work.setProgress(null);
        setStatus(msg.working);
        Promise.all([
          makeSamplePdf('Combine sample A', 'sample-a.pdf').then(function (f) { return f.arrayBuffer(); }),
          makeSamplePdf('Combine sample B', 'sample-b.pdf').then(function (f) { return f.arrayBuffer(); }),
        ])
          .then(function (arr) {
            items = [
              { name: 'sample-a.pdf', kind: 'pdf', imageKind: null, bytes: new Uint8Array(arr[0]) },
              { name: 'sample-b.pdf', kind: 'pdf', imageKind: null, bytes: new Uint8Array(arr[1]) },
            ];
            renderList();
            return runCombine();
          })
          .catch(function (err) {
            var eStr = String(err && err.message ? err.message : err);
            if (/password/i.test(eStr)) setErr(msg.encrypted);
            else setErr(msg.mergeFail);
            setStatus('');
            work.setBusy(busyBtns, false);
            work.hideProgress();
          });
      }

      /** 绑定文件选择事件 */
      fileInput.addEventListener('change', function () {
        if (!fileInput.files || !fileInput.files.length) return;
        addFiles(fileInput.files);
        fileInput.value = '';
      });

      /** 允许拖拽到 drop zone */
      if (dropEl) {
        ['dragover', 'drop'].forEach(function (evtName) {
          dropEl.addEventListener(evtName, function (evt) {
            evt.preventDefault();
            evt.stopPropagation();
          });
        });
        dropEl.addEventListener('drop', function (evt) {
          var dt = evt.dataTransfer;
          if (!dt || !dt.files || !dt.files.length) return;
          addFiles(dt.files);
        });
      }

      /** 绑定按钮：合并/下载/样例/清空 */
      btnCombine.addEventListener('click', function () {
        setErr('');
        setWarn('');
        setStatus('');
        btnDownload.disabled = true;
        runCombine();
      });

      btnDownload.addEventListener('click', downloadResult);
      btnSample.addEventListener('click', loadSample);
      btnClear.addEventListener('click', function () {
        clearAll(false);
      });

      // 初始化：自动演示样例（与其它工具页保持一致）
      loadSample();
    })();
  </script>`;

	const toolMeta = getToolBySlug('combine-files-into-one-pdf');
	const toolSeoHtml = toolMeta
		? renderToolExtraSections({
				lang: opts.lang,
				defaultLang: opts.defaultLang,
				tool: toolMeta,
				enabledLangs: supportedLangs,
			})
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
		contentHtml: contentHtml + igHtml + (toolSeoHtml || '') + referencesHtml,
		footerHtml,
		extraHeadHtml: extraHeadHtml + toolJsonLd,
		extraBodyHtml,
		includeSidebarToggleScript: true,
		sidebarAutoCloseSelector: '#toolNav a',
	});
};

