Date: 2026-08-08 16:22
Summary: Verified localhost /zh/ type scale hierarchy PASS; CSS tokens and new card classes live.

[question]
核查：http://localhost:8788/zh/

[try to solve]
用浏览器式 Accept: text/html 请求 `/zh/` → 200；`site.css` 与 bootstrap/fonts vendor 200。阶梯实测：Hero 30–36 → 区块 22–24 → 分类 20 → Why/推荐卡标题 17 → 分类卡 16 → 正文 15 → 次要 14 → pill 12，ORDER PASS。HTML 已无 h5/h6/small 抢尺寸。说明：curl 默认 Accept 不含 text/html 时路由会 404（设计如此），浏览器正常。

[actions]
