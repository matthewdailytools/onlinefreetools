import { t, type SiteLang } from '../../site/i18n';
import { getToolBySlug } from '../../site/tools';
import { bcwHudCss } from './bcwHudCss';
import { renderFooter } from './footer';
import { renderHeader } from './header';
import { escapeHtml, renderLayout } from './layout';
import { mossCloneCss } from './mossCloneCss';
import { buildToolPageNavItems } from './nav';
import { buildToolSidebarItems, renderSidebar } from './sidebar';
import { buildToolJsonLd, renderToolExtraSections, renderToolIgSections, renderToolReferencesSection } from './toolContent';

export type MossVoicePageOptions = {
  lang: SiteLang;
  defaultLang: SiteLang;
  enabledLangs: SiteLang[];
};

const messageKeys = [
  'progress', 'step_download', 'step_initialize', 'step_generate', 'step_output', 'done', 'cancelled',
  'error_input', 'error_limit', 'error_storage', 'error_network', 'error_initialize', 'error_synthesis',
];
const referenceKeys = [
  'step_reference', 'error_consent', 'error_reference', 'error_reference_missing', 'error_reference_quiet',
  'error_encode_reference', 'error_mic', 'mic_request', 'mic_recording', 'mic_clip', 'stop_recording', 'sample_reference',
];
const sharedCopy = new Set([
  'download', 'cancel', 'limit', 'step_download', 'step_initialize', 'step_output',
  'model_download_progress',
  'error_input', 'error_limit', 'error_storage', 'error_network', 'error_initialize',
]);

type MossPage = {
  slug: string;
  sample: { text: string; url: string; voice?: string; referenceUrl?: string };
};

