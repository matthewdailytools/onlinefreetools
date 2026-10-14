/**
 * i18n tool shard (image-grayscale / zh).
 * Native Chinese rewrite (2026-10-14): search-oriented copy for 图片转黑白 / 灰度图 / 去色,
 * matching the English master’s key set, formulas, sample gray values, and UI behaviour.
 */
import type { SiteLangDict } from '../../../types';

/** Chinese strings for the image grayscale converter. */
const zh: SiteLangDict = {
	tool_image_grayscale_title: '图片转黑白 — 把彩色照片转换成灰度图，可选灰度算法',
	tool_image_grayscale_desc: '在浏览器里把彩色照片变成黑白，可选算法后下载。',
	tool_image_grayscale_description:
		'把彩色图片转成黑白或灰度图：选图、挑亮度/平均值/明度或单通道、调强度，按步骤点「转换为黑白」后下载 JPEG、WebP 或 PNG。页面给出灰度化公式与红绿蓝黄色块示例，转换过程在本浏览器标签页完成，文件不上传服务器，适合打印预览与去色导出。',
	tool_image_grayscale_choose_file: '选择图片',
	tool_image_grayscale_drop_hint: '也可拖放 JPEG、PNG、WebP 或 GIF。',
	tool_image_grayscale_convert: '转换为黑白',
	tool_image_grayscale_download: '下载',
	tool_image_grayscale_sample: '加载样例',
	tool_image_grayscale_clear: '清空',
	tool_image_grayscale_method_label: '灰度算法',
	tool_image_grayscale_method_luma601: '亮度（Rec.601，推荐）',
	tool_image_grayscale_method_luma709: '亮度（Rec.709 / sRGB）',
	tool_image_grayscale_method_average: '平均值（R、G、B）',
	tool_image_grayscale_method_lightness: '明度（最大 + 最小）÷ 2',
	tool_image_grayscale_method_red: '仅红色通道（红滤镜效果）',
	tool_image_grayscale_method_green: '仅绿色通道',
	tool_image_grayscale_method_blue: '仅蓝色通道',
	tool_image_grayscale_method_hint: '亮度算法更贴近眼睛看到的明暗；切换后预览会立刻更新。',
	tool_image_grayscale_amount_label: '强度',
	tool_image_grayscale_amount_hint: '100% 为完全黑白；调低可保留一点颜色（类似降低饱和度）。',
	tool_image_grayscale_show_original: '显示原图',
	tool_image_grayscale_advanced: '高级设置（可选）',
	tool_image_grayscale_format_label: '输出格式',
	tool_image_grayscale_format_jpeg: 'JPEG',
	tool_image_grayscale_format_png: 'PNG',
	tool_image_grayscale_format_webp: 'WebP',
	tool_image_grayscale_format_hint: 'WebP 体积小且可透明；PNG 无损；JPEG 需指定背景色。',
	tool_image_grayscale_quality_label: '画质',
	tool_image_grayscale_quality_hint: '仅 JPEG 与 WebP 有效；PNG 会忽略。',
	tool_image_grayscale_jpeg_bg_label: 'JPEG 背景色',
	tool_image_grayscale_jpeg_bg_hint: '导出 JPEG 前填满透明区域，默认白色。',
	tool_image_grayscale_preview_label: '预览',
	tool_image_grayscale_progress: '正在转成黑白…',
	tool_image_grayscale_step_decode: '解码',
	tool_image_grayscale_step_gray: '换算像素',
	tool_image_grayscale_step_encode: '编码',
	tool_image_grayscale_decode_step: '正在读取图片…',
	tool_image_grayscale_gray_step: '正在逐像素重算…',
	tool_image_grayscale_encode_step: '正在保存为 {fmt}…',
	tool_image_grayscale_elapsed: '已用时 {s} 秒',
	tool_image_grayscale_empty: '请先选择一张图片。',
	tool_image_grayscale_err_decode: '无法作为图片打开。请改用 JPEG、PNG 或 WebP。',
	tool_image_grayscale_err_encode: '无法保存。请缩小图片或换一种格式。',
	tool_image_grayscale_warn_large: '文件较大（超过 25 MB）— 转换可能较慢。',
	tool_image_grayscale_warn_edge: '有一边超过约 8,192 像素 — 部分浏览器可能处理失败。',
	tool_image_grayscale_warn_animation: '动态 GIF：只转换第一帧。',
	tool_image_grayscale_status_working: '处理中…',
	tool_image_grayscale_status_done: '完成 — 点「下载」保存文件。',
	tool_image_grayscale_stats_tpl: '{w}×{h} 像素 · {method} → {fmt}（{bytes}）',
	tool_image_grayscale_how_title: '怎样把图片转成黑白',
	tool_image_grayscale_how_body:
		'每个像素的红、绿、蓝会被换成同一个灰色值，使 R = G = B。算法决定这个灰怎么算，所以同一张照片可能偏亮、偏暗或层次变平。',
	tool_image_grayscale_how_item_1: '选择照片，或拖进虚线框。',
	tool_image_grayscale_how_item_2: '挑选灰度算法和强度；勾选「显示原图」可对照。',
	tool_image_grayscale_how_item_3: '点「转换为黑白」，等进度条走完。',
	tool_image_grayscale_how_item_4: '点「下载」。需要 PNG、JPEG 或改画质时，先打开高级设置。',
	tool_image_grayscale_why_choose_title: '为什么用本站的图片转黑白',
	tool_image_grayscale_why_choose_item_1:
		'单通道模式可做出类似黑白滤镜的效果：红通道会压暗蓝天、让肤色更顺；蓝通道会提亮天空、勾出雀斑。',
	tool_image_grayscale_why_choose_item_2:
		'七种算法可选，不是死板一种滤镜。样例里纯红在 Rec.601 亮度下是 76，平均值却是 85；明度会把红、绿、蓝、黄都压成同一个 128。',
	tool_image_grayscale_why_choose_item_3: '强度滑块既能得到完全黑白，也能做出发灰、半去色的效果。',
	tool_image_grayscale_why_choose_item_4: '改的是像素本身，下载后在任意软件里都是黑白，不像 CSS 滤镜或手机显示设置只影响眼前这一层。',
	tool_image_grayscale_why_choose_item_5: 'PNG 与 WebP 可保留透明；转换在本浏览器标签页完成，文件不会上传到服务器。',
	tool_image_grayscale_rules_title: '用到的灰度公式',
	tool_image_grayscale_rules_body: 'R、G、B 为像素的 0–255 取值；结果 Y 会写入三个通道。',
	tool_image_grayscale_rules_item_1: 'Rec.601 亮度：Y = 0.299 R + 0.587 G + 0.114 B — 经典电视与 JPEG 权重，最接近颜色看起来有多亮。',
	tool_image_grayscale_rules_item_2: 'Rec.709 亮度：Y = 0.2126 R + 0.7152 G + 0.0722 B — 高清视频权重，也是 CSS grayscale() 使用的系数。与多数编辑器一样，直接作用于存储的 sRGB 数值，不做伽马线性化。',
	tool_image_grayscale_rules_item_3: '平均值：Y = (R + G + B) ÷ 3。明度：Y = (最大 + 最小) ÷ 2。通道模式则单独复制 R、G 或 B。',
	tool_image_grayscale_rules_item_4: '强度 s：新值 = 原值 + (Y − 原值) × s。100% 时每个像素都是灰；50% 时颜色只走到灰的一半。',
	tool_image_grayscale_rules_item_5: '透明通道不变；JPEG 会用背景色填满。动态 GIF 只用第一帧。保存时会重新编码图片。',
	tool_image_grayscale_example_title: '示例',
	tool_image_grayscale_example:
		'样例上方是纯红、绿、蓝、黄色条，下面是彩虹条。用 Rec.601 会变成 76、150、29、226 — 四档灰差很明显。Rec.709 是 54、182、18、237；平均值是 85、85、85、170，红绿蓝会糊成一档；明度则四个都变成 128。切换算法看预览变化，再点「转换为黑白」和「下载」。',
	tool_image_grayscale_usecases_title: '适合什么时候用',
	tool_image_grayscale_usecase_1: '人像、社交帖或复古风黑白照 — 可试红通道，接近胶片红滤镜的感觉。',
	tool_image_grayscale_usecase_2: '激光黑白打印或报纸排版前先转灰，看看颜色会怎样拆开。',
	tool_image_grayscale_usecase_3: '检查图表、Logo 或界面配色：若两种颜色变成同一灰，色觉差异用户可能分不清。',
	tool_image_grayscale_usecase_4: '扫描件与文档：去色（类似常见图像软件里的去色）可去掉纸张偏色，文件也更简单。',
	tool_image_grayscale_faq_q1: '会上传我的照片吗？',
	tool_image_grayscale_faq_a1:
		'不会。解码、转换和保存都在本浏览器标签页完成。若还可能需要彩色原图，请自行保留原文件 — 灰度下载无法还原成彩色。',
	tool_image_grayscale_faq_q2: '该选哪种灰度算法？',
	tool_image_grayscale_faq_a2:
		'照片建议先用 Rec.601 亮度：绿权重大、蓝权重小，更贴近颜色看起来的明暗。Rec.709 在绿色上略亮一点。平均值和明度更简单，但色彩丰富的图可能变平。想要刻意滤镜效果时再用单通道。',
	tool_image_grayscale_faq_q3: '为什么转成黑白后显得很平？',
	tool_image_grayscale_faq_a3:
		'只靠色相区分的颜色可能变成同一灰。绿叶上的红花就是经典例子：用平均值时两者都是 85。改用亮度，或试试红/绿通道，才能把它们拉开。',
	tool_image_grayscale_faq_q4: '能留一点颜色吗？',
	tool_image_grayscale_faq_a4:
		'可以。把强度调低：70–80% 偏发灰、半去色；0% 则原样不动。只保留某一种颜色（选择性上色）需要蒙版，本页不做。',
	tool_image_grayscale_faq_q5: '下载的是真正的灰度图吗？体积会小很多吗？',
	tool_image_grayscale_faq_a5:
		'每个像素的 R、G、B 相等，显示和打印都是纯灰。浏览器保存的是普通 RGB 文件而不是单通道灰度，所以体积下降通常不大 — 对 PNG 往往最明显。若需要 8 位灰度色彩模式，请用图像编辑软件另存。',
	tool_image_grayscale_faq_q6: '透明 PNG 会怎样？',
	tool_image_grayscale_faq_a6:
		'下载 PNG 或 WebP 时透明会保留。JPEG 不能存透明，那些区域会填成高级设置里的 JPEG 背景色。',
	tool_image_grayscale_faq_q7: '和 CSS grayscale() 或手机自带黑白滤镜一样吗？',
	tool_image_grayscale_faq_a7:
		'CSS grayscale(100%) 的权重与 Rec.709 选项相同，但只改变网页怎么显示，文件仍是彩色。手机滤镜常会加对比度或色调。本工具把纯灰像素写进新文件。',
	tool_image_grayscale_article: '图片转灰度',
	tool_image_grayscale_ref_a_label: 'Wikipedia — 灰度（彩色转灰）',
	tool_image_grayscale_ref_b_label: 'W3C Filter Effects — grayscale() 矩阵',
};

export default zh;
