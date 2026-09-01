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
    build_bing_home_url,
    build_bing_search_url,
    detect_bing_challenge,
    detect_cn_bing,
    parse_organic_results,
    parse_people_also_ask,
    parse_related_searches,
)
from browser_util import (  # noqa: E402
    apply_bing_international_cookies,
    click_bing_international_toggle,
    close_session,
    dismiss_bing_consent,
    goto_with_wait,
    human_pause,
    launch_cloak_browser,
    open_fresh_session,
    relock_serp_after_navigation,
    reset_bing_tracking_cookies,
    submit_query_in_search_box,
)
from query_strategy import (  # noqa: E402
    habit_query_variants,
    score_serp_pollution,
    technical_lang_lock_query,
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
    __version__ = "0.3.0"

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
        "--no-habit-retry",
        action="store_true",
        help="关闭用户搜法变体：污染后不再改写重搜（调试用）",
    )
    p.add_argument(
        "--max-variants",
        type=int,
        default=3,
        help="含规范化种子在内，最多试几条用户搜法变体（默认 3）",
    )
    p.add_argument(
        "--search-mode",
        choices=("auto", "box", "url"),
        default="auto",
        help="auto=首页搜索框（失败回退 URL）；box=只走搜索框；url=只构造 /search",
    )
    p.add_argument(
        "--reuse-page",
        action="store_true",
        help="整批共用一张 page（旧行为；默认每词新 page 防会话串味）",
    )
    p.add_argument(
        "--keep-quotes",
        action="store_true",
        help="保留词表引号（默认剥掉：用户不加引号，引号不能防污染）",
    )
    p.add_argument(
        "--no-lang-lock",
        action="store_true",
        help="关闭技术兜底 language:en（习惯变体仍污染时默认会再搜一次）",
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


def _parse_serp_page(page: Any, *, results_per_query: int, query: str) -> tuple[list, list, list]:
    """
    从已加载的结果页解析有机结果 / 相关搜索 / PAA。

    参数
    ----
    page:
        Playwright Page。
    results_per_query:
        有机结果上限。
    query:
        仅用于日志。

    返回
    ----
    ``(organic, related, paa)``。
    """
    organic: list = []
    related: list = []
    paa: list = []
    for attempt in range(2):
        try:
            organic = parse_organic_results(page, limit=results_per_query)
            related = parse_related_searches(page)
            paa = parse_people_also_ask(page)
            if not related:
                logger.warning("no related searches parsed for %r", query)
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
    return organic, related, paa


def fetch_serp_once(
    page: Any,
    query: str,
    *,
    mkt: str,
    results_per_query: int,
    international: bool,
    prefer_cn_host: bool = False,
    search_mode: str = "auto",
) -> dict:
    """
    打开一次 Bing 搜索并解析当前页。

    默认先打开首页再在搜索框输入（用户习惯）；搜索框失败时回退 ``/search?q=``。
    目标国际市场时**第一次就带** ``ensearch=1``，避免先打国内版再重搜污染会话。

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
    search_mode:
        ``auto`` / ``box`` / ``url``。

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
    used_box = False
    mode = (search_mode or "auto").lower()
    if mode in ("auto", "box"):
        home = build_bing_home_url(mkt=mkt, international=international, host=host)
        goto_with_wait(page, home, expect_serp=False)
        dismiss_bing_consent(page)
        if international:
            click_bing_international_toggle(page)
        human_pause(0.4, 0.9)
        used_box = submit_query_in_search_box(page, query)
        if not used_box:
            if mode == "box":
                logger.warning("search box missing; still falling back to URL for %r", query)
            goto_with_wait(page, url, expect_serp=True)
        else:
            relock_serp_after_navigation(
                page, mkt=mkt, international=international
            )
            if international:
                click_bing_international_toggle(page)
    else:
        goto_with_wait(page, url, expect_serp=True)
    human_pause(0.8, 1.8)
    # 相关搜索多在页底；不滚到底时 CN 国际版常解析为空
    try:
        page.evaluate("window.scrollTo(0, document.body.scrollHeight)")
        human_pause(0.6, 1.2)
    except Exception:
        pass

    organic, related, paa = _parse_serp_page(
        page, results_per_query=results_per_query, query=query
    )

    cn_detect = detect_cn_bing(page, organic, mkt=mkt)
    challenge = detect_bing_challenge(page)
    if challenge.get("is_challenge"):
        logger.warning("Bing challenge page for %r: %s", query, challenge.get("reasons"))
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
        "challenge": challenge,
        "international": international,
        "used_search_box": used_box,
    }


def _new_session(browser: Any, args: argparse.Namespace, *, want_intl: bool) -> dict[str, Any]:
    """
    按 CLI 打开新会话（默认独立 context）。
    """
    reuse_page = bool(getattr(args, "reuse_page", False))
    return open_fresh_session(
        browser,
        apply_intl_cookies=want_intl,
        isolate_context=not reuse_page,
        mkt=args.mkt,
    )


def _fetch_international_once(
    page: Any,
    issued: str,
    args: argparse.Namespace,
    *,
    want_intl: bool,
) -> tuple[Any, dict, int]:
    """
    搜一次；若仍是国内版索引则换 cn.bing.com + ensearch 再搜。

    国际市场第一次就带 ``ensearch=1``，不再先打国内版。

    参数
    ----
    page:
        当前 Page。
    issued:
        实际发出的查询。
    args:
        CLI 参数。
    want_intl:
        是否强制国际索引。

    返回
    ----
    ``(page, fetched, intl_retry_delta)``；page 可能已被换成新实例。
    """
    search_mode = getattr(args, "search_mode", "auto")
    fetched = fetch_serp_once(
        page,
        issued,
        mkt=args.mkt,
        results_per_query=args.results_per_query,
        international=want_intl,
        prefer_cn_host=False,
        search_mode=search_mode,
    )
    intl_retry = 0
    cn = fetched["cn_detect"]
    if cn.get("is_cn") and want_intl:
        logger.warning(
            "CN Bing detected for %r (%s); retry international host",
            issued,
            "; ".join(cn.get("reasons") or []),
        )
        prefer_cn = "cn.bing.com" in (cn.get("final_url") or "")
        apply_bing_international_cookies(page)
        human_pause(0.4, 0.9)
        fetched = fetch_serp_once(
            page,
            issued,
            mkt=args.mkt,
            results_per_query=args.results_per_query,
            international=True,
            prefer_cn_host=prefer_cn,
            search_mode=search_mode,
        )
        intl_retry = 1
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
    return page, fetched, intl_retry


def run_batch(args: argparse.Namespace) -> int:
    """
    执行整批 Bing SERP 采集与分析。

    默认：国际版优先、每词独立 BrowserContext、搜索框提交、
    污染则用户搜法变体，仍脏再试 ``language:en`` 技术锁。

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
        keep_quotes=bool(getattr(args, "keep_quotes", False)),
    )
    if args.limit_queries and args.limit_queries > 0:
        query_list = query_list[: int(args.limit_queries)]
    if not query_list:
        logger.error("没有可查询的词：请传 --queries 或 --file")
        return 2

    # 批次 id
    batch_id = args.batch_id.strip() or datetime.now().strftime("%Y-%m-%d-%H%M-bing")
    run_dir = ensure_run_dir(Path(args.out_dir), batch_id)

    # 国际市场：第一次就走国际索引，避免国内版 SERP 污染会话
    want_intl = _mkt_wants_international(args.mkt) and not args.allow_cn
    habit_retry = not bool(getattr(args, "no_habit_retry", False))
    max_variants = int(getattr(args, "max_variants", 3) or 3)
    reuse_page = bool(getattr(args, "reuse_page", False))
    lang_lock_on = not bool(getattr(args, "no_lang_lock", False))

    logger.info(
        "batch=%s queries=%d out=%s mkt=%s intl=%s habit_retry=%s search_mode=%s isolate=%s",
        batch_id,
        len(query_list),
        run_dir,
        args.mkt,
        want_intl,
        habit_retry,
        getattr(args, "search_mode", "auto"),
        not reuse_page,
    )

    # 启动浏览器（locale 锁 en-US，避免系统中文头）
    browser = launch_cloak_browser(
        headless=not args.headed,
        humanize=bool(args.humanize),
        locale="en-US" if want_intl else args.mkt,
    )
    session: dict[str, Any] | None = None

    row_summaries: list[dict] = []
    errors: list[dict] = []
    intl_retry_count = 0
    habit_retry_count = 0
    lang_lock_count = 0

    try:
        for i, seed in enumerate(query_list):
            logger.info("[%d/%d] seed: %s", i + 1, len(query_list), seed)
            try:
                if (not reuse_page) or (session is None):
                    close_session(session)
                    session = _new_session(browser, args, want_intl=want_intl)
                elif reuse_page:
                    reset_bing_tracking_cookies(
                        session["page"], apply_intl_cookies=want_intl
                    )
                page = session["page"]

                variants = (
                    habit_query_variants(seed, max_variants=max_variants)
                    if habit_retry
                    else [seed]
                )
                tried: list[dict] = []
                issued = variants[0]
                fetched: dict = {}
                pollution: dict = {}
                for vi, candidate in enumerate(variants):
                    if vi > 0:
                        habit_retry_count += 1
                        logger.warning(
                            "polluted SERP; habit variant %d/%d for %r → %r",
                            vi + 1,
                            len(variants),
                            seed,
                            candidate,
                        )
                        if not reuse_page:
                            close_session(session)
                            session = _new_session(
                                browser, args, want_intl=want_intl
                            )
                            page = session["page"]
                        human_pause(0.8, 1.6)
                    page, fetched, delta = _fetch_international_once(
                        page, candidate, args, want_intl=want_intl
                    )
                    if session is not None:
                        session["page"] = page
                    intl_retry_count += delta
                    pollution = score_serp_pollution(
                        candidate,
                        fetched.get("organic") or [],
                        cn_detect=fetched.get("cn_detect"),
                        challenge=fetched.get("challenge"),
                    )
                    tried.append(
                        {
                            "query": candidate,
                            "polluted": bool(pollution.get("polluted")),
                            "reasons": pollution.get("reasons") or [],
                        }
                    )
                    issued = candidate
                    if not pollution.get("polluted"):
                        break

                # 习惯变体仍污染：技术兜底 language:en（不写入工具 H1）
                if pollution.get("polluted") and lang_lock_on:
                    locked = technical_lang_lock_query(issued)
                    if locked:
                        lang_lock_count += 1
                        logger.warning(
                            "polluted after habit variants; tech lang-lock %r",
                            locked,
                        )
                        if not reuse_page:
                            close_session(session)
                            session = _new_session(
                                browser, args, want_intl=want_intl
                            )
                            page = session["page"]
                        human_pause(0.8, 1.6)
                        page, fetched, delta = _fetch_international_once(
                            page, locked, args, want_intl=want_intl
                        )
                        if session is not None:
                            session["page"] = page
                        intl_retry_count += delta
                        pollution = score_serp_pollution(
                            locked,
                            fetched.get("organic") or [],
                            cn_detect=fetched.get("cn_detect"),
                            challenge=fetched.get("challenge"),
                        )
                        tried.append(
                            {
                                "query": locked,
                                "polluted": bool(pollution.get("polluted")),
                                "reasons": pollution.get("reasons") or [],
                                "tech": "language:en",
                            }
                        )
                        issued = locked

                organic = fetched.get("organic") or []
                related = fetched.get("related_searches") or []
                paa = fetched.get("people_also_ask") or []
                analysis = analyze_query_serp(
                    issued,
                    organic,
                    cn_detect=fetched.get("cn_detect"),
                    challenge=fetched.get("challenge"),
                )
                analysis_out = {
                    "competition_tier": analysis["competition_tier"],
                    "gap_notes": analysis["gap_notes"],
                    "serp_type_summary": analysis["serp_type_summary"],
                    "top_domains": analysis["top_domains"],
                    "has_interactive_tool_signal": analysis[
                        "has_interactive_tool_signal"
                    ],
                    "type_counts": analysis["type_counts"],
                    "organic_typed": analysis["organic_typed"],
                    "serp_usable": analysis.get("serp_usable", True),
                    "pollution": analysis.get("pollution") or pollution,
                }
                payload = {
                    "query": seed,
                    "issued_query": issued,
                    "variants_tried": tried,
                    "mkt": args.mkt,
                    "search_url": fetched.get("search_url"),
                    "final_url": fetched.get("final_url"),
                    "international": fetched.get("international"),
                    "used_search_box": fetched.get("used_search_box"),
                    "cn_detect": fetched.get("cn_detect"),
                    "challenge": fetched.get("challenge"),
                    "fetched_at": datetime.now().isoformat(timespec="seconds"),
                    "organic": organic,
                    "related_searches": related,
                    "people_also_ask": paa,
                    "analysis": analysis_out,
                    "tool_version": __version__,
                }
                write_query_json(run_dir, seed, payload)
                row_summaries.append(
                    {
                        "query": seed,
                        "issued_query": issued,
                        "organic": organic,
                        "related_searches": related,
                        "people_also_ask": paa,
                        "analysis": payload["analysis"],
                        "international": fetched.get("international"),
                        "cn_detect": fetched.get("cn_detect"),
                    }
                )
            except Exception as exc:
                logger.exception("query failed: %s", seed)
                errors.append({"query": seed, "error": str(exc)})
                write_query_json(
                    run_dir,
                    seed,
                    {
                        "query": seed,
                        "error": str(exc),
                        "fetched_at": datetime.now().isoformat(timespec="seconds"),
                    },
                )

            if i < len(query_list) - 1:
                human_pause(args.delay_min, args.delay_max)
    finally:
        close_session(session)
        try:
            browser.close()
        except Exception:
            logger.warning("browser.close() failed", exc_info=True)

    manifest = {
        "batch_id": batch_id,
        "mkt": args.mkt,
        "tool_version": __version__,
        "query_count": len(query_list),
        "ok_count": len(row_summaries),
        "error_count": len(errors),
        "intl_retry_count": intl_retry_count,
        "habit_retry_count": habit_retry_count,
        "lang_lock_count": lang_lock_count,
        "allow_cn": bool(args.allow_cn),
        "search_mode": getattr(args, "search_mode", "auto"),
        "habit_retry": habit_retry,
        "isolate_context": not reuse_page,
        "errors": errors,
        "queries": [r["query"] for r in row_summaries],
        "finished_at": datetime.now().isoformat(timespec="seconds"),
        "run_dir": str(run_dir),
    }
    write_run_manifest(run_dir, manifest)

    if args.write_batch_md:
        method = (
            f"CloakBrowser {__version__} Bing scrape; "
            "isolated context; index lock; user-habit box search; "
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
