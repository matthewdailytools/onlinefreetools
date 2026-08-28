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
            "未找到 cloakbrowser。请先：pip install cloakbrowser && cloakbrowser install"
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
    ``_EDGE_S`` 中带 ``mkt=en-US`` 提示市场。

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
    ]
    try:
        page.context.add_cookies(cookies)
        logger.info("applied Bing international cookies (ENSEARCH, _EDGE_S mkt=en-US)")
    except Exception:
        logger.warning("failed to set Bing international cookies", exc_info=True)


def goto_with_wait(page: Any, url: str, *, timeout_ms: int = 45000) -> None:
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
    """
    logger.info("goto %s", url)
    # networkidle 在 Bing 上常因广告/遥测挂起；用 domcontentloaded 更稳
    page.goto(url, wait_until="domcontentloaded", timeout=timeout_ms)
    # CN ↔ 国际版切换常二次跳转；再等一次 load，避免解析时 context destroyed
    try:
        page.wait_for_load_state("domcontentloaded", timeout=15000)
    except Exception:
        logger.debug("secondary domcontentloaded wait skipped", exc_info=True)
    # 给有机结果列表一点渲染时间（无结果也不抛错）
    try:
        page.wait_for_selector("li.b_algo, #b_results", timeout=15000)
    except Exception:
        logger.warning("organic selector wait timed out: %s", url)
    # 短暂停，消化客户端重定向
    time.sleep(0.6)
