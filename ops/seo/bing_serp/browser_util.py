# -*- coding: utf-8 -*-
"""
CloakBrowser 启动与页面级辅助。

本模块封装本地已安装的 ``cloakbrowser``（Playwright 兼容 API），
供 Bing SERP 采集复用；不包含业务解析逻辑。
"""

from __future__ import annotations

import logging
import random
import time
from typing import Any

# 日志记录器：脚本与库共用同一命名空间前缀
logger = logging.getLogger("bing_serp.browser")


def launch_cloak_browser(
    *,
    headless: bool = True,
    humanize: bool = False,
    locale: str = "en-US",
    timezone: str = "America/New_York",
) -> Any:
    """
    启动 CloakBrowser 隐身 Chromium，返回 Playwright Browser 对象。

    参数
    ----
    headless:
        True 无头；调试时可 False 观察页面。
    humanize:
        是否启用 cloakbrowser 人类行为模拟（更慢，抗检测更强）。
    locale:
        浏览器 locale（影响 Accept-Language 等）。
    timezone:
        IANA 时区，写入指纹相关参数。

    返回
    ----
    Playwright ``Browser`` 实例；调用方负责 ``browser.close()``。
    """
    # 延迟导入：未安装时错误信息更清晰
    try:
        from cloakbrowser import launch
    except ImportError as exc:  # pragma: no cover
        raise SystemExit(
            "未找到 cloakbrowser。请用 aibrowsercrawler 的 venv 运行本脚本："
            " PY=\"${AIBROWSERCRAWLER_VENV:-$HOME/vscodeai/aibrowsercrawler/venv}/bin/python\""
            " \"$PY\" ops/seo/bing_serp/run_bing_serp.py ...（勿在 onlinefreetools 内 pip install）"
        ) from exc

    logger.info(
        "launch CloakBrowser headless=%s humanize=%s locale=%s",
        headless,
        humanize,
        locale,
    )
    # launch 返回与 playwright.chromium.launch 相同的 Browser API
    browser = launch(
        headless=headless,
        humanize=humanize,
        locale=locale,
        timezone=timezone,
    )
    return browser


def human_pause(min_sec: float, max_sec: float) -> None:
    """
    在 [min_sec, max_sec] 内随机等待，降低批量查询节奏。

    参数
    ----
    min_sec:
        最短等待秒数（须 >= 0）。
    max_sec:
        最长等待秒数（须 >= min_sec）。
    """
    # 边界校正：避免调用方传反区间
    low = max(0.0, float(min_sec))
    high = max(low, float(max_sec))
    delay = random.uniform(low, high)
    logger.debug("pause %.2fs", delay)
    time.sleep(delay)


def apply_bing_international_cookies(page: Any) -> None:
    """
    写入偏向国际版 Bing 的 Cookie（在首次导航前或切国际版前调用）。

    ``ENSEARCH=BENVER=1`` 对应 CN Bing「国际版」偏好；
    ``_EDGE_S`` 中带 ``mkt=en-US`` 提示市场；
    ``_EDGE_V`` 降低被踢回国内版的概率。

    参数
    ----
    page:
        Playwright Page（须已有 context）。
    """
    # 同时覆盖 .bing.com，避免只写 www 时 cn 子域读不到
    cookies = [
        {
            "name": "ENSEARCH",
            "value": "BENVER=1",
            "domain": ".bing.com",
            "path": "/",
        },
        {
            "name": "_EDGE_S",
            "value": "mkt=en-US",
            "domain": ".bing.com",
            "path": "/",
        },
        {
            "name": "_EDGE_V",
            "value": "1",
            "domain": ".bing.com",
            "path": "/",
        },
    ]
    try:
        page.context.add_cookies(cookies)
        logger.info("applied Bing international cookies (ENSEARCH, _EDGE_S, _EDGE_V)")
    except Exception:
        logger.warning("failed to set Bing international cookies", exc_info=True)


# 纽约坐标：覆盖系统定位，减少「本地」垂直结果
_US_GEO = {"latitude": 40.7128, "longitude": -74.0060}

# 个性化 / 上一词连带 Cookie；隔离 context 时本来就没有，复用 page 时清掉
_BING_PERSONALIZATION_COOKIE_NAMES = (
    "MUID",
    "MUIDB",
    "SRCHHPGUSR",
    "SRCHUID",
    "SRCHD",
    "SRCHUSR",
    "_SS",
    "USRLOC",
)


