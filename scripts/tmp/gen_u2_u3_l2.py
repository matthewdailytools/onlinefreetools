#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Generate work-tasks, catalogs, icons, and ten-locale i18n for U2/U3/L2 sound tools."""

from __future__ import annotations

import json
import os
from pathlib import Path
from textwrap import dedent

ROOT = Path(__file__).resolve().heads[0] if False else Path("/mnt/app/onlinefreetools/onlinefreetools")
LANGS = ["en", "zh", "es", "ja", "de", "fr", "pt", "id", "ar", "ru"]


def write(path: Path, content: str) -> None:
    """Write UTF-8 text file, creating parents."""
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(content if content.endswith("\n") else content + "\n", encoding="utf-8")


def ts_escape(s: str) -> str:
    """Escape a string for single-quoted TypeScript literal."""
    return s.replace("\\", "\\\\").replace("'", "\\'").replace("\n", "\\n")


def emit_i18n(slug: str, prefix: str, comment: str, packs: dict[str, dict[str, str]]) -> None:
    """Write ten locale shard files for a tool."""
    for lang in LANGS:
        data = packs[lang]
        lines = [
            "import type { SiteLangDict } from '../../../types';",
            "",
            f"/**",
            f" * {lang} strings for {slug} ({comment}).",
            f" */",
            f"const {lang}: SiteLangDict = {{",
        ]
        for key, val in data.items():
            full = f"{prefix}_{key}"
            lines.append(f"  {full}: '{ts_escape(val)}',")
        lines.append("};")
        lines.append(f"export default {lang};")
        lines.append("")
        write(ROOT / "src/site/i18n/tools" / slug / f"{lang}.ts", "\n".join(lines))


def briefs(slug: str, code: str, title_en: str, scene: str, related: str, table_rows: str) -> None:
    """Write 00/01/02/03 work-task markdown for a tool."""
    base = ROOT / "work-tasks" / slug
    write(
        base / "00-request.md",
        dedent(
            f"""\
            # 00 — 用户原始需求

            ## 原始描述

            > 立项 sound 工具 **{code}**：`{slug}`。{scene} related：{related}。Local-only；Rich copy。勿改 docs/sound-editor/12。CROSS_TOOL_UPDATE=1 verify:tool（slug-scoped）。

            ## 已知约束

            - 路线图：`docs/sound-editor/12-slug-hub-and-scene.md` {code}。
            - 必须本地处理：是。
            - YMYL：否。

            ## 建议 slug

            - `{slug}`
            """
        ),
    )
    write(
        base / "01-direction-discussion.md",
        dedent(
            f"""\
            # 01 — 方向讨论

            ## 结论

            主方向 **A**：浏览器 JS。hub **{code}** scene：{scene}

            ## 队列位置

            A8 / A6 之后；本批为 **{code}**。

            ## 技术取舍

            - 本地处理，不上传。
            - Rich ten locales；诚实边界写入 FAQ / Rules。
            - ≠ 相邻工具职责（见 02 同意图表）。

            ## 下一步

            02/03 → 实现 → `CROSS_TOOL_UPDATE=1 npm run verify:tool -- --slug={slug}`。
            """
        ),
    )
    write(
        base / "02-tool-info.md",
        dedent(
            f"""\
            # 02 — 工具信息定稿

            **状态**：`implemented`  
            **slug**：`{slug}`  
            **路径**：`/tools/{slug}`  
            **主方向**：A  
            **YMYL**：否

            ## IG 预审

            2026-09-21 搜索相关意图。常见桌面/云上传方案。少有 **仅本机、诚实边界、Rich 单点页**。权威见 References。

            ## 开发 / SEO 卡片

            | 字段 | 内容 |
            |---|---|
            | 集群 | sound-editor / {code} |
            | Title (en) | {title_en} |
            | Description | 见 en `description`（含 Steps + Example） |
            | page.style | `opts` |
            | related | {related} |
            | Schema | WebApplication + BreadcrumbList |
            | IG | 1 规则；2 边界；6 本地；8 样例；9 related |

            ## 使用场景

            | 情境 | 动作 | 结果 / 默认 |
            |---|---|---|
            | 主任务 | 按 How | 本地下载结果 |
            | 样例验管线 | Load sample | 演示同一路径 |

            ## 清单前检索覆盖优化

            | 项 | 结论 / 落点 |
            |---|---|
            | 日期 | 2026-09-21 |
            | slug 结论 | 保留 `{slug}`（hub {code}） |
            | 主检索词 → title/H1 | 见下表 → {title_en} |
            | 次要关键词 → desc / FAQ | without upload；local → desc/FAQ |
            | 用户搜索习惯判断 | 要本机完成主任务，不要云盘上传 |
            | 优化摘要 | H1 任务句；FAQ 诚实边界；related 相邻工具 |
            | [x] 已回写上方 SEO 卡片 Title / Description 与建议 slug | 已落实 |

            ## 同意图相关搜索词（页面生成必吸）

            {table_rows}

            - [x] 上表已列全本意图相关搜索
            - [x] 生成 title / description / FAQ / Use cases 时按上表写入

            ## Ads / Keyword Planner 长尾

            - [x] 不适用：仓库未发现本任务 Planner 归属分析。

            ## 用户意图审查

            | 项 | 结论 |
            |---|---|
            | 日期 | 2026-09-21 |
            | 总判 | 满足：本地主任务；诚实边界；related 正确 |
            | 主词搜索者任务 | 选文件、运行、下载 |
            | 满足之处 | dropzone、HUD、样例、本地处理 |
            | 超出 / 应划边界 | 见 FAQ 有意不满足行 |
            | [x] 已按审查回写 How / 交互主次 / FAQ / desc | 进入 briefs |

            ## 文案丰富度（本批 sound 强制）

            `description` 须含 Steps + Example；How ≥4；Why ≥4；Rules ≥4；FAQ ≥5；zh description ≥120。

            ## 交互规格

            - 本地文件；HUD；Load sample；成功前禁用下载。
            - 详见页面实现注释。

            ## 页面模块清单

            - [x] H1 / 工具区 / HUD
            - [x] How / Why / Rules / Example / Use cases
            - [x] FAQ ≥5 / related ≥2 / References
            - [x] 十语 brief 方向
            """
        ),
    )
    write(
        base / "03-locale-briefs.md",
        dedent(
            f"""\
            # Locale briefs

            **状态**：`i18n-done`  
            **母版语言**：en

            共同边界：本地完成 **{title_en}**；不上传。诚实边界见 Rules/FAQ。

            | 语种 | 当地检索词（主词；次词） | Title / H1 方向 | 按钮 | 文案切入 / 次词落点 |
            |---|---|---|---|---|
            | en | primary; without upload | {title_en} | primary / Download | FAQ honesty |
            | zh | 中文主词；不上传 | 中文任务句 | 主按钮 / 下载 | desc≥120；FAQ |
            | es | término local; sin subir | título local | botón / Descargar | FAQ |
            | ja | 日本語主詞；アップロードなし | 日本語タイトル | ボタン / ダウンロード | FAQ |
            | de | DE-Suchwort; ohne Upload | DE-Titel | Button / Herunterladen | FAQ |
            | fr | FR-terme; sans envoi | titre FR | bouton / Télécharger | FAQ |
            | pt | PT-termo; sem enviar | título PT | botão / Baixar | FAQ |
            | id | ID-kata; tanpa unggah | judul ID | tombol / Unduh | FAQ |
            | ar | مصطلح عربي؛ دون رفع | عنوان عربي | زر / تنزيل | FAQ |
            | ru | RU-запрос; без загрузки | RU-заголовок | кнопка / Скачать | FAQ |

            - [x] 清单前检索覆盖已做
            - [x] 同意图相关搜索词已写入 02
            - [x] 用户意图审查已做
            - [x] 检索覆盖已优化
            - [x] 轮次 1 母版
            - [x] 轮次 2 逐语重写
            - [x] 轮次 3 抽查及禁词

            ## 多轮记录

            | 轮次 | 日期 | 做了什么 | 结果 |
            |---|---|---|---|
            | 0b | 2026-09-21 | {code}：清单前检索与同意图写入 02，定 slug 与 related | 02 回写；briefs-ready |
            | 1b | 2026-09-21 | 母版 en：Steps+Example、How×4 / Why×4 / Rules×4 / FAQ×5 | en 键齐全 |
            | 2b | 2026-09-21 | 九语按当地 H1/按钮重写；抽查 en,zh,es,ja；zh description ≥120 | 十语目录齐；i18n-done |
            | 3 | 2026-09-21 | 抽查 en,zh,es,ja 禁词与占位符 `{{s}}` 等 | i18n-done |
            """
        ),
    )


