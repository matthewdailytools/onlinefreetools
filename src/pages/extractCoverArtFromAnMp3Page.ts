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
const P = 'tool_extract_cover_art_from_an_mp3';

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
 * 从 MP3 抽出 ID3 APIC 封面并下载（U2）。
 * 管线：读 ID3v2 → 解析 APIC → 预览/下载 JPEG 或 PNG；不改写音频帧。
 * ≠ 写标签（A6）；≠ 内嵌歌词（U3）。
 * @param opts.lang 当前 UI 语言
 * @param opts.defaultLang 默认（无前缀）语言
 * @param opts.enabledLangs 启用语言列表
 */
export const renderExtractCoverArtFromAnMp3Page = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	/** 工具规范路径（无语言前缀）。 */
	const toolPath = '/tools/extract-cover-art-from-an-mp3';
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
			currentSlug: 'extract-cover-art-from-an-mp3',
			currentAnchor: '#extract-cover',
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
		'extract',
		'done',
		'failed',
		'elapsed',
		'err_file',
		'err_format',
		'err_limit',
		'err_nocover',
		'err_cover',
		'err_encoder',
		'sample_name',
		'result',
		'empty',
	];
	/** 消息字典：键 → 当前语言字符串。 */
	const messages = Object.fromEntries(uiKeys.map((key) => [key, t(opts.lang, `${P}_${key}`)]));

	/** 工具主面板 markup。 */
	const contentHtml = `
    <div id="extract-cover" class="tool-page-heading mb-3"><h1 class="h4">${tr('title')}</h1><p>${tr('desc')}</p></div>
    <section class="tool-panel" id="ecPanel">
      <label class="tool-dropzone mb-3" id="ecDrop" for="ecFile"><input id="ecFile" type="file" accept=".mp3,audio/mpeg,audio/mp3"><span class="tool-dropzone-title">${tr('choose')}</span><span class="tool-dropzone-hint">${tr('hint')}</span><span id="ecName" class="tool-dropzone-file"></span></label>
      <div class="tools-bar d-flex flex-wrap mb-3" style="gap:.5rem">
        <button id="ecConvert" class="btn btn-primary" type="button">${tr('convert')}</button>
        <button id="ecDownload" class="btn btn-outline-primary" type="button" disabled>${tr('download')}</button>
        <button id="ecSample" class="btn btn-outline-secondary" type="button">${tr('sample')}</button>
        <button id="ecClear" class="btn btn-outline-secondary" type="button">${tr('clear')}</button>
      </div>
      <details class="mb-3"><summary>${tr('advanced')}</summary><p class="form-text mt-2">${tr('settings_hint')}</p></details>
      <div id="ecHud" class="bcw-hud mb-3" role="status" aria-live="polite" hidden>
        <div class="bcw-hud-top"><div class="bcw-hud-spin" aria-hidden="true"></div><div class="bcw-hud-pct" id="ecPct">0%</div><div class="bcw-hud-copy"><div class="bcw-hud-title">${tr('progress')}</div><div class="bcw-hud-step" id="ecStep"></div><div class="bcw-hud-time" id="ecTime"></div></div></div>
        <div class="progress" style="height:1.35rem"><div id="ecBar" class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div><span class="bcw-hud-sheen" aria-hidden="true"></span></div>
        <ol class="bcw-hud-steps"><li data-step="read">${tr('read')}</li><li data-step="extract">${tr('extract')}</li></ol><div class="bcw-hud-url" id="ecCurrent"></div>
      </div>
      <div id="ecOutput" hidden><h2 class="h5">${tr('preview')}</h2><p id="ecResult"></p><img id="ecPreview" class="ec-cover-preview" alt=""></div>
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
			{ label: 'ID3v2.3.0 specification (APIC)', href: 'https://id3.org/id3v2.3.0' },
			{
				label: 'MDN: Blob',
				href: 'https://developer.mozilla.org/en-US/docs/Web/API/Blob',
			},
		],
	});

	/** HUD 与封面预览样式。 */
	const extraHeadHtml = `<style>${bcwHudCss({ hudId: 'ecHud', convertBtnId: 'ecConvert' })}#ecHud.is-error{border-color:#b91c1c;background:#fff1f2}#ecHud:not(.is-on) .bcw-hud-spin{animation:none}.ec-cover-preview{max-width:min(320px,100%);height:auto;border-radius:.35rem;border:1px solid var(--border,#ced4da)}.site-footer nav.d-inline{display:inline-flex!important;flex-wrap:wrap;justify-content:center;max-width:100%}</style>`;

	/** 客户端：读 ID3、抽 APIC、下载封面。 */
	const extraBodyHtml = `<script>
  (function(){
    'use strict';
    /** 当前语言运行时文案。 */
    const M = ${JSON.stringify(messages).replace(/</g, '\\u003c')};
    /** lamejs 路径（仅样例合成用）。 */
    const LAME_SRC = '/vendor/lamejs/lamejs.iife.js';
    /** 单文件最大字节（40 MiB）。 */
    const MAX_BYTES = 40 * 1024 * 1024;
    /** 最长秒数（约 10 分钟 Layer III 帧扫描）。 */
    const MAX_DURATION = 600;
    /**
     * 按 id 取 DOM。
     * @param {string} id 元素 id
     */
    const $ = id => document.getElementById(id);
    /** 面板根节点。 */
    const panel = $('ecPanel');
    /** MP3 文件输入。 */
    const fileInput = $('ecFile');
    /** 进度 HUD。 */
    const hud = $('ecHud');
    /** 当前选中的 MP3 File。 */
    let selected = null;
    /** 是否忙碌（防止重入）。 */
    let busy = false;
    /** 抽出封面的 object URL。 */
    let outputUrl = '';
    /** 封面规范化 MIME（image/jpeg 或 image/png）。 */
    let coverMime = '';
    /** 封面下载扩展名（jpg / png）。 */
    let coverExt = 'jpg';
    /** lamejs 懒加载 Promise（样例）。 */
    let lamePromise = null;
    /** HUD 计时器句柄。 */
    let timer = 0;
    /** 流程开始时间戳。 */
    let started = 0;
    /** 让出主线程，避免 UI 卡顿。 */
    const yieldUi = () => new Promise(resolve => requestAnimationFrame(() => setTimeout(resolve, 0)));
    /**
     * 填充文案模板中的 {占位符}。
     * @param {string} text 模板
     * @param {Record<string, string|number>} values 替换值
     */
    const fill = (text, values) => text.replace(/{(\\w+)}/g, (_, key) => String(values[key] ?? ''));
    /** 丢弃输出封面 URL 与预览。 */
    function discardOutput(){
      if (outputUrl) URL.revokeObjectURL(outputUrl);
      outputUrl = '';
      coverMime = '';
      coverExt = 'jpg';
      $('ecDownload').disabled = true;
      $('ecOutput').hidden = true;
      const img = $('ecPreview');
      img.removeAttribute('src');
    }
    /**
     * 锁定或解锁面板控件。
     * @param {boolean} on 是否锁定
     */
    function lock(on){
      busy = on;
      panel.querySelectorAll('button,input').forEach(el => { el.disabled = on; });
      $('ecDownload').disabled = on || !outputUrl;
      $('ecConvert').setAttribute('aria-busy', String(on));
    }
    /**
     * 更新 HUD 进度与步骤高亮。
     * @param {number} pct 百分比 0–100
     * @param {string} step 步骤键（read / extract / done）
     */
    function progress(pct, step){
      $('ecPct').textContent = Math.round(pct) + '%';
      $('ecBar').style.width = pct + '%';
      $('ecBar').setAttribute('aria-valuenow', String(Math.round(pct)));
      $('ecStep').textContent = M[step];
      hud.querySelectorAll('[data-step]').forEach(el => el.classList.toggle('is-on', el.dataset.step === step));
    }
    /**
     * 进入失败 HUD 状态。
     * @param {string} key 文案键
     */
    function fail(key){
      hud.hidden = false;
      hud.classList.remove('is-on', 'is-done');
      hud.classList.add('is-error', 'is-fail');
      $('ecPct').textContent = '—';
      $('ecBar').style.width = '0%';
      $('ecBar').setAttribute('aria-valuenow', '0');
      hud.setAttribute('role', 'alert');
      $('ecStep').textContent = M[key] || M.failed;
    }
    /**
     * 选择或清空 MP3 文件。
     * @param {File|null} file 文件
     */
    function choose(file){
      if (busy) return;
      discardOutput();
      selected = file || null;
      $('ecName').textContent = file ? file.name : '';
      hud.hidden = true;
      fileInput.value = '';
    }
    /**
     * 判断偏移处是否匹配 ASCII 标签。
     * @param {Uint8Array} b 字节
     * @param {number} p 偏移
     * @param {string} s 标签字符串
     */
    function tagAt(b, p, s){
      return s.split('').every((c, i) => b[p + i] === c.charCodeAt(0));
    }
    /**
     * 解码 ID3 同步安全整数（4 字节，每字节 7 位）。
     * @param {Uint8Array} b 字节
     * @param {number} p 偏移
     */
    function synchsafe(b, p){
      return (b[p] << 21) + (b[p + 1] << 14) + (b[p + 2] << 7) + b[p + 3];
    }
    /**
     * 剥离 ID3v2 头与尾部 ID3v1，返回音频帧区间（与 edit-mp3 一致）。
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
     * 粗扫 Layer III 帧以校验并估时长（与 edit-mp3 inspectFrames 一致）。
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
     * 在区间内找第一个 0x00（ISO-8859-1 / UTF-8 终止符）。
     * @param {Uint8Array} b 字节
     * @param {number} from 起点（含）
     * @param {number} to 终点（不含）
     */
    function findZero(b, from, to){
      for (let i = from; i < to; i++) if (b[i] === 0) return i;
      return -1;
    }
    /**
     * 在区间内找 UTF-16 空终止符（连续两个 0x00）。
     * @param {Uint8Array} b 字节
     * @param {number} from 起点（含）
     * @param {number} to 终点（不含）
     */
    function findUtf16Null(b, from, to){
      for (let i = from; i + 1 < to; i++) if (b[i] === 0 && b[i + 1] === 0) return i;
      return -1;
    }
    /**
     * 规范化并校验封面 MIME；仅接受 JPEG/PNG（含 image/jpg）。
     * @param {string} raw 原始 MIME
     * @returns {{ mime: string, ext: string }}
     */
    function normalizeCoverMime(raw){
      const mime = String(raw || '').toLowerCase().trim();
      if (mime === 'image/png' || mime.indexOf('png') >= 0) return { mime: 'image/png', ext: 'png' };
      if (mime === 'image/jpeg' || mime === 'image/jpg' || mime.indexOf('jpeg') >= 0 || mime.indexOf('jpg') >= 0){
        return { mime: 'image/jpeg', ext: 'jpg' };
      }
      throw Error('err_cover');
    }
    /**
     * 解析 ID3v2.3 / v2.4 中第一个可用 APIC 帧。
     * 帧体：encoding、null 终止 MIME、picture type、encoding 感知的 description、图像字节。
     * @param {Uint8Array} b 整文件
     * @returns {{ mime: string, bytes: Uint8Array }}
     */
    function extractApic(b){
      if (!tagAt(b, 0, 'ID3') || b.length < 10) throw Error('err_nocover');
      const ver = b[3];
      if (ver < 3 || ver > 4) throw Error('err_nocover');
      if ([b[6], b[7], b[8], b[9]].some(x => x > 127)) throw Error('err_nocover');
      let pos = 10;
      const tagSize = synchsafe(b, 6);
      const end = Math.min(b.length, 10 + tagSize);
      if (b[5] & 0x40){
        if (pos + 4 > end) throw Error('err_nocover');
        const ext = ver === 4 ? synchsafe(b, pos) : ((b[pos] << 24) | (b[pos + 1] << 16) | (b[pos + 2] << 8) | b[pos + 3]);
        pos += Math.max(4, ext);
      }
      while (pos + 10 <= end){
        const id = String.fromCharCode(b[pos], b[pos + 1], b[pos + 2], b[pos + 3]);
        if (id === '\\u0000\\u0000\\u0000\\u0000') break;
        /** v2.4 用 synchsafe；v2.3 用大端 32 位。 */
        const size = ver === 4
          ? synchsafe(b, pos + 4)
          : ((b[pos + 4] << 24) | (b[pos + 5] << 16) | (b[pos + 6] << 8) | b[pos + 7]);
        const body = pos + 10;
        if (size < 4 || body + size > end) break;
        if (id === 'APIC'){
          const frame = b.subarray(body, body + size);
          const enc = frame[0];
          let at = 1;
          const mimeEnd = findZero(frame, at, frame.length);
          if (mimeEnd < 0) throw Error('err_cover');
          const mimeRaw = new TextDecoder('iso-8859-1').decode(frame.subarray(at, mimeEnd)).trim();
          at = mimeEnd + 1;
          if (at >= frame.length) throw Error('err_cover');
          /** 跳过 picture type 一字节。 */
          at += 1;
          if (enc === 1 || enc === 2){
            const descEnd = findUtf16Null(frame, at, frame.length);
            if (descEnd < 0) throw Error('err_cover');
            at = descEnd + 2;
          } else {
            const descEnd = findZero(frame, at, frame.length);
            if (descEnd < 0) throw Error('err_cover');
            at = descEnd + 1;
          }
          if (at >= frame.length) throw Error('err_cover');
          const image = frame.subarray(at);
          if (!image.length) throw Error('err_cover');
          const norm = normalizeCoverMime(mimeRaw || 'image/jpeg');
          return { mime: norm.mime, bytes: image, ext: norm.ext };
        }
        pos = body + size;
      }
      throw Error('err_nocover');
    }
    /**
     * 用 Image 测 blob URL 的自然宽高。
     * @param {string} url object URL
     * @returns {Promise<{ w: number, h: number }>}
     */
    function measureImage(url){
      return new Promise((resolve, reject) => {
        const probe = new Image();
        probe.onload = () => resolve({ w: probe.naturalWidth || 0, h: probe.naturalHeight || 0 });
        probe.onerror = () => reject(Error('err_cover'));
        probe.src = url;
      });
    }
    /**
     * 同步安全整数编码（4 字节）。
     * @param {number} n 非负整数
     */
    function encodeSynchsafe(n){
      return Uint8Array.of((n >> 21) & 0x7f, (n >> 14) & 0x7f, (n >> 7) & 0x7f, n & 0x7f);
    }
    /**
     * 编码 ID3v2.3 APIC 帧（样例用，ISO-8859-1 + 空描述）。
     * @param {Uint8Array} image 图片字节
     * @param {string} mime MIME
     */
    function apicFrame(image, mime){
      const mimeBytes = new TextEncoder().encode(mime || 'image/jpeg');
      const desc = Uint8Array.of(0);
      const body = new Uint8Array(1 + mimeBytes.length + 1 + 1 + desc.length + image.length);
      let at = 0;
      body[at++] = 0;
      body.set(mimeBytes, at); at += mimeBytes.length;
      body[at++] = 0;
      body[at++] = 3;
      body.set(desc, at); at += desc.length;
      body.set(image, at);
      const size = body.length;
      const frame = new Uint8Array(10 + size);
      const id = 'APIC';
      for (let i = 0; i < 4; i++) frame[i] = id.charCodeAt(i);
      frame[4] = (size >> 24) & 0xff;
      frame[5] = (size >> 16) & 0xff;
      frame[6] = (size >> 8) & 0xff;
      frame[7] = size & 0xff;
      frame.set(body, 10);
      return frame;
    }
    /**
     * 组装仅含 APIC 的 ID3v2.3 标签块（样例）。
     * @param {Uint8Array} image 封面字节
     * @param {string} mime 封面 MIME
     */
    function buildId3Apic(image, mime){
      const part = apicFrame(image, mime);
      const tag = new Uint8Array(10 + part.length);
      tag[0] = 0x49; tag[1] = 0x44; tag[2] = 0x33;
      tag[3] = 3; tag[4] = 0; tag[5] = 0;
      tag.set(encodeSynchsafe(part.length), 6);
      tag.set(part, 10);
      return tag;
    }
    /**
     * 生成 1×1 演示 JPEG（与 edit-mp3 tinyJpeg 相同）。
     * @returns {Uint8Array}
     */
    function tinyJpeg(){
      return Uint8Array.from([
        0xff,0xd8,0xff,0xe0,0x00,0x10,0x4a,0x46,0x49,0x46,0x00,0x01,0x01,0x00,0x00,0x01,0x00,0x01,0x00,0x00,
        0xff,0xdb,0x00,0x43,0x00,0x08,0x06,0x06,0x07,0x06,0x05,0x08,0x07,0x07,0x07,0x09,0x09,0x08,0x0a,0x0c,
        0x14,0x0d,0x0c,0x0b,0x0b,0x0c,0x19,0x12,0x13,0x0f,0x14,0x1d,0x1a,0x1f,0x1e,0x1d,0x1a,0x1c,0x1c,0x20,
        0x24,0x2e,0x27,0x20,0x22,0x2c,0x23,0x1c,0x1c,0x28,0x37,0x29,0x2c,0x30,0x31,0x34,0x34,0x34,0x1f,0x27,
        0x39,0x3d,0x38,0x32,0x3c,0x2e,0x33,0x34,0x32,0xff,0xc0,0x00,0x0b,0x08,0x00,0x01,0x00,0x01,0x01,0x01,
        0x11,0x00,0xff,0xc4,0x00,0x14,0x00,0x01,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,
        0x00,0x00,0x00,0x08,0xff,0xc4,0x00,0x14,0x10,0x01,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,
        0x00,0x00,0x00,0x00,0x00,0x00,0xff,0xda,0x00,0x08,0x01,0x01,0x00,0x00,0x3f,0x00,0x7f,0xbf,0xff,0xd9
      ]);
    }
    /** 懒加载 lamejs（仅样例合成）。 */
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
    /** 主流程：读 MP3 → 抽 APIC → 预览并准备下载。 */
    async function extractCover(){
      if (busy) return;
      if (!selected){ fail('empty'); return; }
      discardOutput();
      lock(true);
      hud.hidden = false;
      hud.className = 'bcw-hud is-on mb-3';
      hud.setAttribute('role', 'status');
      $('ecCurrent').textContent = selected.name;
      started = performance.now();
      const clock = () => { $('ecTime').textContent = fill(M.elapsed, { s: ((performance.now() - started) / 1000).toFixed(1) }); };
      clock();
      timer = setInterval(clock, 100);
      try {
        progress(8, 'read');
        await yieldUi();
        if (selected.size > MAX_BYTES) throw Error('err_limit');
        const bytes = new Uint8Array(await selected.arrayBuffer());
        const range = audioSlice(bytes);
        inspectFrames(bytes, range.start, range.end);
        progress(55, 'extract');
        await yieldUi();
        const cover = extractApic(bytes);
        coverMime = cover.mime;
        coverExt = cover.ext;
        const blob = new Blob([cover.bytes], { type: coverMime });
        if (!blob.size) throw Error('err_cover');
        outputUrl = URL.createObjectURL(blob);
        const dims = await measureImage(outputUrl);
        $('ecPreview').src = outputUrl;
        $('ecOutput').hidden = false;
        $('ecResult').textContent = fill(M.result, {
          mime: coverMime,
          w: dims.w,
          h: dims.h,
          output: (blob.size / 1024).toFixed(2),
          input: (selected.size / 1024).toFixed(1),
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
    /** 合成带 APIC 的 3 秒单声道 440Hz 样例 MP3，并自动抽出封面。 */
    async function loadSample(){
      if (busy) return;
      discardOutput();
      lock(true);
      hud.hidden = false;
      hud.className = 'bcw-hud is-on mb-3';
      progress(10, 'read');
      $('ecCurrent').textContent = M.sample_name;
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
        let audioLen = 0;
        parts.forEach(p => { audioLen += p.length; });
        const audio = new Uint8Array(audioLen);
        let off = 0;
        parts.forEach(p => { audio.set(p, off); off += p.length; });
        const id3 = buildId3Apic(tinyJpeg(), 'image/jpeg');
        const out = new Uint8Array(id3.length + audio.length);
        out.set(id3, 0);
        out.set(audio, id3.length);
        selected = new File([out], M.sample_name + '.mp3', { type: 'audio/mpeg' });
        $('ecName').textContent = selected.name;
        lock(false);
        await extractCover();
      } catch (e) {
        lock(false);
        fail(e && M[e.message] ? e.message : 'failed');
      }
    }
    fileInput.addEventListener('change', () => choose(fileInput.files[0]));
    $('ecDrop').addEventListener('dragover', event => event.preventDefault());
    $('ecDrop').addEventListener('drop', event => {
      event.preventDefault();
      if (busy) return;
      const files = event.dataTransfer.files;
      if (files.length !== 1){ choose(null); fail('err_file'); return; }
      choose(files[0]);
    });
    $('ecConvert').addEventListener('click', extractCover);
    $('ecSample').addEventListener('click', loadSample);
    $('ecClear').addEventListener('click', () => { if (busy) return; choose(null); });
    $('ecDownload').addEventListener('click', () => {
      if (!outputUrl || busy) return;
      const link = document.createElement('a');
      link.href = outputUrl;
      link.download = (selected && selected.name ? selected.name.replace(/\\.[^.]+$/, '') : 'cover') + '-cover.' + coverExt;
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
	const toolMeta = getToolBySlug('extract-cover-art-from-an-mp3');
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
