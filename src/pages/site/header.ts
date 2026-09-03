/**
 * 全站顶栏 HTML：品牌、导航（含工具巨型菜单）、页面设置（原主题色）、语言切换。
 */
import type { SiteLang } from '../../site/i18n';
import { getLangLabel, t } from '../../site/i18n';
import { escapeHtml } from './layout';
import type { NavItem } from './nav';

/** 工具等入口：新标签打开时附带安全 rel */
const newTabAttrs = (openInNewTab?: boolean) =>
	openInNewTab ? ' target="_blank" rel="noopener noreferrer"' : '';

/** Buy Me a Coffee 打赏页（外链，新标签打开） */
const BUY_ME_A_COFFEE_URL = 'https://buymeacoffee.com/matthewxuax';

/**
 * 顶栏右侧打赏链接（Buy Me a Coffee）。
 * @param lang 当前页面语言
 */
const renderSupportLink = (lang: SiteLang): string => {
	const label = t(lang, 'nav_support');
	return `<a class="btn btn-outline-secondary btn-sm nav-support-link" href="${BUY_ME_A_COFFEE_URL}" target="_blank" rel="noopener noreferrer" title="${escapeHtml(label)}">
              <span class="nav-support-icon" aria-hidden="true">☕</span>
              <span class="d-none d-md-inline">${escapeHtml(label)}</span>
            </a>`;
};

/**
 * 将顶栏导航项渲染为 Bootstrap navbar HTML（链接 / 下拉 / 巨型菜单）。
 * @param items 导航项列表
 */
const renderNavItems = (items: NavItem[]): string =>
	items
		.map((item) => {
			if (item.type === 'mega') {
				/**
				 * 两级面板：左侧仅主题名（收起态），悬停主题后右侧再出该主题工具。
				 * 不用 Bootstrap dropdown，避免 display 被 JS 抢走。
				 */
				const cols = item.columns || [];
				const rail = cols
					.map((col, idx) => {
						const id = escapeHtml(col.id || `topic-${idx}`);
						const active = idx === 0 ? ' is-active' : '';
						const pressed = idx === 0 ? 'true' : 'false';
						return `<button type="button" class="tools-mega-topic${active}" data-topic-id="${id}" aria-controls="tools-mega-pane-${id}" aria-pressed="${pressed}">${escapeHtml(col.heading.label)}</button>`;
					})
					.join('');
				const panes = cols
					.map((col, idx) => {
						const id = escapeHtml(col.id || `topic-${idx}`);
						const hidden = idx === 0 ? '' : ' hidden';
						const active = idx === 0 ? ' is-active' : '';
						const links = (col.items || [])
							.map(
								(sub) =>
									`<a class="tools-mega-link" href="${escapeHtml(sub.href)}"${newTabAttrs(sub.openInNewTab)}>${escapeHtml(sub.label)}</a>`
							)
							.join('');
						return `<div class="tools-mega-pane${active}" id="tools-mega-pane-${id}" data-topic-id="${id}" role="region"${hidden}>
              <a class="tools-mega-hub" href="${escapeHtml(col.heading.href)}">${escapeHtml(col.heading.label)} →</a>
              <div class="tools-mega-pane-links">${links}</div>
            </div>`;
					})
					.join('');
				const toggleHref = item.href ? escapeHtml(item.href) : '#';
				return `<li class="nav-item nav-item--tools-mega">
          <a class="nav-link nav-link--tools-mega" href="${toggleHref}" aria-haspopup="true" aria-expanded="false" id="toolsMegaToggle">${escapeHtml(item.label)}</a>
          <div class="tools-mega-panel" role="menu" aria-labelledby="toolsMegaToggle">
            <div class="tools-mega-rail" role="tablist" aria-label="${escapeHtml(item.label)}">${rail}</div>
            <div class="tools-mega-stages">${panes}</div>
          </div>
        </li>`;
			}
			if (item.type === 'dropdown') {
				const menu = item.items
					.map(
						(sub) =>
							`<li><a class="dropdown-item" href="${escapeHtml(sub.href)}"${newTabAttrs(sub.openInNewTab)}>${escapeHtml(sub.label)}</a></li>`
					)
					.join('');
				return `<li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">${escapeHtml(item.label)}</a>
          <ul class="dropdown-menu">${menu}</ul>
        </li>`;
			}
			return `<li class="nav-item"><a class="nav-link" href="${escapeHtml(item.href)}"${newTabAttrs(item.openInNewTab)}>${escapeHtml(item.label)}</a></li>`;
		})
		.join('');

/**
 * 渲染全站顶栏（品牌、导航、页面设置、语言切换、可选侧栏开关）。
 */
