# -*- coding: utf-8 -*-
"""
Bing SERP 采集与分析公用包（CloakBrowser）。

用途
----
为 keyword-to-tool 漏斗批量查询 Bing，记录前排有机结果摘要，并草稿
``competition_tier`` / 结果类型，供 Agent 写入 ``docs/seo/serp-batches/``。

合规
----
- 默认只落脱敏 JSON / Markdown，不入库完整 SERP HTML。
- 查询间隔可调；调用方须自行遵守搜索引擎 ToS / 频率限制。
- 禁止把前排正文抄进工具 i18n。

入口
----
``python ops/seo/bing_serp/run_bing_serp.py --help``
"""

from __future__ import annotations

# 包版本：行为变更时递增，写入每次运行的 meta
__version__ = "0.1.1"
