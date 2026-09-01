# -*- coding: utf-8 -*-
"""
Bing SERP DOM 解析：有机结果、相关搜索、（若有）相关问题。

只抽取结构化字段，不保存页面 HTML。选择器随 Bing 改版可能失效，
失效时返回空列表并由上层记录 warning，不中断整批。
"""

from __future__ import annotations

import logging
import re
from typing import Any
from urllib.parse import parse_qs, parse_qsl, quote_plus, unquote, urlencode, urlparse, urlunparse

# 日志
logger = logging.getLogger("bing_serp.parse")

# 从 bing 跳转链中提取真实目标 URL 的常见参数名
_REDIRECT_PARAM_KEYS = ("u", "r", "url", "ru")

# 中国区常见落地域名后缀 / 主机片段（用于 SERP 地域辅助判断）
_CN_DOMAIN_MARKERS = (
    ".cn",
    "cnblogs.com",
    "csdn.net",
    "zhihu.com",
    "juejin.cn",
    "aliyun.com",
    "tencent.com",
    "baidu.com",
    "qq.com",
    "163.com",
    "oschina.net",
    "segmentfault.com",
    "huaweicloud.com",
)

# 会把上一词带进本词排名的查询参数（P0 会话串味）
_SESSION_BLEED_KEYS = frozenset(
    {
        "pq",
        "cvid",
        "sid",
        "iqccid",
        "sc",
        "sk",
        "gh",
        "ajaxhist",
        "ajaxserp",
    }
)

# 人机验证 / 拦截页文案
_CHALLENGE_MARKERS = (
    "unusual traffic",
    "verify you are a human",
    "verify you are human",
    "our systems have detected",
    "captcha",
    "hcaptcha",
    "人机验证",
    "安全验证",
    "请完成验证",
)

# 页面上常见的中文 Bing UI 文案
_CN_UI_MARKERS = (
    "国际版",
    "国内版",
    "网页",
    "图片",
    "视频",
    "学术",
    "词典",
    "地图",
)


def bing_index_lock_query(
    *,
    mkt: str = "en-US",
    international: bool = False,
    count: int | None = None,
) -> str:
    """
    技术层锁定市场 / 索引的查询串（不含 ``q=``）。

    - ``setmkt`` + ``mkt``：双写市场，减少只靠 Cookie 被踢回 CN。
    - ``qs=n`` / ``sp=-1`` / ``lq=0``：关掉建议改写与本地化连带（不改用户查询正文）。
    - ``ensearch=1``：CN 主机上的国际索引开关。

    参数
    ----
    mkt:
        目标市场。
    international:
        True 时锁 en-US 并带国际版开关。
    count:
        可选；首页不传，搜索页传期望条数。

    返回
    ----
    已 ``&`` 拼接的查询串。
    """
    effective_mkt = "en-US" if international else mkt
    lang = effective_mkt.split("-")[0] if "-" in effective_mkt else effective_mkt
    cc = effective_mkt.split("-")[-1].upper() if "-" in effective_mkt else "US"
    parts = [
        "form=QBLH",
        f"mkt={effective_mkt}",
        f"setmkt={effective_mkt}",
        f"setlang={lang}",
        f"cc={cc}",
        "qs=n",
        "sp=-1",
        "lq=0",
    ]
    if count is not None:
        parts.append(f"count={int(count)}")
    if international:
        parts.append("ensearch=1")
    return "&".join(parts)


def build_bing_search_url(
    query: str,
    *,
    mkt: str = "en-US",
    count: int = 10,
    international: bool = False,
    host: str = "www.bing.com",
) -> str:
    """
    构造 Bing 网页搜索 URL。

    参数
    ----
    query:
        搜索词。
    mkt:
        市场/语言，如 ``en-US``、``zh-CN``（写入 ``setlang`` / ``cc``）。
    count:
        期望结果数提示（Bing 未必严格遵守）。
    international:
        True 时追加 ``ensearch=1``（CN Bing「国际版」开关），并偏向 en-US。
    host:
        主机名；国际版强制重试时用 ``www.bing.com``。

    返回
    ----
    完整搜索 URL 字符串。
    """
    q = quote_plus(query)
    lock = bing_index_lock_query(mkt=mkt, international=international, count=count)
    return f"https://{host}/search?q={q}&{lock}"


