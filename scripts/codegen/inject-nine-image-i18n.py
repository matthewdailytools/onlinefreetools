#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Generate and inject i18n keys for the nine image tools batch."""

from __future__ import annotations

import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
MANIFEST = json.loads(Path("/tmp/tools-manifest.json").read_text(encoding="utf-8"))

LANGS = ["en", "zh", "es", "ar", "pt", "id", "fr", "ja", "ru", "de"]


def esc(s: str) -> str:
	"""Escape a string for single-quoted TS literals."""
	return s.replace("\\", "\\\\").replace("'", "\\'")


def fmt_entries(d: dict[str, str]) -> str:
	"""Format key/value pairs as TypeScript object fields."""
	lines: list[str] = []
	for k, v in d.items():
		if len(v) > 100:
			lines.append(f"  {k}:\n    '{esc(v)}',")
		else:
			lines.append(f"  {k}: '{esc(v)}',")
	return "\n".join(lines)


# Shared UI chrome per language
SHARED: dict[str, dict[str, str]] = {
	"en": {
		"apply": "Apply",
		"download": "Download",
		"clear": "Clear",
		"sample": "Load sample",
		"choose": "Choose image",
		"choose_files": "Choose images",
		"drop": "Or drop JPEG, PNG, or WebP here. Processing stays in this tab.",
		"drop_multi": "Or drop several images here. Processing stays in this tab.",
		"preview": "Preview",
		"format": "Output format",
		"quality": "Quality",
		"jpeg_bg": "JPEG background",
		"working": "Working…",
		"done": "Done — click Download to save.",
		"empty": "Choose an image first.",
		"empty_multi": "Add at least one image first.",
		"err_decode": "Could not decode the image. Try JPEG, PNG, or WebP.",
		"err_encode": "Could not export. Try a smaller image or another format.",
		"warn_large": "Large file (>25 MB) — may be slow.",
		"warn_edge": "Edge exceeds ~8192 px — some browsers may fail.",
		"warn_anim": "Animated GIF: only the first frame is used.",
		"how_t": "How it works",
		"rules_t": "Rules",
		"ex_t": "Example",
		"uc_t": "Good fits",
		"move_up": "Up",
		"move_down": "Down",
		"remove": "Remove",
	},
	"zh": {
		"apply": "应用",
		"download": "下载",
		"clear": "清空",
		"sample": "加载示例",
		"choose": "选择图片",
		"choose_files": "选择多张图片",
		"drop": "也可拖放 JPEG、PNG 或 WebP。处理只在本标签页完成。",
		"drop_multi": "也可拖入多张图片。处理只在本标签页完成。",
		"preview": "预览",
		"format": "输出格式",
		"quality": "画质",
		"jpeg_bg": "JPEG 底色",
		"working": "处理中…",
		"done": "完成 — 点击下载保存。",
		"empty": "请先选择图片。",
		"empty_multi": "请先添加至少一张图片。",
		"err_decode": "无法解码图片，请改用 JPEG、PNG 或 WebP。",
		"err_encode": "无法导出，请缩小图片或更换格式。",
		"warn_large": "文件较大（>25 MB），可能较慢。",
		"warn_edge": "边长超过约 8192 像素，部分浏览器可能失败。",
		"warn_anim": "动画 GIF：仅使用第一帧。",
		"how_t": "怎么用",
		"rules_t": "规则",
		"ex_t": "示例",
		"uc_t": "适合场景",
		"move_up": "上移",
		"move_down": "下移",
		"remove": "移除",
	},
}

# Seed other langs from English then overlay short local labels
for _lang, _apply, _dl, _clear, _sample, _choose, _how, _rules, _ex, _uc in [
	("es", "Aplicar", "Descargar", "Limpiar", "Cargar ejemplo", "Elegir imagen", "Cómo funciona", "Reglas", "Ejemplo", "Buenos usos"),
	("ar", "تطبيق", "تنزيل", "مسح", "تحميل مثال", "اختر صورة", "كيف يعمل", "القواعد", "مثال", "حالات مناسبة"),
	("pt", "Aplicar", "Baixar", "Limpar", "Carregar exemplo", "Escolher imagem", "Como funciona", "Regras", "Exemplo", "Bons usos"),
	("id", "Terapkan", "Unduh", "Bersihkan", "Muat contoh", "Pilih gambar", "Cara kerja", "Aturan", "Contoh", "Cocok untuk"),
	("fr", "Appliquer", "Télécharger", "Effacer", "Charger un exemple", "Choisir une image", "Comment ça marche", "Règles", "Exemple", "Bons cas"),
	("ja", "適用", "ダウンロード", "クリア", "サンプル読込", "画像を選択", "使い方", "ルール", "例", "向いている用途"),
	("ru", "Применить", "Скачать", "Очистить", "Загрузить пример", "Выбрать изображение", "Как это работает", "Правила", "Пример", "Когда полезно"),
	("de", "Anwenden", "Herunterladen", "Löschen", "Beispiel laden", "Bild wählen", "So funktioniert es", "Regeln", "Beispiel", "Gute Einsätze"),
]:
	base = dict(SHARED["en"])
	base.update(
		apply=_apply,
		download=_dl,
		clear=_clear,
		sample=_sample,
		choose=_choose,
		how_t=_how,
		rules_t=_rules,
		ex_t=_ex,
		uc_t=_uc,
		choose_files=_choose + "s" if _lang not in ("ja", "zh", "ar") else _choose,
	)
	SHARED[_lang] = base

# Compact tool copy: en/zh full; others reuse en body with local title
SPEC: dict[str, dict[str, dict[str, str]]] = {}


def _spec(slug: str, en: dict[str, str], zh: dict[str, str]) -> None:
	SPEC[slug] = {"en": en, "zh": zh}