export function renderMossVoicePage(opts: MossVoicePageOptions, { slug, sample }: MossPage) {
  const { lang, defaultLang, enabledLangs } = opts;
  const tool = getToolBySlug(slug)!;
  const prefix = tool.faqPrefix;
  const cloning = Boolean(sample.referenceUrl);
  const stages = cloning ? ['download', 'initialize', 'reference', 'generate', 'output'] : ['download', 'initialize', 'generate', 'output'];
  const translate = (key: string) => t(lang, `${cloning && sharedCopy.has(key) ? 'tool_text_to_speech_for_voiceovers' : prefix}_${key}`);
  const tr = (key: string) => escapeHtml(translate(key));
  const pathFor = (code: SiteLang, path: string) => code === defaultLang ? path : `/${code}${path}`;
  const canonicalPath = pathFor(lang, tool.path);
  const title = translate('title');
  const description = translate('description');
  const keys = cloning ? [...messageKeys, ...referenceKeys] : messageKeys;
  const messages = JSON.stringify(Object.fromEntries(keys.map((key) => [key, translate(key)])))
    .replace(/</g, '\\u003c');
  const voices = ['en-a', 'en-b', 'zh-a', 'ja-a'].map((voice) =>
    `<option value="${voice}"${sample.voice === voice ? ' selected' : ''}>${tr(`voice_${voice.replace('-', '_')}`)}</option>`
  ).join('');
  const textInput = `<textarea class="form-control form-control-sm" id="mossText" name="text" rows="4" dir="auto" maxlength="240" aria-describedby="mossLimit" required>${escapeHtml(sample.text)}</textarea>`;
  const modelHint = `<p id="mossModelHint" class="form-text mb-2">${tr('model_hint')}</p>`;
  const generate = `<button id="mossGenerate" class="btn btn-primary" type="submit" aria-describedby="mossModelHint">${tr('generate')}</button>`;
  const download = `<button id="mossDownload" class="btn btn-outline-primary" type="button" disabled>${tr('download')}</button>`;
  const loadExample = `<button id="mossSample" class="btn btn-outline-secondary" type="button">${tr('sample')}</button>`;
  const cancel = `<button id="mossCancel" class="btn btn-outline-secondary" type="button" hidden>${tr('cancel')}</button>`;
  const resultPlayer = `<audio id="mossAudio" class="w-100" controls preload="metadata" aria-label="${tr('result')}"></audio>`;
  const samplePlayer = `<audio id="mossSampleAudio" class="w-100 mt-2" src="${sample.url}" controls preload="none" aria-label="${tr('sample_audio')}"></audio>`;
  const hud = `
      <div id="mossHud" class="bcw-hud mb-3" hidden>
        <div class="bcw-hud-top">
          <div class="bcw-hud-spin" aria-hidden="true"></div>
          <div class="bcw-hud-pct" id="mossPercent">0%</div>
          <div class="bcw-hud-copy">
            <div class="bcw-hud-title">${tr('progress')}</div>
            <div class="bcw-hud-step" id="mossStatus" role="status"></div>
            <div class="bcw-hud-time" id="mossElapsed"></div>
          </div>
        </div>
        <div id="mossWorkTrack">
          <div class="progress">
            <div id="mossBar" class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-label="${tr('progress')}" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0"></div>
            <span class="bcw-hud-sheen" aria-hidden="true"></span>
          </div>
        </div>
        <div id="mossModelDownload" class="my-2" hidden>
          <div class="d-flex flex-wrap justify-content-between align-items-center gap-2 mb-1">
            <span id="mossModelLabel" class="fw-semibold">${tr('model_download_progress')}</span>
            <strong id="mossModelPercent" class="bcw-hud-pct text-end" dir="ltr">0%</strong>
          </div>
          <progress id="mossModelBar" class="d-block w-100 mb-1" value="0" max="100" aria-labelledby="mossModelLabel" aria-describedby="mossModelBytes"></progress>
          <div id="mossModelBytes" class="bcw-hud-url" dir="ltr"></div>
        </div>
        <ol class="bcw-hud-steps">${stages.map((stage) => `<li data-stage="${stage}">${tr(`step_${stage}`)}</li>`).join('')}</ol>
        <div id="mossBytes" class="bcw-hud-url" dir="ltr"></div>
      </div>`;

  const panel = cloning ? `
    <div id="moss-voice" class="moss-clone-hero mb-3">
      <img src="${escapeHtml(tool.logo)}" width="64" height="64" alt="" decoding="async">
      <div><h1>${tr('title')}</h1><p>${tr('desc')}</p></div>
    </div>
    <div class="moss-clone-workspace mb-4">
      <form id="mossForm" data-mode="clone" novalidate>
        <fieldset id="mossInputs" class="moss-clone-grid mb-3">
          <section class="moss-clone-card" aria-labelledby="mossReferenceTitle">
            <h2 id="mossReferenceTitle" class="moss-clone-title"><span class="moss-clone-step" aria-hidden="true">01</span>${tr('reference')}</h2>
            <input id="mossReference" class="visually-hidden" type="file" data-sample="${sample.referenceUrl}"
              accept=".wav,.mp3,.m4a,.ogg,.webm,audio/wav,audio/mpeg,audio/mp4,audio/ogg,audio/webm" aria-describedby="mossReferenceHint">
            <label id="mossDrop" class="moss-clone-drop" for="mossReference">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 15V3m-4 4 4-4 4 4M4 14v6h16v-6"/></svg>
              ${tr('drop_reference')}
            </label>
            <p id="mossReferenceHint" class="form-text mb-3">${tr('reference_hint')}</p>
            <div class="d-flex flex-wrap gap-2 mb-2">
              <button id="mossRecord" type="button" class="btn btn-outline-secondary">${tr('record')}</button>
              ${loadExample}
              <button id="mossRemoveReference" type="button" class="btn btn-outline-secondary" hidden>${tr('remove_reference')}</button>
            </div>
            <p id="mossRecordStatus" class="small mb-1" role="status"></p>
            <div id="mossMicFeedback" class="mb-2" hidden><div class="d-flex align-items-center gap-2">
              <meter id="mossMicLevel" class="flex-grow-1" min="0" max="1" value="0" aria-label="${tr('record')}"></meter>
              <span id="mossMicTime" class="small text-nowrap" dir="ltr"></span>
            </div></div>
            <div id="mossReferenceName" class="small text-break" dir="auto"></div>
            <audio id="mossReferenceAudio" class="w-100 mt-1" controls preload="metadata" aria-label="${tr('reference')}" hidden></audio>
            <div class="form-check mt-2">
              <input id="mossConsent" type="checkbox" class="form-check-input" checked disabled>
              <label for="mossConsent" class="form-check-label small">${tr('consent')}</label>
            </div>
          </section>
          <section class="moss-clone-card moss-clone-script" aria-labelledby="mossScriptTitle">
            <h2 id="mossScriptTitle" class="moss-clone-title"><span class="moss-clone-step" aria-hidden="true">02</span><label for="mossText">${tr('text')}</label></h2>
            ${textInput}
            <div class="d-flex align-items-start justify-content-between gap-2 mt-2">
              <p id="mossLimit" class="form-text mt-0 mb-0">${tr('limit')}</p>
              <span id="mossTextCount" class="small text-nowrap" dir="ltr">${sample.text.length} / 240</span>
            </div>
          </section>
        </fieldset>
        <div class="tools-bar d-flex flex-wrap gap-2 mb-2">${generate}${cancel}</div>
        ${modelHint}
      </form>
      ${hud}
      <section class="moss-clone-card" aria-labelledby="mossResultTitle">
        <h2 id="mossResultTitle" class="moss-clone-title"><span class="moss-clone-step" aria-hidden="true">03</span>${tr('result')}</h2>
        <div class="moss-clone-output">
          <div>
            <p id="mossResultEmpty" class="mb-0">${tr('result_empty')}</p>
            <div id="mossResult" hidden>${resultPlayer}</div>
          </div>
          ${download}
        </div>
      </section>
    </div>
    <section id="mossExample" class="moss-clone-card moss-clone-demo mb-4" aria-labelledby="mossExampleTitle">
      <h2 id="mossExampleTitle" class="moss-clone-title">${tr('example_title')}</h2>
      <div class="moss-clone-grid">
        <figure class="mb-0">
          <figcaption>${tr('sample_reference')}</figcaption>
          <audio id="mossSampleReferenceAudio" class="w-100 mt-2" src="${sample.referenceUrl}" controls preload="none" aria-label="${tr('sample_reference')}"></audio>
        </figure>
        <figure class="mb-0"><figcaption>${tr('sample_audio')}</figcaption>${samplePlayer}</figure>
      </div>
    </section>` : `
    <div id="moss-voice" class="tool-page-heading mb-3">
      <h1 class="h4">${tr('title')}</h1><p>${tr('desc')}</p>
    </div>
    <section class="tool-panel">
      <form id="mossForm" data-mode="speech" novalidate>
        <fieldset id="mossInputs">
          <label class="form-label" for="mossText">${tr('text')}</label>
          ${textInput}
          <p id="mossLimit" class="form-text mb-3">${tr('limit')}</p>
          <label class="form-label" for="mossVoice">${tr('voice')}</label>
          <select class="form-select form-select-sm mb-3" id="mossVoice" name="voice">${voices}</select>
        </fieldset>
        ${modelHint}
        <div class="tools-bar d-flex flex-wrap gap-2 mb-3">${generate}${download}${loadExample}${cancel}</div>
      </form>
      ${hud}
      <div id="mossResult" hidden>
        <h2 class="h6">${tr('result')}</h2>
        ${resultPlayer}
      </div>
      <details id="mossExample" open>
        <summary>${tr('sample_audio')}</summary>
        ${samplePlayer}
      </details>
    </section>`;
  const ig = renderToolIgSections({ lang, prefix, mode: 'rules', howItemCount: 4, whyChooseItemCount: 3, ruleItemCount: 3, usecaseCount: 2 });
  const related = renderToolExtraSections({ lang, defaultLang, tool });
  const references = renderToolReferencesSection({
    lang,
    links: [
      { label: 'OpenMOSS MOSS-TTS-Nano', href: 'https://github.com/OpenMOSS/MOSS-TTS-Nano' },
      { label: 'ONNX Runtime Web', href: 'https://onnxruntime.ai/docs/tutorials/web/' },
      ...(cloning ? [{ label: 'MDN MediaRecorder', href: 'https://developer.mozilla.org/en-US/docs/Web/API/MediaRecorder' }] : []),
    ],
  });
  const navItems = buildToolPageNavItems(lang, defaultLang);
  if (cloning) navItems.splice(1, 0, { href: `${pathFor(lang, '/')}#all-tools`, label: t(lang, 'nav_tools') });
  const headerHtml = renderHeader({
    lang,
    showSidebarToggle: !cloning,
    brandHref: pathFor(lang, '/'),
    navItems,
    enabledLangs,
    langAlternates: Object.fromEntries(enabledLangs.map((code) => [code, `/${code}${tool.path}`])),
  });
  const sidebarHtml = cloning ? '' : renderSidebar({
    title: t(lang, 'nav_tools'),
    groups: buildToolSidebarItems({ lang, defaultLang, currentSlug: slug, currentAnchor: '#moss-voice' }),
    id: 'toolNav',
  });
  const jsonLd = buildToolJsonLd({ lang, defaultLang, tool, name: title, description, canonicalPath });
  const hudCss = bcwHudCss({ hudId: 'mossHud', convertBtnId: 'mossGenerate' });
  const content = panel + ig + related + references;
  return renderLayout({
    lang,
    title: `${title} | ${t(lang, 'brand')}`,
    description,
    canonicalPath,
    ogImageUrl: 'https://onlinefreetools.org/og-image.png',
    ogType: 'website',
    alternates: enabledLangs.map((code) => ({ lang: code, href: `https://onlinefreetools.org${pathFor(code, tool.path)}` })),
    headerHtml,
    sidebarHtml,
    contentHtml: cloning && lang === 'ar' ? `<div dir="rtl">${content}</div>` : content,
    footerHtml: renderFooter({ lang }),
    extraHeadHtml: `<style>${hudCss}${cloning ? mossCloneCss : ''}</style>${jsonLd}`,
    extraBodyHtml: `<script type="application/json" id="mossMessages">${messages}</script>
    <script type="module">
      import { loadSample } from '/vendor/moss-nano/voice-tool.mjs';
      loadSample({ automatic: true });
    </script>`,
    includeSidebarToggleScript: !cloning,
    sidebarAutoCloseSelector: '#toolNav a',
  });
}
