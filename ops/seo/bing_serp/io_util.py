# -*- coding: utf-8 -*-
"""
查询词加载与 SERP 运行结果落盘（JSON / 脱敏 Markdown）。

JSON 默认写在 ``.cache/serp/bing/``（已被仓库 .gitignore）；
Markdown 默认按主题写入 ``docs/seo/keywords/{theme}/``（``--theme``），
未指定主题时回退 ``docs/seo/serp-batches/``。
"""

from __future__ import annotations

import csv
import json
import logging
import re
from datetime import datetime
from pathlib import Path
from typing import Any, Iterable

# 日志
logger = logging.getLogger("bing_serp.io")

# 仓库根：ops/seo/bing_serp/io_util.py → parents[3]
REPO_ROOT = Path(__file__).resolve().parents[3]

# 默认缓存目录（不入库）
DEFAULT_CACHE_DIR = REPO_ROOT / ".cache" / "serp" / "bing"

# 跨主题/试点批次目录（无 --theme 时的回退）
DEFAULT_BATCH_DIR = REPO_ROOT / "docs" / "seo" / "serp-batches"

# 主题词表根目录
KEYWORDS_ROOT = REPO_ROOT / "docs" / "seo" / "keywords"


def theme_batch_dir(theme: str) -> Path:
    """
    解析主题归档目录 ``docs/seo/keywords/{theme}/``。

    参数
    ----
    theme:
        主题短名（kebab-case），如 ``cidr``。

    返回
    ----
    主题目录 Path（不自动创建）。
    """
    # 只允许安全路径段，防止目录穿越
    safe = re.sub(r"[^\w\-]+", "-", (theme or "").strip()).strip("-").lower()
    if not safe:
        raise ValueError("theme 不能为空")
    return KEYWORDS_ROOT / safe


def resolve_batch_dir(*, theme: str | None = None, batch_dir: str | Path | None = None) -> Path:
    """
    决定 Markdown 批次输出目录。

    优先级：显式 ``batch_dir`` > ``theme`` 主题夹 > 默认 ``serp-batches``。

    参数
    ----
    theme:
        主题名；非空则指向 ``keywords/{theme}/``。
    batch_dir:
        调用方覆盖路径。

    返回
    ----
    输出目录 Path。
    """
    if batch_dir is not None and str(batch_dir).strip():
        return Path(batch_dir)
    if theme and str(theme).strip():
        return theme_batch_dir(theme)
    return DEFAULT_BATCH_DIR


def load_queries(
    *,
    queries: list[str] | None = None,
    file_path: str | Path | None = None,
    column: str | None = None,
) -> list[str]:
    """
    合并 CLI 词表与文件词表，去重保序。

    参数
    ----
    queries:
        直接传入的查询列表。
    file_path:
        ``.txt``（一行一词）、``.csv`` / ``.tsv``（见 column）。
    column:
        表格列名；默认尝试 ``关键词`` / ``keyword`` / ``candidate`` / ``query``，
        否则取第二列（Bing Planner）或第一列。

    返回
    ----
    非空查询字符串列表。
    """
    out: list[str] = []
    seen: set[str] = set()

    def _add(raw: str) -> None:
        # 去掉首尾空白与包围引号
        q = (raw or "").strip().strip('"').strip("'")
        if not q or q.startswith("#"):
            return
        key = q.lower()
        if key in seen:
            return
        seen.add(key)
        out.append(q)

    for q in queries or []:
        _add(q)

    if file_path:
        path = Path(file_path)
        if not path.is_file():
            raise FileNotFoundError(f"queries file not found: {path}")
        text = path.read_text(encoding="utf-8-sig")
        suffix = path.suffix.lower()
        if suffix in (".csv", ".tsv"):
            delim = "\t" if suffix == ".tsv" else ","
            reader = csv.DictReader(text.splitlines(), delimiter=delim)
            fieldnames = reader.fieldnames or []
            # 解析目标列
            col = column
            if not col:
                for cand in ("关键词", "keyword", "candidate", "query", "Keyword", "Query"):
                    if cand in fieldnames:
                        col = cand
                        break
            if not col and fieldnames:
                # Bing Planner 常见：广告组,关键词,...
                col = fieldnames[1] if len(fieldnames) > 1 else fieldnames[0]
            for row in reader:
                if not col:
                    break
                _add(row.get(col) or "")
        else:
            for line in text.splitlines():
                _add(line)

    return out


def ensure_run_dir(out_dir: Path, batch_id: str) -> Path:
    """
    创建本次运行目录 ``{out_dir}/{batch_id}/``。

    参数
    ----
    out_dir:
        根输出目录。
    batch_id:
        批次短 id。

    返回
    ----
    已创建的目录 Path。
    """
    run_dir = out_dir / batch_id
    run_dir.mkdir(parents=True, exist_ok=True)
    return run_dir


