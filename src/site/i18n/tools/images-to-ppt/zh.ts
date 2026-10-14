/**
 * i18n tool shard (images-to-ppt / zh).
 * 多图转 PowerPoint 中文：一图一页 PPTX，可选 16:9/4:3、整图留白/铺满、背景色。
 */
import type { SiteLangDict } from '../../../types';

/** 中文文案字典。 */
const zh: SiteLangDict = {
	tool_images_to_ppt_title: "图片转 PowerPoint — 多张照片生成 PPTX 幻灯片",
	tool_images_to_ppt_desc: "把本机多张照片做成一图一页的 .pptx 幻灯片。",
	tool_images_to_ppt_description:
		"在浏览器里把多张照片做成 PowerPoint（.pptx）——一图一页，可选 16:9 或 4:3，整图留白或铺满裁切。步骤：选择图片、转换为 PowerPoint、下载。示例：三张照片 → 三页幻灯片。文件不出本标签页、不上传服务器即可完成。",
	tool_images_to_ppt_choose_files: "选择图片",
	tool_images_to_ppt_drop_hint: "也可把多张 JPEG、PNG、WebP 或 GIF 拖到此处。处理留在本标签页。",
	tool_images_to_ppt_convert: "转换为 PowerPoint",
	tool_images_to_ppt_download: "下载",
	tool_images_to_ppt_sample: "加载样例",
	tool_images_to_ppt_clear: "清空",
	tool_images_to_ppt_advanced: "高级设置（可选）",
	tool_images_to_ppt_layout_label: "幻灯片尺寸",
	tool_images_to_ppt_layout_16x9: "宽屏 16:9",
	tool_images_to_ppt_layout_4x3: "标准 4:3",
	tool_images_to_ppt_layout_hint: "多数现代投影用 16:9；教室里仍是旧设备时选 4:3。",
	tool_images_to_ppt_fit_label: "图片如何铺满幻灯片",
	tool_images_to_ppt_fit_contain: "完整显示（留白 letterbox）",
	tool_images_to_ppt_fit_cover: "铺满幻灯片（可能裁边）",
	tool_images_to_ppt_fit_hint: "完整显示保留每个像素；铺满会裁切过高或过宽的照片。",
	tool_images_to_ppt_bg_label: "幻灯片背景",
	tool_images_to_ppt_bg_hint: "选「完整显示」时，留白条带会用此颜色。默认白色。",
	tool_images_to_ppt_progress: "正在生成 PowerPoint…",
	tool_images_to_ppt_step_encode: "编码图片",
	tool_images_to_ppt_step_build: "组装幻灯片",
	tool_images_to_ppt_step_pack: "打包 PPTX",
	tool_images_to_ppt_encode_step: "正在编码第 {i} / {n} 张…",
	tool_images_to_ppt_build_step: "正在把幻灯片写入文稿…",
	tool_images_to_ppt_pack_step: "正在打包 .pptx 文件…",
	tool_images_to_ppt_elapsed: "已用时 {s} 秒",
	tool_images_to_ppt_move_up: "上移",
	tool_images_to_ppt_move_down: "下移",
	tool_images_to_ppt_remove: "移除",
	tool_images_to_ppt_empty: "请先至少添加一张图片。",
	tool_images_to_ppt_err_decode: "无法解码该图片。请改用 JPEG、PNG 或 WebP。",
	tool_images_to_ppt_err_convert: "无法生成 PowerPoint 文件。请减少张数或缩小体积后再试。",
	tool_images_to_ppt_err_lib: "PPTX 库加载失败。请刷新页面后重试。",
	tool_images_to_ppt_warn_large: "文件较大（>25 MB）——转换可能较慢。",
	tool_images_to_ppt_warn_edge: "某一边超过约 8192 px——部分浏览器可能失败。",
	tool_images_to_ppt_warn_animation: "动图 GIF：幻灯片上只使用第一帧。",
	tool_images_to_ppt_status_converting: "正在转换为 PowerPoint…",
	tool_images_to_ppt_status_done: "完成 — 点击「下载」保存 .pptx。",
	tool_images_to_ppt_stats_tpl: "{n} 页幻灯片 → PPTX 已就绪（{bytes}）",
	tool_images_to_ppt_how_title: "图片转 PPT / 照片转 PowerPoint 怎么操作",
	tool_images_to_ppt_how_body:
		"列表里每张文件对应一页幻灯片。用箭头调整顺序后再转换。可选设置可改尺寸、铺满方式与留白颜色。",
	tool_images_to_ppt_how_item_1: "选择图片，或把 JPEG、PNG、WebP、GIF 拖入放置区。",
	tool_images_to_ppt_how_item_2: "顺序不对就用「上移 / 下移」调整；不需要的点「移除」。",
	tool_images_to_ppt_how_item_3: "需要时打开「高级设置」，选 16:9 或 4:3、完整显示或铺满，以及背景色。",
	tool_images_to_ppt_how_item_4: "点击「转换为 PowerPoint」，等进度条走完，再点「下载」。",
	tool_images_to_ppt_why_choose_title: "为什么用本站的图片转 PowerPoint — 多张照片生成 PPTX 幻灯片",
	tool_images_to_ppt_why_choose_item_1: "按你排好的顺序一图一页——不上传云端、不用账号。",
	tool_images_to_ppt_why_choose_item_2: "宽屏 16:9 或经典 4:3，方便对齐现场投影比例。",
	tool_images_to_ppt_why_choose_item_3: "完整显示保留整张照片；需要满幅观感时再选铺满裁边。",
	tool_images_to_ppt_why_choose_item_4: "超大文件、超大边长与动图 GIF（仅首帧）会给出软提示。",
	tool_images_to_ppt_why_choose_item_5: "编码与打包 .pptx 时有可见进度条，过程一目了然。",
	tool_images_to_ppt_rules_title: "规则",
	tool_images_to_ppt_rules_body: "文稿由 PptxGenJS 在本浏览器标签页内完整生成。",
	tool_images_to_ppt_rules_item_1: "默认宽屏 16:9；需要时在高级设置里改成 4:3。",
	tool_images_to_ppt_rules_item_2: "幻灯片顺序跟列表一致。转换前用「上移 / 下移」排好。",
	tool_images_to_ppt_rules_item_3: "完整显示用背景色做 letterbox；铺满则裁切以填满内容区。",
	tool_images_to_ppt_rules_item_4: "动图 GIF 只贡献第一帧。本页不加标题与切换动画——下载后在 PowerPoint 里再编辑。",
	tool_images_to_ppt_rules_item_5: "从本站加载 PPTX 库不会把你的照片上传到我们的服务器。",
	tool_images_to_ppt_example_title: "示例",
	tool_images_to_ppt_example:
		"「加载样例」会生成三张色块幻灯片（sample-a、sample-b、sample-c），默认 16:9 与完整显示。「转换为 PowerPoint」在浏览器内完成；「下载」保存 images.pptx。改成 4:3 或铺满再转一次，可对比裁切效果。",
	tool_images_to_ppt_usecases_title: "适合什么时候用",
	tool_images_to_ppt_usecase_1: "手机相册要快速做成演讲稿，却不想先打开桌面版 PowerPoint。",
	tool_images_to_ppt_usecase_2: "产品演示里每张截图都要单独一页，可满幅或留白。",
	tool_images_to_ppt_usecase_3: "课堂或外业照片必须对齐仍在用的 4:3 投影。",
	tool_images_to_ppt_usecase_4: "先用多图生成幻灯片草稿，再在 PowerPoint 或 LibreOffice Impress 里加标题、备注与动画。",
	tool_images_to_ppt_faq_q1: "照片会上传吗？",
	tool_images_to_ppt_faq_a1:
		"不会。解码、排版与 PPTX 打包都在本标签页完成。唯一的网络请求是从本站 vendor 目录加载 PptxGenJS 脚本。",
	tool_images_to_ppt_faq_q2: "必须安装微软 PowerPoint 吗？",
	tool_images_to_ppt_faq_a2:
		"不必。能打开 .pptx 的软件都行——PowerPoint、Google 幻灯片（文件 → 导入）、LibreOffice Impress、Keynote 等。",
	tool_images_to_ppt_faq_q3: "能在这里加标题或动画吗？",
	tool_images_to_ppt_faq_a3:
		"本页不做。先导出照片幻灯片，再用 PowerPoint（或 Impress）加文字、切换与演讲者备注。",
	tool_images_to_ppt_faq_q4: "图片转 PPT 和图片转 PDF 有什么区别？",
	tool_images_to_ppt_faq_a4:
		"PPTX 仍是可编辑的幻灯片；PDF 适合讲义与打印。需要文档而不是演示文稿时，请用「图片转 PDF」工具。",
	tool_images_to_ppt_faq_q5: "完整显示还是铺满——该怎么选？",
	tool_images_to_ppt_faq_a5:
		"完整显示（默认）展示整张照片，留白条带用背景色。铺满会裁边以填满幻灯片——产品满幅图常用。",
	tool_images_to_ppt_faq_q6: "动图 GIF 会怎样？",
	tool_images_to_ppt_faq_a6:
		"只把第一帧放上幻灯片。本次导出不会让 PowerPoint 把多帧 GIF 当动画播放。",
	tool_images_to_ppt_faq_q7: "为什么转换很慢或失败？",
	tool_images_to_ppt_faq_a7:
		"体积很大（>25 MB）或边长超过约 8192 px 会压垮浏览器。先缩小或压缩图片，必要时减少张数再转。",
	tool_images_to_ppt_article: "在浏览器里把图片转成 PowerPoint PPTX 幻灯片",
	tool_images_to_ppt_references: "客户端导出路径相关的 PptxGenJS 与 MDN Blob 参考。",
	tool_images_to_ppt_ref_a_label: "PptxGenJS — JavaScript PowerPoint 库",
	tool_images_to_ppt_ref_b_label: "MDN — Blob",
};

export default zh;
