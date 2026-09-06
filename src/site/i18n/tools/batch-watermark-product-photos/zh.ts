/**
 * i18n 工具分片（batch-watermark-product-photos / zh）。
 * H1 用中文检索句「批量给商品图加水印」，不把 batch 塞进标题。
 */
import type { SiteLangDict } from '../../../types';

/** 简体中文：一整拍上架图盖同一版权字，口语工具站语气。 */
const zh: SiteLangDict = {
	tool_batch_watermark_product_photos_anchor_bc: '下中',
	tool_batch_watermark_product_photos_anchor_bl: '左下',
	tool_batch_watermark_product_photos_anchor_br: '右下',
	tool_batch_watermark_product_photos_anchor_label: '位置',
	tool_batch_watermark_product_photos_anchor_mc: '正中',
	tool_batch_watermark_product_photos_anchor_ml: '左中',
	tool_batch_watermark_product_photos_anchor_mr: '右中',
	tool_batch_watermark_product_photos_anchor_tc: '上中',
	tool_batch_watermark_product_photos_anchor_tl: '左上',
	tool_batch_watermark_product_photos_anchor_tr: '右上',
	tool_batch_watermark_product_photos_apply: '全部套用',
	tool_batch_watermark_product_photos_article:
		'上架前给一整拍商品图盖同一行版权字。字号按每张图的短边算，横图竖图落在相对同一角。先预览一张，再全部套用，画布太小的跳过，成功的打成 ZIP。文件不出本机，不上传服务器。',
	tool_batch_watermark_product_photos_chip_draft: '斜铺 DRAFT',
	tool_batch_watermark_product_photos_choose_files: '选择照片',
	tool_batch_watermark_product_photos_clear: '清空',
	tool_batch_watermark_product_photos_col_after: '处理后',
	tool_batch_watermark_product_photos_col_before: '处理前',
	tool_batch_watermark_product_photos_col_name: '文件',
	tool_batch_watermark_product_photos_col_status: '状态',
	tool_batch_watermark_product_photos_color_label: '颜色',
	tool_batch_watermark_product_photos_desc:
		'批量给商品图加水印，短边百分比字号，先预览再全部套用并下载 ZIP；文件留在本机，不上传服务器。',
	tool_batch_watermark_product_photos_description:
		'批量给商品图加水印：把一整拍上架图放进队列，用短边百分比定字号，先预览一张再全部套用，太小的跳过，打成 ZIP。步骤：选一批上架图，保留角标，预览一张，全部套用。示例：横图和竖图都盖在相对同一角的 SAMPLE。文件留在本机，不上传服务器。',
	tool_batch_watermark_product_photos_download_zip: '下载 ZIP',
	tool_batch_watermark_product_photos_drop_hint: '拖入 JPEG、PNG 或 WebP 上架图（最多 20 张）。盖章在本标签页完成。',
	tool_batch_watermark_product_photos_empty: '请先添加照片。',
	tool_batch_watermark_product_photos_empty_text: '请先填写水印文字再套用。',
	tool_batch_watermark_product_photos_err_decode: '这张图解不开。已跳过。',
	tool_batch_watermark_product_photos_err_encode: '这张图写不出来。已跳过。',
	tool_batch_watermark_product_photos_err_fflate: '当前浏览器打不成 ZIP。请换较新的浏览器再试。',
	tool_batch_watermark_product_photos_err_tiny: '短边不足 64 像素，该行未盖章。',
	tool_batch_watermark_product_photos_err_too_many: '一次最多 20 张，多出来的没有加入队列。',
	tool_batch_watermark_product_photos_example:
		'载入样例会放一张横图和一张竖图，写成 SAMPLE，预览第一张，再按同一相对位置套用两张，并点亮下载 ZIP。',
	tool_batch_watermark_product_photos_example_title: '示例',
	tool_batch_watermark_product_photos_faq_a1:
		'不会。解码和 Canvas 盖章都在本标签页。文件留在本机，不上传服务器。打 ZIP 的脚本从本站加载，你的照片仍不会离开这个标签页。',
	tool_batch_watermark_product_photos_faq_a2:
		'不会跑。字号是每张图短边的百分比，九个锚点是画布比例。竖图和横图落在相对同一角。',
	tool_batch_watermark_product_photos_faq_a3:
		'不能。本页只盖照片。PDF 盖章是另一件事，需要页码时请用 PDF 水印工具，不要用上架 JPEG。',
	tool_batch_watermark_product_photos_faq_a4:
		'单张加水印适合微调一张图。本页是一整拍共用一条字，先预览再全部套用打成 ZIP。',
	tool_batch_watermark_product_photos_faq_a5:
		'有人会搜「批量水印」。在本站这份工作就在这一页，没有第二条 bulk-watermark 网址。',
	tool_batch_watermark_product_photos_faq_q1: '照片会不会传到你们服务器？',
	tool_batch_watermark_product_photos_faq_q2: '横图竖图水印会不会错位？',
	tool_batch_watermark_product_photos_faq_q3: '能在这里给 PDF 加水印吗？',
	tool_batch_watermark_product_photos_faq_q4: '和单张加水印有什么不同？',
	tool_batch_watermark_product_photos_faq_q5: '搜「批量水印」是不是这一页？',
	tool_batch_watermark_product_photos_file_count_tpl: '队列里有 {n} 张图',
	tool_batch_watermark_product_photos_format_jpeg: 'JPEG',
	tool_batch_watermark_product_photos_format_label: '输出',
	tool_batch_watermark_product_photos_format_png: 'PNG',
	tool_batch_watermark_product_photos_how_body:
		'把这一拍放进队列，设好一条水印，先预览一张，再按同一相对位置套用全部，带走 ZIP。',
	tool_batch_watermark_product_photos_how_item_1: '选出需要同一行版权字的上架图。',
	tool_batch_watermark_product_photos_how_item_2: '设文字、角落和短边百分比。默认 SAMPLE、右下、短边 8%。',
	tool_batch_watermark_product_photos_how_item_3: '点预览一张。核对横图竖图是否落在相对同一角。',
	tool_batch_watermark_product_photos_how_item_4: '点全部套用。短边小于 64 像素的跳过。JPEG 会先铺白底。',
	tool_batch_watermark_product_photos_how_item_5: '至少成功一张后再下载 ZIP。只要微调一张，用「给照片加文字水印」。',
	tool_batch_watermark_product_photos_how_title: '怎么批量加水印',
	tool_batch_watermark_product_photos_opacity_label: '不透明度',
	tool_batch_watermark_product_photos_pct_label: '相对短边',
	tool_batch_watermark_product_photos_preview: '预览一张',
	tool_batch_watermark_product_photos_rotation_label: '角度',
	tool_batch_watermark_product_photos_rules_body:
		'字号像素 = 短边 × 百分比。锚点是画布比例，不是固定像素。',
	tool_batch_watermark_product_photos_rules_item_1:
		'默认：SAMPLE、右下、短边 8%、不透明度 45%。JPEG 输出先铺白底。',
	tool_batch_watermark_product_photos_rules_item_2:
		'短边不足 64 像素该行失败。空文字不能套用。解码失败跳过。',
	tool_batch_watermark_product_photos_rules_item_3:
		'斜铺 DRAFT 会把字铺满画面。ZIP 重名变成 名称 (2).jpg 或 .png。',
	tool_batch_watermark_product_photos_rules_item_4:
		'文件留在本机，不上传服务器。',
	tool_batch_watermark_product_photos_rules_title: '你会看到的规则',
	tool_batch_watermark_product_photos_sample: '载入样例',
	tool_batch_watermark_product_photos_status_applying: '正在给这一批盖章…',
	tool_batch_watermark_product_photos_status_done: '本批结束——核对表格后下载 ZIP。',
	tool_batch_watermark_product_photos_status_ok: '已盖章',
	tool_batch_watermark_product_photos_status_preview: '预览的是队列里的第一张。',
	tool_batch_watermark_product_photos_status_skip: '已跳过',
	tool_batch_watermark_product_photos_status_tiny: '太小',
	tool_batch_watermark_product_photos_summary_tpl: '{ok} 张已盖 · {skip} 张跳过',
	tool_batch_watermark_product_photos_text_label: '水印文字',
	tool_batch_watermark_product_photos_title: '批量给商品图加水印',
	tool_batch_watermark_product_photos_usecase_1: '上架前给一文件夹主图盖店铺名。',
	tool_batch_watermark_product_photos_usecase_2: '外发样图打 SAMPLE，避免买家拿预览当主图。',
	tool_batch_watermark_product_photos_usecase_3: '给好几张图加版权行，不必一张张打开单张水印。',
	tool_batch_watermark_product_photos_usecases_title: '适合这些场合',
	tool_batch_watermark_product_photos_warn_anim: '动图：只给第一帧盖章。',
	tool_batch_watermark_product_photos_warn_edge: '有文件宽或高超过 8192 像素，会比较慢。',
	tool_batch_watermark_product_photos_warn_large: '有文件大于 25 MB，这个标签页可能内存不够。',
};

export default zh;