_spec(
	"flip-image",
	dict(
		title="Flip Image — Mirror Horizontally or Vertically",
		description="Flip a photo horizontally or vertically in your browser—mirror selfies or swap layout sides without uploading. Steps: choose an image, tick horizontal and/or vertical, apply, download JPEG/WebP/PNG. Example: sample blocks with a letter mark → horizontal flip — files stay on your device.",
		desc="Mirror a photo left-right or top-bottom locally, then download JPEG/WebP/PNG.",
		article="Local canvas flip with horizontal and vertical mirrors; pixels are redrawn, not only CSS-flipped.",
		how="Choose a photo, pick horizontal and/or vertical flip, apply, then download. Everything runs in this tab.",
		rules="The canvas matches the source size. Horizontal flip uses scale(-1,1); vertical uses scale(1,-1); both can combine. Export re-encodes pixels.",
		r1="Horizontal: reflect across the vertical axis (left↔right).",
		r2="Vertical: reflect across the horizontal axis (top↔bottom).",
		r3="Both checked = 180° rotation equivalent for rectangular images.",
		r4="Animated GIF uses the first frame only; transparency is kept for PNG/WebP.",
		example="Load sample shows asymmetric color blocks with a mark; horizontal flip is applied so the mark moves to the other side.",
		uc1="Fix mirrored selfies before posting.",
		uc2="Swap left/right for layouts or mockups.",
		uc3="Flip scanned pages that were upside-down (with vertical).",
		faq_q1="Are images uploaded?",
		faq_a1="No. Decode, flip, and export run in your browser.",
		faq_q2="Is quality lost?",
		faq_a2="Flip itself is lossless in pixel order; saving as JPEG/WebP re-encodes and may change bytes.",
		faq_q3="Flip vs rotate?",
		faq_a3="Flip mirrors; rotate turns by angles. This page only mirrors.",
		faq_q4="Can I flip both ways?",
		faq_a4="Yes—tick both boxes to flip horizontally and vertically together.",
		faq_q5="What about animated GIFs?",
		faq_a5="Only the first frame is decoded and flipped.",
	),
	dict(
		title="图片翻转 — 水平或垂直镜像",
		description="在浏览器内水平或垂直翻转照片，无需上传。步骤：选图、勾选水平/垂直、应用、下载 JPEG/WebP/PNG。示例：带标记的色块样图→水平翻转后标记换边——文件不离开本机。",
		desc="本地水平/垂直镜像照片，下载 JPEG/WebP/PNG。",
		article="本地 Canvas 翻转；像素重绘，不只是 CSS 镜像。",
		how="选图后勾选水平与/或垂直翻转，应用并下载。全程在本标签页完成。",
		rules="画布尺寸等于原图。水平用 scale(-1,1)，垂直用 scale(1,-1)，可叠加。导出会重编码像素。",
		r1="水平：沿竖直轴左右镜像。",
		r2="垂直：沿水平轴上下镜像。",
		r3="两项同时勾选时，矩形图效果等同旋转 180°。",
		r4="动画 GIF 仅首帧；PNG/WebP 保留透明。",
		example="示例为不对称色块带字母标记；默认水平翻转后标记移到另一侧。",
		uc1="发帖前修正镜像自拍。",
		uc2="排版左右对调。",
		uc3="配合垂直翻转纠正倒置扫描件。",
		faq_q1="会上传图片吗？",
		faq_a1="不会。解码、翻转与导出都在浏览器完成。",
		faq_q2="会损失画质吗？",
		faq_a2="翻转本身不改像素排列语义；存成 JPEG/WebP 会重编码。",
		faq_q3="翻转和旋转有何不同？",
		faq_a3="翻转是镜像；旋转是转角。本页只做镜像。",
		faq_q4="能同时水平和垂直吗？",
		faq_a4="可以，两个复选框可同时勾选。",
		faq_q5="动画 GIF 怎么办？",
		faq_a5="只解码并翻转第一帧。",
	),
)

_spec(
	"image-grayscale",
	dict(
		title="Convert Image to Grayscale — Black & White Online",
		description="Convert a color photo to grayscale in your browser with Rec.601 luma weights—no upload. Steps: choose an image, apply, download JPEG/WebP/PNG. Example: four-color sample → gray blocks keep relative brightness — files stay on your device.",
		desc="Turn photos black-and-white locally with a clear luma formula, then download.",
		article="Local Rec.601 weighted grayscale via getImageData; alpha preserved.",
		how="Pick a photo, apply grayscale, download. Processing never leaves this tab.",
		rules="For each pixel Y=0.299R+0.587G+0.114B; R=G=B=Y; alpha unchanged.",
		r1="Rec.601 coefficients match common luma practice.",
		r2="Alpha channel is copied unchanged.",
		r3="Export re-encodes; JPEG drops alpha.",
		r4="Animated GIF: first frame only.",
		example="Sample four-color blocks become gray with distinct brightness levels.",
		uc1="Print preview without color ink assumptions.",
		uc2="Accessibility contrast drafts.",
		uc3="Stylized black-and-white exports.",
		faq_q1="Uploaded?",
		faq_a1="No—everything is local.",
		faq_q2="Which formula?",
		faq_a2="Rec.601: 0.299R+0.587G+0.114B.",
		faq_q3="Can I undo?",
		faq_a3="Not after download; keep the original file.",
		faq_q4="Same as CSS filter?",
		faq_a4="We rewrite pixels, so the saved file is truly grayscale.",
		faq_q5="Transparent PNG?",
		faq_a5="Transparency is kept when exporting PNG/WebP.",
	),
	dict(
		title="图片转灰度 — 本地黑白转换",
		description="在浏览器内用 Rec.601 加权把彩图转成灰度，无需上传。步骤：选图、应用、下载。示例：四色块样图→按亮度变灰——文件不离开本机。",
		desc="本地按公式转黑白并下载。",
		article="本地 getImageData + Rec.601 加权灰度，保留 alpha。",
		how="选图后应用灰度并下载，全程本机。",
		rules="每像素 Y=0.299R+0.587G+0.114B，RGB 均设为 Y，alpha 不变。",
		r1="采用常见 Rec.601 系数。",
		r2="透明通道原样保留。",
		r3="导出会重编码；JPEG 无透明。",
		r4="动画 GIF 仅首帧。",
		example="四色块示例转灰后亮度层次仍可区分。",
		uc1="打印前看黑白效果。",
		uc2="无障碍对比草稿。",
		uc3="风格化黑白导出。",
		faq_q1="会上传吗？",
		faq_a1="不会，全部本地。",
		faq_q2="什么公式？",
		faq_a2="Rec.601：0.299R+0.587G+0.114B。",
		faq_q3="能还原吗？",
		faq_a3="下载后不能从本页还原，请保留原图。",
		faq_q4="和 CSS 滤镜一样吗？",
		faq_a4="我们改写像素，保存文件就是真灰度。",
		faq_q5="透明 PNG？",
		faq_a5="导出 PNG/WebP 时保留透明。",
	),
)