def goto_with_wait(
    page: Any,
    url: str,
    *,
    timeout_ms: int = 45000,
    expect_serp: bool = True,
) -> None:
    """
    打开 URL 并等待 DOM / 可能的地区跳转稳定。

    参数
    ----
    page:
        Playwright Page。
    url:
        目标地址。
    timeout_ms:
        导航超时（毫秒）。
    expect_serp:
        True 时等待有机结果选择器；首页应为 False（否则空等 15s）。
    """
    logger.info("goto %s", url)
    # networkidle 在 Bing 上常因广告/遥测挂起；用 domcontentloaded 更稳
    page.goto(url, wait_until="domcontentloaded", timeout=timeout_ms)
    # CN ↔ 国际版切换常二次跳转；再等一次 load，避免解析时 context destroyed
    try:
        page.wait_for_load_state("domcontentloaded", timeout=15000)
    except Exception:
        logger.debug("secondary domcontentloaded wait skipped", exc_info=True)
    if expect_serp:
        try:
            page.wait_for_selector("li.b_algo, #b_results", timeout=15000)
        except Exception:
            logger.warning("organic selector wait timed out: %s", url)
    # 短暂停，消化客户端重定向
    time.sleep(0.6)


def _playwright_context_options(*, apply_intl_cookies: bool, mkt: str) -> dict[str, Any]:
    """
    构造 Playwright ``new_context`` 参数：语言、时区、定位、Accept-Language。

    参数
    ----
    apply_intl_cookies:
        True 时按 en-US 国际会话配置。
    mkt:
        目标市场（非国际时用它的 locale）。
    """
    locale = "en-US" if apply_intl_cookies else (mkt or "en-US")
    accept = "en-US,en;q=0.9" if apply_intl_cookies else f"{locale},{locale.split('-')[0]};q=0.9"
    opts: dict[str, Any] = {
        "locale": locale,
        "timezone_id": "America/New_York" if apply_intl_cookies else "UTC",
        "extra_http_headers": {"Accept-Language": accept},
    }
    if apply_intl_cookies:
        opts["geolocation"] = dict(_US_GEO)
        opts["permissions"] = ["geolocation"]
    return opts


def open_fresh_session(
    browser: Any,
    *,
    apply_intl_cookies: bool = False,
    isolate_context: bool = True,
    mkt: str = "en-US",
) -> dict[str, Any]:
    """
    打开隔离会话：默认每词一个 BrowserContext（Cookie / 存储 / cvid 不串）。

    比只 ``new_page`` 更强：P0 整页农商/GTA 串味来自同一 context 的 ``pq`` / ``MUID``。

    参数
    ----
    browser:
        CloakBrowser / Playwright Browser。
    apply_intl_cookies:
        True 时写入国际版 Cookie 并锁 en-US 头。
    isolate_context:
        False 时只开新 page（``--reuse-page`` 路径）。
    mkt:
        目标市场。

    返回
    ----
    ``{"context": ctx, "page": page, "isolated": bool}``。
    """
    context = None
    isolated = bool(isolate_context)
    if isolated:
        try:
            context = browser.new_context(**_playwright_context_options(
                apply_intl_cookies=apply_intl_cookies, mkt=mkt
            ))
            page = context.new_page()
        except Exception:
            logger.warning("new_context failed; falling back to new_page", exc_info=True)
            isolated = False
            page = browser.new_page()
            context = getattr(page, "context", None)
    else:
        page = browser.new_page()
        context = getattr(page, "context", None)
    if apply_intl_cookies:
        apply_bing_international_cookies(page)
    return {"context": context, "page": page, "isolated": isolated}


def reset_bing_tracking_cookies(page: Any, *, apply_intl_cookies: bool) -> None:
    """
    清掉 Bing 个性化 Cookie（``MUID`` / ``SRCHHPGUSR``），复用 page 时减少 ``pq`` 连带。

    参数
    ----
    page:
        当前 Page。
    apply_intl_cookies:
        清理后是否重新写入国际版 Cookie。
    """
    ctx = getattr(page, "context", None)
    if ctx is None:
        return
    try:
        existing = ctx.cookies()
        survivors = [
            c
            for c in existing
            if (c.get("name") or "") not in _BING_PERSONALIZATION_COOKIE_NAMES
        ]
        ctx.clear_cookies()
        if survivors:
            ctx.add_cookies(survivors)
    except Exception:
        logger.debug("reset Bing tracking cookies skipped", exc_info=True)
    if apply_intl_cookies:
        apply_bing_international_cookies(page)


def open_fresh_page(browser: Any, *, apply_intl_cookies: bool = False) -> Any:
    """
    兼容包装：返回新 page（内部走隔离 context）。

    参数
    ----
    browser:
        CloakBrowser Browser。
    apply_intl_cookies:
        是否写国际版 Cookie。
    """
    session = open_fresh_session(
        browser, apply_intl_cookies=apply_intl_cookies, isolate_context=True
    )
    return session["page"]


