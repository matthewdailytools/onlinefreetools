/**
 * i18n 工具分片（bulk-convert-images-to-jpg / zh）。
 * H1 用中文检索句「批量把图片转成 JPG」，不把 bulk 塞进标题。
 */
import type { SiteLangDict } from '../../../types';

/** 简体中文：报名表只要 JPG 时一次转一批，口语工具站语气。 */
const zh: SiteLangDict = {
	tool_bulk_convert_images_to_jpg_article:
		'表格或邮箱只要 .jpg 时，把一叠照片、PNG 标志和手机 HEIC 在本标签页写成同名 .jpg：透明处共用一块垫底，解不开的跳过，成功的打成 ZIP。文件不出本机，不上传服务器。',
	tool_bulk_convert_images_to_jpg_chip_png: 'PNG → JPG',
	tool_bulk_convert_images_to_jpg_chip_white: '白色垫底',
	tool_bulk_convert_images_to_jpg_choose_files: '选择图片',
	tool_bulk_convert_images_to_jpg_clear: '清空',
	tool_bulk_convert_images_to_jpg_col_after: '转换后',
	tool_bulk_convert_images_to_jpg_col_before: '转换前',
	tool_bulk_convert_images_to_jpg_col_name: '文件',
	tool_bulk_convert_images_to_jpg_col_status: '状态',
	tool_bulk_convert_images_to_jpg_convert: '全部转换',
	tool_bulk_convert_images_to_jpg_desc:
		'批量把图片转成 JPG，透明处共用垫底并下载 ZIP；文件留在本机，不上传服务器。',
	tool_bulk_convert_images_to_jpg_description:
		'批量把图片转成 JPG：把报名表不要的 PNG、手机 HEIC 和普通照片一次垫底后写成 .jpg，失败跳过再打 ZIP。步骤：选一批图，透明处默认白垫底，点全部转换。示例：实心照片加镂空标志垫白后得到两个 .jpg。文件留在本机，不上传服务器。',
	tool_bulk_convert_images_to_jpg_download_zip: '下载 ZIP',
	tool_bulk_convert_images_to_jpg_drop_hint:
		'拖入 PNG、JPEG、WebP、GIF 或 HEIC（最多 20 张）。转换在本标签页完成。',
	tool_bulk_convert_images_to_jpg_empty: '请先添加图片。',
	tool_bulk_convert_images_to_jpg_err_decode: '这张图解不开（HEIC 可能要换浏览器）。已跳过。',
	tool_bulk_convert_images_to_jpg_err_encode: '这张图写不成 .jpg。已跳过。',
	tool_bulk_convert_images_to_jpg_err_fflate: '当前浏览器打不成 ZIP。请换较新的浏览器再试。',
	tool_bulk_convert_images_to_jpg_err_too_many: '一次最多 20 张，多出来的没有加入队列。',
	tool_bulk_convert_images_to_jpg_example:
		'载入样例会放一张不透明色块和一张透明标志，两者都垫白，写出两个 .jpg 文件名，并点亮下载 ZIP。',
	tool_bulk_convert_images_to_jpg_example_title: '示例',
	tool_bulk_convert_images_to_jpg_faq_a1:
		'不会。解码和写成 .jpg 都在本标签页。文件留在本机，不上传服务器。打 ZIP 的脚本从本站加载，你的图片仍不会离开这个标签页。',
	tool_bulk_convert_images_to_jpg_faq_a2:
		'可以。PNG 转 JPG 就在这里：选文件，保留白色垫底以免镂空变成黑块，再点全部转换。',
	tool_bulk_convert_images_to_jpg_faq_a3:
		'本浏览器解不开 HEIC 时，那一行跳过，其余照常打进 ZIP。可改用 Safari，或先在手机里转好再上传到队列。',
	tool_bulk_convert_images_to_jpg_faq_a4:
		'不必。JPEG 和 JPG 是同一种输出，文件名一律用 .jpg。',
	tool_bulk_convert_images_to_jpg_faq_a5:
		'这里只改后缀为 JPG。要把上架图压到大约 200 KB，请用「批量压缩商品图」。',
	tool_bulk_convert_images_to_jpg_faq_q1: '图片会不会传到你们服务器？',
	tool_bulk_convert_images_to_jpg_faq_q2: 'PNG 转 JPG 在这里怎么做？',
	tool_bulk_convert_images_to_jpg_faq_q3: 'HEIC 转 JPG 失败怎么办？',
	tool_bulk_convert_images_to_jpg_faq_q4: '还要不要另找 JPEG 工具？',
	tool_bulk_convert_images_to_jpg_faq_q5: '这和压缩照片是一回事吗？',
	tool_bulk_convert_images_to_jpg_file_count_tpl: '队列里有 {n} 张图',
	tool_bulk_convert_images_to_jpg_how_body:
		'表格只收 JPG 时，先把要交的图放进队列，透明像素共用一块垫底，在这里转完再带走成功文件的 ZIP。',
	tool_bulk_convert_images_to_jpg_how_item_1: '选出报名表或邮箱只接受 JPG 的照片、PNG 或 HEIC。',
	tool_bulk_convert_images_to_jpg_how_item_2: '除非对方要黑底，否则保留白色垫底。JPG 留不住透明孔。',
	tool_bulk_convert_images_to_jpg_how_item_3: '附件要小可以略降画质——任务仍是转成 JPG，不是去追 200 KB。',
	tool_bulk_convert_images_to_jpg_how_item_4: '点全部转换。解不开的 HEIC 会跳过，其余仍打成 .jpg。',
	tool_bulk_convert_images_to_jpg_how_item_5: '至少成功一张后再下载 ZIP。进页时已自动跑过载入样例。',
	tool_bulk_convert_images_to_jpg_how_title: '怎么转成 JPG',
	tool_bulk_convert_images_to_jpg_jpeg_bg_black: '黑',
	tool_bulk_convert_images_to_jpg_jpeg_bg_custom: '自定义',
	tool_bulk_convert_images_to_jpg_jpeg_bg_label: '透明处垫底色',
	tool_bulk_convert_images_to_jpg_jpeg_bg_white: '白',
	tool_bulk_convert_images_to_jpg_quality_label: 'JPG 画质',
	tool_bulk_convert_images_to_jpg_rules_body:
		'JPG 没有透明通道。每张图都画在同一块垫底上，再存成 .jpg。',
	tool_bulk_convert_images_to_jpg_rules_item_1:
		'导出文件名一律以 .jpg 结尾。',
	tool_bulk_convert_images_to_jpg_rules_item_2:
		'透明像素在写出前先铺上共用垫底。没有「不垫底」模式，否则镂空会变成说不清的黑块。',
	tool_bulk_convert_images_to_jpg_rules_item_3:
		'解码或写出失败只跳过该行。ZIP 里重名会变成 名称 (2).jpg。动图只转第一帧。',
	tool_bulk_convert_images_to_jpg_rules_item_4:
		'文件留在本机，不上传服务器。',
	tool_bulk_convert_images_to_jpg_rules_title: '你会看到的规则',
	tool_bulk_convert_images_to_jpg_sample: '载入样例',
	tool_bulk_convert_images_to_jpg_status_compressing: '正在把这一批转成 JPG…',
	tool_bulk_convert_images_to_jpg_status_done: '本批结束——核对表格后下载 ZIP。',
	tool_bulk_convert_images_to_jpg_status_ok: 'JPG 已就绪',
	tool_bulk_convert_images_to_jpg_status_skip: '已跳过',
	tool_bulk_convert_images_to_jpg_summary_tpl: '{ok} 张就绪 · {skip} 张跳过',
	tool_bulk_convert_images_to_jpg_title: '批量把图片转成 JPG',
	tool_bulk_convert_images_to_jpg_usecase_1: '报名表拒收 PNG，附件栏只认 JPG。',
	tool_bulk_convert_images_to_jpg_usecase_2: '给印刷店发一包产品照，对方只要 .jpg。',
	tool_bulk_convert_images_to_jpg_usecase_3: 'Windows 打不开手机 HEIC——本浏览器能解的先转成 JPG。',
	tool_bulk_convert_images_to_jpg_usecases_title: '适合这些场合',
	tool_bulk_convert_images_to_jpg_warn_anim: '动图：只转换第一帧。',
	tool_bulk_convert_images_to_jpg_warn_edge: '有文件宽或高超过 8192 像素，会比较慢。',
	tool_bulk_convert_images_to_jpg_warn_large: '有文件大于 25 MB，这个标签页可能内存不够。',
};

export default zh;
