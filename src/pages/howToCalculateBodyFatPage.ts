/**
 * 体脂率估算页：海军/陆军围度法（厘米输入，英寸 log10 公式）。
 * slug: how-to-calculate-body-fat。
 * 陆军标签与海军使用同一套教育向围度公式（见 en.ts）。
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
	buildToolJsonLd,
	renderToolIgSections,
	renderToolReferencesSection,
} from './site/toolContent';

/** 本工具 i18n 键前缀（对应 tool_body_fat_*）。 */
const PREFIX = 'tool_body_fat';

/**
 * 为路径加上语言前缀（默认语无前缀）。
 * @param lang 当前语言
 * @param pathname 站内路径
 * @param defaultLang 站点默认语言
 * @returns 带或不带语言前缀的路径
 */
const withLangPrefix = (lang: SiteLang, pathname: string, defaultLang: SiteLang) => {
	/** 保证以斜杠开头的安全路径。 */
	const safe = pathname.startsWith('/') ? pathname : `/${pathname}`;
	return lang === defaultLang ? safe : `/${lang}${safe}`;
};

/**
 * 渲染体脂率计算器工具页 HTML。
 * @param opts.lang 当前语言
 * @param opts.defaultLang 站点默认语言
 * @param opts.enabledLangs 启用语言列表
 * @returns 完整页面 HTML
 */
