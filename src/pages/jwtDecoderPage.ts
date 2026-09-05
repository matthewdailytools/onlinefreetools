/**
 * JWT 解码工具页：本地 Base64url 解码 header/payload，不验签；Tier 0 原生实现。
 * slug: jwt-decoder；见 work-tasks/jwt-decoder/02-tool-info.md。
 */
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

/**
 * 为路径加上语言前缀（默认语无前缀）。
 * @param lang 当前语言
 * @param pathname 目标路径
 * @param defaultLang 站点默认语言
 */
const withLangPrefix = (lang: SiteLang, pathname: string, defaultLang: SiteLang) => {
	const safe = pathname.startsWith('/') ? pathname : `/${pathname}`;
	return lang === defaultLang ? safe : `/${lang}${safe}`;
};

/**
 * 渲染 JWT 解码工具页。
 * @param opts.lang 当前语言
 * @param opts.defaultLang 站点默认语言
 * @param opts.enabledLangs 启用语言列表（语言切换器用全量 supportedLangs）
 */
export const renderJwtDecoderPage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	const toolPath = '/tools/jwt-decoder';
	const canonicalPath = withLangPrefix(opts.lang, toolPath, opts.defaultLang);
	const title = `${t(opts.lang, 'tool_jwt_decoder_title')} | ${t(opts.lang, 'brand')}`;
	const description = t(opts.lang, 'tool_jwt_decoder_description');

	const navItems = buildToolPageNavItems(opts.lang, opts.defaultLang);

	/** 语言切换链接始终带显式语言前缀（含默认语）。 */
	const withExplicitLangPrefix = (code: SiteLang, pathname: string) => {
		const safe = pathname.startsWith('/') ? pathname : `/${pathname}`;
		return `/${code}${safe}`.replace(/\/{2,}/g, '/');
	};

	const langAlternates: Record<string, string> = Object.fromEntries(
		(supportedLangs || []).map((code) => [code, withExplicitLangPrefix(code, toolPath)])
	);

	const alternates: HreflangAlternate[] = (supportedLangs || []).map((code) => ({
		lang: code,
		href: `https://onlinefreetools.org${withLangPrefix(code, toolPath, opts.defaultLang)}`,
	}));

	const headerHtml = renderHeader({
		lang: opts.lang,
		brandHref: withLangPrefix(opts.lang, '/', opts.defaultLang),
		navItems,
		enabledLangs: supportedLangs,
		langAlternates,
	});

	const sidebarHtml = renderSidebar({
		title: t(opts.lang, 'nav_tools'),
		groups: buildToolSidebarItems({
			lang: opts.lang,
			defaultLang: opts.defaultLang,
			currentSlug: 'jwt-decoder',
			currentAnchor: '#converter',
		}),
		id: 'toolNav',
	});

	const footerHtml = renderFooter({ lang: opts.lang });

	/** 页内样式：输入区、JSON 输出、claims 时间行。 */
	const extraHeadHtml = `
  <style>
    .tools-bar { gap: .5rem; }
    #jwtInput {
      min-height: 120px; font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
      font-size: .875rem; word-break: break-all;
    }
    #headerOut, #payloadOut {
      min-height: 140px; max-height: 320px; overflow: auto;
      font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace; font-size: .85rem;
      white-space: pre-wrap; word-break: break-word;
    }
    #signatureOut {
      font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
      font-size: .85rem; word-break: break-all;
    }
    .claims-times { border-left: 3px solid var(--bs-secondary); padding-left: .75rem; }
  </style>`;

	const contentHtml = `
    <div id="converter" class="tool-hero">
      <h1 class="tool-title">${escapeHtml(t(opts.lang, 'tool_jwt_decoder_title'))}</h1>
      <p class="tool-lead">${escapeHtml(description)}</p>
    </div>

    <div class="tool-panel">
    <div class="d-flex align-items-center tools-bar mb-2 flex-wrap">
      <button type="button" id="btnDecode" class="btn btn-primary">${escapeHtml(t(opts.lang, 'tool_jwt_decoder_decode'))}</button>
      <button type="button" id="btnCopyHeader" class="btn btn-outline-primary btn-sm">${escapeHtml(t(opts.lang, 'tool_jwt_decoder_copy_header'))}</button>
      <button type="button" id="btnCopyPayload" class="btn btn-outline-primary btn-sm">${escapeHtml(t(opts.lang, 'tool_jwt_decoder_copy_payload'))}</button>
      <button type="button" id="btnSample" class="btn btn-outline-secondary btn-sm">${escapeHtml(t(opts.lang, 'tool_jwt_decoder_sample'))}</button>
      <button type="button" id="btnClear" class="btn btn-outline-secondary btn-sm">${escapeHtml(t(opts.lang, 'tool_jwt_decoder_clear'))}</button>
    </div>

    <div id="decodeWarn" class="alert alert-warning py-2 small mb-2" style="display:none" role="status"></div>
    <div id="decodeError" class="alert alert-danger py-2 small mb-2" style="display:none" role="alert"></div>
    <div id="decodeDisclaimer" class="alert alert-info py-2 small mb-3" role="note">${escapeHtml(t(opts.lang, 'tool_jwt_decoder_disclaimer'))}</div>

    <div class="mb-3">
      <label for="jwtInput" class="form-label">${escapeHtml(t(opts.lang, 'tool_jwt_decoder_input_label'))}</label>
      <textarea id="jwtInput" class="form-control" placeholder="${escapeHtml(t(opts.lang, 'tool_jwt_decoder_input_placeholder'))}" spellcheck="false"></textarea>
    </div>

    <div class="row g-3 mb-3">
      <div class="col-12 col-lg-6">
        <label class="form-label" for="headerOut">${escapeHtml(t(opts.lang, 'tool_jwt_decoder_header_label'))}</label>
        <pre id="headerOut" class="result mb-0 border rounded p-2 bg-light" tabindex="0"></pre>
      </div>
      <div class="col-12 col-lg-6">
        <label class="form-label" for="payloadOut">${escapeHtml(t(opts.lang, 'tool_jwt_decoder_payload_label'))}</label>
        <pre id="payloadOut" class="result mb-0 border rounded p-2 bg-light" tabindex="0"></pre>
        <div id="claimsTimes" class="claims-times mt-2 small" hidden></div>
      </div>
    </div>

    <div class="mb-0">
      <label class="form-label" for="signatureOut">${escapeHtml(t(opts.lang, 'tool_jwt_decoder_signature_label'))}</label>
      <pre id="signatureOut" class="result mb-0 border rounded p-2 bg-light text-muted" tabindex="0"></pre>
    </div>
    </div>`;

	const igHtml = renderToolIgSections({
		lang: opts.lang,
		prefix: 'tool_jwt_decoder',
		mode: 'rules',
		usecaseCount: 3,
		ruleItemCount: 4,
	});

	const referencesHtml = renderToolReferencesSection({
		lang: opts.lang,
		links: [
			{
				label: 'RFC 7519 — JSON Web Token (JWT)',
				href: 'https://www.rfc-editor.org/rfc/rfc7519',
			},
			{
				label: 'RFC 7515 — JSON Web Signature (JWS)',
				href: 'https://www.rfc-editor.org/rfc/rfc7515',
			},
		],
	});

	/** 客户端：Tier 0 原生 JWT 解码（split + Base64url + JSON.parse；不验签）。 */
	const extraBodyHtml = `
  <script>
    (function () {
      /** 粘贴软上限（字节），超出仍可解码但提示卡顿风险 */
      var SOFT_LIMIT = 8192;
      /** 固定 demo JWT（与 Example 文案一致） */
      var SAMPLE_JWT = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';
      /** registered claims 中需格式化的时间字段 */
      var TIME_CLAIMS = ['exp', 'iat', 'nbf'];

      var jwtInput = document.getElementById('jwtInput');
      var headerOut = document.getElementById('headerOut');
      var payloadOut = document.getElementById('payloadOut');
      var signatureOut = document.getElementById('signatureOut');
      var claimsTimes = document.getElementById('claimsTimes');
      var btnDecode = document.getElementById('btnDecode');
      var btnCopyHeader = document.getElementById('btnCopyHeader');
      var btnCopyPayload = document.getElementById('btnCopyPayload');
      var btnSample = document.getElementById('btnSample');
      var btnClear = document.getElementById('btnClear');
      var decodeWarn = document.getElementById('decodeWarn');
      var decodeError = document.getElementById('decodeError');

      var labelCopyHeader = ${JSON.stringify(t(opts.lang, 'tool_jwt_decoder_copy_header'))};
      var labelCopyPayload = ${JSON.stringify(t(opts.lang, 'tool_jwt_decoder_copy_payload'))};
      var labelCopyDone = ${JSON.stringify(t(opts.lang, 'tool_jwt_decoder_copy_done'))};
      var msgLarge = ${JSON.stringify(t(opts.lang, 'tool_jwt_decoder_large_warn'))};
      var msgEmpty = ${JSON.stringify(t(opts.lang, 'tool_jwt_decoder_empty'))};
      var msgSegments = ${JSON.stringify(t(opts.lang, 'tool_jwt_decoder_error_segments'))};
      var msgBase64Header = ${JSON.stringify(t(opts.lang, 'tool_jwt_decoder_error_base64_header'))};
      var msgBase64Payload = ${JSON.stringify(t(opts.lang, 'tool_jwt_decoder_error_base64_payload'))};
      var msgJsonHeader = ${JSON.stringify(t(opts.lang, 'tool_jwt_decoder_error_json_header'))};
      var msgJsonPayload = ${JSON.stringify(t(opts.lang, 'tool_jwt_decoder_error_json_payload'))};
      var labelUtc = ${JSON.stringify(t(opts.lang, 'tool_jwt_decoder_claims_utc'))};
      var labelLocal = ${JSON.stringify(t(opts.lang, 'tool_jwt_decoder_claims_local'))};
      var labelClaimsTitle = ${JSON.stringify(t(opts.lang, 'tool_jwt_decoder_claims_title'))};

      /** 上次成功解码的 header/payload JSON 字符串 */
      var lastHeaderJson = '';
      var lastPayloadJson = '';

      /**
       * Base64url 解码为 UTF-8 字符串。
       * RFC 7519 的 header/payload 是 UTF-8 JSON，atob 只给出字节串，
       * 因此须再经 TextDecoder 还原，否则非 ASCII claim（如 José、姓名）会乱码。
       * @param {string} segment Base64url 段
       * @returns {string} 解码后文本
       */
      function base64UrlDecode(segment) {
        var b64 = segment.replace(/-/g, '+').replace(/_/g, '/');
        var pad = b64.length % 4;
        if (pad) b64 += '===='.slice(pad);
        var binary = atob(b64);
        var bytes = new Uint8Array(binary.length);
        for (var i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
        return new TextDecoder('utf-8').decode(bytes);
      }

      /**
       * 将 Unix 秒格式化为 UTC 与本地可读时间。
       * @param {number} unixSec Unix 时间戳（秒）
       * @returns {{ utc: string, local: string }}
       */
      function formatClaimTime(unixSec) {
        var d = new Date(unixSec * 1000);
        var utc = d.toISOString().replace('T', ' ').replace('.000Z', ' UTC').replace('Z', ' UTC');
        var local = d.toLocaleString();
        return { utc: utc, local: local };
      }

      /**
       * 渲染 payload 中 exp/iat/nbf 的人类可读时间行。
       * @param {Record<string, unknown>} payload 解析后的 payload 对象
       */
      function renderClaimTimes(payload) {
        if (!claimsTimes) return;
        var lines = [];
        TIME_CLAIMS.forEach(function (key) {
          var val = payload[key];
          if (typeof val === 'number' && isFinite(val)) {
            var times = formatClaimTime(val);
            lines.push(
              '<div class="mb-1"><strong>' + key + '</strong>: ' +
              labelUtc + ' ' + times.utc + ' · ' +
              labelLocal + ' ' + times.local + '</div>'
            );
          }
        });
        if (lines.length) {
          claimsTimes.innerHTML = '<div class="fw-semibold mb-1">' + labelClaimsTitle + '</div>' + lines.join('');
          claimsTimes.hidden = false;
        } else {
          claimsTimes.innerHTML = '';
          claimsTimes.hidden = true;
        }
      }

      /**
       * 按输入长度显示软上限警告。
       * @param {string} text JWT 原文
       */
      function maybeWarnSize(text) {
        if ((text || '').length > SOFT_LIMIT) {
          decodeWarn.textContent = msgLarge;
          decodeWarn.style.display = '';
        } else {
          decodeWarn.style.display = 'none';
        }
      }

      /**
       * 展示错误信息。
       * @param {unknown} err 错误对象或字符串
       */
      function showError(err) {
        var msg = (err && err.message) ? String(err.message) : String(err || 'Error');
        decodeError.textContent = msg;
        decodeError.style.display = '';
      }

      /** 清除错误提示 */
      function clearError() {
        decodeError.style.display = 'none';
        decodeError.textContent = '';
      }

      /** 清空输出区 */
      function clearOutput() {
        headerOut.textContent = '';
        payloadOut.textContent = '';
        signatureOut.textContent = '';
        lastHeaderJson = '';
        lastPayloadJson = '';
        if (claimsTimes) {
          claimsTimes.innerHTML = '';
          claimsTimes.hidden = true;
        }
      }

      /**
       * 解码 JWT：拆段、Base64url、JSON.parse。
       * @param {string} token 完整 JWT 字符串
       * @returns {{ headerJson: string, payloadJson: string, signature: string, payload: object }}
       */
      function decodeJwt(token) {
        var trimmed = (token || '').trim();
        var parts = trimmed.split('.');
        if (parts.length !== 3) throw new Error(msgSegments);

        var headerRaw;
        try {
          headerRaw = base64UrlDecode(parts[0]);
        } catch (e) {
          throw new Error(msgBase64Header);
        }

        var payloadRaw;
        try {
          payloadRaw = base64UrlDecode(parts[1]);
        } catch (e) {
          throw new Error(msgBase64Payload);
        }

        var headerObj;
        try {
          headerObj = JSON.parse(headerRaw);
        } catch (e) {
          throw new Error(msgJsonHeader);
        }

        var payloadObj;
        try {
          payloadObj = JSON.parse(payloadRaw);
        } catch (e) {
          throw new Error(msgJsonPayload);
        }

        return {
          headerJson: JSON.stringify(headerObj, null, 2),
          payloadJson: JSON.stringify(payloadObj, null, 2),
          signature: parts[2],
          payload: payloadObj,
        };
      }

      /** 执行解码并写入输出区 */
      function decode() {
        clearError();
        var raw = (jwtInput.value || '');
        if (!raw.trim()) {
          clearOutput();
          decodeWarn.style.display = 'none';
          return;
        }
        maybeWarnSize(raw);
        try {
          var result = decodeJwt(raw);
          headerOut.textContent = result.headerJson;
          payloadOut.textContent = result.payloadJson;
          signatureOut.textContent = result.signature;
          lastHeaderJson = result.headerJson;
          lastPayloadJson = result.payloadJson;
          renderClaimTimes(result.payload);
        } catch (e) {
          clearOutput();
          showError(e);
        }
      }

      /**
       * 复制指定 JSON 到剪贴板。
       * @param {string} text 待复制文本
       * @param {HTMLButtonElement} btn 触发按钮（用于 Done 反馈）
       * @param {string} labelDefault 默认按钮文案
       */
      async function copyJson(text, btn, labelDefault) {
        if (!text) {
          showError(new Error(msgEmpty));
          return;
        }
        clearError();
        await navigator.clipboard.writeText(text);
        btn.textContent = labelCopyDone;
        setTimeout(function () { btn.textContent = labelDefault; }, 1200);
      }

      /** 载入固定样例 JWT 并解码 */
      function loadSample() {
        jwtInput.value = SAMPLE_JWT;
        decode();
      }

      btnDecode.addEventListener('click', decode);
      btnCopyHeader.addEventListener('click', function () {
        copyJson(lastHeaderJson, btnCopyHeader, labelCopyHeader);
      });
      btnCopyPayload.addEventListener('click', function () {
        copyJson(lastPayloadJson, btnCopyPayload, labelCopyPayload);
      });
      btnSample.addEventListener('click', loadSample);
      btnClear.addEventListener('click', function () {
        jwtInput.value = '';
        clearOutput();
        clearError();
        decodeWarn.style.display = 'none';
      });
      jwtInput.addEventListener('input', function () {
        if ((jwtInput.value || '').length < 12000) decode();
      });

      loadSample();
    })();
  </script>`;

	const toolMeta = getToolBySlug('jwt-decoder');
	const toolSeoHtml = toolMeta
		? renderToolExtraSections({ lang: opts.lang, defaultLang: opts.defaultLang, tool: toolMeta })
		: '';
	const toolJsonLd = toolMeta
		? buildToolJsonLd({
				lang: opts.lang,
				defaultLang: opts.defaultLang,
				tool: toolMeta,
				name: t(opts.lang, toolMeta.i18nKey as any),
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
		contentHtml: `${contentHtml}${igHtml}${toolSeoHtml}${referencesHtml}`,
		footerHtml,
		extraHeadHtml: `${extraHeadHtml}${toolJsonLd}`,
		extraBodyHtml,
		includeSidebarToggleScript: true,
		sidebarAutoCloseSelector: '#toolNav a',
	});
};
