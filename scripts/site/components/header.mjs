/**
 * 构建侧顶栏 HTML：品牌、导航（含工具巨型菜单）、页面设置、语言切换。
 */
import { siteConfig, withExplicitLangPath, withLangPath } from '../config.mjs';
import { t } from '../i18n.mjs';

/** Buy Me a Coffee 打赏页（外链，新标签打开） */
const BUY_ME_A_COFFEE_URL = 'https://buymeacoffee.com/matthewxuax';

/**
 * 顶栏右侧打赏链接（Buy Me a Coffee）。
 * @param {string} lang 当前页面语言
 */
const renderSupportLink = (lang) => {
  const label = t(lang, 'nav_support');
  return `<a class="btn btn-outline-secondary btn-sm nav-support-link" href="${BUY_ME_A_COFFEE_URL}" target="_blank" rel="noopener noreferrer" title="${label}">
              <span class="nav-support-icon" aria-hidden="true">☕</span>
              <span class="d-none d-md-inline">${label}</span>
            </a>`;
};

/**
 * 语言下拉。
 * @param {{lang:string,langAlternates?:Record<string,string>}} opts
 */
const renderLangSwitcher = ({ lang, langAlternates }) => {
  if (!siteConfig.languages || siteConfig.languages.length <= 1) return '';

  const enabled = (siteConfig.enabledLangs && siteConfig.enabledLangs.length
    ? siteConfig.enabledLangs
    : [siteConfig.defaultLang]
  ).filter(Boolean);

  const current = lang;
  const currentLabel =
    (siteConfig.languages.find((l) => l.code === current) || { label: current }).label;

  if (enabled.length <= 1) {
    return `
      <div>
        <button class="btn btn-outline-secondary btn-sm" type="button" disabled aria-label="Language">
          ${currentLabel}
        </button>
      </div>`;
  }

  const links = enabled
    .map((code) => {
      const label = (siteConfig.languages.find((l) => l.code === code) || { label: code }).label;
      const href = code === current ? null : (langAlternates && langAlternates[code]) || withExplicitLangPath(code, '/');
      return href
        ? `<li><a class="dropdown-item" href="${href}" data-lang-pref="${code}">${label}</a></li>`
        : `<li><span class="dropdown-item active" aria-current="true">${label}</span></li>`;
    })
    .join('');

  return `
    <div class="dropdown js-lang-switcher">
      <button class="btn btn-outline-secondary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
        ${currentLabel}
      </button>
      <ul class="dropdown-menu dropdown-menu-end">${links}</ul>
    </div>`;
};

/**
 * 点击语言菜单时写入 `oft_lang` Cookie；浏览器语言与页面不一致时展示提示条（最多 3 次，10 秒自动消失）。
 * 提示条文案使用「检测到的语言」，不是当前页语言。
 * Cookie 名与 `src/site/lang.ts` 的 LANG_PREF_COOKIE / LANG_HINT_COUNT_COOKIE 一致。
 */
const LANG_CHROME_SCRIPT = `<script>(function(){
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
    var i18n={};
    try{i18n=JSON.parse(bar.getAttribute('data-i18n')||'{}');}catch(e){}
    var nav=navigator.languages&&navigator.languages.length?navigator.languages:[navigator.language];
    /** 取浏览器偏好列表中第一个受支持语言。 */
    var preferred=null;
    for(var i=0;i<nav.length;i++){
      var p=String(nav[i]||'').toLowerCase().split('-')[0];
      if(p&&enabled.indexOf(p)>=0){preferred=p;break;}
    }
    if(!preferred||preferred===pageLang)return;
    var detected=preferred;
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
    var copy=i18n[detected]||i18n[pageLang]||{};
    var label=labels[detected]||detected;
    var msgT=copy.message||'';
    var textEl=bar.querySelector('[data-lang-hint-text]');
    if(textEl)textEl.textContent=String(msgT).split('{lang}').join(label);
    var go=bar.querySelector('[data-lang-hint-switch]');
    var dismiss=bar.querySelector('[data-lang-hint-dismiss]');
    if(go&&copy.switch)go.textContent=copy.switch;
    if(dismiss&&copy.dismiss)dismiss.textContent=copy.dismiss;
    bar.hidden=false;
    bar.setAttribute('aria-hidden','false');
    if(detected==='ar')bar.setAttribute('dir','rtl');
    else bar.removeAttribute('dir');
    /** 用实测顶栏高度定位，避免 CSS --header-h 偏小或 z-index 低于 fixed-top 时被挡住。 */
    var navEl=document.querySelector('.navbar.site-navbar');
    var navH=navEl?Math.ceil(navEl.getBoundingClientRect().height):60;
    bar.style.top=navH+'px';
    document.body.style.setProperty('--header-h',navH+'px');
    var hintH=Math.ceil(bar.getBoundingClientRect().height)||bar.offsetHeight;
    document.documentElement.style.setProperty('--lang-hint-h',hintH+'px');
    document.body.style.setProperty('--lang-hint-h',hintH+'px');
    var timer=setTimeout(hide,10000);
    function hide(){
      clearTimeout(timer);
      bar.hidden=true;
      bar.setAttribute('aria-hidden','true');
      bar.style.top='';
      document.body.style.removeProperty('--header-h');
      document.body.style.removeProperty('--lang-hint-h');
      document.documentElement.style.setProperty('--lang-hint-h','0px');
    }
    if(dismiss)dismiss.addEventListener('click',hide);
    if(go)go.addEventListener('click',function(){setC(PREF,detected);location.href=href;});
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',runHint);
  else runHint();
})();</script>`;

