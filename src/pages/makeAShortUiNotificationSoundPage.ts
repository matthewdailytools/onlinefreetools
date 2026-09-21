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
const P = 'tool_make_a_short_ui_notification_sound';

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
 * 用简单预设制作短 UI 提示音并导出 16-bit WAV（F9 G12）。
 * 管线：预设芯片 → 短波形合成 → 写 WAV。
 * ≠ DTMF 拨号音（G6）；≠ 长正弦频率发生器（G5）。
 * @param opts.lang 当前 UI 语言
 * @param opts.defaultLang 默认（无前缀）语言
 * @param opts.enabledLangs 启用语言列表
 */
export const renderMakeAShortUiNotificationSoundPage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	/** 工具规范路径（无语言前缀）。 */
	const toolPath = '/tools/make-a-short-ui-notification-sound';
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
			currentSlug: 'make-a-short-ui-notification-sound',
			currentAnchor: '#ui-notify',
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
		'err_preset',
		'err_limit',
		'err_encoder',
		'sample_name',
		'result',
		'empty',
		'preset_soft',
		'preset_success',
		'preset_alert',
		'preset_error',
		'preset_ping',
	];
	/** 消息字典：键 → 当前语言字符串。 */
	const messages = Object.fromEntries(uiKeys.map((key) => [key, t(opts.lang, `${P}_${key}`)]));

	/** 工具主面板与结果区 markup。 */
	const contentHtml = `
    <div id="ui-notify" class="tool-page-heading mb-3"><h1 class="h4">${tr('title')}</h1><p>${tr('desc')}</p></div>
    <section class="tool-panel" id="uinPanel">
      <p class="form-label mb-1">${tr('preset_label')}</p>
      <div class="uin-preset-chips mb-3" id="uinPresetChips" role="group" aria-label="${tr('preset_label')}">
        <button type="button" class="btn btn-sm btn-outline-secondary" data-preset="soft" aria-pressed="false">${tr('preset_soft')}</button>
        <button type="button" class="btn btn-sm btn-primary" data-preset="success" aria-pressed="true">${tr('preset_success')}</button>
        <button type="button" class="btn btn-sm btn-outline-secondary" data-preset="alert" aria-pressed="false">${tr('preset_alert')}</button>
        <button type="button" class="btn btn-sm btn-outline-secondary" data-preset="error" aria-pressed="false">${tr('preset_error')}</button>
        <button type="button" class="btn btn-sm btn-outline-secondary" data-preset="ping" aria-pressed="false">${tr('preset_ping')}</button>
      </div>
      <p class="form-label mb-1">${tr('dur_label')}</p>
      <div class="uin-dur-chips mb-3" id="uinDurChips" role="group" aria-label="${tr('dur_label')}">
        <button type="button" class="btn btn-sm btn-outline-secondary" data-ms="120" aria-pressed="false">120ms</button>
        <button type="button" class="btn btn-sm btn-primary" data-ms="200" aria-pressed="true">200ms</button>
        <button type="button" class="btn btn-sm btn-outline-secondary" data-ms="320" aria-pressed="false">320ms</button>
        <button type="button" class="btn btn-sm btn-outline-secondary" data-ms="450" aria-pressed="false">450ms</button>
      </div>
      <div class="tools-bar d-flex flex-wrap mb-3" style="gap:.5rem">
        <button id="uinConvert" class="btn btn-primary" type="button">${tr('convert')}</button>
        <button id="uinDownload" class="btn btn-outline-primary" type="button" disabled>${tr('download')}</button>
        <button id="uinSample" class="btn btn-outline-secondary" type="button">${tr('sample')}</button>
        <button id="uinClear" class="btn btn-outline-secondary" type="button">${tr('clear')}</button>
      </div>
      <details class="mb-3" open><summary>${tr('advanced')}</summary>
        <p class="form-text mt-2">${tr('settings_hint')}</p>
      </details>
      <div id="uinHud" class="bcw-hud mb-3" role="status" aria-live="polite" hidden>
        <div class="bcw-hud-top"><div class="bcw-hud-spin" aria-hidden="true"></div><div class="bcw-hud-pct" id="uinPct">0%</div><div class="bcw-hud-copy"><div class="bcw-hud-title">${tr('progress')}</div><div class="bcw-hud-step" id="uinStep"></div><div class="bcw-hud-time" id="uinTime"></div></div></div>
        <div class="progress" style="height:1.35rem"><div id="uinBar" class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div><span class="bcw-hud-sheen" aria-hidden="true"></span></div>
        <ol class="bcw-hud-steps"><li data-step="synth">${tr('synth')}</li><li data-step="write">${tr('write')}</li></ol><div class="bcw-hud-url" id="uinCurrent"></div>
      </div>
      <div id="uinEmpty" class="uin-empty mb-3" role="status">${tr('empty_state')}</div>
      <div id="uinOutput" hidden><h2 class="h5">${tr('preview')}</h2><p id="uinResult"></p><audio id="uinAudio" controls preload="metadata" style="max-width:100%" aria-label="${tr('preview')}"></audio></div>
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
				label: 'MDN: AudioBuffer',
				href: 'https://developer.mozilla.org/en-US/docs/Web/API/AudioBuffer',
			},
			{
				label: 'MDN: OscillatorNode',
				href: 'https://developer.mozilla.org/en-US/docs/Web/API/OscillatorNode',
			},
		],
	});

	/** 金标 HUD 与布局补充样式。 */
	const extraHeadHtml = `<style>${bcwHudCss({ hudId: 'uinHud', convertBtnId: 'uinConvert' })}#uinHud.is-error{border-color:#b91c1c;background:#fff1f2}#uinHud:not(.is-on) .bcw-hud-spin{animation:none}.uin-preset-chips,.uin-dur-chips{display:flex;flex-wrap:wrap;gap:.4rem}.uin-empty{padding:.75rem 1rem;border:1px dashed var(--border,#ced4da);border-radius:.5rem;color:var(--bs-secondary-color,#6c757d);font-size:.95rem}.site-footer nav.d-inline{display:inline-flex!important;flex-wrap:wrap;justify-content:center;max-width:100%}</style>`;

	/** 客户端短 UI 提示音合成管线（合成 → 写 WAV）。 */
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
    /** 进度 HUD。 */
    const hud = $('uinHud');
    /** 预览 audio。 */
    const audio = $('uinAudio');
    /** 空状态提示。 */
    const emptyState = $('uinEmpty');
    /** HUD 步骤顺序。 */
    const STEPS = ['synth','write'];
    /** 采样率 Hz。 */
    const RATE = 44100;
    /** 合法预设 id。 */
    const PRESETS = ['soft','success','alert','error','ping'];
    /** 当前预设。 */
    let preset = 'success';
    /** 当前时长毫秒。 */
    let durMs = 200;
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
     * 预设显示名。
     * @param {string} id 预设 id
     */
    function presetLabel(id){
      return M['preset_' + id] || id;
    }
    /** 丢弃旧输出。 */
    function discard(){
      if (outputUrl){ URL.revokeObjectURL(outputUrl); outputUrl = null; }
      audio.removeAttribute('src');
      audio.load();
      $('uinOutput').hidden = true;
      $('uinResult').textContent = '';
      $('uinDownload').disabled = true;
      hasOutput = false;
      if (emptyState) emptyState.hidden = false;
    }
    /**
     * 锁定或解锁控件。
     * @param {boolean} on 是否锁定
     */
    function lock(on){
      busy = on;
      $('uinConvert').disabled = on;
      $('uinSample').disabled = on;
      $('uinClear').disabled = on;
      $('uinPresetChips').querySelectorAll('button').forEach(b => { b.disabled = on; });
      $('uinDurChips').querySelectorAll('button').forEach(b => { b.disabled = on; });
      if (!on) $('uinDownload').disabled = !outputUrl;
    }
    /**
     * 更新 HUD 百分比与步骤高亮。
     * @param {number} pct 百分比
     * @param {string} stepKey 步骤键或 done
     */
    function progress(pct, stepKey){
      const value = Math.max(0, Math.min(100, Math.round(pct)));
      $('uinPct').textContent = value + '%';
      $('uinBar').style.width = value + '%';
      $('uinBar').setAttribute('aria-valuenow', String(value));
      const label = stepKey === 'done' ? M.done : (M[stepKey] || stepKey);
      $('uinStep').textContent = label;
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
      $('uinPct').textContent = '—';
      $('uinBar').style.width = '0%';
      $('uinBar').setAttribute('aria-valuenow', '0');
      hud.setAttribute('role', 'alert');
      $('uinStep').textContent = M[key] || M.failed;
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
     * 按预设合成短 UI 提示音缓冲。
     * @param {string} id 预设 id
     * @param {number} seconds 总时长秒
     * @returns {Float32Array}
     */
    function synthPreset(id, seconds){
      const frames = Math.max(1, Math.round(RATE * seconds));
      const data = new Float32Array(frames);
      /**
       * 写入带包络的正弦片段。
       * @param {number} start 起始帧
       * @param {number} len 帧数
       * @param {number} freq 频率
       * @param {number} amp 振幅
       */
      const tone = (start, len, freq, amp) => {
        const fade = Math.min(Math.round(RATE * 0.004), Math.floor(len / 3));
        for (let i = 0; i < len; i++){
          const idx = start + i;
          if (idx < 0 || idx >= frames) continue;
          let env = 1;
          if (fade > 0){
            if (i < fade) env = i / fade;
            else if (i >= len - fade) env = (len - 1 - i) / fade;
          }
          data[idx] += Math.sin(2 * Math.PI * freq * (idx / RATE)) * amp * env;
        }
      };
      if (id === 'soft'){
        tone(0, frames, 880, 0.18);
      } else if (id === 'success'){
        const half = Math.floor(frames / 2);
        tone(0, half, 523.25, 0.24);
        tone(half, frames - half, 659.25, 0.24);
      } else if (id === 'alert'){
        const third = Math.floor(frames / 3);
        tone(0, third, 740, 0.26);
        tone(third * 2, third, 740, 0.26);
      } else if (id === 'error'){
        for (let i = 0; i < frames; i++){
          const t = i / RATE;
          const buzz = ((t * 180) % 1 < 0.5 ? 1 : -1) * 0.12;
          const low = Math.sin(2 * Math.PI * 160 * t) * 0.18;
          let env = 1 - i / frames;
          data[i] = (buzz + low) * env;
        }
      } else if (id === 'ping'){
        for (let i = 0; i < frames; i++){
          const t = i / RATE;
          const freq = 1200 - 700 * (i / frames);
          const env = Math.exp(-4.5 * (i / frames));
          data[i] = Math.sin(2 * Math.PI * freq * t) * 0.28 * env;
        }
      }
      return data;
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
        $('uinTime').textContent = fill(M.elapsed, { s: ((performance.now() - started) / 1000).toFixed(1) });
      };
      clock();
      timer = setInterval(clock, 100);
      try {
        if (PRESETS.indexOf(preset) < 0) throw Error('err_preset');
        if (!(durMs > 0) || durMs > 800) throw Error('err_limit');
        $('uinCurrent').textContent = presetLabel(preset) + ' · ' + durMs + 'ms';
        progress(20, 'synth');
        await yieldUi();
        const mono = synthPreset(preset, durMs / 1000);
        progress(70, 'write');
        await yieldUi();
        const blob = writeWav([mono], RATE);
        if (!blob.size) throw Error('err_encoder');
        outputUrl = URL.createObjectURL(blob);
        audio.src = outputUrl;
        $('uinOutput').hidden = false;
        hasOutput = true;
        if (emptyState) emptyState.hidden = true;
        $('uinResult').textContent = fill(M.result, {
          preset: presetLabel(preset),
          ms: durMs,
          seconds: (mono.length / RATE).toFixed(3),
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
     * 加载 success / 200 ms 样例并生成（门禁要求存在 loadSample；不自动播放）。
     */
    async function loadSample(){
      if (busy) return;
      preset = 'success';
      durMs = 200;
      syncChips($('uinPresetChips'), 'data-preset', preset);
      syncChips($('uinDurChips'), 'data-ms', durMs);
      await generate();
    }
    /** 重置控件到默认。 */
    function clearAll(){
      if (busy) return;
      preset = 'success';
      durMs = 200;
      syncChips($('uinPresetChips'), 'data-preset', preset);
      syncChips($('uinDurChips'), 'data-ms', durMs);
      discard();
      hud.hidden = true;
    }
    $('uinPresetChips').addEventListener('click', event => {
      const btn = event.target.closest('[data-preset]');
      if (!btn || busy) return;
      preset = btn.getAttribute('data-preset') || 'success';
      syncChips($('uinPresetChips'), 'data-preset', preset);
      discard();
    });
    $('uinDurChips').addEventListener('click', event => {
      const btn = event.target.closest('[data-ms]');
      if (!btn || busy) return;
      durMs = Number(btn.getAttribute('data-ms')) || 200;
      syncChips($('uinDurChips'), 'data-ms', durMs);
      discard();
    });
    $('uinConvert').addEventListener('click', generate);
    $('uinSample').addEventListener('click', loadSample);
    $('uinClear').addEventListener('click', clearAll);
    $('uinDownload').addEventListener('click', () => {
      if (!outputUrl || busy) return;
      const link = document.createElement('a');
      link.href = outputUrl;
      link.download = 'ui-' + preset + '-' + durMs + 'ms.wav';
      document.body.appendChild(link);
      link.click();
      link.remove();
    });
    window.addEventListener('pagehide', () => {
      clearInterval(timer);
      if (outputUrl) URL.revokeObjectURL(outputUrl);
    });
    syncChips($('uinPresetChips'), 'data-preset', preset);
    syncChips($('uinDurChips'), 'data-ms', durMs);
  })();
</script>`;

	/** catalog 元数据（related / schema）。 */
	const toolMeta = getToolBySlug('make-a-short-ui-notification-sound');
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