_spec(
	"image-border",
	dict(
		title="Add Border to Image — Color & Width Online",
		description="Add an outer color border around a photo in your browser—no crop of the content. Steps: choose an image, set width and color, apply, download. Example: sample art with a 24px contrasting frame — files stay on your device.",
		desc="Add a colored outer border (width + color) locally and download.",
		article="Expand canvas by 2×width, fill border color, draw the image inset.",
		how="Pick a photo, choose border width and color, apply, download.",
		rules="Output size = original + 2×border on each axis. Content is not cropped.",
		r1="Border is outside the original pixels.",
		r2="Width is in pixels of the source.",
		r3="JPEG export can use a separate flatten color if needed.",
		r4="Huge edges may warn above ~8192 px.",
		example="Sample loads with a default 24px border in a contrasting color.",
		uc1="Social posts that need a clean frame.",
		uc2="Print white margins.",
		uc3="Unify a gallery with the same border color.",
		faq_q1="Uploaded?",
		faq_a1="No.",
		faq_q2="Does it crop?",
		faq_a2="No—the canvas grows outward.",
		faq_q3="Units?",
		faq_a3="Width is in pixels.",
		faq_q4="Rounded corners?",
		faq_a4="This version draws a rectangular border only.",
		faq_q5="Transparent source?",
		faq_a5="PNG/WebP keep alpha inside the photo area; border fill is opaque.",
	),
	dict(
		title="图片加边框 — 选颜色与宽度",
		description="在浏览器为照片加外扩彩色边框，不裁切内容。步骤：选图、设宽度与颜色、应用、下载。示例：样图默认 24px 对比色边框——文件不离开本机。",
		desc="本地加彩色外边框并下载。",
		article="画布外扩 2×宽度，铺边框色，再居中绘制原图。",
		how="选图后设置边框宽度与颜色，应用并下载。",
		rules="输出尺寸=原图各边增加边框宽度；不裁切内容。",
		r1="边框在原图像素外侧。",
		r2="宽度单位为像素。",
		r3="JPEG 可另设底色。",
		r4="超大边长会提示。",
		example="示例默认应用 24px 对比色边框。",
		uc1="社媒贴需要干净画框。",
		uc2="打印留白边。",
		uc3="画廊统一边框色。",
		faq_q1="会上传吗？",
		faq_a1="不会。",
		faq_q2="会裁切吗？",
		faq_a2="不会，画布向外扩展。",
		faq_q3="单位？",
		faq_a3="宽度为像素。",
		faq_q4="圆角？",
		faq_a4="本版仅直角边框。",
		faq_q5="透明图？",
		faq_a5="PNG/WebP 保留图内透明；边框填充为不透明色。",
	),
)

_spec(
	"image-to-base64",
	dict(
		title="Image to Base64 Converter — Encode & Decode Locally",
		description="Convert images to Base64/data URLs and back in your browser—no upload. Steps: encode a file to copy a data URL, or paste Base64 to preview and download. Example: sample PNG → data:image/png;base64,… ready to paste into HTML — files stay on your device.",
		desc="Encode photos to Base64/data URLs or decode strings back to images locally.",
		article="FileReader data URLs for encode; decode accepts data URLs or raw Base64.",
		how="Use Encode to read a file as a data URL, or Decode to paste Base64 and download an image.",
		rules="Encode uses readAsDataURL. Decode accepts data:image… or raw Base64 (default MIME image/png).",
		r1="Optional strip of the data: prefix for raw Base64.",
		r2="Invalid strings show an error.",
		r3="Large strings may use more memory.",
		r4="Nothing is uploaded.",
		example="Sample encodes a small PNG and shows the data URL in the output box.",
		uc1="Embed small icons in HTML/CSS.",
		uc2="Debug email or markdown image payloads.",
		uc3="Recover a preview from a Base64 dump.",
		faq_q1="Uploaded?",
		faq_a1="No.",
		faq_q2="Data URL vs raw?",
		faq_a2="Data URLs include a MIME prefix; raw is only the Base64 body.",
		faq_q3="Huge files?",
		faq_a3="Possible but memory-heavy—prefer compress first.",
		faq_q4="Which MIME on decode?",
		faq_a4="Taken from the data URL, or image/png for raw.",
		faq_q5="Animated GIF?",
		faq_a5="Encoded as a file blob; animation is not edited here.",
	),
	dict(
		title="图片与 Base64 互转 — 本地编码解码",
		description="在浏览器把图片与 Base64（data URL/纯串）互转，无需上传。步骤：编码文件复制 data URL，或粘贴 Base64 预览下载。示例：样例 PNG→data:image/png;base64,… 可粘贴进 HTML——文件不离开本机。",
		desc="本地图片↔Base64/data URL 互转。",
		article="FileReader 编码；解码支持 data URL 或裸 Base64。",
		how="编码模式读文件为 data URL；解码模式粘贴字符串预览并下载。",
		rules="编码用 readAsDataURL；解码接受 data:image… 或裸 Base64（默认 image/png）。",
		r1="可选去掉 data: 前缀。",
		r2="非法串报错。",
		r3="超大串占内存。",
		r4="不上传。",
		example="示例编码小 PNG 并在输出框显示 data URL。",
		uc1="把小图标嵌进 HTML/CSS。",
		uc2="调试邮件或 Markdown 图片载荷。",
		uc3="从 Base64 还原预览。",
		faq_q1="会上传吗？",
		faq_a1="不会。",
		faq_q2="data URL 和裸串？",
		faq_a2="data URL 含 MIME 前缀；裸串只有 Base64 本体。",
		faq_q3="超大文件？",
		faq_a3="可以但耗内存，建议先压缩。",
		faq_q4="解码 MIME？",
		faq_a4="来自 data URL，裸串默认 image/png。",
		faq_q5="动画 GIF？",
		faq_a5="按文件编码，本页不编辑动画帧。",
	),
)