/**
 * 渲染浏览器语言提示条（默认 hidden，由脚本按需显示）。
 * data-i18n 含各语文案；展示时用「检测到的语言」渲染，而非当前页语言。
 * @param {{lang:string,enabled:string[]}} opts
 */
const renderLangHintBar = ({ lang, enabled }) => {
  const labels = Object.fromEntries(
    (siteConfig.languages || []).map((l) => [l.code, l.label])
  );
  /** 各语言提示条文案：message / switch / dismiss */
  const i18nByLang = Object.fromEntries(
    enabled.map((code) => [
      code,
      {
        message: t(code, 'lang_hint_message'),
        switch: t(code, 'lang_hint_switch'),
        dismiss: t(code, 'lang_hint_dismiss'),
      },
    ])
  );
  const esc = (s) =>
    String(s)
      .replaceAll('&', '&amp;')
      .replaceAll('<', '&lt;')
      .replaceAll('>', '&gt;')
      .replaceAll('"', '&quot;');
  return `<div id="langHintBar" class="lang-hint-bar" hidden aria-hidden="true" role="status"
    data-page-lang="${esc(lang)}"
    data-enabled="${esc(JSON.stringify(enabled))}"
    data-labels="${esc(JSON.stringify(labels))}"
    data-i18n="${esc(JSON.stringify(i18nByLang))}">
    <div class="lang-hint-bar__inner">
      <p class="lang-hint-bar__text mb-0" data-lang-hint-text></p>
      <div class="lang-hint-bar__actions">
        <button type="button" class="btn btn-sm btn-primary" data-lang-hint-switch></button>
        <button type="button" class="btn btn-sm btn-outline-secondary" data-lang-hint-dismiss></button>
      </div>
    </div>
  </div>`;
};

/**
 * 渲染顶栏。
 * @param {object} opts
 */
