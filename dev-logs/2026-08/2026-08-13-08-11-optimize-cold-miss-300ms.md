Date: 2026-08-13 08:11
Summary: Ranked ways to cut tool-page cold miss ~300ms (warm, plaintext R2, region, Assets).

[question]
怎么优化第一次访问的333ms

[try to solve]
333ms 是 SEA PoP 上 Cache miss：Worker 内 R2 get + gunzip + 组响应，不是传输慢。优先：1) 发版后预热（sitemap/热门 URL curl 或脚本写 Cache），让真实用户少遇 miss；2) R2 改存明文跳过 gunzip（测 R2 更大对象是否抵消）；3) 确认桶地域靠近主流量；4) 热门工具像首页进 Assets；5) Tiered Cache/Cache Reserve 降跨 PoP 冷。不推荐为省这 300ms 去掉 Worker。流式 gunzip 收益有限。先做预热 ROI 最高。

[actions]
- （只读优化建议）
