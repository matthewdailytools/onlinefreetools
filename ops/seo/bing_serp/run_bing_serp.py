# -*- coding: utf-8 -*-
"""
Bing SERP 批量采集 CLI（CloakBrowser）。

用法示例
--------
::

    python ops/seo/bing_serp/run_bing_serp.py \\
      --theme cidr \\
      --queries "terraform cidrsubnet,ip range to cidr" \\
      --batch-id 2026-08-28-cidr-bing-smoke \\
      --write-batch-md

    python ops/seo/bing_serp/run_bing_serp.py \\
      --theme cidr \\
      --file docs/seo/keywords/cidr/Cidr_KeywordPlanner_bing.csv \\
      --column 关键词 \\
      --limit-queries 15 \\
      --batch-id 2026-08-28-cidr-bing-serp \\
      --write-batch-md \\
      --delay-min 4 --delay-max 9

环境
----
- 本机已安装：``pip install cloakbrowser`` 且 ``cloakbrowser install``
- Python 3.10+
"""

from __future__ import annotations

import argparse
import logging
import sys
from datetime import datetime
from pathlib import Path
from typing import Any

# 保证以脚本方式运行时能导入同目录包模块
_PKG_DIR = Path(__file__).resolve().parent
if str(_PKG_DIR) not in sys.path:
    sys.path.insert(0, str(_PKG_DIR))

from analyze import analyze_query_serp  # noqa: E402
from bing_parse import (  # noqa: E402
    build_bing_search_url,
    detect_cn_bing,
    parse_organic_results,
    parse_people_also_ask,
    parse_related_searches,
)
from browser_util import (  # noqa: E402
    apply_bing_international_cookies,
    goto_with_wait,
    human_pause,
    launch_cloak_browser,
)
from io_util import (  # noqa: E402
    DEFAULT_CACHE_DIR,
    ensure_run_dir,
    load_queries,
    render_batch_markdown,
    resolve_batch_dir,
    write_batch_markdown,
    write_query_json,
    write_run_manifest,
)

# 从包根读取版本
try:
    from __init__ import __version__
except Exception:  # pragma: no cover
    __version__ = "0.1.0"

# 根日志配置在 main 里完成
logger = logging.getLogger("bing_serp")


def parse_args(argv: list[str] | None = None) -> argparse.Namespace:
    """
    解析命令行参数。

    参数
    ----
    argv:
        可选参数列表；默认 ``sys.argv[1:]``。

    返回
    ----
    ``argparse.Namespace``。
    """
    p = argparse.ArgumentParser(
        description="用 CloakBrowser 在 Bing 搜索长尾词并记录/分析 SERP（脱敏）",
    )
    # 查询来源
    p.add_argument(
        "--queries",
        default="",
        help="逗号分隔的查询词；可与 --file 并用",
    )
    p.add_argument(
        "--file",
        default="",
        help="词表文件：.txt 一行一词，或 .csv/.tsv（可用 --column）",
    )
    p.add_argument(
        "--column",
        default="",
        help="表格列名（默认自动猜 关键词/keyword/candidate）",
    )
    p.add_argument(
        "--limit-queries",
        type=int,
        default=0,
        help="最多处理前 N 个查询（0=全部）；试跑建议 3–15",
    )
    # Bing / 浏览器
    p.add_argument("--mkt", default="en-US", help="Bing 市场，如 en-US / zh-CN")
    p.add_argument(
        "--results-per-query",
        type=int,
        default=10,
        help="每词解析有机结果上限",
    )
    p.add_argument("--headed", action="store_true", help="有头模式（调试）")
    p.add_argument("--humanize", action="store_true", help="启用 CloakBrowser humanize")
    p.add_argument("--delay-min", type=float, default=3.0, help="词间最短等待秒")
    p.add_argument("--delay-max", type=float, default=8.0, help="词间最长等待秒")
    # 输出
    p.add_argument(
        "--out-dir",
        default=str(DEFAULT_CACHE_DIR),
        help="JSON 输出根目录（默认 .cache/serp/bing）",
    )
    p.add_argument(
        "--batch-id",
        default="",
        help="批次 id；默认 YYYY-MM-DD-HHMM-bing",
    )
    p.add_argument(
        "--write-batch-md",
        action="store_true",
        help="额外写入 Markdown 批次（默认 docs/seo/keywords/{theme}/ 或 serp-batches）",
    )
    p.add_argument(
        "--theme",
        default="",
        help="主题短名（如 cidr）；有值时 Markdown 写到 docs/seo/keywords/{theme}/",
    )
    p.add_argument(
        "--batch-dir",
        default="",
        help="覆盖 Markdown 输出目录（默认由 --theme 或 serp-batches 决定）",
    )
    p.add_argument(
        "--allow-cn",
        action="store_true",
        help="允许保留 CN Bing 结果（默认：检测到 CN 则自动切国际版重搜）",
    )
    p.add_argument(
        "-v",
        "--verbose",
        action="store_true",
        help="DEBUG 日志",
    )
    return p.parse_args(argv)


