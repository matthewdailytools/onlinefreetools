# -*- coding: utf-8 -*-
"""
SERP 结果类型与 competition_tier 草稿启发式。

说明
----
这些规则是**研究辅助**，不能替代人工对照长尾缺口策略；
入池前须由 Agent / 人工复核 ``competition_tier`` 与 ``verdict``。
"""

from __future__ import annotations

import re
from typing import Any
from urllib.parse import urlparse

# —— 域名 / 标题启发：用于 result_type ——

# 百科 / 权威定义类
_WIKI_HOSTS = (
    "wikipedia.org",
    "wiktionary.org",
    "britannica.com",
)

# 文档 / 云厂商 / RFC 类
_DOCS_HOSTS = (
    "docs.aws.amazon.com",
    "learn.microsoft.com",
    "cloud.google.com",
    "developer.mozilla.org",
    "datatracker.ietf.org",
    "tools.ietf.org",
    "rfc-editor.org",
    "developer.hashicorp.com",
    "developer.hashicorp.org.cn",
    "registry.terraform.io",
    "kubernetes.io",
    "help.aliyun.com",
    "docs.azure.cn",
)

# UGC / 问答 / 论坛
_FORUM_HOSTS = (
    "reddit.com",
    "stackoverflow.com",
    "stackexchange.com",
    "quora.com",
    "superuser.com",
    "serverfault.com",
    "github.com",  # issue/discussion 常当 UGC；docs 站另判
    "medium.com",
    "dev.to",
    "cnblogs.com",
    "csdn.net",
    "blog.csdn.net",
    "juejin.cn",
    "zhihu.com",
    "zhuanlan.zhihu.com",
    "developer.aliyun.com",  # 社区文章为主，非官方产品文档
)

# 已知网络计算器 / 泛工具站（头词占位信号）
_TOOL_HOSTS = (
    "omnicalculator.com",
    "calculator.net",
    "subnet-calculator.com",
    "mxtoolbox.com",
    "ipaddressguide.com",
    "cidr.xyz",
    "tooldone.com",
    "onlinefreetools.org",
)

# 标题里暗示可交互计算器的词
_TOOL_TITLE_RE = re.compile(
    r"\b(calculator|converter|generator|checker|tool|online)\b",
    re.I,
)

# 标题像速查表 / PDF
_CHART_TITLE_RE = re.compile(
    r"\b(chart|cheat\s*sheet|table|poster|pdf)\b",
    re.I,
)


def _host_matches(domain: str, suffixes: tuple[str, ...]) -> bool:
    """
    判断 domain 是否等于或为某后缀的子域。

    参数
    ----
    domain:
        小写域名。
    suffixes:
        后缀元组。
    """
    d = (domain or "").lower()
    for s in suffixes:
        if d == s or d.endswith("." + s):
            return True
    return False


def classify_result_type(row: dict[str, Any]) -> str:
    """
    将单条有机结果标为粗类型。

    返回值之一
    ----------
    ``tool`` / ``docs`` / ``wiki`` / ``forum`` / ``chart`` / ``brand`` / ``other``
    """
    domain = (row.get("domain") or "").lower()
    title = row.get("title") or ""
    url = (row.get("url") or "").lower()

    if _host_matches(domain, _WIKI_HOSTS):
        return "wiki"
    if _host_matches(domain, _DOCS_HOSTS) or "/docs/" in url or "/documentation" in url:
        return "docs"
    if _host_matches(domain, _FORUM_HOSTS):
        return "forum"
    if _host_matches(domain, _TOOL_HOSTS) or _TOOL_TITLE_RE.search(title):
        return "tool"
    if _CHART_TITLE_RE.search(title) or url.endswith(".pdf"):
        return "chart"
    # 极短域名首页常是品牌导航
    path = urlparse(row.get("url") or "").path or "/"
    if path in ("/", "") and domain and not _TOOL_TITLE_RE.search(title):
        return "brand"
    return "other"