def build_bing_home_url(
    *,
    mkt: str = "en-US",
    international: bool = False,
    host: str = "www.bing.com",
) -> str:
    """
    构造 Bing 首页 URL，供「先打开首页再在搜索框输入」（用户习惯）。

    参数
    ----
    mkt:
        市场代码。
    international:
        True 时带 ``ensearch=1`` 并偏向 en-US。
    host:
        主机名。

    返回
    ----
    首页 URL。
    """
    lock = bing_index_lock_query(mkt=mkt, international=international, count=None)
    return f"https://{host}/?{lock}"


def serp_url_has_session_bleed(url: str) -> bool:
    """
    当前 SERP URL 是否带上一词会话参数（``pq`` / ``cvid`` 等）。

    参数
    ----
    url:
        ``page.url``。
    """
    try:
        qs = parse_qsl(urlparse(url or "").query, keep_blank_values=True)
    except Exception:
        return False
    return any(k.lower() in _SESSION_BLEED_KEYS for k, _v in qs)


def relock_bing_serp_url(
    url: str,
    *,
    mkt: str = "en-US",
    international: bool = False,
) -> str | None:
    """
    去掉会话串味参数，并补上市场/国际版锁。

    搜索框提交常丢掉 ``ensearch=1``、带上 ``pq=上一词``；需要重载时返回新 URL，
    无需改动则返回 ``None``。

    参数
    ----
    url:
        当前结果页 URL。
    mkt:
        目标市场。
    international:
        是否锁国际索引。

    返回
    ----
    需要 ``goto`` 的新 URL，或 ``None``。
    """
    raw = url or ""
    if not raw.startswith("http"):
        return None
    parsed = urlparse(raw)
    host = (parsed.netloc or "").lower()
    if "bing.com" not in host:
        return None
    qs_list = parse_qsl(parsed.query, keep_blank_values=True)
    query_text = ""
    kept: list[tuple[str, str]] = []
    had_bleed = False
    for key, val in qs_list:
        low = key.lower()
        if low in _SESSION_BLEED_KEYS:
            had_bleed = True
            continue
        if low == "q":
            query_text = val
            continue
        # 锁参数下面统一重写，先丢掉旧的以免重复
        if low in {
            "form",
            "mkt",
            "setmkt",
            "setlang",
            "cc",
            "qs",
            "sp",
            "lq",
            "ensearch",
            "count",
        }:
            continue
        kept.append((key, val))
    if not query_text:
        return None
    missing_lock = international and "ensearch=1" not in raw.lower()
    missing_setmkt = "setmkt=" not in raw.lower()
    if not had_bleed and not missing_lock and not missing_setmkt:
        return None
    lock = bing_index_lock_query(mkt=mkt, international=international, count=10)
    new_query = f"q={quote_plus(query_text)}&{lock}"
    extra = urlencode(kept, doseq=True)
    if extra:
        new_query = f"{new_query}&{extra}"
    return urlunparse(
        (parsed.scheme or "https", parsed.netloc, parsed.path or "/search", "", new_query, "")
    )


def detect_bing_challenge(page: Any) -> dict[str, Any]:
    """
    检测验证码 / 流量异常拦截页（解析有机结果会得到空或乱码）。

    参数
    ----
    page:
        已加载的 Playwright Page。

    返回
    ----
    ``is_challenge`` / ``reasons``。
    """
    reasons: list[str] = []
    final_url = ""
    try:
        final_url = (page.url or "").lower()
    except Exception:
        final_url = ""
    if "captcha" in final_url or "challenge" in final_url:
        reasons.append(f"url={urlparse(final_url).path}")
    try:
        sample = (page.inner_text("body") or "")[:2000].lower()
    except Exception:
        sample = ""
    for marker in _CHALLENGE_MARKERS:
        if marker in sample:
            reasons.append(f"text:{marker}")
            break
    return {"is_challenge": bool(reasons), "reasons": reasons}


