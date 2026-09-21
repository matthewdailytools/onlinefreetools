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
const P = 'tool_generate_dtmf_touch_tones';

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
 * 按键盘序列生成 DTMF 拨号音并导出 16-bit WAV（F9 G6）。
 * 管线：按键/序列 → ITU-T 行列双音合成 → 写 WAV。
 * ≠ 单正弦频率（G5）；≠ 短 UI 提示音（G12）；≠ 真实外呼。
 * @param opts.lang 当前 UI 语言
 * @param opts.defaultLang 默认（无前缀）语言
 * @param opts.enabledLangs 启用语言列表
 */
export const renderGenerateDtmfTouchTonesPage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	/** 工具规范路径（无语言前缀）。 */
	const toolPath = '/tools/generate-dtmf-touch-tones';
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
			currentSlug: 'generate-dtmf-touch-tones',
			currentAnchor: '#dtmf-tones',
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
		'synth',
		'write',
		'done',
		'failed',
		'elapsed',
		'err_seq',
		'err_limit',
		'err_encoder',
		'sample_name',
		'result',
		'empty',
	];
	/** 消息字典：键 → 当前语言字符串。 */
	const messages = Object.fromEntries(uiKeys.map((key) => [key, t(opts.lang, `${P}_${key}`)]));

	/** 键盘按键布局（显示标签与 data-key 一致）。 */
	const keypadRows = [
		['1', '2', '3', 'A'],
		['4', '5', '6', 'B'],
		['7', '8', '9', 'C'],
		['*', '0', '#', 'D'],
	];
	/** 键盘按钮 markup。 */
	const keypadHtml = keypadRows
		.map(
			(row) =>
				`<div class="dtmf-row">${row
					.map(
						(k) =>
							`<button type="button" class="btn btn-sm btn-outline-secondary dtmf-key" data-key="${escapeHtml(k)}" aria-label="${escapeHtml(k)}">${escapeHtml(k)}</button>`
					)
					.join('')}</div>`
		)
		.join('');

	/** 工具主面板与结果区 markup。 */
	const contentHtml = `
    <div id="dtmf-tones" class="tool-page-heading mb-3"><h1 class="h4">${tr('title')}</h1><p>${tr('desc')}</p></div>
    <section class="tool-panel" id="dtmfPanel">
      <div class="mb-2">
        <label class="form-label" for="dtmfSeq">${tr('seq_label')}</label>
        <input id="dtmfSeq" class="form-control font-monospace" type="text" value="" maxlength="64" autocomplete="off" spellcheck="false" inputmode="text" aria-describedby="dtmfSeqHint">
        <p class="form-text mb-0" id="dtmfSeqHint">${tr('seq_hint')}</p>
      </div>
      <p class="form-label mb-1">${tr('keypad_label')}</p>
      <div class="dtmf-pad mb-3" id="dtmfPad" role="group" aria-label="${tr('keypad_label')}">${keypadHtml}</div>
      <p class="form-label mb-1">${tr('tone_dur_label')}</p>
      <div class="dtmf-tone-chips mb-3" id="dtmfToneChips" role="group" aria-label="${tr('tone_dur_label')}">
        <button type="button" class="btn btn-sm btn-outline-secondary" data-ms="80" aria-pressed="false">80ms</button>
        <button type="button" class="btn btn-sm btn-primary" data-ms="100" aria-pressed="true">100ms</button>
        <button type="button" class="btn btn-sm btn-outline-secondary" data-ms="150" aria-pressed="false">150ms</button>
        <button type="button" class="btn btn-sm btn-outline-secondary" data-ms="200" aria-pressed="false">200ms</button>
      </div>
      <p class="form-label mb-1">${tr('gap_dur_label')}</p>
      <div class="dtmf-gap-chips mb-3" id="dtmfGapChips" role="group" aria-label="${tr('gap_dur_label')}">
        <button type="button" class="btn btn-sm btn-outline-secondary" data-ms="40" aria-pressed="false">40ms</button>
        <button type="button" class="btn btn-sm btn-primary" data-ms="50" aria-pressed="true">50ms</button>
        <button type="button" class="btn btn-sm btn-outline-secondary" data-ms="80" aria-pressed="false">80ms</button>
        <button type="button" class="btn btn-sm btn-outline-secondary" data-ms="100" aria-pressed="false">100ms</button>
      </div>
      <div class="tools-bar d-flex flex-wrap mb-3" style="gap:.5rem">
        <button id="dtmfConvert" class="btn btn-primary" type="button">${tr('convert')}</button>
        <button id="dtmfDownload" class="btn btn-outline-primary" type="button" disabled>${tr('download')}</button>
        <button id="dtmfSample" class="btn btn-outline-secondary" type="button">${tr('sample')}</button>
        <button id="dtmfClear" class="btn btn-outline-secondary" type="button">${tr('clear')}</button>
        <button id="dtmfBackspace" class="btn btn-outline-secondary" type="button">${tr('backspace')}</button>
      </div>
      <details class="mb-3" open><summary>${tr('advanced')}</summary>
        <p class="form-text mt-2">${tr('settings_hint')}</p>
      </details>
      <div id="dtmfHud" class="bcw-hud mb-3" role="status" aria-live="polite" hidden>
        <div class="bcw-hud-top"><div class="bcw-hud-spin" aria-hidden="true"></div><div class="bcw-hud-pct" id="dtmfPct">0%</div><div class="bcw-hud-copy"><div class="bcw-hud-title">${tr('progress')}</div><div class="bcw-hud-step" id="dtmfStep"></div><div class="bcw-hud-time" id="dtmfTime"></div></div></div>
        <div class="progress" style="height:1.35rem"><div id="dtmfBar" class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div><span class="bcw-hud-sheen" aria-hidden="true"></span></div>
        <ol class="bcw-hud-steps"><li data-step="synth">${tr('synth')}</li><li data-step="write">${tr('write')}</li></ol><div class="bcw-hud-url" id="dtmfCurrent"></div>
      </div>
      <div id="dtmfEmpty" class="dtmf-empty mb-3" role="status">${tr('empty_state')}</div>
      <div id="dtmfOutput" hidden><h2 class="h5">${tr('preview')}</h2><p id="dtmfResult"></p><audio id="dtmfAudio" controls preload="metadata" style="max-width:100%" aria-label="${tr('preview')}"></audio></div>
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
				label: 'ITU-T Recommendation Q.23',
				href: 'https://www.itu.int/rec/T-REC-Q.23',
			},
			{
				label: 'MDN: AudioBuffer',
				href: 'https://developer.mozilla.org/en-US/docs/Web/API/AudioBuffer',
			},
		],
	});

	/** 金标 HUD 与布局补充样式。 */
	const extraHeadHtml = `<style>${bcwHudCss({ hudId: 'dtmfHud', convertBtnId: 'dtmfConvert' })}#dtmfHud.is-error{border-color:#b91c1c;background:#fff1f2}#dtmfHud:not(.is-on) .bcw-hud-spin{animation:none}.dtmf-pad{display:flex;flex-direction:column;gap:.4rem;max-width:14rem}.dtmf-row{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:.4rem}.dtmf-key{font-weight:600;font-variant-numeric:tabular-nums}.dtmf-tone-chips,.dtmf-gap-chips{display:flex;flex-wrap:wrap;gap:.4rem}.dtmf-empty{padding:.75rem 1rem;border:1px dashed var(--border,#ced4da);border-radius:.5rem;color:var(--bs-secondary-color,#6c757d);font-size:.95rem}.site-footer nav.d-inline{display:inline-flex!important;flex-wrap:wrap;justify-content:center;max-width:100%}</style>`;

	/** 客户端 DTMF 双音合成管线（合成 → 写 WAV）。 */
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
    /** 序列输入框。 */
    const seqInput = $('dtmfSeq');
    /** 进度 HUD。 */
    const hud = $('dtmfHud');
    /** 预览 audio。 */
    const audio = $('dtmfAudio');
    /** 空状态提示。 */
    const emptyState = $('dtmfEmpty');
    /** HUD 步骤顺序。 */
    const STEPS = ['synth','write'];
    /** 采样率 Hz。 */
    const RATE = 44100;
    /** 最大序列长度。 */
    const MAX_KEYS = 64;
    /** 双音振幅（两路叠加后仍不削波）。 */
    const AMP = 0.22;
    /** ITU-T Q.23 低频行（Hz）。 */
    const LOW = { '1':697,'2':697,'3':697,'A':697,'4':770,'5':770,'6':770,'B':770,'7':852,'8':852,'9':852,'C':852,'*':941,'0':941,'#':941,'D':941 };
    /** ITU-T Q.23 高频列（Hz）。 */
    const HIGH = { '1':1209,'2':1336,'3':1477,'A':1633,'4':1209,'5':1336,'6':1477,'B':1633,'7':1209,'8':1336,'9':1477,'C':1633,'*':1209,'0':1336,'#':1477,'D':1633 };
    /** 合法按键字符集。 */
    const VALID = /^[0-9A-D*#]+$/i;
    /** 当前单音时长毫秒。 */
    let toneMs = 100;
    /** 当前间隔毫秒。 */
    let gapMs = 50;
    /** 输出 object URL。 */
    let outputUrl = null;
    /** 是否忙。 */
    let busy = false;
    /** 计时器。 */
    let timer = null;
    /** 开始时间。 */
    let started = 0;
    /** 是否已生成过（控制空状态）。 */
    let hasOutput = false;
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
    /**
     * 同步芯片选中态。
     * @param {HTMLElement} root 芯片容器
     * @param {string} attr 属性名
     * @param {string} value 选中值
     */
    function syncChips(root, attr, value){
      root.querySelectorAll('[' + attr + ']').forEach(btn => {
        const on = String(btn.getAttribute(attr)) === String(value);
        btn.classList.toggle('btn-primary', on);
        btn.classList.toggle('btn-outline-secondary', !on);
        btn.setAttribute('aria-pressed', on ? 'true' : 'false');
      });
    }
    /**
     * 规范化序列：仅保留合法 DTMF 字符并大写字母。
     * @param {string} raw 原始输入
     * @returns {string}
     */
    function normalizeSeq(raw){
      return String(raw || '').toUpperCase().replace(/[^0-9A-D*#]/g, '').slice(0, MAX_KEYS);
    }
    /** 丢弃旧输出。 */
    function discard(){
      if (outputUrl){ URL.revokeObjectURL(outputUrl); outputUrl = null; }
      audio.removeAttribute('src');
      audio.load();
      $('dtmfOutput').hidden = true;
      $('dtmfResult').textContent = '';
      $('dtmfDownload').disabled = true;
      hasOutput = false;
      if (emptyState) emptyState.hidden = false;
    }
    /**
     * 锁定或解锁控件。
     * @param {boolean} on 是否锁定
     */
    function lock(on){
      busy = on;
      $('dtmfConvert').disabled = on;
      $('dtmfSample').disabled = on;
      $('dtmfClear').disabled = on;
      $('dtmfBackspace').disabled = on;
      seqInput.disabled = on;
      $('dtmfPad').querySelectorAll('button').forEach(b => { b.disabled = on; });
      $('dtmfToneChips').querySelectorAll('button').forEach(b => { b.disabled = on; });
      $('dtmfGapChips').querySelectorAll('button').forEach(b => { b.disabled = on; });
      if (!on) $('dtmfDownload').disabled = !outputUrl;
    }
    /**
     * 更新 HUD 百分比与步骤高亮。
     * @param {number} pct 百分比
     * @param {string} stepKey 步骤键或 done
     */
    function progress(pct, stepKey){
      const value = Math.max(0, Math.min(100, Math.round(pct)));
      $('dtmfPct').textContent = value + '%';
      $('dtmfBar').style.width = value + '%';
      $('dtmfBar').setAttribute('aria-valuenow', String(value));
      const label = stepKey === 'done' ? M.done : (M[stepKey] || stepKey);
      $('dtmfStep').textContent = label;
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
      $('dtmfPct').textContent = '—';
      $('dtmfBar').style.width = '0%';
      $('dtmfBar').setAttribute('aria-valuenow', '0');
      hud.setAttribute('role', 'alert');
      $('dtmfStep').textContent = M[key] || M.failed;
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
     * 合成单个 DTMF 双音缓冲（含短淡入淡出）。
     * @param {string} key 按键
     * @param {number} seconds 时长秒
     * @returns {Float32Array}
     */
    function synthTone(key, seconds){
      const low = LOW[key];
      const high = HIGH[key];
      const frames = Math.max(1, Math.round(RATE * seconds));
      const data = new Float32Array(frames);
      const fade = Math.min(Math.round(RATE * 0.005), Math.floor(frames / 4));
      for (let i = 0; i < frames; i++){
        const t = i / RATE;
        let env = 1;
        if (fade > 0){
          if (i < fade) env = i / fade;
          else if (i >= frames - fade) env = (frames - 1 - i) / fade;
        }
        data[i] = (Math.sin(2 * Math.PI * low * t) + Math.sin(2 * Math.PI * high * t)) * AMP * env;
      }
      return data;
    }
    /**
     * 将序列合成为一条连续缓冲。
     * @param {string} seq 规范化序列
     * @param {number} toneSec 单音秒
     * @param {number} gapSec 间隔秒
     * @returns {Float32Array}
     */
    function synthSequence(seq, toneSec, gapSec){
      const toneFrames = Math.max(1, Math.round(RATE * toneSec));
      const gapFrames = Math.max(0, Math.round(RATE * gapSec));
      const total = seq.length * toneFrames + Math.max(0, seq.length - 1) * gapFrames;
      const out = new Float32Array(Math.max(1, total));
      let at = 0;
      for (let i = 0; i < seq.length; i++){
        const tone = synthTone(seq[i], toneSec);
        out.set(tone, at);
        at += tone.length;
        if (i < seq.length - 1 && gapFrames > 0) at += gapFrames;
      }
      return out;
    }
    /** 主生成：Synth → Write。 */
    async function generate(){
      if (busy) return;
      discard();
      lock(true);
      hud.hidden = false;
      hud.className = 'bcw-hud is-on mb-3';
      hud.setAttribute('role', 'status');
      started = performance.now();
      const clock = () => {
        $('dtmfTime').textContent = fill(M.elapsed, { s: ((performance.now() - started) / 1000).toFixed(1) });
      };
      clock();
      timer = setInterval(clock, 100);
      try {
        const seq = normalizeSeq(seqInput.value);
        seqInput.value = seq;
        if (!seq || !VALID.test(seq)) throw Error('err_seq');
        if (!(toneMs > 0) || toneMs > 500 || !(gapMs >= 0) || gapMs > 500) throw Error('err_limit');
        $('dtmfCurrent').textContent = seq + ' · ' + toneMs + 'ms / ' + gapMs + 'ms';
        progress(20, 'synth');
        await yieldUi();
        const mono = synthSequence(seq, toneMs / 1000, gapMs / 1000);
        progress(70, 'write');
        await yieldUi();
        const blob = writeWav([mono], RATE);
        if (!blob.size) throw Error('err_encoder');
        outputUrl = URL.createObjectURL(blob);
        audio.src = outputUrl;
        $('dtmfOutput').hidden = false;
        hasOutput = true;
        if (emptyState) emptyState.hidden = true;
        const seconds = (mono.length / RATE).toFixed(2);
        $('dtmfResult').textContent = fill(M.result, {
          seq: seq,
          count: seq.length,
          seconds: seconds,
          rate: RATE,
          output: (blob.size / 1024).toFixed(1)
        });
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
     * 加载样例序列 123# 并生成（门禁要求存在 loadSample；不自动播放）。
     */
    async function loadSample(){
      if (busy) return;
      seqInput.value = '123#';
      toneMs = 100;
      gapMs = 50;
      syncChips($('dtmfToneChips'), 'data-ms', toneMs);
      syncChips($('dtmfGapChips'), 'data-ms', gapMs);
      await generate();
    }
    /** 重置控件到默认。 */
    function clearAll(){
      if (busy) return;
      seqInput.value = '';
      toneMs = 100;
      gapMs = 50;
      syncChips($('dtmfToneChips'), 'data-ms', toneMs);
      syncChips($('dtmfGapChips'), 'data-ms', gapMs);
      discard();
      hud.hidden = true;
    }
    /**
     * 追加一个按键到序列。
     * @param {string} key 按键
     */
    function appendKey(key){
      const next = normalizeSeq(seqInput.value + key);
      seqInput.value = next;
      discard();
      hud.hidden = true;
    }
    /** 删掉序列末位。 */
    function backspace(){
      if (busy) return;
      seqInput.value = normalizeSeq(seqInput.value).slice(0, -1);
      discard();
      hud.hidden = true;
    }
    seqInput.addEventListener('input', () => {
      const cleaned = normalizeSeq(seqInput.value);
      if (cleaned !== seqInput.value) seqInput.value = cleaned;
      discard();
      hud.hidden = true;
    });
    $('dtmfPad').addEventListener('click', event => {
      const btn = event.target.closest('[data-key]');
      if (!btn || busy) return;
      appendKey(btn.getAttribute('data-key') || '');
    });
    $('dtmfToneChips').addEventListener('click', event => {
      const btn = event.target.closest('[data-ms]');
      if (!btn || busy) return;
      toneMs = Number(btn.getAttribute('data-ms')) || 100;
      syncChips($('dtmfToneChips'), 'data-ms', toneMs);
      discard();
    });
    $('dtmfGapChips').addEventListener('click', event => {
      const btn = event.target.closest('[data-ms]');
      if (!btn || busy) return;
      gapMs = Number(btn.getAttribute('data-ms')) || 50;
      syncChips($('dtmfGapChips'), 'data-ms', gapMs);
      discard();
    });
    $('dtmfConvert').addEventListener('click', generate);
    $('dtmfSample').addEventListener('click', loadSample);
    $('dtmfClear').addEventListener('click', clearAll);
    $('dtmfBackspace').addEventListener('click', backspace);
    $('dtmfDownload').addEventListener('click', () => {
      if (!outputUrl || busy) return;
      const seq = normalizeSeq(seqInput.value) || 'tones';
      const link = document.createElement('a');
      link.href = outputUrl;
      link.download = 'dtmf-' + seq.replace(/[#*]/g, function(ch){ return ch === '#' ? 'hash' : 'star'; }) + '.wav';
      document.body.appendChild(link);
      link.click();
      link.remove();
    });
    window.addEventListener('pagehide', () => {
      clearInterval(timer);
      if (outputUrl) URL.revokeObjectURL(outputUrl);
    });
    syncChips($('dtmfToneChips'), 'data-ms', toneMs);
    syncChips($('dtmfGapChips'), 'data-ms', gapMs);
  })();
</script>`;

	/** catalog 元数据（related / schema）。 */
	const toolMeta = getToolBySlug('generate-dtmf-touch-tones');
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
