# -*- coding: utf-8 -*-
"""
Bing 查询搜法：按真实用户习惯构造词，并检测 SERP 污染。

背景
----
2026-08-31 P0 场景批在 CN Bing 国际版上大量实体劫持与会话串味：
品牌打头 → 官网首页；短动词 ``create``/``make`` → 游戏/自动化品牌；
``og`` → 俚语；数字打头 → 专利/编辑器；同一 page 连续搜 → 整页变成
农商银行 / 135 编辑器 / GTA 模组等与查询无关的中文结果。

原则（用户习惯，不是运算符把戏）
--------------------------------
- 用户几乎不加引号、不把品牌挪到句尾。
- 用户搜工具时用**完整任务句**：对象 + 约束（``size`` / ``online`` / ``requirements``）。
- 技术专名按用户复制法连写（``apple-touch-icon``），缩写还原成口语（``og`` → ``open graph``）。
- 歧义动词打头时，用户更常搜「对象 + online」，而不是 ``create X``。
- 污染时换搜法重抓；仍脏则标 ``unusable``，禁止草稿 ``long_gap``（策略 §3.3 D / I）。
"""

from __future__ import annotations

import re
from collections import Counter
from typing import Any
from urllib.parse import urlparse

# —— 停用词：不算「查询是否被结果覆盖」的区分词 ——
_STOPWORDS = frozenset(
    {
        "a",
        "an",
        "the",
        "to",
        "for",
        "of",
        "in",
        "on",
        "and",
        "or",
        "how",
        "free",
        "www",
        "com",
        "with",
        "from",
        "your",
        "my",
        "at",
        "by",
        "is",
        "be",
    }
)

# —— 打头即被 Bing CN 绑到无关实体的动词（P0：create→Minecraft，make→Make.com）——
_AMBIGUOUS_LEAD_VERBS = frozenset({"create", "make", "get", "play", "go"})

# —— 「online X」打头常进词典/小游戏；用户搜工具是 「X online」——
_LEAD_ONLINE = "online"

# —— 品牌打头：用户确实这样搜，但 CN Bing 常只认品牌、丢掉后面的任务词 ——
_BRAND_LEAD_TOKENS = frozenset(
    {
        "amazon",
        "apple",
        "iphone",
        "ipad",
        "ios",
        "facebook",
        "instagram",
        "linkedin",
        "twitter",
        "google",
        "microsoft",
        "samsung",
        "tiktok",
        "youtube",
        "whatsapp",
        "meta",
    }
)

# —— 规格类任务词：品牌+这些词时，用户也常补 requirements ——
_SPEC_HINT_TOKENS = frozenset(
    {"image", "screenshot", "icon", "banner", "thumbnail", "favicon"}
)

# —— 英文工具查询却整页都是这些站 → 会话/索引污染（P0 实证）——
_CN_JUNK_HOST_MARKERS = (
    "scrcu.com",
    "135editor.com",
    "135read.com",
    "135plat.com",
    "cnipa.gov.cn",
    "52pojie.cn",
    "gta5-mods.com",
    "baidu.com",
    "zhihu.com",
    "xiumi.us",
)

# —— 空白压缩 ——
_WS_RE = re.compile(r"\s+")

# —— 像素尺寸（1200x630 / 2000×2000）；打头时 CN Bing 易当成案号/型号 ——
_DIM_TOKEN_RE = re.compile(r"^\d{2,5}[x×]\d{2,5}$", re.I)

# —— 句中的像素尺寸 ——
_DIM_IN_TEXT_RE = re.compile(r"\d{2,5}\s*[x×]\s*\d{2,5}", re.I)


def collapse_ws(text: str) -> str:
    """
    把连续空白压成单空格并去掉首尾。

    参数
    ----
    text:
        任意字符串。

    返回
    ----
    规范化后的字符串；空输入得到空串。
    """
    return _WS_RE.sub(" ", (text or "").strip())


def strip_user_quotes(query: str) -> str:
    """
    去掉整句或词两侧的直引号。用户搜工具时几乎不加引号；
    P0 「quoted」批在加载时被剥引号后仍污染，引号不是防污染手段。

    参数
    ----
    query:
        原始查询。

    返回
    ----
    去引号后的查询。
    """
    q = collapse_ws(query)
    # 整句被引号包住
    if len(q) >= 2 and q[0] in "\"'" and q[-1] == q[0]:
        q = q[1:-1].strip()
    # 残留的成对引号
    q = q.replace('"', " ").replace("'", " ")
    return collapse_ws(q)