export const renderHeader = (opts: {
	lang: SiteLang;
	brandHref: string;
	navItems: NavItem[];
	enabledLangs: SiteLang[];
	langAlternates: Record<string, string>;
	showSidebarToggle?: boolean;
}) => {
	const navHtml = renderNavItems(opts.navItems || []);

	const enabled = (opts.enabledLangs || []).length ? opts.enabledLangs : ([opts.lang] as SiteLang[]);
	const showLangSwitcher = enabled.length > 1;

	const otherLangLinks = showLangSwitcher
		? enabled
				.map((code) => {
					const href = code === opts.lang ? null : opts.langAlternates[code];
					const label = getLangLabel(code);
					if (!href) {
						return `<li><span class="dropdown-item active" aria-current="true">${escapeHtml(label)}</span></li>`;
					}
					return `<li><a class="dropdown-item" href="${escapeHtml(href)}" data-lang-pref="${escapeHtml(code)}">${escapeHtml(label)}</a></li>`;
				})
				.join('')
		: '';

	const currentLabel = getLangLabel(opts.lang);

	/**
	 * 点击语言菜单写入 `oft_lang`；浏览器语言与页面不一致时展示提示条（最多 3 次，5 秒自动消失）。
	 * Cookie 名与 `src/site/lang.ts` 的 LANG_PREF_COOKIE / LANG_HINT_COUNT_COOKIE 一致。
	 */
	const langChromeScript = showLangSwitcher
		? `<script>(function(){
  var PREF='oft_lang', COUNT='oft_lang_hint_n', MAX=3, MAX_AGE=31536000;
  function secure(){return location.protocol==='https:'?'; Secure':'';}
  function getC(n){try{var m=document.cookie.match(new RegExp('(?:^|; )'+n+'=([^;]*)'));return m?decodeURIComponent(m[1]):'';}catch(e){return '';}}
  function setC(n,v){try{document.cookie=n+'='+encodeURIComponent(v)+'; Path=/; Max-Age='+MAX_AGE+'; SameSite=Lax'+secure();}catch(e){}}
  document.addEventListener('click',function(e){
    var t=e.target;if(!t||!t.closest)return;
    var a=t.closest('a[data-lang-pref]');
    if(a){var lang=a.getAttribute('data-lang-pref');if(lang)setC(PREF,lang);}
  },true);
  function runHint(){
    if(getC(PREF))return;
    var shown=parseInt(getC(COUNT)||'0',10)||0;
    if(shown>=MAX)return;
    var bar=document.getElementById('langHintBar');
    if(!bar)return;
    var pageLang=bar.getAttribute('data-page-lang')||'';
    var enabled=[];
    try{enabled=JSON.parse(bar.getAttribute('data-enabled')||'[]');}catch(e){}
    var labels={};
    try{labels=JSON.parse(bar.getAttribute('data-labels')||'{}');}catch(e){}
    var msgT=bar.getAttribute('data-msg')||'';
    var nav=navigator.languages&&navigator.languages.length?navigator.languages:[navigator.language];
    var detected=null;
    for(var i=0;i<nav.length;i++){
      var p=String(nav[i]||'').toLowerCase().split('-')[0];
      if(p&&enabled.indexOf(p)>=0&&p!==pageLang){detected=p;break;}
    }
    if(!detected)return;
    var href='';
    var link=document.querySelector('link[rel="alternate"][hreflang="'+detected+'"]');
    if(link)href=link.getAttribute('href')||'';
    if(href){
      try{var u=new URL(href,location.href);href=u.pathname+u.search+u.hash;}catch(e){}
    }
    if(!href){
      var path=location.pathname.replace(/^\\/(en|zh|es|ar|pt|id|fr|ja|ru|de)(?=\\/|$)/,'')||'/';
      href=detected==='en'?path:('/'+detected+(path==='/'?'/':path));
    }
    setC(COUNT,String(shown+1));
    var label=labels[detected]||detected;
    var textEl=bar.querySelector('[data-lang-hint-text]');
    if(textEl)textEl.textContent=msgT.split('{lang}').join(label);
    bar.hidden=false;
    bar.setAttribute('aria-hidden','false');
    document.documentElement.style.setProperty('--lang-hint-h',bar.offsetHeight+'px');
    var timer=setTimeout(hide,5000);
    function hide(){
      clearTimeout(timer);
      bar.hidden=true;
      bar.setAttribute('aria-hidden','true');
      document.documentElement.style.setProperty('--lang-hint-h','0px');
    }
    var dismiss=bar.querySelector('[data-lang-hint-dismiss]');
    var go=bar.querySelector('[data-lang-hint-switch]');
    if(dismiss)dismiss.addEventListener('click',hide);
    if(go)go.addEventListener('click',function(){setC(PREF,detected);location.href=href;});
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',runHint);
  else runHint();
})();</script>`
		: '';

	const labelsJson = Object.fromEntries(enabled.map((code) => [code, getLangLabel(code)]));
	const langHintBar = showLangSwitcher
		? `<div id="langHintBar" class="lang-hint-bar" hidden aria-hidden="true" role="status"
    data-page-lang="${escapeHtml(opts.lang)}"
    data-enabled="${escapeHtml(JSON.stringify(enabled))}"
    data-labels="${escapeHtml(JSON.stringify(labelsJson))}"
    data-msg="${escapeHtml(t(opts.lang, 'lang_hint_message'))}">
    <div class="lang-hint-bar__inner">
      <p class="lang-hint-bar__text mb-0" data-lang-hint-text></p>
      <div class="lang-hint-bar__actions">
        <button type="button" class="btn btn-sm btn-primary" data-lang-hint-switch>${escapeHtml(t(opts.lang, 'lang_hint_switch'))}</button>
        <button type="button" class="btn btn-sm btn-outline-secondary" data-lang-hint-dismiss>${escapeHtml(t(opts.lang, 'lang_hint_dismiss'))}</button>
      </div>
    </div>
  </div>`
		: '';

	/** 页面设置：四套品牌配色（原「页面主题」）。 */
	const pageSettingsSwitcher = `
          <div class="dropdown theme-switcher">
            <button class="btn btn-outline-secondary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" aria-label="${escapeHtml(t(opts.lang, 'theme_label'))}">
              <span class="theme-swatch" data-theme-swatch aria-hidden="true"></span>
              <span class="d-none d-md-inline">${escapeHtml(t(opts.lang, 'theme_label'))}</span>
            </button>
            <ul class="dropdown-menu dropdown-menu-end">
              <li><button type="button" class="dropdown-item theme-option" data-theme-set="teal"><span class="theme-swatch theme-swatch--teal" aria-hidden="true"></span>${escapeHtml(t(opts.lang, 'theme_teal'))}</button></li>
              <li><button type="button" class="dropdown-item theme-option" data-theme-set="green"><span class="theme-swatch theme-swatch--green" aria-hidden="true"></span>${escapeHtml(t(opts.lang, 'theme_green'))}</button></li>
              <li><button type="button" class="dropdown-item theme-option" data-theme-set="amber"><span class="theme-swatch theme-swatch--amber" aria-hidden="true"></span>${escapeHtml(t(opts.lang, 'theme_amber'))}</button></li>
              <li><button type="button" class="dropdown-item theme-option" data-theme-set="navy"><span class="theme-swatch theme-swatch--navy" aria-hidden="true"></span>${escapeHtml(t(opts.lang, 'theme_navy'))}</button></li>
            </ul>
          </div>`;

	return `
  <header>
    <nav class="navbar navbar-expand-lg navbar-light site-navbar border-bottom fixed-top">
      <div class="container-fluid">
			${
				opts.showSidebarToggle === false
					? ''
					: '<button class="btn btn-outline-secondary me-2" id="sidebarToggle" aria-label="Toggle sidebar"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="6" width="18" height="2" rx="1" fill="currentColor"/><rect x="3" y="11" width="18" height="2" rx="1" fill="currentColor" opacity="0.9"/><rect x="3" y="16" width="18" height="2" rx="1" fill="currentColor" opacity="0.8"/></svg></button>'
			}
        <a class="navbar-brand" href="${escapeHtml(opts.brandHref)}">
          <img class="navbar-brand-logo" src="/brand-logo.svg" width="28" height="28" alt="" decoding="async" />
          <span class="navbar-brand-text">${escapeHtml(t(opts.lang, 'brand'))}</span>
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#topNav" aria-controls="topNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="topNav">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">${navHtml}</ul>
          <div class="d-flex align-items-center gap-2 ms-lg-2">
            ${pageSettingsSwitcher}
            ${
				showLangSwitcher
					? `
          <div class="dropdown js-lang-switcher">
            <button class="btn btn-outline-secondary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              ${escapeHtml(currentLabel)}
            </button>
            <ul class="dropdown-menu dropdown-menu-end">${otherLangLinks}</ul>
          </div>`
					: ''
			}
            ${renderSupportLink(opts.lang)}
          </div>
        </div>
      </div>
    </nav>
    ${langHintBar}
  </header>
  ${langChromeScript}`;
};
