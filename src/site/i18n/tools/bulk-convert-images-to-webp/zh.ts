/**
 * i18n 工具分片（bulk-convert-images-to-webp / zh）。
 * H1 用中文检索句「批量把图片转成 WebP」，不把 bulk 塞进标题。
 */
import type { SiteLangDict } from '../../../types';

/** 简体中文：站点资源要有损 WebP 且尽量留透明时一次转一批。 */
const zh: SiteLangDict = {
	tool_bulk_convert_images_to_webp_article:
		'站点资源要 WebP 时，把一叠 PNG 标志和照片在本标签页写成有损 .webp：源文件有透明就留下，本浏览器写不出 WebP 的跳过，成功的打成 ZIP。部分邮箱还不认 WebP，那种附件请转 JPG。文件不出本机，不上传服务器。',
	tool_bulk_convert_images_to_webp_chip_q80: '画质 0.8',
	tool_bulk_convert_images_to_webp_choose_files: '选择图片',
	tool_bulk_convert_images_to_webp_clear: '清空',
	tool_bulk_convert_images_to_webp_col_after: '转换后',
	tool_bulk_convert_images_to_webp_col_before: '转换前',
	tool_bulk_convert_images_to_webp_col_name: '文件',
	tool_bulk_convert_images_to_webp_col_status: '状态',
	tool_bulk_convert_images_to_webp_convert: '全部转换',
	tool_bulk_convert_images_to_webp_desc:
		'批量把图片转成 WebP，有损画质、源文件有透明就保留，再下载 ZIP；文件留在本机，不上传服务器。',
	tool_bulk_convert_images_to_webp_description:
		'批量把图片转成 WebP：把 PNG 标志或照片在本标签页写成有损 .webp，不铺 JPEG 垫底，本浏览器写不出的跳过再打 ZIP。步骤：选一批图，画质靠近 0.8，点全部转换。示例：实心照片加镂空标志都变成 .webp。文件留在本机，不上传服务器。',
	tool_bulk_convert_images_to_webp_download_zip: '下载 ZIP',
	tool_bulk_convert_images_to_webp_drop_hint: '拖入 JPEG、PNG、WebP 或 GIF（最多 20 张）。转换在本标签页完成。',
	tool_bulk_convert_images_to_webp_empty: '请先添加图片。',
	tool_bulk_convert_images_to_webp_err_decode: '这张图解不开。已跳过。',
	tool_bulk_convert_images_to_webp_err_encode: '这张图写不成 WebP。已跳过。',
	tool_bulk_convert_images_to_webp_err_fflate: '当前浏览器打不成 ZIP。请换较新的浏览器再试。',
	tool_bulk_convert_images_to_webp_err_too_many: '一次最多 20 张，多出来的没有加入队列。',
	tool_bulk_convert_images_to_webp_err_unsupported:
		'这个浏览器没有返回 WebP。该行已跳过，不会偷偷写成 JPEG。',
	tool_bulk_convert_images_to_webp_example:
		'载入样例会放一张不透明色块和一张透明标志，写出两个 .webp，并点亮下载 ZIP。标志仍有透明孔。',
	tool_bulk_convert_images_to_webp_example_title: '示例',
	tool_bulk_convert_images_to_webp_faq_a1:
		'不会。解码和写成 WebP 都在本标签页。文件留在本机，不上传服务器。打 ZIP 的脚本可能从 CDN 加载，你的图片仍不会离开这个标签页。',
	tool_bulk_convert_images_to_webp_faq_a2:
		'可以。png 转 webp 就在这里：选文件，画质靠近 0.8，点全部转换。源 PNG 有透明孔就会留下。',
	tool_bulk_convert_images_to_webp_faq_a3:
		'有些邮箱和后台还不收 WebP。那种附件请用「批量把图片转成 JPG」，不要用本页。',
	tool_bulk_convert_images_to_webp_faq_a4:
		'该行跳过。本页不会偷偷写成 JPEG。请换较新的 Chrome、Edge 或 Firefox。',
	tool_bulk_convert_images_to_webp_faq_a5:
		'不会。动图只保存第一帧成静止 WebP，该行会注明。',
	tool_bulk_convert_images_to_webp_faq_q1: '图片会不会传到你们服务器？',
	tool_bulk_convert_images_to_webp_faq_q2: 'PNG 转 WebP 在这里怎么做？',
	tool_bulk_convert_images_to_webp_faq_q3: '邮箱能打开这些 WebP 吗？',
	tool_bulk_convert_images_to_webp_faq_q4: '浏览器写不出 WebP 怎么办？',
	tool_bulk_convert_images_to_webp_faq_q5: '动图 GIF 还会动吗？',
	tool_bulk_convert_images_to_webp_file_count_tpl: '队列里有 {n} 张图',
	tool_bulk_convert_images_to_webp_how_body:
		'先选出要做成站点 WebP 的图，在这里转换且不铺 JPEG 垫底，再带走成功文件的 ZIP。',
	tool_bulk_convert_images_to_webp_how_item_1: '选出要放到站点上的照片或带孔 PNG 贴图。',
	tool_bulk_convert_images_to_webp_how_item_2: '除非要更小文件，否则画质靠近 0.8。没有 JPEG 垫底。',
	tool_bulk_convert_images_to_webp_how_item_3: '点全部转换。toBlob 不是 WebP 时该行失败，不会改写成 JPEG。',
	tool_bulk_convert_images_to_webp_how_item_4: '邮件只要 JPG？用「批量把图片转成 JPG」。只要无损 PNG？用「批量把图片转成 PNG」。',
	tool_bulk_convert_images_to_webp_how_item_5: '至少成功一张后再下载 ZIP。进页时已自动跑过载入样例。',
	tool_bulk_convert_images_to_webp_how_title: '怎么转成 WebP',
	tool_bulk_convert_images_to_webp_quality_label: 'WebP 画质',
	tool_bulk_convert_images_to_webp_rules_body:
		'输出永远是 WebP。本页不会把透明铺到 JPEG 垫底上，也不会退回 JPEG。',
	tool_bulk_convert_images_to_webp_rules_item_1:
		'源文件有透明通道就保留。JPEG 源没有透明可留。',
	tool_bulk_convert_images_to_webp_rules_item_2:
		'画质默认 0.8。只有站点预算要更小文件时才往下调。',
	tool_bulk_convert_images_to_webp_rules_item_3:
		'本浏览器写不出 WebP 则跳过该行。解码失败跳过。ZIP 重名变成 名称 (2).webp。',
	tool_bulk_convert_images_to_webp_rules_item_4:
		'文件留在本机，不上传服务器。',
	tool_bulk_convert_images_to_webp_rules_title: '你会看到的规则',
	tool_bulk_convert_images_to_webp_sample: '载入样例',
	tool_bulk_convert_images_to_webp_status_compressing: '正在把这一批转成 WebP…',
	tool_bulk_convert_images_to_webp_status_done: '本批结束——核对表格后下载 ZIP。',
	tool_bulk_convert_images_to_webp_status_ok: 'WebP 已就绪',
	tool_bulk_convert_images_to_webp_status_skip: '已跳过',
	tool_bulk_convert_images_to_webp_summary_tpl: '{ok} 张就绪 · {skip} 张跳过',
	tool_bulk_convert_images_to_webp_title: '批量把图片转成 WebP',
	tool_bulk_convert_images_to_webp_usecase_1: '把站点主图和缩略图压成 WebP，不用格式下拉。',
	tool_bulk_convert_images_to_webp_usecase_2: '贴图源文件已有透明孔时做 png 转 webp。',
	tool_bulk_convert_images_to_webp_usecase_3: '邮箱还不认 WebP 时，附件继续用 JPG。',
	tool_bulk_convert_images_to_webp_usecases_title: '适合这些场合',
	tool_bulk_convert_images_to_webp_warn_anim: '动图：只保存第一帧成静止 WebP。',
	tool_bulk_convert_images_to_webp_warn_edge: '有文件宽或高超过 8192 像素，会比较慢。',
	tool_bulk_convert_images_to_webp_warn_large: '有文件大于 25 MB，这个标签页可能内存不够。',
};

export default zh;
