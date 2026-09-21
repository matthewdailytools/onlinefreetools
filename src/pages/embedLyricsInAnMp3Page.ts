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
const P = 'tool_embed_lyrics_in_an_mp3';

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
 * 向 MP3 嵌入未同步歌词 USLT（U3）。
 * 管线：剥离 ID3 → 保留 TIT2/TPE1/TALB → 写 ID3v2.3 USLT → 原样拼接 Layer III（不重编码）。
 * ≠ 同步 LRC；≠ 抽封面（U2）；≠ 改曲名主作业（A6）。
 * @param opts.lang 当前 UI 语言
 * @param opts.defaultLang 默认（无前缀）语言
 * @param opts.enabledLangs 启用语言列表
 */
export const renderEmbedLyricsInAnMp3Page = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	/** 工具规范路径（无语言前缀）。 */
	const toolPath = '/tools/embed-lyrics-in-an-mp3';
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

	/** 侧栏 HTML。 */
	const sidebarHtml = renderSidebar({
		title: t(opts.lang, 'nav_tools'),
		groups: buildToolSidebarItems({
			lang: opts.lang,
			defaultLang: opts.defaultLang,
			currentSlug: 'embed-lyrics-in-an-mp3',
			currentAnchor: '#embed-lyrics',
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
		'write',
		'done',
		'failed',
		'elapsed',
		'err_file',
		'err_format',
		'err_limit',
		'err_lyrics',
		'err_lang',
		'err_encoder',
		'sample_name',
		'result',
		'empty',
	];
	/** 消息字典：键 → 当前语言字符串。 */
	const messages = Object.fromEntries(uiKeys.map((key) => [key, t(opts.lang, `${P}_${key}`)]));

	/** 工具主面板 markup。 */
	const contentHtml = `
    <div id="embed-lyrics" class="tool-page-heading mb-3"><h1 class="h4">${tr('title')}</h1><p>${tr('desc')}</p></div>
    <section class="tool-panel" id="elPanel">
      <label class="tool-dropzone mb-3" id="elDrop" for="elFile"><input id="elFile" type="file" accept=".mp3,audio/mpeg,audio/mp3"><span class="tool-dropzone-title">${tr('choose')}</span><span class="tool-dropzone-hint">${tr('hint')}</span><span id="elName" class="tool-dropzone-file"></span></label>
      <div class="mb-3"><label class="form-label" for="elLyrics">${tr('field_lyrics')}</label><textarea id="elLyrics" class="form-control" rows="8" maxlength="20000" spellcheck="true"></textarea><p class="form-text">${tr('lyrics_hint')}</p></div>
      <div class="mb-3" style="max-width:12rem"><label class="form-label" for="elLang">${tr('field_lang')}</label><input id="elLang" class="form-control" type="text" maxlength="3" value="eng" autocomplete="off"><p class="form-text">${tr('lang_hint')}</p></div>
      <div class="tools-bar d-flex flex-wrap mb-3" style="gap:.5rem">
        <button id="elConvert" class="btn btn-primary" type="button">${tr('convert')}</button>
        <button id="elDownload" class="btn btn-outline-primary" type="button" disabled>${tr('download')}</button>
        <button id="elSample" class="btn btn-outline-secondary" type="button">${tr('sample')}</button>
        <button id="elClear" class="btn btn-outline-secondary" type="button">${tr('clear')}</button>
      </div>
      <details class="mb-3"><summary>${tr('advanced')}</summary><p class="form-text mt-2">${tr('settings_hint')}</p></details>
      <div id="elHud" class="bcw-hud mb-3" role="status" aria-live="polite" hidden>
        <div class="bcw-hud-top"><div class="bcw-hud-spin" aria-hidden="true"></div><div class="bcw-hud-pct" id="elPct">0%</div><div class="bcw-hud-copy"><div class="bcw-hud-title">${tr('progress')}</div><div class="bcw-hud-step" id="elStep"></div><div class="bcw-hud-time" id="elTime"></div></div></div>
        <div class="progress" style="height:1.35rem"><div id="elBar" class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div><span class="bcw-hud-sheen" aria-hidden="true"></span></div>
        <ol class="bcw-hud-steps"><li data-step="read">${tr('read')}</li><li data-step="write">${tr('write')}</li></ol><div class="bcw-hud-url" id="elCurrent"></div>
      </div>
      <div id="elOutput" hidden><h2 class="h5">${tr('preview')}</h2><p id="elResult"></p><audio id="elAudio" controls preload="metadata" style="max-width:100%" aria-label="${tr('preview')}"></audio></div>
    </section>`;

	/** How / Why / Rules / Use cases。 */
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
			{ label: 'ID3v2.3.0 specification (USLT)', href: 'https://id3.org/id3v2.3.0' },
			{
				label: 'MDN: ArrayBuffer',
				href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer',
			},
		],
	});

	/** HUD 与歌词框样式。 */
	const extraHeadHtml = `<style>${bcwHudCss({ hudId: 'elHud', convertBtnId: 'elConvert' })}#elHud.is-error{border-color:#b91c1c;background:#fff1f2}#elHud:not(.is-on) .bcw-hud-spin{animation:none}#elLyrics{font-family:ui-monospace,SFMono-Regular,Menlo,Consolas,monospace;font-size:.9rem}.site-footer nav.d-inline{display:inline-flex!important;flex-wrap:wrap;justify-content:center;max-width:100%}</style>`;

	/** 客户端：读标签、写 USLT、不重编码。 */
	const extraBodyHtml = `<script>
  (function(){
    'use strict';
    /** 当前语言运行时文案。 */
    const M = ${JSON.stringify(messages).replace(/</g, '\\u003c')};
    /** lamejs 路径（仅样例合成用）。 */
    const LAME_SRC = '/vendor/lamejs/lamejs.iife.js';
    /** 单文件最大字节（40 MiB）。 */
    const MAX_BYTES = 40 * 1024 * 1024;
    /** 歌词最大字符数。 */
    const MAX_LYRICS = 20000;
    /** 最长秒数（帧扫描）。 */
    const MAX_DURATION = 600;
    /** 样例演示歌词（固定英文短诗）。 */
    const SAMPLE_LYRICS = 'Line one of the demo verse.\\nLine two keeps the sample short.\\nEmbed lyrics without re-encoding.';
    /**
     * 按 id 取 DOM。
     * @param {string} id 元素 id
     */
    const $ = id => document.getElementById(id);
    /** 面板根节点。 */
    const panel = $('elPanel');
    /** MP3 文件输入。 */
    const fileInput = $('elFile');
    /** 进度 HUD。 */
    const hud = $('elHud');
    /** 试听元素。 */
    const audio = $('elAudio');
    /** 当前 MP3 File。 */
    let selected = null;
    /** 是否忙碌。 */
    let busy = false;
    /** 输出 MP3 object URL。 */
    let outputUrl = '';
    /** lamejs Promise（样例）。 */
    let lamePromise = null;
    /** 计时器句柄。 */
    let timer = 0;
    /** 开始时间戳。 */
    let started = 0;
    /** 让出主线程。 */
    const yieldUi = () => new Promise(resolve => requestAnimationFrame(() => setTimeout(resolve, 0)));
    /**
     * 填充模板占位符。
     * @param {string} text 模板
     * @param {Record<string, string|number>} values 值
     */
    const fill = (text, values) => text.replace(/{(\\w+)}/g, (_, key) => String(values[key] ?? ''));
    /** 丢弃输出与试听。 */
    function discardOutput(){
      audio.pause();
      audio.removeAttribute('src');
      audio.load();
      if (outputUrl) URL.revokeObjectURL(outputUrl);
      outputUrl = '';
      $('elDownload').disabled = true;
      $('elOutput').hidden = true;
    }
    /**
     * 锁定或解锁控件。
     * @param {boolean} on 是否锁定
     */
    function lock(on){
      busy = on;
      panel.querySelectorAll('button,input,textarea').forEach(el => { el.disabled = on; });
      $('elDownload').disabled = on || !outputUrl;
      $('elConvert').setAttribute('aria-busy', String(on));
    }
    /**
     * 更新 HUD 进度。
     * @param {number} pct 百分比
     * @param {string} step 步骤键
     */
    function progress(pct, step){
      $('elPct').textContent = Math.round(pct) + '%';
      $('elBar').style.width = pct + '%';
      $('elBar').setAttribute('aria-valuenow', String(Math.round(pct)));
      $('elStep').textContent = M[step];
      hud.querySelectorAll('[data-step]').forEach(el => el.classList.toggle('is-on', el.dataset.step === step));
    }
    /**
     * 失败状态。
     * @param {string} key 文案键
     */
    function fail(key){
      hud.hidden = false;
      hud.classList.remove('is-on', 'is-done');
      hud.classList.add('is-error', 'is-fail');
      $('elPct').textContent = '—';
      $('elBar').style.width = '0%';
      $('elBar').setAttribute('aria-valuenow', '0');
      hud.setAttribute('role', 'alert');
      $('elStep').textContent = M[key] || M.failed;
    }
    /**
     * 选择 MP3。
     * @param {File|null} file 文件
     */
    function choose(file){
      if (busy) return;
      discardOutput();
      selected = file || null;
      $('elName').textContent = file ? file.name : '';
      hud.hidden = true;
      fileInput.value = '';
    }
    /**
     * 是否像 ASCII 标签。
     * @param {Uint8Array} b 字节
     * @param {number} p 偏移
     * @param {string} s 标签
     */
    function tagAt(b, p, s){
      return s.split('').every((c, i) => b[p + i] === c.charCodeAt(0));
    }
    /**
     * 同步安全整数解码。
     * @param {Uint8Array} b 字节
     * @param {number} p 偏移
     */
    function synchsafe(b, p){
      return (b[p] << 21) + (b[p + 1] << 14) + (b[p + 2] << 7) + b[p + 3];
    }
    /**
     * 剥离 ID3v2 头与尾部 ID3v1，返回音频帧区间。
     * @param {Uint8Array} b 整文件
     */
    function audioSlice(b){
      let start = 0;
      let end = b.length;
      if (tagAt(b, 0, 'ID3')){
        if (b.length < 10 || b[3] < 2 || b[3] > 4) throw Error('err_format');
        if ([b[6], b[7], b[8], b[9]].some(x => x > 127)) throw Error('err_format');
        start = 10 + synchsafe(b, 6);
        if ((b[5] & 0x10) && b[3] === 4) start += 10;
        if (start > b.length) throw Error('err_format');
      }
      if (end - start >= 128 && tagAt(b, end - 128, 'TAG')) end -= 128;
      if (end - start < 4) throw Error('err_format');
      return { start, end };
    }
    /**
     * 粗扫 Layer III 以校验并估时长。
     * @param {Uint8Array} b 整文件
     * @param {number} start 音频起点
     * @param {number} end 音频终点
     */
    function inspectFrames(b, start, end){
      let at = start;
      let duration = 0;
      let frames = 0;
      let first = null;
      while (at + 4 <= end){
        if (b[at] !== 255 || (b[at + 1] & 224) !== 224) throw Error('err_format');
        const version = (b[at + 1] >> 3) & 3;
        const layer = (b[at + 1] >> 1) & 3;
        const index = b[at + 2] >> 4;
        const sr = (b[at + 2] >> 2) & 3;
        if (version === 1 || layer !== 1 || index === 0 || index === 15 || sr === 3) throw Error('err_format');
        const rate = [44100, 48000, 32000][sr] / (version === 3 ? 1 : version === 2 ? 2 : 4);
        const kbps = (version === 3
          ? [0, 32, 40, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320]
          : [0, 8, 16, 24, 32, 40, 48, 56, 64, 80, 96, 112, 128, 144, 160])[index];
        const length = Math.floor((version === 3 ? 144000 : 72000) * kbps / rate) + ((b[at + 2] >> 1) & 1);
        if (at + length > end || length < 4) throw Error('err_format');
        const count = (b[at + 3] >> 6) === 3 ? 1 : 2;
        if (first && (first.rate !== rate || first.channels !== count)) throw Error('err_format');
        if (!first) first = { rate, channels: count };
        duration += (version === 3 ? 1152 : 576) / rate;
        frames++;
        at += length;
        if (duration > MAX_DURATION + 0.1) throw Error('err_limit');
      }
      if (frames < 2 || at !== end) throw Error('err_format');
      return { ...first, duration };
    }
    /**
     * 从现有 ID3v2 文本帧粗读 title/artist/album。
     * @param {Uint8Array} b 整文件
     */
    function readId3Text(b){
      const out = { title: '', artist: '', album: '' };
      if (!tagAt(b, 0, 'ID3') || b.length < 10) return out;
      const ver = b[3];
      if (ver < 3 || ver > 4) return out;
      if ([b[6], b[7], b[8], b[9]].some(x => x > 127)) return out;
      let pos = 10;
      const tagSize = synchsafe(b, 6);
      const end = Math.min(b.length, 10 + tagSize);
      if (b[5] & 0x40){
        if (pos + 4 > end) return out;
        const ext = ver === 4 ? synchsafe(b, pos) : ((b[pos] << 24) | (b[pos + 1] << 16) | (b[pos + 2] << 8) | b[pos + 3]);
        pos += Math.max(4, ext);
      }
      while (pos + 10 <= end){
        const id = String.fromCharCode(b[pos], b[pos + 1], b[pos + 2], b[pos + 3]);
        if (id === '\\u0000\\u0000\\u0000\\u0000') break;
        const size = ver === 4
          ? synchsafe(b, pos + 4)
          : ((b[pos + 4] << 24) | (b[pos + 5] << 16) | (b[pos + 6] << 8) | b[pos + 7]);
        const body = pos + 10;
        if (size < 1 || body + size > end) break;
        if (id === 'TIT2' || id === 'TPE1' || id === 'TALB'){
          const text = decodeTextFrame(b.subarray(body, body + size));
          if (id === 'TIT2') out.title = text;
          if (id === 'TPE1') out.artist = text;
          if (id === 'TALB') out.album = text;
        }
        pos = body + size;
      }
      return out;
    }
    /**
     * 解码文本帧内容。
     * @param {Uint8Array} body 帧体
     */
    function decodeTextFrame(body){
      if (!body.length) return '';
      const enc = body[0];
      const data = body.subarray(1);
      try {
        if (enc === 0) return new TextDecoder('iso-8859-1').decode(data).replace(/\\u0000+$/, '').trim();
        if (enc === 1 || enc === 2){
          let start = 0;
          let le = true;
          if (enc === 1 && data.length >= 2){
            if (data[0] === 0xff && data[1] === 0xfe){ le = true; start = 2; }
            else if (data[0] === 0xfe && data[1] === 0xff){ le = false; start = 2; }
          }
          return new TextDecoder(le ? 'utf-16le' : 'utf-16be').decode(data.subarray(start)).replace(/\\u0000+$/, '').trim();
        }
        if (enc === 3) return new TextDecoder('utf-8').decode(data).replace(/\\u0000+$/, '').trim();
      } catch (e) {}
      return '';
    }
    /**
     * 同步安全编码（4 字节）。
     * @param {number} n 非负整数
     */
    function encodeSynchsafe(n){
      return Uint8Array.of((n >> 21) & 0x7f, (n >> 14) & 0x7f, (n >> 7) & 0x7f, n & 0x7f);
    }
    /**
     * 编码 ID3v2.3 文本帧（UTF-16LE + BOM，带 NUL）。
     * @param {string} id 四字符帧 ID
     * @param {string} text 文本
     */
    function textFrame(id, text){
      const value = String(text || '').slice(0, 200);
      const chars = [];
      for (let i = 0; i < value.length; i++){
        const code = value.charCodeAt(i);
        chars.push(code & 0xff, (code >> 8) & 0xff);
      }
      const body = new Uint8Array(1 + 2 + chars.length + 2);
      body[0] = 1;
      body[1] = 0xff;
      body[2] = 0xfe;
      body.set(chars, 3);
      body[body.length - 2] = 0;
      body[body.length - 1] = 0;
      const size = body.length;
      const frame = new Uint8Array(10 + size);
      for (let i = 0; i < 4; i++) frame[i] = id.charCodeAt(i);
      frame[4] = (size >> 24) & 0xff;
      frame[5] = (size >> 16) & 0xff;
      frame[6] = (size >> 8) & 0xff;
      frame[7] = size & 0xff;
      frame.set(body, 10);
      return frame;
    }
    /**
     * 编码 UTF-16LE + BOM 歌词字节（含结尾 NUL）。
     * @param {string} text 歌词
     */
    function utf16BomNull(text){
      const value = String(text || '');
      const chars = [];
      for (let i = 0; i < value.length; i++){
        const code = value.charCodeAt(i);
        chars.push(code & 0xff, (code >> 8) & 0xff);
      }
      const out = new Uint8Array(2 + chars.length + 2);
      out[0] = 0xff;
      out[1] = 0xfe;
      out.set(chars, 2);
      out[out.length - 2] = 0;
      out[out.length - 1] = 0;
      return out;
    }
    /**
     * 编码 ID3v2.3 USLT 帧（encoding 1，空描述符）。
     * @param {string} lang 三字母小写语言码
     * @param {string} lyrics 歌词正文
     */
    function usltFrame(lang, lyrics){
      const langBytes = new TextEncoder().encode((lang || 'eng').toLowerCase().slice(0, 3));
      const text = utf16BomNull(String(lyrics || '').slice(0, MAX_LYRICS));
      /** 空 content descriptor：UTF-16 终止符 0x00 0x00。 */
      const descTerm = Uint8Array.of(0, 0);
      const body = new Uint8Array(1 + 3 + descTerm.length + text.length);
      let at = 0;
      body[at++] = 1;
      body.set(langBytes, at); at += 3;
      body.set(descTerm, at); at += descTerm.length;
      body.set(text, at);
      const size = body.length;
      const frame = new Uint8Array(10 + size);
      const id = 'USLT';
      for (let i = 0; i < 4; i++) frame[i] = id.charCodeAt(i);
      frame[4] = (size >> 24) & 0xff;
      frame[5] = (size >> 16) & 0xff;
      frame[6] = (size >> 8) & 0xff;
      frame[7] = size & 0xff;
      frame.set(body, 10);
      return frame;
    }
    /**
     * 组装 ID3v2.3：保留文本帧 + 新 USLT。
     * @param {{title:string,artist:string,album:string}} tags 已有文本
     * @param {string} lang 语言码
     * @param {string} lyrics 歌词
     */
    function buildId3(tags, lang, lyrics){
      const parts = [];
      if (tags.title) parts.push(textFrame('TIT2', tags.title));
      if (tags.artist) parts.push(textFrame('TPE1', tags.artist));
      if (tags.album) parts.push(textFrame('TALB', tags.album));
      parts.push(usltFrame(lang, lyrics));
      let framesLen = 0;
      parts.forEach(p => { framesLen += p.length; });
      const tag = new Uint8Array(10 + framesLen);
      tag[0] = 0x49; tag[1] = 0x44; tag[2] = 0x33;
      tag[3] = 3; tag[4] = 0; tag[5] = 0;
      tag.set(encodeSynchsafe(framesLen), 6);
      let at = 10;
      parts.forEach(p => { tag.set(p, at); at += p.length; });
      return tag;
    }
    /** 懒加载 lamejs（仅样例）。 */
    function loadLame(){
      if (window.lamejs && window.lamejs.Mp3Encoder) return Promise.resolve(window.lamejs);
      if (!lamePromise){
        lamePromise = new Promise((resolve, reject) => {
          const script = document.createElement('script');
          let timeout;
          const bad = () => { clearTimeout(timeout); script.remove(); lamePromise = null; reject(Error('err_encoder')); };
          script.src = LAME_SRC;
          script.onerror = bad;
          script.onload = () => { clearTimeout(timeout); if (window.lamejs && window.lamejs.Mp3Encoder) resolve(window.lamejs); else bad(); };
          timeout = setTimeout(bad, 20000);
          document.head.appendChild(script);
        });
      }
      return lamePromise;
    }
    /** 主流程：读 → 写 USLT（不重编码）。 */
    async function applyLyrics(){
      if (busy) return;
      if (!selected){ fail('empty'); return; }
      const lyrics = String($('elLyrics').value || '').trim();
      if (!lyrics || lyrics.length > MAX_LYRICS){ fail('err_lyrics'); return; }
      const langRaw = String($('elLang').value || '').trim();
      if (!/^[a-zA-Z]{3}$/.test(langRaw)){ fail('err_lang'); return; }
      /** 规范化为小写三字母语言码。 */
      const lang = langRaw.toLowerCase();
      $('elLang').value = lang;
      discardOutput();
      lock(true);
      hud.hidden = false;
      hud.className = 'bcw-hud is-on mb-3';
      hud.setAttribute('role', 'status');
      $('elCurrent').textContent = selected.name;
      started = performance.now();
      const clock = () => { $('elTime').textContent = fill(M.elapsed, { s: ((performance.now() - started) / 1000).toFixed(1) }); };
      clock();
      timer = setInterval(clock, 100);
      try {
        progress(5, 'read');
        await yieldUi();
        if (selected.size > MAX_BYTES) throw Error('err_limit');
        const bytes = new Uint8Array(await selected.arrayBuffer());
        const tags = readId3Text(bytes);
        const range = audioSlice(bytes);
        const info = inspectFrames(bytes, range.start, range.end);
        progress(45, 'write');
        await yieldUi();
        const id3 = buildId3(tags, lang, lyrics);
        const audioPart = bytes.subarray(range.start, range.end);
        const out = new Uint8Array(id3.length + audioPart.length);
        out.set(id3, 0);
        out.set(audioPart, id3.length);
        const blob = new Blob([out], { type: 'audio/mpeg' });
        if (!blob.size) throw Error('err_format');
        outputUrl = URL.createObjectURL(blob);
        audio.src = outputUrl;
        $('elOutput').hidden = false;
        $('elResult').textContent = fill(M.result, {
          lang,
          chars: lyrics.length,
          seconds: info.duration.toFixed(2),
          input: (selected.size / 1024).toFixed(1),
          output: (blob.size / 1024).toFixed(1),
        });
        progress(100, 'done');
        hud.classList.remove('is-on');
        hud.classList.add('is-done');
      } catch (e) {
        discardOutput();
        fail(e && M[e.message] ? e.message : 'failed');
      } finally {
        clearInterval(timer);
        clock();
        lock(false);
      }
    }
    /** 合成 3 秒短 MP3 样例并自动写入演示歌词。 */
    async function loadSample(){
      if (busy) return;
      discardOutput();
      lock(true);
      hud.hidden = false;
      hud.className = 'bcw-hud is-on mb-3';
      progress(10, 'read');
      $('elCurrent').textContent = M.sample_name;
      try {
        const lame = await loadLame();
        const rate = 44100;
        const frames = rate * 3;
        const enc = new lame.Mp3Encoder(1, rate, 128);
        const parts = [];
        for (let at = 0; at < frames; at += 1152){
          const end = Math.min(at + 1152, frames);
          const pcm = new Int16Array(end - at);
          for (let i = at; i < end; i++){
            const t = i / rate;
            const env = t < 0.02 ? t / 0.02 : (t > 2.96 ? Math.max(0, (3 - t) / 0.04) : 1);
            pcm[i - at] = Math.round(Math.sin(2 * Math.PI * 440 * t) * 0.25 * env * 32767);
          }
          const chunk = enc.encodeBuffer(pcm);
          if (chunk.length) parts.push(new Uint8Array(chunk));
        }
        const fin = enc.flush();
        if (fin.length) parts.push(new Uint8Array(fin));
        const raw = new Blob(parts, { type: 'audio/mpeg' });
        selected = new File([raw], M.sample_name + '.mp3', { type: 'audio/mpeg' });
        $('elName').textContent = selected.name;
        $('elLyrics').value = SAMPLE_LYRICS;
        $('elLang').value = 'eng';
        lock(false);
        await applyLyrics();
      } catch (e) {
        lock(false);
        fail(e && M[e.message] ? e.message : 'failed');
      }
    }
    fileInput.addEventListener('change', () => choose(fileInput.files[0]));
    $('elDrop').addEventListener('dragover', event => event.preventDefault());
    $('elDrop').addEventListener('drop', event => {
      event.preventDefault();
      if (busy) return;
      const files = event.dataTransfer.files;
      if (files.length !== 1){ choose(null); fail('err_file'); return; }
      choose(files[0]);
    });
    $('elConvert').addEventListener('click', applyLyrics);
    $('elSample').addEventListener('click', loadSample);
    $('elClear').addEventListener('click', () => {
      if (busy) return;
      choose(null);
      $('elLyrics').value = '';
      $('elLang').value = 'eng';
    });
    $('elDownload').addEventListener('click', () => {
      if (!outputUrl || busy) return;
      const link = document.createElement('a');
      link.href = outputUrl;
      link.download = (selected && selected.name ? selected.name.replace(/\\.[^.]+$/, '') : 'lyrics') + '.mp3';
      document.body.appendChild(link);
      link.click();
      link.remove();
    });
    window.addEventListener('pagehide', () => {
      clearInterval(timer);
      if (outputUrl) URL.revokeObjectURL(outputUrl);
    });
    loadSample();
  })();</script>`;

	/** catalog 元数据。 */
	const toolMeta = getToolBySlug('embed-lyrics-in-an-mp3');
	/** related / FAQ。 */
	const extraSectionsHtml = toolMeta
		? renderToolExtraSections({ lang: opts.lang, defaultLang: opts.defaultLang, tool: toolMeta })
		: '';
	/** JSON-LD。 */
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
