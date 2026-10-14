/**
 * i18n tool shard (flip-image / zh).
 * 本地 Canvas 水平/垂直镜像翻转；高级设置导出格式；金标进度 HUD。
 * 键集须与 en.ts 完全一致；按中文检索习惯独立重写，非英模直译。
 */
import type { SiteLangDict } from '../../../types';

/** 中文文案字典（图片翻转工具页全部可见文案与 UI 标签）。 */
const zh: SiteLangDict = {
	tool_flip_image_title: '图片翻转 — 水平或垂直镜像',
	tool_flip_image_desc: '本机左右或上下镜像照片，再下载 JPEG、WebP 或 PNG，不上传服务器。',
	tool_flip_image_description:
		'在浏览器里做图片翻转：勾选水平镜像或垂直镜像，点「翻转」后「下载」JPEG/WebP/PNG。步骤清晰——选图、勾方向、翻转、保存。示例：样例色块标 A/B/C/D，水平翻转后 A 挪到右侧。GIF 只用第一帧；JPEG 无透明。全程本机处理，文件不上服务器。',
	tool_flip_image_choose_file: '选择图片',
	tool_flip_image_drop_hint: '也可拖放 JPEG、PNG、WebP 或 GIF。处理只在本标签页完成。',
	tool_flip_image_flip: '翻转',
	tool_flip_image_download: '下载',
	tool_flip_image_sample: '加载样例',
	tool_flip_image_clear: '清空',
	tool_flip_image_flip_h: '水平翻转',
	tool_flip_image_flip_v: '垂直翻转',
	tool_flip_image_advanced: '高级设置（可选）',
	tool_flip_image_format_label: '输出格式',
	tool_flip_image_format_jpeg: 'JPEG',
	tool_flip_image_format_png: 'PNG',
	tool_flip_image_format_webp: 'WebP',
	tool_flip_image_format_hint: 'WebP 体积小且可透明；PNG 无损；JPEG 需底色填满透明像素。',
	tool_flip_image_quality_label: '画质',
	tool_flip_image_quality_hint: '仅对 JPEG、WebP 生效；PNG 忽略此滑条。',
	tool_flip_image_jpeg_bg_label: 'JPEG 背景色',
	tool_flip_image_jpeg_bg_hint: '导出 JPEG 前用该颜色填透明区域，默认白色。',
	tool_flip_image_preview_label: '预览',
	tool_flip_image_progress: '正在翻转图片…',
	tool_flip_image_step_decode: '解码',
	tool_flip_image_step_flip: '翻转像素',
	tool_flip_image_step_encode: '编码',
	tool_flip_image_decode_step: '正在解码图片…',
	tool_flip_image_flip_step: '正在应用缩放变换…',
	tool_flip_image_encode_step: '正在编码 {fmt}…',
	tool_flip_image_elapsed: '已用时 {s} 秒',
	tool_flip_image_empty: '请先选择图片。',
	tool_flip_image_no_flip: '请勾选「水平翻转」和/或「垂直翻转」。',
	tool_flip_image_err_decode: '无法解码该图片。请改用 JPEG、PNG 或 WebP。',
	tool_flip_image_err_encode: '无法导出。请换更小的图或换一种格式。',
	tool_flip_image_warn_large: '文件较大（>25 MB），可能较慢。',
	tool_flip_image_warn_edge: '边长超过约 8192 px，部分浏览器可能失败。',
	tool_flip_image_warn_animation: '动画 GIF：只使用第一帧。',
	tool_flip_image_status_working: '处理中…',
	tool_flip_image_status_done: '完成 — 点击「下载」保存。',
	tool_flip_image_stats_tpl: '已翻转 {w}×{h} → {fmt}（{bytes}）',
	tool_flip_image_how_title: '怎样翻转一张图片',
	tool_flip_image_how_body:
		'本工具用画布缩放把像素真正镜像重画，不是只靠 CSS 预览。导出时按「高级设置」里选的格式重新编码。',
	tool_flip_image_how_item_1: '选择图片，或把 JPEG、PNG、WebP、GIF 拖进框内。',
	tool_flip_image_how_item_2: '勾选「水平翻转」和/或「垂直翻转」，预览会即时更新。',
	tool_flip_image_how_item_3: '需要时可打开「高级设置」，挑选 JPEG / WebP / PNG、画质与 JPEG 背景色。',
	tool_flip_image_how_item_4: '点击「翻转」，等进度条走完，再点「下载」。',
	tool_flip_image_why_choose_title: '为什么用本站的图片翻转',
	tool_flip_image_why_choose_item_1: '一次可勾水平和垂直——矩形图上相当于 180° 对调四角。',
	tool_flip_image_why_choose_item_2: '导出前实时预览，能看清标记会挪到哪一侧。',
	tool_flip_image_why_choose_item_3: '高级设置里可选 JPEG / WebP / PNG，并调节画质与 JPEG 底色。',
	tool_flip_image_why_choose_item_4: '大文件、超长边与动画 GIF（仅首帧）会给出温和提示。',
	tool_flip_image_why_choose_item_5: '全程在本标签页完成，照片不会上传到我们的服务器。',
	tool_flip_image_rules_title: '规则',
	tool_flip_image_rules_body: '翻转在与原图同尺寸的画布上做左右/上下镜像，再导出为可下载文件。',
	tool_flip_image_rules_item_1: '水平：沿竖直轴左右对调（左↔右）。',
	tool_flip_image_rules_item_2: '垂直：沿水平轴上下对调（上↔下）。',
	tool_flip_image_rules_item_3: '两项都勾 = 矩形图上等价于转 180°（四角互换）。',
	tool_flip_image_rules_item_4: '动画 GIF 只用第一帧；PNG/WebP 可保留透明；JPEG 用背景色填满透明区。',
	tool_flip_image_rules_item_5: '翻转只重排像素；存成 JPEG/WebP 会再编码，字节可能变化。',
	tool_flip_image_example_title: '示例',
	tool_flip_image_example:
		'「加载样例」生成 480×320、标有 A B / C D 的色块网格。默认勾选水平翻转时，A 会移到右侧。点「翻转」，再点「下载」。若同时勾选垂直翻转并再点「翻转」，可看到 180° 等价效果。',
	tool_flip_image_usecases_title: '什么时候用',
	tool_flip_image_usecase_1: '发帖前修正镜像自拍，让衣服上的字读得通。',
	tool_flip_image_usecase_2: '产品示意左右对调，把按钮或文案放到更合适的一侧。',
	tool_flip_image_usecase_3: '扫描页拍成上下颠倒时，用垂直翻转扶正。',
	tool_flip_image_usecase_4: '印刷前准备镜像版式，不必打开桌面修图软件。',
	tool_flip_image_faq_q1: '图片会上传吗？',
	tool_flip_image_faq_a1:
		'不会。解码、翻转与导出都在浏览器标签页里完成。需要时只从本站同域脚本目录加载库；你的文件字节留在本机，不上我们的服务器。',
	tool_flip_image_faq_q2: '会损失画质吗？',
	tool_flip_image_faq_a2:
		'翻转本身只是重排像素。另存为 JPEG 或 WebP 会重新编码，字节可能变。要无损请在高级设置里选 PNG 再下载。',
	tool_flip_image_faq_q3: '翻转和旋转有什么区别？',
	tool_flip_image_faq_a3:
		'翻转是沿轴镜像；旋转是按角度转动。本页只做镜像——需要 90° 步进请用旋转类工具。',
	tool_flip_image_faq_q4: '能同时水平和垂直吗？',
	tool_flip_image_faq_a4:
		'可以。同时勾选「水平翻转」和「垂直翻转」。矩形照片上这等价于转 180°。',
	tool_flip_image_faq_q5: '动画 GIF 怎么处理？',
	tool_flip_image_faq_a5:
		'只解码并翻转第一帧。下载结果不会保留多帧动画。',
	tool_flip_image_faq_q6: '为什么 JPEG 和预览看起来不一样？',
	tool_flip_image_faq_a6:
		'JPEG 没有透明。编码前透明像素会用 JPEG 背景色填满。本页预览用棋盘格表示透明。',
	tool_flip_image_faq_q7: '图片翻转和裁剪、灰度有何不同？',
	tool_flip_image_faq_a7:
		'本页只做镜像。裁剪是裁边；灰度是去色。那些需求请用相关的图片裁剪或图片灰度工具。',
	tool_flip_image_article:
		'本机画布翻转，支持水平与垂直镜像；像素真正重绘，不是仅 CSS 翻转。',
	tool_flip_image_ref_a_label: 'MDN — CanvasRenderingContext2D.scale()',
	tool_flip_image_ref_b_label: 'MDN — HTMLCanvasElement.toBlob()',
};

export default zh;