def _mkt_wants_international(mkt: str) -> bool:
    """
    判断目标市场是否应按「国际版」期望（非中文 CN 市场）。

    参数
    ----
    mkt:
        如 ``en-US`` / ``zh-CN``。
    """
    m = (mkt or "").lower().replace("_", "-")
    # 明确要中文大陆市场时不强制切国际版
    if m in ("zh-cn", "zh-hans", "zh") or m.endswith("-cn"):
        return False
    return True


def fetch_serp_once(
    page: Any,
    query: str,
    *,
    mkt: str,
    results_per_query: int,
    international: bool,
    prefer_cn_host: bool = False,
) -> dict:
    """
    打开一次 Bing 搜索并解析当前页。

    参数
    ----
    page:
        Playwright Page。
    query:
        查询词。
    mkt:
        市场代码。
    results_per_query:
        有机结果上限。
    international:
        是否带 ``ensearch=1`` 国际版参数。
    prefer_cn_host:
        True 时在 ``cn.bing.com`` 上请求（国内站点「国际版」官方路径）。

    返回
    ----
    含 ``search_url`` / ``final_url`` / ``organic`` / ``related_searches`` /
    ``people_also_ask`` / ``cn_detect`` / ``international`` 的字典。
    """
    # 已落在 CN 时，国际版应走 cn.bing.com?ensearch=1（与页面「国际版」一致）
    host = "cn.bing.com" if (international and prefer_cn_host) else "www.bing.com"
    url = build_bing_search_url(
        query,
        mkt=mkt,
        count=results_per_query,
        international=international,
        host=host,
    )
    goto_with_wait(page, url)
    human_pause(0.8, 1.8)

    # 解析可能撞上二次导航；最多重试一次
    organic: list = []
    related: list = []
    paa: list = []
    for attempt in range(2):
        try:
            organic = parse_organic_results(page, limit=results_per_query)
            related = parse_related_searches(page)
            paa = parse_people_also_ask(page)
            break
        except Exception as exc:
            msg = str(exc).lower()
            if attempt == 0 and "context" in msg:
                logger.warning("parse interrupted by navigation; wait and retry once")
                human_pause(1.0, 2.0)
                try:
                    page.wait_for_load_state("domcontentloaded", timeout=15000)
                    page.wait_for_selector("li.b_algo, #b_results", timeout=15000)
                except Exception:
                    pass
                continue
            raise

    cn_detect = detect_cn_bing(page, organic, mkt=mkt)
    try:
        final_url = page.url or url
    except Exception:
        final_url = url
    return {
        "search_url": url,
        "final_url": final_url,
        "organic": organic,
        "related_searches": related,
        "people_also_ask": paa,
        "cn_detect": cn_detect,
        "international": international,
    }


