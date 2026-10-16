/**
 * GPA 计算器：课程成绩点与学分 → 4.0 量表加权平均 GPA。
 * 字母成绩芯片插入常见绩点；结果展示质量分、总学分与步骤行。
 * 教育用途，非录取/奖学金决定。slug: how-to-calculate-gpa。
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

/** 本工具 i18n 键前缀。 */
const PREFIX = 'tool_gpa';

/** 为路径加上语言前缀（默认语无前缀）。 */
const withLangPrefix = (lang: SiteLang, pathname: string, defaultLang: SiteLang) => {
	const safe = pathname.startsWith('/') ? pathname : `/${pathname}`;
	return lang === defaultLang ? safe : `/${lang}${safe}`;
};

/**
 * 渲染 how-to-calculate-gpa 工具页 HTML。
 * @param opts.lang 当前语言
 * @param opts.defaultLang 站点默认语言
 * @param opts.enabledLangs 启用语言列表
 * @returns 完整页面 HTML
 */
export const renderHowToCalculateGpaPage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	/** 读取本工具键。 */
	const tx = (key: string) => t(opts.lang, `${PREFIX}_${key}` as keyof typeof import('../site/i18n/en').default);

	const toolPath = '/tools/how-to-calculate-gpa';
	const canonicalPath = withLangPrefix(opts.lang, toolPath, opts.defaultLang);
	const title = `${tx('title')} | ${t(opts.lang, 'brand')}`;
	const description = tx('description');

	const navItems = buildToolPageNavItems(opts.lang, opts.defaultLang);

	/** 语言切换链接始终带显式语言前缀。 */
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
			currentSlug: 'how-to-calculate-gpa',
			currentAnchor: '#gpa',
		}),
		id: 'toolNav',
	});

	const footerHtml = renderFooter({ lang: opts.lang });

	/** 字母成绩芯片：标签 → 绩点（常见 4.0 映射）。 */
	const letterChips: { label: string; points: string }[] = [
		{ label: 'A', points: '4.0' },
		{ label: 'A−', points: '3.7' },
		{ label: 'B+', points: '3.3' },
		{ label: 'B', points: '3.0' },
		{ label: 'B−', points: '2.7' },
		{ label: 'C+', points: '2.3' },
		{ label: 'C', points: '2.0' },
		{ label: 'C−', points: '1.7' },
		{ label: 'D+', points: '1.3' },
		{ label: 'D', points: '1.0' },
		{ label: 'F', points: '0.0' },
	];
	const chipsHtml = letterChips
		.map(
			(c) =>
				`<button type="button" class="gpa-chip" data-points="${escapeHtml(c.points)}" aria-label="${escapeHtml(c.label)} ${escapeHtml(c.points)}">${escapeHtml(c.label)}</button>`
		)
		.join('');

	const extraHeadHtml = `
  <style>
    .tool-card { max-width: var(--content-max); width: 100%; margin: 0 0 1.5rem; }
    .form-label { display:block; margin-bottom:.5rem; color:#495057; font-weight:500 }
    .form-hint { display:block; color:#6c757d; font-size:.85rem; margin:-.25rem 0 .75rem; }
    .form-group { margin-bottom:1rem; }
    .btn-row { display:flex; flex-wrap:wrap; gap:.5rem; align-items:center; }
    .gpa-warn { background:#fff3cd; border:1px solid #ffecb5; color:#664d03; padding:.75rem 1rem; border-radius:8px; margin-bottom:1rem; font-size:.92rem; }
    .gpa-chips { display:flex; flex-wrap:wrap; gap:.35rem; margin:.35rem 0 .75rem; }
    .gpa-chip { border:1px solid #ced4da; background:#fff; border-radius:6px; padding:.25rem .55rem; font-size:.85rem; cursor:pointer; }
    .gpa-chip:hover { background:#e9ecef; }
    .result { background:#f8f9fa; padding:1rem; border-radius:8px; margin-top:1rem; }
    .gpa-out { font-size:1.35rem; font-weight:600; font-variant-numeric:tabular-nums; }
    .gpa-row { color:#495057; font-size:.92rem; margin-top:.4rem; }
    .gpa-row strong { color:#343a40; }
    .gpa-h { font-size:1rem; font-weight:600; margin:1rem 0 .35rem; }
    .gpa-steps { margin:0; padding-inline-start:1.3rem; font-size:.92rem; }
    .gpa-steps li { margin-bottom:.35rem; }
    .result .muted { color:#6c757d; font-size:.9rem; margin-top:.75rem; }
    .result .muted.gpa-err { color:#b02a37; font-weight:500; margin-top:0; }
    textarea.input-lg { min-height:6.5rem; resize:vertical; font-family:inherit }
  </style>`;

	const contentHtml = `
    <div id="gpa" class="mb-3">
      <h1 class="h4 mb-1">${escapeHtml(tx('title'))}</h1>
      <p class="text-muted mb-0">${escapeHtml(description)}</p>
    </div>

    <div class="card tool-card">
      <div class="card-body">
        <div class="gpa-warn" role="note">${escapeHtml(tx('safety_banner'))}</div>
        <form id="gpaForm" novalidate>
          <span class="form-hint">${escapeHtml(tx('hint'))}</span>
          <div class="form-group">
            <label class="form-label" for="gpaCourses">${escapeHtml(tx('courses_label'))}</label>
            <textarea id="gpaCourses" class="input-lg" rows="5"
              placeholder="${escapeHtml(tx('courses_ph'))}"></textarea>
          </div>
          <div class="form-group">
            <span class="form-label">${escapeHtml(tx('chips_label'))}</span>
            <div class="gpa-chips" id="gpaChips">${chipsHtml}</div>
          </div>
          <div class="btn-row">
            <button type="submit" class="btn btn-primary">${escapeHtml(tx('calculate'))}</button>
            <button type="button" id="gpaSample" class="btn btn-outline-secondary">${escapeHtml(tx('sample'))}</button>
            <button type="button" id="gpaClear" class="btn btn-outline-secondary">${escapeHtml(tx('clear'))}</button>
          </div>
        </form>
        <div id="gpaResult" class="result" style="display:none" aria-live="polite">
          <div class="gpa-out">${escapeHtml(tx('result_label'))}: <span id="gpaValue"></span></div>
          <div id="gpaRows"></div>
          <div id="gpaStepsWrap">
            <div class="gpa-h">${escapeHtml(tx('steps_title'))}</div>
            <ol id="gpaSteps" class="gpa-steps"></ol>
          </div>
          <div id="gpaNote" class="muted"></div>
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

	const referencesHtml = renderToolReferencesSection({
		lang: opts.lang,
		links: [
			{ label: tx('ref_cb_label'), href: 'https://www.collegeboard.org/' },
			{
				label: tx('ref_wiki_label'),
				href: 'https://en.wikipedia.org/wiki/Academic_grading_in_the_United_States',
			},
		],
	});

	/** 前端文案（避免模板字符串中的反斜杠被吞）。 */
	const clientText = {
		lang: opts.lang,
		errParse: tx('err_parse'),
		errCredits: tx('err_credits'),
		note: tx('result_note'),
		labelQp: tx('qp_label'),
		labelCredits: tx('credits_label'),
		labelCount: tx('courses_count_label'),
		stepRow: tx('step_row_tpl'),
		stepSum: tx('step_sum_tpl'),
		stepGpa: tx('step_gpa_tpl'),
	};

	const extraBodyHtml = `
  <script>
    (function () {
      /** 控件与文案。 */
      var form = document.getElementById('gpaForm');
      var coursesEl = document.getElementById('gpaCourses');
      var result = document.getElementById('gpaResult');
      var valueEl = document.getElementById('gpaValue');
      var rowsEl = document.getElementById('gpaRows');
      var stepsEl = document.getElementById('gpaSteps');
      var stepsWrap = document.getElementById('gpaStepsWrap');
      var noteEl = document.getElementById('gpaNote');
      var chips = document.getElementById('gpaChips');
      var T = ${JSON.stringify(clientText)};
      var sampleIndex = 0;
      var SAMPLES = [
        '4.0, 3\\n3.0, 3',
        '3.7, 3\\n3.3, 3',
        '4.0, 4\\n2.0, 2'
      ];

      /**
       * 格式化数字（拉丁数字）。
       * @param {number} n 数值
       * @param {number} digits 小数位
       * @returns {string}
       */
      function fmt(n, digits) {
        if (!isFinite(n)) return '—';
        var d = digits == null ? 2 : digits;
        try {
          return new Intl.NumberFormat(T.lang + '-u-nu-latn', {
            maximumFractionDigits: d,
            minimumFractionDigits: d
          }).format(n);
        } catch (e) {
          return n.toFixed(d);
        }
      }

      /**
       * 模板替换。
       * @param {string} tpl 模板
       * @param {Record<string,string>} map 占位符
       * @returns {string}
       */
      function fill(tpl, map) {
        var out = String(tpl || '');
        Object.keys(map).forEach(function (k) {
          out = out.split('{' + k + '}').join(map[k]);
        });
        return out;
      }

      /**
       * 按空白/逗号/分号拆分一行。
       * @param {string} line 一行原文
       * @returns {string[]}
       */
      function splitParts(line) {
        var parts = [];
        var buf = '';
        var s = String(line || '');
        for (var i = 0; i < s.length; i++) {
          var ch = s.charAt(i);
          if (ch === ',' || ch === ';' || ch === ' ' || ch === '\\t' || ch === '，' || ch === '、') {
            if (buf) { parts.push(buf); buf = ''; }
          } else {
            buf += ch;
          }
        }
        if (buf) parts.push(buf);
        return parts;
      }

      /**
       * 解析每行「成绩点, 学分」。
       * @param {string} raw 多行原文
       * @returns {{ok:true, rows:{g:number,c:number}[]}|{ok:false, err:string}}
       */
      function parseCourses(raw) {
        var lines = String(raw || '').split('\\n').map(function (l) { return l.replace(/\\r/g, '').trim(); }).filter(Boolean);
        if (!lines.length) return { ok: false, err: T.errParse };
        var rows = [];
        for (var i = 0; i < lines.length; i++) {
          var parts = splitParts(lines[i]);
          if (parts.length < 2) return { ok: false, err: T.errParse };
          var g = parseFloat(parts[0]);
          var c = parseFloat(parts[1]);
          if (!isFinite(g) || !isFinite(c)) return { ok: false, err: T.errParse };
          if (!(c > 0)) return { ok: false, err: T.errCredits };
          rows.push({ g: g, c: c });
        }
        return { ok: true, rows: rows };
      }

      /** 加权 GPA = Σ(g·c) / Σ(c)；写出质量分与步骤。 */
      function runCalc() {
        var parsed = parseCourses(coursesEl.value);
        result.style.display = 'block';
        rowsEl.innerHTML = '';
        stepsEl.innerHTML = '';
        if (!parsed.ok) {
          valueEl.textContent = '—';
          stepsWrap.style.display = 'none';
          noteEl.className = 'muted gpa-err';
          noteEl.textContent = parsed.err;
          return false;
        }
        var sumGC = 0;
        var sumC = 0;
        var stepLis = [];
        for (var i = 0; i < parsed.rows.length; i++) {
          var g = parsed.rows[i].g;
          var c = parsed.rows[i].c;
          var qc = g * c;
          sumGC += qc;
          sumC += c;
          stepLis.push('<li>' + fill(T.stepRow, {
            n: String(i + 1),
            g: fmt(g, 2),
            c: fmt(c, 2),
            qc: fmt(qc, 2)
          }) + '</li>');
        }
        var gpa = sumGC / sumC;
        valueEl.textContent = fmt(gpa, 2);
        rowsEl.innerHTML =
          '<div class="gpa-row"><strong>' + T.labelQp + ':</strong> ' + fmt(sumGC, 2) + '</div>' +
          '<div class="gpa-row"><strong>' + T.labelCredits + ':</strong> ' + fmt(sumC, 2) + '</div>' +
          '<div class="gpa-row"><strong>' + T.labelCount + ':</strong> ' + String(parsed.rows.length) + '</div>';
        stepLis.push('<li>' + fill(T.stepSum, { qp: fmt(sumGC, 2), credits: fmt(sumC, 2) }) + '</li>');
        stepLis.push('<li>' + fill(T.stepGpa, { qp: fmt(sumGC, 2), credits: fmt(sumC, 2), gpa: fmt(gpa, 2) }) + '</li>');
        stepsEl.innerHTML = stepLis.join('');
        stepsWrap.style.display = '';
        noteEl.className = 'muted';
        noteEl.textContent = T.note;
        return true;
      }

      /** 轮换样例。 */
      function loadSample() {
        coursesEl.value = SAMPLES[sampleIndex % SAMPLES.length];
        sampleIndex += 1;
        runCalc();
      }

      /**
       * 在 textarea 末尾追加一行绩点（学分由用户补）。
       * @param {string} points 绩点字符串
       */
      function insertPoints(points) {
        var cur = String(coursesEl.value || '');
        var needsNl = cur.length > 0 && !/\\n\\s*$/.test(cur);
        coursesEl.value = cur + (needsNl ? '\\n' : '') + points + ', ';
        coursesEl.focus();
      }

      form.addEventListener('submit', function (e) {
        e.preventDefault();
        runCalc();
      });
      document.getElementById('gpaSample').addEventListener('click', loadSample);
      document.getElementById('gpaClear').addEventListener('click', function () {
        form.reset();
        coursesEl.value = '';
        result.style.display = 'none';
      });
      if (chips) {
        chips.addEventListener('click', function (e) {
          var t = e.target;
          if (!t || !t.getAttribute) return;
          var pts = t.getAttribute('data-points');
          if (pts) insertPoints(pts);
        });
      }
      loadSample();
    })();
  </script>`;

	const toolMeta = getToolBySlug('how-to-calculate-gpa');
	const toolSeoHtml = toolMeta
		? renderToolExtraSections({ lang: opts.lang, defaultLang: opts.defaultLang, tool: toolMeta })
		: '';
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