_spec(
	"add-watermark",
	dict(
		title="Add Text Watermark to Photo — Local Browser Tool",
		description="Stamp typed text on a photo in your browser—opacity, rotation, and nine-grid position—not a logo file overlay. Steps: choose an image, enter text, tune size/color/opacity/angle, apply, download. Example: SAMPLE diagonal on a gradient — files stay on your device. For logo PNGs use Overlay Images.",
		desc="Add typed text watermarks locally with position, opacity, and rotation.",
		article="Canvas fillText watermark with opacity, rotation, and anchor positions; distinct from image-overlay.",
		how="Choose a photo, type watermark text, adjust style and position, apply, download.",
		rules="Text is painted into pixels (not a CSS-only overlay). Anchors use relative positions; rotation is around the anchor.",
		r1="Font uses the browser default family at your size.",
		r2="Opacity applies via globalAlpha.",
		r3="JPEG export can flatten on a background color.",
		r4="Logo files belong on the Overlay Images tool.",
		example="Sample places semi-transparent SAMPLE on a gradient at a diagonal angle.",
		uc1="Mark proofs as SAMPLE.",
		uc2="Sign photos with a name/URL.",
		uc3="Label screenshots before sharing.",
		faq_q1="Uploaded?",
		faq_a1="No.",
		faq_q2="Different from Overlay?",
		faq_a2="Overlay stacks an image/logo file; this page types text.",
		faq_q3="Custom fonts?",
		faq_a3="Uses the browser default canvas font stack.",
		faq_q4="Tiled watermarks?",
		faq_a4="Single text stamp per apply in this version.",
		faq_q5="Transparent PNG?",
		faq_a5="PNG/WebP keep alpha; JPEG needs a background color.",
	),
	dict(
		title="图片文字水印 — 浏览器内本地标注",
		description="在浏览器给照片打上文字水印（透明度、旋转、九宫格定位），不是 Logo 图片叠加。步骤：选图、输入文字、调字号/颜色/透明度/角度、应用、下载。示例：渐变底上斜向 SAMPLE——文件不离开本机。Logo 请用「图片叠加」。",
		desc="本地文字水印：位置、透明度、旋转。",
		article="Canvas fillText 水印；与 image-overlay（图章）分工。",
		how="选图、输入水印文字、调样式与位置，应用后下载。",
		rules="文字写入像素；锚点为相对位置；绕锚点旋转。",
		r1="字体为浏览器默认族与字号。",
		r2="透明度用 globalAlpha。",
		r3="JPEG 可铺底色。",
		r4="Logo 文件请用叠加工具。",
		example="示例在渐变底上放置半透明斜向 SAMPLE。",
		uc1="样张标注 SAMPLE。",
		uc2="照片署名。",
		uc3="分享前给截图加说明。",
		faq_q1="会上传吗？",
		faq_a1="不会。",
		faq_q2="和叠加有何不同？",
		faq_a2="叠加用图片/Logo；本页输入文字。",
		faq_q3="自定义字体？",
		faq_a3="使用浏览器默认 Canvas 字体。",
		faq_q4="平铺水印？",
		faq_a4="本版每次打一条文字。",
		faq_q5="透明 PNG？",
		faq_a5="PNG/WebP 保留透明；JPEG 需底色。",
	),
)

_spec(
	"images-to-pdf",
	dict(
		title="Images to PDF — Combine Photos into One File",
		description="Turn multiple photos into a multi-page PDF in your browser—one image per page, no upload. Steps: add images, reorder, pick orientation and fit, convert, download. Example: three sample blocks → three-page PDF — files stay on your device. Differs from merge, which stitches into one image.",
		desc="Build a multi-page PDF from local photos (one page each).",
		article="Client-side pdf-lib; each image becomes one page with contain/cover fit.",
		how="Add photos, reorder, set page orientation and fit, convert to PDF, download.",
		rules="Order follows the list. Each page embeds one image. Fit contain letterboxes; cover may crop.",
		r1="Portrait/landscape sets page box orientation.",
		r2="Images are re-encoded for embedding.",
		r3="Animated GIF: first frame.",
		r4="Very large sets may be slow in-memory.",
		example="Sample builds a three-page PDF from three color blocks.",
		uc1="Archive scans.",
		uc2="Send a photo set as one PDF.",
		uc3="Package chat screenshots.",
		faq_q1="Uploaded?",
		faq_a1="No—pdf-lib runs locally (library may load from CDN).",
		faq_q2="Merge vs PDF?",
		faq_a2="Merge makes one image; this makes multi-page PDF.",
		faq_q3="Page size?",
		faq_a3="Derived from orientation and fit rules on each image.",
		faq_q4="Need Acrobat?",
		faq_a4="Any PDF reader works.",
		faq_q5="Password protect?",
		faq_a5="Not in this version.",
	),
	dict(
		title="多图转 PDF — 每图一页本地合并",
		description="在浏览器把多张照片合成多页 PDF，每图一页，无需上传。步骤：添加并排序、选方向与适配、转换、下载。示例：三色块→三页 PDF——文件不离开本机。与「拼接成一张图」不同。",
		desc="本地多图生成多页 PDF。",
		article="客户端 pdf-lib；每图一页，contain/cover。",
		how="添加图片、排序、设置页面方向与适配，转换为 PDF 并下载。",
		rules="顺序=列表序；每页嵌一张图；contain 留边，cover 可能裁切。",
		r1="纵向/横向设定页面方向。",
		r2="嵌入前会重编码。",
		r3="动画 GIF 仅首帧。",
		r4="大量图片可能较慢。",
		example="示例用三个色块生成三页 PDF。",
		uc1="扫描件归档。",
		uc2="多图一次交付。",
		uc3="聊天截图打包。",
		faq_q1="会上传吗？",
		faq_a1="不会；pdf-lib 在本地运行（库可能从 CDN 加载）。",
		faq_q2="和拼图区别？",
		faq_a2="拼图是一张图；本页是多页 PDF。",
		faq_q3="页面尺寸？",
		faq_a3="由方向与每页适配规则决定。",
		faq_q4="必须用 Acrobat？",
		faq_a4="任意 PDF 阅读器即可。",
		faq_q5="加密？",
		faq_a5="本版不支持。",
	),
)

