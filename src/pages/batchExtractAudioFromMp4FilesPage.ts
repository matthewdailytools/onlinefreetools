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

/** i18n 键前缀（与 catalog faqPrefix 一致）。 */
const P = 'tool_batch_extract_audio_from_mp4_files';

/**
 * 非默认语言时为路径加语言前缀。
 * @param lang 当前 UI 语言
 * @param pathname 站点路径
 * @param defaultLang 无前缀的默认语
 */
const withLangPrefix = (lang: SiteLang, pathname: string, defaultLang: SiteLang) => {
	/** 规范化为以 / 开头的路径。 */
	const safe = pathname.startsWith('/') ? pathname : `/${pathname}`;
	return lang === defaultLang ? safe : `/${lang}${safe}`;
};

/**
 * 批量从本地 MP4/M4V 提取音频并打 ZIP（仅 .mp4/.m4v；混容器请用 batch-extract-audio-from-video-files）。
 * 管线：队列 → lamejs + OftExtractAudio → 串行 extractFile → JSZip；失败 skip。
 * ≠ YouTube/URL；单 MP4 请用 extract-audio-from-an-mp4-file。
 * @param opts.lang 当前 UI 语言
 * @param opts.defaultLang 默认（无前缀）语言
 * @param opts.enabledLangs 启用语言列表
 */
