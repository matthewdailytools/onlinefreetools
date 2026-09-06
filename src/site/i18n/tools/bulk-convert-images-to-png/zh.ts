/**
 * i18n 工具分片（bulk-convert-images-to-png / zh）。
 * H1 用中文检索句「批量把图片转成 PNG」，不把 bulk 塞进标题。
 */
import type { SiteLangDict } from '../../../types';

/** 简体中文：截图/标志要 PNG 且尽量留透明时一次转一批，口语工具站语气。 */
const zh: SiteLangDict = {
	tool_bulk_convert_images_to_png_article:
		'设计交接只要 PNG 时，把一叠 JPEG 照片、截图和带透明孔的标志在本标签页写成 .png：源文件有透明就留下，解不开的跳过，成功的打成 ZIP。JPEG 转 PNG 常常变大，表格会标出来。文件不出本机，不上传服务器。',
	tool_bulk_convert_images_to_png_choose_files: '选择图片',
	tool_bulk_convert_images_to_png_clear: '清空',
	tool_bulk_convert_images_to_png_col_after: '转换后',
	tool_bulk_convert_images_to_png_col_before: '转换前',
	tool_bulk_convert_images_to_png_col_name: '文件',
	tool_bulk_convert_images_to_png_col_status: '状态',
	tool_bulk_convert_images_to_png_convert: '全部转换',
	tool_bulk_convert_images_to_png_desc:
		'批量把图片转成 PNG，源文件有透明就保留，再下载 ZIP；文件留在本机，不上传服务器。',
	tool_bulk_convert_images_to_png_description:
		'批量把图片转成 PNG：把 JPEG、截图或带孔的标志在本标签页写成 .png，不铺白色垫底，失败跳过再打 ZIP。步骤：选一批图，点全部转换，看表格里 JPEG 转 PNG 有没有变大。示例：实心照片加镂空标志都变成 .png，后者仍有透明孔。文件留在本机，不上传服务器。',
	tool_bulk_convert_images_to_png_download_zip: '下载 ZIP',
	tool_bulk_convert_images_to_png_drop_hint: '拖入 JPEG、PNG、WebP 或 GIF（最多 20 张）。转换在本标签页完成。',
	tool_bulk_convert_images_to_png_empty: '请先添加图片。',
	tool_bulk_convert_images_to_png_err_decode: '这张图解不开。已跳过。',
	tool_bulk_convert_images_to_png_err_encode: '这张图写不成 PNG。已跳过。',
	tool_bulk_convert_images_to_png_err_fflate: '当前浏览器打不成 ZIP。请换较新的浏览器再试。',
	tool_bulk_convert_images_to_png_err_too_many: '一次最多 20 张，多出来的没有加入队列。',
	tool_bulk_convert_images_to_png_example:
		'载入样例会放一张 JPEG 色块和一张透明标志，写出两个 .png，并点亮下载 ZIP。JPEG 那一行常常显示 PNG 比原文件更大。',
	tool_bulk_convert_images_to_png_example_title: '示例',
	tool_bulk_convert_images_to_png_faq_a1:
		'不会。解码和写成 PNG 都在本标签页。文件留在本机，不上传服务器。打 ZIP 的脚本从本站加载，你的图片仍不会离开这个标签页。',
	tool_bulk_convert_images_to_png_faq_a2:
		'不会。JPEG 从来没存过透明孔。jpg 转 png 只是换上 PNG 外壳，底还是不透明的。真有孔，只有源文件本来就带透明通道。',
	tool_bulk_convert_images_to_png_faq_a3:
		'PNG 是无损的。照片 JPEG 转成 PNG 常常变大。表格会标「比原文件更大」。像素要缩小请用「批量压缩 PNG 图片」；不需要 PNG 就继续用 JPEG。',
	tool_bulk_convert_images_to_png_faq_a4:
		'压缩 PNG 是给已经是 PNG、还要保持 PNG 但变小的文件。本页改的是后缀，变成 PNG。',
	tool_bulk_convert_images_to_png_faq_a5:
		'不会。动图只保存第一帧成静止 PNG，该行会注明。',
	tool_bulk_convert_images_to_png_faq_q1: '图片会不会传到你们服务器？',
	tool_bulk_convert_images_to_png_faq_q2: 'JPG 转 PNG 能把透明救回来吗？',
	tool_bulk_convert_images_to_png_faq_q3: '为什么 PNG 比原来的 JPEG 还大？',
	tool_bulk_convert_images_to_png_faq_q4: '这和压缩 PNG 有什么不同？',
	tool_bulk_convert_images_to_png_faq_q5: '动图 GIF 还会动吗？',
	tool_bulk_convert_images_to_png_file_count_tpl: '队列里有 {n} 张图',
	tool_bulk_convert_images_to_png_how_body:
		'先选出必须变成 PNG 的图，在这里转换且不铺垫底，再带走成功文件的 ZIP。',
	tool_bulk_convert_images_to_png_how_item_1: '选出必须是 PNG 的截图或标志。',
	tool_bulk_convert_images_to_png_how_item_2: '没有白色垫底开关——源文件有透明孔就继续留孔。',
	tool_bulk_convert_images_to_png_how_item_3: '点全部转换。JPEG 源会变成不透明 PNG；体积变大时表格会警告。',
	tool_bulk_convert_images_to_png_how_item_4: '只要 JPG？用「批量把图片转成 JPG」。只要更小的 PNG？用「批量压缩 PNG 图片」。',
	tool_bulk_convert_images_to_png_how_item_5: '至少成功一张后再下载 ZIP。进页时已自动跑过载入样例。',
	tool_bulk_convert_images_to_png_how_title: '怎么转成 PNG',
	tool_bulk_convert_images_to_png_max_edge_label: '最长边',
	tool_bulk_convert_images_to_png_resize_on: '限制最长边',
	tool_bulk_convert_images_to_png_rules_body:
		'输出永远是 PNG。本页不会把透明铺到 JPEG 垫底上。',
	tool_bulk_convert_images_to_png_rules_item_1:
		'源文件有透明通道就保留。JPEG 源没有透明可留。',
	tool_bulk_convert_images_to_png_rules_item_2:
		'可选最长边缩放默认关闭，避免转换时偷偷改尺寸。',
	tool_bulk_convert_images_to_png_rules_item_3:
		'PNG 比原文件大时该行会标明。解码失败跳过。ZIP 重名变成 名称 (2).png。',
	tool_bulk_convert_images_to_png_rules_item_4:
		'文件留在本机，不上传服务器。',
	tool_bulk_convert_images_to_png_rules_title: '你会看到的规则',
	tool_bulk_convert_images_to_png_sample: '载入样例',
	tool_bulk_convert_images_to_png_status_compressing: '正在把这一批转成 PNG…',
	tool_bulk_convert_images_to_png_status_done: '本批结束——核对表格后下载 ZIP。',
	tool_bulk_convert_images_to_png_status_larger: '比原文件更大',
	tool_bulk_convert_images_to_png_status_ok: 'PNG 已就绪',
	tool_bulk_convert_images_to_png_status_skip: '已跳过',
	tool_bulk_convert_images_to_png_summary_tpl: '{ok} 张就绪 · {larger} 张变大 · {skip} 张跳过',
	tool_bulk_convert_images_to_png_title: '批量把图片转成 PNG',
	tool_bulk_convert_images_to_png_usecase_1: '把截图归档成 PNG，交给设计。',
	tool_bulk_convert_images_to_png_usecase_2: '贴图素材源文件已有透明孔，统一成 PNG。',
	tool_bulk_convert_images_to_png_usecase_3: 'CMS 只收 PNG 时做 jpg 转 png——照片文件往往会变大。',
	tool_bulk_convert_images_to_png_usecases_title: '适合这些场合',
	tool_bulk_convert_images_to_png_warn_anim: '动图：只保存第一帧成静止 PNG。',
	tool_bulk_convert_images_to_png_warn_edge: '有文件宽或高超过 8192 像素，会比较慢。',
	tool_bulk_convert_images_to_png_warn_large: '有文件大于 25 MB，这个标签页可能内存不够。',
	tool_bulk_convert_images_to_png_warn_larger: '有些 PNG 比原文件更大。照片 JPEG 转成 PNG 时常如此。',
};

export default zh;