def _norm_token(token: str) -> str:
    """
    词元小写并去掉首尾标点，保留内部连字符。

    参数
    ----
    token:
        空白切分后的一段。

    返回
    ----
    规范化词元。
    """
    return re.sub(r"^[^a-z0-9]+|[^a-z0-9]+$", "", (token or "").lower())


def expand_user_abbreviations(query: str) -> str:
    """
    把用户口头缩写还原成他们实际想搜的短语。

    ``og`` / ``og:image`` → ``open graph`` / ``open graph image``。
    已是 ``open graph`` 的句子不会被二次替换。

    参数
    ----
    query:
        已去引号的查询。

    返回
    ----
    展开后的查询。
    """
    q = query
    # HTML 属性写法：用户复制 og:image 时，口语仍是 open graph image
    q = re.sub(r"\bog:image\b", "open graph image", q, flags=re.I)
    q = re.sub(r"\bog\b", "open graph", q, flags=re.I)
    return collapse_ws(q)


def apply_hyphen_compounds(query: str) -> str | None:
    """
    把用户/开发者会连写的专名加上连字符。

    仅处理有证据的专名（HTML ``rel``）。不把 ``open graph`` 连成
    ``open-graph``——用户搜的是空格形式。

    参数
    ----
    query:
        规范化查询。

    返回
    ----
    有改写则返回新句；否则 ``None``。
    """
    q = query
    # apple touch icon → apple-touch-icon（P0：带连字符的种子才进文档 SERP）
    new = re.sub(
        r"\bapple\s+touch\s+icon\b",
        "apple-touch-icon",
        q,
        flags=re.I,
    )
    new = collapse_ws(new)
    if new.lower() != q.lower():
        return new
    return None


def move_dimension_off_lead(query: str) -> str | None:
    """
    像素尺寸若打头，挪到句尾。

    用户有时搜 ``1200x630 social share image``；CN Bing 会把数字当案号。
    更稳的用户说法是任务名词在前：``social share image 1200x630``。

    参数
    ----
    query:
        规范化查询。

    返回
    ----
    有改写则返回新句；否则 ``None``。
    """
    tokens = query.split()
    if len(tokens) < 2:
        return None
    if _DIM_TOKEN_RE.match(tokens[0]):
        return collapse_ws(" ".join(tokens[1:] + [tokens[0]]))
    return None


def dimension_to_size_phrase(query: str) -> str | None:
    """
    句中带 ``1200x630`` 这类尺寸时，再给一条用户更常搜的 ``… size``。

    P0 干净种子是 ``open graph image size``，不是 ``og image 1200x630``。

    参数
    ----
    query:
        规范化查询。

    返回
    ----
    去掉尺寸并保证含 size/dimensions 的句子；无尺寸则 ``None``。
    """
    if not _DIM_IN_TEXT_RE.search(query):
        return None
    without = collapse_ws(_DIM_IN_TEXT_RE.sub(" ", query))
    if not without:
        return None
    if re.search(r"\b(size|dimensions?|pixels?)\b", without, re.I):
        return without
    return collapse_ws(without + " size")


def object_first_user_phrasing(query: str) -> str | None:
    """
    歧义动词 / ``online`` 打头时，改成对象在前的用户说法。

    - ``create zip file`` → ``zip file online``
    - ``create zip file online`` → ``zip file online``
    - ``online zip creator`` → ``zip creator online``
    - ``open graph …`` 不动（``open graph`` 是用户专名，不是动词 Open）

    参数
    ----
    query:
        规范化查询。

    返回
    ----
    有改写则返回新句；否则 ``None``。
    """
    tokens = query.split()
    if len(tokens) < 2:
        return None
    lead = _norm_token(tokens[0])
    rest = tokens[1:]
    # 保护 open graph
    if lead == "open" and rest and _norm_token(rest[0]) == "graph":
        return None
    rest_lower = {_norm_token(t) for t in rest}
    if lead == _LEAD_ONLINE:
        # 用户搜在线工具：对象 + online，而不是 online + 词典义
        if "online" in rest_lower:
            return collapse_ws(" ".join(rest))
        return collapse_ws(" ".join(list(rest) + ["online"]))
    if lead in _AMBIGUOUS_LEAD_VERBS:
        if "online" not in rest_lower:
            return collapse_ws(" ".join(list(rest) + ["online"]))
        return collapse_ws(" ".join(rest))
    return None