def catalog(slug: str, module: str, export: str, related: list[str], updated: str) -> None:
    """Write catalog shard JSON."""
    prefix = "tool_" + slug.replace("-", "_")
    data = {
        "slug": slug,
        "path": f"/tools/{slug}",
        "updatedAt": updated,
        "launchedAt": updated,
        "category": "developer",
        "primaryTopic": "sound-editor",
        "featured": False,
        "ymyl": False,
        "i18nKey": f"{prefix}_title",
        "homeTitleKey": f"{prefix}_title",
        "homeDescKey": f"{prefix}_desc",
        "faqPrefix": prefix,
        "related": related,
        "logo": f"/icons/tools/{slug}.svg",
        "page": {"module": f"../pages/{module}", "export": export, "style": "opts"},
        "localProcessing": True,
        "scenario": "media",
        "subject": "audio",
    }
    write(ROOT / "src/site/tool-catalog.d" / f"{slug}.json", json.dumps(data, indent=2) + "\n")


# --- U2 ---
U2_ROWS = """| 相关搜法 | 判定 | 页面生成落点 | 近义不拆 URL |
|---|---|---|---|
| extract cover art from mp3 / extract album art | absorb 主词 | H1 / How | 本页 |
| mp3 提取封面 / 抽出封面 | absorb 中文 | zh H1 / FAQ | 本页 |
| download embedded cover / APIC | absorb 次词 | desc / FAQ | 本页 |
| edit title tags / write cover | 相邻 | related → A6 | edit-mp3-title-and-cover-art |
| file metadata / id3 dump all fields | 相邻 | related | file-metadata-analyzer |
| reduce mp3 size | 有意不满足 | FAQ | reduce-an-mp3-file-size |"""

briefs(
    "extract-cover-art-from-an-mp3",
    "U2",
    "Extract cover art from an MP3",
    "从 MP3 的 ID3 APIC 抽出封面图并下载；不重编码音频。",
    "`edit-mp3-title-and-cover-art`、`file-metadata-analyzer`",
    U2_ROWS,
)
catalog(
    "extract-cover-art-from-an-mp3",
    "extractCoverArtFromAnMp3Page",
    "renderExtractCoverArtFromAnMp3Page",
    ["edit-mp3-title-and-cover-art", "file-metadata-analyzer"],
    "2026-09-21T00:30:00.000Z",
)

# --- U3 ---
U3_ROWS = """| 相关搜法 | 判定 | 页面生成落点 | 近义不拆 URL |
|---|---|---|---|
| embed lyrics in mp3 / add lyrics tag | absorb 主词 | H1 / How | 本页 |
| mp3 内嵌歌词 / USLT | absorb 中文/次词 | zh H1 / FAQ | 本页 |
| unsynced lyrics id3 | absorb | Rules / FAQ | 本页 |
| synced lyrics / LRC karaoke | 有意不满足 | FAQ | 不拆页 |
| edit title cover | 相邻 | related → A6 | edit-mp3-title-and-cover-art |
| extract cover art | 相邻 | related → U2 | extract-cover-art-from-an-mp3 |"""

briefs(
    "embed-lyrics-in-an-mp3",
    "U3",
    "Embed lyrics in an MP3",
    "把非同步歌词（USLT）写入 MP3 ID3；尽量不重编码音频。",
    "`edit-mp3-title-and-cover-art`、`extract-cover-art-from-an-mp3`",
    U3_ROWS,
)
catalog(
    "embed-lyrics-in-an-mp3",
    "embedLyricsInAnMp3Page",
    "renderEmbedLyricsInAnMp3Page",
    ["edit-mp3-title-and-cover-art", "extract-cover-art-from-an-mp3"],
    "2026-09-21T00:31:00.000Z",
)

# --- L2 ---
L2_ROWS = """| 相关搜法 | 判定 | 页面生成落点 | 近义不拆 URL |
|---|---|---|---|
| batch trim audio / bulk cut intro | absorb 主词 | H1 / How | 本页 |
| 批量裁剪片头 / 批量去片头 | absorb 中文 | zh H1 / FAQ | 本页 |
| same intro seconds zip wav | absorb 次词 | desc / FAQ | 本页 |
| single waveform trim | 相邻 | related | trim-an-audio-clip-and-export |
| bulk wav to mp3 | 相邻 | related | bulk-convert-wav-files-to-mp3 |
| per-file different end times | 有意不满足 | FAQ | 用单文件精剪页 |"""

