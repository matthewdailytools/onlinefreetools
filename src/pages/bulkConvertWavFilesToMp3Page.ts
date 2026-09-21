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
const P = 'tool_bulk_convert_wav_files_to_mp3';

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
 * 批量把本地 WAV 转成 MP3 并打成 ZIP（hub A8）。
 * 管线：多文件队列 → 每文件 inspectWav / decodeAudioData / lamejs → JSZip。
 * ≠ 单文件 WAV→MP3；≠ FLAC/OGG 批量矩阵。
 * @param opts.lang 当前 UI 语言
 * @param opts.defaultLang 默认（无前缀）语言
 * @param opts.enabledLangs 启用语言列表
 */
export const renderBulkConvertWavFilesToMp3Page = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	/** 工具规范路径（无语言前缀）。 */
	const toolPath = '/tools/bulk-convert-wav-files-to-mp3';
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
			currentSlug: 'bulk-convert-wav-files-to-mp3',
			currentAnchor: '#bulk-wav-mp3',
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
		'encode',
		'pack',
		'done',
		'failed',
		'elapsed',
		'err_file',
		'err_format',
		'err_limit',
		'err_decode',
		'err_encoder',
		'err_zip',
		'err_too_many',
		'sample_name',
		'result',
		'empty',
		'remove',
		'queue_count',
		'partial',
	];
	/** 消息字典：键 → 当前语言字符串。 */
	const messages = Object.fromEntries(uiKeys.map((key) => [key, t(opts.lang, `${P}_${key}`)]));

	/** 工具主面板与结果区 markup。 */
	const contentHtml = `
    <div id="bulk-wav-mp3" class="tool-page-heading mb-3"><h1 class="h4">${tr('title')}</h1><p>${tr('desc')}</p></div>
    <section class="tool-panel" id="bwPanel">
      <label class="tool-dropzone mb-3" id="bwDrop" for="bwFile"><input id="bwFile" type="file" multiple accept=".wav,.wave,audio/wav,audio/x-wav"><span class="tool-dropzone-title">${tr('choose')}</span><span class="tool-dropzone-hint">${tr('hint')}</span><span id="bwName" class="tool-dropzone-file"></span></label>
      <p class="form-label mb-1">${tr('list_label')}</p>
      <ul id="bwList" class="list-group mb-2 bw-list" aria-live="polite"></ul>
      <p id="bwQueueMeta" class="form-text mb-3">${tr('queue_count').replace('{n}', '0')}</p>
      <div class="tools-bar d-flex flex-wrap mb-3" style="gap:.5rem">
        <button id="bwConvert" class="btn btn-primary" type="button">${tr('convert')}</button>
        <button id="bwDownload" class="btn btn-outline-primary" type="button" disabled>${tr('download')}</button>
        <button id="bwSample" class="btn btn-outline-secondary" type="button">${tr('sample')}</button>
        <button id="bwClear" class="btn btn-outline-secondary" type="button">${tr('clear')}</button>
      </div>
      <details class="mb-3"><summary>${tr('advanced')}</summary><label for="bwBitrate" class="form-label mt-2">${tr('bitrate')}</label><select id="bwBitrate" class="form-select form-select-sm"><option value="128">128 kbps</option><option value="192" selected>192 kbps</option><option value="320">320 kbps</option></select><p class="form-text">${tr('settings_hint')}</p></details>
      <div id="bwHud" class="bcw-hud mb-3" role="status" aria-live="polite" hidden>
        <div class="bcw-hud-top"><div class="bcw-hud-spin" aria-hidden="true"></div><div class="bcw-hud-pct" id="bwPct">0%</div><div class="bcw-hud-copy"><div class="bcw-hud-title">${tr('progress')}</div><div class="bcw-hud-step" id="bwStep"></div><div class="bcw-hud-time" id="bwTime"></div></div></div>
        <div class="progress" style="height:1.35rem"><div id="bwBar" class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div><span class="bcw-hud-sheen" aria-hidden="true"></span></div>
        <ol class="bcw-hud-steps"><li data-step="read">${tr('read')}</li><li data-step="decode">${tr('decode')}</li><li data-step="encode">${tr('encode')}</li><li data-step="pack">${tr('pack')}</li></ol><div class="bcw-hud-url" id="bwCurrent"></div>
      </div>
      <div id="bwEmpty" class="bw-empty mb-3" role="status">${tr('empty_state')}</div>
      <div id="bwOutput" hidden><h2 class="h5">${tr('preview')}</h2><p id="bwResult"></p></div>
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
	const extraHeadHtml = `<style>${bcwHudCss({ hudId: 'bwHud', convertBtnId: 'bwConvert' })}#bwHud.is-error{border-color:#b91c1c;background:#fff1f2}#bwHud:not(.is-on) .bcw-hud-spin{animation:none}#bwBitrate{max-width:18rem}.bw-list{gap:.35rem}.bw-list .list-group-item{display:flex;flex-wrap:wrap;align-items:center;gap:.4rem}.bw-list .bw-name{flex:1 1 10rem;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.bw-empty{padding:.75rem 1rem;border:1px dashed var(--border,#ced4da);border-radius:.5rem;color:var(--bs-secondary-color,#6c757d);font-size:.95rem}.site-footer nav.d-inline{display:inline-flex!important;flex-wrap:wrap;justify-content:center;max-width:100%}</style>`;

	/** 客户端批量转换管线（读 → 解码 → 编码 → 打 ZIP）。 */
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
    const panel = $('bwPanel');
    /** 多文件输入。 */
    const fileInput = $('bwFile');
    /** 码率选择。 */
    const bitrate = $('bwBitrate');
    /** 进度 HUD。 */
    const hud = $('bwHud');
    /** 文件队列（File 对象）。 */
    let queue = [];
    /** 是否忙碌。 */
    let busy = false;
    /** ZIP 对象 URL。 */
    let outputUrl = '';
    /** lamejs 加载 Promise。 */
    let encoderPromise = null;
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
    /** 让出主线程一帧，保持 HUD 可更新。 */
    const yieldUi = () => new Promise(resolve => requestAnimationFrame(() => setTimeout(resolve, 0)));
    /**
     * 用命名占位符填充模板。
     * @param {string} text 模板
     * @param {Record<string, string|number>} values 替换表
     */
    const fill = (text, values) => text.replace(/{(\\w+)}/g, (_, key) => String(values[key] ?? ''));
    /** 丢弃已生成的 ZIP URL 并隐藏结果。 */
    function discard(){
      if(outputUrl) URL.revokeObjectURL(outputUrl);
      outputUrl = '';
      $('bwDownload').disabled = true;
      $('bwOutput').hidden = true;
    }
    /**
     * 锁定或解锁控件。
     * @param {boolean} on 是否锁定
     */
    function lock(on){
      busy = on;
      panel.querySelectorAll('button,input,select').forEach(el => { el.disabled = on; });
      $('bwDownload').disabled = on || !outputUrl;
      $('bwConvert').setAttribute('aria-busy', String(on));
    }
    /**
     * 更新进度条与步骤文案。
     * @param {number} pct 百分比
     * @param {string} step 步骤键
     */
    function progress(pct, step){
      $('bwPct').textContent = Math.round(pct) + '%';
      $('bwBar').style.width = pct + '%';
      $('bwBar').setAttribute('aria-valuenow', String(Math.round(pct)));
      $('bwStep').textContent = M[step];
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
      $('bwPct').textContent = '—';
      $('bwBar').style.width = '0%';
      $('bwBar').setAttribute('aria-valuenow', '0');
      hud.setAttribute('role', 'alert');
      $('bwStep').textContent = M[key] || M.failed;
    }
    /** 刷新队列列表与计数文案。 */
    function renderQueue(){
      const list = $('bwList');
      list.innerHTML = '';
      queue.forEach((file, idx) => {
        const li = document.createElement('li');
        li.className = 'list-group-item';
        const name = document.createElement('span');
        name.className = 'bw-name';
        name.textContent = file.name;
        const rm = document.createElement('button');
        rm.type = 'button';
        rm.className = 'btn btn-sm btn-outline-secondary';
        rm.textContent = M.remove;
        rm.addEventListener('click', () => {
          if(busy) return;
          queue.splice(idx, 1);
          discard();
          hud.hidden = true;
          renderQueue();
        });
        li.appendChild(name);
        li.appendChild(rm);
        list.appendChild(li);
      });
      $('bwQueueMeta').textContent = fill(M.queue_count, { n: queue.length });
      $('bwName').textContent = queue.length ? fill(M.queue_count, { n: queue.length }) : '';
      $('bwEmpty').hidden = queue.length > 0;
    }
    /**
     * 向队列追加文件（截断到上限）。
     * @param {FileList|File[]} files 候选文件
     */
    function addFiles(files){
      if(busy) return;
      discard();
      hud.hidden = true;
      const list = Array.prototype.slice.call(files || []);
      for(let i = 0; i < list.length; i++){
        if(queue.length >= MAX_FILES){
          fail('err_too_many');
          break;
        }
        queue.push(list[i]);
      }
      fileInput.value = '';
      renderQueue();
    }
    /**
     * 校验 RIFF/WAVE 并返回 fmt 信息。
     * @param {ArrayBuffer} bytes WAV 字节
     */
    function inspectWav(bytes){
      const v = new DataView(bytes), n = v.byteLength;
      const tag = at => String.fromCharCode(v.getUint8(at), v.getUint8(at+1), v.getUint8(at+2), v.getUint8(at+3));
      if(n < 44 || tag(0) !== 'RIFF' || tag(8) !== 'WAVE') throw Error('err_format');
      const end = v.getUint32(4, true) + 8;
      if(end > n || end < 44) throw Error('err_format');
      let fmt = null, dataSize = 0, dataSeen = false;
      for(let p = 12; p + 8 <= end;){
        const type = tag(p), size = v.getUint32(p + 4, true), start = p + 8;
        if(start + size > end) throw Error('err_format');
        if(type === 'fmt '){
          if(fmt || size < 16) throw Error('err_format');
          fmt = {
            code: v.getUint16(start, true),
            channels: v.getUint16(start + 2, true),
            rate: v.getUint32(start + 4, true),
            byteRate: v.getUint32(start + 8, true),
            align: v.getUint16(start + 12, true),
            bits: v.getUint16(start + 14, true),
          };
        }
        if(type === 'data'){
          if(dataSeen) throw Error('err_format');
          dataSeen = true;
          dataSize = size;
        }
        p = start + size + (size % 2);
      }
      if(!fmt || !dataSize || ![1, 2].includes(fmt.channels) || fmt.rate < 8000 || fmt.rate > 192000) throw Error('err_format');
      if(!((fmt.code === 1 && [8, 16, 24, 32].includes(fmt.bits)) || (fmt.code === 3 && fmt.bits === 32))) throw Error('err_format');
      if(fmt.align !== fmt.channels * fmt.bits / 8 || fmt.byteRate !== fmt.rate * fmt.align || dataSize % fmt.align) throw Error('err_format');
      const duration = dataSize / fmt.byteRate;
      if(duration > MAX_SEC) throw Error('err_limit');
      return Object.assign({}, fmt, { duration });
    }
    /** 懒加载 lamejs。 */
    function loadEncoder(){
      if(window.lamejs) return Promise.resolve(window.lamejs);
      if(!encoderPromise){
        encoderPromise = new Promise((resolve, reject) => {
          const script = document.createElement('script');
          let timeout;
          const bad = () => {
            clearTimeout(timeout);
            script.remove();
            encoderPromise = null;
            reject(Error('err_encoder'));
          };
          script.src = '/vendor/lamejs/lamejs.iife.js';
          script.onerror = bad;
          script.onload = () => {
            clearTimeout(timeout);
            if(window.lamejs) resolve(window.lamejs);
            else bad();
          };
          timeout = setTimeout(bad, 20000);
          document.head.appendChild(script);
        });
      }
      return encoderPromise;
    }
    /** 懒加载 JSZip。 */
    function loadJsZip(){
      if(window.JSZip) return Promise.resolve(window.JSZip);
      if(!zipPromise){
        zipPromise = new Promise((resolve, reject) => {
          const script = document.createElement('script');
          let timeout;
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
            if(window.JSZip) resolve(window.JSZip);
            else bad();
          };
          timeout = setTimeout(bad, 20000);
          document.head.appendChild(script);
        });
      }
      return zipPromise;
    }
    /**
     * 将 AudioBuffer 编码为 MP3 Blob。
     * @param {AudioBuffer} decoded 解码缓冲
     * @param {number} channels 声道数
     * @param {number} kbps 码率
     * @param {*} lame lamejs 命名空间
     * @param {function(number):void} onProg 编码进度回调（0–1）
     */
    async function bufferToMp3(decoded, channels, kbps, lame, onProg){
      const encoder = new lame.Mp3Encoder(channels, 44100, kbps);
      const parts = [];
      const left = decoded.getChannelData(0);
      const right = channels === 2 ? decoded.getChannelData(1) : null;
      /**
       * float PCM → Int16 切片。
       * @param {Float32Array} data 声道数据
       * @param {number} start 起始样本
       * @param {number} end 结束样本
       */
      const pcm = (data, start, end) => {
        const out = new Int16Array(end - start);
        for(let i = start; i < end; i++){
          const value = Number.isFinite(data[i]) ? Math.max(-1, Math.min(1, data[i])) : 0;
          out[i - start] = Math.round(value * (value < 0 ? 32768 : 32767));
        }
        return out;
      };
      let last = performance.now();
      for(let start = 0; start < decoded.length; start += 1152){
        const end = Math.min(start + 1152, decoded.length);
        const l = pcm(left, start, end);
        const chunk = right ? encoder.encodeBuffer(l, pcm(right, start, end)) : encoder.encodeBuffer(l);
        if(chunk.length) parts.push(new Uint8Array(chunk));
        if(performance.now() - last > 40){
          onProg(end / decoded.length);
          await yieldUi();
          last = performance.now();
        }
      }
      const final = encoder.flush();
      if(final.length) parts.push(new Uint8Array(final));
      const blob = new Blob(parts, { type: 'audio/mpeg' });
      if(!blob.size) throw Error('err_encoder');
      return blob;
    }
    /**
     * 安全文件名主干（去扩展名）。
     * @param {string} name 原文件名
     */
    function stemName(name){
      return (name || 'audio').replace(/\\.[^.]+$/, '').replace(/[^\\w\\u4e00-\\u9fff.-]+/g, '_') || 'audio';
    }
    /** 执行整批转换并生成 ZIP。 */
    async function convert(){
      if(busy) return;
      discard();
      if(!queue.length){ fail('empty'); return; }
      lock(true);
      hud.hidden = false;
      hud.className = 'bcw-hud is-on mb-3';
      hud.setAttribute('role', 'status');
      started = performance.now();
      const clock = () => {
        $('bwTime').textContent = fill(M.elapsed, { s: ((performance.now() - started) / 1000).toFixed(1) });
      };
      clock();
      timer = setInterval(clock, 100);
      let ok = 0;
      let failCount = 0;
      try{
        const kbps = Number(bitrate.value);
        if(![128, 192, 320].includes(kbps)) throw Error('err_encoder');
        const lame = await loadEncoder();
        const JSZip = await loadJsZip();
        const zip = new JSZip();
        const Offline = window.OfflineAudioContext || window.webkitOfflineAudioContext;
        if(!Offline) throw Error('err_decode');
        const total = queue.length;
        for(let i = 0; i < total; i++){
          const file = queue[i];
          $('bwCurrent').textContent = file.name + ' (' + (i + 1) + '/' + total + ')';
          const base = 5 + (90 * i) / total;
          try{
            progress(base, 'read');
            await yieldUi();
            if(file.size > MAX_BYTES) throw Error('err_limit');
            const bytes = await file.arrayBuffer();
            const info = inspectWav(bytes);
            progress(base + 5, 'decode');
            await yieldUi();
            let decoded;
            try{
              decoded = await new Offline(info.channels, 1, 44100).decodeAudioData(bytes.slice(0));
            }catch(e){
              throw Error('err_decode');
            }
            if(decoded.duration > MAX_SEC + 0.01 || decoded.numberOfChannels !== info.channels) throw Error('err_limit');
            progress(base + 12, 'encode');
            await yieldUi();
            const blob = await bufferToMp3(decoded, info.channels, kbps, lame, frac => {
              progress(base + 12 + frac * ((90 / total) - 20), 'encode');
            });
            let entry = stemName(file.name) + '.mp3';
            let n = 2;
            while(zip.file(entry)){
              entry = stemName(file.name) + '-' + n + '.mp3';
              n++;
            }
            zip.file(entry, blob);
            ok++;
          }catch(e){
            failCount++;
            $('bwCurrent').textContent = file.name + ': ' + (M[e && e.message] || M.failed);
            await yieldUi();
          }
        }
        if(!ok) throw Error('failed');
        progress(96, 'pack');
        await yieldUi();
        const zipBlob = await zip.generateAsync({ type: 'blob' });
        if(!zipBlob.size) throw Error('err_zip');
        outputUrl = URL.createObjectURL(zipBlob);
        $('bwOutput').hidden = false;
        $('bwResult').textContent = failCount
          ? fill(M.partial, { ok, fail: failCount, kbps })
          : fill(M.result, { n: ok, kbps, output: (zipBlob.size / 1024).toFixed(1) });
        progress(100, 'done');
        hud.classList.remove('is-on');
        hud.classList.add('is-done');
      }catch(e){
        discard();
        fail(e && M[e.message] ? e.message : 'failed');
      }finally{
        clearInterval(timer);
        clock();
        lock(false);
      }
    }
    /**
     * 合成一段短立体声 WAV。
     * @param {number} freqL 左声道频率
     * @param {number} freqR 右声道频率
     * @param {string} name 文件名
     */
    function sampleWav(freqL, freqR, name){
      const rate = 44100, frames = rate * 5, bytes = new ArrayBuffer(44 + frames * 4), v = new DataView(bytes);
      const str = (at, text) => { for(let i = 0; i < text.length; i++) v.setUint8(at + i, text.charCodeAt(i)); };
      str(0, 'RIFF'); v.setUint32(4, bytes.byteLength - 8, true); str(8, 'WAVE');
      str(12, 'fmt '); v.setUint32(16, 16, true); v.setUint16(20, 1, true); v.setUint16(22, 2, true);
      v.setUint32(24, rate, true); v.setUint32(28, rate * 4, true); v.setUint16(32, 4, true); v.setUint16(34, 16, true);
      str(36, 'data'); v.setUint32(40, frames * 4, true);
      for(let i = 0; i < frames; i++){
        const fade = Math.min(1, i / 2205, (frames - i) / 2205);
        v.setInt16(44 + i * 4, Math.sin(2 * Math.PI * freqL * i / rate) * 6500 * fade, true);
        v.setInt16(46 + i * 4, Math.sin(2 * Math.PI * freqR * i / rate) * 6500 * fade, true);
      }
      return new File([bytes], name, { type: 'audio/wav' });
    }
    /** 加载两段样例 WAV 并立即转换。 */
    async function loadSample(){
      if(busy) return;
      bitrate.value = '192';
      queue = [
        sampleWav(440, 660, M.sample_name + '-1.wav'),
        sampleWav(523, 784, M.sample_name + '-2.wav'),
      ];
      renderQueue();
      await convert();
    }
    fileInput.addEventListener('change', () => addFiles(fileInput.files));
    $('bwDrop').addEventListener('dragover', event => event.preventDefault());
    $('bwDrop').addEventListener('drop', event => {
      event.preventDefault();
      if(busy) return;
      addFiles(event.dataTransfer.files);
    });
    bitrate.addEventListener('change', () => { discard(); hud.hidden = true; });
    $('bwConvert').addEventListener('click', convert);
    $('bwSample').addEventListener('click', loadSample);
    $('bwClear').addEventListener('click', () => {
      if(busy) return;
      queue = [];
      discard();
      hud.hidden = true;
      renderQueue();
    });
    $('bwDownload').addEventListener('click', () => {
      if(!outputUrl || busy) return;
      const link = document.createElement('a');
      link.href = outputUrl;
      link.download = 'wav-to-mp3.zip';
      document.body.appendChild(link);
      link.click();
      link.remove();
    });
    window.addEventListener('pagehide', () => {
      clearInterval(timer);
      if(outputUrl) URL.revokeObjectURL(outputUrl);
    });
    renderQueue();
    loadSample();
  })();
</script>`;

	/** 当前工具 catalog 元数据。 */
	const toolMeta = getToolBySlug('bulk-convert-wav-files-to-mp3');
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