def pluralize_zip_file(query: str) -> str | None:
    """
    ``zip file`` → ``zip files``（P0 Google/Bing 头词是 zip files online）。

    参数
    ----
    query:
        一条候选查询。

    返回
    ----
    有改写则返回；否则 ``None``。
    """
    new = re.sub(r"\bzip file\b", "zip files", query, flags=re.I)
    new = collapse_ws(new)
    if new.lower() != query.lower():
        return new
    return None


def add_spec_requirements(query: str) -> str | None:
    """
    品牌 + 图片/截图任务时，补用户也搜的 ``requirements``。

    不把品牌挪到句尾（P0 ``product image size amazon`` 仍然污染，且不像用户）。

    参数
    ----
    query:
        规范化查询。

    返回
    ----
    有补词则返回；否则 ``None``。
    """
    tokens = [_norm_token(t) for t in query.split() if _norm_token(t)]
    if not tokens:
        return None
    lead = tokens[0]
    token_set = set(tokens)
    if lead not in _BRAND_LEAD_TOKENS:
        return None
    if not (token_set & _SPEC_HINT_TOKENS):
        return None
    if token_set & {"requirements", "specs", "specifications", "spec"}:
        return None
    return collapse_ws(query + " requirements")


def normalize_seed_query(seed: str) -> str:
    """
    种子 → 第一条实搜词：去引号、压空白、展开缩写。

    参数
    ----
    seed:
        词表里的原始一行。

    返回
    ----
    规范化查询；空种子得到空串。
    """
    q = strip_user_quotes(seed)
    q = expand_user_abbreviations(q)
    return collapse_ws(q)


def habit_query_variants(seed: str, *, max_variants: int = 3) -> list[str]:
    """
    按用户搜法生成有序变体（去重保序）。

    第 1 条永远是规范化种子（仍是用户原句，只去引号/展开缩写）。
    后续才是防污染改写；条数受 ``max_variants`` 限制。

    参数
    ----
    seed:
        词表原句。
    max_variants:
        最多保留几条（含种子）；至少 1。

    返回
    ----
    非空查询列表。
    """
    limit = max(1, int(max_variants))
    seen: set[str] = set()
    out: list[str] = []

    def _add(candidate: str | None) -> None:
        """把非空、未见过的候选追加到 ``out``。"""
        if not candidate:
            return
        q = collapse_ws(candidate)
        if not q:
            return
        key = q.lower()
        if key in seen:
            return
        seen.add(key)
        out.append(q)

    # 1. 用户原句（规范化）
    normalized = normalize_seed_query(seed)
    _add(normalized)

    # 2. 专名连字符、尺寸挪位、动词改对象先行
    _add(apply_hyphen_compounds(normalized))
    _add(move_dimension_off_lead(normalized))
    obj = object_first_user_phrasing(normalized)
    _add(obj)
    if obj:
        _add(pluralize_zip_file(obj))
    _add(dimension_to_size_phrase(normalized))
    _add(add_spec_requirements(normalized))

    # 连写后再走一遍对象先行（少见，但 apple 句不需要）
    hyph = apply_hyphen_compounds(normalized)
    if hyph:
        _add(object_first_user_phrasing(hyph))

    if not out:
        fallback = collapse_ws(seed) or "query"
        return [fallback]
    return out[:limit]


def _majority_cjk(text: str) -> bool:
    """
    标题是否以汉字为主（英文工具查询不该整页都是这种 title）。

    参数
    ----
    text:
        结果标题。
    """
    cjk_n = len(re.findall(r"[\u4e00-\u9fff]", text or ""))
    latin_n = len(re.findall(r"[A-Za-z]", text or ""))
    if cjk_n == 0:
        return False
    return cjk_n >= 8 and cjk_n > latin_n


