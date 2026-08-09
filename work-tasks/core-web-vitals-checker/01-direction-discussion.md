# 01 — 方向讨论

**主方向**：**A.12** 站长 / SEO 辅助（技术侧）+ 场景 **B3** 站长上线检查 / SEO where2use「性能与 Core Web Vitals」模块。  
**不选** B 纯格式桥、C 行业计算器主挂（财务/健康）。

**依据**：[Microsoft Clarity Performance metrics](https://learn.microsoft.com/zh-cn/clarity/insights/performance-widget)（与 [en-US](https://learn.microsoft.com/en-us/clarity/insights/performance-widget)）对齐行业 Core Web Vitals（LCP / INP / CLS）；Clarity 自 2025-01 用 INP 替代 FID。

**红线**：
- 不做自建 Lighthouse 农场 / 假「SEO Score」黑箱。
- 不拆 LCP/INP/CLS 三个 doorway URL。
- 不冒充实时抓站测量；本工具对**用户粘贴的实测值**按公开阈值评级，并展示成因/改进（Clarity 文档 + Google/web.dev 分档）。
- 文案注明：Clarity 展示 p75；本页评级规则可见。

**结论**：立项 `core-web-vitals-checker`；`scenario: seo`；Related → 图片压缩/优化 + Headers。
