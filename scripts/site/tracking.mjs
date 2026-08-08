/**
 * 站点统计片段：仅 Microsoft Clarity（官方服务器 https://www.clarity.ms/tag/）。
 * 在 window.load 后空闲注入，避免外网不可达时拖慢首屏。
 */

/**
 * 生成延迟注入的第三方脚本包装。
 * @param {string} innerJs 真正加载统计的 JS 函数体（不含外层 script 标签）
 * @returns {string} HTML script 片段
 */
const deferUntilIdleAfterLoad = (innerJs) => `
<script>
(function () {
  function run() {
    try {
${innerJs}
    } catch (e) {}
  }
  function schedule() {
    if (typeof requestIdleCallback === 'function') requestIdleCallback(run, { timeout: 4000 });
    else setTimeout(run, 2000);
  }
  if (document.readyState === 'complete') schedule();
  else window.addEventListener('load', schedule, { once: true });
})();
</script>`;

/** Clarity 官方标签（保持服务器链接，不本地托管）。 */
const clarityInject = `
    (function(c,l,a,r,i,t,y){
      c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
      t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
      y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "xbc0iytpn7");`;

/**
 * 返回可插入布局的统计 HTML。
 * @returns {{ headHtml: string, bodyHtml: string }}
 */
export const getTrackingSnippets = () => {
  const headHtml = process.env.SITE_TRACKING_HEAD_HTML || '';
  const bodyHtml = process.env.SITE_TRACKING_BODY_HTML || '';

  return {
    headHtml: String(headHtml) + deferUntilIdleAfterLoad(clarityInject),
    bodyHtml: String(bodyHtml),
  };
};
