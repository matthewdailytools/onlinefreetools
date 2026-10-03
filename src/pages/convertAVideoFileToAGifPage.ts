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

const slug = 'convert-a-video-file-to-a-gif';
const prefix = 'tool_convert_a_video_file_to_a_gif';
const withLang = (lang: SiteLang, path: string, defaultLang: SiteLang) =>
	lang === defaultLang ? path : '/' + lang + path;

export const renderConvertAVideoFileToAGifPage = (opts: {
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
		groups: buildToolSidebarItems({ lang: opts.lang, defaultLang: opts.defaultLang, currentSlug: slug, currentAnchor: '#video-gif' }),
		id: 'toolNav',
	});
	const contentHtml = [
		'<div id="video-gif" class="tool-page-heading mb-3"><h1 class="h4">' + tr('title') + '</h1><p>' + tr('desc') + '</p></div>',
		'<section id="vgPanel" class="tool-panel">',
		'<label class="tool-dropzone mb-3" id="vgDrop" for="vgFile"><input id="vgFile" type="file" accept="video/*,.mp4,.webm,.mov,.m4v"><span class="tool-dropzone-title">' + tr('choose') + '</span><span class="tool-dropzone-hint">' + tr('hint') + '</span><span id="vgName" class="tool-dropzone-file"></span></label>',
		'<div class="tools-bar d-flex flex-wrap mb-3" style="gap:.5rem"><button type="button" id="vgConvert" class="btn btn-primary">' + tr('convert') + '</button><button type="button" id="vgDownload" class="btn btn-outline-primary" disabled>' + tr('download') + '</button><button type="button" id="vgStop" class="btn btn-outline-secondary" disabled>' + tr('stop') + '</button><button type="button" id="vgSample" class="btn btn-outline-secondary">' + tr('sample') + '</button><button type="button" id="vgClear" class="btn btn-outline-secondary">' + tr('clear') + '</button></div>',
		'<details class="mb-3"><summary>' + tr('advanced') + '</summary><div class="row g-2 mt-1"><div class="col-6 col-md-3"><label class="form-label" for="vgStart">' + tr('start') + '</label><input class="form-control form-control-sm" id="vgStart" type="number" min="0" step="0.1" value="0"></div><div class="col-6 col-md-3"><label class="form-label" for="vgEnd">' + tr('end') + '</label><input class="form-control form-control-sm" id="vgEnd" type="number" min="0.1" step="0.1" value="3"></div><div class="col-6 col-md-3"><label class="form-label" for="vgFps">' + tr('fps') + '</label><select class="form-select form-select-sm" id="vgFps"><option value="5">5 fps</option><option value="8" selected>8 fps</option><option value="12">12 fps</option></select></div><div class="col-6 col-md-3"><label class="form-label" for="vgWidth">' + tr('width') + '</label><select class="form-select form-select-sm" id="vgWidth"><option value="240">240 px</option><option value="320" selected>320 px</option><option value="480">480 px</option><option value="640">640 px</option></select></div></div><p id="vgBudget" class="form-text"></p></details>',
		'<div id="vgHud" class="bcw-hud mb-3" role="status" aria-live="polite" hidden><div class="bcw-hud-top"><div class="bcw-hud-spin" aria-hidden="true"></div><div class="bcw-hud-pct" id="vgPct">0%</div><div class="bcw-hud-copy"><div class="bcw-hud-title">' + tr('progress') + '</div><div class="bcw-hud-step" id="vgStep"></div><div class="bcw-hud-time" id="vgTime"></div></div></div><div class="progress" style="height:1.35rem"><div id="vgBar" class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div></div><ol class="bcw-hud-steps"><li data-step="read">' + tr('read') + '</li><li data-step="frames">' + tr('frames') + '</li><li data-step="encode">' + tr('encode') + '</li></ol></div>',
		'<div id="vgEmpty" class="vg-empty" role="status">' + tr('empty') + '</div><div id="vgOutput" hidden><h2 class="h5">' + tr('preview') + '</h2><img id="vgImage" alt="" style="max-width:100%;max-height:360px"><p id="vgResult" class="small mt-2"></p></div>',
		'</section>',
	].join('');
	const igHtml = renderToolIgSections({ lang: opts.lang, prefix, mode: 'rules', howItemCount: 4, ruleItemCount: 4, usecaseCount: 3 });
	const tool = getToolBySlug(slug);
	const extraSections = tool ? renderToolExtraSections({ lang: opts.lang, defaultLang: opts.defaultLang, tool }) : '';
	const jsonLd = tool ? buildToolJsonLd({ lang: opts.lang, defaultLang: opts.defaultLang, tool, name: t(opts.lang, prefix + '_title'), description, canonicalPath }) : '';
	const references = renderToolReferencesSection({ lang: opts.lang, links: [
		{ label: 'gifenc', href: 'https://github.com/mattdesl/gifenc' },
		{ label: 'MDN — HTMLMediaElement seeking', href: 'https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/seeking_event' },
	] });
	const messages = Object.fromEntries([
		'done', 'failed', 'elapsed', 'result', 'budget', 'err_file', 'err_decode', 'err_range', 'err_budget', 'err_size',
		'err_sample', 'err_encode', 'stopped', 'frame_status', 'ready', 'err_seek',
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
		extraHeadHtml: '<style>' + bcwHudCss({ hudId: 'vgHud', convertBtnId: 'vgConvert' }) + '#content{min-width:0;overflow-wrap:anywhere}#vgHud.is-error{border-color:#b91c1c;background:#fff1f2}.vg-empty{padding:.75rem 1rem;border:1px dashed var(--border,#ced4da);border-radius:.5rem;color:#6c757d}#vgDrop{position:relative;min-width:0}#vgFile{position:absolute;width:1px;height:1px;opacity:0;pointer-events:none}#vgName{overflow-wrap:anywhere}.site-footer nav.d-inline{display:inline-flex!important;flex-wrap:wrap;justify-content:center;max-width:100%}</style><link rel="modulepreload" href="/vendor/gifenc/gifenc.esm.js">' + jsonLd,
		extraBodyHtml: '<script>window.videoGifMessages=' + safeMessages + ';function loadSample(){window.videoGifLoadSample?.()}</script><script src="/js/video-to-gif.js" defer></script>',
		mainClass: 'container py-4 tool-page',
		includeSidebarToggleScript: true,
		sidebarAutoCloseSelector: '#toolNav a',
	});
};