def is_cn_bing_host(url: str) -> bool:
    """
    判断最终落地 URL 是否为中国区 Bing 主机。

    参数
    ----
    url:
        当前页 ``page.url``。

    返回
    ----
    True 表示 ``cn.bing.com``（或明显中国区子域）。
    """
    host = (urlparse(url).netloc or "").lower()
    if host.startswith("www."):
        host = host[4:]
    return host == "cn.bing.com" or host.startswith("cn.bing.")


def _looks_cn_domain(domain: str) -> bool:
    """
    判断有机结果域名是否偏中国区站点。

    参数
    ----
    domain:
        小写域名。
    """
    d = (domain or "").lower()
    if not d:
        return False
    if d.endswith(".cn") or ".cn." in d:
        return True
    return any(d == m or d.endswith("." + m) or m in d for m in _CN_DOMAIN_MARKERS)


def detect_cn_bing(
    page: Any,
    organic: list[dict[str, Any]] | None = None,
    *,
    mkt: str = "en-US",
) -> dict[str, Any]:
    """
    检测当前结果页是否为中国区 Bing（主机 / UI / 结果地域）。

    当 ``mkt`` 已是 ``zh-CN`` 等中文市场时，仍报告信号，但调用方可选择不强制切国际版。

    参数
    ----
    page:
        Playwright Page（已加载搜索结果）。
    organic:
        可选；已解析的有机结果，用于域名地域比例。
    mkt:
        本次请求的目标市场。

    返回
    ----
    字典：``is_cn`` / ``reasons`` / ``final_url`` / ``cn_organic_ratio``。
    """
    reasons: list[str] = []
    final_url = ""
    try:
        final_url = page.url or ""
    except Exception:
        final_url = ""

    if is_cn_bing_host(final_url):
        # cn 主机 + ensearch=1 = 官方「国际版」索引，不当作需再切的国内版
        if "ensearch=1" in (final_url or "").lower():
            reasons.append("host=cn.bing.com+ensearch=1(international_index)")
        else:
            reasons.append(f"host={urlparse(final_url).netloc}")

    # html lang / 可见中文 UI
    try:
        html_lang = (page.get_attribute("html", "lang") or "").lower()
    except Exception:
        html_lang = ""
    if html_lang.startswith("zh"):
        reasons.append(f"html_lang={html_lang}")

    try:
        # 只取首屏附近文本，避免全文扫描过慢
        body_sample = page.inner_text("body")[:2500]
    except Exception:
        body_sample = ""
    hit_ui = [m for m in _CN_UI_MARKERS if m in body_sample]
    # 「国际版」按钮本身就说明当前是国内版界面（国际版页通常显示「国内版」）
    if "国际版" in hit_ui and "ensearch=1" not in (final_url or "").lower():
        reasons.append("ui:国际版入口")
    elif "国内版" in hit_ui:
        # 已在国际版 UI
        pass
    elif len(hit_ui) >= 3 and (mkt.lower().startswith("en") or "US" in mkt.upper()):
        # 目标是国际市场，但 UI 大量中文文案
        reasons.append("ui:" + ",".join(hit_ui[:4]))

    cn_ratio = 0.0
    if organic:
        cn_n = sum(1 for r in organic if _looks_cn_domain(r.get("domain") or ""))
        cn_ratio = cn_n / max(1, len(organic))
        # 目标 en-US 时，前排大量 .cn / 国内站 → 视为被推到 CN 索引
        if (mkt.lower().startswith("en") or mkt.upper().endswith("US")) and cn_ratio >= 0.5:
            reasons.append(f"organic_cn_ratio={cn_ratio:.2f}")

    # 需要「强制切国际版」的信号：排除已是 ensearch 国际索引的仅主机标记
    force_reasons = [
        r
        for r in reasons
        if not r.startswith("host=cn.bing.com+ensearch")
    ]
    is_cn = bool(force_reasons)
    return {
        "is_cn": is_cn,
        "reasons": reasons,
        "force_reasons": force_reasons,
        "final_url": final_url,
        "cn_organic_ratio": cn_ratio,
    }


