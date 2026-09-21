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
const P = 'tool_shift_the_pitch_of_a_song';

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
 * 给歌曲变调：按半音重采样再 WSOLA 回正时长，导出 16-bit WAV（S33）。
 * @param opts.lang 当前 UI 语言
 * @param opts.defaultLang 默认（无前缀）语言
 * @param opts.enabledLangs 启用语言列表
 */
export const renderShiftThePitchOfASongPage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	/** 工具规范路径（无语言前缀）。 */
	const toolPath = '/tools/shift-the-pitch-of-a-song';
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
			currentSlug: 'shift-the-pitch-of-a-song',
			currentAnchor: '#pitch',
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
		'shift',
		'write',
		'done',
		'failed',
		'elapsed',
		'err_file',
		'err_format',
		'err_limit',
		'err_decode',
		'err_encoder',
		'err_silence',
		'err_semitones',
		'sample_name',
		'result',
		'empty',
		'st_m2',
		'st_m1',
		'st_p1',
		'st_p2',
		'st_p3',
		'st_custom',
	];
	/** 消息字典：键 → 当前语言字符串。 */
	const messages = Object.fromEntries(uiKeys.map((key) => [key, t(opts.lang, `${P}_${key}`)]));

	/** 工具主面板与结果区 markup。 */
	const contentHtml = `
    <div id="pitch" class="tool-page-heading mb-3"><h1 class="h4">${tr('title')}</h1><p>${tr('desc')}</p></div>
    <section class="tool-panel" id="pitPanel">
      <label class="tool-dropzone mb-3" id="pitDrop" for="pitFile"><input id="pitFile" type="file" accept=".wav,.mp3,.m4a,.aac,.ogg,audio/*"><span class="tool-dropzone-title">${tr('choose')}</span><span class="tool-dropzone-hint">${tr('hint')}</span><span id="pitName" class="tool-dropzone-file"></span></label>
      <div class="tools-bar d-flex flex-wrap mb-3" style="gap:.5rem">
        <button id="pitConvert" class="btn btn-primary" type="button">${tr('convert')}</button>
        <button id="pitDownload" class="btn btn-outline-primary" type="button" disabled>${tr('download')}</button>
        <button id="pitSample" class="btn btn-outline-secondary" type="button">${tr('sample')}</button>
        <button id="pitClear" class="btn btn-outline-secondary" type="button">${tr('clear')}</button>
      </div>
      <details class="mb-3" open><summary>${tr('advanced')}</summary>
        <p class="form-label mt-2 mb-1">${tr('pitch_label')}</p>
        <div class="pit-preset-chips mb-2" id="pitSemiChips" role="group" aria-label="${tr('pitch_label')}">
          <button type="button" class="btn btn-sm btn-primary" data-st="-2" aria-pressed="true">${tr('st_m2')}</button>
          <button type="button" class="btn btn-sm btn-outline-secondary" data-st="-1" aria-pressed="false">${tr('st_m1')}</button>
          <button type="button" class="btn btn-sm btn-outline-secondary" data-st="1" aria-pressed="false">${tr('st_p1')}</button>
          <button type="button" class="btn btn-sm btn-outline-secondary" data-st="2" aria-pressed="false">${tr('st_p2')}</button>
          <button type="button" class="btn btn-sm btn-outline-secondary" data-st="3" aria-pressed="false">${tr('st_p3')}</button>
          <button type="button" class="btn btn-sm btn-outline-secondary" data-st="custom" aria-pressed="false">${tr('st_custom')}</button>
        </div>
        <label class="form-label" for="pitCustom">${tr('custom_label')}</label>
        <input id="pitCustom" class="form-control mb-2" type="number" min="-12" max="12" step="1" value="0" disabled style="max-width:10rem" inputmode="numeric">
        <p class="form-text">${tr('settings_hint')}</p>
      </details>
      <div id="pitHud" class="bcw-hud mb-3" role="status" aria-live="polite" hidden>
        <div class="bcw-hud-top"><div class="bcw-hud-spin" aria-hidden="true"></div><div class="bcw-hud-pct" id="pitPct">0%</div><div class="bcw-hud-copy"><div class="bcw-hud-title">${tr('progress')}</div><div class="bcw-hud-step" id="pitStep"></div><div class="bcw-hud-time" id="pitTime"></div></div></div>
        <div class="progress" style="height:1.35rem"><div id="pitBar" class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div><span class="bcw-hud-sheen" aria-hidden="true"></span></div>
        <ol class="bcw-hud-steps"><li data-step="read">${tr('read')}</li><li data-step="decode">${tr('decode')}</li><li data-step="shift">${tr('shift')}</li><li data-step="write">${tr('write')}</li></ol><div class="bcw-hud-url" id="pitCurrent"></div>
      </div>
      <div id="pitOutput" hidden><h2 class="h5">${tr('preview')}</h2><p id="pitResult"></p><audio id="pitAudio" controls preload="metadata" style="max-width:100%" aria-label="${tr('preview')}"></audio></div>
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
				label: 'Wikipedia: Audio time stretching and pitch scaling',
				href: 'https://en.wikipedia.org/wiki/Audio_time_stretching_and_pitch_scaling',
			},
			{
				label: 'Wikipedia: Pitch shift',
				href: 'https://en.wikipedia.org/wiki/Pitch_shift',
			},
		],
	});

	/** 金标 HUD、预设芯片与布局补充样式。 */
	const extraHeadHtml = `<style>${bcwHudCss({ hudId: 'pitHud', convertBtnId: 'pitConvert' })}#pitHud.is-error{border-color:#b91c1c;background:#fff1f2}#pitHud:not(.is-on) .bcw-hud-spin{animation:none}.pit-preset-chips{display:flex;flex-wrap:wrap;gap:.4rem}.site-footer nav.d-inline{display:inline-flex!important;flex-wrap:wrap;justify-content:center;max-width:100%}</style>`;

	/** 客户端转换管线（读 → 解码 → 重采样变调 + WSOLA 回正时长 → 写 16-bit WAV）。 */
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
    /** 文件输入。 */
    const fileInput = $('pitFile');
    /** 半音芯片容器。 */
    const semiChips = $('pitSemiChips');
    /** 自定义半音输入。 */
    const customInput = $('pitCustom');
    /** 进度 HUD。 */
    const hud = $('pitHud');
    /** 预览 audio。 */
    const audio = $('pitAudio');
    /** 峰值软保护上限。 */
    const PEAK_LIMIT = 0.98;
    /** 预设半音值（不含 custom）。 */
    const PRESET_ST = [-2, -1, 1, 2, 3];
    /** 允许的最小/最大自定义半音。 */
    const ST_MIN = -12;
    /** 允许的最大自定义半音。 */
    const ST_MAX = 12;
    /** 当前选中文件。 */
    let selected = null;
    /** 输出 object URL。 */
    let outputUrl = null;
    /** 是否忙。 */
    let busy = false;
    /** 计时器。 */
    let timer = null;
    /** 开始时间。 */
    let started = 0;
    /** 芯片模式：预设数字字符串或 'custom'。 */
    let stMode = '-2';
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
      $('pitOutput').hidden = true;
      $('pitResult').textContent = '';
      $('pitDownload').disabled = true;
    }
    /**
     * 锁定或解锁控件。
     * @param {boolean} on 是否锁定
     */
    function lock(on){
      busy = on;
      $('pitConvert').disabled = on;
      $('pitSample').disabled = on;
      $('pitClear').disabled = on;
      fileInput.disabled = on;
      customInput.disabled = on || stMode !== 'custom';
      semiChips.querySelectorAll('button').forEach(btn => { btn.disabled = on; });
      if (!on) $('pitDownload').disabled = !outputUrl;
    }
    /** 刷新半音芯片选中态与自定义输入可用态。 */
    function paintSt(){
      semiChips.querySelectorAll('[data-st]').forEach(btn => {
        const on = btn.dataset.st === stMode;
        btn.classList.toggle('btn-primary', on);
        btn.classList.toggle('btn-outline-secondary', !on);
        btn.setAttribute('aria-pressed', on ? 'true' : 'false');
      });
      customInput.disabled = busy || stMode !== 'custom';
    }
    /**
     * 解析当前有效半音偏移。
     * @returns {number}
     */
    function resolveSemitones(){
      if (stMode === 'custom'){
        const v = Number(customInput.value);
        if (!Number.isFinite(v) || v < ST_MIN || v > ST_MAX || Math.round(v) !== v) throw Error('err_semitones');
        return v;
      }
      const v = Number(stMode);
      if (!Number.isFinite(v) || PRESET_ST.indexOf(v) < 0) throw Error('err_semitones');
      return v;
    }
    /**
     * 更新 HUD 百分比与步骤高亮。
     * @param {number} pct 百分比
     * @param {string} stepKey 步骤键或 done
     */
    function progress(pct, stepKey){
      const value = Math.max(0, Math.min(100, Math.round(pct)));
      $('pitPct').textContent = value + '%';
      $('pitBar').style.width = value + '%';
      $('pitBar').setAttribute('aria-valuenow', String(value));
      const label = stepKey === 'done' ? M.done : (M[stepKey] || stepKey);
      $('pitStep').textContent = label;
      hud.querySelectorAll('.bcw-hud-steps li').forEach(li => {
        const name = li.getAttribute('data-step');
        li.classList.toggle('is-active', name === stepKey);
        li.classList.toggle('is-done', ['read','decode','shift','write'].indexOf(name) < ['read','decode','shift','write'].indexOf(stepKey) || stepKey === 'done');
      });
    }
    /**
     * 以错误态显示失败。
     * @param {string} key 消息键
     */
    function fail(key){
      hud.hidden = false;
      hud.className = 'bcw-hud is-error is-fail mb-3';
      $('pitPct').textContent = '—';
      $('pitBar').style.width = '0%';
      $('pitBar').setAttribute('aria-valuenow', '0');
      hud.setAttribute('role', 'alert');
      $('pitStep').textContent = M[key] || M.failed;
    }
    /**
     * 选择或清空输入文件（会丢弃旧输出）。
     * @param {File|null} file 新文件
     */
    function choose(file){
      if (busy) return;
      discard();
      selected = file || null;
      $('pitName').textContent = file ? file.name : '';
      hud.hidden = true;
      fileInput.value = '';
    }
    /**
     * 是否为浏览器可尝试解码的常见音频。
     * @param {File} file 候选文件
     */
    function isAudio(file){
      return file && (/\\.(wav|mp3|m4a|aac|ogg)$/i.test(file.name) || (file.type && file.type.indexOf('audio/') === 0));
    }
    /**
     * 计算缓冲中所有声道的绝对峰值。
     * @param {Float32Array[]} channels 声道样本数组
     */
    function absPeakChannels(channels){
      let peak = 0;
      for (let c = 0; c < channels.length; c++){
        const data = channels[c];
        for (let i = 0; i < data.length; i++){
          const v = Math.abs(Number.isFinite(data[i]) ? data[i] : 0);
          if (v > peak) peak = v;
        }
      }
      return peak;
    }
    /**
     * 构建 Hann 窗。
     * @param {number} n 窗长
     */
    function hannWindow(n){
      const win = new Float32Array(n);
      if (n < 2){ win[0] = 1; return win; }
      for (let i = 0; i < n; i++) win[i] = 0.5 - 0.5 * Math.cos((2 * Math.PI * i) / (n - 1));
      return win;
    }
    /**
     * 在搜索半径内找与参考片段互相关最大的输入起点（WSOLA 对齐）。
     * @param {Float32Array} input 单声道输入
     * @param {number} expected 期望起点
     * @param {Float32Array} ref 参考重叠区样本
     * @param {number} search 搜索半径（样本）
     * @param {number} overlap 重叠长度
     */
    function bestOffset(input, expected, ref, search, overlap){
      const n = input.length;
      let bestPos = expected;
      let bestScore = -Infinity;
      const lo = Math.max(0, expected - search);
      const hi = Math.min(n - overlap, expected + search);
      if (hi < lo) return Math.max(0, Math.min(n - overlap, expected));
      for (let pos = lo; pos <= hi; pos++){
        let num = 0;
        let denA = 0;
        let denB = 0;
        for (let i = 0; i < overlap; i++){
          const a = input[pos + i];
          const b = ref[i];
          num += a * b;
          denA += a * a;
          denB += b * b;
        }
        const score = num / (Math.sqrt(denA * denB) + 1e-12);
        if (score > bestScore){
          bestScore = score;
          bestPos = pos;
        }
      }
      return bestPos;
    }
    /**
     * 对单声道做 WSOLA 时间拉伸：speed>1 更快更短，speed<1 更慢更长。
     * @param {Float32Array} input 输入样本
     * @param {number} rate 采样率
     * @param {number} speed 速度倍率
     * @param {(p:number)=>void} [onProgress] 可选进度回调 0–1
     */
    async function wsolaChannel(input, rate, speed, onProgress){
      if (!(input.length > 0)) return new Float32Array(0);
      if (Math.abs(speed - 1) < 0.002){
        const copy = new Float32Array(input.length);
        copy.set(input);
        return copy;
      }
      /** 分析/合成帧长约 40 ms。 */
      let frame = Math.max(64, Math.round(rate * 0.04));
      if (frame % 2) frame += 1;
      /** 合成 hop：约 50% 重叠。 */
      const synthHop = Math.max(1, Math.floor(frame / 2));
      /** 分析 hop：按速度缩放。 */
      const analysisHop = Math.max(1, Math.round(synthHop * speed));
      /** ±8 ms 搜索窗。 */
      const search = Math.max(0, Math.round(rate * 0.008));
      /** 重叠比较长度。 */
      const overlap = Math.min(frame, synthHop);
      const win = hannWindow(frame);
      /** 输出长度约 input/speed，并预留一帧。 */
      const outLen = Math.max(frame, Math.ceil(input.length / speed) + frame);
      const output = new Float32Array(outLen);
      const norm = new Float32Array(outLen);
      /** 上一帧在输入中的起点。 */
      let inPos = 0;
      /** 输出写入位置。 */
      let outPos = 0;
      /** 参考重叠缓冲。 */
      const ref = new Float32Array(overlap);
      let framesDone = 0;
      const approxFrames = Math.max(1, Math.ceil((input.length - frame) / analysisHop));
      while (inPos + frame < input.length && outPos + frame < outLen){
        let take = inPos;
        if (framesDone > 0){
          const expected = inPos;
          for (let i = 0; i < overlap; i++){
            const oi = outPos - overlap + i;
            ref[i] = oi >= 0 ? output[oi] / (norm[oi] + 1e-12) : 0;
          }
          take = bestOffset(input, expected, ref, search, overlap);
        }
        for (let i = 0; i < frame; i++){
          const s = Number.isFinite(input[take + i]) ? input[take + i] : 0;
          const w = win[i];
          output[outPos + i] += s * w;
          norm[outPos + i] += w;
        }
        inPos = take + analysisHop;
        outPos += synthHop;
        framesDone++;
        if (framesDone % 24 === 0){
          if (onProgress) onProgress(Math.min(0.98, framesDone / approxFrames));
          await yieldUi();
        }
      }
      /** 归一化 OLA 权重。 */
      const trim = Math.min(outPos + (frame - synthHop), outLen);
      const result = new Float32Array(Math.max(1, trim));
      for (let i = 0; i < trim; i++){
        result[i] = norm[i] > 1e-8 ? output[i] / norm[i] : 0;
      }
      return result;
    }
    /**
     * 线性插值重采样：ratio>1 升高音高并缩短时长。
     * @param {Float32Array} input 输入样本
     * @param {number} ratio 音高倍率 2^(st/12)
     */
    function resampleChannel(input, ratio){
      if (!(input.length > 0)) return new Float32Array(0);
      if (Math.abs(ratio - 1) < 1e-6){
        const copy = new Float32Array(input.length);
        copy.set(input);
        return copy;
      }
      const outLen = Math.max(1, Math.floor(input.length / ratio));
      const out = new Float32Array(outLen);
      for (let i = 0; i < outLen; i++){
        const src = i * ratio;
        const i0 = Math.floor(src);
        const i1 = Math.min(input.length - 1, i0 + 1);
        const f = src - i0;
        const a = Number.isFinite(input[i0]) ? input[i0] : 0;
        const b = Number.isFinite(input[i1]) ? input[i1] : 0;
        out[i] = a + (b - a) * f;
      }
      return out;
    }
    /**
     * 对 AudioBuffer 做半音变调：重采样改音高，再 WSOLA 把时长拉回原长，软峰值保护。
     * @param {AudioBuffer} buffer 解码缓冲
     * @param {number} semitones 半音偏移（负=降调）
     */
    async function shiftBuffer(buffer, semitones){
      const channels = Math.min(2, buffer.numberOfChannels);
      const rate = Math.round(buffer.sampleRate);
      const ratio = Math.pow(2, semitones / 12);
      /** 先读出各声道。 */
      const src = [];
      for (let c = 0; c < channels; c++){
        const data = buffer.getChannelData(c);
        const copy = new Float32Array(data.length);
        copy.set(data);
        src.push(copy);
      }
      const peakBefore = absPeakChannels(src);
      if (!(peakBefore > 1e-8)) throw Error('err_silence');
      /** 目标时长（样本）≈ 原长。 */
      const targetFrames = src[0].length;
      const out = [];
      for (let c = 0; c < channels; c++){
        progress(44 + (c / channels) * 8, 'shift');
        await yieldUi();
        const pitched = resampleChannel(src[c], ratio);
        /** WSOLA speed = 1/ratio：把因重采样改变的时长拉回。 */
        const restored = await wsolaChannel(pitched, rate, 1 / ratio, p => {
          progress(52 + ((c + p) / channels) * 22, 'shift');
        });
        /** 裁/填到目标帧数，使时长与原文件大致一致。 */
        const aligned = new Float32Array(targetFrames);
        const n = Math.min(targetFrames, restored.length);
        aligned.set(restored.subarray(0, n));
        out.push(aligned);
      }
      let frames = out[0].length;
      for (let c = 1; c < channels; c++) frames = Math.min(frames, out[c].length);
      for (let c = 0; c < channels; c++){
        if (out[c].length !== frames){
          const trimmed = new Float32Array(frames);
          trimmed.set(out[c].subarray(0, frames));
          out[c] = trimmed;
        }
      }
      let peakAfter = absPeakChannels(out);
      if (peakAfter > PEAK_LIMIT){
        const scale = PEAK_LIMIT / peakAfter;
        for (let c = 0; c < channels; c++){
          for (let i = 0; i < frames; i++) out[c][i] *= scale;
        }
        peakAfter = PEAK_LIMIT;
      }
      return { channels: out, rate, peakBefore, peakAfter, outSeconds: frames / rate };
    }
    /**
     * 将 float 声道写成 16-bit little-endian PCM WAV（保留 1–2 声道）。
     * @param {Float32Array[]} channels 声道样本
     * @param {number} rate 采样率 Hz
     */
    function writeWav(channels, rate){
      const ch = channels.length;
      const frames = channels[0].length;
      const blockAlign = ch * 2;
      const dataBytes = frames * blockAlign;
      const bytes = new ArrayBuffer(44 + dataBytes);
      const view = new DataView(bytes);
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
    /** 主转换：读 → 解码 → Shift → 写 WAV。 */
    async function convert(){
      if (busy) return;
      discard();
      if (!selected){ fail('empty'); return; }
      lock(true);
      hud.hidden = false;
      hud.className = 'bcw-hud is-on mb-3';
      hud.setAttribute('role', 'status');
      $('pitCurrent').textContent = selected.name;
      started = performance.now();
      const clock = () => { $('pitTime').textContent = fill(M.elapsed, { s: ((performance.now() - started) / 1000).toFixed(1) }); };
      clock();
      timer = setInterval(clock, 100);
      try {
        progress(2, 'read');
        await yieldUi();
        if (selected.size > 40 * 1024 * 1024) throw Error('err_limit');
        if (!isAudio(selected)) throw Error('err_format');
        const semitones = resolveSemitones();
        const bytes = await selected.arrayBuffer();
        progress(18, 'decode');
        await yieldUi();
        const Context = window.AudioContext || window.webkitAudioContext;
        if (!Context) throw Error('err_decode');
        const context = new Context();
        let decoded;
        try {
          decoded = await context.decodeAudioData(bytes.slice(0));
        } catch (e) {
          throw Error('err_decode');
        } finally {
          if (context.close) context.close();
        }
        if (decoded.duration > 600.01 || decoded.numberOfChannels < 1 || decoded.numberOfChannels > 2) throw Error('err_limit');
        progress(42, 'shift');
        await yieldUi();
        const fixed = await shiftBuffer(decoded, semitones);
        progress(78, 'write');
        await yieldUi();
        const blob = writeWav(fixed.channels, fixed.rate);
        if (!blob.size) throw Error('err_encoder');
        outputUrl = URL.createObjectURL(blob);
        audio.src = outputUrl;
        $('pitOutput').hidden = false;
        const stLabel = (semitones > 0 ? '+' : '') + String(semitones);
        $('pitResult').textContent = fill(M.result, {
          seconds: decoded.duration.toFixed(2),
          outSeconds: fixed.outSeconds.toFixed(2),
          semitones: stLabel,
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
     * 合成约 3 s、48 kHz 单声道含稳定基频的样例，便于听出半音变调。
     * @returns {File}
     */
    function sampleWav(){
      const rate = 48000;
      const frames = rate * 3;
      const bytes = new ArrayBuffer(44 + frames * 2);
      const v = new DataView(bytes);
      const str = (at, text) => { for (let i = 0; i < text.length; i++) v.setUint8(at + i, text.charCodeAt(i)); };
      str(0, 'RIFF');
      v.setUint32(4, bytes.byteLength - 8, true);
      str(8, 'WAVE');
      str(12, 'fmt ');
      v.setUint32(16, 16, true);
      v.setUint16(20, 1, true);
      v.setUint16(22, 1, true);
      v.setUint32(24, rate, true);
      v.setUint32(28, rate * 2, true);
      v.setUint16(32, 2, true);
      v.setUint16(34, 16, true);
      str(36, 'data');
      v.setUint32(40, frames * 2, true);
      for (let i = 0; i < frames; i++){
        const t = i / rate;
        const fade = Math.min(1, i / 2400, (frames - i) / 2400);
        const env = 0.55 + 0.45 * Math.sin(2 * Math.PI * 1.5 * t);
        const sample = fade * env * (
          0.55 * Math.sin(2 * Math.PI * 261.63 * t) +
          0.28 * Math.sin(2 * Math.PI * 523.25 * t) +
          0.12 * Math.sin(2 * Math.PI * 784.88 * t) +
          0.05 * Math.sin(2 * Math.PI * 1046.5 * t)
        );
        v.setInt16(44 + i * 2, Math.max(-32768, Math.min(32767, Math.round(sample * 24000))), true);
      }
      return new File([bytes], M.sample_name + '.wav', { type: 'audio/wav' });
    }
    /** 进页或点 Sample：加载样例并以默认 −2 半音自动 Shift。 */
    async function loadSample(){
      if (busy) return;
      stMode = '-2';
      customInput.value = '0';
      paintSt();
      choose(sampleWav());
      await convert();
    }
    fileInput.addEventListener('change', () => choose(fileInput.files[0]));
    $('pitDrop').addEventListener('dragover', event => event.preventDefault());
    $('pitDrop').addEventListener('drop', event => {
      event.preventDefault();
      if (busy) return;
      const files = event.dataTransfer.files;
      if (files.length !== 1){ choose(null); fail('err_file'); return; }
      choose(files[0]);
    });
    semiChips.addEventListener('click', event => {
      const btn = event.target.closest('[data-st]');
      if (!btn || busy) return;
      stMode = btn.dataset.st;
      paintSt();
      discard();
      hud.hidden = true;
    });
    customInput.addEventListener('input', () => {
      if (busy || stMode !== 'custom') return;
      discard();
      hud.hidden = true;
    });
    $('pitConvert').addEventListener('click', convert);
    $('pitSample').addEventListener('click', loadSample);
    $('pitClear').addEventListener('click', () => choose(null));
    $('pitDownload').addEventListener('click', () => {
      if (!outputUrl || busy) return;
      const link = document.createElement('a');
      link.href = outputUrl;
      link.download = (selected.name.replace(/\\.[^.]+$/, '') || 'audio') + '-pitch.wav';
      document.body.appendChild(link);
      link.click();
      link.remove();
    });
    window.addEventListener('pagehide', () => {
      clearInterval(timer);
      if (outputUrl) URL.revokeObjectURL(outputUrl);
    });
    paintSt();
    loadSample();
  })();
</script>`;

	/** catalog 元数据（related / schema）。 */
	const toolMeta = getToolBySlug('shift-the-pitch-of-a-song');
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
