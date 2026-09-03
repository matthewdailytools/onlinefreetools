/**
 * i18n 工具分片（bulk-compress-product-photos / zh）。
 * H1 用中文检索句「批量压缩商品图」，不把 bulk 塞进标题。
 */
import type { SiteLangDict } from '../../../types';

/** 简体中文：上架前压一批商品照片，口语工具站语气。 */
const zh: SiteLangDict = {
	tool_bulk_compress_product_photos_article:
		'一次选多张商品照片，共用体积上限，失败的跳过，成功的打成 ZIP。文件留在本机，不会上传到服务器。',
	tool_bulk_compress_product_photos_chip_200kb: '200 KB',
	tool_bulk_compress_product_photos_chip_jpeg: 'JPEG',
	tool_bulk_compress_product_photos_chip_jpg: '.jpg',
	tool_bulk_compress_product_photos_choose_files: '选择商品照片',
	tool_bulk_compress_product_photos_clear: '清空',
	tool_bulk_compress_product_photos_col_after: '压缩后',
	tool_bulk_compress_product_photos_col_before: '压缩前',
	tool_bulk_compress_product_photos_col_name: '文件',
	tool_bulk_compress_product_photos_col_status: '结果',
	tool_bulk_compress_product_photos_compress: '全部压缩',
	tool_bulk_compress_product_photos_desc:
		'批量压缩商品图到约 200 KB 并打包 ZIP，文件留在本机，不上传服务器。',
	tool_bulk_compress_product_photos_description:
		'批量压缩商品图：把待上架的照片放进队列，共用最长边和 200 KB 上限，在本页转成 JPEG 或 WebP，失败的跳过，成功的下载 ZIP。步骤：先选一批图，默认用 200 KB 芯片，点全部压缩，再看命中或未命中。示例：打开页面就会压两张样例图。文件留在本机设备，不会上传到服务器。',
	tool_bulk_compress_product_photos_download_zip: '下载 ZIP',
	tool_bulk_compress_product_photos_drop_hint: '拖入 JPEG、PNG 或 WebP（最多 20 张）。压缩只在当前标签页进行。',
	tool_bulk_compress_product_photos_empty: '请先加入商品照片。',
	tool_bulk_compress_product_photos_err_decode: '这张图无法解码，已跳过。',
	tool_bulk_compress_product_photos_err_encode: '这张图压缩失败，已跳过。',
	tool_bulk_compress_product_photos_err_fflate: '当前浏览器打不成 ZIP，请换较新的浏览器再试。',
	tool_bulk_compress_product_photos_err_too_many: '一次最多 20 张，多出来的没有加入队列。',
	tool_bulk_compress_product_photos_err_webp: '当前浏览器不能写出 WebP，已改回 JPEG（.jpg）。',
	tool_bulk_compress_product_photos_example:
		'载入样例会放入两张占位商品图，按默认 200 KB JPEG 压缩，填好命中/未命中表，并启用下载 ZIP。ZIP 里重名会写成 name (2).jpg。',
	tool_bulk_compress_product_photos_example_title: '示例',
	tool_bulk_compress_product_photos_faq_a1:
		'不会。解码和编码都在这个标签页里完成。照片留在本机，不会上传到服务器。打包脚本可能从 CDN 加载，但你的文件不会被送走。',
	tool_bulk_compress_product_photos_faq_a2:
		'不一定。噪点大或已经很小的图会有体积地板。质量降到 0.5 仍超标会标成未命中，但仍把最接近的结果打进包，方便你再缩最长边。',
	tool_bulk_compress_product_photos_faq_a3:
		'不用。JPEG 和 JPG 在本页是同一输出，文件名用 .jpg。搜 jpeg 批量压缩也用这一页。',
	tool_bulk_compress_product_photos_faq_a4:
		'要透明、还必须是 PNG 的图标，请用 PNG 压缩页。本页默认把商品照片压成 JPEG/WebP，方便上架体积闸。',
	tool_bulk_compress_product_photos_faq_a5:
		'不会。只取能解码的第一帧做成静图，并在警告里标明。',
	tool_bulk_compress_product_photos_faq_q1: '商品图会上传到你们服务器吗？',
	tool_bulk_compress_product_photos_faq_q2: '每张都能压到 200 KB 吗？',
	tool_bulk_compress_product_photos_faq_q3: '搜 jpeg 还要另开一个工具吗？',
	tool_bulk_compress_product_photos_faq_q4: '透明 PNG 商标能用这页吗？',
	tool_bulk_compress_product_photos_faq_q5: '动图 GIF 还会动吗？',
	tool_bulk_compress_product_photos_file_count_tpl: '队列里有 {n} 张图',
	tool_bulk_compress_product_photos_format_jpeg: 'JPEG（.jpg）',
	tool_bulk_compress_product_photos_format_webp: 'WebP',
	tool_bulk_compress_product_photos_how_body:
		'先把要上架的照片选进来，共用一个体积上限，在本机压完后带走 ZIP。某张失败不会卡住整批。',
	tool_bulk_compress_product_photos_how_item_1: '选出需要变小的那一批商品图，而不是一张张重复操作。',
	tool_bulk_compress_product_photos_how_item_2: '平台要 200 KB 就留着默认芯片；输出默认是 JPEG（.jpg）。',
	tool_bulk_compress_product_photos_how_item_3: '手机原图太大时，先限制最长边，再靠画质去逼近体积。',
	tool_bulk_compress_product_photos_how_item_4: '点全部压缩，按文件名看命中、未命中或跳过。',
	tool_bulk_compress_product_photos_how_item_5: '至少成功一张就可以下载 ZIP。打开页面时样例已经跑过。',
	tool_bulk_compress_product_photos_how_title: '怎么压缩',
	tool_bulk_compress_product_photos_jpeg_bg_black: '黑底',
	tool_bulk_compress_product_photos_jpeg_bg_custom: '自定义',
	tool_bulk_compress_product_photos_jpeg_bg_label: 'JPEG 背景',
	tool_bulk_compress_product_photos_jpeg_bg_white: '白底',
	tool_bulk_compress_product_photos_max_edge_label: '最长边',
	tool_bulk_compress_product_photos_output_label: '输出',
	tool_bulk_compress_product_photos_quality_label: '画质',
	tool_bulk_compress_product_photos_resize_on: '限制最长边',
	tool_bulk_compress_product_photos_rules_body:
		'整批共用一套参数。某张没到上限时看表格，不要当成全部成功。',
	tool_bulk_compress_product_photos_rules_item_1: '最长边只缩小、不放大。像素变少往往比只降画质更省体积。',
	tool_bulk_compress_product_photos_rules_item_2: '画质作用于 JPEG/WebP。勾选 200 KB 时会逐步降低画质，最低到 0.5。',
	tool_bulk_compress_product_photos_rules_item_3: '解码失败只跳过该行。ZIP 里重名会改成 name (2).jpg。',
	tool_bulk_compress_product_photos_rules_item_4: '照片留在本机，不会上传到服务器。重新编码通常会去掉 EXIF。',
	tool_bulk_compress_product_photos_rules_title: '规则与边界',
	tool_bulk_compress_product_photos_sample: '载入样例',
	tool_bulk_compress_product_photos_status_compressing: '正在压缩这一批…',
	tool_bulk_compress_product_photos_status_done: '本批结束，先看表再下载 ZIP。',
	tool_bulk_compress_product_photos_status_hit: '已达标',
	tool_bulk_compress_product_photos_status_miss: '未到上限',
	tool_bulk_compress_product_photos_status_skip: '已跳过',
	tool_bulk_compress_product_photos_summary_tpl: '{ok} 张可下载 · {miss} 张未到上限 · {skip} 张跳过',
	tool_bulk_compress_product_photos_target_kb_label: '体积上限',
	tool_bulk_compress_product_photos_target_on: '按目标体积压缩',
	tool_bulk_compress_product_photos_title: '批量压缩商品图',
	tool_bulk_compress_product_photos_usecase_1: '上新当天：把 SKU 主图压到平台大约 200 KB 再上传。',
	tool_bulk_compress_product_photos_usecase_2: '给买家邮件附一批实拍，避免附件超限被退信。',
	tool_bulk_compress_product_photos_usecase_3: '把同一场拍摄交给设计时，先打成小 ZIP 再传。',
	tool_bulk_compress_product_photos_usecases_title: '适合这些场合',
	tool_bulk_compress_product_photos_warn_anim: '动图只会压第一帧。',
	tool_bulk_compress_product_photos_warn_edge: '有照片超过 8192 像素，可能会很慢。',
	tool_bulk_compress_product_photos_warn_large: '有文件超过 25 MB，这个标签页可能内存不够。',
};

export default zh;