export const renderHowToCalculateBodyFatPage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	/**
	 * 读取本工具文案键。
	 * @param key 去掉前缀后的键名
	 * @returns 当前语言字符串
	 */
	const tx = (key: string) => t(opts.lang, `${PREFIX}_${key}` as keyof typeof import('../site/i18n/en').default);

	/** 工具规范路径（无语言前缀）。 */
	const toolPath = '/tools/how-to-calculate-body-fat';
	/** 当前语言的规范路径。 */
	const canonicalPath = withLangPrefix(opts.lang, toolPath, opts.defaultLang);
	/** 文档标题（H1 + 品牌）。 */
	const title = `${tx('title')} | ${t(opts.lang, 'brand')}`;
	/** 元描述，与可见摘要相同。 */
	const description = tx('description');

	/** 顶栏导航项。 */
	const navItems = buildToolPageNavItems(opts.lang, opts.defaultLang);

	/**
	 * 语言切换链接始终带显式语言前缀。
	 * @param code 目标语言
	 * @param pathname 站内路径
	 * @returns 带语言前缀的路径
	 */
	const withExplicitLangPrefix = (code: SiteLang, pathname: string) => {
		/** 保证以斜杠开头的安全路径。 */
		const safe = pathname.startsWith('/') ? pathname : `/${pathname}`;
		return `/${code}${safe}`.replace(/\/{2,}/g, '/');
	};

	/** 语言代码到切换路径的映射。 */
	const langAlternates: Record<string, string> = Object.fromEntries(
		(supportedLangs || []).map((code) => [code, withExplicitLangPrefix(code, toolPath)])
	);

	/** hreflang 备用链接。 */
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

	/** 工具侧栏 HTML。 */
	const sidebarHtml = renderSidebar({
		title: t(opts.lang, 'nav_tools'),
		groups: buildToolSidebarItems({
			lang: opts.lang,
			defaultLang: opts.defaultLang,
			currentSlug: 'how-to-calculate-body-fat',
			currentAnchor: '#body-fat',
		}),
		id: 'toolNav',
	});

	/** 页脚 HTML。 */
	const footerHtml = renderFooter({ lang: opts.lang });

	/** 本页卡片与结果区样式。 */
	const extraHeadHtml = `
  <style>
    .tool-card { max-width: var(--content-max); width: 100%; margin: 0 0 1.5rem; }
    .form-label { display:block; margin-bottom:.5rem; color:#495057; font-weight:500 }
    .form-hint { display:block; color:#6c757d; font-size:.85rem; margin:-.25rem 0 .75rem; }
    .form-group { margin-bottom:1rem; }
    .form-row { display:grid; grid-template-columns:repeat(2, minmax(0, 1fr)); gap:0 1rem; }
    @media (max-width:576px) { .form-row { grid-template-columns:minmax(0, 1fr); } }
    .btn-row { display:flex; flex-wrap:wrap; gap:.5rem; align-items:center; }
    .bf-warn { background:#fff3cd; border:1px solid #ffecb5; color:#664d03; padding:.75rem 1rem; border-radius:8px; margin-bottom:1rem; font-size:.92rem; }
    .result { background:#f8f9fa; padding:1rem; border-radius:8px; margin-top:1rem; }
    .bf-out { font-size:1.35rem; font-weight:600; font-variant-numeric:tabular-nums; }
    .bf-h { font-size:1rem; font-weight:600; margin:1rem 0 .35rem; }
    .bf-steps { margin:0; padding-inline-start:1.3rem; font-size:.92rem; }
    .bf-steps li { margin-bottom:.35rem; }
    .result .muted { color:#6c757d; font-size:.9rem; margin-top:.75rem; }
    .result .muted.bf-err { color:#b02a37; font-weight:500; margin-top:0; }
  </style>`;

	/** 可见正文：标题、计算器卡片、IG 区块。 */
	const contentHtml = `
    <div id="body-fat" class="mb-3">
      <h1 class="h4 mb-1">${escapeHtml(tx('title'))}</h1>
      <p class="text-muted mb-0">${escapeHtml(description)}</p>
    </div>

    <div class="card tool-card">
      <div class="card-body">
        <div class="bf-warn" role="note">${escapeHtml(tx('safety_banner'))}</div>
        <form id="bfForm" novalidate>
          <span class="form-hint">${escapeHtml(tx('hint'))}</span>
          <div class="form-row">
            <div class="form-group">
              <label class="form-label" for="bfMethod">${escapeHtml(tx('method_label'))}</label>
              <select id="bfMethod" class="input-lg">
                <option value="navy" selected>${escapeHtml(tx('method_navy'))}</option>
                <option value="army">${escapeHtml(tx('method_army'))}</option>
              </select>
            </div>
            <div class="form-group">
              <label class="form-label" for="bfSex">${escapeHtml(tx('sex_label'))}</label>
              <select id="bfSex" class="input-lg">
                <option value="male" selected>${escapeHtml(tx('sex_male'))}</option>
                <option value="female">${escapeHtml(tx('sex_female'))}</option>
              </select>
            </div>
          </div>
          <div class="form-row">
            <div class="form-group">
              <label class="form-label" for="bfHeight">${escapeHtml(tx('height_label'))}</label>
              <input id="bfHeight" class="input-lg" type="text" inputmode="decimal" autocomplete="off"
                placeholder="${escapeHtml(tx('height_ph'))}">
            </div>
            <div class="form-group">
              <label class="form-label" for="bfNeck">${escapeHtml(tx('neck_label'))}</label>
              <input id="bfNeck" class="input-lg" type="text" inputmode="decimal" autocomplete="off"
                placeholder="${escapeHtml(tx('neck_ph'))}">
            </div>
          </div>
          <div class="form-row">
            <div class="form-group">
              <label class="form-label" for="bfWaist">${escapeHtml(tx('waist_label'))}</label>
              <input id="bfWaist" class="input-lg" type="text" inputmode="decimal" autocomplete="off"
                placeholder="${escapeHtml(tx('waist_ph'))}">
            </div>
            <div class="form-group" id="bfHipGroup" style="display:none">
              <label class="form-label" for="bfHip">${escapeHtml(tx('hip_label'))}</label>
              <input id="bfHip" class="input-lg" type="text" inputmode="decimal" autocomplete="off"
                placeholder="${escapeHtml(tx('hip_ph'))}">
            </div>
          </div>
          <div class="btn-row">
            <button type="submit" class="btn btn-primary">${escapeHtml(tx('calculate'))}</button>
            <button type="button" id="bfSample" class="btn btn-outline-secondary">${escapeHtml(tx('sample'))}</button>
            <button type="button" id="bfClear" class="btn btn-outline-secondary">${escapeHtml(tx('clear'))}</button>
          </div>
        </form>
        <div id="bfResult" class="result" style="display:none" aria-live="polite">
          <div class="bf-out">${escapeHtml(tx('result_label'))}: <span id="bfOut"></span></div>
          <div id="bfStepsWrap">
            <div class="bf-h">${escapeHtml(tx('steps_title'))}</div>
            <ol id="bfSteps" class="bf-steps"></ol>
          </div>
          <div id="bfNote" class="muted"></div>
        </div>
      </div>
    </div>

    ${renderToolIgSections({
			lang: opts.lang,
			prefix: PREFIX,
			mode: 'formula',
			howItemCount: 4,
			whyChooseItemCount: 5,
			usecaseCount: 4,
			formulaItemCount: 5,
		})}`;

	/** 权威引用区。 */
	const referencesHtml = renderToolReferencesSection({
		lang: opts.lang,
		links: [
			{
				label: tx('ref_ace_label'),
				href: 'https://www.acefitness.org/resources/everyone/body-fat-calculator/',
			},
			{
				label: tx('ref_pmc_label'),
				href: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5504436/',
			},
		],
	});

	/** 注入浏览器脚本的文案（步骤模板用 split 替换占位符）。 */
	const clientText = {
		lang: opts.lang,
		errInput: tx('err_input'),
		errHip: tx('err_hip'),
		errGeom: tx('err_geom'),
		note: tx('result_note'),
		stepConvert: tx('step_convert_tpl'),
		stepHip: tx('step_hip_part_tpl'),
		stepMale: tx('step_male_tpl'),
		stepFemale: tx('step_female_tpl'),
	};

	/** 页内计算脚本：进页自动跑样例。 */
	const extraBodyHtml = `
  <script>
    (function () {
      /** 表单根节点。 */
      var form = document.getElementById('bfForm');
      /** 方法标签（海军/陆军；公式相同）。 */
      var methodEl = document.getElementById('bfMethod');
      /** 性别（决定男式或女式公式）。 */
      var sexEl = document.getElementById('bfSex');
      /** 身高厘米输入。 */
      var heightEl = document.getElementById('bfHeight');
      /** 颈围厘米输入。 */
      var neckEl = document.getElementById('bfNeck');
      /** 腰围厘米输入。 */
      var waistEl = document.getElementById('bfWaist');
      /** 臀围厘米输入（女式）。 */
      var hipEl = document.getElementById('bfHip');
      /** 臀围字段容器。 */
      var hipGroup = document.getElementById('bfHipGroup');
      /** 结果卡片。 */
      var result = document.getElementById('bfResult');
      /** 体脂百分比输出。 */
      var outEl = document.getElementById('bfOut');
      /** 步骤列表。 */
      var stepsEl = document.getElementById('bfSteps');
      /** 步骤容器。 */
      var stepsWrap = document.getElementById('bfStepsWrap');
      /** 说明或错误文案。 */
      var noteEl = document.getElementById('bfNote');
      /** 当前语言文案包。 */
      var T = ${JSON.stringify(clientText)};
      /** 样例轮换下标（先男后女）。 */
      var sampleIndex = 0;
      /** 内置样例：男 178/40/86；女 165/34/74/96。 */
      var SAMPLES = [
        { method: 'navy', sex: 'male', height: '178', neck: '40', waist: '86', hip: '' },
        { method: 'army', sex: 'female', height: '165', neck: '34', waist: '74', hip: '96' }
      ];

      /**
       * 把输入解析为数字；空串为 NaN。用 parseFloat，不用数字字符类正则。
       * @param {string} raw 原文
       * @returns {number}
       */
      function parseNum(raw) {
        var text = String(raw == null ? '' : raw).trim().split(',').join('.');
        if (!text) return NaN;
        return parseFloat(text);
      }

      /**
       * 用拉丁数字格式化。
       * @param {number} n 数值
       * @param {number} digits 小数位
       * @returns {string}
       */
      function fmt(n, digits) {
        if (!isFinite(n)) return '—';
        try {
          return new Intl.NumberFormat(T.lang + '-u-nu-latn', {
            maximumFractionDigits: digits,
            minimumFractionDigits: digits
          }).format(n);
        } catch (e) {
          return n.toFixed(digits);
        }
      }

      /**
       * 用 split/join 替换 {key}，避免模板字面量吃掉反斜杠字符类。
       * @param {string} tpl 模板
       * @param {Record<string,string>} map 占位映射
       * @returns {string}
       */
      function fill(tpl, map) {
        var out = String(tpl || '');
        Object.keys(map).forEach(function (k) {
          out = out.split('{' + k + '}').join(map[k]);
        });
        return out;
      }

      /** 厘米转英寸。 */
      function cmToIn(cm) {
        return cm / 2.54;
      }

      /**
       * 海军/陆军共用的教育向围度公式（英寸）。
       * 女式常数为 −78.387（Hodgdon / Navy 公开式），不是 +78.387。
       * @param {string} sex male|female
       * @param {number} heightIn 身高英寸
       * @param {number} neckIn 颈围英寸
       * @param {number} waistIn 腰围英寸
       * @param {number} hipIn 臀围英寸
       * @returns {number}
       */
      function bodyFatPct(sex, heightIn, neckIn, waistIn, hipIn) {
        if (sex === 'female') {
          return 163.205 * Math.log10(waistIn + hipIn - neckIn) - 97.684 * Math.log10(heightIn) - 78.387;
        }
        return 86.010 * Math.log10(waistIn - neckIn) - 70.041 * Math.log10(heightIn) + 36.387;
      }

      /** 女式显示臀围，男式隐藏。 */
      function syncHip() {
        hipGroup.style.display = sexEl.value === 'female' ? '' : 'none';
      }

      /**
       * 写入一条步骤（文本节点，不拼 HTML）。
       * @param {string} text 步骤句
       */
      function addStep(text) {
        var li = document.createElement('li');
        li.textContent = text;
        stepsEl.appendChild(li);
      }

      /**
       * 显示错误并收起步骤。
       * @param {string} message 错误句
       * @returns {boolean}
       */
      function showError(message) {
        outEl.textContent = '—';
        stepsEl.textContent = '';
        stepsWrap.style.display = 'none';
        noteEl.className = 'muted bf-err';
        noteEl.textContent = message;
        return false;
      }

      /**
       * 读取围度并写出体脂%与步骤。
       * @returns {boolean} 是否算出有限百分比
       */
      function runCalc() {
        var height = parseNum(heightEl.value);
        var neck = parseNum(neckEl.value);
        var waist = parseNum(waistEl.value);
        var hip = parseNum(hipEl.value);
        var sex = sexEl.value;
        result.style.display = 'block';
        stepsEl.textContent = '';
        if (!(height > 0) || !(neck > 0) || !(waist > 0)) {
          return showError(T.errInput);
        }
        if (sex === 'female' && !(hip > 0)) {
          return showError(T.errHip);
        }
        var hIn = cmToIn(height);
        var nIn = cmToIn(neck);
        var wIn = cmToIn(waist);
        var hipIn = sex === 'female' ? cmToIn(hip) : 0;
        if (sex === 'female' ? !(wIn + hipIn > nIn) : !(wIn > nIn)) {
          return showError(T.errGeom);
        }
        var pct = bodyFatPct(sex, hIn, nIn, wIn, hipIn);
        if (!isFinite(pct)) {
          return showError(T.errInput);
        }
        var pctText = fmt(pct, 1);
        var hipPart = '';
        if (sex === 'female') {
          hipPart = fill(T.stepHip, { hipIn: fmt(hipIn, 2) });
        }
        addStep(fill(T.stepConvert, {
          hIn: fmt(hIn, 2),
          nIn: fmt(nIn, 2),
          wIn: fmt(wIn, 2),
          hipPart: hipPart
        }));
        if (sex === 'female') {
          addStep(fill(T.stepFemale, { pct: pctText }));
        } else {
          addStep(fill(T.stepMale, { pct: pctText }));
        }
        outEl.textContent = pctText + '%';
        stepsWrap.style.display = '';
        noteEl.className = 'muted';
        noteEl.textContent = T.note;
        return true;
      }

      /** 轮换男式海军样例与女式陆军标签样例（公式相同）。 */
      function loadSample() {
        var sample = SAMPLES[sampleIndex % SAMPLES.length];
        sampleIndex += 1;
        methodEl.value = sample.method;
        sexEl.value = sample.sex;
        heightEl.value = sample.height;
        neckEl.value = sample.neck;
        waistEl.value = sample.waist;
        hipEl.value = sample.hip;
        syncHip();
        runCalc();
      }

      sexEl.addEventListener('change', syncHip);
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        runCalc();
      });
      document.getElementById('bfSample').addEventListener('click', loadSample);
      document.getElementById('bfClear').addEventListener('click', function () {
        form.reset();
        methodEl.value = 'navy';
        sexEl.value = 'male';
        syncHip();
        result.style.display = 'none';
      });
      syncHip();
      loadSample();
    })();
  </script>`;

	/** 目录中的本工具元数据。 */
	const toolMeta = getToolBySlug('how-to-calculate-body-fat');
	/** FAQ、相关工具与 YMYL 免责声明。 */
	const toolSeoHtml = toolMeta
		? renderToolExtraSections({ lang: opts.lang, defaultLang: opts.defaultLang, tool: toolMeta })
		: '';
	/** 与可见文案一致的 JSON-LD。 */
	const toolJsonLd = toolMeta
		? buildToolJsonLd({
				lang: opts.lang,
				defaultLang: opts.defaultLang,
				tool: toolMeta,
				name: t(opts.lang, toolMeta.i18nKey as keyof typeof import('../site/i18n/en').default),
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
		contentHtml: `${contentHtml}${toolSeoHtml}${referencesHtml}`,
		footerHtml,
		extraHeadHtml: `${extraHeadHtml}${toolJsonLd}`,
		extraBodyHtml,
		includeSidebarToggleScript: true,
		sidebarAutoCloseSelector: '#toolNav a',
	});
};
