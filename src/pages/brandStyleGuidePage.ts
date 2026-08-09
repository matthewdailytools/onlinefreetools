/**
 * 品牌风格指南工具页：模块化 Brand Style Guide（智能规则预填 + 字段级手动覆写）+ Markdown/JSON 导出。
 * slug: brand-style-guide
 * 见 work-tasks/brand-style-guide/02-tool-info.md。
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
 * @param lang 目标语言
 * @param pathname 规范路径
 * @param defaultLang 站点默认语言
 */
const withLangPrefix = (lang: SiteLang, pathname: string, defaultLang: SiteLang) => {
	const safe = pathname.startsWith('/') ? pathname : `/${pathname}`;
	return lang === defaultLang ? safe : `/${lang}${safe}`;
};

/**
 * 渲染品牌风格指南页面。
 * @param opts.lang 当前语言
 * @param opts.defaultLang 站点默认语言
 * @param opts.enabledLangs 启用语言列表
 */
export const renderBrandStyleGuidePage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	/** 工具规范路径（无语言前缀）。 */
	const toolPath = '/tools/brand-style-guide';
	/** 当前语言 canonical。 */
	const canonicalPath = withLangPrefix(opts.lang, toolPath, opts.defaultLang);
	/** 文档 title。 */
	const title = `${t(opts.lang, 'tool_brand_style_guide_title')} | ${t(opts.lang, 'brand')}`;
	/** meta description。 */
	const description = t(opts.lang, 'tool_brand_style_guide_description');
	/** i18n 键前缀。 */
	const P = 'tool_brand_style_guide';

	/** 顶栏导航。 */
	const navItems = buildToolPageNavItems(opts.lang, opts.defaultLang);

	/**
	 * 语言切换显式前缀（含默认语）。
	 * @param code 语言码
	 * @param pathname 路径
	 */
	const withExplicitLangPrefix = (code: SiteLang, pathname: string) => {
		const safe = pathname.startsWith('/') ? pathname : `/${pathname}`;
		return `/${code}${safe}`.replace(/\/{2,}/g, '/');
	};

	/** 切换器用路径表。 */
	const langAlternates: Record<string, string> = Object.fromEntries(
		(supportedLangs || []).map((code) => [code, withExplicitLangPrefix(code, toolPath)])
	);

	/** hreflang。 */
	const alternates: HreflangAlternate[] = (supportedLangs || []).map((code) => ({
		lang: code,
		href: `https://onlinefreetools.org${withLangPrefix(code, toolPath, opts.defaultLang)}`,
	}));

	/** 顶栏。 */
	const headerHtml = renderHeader({
		lang: opts.lang,
		brandHref: withLangPrefix(opts.lang, '/', opts.defaultLang),
		navItems,
		enabledLangs: supportedLangs,
		langAlternates,
	});

	/** 侧栏。 */
	const sidebarHtml = renderSidebar({
		title: t(opts.lang, 'nav_tools'),
		items: buildToolSidebarItems({
			lang: opts.lang,
			defaultLang: opts.defaultLang,
			currentSlug: 'brand-style-guide',
			currentAnchor: '#guide',
		}),
		id: 'toolNav',
	});

	/** 页脚。 */
	const footerHtml = renderFooter({ lang: opts.lang });

	/** 页内样式：表单栅格、模块勾选、预览文档、Do/Don't 卡。 */
	const extraHeadHtml = `
  <style>
    .tools-bar { gap: .5rem; }
    .guide-grid { display: grid; gap: .75rem; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); }
    .chip-row { display: flex; flex-wrap: wrap; gap: .4rem; }
    .chip-row label {
      display: inline-flex; align-items: center; gap: .3rem; border: 1px solid #ced4da;
      border-radius: .35rem; padding: .2rem .55rem; font-size: .8125rem; background: #fff; cursor: pointer;
    }
    .chip-row label.is-on { border-color: #333; font-weight: 600; background: #f3f4f6; }
    .module-grid { display: grid; gap: .35rem; grid-template-columns: repeat(auto-fit, minmax(160px, 1fr)); }
    .module-grid label { font-size: .8125rem; display: flex; gap: .35rem; align-items: flex-start; }
    .guide-warn { font-size: .875rem; color: #9a4519; }
    .guide-preview {
      border: 1px solid #d6d6df; border-radius: .5rem; background: #fff; padding: 1rem 1.1rem; font-size: .875rem;
    }
    .guide-preview h3 { font-size: 1rem; margin: 1rem 0 .4rem; }
    .guide-preview h3:first-child { margin-top: 0; }
    .guide-preview .meta { color: #6c757d; font-size: .8125rem; margin-bottom: .75rem; }
    .guide-preview dl { display: grid; grid-template-columns: 9rem 1fr; gap: .25rem .75rem; margin: 0 0 .5rem; }
    .guide-preview dt { color: #6c757d; }
    .guide-preview dd { margin: 0; }
    .swatch-row { display: flex; flex-wrap: wrap; gap: .4rem; margin: .35rem 0 .6rem; }
    .swatch {
      width: 2.4rem; height: 2.4rem; border-radius: .35rem; border: 1px solid rgba(0,0,0,.12);
    }
    .do-grid { display: grid; gap: .5rem; grid-template-columns: 1fr 1fr; margin: .4rem 0 .75rem; }
    @media (max-width: 576px) { .do-grid { grid-template-columns: 1fr; } }
    .do-card { border-radius: .35rem; padding: .5rem .65rem; font-size: .8125rem; }
    .do-card.ok { background: #e6f4ea; color: #137333; }
    .do-card.bad { background: #fce8e6; color: #c5221f; }
    .sample-stage {
      display: grid; gap: .5rem; grid-template-columns: 1fr 1fr; margin: .35rem 0 .75rem;
    }
    @media (max-width: 576px) { .sample-stage { grid-template-columns: 1fr; } }
    .sample-pane {
      border: 1px solid #d6d6df; border-radius: .4rem; padding: .55rem .65rem; background: #fafbfc;
      min-height: 7.5rem;
    }
    .sample-pane .cap {
      font-size: .7rem; font-weight: 700; letter-spacing: .02em; text-transform: uppercase;
      margin-bottom: .4rem;
    }
    .sample-pane.ok .cap { color: #137333; }
    .sample-pane.bad .cap { color: #c5221f; }
    .sample-pane.bad { background: #fff8f7; }
    .logo-demo {
      position: relative; display: inline-flex; align-items: center; justify-content: center;
      width: 4.5rem; height: 4.5rem; margin: .25rem auto; background: #fff; border: 1px dashed #9aa5b1;
    }
    .logo-demo .mark {
      width: 2rem; height: 2rem; border-radius: .35rem; display: flex; align-items: center;
      justify-content: center; color: #fff; font-weight: 800; font-size: .75rem;
    }
    .logo-demo .pad {
      position: absolute; inset: 0; border: 1px solid rgba(15,110,140,.45); pointer-events: none;
    }
    .logo-demo.stretched .mark { width: 3.2rem; height: 1.35rem; transform: scaleX(1.35); }
    .logo-demo.shadowed .mark { box-shadow: 0 8px 16px rgba(0,0,0,.35); }
    .type-demo .display { font-size: 1.35rem; font-weight: 700; line-height: 1.2; }
    .type-demo .body { font-size: .8125rem; color: #52606D; margin-top: .25rem; }
    .type-demo.bad .display { font-family: Georgia, 'Times New Roman', serif; font-size: .95rem; font-style: italic; }
    .type-demo.bad .body { font-family: Georgia, 'Times New Roman', serif; font-size: 1.05rem; }
    .space-demo { display: flex; gap: .35rem; align-items: flex-end; flex-wrap: wrap; }
    .space-demo .box {
      background: #0F6E8C; color: #fff; font-size: .65rem; display: flex; align-items: center;
      justify-content: center;
    }
    .space-demo.bad .box { border-radius: 0; box-shadow: 0 0 12px 4px rgba(15,110,140,.55), 0 0 2px 8px rgba(255,200,0,.35); }
    .color-usage {
      height: 2.4rem; border-radius: .35rem; overflow: hidden; display: flex; border: 1px solid #d6d6df;
    }
    .color-usage span { display: block; height: 100%; }
    .img-demo { display: flex; gap: .4rem; align-items: center; }
    .img-demo .photo {
      width: 3.2rem; height: 2.4rem; border-radius: .3rem;
      background: linear-gradient(135deg, #d9e2ec, #9fb3c8);
    }
    .img-demo .ico {
      width: 1.35rem; height: 1.35rem; border: 2px solid #333; border-radius: .25rem;
    }
    .img-demo.bad .ico { background: #333; border-radius: 999px; }
    .img-demo.bad .ico + .ico { border-radius: .2rem; background: transparent; }
    .motion-demo .bar {
      height: .35rem; width: 40%; border-radius: 999px; background: #0F6E8C;
      animation: bsgPulse 1.2s ease-out infinite;
    }
    .motion-demo.bad .bar { animation: bsgBounce .4s ease-in-out infinite; width: 70%; }
    @keyframes bsgPulse { 0% { width: 30%; opacity: .5; } 100% { width: 85%; opacity: 1; } }
    @keyframes bsgBounce { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-6px); } }
    .voice-demo {
      font-size: .8125rem; padding: .45rem .55rem; border-radius: .35rem; background: #fff;
      border: 1px solid #d6d6df;
    }
    .sample-why {
      margin-top: .45rem; font-size: .75rem; line-height: 1.35; color: #52606D;
    }
    .sample-pane.bad .sample-why { color: #9b1c1c; }
    .touch-demo { display: flex; gap: .35rem; flex-wrap: wrap; }
    .touch-demo .chip {
      font-size: .7rem; padding: .2rem .45rem; border-radius: .3rem; border: 1px solid #cfd4dc; background: #fff;
    }
    .a11y-demo {
      padding: .5rem; border-radius: .35rem; font-size: .8125rem; font-weight: 600;
    }
    .manual-badge {
      display: inline-block; font-size: .65rem; font-weight: 700; padding: .1rem .35rem;
      border-radius: .25rem; background: #eef2ff; color: #3730a3; margin-left: .25rem;
    }
    .field-source { font-size: .7rem; color: #6c757d; }
    #mdOut, #jsonOut {
      width: 100%; min-height: 8rem; font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
      font-size: .75rem; border: 1px solid #ced4da; border-radius: .375rem; padding: .5rem .65rem;
    }
    .color-wrap { display: flex; gap: .5rem; align-items: center; }
    .color-wrap input[type="color"] {
      width: 48px; height: 38px; padding: 0; border: 1px solid #ced4da; border-radius: .375rem; cursor: pointer;
    }
    /* Off-screen clone used for Word/PDF capture — same look as on-page preview */
    #guideExportMount {
      position: fixed; left: -12000px; top: 0; width: 720px; z-index: -1; pointer-events: none;
    }
    #guideExportMount .guide-preview {
      border: none; border-radius: 0; box-shadow: none; padding: 24px 28px;
    }
    #guideExportMount .motion-demo .bar,
    #guideExportMount .motion-demo.bad .bar {
      animation: none !important;
    }
    #guideExportMount .motion-demo .bar { width: 72% !important; opacity: 1 !important; }
    #guideExportMount .motion-demo.bad .bar { width: 78% !important; transform: none !important; }
  </style>`;

	/** 性格标签选项（值固定；标签走 i18n）。 */
	const personalityKeys = ['calm', 'energetic', 'luxury', 'technical', 'playful', 'bold'] as const;
	/** 模块选项。 */
	const moduleDefs: Array<{ id: string; defaultOn: boolean }> = [
		{ id: 'm0', defaultOn: true },
		{ id: 'm1', defaultOn: true },
		{ id: 'm2', defaultOn: true },
		{ id: 'm3', defaultOn: true },
		{ id: 'm4', defaultOn: true },
		{ id: 'm5', defaultOn: true },
		{ id: 'm6', defaultOn: false },
		{ id: 'm7', defaultOn: false },
		{ id: 'm8', defaultOn: false },
		{ id: 'm9', defaultOn: true },
	];

	/** 性格勾选 HTML。 */
	const personalityHtml = personalityKeys
		.map(
			(k) => `
      <label data-chip="${k}">
        <input type="checkbox" name="personality" value="${k}" />
        ${escapeHtml(t(opts.lang, `${P}_tag_${k}`))}
      </label>`
		)
		.join('');

	/** 模块勾选 HTML。 */
	const modulesHtml = moduleDefs
		.map(
			(m) => `
      <label>
        <input type="checkbox" name="module" value="${m.id}" ${m.defaultOn ? 'checked' : ''} />
        <span>${escapeHtml(t(opts.lang, `${P}_mod_${m.id}`))}</span>
      </label>`
		)
		.join('');

	/** 首屏交互。 */
	const contentHtml = `
    <div id="guide" class="mb-3">
      <h1 class="h4 mb-1">${escapeHtml(t(opts.lang, `${P}_title`))}</h1>
      <p class="text-muted mb-0">${escapeHtml(description)}</p>
    </div>

    <div class="d-flex align-items-center tools-bar mb-3 flex-wrap">
      <button type="button" id="btnGenerate" class="btn btn-primary btn-sm">${escapeHtml(t(opts.lang, `${P}_generate`))}</button>
      <button type="button" id="btnRegenSmart" class="btn btn-outline-primary btn-sm">${escapeHtml(t(opts.lang, `${P}_regen_smart`))}</button>
      <button type="button" id="btnSample" class="btn btn-outline-secondary btn-sm">${escapeHtml(t(opts.lang, `${P}_sample`))}</button>
      <button type="button" id="btnCopyMd" class="btn btn-outline-primary btn-sm">${escapeHtml(t(opts.lang, `${P}_copy_md`))}</button>
      <button type="button" id="btnCopyJson" class="btn btn-outline-primary btn-sm">${escapeHtml(t(opts.lang, `${P}_copy_json`))}</button>
      <button type="button" id="btnExportWord" class="btn btn-outline-primary btn-sm">${escapeHtml(t(opts.lang, `${P}_export_word`))}</button>
      <button type="button" id="btnExportPdf" class="btn btn-outline-primary btn-sm">${escapeHtml(t(opts.lang, `${P}_export_pdf`))}</button>
      <button type="button" id="btnClear" class="btn btn-outline-secondary btn-sm">${escapeHtml(t(opts.lang, `${P}_clear`))}</button>
    </div>
    <p id="guideStatus" class="small text-muted mb-2" style="display:none;" role="status"></p>

    <p id="guideError" class="small text-danger mb-2" style="display:none;" role="alert"></p>
    <p id="guideWarn" class="guide-warn mb-2" style="display:none;" role="status"></p>

    <div class="guide-grid mb-3">
      <div>
        <label class="form-label" for="brandName">${escapeHtml(t(opts.lang, `${P}_name_label`))}</label>
        <input type="text" id="brandName" class="form-control form-control-sm" maxlength="80" autocomplete="organization" />
        <div class="field-source" id="srcName"></div>
      </div>
      <div>
        <label class="form-label" for="industry">${escapeHtml(t(opts.lang, `${P}_industry_label`))}</label>
        <select id="industry" class="form-select form-select-sm">
          <option value="saas">${escapeHtml(t(opts.lang, `${P}_ind_saas`))}</option>
          <option value="ecommerce">${escapeHtml(t(opts.lang, `${P}_ind_ecommerce`))}</option>
          <option value="food">${escapeHtml(t(opts.lang, `${P}_ind_food`))}</option>
          <option value="education">${escapeHtml(t(opts.lang, `${P}_ind_education`))}</option>
          <option value="nonprofit">${escapeHtml(t(opts.lang, `${P}_ind_nonprofit`))}</option>
          <option value="personal">${escapeHtml(t(opts.lang, `${P}_ind_personal`))}</option>
        </select>
        <div class="field-source" id="srcIndustry"></div>
      </div>
      <div>
        <label class="form-label" for="primaryHex">${escapeHtml(t(opts.lang, `${P}_color_label`))}</label>
        <div class="color-wrap">
          <input type="color" id="primaryPicker" value="#0f6e8c" aria-label="${escapeHtml(t(opts.lang, `${P}_color_label`))}" />
          <input type="text" id="primaryHex" class="form-control form-control-sm" maxlength="7" placeholder="#0F6E8C" />
        </div>
        <div class="field-source" id="srcColor"></div>
      </div>
      <div>
        <label class="form-label" for="preset">${escapeHtml(t(opts.lang, `${P}_preset_label`))}</label>
        <select id="preset" class="form-select form-select-sm">
          <option value="product">${escapeHtml(t(opts.lang, `${P}_preset_product`))}</option>
          <option value="strict">${escapeHtml(t(opts.lang, `${P}_preset_strict`))}</option>
          <option value="friendly">${escapeHtml(t(opts.lang, `${P}_preset_friendly`))}</option>
        </select>
        <div class="field-source" id="srcPreset"></div>
      </div>
    </div>

    <div class="mb-3">
      <label class="form-label">${escapeHtml(t(opts.lang, `${P}_personality_label`))}</label>
      <div class="chip-row" id="personalityRow">${personalityHtml}</div>
      <p class="form-text mb-0">${escapeHtml(t(opts.lang, `${P}_personality_hint`))}</p>
    </div>

    <div class="mb-3">
      <label class="form-label">${escapeHtml(t(opts.lang, `${P}_modules_label`))}</label>
      <div class="module-grid" id="moduleGrid">${modulesHtml}</div>
      <p class="form-text mb-0">${escapeHtml(t(opts.lang, `${P}_modules_hint`))}</p>
    </div>

    <div class="mb-3">
      <label class="form-label" for="oneLiner">${escapeHtml(t(opts.lang, `${P}_oneliner_label`))}</label>
      <input type="text" id="oneLiner" class="form-control form-control-sm" maxlength="160" />
      <div class="field-source" id="srcOneLiner"></div>
    </div>

    <div class="mb-3">
      <label class="form-label" for="audience">${escapeHtml(t(opts.lang, `${P}_audience_label`))}</label>
      <input type="text" id="audience" class="form-control form-control-sm" maxlength="160" />
      <div class="field-source" id="srcAudience"></div>
    </div>

    <div class="mb-3">
      <label class="form-label">${escapeHtml(t(opts.lang, `${P}_preview_label`))}</label>
      <div id="guidePreview" class="guide-preview" aria-live="polite"></div>
    </div>
    <div id="guideExportMount" aria-hidden="true"></div>

    <div class="mb-3">
      <label class="form-label" for="mdOut">${escapeHtml(t(opts.lang, `${P}_md_label`))}</label>
      <textarea id="mdOut" readonly spellcheck="false"></textarea>
    </div>
    <div class="mb-4">
      <label class="form-label" for="jsonOut">${escapeHtml(t(opts.lang, `${P}_json_label`))}</label>
      <textarea id="jsonOut" readonly spellcheck="false"></textarea>
    </div>

    <p class="small text-muted mb-0" id="disclaimerNote">${escapeHtml(t(opts.lang, `${P}_disclaimer`))}</p>`;

	/** IG 区块。 */
	const igHtml = renderToolIgSections({
		lang: opts.lang,
		prefix: P,
		mode: 'rules',
		usecaseCount: 3,
		ruleItemCount: 6,
	});

	/** 权威引用。 */
	const referencesHtml = renderToolReferencesSection({
		lang: opts.lang,
		links: [
			{
				label: 'WCAG 2.2 Understanding — Contrast (Minimum)',
				href: 'https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum/',
			},
			{ label: 'Material Design 3 — Styles', href: 'https://m3.material.io/styles' },
			{
				label: 'Carbon Design System — Color',
				href: 'https://carbondesignsystem.com/guidelines/color/overview/',
			},
			{
				label: 'NASA Brand Guidelines (structure reference)',
				href: 'https://www.nasa.gov/nasa-brand-center/brand-guidelines/',
			},
			{ label: 'docx — JavaScript library', href: 'https://docx.js.org/' },
			{ label: 'pdf-lib', href: 'https://pdf-lib.js.org/' },
		],
	});

	/** catalog 元数据。 */
	const tool = getToolBySlug('brand-style-guide');
	/** FAQ / Related。 */
	const extraHtml = tool
		? renderToolExtraSections({
				lang: opts.lang,
				defaultLang: opts.defaultLang,
				tool,
			})
		: '';

	/** JSON-LD。 */
	const toolJsonLd = tool
		? buildToolJsonLd({
				lang: opts.lang,
				defaultLang: opts.defaultLang,
				tool,
				canonicalPath,
			})
		: '';

	/** 传给客户端的文案与标签。 */
	const ui = {
		badHex: t(opts.lang, `${P}_bad_hex`),
		empty: t(opts.lang, `${P}_empty`),
		copied: t(opts.lang, `${P}_copy_done`),
		warnContrast: t(opts.lang, `${P}_warn_contrast`),
		exportingWord: t(opts.lang, `${P}_exporting_word`),
		exportingPdf: t(opts.lang, `${P}_exporting_pdf`),
		exportDone: t(opts.lang, `${P}_export_done`),
		exportFail: t(opts.lang, `${P}_export_fail`),
		libFail: t(opts.lang, `${P}_lib_fail`),
		exportVisualNote: t(opts.lang, `${P}_export_visual_note`),
		sourceSmart: t(opts.lang, `${P}_source_smart`),
		sourceManual: t(opts.lang, `${P}_source_manual`),
		manualBadge: t(opts.lang, `${P}_manual_badge`),
		doLabel: t(opts.lang, `${P}_do`),
		dontLabel: t(opts.lang, `${P}_dont`),
		modTitles: {
			m0: t(opts.lang, `${P}_mod_m0`),
			m1: t(opts.lang, `${P}_mod_m1`),
			m2: t(opts.lang, `${P}_mod_m2`),
			m3: t(opts.lang, `${P}_mod_m3`),
			m4: t(opts.lang, `${P}_mod_m4`),
			m5: t(opts.lang, `${P}_mod_m5`),
			m6: t(opts.lang, `${P}_mod_m6`),
			m7: t(opts.lang, `${P}_mod_m7`),
			m8: t(opts.lang, `${P}_mod_m8`),
			m9: t(opts.lang, `${P}_mod_m9`),
		},
		labels: {
			promise: t(opts.lang, `${P}_lbl_promise`),
			audience: t(opts.lang, `${P}_lbl_audience`),
			personality: t(opts.lang, `${P}_lbl_personality`),
			clearSpace: t(opts.lang, `${P}_lbl_clear_space`),
			minSize: t(opts.lang, `${P}_lbl_min_size`),
			primary: t(opts.lang, `${P}_lbl_primary`),
			secondary: t(opts.lang, `${P}_lbl_secondary`),
			accent: t(opts.lang, `${P}_lbl_accent`),
			neutral: t(opts.lang, `${P}_lbl_neutral`),
			status: t(opts.lang, `${P}_lbl_status`),
			typeRoles: t(opts.lang, `${P}_lbl_type_roles`),
			typeScale: t(opts.lang, `${P}_lbl_type_scale`),
			baseUnit: t(opts.lang, `${P}_lbl_base_unit`),
			radius: t(opts.lang, `${P}_lbl_radius`),
			photo: t(opts.lang, `${P}_lbl_photo`),
			icon: t(opts.lang, `${P}_lbl_icon`),
			motion: t(opts.lang, `${P}_lbl_motion`),
			voice: t(opts.lang, `${P}_lbl_voice`),
			touch: t(opts.lang, `${P}_lbl_touch`),
			a11y: t(opts.lang, `${P}_lbl_a11y`),
			legal: t(opts.lang, `${P}_lbl_legal`),
		},
		/** 行业默认 one-liner / audience（按行业）。 */
		industryCopy: {
			saas: {
				one: t(opts.lang, `${P}_copy_saas_one`),
				aud: t(opts.lang, `${P}_copy_saas_aud`),
			},
			ecommerce: {
				one: t(opts.lang, `${P}_copy_ecom_one`),
				aud: t(opts.lang, `${P}_copy_ecom_aud`),
			},
			food: {
				one: t(opts.lang, `${P}_copy_food_one`),
				aud: t(opts.lang, `${P}_copy_food_aud`),
			},
			education: {
				one: t(opts.lang, `${P}_copy_edu_one`),
				aud: t(opts.lang, `${P}_copy_edu_aud`),
			},
			nonprofit: {
				one: t(opts.lang, `${P}_copy_np_one`),
				aud: t(opts.lang, `${P}_copy_np_aud`),
			},
			personal: {
				one: t(opts.lang, `${P}_copy_per_one`),
				aud: t(opts.lang, `${P}_copy_per_aud`),
			},
		},
		/** Do/Don't 模板按模块。 */
		samples: {
			m0Do: t(opts.lang, `${P}_sample_m0_do`),
			m0Dont: t(opts.lang, `${P}_sample_m0_dont`),
			m0DoWhy: t(opts.lang, `${P}_sample_m0_do_why`),
			m0DontWhy: t(opts.lang, `${P}_sample_m0_dont_why`),
			m0BadLine: t(opts.lang, `${P}_sample_m0_bad_line`),
			m1Do: t(opts.lang, `${P}_sample_m1_do`),
			m1Dont: t(opts.lang, `${P}_sample_m1_dont`),
			m2Do: t(opts.lang, `${P}_sample_m2_do`),
			m2Dont: t(opts.lang, `${P}_sample_m2_dont`),
			m3Do: t(opts.lang, `${P}_sample_m3_do`),
			m3Dont: t(opts.lang, `${P}_sample_m3_dont`),
			m4Do: t(opts.lang, `${P}_sample_m4_do`),
			m4Dont: t(opts.lang, `${P}_sample_m4_dont`),
			m5Do: t(opts.lang, `${P}_sample_m5_do`),
			m5Dont: t(opts.lang, `${P}_sample_m5_dont`),
			m7Do: t(opts.lang, `${P}_sample_m7_do`),
			m7Dont: t(opts.lang, `${P}_sample_m7_dont`),
			whyLabel: t(opts.lang, `${P}_sample_why_label`),
		},
		tagLabels: Object.fromEntries(
			personalityKeys.map((k) => [k, t(opts.lang, `${P}_tag_${k}`)])
		) as Record<string, string>,
		placeholderName: t(opts.lang, `${P}_placeholder_name`),
	};

	/** 客户端规则引擎 + 预览/导出。 */
	const extraBodyHtml = `
  <script>
(function () {
  /** 服务端注入的 UI 文案。 */
  var UI = ${JSON.stringify(ui)};

  /** 字段来源：smart | manual。 */
  var sources = {
    name: 'smart',
    industry: 'smart',
    color: 'smart',
    preset: 'smart',
    oneLiner: 'smart',
    audience: 'smart',
    personality: 'smart',
    modules: 'smart'
  };

  /** 最近一次 Markdown。 */
  var lastMd = '';
  /** 最近一次 JSON。 */
  var lastJson = '';
  /** 最近一次指南对象（供 Word/PDF 导出）。 */
  var lastGuide = null;
  /** docx 库加载 Promise。 */
  var docxLibPromise = null;
  /** 是否跳过「手动标记」的程序化写入。 */
  var suppressing = false;

  /** DOM 引用。 */
  var brandName = document.getElementById('brandName');
  var industry = document.getElementById('industry');
  var primaryPicker = document.getElementById('primaryPicker');
  var primaryHex = document.getElementById('primaryHex');
  var preset = document.getElementById('preset');
  var oneLiner = document.getElementById('oneLiner');
  var audience = document.getElementById('audience');
  var guidePreview = document.getElementById('guidePreview');
  var mdOut = document.getElementById('mdOut');
  var jsonOut = document.getElementById('jsonOut');
  var guideError = document.getElementById('guideError');
  var guideWarn = document.getElementById('guideWarn');
  var guideStatus = document.getElementById('guideStatus');
  var btnExportWord = document.getElementById('btnExportWord');
  var btnExportPdf = document.getElementById('btnExportPdf');

  /**
   * 规范化 HEX。
   * @param {string} raw
   * @returns {string|null}
   */
  function normalizeHex(raw) {
    var s = String(raw || '').trim();
    if (!s) return null;
    if (s.charAt(0) !== '#') s = '#' + s;
    var m3 = /^#([0-9a-fA-F]{3})$/.exec(s);
    if (m3) {
      var t3 = m3[1];
      return ('#' + t3[0] + t3[0] + t3[1] + t3[1] + t3[2] + t3[2]).toUpperCase();
    }
    var m6 = /^#([0-9a-fA-F]{6})$/.exec(s);
    if (m6) return ('#' + m6[1]).toUpperCase();
    return null;
  }

  /**
   * HEX → RGB。
   * @param {string} hex
   * @returns {number[]}
   */
  function hexToRgb(hex) {
    var h = hex.slice(1);
    return [parseInt(h.slice(0, 2), 16), parseInt(h.slice(2, 4), 16), parseInt(h.slice(4, 6), 16)];
  }

  /**
   * RGB → HEX。
   * @param {number} r
   * @param {number} g
   * @param {number} b
   * @returns {string}
   */
  function rgbToHex(r, g, b) {
    function ch(n) {
      var v = Math.max(0, Math.min(255, Math.round(n)));
      var s = v.toString(16).toUpperCase();
      return s.length === 1 ? '0' + s : s;
    }
    return '#' + ch(r) + ch(g) + ch(b);
  }

  /**
   * sRGB 通道线性化。
   * @param {number} c8
   * @returns {number}
   */
  function srgbToLinear(c8) {
    var c = c8 / 255;
    return c <= 0.04045 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
  }

  /**
   * 相对亮度。
   * @param {number[]} rgb
   * @returns {number}
   */
  function relativeLuminance(rgb) {
    return 0.2126 * srgbToLinear(rgb[0]) + 0.7152 * srgbToLinear(rgb[1]) + 0.0722 * srgbToLinear(rgb[2]);
  }

  /**
   * 对比度比率。
   * @param {number[]} a
   * @param {number[]} b
   * @returns {number}
   */
  function contrastRatio(a, b) {
    var l1 = relativeLuminance(a);
    var l2 = relativeLuminance(b);
    var hi = Math.max(l1, l2);
    var lo = Math.min(l1, l2);
    return (hi + 0.05) / (lo + 0.05);
  }

  /**
   * 旋转色相得到衍生色（简化 HSL）。
   * @param {number[]} rgb
   * @param {number} deg
   * @param {number} satMul
   * @param {number} litMul
   * @returns {string}
   */
  function deriveHex(rgb, deg, satMul, litMul) {
    var r = rgb[0] / 255, g = rgb[1] / 255, b = rgb[2] / 255;
    var max = Math.max(r, g, b), min = Math.min(r, g, b);
    var h = 0, s = 0, l = (max + min) / 2;
    if (max !== min) {
      var d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case r: h = (g - b) / d + (g < b ? 6 : 0); break;
        case g: h = (b - r) / d + 2; break;
        default: h = (r - g) / d + 4; break;
      }
      h /= 6;
    }
    h = (h + deg / 360) % 1;
    if (h < 0) h += 1;
    s = Math.max(0, Math.min(1, s * satMul));
    l = Math.max(0.08, Math.min(0.92, l * litMul));
    function hue2rgb(p, q, t) {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1 / 6) return p + (q - p) * 6 * t;
      if (t < 1 / 2) return q;
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
      return p;
    }
    var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    var p = 2 * l - q;
    return rgbToHex(hue2rgb(p, q, h + 1 / 3) * 255, hue2rgb(p, q, h) * 255, hue2rgb(p, q, h - 1 / 3) * 255);
  }

  /**
   * 性格 → 视觉默认。
   * @param {string[]} tags
   * @returns {{radius:string, primaryMax:string, typeHint:string, voice:string}}
   */
  function mapPersonality(tags) {
    var set = {};
    tags.forEach(function (t) { set[t] = true; });
    if (set.luxury) {
      return { radius: '0–4px', primaryMax: '≤10%', typeHint: 'Display serif + fine sans body', voice: 'Sparse, precise, quiet confidence' };
    }
    if (set.playful) {
      return { radius: '12–16px', primaryMax: '≤30%', typeHint: 'Rounded geometric sans', voice: 'Warm, clear, light humor in marketing only' };
    }
    if (set.energetic || set.bold) {
      return { radius: '6–8px', primaryMax: '≤25%', typeHint: 'Geometric sans, strong headings', voice: 'Direct verbs; short lines' };
    }
    if (set.technical) {
      return { radius: '4–6px', primaryMax: '≤20%', typeHint: 'Neutral sans + monospace for code/numbers', voice: 'Exact terms; no fluff' };
    }
    return { radius: '4–6px', primaryMax: '≤15%', typeHint: 'Humanist or neutral sans', voice: 'Calm, short sentences' };
  }

  /**
   * Preset → 默认模块开关。
   * @param {string} p
   * @returns {Object}
   */
  function presetModules(p) {
    if (p === 'strict') {
      return { m0: true, m1: true, m2: true, m3: true, m4: false, m5: false, m6: false, m7: false, m8: false, m9: true };
    }
    if (p === 'friendly') {
      return { m0: true, m1: true, m2: true, m3: true, m4: true, m5: true, m6: false, m7: true, m8: true, m9: true };
    }
    return { m0: true, m1: true, m2: true, m3: true, m4: true, m5: true, m6: false, m7: false, m8: false, m9: true };
  }

  /**
   * 读取性格标签。
   * @returns {string[]}
   */
  function readTags() {
    var out = [];
    document.querySelectorAll('input[name="personality"]:checked').forEach(function (el) {
      out.push(el.value);
    });
    return out;
  }

  /**
   * 读取开启模块。
   * @returns {Object}
   */
  function readModules() {
    var out = {};
    document.querySelectorAll('input[name="module"]').forEach(function (el) {
      out[el.value] = !!el.checked;
    });
    return out;
  }

  /**
   * 应用模块开关到 DOM。
   * @param {Object} map
   */
  function applyModules(map) {
    suppressing = true;
    document.querySelectorAll('input[name="module"]').forEach(function (el) {
      el.checked = !!map[el.value];
    });
    suppressing = false;
  }

  /**
   * 刷新 chip 高亮。
   */
  function refreshChips() {
    document.querySelectorAll('#personalityRow label').forEach(function (lab) {
      var inp = lab.querySelector('input');
      if (inp && inp.checked) lab.classList.add('is-on');
      else lab.classList.remove('is-on');
    });
  }

  /**
   * 更新字段来源提示。
   * @param {string} id
   * @param {string} key
   */
  function paintSource(id, key) {
    var el = document.getElementById(id);
    if (!el) return;
    var src = sources[key];
    el.textContent = src === 'manual' ? UI.sourceManual : UI.sourceSmart;
  }

  /**
   * 标记手动。
   * @param {string} key
   */
  function markManual(key) {
    if (suppressing) return;
    sources[key] = 'manual';
    paintSource('src' + key.charAt(0).toUpperCase() + key.slice(1), key === 'oneLiner' ? 'oneLiner' : key);
  }

  /**
   * 显示状态行。
   * @param {string} msg
   */
  function setStatus(msg) {
    if (!guideStatus) return;
    if (!msg) {
      guideStatus.style.display = 'none';
      guideStatus.textContent = '';
      return;
    }
    guideStatus.style.display = 'block';
    guideStatus.textContent = msg;
  }

  /**
   * 文件名安全化。
   * @param {string} name
   * @returns {string}
   */
  function safeFileBase(name) {
    var s = String(name || 'brand-style-guide').trim().replace(/[\\\\/:*?"<>|]+/g, '-').replace(/\\s+/g, '-');
    return s.slice(0, 60) || 'brand-style-guide';
  }

  /**
   * 触发 Blob 下载。
   * @param {Blob} blob
   * @param {string} filename
   */
  function downloadBlob(blob, filename) {
    var url = URL.createObjectURL(blob);
    var a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  }

  /**
   * 懒加载 docx（UMD，失败则 ESM）。
   * @returns {Promise<object>}
   */
  function loadDocxLib() {
    if (docxLibPromise) return docxLibPromise;
    docxLibPromise = new Promise(function (resolve, reject) {
      if (window.docx && window.docx.Document) {
        resolve(window.docx);
        return;
      }
      var script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/npm/docx@8.5.0/build/index.umd.js';
      script.async = true;
      script.onload = function () {
        if (window.docx && window.docx.Document) resolve(window.docx);
        else {
          import('https://cdn.jsdelivr.net/npm/docx@8.5.0/+esm')
            .then(function (mod) { resolve(mod); })
            .catch(function () { reject(new Error('lib')); });
        }
      };
      script.onerror = function () {
        import('https://cdn.jsdelivr.net/npm/docx@8.5.0/+esm')
          .then(function (mod) { resolve(mod); })
          .catch(function () { reject(new Error('lib')); });
      };
      document.head.appendChild(script);
    });
    return docxLibPromise;
  }

  /**
   * 确保 pdf-lib 已加载。
   * @returns {Promise<object>}
   */
  function loadPdfLib() {
    if (window.PDFLib && window.PDFLib.PDFDocument) {
      return Promise.resolve(window.PDFLib);
    }
    return new Promise(function (resolve, reject) {
      var script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/npm/pdf-lib@1.17.1/dist/pdf-lib.min.js';
      script.async = true;
      script.crossOrigin = 'anonymous';
      script.onload = function () {
        if (window.PDFLib && window.PDFLib.PDFDocument) resolve(window.PDFLib);
        else reject(new Error('lib'));
      };
      script.onerror = function () { reject(new Error('lib')); };
      document.head.appendChild(script);
    });
  }

  /**
   * 懒加载 html2canvas（将预览 DOM 栅格化，保证导出与页面样式一致）。
   * @returns {Promise<Function>}
   */
  function loadHtml2Canvas() {
    if (window.html2canvas) return Promise.resolve(window.html2canvas);
    return new Promise(function (resolve, reject) {
      var script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/npm/html2canvas@1.4.1/dist/html2canvas.min.js';
      script.async = true;
      script.crossOrigin = 'anonymous';
      script.onload = function () {
        if (window.html2canvas) resolve(window.html2canvas);
        else reject(new Error('lib'));
      };
      script.onerror = function () { reject(new Error('lib')); };
      document.head.appendChild(script);
    });
  }

  /**
   * 准备与页面预览同款的离屏克隆节点。
   * @returns {HTMLElement}
   */
  function prepareExportClone() {
    var mount = document.getElementById('guideExportMount');
    if (!mount) throw new Error('export');
    if (!guidePreview || !guidePreview.innerHTML.trim()) throw new Error('empty');
    mount.innerHTML = '';
    var clone = guidePreview.cloneNode(true);
    clone.id = 'guidePreviewExport';
    clone.className = 'guide-preview';
    clone.removeAttribute('aria-live');
    mount.appendChild(clone);
    return clone;
  }

  /**
   * Canvas → PNG bytes。
   * @param {HTMLCanvasElement} canvas
   * @returns {Promise<Uint8Array>}
   */
  function canvasToPngBytes(canvas) {
    return new Promise(function (resolve, reject) {
      canvas.toBlob(function (blob) {
        if (!blob) { reject(new Error('encode')); return; }
        blob.arrayBuffer().then(function (buf) {
          resolve(new Uint8Array(buf));
        }).catch(reject);
      }, 'image/png');
    });
  }

  /**
   * 将高画布按 A4 比例切片成多页。
   * @param {HTMLCanvasElement} big
   * @returns {HTMLCanvasElement[]}
   */
  function sliceCanvasToA4Pages(big) {
    var pageW = big.width;
    var pageH = Math.round(pageW * (842 / 595));
    var pages = [];
    var y = 0;
    while (y < big.height - 1) {
      var h = Math.min(pageH, big.height - y);
      var c = document.createElement('canvas');
      c.width = pageW;
      c.height = pageH;
      var ctx = c.getContext('2d');
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(0, 0, pageW, pageH);
      ctx.drawImage(big, 0, y, pageW, h, 0, 0, pageW, h);
      pages.push(c);
      y += pageH;
    }
    if (!pages.length) {
      var blank = document.createElement('canvas');
      blank.width = pageW;
      blank.height = pageH;
      var bctx = blank.getContext('2d');
      bctx.fillStyle = '#ffffff';
      bctx.fillRect(0, 0, pageW, pageH);
      pages.push(blank);
    }
    return pages;
  }

  /**
   * 捕获页面预览样式的多页 PNG（与 #guidePreview 视觉一致）。
   * @returns {Promise<Array<{bytes:Uint8Array,w:number,h:number}>>}
   */
  function capturePreviewPages() {
    var clone = prepareExportClone();
    var fontsReady = (document.fonts && document.fonts.ready) ? document.fonts.ready : Promise.resolve();
    return fontsReady
      .then(function () {
        return new Promise(function (resolve) {
          requestAnimationFrame(function () {
            requestAnimationFrame(resolve);
          });
        });
      })
      .then(function () { return loadHtml2Canvas(); })
      .then(function (html2canvas) {
        var w = Math.max(720, clone.scrollWidth || 720);
        var h = Math.max(1, clone.scrollHeight || 1);
        return html2canvas(clone, {
          backgroundColor: '#ffffff',
          scale: 2,
          useCORS: true,
          allowTaint: true,
          logging: false,
          scrollX: 0,
          scrollY: 0,
          width: w,
          height: h,
          windowWidth: w,
          windowHeight: h
        });
      })
      .then(function (bigCanvas) {
        var pages = sliceCanvasToA4Pages(bigCanvas);
        return Promise.all(pages.map(function (c) {
          return canvasToPngBytes(c).then(function (bytes) {
            return { bytes: bytes, w: c.width, h: c.height };
          });
        }));
      })
      .then(function (rasters) {
        var mount = document.getElementById('guideExportMount');
        if (mount) mount.innerHTML = '';
        return rasters;
      })
      .catch(function (err) {
        var mount = document.getElementById('guideExportMount');
        if (mount) mount.innerHTML = '';
        throw err;
      });
  }

  /**
   * 导出 Word：嵌入与页面预览一致的分页截图。
   */
  function exportWord() {
    if (!lastGuide || !guidePreview || !guidePreview.innerHTML.trim()) {
      setError(UI.empty);
      return;
    }
    setError('');
    setStatus(UI.exportingWord);
    btnExportWord.disabled = true;
    Promise.all([loadDocxLib(), capturePreviewPages()])
      .then(function (pair) {
        var docx = pair[0];
        var rasters = pair[1];
        var Document = docx.Document;
        var Packer = docx.Packer;
        var Paragraph = docx.Paragraph;
        var ImageRun = docx.ImageRun;
        var PageBreak = docx.PageBreak;
        var TextRun = docx.TextRun;
        var children = [];
        children.push(new Paragraph({
          children: [new TextRun({
            text: (lastGuide.meta && lastGuide.meta.name ? lastGuide.meta.name + ' — ' : '') + 'Brand Style Guide',
            bold: true,
            size: 28
          })]
        }));
        if (UI.exportVisualNote) {
          children.push(new Paragraph({
            children: [new TextRun({
              text: UI.exportVisualNote,
              italics: true,
              size: 18,
              color: '52606D'
            })]
          }));
        }
        var DOC_W = 620;
        rasters.forEach(function (r, idx) {
          var scale = DOC_W / r.w;
          var targetH = Math.max(1, Math.round(r.h * scale));
          children.push(new Paragraph({
            children: [
              new ImageRun({
                data: r.bytes,
                transformation: { width: DOC_W, height: targetH },
                type: 'png'
              })
            ]
          }));
          if (idx < rasters.length - 1) {
            children.push(new Paragraph({ children: [new PageBreak()] }));
          }
        });
        var doc = new Document({ sections: [{ children: children }] });
        return Packer.toBlob(doc);
      })
      .then(function (blob) {
        btnExportWord.disabled = false;
        downloadBlob(blob, safeFileBase(lastGuide.meta.name) + '-brand-style-guide.docx');
        setStatus(UI.exportDone);
        flashCopied(btnExportWord);
      })
      .catch(function (err) {
        btnExportWord.disabled = false;
        setStatus('');
        setError(err && err.message === 'lib' ? UI.libFail : UI.exportFail);
      });
  }

  /**
   * 导出 PDF：嵌入与页面预览一致的分页截图。
   */
  function exportPdf() {
    if (!lastGuide || !guidePreview || !guidePreview.innerHTML.trim()) {
      setError(UI.empty);
      return;
    }
    setError('');
    setStatus(UI.exportingPdf);
    btnExportPdf.disabled = true;
    Promise.all([loadPdfLib(), capturePreviewPages()])
      .then(function (pair) {
        var PDFLib = pair[0];
        var rasters = pair[1];
        return PDFLib.PDFDocument.create().then(function (doc) {
          var chain = Promise.resolve();
          rasters.forEach(function (r) {
            chain = chain.then(function () {
              return doc.embedPng(r.bytes).then(function (img) {
                var page = doc.addPage([595, 842]);
                page.drawImage(img, { x: 0, y: 0, width: 595, height: 842 });
              });
            });
          });
          return chain.then(function () { return doc.save(); });
        });
      })
      .then(function (bytes) {
        btnExportPdf.disabled = false;
        downloadBlob(new Blob([bytes], { type: 'application/pdf' }), safeFileBase(lastGuide.meta.name) + '-brand-style-guide.pdf');
        setStatus(UI.exportDone);
        flashCopied(btnExportPdf);
      })
      .catch(function (err) {
        btnExportPdf.disabled = false;
        setStatus('');
        setError(err && err.message === 'lib' ? UI.libFail : UI.exportFail);
      });
  }

    /**
   * 显示错误。
   * @param {string} msg
   */
  function setError(msg) {
    if (!msg) {
      guideError.style.display = 'none';
      guideError.textContent = '';
      return;
    }
    guideError.style.display = 'block';
    guideError.textContent = msg;
  }

  /**
   * 显示警告。
   * @param {string} msg
   */
  function setWarn(msg) {
    if (!msg) {
      guideWarn.style.display = 'none';
      guideWarn.textContent = '';
      return;
    }
    guideWarn.style.display = 'block';
    guideWarn.textContent = msg;
  }

  /**
   * 按钮闪「已复制」。
   * @param {HTMLElement} btn
   */
  function flashCopied(btn) {
    var old = btn.textContent;
    btn.textContent = UI.copied;
    setTimeout(function () { btn.textContent = old; }, 1200);
  }

  /**
   * 构建指南对象。
   * @param {boolean} smartOnly 仅覆写 smart 字段的文本建议
   * @returns {object|null}
   */
  function buildGuide(smartOnly) {
    var hex = normalizeHex(primaryHex.value);
    if (!hex) {
      setError(UI.badHex);
      return null;
    }
    setError('');
    primaryPicker.value = hex.toLowerCase();
    primaryHex.value = hex;

    var name = (brandName.value || '').trim() || UI.placeholderName;
    var ind = industry.value || 'saas';
    var tags = readTags();
    if (!tags.length) tags = ['calm'];
    var mods = readModules();
    var pers = mapPersonality(tags);
    var rgb = hexToRgb(hex);
    var secondary = deriveHex(rgb, 28, 0.85, 0.92);
    var accent = deriveHex(rgb, -40, 0.9, 1.05);
    var neutral = '#52606D';
    var status = { success: '#137333', warning: '#B06000', danger: '#C5221F', info: '#0B57D0' };
    var onWhite = contrastRatio(rgb, [255, 255, 255]);
    var clearMul = preset.value === 'strict' ? 1.5 : 1;
    var minPx = preset.value === 'strict' ? 24 : 16;
    var indCopy = UI.industryCopy[ind] || UI.industryCopy.saas;

    if (!smartOnly || sources.oneLiner === 'smart') {
      suppressing = true;
      oneLiner.value = String(indCopy.one || '').split('{brand}').join(name);
      suppressing = false;
      if (!smartOnly) sources.oneLiner = 'smart';
    }
    if (!smartOnly || sources.audience === 'smart') {
      suppressing = true;
      audience.value = indCopy.aud;
      suppressing = false;
      if (!smartOnly) sources.audience = 'smart';
    }

    paintSource('srcName', 'name');
    paintSource('srcIndustry', 'industry');
    paintSource('srcColor', 'color');
    paintSource('srcPreset', 'preset');
    paintSource('srcOneLiner', 'oneLiner');
    paintSource('srcAudience', 'audience');

    var typeScale = '12 / 14 / 16 / 20 / 24 / 32 / 40 (ratio ~ 1.25 from 16)';
    var photo = tags.indexOf('luxury') >= 0 ? 'Editorial photography, generous crop, muted grade' :
      (tags.indexOf('playful') >= 0 ? 'Bright lifestyle shots, soft shadows' : 'Clean product/UI screenshots, natural light');
    var icon = tags.indexOf('playful') >= 0 ? 'Rounded filled icons' : '1.5-2px outline icons aligned to radius';
    var radiusCss = pers.radius.indexOf('12') >= 0 ? '14px' : (pers.radius.indexOf('0') === 0 ? '2px' : '6px');

    return {
      meta: {
        name: name,
        industry: ind,
        primary: hex,
        personality: tags,
        preset: preset.value,
        generatedAt: new Date().toISOString(),
        smart: true,
        note: 'Rule-based draft - not cloud AI; not legal trademark advice.'
      },
      modules: mods,
      elements: {
        promise: oneLiner.value,
        audience: audience.value,
        personalitySummary: tags.map(function (t) { return UI.tagLabels[t] || t; }).join(', '),
        clearSpace: clearMul + 'x mark height',
        minSize: minPx + 'px digital / keep print legible',
        colors: {
          primary: hex,
          secondary: secondary,
          accent: accent,
          neutral: neutral,
          status: status,
          primaryMaxArea: pers.primaryMax
        },
        type: {
          roles: pers.typeHint,
          scale: typeScale
        },
        layout: {
          baseUnit: '8px',
          radius: pers.radius,
          radiusCss: radiusCss
        },
        imagery: { photo: photo, icon: icon },
        motion: { duration: '150-250ms ease-out', reduce: 'Honor prefers-reduced-motion' },
        voice: pers.voice,
        touchpoints: 'Web, app chrome, social avatars - keep the same clear-space and primary ratio',
        a11y: 'Body text >= 4.5:1 on surfaces; large text >= 3:1',
        legal: 'This draft is not permission to use third-party marks. Structure presets are educational, not affiliation.'
      },
      samples: UI.samples,
      contrastPrimaryOnWhite: Number(onWhite.toFixed(2)),
      sources: Object.assign({}, sources)
    };
  }

  /**
   * 转义 HTML 文本。
   * @param {string} s
   * @returns {string}
   */
  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  /**
   * Do/Don't 文案卡。
   * @param {string} ok
   * @param {string} bad
   * @returns {string}
   */
  function doCards(ok, bad) {
    return '<div class="do-grid">' +
      '<div class="do-card ok"><strong>' + esc(UI.doLabel) + '</strong> - ' + esc(ok) + '</div>' +
      '<div class="do-card bad"><strong>' + esc(UI.dontLabel) + '</strong> - ' + esc(bad) + '</div>' +
      '</div>';
  }

  /**
   * 左右对照可视化样例舞台（可附推荐/禁止原因）。
   * @param {string} okInner
   * @param {string} badInner
   * @param {string} [okWhy]
   * @param {string} [badWhy]
   * @returns {string}
   */
  function sampleStage(okInner, badInner, okWhy, badWhy) {
    var okWhyHtml = okWhy
      ? '<p class="sample-why mb-0"><strong>' + esc(UI.samples.whyLabel) + '</strong> ' + esc(okWhy) + '</p>'
      : '';
    var badWhyHtml = badWhy
      ? '<p class="sample-why mb-0"><strong>' + esc(UI.samples.whyLabel) + '</strong> ' + esc(badWhy) + '</p>'
      : '';
    return '<div class="sample-stage">' +
      '<div class="sample-pane ok"><div class="cap">' + esc(UI.doLabel) + '</div>' + okInner + okWhyHtml + '</div>' +
      '<div class="sample-pane bad"><div class="cap">' + esc(UI.dontLabel) + '</div>' + badInner + badWhyHtml + '</div>' +
      '</div>';
  }

  /**
   * 解析主色占用百分比数字。
   * @param {string} primaryMax
   * @returns {number}
   */
  function primaryPct(primaryMax) {
    var m = /(\\d+)/.exec(String(primaryMax || ''));
    return m ? Number(m[1]) : 15;
  }

  /**
   * 渲染预览 HTML（含各模块可视化样例）。
   * @param {object} g
   */
  function renderPreview(g) {
    var e = g.elements;
    var c = e.colors;
    var pct = primaryPct(c.primaryMaxArea);
    var init = (g.meta.name || 'B').charAt(0).toUpperCase();
    var html = '';
    html += '<div class="meta">' + esc(g.meta.name) + ' · ' + esc(g.meta.preset) + ' · primary ' + esc(c.primary) +
      (g.sources.name === 'manual' || g.sources.oneLiner === 'manual' ? ' <span class="manual-badge">' + esc(UI.manualBadge) + '</span>' : '') +
      '</div>';

    if (g.modules.m0) {
      html += '<h3>' + esc(UI.modTitles.m0) + '</h3><dl>' +
        '<dt>' + esc(UI.labels.promise) + '</dt><dd>' + esc(e.promise) + '</dd>' +
        '<dt>' + esc(UI.labels.audience) + '</dt><dd>' + esc(e.audience) + '</dd>' +
        '<dt>' + esc(UI.labels.personality) + '</dt><dd>' + esc(e.personalitySummary) + '</dd></dl>' +
        sampleStage(
          '<div class="voice-demo" style="border-left:3px solid ' + esc(c.primary) + '"><strong>' + esc(g.meta.name) + '</strong><div class="small text-muted">' + esc(e.promise) + '</div></div>',
          '<div class="voice-demo" style="opacity:.85">' + esc(UI.samples.m0BadLine) + '</div>',
          UI.samples.m0DoWhy,
          UI.samples.m0DontWhy
        ) +
        doCards(UI.samples.m0Do, UI.samples.m0Dont);
    }
    if (g.modules.m1) {
      html += '<h3>' + esc(UI.modTitles.m1) + '</h3><dl>' +
        '<dt>' + esc(UI.labels.clearSpace) + '</dt><dd>' + esc(e.clearSpace) + '</dd>' +
        '<dt>' + esc(UI.labels.minSize) + '</dt><dd>' + esc(e.minSize) + '</dd></dl>' +
        sampleStage(
          '<div class="logo-demo" style="padding:' + (g.meta.preset === 'strict' ? '14px' : '10px') + '"><span class="pad"></span><span class="mark" style="background:' + esc(c.primary) + '">' + esc(init) + '</span></div>',
          '<div class="logo-demo stretched shadowed"><span class="mark" style="background:' + esc(c.primary) + '">' + esc(init) + '</span></div>'
        ) +
        doCards(UI.samples.m1Do, UI.samples.m1Dont);
    }
    if (g.modules.m2) {
      html += '<h3>' + esc(UI.modTitles.m2) + '</h3>' +
        '<div class="swatch-row">' +
        '<div class="swatch" title="primary" style="background:' + esc(c.primary) + '"></div>' +
        '<div class="swatch" title="secondary" style="background:' + esc(c.secondary) + '"></div>' +
        '<div class="swatch" title="accent" style="background:' + esc(c.accent) + '"></div>' +
        '<div class="swatch" title="neutral" style="background:' + esc(c.neutral) + '"></div>' +
        '</div><dl>' +
        '<dt>' + esc(UI.labels.primary) + '</dt><dd>' + esc(c.primary) + ' (' + esc(c.primaryMaxArea) + ')</dd>' +
        '<dt>' + esc(UI.labels.secondary) + '</dt><dd>' + esc(c.secondary) + '</dd>' +
        '<dt>' + esc(UI.labels.accent) + '</dt><dd>' + esc(c.accent) + '</dd>' +
        '<dt>' + esc(UI.labels.neutral) + '</dt><dd>' + esc(c.neutral) + '</dd>' +
        '<dt>' + esc(UI.labels.status) + '</dt><dd>' +
          esc(c.status.success) + ' / ' + esc(c.status.warning) + ' / ' + esc(c.status.danger) + ' / ' + esc(c.status.info) +
        '</dd></dl>' +
        sampleStage(
          '<div class="color-usage"><span style="width:' + pct + '%;background:' + esc(c.primary) + '"></span><span style="width:' + (100 - pct) + '%;background:#f0f2f5"></span></div><div class="small mt-1">' + esc(c.primaryMaxArea) + ' primary</div>',
          '<div class="color-usage"><span style="width:78%;background:' + esc(c.primary) + '"></span><span style="width:22%;background:' + esc(c.status.danger) + '"></span></div><div class="small mt-1">flood + brand-as-error</div>'
        ) +
        doCards(UI.samples.m2Do, UI.samples.m2Dont);
    }
    if (g.modules.m3) {
      html += '<h3>' + esc(UI.modTitles.m3) + '</h3><dl>' +
        '<dt>' + esc(UI.labels.typeRoles) + '</dt><dd>' + esc(e.type.roles) + '</dd>' +
        '<dt>' + esc(UI.labels.typeScale) + '</dt><dd>' + esc(e.type.scale) + '</dd></dl>' +
        sampleStage(
          '<div class="type-demo"><div class="display" style="color:' + esc(c.primary) + '">Display / Heading</div><div class="body">Body stays neutral and readable at 16px.</div></div>',
          '<div class="type-demo bad"><div class="display">Long paragraph set in display italics…</div><div class="body">…makes scanning hard and breaks hierarchy.</div></div>'
        ) +
        doCards(UI.samples.m3Do, UI.samples.m3Dont);
    }
    if (g.modules.m4) {
      html += '<h3>' + esc(UI.modTitles.m4) + '</h3><dl>' +
        '<dt>' + esc(UI.labels.baseUnit) + '</dt><dd>' + esc(e.layout.baseUnit) + '</dd>' +
        '<dt>' + esc(UI.labels.radius) + '</dt><dd>' + esc(e.layout.radius) + '</dd></dl>' +
        sampleStage(
          '<div class="space-demo">' +
            '<div class="box" style="width:32px;height:32px;border-radius:' + esc(e.layout.radiusCss) + ';background:' + esc(c.primary) + '">8</div>' +
            '<div class="box" style="width:48px;height:32px;border-radius:' + esc(e.layout.radiusCss) + ';background:' + esc(c.secondary) + '">16</div>' +
            '<div class="box" style="width:64px;height:32px;border-radius:' + esc(e.layout.radiusCss) + ';background:' + esc(c.accent) + '">24</div>' +
          '</div>',
          '<div class="space-demo bad"><div class="box" style="width:56px;height:40px;background:' + esc(c.primary) + '">?</div><div class="box" style="width:40px;height:28px;border-radius:20px;background:' + esc(c.accent) + '">!</div></div>'
        ) +
        doCards(UI.samples.m4Do, UI.samples.m4Dont);
    }
    if (g.modules.m5) {
      html += '<h3>' + esc(UI.modTitles.m5) + '</h3><dl>' +
        '<dt>' + esc(UI.labels.photo) + '</dt><dd>' + esc(e.imagery.photo) + '</dd>' +
        '<dt>' + esc(UI.labels.icon) + '</dt><dd>' + esc(e.imagery.icon) + '</dd></dl>' +
        sampleStage(
          '<div class="img-demo"><div class="photo"></div><div class="ico" style="border-color:' + esc(c.primary) + '"></div><div class="ico" style="border-color:' + esc(c.primary) + '"></div></div>',
          '<div class="img-demo bad"><div class="photo" style="background:linear-gradient(45deg,#ff0,#f0f,#0ff)"></div><div class="ico" style="border-color:' + esc(c.primary) + '"></div><div class="ico" style="border-color:' + esc(c.primary) + '"></div></div>'
        ) +
        doCards(UI.samples.m5Do, UI.samples.m5Dont);
    }
    if (g.modules.m6) {
      html += '<h3>' + esc(UI.modTitles.m6) + '</h3><dl>' +
        '<dt>' + esc(UI.labels.motion) + '</dt><dd>' + esc(e.motion.duration) + '; ' + esc(e.motion.reduce) + '</dd></dl>' +
        sampleStage(
          '<div class="motion-demo"><div class="bar" style="background:' + esc(c.primary) + '"></div><div class="small mt-2">' + esc(e.motion.duration) + '</div></div>',
          '<div class="motion-demo bad"><div class="bar" style="background:' + esc(c.primary) + '"></div><div class="small mt-2">bounce / flash loop</div></div>'
        );
    }
    if (g.modules.m7) {
      html += '<h3>' + esc(UI.modTitles.m7) + '</h3><dl>' +
        '<dt>' + esc(UI.labels.voice) + '</dt><dd>' + esc(e.voice) + '</dd></dl>' +
        sampleStage(
          '<div class="voice-demo">' + esc(e.voice) + '</div>',
          '<div class="voice-demo">Leverage synergistic paradigms to delight stakeholders ASAP!!!</div>'
        ) +
        doCards(UI.samples.m7Do, UI.samples.m7Dont);
    }
    if (g.modules.m8) {
      html += '<h3>' + esc(UI.modTitles.m8) + '</h3><dl>' +
        '<dt>' + esc(UI.labels.touch) + '</dt><dd>' + esc(e.touchpoints) + '</dd></dl>' +
        sampleStage(
          '<div class="touch-demo"><span class="chip" style="border-color:' + esc(c.primary) + '">Web</span><span class="chip" style="border-color:' + esc(c.primary) + '">App</span><span class="chip" style="border-color:' + esc(c.primary) + '">Social</span></div>',
          '<div class="touch-demo"><span class="chip">Web (new rules)</span><span class="chip" style="background:' + esc(c.primary) + ';color:#fff">Social (other logo)</span></div>'
        );
    }
    if (g.modules.m9) {
      html += '<h3>' + esc(UI.modTitles.m9) + '</h3><dl>' +
        '<dt>' + esc(UI.labels.a11y) + '</dt><dd>' + esc(e.a11y) + '</dd>' +
        '<dt>' + esc(UI.labels.legal) + '</dt><dd>' + esc(e.legal) + '</dd></dl>' +
        sampleStage(
          '<div class="a11y-demo" style="background:#fff;color:#1f2933;border:1px solid #d6d6df">Body on white — contrast OK</div>',
          '<div class="a11y-demo" style="background:#fff;color:' + esc(c.primary) + '">Light brand text on white — often fails</div>'
        );
    }
    guidePreview.innerHTML = html;
  }

  /**
   * 构建 Markdown。
   * @param {object} g
   * @returns {string}
   */
  function toMarkdown(g) {
    var lines = [];
    lines.push('# ' + g.meta.name + ' — Brand Style Guide');
    lines.push('');
    lines.push('_Draft generated locally (rule-based). Edit before shipping._');
    lines.push('');
    var e = g.elements;
    if (g.modules.m0) {
      lines.push('## ' + UI.modTitles.m0);
      lines.push('- ' + UI.labels.promise + ': ' + e.promise);
      lines.push('- ' + UI.labels.audience + ': ' + e.audience);
      lines.push('- ' + UI.labels.personality + ': ' + e.personalitySummary);
      lines.push('- Do: ' + UI.samples.m0Do);
      lines.push('- Don’t: ' + UI.samples.m0Dont);
      lines.push('- Why (don’t): ' + UI.samples.m0DontWhy);
      lines.push('');
    }
    if (g.modules.m1) {
      lines.push('## ' + UI.modTitles.m1);
      lines.push('- ' + UI.labels.clearSpace + ': ' + e.clearSpace);
      lines.push('- ' + UI.labels.minSize + ': ' + e.minSize);
      lines.push('- Do: ' + UI.samples.m1Do);
      lines.push('- Don’t: ' + UI.samples.m1Dont);
      lines.push('');
    }
    if (g.modules.m2) {
      var c = e.colors;
      lines.push('## ' + UI.modTitles.m2);
      lines.push('- Primary: ' + c.primary + ' (' + c.primaryMaxArea + ')');
      lines.push('- Secondary: ' + c.secondary);
      lines.push('- Accent: ' + c.accent);
      lines.push('- Neutral: ' + c.neutral);
      lines.push('- Status: ' + c.status.success + ', ' + c.status.warning + ', ' + c.status.danger + ', ' + c.status.info);
      lines.push('- Do: ' + UI.samples.m2Do);
      lines.push('- Don’t: ' + UI.samples.m2Dont);
      lines.push('');
    }
    if (g.modules.m3) {
      lines.push('## ' + UI.modTitles.m3);
      lines.push('- ' + UI.labels.typeRoles + ': ' + e.type.roles);
      lines.push('- ' + UI.labels.typeScale + ': ' + e.type.scale);
      lines.push('');
    }
    if (g.modules.m4) {
      lines.push('## ' + UI.modTitles.m4);
      lines.push('- ' + UI.labels.baseUnit + ': ' + e.layout.baseUnit);
      lines.push('- ' + UI.labels.radius + ': ' + e.layout.radius);
      lines.push('');
    }
    if (g.modules.m5) {
      lines.push('## ' + UI.modTitles.m5);
      lines.push('- ' + UI.labels.photo + ': ' + e.imagery.photo);
      lines.push('- ' + UI.labels.icon + ': ' + e.imagery.icon);
      lines.push('');
    }
    if (g.modules.m6) {
      lines.push('## ' + UI.modTitles.m6);
      lines.push('- ' + e.motion.duration + '; ' + e.motion.reduce);
      lines.push('');
    }
    if (g.modules.m7) {
      lines.push('## ' + UI.modTitles.m7);
      lines.push('- ' + e.voice);
      lines.push('');
    }
    if (g.modules.m8) {
      lines.push('## ' + UI.modTitles.m8);
      lines.push('- ' + e.touchpoints);
      lines.push('');
    }
    if (g.modules.m9) {
      lines.push('## ' + UI.modTitles.m9);
      lines.push('- ' + e.a11y);
      lines.push('- ' + e.legal);
      lines.push('');
    }
    return lines.join('\\n');
  }

  /**
   * 生成并刷新输出。
   * @param {boolean} smartOnly
   */
  function generate(smartOnly) {
    var g = buildGuide(!!smartOnly);
    if (!g) {
      guidePreview.innerHTML = '';
      mdOut.value = '';
      jsonOut.value = '';
      lastMd = '';
      lastJson = '';
      lastGuide = null;
      return;
    }
    if (g.contrastPrimaryOnWhite < 3) setWarn(UI.warnContrast);
    else setWarn('');
    renderPreview(g);
    lastGuide = g;
    lastMd = toMarkdown(g);
    lastJson = JSON.stringify(g, null, 2);
    mdOut.value = lastMd;
    jsonOut.value = lastJson;
  }

  /** 加载 Northline 样例（开启全部模块以便展示各模块样例）。 */
  function loadSample() {
    suppressing = true;
    brandName.value = 'Northline Studio';
    industry.value = 'saas';
    primaryPicker.value = '#0f6e8c';
    primaryHex.value = '#0F6E8C';
    preset.value = 'product';
    document.querySelectorAll('input[name="personality"]').forEach(function (el) {
      el.checked = el.value === 'calm' || el.value === 'technical';
    });
    applyModules({
      m0: true, m1: true, m2: true, m3: true, m4: true,
      m5: true, m6: true, m7: true, m8: true, m9: true
    });
    sources = {
      name: 'smart', industry: 'smart', color: 'smart', preset: 'smart',
      oneLiner: 'smart', audience: 'smart', personality: 'smart', modules: 'smart'
    };
    suppressing = false;
    refreshChips();
    generate(false);
  }

  /** 清空为最小可生成状态。 */
  function clearAll() {
    suppressing = true;
    brandName.value = '';
    industry.value = 'saas';
    primaryPicker.value = '#000000';
    primaryHex.value = '#000000';
    preset.value = 'product';
    oneLiner.value = '';
    audience.value = '';
    document.querySelectorAll('input[name="personality"]').forEach(function (el) { el.checked = false; });
    applyModules(presetModules('product'));
    sources = {
      name: 'smart', industry: 'smart', color: 'smart', preset: 'smart',
      oneLiner: 'smart', audience: 'smart', personality: 'smart', modules: 'smart'
    };
    suppressing = false;
    refreshChips();
    generate(false);
  }

  /**
   * 复制文本。
   * @param {string} text
   * @param {HTMLElement} btn
   */
  function copyText(text, btn) {
    if (!text) {
      setError(UI.empty);
      return;
    }
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(function () { flashCopied(btn); });
    }
  }

  brandName.addEventListener('input', function () { markManual('name'); paintSource('srcName', 'name'); });
  industry.addEventListener('change', function () {
    markManual('industry');
    paintSource('srcIndustry', 'industry');
    if (sources.oneLiner === 'smart' || sources.audience === 'smart') generate(true);
  });
  primaryPicker.addEventListener('input', function () {
    primaryHex.value = primaryPicker.value.toUpperCase();
    markManual('color');
    paintSource('srcColor', 'color');
    generate(true);
  });
  primaryHex.addEventListener('change', function () {
    markManual('color');
    paintSource('srcColor', 'color');
    generate(true);
  });
  preset.addEventListener('change', function () {
    markManual('preset');
    paintSource('srcPreset', 'preset');
    if (sources.modules === 'smart') applyModules(presetModules(preset.value));
    generate(true);
  });
  oneLiner.addEventListener('input', function () { markManual('oneLiner'); paintSource('srcOneLiner', 'oneLiner'); });
  audience.addEventListener('input', function () { markManual('audience'); paintSource('srcAudience', 'audience'); });
  document.querySelectorAll('input[name="personality"]').forEach(function (el) {
    el.addEventListener('change', function () {
      markManual('personality');
      refreshChips();
      generate(true);
    });
  });
  document.querySelectorAll('input[name="module"]').forEach(function (el) {
    el.addEventListener('change', function () {
      if (!suppressing) {
        sources.modules = 'manual';
        generate(true);
      }
    });
  });

  document.getElementById('btnGenerate').addEventListener('click', function () { generate(false); });
  document.getElementById('btnRegenSmart').addEventListener('click', function () { generate(true); });
  document.getElementById('btnSample').addEventListener('click', loadSample);
  document.getElementById('btnCopyMd').addEventListener('click', function () { copyText(lastMd, this); });
  document.getElementById('btnCopyJson').addEventListener('click', function () { copyText(lastJson, this); });
  btnExportWord.addEventListener('click', exportWord);
  btnExportPdf.addEventListener('click', exportPdf);
  document.getElementById('btnClear').addEventListener('click', clearAll);

  loadSample();
})();
  </script>`;

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
		contentHtml: `${contentHtml}${igHtml}${extraHtml}${referencesHtml}`,
		footerHtml,
		extraHeadHtml: `${extraHeadHtml}${toolJsonLd}`,
		extraBodyHtml,
		includeSidebarToggleScript: true,
		sidebarAutoCloseSelector: '#toolNav a',
	});
};