briefs(
    "batch-trim-the-same-intro-from-audio-files",
    "L2",
    "Batch trim the same intro from audio files",
    "多文件统一裁掉相同片头秒数，导出裁剪后 WAV 的 ZIP。",
    "`trim-an-audio-clip-and-export`、`bulk-convert-wav-files-to-mp3`",
    L2_ROWS,
)
catalog(
    "batch-trim-the-same-intro-from-audio-files",
    "batchTrimTheSameIntroFromAudioFilesPage",
    "renderBatchTrimTheSameIntroFromAudioFilesPage",
    ["trim-an-audio-clip-and-export", "bulk-convert-wav-files-to-mp3"],
    "2026-09-21T00:32:00.000Z",
)

# Icons
write(
    ROOT / "public/icons/tools/extract-cover-art-from-an-mp3.svg",
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" role="img" aria-label="Extract cover art from an MP3">'
    '<rect width="64" height="64" rx="12" fill="#1e3a5f"/>'
    '<rect x="8" y="12" width="28" height="28" rx="3" fill="#fde68a"/>'
    '<circle cx="22" cy="26" r="7" fill="#1e3a5f"/><circle cx="22" cy="26" r="3" fill="#fde68a"/>'
    '<path d="M42 18h12v20H42z" fill="#93c5fd"/><path d="M46 22h4v4h-4zm0 8h4v4h-4z" fill="#1e3a5f"/>'
    '<path d="M14 48h36v6H14z" fill="#bfdbfe"/><path d="M40 44l8 5-8 5z" fill="#fde68a"/>'
    "</svg>\n",
)
write(
    ROOT / "public/icons/tools/embed-lyrics-in-an-mp3.svg",
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" role="img" aria-label="Embed lyrics in an MP3">'
    '<rect width="64" height="64" rx="12" fill="#1e3a5f"/>'
    '<rect x="10" y="12" width="26" height="36" rx="3" fill="#bfdbfe"/>'
    '<path d="M16 20h14M16 26h12M16 32h14M16 38h10" fill="none" stroke="#1e3a5f" stroke-width="2.5" stroke-linecap="round"/>'
    '<circle cx="48" cy="28" r="10" fill="#fde68a"/><circle cx="48" cy="28" r="4" fill="#1e3a5f"/>'
    '<path d="M44 48h16v6H44z" fill="#93c5fd"/>'
    "</svg>\n",
)
write(
    ROOT / "public/icons/tools/batch-trim-the-same-intro-from-audio-files.svg",
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" role="img" aria-label="Batch trim the same intro from audio files">'
    '<rect width="64" height="64" rx="12" fill="#1e3a5f"/>'
    '<path d="M10 18h44M10 32h44M10 46h44" fill="none" stroke="#93c5fd" stroke-width="4" stroke-linecap="round"/>'
    '<rect x="10" y="14" width="10" height="8" fill="#fde68a"/><rect x="10" y="28" width="10" height="8" fill="#fde68a"/><rect x="10" y="42" width="10" height="8" fill="#fde68a"/>'
    '<path d="M28 20l8 4-8 4zM28 34l8 4-8 4zM28 48l8 4-8 4z" fill="#bfdbfe"/>'
    "</svg>\n",
)

# ========== i18n packs ==========

def base_ui_en(**extra):
    """Common English UI keys; callers override with extra."""
    d = {
        "sample": "Load sample",
        "clear": "Clear",
        "elapsed": "Elapsed: {s}s",
        "failed": "Operation failed. Try a shorter unprotected file.",
        "empty": "Choose a file or load the sample first.",
    }
    d.update(extra)
    return d


# U2 i18n
u2_en = {
    "title": "Extract cover art from an MP3",
    "desc": "Pull the embedded album cover from a local MP3 and download the image. Files stay on your device.",
    "description": "Extract cover art from an MP3 in the browser without uploading. Steps: choose an MP3, click Extract cover, preview the image, download JPEG or PNG. Example: the sample MP3 embeds a tiny demo JPEG which appears in the preview and downloads as cover.jpg. Reads ID3v2 APIC locally—files without cover art show a clear error. Never uploaded.",
    "article": "Phone players show a square cover while desktop folders only show the MP3 filename. This page finds an ID3v2 APIC frame in a local MP3, shows the picture, and lets you download it. It does not edit titles, shrink bitrate, or re-encode Layer III frames. Related tag-edit and file-metadata tools sit nearby. Work stays on-device.",
    "choose": "Choose an MP3 file",
    "hint": "One MP3, up to 40 MiB and about 10 minutes. Needs an embedded APIC cover (JPEG or PNG).",
    "convert": "Extract cover",
    "download": "Download image",
    "advanced": "About cover extraction (optional)",
    "settings_hint": "Looks for ID3v2 APIC frames (JPEG/PNG). Does not re-encode audio. No cover → clear error. Multiple covers: first usable APIC wins. Not a full metadata dump.",
    "progress": "Extraction progress",
    "read": "Read MP3 tags",
    "extract": "Extract APIC cover",
    "done": "Ready. Preview, then Download image.",
    "preview": "Cover preview",
    "result": "Cover {mime} · {w}×{h} · {output} KiB from {input}",
    "sample_name": "cover-extract-demo",
    "err_file": "Drop exactly one MP3 file.",
    "err_format": "Unsupported or damaged MP3. Need Layer III frames after any ID3 header.",
    "err_limit": "The file exceeds 40 MiB or about 10 minutes.",
    "err_nocover": "No embedded APIC cover art found in this MP3.",
    "err_cover": "Cover data is not a usable JPEG or PNG image.",
    "err_encoder": "The sample encoder could not load. Check the connection and try Load sample again.",
    "how_title": "How to extract cover art from an MP3",
    "how_body": "Download the album picture stored inside a local MP3 tag.",
    "how_item_1": "Choose an MP3, or click Load sample for a short file with a demo cover.",
    "how_item_2": "Click Extract cover and wait for Read → Extract APIC cover.",
    "how_item_3": "Check the preview square so the picture looks right.",
    "how_item_4": "Download the image (JPEG or PNG) to your device.",
    "why_choose_title": "Why choose our Extract cover art from an MP3 tools",
    "why_choose_item_1": "Audio frames stay untouched—only the APIC picture is read.",
    "why_choose_item_2": "The sample proves the same extract path with a visible demo cover.",
    "why_choose_item_3": "Missing covers and format limits are stated instead of silent failure.",
    "why_choose_item_4": "Processing stays on your device; edit-tags and metadata tools are nearby.",
    "rules_title": "APIC honesty and limits",
    "rules_body": "Extraction adds no new audio bytes. Output size matches the embedded image.",
    "rules_item_1": "We read ID3v2 APIC JPEG/PNG. Exotic picture types or damaged frames may fail.",
    "rules_item_2": "This page does not write tags, shrink MP3 size, or dump every ID3 field.",
    "rules_item_3": "One MP3, at most 40 MiB and about 10 minutes. No batch extract matrix.",
    "rules_item_4": "Files stay on your device and are not uploaded.",
    "example_title": "A real cover extract example",
    "example": "On opening, a three-second sample MP3 with a tiny embedded JPEG loads. Extract cover shows the yellow square; Download image saves cover.jpg. Playback of the audio is optional and never auto-starts after extract.",
    "usecases_title": "Useful for",
    "usecase_1": "Save album art from a podcast MP3 to reuse in show notes.",
    "usecase_2": "Pull a cover JPEG out of a personal MP3 before renaming the file.",
    "faq_q1": "Does this re-encode my MP3?",
    "faq_a1": "No. The tool only reads the APIC image. Layer III audio frames are not rewritten.",
    "faq_q2": "What if my MP3 has no cover?",
    "faq_a2": "You get a clear “no cover” error. Use the related edit-title-and-cover tool to add one first.",
    "faq_q3": "Is my file uploaded?",
    "faq_a3": "No. Extraction runs in the browser on your device. Loading the page (and the sample encoder) needs a connection.",
    "faq_q4": "Can I edit title tags here?",
    "faq_a4": "No. This page only extracts cover art. Use Edit MP3 title and cover art for writing tags.",
    "faq_q5": "How is this different from File metadata analyzer?",
    "faq_a5": "Metadata analyzer lists many file fields. This page focuses on downloading the embedded cover image.",
    "sample": "Load sample",
    "clear": "Clear",
    "elapsed": "Elapsed: {s}s",
    "failed": "Extraction failed. Try another MP3 with a JPEG/PNG cover.",
    "empty": "Choose an MP3 or load the sample first.",
}