def _unwrap_bing_href(href: str) -> str:
    """
    若 href 是 Bing 跳转包装，尽量还原落地 URL；否则原样返回。

    支持常见 ``u=`` 明文 http(s)，以及 ``u=a1`` + Base64 编码的目标（国际版常见）。

    参数
    ----
    href:
        结果链接上的 href。

    返回
    ----
    尽量接近真实落地页的 URL。
    """
    import base64

    if not href:
        return ""
    # 相对或非 bing 包装：直接返回
    parsed = urlparse(href)
    host = (parsed.netloc or "").lower()
    if "bing.com" not in host and "microsoft.com" not in host:
        return href
    # 解析查询参数里的目标
    qs = parse_qs(parsed.query)
    for key in _REDIRECT_PARAM_KEYS:
        if key not in qs or not qs[key]:
            continue
        raw = unquote(qs[key][0])
        if raw.startswith("http://") or raw.startswith("https://"):
            return raw
        # Bing 国际版跟踪链：u=a1 + base64(utf-8 URL)
        if raw.startswith("a1") and len(raw) > 4:
            b64 = raw[2:]
            # 补齐 padding
            pad = "=" * ((4 - len(b64) % 4) % 4)
            try:
                decoded = base64.urlsafe_b64decode(b64 + pad).decode("utf-8", "ignore")
            except Exception:
                try:
                    decoded = base64.b64decode(b64 + pad).decode("utf-8", "ignore")
                except Exception:
                    decoded = ""
            if decoded.startswith("http://") or decoded.startswith("https://"):
                return decoded
    return href


def _domain_of(url: str) -> str:
    """
    从 URL 提取小写注册域名（去掉 www.）。

    参数
    ----
    url:
        任意 http(s) URL。

    返回
    ----
    域名字符串；解析失败则为空串。
    """
    try:
        host = urlparse(url).netloc.lower()
    except Exception:
        return ""
    if host.startswith("www."):
        host = host[4:]
    return host


def parse_organic_results(page: Any, *, limit: int = 10) -> list[dict[str, Any]]:
    """
    从当前 Bing 结果页解析有机结果列表。

    参数
    ----
    page:
        已加载 Bing 搜索页的 Playwright Page。
    limit:
        最多保留条数。

    返回
    ----
    字典列表，每项含 ``rank`` / ``title`` / ``url`` / ``domain`` / ``snippet``。
    """
    results: list[dict[str, Any]] = []
    # Bing 经典有机块；多取一些再过滤广告包
    items = page.query_selector_all("li.b_algo")
    if not items:
        logger.warning("no li.b_algo found; Bing markup may have changed")
        return results

    cap = max(1, int(limit))
    for item in items:
        if len(results) >= cap:
            break
        # 跳过广告 / 侧栏包装的伪有机块
        try:
            is_pack = bool(
                item.evaluate(
                    """el => {
                        const cls = ((el.getAttribute('class') || '') + ' ' +
                            ((el.parentElement && el.parentElement.className) || '')).toLowerCase();
                        if (cls.includes('b_ad')) return true;
                        if (el.closest('#b_context, .b_ad, #b_ads, #b_topw .b_ads')) return true;
                        return false;
                    }"""
                )
            )
        except Exception:
            is_pack = False
        if is_pack:
            continue
        # 标题与链接
        title = ""
        href = ""
        link_el = item.query_selector("h2 a")
        if link_el:
            title = (link_el.inner_text() or "").strip()
            href = _unwrap_bing_href(link_el.get_attribute("href") or "")
        # 摘要：优先 caption 段落
        snippet = ""
        caption = item.query_selector(".b_caption p, .b_lineclamp2, .b_lineclamp3, p")
        if caption:
            snippet = (caption.inner_text() or "").strip()
        # 展示 URL（cite）作后备
        if not href:
            cite = item.query_selector("cite")
            if cite:
                cite_text = (cite.inner_text() or "").strip()
                if cite_text and not cite_text.startswith("http"):
                    cite_text = "https://" + cite_text.split()[0]
                href = cite_text
        # 清洗空白与过长摘要
        snippet = re.sub(r"\s+", " ", snippet)[:500]
        title = re.sub(r"\s+", " ", title)[:300]
        if not title and not href:
            continue
        # 相关搜索链混进 b_algo 时丢掉
        href_l = (href or "").lower()
        if "bing.com/search" in href_l and "q=" in href_l:
            continue
        results.append(
            {
                "rank": len(results) + 1,
                "title": title,
                "url": href,
                "domain": _domain_of(href),
                "snippet": snippet,
            }
        )
    return results


