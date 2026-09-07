/**
 * 把粘贴的 HTML 或公开网页映射成可编辑 .docx（标题/列表/表格/链接），不是截图也不是 A4 PDF。
 * 默认 Tab 为粘贴 HTML；Page URL Tab 吸收 webpage to word。
 * slug: convert-html-web-pages-to-word-document
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
const PREFIX = 'tool_convert_html_web_pages_to_word_document';

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
 * 渲染「把 HTML 网页转成 Word 文档」工具页。
 * @param opts.lang 当前 UI 语言
 * @param opts.defaultLang 默认（无前缀）语言
 * @param opts.enabledLangs 启用语言列表
 */
export const renderConvertHtmlWebPagesToWordDocumentPage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	const toolPath = '/tools/convert-html-web-pages-to-word-document';
	const canonicalPath = withLangPrefix(opts.lang, toolPath, opts.defaultLang);
	const title = `${tx(opts.lang, 'title')} | ${t(opts.lang, 'brand')}`;
	const description = tx(opts.lang, 'description');
	const lead = tx(opts.lang, 'desc');

	const navItems = buildToolPageNavItems(opts.lang, opts.defaultLang);
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
			currentSlug: 'convert-html-web-pages-to-word-document',
			currentAnchor: '#converter',
		}),
		id: 'toolNav',
	});
	const footerHtml = renderFooter({ lang: opts.lang });

	const extraHeadHtml = `
  <style>
    .tools-bar { gap: .5rem; }
    textarea#chwHtml { min-height: 220px; font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; }
    .chw-tab.is-on { font-weight: 600; }
    #chwStatus.is-busy { font-weight: 700; font-size: 1.05rem; color: #0d6efd !important; }
    #chwStatus.is-done { font-weight: 700; font-size: 1.05rem; color: #198754 !important; }
    #chwStatus.is-fail { font-weight: 700; font-size: 1.05rem; color: #dc3545 !important; }
    #chwError.chw-error {
      font-size: 1.05rem;
      font-weight: 700;
      padding: 0.85rem 1rem;
      border-width: 2px;
    }
    #chwBtnConvert .chw-spin { width: 1.15rem; height: 1.15rem; border-width: 0.18em; vertical-align: -0.125em; }
    .chw-hud {
      border: 1px solid #0d6efd;
      border-radius: 0.5rem;
      background: #f8fbff;
      padding: 0.9rem 1rem 1rem;
      box-shadow: 0 0.5rem 1.25rem rgba(13, 110, 253, 0.12);
    }
    #chwProgressWrap { display: none; }
    #chwProgressWrap.is-on { display: block; position: sticky; top: 0.5rem; z-index: 20; }
    .chw-hud-top { display: flex; align-items: center; gap: 0.85rem; margin-bottom: 0.65rem; }
    .chw-hud-spin {
      flex: 0 0 auto;
      width: 2.35rem;
      height: 2.35rem;
      border: 3px solid rgba(13, 110, 253, 0.22);
      border-top-color: #0d6efd;
      border-radius: 50%;
      animation: chw-hud-spin 0.7s linear infinite;
      will-change: transform;
    }
    .chw-hud.is-done {
      border-color: #198754;
      background: #f3fbf6;
      box-shadow: 0 0.5rem 1.25rem rgba(25, 135, 84, 0.14);
    }
    .chw-hud.is-done .chw-hud-spin {
      animation: none;
      border: 0;
      background: #198754;
    }
    .chw-hud.is-done .chw-hud-spin::after {
      content: '';
      display: block;
      width: 0.55rem;
      height: 1.05rem;
      border: solid #fff;
      border-width: 0 0.22rem 0.22rem 0;
      transform: rotate(45deg);
      margin: 0.45rem auto 0;
    }
    .chw-hud.is-done .chw-hud-pct,
    .chw-hud.is-done .chw-hud-step { color: #198754; }
    .chw-hud.is-done .chw-hud-step { font-weight: 700; }
    .chw-hud.is-done .progress-bar {
      background-color: #198754;
      animation: none;
    }
    .chw-hud.is-done .chw-hud-sheen { display: none; }
    .chw-hud.is-fail {
      border-color: #dc3545;
      background: #fff5f5;
      box-shadow: 0 0.5rem 1.25rem rgba(220, 53, 69, 0.16);
    }
    .chw-hud.is-fail .chw-hud-spin {
      animation: none;
      border: 0;
      background: #dc3545;
      position: relative;
    }
    .chw-hud.is-fail .chw-hud-spin::before,
    .chw-hud.is-fail .chw-hud-spin::after {
      content: '';
      position: absolute;
      left: 50%;
      top: 50%;
      width: 0.22rem;
      height: 1.15rem;
      margin: -0.58rem 0 0 -0.11rem;
      background: #fff;
      border-radius: 1px;
    }
    .chw-hud.is-fail .chw-hud-spin::before { transform: rotate(45deg); }
    .chw-hud.is-fail .chw-hud-spin::after { transform: rotate(-45deg); }
    .chw-hud.is-fail .chw-hud-pct,
    .chw-hud.is-fail .chw-hud-step,
    .chw-hud.is-fail .chw-hud-title { color: #dc3545; }
    .chw-hud.is-fail .chw-hud-step { font-weight: 700; }
    .chw-hud.is-fail .progress-bar {
      background-color: #dc3545;
      animation: none;
    }
    .chw-hud.is-fail .chw-hud-sheen { display: none; }
    .chw-hud-fail {
      display: none;
      margin-top: 0.75rem;
      padding: 0.8rem 0.9rem;
      border-radius: 0.4rem;
      background: #dc3545;
      color: #fff;
    }
    .chw-hud.is-fail .chw-hud-fail { display: block; }
    .chw-hud-fail p { margin: 0; font-weight: 700; font-size: 1.02rem; line-height: 1.4; }
    .chw-hud-steps li.is-fail { border-color: #dc3545; color: #dc3545; background: #f8d7da; font-weight: 600; }
    .chw-hud-next {
      display: none;
      margin-top: 0.75rem;
      padding: 0.8rem 0.9rem;
      border-radius: 0.4rem;
      background: #198754;
      color: #fff;
    }
    .chw-hud.is-done .chw-hud-next { display: block; }
    .chw-hud-next p { margin: 0 0 0.6rem; font-weight: 700; font-size: 1.02rem; line-height: 1.4; }
    .chw-hud-next .btn { font-weight: 700; }
    #chwBtnDownload.is-ready {
      font-weight: 700;
      border-color: #198754;
      color: #198754;
      box-shadow: 0 0 0 0.2rem rgba(25, 135, 84, 0.35);
      animation: chw-dl-pulse 1.1s ease-in-out infinite alternate;
    }
    @keyframes chw-dl-pulse { from { box-shadow: 0 0 0 0.12rem rgba(25, 135, 84, 0.25); } to { box-shadow: 0 0 0 0.28rem rgba(25, 135, 84, 0.5); } }
    .chw-hud-pct {
      font-size: 1.85rem;
      font-weight: 700;
      line-height: 1;
      font-variant-numeric: tabular-nums;
      color: #0d6efd;
      min-width: 4.25rem;
    }
    .chw-hud-copy { min-width: 0; flex: 1; }
    .chw-hud-title { font-weight: 600; margin-bottom: 0.15rem; }
    .chw-hud-step { font-size: 0.9rem; color: #0d6efd; }
    .chw-hud-time { font-size: 0.8rem; color: #6c757d; }
    .chw-hud .progress { height: 1.35rem; overflow: hidden; position: relative; }
    .chw-hud .progress-bar {
      font-size: 0.8rem;
      font-weight: 600;
      line-height: 1.35rem;
      transition: width 0.28s ease;
    }
    .chw-hud-sheen {
      position: absolute;
      inset: 0 auto 0 0;
      width: 40%;
      background: linear-gradient(90deg, transparent, rgba(255,255,255,0.45), transparent);
      animation: chw-hud-sheen 1.1s linear infinite;
      will-change: transform;
      pointer-events: none;
    }
    .chw-hud-steps {
      display: flex;
      gap: 0.4rem;
      list-style: none;
      padding: 0;
      margin: 0.65rem 0 0.35rem;
      flex-wrap: wrap;
    }
    .chw-hud-steps li {
      font-size: 0.75rem;
      padding: 0.2rem 0.55rem;
      border-radius: 999px;
      border: 1px solid #cfe2ff;
      color: #6c757d;
      background: #fff;
    }
    .chw-hud-steps li.is-on { border-color: #0d6efd; color: #0d6efd; background: #e7f1ff; font-weight: 600; }
    .chw-hud-steps li.is-done { border-color: #198754; color: #198754; background: #eaf7ef; }
    .chw-hud-url { font-size: 0.8rem; color: #495057; word-break: break-all; }
    @keyframes chw-hud-spin { to { transform: rotate(360deg); } }
    @keyframes chw-hud-sheen { from { transform: translateX(-120%); } to { transform: translateX(320%); } }
  </style>`;

	const contentHtml = `
    <div id="converter" class="tool-hero">
      <h1 class="tool-title">${escapeHtml(tx(opts.lang, 'title'))}</h1>
      <p class="tool-lead">${escapeHtml(lead)}</p>
    </div>

    <div class="tool-panel">
      <div class="btn-group mb-2" role="group" aria-label="${escapeHtml(tx(opts.lang, 'tab_html'))}">
        <button type="button" id="chwTabHtml" class="btn btn-outline-primary btn-sm chw-tab is-on">${escapeHtml(tx(opts.lang, 'tab_html'))}</button>
        <button type="button" id="chwTabUrl" class="btn btn-outline-primary btn-sm chw-tab">${escapeHtml(tx(opts.lang, 'tab_url'))}</button>
      </div>

      <div id="chwHtmlWrap">
        <label class="form-label" for="chwHtml">${escapeHtml(tx(opts.lang, 'html_label'))}</label>
        <textarea id="chwHtml" class="form-control form-control-sm mb-1" placeholder="${escapeHtml(tx(opts.lang, 'html_placeholder'))}"></textarea>
        <div class="form-text mb-2">${escapeHtml(tx(opts.lang, 'html_hint'))}</div>
      </div>
      <div id="chwUrlWrap" hidden>
        <label class="form-label" for="chwUrl">${escapeHtml(tx(opts.lang, 'url_label'))}</label>
        <input type="url" id="chwUrl" class="form-control form-control-sm mb-1" placeholder="${escapeHtml(tx(opts.lang, 'url_placeholder'))}" inputmode="url">
        <div class="form-text mb-2">${escapeHtml(tx(opts.lang, 'url_hint'))}</div>
      </div>

      <div class="d-flex align-items-center tools-bar mb-2 flex-wrap gap-2">
        <button type="button" id="chwBtnConvert" class="btn btn-primary btn-sm">${escapeHtml(tx(opts.lang, 'convert'))}</button>
        <button type="button" id="chwBtnDownload" class="btn btn-outline-primary btn-sm" disabled>${escapeHtml(tx(opts.lang, 'download'))}</button>
        <button type="button" id="chwBtnSample" class="btn btn-outline-secondary btn-sm">${escapeHtml(tx(opts.lang, 'sample'))}</button>
        <button type="button" id="chwBtnClear" class="btn btn-outline-secondary btn-sm">${escapeHtml(tx(opts.lang, 'clear'))}</button>
      </div>
      <details class="mb-2">
        <summary>${escapeHtml(tx(opts.lang, 'advanced_label'))}</summary>
        <div class="form-check mt-2">
          <input class="form-check-input" type="checkbox" id="chwImgs" checked>
          <label class="form-check-label" for="chwImgs">${escapeHtml(tx(opts.lang, 'imgs_label'))}</label>
        </div>
        <div class="form-text">${escapeHtml(tx(opts.lang, 'imgs_hint'))}</div>
        <div class="form-check mt-2">
          <input class="form-check-input" type="checkbox" id="chwPlain">
          <label class="form-check-label" for="chwPlain">${escapeHtml(tx(opts.lang, 'plain_label'))}</label>
        </div>
        <div class="form-text">${escapeHtml(tx(opts.lang, 'plain_hint'))}</div>
        <div class="form-text mb-0">${escapeHtml(tx(opts.lang, 'opts_hint'))}</div>
      </details>
      <p id="chwError" class="alert alert-danger chw-error mb-2" style="display:none;" role="alert"></p>
      <p id="chwStatus" class="small text-muted mb-2" role="status" aria-live="polite" aria-atomic="true"></p>
      <div id="chwProgressWrap" class="chw-hud mb-0" hidden>
        <div class="chw-hud-top">
          <div class="chw-hud-spin" aria-hidden="true"></div>
          <div class="chw-hud-pct" id="chwHudPct">0%</div>
          <div class="chw-hud-copy">
            <div class="chw-hud-title" id="chwHudTitle">${escapeHtml(tx(opts.lang, 'hud_title'))}</div>
            <div class="chw-hud-step" id="chwHudStep"></div>
            <div class="chw-hud-time" id="chwHudTime"></div>
          </div>
        </div>
        <div class="progress" style="height: 1.35rem;">
          <div id="chwProgressBar" class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuemin="0" aria-valuemax="100" style="width: 0%"></div>
          <span class="chw-hud-sheen" aria-hidden="true"></span>
        </div>
        <ol class="chw-hud-steps" id="chwHudSteps">
          <li data-step="fetching">${escapeHtml(tx(opts.lang, 'hud_step_fetch'))}</li>
          <li data-step="mapping">${escapeHtml(tx(opts.lang, 'hud_step_map'))}</li>
          <li data-step="packing">${escapeHtml(tx(opts.lang, 'hud_step_pack'))}</li>
        </ol>
        <div class="chw-hud-url" id="chwHudUrl"></div>
        <div id="chwHudNext" class="chw-hud-next" hidden>
          <p id="chwHudNextCopy"></p>
          <button type="button" id="chwHudDownload" class="btn btn-light btn-sm">${escapeHtml(tx(opts.lang, 'hud_download'))}</button>
        </div>
        <div id="chwHudFail" class="chw-hud-fail" hidden>
          <p id="chwHudFailCopy"></p>
        </div>
      </div>
    </div>`;

	const igHtml = renderToolIgSections({
		lang: opts.lang,
		prefix: PREFIX,
		mode: 'rules',
		usecaseCount: 3,
		ruleItemCount: 4,
		howItemCount: 5,
	});
	const referencesHtml = renderToolReferencesSection({
		lang: opts.lang,
		links: [
			{ label: 'docx — JavaScript/TypeScript library', href: 'https://docx.js.org/' },
			{ label: 'HTML Living Standard — DOM', href: 'https://html.spec.whatwg.org/multipage/dom.html' },
		],
	});

	const extraBodyHtml = `
  <script src="/vendor/dompurify/purify.min.js" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
  <script>
    (function () {
      var msg = {
        empty: ${JSON.stringify(tx(opts.lang, 'empty'))},
        convert: ${JSON.stringify(tx(opts.lang, 'err_convert'))},
        load: ${JSON.stringify(tx(opts.lang, 'err_load'))},
        url: ${JSON.stringify(tx(opts.lang, 'err_url'))},
        urlEmpty: ${JSON.stringify(tx(opts.lang, 'err_url_empty'))},
        working: ${JSON.stringify(tx(opts.lang, 'status_working'))},
        fetching: ${JSON.stringify(tx(opts.lang, 'status_fetching'))},
        mapping: ${JSON.stringify(tx(opts.lang, 'status_mapping'))},
        packing: ${JSON.stringify(tx(opts.lang, 'status_packing'))},
        done: ${JSON.stringify(tx(opts.lang, 'status_done'))},
        next: ${JSON.stringify(tx(opts.lang, 'hud_next'))},
        failTitle: ${JSON.stringify(tx(opts.lang, 'hud_fail_title'))},
        failHint: ${JSON.stringify(tx(opts.lang, 'hud_fail_hint'))},
        title: ${JSON.stringify(tx(opts.lang, 'hud_title'))},
        pctTpl: ${JSON.stringify(tx(opts.lang, 'hud_pct_tpl'))},
        elapsedTpl: ${JSON.stringify(tx(opts.lang, 'hud_elapsed_tpl'))},
      };
      var SAMPLE_HTML = '<h1>Release notes</h1><p>This HTML becomes an <strong>editable</strong> Word document, not a screenshot and not an A4 PDF.</p><ul><li>Headings map to Word styles</li><li>This list stays a list</li></ul><table><tr><th>Field</th><th>Value</th></tr><tr><td>Format</td><td>DOCX</td></tr></table><p>See <a href="https://example.com/help">the help article</a>.</p>';
      var tab = 'html';
      var resultBlob = null;
      var docxLibPromise = null;
      var htmlEl = document.getElementById('chwHtml');
      var urlEl = document.getElementById('chwUrl');
      var htmlWrap = document.getElementById('chwHtmlWrap');
      var urlWrap = document.getElementById('chwUrlWrap');
      var tabHtml = document.getElementById('chwTabHtml');
      var tabUrl = document.getElementById('chwTabUrl');
      var btnConvert = document.getElementById('chwBtnConvert');
      var btnDownload = document.getElementById('chwBtnDownload');
      /** 进度卡内「下一步：下载」按钮。 */
      var hudDownload = document.getElementById('chwHudDownload');
      /** 完成后的下一步提示块。 */
      var hudNext = document.getElementById('chwHudNext');
      /** 下一步提示文案。 */
      var hudNextCopy = document.getElementById('chwHudNextCopy');
      /** 进度卡标题。 */
      var hudTitleEl = document.getElementById('chwHudTitle');
      /** 失败提示块。 */
      var hudFail = document.getElementById('chwHudFail');
      /** 失败提示文案。 */
      var hudFailCopy = document.getElementById('chwHudFailCopy');
      var btnSample = document.getElementById('chwBtnSample');
      var btnClear = document.getElementById('chwBtnClear');
      var imgsEl = document.getElementById('chwImgs');
      var plainEl = document.getElementById('chwPlain');
      var errEl = document.getElementById('chwError');
      var statusEl = document.getElementById('chwStatus');
      var hudWrap = document.getElementById('chwProgressWrap');
      var hudBar = document.getElementById('chwProgressBar');
      var hudPctEl = document.getElementById('chwHudPct');
      var hudStepEl = document.getElementById('chwHudStep');
      var hudTimeEl = document.getElementById('chwHudTime');
      var hudUrlEl = document.getElementById('chwHudUrl');
      var hudStepLis = document.querySelectorAll('#chwHudSteps [data-step]');
      /** 进度面板计时器。 */
      var hudClockId = 0;
      /** 本趟转换开始时间。 */
      var hudClockStart = 0;
      /** 延迟收起定时器（成功/失败都保留面板；仅清空时立刻关掉）。 */
      var hudHideId = 0;
      /** @type {{pct:number|null, phase:string, label:string, url:string, done:boolean, fail:boolean}} */
      var hudState = { pct: 0, phase: '', label: '', url: '', done: false, fail: false };

      /**
       * 显示错误。
       * @param {string} text 人话错误
       */
      function setErr(text) {
        if (!errEl) return;
        if (!text) { errEl.style.display = 'none'; errEl.textContent = ''; return; }
        errEl.style.display = '';
        errEl.textContent = text;
        try { errEl.scrollIntoView({ block: 'nearest', behavior: 'smooth' }); } catch (e) {}
      }

      /**
       * 更新状态行；忙碌时加粗变蓝，避免只有一行浅灰字看不出还在跑。
       * @param {string} text 状态
       * @param {boolean} [busy] 是否转换中
       */
      function setStatus(text, busy) {
        if (!statusEl) return;
        statusEl.textContent = text || '';
        statusEl.classList.toggle('is-busy', !!busy);
        if (busy || !text) {
          statusEl.classList.remove('is-done');
          statusEl.classList.remove('is-fail');
        }
      }

      /**
       * 把 {pct} / {s} 填进模板。
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
       * 让出一帧，先画出进度条再跑重活。
       * @returns {Promise<void>}
       */
      function yieldUi() {
        return new Promise(function (resolve) {
          requestAnimationFrame(function () { setTimeout(resolve, 40); });
        });
      }

      /**
       * 刷新已用时。
       */
      function tickHudClock() {
        if (!hudTimeEl) return;
        var s = Math.max(0, Math.floor((Date.now() - hudClockStart) / 1000));
        hudTimeEl.textContent = fillTpl(msg.elapsedTpl, { s: s });
      }

      /**
       * 开始本趟计时。
       */
      function startHudClock() {
        hudClockStart = Date.now();
        if (hudClockId) clearInterval(hudClockId);
        tickHudClock();
        hudClockId = setInterval(tickHudClock, 200);
      }

      /**
       * 停止本趟计时。
       */
      function stopHudClock() {
        if (hudClockId) {
          clearInterval(hudClockId);
          hudClockId = 0;
        }
      }

      /**
       * 把百分比、步骤胶囊和说明画到进度面板。
       */
      function paintHud() {
        if (!hudWrap || !hudBar) return;
        hudWrap.hidden = false;
        hudWrap.classList.add('is-on');
        hudWrap.classList.toggle('is-done', !!hudState.done);
        hudWrap.classList.toggle('is-fail', !!hudState.fail);
        var pct = hudState.pct;
        var pctText = pct == null || !isFinite(pct) ? '…' : fillTpl(msg.pctTpl, { pct: Math.round(pct) });
        if (hudPctEl) hudPctEl.textContent = pctText;
        if (pct == null || !isFinite(pct)) {
          hudBar.classList.add('progress-bar-striped', 'progress-bar-animated');
          hudBar.style.width = '100%';
          hudBar.textContent = '';
          hudBar.setAttribute('aria-valuenow', '0');
        } else {
          var n = Math.max(0, Math.min(100, pct));
          hudBar.classList.add('progress-bar-striped');
          if (n < 100) hudBar.classList.add('progress-bar-animated');
          else hudBar.classList.remove('progress-bar-animated');
          hudBar.style.width = n + '%';
          hudBar.textContent = pctText;
          hudBar.setAttribute('aria-valuenow', String(Math.round(n)));
        }
        if (hudStepEl) hudStepEl.textContent = hudState.label || '';
        if (hudUrlEl) hudUrlEl.textContent = hudState.url || '';
        var order = ['fetching', 'mapping', 'packing'];
        var idx = order.indexOf(hudState.phase);
        if (hudState.done) idx = order.length;
        for (var i = 0; i < hudStepLis.length; i++) {
          var li = hudStepLis[i];
          var name = li.getAttribute('data-step');
          var pos = order.indexOf(name);
          li.classList.toggle('is-on', !hudState.done && !hudState.fail && pos === idx);
          li.classList.toggle('is-done', hudState.done || (!hudState.fail && idx >= 0 && pos < idx));
          li.classList.toggle('is-fail', !!hudState.fail && pos === idx);
        }
      }

      /**
       * 高亮工具栏「下载」，提示下一步。
       * @param {boolean} on 是否已有可下载产物
       */
      function setDownloadReady(on) {
        if (btnDownload) {
          btnDownload.classList.toggle('is-ready', !!on);
          if (on) btnDownload.disabled = false;
        }
        if (hudDownload) hudDownload.disabled = !on;
        if (hudNext) hudNext.hidden = !on;
        if (hudNextCopy) hudNextCopy.textContent = on ? msg.next : '';
      }

      /**
       * 显示进度面板并开始计时。
       * @param {string} [url] 当前抓取的网址（粘贴 HTML 可空）
       */
      function openHud(url) {
        if (hudHideId) { clearTimeout(hudHideId); hudHideId = 0; }
        hudState.done = false;
        hudState.fail = false;
        hudState.pct = null;
        hudState.phase = '';
        hudState.label = msg.working;
        hudState.url = url || '';
        if (hudTitleEl) hudTitleEl.textContent = msg.title;
        if (hudFail) hudFail.hidden = true;
        if (hudFailCopy) hudFailCopy.textContent = '';
        setDownloadReady(false);
        startHudClock();
        paintHud();
      }

      /**
       * 立刻收起进度面板（清空）。
       */
      function closeHud() {
        if (hudHideId) { clearTimeout(hudHideId); hudHideId = 0; }
        stopHudClock();
        hudState.done = false;
        hudState.fail = false;
        hudState.phase = '';
        hudState.label = '';
        hudState.url = '';
        hudState.pct = 0;
        setDownloadReady(false);
        if (hudTitleEl) hudTitleEl.textContent = msg.title;
        if (hudFail) hudFail.hidden = true;
        if (hudFailCopy) hudFailCopy.textContent = '';
        if (hudWrap) {
          hudWrap.hidden = true;
          hudWrap.classList.remove('is-on', 'is-done', 'is-fail');
        }
        if (hudBar) {
          hudBar.style.width = '0%';
          hudBar.textContent = '';
          hudBar.classList.add('progress-bar-striped', 'progress-bar-animated');
        }
      }

      /**
       * 更新当前步骤与百分比。
       * @param {'fetching'|'mapping'|'packing'} phase 步骤
       * @param {string} label 人话说明
       * @param {number} pct 0–100
       * @param {string} [url] 可选当前网址
       */
      function setPhase(phase, label, pct, url) {
        hudState.phase = phase;
        hudState.label = label;
        hudState.pct = pct;
        if (url != null) hudState.url = url;
        setStatus(label, true);
        paintHud();
      }

      /**
       * 本趟成功：停在 100%，保留进度卡，并醒目提示下一步是下载。
       */
      function finishHud() {
        hudState.done = true;
        hudState.pct = 100;
        hudState.phase = 'packing';
        hudState.label = msg.done;
        stopHudClock();
        tickHudClock();
        setStatus(msg.done, false);
        if (statusEl) statusEl.classList.add('is-done');
        setDownloadReady(true);
        paintHud();
      }

      /**
       * 本趟失败：保留进度卡，改成红色失败态，文案与顶部 alert 一致。
       * @param {string} message 人话错误
       */
      function failHud(message) {
        hudState.done = false;
        hudState.fail = true;
        hudState.label = message;
        if (hudState.pct == null || !isFinite(hudState.pct)) hudState.pct = 0;
        stopHudClock();
        tickHudClock();
        setDownloadReady(false);
        setStatus(message, false);
        if (statusEl) {
          statusEl.classList.remove('is-done');
          statusEl.classList.add('is-fail');
        }
        if (hudTitleEl) hudTitleEl.textContent = msg.failTitle;
        if (hudFail) hudFail.hidden = false;
        if (hudFailCopy) hudFailCopy.textContent = message + ' ' + msg.failHint;
        paintHud();
      }

      /**
       * 主按钮转圈。
       * @param {boolean} busy 是否转换中
       */
      function setConvertSpin(busy) {
        if (!btnConvert) return;
        btnConvert.setAttribute('aria-busy', busy ? 'true' : 'false');
        var spin = btnConvert.querySelector('.chw-spin');
        if (busy && !spin) {
          spin = document.createElement('span');
          spin.className = 'spinner-border spinner-border-sm me-1 chw-spin';
          spin.setAttribute('aria-hidden', 'true');
          btnConvert.insertBefore(spin, btnConvert.firstChild);
        }
        if (spin) spin.hidden = !busy;
      }

      /**
       * 忙碌时禁用输入与动作（Download 仅在有产物时可用）。
       * 纯文字开启时「嵌入图片」一并禁用，避免两个开关互相打架。
       * @param {boolean} busy 是否转换中
       */
      function setBusy(busy) {
        [htmlEl, urlEl, btnConvert, btnSample, btnClear, imgsEl, plainEl, tabHtml, tabUrl].forEach(function (el) {
          if (el) el.disabled = !!busy;
        });
        setConvertSpin(busy);
        if (!busy) syncPlainUi();
        if (btnDownload) btnDownload.disabled = busy || !resultBlob;
      }

      /**
       * 纯文字模式关掉嵌图控件（转换时也会忽略嵌图）。
       */
      function syncPlainUi() {
        if (!imgsEl || !plainEl) return;
        imgsEl.disabled = !!plainEl.checked;
      }

      /**
       * 切换 Paste HTML / Page URL 主输入面。
       * @param {'html'|'url'} next 目标 Tab
       */
      function setTab(next) {
        tab = next === 'url' ? 'url' : 'html';
        if (htmlWrap) htmlWrap.hidden = tab !== 'html';
        if (urlWrap) urlWrap.hidden = tab !== 'url';
        if (tabHtml) tabHtml.classList.toggle('is-on', tab === 'html');
        if (tabUrl) tabUrl.classList.toggle('is-on', tab === 'url');
      }

      /**
       * 从 UMD / ESM default / window.docx 里取出真正带 Document+Packer 的命名空间。
       * import() 一个无 export 的 UMD 会 resolve 成空 Module，不能直接当 docx 用。
       * @param {object|null|undefined} candidate 脚本回调或 import 结果
       * @returns {object|null}
       */
      function pickDocx(candidate) {
        if (candidate && candidate.Document && candidate.Packer) return candidate;
        if (candidate && candidate.default && candidate.default.Document && candidate.default.Packer) return candidate.default;
        if (window.docx && window.docx.Document && window.docx.Packer) return window.docx;
        return null;
      }

      /**
       * 懒加载同域 docx UMD。
       * @returns {Promise<object>}
       */
      function loadDocxLib() {
        if (docxLibPromise) return docxLibPromise;
        docxLibPromise = new Promise(function (resolve, reject) {
          var existing = pickDocx(window.docx);
          if (existing) { resolve(existing); return; }
          /**
           * import()/onload 之后必须再 pick，禁止把空 Module 当成库。
           * @param {object} mod import 命名空间或 UMD 全局
           */
          function finish(mod) {
            var lib = pickDocx(mod);
            if (lib) resolve(lib);
            else reject(new Error('lib'));
          }
          var script = document.createElement('script');
          script.src = '/vendor/docx/index.umd.js';
          script.async = true;
          script.onload = function () {
            var lib = pickDocx(window.docx);
            if (lib) { resolve(lib); return; }
            import('/vendor/docx/index.umd.js').then(finish).catch(function () { reject(new Error('lib')); });
          };
          script.onerror = function () {
            import('/vendor/docx/index.umd.js').then(finish).catch(function () { reject(new Error('lib')); });
          };
          document.head.appendChild(script);
        });
        return docxLibPromise;
      }

      /**
       * 去掉脚本/嵌入页，但保留 SVG 文字、MathML、表格和常见内容标签。
       * 不用 html profile：该 profile 会连 SVG/MathML 的文本一并删掉，转换结果变空。
       * @param {string} html 源 HTML
       * @returns {string}
       */
      function sanitizeHtml(html) {
        var s = String(html || '');
        s = s.replace(/<noscript\\b[\\s\\S]*?<\\/noscript>/gi, '');
        if (typeof DOMPurify === 'undefined') return s;
        return DOMPurify.sanitize(s, {
          ADD_TAGS: ['svg', 'text', 'g', 'defs', 'title', 'desc', 'math', 'mi', 'mo', 'mn', 'mrow', 'msup', 'msub', 'mfrac', 'header', 'nav', 'main', 'article', 'section', 'aside', 'figure', 'figcaption', 'picture', 'source', 'table', 'thead', 'tbody', 'tfoot', 'tr', 'td', 'th'],
          FORBID_TAGS: ['script', 'iframe', 'object', 'embed', 'frame', 'frameset'],
        });
      }

      /**
       * 去掉 XML 1.0 非法控制字符，避免 Packer 序列化抛错。
       * @param {string} s 原文
       * @returns {string}
       */
      function safeXmlText(s) {
        return String(s || '').replace(/[\\u0000-\\u0008\\u000B\\u000C\\u000E-\\u001F\\uFFFE\\uFFFF]/g, '');
      }

      /**
       * 把内联节点收集成 TextRun / Hyperlink。
       * @param {Node} node DOM 节点
       * @param {object} docx docx 命名空间
       * @param {{bold?:boolean,italics?:boolean}} marks 当前样式
       * @param {boolean} [plain] 纯文字：不加粗、不斜体、链接改成「文案 (网址)」
       * @returns {Array}
       */
      function inlineRuns(node, docx, marks, plain) {
        marks = marks || {};
        var TextRun = docx.TextRun;
        var ExternalHyperlink = docx.ExternalHyperlink;
        var out = [];
        if (!node) return out;
        if (node.nodeType === 3) {
          var t = safeXmlText(String(node.textContent || '')).replace(/\\s+/g, ' ');
          if (t) out.push(new TextRun(plain ? { text: t } : { text: t, bold: !!marks.bold, italics: !!marks.italics }));
          return out;
        }
        if (node.nodeType !== 1) return out;
        var tag = String(node.tagName || '').toLowerCase();
        if (tag === 'br') { out.push(new TextRun({ text: '', break: 1 })); return out; }
        if (!plain && (tag === 'strong' || tag === 'b')) {
          for (var i = 0; i < node.childNodes.length; i++) out = out.concat(inlineRuns(node.childNodes[i], docx, { bold: true, italics: marks.italics }, plain));
          return out;
        }
        if (!plain && (tag === 'em' || tag === 'i')) {
          for (var j = 0; j < node.childNodes.length; j++) out = out.concat(inlineRuns(node.childNodes[j], docx, { bold: marks.bold, italics: true }, plain));
          return out;
        }
        if (tag === 'a') {
          var href = node.getAttribute('href') || '';
          var kids = [];
          for (var k = 0; k < node.childNodes.length; k++) kids = kids.concat(inlineRuns(node.childNodes[k], docx, marks, plain));
          if (!kids.length) kids = [new TextRun({ text: href || 'link' })];
          if (plain) {
            out = out.concat(kids);
            if (/^https?:\\/\\//i.test(href)) out.push(new TextRun({ text: ' (' + href + ')' }));
            return out;
          }
          if (/^https?:\\/\\//i.test(href) && ExternalHyperlink) {
            out.push(new ExternalHyperlink({ children: kids, link: href }));
          } else out = out.concat(kids);
          return out;
        }
        for (var n = 0; n < node.childNodes.length; n++) out = out.concat(inlineRuns(node.childNodes[n], docx, marks, plain));
        return out;
      }

      /**
       * 用 alt/title 做占位段；图片失败时仍把说明写进 Word。
       * @param {HTMLImageElement|null} img 图片节点
       * @param {object} docx docx 命名空间
       * @returns {object|null}
       */
      function altParagraph(img, docx) {
        var alt = safeXmlText((img && (img.getAttribute('alt') || img.getAttribute('title'))) || '').replace(/\\s+/g, ' ').trim();
        if (!alt) return null;
        return new docx.Paragraph({ children: [new docx.TextRun({ text: alt })] });
      }

      /**
       * 从文件头判断 docx ImageRun 能包的栅格图。
       * @param {Uint8Array} bytes 图字节
       * @returns {string} png|jpg|gif|bmp 或空串
       */
      function sniffImageType(bytes) {
        if (!bytes || bytes.length < 3) return '';
        if (bytes[0] === 0x89 && bytes[1] === 0x50 && bytes[2] === 0x4e) return 'png';
        if (bytes[0] === 0xff && bytes[1] === 0xd8) return 'jpg';
        if (bytes[0] === 0x47 && bytes[1] === 0x49 && bytes[2] === 0x46) return 'gif';
        if (bytes[0] === 0x42 && bytes[1] === 0x4d) return 'bmp';
        return '';
      }

      /**
       * 规范化图片地址：协议相对补 https。
       * @param {string} src 原始 src
       * @returns {string}
       */
      function absImageSrc(src) {
        var url = String(src || '').trim();
        if (!url) return '';
        if (url.indexOf('//') === 0) url = 'https:' + url;
        return url;
      }

      /**
       * 拉取图片字节：data: 直接取；http(s) 走同源代理，避开跨域。
       * @param {string} src 图片地址
       * @returns {Promise<ArrayBuffer|null>}
       */
      function fetchImageBytes(src) {
        var url = absImageSrc(src);
        if (!url) return Promise.resolve(null);
        if (url.indexOf('data:') === 0) {
          return fetch(url).then(function (res) {
            if (!res.ok) throw new Error('img');
            return res.arrayBuffer();
          });
        }
        if (!/^https?:\\/\\//i.test(url)) return Promise.resolve(null);
        return fetch('/api/tools/convert-html-to-pdf/asset?url=' + encodeURIComponent(url)).then(function (res) {
          if (!res.ok) throw new Error('img');
          return res.arrayBuffer();
        });
      }

      /**
       * 尝试把 img 嵌进 Word；失败则退回 alt，不让单图拖垮整篇。
       * @param {HTMLImageElement} img 图片节点
       * @param {object} docx docx 命名空间
       * @returns {Promise<object|null>}
       */
      function imageParagraph(img, docx) {
        var src = img && (img.getAttribute('src') || '');
        if (!src || !docx.ImageRun) return Promise.resolve(altParagraph(img, docx));
        return fetchImageBytes(src).then(function (ab) {
          if (!ab) return altParagraph(img, docx);
          var bytes = new Uint8Array(ab);
          if (!sniffImageType(bytes) || !bytes.length) return altParagraph(img, docx);
          var w = Math.min(540, Math.max(24, parseInt(img.getAttribute('width'), 10) || 480));
          var h = Math.min(540, Math.max(24, parseInt(img.getAttribute('height'), 10) || 240));
          try {
            return new docx.Paragraph({
              children: [new docx.ImageRun({ data: bytes, transformation: { width: w, height: h } })],
            });
          } catch (e) {
            return altParagraph(img, docx);
          }
        }).catch(function () { return altParagraph(img, docx); });
      }

      /**
       * 把表格节点映射为 Word Table。
       * @param {HTMLTableElement} tableEl 表格
       * @param {object} docx docx 命名空间
       * @returns {object|null}
       */
      function mapTable(tableEl, docx) {
        try {
          var rows = tableEl.querySelectorAll(':scope > thead > tr, :scope > tbody > tr, :scope > tfoot > tr, :scope > tr');
          if (!rows.length) rows = tableEl.querySelectorAll('tr');
          if (!rows.length || !docx.Table) return null;
          var tRows = [];
          var maxCols = 1;
          for (var r = 0; r < rows.length; r++) {
            if (tableEl !== rows[r].closest('table')) continue;
            var cells = rows[r].querySelectorAll(':scope > th, :scope > td');
            var tCells = [];
            for (var c = 0; c < cells.length; c++) {
              var runs = inlineRuns(cells[c], docx, {});
              if (!runs.length) runs = [new docx.TextRun({ text: ' ' })];
              tCells.push(new docx.TableCell({ children: [new docx.Paragraph({ children: runs })] }));
            }
            if (tCells.length) {
              if (tCells.length > maxCols) maxCols = tCells.length;
              tRows.push(new docx.TableRow({ children: tCells }));
            }
          }
          if (!tRows.length) return null;
          var colW = [];
          for (var w = 0; w < maxCols; w++) colW.push(Math.max(800, Math.floor(9000 / maxCols)));
          return new docx.Table({ rows: tRows, width: { size: 9000, type: (docx.WidthType && docx.WidthType.DXA) || 'dxa' }, columnWidths: colW });
        } catch (e) {
          return null;
        }
      }

      /**
       * 纯文字：表格每一行收成一段，单元格用制表符分开，不生成 Word 表。
       * @param {HTMLTableElement} tableEl 表格
       * @param {object} docx docx 命名空间
       * @param {Array} blocks 输出块
       */
      function flattenTablePlain(tableEl, docx, blocks) {
        var rows = tableEl.querySelectorAll('tr');
        for (var r = 0; r < rows.length; r++) {
          if (tableEl !== rows[r].closest('table')) continue;
          var cells = rows[r].querySelectorAll(':scope > th, :scope > td');
          var parts = [];
          for (var c = 0; c < cells.length; c++) {
            var t = safeXmlText(String(cells[c].textContent || '')).replace(/\\s+/g, ' ').trim();
            if (t) parts.push(t);
          }
          if (parts.length) {
            blocks.push(new docx.Paragraph({ children: [new docx.TextRun({ text: parts.join('\\t') })] }));
          }
        }
      }

      /**
       * 把消毒后的 HTML 映射成 docx 块（异步：可选嵌入图片）。
       * 从 document.body 走树：完整网页、Word 导出 HTML、以及 header/nav 包裹的内容都要进 Word，不能只认少数几个标签的直接子节点。
       * @param {string} html HTML
       * @param {object} docx docx 命名空间
       * @param {boolean} includeImgs 是否尝试嵌图
       * @param {boolean} plainText 纯文字：不要标题样式、表格对象、加粗斜体和嵌图
       * @returns {Promise<Array>}
       */
      function htmlToBlocks(html, docx, includeImgs, plainText) {
        var parser = new DOMParser();
        var parsed = parser.parseFromString(String(html || ''), 'text/html');
        var root = parsed.body || parsed.documentElement;
        var HeadingLevel = docx.HeadingLevel || {};
        var blocks = [];
        /** 纯文字开关（本趟转换）。 */
        var plain = !!plainText;
        /** 不走进子树的标签。svg/form 要抽文字，不能整段丢掉。 */
        var SKIP = { script: 1, style: 1, noscript: 1, canvas: 1, iframe: 1, head: 1, meta: 1, link: 1, title: 1 };
        /** 顶层遇到时按一段处理的行内标签。 */
        var INLINE = { span: 1, a: 1, strong: 1, b: 1, em: 1, i: 1, u: 1, code: 1, small: 1, mark: 1, time: 1, label: 1, sub: 1, sup: 1 };

        /**
         * 把节点的可见文字收成一段。
         * @param {Node} node 元素或文本
         */
        function pushParagraphFrom(node) {
          var runs = inlineRuns(node, docx, {}, plain);
          if (!runs.length) {
            var txt = safeXmlText(String(node.textContent || '')).replace(/\\s+/g, ' ').trim();
            if (!txt) return;
            runs = [new docx.TextRun({ text: txt })];
          }
          blocks.push(new docx.Paragraph({ children: runs }));
        }

        /**
         * 处理一个 DOM 节点；子节点用独立 Promise 串行，避免和父级 Promise 互相等待。
         * @param {Node} node 节点
         * @returns {Promise<void>}
         */
        function processNode(node) {
          return Promise.resolve().then(function () {
            if (!node) return;
            if (node.nodeType === 3) {
              var t = safeXmlText(String(node.textContent || '')).replace(/\\s+/g, ' ').trim();
              if (t) blocks.push(new docx.Paragraph({ children: [new docx.TextRun({ text: t })] }));
              return;
            }
            if (node.nodeType !== 1) return;
            var tag = String(node.tagName || '').toLowerCase();
            if (SKIP[tag]) return;
            if (tag === 'template') {
              if (node.content) {
                var tKids = Array.prototype.slice.call(node.content.childNodes);
                var tSeq = Promise.resolve();
                tKids.forEach(function (child) {
                  tSeq = tSeq.then(function () { return processNode(child); }).catch(function () {});
                });
                return tSeq;
              }
              return;
            }
            if (tag === 'br' || tag === 'hr') {
              blocks.push(new docx.Paragraph({ children: [new docx.TextRun({ text: '' })] }));
              return;
            }
            if (tag === 'h1' || tag === 'h2' || tag === 'h3' || tag === 'h4' || tag === 'h5' || tag === 'h6') {
              if (plain) {
                pushParagraphFrom(node);
                return;
              }
              var level = { h1: HeadingLevel.HEADING_1, h2: HeadingLevel.HEADING_2, h3: HeadingLevel.HEADING_3, h4: HeadingLevel.HEADING_4, h5: HeadingLevel.HEADING_5, h6: HeadingLevel.HEADING_6 }[tag];
              var runs = inlineRuns(node, docx, {}, false);
              if (!runs.length) runs = [new docx.TextRun({ text: safeXmlText(String(node.textContent || '')).trim() || ' ' })];
              var headingOpts = { children: runs };
              if (level) headingOpts.heading = level;
              blocks.push(new docx.Paragraph(headingOpts));
              return;
            }
            if (tag === 'p' || tag === 'pre' || tag === 'blockquote' || tag === 'figcaption' || tag === 'li' || tag === 'dt' || tag === 'dd' || tag === 'svg' || tag === 'math') {
              pushParagraphFrom(node);
              return;
            }
            if (tag === 'ul' || tag === 'ol') {
              var items = node.children;
              for (var i = 0; i < items.length; i++) {
                if (String(items[i].tagName || '').toLowerCase() !== 'li') continue;
                if (plain) {
                  pushParagraphFrom(items[i]);
                  continue;
                }
                var prefix = tag === 'ol' ? String(i + 1) + '. ' : '• ';
                var liRuns = [new docx.TextRun({ text: prefix })].concat(inlineRuns(items[i], docx, {}, false));
                blocks.push(new docx.Paragraph({ children: liRuns }));
              }
              return;
            }
            if (tag === 'table') {
              if (plain) {
                flattenTablePlain(node, docx, blocks);
                return;
              }
              var tbl = mapTable(node, docx);
              if (tbl) blocks.push(tbl);
              else pushParagraphFrom(node);
              return;
            }
            if (tag === 'img') {
              if (plain || !includeImgs) {
                var altP = altParagraph(node, docx);
                if (altP) blocks.push(altP);
                return;
              }
              return imageParagraph(node, docx).then(function (p) { if (p) blocks.push(p); });
            }
            if (INLINE[tag]) {
              pushParagraphFrom(node);
              return;
            }
            var kids = Array.prototype.slice.call(node.childNodes);
            if (!kids.length) {
              pushParagraphFrom(node);
              return;
            }
            var seq = Promise.resolve();
            kids.forEach(function (child) {
              seq = seq.then(function () { return processNode(child); }).catch(function () {
                try { pushParagraphFrom(child); } catch (e) {}
              });
            });
            return seq;
          }).catch(function () {
            try { pushParagraphFrom(node); } catch (e) {}
          });
        }

        var seqTop = Promise.resolve();
        Array.prototype.slice.call(root.childNodes).forEach(function (child) {
          seqTop = seqTop.then(function () { return processNode(child); }).catch(function () {
            try { pushParagraphFrom(child); } catch (e) {}
          });
        });
        return seqTop.then(function () {
          if (!blocks.length) {
            var only = safeXmlText(String(root.textContent || '')).replace(/\\s+/g, ' ').trim();
            if (only) blocks.push(new docx.Paragraph({ children: [new docx.TextRun({ text: only })] }));
          }
          return blocks;
        });
      }

      /**
       * 判断抓回的 HTML 是否只是立刻 meta refresh 的中转页（hao123.com 根域）。
       * @param {string} html 抓取结果
       * @returns {boolean}
       */
      function isRefreshStub(html) {
        var s = String(html || '');
        if (s.length > 8192) return false;
        if (!/http-equiv\\s*=\\s*['"]?refresh/i.test(s)) return false;
        var text = s.replace(/<noscript\\b[\\s\\S]*?<\\/noscript>/gi, ' ').replace(/<[^>]+>/g, ' ').replace(/\\s+/g, ' ').trim();
        return text.length < 120;
      }

      /**
       * 从中转页抽出 refresh 的 http(s) 目标。
       * @param {string} html 中转 HTML
       * @param {string} baseHref 解析相对地址的基准
       * @returns {string}
       */
      function metaRefreshTarget(html, baseHref) {
        var stripped = String(html || '').replace(/<noscript\\b[\\s\\S]*?<\\/noscript>/gi, '');
        var tag = stripped.match(/<meta\\b[^>]*http-equiv\\s*=\\s*['"]?refresh['"]?[^>]*>/i);
        if (!tag) return '';
        var cm = tag[0].match(/content\\s*=\\s*["']([^"']+)["']/i);
        if (!cm) return '';
        var delay = parseFloat(cm[1]);
        if (!(delay <= 2)) return '';
        var um = cm[1].match(/url\\s*=\\s*(.*)$/i);
        if (!um) return '';
        var raw = um[1].trim().replace(/^['"]|['"]$/g, '').trim();
        if (!raw) return '';
        try {
          return normalizeHttpUrl(new URL(raw, baseHref || 'https://example.com').href);
        } catch (e) {
          return normalizeHttpUrl(raw);
        }
      }

      /**
       * 代抓公开页 HTML；若结果是立刻 refresh 的中转页，再抓一跳目标。
       * @param {string} href 绝对 URL
       * @param {number} hopsLeft 剩余可跟的 refresh 跳数
       * @returns {Promise<string>}
       */
      function fetchPageHtml(href, hopsLeft) {
        var left = hopsLeft == null ? 2 : hopsLeft;
        var api = '/api/tools/convert-html-to-pdf?url=' + encodeURIComponent(href);
        return fetch(api).then(function (res) {
          return res.json().catch(function () { return {}; }).then(function (data) {
            if (!res.ok || !data || !data.html) throw new Error('url');
            var html = String(data.html);
            if (left < 1 || !isRefreshStub(html)) return html;
            var next = metaRefreshTarget(html, data.finalUrl || href);
            if (!next || next === href) return html;
            return fetchPageHtml(next, left - 1);
          });
        });
      }

      /**
       * 规范化 http(s) URL。
       * @param {string} raw 用户输入
       * @returns {string}
       */
      function normalizeHttpUrl(raw) {
        var s = String(raw || '').trim();
        if (!s) return '';
        if (!/^https?:\\/\\//i.test(s)) s = 'https://' + s;
        try {
          var u = new URL(s);
          if (u.protocol !== 'http:' && u.protocol !== 'https:') return '';
          return u.href;
        } catch (e) { return ''; }
      }

      /**
       * 把块列表打成 .docx Blob。
       * @param {object} docx docx 命名空间
       * @param {Array} blocks 段落/表格
       * @returns {Promise<Blob>}
       */
      function packDoc(docx, blocks) {
        var doc = new docx.Document({ sections: [{ children: blocks }] });
        return docx.Packer.toBlob(doc);
      }

      /**
       * 消毒后若没有块，从原文剥标签再抽一层纯文本，避免 profile/未知标签把正文洗空。
       * @param {string} html 原文
       * @returns {string}
       */
      function fallbackPlainText(html) {
        var t = String(html || '')
          .replace(/<script\\b[\\s\\S]*?<\\/script>/gi, ' ')
          .replace(/<style\\b[\\s\\S]*?<\\/style>/gi, ' ')
          .replace(/<[^>]+>/g, ' ')
          .replace(/&nbsp;/gi, ' ')
          .replace(/&amp;/gi, '&')
          .replace(/&lt;/gi, '<')
          .replace(/&gt;/gi, '>')
          .replace(/\\s+/g, ' ')
          .trim();
        return safeXmlText(t).slice(0, 20000);
      }

      /**
       * 把当前输入转成 .docx Blob。
       * @returns {Promise<void>}
       */
      function convert() {
        setErr('');
        /** 高级设置「纯文字」：不要标题样式、表格对象和嵌图。 */
        var plainText = !!(plainEl && plainEl.checked);
        /** 纯文字开启时强制不嵌图。 */
        var includeImgs = !plainText && !!(imgsEl && imgsEl.checked);
        /** 网页地址 Tab 时展示在进度条下的网址。 */
        var phaseUrl = '';
        var htmlPromise;
        if (tab === 'url') {
          var href = normalizeHttpUrl(urlEl ? urlEl.value : '');
          if (!href) { setErr(msg.urlEmpty); return Promise.resolve(); }
          phaseUrl = href;
          htmlPromise = fetchPageHtml(href).catch(function () { throw new Error('url'); });
        } else {
          var raw = htmlEl ? String(htmlEl.value || '').trim() : '';
          if (!raw) { setErr(msg.empty); return Promise.resolve(); }
          htmlPromise = Promise.resolve(raw);
        }
        setBusy(true);
        openHud(phaseUrl);
        if (tab === 'url') setPhase('fetching', msg.fetching, 12, phaseUrl);
        else setPhase('mapping', msg.mapping, 18);
        return yieldUi()
          .then(function () { return htmlPromise; })
          .then(function (html) {
            setPhase('mapping', msg.mapping, 40, phaseUrl);
            return yieldUi().then(function () {
              return loadDocxLib().then(function (docx) { return { html: html, docx: docx }; });
            });
          })
          .then(function (pair) {
            setPhase('mapping', msg.mapping, 58);
            return yieldUi().then(function () {
              var clean = sanitizeHtml(pair.html);
              return htmlToBlocks(clean, pair.docx, includeImgs, plainText).then(function (blocks) {
                if (!blocks.length) {
                  var plain = fallbackPlainText(pair.html);
                  if (plain) blocks = [new pair.docx.Paragraph({ children: [new pair.docx.TextRun({ text: plain })] })];
                }
                if (!blocks.length) throw new Error('empty');
                setPhase('packing', msg.packing, 84);
                return yieldUi().then(function () {
                  return packDoc(pair.docx, blocks).catch(function () {
                    if (!includeImgs) throw new Error('convert');
                    return htmlToBlocks(clean, pair.docx, false, plainText).then(function (blocks2) {
                      if (!blocks2.length) {
                        var plain2 = fallbackPlainText(pair.html);
                        if (plain2) blocks2 = [new pair.docx.Paragraph({ children: [new pair.docx.TextRun({ text: plain2 })] })];
                      }
                      if (!blocks2.length) throw new Error('empty');
                      return packDoc(pair.docx, blocks2);
                    });
                  });
                });
              });
            });
          })
          .then(function (blob) {
            resultBlob = blob;
            finishHud();
            if (btnDownload) btnDownload.disabled = false;
          })
          .catch(function (err) {
            resultBlob = null;
            if (btnDownload) btnDownload.disabled = true;
            try { console.error('[convert-html-web-pages-to-word-document]', err); } catch (e2) {}
            var code = err && err.message ? err.message : '';
            var human = msg.convert;
            if (code === 'url') human = msg.url;
            else if (code === 'lib') human = msg.load;
            setErr(human);
            failHud(human);
          })
          .finally(function () { setBusy(false); });
      }

      /**
       * 下载最近一次成功的 .docx。
       */
      function download() {
        if (!resultBlob) return;
        var a = document.createElement('a');
        var url = URL.createObjectURL(resultBlob);
        a.href = url;
        a.download = 'page.docx';
        document.body.appendChild(a);
        a.click();
        a.remove();
        setTimeout(function () { URL.revokeObjectURL(url); }, 2000);
      }

      /**
       * 清空输入与产物。
       */
      function clearAll() {
        if (htmlEl) htmlEl.value = '';
        if (urlEl) urlEl.value = '';
        resultBlob = null;
        if (btnDownload) btnDownload.disabled = true;
        setErr('');
        setStatus('');
        closeHud();
        setTab('html');
      }

      /**
       * 载入样例：填入带标题/列表/表格的 HTML 并转换。
       * @returns {Promise<void>}
       */
      function loadSample() {
        setTab('html');
        if (htmlEl) htmlEl.value = SAMPLE_HTML;
        return convert();
      }

      if (tabHtml) tabHtml.addEventListener('click', function () { setTab('html'); });
      if (tabUrl) tabUrl.addEventListener('click', function () { setTab('url'); });
      if (btnConvert) btnConvert.addEventListener('click', convert);
      if (btnDownload) btnDownload.addEventListener('click', download);
      if (hudDownload) hudDownload.addEventListener('click', download);
      if (btnSample) btnSample.addEventListener('click', loadSample);
      if (btnClear) btnClear.addEventListener('click', clearAll);
      if (plainEl) plainEl.addEventListener('change', syncPlainUi);
      syncPlainUi();
      loadSample();
    })();
  </script>`;

	const toolMeta = getToolBySlug('convert-html-web-pages-to-word-document');
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
