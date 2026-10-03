import type { SiteLang } from '../site/i18n';
import { t, supportedLangs } from '../site/i18n';
import { renderFooter } from './site/footer';
import { renderHeader } from './site/header';
import { buildToolPageNavItems } from './site/nav';
import { renderLayout, type HreflangAlternate, escapeHtml } from './site/layout';
import { renderSidebar, buildToolSidebarItems } from './site/sidebar';
import { getToolBySlug } from '../site/tools';
import { renderToolExtraSections, renderToolIgSections, renderToolReferencesSection, buildToolJsonLd } from './site/toolContent';
import { bcwHudCss } from './site/bcwHudCss';

const slug = 'extract-frames-from-a-video-as-images';
const prefix = 'tool_extract_frames_from_a_video_as_images';
const withLang = (lang: SiteLang, path: string, defaultLang: SiteLang) => lang === defaultLang ? path : '/' + lang + path;

export const renderExtractFramesFromAVideoAsImagesPage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	const path = '/tools/' + slug;
	const canonicalPath = withLang(opts.lang, path, opts.defaultLang);
	const tr = (key: string) => escapeHtml(t(opts.lang, prefix + '_' + key));
	const description = t(opts.lang, prefix + '_description');
	const alternates: HreflangAlternate[] = supportedLangs.map((lang) => ({
		lang,
		href: 'https://onlinefreetools.org' + withLang(lang, path, opts.defaultLang),
	}));
	const headerHtml = renderHeader({
		lang: opts.lang,
		brandHref: withLang(opts.lang, '/', opts.defaultLang),
		navItems: buildToolPageNavItems(opts.lang, opts.defaultLang),
		enabledLangs: supportedLangs,
		langAlternates: Object.fromEntries(supportedLangs.map((lang) => [lang, '/' + lang + path])),
	});
	const sidebarHtml = renderSidebar({
		title: t(opts.lang, 'nav_tools'),
		groups: buildToolSidebarItems({ lang: opts.lang, defaultLang: opts.defaultLang, currentSlug: slug, currentAnchor: '#video-frames' }),
		id: 'toolNav',
	});
	const contentHtml = [
		'<div id="video-frames" class="tool-page-heading mb-3"><h1 class="h4">' + tr('title') + '</h1><p>' + tr('desc') + '</p></div>',
		'<section id="vfPanel" class="tool-panel">',
		'<label class="tool-dropzone mb-3" id="vfDrop" for="vfFile"><input id="vfFile" type="file" accept="video/*,.mp4,.webm,.mov,.m4v"><span class="tool-dropzone-title">' + tr('choose') + '</span><span class="tool-dropzone-hint">' + tr('hint') + '</span><span id="vfName" class="tool-dropzone-file"></span></label>',
		'<div class="tools-bar d-flex flex-wrap mb-3" style="gap:.5rem"><button type="button" id="vfExtract" class="btn btn-primary">' + tr('extract') + '</button><button type="button" id="vfZip" class="btn btn-outline-primary" disabled>' + tr('zip') + '</button><button type="button" id="vfStop" class="btn btn-outline-secondary" disabled>' + tr('stop') + '</button><button type="button" id="vfSample" class="btn btn-outline-secondary">' + tr('sample') + '</button><button type="button" id="vfClear" class="btn btn-outline-secondary">' + tr('clear') + '</button></div>',
		'<details class="mb-3"><summary>' + tr('advanced') + '</summary><div class="row g-2 mt-1"><div class="col-12 col-md-4"><label class="form-label" for="vfMode">' + tr('mode') + '</label><select class="form-select form-select-sm" id="vfMode"><option value="interval">' + tr('mode_interval') + '</option><option value="single">' + tr('mode_single') + '</option></select></div><div class="col-6 col-md-2"><label class="form-label" for="vfStart">' + tr('start') + '</label><input class="form-control form-control-sm" id="vfStart" type="number" min="0" step="0.1" value="0"></div><div class="col-6 col-md-2" id="vfEndWrap"><label class="form-label" for="vfEnd">' + tr('end') + '</label><input class="form-control form-control-sm" id="vfEnd" type="number" min="0.1" step="0.1" value="3"></div><div class="col-6 col-md-2" id="vfIntervalWrap"><label class="form-label" for="vfInterval">' + tr('interval') + '</label><input class="form-control form-control-sm" id="vfInterval" type="number" min="0.1" step="0.1" value="1"></div><div class="col-6 col-md-2"><label class="form-label" for="vfFormat">' + tr('format') + '</label><select class="form-select form-select-sm" id="vfFormat"><option value="jpeg">JPG</option><option value="png">PNG</option></select></div><div class="col-6 col-md-2"><label class="form-label" for="vfWidth">' + tr('width') + '</label><select class="form-select form-select-sm" id="vfWidth"><option value="320" selected>320 px</option><option value="640">640 px</option><option value="1280">1280 px</option><option value="1920">1920 px</option></select></div><div class="col-6 col-md-2" id="vfQualityWrap"><label class="form-label" for="vfQuality">' + tr('quality') + '</label><select class="form-select form-select-sm" id="vfQuality"><option value="0.75">75%</option><option value="0.85" selected>85%</option><option value="0.95">95%</option></select></div></div><p id="vfBudget" class="form-text"></p></details>',
		'<div id="vfHud" class="bcw-hud mb-3" role="status" aria-live="polite" hidden><div class="bcw-hud-top"><div class="bcw-hud-spin" aria-hidden="true"></div><div class="bcw-hud-pct" id="vfPct">0%</div><div class="bcw-hud-copy"><div class="bcw-hud-title">' + tr('progress') + '</div><div class="bcw-hud-step" id="vfStep"></div><div class="bcw-hud-time" id="vfTime"></div></div></div><div class="progress" style="height:1.35rem"><div id="vfBar" class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div></div><ol class="bcw-hud-steps"><li data-step="read">' + tr('read') + '</li><li data-step="seek">' + tr('seek') + '</li><li data-step="save">' + tr('save') + '</li></ol></div>',
		'<div id="vfEmpty" class="vf-empty" role="status">' + tr('empty') + '</div><div id="vfOutput" hidden><h2 class="h5">' + tr('result_title') + '</h2><p id="vfResult" class="small"></p><div id="vfList" class="row g-2"></div></div>',
		'</section>',
	].join('');
	const igHtml = renderToolIgSections({ lang: opts.lang, prefix, mode: 'rules', howItemCount: 4, ruleItemCount: 4, usecaseCount: 3 });
	const tool = getToolBySlug(slug);
	const extraSections = tool ? renderToolExtraSections({ lang: opts.lang, defaultLang: opts.defaultLang, tool }) : '';
	const jsonLd = tool ? buildToolJsonLd({ lang: opts.lang, defaultLang: opts.defaultLang, tool, name: t(opts.lang, prefix + '_title'), description, canonicalPath }) : '';
	const references = renderToolReferencesSection({ lang: opts.lang, links: [
		{ label: 'MDN — Drawing video on canvas', href: 'https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Using_images' },
		{ label: 'MDN — HTMLMediaElement seeking', href: 'https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/seeking_event' },
	] });
	const messages = Object.fromEntries([
		'budget', 'frame_status', 'elapsed', 'done', 'failed', 'empty', 'result', 'item', 'download_one',
		'err_file', 'err_decode', 'err_range', 'err_budget', 'err_size', 'err_sample', 'err_seek', 'err_encode',
		'err_zip', 'stopped', 'partial',
	].map((key) => [key, t(opts.lang, prefix + '_' + key)]));
	const safeMessages = JSON.stringify(messages).replace(/</g, '\\u003c');
	return renderLayout({
		lang: opts.lang,
		title: t(opts.lang, prefix + '_title') + ' | ' + t(opts.lang, 'brand'),
		description,
		canonicalPath,
		ogImageUrl: 'https://onlinefreetools.org/og-image.png',
		ogType: 'website',
		alternates,
		headerHtml,
		sidebarHtml,
		contentHtml: '<div dir="' + (opts.lang === 'ar' ? 'rtl' : 'ltr') + '">' + contentHtml + igHtml + extraSections + references + '</div>',
		footerHtml: renderFooter({ lang: opts.lang }),
		extraHeadHtml: '<style>' + bcwHudCss({ hudId: 'vfHud', convertBtnId: 'vfExtract' }) + '#content{min-width:0;overflow-wrap:anywhere}#vfHud.is-error{border-color:#b91c1c;background:#fff1f2}.vf-empty{padding:.75rem 1rem;border:1px dashed var(--border,#ced4da);border-radius:.5rem;color:#6c757d}#vfDrop{position:relative;min-width:0}#vfFile{position:absolute;width:1px;height:1px;opacity:0;pointer-events:none}#vfName{overflow-wrap:anywhere}#vfList img{width:100%;height:120px;object-fit:contain;background:#f8f9fa;border-radius:.3rem}.vf-card{border:1px solid #dee2e6;border-radius:.5rem;padding:.5rem;height:100%}.site-footer nav.d-inline{display:inline-flex!important;flex-wrap:wrap;justify-content:center;max-width:100%}</style>' + jsonLd,
		extraBodyHtml: '<script>window.videoFramesMessages=' + safeMessages + ';function loadSample(){window.videoFramesLoadSample?.()}</script><script src="/js/video-frames.js" defer></script>',
		mainClass: 'container py-4 tool-page',
		includeSidebarToggleScript: true,
		sidebarAutoCloseSelector: '#toolNav a',
	});
};
