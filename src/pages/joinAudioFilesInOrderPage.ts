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
const P = 'tool_join_audio_files_in_order';

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
 * 按列表顺序首尾相接多段音频并导出 16-bit WAV（F7 A2）。
 * 管线：多文件读 → decodeAudioData → 采样率/声道对齐 → 按序拼接 → 写 WAV。
 * ≠ overlay 混音（M1）；≠ 交叉淡化（M2）；≠ 视频抽音（A1）。
 * @param opts.lang 当前 UI 语言
 * @param opts.defaultLang 默认（无前缀）语言
 * @param opts.enabledLangs 启用语言列表
 */
export const renderJoinAudioFilesInOrderPage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	/** 工具规范路径（无语言前缀）。 */
	const toolPath = '/tools/join-audio-files-in-order';
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

	/** 侧栏占位（边缘注入真实 chrome）。 */
	const sidebarHtml = renderSidebar({
		title: t(opts.lang, 'nav_tools'),
		groups: buildToolSidebarItems({
			lang: opts.lang,
			defaultLang: opts.defaultLang,
			currentSlug: 'join-audio-files-in-order',
			currentAnchor: '#join-audio',
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

	/** 内联脚本用的 UI 消息键（未经 HTML 转义，由 JSON.stringify 注入）。 */
	const uiKeys = [
		'read',
		'decode',
		'join',
		'write',
		'done',
		'failed',
		'elapsed',
		'err_file',
		'err_format',
		'err_limit',
		'err_decode',
		'err_encoder',
		'sample_name',
		'result',
		'empty',
		'move_up',
		'move_down',
		'remove',
		'queue_count',
	];
	/** 消息字典：键 → 当前语言字符串。 */
	const messages = Object.fromEntries(uiKeys.map((key) => [key, t(opts.lang, `${P}_${key}`)]));

	/** 工具主面板与结果区 markup。 */
	const contentHtml = `
    <div id="join-audio" class="tool-page-heading mb-3"><h1 class="h4">${tr('title')}</h1><p>${tr('desc')}</p></div>
    <section class="tool-panel" id="jaPanel">
      <label class="tool-dropzone mb-3" id="jaDrop" for="jaFile"><input id="jaFile" type="file" multiple accept=".wav,.mp3,.m4a,.aac,.ogg,audio/*"><span class="tool-dropzone-title">${tr('choose')}</span><span class="tool-dropzone-hint">${tr('hint')}</span><span id="jaName" class="tool-dropzone-file"></span></label>
      <p class="form-label mb-1">${tr('list_label')}</p>
      <ul id="jaList" class="list-group mb-2 ja-list" aria-live="polite"></ul>
      <p id="jaQueueMeta" class="form-text mb-3">${tr('queue_count').replace('{n}', '0')}</p>
      <div class="tools-bar d-flex flex-wrap mb-3" style="gap:.5rem">
        <button id="jaConvert" class="btn btn-primary" type="button">${tr('convert')}</button>
        <button id="jaDownload" class="btn btn-outline-primary" type="button" disabled>${tr('download')}</button>
        <button id="jaSample" class="btn btn-outline-secondary" type="button">${tr('sample')}</button>
        <button id="jaClear" class="btn btn-outline-secondary" type="button">${tr('clear')}</button>
      </div>
      <details class="mb-3" open><summary>${tr('advanced')}</summary>
        <p class="form-text mt-2">${tr('settings_hint')}</p>
      </details>
      <div id="jaHud" class="bcw-hud mb-3" role="status" aria-live="polite" hidden>
        <div class="bcw-hud-top"><div class="bcw-hud-spin" aria-hidden="true"></div><div class="bcw-hud-pct" id="jaPct">0%</div><div class="bcw-hud-copy"><div class="bcw-hud-title">${tr('progress')}</div><div class="bcw-hud-step" id="jaStep"></div><div class="bcw-hud-time" id="jaTime"></div></div></div>
        <div class="progress" style="height:1.35rem"><div id="jaBar" class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div><span class="bcw-hud-sheen" aria-hidden="true"></span></div>
        <ol class="bcw-hud-steps"><li data-step="read">${tr('read')}</li><li data-step="decode">${tr('decode')}</li><li data-step="join">${tr('join')}</li><li data-step="write">${tr('write')}</li></ol><div class="bcw-hud-url" id="jaCurrent"></div>
      </div>
      <div id="jaEmpty" class="ja-empty mb-3" role="status">${tr('empty_state')}</div>
      <div id="jaOutput" hidden><h2 class="h5">${tr('preview')}</h2><p id="jaResult"></p><audio id="jaAudio" controls preload="metadata" style="max-width:100%" aria-label="${tr('preview')}"></audio></div>
    </section>`;

	/** How / Why / Rules / Use cases IG 块（本批 sound 强制更丰富条目数）。 */
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
				label: 'MDN: AudioBuffer',
				href: 'https://developer.mozilla.org/en-US/docs/Web/API/AudioBuffer',
			},
			{
				label: 'MDN: decodeAudioData',
				href: 'https://developer.mozilla.org/en-US/docs/Web/API/BaseAudioContext/decodeAudioData',
			},
		],
	});

	/** 金标 HUD、队列列表与布局补充样式。 */
	const extraHeadHtml = `<style>${bcwHudCss({ hudId: 'jaHud', convertBtnId: 'jaConvert' })}#jaHud.is-error{border-color:#b91c1c;background:#fff1f2}#jaHud:not(.is-on) .bcw-hud-spin{animation:none}.ja-list{gap:.35rem}.ja-list .list-group-item{display:flex;flex-wrap:wrap;align-items:center;gap:.4rem}.ja-list .ja-name{flex:1 1 10rem;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.ja-empty{padding:.75rem 1rem;border:1px dashed var(--border,#ced4da);border-radius:.5rem;color:var(--bs-secondary-color,#6c757d);font-size:.95rem}.site-footer nav.d-inline{display:inline-flex!important;flex-wrap:wrap;justify-content:center;max-width:100%}</style>`;

	/** 客户端拼接管线（读 → 解码 → 按序拼接 → 写 WAV）。 */
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
    /** 多文件输入。 */
    const fileInput = $('jaFile');
    /** 进度 HUD。 */
    const hud = $('jaHud');
    /** 预览 audio。 */
    const audio = $('jaAudio');
    /** 队列列表。 */
    const listEl = $('jaList');
    /** 队列元信息。 */
    const queueMeta = $('jaQueueMeta');
    /** 空状态提示。 */
    const emptyState = $('jaEmpty');
    /** HUD 步骤顺序。 */
    const STEPS = ['read','decode','join','write'];
    /** 单文件体积上限（字节）。 */
    const MAX_BYTES = 40 * 1024 * 1024;
    /** 最大文件数。 */
    const MAX_FILES = 20;
    /** 拼接后最大时长（秒）。 */
    const MAX_DURATION = 1200;
    /** 队列：{ name, file }。 */
    let items = [];
    /** 输出 object URL。 */
    let outputUrl = null;
    /** 是否忙。 */
    let busy = false;
    /** 计时器。 */
    let timer = null;
    /** 开始时间。 */
    let started = 0;
    /**
     * 用占位符填充文案。
     * @param {string} template 模板
     * @param {Record<string, string|number>} vars 变量
     */
    function fill(template, vars){
      return String(template || '').replace(/\\{(\\w+)\\}/g, (_, key) => (vars[key] != null ? String(vars[key]) : ''));
    }
    /** 让出主线程一帧，刷新 HUD。 */
    function yieldUi(){
      return new Promise(resolve => requestAnimationFrame(() => resolve()));
    }
    /** 丢弃旧输出。 */
    function discard(){
      if (outputUrl){ URL.revokeObjectURL(outputUrl); outputUrl = null; }
      audio.removeAttribute('src');
      audio.load();
      $('jaOutput').hidden = true;
      $('jaResult').textContent = '';
      $('jaDownload').disabled = true;
    }
    /**
     * 锁定或解锁控件。
     * @param {boolean} on 是否锁定
     */
    function lock(on){
      busy = on;
      $('jaConvert').disabled = on;
      $('jaSample').disabled = on;
      $('jaClear').disabled = on;
      fileInput.disabled = on;
      listEl.querySelectorAll('button').forEach(btn => { btn.disabled = on; });
      if (!on) $('jaDownload').disabled = !outputUrl;
    }
    /**
     * 更新 HUD 百分比与步骤高亮。
     * @param {number} pct 百分比
     * @param {string} stepKey 步骤键或 done
     */
    function progress(pct, stepKey){
      const value = Math.max(0, Math.min(100, Math.round(pct)));
      $('jaPct').textContent = value + '%';
      $('jaBar').style.width = value + '%';
      $('jaBar').setAttribute('aria-valuenow', String(value));
      const label = stepKey === 'done' ? M.done : (M[stepKey] || stepKey);
      $('jaStep').textContent = label;
      hud.querySelectorAll('.bcw-hud-steps li').forEach(li => {
        const name = li.getAttribute('data-step');
        li.classList.toggle('is-active', name === stepKey);
        li.classList.toggle('is-done', STEPS.indexOf(name) < STEPS.indexOf(stepKey) || stepKey === 'done');
      });
    }
    /**
     * 以错误态显示失败。
     * @param {string} key 消息键
     */
    function fail(key){
      hud.hidden = false;
      hud.className = 'bcw-hud is-error is-fail mb-3';
      $('jaPct').textContent = '—';
      $('jaBar').style.width = '0%';
      $('jaBar').setAttribute('aria-valuenow', '0');
      hud.setAttribute('role', 'alert');
      $('jaStep').textContent = M[key] || M.failed;
    }
    /**
     * 是否为浏览器可尝试解码的常见音频。
     * @param {File} file 候选文件
     */
    function isAudio(file){
      return file && (/\\.(wav|mp3|m4a|aac|ogg)$/i.test(file.name) || (file.type && file.type.indexOf('audio/') === 0));
    }
    /** 刷新队列 UI 与元信息。 */
    function renderList(){
      listEl.innerHTML = '';
      items.forEach((it, idx) => {
        const li = document.createElement('li');
        li.className = 'list-group-item p-2';
        const name = document.createElement('span');
        name.className = 'ja-name';
        name.textContent = (idx + 1) + '. ' + it.name;
        /**
         * 创建队列操作按钮。
         * @param {string} action 动作名
         * @param {string} label 按钮文案
         * @param {string} cls 额外 class
         * @param {boolean} disabled 是否禁用
         */
        const makeBtn = (action, label, cls, disabled) => {
          const btn = document.createElement('button');
          btn.type = 'button';
          btn.className = 'btn btn-sm ' + cls;
          btn.textContent = label;
          btn.dataset.action = action;
          btn.dataset.index = String(idx);
          btn.disabled = !!disabled || busy;
          return btn;
        };
        li.appendChild(name);
        li.appendChild(makeBtn('up', M.move_up, 'btn-outline-secondary', idx === 0));
        li.appendChild(makeBtn('down', M.move_down, 'btn-outline-secondary', idx === items.length - 1));
        li.appendChild(makeBtn('remove', M.remove, 'btn-outline-danger', false));
        listEl.appendChild(li);
      });
      queueMeta.textContent = fill(M.queue_count, { n: items.length });
      $('jaName').textContent = items.length ? items.map(it => it.name).join(', ') : '';
      if (emptyState) emptyState.hidden = items.length > 0;
    }
    /**
     * 追加文件到队列（不清空已有项）。
     * @param {FileList|File[]} fileList 新文件
     */
    function addFiles(fileList){
      if (busy || !fileList || !fileList.length) return;
      discard();
      hud.hidden = true;
      const arr = Array.prototype.slice.call(fileList);
      for (let i = 0; i < arr.length; i++){
        const file = arr[i];
        if (!isAudio(file)){ fail('err_format'); return; }
        if (file.size > MAX_BYTES){ fail('err_limit'); return; }
        if (items.length >= MAX_FILES){ fail('err_limit'); return; }
        items.push({ name: file.name || ('clip-' + (items.length + 1)), file: file });
      }
      fileInput.value = '';
      renderList();
    }
    /** 清空队列与输出。 */
    function clearAll(){
      if (busy) return;
      items = [];
      discard();
      hud.hidden = true;
      fileInput.value = '';
      renderList();
    }
    listEl.addEventListener('click', event => {
      const t = event.target;
      if (!t || !t.dataset || busy) return;
      const action = t.dataset.action;
      const index = Number(t.dataset.index);
      if (!Number.isFinite(index)) return;
      discard();
      hud.hidden = true;
      if (action === 'remove'){
        items.splice(index, 1);
      } else if (action === 'up' && index > 0){
        const tmp = items[index - 1];
        items[index - 1] = items[index];
        items[index] = tmp;
      } else if (action === 'down' && index < items.length - 1){
        const tmp = items[index + 1];
        items[index + 1] = items[index];
        items[index] = tmp;
      } else {
        return;
      }
      renderList();
    });
    /**
     * 将 AudioBuffer 重采样到目标采样率并规范为 1–2 声道。
     * @param {AudioBuffer} buffer 源缓冲
     * @param {number} targetRate 目标采样率
     * @param {number} targetCh 目标声道数（1 或 2）
     * @returns {Promise<AudioBuffer>}
     */
    async function alignBuffer(buffer, targetRate, targetCh){
      const ch = Math.min(2, Math.max(1, targetCh));
      const rate = Math.round(targetRate);
      const frames = Math.max(1, Math.ceil(buffer.duration * rate));
      const Offline = window.OfflineAudioContext || window.webkitOfflineAudioContext;
      if (!Offline) throw Error('err_decode');
      const ctx = new Offline(ch, frames, rate);
      const src = ctx.createBufferSource();
      /** 若声道数不匹配，先拷贝到临时缓冲。 */
      let playBuf = buffer;
      if (buffer.numberOfChannels !== ch || Math.round(buffer.sampleRate) !== rate){
        const tmp = ctx.createBuffer(ch, buffer.length, buffer.sampleRate);
        for (let c = 0; c < ch; c++){
          const srcCh = buffer.getChannelData(Math.min(c, buffer.numberOfChannels - 1));
          tmp.copyToChannel(srcCh, c);
        }
        playBuf = tmp;
      }
      src.buffer = playBuf;
      src.connect(ctx.destination);
      src.start(0);
      return ctx.startRendering();
    }
    /**
     * 将 float 声道写成 16-bit little-endian PCM WAV。
     * @param {Float32Array[]} channels 声道样本
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
     * 合成短纯音 WAV File（样例用）。
     * @param {number} freqHz 频率
     * @param {number} seconds 时长
     * @param {string} name 文件名
     * @returns {File}
     */
    function makeToneWav(freqHz, seconds, name){
      const rate = 44100;
      const frames = Math.round(rate * seconds);
      const data = new Float32Array(frames);
      for (let i = 0; i < frames; i++){
        const t = i / rate;
        const env = t < 0.02 ? t / 0.02 : (t > seconds - 0.04 ? Math.max(0, (seconds - t) / 0.04) : 1);
        data[i] = Math.sin(2 * Math.PI * freqHz * t) * 0.22 * env;
      }
      const blob = writeWav([data], rate);
      return new File([blob], name, { type: 'audio/wav' });
    }
    /** 主拼接：Read → Decode → Join → Write。 */
    async function join(){
      if (busy) return;
      if (items.length < 2){ fail('empty'); return; }
      discard();
      lock(true);
      hud.hidden = false;
      hud.className = 'bcw-hud is-on mb-3';
      hud.setAttribute('role', 'status');
      $('jaCurrent').textContent = items.map(it => it.name).join(' → ');
      started = performance.now();
      /**
       * 刷新已用时间文案。
       */
      const clock = () => {
        $('jaTime').textContent = fill(M.elapsed, { s: ((performance.now() - started) / 1000).toFixed(1) });
      };
      clock();
      timer = setInterval(clock, 100);
      try {
        progress(2, 'read');
        await yieldUi();
        const Offline = window.OfflineAudioContext || window.webkitOfflineAudioContext;
        if (!Offline) throw Error('err_decode');
        /** @type {AudioBuffer[]} */
        const decodedList = [];
        for (let i = 0; i < items.length; i++){
          const it = items[i];
          if (!isAudio(it.file)) throw Error('err_format');
          if (it.file.size > MAX_BYTES) throw Error('err_limit');
          progress(4 + (i / items.length) * 28, 'read');
          await yieldUi();
          const bytes = await it.file.arrayBuffer();
          progress(32 + (i / items.length) * 28, 'decode');
          await yieldUi();
          let decoded;
          try {
            decoded = await new Offline(1, 1, 44100).decodeAudioData(bytes.slice(0));
          } catch (e) {
            throw Error('err_decode');
          }
          if (!decoded || !decoded.length) throw Error('err_decode');
          if (decoded.numberOfChannels < 1 || decoded.numberOfChannels > 8) throw Error('err_limit');
          decodedList.push(decoded);
        }
        progress(62, 'join');
        await yieldUi();
        const targetRate = Math.round(decodedList[0].sampleRate) || 44100;
        let targetCh = 1;
        for (let i = 0; i < decodedList.length; i++){
          if (decodedList[i].numberOfChannels >= 2) targetCh = 2;
        }
        targetCh = Math.min(2, targetCh);
        /** @type {AudioBuffer[]} */
        const aligned = [];
        let totalFrames = 0;
        for (let i = 0; i < decodedList.length; i++){
          progress(62 + (i / decodedList.length) * 18, 'join');
          await yieldUi();
          const buf = await alignBuffer(decodedList[i], targetRate, targetCh);
          aligned.push(buf);
          totalFrames += buf.length;
        }
        if (totalFrames / targetRate > MAX_DURATION + 0.01) throw Error('err_limit');
        /** 拼接声道数据。 */
        const channels = [];
        for (let c = 0; c < targetCh; c++){
          const out = new Float32Array(totalFrames);
          let offset = 0;
          for (let i = 0; i < aligned.length; i++){
            out.set(aligned[i].getChannelData(Math.min(c, aligned[i].numberOfChannels - 1)), offset);
            offset += aligned[i].length;
          }
          channels.push(out);
        }
        progress(84, 'write');
        await yieldUi();
        const blob = writeWav(channels, targetRate);
        if (!blob.size) throw Error('err_encoder');
        outputUrl = URL.createObjectURL(blob);
        audio.src = outputUrl;
        $('jaOutput').hidden = false;
        $('jaResult').textContent = fill(M.result, {
          files: items.length,
          seconds: (totalFrames / targetRate).toFixed(2),
          channels: targetCh,
          rate: targetRate,
          output: (blob.size / 1024).toFixed(1)
        });
        progress(100, 'done');
        hud.classList.remove('is-on');
        hud.classList.add('is-done');
        if (emptyState) emptyState.hidden = true;
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
     * 加载两段短音样例并运行拼接（门禁要求存在 loadSample；不在首屏自动播放）。
     */
    async function loadSample(){
      if (busy) return;
      try {
        const base = M.sample_name || 'join-tone';
        const a = makeToneWav(440, 0.55, base + '-a.wav');
        const b = makeToneWav(660, 0.55, base + '-b.wav');
        items = [];
        discard();
        hud.hidden = true;
        addFiles([a, b]);
        await join();
      } catch (e) {
        clearAll();
        fail(e && M[e.message] ? e.message : 'failed');
      }
    }
    fileInput.addEventListener('change', () => addFiles(fileInput.files));
    $('jaDrop').addEventListener('dragover', event => event.preventDefault());
    $('jaDrop').addEventListener('drop', event => {
      event.preventDefault();
      if (busy) return;
      const files = event.dataTransfer && event.dataTransfer.files;
      addFiles(files);
    });
    $('jaConvert').addEventListener('click', join);
    $('jaSample').addEventListener('click', loadSample);
    $('jaClear').addEventListener('click', clearAll);
    $('jaDownload').addEventListener('click', () => {
      if (!outputUrl || busy) return;
      const link = document.createElement('a');
      link.href = outputUrl;
      link.download = 'joined-audio.wav';
      document.body.appendChild(link);
      link.click();
      link.remove();
    });
    window.addEventListener('pagehide', () => {
      clearInterval(timer);
      if (outputUrl) URL.revokeObjectURL(outputUrl);
    });
    renderList();
  })();
</script>`;

	/** catalog 元数据（related / schema）。 */
	const toolMeta = getToolBySlug('join-audio-files-in-order');
	/** related 等扩展区块。 */
	const extraSectionsHtml = toolMeta
		? renderToolExtraSections({ lang: opts.lang, defaultLang: opts.defaultLang, tool: toolMeta })
		: '';
	/** WebApplication + BreadcrumbList JSON-LD。 */
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