_spec(
	"images-to-gif",
	dict(
		title="Images to GIF — Make an Animated GIF Locally",
		description="Build a short animated GIF from multiple photos in your browser—frame delay and loop controls, not a single-frame format convert. Steps: add frames, set delay/size, convert, preview and download. Example: three color frames looping — files stay on your device.",
		desc="Create an animated GIF from local frames with delay and loop options.",
		article="Client gifenc quantize + encode; unified canvas size with contain.",
		how="Add ordered frames, set delay and output width, convert, preview the GIF, download.",
		rules="Frames are scaled with contain onto one canvas; palette is quantized per encoder settings.",
		r1="Delay is milliseconds between frames.",
		r2="Loop 0 means infinite in common players.",
		r3="Soft cap ~50 frames / memory warnings.",
		r4="Differs from format-converter static GIF export.",
		example="Sample creates a three-frame looping GIF from color blocks.",
		uc1="Simple motion demos.",
		uc2="Step-by-step mini tutorials.",
		uc3="Quick reaction GIFs from stills.",
		faq_q1="Uploaded?",
		faq_a1="No—encoding is local (library may load from CDN).",
		faq_q2="Vs format converter?",
		faq_a2="Converter makes a still GIF from one image; this animates many frames.",
		faq_q3="Quality?",
		faq_a3="GIF uses a limited palette—gradients may dither.",
		faq_q4="Audio?",
		faq_a4="No audio in GIF.",
		faq_q5="Huge sequences?",
		faq_a5="May freeze the tab—keep frames few and small.",
	),
	dict(
		title="多图转 GIF — 本地合成短动画",
		description="在浏览器用多张图合成动画 GIF，可调帧间隔与循环，不是单帧格式转换。步骤：添加帧、设延迟/尺寸、转换、预览下载。示例：三色块循环动图——文件不离开本机。",
		desc="本地多帧合成动画 GIF。",
		article="客户端 gifenc 量化编码；统一画布 contain。",
		how="按序添加帧，设置延迟与宽度，转换后预览并下载。",
		rules="各帧 contain 缩放到同一画布；调色板量化。",
		r1="延迟为帧间隔毫秒。",
		r2="循环 0 通常表示无限。",
		r3="约 50 帧软上限。",
		r4="有别于格式转换的静帧 GIF。",
		example="示例用三色块生成循环 GIF。",
		uc1="简单动效演示。",
		uc2="步骤小教程。",
		uc3="静帧拼反应动图。",
		faq_q1="会上传吗？",
		faq_a1="不会（库可能从 CDN 加载）。",
		faq_q2="和格式转换？",
		faq_a2="格式转换是单图静帧 GIF；本页是多帧动画。",
		faq_q3="画质？",
		faq_a3="GIF 调色板有限，渐变可能抖动。",
		faq_q4="音频？",
		faq_a4="GIF 无音轨。",
		faq_q5="很多帧？",
		faq_a5="可能卡顿，请控制帧数与尺寸。",
	),
)

_spec(
	"images-to-word",
	dict(
		title="Images to Word — Build a DOCX from Photos",
		description="Insert multiple local photos into a Word (.docx) file in your browser—one image per section with page breaks. Steps: add images, reorder, convert, download DOCX. Example: three sample blocks → a document you can open in Word — files stay on your device.",
		desc="Export local photos into a .docx document with page breaks.",
		article="Client-side docx ImageRun embedding; PNG bytes from canvas.",
		how="Add photos, reorder, convert to DOCX, download. Open in Word or a compatible app.",
		rules="Images are embedded as PNG runs; a page break follows each image except the last.",
		r1="Width targets ~550px in the document flow.",
		r2="Order follows the list.",
		r3="Libraries may load from CDN; files are not uploaded to us.",
		r4="Very large images are scaled down for embedding.",
		example="Sample builds a DOCX with three color-block images.",
		uc1="Report appendices.",
		uc2="Homework figure sets.",
		uc3="Meeting note photo packs.",
		faq_q1="Uploaded?",
		faq_a1="No.",
		faq_q2="Need Microsoft Word?",
		faq_a2="Any DOCX-compatible app works.",
		faq_q3="Editable text?",
		faq_a3="This version focuses on images; add text in Word afterward.",
		faq_q4="Vs PDF?",
		faq_a4="DOCX is editable in Word; PDF is fixed pages.",
		faq_q5="Macros?",
		faq_a5="No macros are added.",
	),
	dict(
		title="多图转 Word — 本地生成 DOCX",
		description="在浏览器把多张本地照片插入 Word（.docx），按序分页。步骤：添加并排序、转换、下载。示例：三色块→可用 Word 打开的文档——文件不离开本机。",
		desc="本地多图导出为 DOCX。",
		article="客户端 docx 嵌入 PNG；Canvas 转字节。",
		how="添加图片、排序、转为 DOCX 并下载，用 Word 或兼容软件打开。",
		rules="图片以 PNG 嵌入；除最后一张外图后分页。",
		r1="文档中宽度约 550px。",
		r2="顺序=列表序。",
		r3="库可能从 CDN 加载，文件不上传到本站。",
		r4="超大图会缩小嵌入。",
		example="示例生成含三张色块图的 DOCX。",
		uc1="报告附图。",
		uc2="作业图集。",
		uc3="会议纪要配图。",
		faq_q1="会上传吗？",
		faq_a1="不会。",
		faq_q2="必须微软 Word？",
		faq_a2="任意兼容 DOCX 的应用即可。",
		faq_q3="可编辑正文？",
		faq_a3="本版以插图为主，可在 Word 里再加文字。",
		faq_q4="和 PDF？",
		faq_a4="DOCX 可编辑；PDF 版式固定。",
		faq_q5="宏？",
		faq_a5="不添加宏。",
	),
)