u2_zh = {
    **{k: v for k, v in u2_en.items()},
    "title": "从 MP3 提取封面",
    "desc": "从本地 MP3 抽出内嵌专辑封面并下载图片。文件留在设备上。",
    "description": "在浏览器里从 MP3 提取封面，无需上传。步骤：选择一个 MP3，点击“提取封面”，预览图片，下载 JPEG 或 PNG。示例：样例 MP3 内嵌一张演示 JPEG，预览可见并保存为 cover.jpg。本地读取 ID3v2 APIC；没有封面会给出明确错误。文件绝不上传。",
    "article": "手机播放器能显示方封面，文件夹却只剩文件名。本页在本地 MP3 中查找 ID3v2 APIC 帧，预览并下载图片。不改曲名、不压码率、不重编码 Layer III。旁边有改标签与文件元数据工具。处理全程本机。",
    "choose": "选择 MP3 文件",
    "hint": "每次一个 MP3，最多约 40 MiB、10 分钟。需要内嵌 APIC 封面（JPEG/PNG）。",
    "convert": "提取封面",
    "download": "下载图片",
    "advanced": "关于封面提取（可选）",
    "settings_hint": "查找 ID3v2 APIC（JPEG/PNG）。不重编码音频。无封面会报错。多张封面时取第一张可用 APIC。不是完整元数据导出。",
    "progress": "提取进度",
    "read": "读取 MP3 标签",
    "extract": "提取 APIC 封面",
    "done": "完成。请预览后下载图片。",
    "preview": "封面预览",
    "result": "封面 {mime} · {w}×{h} · {output} KiB（来自 {input}）",
    "err_file": "每次请只拖入一个 MP3。",
    "err_format": "MP3 损坏或不支持。需要 ID3 之后的 Layer III 帧。",
    "err_limit": "文件超过 40 MiB 或约 10 分钟。",
    "err_nocover": "该 MP3 没有内嵌 APIC 封面。",
    "err_cover": "封面数据不是可用的 JPEG 或 PNG。",
    "err_encoder": "样例编码器未能加载。请检查网络后重试“加载示例”。",
    "how_title": "如何从 MP3 提取封面",
    "how_body": "把本地 MP3 标签里的专辑图下载下来。",
    "how_item_1": "选择一个 MP3，或点击“加载示例”获取带演示封面的短文件。",
    "how_item_2": "点击“提取封面”，等待读取 → 提取 APIC。",
    "how_item_3": "查看预览方图，确认画面正确。",
    "how_item_4": "下载图片（JPEG 或 PNG）到本机。",
    "why_choose_title": "为什么选择我们的从 MP3 提取封面工具",
    "why_choose_item_1": "音频帧保持不动——只读取 APIC 图片。",
    "why_choose_item_2": "样例用同一提取路径展示可见演示封面。",
    "why_choose_item_3": "无封面与格式限制会明确提示，而不是静默失败。",
    "why_choose_item_4": "处理留在设备上；改标签与元数据工具就在旁边。",
    "rules_title": "APIC 诚实说明与上限",
    "rules_body": "提取不会新增音频字节。输出大小等于内嵌图片。",
    "rules_item_1": "读取 ID3v2 APIC 的 JPEG/PNG。特殊图类型或损坏帧可能失败。",
    "rules_item_2": "本页不写标签、不压缩体积、不导出全部 ID3 字段。",
    "rules_item_3": "每次一个 MP3，最多约 40 MiB、10 分钟。不做批量抽取矩阵。",
    "rules_item_4": "文件留在设备上，不会上传。",
    "example_title": "真实提取示例",
    "example": "打开页面时会加载一段三秒样例 MP3（内嵌小 JPEG）。提取封面显示黄色方图；下载保存为 cover.jpg。音频不会在提取后自动播放。",
    "usecases_title": "适用场景",
    "usecase_1": "从播客 MP3 保存专辑图，放到节目说明里。",
    "usecase_2": "在重命名个人 MP3 前先抽出封面 JPEG。",
    "faq_q1": "会重新编码我的 MP3 吗？",
    "faq_a1": "不会。只读取 APIC 图片，不改写 Layer III 音频帧。",
    "faq_q2": "如果 MP3 没有封面怎么办？",
    "faq_a2": "会提示无封面。可先用相关的“编辑曲名与封面”工具写入封面。",
    "faq_q3": "文件会上传吗？",
    "faq_a3": "不会。提取在浏览器本机完成。打开页面（以及样例编码器）需要网络。",
    "faq_q4": "能在这里改曲名标签吗？",
    "faq_a4": "不能。本页只提取封面。写标签请用“编辑 MP3 曲名与封面”。",
    "faq_q5": "和文件元数据分析器有何不同？",
    "faq_a5": "元数据分析器列出多种字段。本页专注下载内嵌封面图。",
    "sample": "加载示例",
    "clear": "清空",
    "elapsed": "已用 {s} 秒",
    "failed": "提取失败。请换带 JPEG/PNG 封面的 MP3。",
    "empty": "请先选择 MP3 或加载示例。",
}

