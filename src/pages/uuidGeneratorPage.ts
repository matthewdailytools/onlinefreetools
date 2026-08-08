/**
 * UUID v4 与 ULID 批量生成工具页（Tier 0 CSPRNG）。
 * slug: uuid-generator；见 work-tasks/uuid-generator/02-tool-info.md。
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
 * 渲染 UUID / ULID 生成工具页。
 * @param opts.lang 当前语言
 * @param opts.defaultLang 站点默认语言
 * @param opts.enabledLangs 启用语言列表
 */
export const renderUuidGeneratorPage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	const toolPath = '/tools/uuid-generator';
	const canonicalPath = withLangPrefix(opts.lang, toolPath, opts.defaultLang);
	const title = `${t(opts.lang, 'tool_uuid_generator_title')} | ${t(opts.lang, 'brand')}`;
	const description = t(opts.lang, 'tool_uuid_generator_description');

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
		items: buildToolSidebarItems({
			lang: opts.lang,
			defaultLang: opts.defaultLang,
			currentSlug: 'uuid-generator',
			currentAnchor: '#converter',
		}),
		id: 'toolNav',
	});

	const footerHtml = renderFooter({ lang: opts.lang });

	const extraHeadHtml = `
  <style>
    .tools-bar { gap: .5rem; }
    #idOutput { font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace; font-size: .9rem; min-height: 120px; white-space: pre-wrap; word-break: break-all; }
  </style>`;

	const contentHtml = `
    <div id="converter" class="tool-hero">
      <h1 class="tool-title">${escapeHtml(t(opts.lang, 'tool_uuid_generator_title'))}</h1>
      <p class="tool-lead">${escapeHtml(description)}</p>
    </div>

    <div class="tool-panel">
    <div class="d-flex align-items-center tools-bar mb-3 flex-wrap">
      <button type="button" id="btnGenerate" class="btn btn-primary">${escapeHtml(t(opts.lang, 'tool_uuid_generator_generate'))}</button>
      <button type="button" id="btnCopyAll" class="btn btn-outline-primary">${escapeHtml(t(opts.lang, 'tool_uuid_generator_copy_all'))}</button>
      <button type="button" id="btnSample" class="btn btn-outline-secondary btn-sm">${escapeHtml(t(opts.lang, 'tool_uuid_generator_sample'))}</button>
      <button type="button" id="btnClear" class="btn btn-outline-secondary btn-sm">${escapeHtml(t(opts.lang, 'tool_uuid_generator_clear'))}</button>
    </div>

    <div class="row g-3 mb-3">
      <div class="col-12 col-md-4">
        <label class="form-label" for="typeSelect">${escapeHtml(t(opts.lang, 'tool_uuid_generator_type_label'))}</label>
        <select id="typeSelect" class="form-select">
          <option value="v4">${escapeHtml(t(opts.lang, 'tool_uuid_generator_type_v4'))}</option>
          <option value="ulid">${escapeHtml(t(opts.lang, 'tool_uuid_generator_type_ulid'))}</option>
        </select>
      </div>
      <div class="col-12 col-md-4">
        <label class="form-label" for="countInput">${escapeHtml(t(opts.lang, 'tool_uuid_generator_count_label'))}</label>
        <input type="number" id="countInput" class="form-control" min="1" max="100" value="3">
      </div>
    </div>

    <label class="form-label" for="idOutput">${escapeHtml(t(opts.lang, 'tool_uuid_generator_output_label'))}</label>
    <pre id="idOutput" class="border rounded p-3 bg-light mb-0" tabindex="0"></pre>
    </div>`;

	const igHtml = renderToolIgSections({
		lang: opts.lang,
		prefix: 'tool_uuid_generator',
		mode: 'rules',
		usecaseCount: 3,
		ruleItemCount: 4,
	});

	const referencesHtml = renderToolReferencesSection({
		lang: opts.lang,
		links: [
			{ label: 'RFC 4122 — UUID', href: 'https://www.rfc-editor.org/rfc/rfc4122' },
			{ label: 'ULID specification', href: 'https://github.com/ulid/spec' },
			{
				label: 'MDN — crypto.getRandomValues',
				href: 'https://developer.mozilla.org/en-US/docs/Web/API/Crypto/getRandomValues',
			},
		],
	});

	/** 客户端：UUID v4 + Crockford Base32 ULID；CSPRNG。 */
	const extraBodyHtml = `
  <script>
    (function () {
      /** Crockford Base32 字母表（ULID） */
      var ENCODING = '0123456789ABCDEFGHJKMNPQRSTVWXYZ';
      /** Load sample 固定 UUID v4（RFC 示例） */
      var SAMPLE_UUIDS = [
        '550e8400-e29b-41d4-a716-446655440000',
        '6ba7b810-9dad-11d1-80b4-00c04fd430c8',
        '6ba7b811-9dad-11d1-80b4-00c04fd430c8'
      ];
      /** Load sample 固定 ULID 格式示例 */
      var SAMPLE_ULIDS = [
        '01ARZ3NDEKTSV4RRFFQ69G5FAV',
        '01ARZ3NDEKTSV4RRFFQ69G5FAW',
        '01ARZ3NDEKTSV4RRFFQ69G5FAX'
      ];

      var typeSelect = document.getElementById('typeSelect');
      var countInput = document.getElementById('countInput');
      var idOutput = document.getElementById('idOutput');
      var btnGenerate = document.getElementById('btnGenerate');
      var btnCopyAll = document.getElementById('btnCopyAll');
      var btnSample = document.getElementById('btnSample');
      var btnClear = document.getElementById('btnClear');

      var labelCopyAll = ${JSON.stringify(t(opts.lang, 'tool_uuid_generator_copy_all'))};
      var labelCopyDone = ${JSON.stringify(t(opts.lang, 'tool_uuid_generator_copy_done'))};

      /** 是否处于样例模式（固定 ID，不重新随机） */
      var sampleMode = false;

      /**
       * 生成 UUID v4（hyphenated 小写）。
       * @returns {string}
       */
      function uuidV4() {
        if (typeof crypto.randomUUID === 'function') {
          return crypto.randomUUID();
        }
        var bytes = new Uint8Array(16);
        crypto.getRandomValues(bytes);
        bytes[6] = (bytes[6] & 0x0f) | 0x40;
        bytes[8] = (bytes[8] & 0x3f) | 0x80;
        var hex = '';
        for (var i = 0; i < 16; i++) {
          hex += bytes[i].toString(16).padStart(2, '0');
        }
        return hex.slice(0, 8) + '-' + hex.slice(8, 12) + '-' + hex.slice(12, 16) + '-'
          + hex.slice(16, 20) + '-' + hex.slice(20);
      }

      /**
       * 生成 ULID（26 字符 Crockford Base32）。
       * @param {number} [nowMs] 可选时间戳毫秒
       * @returns {string}
       */
      function ulid(nowMs) {
        var now = nowMs != null ? nowMs : Date.now();
        var ulidStr = '';
        var t = now;
        for (var i = 0; i < 10; i++) {
          ulidStr = ENCODING.charAt(t % 32) + ulidStr;
          t = Math.floor(t / 32);
        }
        var random = new Uint8Array(10);
        crypto.getRandomValues(random);
        var bitBuffer = 0;
        var bitCount = 0;
        var charIndex = 0;
        for (var j = 0; j < 10; j++) {
          bitBuffer = (bitBuffer << 8) | random[j];
          bitCount += 8;
          while (bitCount >= 5 && charIndex < 16) {
            bitCount -= 5;
            var idx = (bitBuffer >> bitCount) & 31;
            ulidStr += ENCODING.charAt(idx);
            charIndex++;
            bitBuffer &= (1 << bitCount) - 1;
          }
        }
        while (charIndex < 16) {
          if (bitCount < 5) {
            bitBuffer <<= 8;
            bitCount += 8;
          }
          bitCount -= 5;
          ulidStr += ENCODING.charAt((bitBuffer >> bitCount) & 31);
          charIndex++;
          bitBuffer &= (1 << bitCount) - 1;
        }
        return ulidStr;
      }

      /**
       * 解析并钳制数量 1–100。
       * @returns {number}
       */
      function getCount() {
        var n = parseInt(countInput.value, 10);
        if (isNaN(n) || n < 1) n = 1;
        if (n > 100) n = 100;
        countInput.value = String(n);
        return n;
      }

      /**
       * 批量生成 ID 列表。
       * @param {boolean} useSample 是否使用固定样例
       */
      function generateIds(useSample) {
        sampleMode = !!useSample;
        var count = getCount();
        var type = typeSelect.value;
        var lines = [];
        if (useSample) {
          var pool = type === 'ulid' ? SAMPLE_ULIDS : SAMPLE_UUIDS;
          for (var i = 0; i < count; i++) {
            lines.push(pool[i % pool.length]);
          }
        } else {
          for (var k = 0; k < count; k++) {
            lines.push(type === 'ulid' ? ulid() : uuidV4());
          }
        }
        idOutput.textContent = lines.join('\\n');
      }

      /** 复制全部输出 */
      async function copyAll() {
        var value = idOutput.textContent || '';
        if (!value) return;
        await navigator.clipboard.writeText(value);
        btnCopyAll.textContent = labelCopyDone;
        setTimeout(function () { btnCopyAll.textContent = labelCopyAll; }, 1200);
      }

      /** 载入样例：UUID v4 × 3 */
      function loadSample() {
        typeSelect.value = 'v4';
        countInput.value = '3';
        generateIds(true);
      }

      btnGenerate.addEventListener('click', function () { generateIds(false); });
      btnCopyAll.addEventListener('click', copyAll);
      btnSample.addEventListener('click', loadSample);
      btnClear.addEventListener('click', function () {
        idOutput.textContent = '';
        sampleMode = false;
      });
      typeSelect.addEventListener('change', function () {
        if (!sampleMode && (idOutput.textContent || '').trim()) generateIds(false);
      });
      countInput.addEventListener('change', function () {
        if (!sampleMode && (idOutput.textContent || '').trim()) generateIds(false);
      });

      loadSample();
    })();
  </script>`;

	const toolMeta = getToolBySlug('uuid-generator');
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