def technical_lang_lock_query(query: str) -> str | None:
    """
    技术兜底：在查询后追加 ``language:en``（不改用户 H1，只用于重抓）。

    仅英文任务句、且尚未带该运算符时返回。习惯变体用尽仍污染时再用。

    参数
    ----
    query:
        当前实搜词。

    返回
    ----
    带语言锁的查询；不适用则为 ``None``。
    """
    if not _looks_english_query(query):
        return None
    if re.search(r"\blanguage:en\b", query or "", re.I):
        return None
    return collapse_ws(f"{query} language:en")


def distinctive_tokens(query: str) -> list[str]:
    """
    抽取用于覆盖检测的区分词（小写字母数字；去掉停用词与单字符）。

    连字符词会拆开（``apple-touch-icon`` → apple, touch, icon），
    以便标题只写 Apple Touch Icon 时仍能命中。

    参数
    ----
    query:
        实搜查询。

    返回
    ----
    保序去重的词元列表。
    """
    found = re.findall(r"[a-z0-9]+", (query or "").lower())
    out: list[str] = []
    seen: set[str] = set()
    for tok in found:
        if tok in _STOPWORDS or len(tok) < 2:
            continue
        if tok in seen:
            continue
        seen.add(tok)
        out.append(tok)
    return out


def _looks_english_query(query: str) -> bool:
    """
    判断查询是否以拉丁字母为主（英文工具词）。

    用于：英文查询却整页中文站 → 判污染。

    参数
    ----
    query:
        实搜查询。
    """
    letters = re.findall(r"[A-Za-z\u4e00-\u9fff]", query or "")
    if not letters:
        return True
    latin = sum(1 for ch in letters if "A" <= ch.upper() <= "Z")
    return latin / max(1, len(letters)) >= 0.6


def _base_host(domain: str) -> str:
    """
    取域名最后两段作粗注册域（``pharmacy.amazon.com`` → ``amazon.com``）。

    参数
    ----
    domain:
        小写主机名。
    """
    parts = [p for p in (domain or "").lower().split(".") if p]
    if len(parts) >= 2:
        return ".".join(parts[-2:])
    return domain.lower() if domain else ""


def _blob_of_row(row: dict[str, Any]) -> str:
    """
    单条有机结果的 title+snippet 小写拼接。

    参数
    ----
    row:
        解析出的有机结果字典。
    """
    title = row.get("title") or ""
    snippet = row.get("snippet") or ""
    return f"{title} {snippet}".lower()


def _host_is_junk(domain: str) -> bool:
    """
    域名是否落在已知 CN 串味标记上。

    参数
    ----
    domain:
        有机结果域名。
    """
    d = (domain or "").lower()
    if not d:
        return False
    return any(d == m or d.endswith("." + m) or m in d for m in _CN_JUNK_HOST_MARKERS)