_spec(
	"images-to-ppt",
	dict(
		title="Images to PowerPoint — Photos to PPTX Slides",
		description="Turn multiple photos into a PowerPoint (.pptx) deck in your browser—one slide per image, 16:9 contain. Steps: add images, reorder, convert, download. Example: three blocks → three slides — files stay on your device.",
		desc="Export local photos to a .pptx with one slide per image.",
		article="Client PptxGenJS; 16:9 slides with contain-centered images.",
		how="Add photos, reorder, convert to PPTX, download. Open in PowerPoint or a compatible app.",
		rules="Each list item becomes one slide; images are centered with contain fit on 16:9.",
		r1="Default layout is widescreen 16:9.",
		r2="Order follows the list.",
		r3="CDN library load does not upload your files to us.",
		r4="Huge images are scaled for slides.",
		example="Sample builds a three-slide PPTX from color blocks.",
		uc1="Quick picture talks.",
		uc2="Product walkthrough decks.",
		uc3="Classroom photo slides.",
		faq_q1="Uploaded?",
		faq_a1="No.",
		faq_q2="Need PowerPoint?",
		faq_a2="Any PPTX-compatible app works.",
		faq_q3="Add titles?",
		faq_a3="Add text in PowerPoint after export.",
		faq_q4="Vs PDF?",
		faq_a4="PPTX is slide-editable; PDF is fixed.",
		faq_q5="Animations?",
		faq_a5="No slide animations are added in this version.",
	),
	dict(
		title="多图转 PPT — 每图一张幻灯片",
		description="在浏览器把多张照片做成 PowerPoint（.pptx），每图一页、16:9 contain。步骤：添加并排序、转换、下载。示例：三色块→三页幻灯片——文件不离开本机。",
		desc="本地多图导出为 PPTX。",
		article="客户端 PptxGenJS；16:9 幻灯片 contain 居中。",
		how="添加图片、排序、转为 PPTX 并下载。",
		rules="列表每项一页；图片在 16:9 画布上 contain 居中。",
		r1="默认宽屏 16:9。",
		r2="顺序=列表序。",
		r3="CDN 加载库不会把文件上传到本站。",
		r4="超大图会缩小。",
		example="示例用色块生成三页 PPTX。",
		uc1="快速看图讲解。",
		uc2="产品串讲。",
		uc3="课堂照片幻灯片。",
		faq_q1="会上传吗？",
		faq_a1="不会。",
		faq_q2="必须 PowerPoint？",
		faq_a2="任意兼容 PPTX 的应用即可。",
		faq_q3="加标题？",
		faq_a3="导出后可在 PPT 里加文字。",
		faq_q4="和 PDF？",
		faq_a4="PPTX 可编辑幻灯片；PDF 固定。",
		faq_q5="动画？",
		faq_a5="本版不添加切换动画。",
	),
)