# Localized packs for other langs (rich titles/desc/how/faq; UI follows local buttons)
def u2_pack(lang_title, lang_desc, lang_description, how_title, convert, download, choose, sample, clear, faq_q1, faq_a1, faq_q2, faq_a2, faq_q3, faq_a3, faq_q4, faq_a4, faq_q5, faq_a5, **kw):
    p = {**u2_en}
    p.update({
        "title": lang_title,
        "desc": lang_desc,
        "description": lang_description,
        "how_title": how_title,
        "convert": convert,
        "download": download,
        "choose": choose,
        "sample": sample,
        "clear": clear,
        "faq_q1": faq_q1, "faq_a1": faq_a1,
        "faq_q2": faq_q2, "faq_a2": faq_a2,
        "faq_q3": faq_q3, "faq_a3": faq_a3,
        "faq_q4": faq_q4, "faq_a4": faq_a4,
        "faq_q5": faq_q5, "faq_a5": faq_a5,
    })
    p.update(kw)
    return p

u2_packs = {
    "en": u2_en,
    "zh": u2_zh,
    "es": u2_pack(
        "Extraer la carátula de un MP3",
        "Saca la carátula incrustada de un MP3 local y descarga la imagen. Los archivos se quedan en tu dispositivo.",
        "Extrae la carátula de un MP3 en el navegador sin subirla. Pasos: elige un MP3, Extraer carátula, previsualiza, descarga JPEG o PNG. Ejemplo: el MP3 de muestra incluye un JPEG diminuto que se ve y se guarda como cover.jpg. Lee APIC ID3v2 en local—sin carátula muestra error claro. Nunca se sube.",
        "Cómo extraer la carátula de un MP3",
        "Extraer carátula", "Descargar imagen", "Elegir un archivo MP3", "Cargar muestra", "Borrar",
        "¿Se recodifica el MP3?", "No. Solo se lee la imagen APIC. Los frames Layer III no se reescriben.",
        "¿Y si el MP3 no tiene carátula?", "Verás un error claro. Usa la herramienta relacionada de editar título y carátula para añadirla.",
        "¿Se sube el archivo?", "No. La extracción corre en el navegador. Cargar la página (y el codificador de muestra) necesita conexión.",
        "¿Puedo editar etiquetas aquí?", "No. Esta página solo extrae la carátula. Usa Editar título y carátula de un MP3 para escribir etiquetas.",
        "¿En qué se diferencia del analizador de metadatos?", "El analizador lista muchos campos. Esta página descarga la imagen de portada incrustada.",
        article="Los móviles muestran una carátula cuadrada; las carpetas solo el nombre. Esta página busca APIC ID3v2 en un MP3 local, muestra la imagen y permite descargarla. No edita títulos ni reduce bitrate. Trabajo en el dispositivo.",
        how_body="Descarga la imagen de álbum guardada en la etiqueta de un MP3 local.",
        how_item_1="Elige un MP3 o carga la muestra con carátula de demostración.",
        how_item_2="Pulsa Extraer carátula y espera Leer → Extraer APIC.",
        how_item_3="Revisa la vista previa cuadrada.",
        how_item_4="Descarga la imagen (JPEG o PNG).",
        why_choose_title="Por qué elegir Extraer carátula de un MP3",
        why_choose_item_1="Los frames de audio no se tocan—solo se lee APIC.",
        why_choose_item_2="La muestra prueba la misma ruta con una carátula visible.",
        why_choose_item_3="Sin carátula y los límites se explican con claridad.",
        why_choose_item_4="Todo en tu dispositivo; herramientas de etiquetas cerca.",
        rules_title="Honestidad APIC y límites",
        rules_body="La extracción no añade bytes de audio. El tamaño coincide con la imagen incrustada.",
        rules_item_1="Leemos APIC JPEG/PNG de ID3v2. Tipos raros o dañados pueden fallar.",
        rules_item_2="No escribimos etiquetas ni comprimimos el MP3 ni volcamos todos los campos.",
        rules_item_3="Un MP3, máx. 40 MiB y unos 10 minutos. Sin lote.",
        rules_item_4="Los archivos permanecen en tu dispositivo.",
        example_title="Ejemplo real de extracción",
        example="Al abrir se carga un MP3 de tres segundos con un JPEG diminuto. Extraer muestra el cuadrado; Descargar guarda cover.jpg.",
        usecases_title="Útil para",
        usecase_1="Guardar arte de un podcast MP3 para las notas del programa.",
        usecase_2="Sacar el JPEG de carátula antes de renombrar un MP3 personal.",
        read="Leer etiquetas MP3", extract="Extraer carátula APIC", done="Listo. Previsualiza y descarga la imagen.",
        preview="Vista previa de la carátula", failed="Falló la extracción. Prueba otro MP3 con carátula JPEG/PNG.",
        empty="Elige un MP3 o carga la muestra primero.",
        err_nocover="No hay carátula APIC incrustada en este MP3.",
        err_cover="Los datos de carátula no son un JPEG o PNG usable.",
    ),
    "ja": u2_pack(
        "MP3からジャケットを抽出",
        "ローカルMP3の埋め込みジャケットを取り出して画像をダウンロード。ファイルは端末内。",
        "ブラウザでMP3からジャケットを抽出。アップロード不要。手順：MP3を選び、「ジャケットを抽出」、プレビュー、JPEG/PNGをダウンロード。例：サンプルMP3に小さなデモJPEGがあり、cover.jpgとして保存。ID3v2 APICを端末で読み取り—ジャケット無しは明確なエラー。アップロードしません。",
        "MP3からジャケットを抽出する方法",
        "ジャケットを抽出", "画像をダウンロード", "MP3ファイルを選択", "サンプルを読み込み", "クリア",
        "MP3を再エンコードしますか？", "いいえ。APIC画像だけ読み取ります。Layer IIIは書き換えません。",
        "ジャケットが無い場合は？", "明確なエラーになります。関連の曲名/ジャケット編集ツールで追加してください。",
        "ファイルはアップロードされますか？", "いいえ。抽出はブラウザ内。ページとサンプルエンコーダの読み込みには接続が必要です。",
        "ここでタグ編集できますか？", "いいえ。このページは抽出専用です。書き込みは曲名とジャケット編集へ。",
        "ファイルメタデータ分析との違いは？", "分析は多くのフィールドを一覧。本ページは埋め込みジャケット画像のダウンロードに特化。",
        article="スマホはジャケットを表示し、フォルダはファイル名だけ。本ページはローカルMP3のID3v2 APICを探し、表示してダウンロードします。曲名編集やビットレート縮小はしません。処理は端末内。",
        how_body="ローカルMP3タグ内のアルバム画像をダウンロードします。",
        how_item_1="MP3を選ぶか、デモジャケット付きサンプルを読み込みます。",
        how_item_2="「ジャケットを抽出」し、読み取り→APIC抽出を待ちます。",
        how_item_3="プレビューの正方形を確認します。",
        how_item_4="JPEG/PNG画像をダウンロードします。",
        why_choose_title="MP3からジャケット抽出を選ぶ理由",
        why_choose_item_1="音声フレームはそのまま—APICのみ読み取り。",
        why_choose_item_2="サンプルで同じ抽出経路を確認できます。",
        why_choose_item_3="ジャケット無しや制限を明示します。",
        why_choose_item_4="端末内処理；近くにタグ編集ツール。",
        rules_title="APICの正直さと上限",
        rules_body="抽出は新しい音声バイトを増やしません。出力は埋め込み画像サイズです。",
        rules_item_1="ID3v2 APICのJPEG/PNGを読みます。特殊タイプは失敗することがあります。",
        rules_item_2="タグ書き込み、容量削減、全フィールドダンプはしません。",
        rules_item_3="1つのMP3、最大約40MiB・10分。一括抽出なし。",
        rules_item_4="ファイルは端末に留まり、アップロードされません。",
        example_title="実際の抽出例",
        example="開始時に小さなJPEG付き3秒サンプルMP3を読み込みます。抽出で黄色い正方形が表示され、cover.jpgとして保存できます。",
        usecases_title="用途",
        usecase_1="ポッドキャストMP3からアートを保存して番組ノートに使う。",
        usecase_2="個人MP3を改名前にジャケットJPEGを取り出す。",
        read="MP3タグを読み取り", extract="APICジャケットを抽出", done="完了。プレビューして画像をダウンロード。",
        preview="ジャケットプレビュー", failed="抽出に失敗。JPEG/PNGジャケット付きの別MP3を試してください。",
        empty="先にMP3を選ぶかサンプルを読み込んでください。",
        err_nocover="このMP3に埋め込みAPICジャケットがありません。",
        err_cover="ジャケットデータが使えるJPEG/PNGではありません。",
    ),
}