def close_session(session: dict[str, Any] | None) -> None:
    """
    关闭 page；若本次开了独立 context 则一并关掉。

    参数
    ----
    session:
        ``open_fresh_session`` 的返回值。
    """
    if not session:
        return
    page = session.get("page")
    context = session.get("context")
    isolated = bool(session.get("isolated"))
    if page is not None:
        try:
            page.close()
        except Exception:
            logger.debug("page.close() skipped", exc_info=True)
    if isolated and context is not None:
        try:
            context.close()
        except Exception:
            logger.debug("context.close() skipped", exc_info=True)


def click_bing_international_toggle(page: Any) -> bool:
    """
    点击页面上的「国际版」开关（比只改 URL 更接近官方切换）。

    参数
    ----
    page:
        已打开的 Bing 页。

    返回
    ----
    True 表示点到了并等待加载。
    """
    selectors = (
        "a[href*='ensearch=1']",
        "a[href*='ENSEARCH']",
        "#est_en",
        "a#est_en",
    )
    for sel in selectors:
        try:
            el = page.query_selector(sel)
            if not el:
                continue
            label = (el.inner_text() or "").strip()
            # 避免误点「国内版」
            if "国内版" in label and "国际版" not in label:
                continue
            el.click()
            page.wait_for_load_state("domcontentloaded", timeout=15000)
            time.sleep(0.5)
            logger.info("clicked Bing international toggle (%s)", sel)
            return True
        except Exception:
            continue
    try:
        loc = page.get_by_text("国际版", exact=True)
        if loc.count() > 0:
            loc.first.click()
            page.wait_for_load_state("domcontentloaded", timeout=15000)
            time.sleep(0.5)
            logger.info("clicked Bing international toggle (text)")
            return True
    except Exception:
        pass
    return False


def relock_serp_after_navigation(
    page: Any,
    *,
    mkt: str,
    international: bool,
) -> bool:
    """
    搜索框提交后：若带 ``pq``/缺 ``ensearch``，按锁参数重载当前词。

    参数
    ----
    page:
        结果页。
    mkt:
        市场。
    international:
        是否锁国际索引。

    返回
    ----
    True 表示执行了一次重载。
    """
    from bing_parse import relock_bing_serp_url

    try:
        current = page.url or ""
    except Exception:
        return False
    relocked = relock_bing_serp_url(current, mkt=mkt, international=international)
    if not relocked or relocked == current:
        return False
    logger.warning("relock SERP URL (drop pq/cvid, restore ensearch): %s", relocked)
    goto_with_wait(page, relocked, expect_serp=True)
    return True


def dismiss_bing_consent(page: Any) -> None:
    """
    尝试关掉 Bing Cookie / 同意条（挡搜索框时才有影响；失败忽略）。

    参数
    ----
    page:
        已打开的 Bing 页。
    """
    # 常见同意按钮 id；没有就跳过
    selectors = (
        "#bnp_btn_accept",
        "#bnp_close_text",
        "button[id*='bnp'][id*='accept']",
    )
    for sel in selectors:
        try:
            btn = page.query_selector(sel)
            if btn:
                btn.click()
                time.sleep(0.3)
                return
        except Exception:
            continue


def submit_query_in_search_box(page: Any, query: str, *, timeout_ms: int = 45000) -> bool:
    """
    在当前页的 Bing 搜索框输入查询并回车（用户习惯，而不是只改 URL）。

    参数
    ----
    page:
        应已在 Bing 首页或任意 Bing 结果页。
    query:
        要输入的查询全文。
    timeout_ms:
        提交后等待结果的超时。

    返回
    ----
    True 表示找到搜索框并提交；False 表示应回退到构造 ``/search?q=`` URL。
    """
    # 新版 Bing 用 textarea，旧版用 input
    selectors = (
        "textarea#sb_form_q",
        "input#sb_form_q",
        "#sb_form_q",
        "textarea[name='q']",
        "input[name='q']",
    )
    box = None
    for sel in selectors:
        try:
            box = page.query_selector(sel)
        except Exception:
            box = None
        if box:
            break
    if not box:
        logger.info("Bing search box not found; caller should URL-fallback")
        return False
    try:
        box.click()
        # fill 比逐字 type 快，仍走搜索框提交（带 form 参数）
        box.fill("")
        box.fill(query)
        box.press("Enter")
    except Exception:
        logger.warning("search box submit failed", exc_info=True)
        return False
    try:
        page.wait_for_load_state("domcontentloaded", timeout=timeout_ms)
    except Exception:
        logger.debug("search-box domcontentloaded wait skipped", exc_info=True)
    try:
        page.wait_for_selector("li.b_algo, #b_results", timeout=15000)
    except Exception:
        logger.warning("organic selector wait timed out after search-box submit")
    time.sleep(0.6)
    return True