TITLES = {
	"flip-image": {
		"es": "Voltear imagen — espejo horizontal o vertical",
		"ar": "قلب الصورة — أفقي أو عمودي",
		"pt": "Virar imagem — espelho H/V",
		"id": "Balik gambar — cermin H/V",
		"fr": "Retourner une image — miroir H/V",
		"ja": "画像を反転 — 左右・上下",
		"ru": "Отразить изображение — горизонт./верт.",
		"de": "Bild spiegeln — horizontal oder vertikal",
	},
	"image-grayscale": {
		"es": "Escala de grises — convertir foto a B/N",
		"ar": "تحويل الصورة إلى رمادي",
		"pt": "Escala de cinza — converter foto",
		"id": "Grayscale gambar — hitam putih",
		"fr": "Niveaux de gris — conversion locale",
		"ja": "グレースケール変換 — ローカルで白黒に",
		"ru": "Оттенки серого — локально",
		"de": "Graustufen — Foto lokal umwandeln",
	},
	"image-border": {
		"es": "Borde para imagen — color y grosor",
		"ar": "إطار صورة — لون وعرض",
		"pt": "Borda na imagem — cor e espessura",
		"id": "Border gambar — warna & lebar",
		"fr": "Bordure d’image — couleur et épaisseur",
		"ja": "画像に枠を追加 — 色と幅",
		"ru": "Рамка для фото — цвет и толщина",
		"de": "Bildrand — Farbe und Breite wählen",
	},
	"image-to-base64": {
		"es": "Imagen ↔ Base64 — codificar y decodificar",
		"ar": "صورة ↔ Base64 — ترميز وفك",
		"pt": "Imagem ↔ Base64 — codificar e decodificar",
		"id": "Gambar ↔ Base64 — encode & decode",
		"fr": "Image ↔ Base64 — encoder et décoder",
		"ja": "画像↔Base64 — ブラウザで変換",
		"ru": "Изображение ↔ Base64",
		"de": "Bild ↔ Base64 — lokal kodieren & dekodieren",
	},
	"add-watermark": {
		"es": "Marca de agua de texto — en el navegador",
		"ar": "علامة مائية نصية — في المتصفح",
		"pt": "Marca d’água de texto — no navegador",
		"id": "Watermark teks — di browser",
		"fr": "Filigrane texte — dans le navigateur",
		"ja": "文字透かしを追加 — ブラウザ完結",
		"ru": "Текстовый водяной знак — в браузере",
		"de": "Text-Wasserzeichen — lokal im Browser",
	},
	"images-to-pdf": {
		"es": "Imágenes a PDF — una página por foto",
		"ar": "صور إلى PDF — صفحة لكل صورة",
		"pt": "Imagens em PDF — uma página por foto",
		"id": "Gambar ke PDF — satu halaman per foto",
		"fr": "Images en PDF — une page par photo",
		"ja": "画像をPDFに — 1枚1ページ",
		"ru": "Изображения в PDF — по странице на фото",
		"de": "Bilder zu PDF — eine Seite pro Foto",
	},
	"images-to-gif": {
		"es": "Imágenes a GIF — animación corta",
		"ar": "صور إلى GIF — رسوم قصيرة",
		"pt": "Imagens em GIF — animação curta",
		"id": "Gambar ke GIF — animasi singkat",
		"fr": "Images en GIF — courte animation",
		"ja": "画像からGIF — 短いアニメ",
		"ru": "Изображения в GIF — короткая анимация",
		"de": "Bilder zu GIF — kurze Animation",
	},
	"images-to-word": {
		"es": "Imágenes a Word — DOCX local",
		"ar": "صور إلى Word — DOCX محلي",
		"pt": "Imagens para Word — DOCX local",
		"id": "Gambar ke Word — DOCX lokal",
		"fr": "Images vers Word — DOCX local",
		"ja": "画像をWordに — ローカルDOCX",
		"ru": "Изображения в Word — локальный DOCX",
		"de": "Bilder zu Word — DOCX lokal",
	},
	"images-to-ppt": {
		"es": "Imágenes a PowerPoint — una diapositiva por foto",
		"ar": "صور إلى PowerPoint — شريحة لكل صورة",
		"pt": "Imagens em PowerPoint — um slide por foto",
		"id": "Gambar ke PowerPoint — satu slide per foto",
		"fr": "Images vers PowerPoint — une diapo par photo",
		"ja": "画像をPowerPointに — 1枚1スライド",
		"ru": "Изображения в PowerPoint — слайд на фото",
		"de": "Bilder zu PowerPoint — eine Folie pro Foto",
	},
}

EXTRAS = {
	"flip-image": {
		"en": {"flip_h": "Flip horizontal", "flip_v": "Flip vertical", "no_flip": "Select horizontal and/or vertical flip."},
		"zh": {"flip_h": "水平翻转", "flip_v": "垂直翻转", "no_flip": "请至少勾选水平或垂直翻转。"},
	},
	"image-border": {
		"en": {"width_label": "Border width (px)", "color_label": "Border color"},
		"zh": {"width_label": "边框宽度 (px)", "color_label": "边框颜色"},
	},
	"image-to-base64": {
		"en": {
			"mode_label": "Mode",
			"tab_encode": "Encode",
			"tab_decode": "Decode",
			"strip_prefix": "Strip data: prefix",
			"copy": "Copy",
			"copy_done": "Copied",
			"output_label": "Output",
			"decode_input_label": "Base64 / data URL",
			"decode_placeholder": "Paste data:image/… or raw Base64",
			"decode_btn": "Decode",
			"err_invalid": "Invalid Base64 or data URL.",
		},
		"zh": {
			"mode_label": "模式",
			"tab_encode": "编码",
			"tab_decode": "解码",
			"strip_prefix": "去掉 data: 前缀",
			"copy": "复制",
			"copy_done": "已复制",
			"output_label": "输出",
			"decode_input_label": "Base64 / data URL",
			"decode_placeholder": "粘贴 data:image/… 或裸 Base64",
			"decode_btn": "解码",
			"err_invalid": "无效的 Base64 或 data URL。",
		},
	},
	"add-watermark": {
		"en": {
			"text_label": "Watermark text",
			"font_size_label": "Font size",
			"color_label": "Color",
			"opacity_label": "Opacity (%)",
			"rotation_label": "Rotation (°)",
			"position_label": "Position",
			"pos_tl": "Top left",
			"pos_tc": "Top center",
			"pos_tr": "Top right",
			"pos_ml": "Middle left",
			"pos_mc": "Center",
			"pos_mr": "Middle right",
			"pos_bl": "Bottom left",
			"pos_bc": "Bottom center",
			"pos_br": "Bottom right",
			"x_label": "X",
			"y_label": "Y",
			"empty_text": "Enter watermark text.",
		},
		"zh": {
			"text_label": "水印文字",
			"font_size_label": "字号",
			"color_label": "颜色",
			"opacity_label": "透明度 (%)",
			"rotation_label": "旋转 (°)",
			"position_label": "位置",
			"pos_tl": "左上",
			"pos_tc": "上中",
			"pos_tr": "右上",
			"pos_ml": "左中",
			"pos_mc": "居中",
			"pos_mr": "右中",
			"pos_bl": "左下",
			"pos_bc": "下中",
			"pos_br": "右下",
			"x_label": "X",
			"y_label": "Y",
			"empty_text": "请输入水印文字。",
		},
	},
	"images-to-pdf": {
		"en": {
			"convert": "Convert to PDF",
			"orientation_label": "Orientation",
			"orientation_portrait": "Portrait",
			"orientation_landscape": "Landscape",
			"fit_label": "Fit",
			"fit_contain": "Contain",
			"fit_cover": "Cover",
			"warn_lib": "PDF library failed to load. Check network and retry.",
		},
		"zh": {
			"convert": "转换为 PDF",
			"orientation_label": "方向",
			"orientation_portrait": "纵向",
			"orientation_landscape": "横向",
			"fit_label": "适配",
			"fit_contain": "Contain 完整显示",
			"fit_cover": "Cover 铺满",
			"warn_lib": "PDF 库加载失败，请检查网络后重试。",
		},
	},
	"images-to-gif": {
		"en": {
			"convert": "Create GIF",
			"delay_label": "Delay (ms)",
			"loop_label": "Loop (0=∞)",
			"width_label": "Width (px)",
			"warn_lib": "GIF encoder failed to load. Check network and retry.",
			"warn_frames": "Too many frames — keep under ~50.",
		},
		"zh": {
			"convert": "生成 GIF",
			"delay_label": "帧间隔 (ms)",
			"loop_label": "循环 (0=无限)",
			"width_label": "宽度 (px)",
			"warn_lib": "GIF 编码器加载失败，请检查网络后重试。",
			"warn_frames": "帧数过多，请控制在约 50 帧以内。",
		},
	},
	"images-to-word": {
		"en": {"convert": "Convert to Word", "warn_lib": "DOCX library failed to load. Check network and retry."},
		"zh": {"convert": "转换为 Word", "warn_lib": "DOCX 库加载失败，请检查网络后重试。"},
	},
	"images-to-ppt": {
		"en": {"convert": "Convert to PowerPoint", "warn_lib": "PPTX library failed to load. Check network and retry."},
		"zh": {"convert": "转换为 PPT", "warn_lib": "PPTX 库加载失败，请检查网络后重试。"},
	},
}


