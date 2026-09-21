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
const P = 'tool_batch_trim_the_same_intro_from_audio_files';

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
 * 批量裁掉相同片头秒数并导出 WAV ZIP（L2）。
 * 管线：多文件队列 → decodeAudioData → 从 intro 切到结尾 → 16-bit WAV → JSZip。
 * ≠ 单文件波形裁剪；≠ 批量 WAV→MP3。
 * @param opts.lang 当前 UI 语言
 * @param opts.defaultLang 默认（无前缀）语言
 * @param opts.enabledLangs 启用语言列表
 */
export const renderBatchTrimTheSameIntroFromAudioFilesPage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	/** 工具规范路径（无语言前缀）。 */
	const toolPath = '/tools/batch-trim-the-same-intro-from-audio-files';
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
			currentSlug: 'batch-trim-the-same-intro-from-audio-files',
			currentAnchor: '#batch-trim-intro',
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
		'trim',
		'pack',
		'done',
		'failed',
		'elapsed',
		'err_file',
		'err_format',
		'err_limit',
		'err_decode',
		'err_intro',
		'err_zip',
		'err_too_many',
		'sample_name',
		'result',
		'partial',
		'empty',
		'remove',
		'queue_count',
		'empty_state',
	];
	/** 消息字典：键 → 当前语言字符串。 */
	const messages = Object.fromEntries(uiKeys.map((key) => [key, t(opts.lang, `${P}_${key}`)]));

	/** 工具主面板与结果区 markup。 */
	const contentHtml = `
    <div id="batch-trim-intro" class="tool-page-heading mb-3"><h1 class="h4">${tr('title')}</h1><p>${tr('desc')}</p></div>
    <section class="tool-panel" id="btPanel">
      <label class="tool-dropzone mb-3" id="btDrop" for="btFile"><input id="btFile" type="file" multiple accept="audio/wav,audio/mpeg,audio/mp4,audio/aac,audio/ogg,audio/webm,audio/flac,audio/x-wav,audio/x-m4a,.wav,.mp3,.m4a,.aac,.ogg,.oga,.webm,.flac"><span class="tool-dropzone-title">${tr('choose')}</span><span class="tool-dropzone-hint">${tr('hint')}</span><span id="btName" class="tool-dropzone-file"></span></label>
      <p class="form-label mb-1">${tr('list_label')}</p>
      <ul id="btList" class="list-group mb-2 bt-list" aria-live="polite"></ul>
      <p id="btQueueMeta" class="form-text mb-3">${tr('queue_count').replace('{n}', '0')}</p>
      <div class="mb-3" style="max-width:16rem"><label class="form-label" for="btIntro">${tr('field_intro')}</label><input id="btIntro" class="form-control" type="number" min="0.1" max="120" step="0.1" value="1"><p class="form-text">${tr('intro_hint')}</p></div>
      <div class="tools-bar d-flex flex-wrap mb-3" style="gap:.5rem">
        <button id="btConvert" class="btn btn-primary" type="button">${tr('convert')}</button>
        <button id="btDownload" class="btn btn-outline-primary" type="button" disabled>${tr('download')}</button>
        <button id="btSample" class="btn btn-outline-secondary" type="button">${tr('sample')}</button>
        <button id="btClear" class="btn btn-outline-secondary" type="button">${tr('clear')}</button>
      </div>
      <details class="mb-3"><summary>${tr('advanced')}</summary><p class="form-text mt-2">${tr('settings_hint')}</p></details>
      <div id="btHud" class="bcw-hud mb-3" role="status" aria-live="polite" hidden>
        <div class="bcw-hud-top"><div class="bcw-hud-spin" aria-hidden="true"></div><div class="bcw-hud-pct" id="btPct">0%</div><div class="bcw-hud-copy"><div class="bcw-hud-title">${tr('progress')}</div><div class="bcw-hud-step" id="btStep"></div><div class="bcw-hud-time" id="btTime"></div></div></div>
        <div class="progress" style="height:1.35rem"><div id="btBar" class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div><span class="bcw-hud-sheen" aria-hidden="true"></span></div>
        <ol class="bcw-hud-steps"><li data-step="read">${tr('read')}</li><li data-step="decode">${tr('decode')}</li><li data-step="trim">${tr('trim')}</li><li data-step="pack">${tr('pack')}</li></ol><div class="bcw-hud-url" id="btCurrent"></div>
      </div>
      <div id="btEmpty" class="bt-empty mb-3" role="status">${tr('empty_state')}</div>
      <div id="btOutput" hidden><h2 class="h5">${tr('preview')}</h2><p id="btResult"></p></div>
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
		],
	});

	/** 金标 HUD、队列列表与布局补充样式。 */
	const extraHeadHtml = `<style>${bcwHudCss({ hudId: 'btHud', convertBtnId: 'btConvert' })}#btHud.is-error{border-color:#b91c1c;background:#fff1f2}#btHud:not(.is-on) .bcw-hud-spin{animation:none}#btIntro{max-width:16rem}.bt-list{gap:.35rem}.bt-list .list-group-item{display:flex;flex-wrap:wrap;align-items:center;gap:.4rem}.bt-list .bt-name{flex:1 1 10rem;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.bt-empty{padding:.75rem 1rem;border:1px dashed var(--border,#ced4da);border-radius:.5rem;color:var(--bs-secondary-color,#6c757d);font-size:.95rem}.site-footer nav.d-inline{display:inline-flex!important;flex-wrap:wrap;justify-content:center;max-width:100%}</style>`;

	/** 客户端批量裁剪管线（读 → 解码 → 裁片头 → 打 ZIP）。 */
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
    const panel = $('btPanel');
    /** 多文件输入。 */
    const fileInput = $('btFile');
    /** 片头秒数输入。 */
    const introInput = $('btIntro');
    /** 进度 HUD。 */
    const hud = $('btHud');
    /** 文件队列（File 对象）。 */
    let queue = [];
    /** 是否忙碌。 */
    let busy = false;
    /** ZIP 对象 URL。 */
    let outputUrl = '';
    /** JSZip 加载 Promise。 */
    let zipPromise = null;
    /** 计时器句柄。 */
    let timer = 0;
    /** 本轮开始时间戳。 */
    let started = 0;
    /** 单文件大小上限（字节）。 */
    const MAX_BYTES = 40 * 1024 * 1024;
    /** 队列最大文件数。 */
    const MAX_FILES = 20;
    /** 单文件最长秒数。 */
    const MAX_SEC = 600;
    /** 队列总字节上限。 */
    const MAX_QUEUE_BYTES = 120 * 1024 * 1024;
    /** 裁后最短剩余时长（秒）。 */
    const MIN_LEFT_SEC = 0.25;
    /** 让出主线程一帧，保持 HUD 可更新。 */
    const yieldUi = () => new Promise(resolve => requestAnimationFrame(() => setTimeout(resolve, 0)));
    /**
     * 用命名占位符填充模板。
     * @param {string} text 模板
     * @param {Record<string, string|number>} values 替换表
     */
    const fill = (text, values) => text.replace(/{(\\w+)}/g, (_, key) => String(values[key] ?? ''));
    /**
     * 当前队列总字节数。
     * @returns {number}
     */
    function queueBytes(){
      let sum = 0;
      for (let i = 0; i < queue.length; i++) sum += queue[i].size || 0;
      return sum;
    }
    /** 丢弃已生成的 ZIP URL 并隐藏结果。 */
    function discard(){
      if (outputUrl) URL.revokeObjectURL(outputUrl);
      outputUrl = '';
      $('btDownload').disabled = true;
      $('btOutput').hidden = true;
    }
    /**
     * 锁定或解锁控件。
     * @param {boolean} on 是否锁定
     */
    function lock(on){
      busy = on;
      panel.querySelectorAll('button,input').forEach(el => { el.disabled = on; });
      $('btDownload').disabled = on || !outputUrl;
      $('btConvert').setAttribute('aria-busy', String(on));
    }
    /**
     * 更新进度条与步骤文案。
     * @param {number} pct 百分比
     * @param {string} step 步骤键
     */
    function progress(pct, step){
      $('btPct').textContent = Math.round(pct) + '%';
      $('btBar').style.width = pct + '%';
      $('btBar').setAttribute('aria-valuenow', String(Math.round(pct)));
      $('btStep').textContent = M[step];
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
      $('btPct').textContent = '—';
      $('btBar').style.width = '0%';
      $('btBar').setAttribute('aria-valuenow', '0');
      hud.setAttribute('role', 'alert');
      $('btStep').textContent = M[key] || M.failed;
    }
    /** 刷新队列列表与计数文案。 */
    function renderQueue(){
      const list = $('btList');
      list.innerHTML = '';
      queue.forEach((file, idx) => {
        const li = document.createElement('li');
        li.className = 'list-group-item';
        const name = document.createElement('span');
        name.className = 'bt-name';
        name.textContent = file.name;
        const rm = document.createElement('button');
        rm.type = 'button';
        rm.className = 'btn btn-sm btn-outline-secondary';
        rm.textContent = M.remove;
        rm.addEventListener('click', () => {
          if (busy) return;
          queue.splice(idx, 1);
          discard();
          hud.hidden = true;
          renderQueue();
        });
        li.appendChild(name);
        li.appendChild(rm);
        list.appendChild(li);
      });
      $('btQueueMeta').textContent = fill(M.queue_count, { n: queue.length });
      $('btName').textContent = queue.length ? fill(M.queue_count, { n: queue.length }) : '';
      $('btEmpty').hidden = queue.length > 0;
    }
    /**
     * 向队列追加文件（截断到上限）。
     * @param {FileList|File[]} files 候选文件
     */
    function addFiles(files){
      if (busy) return;
      discard();
      hud.hidden = true;
      const list = Array.prototype.slice.call(files || []);
      let used = queueBytes();
      for (let i = 0; i < list.length; i++){
        if (queue.length >= MAX_FILES){
          fail('err_too_many');
          break;
        }
        const file = list[i];
        if (!file || file.size > MAX_BYTES){
          fail('err_limit');
          continue;
        }
        if (used + file.size > MAX_QUEUE_BYTES){
          fail('err_limit');
          break;
        }
        queue.push(file);
        used += file.size;
      }
      fileInput.value = '';
      renderQueue();
    }
    /** 懒加载 JSZip。 */
    function loadJsZip(){
      if (window.JSZip) return Promise.resolve(window.JSZip);
      if (!zipPromise){
        zipPromise = new Promise((resolve, reject) => {
          const script = document.createElement('script');
          let timeout;
          /**
           * 加载失败清理。
           */
          const bad = () => {
            clearTimeout(timeout);
            script.remove();
            zipPromise = null;
            reject(Error('err_zip'));
          };
          script.src = '/vendor/jszip/jszip.min.js';
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
     * 将 float 声道写成 16-bit little-endian PCM WAV。
     * @param {Float32Array[]} channels 声道样本（1 或 2）
     * @param {number} rate 采样率 Hz
     * @returns {Blob}
     */
    function writeWav(channels, rate){
      const ch = channels.length;
      const frames = channels[0].length;
      const blockAlign = ch * 2;
      const dataBytes = frames * blockAlign;
      const bytes = new ArrayBuffer(44 + dataBytes);
      const view = new DataView(bytes);
      /**
       * 写入 ASCII 标记。
       * @param {number} at 偏移
       * @param {string} text 四字符
       */
      const put = (at, text) => { for (let i = 0; i < text.length; i++) view.setUint8(at + i, text.charCodeAt(i)); };
      put(0, 'RIFF');
      view.setUint32(4, bytes.byteLength - 8, true);
      put(8, 'WAVE');
      put(12, 'fmt ');
      view.setUint32(16, 16, true);
      view.setUint16(20, 1, true);
      view.setUint16(22, ch, true);
      view.setUint32(24, rate, true);
      view.setUint32(28, rate * blockAlign, true);
      view.setUint16(32, blockAlign, true);
      view.setUint16(34, 16, true);
      put(36, 'data');
      view.setUint32(40, dataBytes, true);
      let at = 44;
      for (let i = 0; i < frames; i++){
        for (let c = 0; c < ch; c++){
          const sample = Number.isFinite(channels[c][i]) ? Math.max(-1, Math.min(1, channels[c][i])) : 0;
          view.setInt16(at, Math.round(sample * (sample < 0 ? 32768 : 32767)), true);
          at += 2;
        }
      }
      return new Blob([bytes], { type: 'audio/wav' });
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
     * 用 OfflineAudioContext 或 AudioContext 解码。
     * @param {ArrayBuffer} bytes 原始音频字节
     * @returns {Promise<AudioBuffer>}
     */
    async function decodeBytes(bytes){
      const Offline = window.OfflineAudioContext || window.webkitOfflineAudioContext;
      if (Offline){
        try {
          return await new Offline(2, 1, 44100).decodeAudioData(bytes.slice(0));
        } catch (e) {
          /* 回退到 AudioContext */
        }
      }
      const AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) throw Error('err_decode');
      const ctx = new AC();
      try {
        return await ctx.decodeAudioData(bytes.slice(0));
      } catch (e) {
        throw Error('err_decode');
      } finally {
        if (typeof ctx.close === 'function'){
          try { await ctx.close(); } catch (e2) { /* 忽略关闭失败 */ }
        }
      }
    }
    /**
     * 从 intro 秒起裁到结尾；剩余须 ≥ 0.25s。
     * @param {AudioBuffer} decoded 解码缓冲
     * @param {number} introSec 片头秒数
     * @returns {{ channels: Float32Array[], rate: number }}
     */
    function trimIntro(decoded, introSec){
      const rate = decoded.sampleRate;
      const startSample = Math.floor(introSec * rate);
      if (startSample < 0 || startSample >= decoded.length) throw Error('err_intro');
      const leftover = (decoded.length - startSample) / rate;
      if (leftover < MIN_LEFT_SEC) throw Error('err_intro');
      const ch = Math.min(2, Math.max(1, decoded.numberOfChannels));
      /** @type {Float32Array[]} */
      const channels = [];
      for (let c = 0; c < ch; c++){
        const src = decoded.getChannelData(Math.min(c, decoded.numberOfChannels - 1));
        channels.push(src.subarray(startSample, decoded.length));
      }
      return { channels, rate };
    }
    /**
     * 校验片头秒数（0.1–120）。
     * @returns {number|null} 合法秒数或 null
     */
    function readIntro(){
      const intro = Number(introInput.value);
      if (!Number.isFinite(intro) || intro < 0.1 || intro > 120) return null;
      return intro;
    }
    /** 执行整批裁剪并生成 ZIP。 */
    async function convert(){
      if (busy) return;
      discard();
      if (!queue.length){ fail('empty'); return; }
      const intro = readIntro();
      if (intro === null){ fail('err_intro'); return; }
      lock(true);
      hud.hidden = false;
      hud.className = 'bcw-hud is-on mb-3';
      hud.setAttribute('role', 'status');
      started = performance.now();
      /**
       * 刷新已用时间。
       */
      const clock = () => {
        $('btTime').textContent = fill(M.elapsed, { s: ((performance.now() - started) / 1000).toFixed(1) });
      };
      clock();
      timer = setInterval(clock, 100);
      let ok = 0;
      let failCount = 0;
      try {
        if (queueBytes() > MAX_QUEUE_BYTES) throw Error('err_limit');
        const JSZip = await loadJsZip();
        const zip = new JSZip();
        const total = queue.length;
        for (let i = 0; i < total; i++){
          const file = queue[i];
          $('btCurrent').textContent = file.name + ' (' + (i + 1) + '/' + total + ')';
          const base = 5 + (90 * i) / total;
          try {
            progress(base, 'read');
            await yieldUi();
            if (!file || file.size > MAX_BYTES) throw Error('err_limit');
            const bytes = await file.arrayBuffer();
            progress(base + 8, 'decode');
            await yieldUi();
            const decoded = await decodeBytes(bytes);
            if (decoded.duration > MAX_SEC + 0.01) throw Error('err_limit');
            if (decoded.numberOfChannels < 1) throw Error('err_format');
            progress(base + 18, 'trim');
            await yieldUi();
            const trimmed = trimIntro(decoded, intro);
            const blob = writeWav(trimmed.channels, trimmed.rate);
            if (!blob.size) throw Error('err_format');
            let entry = stemName(file.name) + '.wav';
            let n = 2;
            while (zip.file(entry)){
              entry = stemName(file.name) + '-' + n + '.wav';
              n++;
            }
            zip.file(entry, blob);
            ok++;
          } catch (e) {
            failCount++;
            $('btCurrent').textContent = file.name + ': ' + (M[e && e.message] || M.failed);
            await yieldUi();
          }
        }
        if (!ok) throw Error('failed');
        progress(96, 'pack');
        await yieldUi();
        const zipBlob = await zip.generateAsync({ type: 'blob' });
        if (!zipBlob.size) throw Error('err_zip');
        outputUrl = URL.createObjectURL(zipBlob);
        $('btOutput').hidden = false;
        const introStr = intro.toFixed(1);
        $('btResult').textContent = failCount
          ? fill(M.partial, { ok, fail: failCount, intro: introStr })
          : fill(M.result, { n: ok, intro: introStr, output: (zipBlob.size / 1024).toFixed(1) });
        progress(100, 'done');
        hud.classList.remove('is-on');
        hud.classList.add('is-done');
      } catch (e) {
        discard();
        fail(e && M[e.message] ? e.message : 'failed');
      } finally {
        clearInterval(timer);
        clock();
        lock(false);
      }
    }
    /**
     * 合成一段立体声纯音 WAV 样例。
     * @param {number} freqL 左声道频率 Hz
     * @param {number} freqR 右声道频率 Hz
     * @param {string} name 文件名
     * @returns {File}
     */
    function sampleWav(freqL, freqR, name){
      const rate = 44100;
      const seconds = 5;
      const frames = rate * seconds;
      const left = new Float32Array(frames);
      const right = new Float32Array(frames);
      for (let i = 0; i < frames; i++){
        const t = i / rate;
        const fade = Math.min(1, i / 2205, (frames - i) / 2205);
        left[i] = Math.sin(2 * Math.PI * freqL * t) * 0.22 * fade;
        right[i] = Math.sin(2 * Math.PI * freqR * t) * 0.22 * fade;
      }
      const blob = writeWav([left, right], rate);
      return new File([blob], name, { type: 'audio/wav' });
    }
    /** 加载两段样例 WAV 并立即裁剪。 */
    async function loadSample(){
      if (busy) return;
      introInput.value = '1';
      queue = [
        sampleWav(440, 660, M.sample_name + '-1.wav'),
        sampleWav(523, 784, M.sample_name + '-2.wav'),
      ];
      renderQueue();
      await convert();
    }
    fileInput.addEventListener('change', () => addFiles(fileInput.files));
    $('btDrop').addEventListener('dragover', event => event.preventDefault());
    $('btDrop').addEventListener('drop', event => {
      event.preventDefault();
      if (busy) return;
      addFiles(event.dataTransfer.files);
    });
    introInput.addEventListener('change', () => { discard(); hud.hidden = true; });
    $('btConvert').addEventListener('click', convert);
    $('btSample').addEventListener('click', loadSample);
    $('btClear').addEventListener('click', () => {
      if (busy) return;
      queue = [];
      discard();
      hud.hidden = true;
      renderQueue();
    });
    $('btDownload').addEventListener('click', () => {
      if (!outputUrl || busy) return;
      const link = document.createElement('a');
      link.href = outputUrl;
      link.download = 'trimmed-intros.zip';
      document.body.appendChild(link);
      link.click();
      link.remove();
    });
    window.addEventListener('pagehide', () => {
      clearInterval(timer);
      if (outputUrl) URL.revokeObjectURL(outputUrl);
    });
    renderQueue();
    loadSample();
  })();
</script>`;

	/** 当前工具 catalog 元数据。 */
	const toolMeta = getToolBySlug('batch-trim-the-same-intro-from-audio-files');
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