export const renderBatchExtractAudioFromMp4FilesPage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	/** 工具规范路径（无语言前缀）。 */
	const toolPath = '/tools/batch-extract-audio-from-mp4-files';
	/** 当前语言的规范 URL 路径。 */
	const canonicalPath = withLangPrefix(opts.lang, toolPath, opts.defaultLang);
	/** 文档标题：工具名 | 品牌。 */
	const title = `${t(opts.lang, `${P}_title`)} | ${t(opts.lang, 'brand')}`;
	/** Meta description（SEO）。 */
	const description = t(opts.lang, `${P}_description`);

	/** 顶栏导航项。 */
	const navItems = buildToolPageNavItems(opts.lang, opts.defaultLang);

	/**
	 * hreflang 映射始终带显式语言段。
	 * @param code 语言码
	 * @param pathname 站点路径
	 */
	const withExplicitLangPrefix = (code: SiteLang, pathname: string) => {
		/** 规范化路径。 */
		const safe = pathname.startsWith('/') ? pathname : `/${pathname}`;
		return `/${code}${safe}`.replace(/\/{2,}/g, '/');
	};

	/** 语言切换器用的显式语言路径表。 */
	const langAlternates: Record<string, string> = Object.fromEntries(
		(supportedLangs || []).map((code) => [code, withExplicitLangPrefix(code, toolPath)])
	);

	/** hreflang alternate 绝对 URL 列表。 */
	const alternates: HreflangAlternate[] = (supportedLangs || []).map((code) => ({
		lang: code,
		href: `https://onlinefreetools.org${withLangPrefix(code, toolPath, opts.defaultLang)}`,
	}));

	/** 页头 HTML。 */
	const headerHtml = renderHeader({
		lang: opts.lang,
		brandHref: withLangPrefix(opts.lang, '/', opts.defaultLang),
		navItems,
		enabledLangs: supportedLangs,
		langAlternates,
	});

	/** 侧栏 HTML（当前工具高亮）。 */
	const sidebarHtml = renderSidebar({
		title: t(opts.lang, 'nav_tools'),
		groups: buildToolSidebarItems({
			lang: opts.lang,
			defaultLang: opts.defaultLang,
			currentSlug: 'batch-extract-audio-from-mp4-files',
			currentAnchor: '#batch-mp4-extract-audio',
		}),
		id: 'toolNav',
	});

	/** 页脚 HTML。 */
	const footerHtml = renderFooter({ lang: opts.lang });

	/**
	 * 转义后的工具文案（防 XSS）。
	 * @param key 去掉前缀后的键名
	 */
	const tr = (key: string) => escapeHtml(t(opts.lang, `${P}_${key}`));

	/** 内联脚本用的 UI 消息键。 */
	const uiKeys = [
		'read',
		'decode',
		'extract',
		'write',
		'pack',
		'done',
		'failed',
		'elapsed',
		'err_file',
		'err_format',
		'err_limit',
		'err_container',
		'err_codec',
		'err_channels',
		'err_decode',
		'err_encoder',
		'err_zip',
		'err_too_many',
		'err_sample',
		'err_unsupported',
		'err_empty',
		'sample_name',
		'result',
		'partial',
		'empty',
		'remove',
		'queue_count',
		'empty_state',
		'status_pending',
		'status_running',
		'status_ok',
		'status_fail',
		'status_stopped',
		'stop',
		'download',
		'format_wav',
		'format_mp3',
		'forced_mp3',
	];
	/** 消息字典：键 → 当前语言字符串。 */
	const messages = Object.fromEntries(uiKeys.map((key) => [key, t(opts.lang, `${P}_${key}`)]));

	/** 工具主面板与结果区 markup（对标批量裁片头队列 UI + 单文件抽音格式芯片）。 */
	const contentHtml = `
    <div id="batch-extract-audio" class="tool-page-heading mb-3"><h1 class="h4">${tr('title')}</h1><p>${tr('desc')}</p></div>
    <section class="tool-panel" id="bemp4aPanel">
      <label class="tool-dropzone mb-3" id="bemp4aDrop" for="bemp4aFile"><input id="bemp4aFile" type="file" multiple accept=".mp4,.m4v,video/mp4"><span class="tool-dropzone-title">${tr('choose')}</span><span class="tool-dropzone-hint">${tr('hint')}</span><span id="bemp4aName" class="tool-dropzone-file"></span></label>
      <p class="form-label mb-1">${tr('list_label')}</p>
      <ul id="bemp4aList" class="list-group mb-2 bemp4a-list" aria-live="polite"></ul>
      <p id="bemp4aQueueMeta" class="form-text mb-3">${tr('queue_count').replace('{n}', '0')}</p>
      <div class="tools-bar d-flex flex-wrap mb-3" style="gap:.5rem">
        <button id="bemp4aConvert" class="btn btn-primary" type="button">${tr('convert')}</button>
        <button id="bemp4aStop" class="btn btn-outline-danger" type="button" disabled>${tr('stop')}</button>
        <button id="bemp4aDownload" class="btn btn-outline-primary" type="button" disabled>${tr('download')}</button>
        <button id="bemp4aSample" class="btn btn-outline-secondary" type="button">${tr('sample')}</button>
        <button id="bemp4aClear" class="btn btn-outline-secondary" type="button">${tr('clear')}</button>
      </div>
      <details class="mb-3"><summary>${tr('advanced')}</summary>
        <p class="form-label mt-2 mb-1">${tr('format_label')}</p>
        <div class="bemp4a-format-chips mb-2" id="bemp4aFormatChips" role="group" aria-label="${tr('format_label')}">
          <button type="button" class="btn btn-sm btn-primary" data-format="wav" aria-pressed="true">${tr('format_wav')}</button>
          <button type="button" class="btn btn-sm btn-outline-secondary" data-format="mp3" aria-pressed="false">${tr('format_mp3')}</button>
        </div>
        <label for="bemp4aBitrate" class="form-label">${tr('bitrate')}</label>
        <select id="bemp4aBitrate" class="form-select form-select-sm mb-2"><option value="128">128 kbps</option><option value="192" selected>192 kbps</option><option value="320">320 kbps</option></select>
        <p class="form-text">${tr('settings_hint')}</p>
      </details>
      <div id="bemp4aHud" class="bcw-hud mb-3" role="status" aria-live="polite" hidden>
        <div class="bcw-hud-top"><div class="bcw-hud-spin" aria-hidden="true"></div><div class="bcw-hud-pct" id="bemp4aPct">0%</div><div class="bcw-hud-copy"><div class="bcw-hud-title">${tr('progress')}</div><div class="bcw-hud-step" id="bemp4aStep"></div><div class="bcw-hud-time" id="bemp4aTime"></div></div></div>
        <div class="progress" style="height:1.35rem"><div id="bemp4aBar" class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div><span class="bcw-hud-sheen" aria-hidden="true"></span></div>
        <ol class="bcw-hud-steps"><li data-step="read">${tr('read')}</li><li data-step="decode">${tr('decode')}</li><li data-step="extract">${tr('extract')}</li><li data-step="write">${tr('write')}</li><li data-step="pack">${tr('pack')}</li></ol><div class="bcw-hud-url" id="bemp4aCurrent"></div>
      </div>
      <div id="bemp4aEmpty" class="bemp4a-empty mb-3" role="status">${tr('empty_state')}</div>
      <div id="bemp4aOutput" hidden><h2 class="h5">${tr('preview')}</h2><p id="bemp4aResult"></p></div>
    </section>`;

	/** How / Why / Rules / Use cases IG 块。 */
	const igHtml = renderToolIgSections({
		lang: opts.lang,
		prefix: P,
		mode: 'rules',
		howItemCount: 4,
		whyChooseItemCount: 4,
		ruleItemCount: 4,
		usecaseCount: 2,
	});

	/** 权威参考链接。 */
	const referencesHtml = renderToolReferencesSection({
		lang: opts.lang,
		links: [
			{
				label: 'MDN: decodeAudioData',
				href: 'https://developer.mozilla.org/en-US/docs/Web/API/BaseAudioContext/decodeAudioData',
			},
			{
				label: 'MDN: Media container formats',
				href: 'https://developer.mozilla.org/en-US/docs/Web/Media/Formats',
			},
		],
	});

	/** 金标 HUD、队列列表与格式芯片样式。 */
	const extraHeadHtml = `<style>${bcwHudCss({ hudId: 'bemp4aHud', convertBtnId: 'bemp4aConvert' })}#bemp4aHud.is-error{border-color:#b91c1c;background:#fff1f2}#bemp4aHud:not(.is-on) .bcw-hud-spin{animation:none}.bemp4a-format-chips{display:flex;flex-wrap:wrap;gap:.4rem}#bemp4aBitrate{max-width:18rem}.bemp4a-list{gap:.35rem}.bemp4a-list .list-group-item{display:flex;flex-wrap:wrap;align-items:center;gap:.4rem}.bemp4a-list .bemp4a-name{flex:1 1 10rem;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.bemp4a-list .bemp4a-status{font-size:.85rem;color:var(--bs-secondary-color,#6c757d)}.bemp4a-list .bemp4a-status.is-ok{color:#15803d}.bemp4a-list .bemp4a-status.is-fail{color:#b91c1c}.bemp4a-empty{padding:.75rem 1rem;border:1px dashed var(--border,#ced4da);border-radius:.5rem;color:var(--bs-secondary-color,#6c757d);font-size:.95rem}.site-footer nav.d-inline{display:inline-flex!important;flex-wrap:wrap;justify-content:center;max-width:100%}</style>`;

	/** 客户端批量抽音管线（读库 → 串行 extractFile → 打 ZIP）。 */
	const extraBodyHtml = `<script>
  (function(){
    'use strict';
    /** 当前语言的运行时文案。 */
    const M = ${JSON.stringify(messages).replace(/</g, '\\u003c')};
    /**
     * 按 id 取 DOM 元素。
     * @param {string} id 元素 id
     */
    const $ = id => document.getElementById(id);
    /** 工具面板根节点。 */
    const panel = $('bemp4aPanel');
    /** 多文件输入。 */
    const fileInput = $('bemp4aFile');
    /** 格式芯片容器。 */
    const formatChips = $('bemp4aFormatChips');
    /** MP3 码率选择。 */
    const bitrateEl = $('bemp4aBitrate');
    /** 进度 HUD。 */
    const hud = $('bemp4aHud');
    /** lamejs 脚本路径。 */
    const LAME_SRC = '/vendor/lamejs/lamejs.iife.js';
    /** 稳内存抽轨共享库路径。 */
    const STABLE_SRC = '/vendor/extract-audio/stable-extract.js';
    /** JSZip 脚本路径。 */
    const ZIP_SRC = '/vendor/jszip/jszip.min.js';
    /** 队列最大文件数（与库 BATCH_MAX_FILES 对齐；库未加载前用常量）。 */
    const BATCH_MAX_FILES = 30;
    /** 文件队列（仅保留 File 引用，不缓存 AudioBuffer）。 */
    let queue = [];
    /** 每行状态文案键或原文：pending|running|ok|fail|stopped。 */
    let rowStatus = [];
    /** 是否忙碌。 */
    let busy = false;
    /** 用户是否请求停止。 */
    let stopRequested = false;
    /** 当前单文件 AbortController。 */
    let fileAbort = null;
    /** ZIP 对象 URL。 */
    let outputUrl = '';
    /** 输出扩展偏好：wav | mp3。 */
    let format = 'wav';
    /** lamejs 加载 Promise 缓存。 */
    let lamePromise = null;
    /** 抽轨库加载 Promise 缓存。 */
    let stablePromise = null;
    /** JSZip 加载 Promise 缓存。 */
    let zipPromise = null;
    /** 计时器句柄。 */
    let timer = 0;
    /** 本轮开始时间戳。 */
    let started = 0;
    /** 让出主线程一帧，保持 HUD 可更新。 */
    const yieldUi = () => new Promise(resolve => requestAnimationFrame(() => setTimeout(resolve, 0)));
    /**
     * 用命名占位符填充模板。
     * @param {string} text 模板
     * @param {Record<string, string|number>} values 替换表
     */
    const fill = (text, values) => text.replace(/{(\\w+)}/g, (_, key) => String(values[key] ?? ''));
    /**
     * 粗判是否为视频文件（扩展名或 MIME）。
     * @param {File} file 候选
     * @returns {boolean}
     */
    /**
     * 本页队列仅接受 .mp4 / .m4v 或 video/mp4。
     * @param {File} file 候选
     * @returns {boolean}
     */
    function isMp4Container(file){
      if (!file) return false;
      const type = (file.type || '').toLowerCase();
      if (type === 'video/mp4') return true;
      return /\\.(mp4|m4v)$/i.test(file.name || '');
    }
    /**
     * 引擎加载后 MP4 专页二次校验。
     * @param {File} file 候选
     * @param {any} api OftExtractAudio
     * @returns {string|null}
     */
    function mp4PageRejectReason(file, api){
      if (!isMp4Container(file)) return 'err_format';
      if (api && typeof api.isIsoBmff === 'function' && !api.isIsoBmff(file)) return 'err_format';
      const type = (file.type || '').toLowerCase();
      const name = file.name || '';
      if (type !== 'video/mp4' && !/\\.(mp4|m4v)$/i.test(name)) return 'err_format';
      return null;
    }
    /** 丢弃已生成的 ZIP URL 并隐藏结果。 */
    function discard(){
      if (outputUrl) URL.revokeObjectURL(outputUrl);
      outputUrl = '';
      $('bemp4aDownload').disabled = true;
      $('bemp4aOutput').hidden = true;
    }
    /**
     * 锁定或解锁控件。
     * @param {boolean} on 是否锁定
     */
    function lock(on){
      busy = on;
      panel.querySelectorAll('button,input,select').forEach(el => {
        if (el.id === 'bemp4aStop') return;
        if (el.id === 'bemp4aDownload') return;
        el.disabled = on;
      });
      $('bemp4aStop').disabled = !on;
      $('bemp4aDownload').disabled = on || !outputUrl;
      $('bemp4aConvert').setAttribute('aria-busy', String(on));
    }
    /**
     * 更新进度条与步骤文案。
     * @param {number} pct 百分比
     * @param {string} step 步骤键
     */
    function progress(pct, step){
      $('bemp4aPct').textContent = Math.round(pct) + '%';
      $('bemp4aBar').style.width = pct + '%';
      $('bemp4aBar').setAttribute('aria-valuenow', String(Math.round(pct)));
      $('bemp4aStep').textContent = M[step] || step;
      hud.querySelectorAll('[data-step]').forEach(el => el.classList.toggle('is-on', el.dataset.step === step));
    }
    /**
     * 显示失败状态。
     * @param {string} key 错误文案键
     */
    function fail(key){
      hud.hidden = false;
      hud.classList.remove('is-on', 'is-done');
      hud.classList.add('is-error', 'is-fail');
      $('bemp4aPct').textContent = '—';
      $('bemp4aBar').style.width = '0%';
      $('bemp4aBar').setAttribute('aria-valuenow', '0');
      hud.setAttribute('role', 'alert');
      $('bemp4aStep').textContent = M[key] || M.failed;
    }
    /**
     * 刷新格式芯片高亮。
     * @param {string} mode wav|mp3
     */
    function paintFormat(mode){
      formatChips.querySelectorAll('[data-format]').forEach(btn => {
        const on = btn.dataset.format === mode;
        btn.classList.toggle('btn-primary', on);
        btn.classList.toggle('btn-outline-secondary', !on);
        btn.setAttribute('aria-pressed', String(on));
      });
    }
    /**
     * 切换导出格式并清空旧 ZIP。
     * @param {string} mode wav|mp3
     */
    function setFormat(mode){
      if (busy) return;
      format = mode === 'mp3' ? 'mp3' : 'wav';
      paintFormat(format);
      discard();
      hud.hidden = true;
    }
    /**
     * 行状态显示文案。
     * @param {string} code pending|running|ok|fail|stopped
     * @param {string} [detail] 可选失败细节
     */
    function statusLabel(code, detail){
      const base = M['status_' + code] || code;
      return detail ? base + ' — ' + detail : base;
    }
    /** 刷新队列列表、逐行状态与计数文案。 */
    function renderQueue(){
      const list = $('bemp4aList');
      list.innerHTML = '';
      queue.forEach((file, idx) => {
        const li = document.createElement('li');
        li.className = 'list-group-item';
        const name = document.createElement('span');
        name.className = 'bemp4a-name';
        name.textContent = file.name;
        const st = document.createElement('span');
        st.className = 'bemp4a-status';
        const code = rowStatus[idx] || 'pending';
        st.textContent = statusLabel(code);
        if (code === 'ok') st.classList.add('is-ok');
        if (code === 'fail' || code === 'stopped') st.classList.add('is-fail');
        const rm = document.createElement('button');
        rm.type = 'button';
        rm.className = 'btn btn-sm btn-outline-secondary';
        rm.textContent = M.remove;
        rm.disabled = busy;
        rm.addEventListener('click', () => {
          if (busy) return;
          queue.splice(idx, 1);
          rowStatus.splice(idx, 1);
          discard();
          hud.hidden = true;
          renderQueue();
        });
        li.appendChild(name);
        li.appendChild(st);
        li.appendChild(rm);
        list.appendChild(li);
      });
      $('bemp4aQueueMeta').textContent = fill(M.queue_count, { n: queue.length });
      $('bemp4aName').textContent = queue.length ? fill(M.queue_count, { n: queue.length }) : '';
      $('bemp4aEmpty').hidden = queue.length > 0;
    }
    /**
     * 向队列追加视频文件（截断到 BATCH_MAX_FILES）。
     * @param {FileList|File[]} files 候选文件
     */
    function addFiles(files){
      if (busy) return;
      discard();
      hud.hidden = true;
      const list = Array.prototype.slice.call(files || []);
      const api = window.OftExtractAudio;
      const maxFiles = (api && api.BATCH_MAX_FILES) || BATCH_MAX_FILES;
      for (let i = 0; i < list.length; i++){
        if (queue.length >= maxFiles){
          fail('err_too_many');
          break;
        }
        const file = list[i];
        if (!file || !isMp4Container(file)){
          fail('err_format');
          continue;
        }
        const preReject = api ? mp4PageRejectReason(file, api) : null;
        if (preReject){
          fail(preReject);
          continue;
        }
        if (api && typeof api.classifyFile === 'function'){
          const c = api.classifyFile(file);
          if (c && c.path === 'reject'){
            fail(c.reason || 'err_limit');
            continue;
          }
        }
        queue.push(file);
        rowStatus.push('pending');
      }
      fileInput.value = '';
      renderQueue();
    }
    /**
     * 懒加载 lamejs IIFE。
     * @returns {Promise<any>}
     */
    function loadEncoder(){
      if (window.lamejs && window.lamejs.Mp3Encoder) return Promise.resolve(window.lamejs);
      if (!lamePromise){
        lamePromise = new Promise((resolve, reject) => {
          const script = document.createElement('script');
          let timeout;
          const bad = () => {
            clearTimeout(timeout);
            script.remove();
            lamePromise = null;
            reject(Error('err_encoder'));
          };
          script.src = LAME_SRC;
          script.onerror = bad;
          script.onload = () => {
            clearTimeout(timeout);
            if (window.lamejs && window.lamejs.Mp3Encoder) resolve(window.lamejs);
            else bad();
          };
          timeout = setTimeout(bad, 20000);
          document.head.appendChild(script);
        });
      }
      return lamePromise;
    }
    /**
     * 懒加载稳内存抽轨库（依赖 lamejs）。
     * @returns {Promise<any>}
     */
    function loadStable(){
      if (window.OftExtractAudio && window.OftExtractAudio.extractFile) return Promise.resolve(window.OftExtractAudio);
      if (!stablePromise){
        stablePromise = loadEncoder().then(() => new Promise((resolve, reject) => {
          const script = document.createElement('script');
          let timeout;
          const bad = () => {
            clearTimeout(timeout);
            script.remove();
            stablePromise = null;
            reject(Error('err_encoder'));
          };
          script.src = STABLE_SRC;
          script.onerror = bad;
          script.onload = () => {
            clearTimeout(timeout);
            if (window.OftExtractAudio && window.OftExtractAudio.extractFile) resolve(window.OftExtractAudio);
            else bad();
          };
          timeout = setTimeout(bad, 20000);
          document.head.appendChild(script);
        }));
      }
      return stablePromise;
    }
    /**
     * 懒加载 JSZip。
     * @returns {Promise<any>}
     */
    function loadJsZip(){
      if (window.JSZip) return Promise.resolve(window.JSZip);
      if (!zipPromise){
        zipPromise = new Promise((resolve, reject) => {
          const script = document.createElement('script');
          let timeout;
          const bad = () => {
            clearTimeout(timeout);
            script.remove();
            zipPromise = null;
            reject(Error('err_zip'));
          };
          script.src = ZIP_SRC;
          script.onerror = bad;
          script.onload = () => {
            clearTimeout(timeout);
            if (window.JSZip) resolve(window.JSZip);
            else bad();
          };
          timeout = setTimeout(bad, 20000);
          document.head.appendChild(script);
        });
      }
      return zipPromise;
    }
    /**
     * 安全文件名主干（去扩展名）。
     * @param {string} name 原文件名
     * @returns {string}
     */
    function stemName(name){
      return (name || 'audio').replace(/\\.[^.]+$/, '').replace(/[^\\w\\u4e00-\\u9fff.-]+/g, '_') || 'audio';
    }
    /**
     * 请求停止当前批次（中止当前 extractFile 并跳出循环）。
     */
    function stopBatch(){
      if (!busy) return;
      stopRequested = true;
      if (fileAbort){
        try { fileAbort.abort(); } catch (_) {}
      }
    }
    /** 执行整批串行抽音并生成 ZIP。 */
    async function convert(){
      if (busy) return;
      discard();
      if (!queue.length){ fail('empty'); return; }
      stopRequested = false;
      for (let i = 0; i < rowStatus.length; i++) rowStatus[i] = 'pending';
      renderQueue();
      lock(true);
      hud.hidden = false;
      hud.className = 'bcw-hud is-on mb-3';
      hud.setAttribute('role', 'status');
      started = performance.now();
      /**
       * 刷新已用时间。
       */
      const clock = () => {
        $('bemp4aTime').textContent = fill(M.elapsed, { s: ((performance.now() - started) / 1000).toFixed(1) });
      };
      clock();
      timer = setInterval(clock, 100);
      let ok = 0;
      let failCount = 0;
      try {
        const api = await loadStable();
        fileInput.accept = '.mp4,.m4v,video/mp4';
        const JSZip = await loadJsZip();
        const zip = new JSZip();
        const total = queue.length;
        const maxFiles = api.BATCH_MAX_FILES || BATCH_MAX_FILES;
        if (total > maxFiles) throw Error('err_too_many');
        for (let i = 0; i < total; i++){
          if (stopRequested){
            for (let j = i; j < total; j++){
              if (rowStatus[j] === 'pending') rowStatus[j] = 'stopped';
            }
            renderQueue();
            break;
          }
          const file = queue[i];
          rowStatus[i] = 'running';
          renderQueue();
          $('bemp4aCurrent').textContent = file.name + ' (' + (i + 1) + '/' + total + ')';
          const base = 5 + (88 * i) / total;
          progress(base, 'read');
          await yieldUi();
          fileAbort = typeof AbortController !== 'undefined' ? new AbortController() : null;
          /** 本文件产出 blob 的临时引用（写入 ZIP 后立即丢弃）。 */
          let resultBlob = null;
          try {
            if (!file || !isMp4Container(file)) throw Error('err_format');
            const rowReject = mp4PageRejectReason(file, api);
            if (rowReject) throw Error(rowReject);
            if (typeof api.classifyFile === 'function'){
              const c = api.classifyFile(file);
              if (c && c.path === 'reject') throw Error(c.reason || 'err_limit');
            }
            const result = await api.extractFile(file, {
              format: format,
              bitrate: Number(bitrateEl.value) || 192,
              signal: fileAbort ? fileAbort.signal : undefined,
              onProgress: (pct, step) => {
                const mapped = step === 'done' ? 'write' : (step || 'extract');
                progress(base + Math.min(20, (Number(pct) || 0) * 0.2), mapped);
              }
            });
            resultBlob = result.blob;
            if (!resultBlob || !resultBlob.size) throw Error('err_encoder');
            const ext = result.ext === 'mp3' ? 'mp3' : 'wav';
            let entry = stemName(file.name) + '.' + ext;
            let n = 2;
            while (zip.file(entry)){
              entry = stemName(file.name) + '-' + n + '.' + ext;
              n++;
            }
            zip.file(entry, resultBlob);
            rowStatus[i] = 'ok';
            ok++;
          } catch (e) {
            const msg = e && e.message ? e.message : '';
            if (msg === 'aborted' || (e && e.name === 'AbortError') || stopRequested){
              rowStatus[i] = 'stopped';
            } else {
              rowStatus[i] = 'fail';
              failCount++;
              $('bemp4aCurrent').textContent = file.name + ': ' + (M[msg] || M.failed);
            }
          } finally {
            /** 释放单文件结果引用，避免批次内堆积解码产物。 */
            resultBlob = null;
            fileAbort = null;
            renderQueue();
            await yieldUi();
          }
        }
        if (!ok) throw Error(stopRequested ? 'status_stopped' : 'failed');
        progress(96, 'pack');
        await yieldUi();
        const zipBlob = await zip.generateAsync({ type: 'blob' });
        if (!zipBlob.size) throw Error('err_zip');
        outputUrl = URL.createObjectURL(zipBlob);
        $('bemp4aOutput').hidden = false;
        $('bemp4aResult').textContent = failCount || stopRequested
          ? fill(M.partial, { ok, fail: failCount, output: (zipBlob.size / 1024).toFixed(1) })
          : fill(M.result, { n: ok, output: (zipBlob.size / 1024).toFixed(1) });
        progress(100, 'done');
        hud.classList.remove('is-on');
        hud.classList.add('is-done');
      } catch (e) {
        discard();
        const msg = e && e.message ? e.message : '';
        fail(e && M[msg] ? msg : 'failed');
      } finally {
        clearInterval(timer);
        clock();
        stopRequested = false;
        fileAbort = null;
        lock(false);
      }
    }
    /**
     * 合成一段短 MP4 样例（色块 + AAC 音轨）。
     * @param {number} freqHz 振荡频率
     * @param {string} name 文件名
     * @returns {Promise<File>}
     */
    function makeSampleVideo(freqHz, name){
      return new Promise((resolve, reject) => {
        if (typeof MediaRecorder === 'undefined' || !HTMLCanvasElement.prototype.captureStream){
          reject(Error('err_sample'));
          return;
        }
        /** 画布：静止色块作视频轨。 */
        const canvas = document.createElement('canvas');
        canvas.width = 160;
        canvas.height = 120;
        const c2d = canvas.getContext('2d');
        if (!c2d){ reject(Error('err_sample')); return; }
        c2d.fillStyle = freqHz > 500 ? '#1d4ed8' : '#0f766e';
        c2d.fillRect(0, 0, 160, 120);
        c2d.fillStyle = '#ecfdf5';
        c2d.font = '14px sans-serif';
        c2d.fillText('audio', 55, 66);
        /** 合成视频流。 */
        const videoStream = canvas.captureStream(8);
        const AC = window.AudioContext || window.webkitAudioContext;
        if (!AC){ reject(Error('err_sample')); return; }
        /** 音频上下文：短纯音。 */
        const ac = new AC();
        const osc = ac.createOscillator();
        const gain = ac.createGain();
        gain.gain.value = 0.12;
        const dest = ac.createMediaStreamDestination();
        osc.frequency.value = freqHz;
        osc.connect(gain);
        gain.connect(dest);
        dest.stream.getAudioTracks().forEach(track => videoStream.addTrack(track));
        /** 选择浏览器支持的 MP4 MIME。 */
        const mimeCandidates = [
          'video/mp4;codecs=avc1.42E01E,mp4a.40.2',
          'video/mp4;codecs=h264,aac',
          'video/mp4'
        ];
        const mime = mimeCandidates.find(m => MediaRecorder.isTypeSupported(m)) || '';
        if (!mime){ ac.close(); reject(Error('err_sample')); return; }
        /** 录制器与分片。 */
        const rec = new MediaRecorder(videoStream, { mimeType: mime });
        const chunks = [];
        rec.ondataavailable = ev => { if (ev.data && ev.data.size) chunks.push(ev.data); };
        rec.onerror = () => { try { ac.close(); } catch (_) {} reject(Error('err_sample')); };
        rec.onstop = () => {
          try { osc.stop(); } catch (_) {}
          try { ac.close(); } catch (_) {}
          videoStream.getTracks().forEach(t => t.stop());
          const blob = new Blob(chunks, { type: mime.indexOf('video/mp4') === 0 ? 'video/mp4' : mime.split(';')[0] });
          if (!blob.size){ reject(Error('err_sample')); return; }
          const mp4Name = /\\.mp4$/i.test(name) ? name : name.replace(/\\.[^.]+$/, '') + '.mp4';
          resolve(new File([blob], mp4Name, { type: 'video/mp4' }));
        };
        osc.start();
        rec.start(100);
        /** 约 1.2 秒后停止录制。 */
        setTimeout(() => {
          try { rec.stop(); } catch (_) { reject(Error('err_sample')); }
        }, 1200);
      });
    }
    /**
     * 加载两段合成 WebM 样例并立即跑批量提取。
     */
    async function loadSample(){
      if (busy) return;
      try {
        const base = M.sample_name || 'batch-mp4-audio-demo';
        const a = await makeSampleVideo(440, base + '-1.mp4');
        const b = await makeSampleVideo(660, base + '-2.mp4');
        queue = [a, b];
        rowStatus = ['pending', 'pending'];
        setFormat('wav');
        renderQueue();
        await convert();
      } catch (e) {
        queue = [];
        rowStatus = [];
        renderQueue();
        fail(e && M[e.message] ? e.message : 'err_sample');
      }
    }
    fileInput.addEventListener('change', () => addFiles(fileInput.files));
    $('bemp4aDrop').addEventListener('dragover', event => event.preventDefault());
    $('bemp4aDrop').addEventListener('drop', event => {
      event.preventDefault();
      if (busy) return;
      addFiles(event.dataTransfer.files);
    });
    formatChips.addEventListener('click', event => {
      const btn = event.target.closest('[data-format]');
      if (!btn || busy) return;
      setFormat(btn.dataset.format);
    });
    bitrateEl.addEventListener('change', () => { discard(); hud.hidden = true; });
    $('bemp4aConvert').addEventListener('click', convert);
    $('bemp4aStop').addEventListener('click', stopBatch);
    $('bemp4aSample').addEventListener('click', loadSample);
    $('bemp4aClear').addEventListener('click', () => {
      if (busy) return;
      queue = [];
      rowStatus = [];
      discard();
      hud.hidden = true;
      renderQueue();
    });
    $('bemp4aDownload').addEventListener('click', () => {
      if (!outputUrl || busy) return;
      const link = document.createElement('a');
      link.href = outputUrl;
      link.download = 'extracted-audio.zip';
      document.body.appendChild(link);
      link.click();
      link.remove();
    });
    window.addEventListener('pagehide', () => {
      clearInterval(timer);
      if (outputUrl) URL.revokeObjectURL(outputUrl);
    });
    paintFormat('wav');
    renderQueue();
    // 样例依赖 MediaRecorder：不在首屏自动跑，避免卡住标签页；Sample 按钮仍可触发。
  })();
</script>`;

	/** 当前工具 catalog 元数据。 */
	const toolMeta = getToolBySlug('batch-extract-audio-from-mp4-files');
	/** related / article / FAQ 等扩展区块。 */
	const extraSectionsHtml = toolMeta
		? renderToolExtraSections({ lang: opts.lang, defaultLang: opts.defaultLang, tool: toolMeta })
		: '';
	/** JSON-LD（WebApplication + Breadcrumb）。 */
	const toolJsonLd = toolMeta
		? buildToolJsonLd({
				lang: opts.lang,
				defaultLang: opts.defaultLang,
				tool: toolMeta,
				name: t(opts.lang, `${P}_title`),
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
		contentHtml: `<div dir="${opts.lang === 'ar' ? 'rtl' : 'ltr'}">${contentHtml}${igHtml}${extraSectionsHtml}${referencesHtml}</div>`,
		footerHtml,
		extraHeadHtml: `${extraHeadHtml}${toolJsonLd}`,
		extraBodyHtml,
		mainClass: 'container py-4 tool-page',
		includeSidebarToggleScript: true,
		sidebarAutoCloseSelector: '#toolNav a',
	});
};
