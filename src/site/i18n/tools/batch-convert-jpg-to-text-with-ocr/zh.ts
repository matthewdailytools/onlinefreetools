/**
 * i18n tool shard (batch-convert-jpg-to-text-with-ocr / zh).
 * 当地主词：用 OCR 批量把 JPG 转成文字。
 */
import type { SiteLangDict } from '../../../types';

const zh: SiteLangDict = {
	tool_batch_convert_jpg_to_text_with_ocr_advanced: '高级设置（可选）',
	tool_batch_convert_jpg_to_text_with_ocr_article:
		'一次丢进多张印刷页或截图，点「全部转换」，再下载 ZIP。每张图一份 TXT；合并文件用文件名切开。某一张糊了会跳过，其余照旧。文件留在本机，不上传服务器。只要一张请用「用 OCR 把 JPG 转成文字」。',
	tool_batch_convert_jpg_to_text_with_ocr_choose_files: '选择 JPG、PNG 或 WebP',
	tool_batch_convert_jpg_to_text_with_ocr_clear: '清空',
	tool_batch_convert_jpg_to_text_with_ocr_col_chars: '说明',
	tool_batch_convert_jpg_to_text_with_ocr_col_name: '文件',
	tool_batch_convert_jpg_to_text_with_ocr_col_pixels: '像素',
	tool_batch_convert_jpg_to_text_with_ocr_col_status: '状态',
	tool_batch_convert_jpg_to_text_with_ocr_combined_hint: '默认打开。ZIP 里会多一份 combined.txt，各张之间用 --- 文件名 --- 隔开。',
	tool_batch_convert_jpg_to_text_with_ocr_combined_label: 'ZIP 内附带合并 TXT',
	tool_batch_convert_jpg_to_text_with_ocr_convert_all: '全部转换',
	tool_batch_convert_jpg_to_text_with_ocr_copied: '已复制。',
	tool_batch_convert_jpg_to_text_with_ocr_copy_combined: '复制合并文本',
	tool_batch_convert_jpg_to_text_with_ocr_count_tpl: '{n} 个文件（最多 10）',
	tool_batch_convert_jpg_to_text_with_ocr_desc:
		'用 OCR 批量把 JPG 转成文字：排队、全部转换、下载 ZIP，处理在本机完成，不上传服务器。',
	tool_batch_convert_jpg_to_text_with_ocr_description:
		'把多张 JPG 或截图一次认成文字并打包 ZIP，识别在本标签页串行完成、不上传服务器。步骤：加图、全部转换、下载 ZIP。示例：两张印刷样例变成两份 TXT 再加一份合并文件。也叫批量图片转文字、批量 OCR。一张失败会跳过。只要一张请用单张识别页。',
	tool_batch_convert_jpg_to_text_with_ocr_download_zip: '下载 ZIP',
	tool_batch_convert_jpg_to_text_with_ocr_drop_hint: '把多张照片拖到这里（最多 10 张）。处理留在本标签页。',
	tool_batch_convert_jpg_to_text_with_ocr_empty: '请先加入照片。',
	tool_batch_convert_jpg_to_text_with_ocr_err_empty: '没有认出印刷字，已跳过。换更清晰的印刷页，不要用手写便条。',
	tool_batch_convert_jpg_to_text_with_ocr_err_engine: '识别引擎没加载成功。刷新后再点「全部转换」。已完成的行仍可下载。',
	tool_batch_convert_jpg_to_text_with_ocr_err_fflate: '这个浏览器打不成 ZIP。请换较新的浏览器。',
	tool_batch_convert_jpg_to_text_with_ocr_err_load: '读不了这张图。请用 JPEG、PNG 或 WebP。已跳过。',
	tool_batch_convert_jpg_to_text_with_ocr_err_pdf: '本页只认图片，不收 PDF。该文件未加入队列。',
	tool_batch_convert_jpg_to_text_with_ocr_err_size: '超过 12 MB。请先压缩或裁切。已跳过。',
	tool_batch_convert_jpg_to_text_with_ocr_err_too_many: '本页最多 10 张。多出来的没有加入。',
	tool_batch_convert_jpg_to_text_with_ocr_example:
		'点「载入样例」加入 sample-1.jpg（ONLINEFREETOOLS 与 The quick brown fox）和 sample-2.jpg（SAMPLE TWO 与印刷体样例），再跑全部转换，队列出现真实文字，并启用下载 ZIP（两份 TXT + combined.txt）。',
	tool_batch_convert_jpg_to_text_with_ocr_example_title: '示例',
	tool_batch_convert_jpg_to_text_with_ocr_faq_a1: '不会。照片留在你的浏览器标签页，脚本从本站加载，文件不上我们的服务器。',
	tool_batch_convert_jpg_to_text_with_ocr_faq_a2:
		'单张页是一张图、复制文本、下一份 TXT。本页是队列：全部转换、失败跳过、ZIP 带走每张的字和一份合并件。引擎相同，作业不同。',
	tool_batch_convert_jpg_to_text_with_ocr_faq_a3: '不会整批作废。失败那一行标成跳过，成功的仍打进 ZIP。',
	tool_batch_convert_jpg_to_text_with_ocr_faq_a4:
		'每张图一份 TXT，文件名跟着原图（重名会变成 名 (2).txt）。默认还有 combined.txt，各段用 --- 文件名 --- 隔开，方便多张 JPG 识别文字一次带走。',
	tool_batch_convert_jpg_to_text_with_ocr_faq_a5:
		'只要一张请用「用 OCR 把 JPG 转成文字」。本页给一叠图用。你也可以只丢一张，但按钮仍是全部转换和下载 ZIP。',
	tool_batch_convert_jpg_to_text_with_ocr_faq_a6: '可以。JPEG、PNG、WebP 同一条队列，多张截图提取文字不必另开网址。',
	tool_batch_convert_jpg_to_text_with_ocr_faq_a7: '印刷体最好。连笔手写常常失败并跳过该行。这不是手写产品，也不是上门扫描服务。',
	tool_batch_convert_jpg_to_text_with_ocr_faq_a8: '不收 PDF，不出 Word 或表格。数字 PDF 有字层请用「从 PDF 提取文本」。',
	tool_batch_convert_jpg_to_text_with_ocr_faq_q1: '照片会上传吗？',
	tool_batch_convert_jpg_to_text_with_ocr_faq_q2: '和单张 JPG 识别有什么不同？',
	tool_batch_convert_jpg_to_text_with_ocr_faq_q3: '一张失败会不会整批没了？',
	tool_batch_convert_jpg_to_text_with_ocr_faq_q4: 'ZIP 里有什么？',
	tool_batch_convert_jpg_to_text_with_ocr_faq_q5: '我只有一张图怎么办？',
	tool_batch_convert_jpg_to_text_with_ocr_faq_q6: 'PNG 或截图 WebP 能批量吗？',
	tool_batch_convert_jpg_to_text_with_ocr_faq_q7: '手写或扫描店服务能用吗？',
	tool_batch_convert_jpg_to_text_with_ocr_faq_q8: '能丢扫描件 PDF 吗？',
	tool_batch_convert_jpg_to_text_with_ocr_how_body:
		'把一叠印刷照片变成 ZIP 里的文字：加入图片，点全部转换（第一次会加载引擎，然后一张一张认），再下载 ZIP 或复制合并文本。',
	tool_batch_convert_jpg_to_text_with_ocr_how_item_1: '拖入多张 JPG、PNG 或 WebP（或点选文件）。',
	tool_batch_convert_jpg_to_text_with_ocr_how_item_2: '可选：为整批选语种芯片（默认中文 + 英文）。',
	tool_batch_convert_jpg_to_text_with_ocr_how_item_3: '点「全部转换」——首次会在本标签页加载识别引擎，然后一张接一张读。失败的照片会跳过。',
	tool_batch_convert_jpg_to_text_with_ocr_how_item_4: '点「下载 ZIP」（每张一份 TXT，外加合并文件）或「复制合并文本」。',
	tool_batch_convert_jpg_to_text_with_ocr_how_title: '怎么用',
	tool_batch_convert_jpg_to_text_with_ocr_lang_ar: '阿拉伯语',
	tool_batch_convert_jpg_to_text_with_ocr_lang_en: '英语',
	tool_batch_convert_jpg_to_text_with_ocr_lang_ja: '日语',
	tool_batch_convert_jpg_to_text_with_ocr_lang_legend: '整批识别语种',
	tool_batch_convert_jpg_to_text_with_ocr_lang_zh: '中文',
	tool_batch_convert_jpg_to_text_with_ocr_lang_zh_en: '中文 + 英语',
	tool_batch_convert_jpg_to_text_with_ocr_max_edge: '识别前最长边（像素）',
	tool_batch_convert_jpg_to_text_with_ocr_max_edge_hint: '默认 2048。手机上可调小一些更省内存。',
	tool_batch_convert_jpg_to_text_with_ocr_preview_label: '合并文本预览',
	tool_batch_convert_jpg_to_text_with_ocr_rules_body:
		'最多 10 张入队。超最长边的图会先缩小，再按阅读顺序认字。同一个识别线程串行跑。失败行跳过，成功的打进 ZIP。',
	tool_batch_convert_jpg_to_text_with_ocr_rules_item_1:
		'ZIP 文件名跟着原图。默认附带的合并 TXT 用 --- 文件名 --- 切开各张，连拍讲义可以当成一份文档。',
	tool_batch_convert_jpg_to_text_with_ocr_rules_item_2: '文件留在你的设备上，不上传服务器。脚本从本站加载。',
	tool_batch_convert_jpg_to_text_with_ocr_rules_item_3: '手写、糊图、强透视常常在该行失败。表格只出读序文字，不是 CSV。',
	tool_batch_convert_jpg_to_text_with_ocr_rules_item_4:
		'不收 PDF、不出 Word 或可检索 PDF。只要一张并复制文本，请用「用 OCR 把 JPG 转成文字」。',
	tool_batch_convert_jpg_to_text_with_ocr_rules_title: '使用时请预期',
	tool_batch_convert_jpg_to_text_with_ocr_sample: '载入样例',
	tool_batch_convert_jpg_to_text_with_ocr_st_done: '完成',
	tool_batch_convert_jpg_to_text_with_ocr_st_queued: '排队',
	tool_batch_convert_jpg_to_text_with_ocr_st_reading: '识别中',
	tool_batch_convert_jpg_to_text_with_ocr_st_skipped: '已跳过',
	tool_batch_convert_jpg_to_text_with_ocr_status_done: '完成。',
	tool_batch_convert_jpg_to_text_with_ocr_status_loading: '正在加载识别引擎…',
	tool_batch_convert_jpg_to_text_with_ocr_status_progress: '{i}/{n} {name}',
	tool_batch_convert_jpg_to_text_with_ocr_title: '用 OCR 批量把 JPG 转成文字',
	tool_batch_convert_jpg_to_text_with_ocr_usecase_1: '连拍几页讲义，下载 ZIP 里的 TXT 贴进笔记。',
	tool_batch_convert_jpg_to_text_with_ocr_usecase_2: '一串聊天气泡或报错截图没法选字时，一次批量图片转文字。',
	tool_batch_convert_jpg_to_text_with_ocr_usecase_3: '菜单照片按文件名合成一份合并 TXT，再复制去校对。',
	tool_batch_convert_jpg_to_text_with_ocr_usecases_title: '适合什么时候',
};

export default zh;
