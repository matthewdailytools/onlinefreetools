/**
 * Magnet URI parser: browser-only field decoding and shape validation.
 * slug: magnet-link-decoder; see work-tasks/magnet-link-decoder/02-tool-info.md.
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
	buildToolJsonLd,
	renderToolExtraSections,
	renderToolIgSections,
	renderToolReferencesSection,
} from './site/toolContent';

const withLangPrefix = (lang: SiteLang, pathname: string, defaultLang: SiteLang) => {
	const safe = pathname.startsWith('/') ? pathname : `/${pathname}`;
	return lang === defaultLang ? safe : `/${lang}${safe}`;
};

export const renderMagnetLinkDecoderPage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	const toolPath = '/tools/magnet-link-decoder';
	const canonicalPath = withLangPrefix(opts.lang, toolPath, opts.defaultLang);
	const title = `${t(opts.lang, 'tool_magnet_link_decoder_title')} | ${t(opts.lang, 'brand')}`;
	const description = t(opts.lang, 'tool_magnet_link_decoder_description');
	const navItems = buildToolPageNavItems(opts.lang, opts.defaultLang);

	const withExplicitLangPrefix = (code: SiteLang, pathname: string) => {
		const safe = pathname.startsWith('/') ? pathname : `/${pathname}`;
		return `/${code}${safe}`.replace(/\/{2,}/g, '/');
	};
	const langAlternates: Record<string, string> = Object.fromEntries(
		supportedLangs.map((code) => [code, withExplicitLangPrefix(code, toolPath)])
	);
	const alternates: HreflangAlternate[] = supportedLangs.map((code) => ({
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
			currentSlug: 'magnet-link-decoder',
			currentAnchor: '#decoder',
		}),
		id: 'toolNav',
	});
	const footerHtml = renderFooter({ lang: opts.lang });

	const extraHeadHtml = `
  <style>
    body.is-tool-page .layout, body.is-tool-page #content { min-width: 0; }
    body.is-tool-page #example p { overflow-wrap: anywhere; word-break: break-word; }
    .magnet-actions { gap: .5rem; max-width: 100%; }
    .magnet-actions .btn { max-width: 100%; white-space: normal; }
    .tool-panel, .tool-panel .row, .tool-panel [class*="col-"] { min-width: 0; }
    #magnetInput {
      min-height: 132px;
      font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
      font-size: .85rem;
      width: 100%; max-width: 100%; word-break: break-all;
    }
    .magnet-status {
      display: inline-flex;
      align-items: center;
      min-height: 2rem;
      padding: .25rem .65rem;
      border: 1px solid var(--bs-border-color);
      border-radius: .25rem;
      font-weight: 600;
    }
    .magnet-status[data-state="valid"] { color: #146c43; border-color: #75b798; background: #d1e7dd; }
    .magnet-status[data-state="warning"] { color: #664d03; border-color: #ffda6a; background: #fff3cd; }
    .magnet-status[data-state="invalid"] { color: #842029; border-color: #ea868f; background: #f8d7da; }
    .magnet-field-list { margin-bottom: 0; }
    .magnet-field-list dt { color: var(--bs-secondary-color); font-size: .8rem; }
    .magnet-field-list dd { margin-bottom: .8rem; overflow-wrap: anywhere; }
    .magnet-value {
      display: block;
      max-width: 100%;
      padding: .35rem .5rem;
      margin-top: .25rem;
      border: 1px solid var(--bs-border-color);
      border-radius: .25rem;
      background: var(--bs-tertiary-bg);
      font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
      font-size: .82rem;
      white-space: normal;
      word-break: break-word;
    }
    #normalizedOut, #jsonOut {
      width: 100%; max-width: 100%; min-height: 90px;
      max-height: 320px;
      overflow: auto;
      white-space: pre-wrap;
      overflow-wrap: anywhere;
      font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
      font-size: .82rem;
    }
  </style>`;

	const contentHtml = `
    <div id="decoder" class="tool-hero">
      <h1 class="tool-title">${escapeHtml(t(opts.lang, 'tool_magnet_link_decoder_title'))}</h1>
      <p class="tool-lead">${escapeHtml(description)}</p>
    </div>

    <div class="tool-panel">
      <div class="d-flex align-items-center magnet-actions mb-3 flex-wrap">
        <button type="button" id="btnDecode" class="btn btn-primary">${escapeHtml(t(opts.lang, 'tool_magnet_link_decoder_decode'))}</button>
        <button type="button" id="btnCopyHash" class="btn btn-outline-primary btn-sm">${escapeHtml(t(opts.lang, 'tool_magnet_link_decoder_copy_hash'))}</button>
        <button type="button" id="btnCopyTrackers" class="btn btn-outline-primary btn-sm">${escapeHtml(t(opts.lang, 'tool_magnet_link_decoder_copy_trackers'))}</button>
        <button type="button" id="btnCopyJson" class="btn btn-outline-primary btn-sm">${escapeHtml(t(opts.lang, 'tool_magnet_link_decoder_copy_json'))}</button>
        <button type="button" id="btnSample" class="btn btn-outline-secondary btn-sm">${escapeHtml(t(opts.lang, 'tool_magnet_link_decoder_sample'))}</button>
        <button type="button" id="btnClear" class="btn btn-outline-secondary btn-sm">${escapeHtml(t(opts.lang, 'tool_magnet_link_decoder_clear'))}</button>
      </div>

      <div class="alert alert-info py-2 small mb-3" role="note">${escapeHtml(t(opts.lang, 'tool_magnet_link_decoder_privacy'))}</div>
      <div id="decodeError" class="alert alert-danger py-2 small mb-3" role="alert" hidden></div>
      <div id="decodeWarnings" class="alert alert-warning py-2 small mb-3" role="status" hidden></div>

      <div class="mb-3">
        <label for="magnetInput" class="form-label">${escapeHtml(t(opts.lang, 'tool_magnet_link_decoder_input_label'))}</label>
        <textarea id="magnetInput" class="form-control" placeholder="${escapeHtml(t(opts.lang, 'tool_magnet_link_decoder_input_placeholder'))}" spellcheck="false"></textarea>
      </div>

      <div class="d-flex align-items-center gap-3 flex-wrap mb-3">
        <span id="decodeStatus" class="magnet-status" data-state="invalid">${escapeHtml(t(opts.lang, 'tool_magnet_link_decoder_status_invalid'))}</span>
        <span id="decodeSummary" class="small text-muted"></span>
      </div>

      <div class="row g-3">
        <div class="col-12 col-lg-6">
          <h2 class="h6">${escapeHtml(t(opts.lang, 'tool_magnet_link_decoder_results_title'))}</h2>
          <div id="fieldResults" class="border rounded p-3">
            <p class="text-muted small mb-0">${escapeHtml(t(opts.lang, 'tool_magnet_link_decoder_result_empty'))}</p>
          </div>
        </div>
        <div class="col-12 col-lg-6">
          <label for="normalizedOut" class="form-label">${escapeHtml(t(opts.lang, 'tool_magnet_link_decoder_normalized_label'))}</label>
          <pre id="normalizedOut" class="result border rounded p-2 bg-light mb-2" tabindex="0"></pre>
          <button type="button" id="btnCopyNormalized" class="btn btn-outline-secondary btn-sm mb-3">${escapeHtml(t(opts.lang, 'tool_magnet_link_decoder_copy_normalized'))}</button>
          <label for="jsonOut" class="form-label">${escapeHtml(t(opts.lang, 'tool_magnet_link_decoder_json_label'))}</label>
          <pre id="jsonOut" class="result border rounded p-2 bg-light mb-0" tabindex="0"></pre>
        </div>
      </div>
    </div>`;

	const igHtml = renderToolIgSections({
		lang: opts.lang,
		prefix: 'tool_magnet_link_decoder',
		mode: 'rules',
		usecaseCount: 3,
		ruleItemCount: 4,
	});
	const referencesHtml = renderToolReferencesSection({
		lang: opts.lang,
		links: [
			{ label: 'BEP 9 - Extension for Peers to Send Metadata Files', href: 'https://www.bittorrent.org/beps/bep_0009.html' },
			{ label: 'W3C Wiki - Magnet URI scheme', href: 'https://www.w3.org/wiki/UriSchemes/magnet' },
			{ label: 'MDN - decodeURIComponent()', href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/decodeURIComponent' },
		],
	});

	const extraBodyHtml = `
  <script>
    (function () {
      var SAMPLE = 'magnet:?xt=urn:btih:0123456789abcdef0123456789abcdef01234567&dn=sample-linux.iso&xl=1048576&tr=udp%3A%2F%2Ftracker.example.org%3A6969%2Fannounce&tr=https%3A%2F%2Ftracker.example.com%2Fannounce';
      var FIELD_ORDER = ['xt', 'dn', 'xl', 'tr', 'ws', 'xs', 'x.pe'];
      var URL_FIELDS = ['tr', 'ws', 'xs'];
      var labels = {
        xt: ${JSON.stringify(t(opts.lang, 'tool_magnet_link_decoder_field_exact_topics'))},
        dn: ${JSON.stringify(t(opts.lang, 'tool_magnet_link_decoder_field_display_name'))},
        xl: ${JSON.stringify(t(opts.lang, 'tool_magnet_link_decoder_field_size'))},
        tr: ${JSON.stringify(t(opts.lang, 'tool_magnet_link_decoder_field_trackers'))},
        ws: ${JSON.stringify(t(opts.lang, 'tool_magnet_link_decoder_field_web_seeds'))},
        xs: ${JSON.stringify(t(opts.lang, 'tool_magnet_link_decoder_field_exact_sources'))},
        'x.pe': ${JSON.stringify(t(opts.lang, 'tool_magnet_link_decoder_field_peer_hints'))},
        other: ${JSON.stringify(t(opts.lang, 'tool_magnet_link_decoder_field_other'))}
      };
      var messages = {
        empty: ${JSON.stringify(t(opts.lang, 'tool_magnet_link_decoder_empty'))},
        scheme: ${JSON.stringify(t(opts.lang, 'tool_magnet_link_decoder_error_scheme'))},
        badEncoding: ${JSON.stringify(t(opts.lang, 'tool_magnet_link_decoder_warn_bad_encoding'))},
        badHash: ${JSON.stringify(t(opts.lang, 'tool_magnet_link_decoder_warn_bad_hash'))},
        badPeer: ${JSON.stringify(t(opts.lang, 'tool_magnet_link_decoder_warn_bad_peer'))},
        badSize: ${JSON.stringify(t(opts.lang, 'tool_magnet_link_decoder_warn_bad_size'))},
        badUrl: ${JSON.stringify(t(opts.lang, 'tool_magnet_link_decoder_warn_bad_url'))},
        missingXt: ${JSON.stringify(t(opts.lang, 'tool_magnet_link_decoder_warn_missing_xt'))},
        summary: ${JSON.stringify(t(opts.lang, 'tool_magnet_link_decoder_summary'))},
        size: ${JSON.stringify(t(opts.lang, 'tool_magnet_link_decoder_size_bytes'))},
        emptyValue: ${JSON.stringify(t(opts.lang, 'tool_magnet_link_decoder_unknown_value'))},
        valid: ${JSON.stringify(t(opts.lang, 'tool_magnet_link_decoder_status_valid'))},
        warning: ${JSON.stringify(t(opts.lang, 'tool_magnet_link_decoder_status_warning'))},
        invalid: ${JSON.stringify(t(opts.lang, 'tool_magnet_link_decoder_status_invalid'))},
        copied: ${JSON.stringify(t(opts.lang, 'tool_magnet_link_decoder_copy_done'))}
      };
      var locale = ${JSON.stringify(opts.lang)};

      var input = document.getElementById('magnetInput');
      var errorBox = document.getElementById('decodeError');
      var warningsBox = document.getElementById('decodeWarnings');
      var statusEl = document.getElementById('decodeStatus');
      var summaryEl = document.getElementById('decodeSummary');
      var fieldsEl = document.getElementById('fieldResults');
      var normalizedOut = document.getElementById('normalizedOut');
      var jsonOut = document.getElementById('jsonOut');
      var lastResult = null;

      function interpolate(template, values) {
        return String(template).replace(/\\{([^}]+)\\}/g, function (_, key) {
          return Object.prototype.hasOwnProperty.call(values, key) ? String(values[key]) : _;
        });
      }

      function decodePart(raw, key, warnings) {
        var plusAsSpace = String(raw).replace(/\\+/g, ' ');
        try {
          return decodeURIComponent(plusAsSpace);
        } catch (e) {
          warnings.push(interpolate(messages.badEncoding, { key: key }));
          return plusAsSpace;
        }
      }

      function formatBytes(bytes) {
        var number = Number(bytes);
        var human = number + ' B';
        if (number >= 1073741824 && number % 1073741824 === 0) human = (number / 1073741824) + ' GiB';
        else if (number >= 1048576 && number % 1048576 === 0) human = (number / 1048576) + ' MiB';
        else if (number >= 1024 && number % 1024 === 0) human = (number / 1024) + ' KiB';
        return interpolate(messages.size, {
          bytes: new Intl.NumberFormat(locale).format(number),
          human: human
        });
      }

      function classifyExactTopic(value, warnings) {
        var lower = value.toLowerCase();
        if (lower.indexOf('urn:btih:') === 0) {
          var btih = value.slice(9);
          var validHex = /^[0-9a-fA-F]{40}$/.test(btih);
          var validBase32 = /^[A-Z2-7]{32}$/i.test(btih);
          if (!validHex && !validBase32) warnings.push(interpolate(messages.badHash, { value: value }));
          return { value: value, type: 'btih', infoHash: btih, encoding: validHex ? 'hex' : validBase32 ? 'base32' : 'unknown', valid: validHex || validBase32 };
        }
        if (lower.indexOf('urn:btmh:') === 0) {
          var btmh = value.slice(9);
          var validMultihash = /^[0-9a-fA-F]+$/.test(btmh) && btmh.length >= 4 && btmh.length % 2 === 0;
          if (!validMultihash) warnings.push(interpolate(messages.badHash, { value: value }));
          return { value: value, type: 'btmh', infoHash: btmh, encoding: 'multihash-hex', valid: validMultihash };
        }
        return { value: value, type: 'other', infoHash: '', encoding: 'unknown', valid: true };
      }

      function isAbsoluteUrl(value) {
        try {
          var parsed = new URL(value);
          return Boolean(parsed.protocol && (parsed.hostname || parsed.protocol === 'urn:'));
        } catch (e) {
          return false;
        }
      }

      function isPeerHint(value) {
        if (/^\\[[0-9a-fA-F:]+\\]:\\d{1,5}$/.test(value)) return Number(value.slice(value.lastIndexOf(':') + 1)) <= 65535;
        var match = /^([^\\s:]+):(\\d{1,5})$/.exec(value);
        return Boolean(match && Number(match[2]) <= 65535);
      }

      function normalize(entries) {
        var ordered = [];
        FIELD_ORDER.forEach(function (key) {
          entries.forEach(function (entry) { if (entry.key === key) ordered.push(entry); });
        });
        entries.forEach(function (entry) {
          if (FIELD_ORDER.indexOf(entry.key) === -1) ordered.push(entry);
        });
        return 'magnet:?' + ordered.map(function (entry) {
          return encodeURIComponent(entry.key) + '=' + encodeURIComponent(entry.value);
        }).join('&');
      }

      function parseMagnet(raw) {
        var trimmed = String(raw || '').trim();
        if (!trimmed) throw new Error(messages.empty);
        if (trimmed.slice(0, 8).toLowerCase() !== 'magnet:?') throw new Error(messages.scheme);

        var warnings = [];
        var query = trimmed.slice(8).split('#')[0];
        var entries = [];
        if (query) {
          query.split('&').forEach(function (part) {
            if (!part) return;
            var equalAt = part.indexOf('=');
            var rawKey = equalAt === -1 ? part : part.slice(0, equalAt);
            var rawValue = equalAt === -1 ? '' : part.slice(equalAt + 1);
            var key = decodePart(rawKey, rawKey || '?', warnings);
            var value = decodePart(rawValue, key || '?', warnings);
            entries.push({ key: key, value: value });
          });
        }

        var fields = {};
        entries.forEach(function (entry) {
          if (!fields[entry.key]) fields[entry.key] = [];
          fields[entry.key].push(entry.value);
        });
        if (!fields.xt || !fields.xt.length) warnings.push(messages.missingXt);

        var topics = (fields.xt || []).map(function (value) {
          return classifyExactTopic(value, warnings);
        });
        if (fields.xl) {
          fields.xl.forEach(function (value) {
            if (!/^\\d+$/.test(value)) warnings.push(messages.badSize);
          });
        }
        URL_FIELDS.forEach(function (key) {
          (fields[key] || []).forEach(function (value) {
            if (!isAbsoluteUrl(value)) warnings.push(interpolate(messages.badUrl, { key: key, value: value }));
          });
        });
        (fields['x.pe'] || []).forEach(function (value) {
          if (!isPeerHint(value)) warnings.push(interpolate(messages.badPeer, { value: value }));
        });

        var infoHashes = topics.filter(function (topic) { return topic.infoHash; }).map(function (topic) { return topic.infoHash; });
        var normalizedUri = normalize(entries);
        return {
          scheme: 'magnet',
          fieldCount: entries.length,
          fields: fields,
          exactTopics: topics,
          infoHashes: infoHashes,
          trackers: fields.tr || [],
          displayNames: fields.dn || [],
          exactLengths: fields.xl || [],
          webSeeds: fields.ws || [],
          exactSources: fields.xs || [],
          peerHints: fields['x.pe'] || [],
          warnings: warnings,
          normalizedUri: normalizedUri
        };
      }

      function createValue(text) {
        var span = document.createElement('span');
        span.className = 'magnet-value';
        span.textContent = text || messages.emptyValue;
        return span;
      }

      function renderFields(result) {
        fieldsEl.textContent = '';
        var dl = document.createElement('dl');
        dl.className = 'magnet-field-list';
        var renderedKeys = [];
        FIELD_ORDER.forEach(function (key) {
          var values = result.fields[key];
          if (!values || !values.length) return;
          renderedKeys.push(key);
          var dt = document.createElement('dt');
          dt.textContent = labels[key];
          dl.appendChild(dt);
          var dd = document.createElement('dd');
          values.forEach(function (value, index) {
            var display = value;
            if (key === 'xl' && /^\\d+$/.test(value)) display = formatBytes(value);
            if (key === 'xt' && result.exactTopics[index]) {
              var topic = result.exactTopics[index];
              display += ' [' + topic.type + ', ' + topic.encoding + ', ' + (topic.valid ? messages.valid : messages.invalid) + ']';
            }
            dd.appendChild(createValue(display));
          });
          dl.appendChild(dd);
        });

        var otherKeys = Object.keys(result.fields).filter(function (key) {
          return renderedKeys.indexOf(key) === -1;
        });
        if (otherKeys.length) {
          var otherDt = document.createElement('dt');
          otherDt.textContent = labels.other;
          dl.appendChild(otherDt);
          var otherDd = document.createElement('dd');
          otherKeys.forEach(function (key) {
            result.fields[key].forEach(function (value) {
              otherDd.appendChild(createValue(key + '=' + (value || messages.emptyValue)));
            });
          });
          dl.appendChild(otherDd);
        }
        fieldsEl.appendChild(dl);
      }

      function renderWarnings(warnings) {
        warningsBox.textContent = '';
        if (!warnings.length) {
          warningsBox.hidden = true;
          return;
        }
        var list = document.createElement('ul');
        list.className = 'mb-0';
        warnings.forEach(function (warning) {
          var item = document.createElement('li');
          item.textContent = warning;
          list.appendChild(item);
        });
        warningsBox.appendChild(list);
        warningsBox.hidden = false;
      }

      function setStatus(state) {
        statusEl.dataset.state = state;
        statusEl.textContent = state === 'valid' ? messages.valid : state === 'warning' ? messages.warning : messages.invalid;
      }

      function clearOutput() {
        lastResult = null;
        fieldsEl.innerHTML = '<p class="text-muted small mb-0">' + ${JSON.stringify(escapeHtml(t(opts.lang, 'tool_magnet_link_decoder_result_empty')))} + '</p>';
        normalizedOut.textContent = '';
        jsonOut.textContent = '';
        summaryEl.textContent = '';
        warningsBox.hidden = true;
        errorBox.hidden = true;
        setStatus('invalid');
      }

      function decode() {
        errorBox.hidden = true;
        try {
          var result = parseMagnet(input.value);
          lastResult = result;
          renderFields(result);
          renderWarnings(result.warnings);
          normalizedOut.textContent = result.normalizedUri;
          jsonOut.textContent = JSON.stringify(result, null, 2);
          summaryEl.textContent = interpolate(messages.summary, {
            fields: result.fieldCount,
            trackers: result.trackers.length,
            warnings: result.warnings.length
          });
          setStatus(result.warnings.length ? 'warning' : 'valid');
        } catch (e) {
          clearOutput();
          errorBox.textContent = e && e.message ? e.message : String(e);
          errorBox.hidden = false;
        }
      }

      async function copyText(text, button) {
        if (!text) {
          errorBox.textContent = messages.empty;
          errorBox.hidden = false;
          return;
        }
        await navigator.clipboard.writeText(text);
        var original = button.textContent;
        button.textContent = messages.copied;
        setTimeout(function () { button.textContent = original; }, 1200);
      }

      var btnDecode = document.getElementById('btnDecode');
      var btnCopyHash = document.getElementById('btnCopyHash');
      var btnCopyTrackers = document.getElementById('btnCopyTrackers');
      var btnCopyJson = document.getElementById('btnCopyJson');
      var btnCopyNormalized = document.getElementById('btnCopyNormalized');
      var btnSample = document.getElementById('btnSample');
      var btnClear = document.getElementById('btnClear');

      btnDecode.addEventListener('click', decode);
      btnCopyHash.addEventListener('click', function () {
        copyText(lastResult ? lastResult.infoHashes.join('\\n') : '', btnCopyHash);
      });
      btnCopyTrackers.addEventListener('click', function () {
        copyText(lastResult ? lastResult.trackers.join('\\n') : '', btnCopyTrackers);
      });
      btnCopyJson.addEventListener('click', function () {
        copyText(lastResult ? JSON.stringify(lastResult, null, 2) : '', btnCopyJson);
      });
      btnCopyNormalized.addEventListener('click', function () {
        copyText(lastResult ? lastResult.normalizedUri : '', btnCopyNormalized);
      });
      btnSample.addEventListener('click', function () {
        input.value = SAMPLE;
        decode();
      });
      btnClear.addEventListener('click', function () {
        input.value = '';
        clearOutput();
      });
      input.addEventListener('input', function () {
        if ((input.value || '').length < 20000) decode();
      });

      input.value = SAMPLE;
      decode();
    })();
  </script>`;

	const toolMeta = getToolBySlug('magnet-link-decoder');
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
