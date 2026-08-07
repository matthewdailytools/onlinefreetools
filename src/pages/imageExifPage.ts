/**
 * ?? EXIF ??????????????exifr + Canvas ????????
 * slug: image-exif????????????remove-exif ????URL??
 * ??work-tasks/image-exif/02-tool-info.md??
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

/** ???????????????????*/
const withLangPrefix = (lang: SiteLang, pathname: string, defaultLang: SiteLang) => {
	const safe = pathname.startsWith('/') ? pathname : `/${pathname}`;
	return lang === defaultLang ? safe : `/${lang}${safe}`;
};

/**
 * ???? EXIF ??/???????
 * @param opts.lang ????
 * @param opts.defaultLang ??????
 * @param opts.enabledLangs ??????????????? supportedLangs??
 */
export const renderImageExifPage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	const toolPath = '/tools/image-exif';
	const canonicalPath = withLangPrefix(opts.lang, toolPath, opts.defaultLang);
	const title = `${t(opts.lang, 'tool_image_exif_title')} | ${t(opts.lang, 'brand')}`;
	const description = t(opts.lang, 'tool_image_exif_description');

	const navItems = buildToolPageNavItems(opts.lang, opts.defaultLang);

	/** ???????????????????????*/
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
			currentSlug: 'image-exif',
			currentAnchor: '#converter',
		}),
		id: 'toolNav',
	});

	const footerHtml = renderFooter({ lang: opts.lang });

	/** ?????????????????????*/
	const extraHeadHtml = `
  <style>
    .tools-bar { gap: .5rem; }
    #iexPreview {
      max-width: 100%; max-height: 220px; object-fit: contain;
      border: 1px solid #dee2e6; border-radius: .5rem; background: #fff;
    }
    .iex-preview-wrap { min-height: 100px; display: flex; align-items: center; justify-content: center; }
    .iex-meta-table { font-size: .875rem; }
    .iex-meta-table th { width: 40%; }
    .iex-risk td, .iex-risk th { background: #fff3cd; }
    .iex-group-title { margin-top: 1rem; margin-bottom: .35rem; font-size: .95rem; }
  </style>`;

	const contentHtml = `
    <div id="converter" class="tool-page-heading mb-3">
      <h1 class="h4 mb-0">${escapeHtml(t(opts.lang, 'tool_image_exif_title'))}</h1>
    </div>

    <label class="tool-dropzone iex-drop mb-3" id="iexDrop" for="iexFile">
      <input type="file" id="iexFile" accept="image/jpeg,image/png,image/webp,image/heic,image/heif,image/tiff,image/*">
      <span class="tool-dropzone-title">${escapeHtml(t(opts.lang, 'tool_image_exif_choose_file'))}</span>
      <span class="tool-dropzone-hint">${escapeHtml(t(opts.lang, 'tool_image_exif_drop_hint'))}</span>
      <span id="iexFileName" class="tool-dropzone-file"></span>
    </label>

    <div class="d-flex align-items-center tools-bar mb-2 flex-wrap">
      <button type="button" id="iexBtnAnalyze" class="btn btn-primary btn-sm">${escapeHtml(t(opts.lang, 'tool_image_exif_analyze'))}</button>
      <button type="button" id="iexBtnStrip" class="btn btn-outline-primary btn-sm" disabled>${escapeHtml(t(opts.lang, 'tool_image_exif_strip'))}</button>
      <button type="button" id="iexBtnSample" class="btn btn-outline-secondary btn-sm">${escapeHtml(t(opts.lang, 'tool_image_exif_sample'))}</button>
      <button type="button" id="iexBtnClear" class="btn btn-outline-secondary btn-sm">${escapeHtml(t(opts.lang, 'tool_image_exif_clear'))}</button>
    </div>

    <p id="iexWarn" class="small text-warning mb-2" style="display:none;" role="status"></p>
    <p id="iexError" class="small text-danger mb-2" style="display:none;" role="alert"></p>
    <p id="iexStatus" class="small text-muted mb-2" role="status"></p>

    <div class="row g-3 mb-3">
      <div class="col-12 col-md-4">
        <label class="form-label">${escapeHtml(t(opts.lang, 'tool_image_exif_preview_label'))}</label>
        <div class="iex-preview-wrap"><img id="iexPreview" alt="" hidden></div>
      </div>
      <div class="col-12 col-md-8">
        <div id="iexMetaHost"></div>
        <div id="iexStripResult" class="small text-success mt-2" style="display:none;" role="status"></div>
      </div>
    </div>

    <p class="tool-lead mb-4">${escapeHtml(description)}</p>`;

	const igHtml = renderToolIgSections({
		lang: opts.lang,
		prefix: 'tool_image_exif',
		mode: 'rules',
		usecaseCount: 3,
		ruleItemCount: 4,
	});

	const referencesHtml = renderToolReferencesSection({
		lang: opts.lang,
		links: [
			{ label: 'CIPA DC-008 ??Exif (English translation)', href: 'https://www.cipa.jp/std/documents/e/DC-008-Translation-2019-E.pdf' },
			{ label: 'exifr (GitHub)', href: 'https://github.com/MikeKovarik/exifr' },
			{ label: 'MDN ??HTMLCanvasElement.toBlob()', href: 'https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/toBlob' },
			{ label: 'ExifTool Tag Names ??EXIF', href: 'https://exiftool.org/TagNames/EXIF.html' },
		],
	});

	/**
	 * ????CDN ?? exifr????????Canvas ???????????????
	 */
	const extraBodyHtml = `
  <script src="https://cdn.jsdelivr.net/npm/exifr@7.1.3/dist/full.umd.js" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
  <script>
    (function () {
      /** ?????????? */
      var SOFT_BYTES = 25 * 1024 * 1024;
      /** ????????*/
      var SOFT_EDGE = 8192;
      /** JPEG ???????????????????? */
      var JPEG_QUALITY = 0.92;

      var drop = document.getElementById('iexDrop');
      var fileInput = document.getElementById('iexFile');
      var fileNameEl = document.getElementById('iexFileName');
      var btnAnalyze = document.getElementById('iexBtnAnalyze');
      var btnStrip = document.getElementById('iexBtnStrip');
      var btnSample = document.getElementById('iexBtnSample');
      var btnClear = document.getElementById('iexBtnClear');
      var warnEl = document.getElementById('iexWarn');
      var errEl = document.getElementById('iexError');
      var statusEl = document.getElementById('iexStatus');
      var preview = document.getElementById('iexPreview');
      var metaHost = document.getElementById('iexMetaHost');
      var stripResult = document.getElementById('iexStripResult');

      var msg = {
        empty: ${JSON.stringify(t(opts.lang, 'tool_image_exif_empty'))},
        needLib: ${JSON.stringify(t(opts.lang, 'tool_image_exif_need_lib'))},
        noMeta: ${JSON.stringify(t(opts.lang, 'tool_image_exif_no_meta'))},
        parseFail: ${JSON.stringify(t(opts.lang, 'tool_image_exif_err_parse'))},
        decodeFail: ${JSON.stringify(t(opts.lang, 'tool_image_exif_err_decode'))},
        stripFail: ${JSON.stringify(t(opts.lang, 'tool_image_exif_err_strip'))},
        verifyFail: ${JSON.stringify(t(opts.lang, 'tool_image_exif_err_verify'))},
        large: ${JSON.stringify(t(opts.lang, 'tool_image_exif_warn_large'))},
        edge: ${JSON.stringify(t(opts.lang, 'tool_image_exif_warn_edge'))},
        analyzing: ${JSON.stringify(t(opts.lang, 'tool_image_exif_status_analyzing'))},
        analyzed: ${JSON.stringify(t(opts.lang, 'tool_image_exif_status_analyzed'))},
        stripping: ${JSON.stringify(t(opts.lang, 'tool_image_exif_status_stripping'))},
        stripped: ${JSON.stringify(t(opts.lang, 'tool_image_exif_status_stripped'))},
        groupGps: ${JSON.stringify(t(opts.lang, 'tool_image_exif_group_gps'))},
        groupCamera: ${JSON.stringify(t(opts.lang, 'tool_image_exif_group_camera'))},
        groupDate: ${JSON.stringify(t(opts.lang, 'tool_image_exif_group_datetime'))},
        groupOther: ${JSON.stringify(t(opts.lang, 'tool_image_exif_group_other'))},
        riskBadge: ${JSON.stringify(t(opts.lang, 'tool_image_exif_risk_badge'))},
        afterStrip: ${JSON.stringify(t(opts.lang, 'tool_image_exif_after_strip'))},
        colTag: ${JSON.stringify(t(opts.lang, 'tool_image_exif_col_tag'))},
        colValue: ${JSON.stringify(t(opts.lang, 'tool_image_exif_col_value'))}
      };

      /** @type {File|null} ??????*/
      var sourceFile = null;
      /** @type {string|null} ?? object URL */
      var previewUrl = null;

      /** GPS / ??????????????????*/
      var RISK_KEYS = {
        latitude: 1, longitude: 1, gpslatitude: 1, gpslongitude: 1, gpsaltitude: 1,
        gpslatituderef: 1, gpslongituderef: 1, gpstimestamp: 1, gpsdatestamp: 1,
        gpsimgdirection: 1, serialnumber: 1, bodyserialnumber: 1, lensserialnumber: 1,
        ownername: 1, uniquecameraamodel: 1
      };

      /** ??????*/
      var CAMERA_KEYS = {
        make: 1, model: 1, lensmodel: 1, lensmake: 1, software: 1, fnumber: 1,
        exposuretime: 1, iso: 1, isospeedratings: 1, focallength: 1, flash: 1,
        whitebalance: 1, exposureprogram: 1, meteringmode: 1, aperturevalue: 1
      };

      /** ??????*/
      var DATE_KEYS = {
        datetimeoriginal: 1, createdate: 1, modifydate: 1, datetime: 1,
        datetimedigitized: 1, offsetoffsetoriginal: 1, subsectimeoriginal: 1
      };

      /** ?????????*/
      function setWarn(text) {
        if (!text) { warnEl.style.display = 'none'; warnEl.textContent = ''; return; }
        warnEl.textContent = text;
        warnEl.style.display = '';
      }

      /** ?????????*/
      function setError(text) {
        if (!text) { errEl.style.display = 'none'; errEl.textContent = ''; return; }
        errEl.textContent = text;
        errEl.style.display = '';
      }

      /** ???????*/
      function setStatus(text) {
        statusEl.textContent = text || '';
      }

      /** ??exifr ??????*/
      function getExifr() {
        return typeof exifr !== 'undefined' ? exifr : null;
      }

      /**
       * ???????????????
       * @param {*} v
       */
      function formatVal(v) {
        if (v == null) return '??;
        if (v instanceof Date) return v.toISOString();
        if (typeof v === 'object') {
          try { return JSON.stringify(v); } catch (e) { return String(v); }
        }
        return String(v);
      }

      /**
       * ??????????
       * @param {string} key
       */
      function isRisk(key) {
        return !!RISK_KEYS[String(key).toLowerCase()];
      }

      /**
       * ??parse ????????
       * @param {object} data
       * @param {{latitude?:number,longitude?:number}|null} gps
       */
      function groupMeta(data, gps) {
        var groups = { gps: [], camera: [], date: [], other: [] };
        var seen = {};
        if (gps && (gps.latitude != null || gps.longitude != null)) {
          if (gps.latitude != null) {
            groups.gps.push({ key: 'latitude', value: gps.latitude, risk: true });
            seen.latitude = 1;
          }
          if (gps.longitude != null) {
            groups.gps.push({ key: 'longitude', value: gps.longitude, risk: true });
            seen.longitude = 1;
          }
        }
        if (!data || typeof data !== 'object') return groups;
        Object.keys(data).forEach(function (key) {
          var lk = key.toLowerCase();
          if (seen[lk]) return;
          var row = { key: key, value: data[key], risk: isRisk(key) };
          if (lk.indexOf('gps') === 0 || lk === 'latitude' || lk === 'longitude') groups.gps.push(row);
          else if (CAMERA_KEYS[lk]) groups.camera.push(row);
          else if (DATE_KEYS[lk] || lk.indexOf('date') >= 0 || lk.indexOf('time') >= 0) groups.date.push(row);
          else groups.other.push(row);
        });
        return groups;
      }

      /**
       * ?????????
       * @param {string} title
       * @param {Array<{key:string,value:*,risk?:boolean}>} rows
       */
      function renderGroup(title, rows) {
        if (!rows.length) return '';
        var body = rows.map(function (r) {
          var cls = r.risk ? ' class="iex-risk"' : '';
          var badge = r.risk ? ' <span class="badge text-bg-warning">' + escapeHtml(msg.riskBadge) + '</span>' : '';
          return '<tr' + cls + '><th scope="row">' + escapeHtml(r.key) + badge + '</th><td>' + escapeHtml(formatVal(r.value)) + '</td></tr>';
        }).join('');
        return (
          '<h3 class="h6 iex-group-title">' + escapeHtml(title) + '</h3>' +
          '<div class="table-responsive"><table class="table table-sm table-bordered iex-meta-table mb-0">' +
          '<thead><tr><th>' + escapeHtml(msg.colTag) + '</th><th>' + escapeHtml(msg.colValue) + '</th></tr></thead>' +
          '<tbody>' + body + '</tbody></table></div>'
        );
      }

      /** ???HTML ?????????*/
      function escapeHtml(s) {
        return String(s)
          .replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')
          .replace(/"/g, '&quot;');
      }

      /**
       * ???????????
       * @param {object|null} data
       * @param {object|null} gps
       */
      function renderMeta(data, gps) {
        var groups = groupMeta(data, gps);
        var total = groups.gps.length + groups.camera.length + groups.date.length + groups.other.length;
        if (!total) {
          metaHost.innerHTML = '<p class="text-muted mb-0">' + escapeHtml(msg.noMeta) + '</p>';
          return;
        }
        metaHost.innerHTML =
          renderGroup(msg.groupGps, groups.gps) +
          renderGroup(msg.groupCamera, groups.camera) +
          renderGroup(msg.groupDate, groups.date) +
          renderGroup(msg.groupOther, groups.other);
      }

      /**
       * ?????????
       * @param {File} file
       */
      function loadFile(file) {
        setError('');
        setWarn('');
        stripResult.style.display = 'none';
        stripResult.textContent = '';
        sourceFile = file;
        fileNameEl.textContent = file.name || '';
        btnStrip.disabled = true;
        if (previewUrl) URL.revokeObjectURL(previewUrl);
        previewUrl = URL.createObjectURL(file);
        preview.src = previewUrl;
        preview.hidden = false;
        if (file.size > SOFT_BYTES) setWarn(msg.large);
        analyze();
      }

      /** ???????*/
      function analyze() {
        setError('');
        stripResult.style.display = 'none';
        if (!sourceFile) {
          setError(msg.empty);
          return;
        }
        var lib = getExifr();
        if (!lib || typeof lib.parse !== 'function') {
          setError(msg.needLib);
          return;
        }
        setStatus(msg.analyzing);
        btnAnalyze.disabled = true;
        Promise.all([
          lib.parse(sourceFile, { gps: true, exif: true, iptc: true, icc: false, xmp: true }).catch(function () { return null; }),
          typeof lib.gps === 'function' ? lib.gps(sourceFile).catch(function () { return null; }) : Promise.resolve(null)
        ])
          .then(function (pair) {
            var data = pair[0];
            var gps = pair[1];
            if (!data && !gps) {
              renderMeta(null, null);
              setStatus(msg.analyzed);
              btnStrip.disabled = false;
              return;
            }
            renderMeta(data || {}, gps);
            setStatus(msg.analyzed);
            btnStrip.disabled = false;
          })
          .catch(function () {
            setError(msg.parseFail);
            metaHost.innerHTML = '';
            setStatus('');
          })
          .then(function () {
            btnAnalyze.disabled = false;
          });
      }

      /**
       * ??orientation ?????? canvas??????
       * @param {CanvasRenderingContext2D} ctx
       * @param {HTMLImageElement|ImageBitmap} img
       * @param {number} w
       * @param {number} h
       * @param {{deg?:number,scaleX?:number,scaleY?:number,dimensionSwapped?:boolean}|null} rot
       */
      function drawOriented(ctx, img, w, h, rot) {
        var deg = (rot && rot.deg) || 0;
        var sx = (rot && rot.scaleX) != null ? rot.scaleX : 1;
        var sy = (rot && rot.scaleY) != null ? rot.scaleY : 1;
        var swapped = !!(rot && rot.dimensionSwapped);
        var cw = swapped ? h : w;
        var ch = swapped ? w : h;
        ctx.canvas.width = cw;
        ctx.canvas.height = ch;
        ctx.save();
        if (deg || sx !== 1 || sy !== 1) {
          ctx.translate(cw / 2, ch / 2);
          ctx.rotate((deg * Math.PI) / 180);
          ctx.scale(sx, sy);
          ctx.drawImage(img, -w / 2, -h / 2, w, h);
        } else {
          ctx.drawImage(img, 0, 0, w, h);
        }
        ctx.restore();
      }

      /**
       * ????Image / ImageBitmap??
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

      /** ???????????????*/
      function stripAndDownload() {
        setError('');
        if (!sourceFile) {
          setError(msg.empty);
          return;
        }
        var lib = getExifr();
        setStatus(msg.stripping);
        btnStrip.disabled = true;
        var rotPromise = lib && typeof lib.rotation === 'function'
          ? lib.rotation(sourceFile).catch(function () { return null; })
          : Promise.resolve(null);

        rotPromise
          .then(function (rot) {
            return decodeImage(sourceFile).then(function (dec) {
              if (dec.w > SOFT_EDGE || dec.h > SOFT_EDGE) {
                setWarn((warnEl.textContent ? warnEl.textContent + ' ' : '') + msg.edge);
              }
              var canvas = document.createElement('canvas');
              var ctx = canvas.getContext('2d');
              if (!ctx) throw new Error('strip');
              drawOriented(ctx, dec.bitmap, dec.w, dec.h, rot);
              if (dec.bitmap && typeof dec.bitmap.close === 'function') dec.bitmap.close();
              var mime = (sourceFile.type && sourceFile.type.indexOf('png') >= 0) ? 'image/png' : 'image/jpeg';
              if (sourceFile.type === 'image/webp') mime = 'image/webp';
              return new Promise(function (resolve, reject) {
                canvas.toBlob(function (blob) {
                  if (!blob) reject(new Error('strip'));
                  else resolve({ blob: blob, mime: mime });
                }, mime, mime === 'image/png' ? undefined : JPEG_QUALITY);
              });
            });
          })
          .then(function (res) {
            if (!lib || typeof lib.parse !== 'function') return res;
            return lib.parse(res.blob, { gps: true, exif: true }).then(function (after) {
              var gpsLeft = after && (after.latitude != null || after.longitude != null || after.GPSLatitude != null);
              if (gpsLeft) throw new Error('verify');
              return res;
            }).catch(function (e) {
              if (e && e.message === 'verify') throw e;
              // parse ?????????? EXIF????
              return res;
            });
          })
          .then(function (res) {
            var base = (sourceFile.name || 'image').replace(/\\.[^.]+$/, '');
            var ext = res.mime === 'image/png' ? 'png' : res.mime === 'image/webp' ? 'webp' : 'jpg';
            var url = URL.createObjectURL(res.blob);
            var a = document.createElement('a');
            a.href = url;
            a.download = base + '-no-exif.' + ext;
            document.body.appendChild(a);
            a.click();
            a.remove();
            URL.revokeObjectURL(url);
            stripResult.textContent = msg.afterStrip;
            stripResult.style.display = '';
            setStatus(msg.stripped);
            // ????????????????
            renderMeta(null, null);
          })
          .catch(function (e) {
            var code = e && e.message;
            if (code === 'decode') setError(msg.decodeFail);
            else if (code === 'verify') setError(msg.verifyFail);
            else setError(msg.stripFail);
            setStatus('');
          })
          .then(function () {
            btnStrip.disabled = !sourceFile;
          });
      }

      /** ????EXIF ????JPEG???????? GPS ?????????*/
      function loadSample() {
        var c = document.createElement('canvas');
        c.width = 320;
        c.height = 200;
        var ctx = c.getContext('2d');
        ctx.fillStyle = '#1c83a8';
        ctx.fillRect(0, 0, 320, 200);
        ctx.fillStyle = '#fff';
        ctx.font = '16px sans-serif';
        ctx.fillText('Sample (no EXIF)', 90, 105);
        c.toBlob(function (blob) {
          if (!blob) return;
          loadFile(new File([blob], 'sample-no-exif.jpg', { type: 'image/jpeg' }));
        }, 'image/jpeg', 0.92);
      }

      /** ????*/
      function clearAll() {
        sourceFile = null;
        fileInput.value = '';
        fileNameEl.textContent = '';
        if (previewUrl) { URL.revokeObjectURL(previewUrl); previewUrl = null; }
        preview.hidden = true;
        preview.removeAttribute('src');
        metaHost.innerHTML = '';
        stripResult.style.display = 'none';
        btnStrip.disabled = true;
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
      btnAnalyze.addEventListener('click', analyze);
      btnStrip.addEventListener('click', stripAndDownload);
      btnSample.addEventListener('click', loadSample);
      btnClear.addEventListener('click', clearAll);
    })();
  </script>`;

	const toolMeta = getToolBySlug('image-exif');
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
