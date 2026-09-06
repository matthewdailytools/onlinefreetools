/**
 * i18n 工具分片（bulk-compress-png-images / zh）。
 * H1 用中文检索句「批量压缩 PNG 图片」，不把 bulk 塞进标题。
 */
import type { SiteLangDict } from '../../../types';

/** 简体中文：透明 logo / 切图继续当 PNG，口语工具站语气。 */
const zh: SiteLangDict = {
	tool_bulk_compress_png_images_article:
		'在本页一次压一文件夹透明 logo 或 UI 切图，透明通道留下，失败的跳过，成功的打成 ZIP。文件留在本机，不上传服务器。',
	tool_bulk_compress_png_images_chip_1024: '1024 像素',
	tool_bulk_compress_png_images_chip_reencode: '只重编码',
	tool_bulk_compress_png_images_choose_files: '选择 PNG 图片',
	tool_bulk_compress_png_images_clear: '清空',
	tool_bulk_compress_png_images_col_after: '压缩后',
	tool_bulk_compress_png_images_col_before: '压缩前',
	tool_bulk_compress_png_images_col_name: '文件',
	tool_bulk_compress_png_images_col_status: '结果',
	tool_bulk_compress_png_images_compress: '全部压缩',
	tool_bulk_compress_png_images_desc:
		'批量压缩 PNG：保透明、可选最长边、下载 ZIP。文件留在本机，不上传服务器。',
	tool_bulk_compress_png_images_description:
		'批量压缩 PNG：把透明 logo 或切图加进来，可选限制最长边，在本页重编码仍输出 PNG，失败跳过，再下载 ZIP。步骤：选一批 PNG，图标要缩小就留 1024 像素芯片，点全部压缩，看表格。示例：两张棋盘格样例仍带透明孔。文件留在本机，不上传服务器。',
	tool_bulk_compress_png_images_download_zip: '下载 ZIP',
	tool_bulk_compress_png_images_drop_hint: '拖入 PNG（最多 20 张）。其他图也会导出成 PNG。不出本标签页。',
	tool_bulk_compress_png_images_empty: '先加上 PNG 图片。',
	tool_bulk_compress_png_images_err_decode: '这张图解不开，已跳过。',
	tool_bulk_compress_png_images_err_encode: '这张图写不成 PNG，已跳过。',
	tool_bulk_compress_png_images_err_fflate: '当前浏览器打不成 ZIP，换一个较新的浏览器再试。',
	tool_bulk_compress_png_images_err_too_many: '一次最多 20 个文件，多出来的没有加入。',
	tool_bulk_compress_png_images_example:
		'载入样例会放两张透明棋盘格 PNG，按 PNG 重编码，填满表格，并点亮下载 ZIP。重名会变成 name (2).png。',
	tool_bulk_compress_png_images_example_title: '示例',
	tool_bulk_compress_png_images_faq_a1:
		'不会。解码和写成 PNG 都在本标签页完成。文件留在本机，不上传服务器。打 ZIP 的脚本从本站加载，你的图片仍不会离开本页。',
	tool_bulk_compress_png_images_faq_a2:
		'不会。导出永远是 PNG，没有 JPEG 垫底。若能接受 JPEG、只想把商品照片压得更小，去用「批量压缩商品图」。',
	tool_bulk_compress_png_images_faq_a3:
		'会。像素不铺实心底再存成 PNG，空洞还是空洞。',
	tool_bulk_compress_png_images_faq_a4:
		'常常会，尤其你没缩小最长边。这里的 PNG 不是调色板优化器。索引色重编码后可能出现色带。',
	tool_bulk_compress_png_images_faq_a5:
		'不会。只留下第一帧，导出成静止 PNG。',
	tool_bulk_compress_png_images_faq_q1: '压缩 png 会把文件传到你们服务器吗？',
	tool_bulk_compress_png_images_faq_q2: '在线压缩 png 会不会变成 JPEG？',
	tool_bulk_compress_png_images_faq_q3: '压缩透明图片之后，透明还在吗？',
	tool_bulk_compress_png_images_faq_q4: '为什么 png 压缩不失真，体积却几乎没变？',
	tool_bulk_compress_png_images_faq_q5: '动态 GIF 压完还能动吗？',
	tool_bulk_compress_png_images_file_count_tpl: '队列里有 {n} 个文件',
	tool_bulk_compress_png_images_how_body:
		'这批图如果必须继续当 PNG 用，就在这里共用一条最长边上限（需要时），一次压完，再把成功的打进 ZIP。',
	tool_bulk_compress_png_images_how_item_1: '选出必须保留透明的 PNG logo 或切图。',
	tool_bulk_compress_png_images_how_item_2: '图标要缩小就用 1024 像素芯片；像素尺寸不能动就选只重编码。',
	tool_bulk_compress_png_images_how_item_3: '点全部压缩。每一行仍是 PNG。失败的跳过，其余照常打包。',
	tool_bulk_compress_png_images_how_item_4: '像照片的 PNG 几乎压不动时，表格会提示——商品图那页用 JPEG 会更小。',
	tool_bulk_compress_png_images_how_item_5: '至少成功一张就可以下载 ZIP。进页时已经自动跑过载入样例。',
	tool_bulk_compress_png_images_how_title: '怎么压这一批',
	tool_bulk_compress_png_images_max_edge_label: '最长边',
	tool_bulk_compress_png_images_resize_on: '限制最长边',
	tool_bulk_compress_png_images_rules_body:
		'这里不会铺一层 JPEG 底。体积通常是缩小最长边之后才明显下降，只重存往往几乎不变。',
	tool_bulk_compress_png_images_rules_item_1:
		'输出就是 PNG。透明不会被铺平。没有画质滑条，因为这里的 PNG 是无损重编码。',
	tool_bulk_compress_png_images_rules_item_2:
		'最长边按比例缩小，从不放大。只重编码则保持像素尺寸，字节数可能几乎不动。',
	tool_bulk_compress_png_images_rules_item_3:
		'解不开或写不出就跳过该行。ZIP 里重名会变成 name (2).png。索引调色板重编码后可能出现色带。',
	tool_bulk_compress_png_images_rules_item_4:
		'文件留在本机，不上传服务器。',
	tool_bulk_compress_png_images_rules_title: '你会碰到的边界',
	tool_bulk_compress_png_images_sample: '载入样例',
	tool_bulk_compress_png_images_status_compressing: '正在压这一批 PNG…',
	tool_bulk_compress_png_images_status_done: '这一批做完了——先看表格，再下载 ZIP。',
	tool_bulk_compress_png_images_status_ok: 'PNG 已就绪',
	tool_bulk_compress_png_images_status_same: '几乎没变小',
	tool_bulk_compress_png_images_status_skip: '已跳过',
	tool_bulk_compress_png_images_summary_tpl: '{ok} 张就绪 · {same} 张几乎没变 · {skip} 张跳过',
	tool_bulk_compress_png_images_title: '批量压缩 PNG 图片',
	tool_bulk_compress_png_images_usecase_1: '一文件夹透明 logo，店面必须继续用 PNG。',
	tool_bulk_compress_png_images_usecase_2: 'UI 导出切图要统一最长边，再交给开发。',
	tool_bulk_compress_png_images_usecase_3: '带孔的贴纸；若存成 JPEG，孔会被垫底填死。',
	tool_bulk_compress_png_images_usecases_title: '适合什么情况',
	tool_bulk_compress_png_images_warn_anim: '动图：只留下第一帧，导出成静止 PNG。',
	tool_bulk_compress_png_images_warn_edge: '有文件宽或高超过 8192 像素，会比较慢。',
	tool_bulk_compress_png_images_warn_large: '有文件超过 25 MB，这个标签页可能内存不够。',
	tool_bulk_compress_png_images_warn_same: '有些 PNG 几乎没变小。再缩小最长边，或能接受 JPEG 时去用商品图压缩。',
};

export default zh;