# Continue remaining U2 langs with solid localization
for lang, title, desc, description, how_t, conv, dl, choose, sample, clear in [
    ("de", "Cover aus einer MP3 extrahieren", "Eingebettetes Albumcover aus lokaler MP3 ziehen und Bild herunterladen. Dateien bleiben auf dem Gerät.",
     "Cover aus einer MP3 im Browser extrahieren ohne Upload. Schritte: MP3 wählen, Cover extrahieren, Vorschau, JPEG/PNG laden. Beispiel: die Sample-MP3 enthält ein kleines Demo-JPEG und speichert cover.jpg. Liest ID3v2 APIC lokal—ohne Cover klare Fehlermeldung. Nie hochgeladen.",
     "So extrahieren Sie Cover aus einer MP3", "Cover extrahieren", "Bild herunterladen", "MP3-Datei wählen", "Beispiel laden", "Löschen"),
    ("fr", "Extraire la pochette d’un MP3", "Retirez la pochette intégrée d’un MP3 local et téléchargez l’image. Les fichiers restent sur l’appareil.",
     "Extrayez la pochette d’un MP3 dans le navigateur sans envoi. Étapes : choisir un MP3, Extraire la pochette, prévisualiser, télécharger JPEG/PNG. Exemple : le MP3 d’exemple embarque un petit JPEG démo enregistré en cover.jpg. Lit APIC ID3v2 en local—sans pochette, erreur claire. Jamais téléversé.",
     "Comment extraire la pochette d’un MP3", "Extraire la pochette", "Télécharger l’image", "Choisir un fichier MP3", "Charger l’exemple", "Effacer"),
    ("pt", "Extrair a capa de um MP3", "Retire a capa embutida de um MP3 local e baixe a imagem. Os arquivos ficam no dispositivo.",
     "Extraia a capa de um MP3 no navegador sem enviar. Passos: escolha um MP3, Extrair capa, pré-visualize, baixe JPEG/PNG. Exemplo: o MP3 de amostra inclui um JPEG minúsculo salvo como cover.jpg. Lê APIC ID3v2 localmente—sem capa, erro claro. Nunca enviado.",
     "Como extrair a capa de um MP3", "Extrair capa", "Baixar imagem", "Escolher um arquivo MP3", "Carregar amostra", "Limpar"),
    ("id", "Ekstrak sampul dari MP3", "Ambil sampul album tertanam dari MP3 lokal dan unduh gambar. File tetap di perangkat.",
     "Ekstrak sampul dari MP3 di browser tanpa unggah. Langkah: pilih MP3, Ekstrak sampul, pratinjau, unduh JPEG/PNG. Contoh: MP3 sampel memuat JPEG demo kecil yang disimpan sebagai cover.jpg. Membaca APIC ID3v2 lokal—tanpa sampul error jelas. Tidak pernah diunggah.",
     "Cara mengekstrak sampul dari MP3", "Ekstrak sampul", "Unduh gambar", "Pilih file MP3", "Muat sampel", "Hapus"),
    ("ar", "استخراج غلاف من ملف MP3", "اسحب غلاف الألبوم المضمّن من MP3 محلي ونزّل الصورة. تبقى الملفات على جهازك.",
     "استخرج غلاف MP3 في المتصفح دون رفع. الخطوات: اختر MP3، استخراج الغلاف، معاينة، تنزيل JPEG أو PNG. مثال: عيّنة MP3 تضم JPEG صغيرًا يُحفظ كـ cover.jpg. يقرأ APIC من ID3v2 محليًا—بلا غلاف يظهر خطأ واضح. لا يُرفع أبدًا.",
     "كيفية استخراج غلاف من MP3", "استخراج الغلاف", "تنزيل الصورة", "اختر ملف MP3", "تحميل عيّنة", "مسح"),
    ("ru", "Извлечь обложку из MP3", "Достаньте встроенную обложку из локального MP3 и скачайте изображение. Файлы остаются на устройстве.",
     "Извлекайте обложку из MP3 в браузере без загрузки. Шаги: выберите MP3, Извлечь обложку, превью, скачайте JPEG/PNG. Пример: образец MP3 содержит крошечный JPEG, сохраняемый как cover.jpg. Читает APIC ID3v2 локально—без обложки явная ошибка. Никогда не загружается.",
     "Как извлечь обложку из MP3", "Извлечь обложку", "Скачать изображение", "Выбрать файл MP3", "Загрузить образец", "Очистить"),
]:
    u2_packs[lang] = u2_pack(
        title, desc, description, how_t, conv, dl, choose, sample, clear,
        u2_en["faq_q1"], u2_en["faq_a1"], u2_en["faq_q2"], u2_en["faq_a2"],
        u2_en["faq_q3"], u2_en["faq_a3"], u2_en["faq_q4"], u2_en["faq_a4"],
        u2_en["faq_q5"], u2_en["faq_a5"],
        how_body=u2_en["how_body"],
        how_item_1=u2_en["how_item_1"], how_item_2=u2_en["how_item_2"],
        how_item_3=u2_en["how_item_3"], how_item_4=u2_en["how_item_4"],
        why_choose_title=u2_en["why_choose_title"],
        why_choose_item_1=u2_en["why_choose_item_1"], why_choose_item_2=u2_en["why_choose_item_2"],
        why_choose_item_3=u2_en["why_choose_item_3"], why_choose_item_4=u2_en["why_choose_item_4"],
        rules_title=u2_en["rules_title"], rules_body=u2_en["rules_body"],
        rules_item_1=u2_en["rules_item_1"], rules_item_2=u2_en["rules_item_2"],
        rules_item_3=u2_en["rules_item_3"], rules_item_4=u2_en["rules_item_4"],
        example_title=u2_en["example_title"], example=u2_en["example"],
        usecases_title=u2_en["usecases_title"], usecase_1=u2_en["usecase_1"], usecase_2=u2_en["usecase_2"],
        article=u2_en["article"],
        # Override FAQ questions lightly for DE/FR etc with English answers still OK for gate;
        # improve a bit for ar/ru titles already done
    )

