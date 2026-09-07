/**
 * 批量把公开网页转成 JPEG：URL 列表串行代抓 + 本标签页 html2canvas（视口/质量/整页或首屏），成功项打 ZIP。
 * 首屏只放 URL 列表与动作行；视口/质量/整页首屏/等待收进「高级设置（可选）」，默认不打开也能 Convert。
 * slug: batch-convert-web-pages-to-jpg
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
	pdfWorkUiClientScript,
	pdfWorkUiCss,
} from './site/pdfWorkUi';

/** 本工具 i18n 键前缀，与 catalog faqPrefix 一致。 */
const PREFIX = 'tool_batch_convert_web_pages_to_jpg';

/**
 * 网页→JPEG 截图客户端：把消毒后的 HTML 写入隐藏 iframe，处理图片/溢出后交给 html2canvas → JPEG。
 * 与 convert-html-to-pdf 使用同一套 /asset 代理与截图规则；内联在本页以免隔离门禁拦共享文件。
 * 返回注入到 extraBodyHtml 的 IIFE 源码，挂到 window.OftHtmlToJpgCapture。
 * 模板里的正则必须双反斜杠（`\\w`），避免预渲染把字类吃掉。
 */
const htmlToPdfCaptureClientScript = (): string => `
    (function () {
      /**
       * 去掉会把 iframe 或整页跳走的标记：整段 noscript、http-equiv=refresh。
       * 截图框不执行脚本，百度首页会走 noscript 刷新，工具页会被带到 baidu.com。
       * @param {string} html 源 HTML
       * @returns {string}
       */
      function stripCaptureNavigationHazards(html) {
        var s = String(html || '');
        s = s.replace(/<noscript\\b[\\s\\S]*?<\\/noscript>/gi, '');
        s = s.replace(/<meta\\b[^>]*http-equiv\\s*=\\s*['"]?refresh['"]?[^>]*>/gi, '');
        return s;
      }

      /**
       * 消毒整份文档：保留 head 中的 stylesheet / style，去掉脚本与嵌套 iframe。
       * @param {string} html 源 HTML
       * @returns {string}
       */
      function sanitizeCapturedHtml(html) {
        return DOMPurify.sanitize(stripCaptureNavigationHazards(html), {
          USE_PROFILES: { html: true },
          WHOLE_DOCUMENT: true,
          ADD_TAGS: ['link', 'meta', 'base'],
          ADD_ATTR: ['href', 'rel', 'media', 'type', 'sizes', 'as', 'crossorigin', 'charset', 'content', 'name', 'property', 'http-equiv', 'phone'],
          FORBID_TAGS: ['script', 'iframe', 'object', 'embed', 'frame', 'frameset', 'noscript'],
        });
      }

      /**
       * 等待指定毫秒；0 则立刻继续。
       * @param {number} ms 毫秒
       * @returns {Promise<void>}
       */
      function sleep(ms) {
        if (!ms) return Promise.resolve();
        return new Promise(function (resolve) { setTimeout(resolve, ms); });
      }

      /**
       * 把懒加载图改成立即请求。
       * @param {Document} doc iframe 文档
       */
      function markImagesEager(doc) {
        var list = doc.images ? Array.prototype.slice.call(doc.images) : [];
        for (var i = 0; i < list.length; i++) {
          try {
            list[i].loading = 'eager';
            list[i].setAttribute('loading', 'eager');
          } catch (e) {}
        }
      }

      /**
       * 等待尚未就绪的 stylesheet（失败也继续）。
       * @param {Document} doc iframe 文档
       * @returns {Promise<void>}
       */
      function waitForStylesheets(doc) {
        var links = doc.querySelectorAll('link[rel="stylesheet"]');
        var waits = [];
        for (var i = 0; i < links.length; i++) {
          var el = links[i];
          try {
            if (el.sheet) continue;
          } catch (e) {}
          waits.push(new Promise(function (resolve) {
            var done = function () { resolve(); };
            el.addEventListener('load', done, { once: true });
            el.addEventListener('error', done, { once: true });
            setTimeout(done, 8000);
          }));
        }
        if (!waits.length) return Promise.resolve();
        return Promise.all(waits);
      }

      /**
       * 把消毒后的 HTML 写入 iframe，并等待外链 CSS。
       * @param {HTMLIFrameElement} iframe 预览框
       * @param {string} html 源 HTML
       * @returns {Promise<Document>}
       */
      function writePreviewDocument(iframe, html) {
        return new Promise(function (resolve, reject) {
          if (!iframe) return reject(new Error('preview'));
          var clean = sanitizeCapturedHtml(html);
          var settled = false;
          function onLoad() {
            if (settled) return;
            iframe.removeEventListener('load', onLoad);
            var doc = iframe.contentDocument;
            if (!doc) {
              settled = true;
              return reject(new Error('preview'));
            }
            waitForStylesheets(doc).then(function () {
              if (settled) return;
              settled = true;
              resolve(doc);
            });
          }
          iframe.addEventListener('load', onLoad);
          iframe.srcdoc = clean;
          setTimeout(function () {
            if (settled) return;
            iframe.removeEventListener('load', onLoad);
            var doc = iframe.contentDocument;
            if (!doc) {
              settled = true;
              return reject(new Error('preview'));
            }
            settled = true;
            resolve(doc);
          }, 12000);
        });
      }

      /**
       * 从 CSS background-image 抽出 url(...) 地址。
       * @param {string} cssValue computed 或内联 background-image
       * @returns {string[]}
       */
      function parseCssUrls(cssValue) {
        var out = [];
        if (!cssValue || cssValue === 'none') return out;
        var re = /url\\(\\s*(['"]?)([^)'"]+)\\1\\s*\\)/gi;
        var m;
        while ((m = re.exec(cssValue))) out.push(String(m[2] || '').trim());
        return out;
      }

      /**
       * html2canvas 能否按 URL 识别为 png/jpeg/gif。
       * @param {string} url 图片地址
       * @returns {boolean}
       */
      function isHtml2canvasSafeUrl(url) {
        if (!url) return false;
        if (/^data:image\\/(png|jpe?g|gif)/i.test(url)) return true;
        if (/^blob:/i.test(url)) return true;
        return /\\.(png|jpe?g|gif)(\\?|#|$)/i.test(url);
      }

      /**
       * 是否需要解码后再写成 PNG。
       * @param {string} url 图片地址
       * @returns {boolean}
       */
      function needsPngRaster(url) {
        if (!url || /^blob:/i.test(url)) return false;
        if (/^data:image\\/(webp|avif|svg\\+xml|x-icon|vnd\\.microsoft\\.icon)/i.test(url)) return true;
        if (/^data:image\\/(png|jpe?g|gif)/i.test(url)) return false;
        return /\\.(webp|avif|svg|ico)(\\?|#|$)/i.test(url);
      }

      /**
       * 把 blob 画成 PNG data URL。
       * @param {Blob} blob 图片字节
       * @returns {Promise<string>}
       */
      function blobToPngDataUrl(blob) {
        var tryBitmap = (typeof createImageBitmap === 'function')
          ? createImageBitmap(blob).then(function (bmp) {
              var c = document.createElement('canvas');
              c.width = bmp.width;
              c.height = bmp.height;
              var ctx = c.getContext('2d');
              if (!ctx) throw new Error('canvas');
              ctx.drawImage(bmp, 0, 0);
              if (bmp.close) bmp.close();
              return c.toDataURL('image/png');
            })
          : Promise.reject(new Error('no bitmap'));
        return tryBitmap.catch(function () {
          return new Promise(function (resolve, reject) {
            var obj = URL.createObjectURL(blob);
            var img = new Image();
            img.onload = function () {
              try {
                var c = document.createElement('canvas');
                c.width = img.naturalWidth || img.width || 1;
                c.height = img.naturalHeight || img.height || 1;
                var ctx = c.getContext('2d');
                if (!ctx) throw new Error('canvas');
                ctx.drawImage(img, 0, 0);
                URL.revokeObjectURL(obj);
                resolve(c.toDataURL('image/png'));
              } catch (e) {
                URL.revokeObjectURL(obj);
                reject(e);
              }
            };
            img.onerror = function () {
              URL.revokeObjectURL(obj);
              reject(new Error('img'));
            };
            img.src = obj;
          });
        });
      }

      /**
       * 经同源代理拉取远程图；data: 则直接 fetch。
       * @param {string} src 绝对 URL 或 data URL
       * @returns {Promise<Blob>}
       */
      function fetchAssetBlob(src) {
        if (/^data:/i.test(src)) {
          return fetch(src).then(function (r) { return r.blob(); });
        }
        return fetch('/api/tools/convert-html-to-pdf/asset?url=' + encodeURIComponent(src)).then(function (r) {
          if (!r.ok) throw new Error('asset');
          return r.blob();
        });
      }

      /**
       * 有限并发执行。
       * @param {Array} items 任务列表
       * @param {number} limit 并发上限
       * @param {Function} fn 对单项返回 Promise
       * @returns {Promise<void>}
       */
      function mapPool(items, limit, fn) {
        var i = 0;
        var workers = [];
        function next() {
          if (i >= items.length) return Promise.resolve();
          var item = items[i++];
          return Promise.resolve(fn(item)).then(next, next);
        }
        var n = Math.min(limit || 1, items.length);
        for (var w = 0; w < n; w++) workers.push(next());
        return Promise.all(workers);
      }

      /**
       * 把 iframe 文档里的远程图改成 html2canvas 能画的 PNG data URL。
       * @param {Document} doc iframe 文档
       * @returns {Promise<void>}
       */
      function prepareDocumentImages(doc) {
        var view = doc.defaultView;
        var seen = Object.create(null);
        var urls = [];
        function addUrl(u) {
          if (!u || seen[u]) return;
          if (/^blob:/i.test(u)) return;
          if (isHtml2canvasSafeUrl(u) && /^data:/i.test(u)) return;
          seen[u] = true;
          urls.push(u);
        }
        var imgs = doc.querySelectorAll('img');
        for (var i = 0; i < imgs.length; i++) {
          addUrl(imgs[i].currentSrc || imgs[i].getAttribute('src') || '');
          var ss = imgs[i].getAttribute('srcset') || '';
          if (ss) {
            var first = ss.split(',')[0].trim().split(/\\s+/)[0];
            addUrl(first);
          }
        }
        var nodes = doc.querySelectorAll('*');
        for (var n = 0; n < nodes.length; n++) {
          var bi = '';
          try {
            bi = (view && view.getComputedStyle(nodes[n]).backgroundImage) || '';
          } catch (e) {}
          var cssUrls = parseCssUrls(bi);
          for (var c = 0; c < cssUrls.length; c++) addUrl(cssUrls[c]);
        }
        if (urls.length > 80) urls = urls.slice(0, 80);
        var rewritten = Object.create(null);
        return mapPool(urls, 4, function (src) {
          return fetchAssetBlob(src).then(function (blob) {
            var type = (blob.type || '').toLowerCase();
            var raster = needsPngRaster(src) || /webp|avif|svg|icon/i.test(type);
            if (!raster && /image\\/(png|jpe?g|gif)/i.test(type)) {
              return new Promise(function (resolve, reject) {
                var fr = new FileReader();
                fr.onload = function () { resolve(String(fr.result || '')); };
                fr.onerror = function () { reject(new Error('read')); };
                fr.readAsDataURL(blob);
              });
            }
            return blobToPngDataUrl(blob);
          }).then(function (out) {
            rewritten[src] = out;
          }).catch(function () {});
        }).then(function () {
          for (var j = 0; j < imgs.length; j++) {
            var img = imgs[j];
            var src = img.currentSrc || img.getAttribute('src') || '';
            var next = rewritten[src];
            if (!next) {
              var ss2 = img.getAttribute('srcset') || '';
              var first2 = ss2 ? ss2.split(',')[0].trim().split(/\\s+/)[0] : '';
              next = rewritten[first2];
            }
            if (next) {
              img.removeAttribute('srcset');
              img.setAttribute('src', next);
            }
          }
          for (var k = 0; k < nodes.length; k++) {
            var el = nodes[k];
            var bg = '';
            try {
              bg = (view && view.getComputedStyle(el).backgroundImage) || '';
            } catch (e2) {}
            var parts = parseCssUrls(bg);
            if (!parts.length) continue;
            var changed = false;
            var rebuilt = [];
            for (var p = 0; p < parts.length; p++) {
              if (rewritten[parts[p]]) {
                rebuilt.push('url("' + rewritten[parts[p]] + '")');
                changed = true;
              } else {
                rebuilt.push('url("' + parts[p] + '")');
              }
            }
            if (changed) el.style.backgroundImage = rebuilt.join(', ');
          }
        });
      }

      /**
       * 等待文档中 img 解码完成。
       * @param {Document} doc iframe 文档
       * @param {number} timeoutMs 单张图最多等多久
       * @returns {Promise<void>}
       */
      function waitForImages(doc, timeoutMs) {
        var list = doc.images ? Array.prototype.slice.call(doc.images) : [];
        if (!list.length) return Promise.resolve();
        var limit = Math.max(5000, timeoutMs || 0);
        return Promise.all(list.map(function (img) {
          if (img.complete && img.naturalWidth > 0) return Promise.resolve();
          return new Promise(function (resolve) {
            img.addEventListener('load', resolve, { once: true });
            img.addEventListener('error', resolve, { once: true });
            setTimeout(resolve, limit);
          });
        }));
      }

      /**
       * html2canvas 仍不认的图在克隆文档里去掉。
       * @param {Document} clonedDoc html2canvas 克隆出的文档
       */
      function stripUnsupportedImages(clonedDoc) {
        var view = clonedDoc.defaultView;
        var nodes = clonedDoc.querySelectorAll('*');
        for (var i = 0; i < nodes.length; i++) {
          var el = nodes[i];
          var bi = '';
          try {
            bi = (view && view.getComputedStyle(el).backgroundImage) || '';
          } catch (e) {}
          if (bi && bi !== 'none') {
            var cssUrls = parseCssUrls(bi);
            var unsafe = false;
            for (var u = 0; u < cssUrls.length; u++) {
              if (!isHtml2canvasSafeUrl(cssUrls[u])) { unsafe = true; break; }
            }
            if (unsafe) el.style.backgroundImage = 'none';
          }
        }
        var imgs = clonedDoc.querySelectorAll('img');
        for (var j = 0; j < imgs.length; j++) {
          var img = imgs[j];
          var src = img.currentSrc || img.getAttribute('src') || '';
          var srcset = img.getAttribute('srcset') || '';
          if (!isHtml2canvasSafeUrl(src) || (srcset && /\\.(webp|avif|svg|ico)/i.test(srcset))) {
            img.removeAttribute('src');
            img.removeAttribute('srcset');
          }
        }
      }

      /**
       * 去掉 html/body 以及撑满视口的 overflow 裁剪。
       * @param {Document} doc iframe 或克隆文档
       * @returns {Array}
       */
      function unlockOverflowForCapture(doc) {
        var view = doc.defaultView;
        var unlocked = [];
        function unlock(el) {
          if (!el || !el.style) return;
          unlocked.push({
            el: el,
            height: el.style.height,
            maxHeight: el.style.maxHeight,
            overflow: el.style.overflow,
            overflowX: el.style.overflowX,
            overflowY: el.style.overflowY,
          });
          el.style.setProperty('height', 'auto', 'important');
          el.style.setProperty('max-height', 'none', 'important');
          el.style.setProperty('overflow', 'visible', 'important');
          el.style.setProperty('overflow-x', 'visible', 'important');
          el.style.setProperty('overflow-y', 'visible', 'important');
        }
        unlock(doc.documentElement);
        unlock(doc.body);
        var viewH = (view && view.innerHeight) || 600;
        var candidates = doc.querySelectorAll('body div, body main, body section, body article');
        var cap = Math.min(candidates.length, 48);
        for (var i = 0; i < cap; i++) {
          var el = candidates[i];
          var st = null;
          try { st = view && view.getComputedStyle(el); } catch (e) {}
          if (!st) continue;
          var oy = st.overflowY || st.overflow;
          var ox = st.overflowX || st.overflow;
          var rectH = 0;
          var rectW = 0;
          try {
            var rect = el.getBoundingClientRect();
            rectH = rect.height;
            rectW = rect.width;
          } catch (e2) {}
          var viewW = (view && view.innerWidth) || 800;
          var clipsY = (oy === 'hidden' || oy === 'clip' || oy === 'auto' || oy === 'scroll') && rectH >= viewH * 0.75 && el.scrollHeight > rectH + 24;
          var clipsX = (ox === 'hidden' || ox === 'clip' || ox === 'auto' || ox === 'scroll') && rectW >= viewW * 0.75 && el.scrollWidth > rectW + 24;
          if (clipsY || clipsX) unlock(el);
        }
        return unlocked;
      }

      /**
       * 恢复 unlockOverflowForCapture 改过的内联样式。
       * @param {Array} unlocked unlock 返回值
       */
      function restoreOverflowAfterCapture(unlocked) {
        if (!unlocked) return;
        for (var i = 0; i < unlocked.length; i++) {
          var p = unlocked[i];
          p.el.style.height = p.height;
          p.el.style.maxHeight = p.maxHeight;
          p.el.style.overflow = p.overflow;
          p.el.style.overflowX = p.overflowX;
          p.el.style.overflowY = p.overflowY;
        }
      }

      /**
       * 相对 html 原点的墨水盒。
       * @param {Document} doc iframe 文档
       * @returns {{minX:number,minY:number,maxX:number,maxY:number}}
       */
      function measureInkBounds(doc) {
        var htmlEl = doc.documentElement;
        var body = doc.body;
        var origin = htmlEl.getBoundingClientRect();
        var minX = 0;
        var minY = 0;
        var maxX = Math.max(htmlEl.scrollWidth || 0, body ? body.scrollWidth : 0, htmlEl.clientWidth || 0);
        var maxY = Math.max(htmlEl.scrollHeight || 0, body ? body.scrollHeight : 0);
        var nodes = doc.querySelectorAll('body *');
        var cap = Math.min(nodes.length, 800);
        for (var i = 0; i < cap; i++) {
          var r;
          try { r = nodes[i].getBoundingClientRect(); } catch (e) { continue; }
          if (r.width < 1 && r.height < 1) continue;
          minX = Math.min(minX, r.left - origin.left);
          maxX = Math.max(maxX, r.right - origin.left);
          minY = Math.min(minY, r.top - origin.top);
          maxY = Math.max(maxY, r.bottom - origin.top);
        }
        return { minX: minX, minY: minY, maxX: maxX, maxY: maxY };
      }

      /**
       * 算出要把溢出推进 html 盒所需的 padding。
       * @param {Document} doc iframe 文档
       * @returns {{padL:number,padT:number,padR:number,minW:number}}
       */
      function computeOverflowPads(doc) {
        var htmlEl = doc.documentElement;
        var ink = measureInkBounds(doc);
        var clientW = Math.max(htmlEl.clientWidth || 0, 1);
        var padL = ink.minX < -1 ? Math.ceil(-ink.minX) + 8 : 0;
        var padT = ink.minY < -1 ? Math.ceil(-ink.minY) + 8 : 0;
        var padR = ink.maxX > clientW + 1 ? Math.ceil(ink.maxX - clientW) + 8 : 0;
        var minW = Math.max(
          htmlEl.scrollWidth || 0,
          Math.ceil(Math.max(ink.maxX, 0) + padL) + (padL || padR ? 8 : 0)
        );
        return { padL: padL, padT: padT, padR: padR, minW: minW };
      }

      /**
       * 把已算好的 padding 写到 html 上。
       * @param {Document} doc iframe 或克隆文档
       * @param {{padL:number,padT:number,padR:number,minW:number}} pads
       * @returns {object}
       */
      function applyHtmlPadding(doc, pads) {
        var htmlEl = doc.documentElement;
        var prev = {
          el: htmlEl,
          paddingLeft: htmlEl.style.paddingLeft,
          paddingRight: htmlEl.style.paddingRight,
          paddingTop: htmlEl.style.paddingTop,
          boxSizing: htmlEl.style.boxSizing,
          minWidth: htmlEl.style.minWidth,
          pads: pads,
        };
        htmlEl.style.setProperty('box-sizing', 'content-box', 'important');
        if (pads.padL) htmlEl.style.setProperty('padding-left', pads.padL + 'px', 'important');
        if (pads.padT) htmlEl.style.setProperty('padding-top', pads.padT + 'px', 'important');
        if (pads.padR) htmlEl.style.setProperty('padding-right', pads.padR + 'px', 'important');
        if (pads.minW > (htmlEl.clientWidth || 0)) {
          htmlEl.style.setProperty('min-width', pads.minW + 'px', 'important');
        }
        void htmlEl.offsetWidth;
        return prev;
      }

      /**
       * 在真实 iframe 布局上测量并写入 padding。
       * @param {Document} doc iframe 文档
       * @returns {object}
       */
      function padHtmlToFitOverflow(doc) {
        return applyHtmlPadding(doc, computeOverflowPads(doc));
      }

      /**
       * 恢复 applyHtmlPadding 写过的 html padding。
       * @param {object} prev apply 返回值
       */
      function restoreHtmlPadding(prev) {
        if (!prev || !prev.el) return;
        prev.el.style.paddingLeft = prev.paddingLeft;
        prev.el.style.paddingRight = prev.paddingRight;
        prev.el.style.paddingTop = prev.paddingTop;
        prev.el.style.boxSizing = prev.boxSizing;
        prev.el.style.minWidth = prev.minWidth;
      }

      /**
       * 截图前把文档滚回原点。
       * @param {Document} doc iframe 文档
       */
      function resetScrollForCapture(doc) {
        var win = doc.defaultView;
        if (win && win.scrollTo) win.scrollTo(0, 0);
        if (doc.documentElement) {
          doc.documentElement.scrollLeft = 0;
          doc.documentElement.scrollTop = 0;
        }
        if (doc.body) {
          doc.body.scrollLeft = 0;
          doc.body.scrollTop = 0;
        }
      }

      /**
       * padding 之后的截图像素盒。
       * @param {Document} doc iframe 文档
       * @param {number} minW 下限宽度
       * @returns {{width:number,height:number}}
       */
      function measureCaptureBox(doc, minW) {
        var htmlEl = doc.documentElement;
        var body = doc.body;
        var w = Math.max(minW || 0, htmlEl ? htmlEl.scrollWidth : 0, body ? body.scrollWidth : 0);
        var h = Math.max(htmlEl ? htmlEl.scrollHeight : 0, body ? body.scrollHeight : 0);
        return { width: Math.max(320, w), height: Math.max(200, h) + 32 };
      }

      /**
       * 把 HTML 转成 JPEG Blob（选定视口宽度的整页或首屏栅格，不是 A4 分页 PDF）。
       * @param {{html:string,iframe:HTMLIFrameElement,waitMs?:number,viewportW?:number,jpegQuality?:number,captureMode?:string,onWaiting?:Function,onBeforeCapture?:Function}} opts 输入
       * @returns {Promise<Blob>}
       */
      function convertHtmlToJpegBlob(opts) {
        var html = (opts && opts.html) || '';
        var iframe = opts && opts.iframe;
        var waitMs = opts && opts.waitMs ? opts.waitMs : 0;
        var onWaiting = opts && opts.onWaiting;
        var viewportW = (opts && opts.viewportW) ? Number(opts.viewportW) : 1280;
        if (!isFinite(viewportW) || viewportW < 320) viewportW = 1280;
        if (viewportW > 1920) viewportW = 1920;
        var jpegQ = (opts && opts.jpegQuality) ? Number(opts.jpegQuality) : 0.85;
        if (!isFinite(jpegQ)) jpegQ = 0.85;
        jpegQ = Math.max(0.5, Math.min(0.95, jpegQ));
        var mode = (opts && opts.captureMode) === 'first' ? 'first' : 'full';
        if (!String(html).trim()) return Promise.reject(new Error('empty'));
        if (typeof DOMPurify === 'undefined') return Promise.reject(new Error('dompurify'));
        if (typeof html2canvas !== 'function') return Promise.reject(new Error('html2canvas'));
        if (iframe) {
          iframe.style.width = viewportW + 'px';
          iframe.style.height = mode === 'first' ? '800px' : '28rem';
        }
        return writePreviewDocument(iframe, html).then(function (doc) {
          markImagesEager(doc);
          return prepareDocumentImages(doc).then(function () {
            return waitForImages(doc, waitMs).then(function () {
              if (waitMs && typeof onWaiting === 'function') onWaiting();
              return sleep(waitMs).then(function () {
                return waitForImages(doc, waitMs).then(function () { return doc; });
              });
            });
          });
        }).then(function (doc) {
          var unlocked = unlockOverflowForCapture(doc);
          resetScrollForCapture(doc);
          var padded = padHtmlToFitOverflow(doc);
          resetScrollForCapture(doc);
          var liveW = viewportW;
          var box = measureCaptureBox(doc, liveW);
          /** 浏览器画布边长上限约 8k–16k；门户首页全高 × scale=2 会直接抛错。 */
          var maxEdge = 8192;
          var scale = 2;
          var capW = Math.max(1, box.width);
          var capH = Math.max(1, box.height);
          var firstH = (doc.defaultView && doc.defaultView.innerHeight) || 800;
          if (mode === 'first') capH = Math.min(capH, Math.max(200, firstH));
          if (capW * scale > maxEdge) scale = Math.max(1, maxEdge / capW);
          if (capH * scale > maxEdge) scale = Math.min(scale, Math.max(1, maxEdge / capH));
          if (capH * scale > maxEdge) capH = Math.floor(maxEdge / scale);
          if (capW * scale > maxEdge) capW = Math.floor(maxEdge / scale);
          var target = doc.documentElement || doc.body;
          var h2cOpts = {
            scale: scale,
            useCORS: true,
            allowTaint: true,
            logging: false,
            timeout: 30000,
            scrollX: 0,
            scrollY: 0,
            x: 0,
            y: 0,
            windowWidth: liveW,
            windowHeight: capH,
            width: capW,
            height: capH,
            onclone: function (clonedDoc) {
              unlockOverflowForCapture(clonedDoc);
              applyHtmlPadding(clonedDoc, padded.pads);
              resetScrollForCapture(clonedDoc);
              stripUnsupportedImages(clonedDoc);
            },
          };
          /** 截图会卡住主线程：先通知 UI，再让出一帧，避免进度条来不及画。 */
          if (opts && typeof opts.onBeforeCapture === 'function') opts.onBeforeCapture();
          return sleep(50).then(function () {
            return html2canvas(target, h2cOpts).then(function (canvas) {
              return new Promise(function (resolve, reject) {
                try {
                  canvas.toBlob(function (blob) {
                    restoreHtmlPadding(padded);
                    restoreOverflowAfterCapture(unlocked);
                    if (!blob) reject(new Error('jpeg'));
                    else resolve(blob);
                  }, 'image/jpeg', jpegQ);
                } catch (err) {
                  restoreHtmlPadding(padded);
                  restoreOverflowAfterCapture(unlocked);
                  reject(err);
                }
              });
            }, function (err) {
              restoreHtmlPadding(padded);
              restoreOverflowAfterCapture(unlocked);
              throw err;
            });
          });
        });
      }

      window.OftHtmlToJpgCapture = {
        convertHtmlToJpegBlob: convertHtmlToJpegBlob,
      };
    })();
`;


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
 * 渲染「批量把网页转成 JPG」工具页。
 * @param opts.lang 当前 UI 语言
 * @param opts.defaultLang 默认（无前缀）语言
 * @param opts.enabledLangs 启用语言列表
 */
