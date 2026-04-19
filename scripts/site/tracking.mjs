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
    headHtml: String(headHtml) + baiduScript,
    bodyHtml: String(bodyHtml),
  };
};