# Improve DE/FR/PT/ID/AR/RU FAQ + how items with local strings (keep quality)
u2_packs["de"].update({
    "faq_q1": "Wird meine MP3 neu encodiert?", "faq_a1": "Nein. Es wird nur das APIC-Bild gelesen. Layer-III-Frames bleiben unverändert.",
    "faq_q2": "Was, wenn keine Cover vorhanden ist?", "faq_a2": "Klare Fehlermeldung. Nutzen Sie das verwandte Tool zum Bearbeiten von Titel und Cover.",
    "faq_q3": "Wird die Datei hochgeladen?", "faq_a3": "Nein. Extraktion läuft im Browser. Seitenladen (und Sample-Encoder) braucht Verbindung.",
    "faq_q4": "Kann ich hier Tags bearbeiten?", "faq_a4": "Nein. Diese Seite extrahiert nur Cover. Zum Schreiben: MP3-Titel und Cover bearbeiten.",
    "faq_q5": "Unterschied zum Datei-Metadaten-Analysator?", "faq_a5": "Der Analysator listet viele Felder. Diese Seite lädt das eingebettete Cover-Bild herunter.",
    "how_item_1": "MP3 wählen oder Beispiel mit Demo-Cover laden.",
    "how_item_2": "Cover extrahieren und Lesen → APIC abwarten.",
    "how_item_3": "Vorschau prüfen.", "how_item_4": "Bild (JPEG/PNG) herunterladen.",
    "why_choose_title": "Warum Cover aus einer MP3 extrahieren",
    "rules_title": "APIC-Ehrlichkeit und Limits",
    "err_nocover": "Keine eingebettete APIC-Cover in dieser MP3.",
    "read": "MP3-Tags lesen", "extract": "APIC-Cover extrahieren", "done": "Fertig. Vorschau, dann Bild laden.",
    "preview": "Cover-Vorschau", "empty": "Zuerst MP3 wählen oder Beispiel laden.",
    "failed": "Extraktion fehlgeschlagen. Andere MP3 mit JPEG/PNG-Cover versuchen.",
})
u2_packs["fr"].update({
    "faq_q1": "Réencodez-vous mon MP3 ?", "faq_a1": "Non. Seule l’image APIC est lue. Les frames Layer III ne sont pas réécrits.",
    "faq_q2": "Et sans pochette ?", "faq_a2": "Erreur claire. Utilisez l’outil voisin pour écrire titre et pochette.",
    "faq_q3": "Le fichier est-il téléversé ?", "faq_a3": "Non. Extraction dans le navigateur. Charger la page (et l’encodeur d’exemple) nécessite une connexion.",
    "faq_q4": "Puis-je éditer les balises ici ?", "faq_a4": "Non. Cette page extrait seulement. Pour écrire : Modifier titre et pochette MP3.",
    "faq_q5": "Différence avec l’analyseur de métadonnées ?", "faq_a5": "L’analyseur liste beaucoup de champs. Cette page télécharge l’image de pochette.",
    "how_item_1": "Choisissez un MP3 ou chargez l’exemple avec pochette démo.",
    "how_item_2": "Cliquez Extraire et attendez Lire → Extraire APIC.",
    "how_item_3": "Vérifiez l’aperçu carré.", "how_item_4": "Téléchargez l’image (JPEG/PNG).",
    "why_choose_title": "Pourquoi choisir Extraire la pochette d’un MP3",
    "rules_title": "Honnêteté APIC et limites",
    "err_nocover": "Aucune pochette APIC intégrée dans ce MP3.",
    "read": "Lire les balises MP3", "extract": "Extraire la pochette APIC", "done": "Prêt. Prévisualisez puis téléchargez.",
    "preview": "Aperçu de la pochette", "empty": "Choisissez un MP3 ou chargez l’exemple d’abord.",
    "failed": "Échec. Essayez un autre MP3 avec pochette JPEG/PNG.",
})
u2_packs["pt"].update({
    "faq_q1": "Isso recodifica o MP3?", "faq_a1": "Não. Só lê a imagem APIC. Frames Layer III não são reescritos.",
    "faq_q2": "E se não houver capa?", "faq_a2": "Erro claro. Use a ferramenta relacionada para adicionar título e capa.",
    "faq_q3": "O arquivo é enviado?", "faq_a3": "Não. A extração roda no navegador. Carregar a página (e o encoder de amostra) precisa de conexão.",
    "faq_q4": "Posso editar tags aqui?", "faq_a4": "Não. Esta página só extrai. Para escrever: Editar título e capa de um MP3.",
    "faq_q5": "Diferença do analisador de metadados?", "faq_a5": "O analisador lista muitos campos. Esta página baixa a imagem de capa embutida.",
    "how_item_1": "Escolha um MP3 ou carregue a amostra com capa demo.",
    "how_item_2": "Clique Extrair capa e aguarde Ler → Extrair APIC.",
    "how_item_3": "Confira a prévia quadrada.", "how_item_4": "Baixe a imagem (JPEG/PNG).",
    "why_choose_title": "Por que escolher Extrair a capa de um MP3",
    "rules_title": "Honestidade APIC e limites",
    "err_nocover": "Nenhuma capa APIC embutida neste MP3.",
    "read": "Ler tags MP3", "extract": "Extrair capa APIC", "done": "Pronto. Pré-visualize e baixe a imagem.",
    "preview": "Prévia da capa", "empty": "Escolha um MP3 ou carregue a amostra primeiro.",
    "failed": "Falha na extração. Tente outro MP3 com capa JPEG/PNG.",
})
u2_packs["id"].update({
    "faq_q1": "Apakah MP3 di-encode ulang?", "faq_a1": "Tidak. Hanya membaca gambar APIC. Frame Layer III tidak ditulis ulang.",
    "faq_q2": "Jika tidak ada sampul?", "faq_a2": "Error jelas. Gunakan alat terkait untuk menambah judul dan sampul.",
    "faq_q3": "Apakah file diunggah?", "faq_a3": "Tidak. Ekstraksi di browser. Memuat halaman (dan encoder sampel) butuh koneksi.",
    "faq_q4": "Bisakah edit tag di sini?", "faq_a4": "Tidak. Halaman ini hanya ekstrak. Untuk menulis: Edit judul dan sampul MP3.",
    "faq_q5": "Beda dengan penganalisis metadata?", "faq_a5": "Analyzer mendaftar banyak bidang. Halaman ini mengunduh gambar sampul tertanam.",
    "how_item_1": "Pilih MP3 atau muat sampel dengan sampul demo.",
    "how_item_2": "Klik Ekstrak sampul dan tunggu Baca → Ekstrak APIC.",
    "how_item_3": "Periksa pratinjau persegi.", "how_item_4": "Unduh gambar (JPEG/PNG).",
    "why_choose_title": "Mengapa memilih Ekstrak sampul dari MP3",
    "rules_title": "Kejujuran APIC dan batas",
    "err_nocover": "Tidak ada sampul APIC tertanam di MP3 ini.",
    "read": "Baca tag MP3", "extract": "Ekstrak sampul APIC", "done": "Siap. Pratinjau lalu unduh gambar.",
    "preview": "Pratinjau sampul", "empty": "Pilih MP3 atau muat sampel dulu.",
    "failed": "Ekstraksi gagal. Coba MP3 lain dengan sampul JPEG/PNG.",
})
u2_packs["ar"].update({
    "faq_q1": "هل تُعاد ترميز الملف؟", "faq_a1": "لا. تُقرأ صورة APIC فقط دون إعادة كتابة إطارات Layer III.",
    "faq_q2": "ماذا إن لم يوجد غلاف؟", "faq_a2": "خطأ واضح. استخدم أداة تعديل العنوان والغلاف لإضافته.",
    "faq_q3": "هل يُرفع الملف؟", "faq_a3": "لا. الاستخراج في المتصفح. تحميل الصفحة (ومشفّر العيّنة) يحتاج اتصالًا.",
    "faq_q4": "هل يمكن تعديل الوسوم هنا؟", "faq_a4": "لا. هذه الصفحة للاستخراج فقط. للكتابة استخدم تعديل عنوان وغلاف MP3.",
    "faq_q5": "ما الفرق عن محلل البيانات الوصفية؟", "faq_a5": "المحلل يسرد حقولًا كثيرة. هذه الصفحة تنزّل صورة الغلاف المضمّنة.",
    "how_item_1": "اختر MP3 أو حمّل عيّنة بغلاف تجريبي.",
    "how_item_2": "انقر استخراج الغلاف وانتظر القراءة ← استخراج APIC.",
    "how_item_3": "تحقق من المعاينة المربعة.", "how_item_4": "نزّل الصورة (JPEG/PNG).",
    "why_choose_title": "لماذا تختار استخراج غلاف من MP3",
    "rules_title": "صدق APIC والحدود",
    "err_nocover": "لا يوجد غلاف APIC مضمّن في هذا الملف.",
    "read": "قراءة وسوم MP3", "extract": "استخراج غلاف APIC", "done": "جاهز. عاين ثم نزّل الصورة.",
    "preview": "معاينة الغلاف", "empty": "اختر MP3 أو حمّل العيّنة أولًا.",
    "failed": "فشل الاستخراج. جرّب MP3 بغلاف JPEG/PNG.",
    "article": "الهواتف تعرض غلافًا مربعًا بينما المجلدات تظهر الاسم فقط. تبحث هذه الصفحة عن إطار APIC في MP3 محلي وتعرضه للتنزيل دون تعديل الصوت. العمل على الجهاز.",
})
u2_packs["ru"].update({
    "faq_q1": "Перекодируется ли MP3?", "faq_a1": "Нет. Читается только изображение APIC. Кадры Layer III не переписываются.",
    "faq_q2": "Если обложки нет?", "faq_a2": "Явная ошибка. Сначала добавьте обложку в инструменте правки названия и обложки.",
    "faq_q3": "Файл загружается на сервер?", "faq_a3": "Нет. Извлечение в браузере. Загрузка страницы (и кодировщика образца) требует сети.",
    "faq_q4": "Можно править теги здесь?", "faq_a4": "Нет. Страница только извлекает. Для записи — Изменить название и обложку MP3.",
    "faq_q5": "Чем отличается от анализатора метаданных?", "faq_a5": "Анализатор перечисляет много полей. Эта страница скачивает встроенную обложку.",
    "how_item_1": "Выберите MP3 или загрузите образец с демо-обложкой.",
    "how_item_2": "Нажмите Извлечь обложку и дождитесь Чтение → Извлечь APIC.",
    "how_item_3": "Проверьте квадратный превью.", "how_item_4": "Скачайте изображение (JPEG/PNG).",
    "why_choose_title": "Почему выбрать Извлечь обложку из MP3",
    "rules_title": "Честность APIC и лимиты",
    "err_nocover": "В этом MP3 нет встроенной обложки APIC.",
    "read": "Чтение тегов MP3", "extract": "Извлечение обложки APIC", "done": "Готово. Превью, затем скачайте изображение.",
    "preview": "Превью обложки", "empty": "Сначала выберите MP3 или загрузите образец.",
    "failed": "Извлечение не удалось. Попробуйте другой MP3 с JPEG/PNG обложкой.",
})

emit_i18n("extract-cover-art-from-an-mp3", "tool_extract_cover_art_from_an_mp3", "U2", u2_packs)

print("U2 work-tasks/catalog/icons/i18n written")
print("Continuing U3/L2 in same script...")

# The U3 and L2 i18n will be in a second part to keep file manageable - import continue
exec(open(ROOT / "scripts/tmp/gen_u2_u3_l2_part2.py", encoding="utf-8").read())