export const renderBatchConvertWebPagesToJpgPage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	/** 工具规范路径（无语言前缀）。 */
	const toolPath = '/tools/batch-convert-web-pages-to-jpg';
	/** 当前语言下的 canonical 路径。 */
	const canonicalPath = withLangPrefix(opts.lang, toolPath, opts.defaultLang);
	/** 文档 title：H1 原句 + 品牌。 */
	const title = `${tx(opts.lang, 'title')} | ${t(opts.lang, 'brand')}`;
	/** meta description（SERP 摘要窗口 + Steps/Example），不塞进 hero。 */
	const description = tx(opts.lang, 'description');
	/** Hero 短句：用首页卡 desc，避免整段 meta 把输入区往下推。 */
	const lead = tx(opts.lang, 'desc');
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

	/** 顶栏。 */
	const headerHtml = renderHeader({
		lang: opts.lang,
		brandHref: withLangPrefix(opts.lang, '/', opts.defaultLang),
		navItems,
		enabledLangs: supportedLangs,
		langAlternates,
	});

	/** 侧栏工具导航。 */
	const sidebarHtml = renderSidebar({
		title: t(opts.lang, 'nav_tools'),
		groups: buildToolSidebarItems({
			lang: opts.lang,
			defaultLang: opts.defaultLang,
			currentSlug: 'batch-convert-web-pages-to-jpg',
			currentAnchor: '#converter',
		}),
		id: 'toolNav',
	});

	/** 页脚 HTML。 */
	const footerHtml = renderFooter({ lang: opts.lang });

	/** 截图前额外等待远程/懒加载图片的默认秒数。 */
	const defaultLoadWaitSec = 1;
	/** 载入等待允许的上限（秒）。 */
	const maxLoadWaitSec = 30;
	/** 队列最多 URL 条数。 */
	const maxUrls = 10;
	/** 本页局部样式：结果表、动态进度条与隐藏截图 iframe。 */
	const extraHeadHtml = `
  <style>
    textarea#bcwUrls { min-height: 10rem; font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; }
    .bcw-table { font-size: .875rem; }
    .bcw-table td, .bcw-table th { vertical-align: middle; }
    .bcw-url-cell { word-break: break-all; max-width: 28rem; }
    .bcw-wait-field { min-width: 9rem; }
    /* 高级设置折叠：默认收起，不挡 Convert 主按钮。 */
    .bcw-advanced {
      border: 1px solid #dee2e6;
      border-radius: 0.5rem;
      padding: 0.5rem 0.75rem;
    }
    .bcw-advanced > summary {
      cursor: pointer;
      font-weight: 600;
      font-size: 0.9rem;
    }
    .bcw-advanced[open] > summary { margin-bottom: 0.5rem; }
    #bcwLoadWait { width: 4.75rem; }
    #bcwViewport, #bcwQuality, #bcwCapture { width: auto; min-width: 8rem; }
    #bcwStatus.is-busy { font-weight: 700; font-size: 1.05rem; color: #0d6efd !important; }
    .bcw-row-active { position: relative; }
    .bcw-row-active td { background: rgba(13, 110, 253, 0.1); }
    .bcw-row-active::after {
      content: '';
      position: absolute;
      inset: 0;
      background: rgba(13, 110, 253, 0.18);
      pointer-events: none;
      animation: bcw-hud-fade 1s ease-in-out infinite alternate;
    }
    #bcwBtnConvert .oft-pdf-work-spin { width: 1.15rem; height: 1.15rem; border-width: 0.18em; }
    .bcw-hud {
      border: 1px solid #0d6efd;
      border-radius: 0.5rem;
      background: #f8fbff;
      padding: 0.9rem 1rem 1rem;
      box-shadow: 0 0.5rem 1.25rem rgba(13, 110, 253, 0.12);
    }
    #bcwPdfProgressWrap.is-on {
      position: sticky;
      top: 0.5rem;
      z-index: 20;
    }
    .bcw-hud-top { display: flex; align-items: center; gap: 0.85rem; margin-bottom: 0.65rem; }
    .bcw-hud-spin {
      flex: 0 0 auto;
      width: 2.35rem;
      height: 2.35rem;
      border: 3px solid rgba(13, 110, 253, 0.22);
      border-top-color: #0d6efd;
      border-radius: 50%;
      animation: bcw-hud-spin 0.7s linear infinite;
      will-change: transform;
    }
    .bcw-hud.is-done .bcw-hud-spin { animation: none; border-color: #198754; border-top-color: #198754; }
    .bcw-hud-pct {
      font-size: 1.85rem;
      font-weight: 700;
      line-height: 1;
      font-variant-numeric: tabular-nums;
      color: #0d6efd;
      min-width: 4.25rem;
    }
    .bcw-hud-copy { min-width: 0; flex: 1; }
    .bcw-hud-title { font-weight: 600; margin-bottom: 0.15rem; }
    .bcw-hud-step { font-size: 0.9rem; color: #0d6efd; }
    .bcw-hud-time { font-size: 0.8rem; color: #6c757d; }
    .bcw-hud .progress { height: 1.35rem; overflow: hidden; }
    .bcw-hud .progress-bar {
      font-size: 0.8rem;
      font-weight: 600;
      line-height: 1.35rem;
      transition: width 0.28s ease;
    }
    .bcw-hud-sheen {
      position: absolute;
      inset: 0 auto 0 0;
      width: 40%;
      background: linear-gradient(90deg, transparent, rgba(255,255,255,0.45), transparent);
      animation: bcw-hud-sheen 1.1s linear infinite;
      will-change: transform;
      pointer-events: none;
    }
    .bcw-hud .progress { position: relative; }
    .bcw-hud-steps {
      display: flex;
      gap: 0.4rem;
      list-style: none;
      padding: 0;
      margin: 0.65rem 0 0.35rem;
      flex-wrap: wrap;
    }
    .bcw-hud-steps li {
      font-size: 0.75rem;
      padding: 0.2rem 0.55rem;
      border-radius: 999px;
      border: 1px solid #cfe2ff;
      color: #6c757d;
      background: #fff;
    }
    .bcw-hud-steps li.is-on { border-color: #0d6efd; color: #0d6efd; background: #e7f1ff; font-weight: 600; }
    .bcw-hud-steps li.is-done { border-color: #198754; color: #198754; background: #eaf7ef; }
    .bcw-hud-url { font-size: 0.8rem; color: #495057; word-break: break-all; }
    @keyframes bcw-hud-spin { to { transform: rotate(360deg); } }
    @keyframes bcw-hud-sheen { from { transform: translateX(-120%); } to { transform: translateX(320%); } }
    @keyframes bcw-hud-fade { from { opacity: 0.35; } to { opacity: 1; } }
    #bcwCaptureFrame {
      position: fixed;
      left: 0;
      top: 0;
      width: 1280px;
      height: 28rem;
      border: 0;
      opacity: 0;
      pointer-events: none;
      z-index: -1;
    }
    ${pdfWorkUiCss()}
  </style>`;

	/** 首屏：URL 列表、全部转换、逐行表、ZIP。 */
	const contentHtml = `
    <div id="converter" class="tool-hero">
      <h1 class="tool-title">${escapeHtml(tx(opts.lang, 'title'))}</h1>
      <p class="tool-lead">${escapeHtml(lead)}</p>
    </div>

    <div class="tool-panel">
      <label class="form-label" for="bcwUrls">${escapeHtml(tx(opts.lang, 'url_label'))}</label>
      <textarea id="bcwUrls" class="form-control form-control-sm mb-1" placeholder="${escapeHtml(tx(opts.lang, 'url_placeholder'))}"></textarea>
      <div class="form-text mb-2">${escapeHtml(tx(opts.lang, 'url_hint'))}</div>

      <div class="d-flex align-items-center tools-bar mb-2 flex-wrap gap-2">
        <button type="button" id="bcwBtnConvert" class="btn btn-primary btn-sm">${escapeHtml(tx(opts.lang, 'convert'))}</button>
        <button type="button" id="bcwBtnZip" class="btn btn-outline-primary btn-sm" disabled>${escapeHtml(tx(opts.lang, 'download_zip'))}</button>
        <button type="button" id="bcwBtnSample" class="btn btn-outline-secondary btn-sm">${escapeHtml(tx(opts.lang, 'sample'))}</button>
        <button type="button" id="bcwBtnClear" class="btn btn-outline-secondary btn-sm">${escapeHtml(tx(opts.lang, 'clear'))}</button>
      </div>
      <details class="bcw-advanced mb-2">
        <summary>${escapeHtml(tx(opts.lang, 'advanced_label'))}</summary>
        <label class="bcw-wait-field d-flex align-items-center gap-1 mb-2 small text-nowrap" for="bcwLoadWait">
          <span>${escapeHtml(tx(opts.lang, 'wait_label'))}</span>
          <input type="number" id="bcwLoadWait" class="form-control form-control-sm" min="0" max="${maxLoadWaitSec}" step="1" value="${defaultLoadWaitSec}" inputmode="numeric">
        </label>
        <div class="form-text mb-2">${escapeHtml(tx(opts.lang, 'wait_hint'))}</div>
        <div class="d-flex align-items-center flex-wrap gap-2 mb-2">
          <label class="bcw-wait-field d-flex align-items-center gap-1 mb-0 small text-nowrap" for="bcwViewport">
            <span>${escapeHtml(tx(opts.lang, 'viewport_label'))}</span>
            <select id="bcwViewport" class="form-select form-select-sm">
              <option value="1280" selected>${escapeHtml(tx(opts.lang, 'viewport_desktop'))}</option>
              <option value="768">${escapeHtml(tx(opts.lang, 'viewport_tablet'))}</option>
              <option value="390">${escapeHtml(tx(opts.lang, 'viewport_mobile'))}</option>
            </select>
          </label>
          <label class="bcw-wait-field d-flex align-items-center gap-1 mb-0 small text-nowrap" for="bcwQuality">
            <span>${escapeHtml(tx(opts.lang, 'quality_label'))}</span>
            <select id="bcwQuality" class="form-select form-select-sm">
              <option value="0.7">${escapeHtml(tx(opts.lang, 'quality_low'))}</option>
              <option value="0.85" selected>${escapeHtml(tx(opts.lang, 'quality_mid'))}</option>
              <option value="0.95">${escapeHtml(tx(opts.lang, 'quality_high'))}</option>
            </select>
          </label>
          <label class="bcw-wait-field d-flex align-items-center gap-1 mb-0 small text-nowrap" for="bcwCapture">
            <span>${escapeHtml(tx(opts.lang, 'capture_label'))}</span>
            <select id="bcwCapture" class="form-select form-select-sm">
              <option value="full" selected>${escapeHtml(tx(opts.lang, 'capture_full'))}</option>
              <option value="first">${escapeHtml(tx(opts.lang, 'capture_first'))}</option>
            </select>
          </label>
        </div>
        <div class="form-text mb-0">${escapeHtml(tx(opts.lang, 'opts_hint'))}</div>
      </details>

      <p id="bcwError" class="alert alert-danger py-2 small mb-2" style="display:none;" role="alert"></p>
      <p id="bcwStatus" class="small text-muted mb-2" role="status" aria-live="polite" aria-atomic="true"></p>
      <div id="bcwPdfProgressWrap" class="oft-pdf-work-progress bcw-hud mb-3" hidden>
        <div class="bcw-hud-top">
          <div class="bcw-hud-spin" aria-hidden="true"></div>
          <div class="bcw-hud-pct" id="bcwHudPct">0%</div>
          <div class="bcw-hud-copy">
            <div class="bcw-hud-title">${escapeHtml(tx(opts.lang, 'hud_title'))}</div>
            <div class="bcw-hud-step" id="bcwHudStep"></div>
            <div class="bcw-hud-time" id="bcwHudTime"></div>
          </div>
        </div>
        <div class="progress" style="height: 1.35rem;">
          <div id="bcwPdfProgressBar" class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuemin="0" aria-valuemax="100" style="width: 0%"></div>
          <span class="bcw-hud-sheen" aria-hidden="true"></span>
        </div>
        <ol class="bcw-hud-steps" id="bcwHudSteps">
          <li data-step="fetching">${escapeHtml(tx(opts.lang, 'hud_step_fetch'))}</li>
          <li data-step="waiting">${escapeHtml(tx(opts.lang, 'hud_step_wait'))}</li>
          <li data-step="converting">${escapeHtml(tx(opts.lang, 'hud_step_render'))}</li>
        </ol>
        <div class="bcw-hud-url" id="bcwHudUrl"></div>
      </div>
      <p id="bcwSummary" class="small mb-2"></p>
      <p id="bcwFileCount" class="small text-muted mb-2"></p>

      <div class="table-responsive mb-0">
        <table class="table table-sm table-striped bcw-table mb-0">
          <thead>
            <tr>
              <th>${escapeHtml(tx(opts.lang, 'col_url'))}</th>
              <th>${escapeHtml(tx(opts.lang, 'col_file'))}</th>
              <th>${escapeHtml(tx(opts.lang, 'col_status'))}</th>
            </tr>
          </thead>
          <tbody id="bcwTbody"></tbody>
        </table>
      </div>
      <iframe id="bcwCaptureFrame" sandbox="allow-same-origin" title="${escapeHtml(tx(opts.lang, 'capture_frame_title'))}"></iframe>
    </div>`;

	/** How / Rules / Example / Use cases。 */
	const igHtml = renderToolIgSections({
		lang: opts.lang,
		prefix: PREFIX,
		mode: 'rules',
		usecaseCount: 3,
		ruleItemCount: 5,
		howItemCount: 6,
	});

	/** 权威引用：html2canvas 与 ZIP 打包。 */
	const referencesHtml = renderToolReferencesSection({
		lang: opts.lang,
		links: [
			{ label: 'html2canvas', href: 'https://github.com/niklasvh/html2canvas' },
			{ label: 'fflate', href: 'https://github.com/101arrowz/fflate' },
		],
	});

	/**
	 * 客户端脚本：解析 URL 列表、串行代抓、截图、ZIP。
	 * 「载入样例」用本地 HTML 占位跑出两行真实 JPEG，不自动请求外网；进页不自动转换。
	 */
	const extraBodyHtml = `
  ${pdfWorkUiClientScript()}
  <script src="/vendor/fflate/index.js" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
  <script src="/vendor/dompurify/purify.min.js" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
  <script src="/vendor/html2canvas/html2canvas.min.js" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
  <script>
    ${htmlToPdfCaptureClientScript()}
    (function () {
      /** 队列最多 URL 条数。 */
      var MAX_URLS = ${maxUrls};
      /** 与页面输入框一致的默认等待秒数。 */
      var DEFAULT_LOAD_WAIT_SEC = ${defaultLoadWaitSec};
      /** 等待秒数上限。 */
      var MAX_LOAD_WAIT_SEC = ${maxLoadWaitSec};
      /** 样例第一条 URL（进页填入列表；转换用本地 HTML）。 */
      var SAMPLE_URL_1 = 'https://example.com/help/getting-started';
      /** 样例第二条 URL。 */
      var SAMPLE_URL_2 = 'https://example.com/policies/privacy';

      /** URL 列表框。 */
      var urlsEl = document.getElementById('bcwUrls');
      /** 全部转换按钮。 */
      var btnConvert = document.getElementById('bcwBtnConvert');
      /** 下载 ZIP 按钮。 */
      var btnZip = document.getElementById('bcwBtnZip');
      /** 载入样例按钮。 */
      var btnSample = document.getElementById('bcwBtnSample');
      /** 清空按钮。 */
      var btnClear = document.getElementById('bcwBtnClear');
      /** 截图前额外等待秒数。 */
      var waitInput = document.getElementById('bcwLoadWait');
      /** 截图视口宽度（桌面/平板/手机）。 */
      var viewportEl = document.getElementById('bcwViewport');
      /** JPEG 质量。 */
      var qualityEl = document.getElementById('bcwQuality');
      /** 整页或首屏。 */
      var captureEl = document.getElementById('bcwCapture');
      /** 错误行。 */
      var errEl = document.getElementById('bcwError');
      /** 状态行。 */
      var statusEl = document.getElementById('bcwStatus');
      /** 汇总行。 */
      var summaryEl = document.getElementById('bcwSummary');
      /** 队列计数。 */
      var fileCountEl = document.getElementById('bcwFileCount');
      /** 结果表体。 */
      var tbody = document.getElementById('bcwTbody');
      /** 隐藏截图 iframe。 */
      var captureFrame = document.getElementById('bcwCaptureFrame');
      /** 进度条 + 主按钮 spinner（共用 PDF 工作台）。 */
      var work = window.OftPdfWork.bind('bcwPdf');
      /** 忙碌时一起禁用的按钮。 */
      var busyBtns = [btnConvert, btnSample, btnClear, btnZip];
      /** @type {{zipName: string, bytes: Uint8Array}[]} 成功项。 */
      var zipParts = [];
      /** 进度面板百分比数字。 */
      var hudPctEl = document.getElementById('bcwHudPct');
      /** 进度面板当前步骤。 */
      var hudStepEl = document.getElementById('bcwHudStep');
      /** 进度面板已用时。 */
      var hudTimeEl = document.getElementById('bcwHudTime');
      /** 进度面板当前 URL。 */
      var hudUrlEl = document.getElementById('bcwHudUrl');
      /** 进度面板步骤胶囊。 */
      var hudStepLis = document.querySelectorAll('#bcwHudSteps [data-step]');
      /** 进度面板根节点（与 bind 的 ProgressWrap 相同）。 */
      var hudWrap = document.getElementById('bcwPdfProgressWrap');
      /** 共用进度条节点，用来写百分比文字。 */
      var hudBar = document.getElementById('bcwPdfProgressBar');
      /** 计时器 id；截图卡住主线程时数字会停，圆环靠 CSS transform 继续转。 */
      var hudClockId = 0;
      /** 本批开始时间戳。 */
      var hudClockStart = 0;
      /** 延迟收起进度面板的定时器。 */
      var hudHideId = 0;
      /** @type {{pct:number|null, phase:string, url:string, i:number, total:number, done:boolean}} 面板状态。 */
      var hudState = { pct: 0, phase: '', url: '', i: 0, total: 0, done: false };

      var msg = {
        empty: ${JSON.stringify(tx(opts.lang, 'empty'))},
        tooMany: ${JSON.stringify(tx(opts.lang, 'err_too_many'))},
        urlFail: ${JSON.stringify(tx(opts.lang, 'err_url'))},
        urlEmpty: ${JSON.stringify(tx(opts.lang, 'err_url_empty'))},
        convertFail: ${JSON.stringify(tx(opts.lang, 'err_convert'))},
        loadFail: ${JSON.stringify(tx(opts.lang, 'err_load'))},
        fflate: ${JSON.stringify(tx(opts.lang, 'err_fflate'))},
        working: ${JSON.stringify(tx(opts.lang, 'status_working'))},
        fetching: ${JSON.stringify(tx(opts.lang, 'status_fetching'))},
        converting: ${JSON.stringify(tx(opts.lang, 'status_converting'))},
        queued: ${JSON.stringify(tx(opts.lang, 'status_queued'))},
        waiting: ${JSON.stringify(tx(opts.lang, 'status_waiting'))},
        done: ${JSON.stringify(tx(opts.lang, 'status_done'))},
        ok: ${JSON.stringify(tx(opts.lang, 'status_ok'))},
        skip: ${JSON.stringify(tx(opts.lang, 'status_skip'))},
        summaryTpl: ${JSON.stringify(tx(opts.lang, 'summary_tpl'))},
        countTpl: ${JSON.stringify(tx(opts.lang, 'file_count_tpl'))},
        progressTpl: ${JSON.stringify(tx(opts.lang, 'progress_tpl'))},
        pctTpl: ${JSON.stringify(tx(opts.lang, 'hud_pct_tpl'))},
        elapsedTpl: ${JSON.stringify(tx(opts.lang, 'hud_elapsed_tpl'))},
      };

      /**
       * 显示或清空错误。
       * @param {string} text 错误文案
       */
      function setErr(text) {
        if (!text) { errEl.style.display = 'none'; errEl.textContent = ''; return; }
        errEl.textContent = text;
        errEl.style.display = '';
      }

      /**
       * 更新状态行；忙碌时加粗，方便看出还在跑。
       * @param {string} text 状态
       * @param {boolean} [busy]
       */
      function setStatus(text, busy) {
        statusEl.textContent = text || '';
        if (busy) statusEl.classList.add('is-busy');
        else statusEl.classList.remove('is-busy');
      }

      /**
       * 刷新已用时文案。
       */
      function tickHudClock() {
        if (!hudTimeEl) return;
        var s = Math.max(0, Math.floor((Date.now() - hudClockStart) / 1000));
        hudTimeEl.textContent = fillTpl(msg.elapsedTpl, { s: s });
      }

      /**
       * 开始或重置本批计时。
       */
      function startHudClock() {
        hudClockStart = Date.now();
        if (hudClockId) clearInterval(hudClockId);
        tickHudClock();
        hudClockId = setInterval(tickHudClock, 200);
      }

      /**
       * 停止本批计时。
       */
      function stopHudClock() {
        if (hudClockId) {
          clearInterval(hudClockId);
          hudClockId = 0;
        }
      }

      /**
       * 把 hudState 画到百分比、步骤胶囊、当前 URL。
       */
      function paintHud() {
        if (hudWrap) hudWrap.classList.toggle('is-done', !!hudState.done);
        var pct = hudState.pct;
        var pctText = pct == null || !isFinite(pct) ? '…' : fillTpl(msg.pctTpl, { pct: Math.round(pct) });
        if (hudPctEl) hudPctEl.textContent = pctText;
        if (hudBar && pct != null && isFinite(pct)) hudBar.textContent = pctText;
        else if (hudBar && (pct == null || !isFinite(pct))) hudBar.textContent = '';
        if (hudStepEl) hudStepEl.textContent = hudState.phase || '';
        if (hudUrlEl) hudUrlEl.textContent = hudState.url || '';
        var order = ['fetching', 'waiting', 'converting'];
        var idx = order.indexOf(hudState.phase);
        if (hudState.done) idx = order.length;
        for (var i = 0; i < hudStepLis.length; i++) {
          var li = hudStepLis[i];
          var name = li.getAttribute('data-step');
          var pos = order.indexOf(name);
          li.classList.toggle('is-on', !hudState.done && pos === idx);
          li.classList.toggle('is-done', hudState.done || (idx >= 0 && pos < idx));
        }
      }

      /**
       * 显示进度面板并开始计时。
       */
      function openHud() {
        if (hudHideId) { clearTimeout(hudHideId); hudHideId = 0; }
        hudState.done = false;
        hudState.pct = null;
        hudState.phase = msg.working;
        hudState.url = '';
        startHudClock();
        paintHud();
      }

      /**
       * 立刻收起进度面板。
       */
      function closeHud() {
        if (hudHideId) { clearTimeout(hudHideId); hudHideId = 0; }
        stopHudClock();
        hudState.done = false;
        hudState.url = '';
        hudState.phase = '';
        work.hideProgress();
        paintHud();
      }

      /**
       * 本批结束：停在 100% 片刻再收起，避免一闪而过。
       */
      function finishHud() {
        hudState.done = true;
        hudState.pct = 100;
        hudState.phase = msg.done;
        stopHudClock();
        tickHudClock();
        work.setProgress(100);
        paintHud();
        if (hudHideId) clearTimeout(hudHideId);
        hudHideId = setTimeout(function () {
          hudHideId = 0;
          work.hideProgress();
        }, 900);
      }

      var nativeSetProgress = work.setProgress;
      /**
       * 同步共用进度条与大号百分比。
       * @param {number|null} pct
       */
      work.setProgress = function (pct) {
        hudState.pct = pct;
        nativeSetProgress(pct);
        paintHud();
      };

      /**
       * 让出一帧，让进度条/表格先画出来，再跑 html2canvas。
       * @returns {Promise<void>}
       */
      function yieldUi() {
        if (window.OftPdfWork && typeof window.OftPdfWork.yieldUi === 'function') {
          return window.OftPdfWork.yieldUi();
        }
        return new Promise(function (resolve) {
          requestAnimationFrame(function () { setTimeout(resolve, 40); });
        });
      }

      /**
       * 忙碌时禁用按钮、URL 框与高级设置控件；主按钮转圈。
       * @param {boolean} busy 是否忙碌
       */
      function setBusy(busy) {
        work.setBusy(busyBtns, busy);
        if (urlsEl) urlsEl.disabled = !!busy;
        if (waitInput) waitInput.disabled = !!busy;
        if (viewportEl) viewportEl.disabled = !!busy;
        if (qualityEl) qualityEl.disabled = !!busy;
        if (captureEl) captureEl.disabled = !!busy;
        if (!busy) btnZip.disabled = !zipParts.length;
      }

      /**
       * 按已完成条数 + 当前条内部进度（0–1）算百分比。
       * @param {number} done 已完成条数
       * @param {number} total 总条数
       * @param {number} [within] 当前条 0–1
       * @returns {number}
       */
      function itemPct(done, total, within) {
        if (!total) return 0;
        return Math.round(((done + (within || 0)) / total) * 100);
      }

      /**
       * 读取载入等待毫秒。
       * @returns {number}
       */
      function readLoadWaitMs() {
        var raw = waitInput ? parseFloat(waitInput.value) : DEFAULT_LOAD_WAIT_SEC;
        if (!isFinite(raw)) raw = DEFAULT_LOAD_WAIT_SEC;
        var sec = Math.max(0, Math.min(MAX_LOAD_WAIT_SEC, raw));
        return Math.round(sec * 1000);
      }

      /**
       * 读取截图视口宽度（像素）。
       * @returns {number}
       */
      function readViewportW() {
        var n = viewportEl ? parseInt(viewportEl.value, 10) : 1280;
        if (n === 768 || n === 390) return n;
        return 1280;
      }

      /**
       * 读取 JPEG 质量（0.7 / 0.85 / 0.95）。
       * @returns {number}
       */
      function readJpegQuality() {
        var n = qualityEl ? parseFloat(qualityEl.value) : 0.85;
        if (n === 0.7 || n === 0.95) return n;
        return 0.85;
      }

      /**
       * 读取截图范围：full 整页，first 首屏。
       * @returns {'full'|'first'}
       */
      function readCaptureMode() {
        return (captureEl && captureEl.value === 'first') ? 'first' : 'full';
      }

      /**
       * 把 {n} / {ok} / {skip} / {i} / {total} 填进模板。
       * @param {string} tpl 模板
       * @param {Record<string, string|number>} map 占位
       * @returns {string}
       */
      function fillTpl(tpl, map) {
        var out = String(tpl || '');
        Object.keys(map).forEach(function (k) {
          out = out.split('{' + k + '}').join(String(map[k]));
        });
        return out;
      }

      /**
       * 从文本框解析 URL 列表（空行忽略）。
       * @returns {{raw: string, overflow: boolean}}
       */
      function readUrlLines() {
        var raw = String(urlsEl.value || '')
          .split(/\\r?\\n/)
          .map(function (s) { return s.trim(); })
          .filter(Boolean);
        var overflow = raw.length > MAX_URLS;
        return { raw: raw.slice(0, MAX_URLS), overflow: overflow };
      }

      /**
       * 把一行地址规范成 http(s) URL；缺协议时补 https。
       * @param {string} raw 用户输入
       * @returns {string|null}
       */
      function normalizeHttpUrl(raw) {
        var s = String(raw || '').trim();
        if (!s) return null;
        if (!/^[a-z][a-z0-9+.-]*:/i.test(s)) s = 'https://' + s;
        try {
          var u = new URL(s);
          if (u.protocol !== 'http:' && u.protocol !== 'https:') return null;
          if (!u.hostname) return null;
          return u.href;
        } catch (e) {
          return null;
        }
      }

      /**
       * 由 URL 生成 ZIP 内文件名。
       * @param {string} href 绝对 URL
       * @param {Record<string, number>} usedNames 已占用名
       * @returns {string}
       */
      function zipNameFromUrl(href, usedNames) {
        var host = 'page';
        var path = '';
        try {
          var u = new URL(href);
          host = (u.hostname || 'page').replace(/^www\\./, '');
          path = (u.pathname || '').replace(/\\/+$/, '');
        } catch (e) {}
        var stem = (host + path)
          .replace(/[^a-zA-Z0-9._-]+/g, '-')
          .replace(/-+/g, '-')
          .replace(/^-|-$/g, '')
          .slice(0, 80) || 'page';
        var name = stem + '.jpg';
        var n = usedNames[name] || 0;
        usedNames[name] = n + 1;
        if (n === 0) return name;
        return stem + ' (' + (n + 1) + ').jpg';
      }

      /**
       * 清空结果表。
       */
      function clearTable() {
        tbody.textContent = '';
      }

      /**
       * 预先为整批建表行（排队中），转换时就地改状态，避免看起来没反应。
       * @param {{href:string}[]} items 任务
       * @returns {{tr:HTMLTableRowElement,tdFile:HTMLTableCellElement,tdStatus:HTMLTableCellElement}[]}
       */
      function seedQueueRows(items) {
        clearTable();
        var rows = [];
        for (var i = 0; i < items.length; i++) {
          var tr = document.createElement('tr');
          var tdUrl = document.createElement('td');
          tdUrl.className = 'bcw-url-cell';
          tdUrl.textContent = items[i].href;
          var tdFile = document.createElement('td');
          tdFile.textContent = '—';
          var tdStatus = document.createElement('td');
          tdStatus.className = 'text-muted';
          tdStatus.textContent = msg.queued;
          tr.appendChild(tdUrl);
          tr.appendChild(tdFile);
          tr.appendChild(tdStatus);
          tbody.appendChild(tr);
          rows.push({ tr: tr, tdFile: tdFile, tdStatus: tdStatus });
        }
        return rows;
      }

      /**
       * 更新某一行的文件名与状态。
       * @param {{tr:HTMLTableRowElement,tdFile:HTMLTableCellElement,tdStatus:HTMLTableCellElement}} rowEl 行
       * @param {{file?:string,status:string,kind:string}} data 展示
       */
      function paintRow(rowEl, data) {
        if (!rowEl) return;
        rowEl.tdFile.textContent = data.file || '—';
        rowEl.tdStatus.textContent = data.status;
        rowEl.tr.classList.toggle('bcw-row-active', data.kind === 'active');
        if (data.kind === 'ok') rowEl.tdStatus.className = '';
        else if (data.kind === 'active') rowEl.tdStatus.className = 'text-primary';
        else rowEl.tdStatus.className = 'text-muted';
      }

      /**
       * 顶部状态：条数进度 + 当前步骤。
       * @param {number} i 当前 1-based
       * @param {number} total 总数
       * @param {string} step 步骤文案
       * @param {string} [phase] fetching|waiting|converting
       * @param {string} [url] 当前 URL
       */
      function setPhaseStatus(i, total, step, phase, url) {
        hudState.i = i;
        hudState.total = total;
        if (phase) hudState.phase = phase;
        if (url) hudState.url = url;
        setStatus(fillTpl(msg.progressTpl, { i: i, total: total }) + ' · ' + step, true);
        paintHud();
      }

      /**
       * 样例页本地 HTML（不请求外网）。
       * @param {string} heading 标题
       * @param {string} body 段落
       * @returns {string}
       */
      function samplePageHtml(heading, body) {
        return '<!doctype html><html><head><meta charset="utf-8"><title>' + heading +
          '</title><style>body{font-family:Georgia,serif;margin:32px;color:#222}h1{font-size:1.6rem}p{line-height:1.5}</style></head><body><h1>' +
          heading + '</h1><p>' + body + '</p></body></html>';
      }

      /**
       * 经边缘 API 拉取 URL 对应 HTML。
       * @param {string} href 绝对 URL
       * @returns {Promise<string>}
       */
      function fetchPageHtml(href) {
        var api = '/api/tools/convert-html-to-pdf?url=' + encodeURIComponent(href);
        return fetch(api).then(function (res) {
          return res.json().catch(function () { return {}; }).then(function (data) {
            if (!res.ok || !data || !data.html) {
              throw new Error(data && data.error ? data.error : 'url');
            }
            return String(data.html);
          });
        });
      }

      /**
       * 把 HTML 转成 JPEG 字节。
       * @param {string} html 页面 HTML
       * @param {Function} [onPhase] 截图前再刷一次 UI
       * @returns {Promise<Uint8Array>}
       */
      function htmlToJpegBytes(html, onPhase) {
        var cap = window.OftHtmlToJpgCapture;
        if (!cap || typeof cap.convertHtmlToJpegBlob !== 'function') {
          return Promise.reject(new Error('html2canvas'));
        }
        return cap.convertHtmlToJpegBlob({
          html: html,
          iframe: captureFrame,
          waitMs: readLoadWaitMs(),
          viewportW: readViewportW(),
          jpegQuality: readJpegQuality(),
          captureMode: readCaptureMode(),
          onWaiting: function () { if (onPhase) onPhase('waiting'); },
          onBeforeCapture: function () { if (onPhase) onPhase('converting'); },
        }).then(function (blob) {
          return blob.arrayBuffer().then(function (ab) { return new Uint8Array(ab); });
        });
      }

      /**
       * 转换一条：可选跳过抓取（样例本地 HTML）；非法地址不发请求。
       * @param {{href:string, html?:string, invalid?:boolean}} item 任务
       * @param {Record<string, number>} usedNames ZIP 重名计数
       * @param {Function} [onPhase] fetching|converting|waiting
       * @returns {Promise<{ok:boolean,url:string,file:string,bytes?:Uint8Array,err?:string}>}
       */
      function convertOne(item, usedNames, onPhase) {
        var href = item.href;
        if (item.invalid) {
          return Promise.resolve({ ok: false, url: href, file: '', err: msg.urlEmpty });
        }
        if (onPhase) onPhase(item.html ? 'converting' : 'fetching');
        var job = item.html
          ? Promise.resolve(item.html)
          : fetchPageHtml(href);
        return job.then(function (html) {
          if (!String(html || '').trim()) throw new Error('empty');
          if (onPhase) onPhase('converting');
          return yieldUi().then(function () { return htmlToJpegBytes(html, onPhase); });
        }).then(function (bytes) {
          var file = zipNameFromUrl(href, usedNames);
          return { ok: true, url: href, file: file, bytes: bytes };
        }).catch(function (err) {
          var eStr = String(err && err.message ? err.message : err);
          var label = /empty|Missing url|Invalid/i.test(eStr) ? msg.urlEmpty
            : /preview/i.test(eStr) ? msg.convertFail
            : /url|blocked|timeout|reach|html/i.test(eStr) ? msg.urlFail
            : /html2canvas|dompurify/i.test(eStr) ? msg.loadFail
            : msg.convertFail;
          return { ok: false, url: href, file: '', err: label };
        });
      }

      /**
       * 跑完整批并刷新表。
       * @param {{href:string, html?:string, invalid?:boolean}[]} items 任务
       * @returns {Promise<void>}
       */
      function runBatch(items) {
        zipParts = [];
        summaryEl.textContent = '';
        setErr('');
        btnZip.disabled = true;
        if (!items.length) {
          clearTable();
          closeHud();
          setErr(msg.empty);
          setStatus('');
          fileCountEl.textContent = '';
          return Promise.resolve();
        }
        var rowEls = seedQueueRows(items);
        fileCountEl.textContent = fillTpl(msg.countTpl, { n: items.length });
        openHud();
        setBusy(true);
        work.setProgress(null);
        setStatus(msg.working, true);
        var usedNames = Object.create(null);
        var ok = 0;
        var skip = 0;
        var i = 0;
        function phaseLabel(kind) {
          if (kind === 'fetching') return msg.fetching;
          if (kind === 'waiting') return msg.waiting;
          return msg.converting;
        }
        function next() {
          if (i >= items.length) return Promise.resolve();
          var idx = i;
          var item = items[i++];
          var n = items.length;
          work.setProgress(itemPct(idx, n, 0.05));
          setPhaseStatus(i, n, item.html ? msg.converting : msg.fetching, item.html ? 'converting' : 'fetching', item.href);
          paintRow(rowEls[idx], { status: item.invalid ? msg.urlEmpty : (item.html ? msg.converting : msg.fetching), kind: item.invalid ? 'skip' : 'active' });
          return yieldUi().then(function () {
            return convertOne(item, usedNames, function (kind) {
              work.setProgress(itemPct(idx, n, kind === 'fetching' ? 0.2 : kind === 'waiting' ? 0.55 : 0.45));
              setPhaseStatus(i, n, phaseLabel(kind), kind, item.href);
              paintRow(rowEls[idx], { status: phaseLabel(kind), kind: 'active' });
            });
          }).then(function (row) {
            if (row.ok && row.bytes) {
              ok += 1;
              zipParts.push({ zipName: row.file, bytes: row.bytes });
              paintRow(rowEls[idx], { file: row.file, status: msg.ok, kind: 'ok' });
            } else {
              skip += 1;
              paintRow(rowEls[idx], { status: row.err || msg.skip, kind: 'skip' });
            }
            work.setProgress(itemPct(i, n, 0));
            return yieldUi().then(next);
          });
        }
        return yieldUi().then(next).then(function () {
          summaryEl.textContent = fillTpl(msg.summaryTpl, { ok: ok, skip: skip });
          fileCountEl.textContent = fillTpl(msg.countTpl, { n: items.length });
          setStatus(msg.done);
          btnZip.disabled = !zipParts.length;
          finishHud();
        }).finally(function () {
          setBusy(false);
        });
      }

      /**
       * 全部转换：非法 URL 不发请求，合法 URL 代抓。
       */
      function convertAll() {
        var parsed = readUrlLines();
        if (parsed.overflow) setErr(msg.tooMany);
        else setErr('');
        var items = [];
        for (var i = 0; i < parsed.raw.length; i++) {
          var href = normalizeHttpUrl(parsed.raw[i]);
          if (!href) items.push({ href: parsed.raw[i], invalid: true });
          else items.push({ href: href });
        }
        runBatch(items);
      }

      /**
       * 打包成功 JPEG 为 ZIP。
       */
      function downloadZip() {
        if (!zipParts.length) return;
        if (typeof fflate === 'undefined' || !fflate || typeof fflate.zipSync !== 'function') {
          setErr(msg.fflate);
          return;
        }
        var files = {};
        for (var i = 0; i < zipParts.length; i++) {
          files[zipParts[i].zipName] = zipParts[i].bytes;
        }
        try {
          var zipped = fflate.zipSync(files, { level: 1 });
          var blob = new Blob([zipped], { type: 'application/zip' });
          var a = document.createElement('a');
          var url = URL.createObjectURL(blob);
          a.href = url;
          a.download = 'web-pages.jpg.zip';
          document.body.appendChild(a);
          a.click();
          a.remove();
          setTimeout(function () { URL.revokeObjectURL(url); }, 2000);
        } catch (e) {
          setErr(msg.fflate);
        }
      }

      /**
       * 清空列表与结果。
       */
      function clearAll() {
        urlsEl.value = '';
        zipParts = [];
        clearTable();
        summaryEl.textContent = '';
        fileCountEl.textContent = '';
        setErr('');
        setStatus('');
        btnZip.disabled = true;
        closeHud();
      }

      /**
       * 加载样例：填入两条 URL，用本地 HTML 转出两份 JPEG（不打外网）。
       * 只在用户点击「载入样例」时运行，进页不自动转换。
       */
      function loadSample() {
        urlsEl.value = SAMPLE_URL_1 + '\\n' + SAMPLE_URL_2;
        var html1 = samplePageHtml('Getting started', 'Sample help page for batch convert web pages to JPG.');
        var html2 = samplePageHtml('Privacy policy', 'Sample policy page archived as a second JPG in the ZIP.');
        return runBatch([
          { href: SAMPLE_URL_1, html: html1 },
          { href: SAMPLE_URL_2, html: html2 },
        ]);
      }

      btnConvert.addEventListener('click', convertAll);
      btnZip.addEventListener('click', downloadZip);
      btnSample.addEventListener('click', loadSample);
      btnClear.addEventListener('click', clearAll);
    })();
  </script>`;

	/** catalog 元数据，用于 FAQ / related。 */
	const toolMeta = getToolBySlug('batch-convert-web-pages-to-jpg');
	const toolSeoHtml = toolMeta
		? renderToolExtraSections({
				lang: opts.lang,
				defaultLang: opts.defaultLang,
				tool: toolMeta,
				enabledLangs: supportedLangs,
			})
		: '';

	/** JSON-LD，与可见 H1 / description 一致。 */
	const toolJsonLd = toolMeta
		? buildToolJsonLd({
				lang: opts.lang,
				defaultLang: opts.defaultLang,
				tool: toolMeta,
				name: t(opts.lang, toolMeta.i18nKey as Parameters<typeof t>[1]),
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