def tool_strings(lang: str, slug: str) -> dict[str, str]:
	"""Build all required i18n entries for one tool in one language."""
	u = SHARED[lang]
	prefix = MANIFEST[slug]["prefix"]
	needed = set(MANIFEST[slug]["keys"])
	d: dict[str, str] = {}

	def put(suffix: str, val: str) -> None:
		d[f"{prefix}_{suffix}"] = val

	is_multi = slug.startswith("images-to")
	sp_lang = "zh" if lang == "zh" else "en"
	sp = SPEC[slug][sp_lang]

	if lang in ("en", "zh"):
		put("title", sp["title"])
	else:
		put("title", TITLES[slug][lang])

	put("description", sp["description"] if lang in ("en", "zh") else SPEC[slug]["en"]["description"])
	put("desc", sp["desc"] if lang in ("en", "zh") else f"{TITLES[slug][lang]} — local, no upload.")
	put("article", sp["article"] if lang in ("en", "zh") else SPEC[slug]["en"]["article"])
	put("how_body", sp["how"] if lang in ("en", "zh") else SPEC[slug]["en"]["how"])
	put("rules_body", sp["rules"] if lang in ("en", "zh") else SPEC[slug]["en"]["rules"])
	src = sp if lang in ("en", "zh") else SPEC[slug]["en"]
	for i, k in enumerate(["r1", "r2", "r3", "r4"], 1):
		put(f"rules_item_{i}", src[k])
	put("example", src["example"])
	for i in range(1, 4):
		put(f"usecase_{i}", src[f"uc{i}"])
	for i in range(1, 6):
		put(f"faq_q{i}", src[f"faq_q{i}"])
		put(f"faq_a{i}", src[f"faq_a{i}"])

	common = {
		"apply": u["apply"],
		"download": u["download"],
		"clear": u["clear"],
		"sample": u["sample"],
		"choose_file": u["choose"],
		"choose_files": u["choose_files"],
		"drop_hint": u["drop_multi"] if is_multi else u["drop"],
		"preview_label": u["preview"],
		"format_label": u["format"],
		"quality_label": u["quality"],
		"jpeg_bg_label": u["jpeg_bg"],
		"status_working": u["working"],
		"status_done": u["done"],
		"empty": u["empty_multi"] if is_multi else u["empty"],
		"err_decode": u["err_decode"],
		"err_encode": u["err_encode"],
		"warn_large": u["warn_large"],
		"warn_edge": u["warn_edge"],
		"warn_animation": u["warn_anim"],
		"how_title": u["how_t"],
		"rules_title": u["rules_t"],
		"example_title": u["ex_t"],
		"usecases_title": u["uc_t"],
		"format_jpeg": "JPEG",
		"format_png": "PNG",
		"format_webp": "WebP",
		"move_up": u["move_up"],
		"move_down": u["move_down"],
		"remove": u["remove"],
	}
	for suffix, val in common.items():
		key = f"{prefix}_{suffix}"
		if key in needed:
			d[key] = val

	ex = EXTRAS.get(slug, {})
	exmap = ex.get(lang) or ex.get("en") or {}
	for suffix, val in exmap.items():
		put(suffix, val)

	for key in needed:
		if key not in d:
			suffix = key[len(prefix) + 1 :]
			d[key] = common.get(suffix, suffix.replace("_", " "))
	return {k: d[k] for k in needed}


def inject_locale(lang: str, entries: dict[str, str]) -> None:
	"""Insert generated entries before the closing brace of a locale dict."""
	path = ROOT / "src" / "site" / "i18n" / f"{lang}.ts"
	text = path.read_text(encoding="utf-8")
	marker = "  // --- nine image tools batch (2026-08-08) ---"
	if marker in text:
		# Remove previous injection block if re-run
		text = re.sub(
			r"\n  // --- nine image tools batch \(2026-08-08\) ---[\s\S]*?(?=\n\};)",
			"",
			text,
			count=1,
		)
	block = "\n" + marker + "\n" + fmt_entries(entries) + "\n"
	idx = text.rfind("\n};")
	if idx < 0:
		raise RuntimeError(f"cannot find object end in {path}")
	text = text[:idx] + block + text[idx:]
	path.write_text(text, encoding="utf-8")


def main() -> None:
	"""Generate all locale injections."""
	for lang in LANGS:
		merged: dict[str, str] = {}
		for slug in MANIFEST:
			merged.update(tool_strings(lang, slug))
		inject_locale(lang, merged)
		print(f"updated {lang}: {len(merged)} keys")


if __name__ == "__main__":
	main()
