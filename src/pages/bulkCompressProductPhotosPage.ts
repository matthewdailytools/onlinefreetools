/**
 * 批量压缩商品照片工具页：多张商品图共享尺寸规则 / 输出格式 / 质量 / 目标 KB，串行编码后打 ZIP。
 * 进页默认全部「不选择」：保原 jpeg/webp/png、不缩边、不搜 KB；需要时再点 JPEG / WebP / PNG、体积芯片或尺寸规则。
 * slug: bulk-compress-product-photos；规格见 work-tasks/bulk-compress-product-photos/02-tool-info.md。
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

/** 本工具 i18n 键前缀，与 catalog faqPrefix 一致。 */
const PREFIX = 'tool_bulk_compress_product_photos';

/**
 * 为路径加上语言前缀（默认语无前缀）。
 * @param lang 当前 UI 语言
 * @param pathname 以 / 开头的路径
 * @param defaultLang 站点默认语言
 */
const withLangPrefix = (lang: SiteLang, pathname: string, defaultLang: SiteLang) => {
	const safe = pathname.startsWith('/') ? pathname : `/${pathname}`;
	return lang === defaultLang ? safe : `/${lang}${safe}`;
};

/**
 * 读取本工具某一 i18n 后缀键。
 * @param lang 当前语言
 * @param suffix 如 title、description
 */
const tx = (lang: SiteLang, suffix: string) => t(lang, `${PREFIX}_${suffix}` as Parameters<typeof t>[1]);

/**
 * 渲染「批量压缩商品照片」工具页。
 * @param opts.lang 当前 UI 语言
 * @param opts.defaultLang 默认（无前缀）语言
 * @param opts.enabledLangs 启用语言列表
 */
