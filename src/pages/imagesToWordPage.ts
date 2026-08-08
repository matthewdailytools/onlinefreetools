/**
 * 多图转 Word 工具页：本地将多张图片按序嵌入 DOCX 并下载，不上传服务器。
 * slug: images-to-word（单页；不拆近义变体 URL）。
 * 规格：work-tasks/images-to-word/02-tool-info.md
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
 * 渲染多图转 Word（DOCX）工具页。
 * @param opts.lang 当前 UI 语言
 * @param opts.defaultLang 默认（无前缀）语言
 * @param opts.enabledLangs 启用语言列表
 */
export const renderImagesToWordPage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	const toolPath = '/tools/images-to-word';
	const canonicalPath = withLangPrefix(opts.lang, toolPath, opts.defaultLang);
	const title = `${t(opts.lang, 'tool_images_to_word_title')} | ${t(opts.lang, 'brand')}`;
	const description = t(opts.lang, 'tool_images_to_word_description');

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
		items: buildToolSidebarItems({
			lang: opts.lang,
			defaultLang: opts.defaultLang,
			currentSlug: 'images-to-word',
			currentAnchor: '#converter',
		}),
		id: 'toolNav',
	});

	const footerHtml = renderFooter({ lang: opts.lang });

	/** 页内样式：文件列表、缩略图。 */
	const extraHeadHtml = `
  <style>
    .tools-bar { gap: .5rem; }
    .img2word-file-list { list-style: none; padding: 0; margin: 0; }
    .img2word-file-item {
      display: flex; align-items: center; gap: .5rem; padding: .35rem 0;
      border-bottom: 1px solid #eee;
    }
    .img2word-thumb {
      width: 48px; height: 48px; object-fit: cover; border-radius: .25rem;
      border: 1px solid #dee2e6; background: #f8f9fa;
    }
    .img2word-file-name { flex: 1; font-size: .85rem; word-break: break-all; }
    .img2word-file-actions { display: flex; gap: .25rem; flex-shrink: 0; }
  </style>`;

	const contentHtml = `
    <div id="converter" class="tool-page-heading mb-3">
      <h1 class="h4 mb-0">${escapeHtml(t(opts.lang, 'tool_images_to_word_title'))}</h1>
    </div>

    <label class="tool-dropzone img2word-drop mb-3" id="img2wordDrop" for="img2wordFiles">
      <input type="file" id="img2wordFiles" accept="image/jpeg,image/png,image/webp,image/gif,image/*" multiple>
      <span class="tool-dropzone-title">${escapeHtml(t(opts.lang, 'tool_images_to_word_choose_files'))}</span>
      <span class="tool-dropzone-hint">${escapeHtml(t(opts.lang, 'tool_images_to_word_drop_hint'))}</span>
    </label>

    <ul id="img2wordList" class="img2word-file-list mb-3" aria-live="polite"></ul>

    <div class="d-flex align-items-center tools-bar mb-2 flex-wrap">
      <button type="button" id="img2wordBtnConvert" class="btn btn-primary btn-sm">${escapeHtml(t(opts.lang, 'tool_images_to_word_convert'))}</button>
      <button type="button" id="img2wordBtnDownload" class="btn btn-outline-primary btn-sm" disabled>${escapeHtml(t(opts.lang, 'tool_images_to_word_download'))}</button>
      <button type="button" id="img2wordBtnSample" class="btn btn-outline-secondary btn-sm">${escapeHtml(t(opts.lang, 'tool_images_to_word_sample'))}</button>
      <button type="button" id="img2wordBtnClear" class="btn btn-outline-secondary btn-sm">${escapeHtml(t(opts.lang, 'tool_images_to_word_clear'))}</button>
    </div>

    <p id="img2wordWarn" class="small text-warning mb-2" style="display:none;" role="status"></p>
    <p id="img2wordError" class="small text-danger mb-2" style="display:none;" role="alert"></p>
    <p id="img2wordStatus" class="small text-muted mb-2" role="status"></p>
    <p id="img2wordStats" class="small text-muted mb-3" style="display:none;"></p>

    <p class="tool-lead mb-4">${escapeHtml(description)}</p>`;

	const igHtml = renderToolIgSections({
		lang: opts.lang,
		prefix: 'tool_images_to_word',
		mode: 'rules',
		usecaseCount: 3,
		ruleItemCount: 4,
	});

	const referencesHtml = renderToolReferencesSection({
		lang: opts.lang,
		links: [
			{ label: 'docx — JavaScript/TypeScript library', href: 'https://docx.js.org/' },
			{ label: 'MDN — Blob', href: 'https://developer.mozilla.org/en-US/docs/Web/API/Blob' },
		],
	});

	/**
	 * 客户端脚本：多图列表、Canvas 转 PNG、懒加载 docx 库、生成 DOCX 并下载。
	 */
	const extraBodyHtml = `
  <script>
    (function () {
      /** 单文件软警告阈值（字节）。 */
      var SOFT_BYTES = 25 * 1024 * 1024;
      /** 单边像素软警告阈值。 */
      var SOFT_EDGE = 8192;
      /** Word 内嵌图片目标宽度（像素）。 */
      var IMG_WIDTH_PX = 550;

      var drop = document.getElementById('img2wordDrop');
      var fileInput = document.getElementById('img2wordFiles');
      var listEl = document.getElementById('img2wordList');
      var btnConvert = document.getElementById('img2wordBtnConvert');
      var btnDownload = document.getElementById('img2wordBtnDownload');
      var btnSample = document.getElementById('img2wordBtnSample');
      var btnClear = document.getElementById('img2wordBtnClear');
      var warnEl = document.getElementById('img2wordWarn');
      var errEl = document.getElementById('img2wordError');
      var statusEl = document.getElementById('img2wordStatus');
      var statsEl = document.getElementById('img2wordStats');

      var msg = {
        empty: ${JSON.stringify(t(opts.lang, 'tool_images_to_word_empty'))},
        decodeFail: ${JSON.stringify(t(opts.lang, 'tool_images_to_word_err_decode'))},
        convertFail: ${JSON.stringify(t(opts.lang, 'tool_images_to_word_err_convert'))},
        libFail: ${JSON.stringify(t(opts.lang, 'tool_images_to_word_err_lib'))},
        large: ${JSON.stringify(t(opts.lang, 'tool_images_to_word_warn_large'))},
        edge: ${JSON.stringify(t(opts.lang, 'tool_images_to_word_warn_edge'))},
        animation: ${JSON.stringify(t(opts.lang, 'tool_images_to_word_warn_animation'))},
        converting: ${JSON.stringify(t(opts.lang, 'tool_images_to_word_status_converting'))},
        done: ${JSON.stringify(t(opts.lang, 'tool_images_to_word_status_done'))},
        moveUp: ${JSON.stringify(t(opts.lang, 'tool_images_to_word_move_up'))},
        moveDown: ${JSON.stringify(t(opts.lang, 'tool_images_to_word_move_down'))},
        remove: ${JSON.stringify(t(opts.lang, 'tool_images_to_word_remove'))},
        statsTpl: ${JSON.stringify(t(opts.lang, 'tool_images_to_word_stats_tpl'))}
      };

      /**
       * @typedef {{ id: string, file: File, bitmap: ImageBitmap|HTMLImageElement, w: number, h: number, thumbUrl: string }} WordItem
       */

      /** @type {WordItem[]} 有序源图列表。 */
      var items = [];
      /** @type {Blob|null} 最近一次生成的 DOCX Blob。 */
      var resultBlob = null;
      /** 列表行自增 id。 */
      var nextId = 1;
      /** @type {Promise<object>|null} docx 模块加载缓存。 */
      var docxLibPromise = null;

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

      /**
       * 尝试从 CDN 加载 docx UMD；失败则动态 import ESM。
       * @returns {Promise<{ Document: Function, Packer: object, Paragraph: Function, ImageRun: Function, PageBreak: Function }>}
       */
      function loadDocxLib() {
        if (docxLibPromise) return docxLibPromise;
        docxLibPromise = new Promise(function (resolve, reject) {
          if (window.docx && window.docx.Document) {
            resolve(window.docx);
            return;
          }
          var script = document.createElement('script');
          script.src = 'https://cdn.jsdelivr.net/npm/docx@8.5.0/build/index.umd.js';
          script.async = true;
          script.onload = function () {
            if (window.docx && window.docx.Document) {
              resolve(window.docx);
            } else {
              import('https://cdn.jsdelivr.net/npm/docx@8.5.0/+esm')
                .then(resolve)
                .catch(function () { reject(new Error('lib')); });
            }
          };
          script.onerror = function () {
            import('https://cdn.jsdelivr.net/npm/docx@8.5.0/+esm')
              .then(resolve)
              .catch(function () { reject(new Error('lib')); });
          };
          document.head.appendChild(script);
        });
        return docxLibPromise;
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
       * 将一条列表项绘制到 Canvas 并导出 PNG 字节。
       * @param {WordItem} item 源图项
       * @returns {Promise<{ bytes: Uint8Array, w: number, h: number }>}
       */
      function itemToPngBytes(item) {
        return new Promise(function (resolve, reject) {
          var canvas = document.createElement('canvas');
          canvas.width = item.w;
          canvas.height = item.h;
          var ctx = canvas.getContext('2d');
          if (!ctx) { reject(new Error('encode')); return; }
          ctx.drawImage(item.bitmap, 0, 0);
          canvas.toBlob(function (blob) {
            if (!blob) { reject(new Error('encode')); return; }
            blob.arrayBuffer().then(function (buf) {
              resolve({ bytes: new Uint8Array(buf), w: item.w, h: item.h });
            }).catch(function () { reject(new Error('encode')); });
          }, 'image/png');
        });
      }

      /** 释放单条列表项的资源（缩略图 URL、ImageBitmap）。 */
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

      /** 重绘有序文件列表（含上移/下移/移除）。 */
      function renderList() {
        listEl.innerHTML = '';
        items.forEach(function (item, idx) {
          var li = document.createElement('li');
          li.className = 'img2word-file-item';
          li.dataset.id = item.id;
          li.innerHTML =
            '<img class="img2word-thumb" src="' + escapeHtml(item.thumbUrl) + '" alt="">' +
            '<span class="img2word-file-name">' + escapeHtml(item.file.name || ('#' + (idx + 1))) + '</span>' +
            '<span class="img2word-file-actions">' +
            '<button type="button" class="btn btn-outline-secondary btn-sm img2word-up" data-id="' + escapeHtml(item.id) + '" title="' + escapeHtml(msg.moveUp) + '"' + (idx === 0 ? ' disabled' : '') + '>&#8593;</button>' +
            '<button type="button" class="btn btn-outline-secondary btn-sm img2word-down" data-id="' + escapeHtml(item.id) + '" title="' + escapeHtml(msg.moveDown) + '"' + (idx === items.length - 1 ? ' disabled' : '') + '>&#8595;</button>' +
            '<button type="button" class="btn btn-outline-danger btn-sm img2word-remove" data-id="' + escapeHtml(item.id) + '" title="' + escapeHtml(msg.remove) + '">&times;</button>' +
            '</span>';
          listEl.appendChild(li);
        });
      }

      /** 根据当前列表刷新软警告（大文件/GIF/超大边长）。 */
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
        return Promise.all(arr.map(function (file) {
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
        }))
          .then(function () {
            renderList();
            refreshWarnings();
          })
          .catch(function () {
            setError(msg.decodeFail);
          });
      }

      /**
       * 按列表顺序生成 DOCX：每图一段 ImageRun，图间 PageBreak（末图后无分页）。
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
        btnConvert.disabled = true;
        return loadDocxLib()
          .then(function (docx) {
            var Document = docx.Document;
            var Packer = docx.Packer;
            var Paragraph = docx.Paragraph;
            var ImageRun = docx.ImageRun;
            var PageBreak = docx.PageBreak;
            return Promise.all(items.map(itemToPngBytes)).then(function (pngList) {
              var paragraphs = [];
              pngList.forEach(function (png, idx) {
                var scale = IMG_WIDTH_PX / png.w;
                var targetH = Math.round(png.h * scale);
                paragraphs.push(new Paragraph({
                  children: [
                    new ImageRun({
                      data: png.bytes,
                      transformation: { width: IMG_WIDTH_PX, height: targetH }
                    })
                  ]
                }));
                if (idx < pngList.length - 1) {
                  paragraphs.push(new Paragraph({ children: [new PageBreak()] }));
                }
              });
              var doc = new Document({ sections: [{ children: paragraphs }] });
              return Packer.toBlob(doc);
            });
          })
          .then(function (blob) {
            btnConvert.disabled = false;
            if (!blob) {
              setError(msg.convertFail);
              setStatus('');
              return;
            }
            resultBlob = blob;
            btnDownload.disabled = false;
            statsEl.textContent = msg.statsTpl
              .replace('{count}', String(items.length))
              .replace('{bytes}', formatBytes(blob.size));
            statsEl.style.display = '';
            setStatus(msg.done);
          })
          .catch(function (err) {
            btnConvert.disabled = false;
            if (err && err.message === 'lib') setError(msg.libFail);
            else setError(msg.convertFail);
            setStatus('');
          });
      }

      /** 触发下载最近一次生成的 DOCX。 */
      function downloadResult() {
        if (!resultBlob) return;
        var url = URL.createObjectURL(resultBlob);
        var a = document.createElement('a');
        a.href = url;
        a.download = 'images.docx';
        document.body.appendChild(a);
        a.click();
        a.remove();
        URL.revokeObjectURL(url);
      }

      /**
       * 生成 2–3 张色块样例图，加入列表并自动转换。
       * @returns {Promise<void>}
       */
      function loadSample() {
        clearAll(false);
        var specs = [
          { w: 320, h: 240, color: '#2563eb', name: 'sample-a.png' },
          { w: 320, h: 240, color: '#dc2626', name: 'sample-b.png' },
          { w: 320, h: 240, color: '#16a34a', name: 'sample-c.png' }
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
            ctx.font = '14px sans-serif';
            ctx.fillText(spec.name.replace('.png', ''), 20, spec.h / 2);
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
      }

      listEl.addEventListener('click', function (e) {
        var tEl = e.target;
        if (!tEl || !tEl.closest) return;
        var up = tEl.closest('.img2word-up');
        var down = tEl.closest('.img2word-down');
        var rem = tEl.closest('.img2word-remove');
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

      btnConvert.addEventListener('click', function () { convert(); });
      btnDownload.addEventListener('click', downloadResult);
      btnSample.addEventListener('click', function () { loadSample(); });
      btnClear.addEventListener('click', function () { clearAll(true); });

      /** 进页自动跑样例并生成可下载 DOCX。 */
      loadSample();
    })();
  </script>`;

	const toolMeta = getToolBySlug('images-to-word');
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