export const renderHeader = ({
  lang,
  brandHref,
  navItems = [],
  showSidebarToggle = true,
  showSearch = false,
  showLangSwitcher = true,
  langAlternates,
}) => {
  /** 外链/工具链接：新标签打开时附带安全 rel */
  const linkAttrs = (item) =>
    item.openInNewTab ? ' target="_blank" rel="noopener noreferrer"' : '';

  const navHtml = navItems
    .map((item) => {
      if (item.type === 'mega') {
        /**
         * 两级面板：左侧仅主题名，悬停主题后右侧再出工具。
         * 不用 Bootstrap dropdown。
         */
        const cols = item.columns || [];
        const rail = cols
          .map((col, idx) => {
            const id = col.id || `topic-${idx}`;
            const active = idx === 0 ? ' is-active' : '';
            const pressed = idx === 0 ? 'true' : 'false';
            return `<button type="button" class="tools-mega-topic${active}" data-topic-id="${id}" aria-controls="tools-mega-pane-${id}" aria-pressed="${pressed}">${col.heading.label}</button>`;
          })
          .join('');
        const panes = cols
          .map((col, idx) => {
            const id = col.id || `topic-${idx}`;
            const hidden = idx === 0 ? '' : ' hidden';
            const active = idx === 0 ? ' is-active' : '';
            const links = (col.items || [])
              .map(
                (sub) =>
                  `<a class="tools-mega-link" href="${sub.href}"${linkAttrs(sub)}>${sub.label}</a>`,
              )
              .join('');
            return `<div class="tools-mega-pane${active}" id="tools-mega-pane-${id}" data-topic-id="${id}" role="region"${hidden}>
              <a class="tools-mega-hub" href="${col.heading.href}">${col.heading.label} →</a>
              <div class="tools-mega-pane-links">${links}</div>
            </div>`;
          })
          .join('');
        const toggleHref = item.href || '#';
        return `<li class="nav-item nav-item--tools-mega">
          <a class="nav-link nav-link--tools-mega" href="${toggleHref}" aria-haspopup="true" aria-expanded="false" id="toolsMegaToggle">${item.label}</a>
          <div class="tools-mega-panel" role="menu" aria-labelledby="toolsMegaToggle">
            <div class="tools-mega-rail" role="tablist" aria-label="${item.label}">${rail}</div>
            <div class="tools-mega-stages">${panes}</div>
          </div>
        </li>`;
      }
      if (item.type === 'dropdown') {
        const menu = (item.items || [])
          .map(
            (sub) =>
              `<li><a class="dropdown-item" href="${sub.href}"${linkAttrs(sub)}>${sub.label}</a></li>`,
          )
          .join('');
        return `<li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">${item.label}</a>
          <ul class="dropdown-menu">${menu}</ul>
        </li>`;
      }
      return `<li class="nav-item"><a class="nav-link" href="${item.href}"${linkAttrs(item)}>${item.label}</a></li>`;
    })
    .join('');

  /** 页面设置：四套品牌配色（原「页面主题」）。 */
  const pageSettingsSwitcher = `
            <div class="dropdown theme-switcher">
              <button class="btn btn-outline-secondary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" aria-label="${t(lang, 'theme_label')}">
                <span class="theme-swatch" data-theme-swatch aria-hidden="true"></span>
                <span class="d-none d-md-inline">${t(lang, 'theme_label')}</span>
              </button>
              <ul class="dropdown-menu dropdown-menu-end">
                <li><button type="button" class="dropdown-item theme-option" data-theme-set="teal"><span class="theme-swatch theme-swatch--teal" aria-hidden="true"></span>${t(lang, 'theme_teal')}</button></li>
                <li><button type="button" class="dropdown-item theme-option" data-theme-set="green"><span class="theme-swatch theme-swatch--green" aria-hidden="true"></span>${t(lang, 'theme_green')}</button></li>
                <li><button type="button" class="dropdown-item theme-option" data-theme-set="amber"><span class="theme-swatch theme-swatch--amber" aria-hidden="true"></span>${t(lang, 'theme_amber')}</button></li>
                <li><button type="button" class="dropdown-item theme-option" data-theme-set="navy"><span class="theme-swatch theme-swatch--navy" aria-hidden="true"></span>${t(lang, 'theme_navy')}</button></li>
              </ul>
            </div>`;

  return `
  <header>
    <nav class="navbar navbar-expand-lg navbar-light site-navbar border-bottom fixed-top">
      <div class="container-fluid">
        ${
          showSidebarToggle
            ? '<button class="btn btn-outline-secondary me-2" id="sidebarToggle" aria-label="Toggle sidebar">☰</button>'
            : ''
        }
        <a class="navbar-brand" href="${brandHref}">
          <img class="navbar-brand-logo" src="/brand-logo.svg" width="28" height="28" alt="" decoding="async" />
          <span class="navbar-brand-text">${t(lang, 'brand')}</span>
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#topNav" aria-controls="topNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="topNav">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">${navHtml}</ul>
          <div class="d-flex align-items-center gap-2 ms-lg-2">
            ${pageSettingsSwitcher}
            ${showLangSwitcher ? renderLangSwitcher({ lang, langAlternates }) : ''}
            ${renderSupportLink(lang)}
          </div>
        </div>
      </div>
    </nav>
    ${showLangSwitcher ? renderLangHintBar({ lang, enabled: (siteConfig.enabledLangs || [lang]).filter(Boolean) }) : ''}
  </header>
  ${showLangSwitcher ? LANG_CHROME_SCRIPT : ''}`;
};