def run_batch(args: argparse.Namespace) -> int:
    """
    执行整批 Bing SERP 采集与分析。

    参数
    ----
    args:
        已解析的 CLI 参数。

    返回
    ----
    进程退出码：0 成功；2 无查询；1 运行期错误。
    """
    # 组装查询列表
    cli_queries = [x.strip() for x in (args.queries or "").split(",") if x.strip()]
    query_list = load_queries(
        queries=cli_queries,
        file_path=args.file or None,
        column=args.column or None,
    )
    if args.limit_queries and args.limit_queries > 0:
        query_list = query_list[: int(args.limit_queries)]
    if not query_list:
        logger.error("没有可查询的词：请传 --queries 或 --file")
        return 2

    # 批次 id
    batch_id = args.batch_id.strip() or datetime.now().strftime("%Y-%m-%d-%H%M-bing")
    run_dir = ensure_run_dir(Path(args.out_dir), batch_id)

    logger.info(
        "batch=%s queries=%d out=%s mkt=%s",
        batch_id,
        len(query_list),
        run_dir,
        args.mkt,
    )

    # 启动浏览器
    browser = launch_cloak_browser(
        headless=not args.headed,
        humanize=bool(args.humanize),
        locale=args.mkt,
    )
    # 单 page 复用，减少启动开销
    page = browser.new_page()
    # 目标为国际市场时预先写国际版 Cookie，降低首次就被踢到 cn.bing 的概率
    if _mkt_wants_international(args.mkt) and not args.allow_cn:
        apply_bing_international_cookies(page)

    row_summaries: list[dict] = []
    errors: list[dict] = []
    # 统计本批因 CN 检测而重搜的次数
    intl_retry_count = 0

    try:
        for i, query in enumerate(query_list):
            logger.info("[%d/%d] search: %s", i + 1, len(query_list), query)
            try:
                fetched = fetch_serp_once(
                    page,
                    query,
                    mkt=args.mkt,
                    results_per_query=args.results_per_query,
                    international=False,
                )
                cn = fetched["cn_detect"]
                # 检测到 CN Bing 且目标不是大陆市场 → 切国际版重搜一次
                if (
                    cn.get("is_cn")
                    and _mkt_wants_international(args.mkt)
                    and not args.allow_cn
                ):
                    logger.warning(
                        "CN Bing detected for %r (%s); retry international",
                        query,
                        "; ".join(cn.get("reasons") or []),
                    )
                    apply_bing_international_cookies(page)
                    human_pause(0.5, 1.2)
                    # 已在 cn.bing.com 时优先走 cn 主机 + ensearch=1（官方国际版）
                    prefer_cn = "cn.bing.com" in (cn.get("final_url") or "")
                    fetched = fetch_serp_once(
                        page,
                        query,
                        mkt=args.mkt,
                        results_per_query=args.results_per_query,
                        international=True,
                        prefer_cn_host=prefer_cn,
                    )
                    intl_retry_count += 1
                    # 重试后：仅当主机仍是 cn 且未带 ensearch、且国内站占比仍高，才告警
                    post = fetched["cn_detect"]
                    still_cn_host = "cn.bing.com" in (fetched.get("final_url") or "")
                    still_heavy_cn = float(post.get("cn_organic_ratio") or 0) >= 0.5
                    if still_cn_host and still_heavy_cn and "ensearch=1" not in (
                        fetched.get("final_url") or ""
                    ):
                        logger.warning(
                            "still CN-like after international retry: %s",
                            post.get("reasons"),
                        )

                organic = fetched["organic"]
                related = fetched["related_searches"]
                paa = fetched["people_also_ask"]
                analysis = analyze_query_serp(query, organic)
                payload = {
                    "query": query,
                    "mkt": args.mkt,
                    "search_url": fetched["search_url"],
                    "final_url": fetched["final_url"],
                    "international": fetched["international"],
                    "cn_detect": fetched["cn_detect"],
                    "fetched_at": datetime.now().isoformat(timespec="seconds"),
                    "organic": organic,
                    "related_searches": related,
                    "people_also_ask": paa,
                    "analysis": {
                        "competition_tier": analysis["competition_tier"],
                        "gap_notes": analysis["gap_notes"],
                        "serp_type_summary": analysis["serp_type_summary"],
                        "top_domains": analysis["top_domains"],
                        "has_interactive_tool_signal": analysis[
                            "has_interactive_tool_signal"
                        ],
                        "type_counts": analysis["type_counts"],
                        "organic_typed": analysis["organic_typed"],
                    },
                    "tool_version": __version__,
                }
                write_query_json(run_dir, query, payload)
                row_summaries.append(
                    {
                        "query": query,
                        "organic": organic,
                        "related_searches": related,
                        "people_also_ask": paa,
                        "analysis": payload["analysis"],
                        "international": fetched["international"],
                        "cn_detect": fetched["cn_detect"],
                    }
                )
            except Exception as exc:
                logger.exception("query failed: %s", query)
                errors.append({"query": query, "error": str(exc)})
                # 失败也写一份最小 JSON，便于排查
                write_query_json(
                    run_dir,
                    query,
                    {
                        "query": query,
                        "error": str(exc),
                        "fetched_at": datetime.now().isoformat(timespec="seconds"),
                    },
                )

            # 词间等待（最后一词可跳过）
            if i < len(query_list) - 1:
                human_pause(args.delay_min, args.delay_max)
    finally:
        try:
            browser.close()
        except Exception:
            logger.warning("browser.close() failed", exc_info=True)

    # 清单
    manifest = {
        "batch_id": batch_id,
        "mkt": args.mkt,
        "tool_version": __version__,
        "query_count": len(query_list),
        "ok_count": len(row_summaries),
        "error_count": len(errors),
        "intl_retry_count": intl_retry_count,
        "allow_cn": bool(args.allow_cn),
        "errors": errors,
        "queries": [r["query"] for r in row_summaries],
        "finished_at": datetime.now().isoformat(timespec="seconds"),
        "run_dir": str(run_dir),
    }
    write_run_manifest(run_dir, manifest)

    # 可选：脱敏批次 md（优先主题夹）
    if args.write_batch_md:
        method = (
            f"CloakBrowser {__version__} Bing scrape; "
            "organic title/url/snippet only; no full HTML committed"
        )
        body = render_batch_markdown(
            batch_id=batch_id,
            mkt=args.mkt,
            method_note=method,
            seed_queries=query_list,
            rows=row_summaries,
        )
        out_batch_dir = resolve_batch_dir(
            theme=args.theme or None,
            batch_dir=args.batch_dir or None,
        )
        write_batch_markdown(out_batch_dir, batch_id, body)
        logger.info("batch markdown dir=%s", out_batch_dir)

    logger.info(
        "done ok=%d err=%d dir=%s",
        len(row_summaries),
        len(errors),
        run_dir,
    )
    return 0 if not errors else (0 if row_summaries else 1)


def main(argv: list[str] | None = None) -> int:
    """
    CLI 入口：配置日志并跑批次。

    参数
    ----
    argv:
        可选参数列表。

    返回
    ----
    退出码。
    """
    args = parse_args(argv)
    logging.basicConfig(
        level=logging.DEBUG if args.verbose else logging.INFO,
        format="%(asctime)s %(levelname)s %(name)s: %(message)s",
    )
    return run_batch(args)


if __name__ == "__main__":
    raise SystemExit(main())