def score_serp_pollution(
    query: str,
    organic: list[dict[str, Any]] | None,
    *,
    cn_detect: dict[str, Any] | None = None,
    challenge: dict[str, Any] | None = None,
) -> dict[str, Any]:
    """
    评估当前 SERP 是否被实体劫持 / 会话串味 / 国内索引污染。

    判定任一成立即 ``polluted=True``（策略 §3.3 D：不可当 long_gap 证据）。

    参数
    ----
    query:
        **实际发出**的查询（变体，不是词表种子）。
    organic:
        ``parse_organic_results`` 产出。
    cn_detect:
        可选；``detect_cn_bing`` 结果。国际版目标下国内站占比过高也算污染。
    challenge:
        可选；``detect_bing_challenge`` 结果。验证码页视为不可用。

    返回
    ----
    ``polluted`` / ``reasons`` / ``token_coverage`` / ``dominant_host`` /
    ``dominant_host_ratio`` / ``junk_host_n``。
    """
    rows = list(organic or [])
    reasons: list[str] = []
    tokens = distinctive_tokens(query)

    # 空结果：无法确认意图
    if not rows:
        reasons = ["empty_organic"]
        if (challenge or {}).get("is_challenge"):
            reasons.append("challenge_page")
        return {
            "polluted": True,
            "reasons": reasons,
            "token_coverage": 0.0,
            "dominant_host": "",
            "dominant_host_ratio": 0.0,
            "junk_host_n": 0,
        }

    # —— 区分词覆盖：查询里的任务词应出现在多条 title/snippet ——
    blobs = [_blob_of_row(r) for r in rows]
    min_docs = 2 if len(rows) >= 4 else 1
    hit_n = 0
    missing: list[str] = []
    for tok in tokens:
        n = sum(1 for blob in blobs if tok in blob)
        if n >= min_docs:
            hit_n += 1
        else:
            missing.append(tok)
    coverage = hit_n / max(1, len(tokens)) if tokens else 1.0

    # 三条及以上任务词时，覆盖过低 = 引擎只认了打头实体
    if tokens and len(tokens) >= 2 and coverage <= 0.45:
        reasons.append(
            f"token_coverage={coverage:.2f} missing={','.join(missing[:6])}"
        )

    # —— 同域垄断：整页同一注册域且覆盖差 → 会话串味（农商/GTA/135）——
    bases = [_base_host(r.get("domain") or "") for r in rows]
    bases = [b for b in bases if b]
    dominant_host = ""
    dominant_ratio = 0.0
    if len(bases) >= 5:
        top_host, top_n = Counter(bases).most_common(1)[0]
        dominant_host = top_host
        dominant_ratio = top_n / len(bases)
        if dominant_ratio >= 0.7 and coverage < 0.7:
            reasons.append(f"homogeneous_host={top_host}({dominant_ratio:.2f})")

    # —— 品牌首页吞掉任务词：amazon.com / 且查询还有 image size 等 ——
    if tokens and len(tokens) >= 3:
        lead = tokens[0]
        homepage_hits = 0
        for row in rows[:5]:
            path = urlparse(row.get("url") or "").path or "/"
            host0 = ((row.get("domain") or "").split(".") or [""])[0]
            if path in ("/", "") and lead and lead == host0:
                homepage_hits += 1
        if homepage_hits >= 3:
            reasons.append(f"brand_homepage_lead={lead} n={homepage_hits}")

    # —— 英文查询 + 已知串味站占多数 ——
    junk_n = sum(1 for r in rows if _host_is_junk(r.get("domain") or ""))
    if _looks_english_query(query) and len(rows) >= 5 and junk_n >= 5:
        reasons.append(f"cn_junk_hosts={junk_n}/{len(rows)}")

    # —— 目标已是国际版，有机结果仍过半国内站（ensearch 失败/被踢回）——
    cn = cn_detect or {}
    cn_ratio = float(cn.get("cn_organic_ratio") or 0.0)
    if cn_ratio >= 0.5 and _looks_english_query(query):
        reasons.append(f"cn_organic_ratio={cn_ratio:.2f}")

    ch = challenge or {}
    if ch.get("is_challenge"):
        reasons.append("challenge_page")

    # —— 英文查询但多数 title 是中文：索引/会话被踢到中文垂类 ——
    if _looks_english_query(query) and len(rows) >= 5:
        cjk_titles = sum(1 for r in rows if _majority_cjk(r.get("title") or ""))
        if cjk_titles >= 6:
            reasons.append(f"cjk_titles={cjk_titles}/{len(rows)}")

    return {
        "polluted": bool(reasons),
        "reasons": reasons,
        "token_coverage": round(coverage, 3),
        "dominant_host": dominant_host,
        "dominant_host_ratio": round(dominant_ratio, 3),
        "junk_host_n": junk_n,
    }


def apply_pollution_gate(analysis: dict[str, Any], pollution: dict[str, Any]) -> dict[str, Any]:
    """
    污染时覆盖草稿 tier：禁止 ``long_gap`` 立项。

    参数
    ----
    analysis:
        ``draft_competition_tier`` 产出（会被复制后改）。
    pollution:
        ``score_serp_pollution`` 产出。

    返回
    ----
    带 ``serp_usable`` / ``pollution`` 的分析字典。
    """
    out = dict(analysis)
    out["pollution"] = pollution
    if pollution.get("polluted"):
        why = "; ".join(pollution.get("reasons") or []) or "unknown"
        out["serp_usable"] = False
        out["competition_tier"] = "unusable"
        out["gap_notes"] = (
            f"SERP polluted ({why}) — §3.3 D/I：不可用噪声 SERP，禁止 long_gap 立项"
        )
    else:
        out["serp_usable"] = True
    return out