def parse_related_searches(page: Any, *, limit: int = 12) -> list[str]:
    """
    解析页面底部 / 侧栏「相关搜索」文案。

    参数
    ----
    page:
        Playwright Page。
    limit:
        最多条数。

    返回
    ----
    相关搜索字符串列表（去重保序）。
    """
    texts: list[str] = []
    seen: set[str] = set()
    # 页底 Related searches / 相关搜索；CN 国际版类名常变，多选择器兜底
    selectors = [
        ".b_rs a",
        "#brsv3 a",
        "#b_context .b_rs a",
        ".b_rrsr a",
        "#brs_section a",
        "[aria-label*='Related'] a",
        "[aria-label*='related'] a",
        ".b_vList a",
        "[class*='related'] a",
        "h2 + ul a[href*='/search']",
        "a[href*='/search?q='][class*='rs']",
    ]
    skip = {
        "related searches",
        "people also search for",
        "related",
        "相关搜索",
        "其他人还搜索了",
        "images",
        "videos",
        "maps",
        "news",
    }
    for sel in selectors:
        for el in page.query_selector_all(sel):
            t = re.sub(r"\s+", " ", (el.inner_text() or "").strip())
            if not t or len(t) > 120:
                continue
            key = t.lower()
            if key in seen or key in skip:
                continue
            href = (el.get_attribute("href") or "").lower()
            looks_like_query = (" " in t) or ("-" in t) or (len(t) >= 8)
            if href and "/search" not in href and "q=" not in href and not looks_like_query:
                continue
            seen.add(key)
            texts.append(t)
            if len(texts) >= limit:
                return texts
    return texts


def parse_people_also_ask(page: Any, *, limit: int = 8) -> list[str]:
    """
    尝试解析 Bing「人们还问」类折叠问题（若页面存在）。

    参数
    ----
    page:
        Playwright Page。
    limit:
        最多条数。

    返回
    ----
    问题字符串列表；无则空列表。
    """
    questions: list[str] = []
    seen: set[str] = set()
    # Bing PAA 结构不稳定，多选择器兜底
    selectors = [
        ".b_vPanel .df_qntext",
        ".b_vPanel [role='button']",
        "#relatedQnAListDisplay .b_vlist2col li",
        "[aria-label*='also ask']",
    ]
    for sel in selectors:
        for el in page.query_selector_all(sel):
            t = re.sub(r"\s+", " ", (el.inner_text() or "").strip())
            if not t or "?" not in t and len(t) < 12:
                # 无问号的短串多半不是 PAA
                if "?" not in t:
                    continue
            key = t.lower()
            if key in seen:
                continue
            seen.add(key)
            questions.append(t[:200])
            if len(questions) >= limit:
                return questions
    return questions
