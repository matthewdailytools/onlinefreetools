const clarityScript = `
<script type="text/javascript">
(function(c,l,a,r,i,t,y){
  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
})(window, document, "clarity", "script", "xbc0iytpn7");
</script>`;

export const getTrackingSnippets = () => {
  const headHtml = process.env.SITE_TRACKING_HEAD_HTML || '';
  const bodyHtml = process.env.SITE_TRACKING_BODY_HTML || '';

  // Baidu Analytics (hm.baidu.com)
  const baiduScript = `
<script>
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?39f18c089a03779cd05243e21b046589";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();
</script>`;

  return {
    headHtml: String(headHtml) + baiduScript + clarityScript,
    bodyHtml: String(bodyHtml),
  };
};