def write_query_json(run_dir: Path, query: str, payload: dict[str, Any]) -> Path:
    """
    将单查询完整结构化结果写入 JSON（仍不含 HTML）。

    参数
    ----
    run_dir:
        运行目录。
    query:
        查询词（用于文件名 slug）。
    payload:
        可 JSON 序列化的字典。

    返回
    ----
    写出文件路径。
    """
    slug = re.sub(r"[^\w\-]+", "-", query.lower()).strip("-")[:80] or "query"
    path = run_dir / f"{slug}.json"
    path.write_text(
        json.dumps(payload, ensure_ascii=False, indent=2),
        encoding="utf-8",
    )
    logger.info("wrote %s", path)
    return path


def write_run_manifest(run_dir: Path, manifest: dict[str, Any]) -> Path:
    """
    写入整批 ``manifest.json``（索引所有查询）。

    参数
    ----
    run_dir:
        运行目录。
    manifest:
        清单字典。

    返回
    ----
    文件路径。
    """
    path = run_dir / "manifest.json"
    path.write_text(
        json.dumps(manifest, ensure_ascii=False, indent=2),
        encoding="utf-8",
    )
    logger.info("wrote %s", path)
    return path


def render_batch_markdown(
    *,
    batch_id: str,
    mkt: str,
    method_note: str,
    seed_queries: Iterable[str],
    rows: list[dict[str, Any]],
) -> str:
    """
    生成可放入主题夹或 ``docs/seo/serp-batches/`` 的脱敏 Markdown 正文。

    参数
    ----
    batch_id:
        如 ``2026-08-28-cidr-bing-serp``。
    mkt:
        市场代码。
    method_note:
        方法说明（无密钥）。
    seed_queries:
        种子/本批查询列表。
    rows:
        每查询分析结果（含 organic 摘要与 tier）。

    返回
    ----
    Markdown 字符串。
    """
    seeds = ", ".join(f"`{q}`" for q in list(seed_queries)[:20])
    lines: list[str] = [
        f"# SERP batch {batch_id}",
        "",
        f"- locale / gl: Bing ``{mkt}``",
        f"- seed queries: {seeds}",
        f"- method note: {method_note}",
        f"- captured_at: {datetime.now().strftime('%Y-%m-%d %H:%M')}",
        "- storage: 本文件为脱敏摘要；完整结构化 JSON 在本地 ``.cache/serp/bing/``（不入库）",
        "",
        "## Candidates (from Bing SERP)",
        "",
        "| candidate | top domains | SERP types | competition_tier (draft) | gap (draft) |",
        "|---|---|---|---|---|",
    ]
    for row in rows:
        q = row.get("query", "")
        analysis = row.get("analysis") or {}
        domains = ", ".join(analysis.get("top_domains") or [])[:120]
        types = analysis.get("serp_type_summary") or ""
        tier = analysis.get("competition_tier") or ""
        gap = (analysis.get("gap_notes") or "").replace("|", "/")
        lines.append(f"| {q} | {domains} | {types} | {tier} | {gap} |")

    lines.extend(
        [
            "",
            "## Organic top results (title + domain only)",
            "",
        ]
    )
    for row in rows:
        q = row.get("query", "")
        lines.append(f"### `{q}`")
        lines.append("")
        organic = (row.get("analysis") or {}).get("organic_typed") or row.get("organic") or []
        if not organic:
            lines.append("_No organic results parsed._")
            lines.append("")
            continue
        for item in organic[:10]:
            rank = item.get("rank", "?")
            title = (item.get("title") or "").replace("|", "/")
            domain = item.get("domain") or ""
            rtype = item.get("result_type") or ""
            lines.append(f"{rank}. **{title}** — `{domain}` ({rtype})")
        # 相关搜索
        related = row.get("related_searches") or []
        if related:
            lines.append("")
            lines.append("Related: " + "; ".join(related[:10]))
        paa = row.get("people_also_ask") or []
        if paa:
            lines.append("")
            lines.append("PAA-ish: " + "; ".join(paa[:8]))
        lines.append("")

    lines.extend(
        [
            "## Next steps",
            "",
            "- 人工 / Agent 复核 ``competition_tier`` 后，抽约 10 条写入 ``keyword-daily-pool.tsv``",
            "- 禁止把本摘要中的竞品标题套路成空壳工具页",
            "- 开 ``work-tasks/`` 须另决议，本脚本不创建工具",
            "",
        ]
    )
    return "\n".join(lines)


def write_batch_markdown(batch_dir: Path, batch_id: str, body: str) -> Path:
    """
    将脱敏批次 Markdown 写入 ``{batch_dir}/{batch_id}.md``（主题夹或 serp-batches）。

    参数
    ----
    batch_dir:
        目标目录。
    batch_id:
        文件名（无扩展名）。
    body:
        Markdown 正文。

    返回
    ----
    写出路径。
    """
    batch_dir.mkdir(parents=True, exist_ok=True)
    # 文件名只保留安全字符
    safe_id = re.sub(r"[^\w.\-]+", "-", batch_id).strip("-")
    path = batch_dir / f"{safe_id}.md"
    path.write_text(body, encoding="utf-8")
    logger.info("wrote batch md %s", path)
    return path
