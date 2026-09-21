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
const P = 'tool_edit_mp3_title_and_cover_art';

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
 * 编辑 MP3 曲名/艺人/专辑与可选封面（A6）。
 * 管线：剥离 ID3 → 写 ID3v2.3 → 原样拼接 Layer III 帧（不重编码 PCM）。
 * ≠ 减小体积重编码；≠ 批量 WAV→MP3。
 * @param opts.lang 当前 UI 语言
 * @param opts.defaultLang 默认（无前缀）语言
 * @param opts.enabledLangs 启用语言列表
 */
export const renderEditMp3TitleAndCoverArtPage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	/** 工具规范路径（无语言前缀）。 */
	const toolPath = '/tools/edit-mp3-title-and-cover-art';
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
			currentSlug: 'edit-mp3-title-and-cover-art',
			currentAnchor: '#edit-mp3-tags',
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
		'err_cover',
		'err_encoder',
		'sample_name',
		'result',
		'empty',
		'cover_ready',
		'cover_none',
	];
	/** 消息字典：键 → 当前语言字符串。 */
	const messages = Object.fromEntries(uiKeys.map((key) => [key, t(opts.lang, `${P}_${key}`)]));

	/** 工具主面板 markup。 */
	const contentHtml = `
    <div id="edit-mp3-tags" class="tool-page-heading mb-3"><h1 class="h4">${tr('title')}</h1><p>${tr('desc')}</p></div>
    <section class="tool-panel" id="emPanel">
      <label class="tool-dropzone mb-3" id="emDrop" for="emFile"><input id="emFile" type="file" accept=".mp3,audio/mpeg,audio/mp3"><span class="tool-dropzone-title">${tr('choose')}</span><span class="tool-dropzone-hint">${tr('hint')}</span><span id="emName" class="tool-dropzone-file"></span></label>
      <div class="row g-3 mb-3">
        <div class="col-md-4"><label class="form-label" for="emTitle">${tr('field_title')}</label><input id="emTitle" class="form-control" type="text" maxlength="200" autocomplete="off"></div>
        <div class="col-md-4"><label class="form-label" for="emArtist">${tr('field_artist')}</label><input id="emArtist" class="form-control" type="text" maxlength="200" autocomplete="off"></div>
        <div class="col-md-4"><label class="form-label" for="emAlbum">${tr('field_album')}</label><input id="emAlbum" class="form-control" type="text" maxlength="200" autocomplete="off"></div>
      </div>
      <div class="mb-3">
        <label class="form-label" for="emCover">${tr('field_cover')}</label>
        <input id="emCover" class="form-control" type="file" accept="image/jpeg,image/png,.jpg,.jpeg,.png">
        <p class="form-text">${tr('cover_hint')}</p>
        <div class="d-flex flex-wrap align-items-center gap-2 mt-2">
          <img id="emCoverPreview" class="em-cover-preview" alt="" hidden>
          <span id="emCoverStatus" class="form-text mb-0">${tr('cover_none')}</span>
          <button id="emCoverClear" class="btn btn-sm btn-outline-secondary" type="button">${tr('cover_clear')}</button>
        </div>
      </div>
      <div class="tools-bar d-flex flex-wrap mb-3" style="gap:.5rem">
        <button id="emConvert" class="btn btn-primary" type="button">${tr('convert')}</button>
        <button id="emDownload" class="btn btn-outline-primary" type="button" disabled>${tr('download')}</button>
        <button id="emSample" class="btn btn-outline-secondary" type="button">${tr('sample')}</button>
        <button id="emClear" class="btn btn-outline-secondary" type="button">${tr('clear')}</button>
      </div>
      <details class="mb-3"><summary>${tr('advanced')}</summary><p class="form-text mt-2">${tr('settings_hint')}</p></details>
      <div id="emHud" class="bcw-hud mb-3" role="status" aria-live="polite" hidden>
        <div class="bcw-hud-top"><div class="bcw-hud-spin" aria-hidden="true"></div><div class="bcw-hud-pct" id="emPct">0%</div><div class="bcw-hud-copy"><div class="bcw-hud-title">${tr('progress')}</div><div class="bcw-hud-step" id="emStep"></div><div class="bcw-hud-time" id="emTime"></div></div></div>
        <div class="progress" style="height:1.35rem"><div id="emBar" class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div><span class="bcw-hud-sheen" aria-hidden="true"></span></div>
        <ol class="bcw-hud-steps"><li data-step="read">${tr('read')}</li><li data-step="write">${tr('write')}</li></ol><div class="bcw-hud-url" id="emCurrent"></div>
      </div>
      <div id="emOutput" hidden><h2 class="h5">${tr('preview')}</h2><p id="emResult"></p><audio id="emAudio" controls preload="metadata" style="max-width:100%" aria-label="${tr('preview')}"></audio></div>
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
			{ label: 'ID3v2.3.0 specification', href: 'https://id3.org/id3v2.3.0' },
			{
				label: 'MDN: FileReader / ArrayBuffer',
				href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer',
			},
		],
	});

	/** HUD 与封面预览样式。 */
	const extraHeadHtml = `<style>${bcwHudCss({ hudId: 'emHud', convertBtnId: 'emConvert' })}#emHud.is-error{border-color:#b91c1c;background:#fff1f2}#emHud:not(.is-on) .bcw-hud-spin{animation:none}.em-cover-preview{width:96px;height:96px;object-fit:cover;border-radius:.35rem;border:1px solid var(--border,#ced4da)}.site-footer nav.d-inline{display:inline-flex!important;flex-wrap:wrap;justify-content:center;max-width:100%}</style>`;

	/** 客户端：读标签、写 ID3v2.3、不重编码。 */
	const extraBodyHtml = `<script>
  (function(){
    'use strict';
    /** 当前语言运行时文案。 */
    const M = ${JSON.stringify(messages).replace(/</g, '\\u003c')};
    /** lamejs 路径（仅样例合成用）。 */
    const LAME_SRC = '/vendor/lamejs/lamejs.iife.js';
    /** 单文件最大字节。 */
    const MAX_BYTES = 40 * 1024 * 1024;
    /** 封面最大字节。 */
    const MAX_COVER = 2 * 1024 * 1024;
    /** 最长秒数（帧扫描）。 */
    const MAX_DURATION = 600;
    /**
     * 按 id 取 DOM。
     * @param {string} id 元素 id
     */
    const $ = id => document.getElementById(id);
    /** 面板根节点。 */
    const panel = $('emPanel');
    /** MP3 输入。 */
    const fileInput = $('emFile');
    /** 封面输入。 */
    const coverInput = $('emCover');
    /** 进度 HUD。 */
    const hud = $('emHud');
    /** 试听元素。 */
    const audio = $('emAudio');
    /** 当前 MP3 File。 */
    let selected = null;
    /** 封面字节与 MIME。 */
    let coverBytes = null;
    /** 封面 MIME。 */
    let coverMime = '';
    /** 封面预览 object URL。 */
    let coverUrl = '';
    /** 是否忙碌。 */
    let busy = false;
    /** 输出 MP3 object URL。 */
    let outputUrl = '';
    /** lamejs Promise（样例）。 */
    let lamePromise = null;
    /** 计时器。 */
    let timer = 0;
    /** 开始时间。 */
    let started = 0;
    /** 让出主线程。 */
    const yieldUi = () => new Promise(resolve => requestAnimationFrame(() => setTimeout(resolve, 0)));
    /**
     * 填充模板。
     * @param {string} text 模板
     * @param {Record<string, string|number>} values 值
     */
    const fill = (text, values) => text.replace(/{(\\w+)}/g, (_, key) => String(values[key] ?? ''));
    /** 丢弃输出。 */
    function discardOutput(){
      audio.pause();
      audio.removeAttribute('src');
      audio.load();
      if (outputUrl) URL.revokeObjectURL(outputUrl);
      outputUrl = '';
      $('emDownload').disabled = true;
      $('emOutput').hidden = true;
    }
    /** 清除封面选择。 */
    function clearCover(){
      coverBytes = null;
      coverMime = '';
      coverInput.value = '';
      if (coverUrl) URL.revokeObjectURL(coverUrl);
      coverUrl = '';
      const img = $('emCoverPreview');
      img.hidden = true;
      img.removeAttribute('src');
      $('emCoverStatus').textContent = M.cover_none;
    }
    /**
     * 锁定控件。
     * @param {boolean} on 是否锁定
     */
    function lock(on){
      busy = on;
      panel.querySelectorAll('button,input,select,textarea').forEach(el => { el.disabled = on; });
      $('emDownload').disabled = on || !outputUrl;
      $('emConvert').setAttribute('aria-busy', String(on));
    }
    /**
     * 更新 HUD。
     * @param {number} pct 百分比
     * @param {string} step 步骤键
     */
    function progress(pct, step){
      $('emPct').textContent = Math.round(pct) + '%';
      $('emBar').style.width = pct + '%';
      $('emBar').setAttribute('aria-valuenow', String(Math.round(pct)));
      $('emStep').textContent = M[step];
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
      $('emPct').textContent = '—';
      $('emBar').style.width = '0%';
      $('emBar').setAttribute('aria-valuenow', '0');
      hud.setAttribute('role', 'alert');
      $('emStep').textContent = M[key] || M.failed;
    }
    /**
     * 选择 MP3。
     * @param {File|null} file 文件
     */
    function choose(file){
      if (busy) return;
      discardOutput();
      selected = file || null;
      $('emName').textContent = file ? file.name : '';
      hud.hidden = true;
      fileInput.value = '';
      if (!file){
        $('emTitle').value = '';
        $('emArtist').value = '';
        $('emAlbum').value = '';
        return;
      }
      file.arrayBuffer().then(buf => {
        const tags = readId3Text(new Uint8Array(buf));
        if (tags.title) $('emTitle').value = tags.title;
        if (tags.artist) $('emArtist').value = tags.artist;
        if (tags.album) $('emAlbum').value = tags.album;
      }).catch(() => {});
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
     * 编码 ID3v2.3 文本帧（UTF-16LE + BOM）。
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
     * 编码 APIC 帧（JPEG/PNG）。
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
     * 组装 ID3v2.3 标签块。
     * @param {{title:string,artist:string,album:string}} tags 文本
     * @param {Uint8Array|null} image 封面
     * @param {string} mime 封面 MIME
     */
    function buildId3(tags, image, mime){
      const parts = [];
      if (tags.title) parts.push(textFrame('TIT2', tags.title));
      if (tags.artist) parts.push(textFrame('TPE1', tags.artist));
      if (tags.album) parts.push(textFrame('TALB', tags.album));
      if (image && image.length) parts.push(apicFrame(image, mime));
      if (!parts.length) parts.push(textFrame('TIT2', 'Untitled'));
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
    /** 主流程：读 → 写标签（不重编码）。 */
    async function applyTags(){
      if (busy) return;
      if (!selected){ fail('empty'); return; }
      discardOutput();
      lock(true);
      hud.hidden = false;
      hud.className = 'bcw-hud is-on mb-3';
      hud.setAttribute('role', 'status');
      $('emCurrent').textContent = selected.name;
      started = performance.now();
      const clock = () => { $('emTime').textContent = fill(M.elapsed, { s: ((performance.now() - started) / 1000).toFixed(1) }); };
      clock();
      timer = setInterval(clock, 100);
      try {
        progress(5, 'read');
        await yieldUi();
        if (selected.size > MAX_BYTES) throw Error('err_limit');
        const bytes = new Uint8Array(await selected.arrayBuffer());
        const range = audioSlice(bytes);
        const info = inspectFrames(bytes, range.start, range.end);
        progress(45, 'write');
        await yieldUi();
        const tags = {
          title: String($('emTitle').value || '').trim(),
          artist: String($('emArtist').value || '').trim(),
          album: String($('emAlbum').value || '').trim(),
        };
        const id3 = buildId3(tags, coverBytes, coverMime);
        const audioPart = bytes.subarray(range.start, range.end);
        const out = new Uint8Array(id3.length + audioPart.length);
        out.set(id3, 0);
        out.set(audioPart, id3.length);
        const blob = new Blob([out], { type: 'audio/mpeg' });
        if (!blob.size) throw Error('err_format');
        outputUrl = URL.createObjectURL(blob);
        audio.src = outputUrl;
        $('emOutput').hidden = false;
        $('emResult').textContent = fill(M.result, {
          title: tags.title || '—',
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
    /**
     * 生成 1×1 JPEG 演示封面。
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
    /** 合成短 MP3 样例并写入演示标签。 */
    async function loadSample(){
      if (busy) return;
      discardOutput();
      lock(true);
      hud.hidden = false;
      hud.className = 'bcw-hud is-on mb-3';
      progress(10, 'read');
      $('emCurrent').textContent = M.sample_name;
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
        $('emName').textContent = selected.name;
        $('emTitle').value = 'Demo Title';
        $('emArtist').value = 'Online Free Tools';
        $('emAlbum').value = 'Tag Sample';
        coverBytes = tinyJpeg();
        coverMime = 'image/jpeg';
        if (coverUrl) URL.revokeObjectURL(coverUrl);
        coverUrl = URL.createObjectURL(new Blob([coverBytes], { type: coverMime }));
        const img = $('emCoverPreview');
        img.src = coverUrl;
        img.hidden = false;
        $('emCoverStatus').textContent = M.cover_ready;
        lock(false);
        await applyTags();
      } catch (e) {
        lock(false);
        fail(e && M[e.message] ? e.message : 'failed');
      }
    }
    fileInput.addEventListener('change', () => choose(fileInput.files[0]));
    $('emDrop').addEventListener('dragover', event => event.preventDefault());
    $('emDrop').addEventListener('drop', event => {
      event.preventDefault();
      if (busy) return;
      const files = event.dataTransfer.files;
      if (files.length !== 1){ choose(null); fail('err_file'); return; }
      choose(files[0]);
    });
    coverInput.addEventListener('change', async () => {
      if (busy) return;
      const file = coverInput.files && coverInput.files[0];
      if (!file){ clearCover(); return; }
      if (file.size > MAX_COVER){ clearCover(); fail('err_cover'); return; }
      const mime = String(file.type || '').toLowerCase();
      if (mime !== 'image/jpeg' && mime !== 'image/png'){ clearCover(); fail('err_cover'); return; }
      coverBytes = new Uint8Array(await file.arrayBuffer());
      coverMime = mime;
      if (coverUrl) URL.revokeObjectURL(coverUrl);
      coverUrl = URL.createObjectURL(file);
      const img = $('emCoverPreview');
      img.src = coverUrl;
      img.hidden = false;
      $('emCoverStatus').textContent = M.cover_ready;
      discardOutput();
      hud.hidden = true;
    });
    $('emCoverClear').addEventListener('click', () => { if (busy) return; clearCover(); discardOutput(); hud.hidden = true; });
    $('emConvert').addEventListener('click', applyTags);
    $('emSample').addEventListener('click', loadSample);
    $('emClear').addEventListener('click', () => { if (busy) return; choose(null); clearCover(); });
    $('emDownload').addEventListener('click', () => {
      if (!outputUrl || busy) return;
      const link = document.createElement('a');
      link.href = outputUrl;
      link.download = (selected && selected.name ? selected.name.replace(/\\.[^.]+$/, '') : 'tagged') + '.mp3';
      document.body.appendChild(link);
      link.click();
      link.remove();
    });
    window.addEventListener('pagehide', () => {
      clearInterval(timer);
      if (outputUrl) URL.revokeObjectURL(outputUrl);
      if (coverUrl) URL.revokeObjectURL(coverUrl);
    });
    loadSample();
  })();</script>`;

	/** catalog 元数据。 */
	const toolMeta = getToolBySlug('edit-mp3-title-and-cover-art');
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