export const renderBulkCompressProductPhotosPage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	/** 工具规范路径（无语言前缀）。 */
	const toolPath = '/tools/bulk-compress-product-photos';
	/** 当前语言下的 canonical 路径。 */
	const canonicalPath = withLangPrefix(opts.lang, toolPath, opts.defaultLang);
	/** 文档 title：H1 原句 + 品牌。 */
	const title = `${tx(opts.lang, 'title')} | ${t(opts.lang, 'brand')}`;
	/** meta description，与可见文案同源。 */
	const description = tx(opts.lang, 'description');
	/** 顶栏导航项。 */
	const navItems = buildToolPageNavItems(opts.lang, opts.defaultLang);

	/**
	 * 语言切换链接始终带显式语言段。
	 * @param code 语言码
	 * @param pathname 工具路径
	 */
	const withExplicitLangPrefix = (code: SiteLang, pathname: string) => {
		const safe = pathname.startsWith('/') ? pathname : `/${pathname}`;
		return `/${code}${safe}`.replace(/\/{2,}/g, '/');
	};

	/** header 语言菜单用的绝对路径映射。 */
	const langAlternates: Record<string, string> = Object.fromEntries(
		(supportedLangs || []).map((code) => [code, withExplicitLangPrefix(code, toolPath)])
	);

	/** hreflang 列表。 */
	const alternates: HreflangAlternate[] = (supportedLangs || []).map((code) => ({
		lang: code,
		href: `https://onlinefreetools.org${withLangPrefix(code, toolPath, opts.defaultLang)}`,
	}));

	/** 站点顶栏 HTML。 */
	const headerHtml = renderHeader({
		lang: opts.lang,
		brandHref: withLangPrefix(opts.lang, '/', opts.defaultLang),
		navItems,
		enabledLangs: supportedLangs,
		langAlternates,
	});

	/** 工具侧栏 HTML。 */
	const sidebarHtml = renderSidebar({
		title: t(opts.lang, 'nav_tools'),
		groups: buildToolSidebarItems({
			lang: opts.lang,
			defaultLang: opts.defaultLang,
			currentSlug: 'bulk-compress-product-photos',
			currentAnchor: '#compressor',
		}),
		id: 'toolNav',
	});

	/** 页脚 HTML。 */
	const footerHtml = renderFooter({ lang: opts.lang });

	/** 本页局部样式：主按钮突出、分类选项分行、隐藏控件与结果表。 */
	const extraHeadHtml = `
  <style>
    #bcpJpegBgRow[hidden], #bcpTargetRow[hidden], #bcpSizeValueRow[hidden] { display: none !important; }
    .bcp-table { font-size: .875rem; }
    .bcp-table td, .bcp-table th { vertical-align: middle; }
    #bcpQuality[disabled] { opacity: .5; }
    /* 全部压缩单独一行；盖过全站 .btn-primary 白底 !important，做成实心主操作。 */
    .bcp-action-row { margin: 0 0 .85rem; }
    .bcp-action-row #bcpBtnCompress {
      font-weight: 700 !important;
      font-size: 1.05rem !important;
      letter-spacing: .04em;
      padding: .65rem 1.5rem !important;
      min-height: 2.75rem !important;
      color: #ffffff !important;
      background: #292931 !important;
      border-color: #292931 !important;
      box-shadow: 0 .2rem .55rem rgba(41, 41, 49, .28) !important;
    }
    /* 每一类选项独占一行，标签加粗以区别于主操作。 */
    .bcp-opt-row {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: .45rem .65rem;
      padding: .55rem 0;
      border-top: 1px solid var(--border, #dee2e6);
    }
    .bcp-opt-label {
      font-weight: 600;
      font-size: .8125rem;
      min-width: 7.25rem;
      color: var(--text-muted, #495057);
    }
    /* 未选芯片：浅底细边。选中用品牌实心 + 外圈光，盖过全站 .btn-outline-* 的白底 !important。 */
    #content .tool-panel .bcp-opt-row label.bcp-chip {
      color: var(--text, #33333b) !important;
      background: #ffffff !important;
      border: 1px solid var(--border, #d6d6df) !important;
      font-weight: 500 !important;
      box-shadow: none !important;
    }
    #content .tool-panel .bcp-opt-row label.bcp-chip.bcp-chip-on,
    #content .tool-panel .bcp-opt-row .btn-check:checked + label.bcp-chip {
      color: #ffffff !important;
      background: var(--brand, #0f6e8c) !important;
      border: 2px solid var(--brand, #0f6e8c) !important;
      font-weight: 700 !important;
      box-shadow: 0 0 0 3px rgba(15, 110, 140, 0.38) !important;
    }
    #content .tool-panel .bcp-opt-row label.bcp-chip.bcp-chip-on:hover,
    #content .tool-panel .bcp-opt-row label.bcp-chip.bcp-chip-on:focus,
    #content .tool-panel .bcp-opt-row .btn-check:checked + label.bcp-chip:hover,
    #content .tool-panel .bcp-opt-row .btn-check:checked + label.bcp-chip:focus {
      color: #ffffff !important;
      background: var(--brand-hover, #0a5570) !important;
      border-color: var(--brand-hover, #0a5570) !important;
    }
    /* 下拉已选非「不选择」时用同一品牌描边。 */
    #content .tool-panel .bcp-opt-row select.bcp-select-on {
      border: 2px solid var(--brand, #0f6e8c) !important;
      font-weight: 700;
      box-shadow: 0 0 0 3px rgba(15, 110, 140, 0.38);
    }
    .bcp-secondary-row {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: .5rem;
      margin: .85rem 0 .5rem;
      padding-top: .65rem;
      border-top: 1px dashed var(--border, #dee2e6);
    }
  </style>`;

	/** 首屏交互区：多选、格式、尺寸规则/预设、芯片、汇总表、ZIP。 */
	const contentHtml = `
    <div id="compressor" class="tool-hero">
      <h1 class="tool-title">${escapeHtml(tx(opts.lang, 'title'))}</h1>
      <p class="tool-lead">${escapeHtml(description)}</p>
    </div>

    <div class="tool-panel">
      <label class="tool-dropzone mb-3" id="bcpDrop" for="bcpFile">
        <input type="file" id="bcpFile" accept="image/png,image/jpeg,image/jpg,image/webp,image/gif,image/bmp,image/avif,image/*" multiple>
        <span class="tool-dropzone-title">${escapeHtml(tx(opts.lang, 'choose_files'))}</span>
        <span class="tool-dropzone-hint">${escapeHtml(tx(opts.lang, 'drop_hint'))}</span>
        <span id="bcpFileCount" class="tool-dropzone-file"></span>
      </label>

      <div class="bcp-action-row">
        <button type="button" id="bcpBtnCompress" class="btn btn-primary">${escapeHtml(tx(opts.lang, 'compress'))}</button>
      </div>

      <!-- 选项行进页默认全部「不选择」；体积/像素输入仅在对应芯片开启后显示。 -->
      <div class="bcp-opt-row" role="group" aria-label="${escapeHtml(tx(opts.lang, 'output_label'))}">
        <span class="bcp-opt-label">${escapeHtml(tx(opts.lang, 'output_label'))}</span>
        <input type="radio" class="btn-check" name="bcpFmtChip" id="bcpChipFmtNone" value="" checked>
        <label class="btn btn-outline-secondary btn-sm bcp-chip bcp-chip-on" for="bcpChipFmtNone">${escapeHtml(tx(opts.lang, 'opt_none'))}</label>
        <input type="radio" class="btn-check" name="bcpFmtChip" id="bcpChipJpeg" value="image/jpeg">
        <label class="btn btn-outline-secondary btn-sm bcp-chip" for="bcpChipJpeg">${escapeHtml(tx(opts.lang, 'format_jpeg'))}</label>
        <input type="radio" class="btn-check" name="bcpFmtChip" id="bcpChipWebp" value="image/webp">
        <label class="btn btn-outline-secondary btn-sm bcp-chip" for="bcpChipWebp">${escapeHtml(tx(opts.lang, 'chip_webp'))}</label>
        <input type="radio" class="btn-check" name="bcpFmtChip" id="bcpChipPng" value="image/png">
        <label class="btn btn-outline-secondary btn-sm bcp-chip" for="bcpChipPng">${escapeHtml(tx(opts.lang, 'chip_png'))}</label>
        <select id="bcpOutput" class="visually-hidden" aria-hidden="true" tabindex="-1">
          <option value="" selected>${escapeHtml(tx(opts.lang, 'opt_none'))}</option>
          <option value="image/jpeg">${escapeHtml(tx(opts.lang, 'format_jpeg'))}</option>
          <option value="image/webp">${escapeHtml(tx(opts.lang, 'format_webp'))}</option>
          <option value="image/png">${escapeHtml(tx(opts.lang, 'format_png'))}</option>
        </select>
      </div>

      <div class="bcp-opt-row" role="group" aria-label="${escapeHtml(tx(opts.lang, 'target_kb_label'))}">
        <span class="bcp-opt-label">${escapeHtml(tx(opts.lang, 'target_kb_label'))}</span>
        <input type="radio" class="btn-check" name="bcpKbChip" id="bcpChipKbNone" value="" checked>
        <label class="btn btn-outline-secondary btn-sm bcp-chip bcp-chip-on" for="bcpChipKbNone">${escapeHtml(tx(opts.lang, 'opt_none'))}</label>
        <input type="radio" class="btn-check" name="bcpKbChip" id="bcpChip500" value="500">
        <label class="btn btn-outline-secondary btn-sm bcp-chip" for="bcpChip500">500 KB</label>
        <input type="radio" class="btn-check" name="bcpKbChip" id="bcpChip200" value="200">
        <label class="btn btn-outline-secondary btn-sm bcp-chip" for="bcpChip200">${escapeHtml(tx(opts.lang, 'chip_200kb'))}</label>
        <input type="radio" class="btn-check" name="bcpKbChip" id="bcpChip100" value="100">
        <label class="btn btn-outline-secondary btn-sm bcp-chip" for="bcpChip100">${escapeHtml(tx(opts.lang, 'chip_100kb'))}</label>
        <input type="radio" class="btn-check" name="bcpKbChip" id="bcpChip50" value="50">
        <label class="btn btn-outline-secondary btn-sm bcp-chip" for="bcpChip50">50 KB</label>
        <input type="radio" class="btn-check" name="bcpKbChip" id="bcpChip30" value="30">
        <label class="btn btn-outline-secondary btn-sm bcp-chip" for="bcpChip30">30 KB</label>
        <span id="bcpTargetRow" class="d-flex align-items-center gap-2 flex-wrap" hidden>
          <input type="number" id="bcpTargetKb" class="form-control form-control-sm" style="width:5.5rem;" min="10" max="5000" value="200" aria-label="${escapeHtml(tx(opts.lang, 'target_kb_label'))}">
          <span class="small text-muted">KB</span>
        </span>
        <input class="form-check-input visually-hidden" type="checkbox" id="bcpTargetOn" tabindex="-1" aria-hidden="true">
      </div>

      <div class="bcp-opt-row" role="group" aria-label="${escapeHtml(tx(opts.lang, 'size_rule_label'))}">
        <span class="bcp-opt-label">${escapeHtml(tx(opts.lang, 'size_rule_label'))}</span>
        <input type="radio" class="btn-check" name="bcpSizeChip" id="bcpChipSizeNone" value="" checked>
        <label class="btn btn-outline-secondary btn-sm bcp-chip bcp-chip-on" for="bcpChipSizeNone">${escapeHtml(tx(opts.lang, 'opt_none'))}</label>
        <input type="radio" class="btn-check" name="bcpSizeChip" id="bcpChipSizeEdge" value="max_edge">
        <label class="btn btn-outline-secondary btn-sm bcp-chip" for="bcpChipSizeEdge">${escapeHtml(tx(opts.lang, 'size_rule_max_edge'))}</label>
        <input type="radio" class="btn-check" name="bcpSizeChip" id="bcpChipSizeWidth" value="max_width">
        <label class="btn btn-outline-secondary btn-sm bcp-chip" for="bcpChipSizeWidth">${escapeHtml(tx(opts.lang, 'size_rule_max_width'))}</label>
        <input type="radio" class="btn-check" name="bcpSizeChip" id="bcpChipSizeHeight" value="max_height">
        <label class="btn btn-outline-secondary btn-sm bcp-chip" for="bcpChipSizeHeight">${escapeHtml(tx(opts.lang, 'size_rule_max_height'))}</label>
        <span id="bcpSizeValueRow" class="d-flex align-items-center gap-2 flex-wrap" hidden>
          <label class="form-label mb-0" for="bcpSizePx" id="bcpSizePxLabel">${escapeHtml(tx(opts.lang, 'max_edge_label'))}</label>
          <input type="number" id="bcpSizePx" class="form-control form-control-sm" style="width:5.5rem;" min="64" max="8192" value="1920">
          <span class="small text-muted">px</span>
          <label class="form-label mb-0" for="bcpSizeQuick">${escapeHtml(tx(opts.lang, 'preset_group_edge'))}</label>
          <select id="bcpSizeQuick" class="form-select form-select-sm" style="width:auto;max-width:14rem;">
            <option value="">${escapeHtml(tx(opts.lang, 'opt_none'))}</option>
            <option value="max_edge:1920">1920 px</option>
            <option value="max_edge:1280">1280 px</option>
            <option value="max_edge:1200">1200 px</option>
            <option value="max_edge:1080">1080 px</option>
            <option value="max_width:800">800 px ${escapeHtml(tx(opts.lang, 'size_rule_max_width'))}</option>
            <option value="max_height:640">640 px ${escapeHtml(tx(opts.lang, 'size_rule_max_height'))}</option>
          </select>
        </span>
        <select id="bcpSizeRule" class="visually-hidden" aria-hidden="true" tabindex="-1">
          <option value="" selected>${escapeHtml(tx(opts.lang, 'opt_none'))}</option>
          <option value="max_edge">${escapeHtml(tx(opts.lang, 'size_rule_max_edge'))}</option>
          <option value="max_width">${escapeHtml(tx(opts.lang, 'size_rule_max_width'))}</option>
          <option value="max_height">${escapeHtml(tx(opts.lang, 'size_rule_max_height'))}</option>
        </select>
        <input class="form-check-input visually-hidden" type="checkbox" id="bcpResizeOn" tabindex="-1" aria-hidden="true">
      </div>

      <div class="bcp-opt-row">
        <label class="bcp-opt-label" for="bcpPreset">${escapeHtml(tx(opts.lang, 'preset_label'))}</label>
        <select id="bcpPreset" class="form-select form-select-sm" style="width:auto;max-width:22rem;">
          <option value="">${escapeHtml(tx(opts.lang, 'opt_none'))}</option>
          <option value="combo:max_edge:1920:0:80">${escapeHtml(tx(opts.lang, 'preset_listing_hd'))}</option>
          <option value="combo:max_edge:1280:200:80">${escapeHtml(tx(opts.lang, 'preset_listing'))}</option>
          <option value="combo:max_edge:1280:100:75">${escapeHtml(tx(opts.lang, 'preset_email'))}</option>
          <option value="combo:max_edge:1080:150:80">${escapeHtml(tx(opts.lang, 'preset_social'))}</option>
          <option value="combo:max_width:800:50:75">${escapeHtml(tx(opts.lang, 'preset_thumb'))}</option>
          <option value="combo:max_height:512:30:70">${escapeHtml(tx(opts.lang, 'preset_tiny'))}</option>
        </select>
        <span class="small text-muted">${escapeHtml(tx(opts.lang, 'preset_hint'))}</span>
      </div>

      <div class="bcp-opt-row">
        <label class="bcp-opt-label" for="bcpQuality">${escapeHtml(tx(opts.lang, 'quality_label'))}</label>
        <input type="range" id="bcpQuality" min="50" max="100" value="80">
        <span id="bcpQualityVal" class="small text-muted">0.80</span>
        <span id="bcpQualityHint" class="small text-muted"></span>
      </div>

      <div class="bcp-opt-row" id="bcpJpegBgRow" role="group" aria-label="${escapeHtml(tx(opts.lang, 'jpeg_bg_label'))}" hidden>
        <span class="bcp-opt-label">${escapeHtml(tx(opts.lang, 'jpeg_bg_label'))}</span>
        <input type="radio" class="btn-check" name="bcpJpegBg" id="bcpBgNone" value="" checked>
        <label class="btn btn-outline-secondary btn-sm bcp-chip bcp-chip-on" for="bcpBgNone">${escapeHtml(tx(opts.lang, 'opt_none'))}</label>
        <input type="radio" class="btn-check" name="bcpJpegBg" id="bcpBgWhite" value="#ffffff">
        <label class="btn btn-outline-secondary btn-sm bcp-chip" for="bcpBgWhite">${escapeHtml(tx(opts.lang, 'jpeg_bg_white'))}</label>
        <input type="radio" class="btn-check" name="bcpJpegBg" id="bcpBgBlack" value="#000000">
        <label class="btn btn-outline-secondary btn-sm bcp-chip" for="bcpBgBlack">${escapeHtml(tx(opts.lang, 'jpeg_bg_black'))}</label>
        <input type="radio" class="btn-check" name="bcpJpegBg" id="bcpBgCustom" value="custom">
        <label class="btn btn-outline-secondary btn-sm bcp-chip" for="bcpBgCustom">${escapeHtml(tx(opts.lang, 'jpeg_bg_custom'))}</label>
        <input type="color" id="bcpBgColor" value="#ffffff" hidden title="${escapeHtml(tx(opts.lang, 'jpeg_bg_custom'))}">
        <span class="small text-muted">${escapeHtml(tx(opts.lang, 'jpeg_bg_hint'))}</span>
      </div>

      <div class="bcp-secondary-row">
        <button type="button" id="bcpBtnZip" class="btn btn-outline-primary btn-sm" disabled>${escapeHtml(tx(opts.lang, 'download_zip'))}</button>
        <button type="button" id="bcpBtnSample" class="btn btn-outline-secondary btn-sm">${escapeHtml(tx(opts.lang, 'sample'))}</button>
        <button type="button" id="bcpBtnClear" class="btn btn-outline-secondary btn-sm">${escapeHtml(tx(opts.lang, 'clear'))}</button>
      </div>

      <p id="bcpWarn" class="alert alert-warning py-2 small mb-2" style="display:none;" role="status"></p>
      <p id="bcpError" class="alert alert-danger py-2 small mb-2" style="display:none;" role="alert"></p>
      <p id="bcpStatus" class="small text-muted mb-2" role="status"></p>
      <p id="bcpSummary" class="small mb-2"></p>

      <div class="table-responsive mb-0">
        <table class="table table-sm table-striped bcp-table mb-0">
          <thead>
            <tr>
              <th>${escapeHtml(tx(opts.lang, 'col_name'))}</th>
              <th>${escapeHtml(tx(opts.lang, 'col_before'))}</th>
              <th>${escapeHtml(tx(opts.lang, 'col_after'))}</th>
              <th>${escapeHtml(tx(opts.lang, 'col_status'))}</th>
            </tr>
          </thead>
          <tbody id="bcpTbody"></tbody>
        </table>
      </div>
    </div>`;

	/** How / Rules / Example / Use cases / FAQ 区块。 */
	const igHtml = renderToolIgSections({
		lang: opts.lang,
		prefix: PREFIX,
		mode: 'rules',
		usecaseCount: 3,
		ruleItemCount: 4,
		howItemCount: 5,
	});

	/** 权威引用：Canvas toBlob、WebP、fflate。 */
	const referencesHtml = renderToolReferencesSection({
		lang: opts.lang,
		links: [
			{
				label: 'MDN — HTMLCanvasElement.toBlob()',
				href: 'https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/toBlob',
			},
			{
				label: 'WebP — Google Developers',
				href: 'https://developers.google.com/speed/webp',
			},
			{
				label: 'fflate',
				href: 'https://github.com/101arrowz/fflate',
			},
		],
	});

	/**
	 * 客户端脚本：串行解码编码、尺寸规则、目标 KB 二分、失败跳过、ZIP。
	 * 提供 loadSample() 供按钮调用；进页不自动填充样例。
	 */
	const extraBodyHtml = `
  <script src="/vendor/fflate/index.js" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
  <script>
    (function () {
      /** 单文件软体积上限（字节），超过只警告。 */
      var SOFT_BYTES = 25 * 1024 * 1024;
      /** 单边软上限（像素）。 */
      var SOFT_EDGE = 8192;
      /** 目标体积搜索的质量下限。 */
      var QUALITY_FLOOR = 0.5;
      /** 队列最多张数。 */
      var MAX_FILES = 20;

      /** 拖放区。 */
      var drop = document.getElementById('bcpDrop');
      /** 多文件选择。 */
      var fileInput = document.getElementById('bcpFile');
      /** 队列计数文案。 */
      var fileCountEl = document.getElementById('bcpFileCount');
      /** 场景 / 尺寸 / 体积预设。 */
      var presetEl = document.getElementById('bcpPreset');
      /** 输出 MIME 选择。 */
      var outputSel = document.getElementById('bcpOutput');
      /** 是否启用尺寸限制。 */
      var resizeOn = document.getElementById('bcpResizeOn');
      /** 尺寸规则：最长边 / 最大宽 / 最大高。 */
      var sizeRuleEl = document.getElementById('bcpSizeRule');
      /** 尺寸数值行（含标签与输入）。 */
      var sizeValueRow = document.getElementById('bcpSizeValueRow');
      /** 尺寸像素输入标签。 */
      var sizePxLabel = document.getElementById('bcpSizePxLabel');
      /** 尺寸像素数值。 */
      var sizePxEl = document.getElementById('bcpSizePx');
      /** 尺寸快捷像素下拉（含不选择）。 */
      var sizeQuickEl = document.getElementById('bcpSizeQuick');
      /** 质量滑杆（50–100）。 */
      var qualityEl = document.getElementById('bcpQuality');
      /** 质量数值展示。 */
      var qualityVal = document.getElementById('bcpQualityVal');
      /** PNG 时画质提示。 */
      var qualityHint = document.getElementById('bcpQualityHint');
      /** 是否启用目标 KB。 */
      var targetOn = document.getElementById('bcpTargetOn');
      /** 目标 KB 行。 */
      var targetRow = document.getElementById('bcpTargetRow');
      /** 目标 KB 数值。 */
      var targetKbEl = document.getElementById('bcpTargetKb');
      /** JPEG 垫底行。 */
      var jpegBgRow = document.getElementById('bcpJpegBgRow');
      /** 自定义垫底色。 */
      var bgColorEl = document.getElementById('bcpBgColor');
      /** 压缩全部（首行主按钮）。 */
      var btnCompress = document.getElementById('bcpBtnCompress');
      /** 下载 ZIP。 */
      var btnZip = document.getElementById('bcpBtnZip');
      /** 载入样例。 */
      var btnSample = document.getElementById('bcpBtnSample');
      /** 清空。 */
      var btnClear = document.getElementById('bcpBtnClear');
      /** 输出格式芯片（含不选择）。 */
      var fmtChips = document.querySelectorAll('input[name="bcpFmtChip"]');
      /** 目标体积芯片（含不选择）。 */
      var kbChips = document.querySelectorAll('input[name="bcpKbChip"]');
      /** 尺寸规则芯片（含不选择）。 */
      var sizeChips = document.querySelectorAll('input[name="bcpSizeChip"]');
      /** 警告条。 */
      var warnEl = document.getElementById('bcpWarn');
      /** 错误条。 */
      var errEl = document.getElementById('bcpError');
      /** 状态条。 */
      var statusEl = document.getElementById('bcpStatus');
      /** 汇总句。 */
      var summaryEl = document.getElementById('bcpSummary');
      /** 结果表体。 */
      var tbody = document.getElementById('bcpTbody');

      /** 界面文案（已按语言注入）。 */
      var msg = {
        empty: ${JSON.stringify(tx(opts.lang, 'empty'))},
        decode: ${JSON.stringify(tx(opts.lang, 'err_decode'))},
        encode: ${JSON.stringify(tx(opts.lang, 'err_encode'))},
        fflate: ${JSON.stringify(tx(opts.lang, 'err_fflate'))},
        tooMany: ${JSON.stringify(tx(opts.lang, 'err_too_many'))},
        webpOff: ${JSON.stringify(tx(opts.lang, 'err_webp'))},
        large: ${JSON.stringify(tx(opts.lang, 'warn_large'))},
        edge: ${JSON.stringify(tx(opts.lang, 'warn_edge'))},
        anim: ${JSON.stringify(tx(opts.lang, 'warn_anim'))},
        pngHard: ${JSON.stringify(tx(opts.lang, 'warn_png'))},
        pngTarget: ${JSON.stringify(tx(opts.lang, 'warn_png_target'))},
        qualityPng: ${JSON.stringify(tx(opts.lang, 'quality_hint_png'))},
        qualityTarget: ${JSON.stringify(tx(opts.lang, 'quality_hint_target'))},
        compressing: ${JSON.stringify(tx(opts.lang, 'status_compressing'))},
        done: ${JSON.stringify(tx(opts.lang, 'status_done'))},
        hit: ${JSON.stringify(tx(opts.lang, 'status_hit'))},
        miss: ${JSON.stringify(tx(opts.lang, 'status_miss'))},
        skip: ${JSON.stringify(tx(opts.lang, 'status_skip'))},
        countTpl: ${JSON.stringify(tx(opts.lang, 'file_count_tpl'))},
        summaryTpl: ${JSON.stringify(tx(opts.lang, 'summary_tpl'))},
        labelMaxEdge: ${JSON.stringify(tx(opts.lang, 'max_edge_label'))},
        labelMaxWidth: ${JSON.stringify(tx(opts.lang, 'size_px_width'))},
        labelMaxHeight: ${JSON.stringify(tx(opts.lang, 'size_px_height'))}
      };

      /**
       * 队列中的源文件。
       * @type {File[]}
       */
      var queue = [];
      /**
       * 最近一次压缩的成功项（供 ZIP）。
       * @type {{ zipName: string, bytes: Uint8Array }[]}
       */
      var zipParts = [];
      /** 各 MIME 是否能 toBlob 出对应类型。 */
      var encodeSupport = {};

      /**
       * 显示或隐藏警告。
       * @param {string} text 警告文案
       */
      function setWarn(text) {
        if (!text) { warnEl.style.display = 'none'; warnEl.textContent = ''; return; }
        warnEl.textContent = text;
        warnEl.style.display = '';
      }

      /**
       * 显示或隐藏错误。
       * @param {string} text 错误文案
       */
      function setError(text) {
        if (!text) { errEl.style.display = 'none'; errEl.textContent = ''; return; }
        errEl.textContent = text;
        errEl.style.display = '';
      }

      /**
       * 写入状态行。
       * @param {string} text 状态文案
       */
      function setStatus(text) { statusEl.textContent = text || ''; }

      /**
       * 把字节数格式化为 B / KB / MB。
       * @param {number} n 字节
       * @returns {string}
       */
      function formatBytes(n) {
        if (n < 1024) return n + ' B';
        if (n < 1024 * 1024) return (n / 1024).toFixed(1) + ' KB';
        return (n / (1024 * 1024)).toFixed(2) + ' MB';
      }

      /**
       * 规范化 MIME（jpg → jpeg）。
       * @param {string} mime 原始 MIME
       * @returns {string}
       */
      function normalizeMime(mime) {
        if (!mime) return '';
        var m = String(mime).toLowerCase();
        if (m === 'image/jpg') return 'image/jpeg';
        return m;
      }

      /**
       * 输出扩展名。
       * @param {string} mime 输出 MIME
       * @returns {string}
       */
      function extFor(mime) {
        mime = normalizeMime(mime);
        if (mime === 'image/jpeg') return 'jpg';
        if (mime === 'image/webp') return 'webp';
        if (mime === 'image/png') return 'png';
        return 'bin';
      }

      /**
       * 质量滑杆映射到 0–1，且不低于质量下限。
       * @returns {number}
       */
      function quality01() {
        return Math.max(QUALITY_FLOOR, Math.min(1, Number(qualityEl.value) / 100));
      }

      /**
       * 当前垫底色；空字符串表示不铺垫底（透明洞在 JPEG 里会变成编码器默认的黑）。
       * @returns {string}
       */
      function jpegBg() {
        var picked = document.querySelector('input[name="bcpJpegBg"]:checked');
        var v = picked ? picked.value : '';
        if (!v) return '';
        if (v === 'custom') return bgColorEl.value || '#ffffff';
        return v;
      }

      /**
       * 读取已勾选的单选芯片值。
       * @param {NodeListOf<HTMLInputElement>} nodes 同名 radio
       * @returns {string}
       */
      function checkedChipValue(nodes) {
        for (var i = 0; i < nodes.length; i++) {
          if (nodes[i].checked) return nodes[i].value;
        }
        return '';
      }

      /**
       * 勾选匹配 value 的芯片；同值时可用 preferId 指定优先元素。
       * @param {NodeListOf<HTMLInputElement>} nodes 同名 radio
       * @param {string} value 目标值
       * @param {string} [preferId] 同值时优先的元素 id
       */
      function checkChipValue(nodes, value, preferId) {
        var fallback = null;
        for (var i = 0; i < nodes.length; i++) {
          var n = nodes[i];
          if (n.value !== value) continue;
          if (preferId && n.id === preferId) { n.checked = true; return; }
          if (!fallback) fallback = n;
        }
        if (fallback) fallback.checked = true;
      }

      /**
       * 当前输出 MIME；空字符串表示保持各文件原格式。
       * @returns {string}
       */
      function selectedFormat() {
        return checkedChipValue(fmtChips);
      }

      /**
       * 按文件决定输出 MIME：已选格式优先，否则保留 jpeg/webp/png，其余回退 jpeg。
       * @param {File} file 源文件
       * @returns {string}
       */
      function mimeForFile(file) {
        var fmt = selectedFormat();
        if (fmt) return fmt;
        var m = normalizeMime(file && file.type);
        if (m === 'image/jpeg' || m === 'image/webp' || m === 'image/png') return m;
        return 'image/jpeg';
      }

      /**
       * 把芯片选择写回隐藏控件（尺寸/体积/格式）。
       */
      function applyChipsToControls() {
        var fmt = selectedFormat();
        outputSel.value = fmt;
        var kb = checkedChipValue(kbChips);
        if (kb) {
          targetOn.checked = true;
          targetKbEl.value = String(kb);
        } else {
          targetOn.checked = false;
        }
        var rule = checkedChipValue(sizeChips);
        if (rule) {
          resizeOn.checked = true;
          sizeRuleEl.value = rule;
        } else {
          resizeOn.checked = false;
          sizeRuleEl.value = '';
        }
      }

      /**
       * 按隐藏控件回勾芯片（预设写入后调用）。
       */
      function syncChipsFromControls() {
        var fmt = outputSel.value;
        if (!fmt) checkChipValue(fmtChips, '');
        else if (fmt === 'image/jpeg') checkChipValue(fmtChips, 'image/jpeg', 'bcpChipJpeg');
        else checkChipValue(fmtChips, fmt);
        if (!targetOn.checked) checkChipValue(kbChips, '');
        else {
          var kb = String(Math.round(Number(targetKbEl.value) || 0));
          var kbNode = document.querySelector('input[name="bcpKbChip"][value="' + kb + '"]');
          if (kbNode) kbNode.checked = true;
          else checkChipValue(kbChips, '');
        }
        if (!resizeOn.checked || !sizeRuleEl.value) checkChipValue(sizeChips, '');
        else checkChipValue(sizeChips, sizeRuleEl.value);
        if (sizeQuickEl) {
          var qVal = (sizeRuleEl.value || 'max_edge') + ':' + String(sizePxEl.value || '');
          var qOpt = sizeQuickEl.querySelector('option[value="' + qVal + '"]');
          sizeQuickEl.value = qOpt ? qVal : '';
        }
      }

      /**
       * 按尺寸规则同步数值标签文案。
       */
      function syncSizeLabel() {
        var rule = sizeRuleEl.value || checkedChipValue(sizeChips);
        if (rule === 'max_width') sizePxLabel.textContent = msg.labelMaxWidth;
        else if (rule === 'max_height') sizePxLabel.textContent = msg.labelMaxHeight;
        else sizePxLabel.textContent = msg.labelMaxEdge;
      }

      /**
       * 手动改控件时清空预设下拉（避免显示过期预设名）。
       */
      function clearPresetSelect() {
        if (presetEl) presetEl.value = '';
      }

      /**
       * 按输出格式同步垫底行、目标体积、画质与尺寸控件。
       */
      function syncOptionsUi() {
        var mime = outputSel.value;
        var isPng = mime === 'image/png';
        sizePxEl.disabled = !resizeOn.checked;
        sizeValueRow.hidden = !resizeOn.checked;
        syncSizeLabel();
        targetRow.hidden = !targetOn.checked || isPng;
        qualityEl.disabled = isPng;
        qualityVal.textContent = quality01().toFixed(2);
        if (isPng) qualityHint.textContent = msg.qualityPng;
        else if (targetOn.checked) qualityHint.textContent = msg.qualityTarget;
        else qualityHint.textContent = '';
        jpegBgRow.hidden = selectedFormat() !== 'image/jpeg';
        var customBg = document.getElementById('bcpBgCustom');
        if (bgColorEl) bgColorEl.hidden = !(customBg && customBg.checked);
        // 选中芯片外观必须在每次选项同步后重刷，避免只改 radio 而 label 仍是白底。
        syncChipLooks();
        var webpChip = document.getElementById('bcpChipWebp');
        if (webpChip && encodeSupport['image/webp'] === false) {
          webpChip.disabled = true;
          var webpLab = document.querySelector('label[for="bcpChipWebp"]');
          if (webpLab) webpLab.title = msg.webpOff;
        }
        var pngChip = document.getElementById('bcpChipPng');
        if (pngChip && encodeSupport['image/png'] === false) pngChip.disabled = true;
        markSelectOn(presetEl);
        markSelectOn(sizeQuickEl);
      }

      /**
       * 下拉有实值时加上选中描边类，空值（不选择）则去掉。
       * @param {HTMLSelectElement|null} el 预设或尺寸快捷下拉
       */
      function markSelectOn(el) {
        if (!el) return;
        if (el.value) el.classList.add('bcp-select-on');
        else el.classList.remove('bcp-select-on');
      }

      /**
       * 把每个芯片 label 的选中外观与对应 radio 的 checked 对齐。
       * 全站 CSS 把 .btn-outline-secondary 锁成白底 !important，仅靠 :checked 相邻选择器不够稳，
       * 所以再给选中项加 .bcp-chip-on，用更高优先级的页面样式画出品牌实心底。
       */
      function syncChipLooks() {
        /** 本页所有选项芯片 label（不含 Compress / ZIP / Sample / Clear）。 */
        var chips = document.querySelectorAll('label.bcp-chip');
        for (var i = 0; i < chips.length; i++) {
          /** 当前芯片可见按钮。 */
          var lab = chips[i];
          /** 关联的 radio id（label[for]）。 */
          var id = lab.getAttribute('for');
          /** 对应的 btn-check 输入；找不到则视为未选。 */
          var input = id ? document.getElementById(id) : null;
          if (input && input.checked) lab.classList.add('bcp-chip-on');
          else lab.classList.remove('bcp-chip-on');
        }
      }

      /**
       * 探测浏览器能否按指定 MIME 编码。
       * @param {string} mime 目标 MIME
       * @returns {Promise<boolean>}
       */
      function probeEncode(mime) {
        return new Promise(function (resolve) {
          try {
            var c = document.createElement('canvas');
            c.width = 2; c.height = 2;
            var ctx = c.getContext('2d');
            if (ctx) { ctx.fillStyle = '#808080'; ctx.fillRect(0, 0, 2, 2); }
            if (!c.toBlob) { resolve(false); return; }
            c.toBlob(function (blob) {
              resolve(!!blob && normalizeMime(blob.type) === normalizeMime(mime));
            }, mime, mime === 'image/png' ? undefined : 0.8);
          } catch (e) { resolve(false); }
        });
      }

      /**
       * 探测 JPEG / WebP / PNG 编码支持并必要时回退。
       * @returns {Promise<void>}
       */
      function probeAll() {
        return Promise.all([
          probeEncode('image/webp').then(function (ok) { encodeSupport['image/webp'] = ok; }),
          probeEncode('image/jpeg').then(function (ok) { encodeSupport['image/jpeg'] = ok; }),
          probeEncode('image/png').then(function (ok) { encodeSupport['image/png'] = ok; })
        ]).then(function () {
          syncOptionsUi();
          if (encodeSupport['image/webp'] === false && selectedFormat() === 'image/webp') {
            checkChipValue(fmtChips, 'image/jpeg', 'bcpChipJpeg');
            setWarn(msg.webpOff);
            syncOptionsUi();
          }
        });
      }

      /**
       * 解码图片为位图（浏览器能解码的格式均可作为输入）。
       * @param {Blob} blob 源文件
       * @returns {Promise<{bitmap: ImageBitmap|HTMLImageElement, w: number, h: number}>}
       */
      function decodeImage(blob) {
        if (typeof createImageBitmap === 'function') {
          return createImageBitmap(blob).then(function (bmp) {
            return { bitmap: bmp, w: bmp.width, h: bmp.height };
          });
        }
        return new Promise(function (resolve, reject) {
          var url = URL.createObjectURL(blob);
          var img = new Image();
          img.onload = function () {
            URL.revokeObjectURL(url);
            resolve({ bitmap: img, w: img.naturalWidth || img.width, h: img.naturalHeight || img.height });
          };
          img.onerror = function () {
            URL.revokeObjectURL(url);
            reject(new Error('decode'));
          };
          img.src = url;
        });
      }

      /**
       * Canvas 导出 Blob，并核对返回 MIME。
       * @param {HTMLCanvasElement} canvas 画布
       * @param {string} mime 目标 MIME
       * @param {number|undefined} q 质量（PNG 传 undefined）
       * @returns {Promise<Blob>}
       */
      function canvasToBlob(canvas, mime, q) {
        return new Promise(function (resolve, reject) {
          try {
            canvas.toBlob(function (blob) {
              if (!blob) { reject(new Error('encode')); return; }
              var got = normalizeMime(blob.type);
              var want = normalizeMime(mime);
              if (got && want && got !== want) { reject(new Error('encode')); return; }
              resolve(blob);
            }, mime, q);
          } catch (e) { reject(e); }
        });
      }

      /**
       * 按当前尺寸规则计算输出宽高（不放大）。
       * @param {number} srcW 源宽
       * @param {number} srcH 源高
       * @returns {{w: number, h: number}}
       */
      function scaledSize(srcW, srcH) {
        if (!resizeOn.checked) return { w: srcW, h: srcH };
        var limit = Math.max(64, Math.min(SOFT_EDGE, Number(sizePxEl.value) || 1920));
        var rule = sizeRuleEl.value;
        var scale = 1;
        if (rule === 'max_width') {
          if (srcW <= limit) return { w: srcW, h: srcH };
          scale = limit / srcW;
        } else if (rule === 'max_height') {
          if (srcH <= limit) return { w: srcW, h: srcH };
          scale = limit / srcH;
        } else {
          var long = Math.max(srcW, srcH);
          if (long <= limit) return { w: srcW, h: srcH };
          scale = limit / long;
        }
        return { w: Math.max(1, Math.round(srcW * scale)), h: Math.max(1, Math.round(srcH * scale)) };
      }

      /**
       * 按当前尺寸与质量编码一次。
       * @param {ImageBitmap|HTMLImageElement} bitmap 源位图
       * @param {number} srcW 源宽
       * @param {number} srcH 源高
       * @param {string} mime 输出 MIME
       * @param {number} q 质量
       * @param {string} bg JPEG 垫底色
       * @returns {Promise<{blob: Blob, w: number, h: number}>}
       */
      function encodeOnce(bitmap, srcW, srcH, mime, q, bg) {
        var size = scaledSize(srcW, srcH);
        var canvas = document.createElement('canvas');
        canvas.width = size.w;
        canvas.height = size.h;
        var ctx = canvas.getContext('2d');
        if (!ctx) return Promise.reject(new Error('encode'));
        if (mime === 'image/jpeg' && bg) {
          ctx.fillStyle = bg;
          ctx.fillRect(0, 0, size.w, size.h);
        }
        ctx.drawImage(bitmap, 0, 0, size.w, size.h);
        var qArg = mime === 'image/png' ? undefined : q;
        return canvasToBlob(canvas, mime, qArg).then(function (blob) {
          return { blob: blob, w: size.w, h: size.h };
        });
      }

      /**
       * 在质量区间内二分逼近目标字节。
       * @param {ImageBitmap|HTMLImageElement} bitmap 源位图
       * @param {number} srcW 源宽
       * @param {number} srcH 源高
       * @param {string} mime 输出 MIME
       * @param {number} startQ 起始质量
       * @param {string} bg JPEG 垫底色
       * @param {number} targetBytes 目标字节
       * @returns {Promise<{result: {blob: Blob, w: number, h: number}, hit: boolean, q: number}>}
       */
      function encodeToTarget(bitmap, srcW, srcH, mime, startQ, bg, targetBytes) {
        var attempts = [];
        function binary(i, a, b) {
          if (i >= 8) return Promise.resolve();
          var mid = (a + b) / 2;
          return encodeOnce(bitmap, srcW, srcH, mime, mid, bg).then(function (res) {
            attempts.push({ res: res, q: mid });
            if (res.blob.size <= targetBytes) return binary(i + 1, mid, b);
            return binary(i + 1, a, mid);
          });
        }
        return binary(0, QUALITY_FLOOR, startQ).then(function () {
          var under = null;
          var smallest = null;
          for (var i = 0; i < attempts.length; i++) {
            var a = attempts[i];
            if (!smallest || a.res.blob.size < smallest.res.blob.size) smallest = a;
            if (a.res.blob.size <= targetBytes) {
              if (!under || a.q > under.q) under = a;
            }
          }
          if (under) return { result: under.res, hit: true, q: under.q };
          return { result: smallest.res, hit: false, q: smallest.q };
        });
      }

      /**
       * ZIP 内重名时追加 (2)、(3)…
       * @param {Object<string, boolean>} used 已占用文件名
       * @param {string} original 原始文件名
       * @param {string} ext 扩展名
       * @returns {string}
       */
      function uniqueZipName(used, original, ext) {
        var stem = String(original || 'photo').replace(/\\.[^.]+$/, '') || 'photo';
        var name = stem + '.' + ext;
        var n = 2;
        while (used[name]) {
          name = stem + ' (' + n + ').' + ext;
          n += 1;
        }
        used[name] = true;
        return name;
      }

      /**
       * 刷新队列计数文案。
       */
      function renderCount() {
        fileCountEl.textContent = msg.countTpl.replace('{n}', String(queue.length));
      }

      /**
       * 把结果行写入表格。
       * @param {{name: string, before: string, after: string, status: string}} row 一行展示数据
       */
      function appendRow(row) {
        var tr = document.createElement('tr');
        var cells = [row.name, row.before, row.after, row.status];
        for (var i = 0; i < cells.length; i++) {
          var td = document.createElement('td');
          td.textContent = cells[i];
          tr.appendChild(td);
        }
        tbody.appendChild(tr);
      }

      /**
       * 把 FileList 并入队列，超出上限则拒绝续加。
       * @param {FileList|File[]} files 新文件
       */
      function addFiles(files) {
        setError('');
        var list = Array.prototype.slice.call(files || []);
        var warns = [];
        for (var i = 0; i < list.length; i++) {
          if (queue.length >= MAX_FILES) {
            setError(msg.tooMany);
            break;
          }
          var f = list[i];
          queue.push(f);
          if (f.size > SOFT_BYTES) warns.push(msg.large);
          if (/gif/i.test(f.type) || /gif$/i.test(f.name || '')) warns.push(msg.anim);
        }
        if (warns.length) setWarn(warns[0]);
        renderCount();
        zipParts = [];
        btnZip.disabled = true;
      }

      /**
       * PNG 输出不会做 KB 二分；提醒用户，但不偷偷改掉已选格式。
       * 已不是 PNG 时清掉这条提示，避免换 JPEG/WebP 后黄条还挂着旧文案。
       */
      function preferLossyForTarget() {
        if (selectedFormat() === 'image/png') setWarn(msg.pngTarget);
        else if (warnEl.textContent === msg.pngTarget) setWarn('');
      }

      /**
       * 应用预设：写入尺寸规则、像素、目标 KB、画质。
       * @param {string} val 预设 value
       */
      function applyPreset(val) {
        if (!val) return;
        if (val.indexOf('size:') === 0) {
          var sizeParts = val.split(':');
          var rule = sizeParts[1] || 'max_edge';
          var px = Math.max(64, Math.min(SOFT_EDGE, Number(sizeParts[2]) || 1920));
          resizeOn.checked = true;
          sizeRuleEl.value = rule;
          sizePxEl.value = String(px);
        } else if (val.indexOf('kb:') === 0) {
          var kb = Math.max(10, Math.min(5000, Number(val.slice(3)) || 200));
          targetOn.checked = true;
          targetKbEl.value = String(kb);
          preferLossyForTarget();
        } else if (val.indexOf('combo:') === 0) {
          var parts = val.split(':');
          var comboRule = parts[1] || 'max_edge';
          var e = Math.max(64, Math.min(SOFT_EDGE, Number(parts[2]) || 1920));
          var tKb = Number(parts[3]) || 0;
          var qPct = Math.max(50, Math.min(100, Number(parts[4]) || 80));
          resizeOn.checked = true;
          sizeRuleEl.value = comboRule;
          sizePxEl.value = String(e);
          qualityEl.value = String(qPct);
          if (tKb > 0) {
            targetOn.checked = true;
            targetKbEl.value = String(tKb);
            preferLossyForTarget();
          } else {
            targetOn.checked = false;
          }
        }
        syncChipsFromControls();
        syncOptionsUi();
      }

      /**
       * 压缩队列中的一张（失败则 skip）。
       * @param {File} file 源文件
       * @param {string} mime 输出 MIME
       * @param {Object<string, boolean>} usedNames ZIP 已用名
       * @returns {Promise<{kind: string, zipName?: string, bytes?: Uint8Array, before: number, after: number, name: string}>}
       */
      function compressOne(file, mime, usedNames) {
        var q = quality01();
        var bg = jpegBg();
        var wantTarget = targetOn.checked && mime !== 'image/png';
        var targetBytes = Math.max(10, Number(targetKbEl.value) || 200) * 1024;
        return decodeImage(file)
          .then(function (dec) {
            if (dec.w > SOFT_EDGE || dec.h > SOFT_EDGE) {
              setWarn((warnEl.textContent ? warnEl.textContent + ' ' : '') + msg.edge);
            }
            var bmp = dec.bitmap;
            var p = wantTarget
              ? encodeToTarget(bmp, dec.w, dec.h, mime, q, bg, targetBytes)
              : encodeOnce(bmp, dec.w, dec.h, mime, q, bg).then(function (res) {
                  return { result: res, hit: true, q: q };
                });
            return p.then(function (pack) {
              if (bmp && typeof bmp.close === 'function') bmp.close();
              return pack;
            });
          })
          .then(function (pack) {
            return pack.result.blob.arrayBuffer().then(function (buf) {
              var ext = extFor(mime);
              var zipName = uniqueZipName(usedNames, file.name, ext);
              var kind = pack.hit ? 'hit' : 'miss';
              if (mime === 'image/png' && pack.result.blob.size >= file.size) {
                setWarn((warnEl.textContent ? warnEl.textContent + ' ' : '') + msg.pngHard);
              }
              return {
                kind: kind,
                zipName: zipName,
                bytes: new Uint8Array(buf),
                before: file.size,
                after: pack.result.blob.size,
                name: file.name
              };
            });
          })
          .catch(function () {
            return {
              kind: 'skip',
              before: file.size,
              after: 0,
              name: file.name
            };
          });
      }

      /**
       * 串行压缩整批并刷新表。
       * 一开始清掉选项阶段留下的黄条（例如 PNG + 体积芯片的提示），避免和本批新警告拼成一条。
       * @returns {Promise<void>}
       */
      function compressAll() {
        setWarn('');
        setError('');
        if (!queue.length) { setError(msg.empty); return Promise.resolve(); }
        applyChipsToControls();
        var forced = selectedFormat();
        if (forced && encodeSupport[forced] === false) {
          setError(forced === 'image/webp' ? msg.webpOff : msg.encode);
          return Promise.resolve();
        }
        setStatus(msg.compressing);
        btnCompress.disabled = true;
        btnZip.disabled = true;
        tbody.textContent = '';
        zipParts = [];
        var usedNames = {};
        var ok = 0;
        var miss = 0;
        var skip = 0;
        var i = 0;
        function next() {
          if (i >= queue.length) {
            summaryEl.textContent = msg.summaryTpl
              .replace('{ok}', String(ok))
              .replace('{miss}', String(miss))
              .replace('{skip}', String(skip));
            setStatus(msg.done);
            btnZip.disabled = zipParts.length === 0;
            btnCompress.disabled = false;
            return Promise.resolve();
          }
          var file = queue[i];
          i += 1;
          return compressOne(file, mimeForFile(file), usedNames).then(function (row) {
            if (row.kind === 'hit') ok += 1;
            else if (row.kind === 'miss') miss += 1;
            else skip += 1;
            if (row.bytes && row.zipName) zipParts.push({ zipName: row.zipName, bytes: row.bytes });
            var statusLabel = row.kind === 'hit' ? msg.hit : row.kind === 'miss' ? msg.miss : msg.skip;
            appendRow({
              name: row.name,
              before: formatBytes(row.before),
              after: row.kind === 'skip' ? '—' : formatBytes(row.after),
              status: statusLabel
            });
            return next();
          });
        }
        return next();
      }

      /**
       * 把成功项打成 ZIP 并触发下载。
       */
      function downloadZip() {
        if (!zipParts.length) return;
        if (typeof fflate === 'undefined' || !fflate || typeof fflate.zipSync !== 'function') {
          setError(msg.fflate);
          return;
        }
        var files = {};
        for (var i = 0; i < zipParts.length; i++) {
          files[zipParts[i].zipName] = zipParts[i].bytes;
        }
        try {
          var zipped = fflate.zipSync(files, { level: 1 });
          var blob = new Blob([zipped], { type: 'application/zip' });
          var a = document.createElement('a');
          var url = URL.createObjectURL(blob);
          a.href = url;
          a.download = 'product-photos-compressed.zip';
          document.body.appendChild(a);
          a.click();
          a.remove();
          setTimeout(function () { URL.revokeObjectURL(url); }, 2000);
        } catch (e) {
          setError(msg.fflate);
        }
      }

      /**
       * 清空队列与结果。
       */
      function clearAll() {
        queue = [];
        zipParts = [];
        fileInput.value = '';
        fileCountEl.textContent = '';
        tbody.textContent = '';
        summaryEl.textContent = '';
        setWarn(''); setError(''); setStatus('');
        btnZip.disabled = true;
      }

      /**
       * 画一张合成商品色块 JPEG。
       * @param {string} label 画布上的文字
       * @param {string} c0 渐变起点
       * @param {string} c1 渐变终点
       * @param {string} fileName 生成的文件名
       * @returns {Promise<File>}
       */
      function makeSampleFile(label, c0, c1, fileName) {
        return new Promise(function (resolve, reject) {
          var c = document.createElement('canvas');
          c.width = 1280;
          c.height = 800;
          var ctx = c.getContext('2d');
          if (!ctx) { reject(new Error('encode')); return; }
          var g = ctx.createLinearGradient(0, 0, c.width, c.height);
          g.addColorStop(0, c0);
          g.addColorStop(1, c1);
          ctx.fillStyle = g;
          ctx.fillRect(0, 0, c.width, c.height);
          ctx.fillStyle = '#fff';
          ctx.font = 'bold 42px sans-serif';
          ctx.fillText(label, 48, 80);
          c.toBlob(function (blob) {
            if (!blob) { reject(new Error('encode')); return; }
            resolve(new File([blob], fileName, { type: 'image/jpeg' }));
          }, 'image/jpeg', 0.95);
        });
      }

      /**
       * 按钮：两张样例图入队并自动压缩。进页不调用，避免预填结果。
       * @returns {Promise<void>}
       */
      function loadSample() {
        setError('');
        setWarn('');
        queue = [];
        zipParts = [];
        tbody.textContent = '';
        return makeSampleFile('SKU A', '#1d4ed8', '#db2777', 'sku-a-listing.jpg')
          .then(function (a) {
            return makeSampleFile('SKU B', '#0f766e', '#a16207', 'sku-b-listing.jpg').then(function (b) {
              queue.push(a, b);
              renderCount();
              return compressAll();
            });
          })
          .catch(function () { setError(msg.encode); });
      }

      drop.addEventListener('dragover', function (e) {
        e.preventDefault(); drop.classList.add('dragover');
      });
      drop.addEventListener('dragleave', function () { drop.classList.remove('dragover'); });
      drop.addEventListener('drop', function (e) {
        e.preventDefault(); drop.classList.remove('dragover');
        var files = e.dataTransfer && e.dataTransfer.files;
        if (files && files.length) addFiles(files);
      });
      fileInput.addEventListener('change', function () {
        if (fileInput.files && fileInput.files.length) addFiles(fileInput.files);
      });
      if (presetEl) {
        presetEl.addEventListener('change', function () {
          applyPreset(presetEl.value);
          markSelectOn(presetEl);
        });
      }
      qualityEl.addEventListener('input', function () { clearPresetSelect(); syncOptionsUi(); });
      sizePxEl.addEventListener('input', clearPresetSelect);
      targetKbEl.addEventListener('input', function () {
        targetOn.checked = true;
        clearPresetSelect();
        syncOptionsUi();
      });
      fmtChips.forEach(function (el) {
        el.addEventListener('change', function () {
          if (el.value === 'image/webp' && encodeSupport['image/webp'] === false) {
            setWarn(msg.webpOff);
            checkChipValue(fmtChips, 'image/jpeg', 'bcpChipJpeg');
          }
          applyChipsToControls();
          if (targetOn.checked) preferLossyForTarget();
          else if (warnEl.textContent === msg.pngTarget) setWarn('');
          clearPresetSelect();
          syncOptionsUi();
        });
      });
      kbChips.forEach(function (el) {
        el.addEventListener('change', function () {
          applyChipsToControls();
          if (targetOn.checked) preferLossyForTarget();
          else if (warnEl.textContent === msg.pngTarget) setWarn('');
          applyChipsToControls();
          clearPresetSelect();
          syncOptionsUi();
        });
      });
      sizeChips.forEach(function (el) {
        el.addEventListener('change', function () {
          applyChipsToControls();
          clearPresetSelect();
          syncOptionsUi();
        });
      });
      document.querySelectorAll('input[name="bcpJpegBg"]').forEach(function (el) {
        el.addEventListener('change', syncOptionsUi);
      });
      if (sizeQuickEl) {
        sizeQuickEl.addEventListener('change', function () {
          var val = sizeQuickEl.value;
          if (!val) {
            markSelectOn(sizeQuickEl);
            return;
          }
          applyPreset('size:' + val);
        });
      }
      btnCompress.addEventListener('click', function () { compressAll(); });
      btnZip.addEventListener('click', downloadZip);
      btnSample.addEventListener('click', function () { loadSample(); });
      btnClear.addEventListener('click', clearAll);

      probeAll().then(function () {
        applyChipsToControls();
        syncOptionsUi();
      });
    })();
  </script>`;

	/** catalog 元数据（FAQ / related / 分享）。 */
	const toolMeta = getToolBySlug('bulk-compress-product-photos');
	/** 工具页额外区块（FAQ、related）。 */
	const toolSeoHtml = toolMeta
		? renderToolExtraSections({ lang: opts.lang, defaultLang: opts.defaultLang, tool: toolMeta })
		: '';
	/** JSON-LD，与可见 title/description 一致。 */
	const toolJsonLd = toolMeta
		? buildToolJsonLd({
				lang: opts.lang,
				defaultLang: opts.defaultLang,
				tool: toolMeta,
				name: t(opts.lang, toolMeta.i18nKey as Parameters<typeof t>[1]),
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