def draft_competition_tier(
    query: str,
    organic: list[dict[str, Any]],
    *,
    type_counts: dict[str, int] | None = None,
) -> dict[str, Any]:
    """
    根据前排结果类型草稿 competition_tier 与 gap_notes。

    参数
    ----
    query:
        查询词。
    organic:
        已带 ``result_type`` 的有机结果（若无则现场 classify）。
    type_counts:
        可选预聚合；缺省则从 organic 统计。

    返回
    ----
    含 ``competition_tier`` / ``gap_notes`` / ``serp_type_summary`` /
    ``top_domains`` / ``has_interactive_tool_signal`` 的字典。
    """
    # 补全类型
    typed: list[dict[str, Any]] = []
    for row in organic:
        r = dict(row)
        if "result_type" not in r:
            r["result_type"] = classify_result_type(r)
        typed.append(r)

    counts: dict[str, int] = dict(type_counts or {})
    if not counts:
        for r in typed:
            t = r["result_type"]
            counts[t] = counts.get(t, 0) + 1

    tool_n = counts.get("tool", 0)
    docs_n = counts.get("docs", 0)
    wiki_n = counts.get("wiki", 0)
    forum_n = counts.get("forum", 0)
    chart_n = counts.get("chart", 0)
    other_n = counts.get("other", 0) + counts.get("brand", 0)

    top_domains = []
    seen_d: set[str] = set()
    for r in typed[:10]:
        d = r.get("domain") or ""
        if d and d not in seen_d:
            seen_d.add(d)
            top_domains.append(d)

    # 短通用词 → 更可能是 head（启发式，人工可改）
    token_n = len(re.findall(r"[a-z0-9]+", query.lower()))
    short_headish = token_n <= 2 and tool_n >= 3

    has_tool = tool_n >= 1
    # 前 5 名里工具站数量
    top5_tools = sum(1 for r in typed[:5] if r.get("result_type") == "tool")

    if short_headish or top5_tools >= 3:
        tier = "head"
        gap = (
            f"前排工具站密集（tool≈{tool_n}）；短词/头词倾向，默认不进攻立项"
        )
    elif tool_n >= 2 or (tool_n >= 1 and docs_n >= 2):
        tier = "mid_covered"
        gap = (
            f"已有同意图工具或深文档（tool={tool_n}, docs={docs_n}）；"
            "无本站 slug 则 defer，有则 absorb"
        )
    elif forum_n + other_n + chart_n >= 3 and tool_n == 0:
        tier = "long_gap"
        gap = (
            f"前排偏论坛/薄页/图表（forum={forum_n}, chart={chart_n}, other≈{other_n}），"
            "缺可交互工具 → 优先评估 build/absorb"
        )
    elif wiki_n + docs_n >= 2 and tool_n == 0:
        tier = "long_gap"
        gap = (
            f"定义/文档占位（wiki={wiki_n}, docs={docs_n}）但无工具页；"
            "若用户任务是算/转/校验，可做交互缺口"
        )
    elif tool_n == 1 and forum_n + chart_n >= 1:
        tier = "long_gap"
        gap = (
            "仅零星工具信号 + UGC/表；核对是否极薄页后再标 long_gap"
        )
    else:
        tier = "mid_covered"
        gap = (
            f"混合 SERP（{counts}）；需人工点开前 3 名确认深度"
        )

    summary_parts = [f"{k}={v}" for k, v in sorted(counts.items()) if v]
    return {
        "competition_tier": tier,
        "gap_notes": gap,
        "serp_type_summary": ", ".join(summary_parts) or "empty",
        "top_domains": top_domains[:8],
        "has_interactive_tool_signal": has_tool,
        "type_counts": counts,
        "organic_typed": typed,
    }


def analyze_query_serp(query: str, organic: list[dict[str, Any]]) -> dict[str, Any]:
    """
    对单查询的有机结果做完整分析包装。

    参数
    ----
    query:
        搜索词。
    organic:
        ``parse_organic_results`` 产出。

    返回
    ----
    ``draft_competition_tier`` 的结果（含 typed organic）。
    """
    return draft_competition_tier(query, organic)
