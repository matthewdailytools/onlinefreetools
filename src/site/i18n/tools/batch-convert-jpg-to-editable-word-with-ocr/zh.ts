/**
 * i18n tool shard (batch-convert-jpg-to-editable-word-with-ocr / zh).
 * 当地主词：用 OCR 批量把 JPG 转成可编辑的 Word。
 */
import type { SiteLangDict } from '../../../types';

const zh: SiteLangDict = {
	tool_batch_convert_jpg_to_editable_word_with_ocr_advanced: '高级设置（可选）',
	tool_batch_convert_jpg_to_editable_word_with_ocr_article:
		'把多张印刷页或截图丢进来，点「全部转换」，再「下载 Word」。每张图一节：标题是文件名，正文是认出来的字，默认可把原图放在字前面方便对照。某一张糊了会跳过，其余仍在同一份文档里。文件留在本机，不上传服务器。只要 TXT 压缩包请用「用 OCR 批量把 JPG 转成文字」。',
	tool_batch_convert_jpg_to_editable_word_with_ocr_choose_files: '选择 JPG、PNG 或 WebP',
	tool_batch_convert_jpg_to_editable_word_with_ocr_clear: '清空',
	tool_batch_convert_jpg_to_editable_word_with_ocr_col_chars: '说明',
	tool_batch_convert_jpg_to_editable_word_with_ocr_col_name: '文件',
	tool_batch_convert_jpg_to_editable_word_with_ocr_col_pixels: '像素',
	tool_batch_convert_jpg_to_editable_word_with_ocr_col_status: '状态',
	tool_batch_convert_jpg_to_editable_word_with_ocr_convert_all: '全部转换',
	tool_batch_convert_jpg_to_editable_word_with_ocr_count_tpl: '{n} 个文件（最多 10）',
	tool_batch_convert_jpg_to_editable_word_with_ocr_desc:
		'用 OCR 批量把 JPG 转成可编辑的 Word：排队、全部转换、下载一份 Word，处理在本机完成，不上传服务器。',
	tool_batch_convert_jpg_to_editable_word_with_ocr_description:
		'把多张 JPG 或截图一次认成字，再合成一份能改的 Word，识别在本标签页一张接一张完成、文件留在本机、不上传服务器。步骤：加图、全部转换、下载 Word。示例：两张印刷样例变成两节，标题是文件名，默认可带原图校对。也叫多张 JPG 识别成 Word、JPG OCR 转 Word。一张失败会跳过。只要 TXT 压缩包请用批量转文字页。',
	tool_batch_convert_jpg_to_editable_word_with_ocr_download_word: '下载 Word',
	tool_batch_convert_jpg_to_editable_word_with_ocr_drop_hint: '把多张照片拖到这里（最多 10 张）。处理留在本标签页。',
	tool_batch_convert_jpg_to_editable_word_with_ocr_empty: '请先加入照片。',
	tool_batch_convert_jpg_to_editable_word_with_ocr_err_docx: '当前浏览器组不出 Word 文件。请换较新的浏览器再试。',
	tool_batch_convert_jpg_to_editable_word_with_ocr_err_empty: '没有认出印刷字，已跳过。换更清晰的印刷页，不要用手写便条。',
	tool_batch_convert_jpg_to_editable_word_with_ocr_err_engine:
		'识别引擎没加载成功。刷新后再点全部转换。已经完成的节仍可下载。',
	tool_batch_convert_jpg_to_editable_word_with_ocr_err_load: '读不了这张图。请用 JPEG、PNG 或 WebP。已跳过。',
	tool_batch_convert_jpg_to_editable_word_with_ocr_err_pdf: '本页只收照片，不收 PDF。该文件没有加入队列。',
	tool_batch_convert_jpg_to_editable_word_with_ocr_err_size: '超过 12 MB。请先压缩或裁切。已跳过。',
	tool_batch_convert_jpg_to_editable_word_with_ocr_err_too_many: '本页最多 10 张。多出来的没有加入。',
	tool_batch_convert_jpg_to_editable_word_with_ocr_example:
		'「载入样例」会加入 sample-1.jpg（ONLINEFREETOOLS 和 The quick brown fox）和 sample-2.jpg（SAMPLE TWO 和印刷体样例），跑完全部转换后可下载 Word，里面两节都有标题。',
	tool_batch_convert_jpg_to_editable_word_with_ocr_example_title: '示例',
	tool_batch_convert_jpg_to_editable_word_with_ocr_faq_a1:
		'不会。照片留在本浏览器标签页。引擎和组 Word 的脚本从本站加载；文件不上我们的服务器。',
	tool_batch_convert_jpg_to_editable_word_with_ocr_faq_a2:
		'「用 OCR 批量把 JPG 转成文字」下载的是 TXT 的 ZIP。本页组的是一份能改的 Word，每张图一节。引擎一样，产物不一样。',
	tool_batch_convert_jpg_to_editable_word_with_ocr_faq_a3:
		'「多图转 Word」是把照片贴进文档当图，字选不中。本页用 OCR 写出段落，字能改。原图可选，用来对照。',
	tool_batch_convert_jpg_to_editable_word_with_ocr_faq_a4: '不会。失败的那张跳过，其余仍写进同一份 Word。',
	tool_batch_convert_jpg_to_editable_word_with_ocr_faq_a5:
		'每张成功的图一节：标题是文件名，然后可选原图，再是识别段落，节与节分页。栏、表不会跟原件版式一样。',
	tool_batch_convert_jpg_to_editable_word_with_ocr_faq_a6:
		'不收。本页不读 PDF。扫描件请用「用 OCR 批量把扫描 PDF 转成 Word」。带文字层的数字 PDF 请用「将 PDF 转为 Word 文档」。',
	tool_batch_convert_jpg_to_editable_word_with_ocr_faq_a7:
		'印刷体最稳。连笔手写经常在那一行失败。这不是手写识别产品。',
	tool_batch_convert_jpg_to_editable_word_with_ocr_faq_a8:
		'可以。JPEG、PNG、WebP 进同一队列。即使只丢一张，下载的也是 Word，不是 TXT。单张转文字请用「用 OCR 把 JPG 转成文字」。',
	tool_batch_convert_jpg_to_editable_word_with_ocr_faq_q1: '照片会上传吗？',
	tool_batch_convert_jpg_to_editable_word_with_ocr_faq_q2: '和「用 OCR 批量把 JPG 转成文字」有什么不同？',
	tool_batch_convert_jpg_to_editable_word_with_ocr_faq_q3: '和「多图转 Word」有什么不同？',
	tool_batch_convert_jpg_to_editable_word_with_ocr_faq_q4: '一张失败，整份 Word 会空吗？',
	tool_batch_convert_jpg_to_editable_word_with_ocr_faq_q5: 'Word 里每一节长什么样？',
	tool_batch_convert_jpg_to_editable_word_with_ocr_faq_q6: '能丢扫描 PDF 做 OCR 转 Word 吗？',
	tool_batch_convert_jpg_to_editable_word_with_ocr_faq_q7: '手写能认吗？',
	tool_batch_convert_jpg_to_editable_word_with_ocr_faq_q8: '能用 PNG 吗？还是只能一张 JPG？',
	tool_batch_convert_jpg_to_editable_word_with_ocr_how_body:
		'把一叠印刷照片变成一份能改的 Word：加图，点全部转换（第一次会在本标签页加载引擎，然后一张接一张认），再下载 Word。',
	tool_batch_convert_jpg_to_editable_word_with_ocr_how_item_1: '拖入多张 JPG、PNG 或 WebP（或点选文件）。',
	tool_batch_convert_jpg_to_editable_word_with_ocr_how_item_2: '可选：给整批选一个语种芯片（默认中英一起）。',
	tool_batch_convert_jpg_to_editable_word_with_ocr_how_item_3:
		'点全部转换——第一次会在本标签页加载识别引擎，然后一张接一张认。失败的那张跳过。',
	tool_batch_convert_jpg_to_editable_word_with_ocr_how_item_4:
		'点下载 Word——一份文档，每张图一节（标题、可选原图、能改的正文）。',
	tool_batch_convert_jpg_to_editable_word_with_ocr_how_title: '怎么用',
	tool_batch_convert_jpg_to_editable_word_with_ocr_hud_elapsed_tpl: "已用 {s} 秒",
	tool_batch_convert_jpg_to_editable_word_with_ocr_hud_fail_hint: "刷新后再点全部转换。已经完成的节仍可下载。",
	tool_batch_convert_jpg_to_editable_word_with_ocr_hud_fail_title: "转换已停止",
	tool_batch_convert_jpg_to_editable_word_with_ocr_hud_load_api: "正在启动识别器…",
	tool_batch_convert_jpg_to_editable_word_with_ocr_hud_load_core: "首次运行：正在加载识别引擎（约 4 MB）。请留在本页，可能要等一会儿。",
	tool_batch_convert_jpg_to_editable_word_with_ocr_hud_load_docx: "正在加载 Word 组装模块（约 0.7 MB）…",
	tool_batch_convert_jpg_to_editable_word_with_ocr_hud_load_lang: "首次运行：正在加载语种数据包（数 MB）。请稍候，下次会复用。",
	tool_batch_convert_jpg_to_editable_word_with_ocr_hud_load_script: "正在加载识别脚本…",
	tool_batch_convert_jpg_to_editable_word_with_ocr_hud_next: "完成。下一步：下载 Word。",
	tool_batch_convert_jpg_to_editable_word_with_ocr_hud_pct_tpl: "{pct}%",
	tool_batch_convert_jpg_to_editable_word_with_ocr_hud_step_load: "加载",
	tool_batch_convert_jpg_to_editable_word_with_ocr_hud_step_pack: "组文档",
	tool_batch_convert_jpg_to_editable_word_with_ocr_hud_step_read: "识别",
	tool_batch_convert_jpg_to_editable_word_with_ocr_hud_title: "转换进度",
	tool_batch_convert_jpg_to_editable_word_with_ocr_hud_working: "正在开始…",
	tool_batch_convert_jpg_to_editable_word_with_ocr_lang_ar: '阿拉伯语',
	tool_batch_convert_jpg_to_editable_word_with_ocr_lang_en: '英语',
	tool_batch_convert_jpg_to_editable_word_with_ocr_lang_ja: '日语',
	tool_batch_convert_jpg_to_editable_word_with_ocr_lang_legend: '整批识别语种',
	tool_batch_convert_jpg_to_editable_word_with_ocr_lang_zh: '中文',
	tool_batch_convert_jpg_to_editable_word_with_ocr_lang_zh_en: '中文 + 英语',
	tool_batch_convert_jpg_to_editable_word_with_ocr_max_edge: '识别前最长边（像素）',
	tool_batch_convert_jpg_to_editable_word_with_ocr_max_edge_hint: '默认 2048。手机上调小更省。',
	tool_batch_convert_jpg_to_editable_word_with_ocr_photo_hint:
		'默认打开。打开后每一节会在识别文字上方放原图，方便在 Word 里对照。',
	tool_batch_convert_jpg_to_editable_word_with_ocr_photo_label: '在文字上方附上原图',
	tool_batch_convert_jpg_to_editable_word_with_ocr_rules_body:
		'最多排 10 张。最长边超限会先缩小，再按画面顺序认。全程共用一个识别 worker，串行跑。失败行跳过；成功的行写进同一份 Word。',
	tool_batch_convert_jpg_to_editable_word_with_ocr_rules_item_1:
		'每张成功的图是 Word 里的一节：一级标题是文件名，然后可选原图，再是识别段落，再分页。这是多张图的 JPG OCR 转 Word，不是 TXT 的 ZIP。',
	tool_batch_convert_jpg_to_editable_word_with_ocr_rules_item_2: '文件留在本机，不上传服务器。脚本从本站加载。',
	tool_batch_convert_jpg_to_editable_word_with_ocr_rules_item_3:
		'手写、严重糊、透视很大的那一行经常失败。表格会变成阅读顺序的行。多栏不会跟原件一样。',
	tool_batch_convert_jpg_to_editable_word_with_ocr_rules_item_4:
		'不收 PDF。TXT 压缩包请用「用 OCR 批量把 JPG 转成文字」。只要贴图不要识别请用「多图转 Word」。',
	tool_batch_convert_jpg_to_editable_word_with_ocr_rules_title: '使用时请预期',
	tool_batch_convert_jpg_to_editable_word_with_ocr_sample: '载入样例',
	tool_batch_convert_jpg_to_editable_word_with_ocr_st_done: '完成',
	tool_batch_convert_jpg_to_editable_word_with_ocr_st_queued: '排队',
	tool_batch_convert_jpg_to_editable_word_with_ocr_st_reading: '识别中',
	tool_batch_convert_jpg_to_editable_word_with_ocr_st_skipped: '已跳过',
	tool_batch_convert_jpg_to_editable_word_with_ocr_status_done: '完成。',
	tool_batch_convert_jpg_to_editable_word_with_ocr_status_loading: "首次会加载识别引擎（约 4 MB），请留在本页…",
	tool_batch_convert_jpg_to_editable_word_with_ocr_status_packing: '正在生成 Word…',
	tool_batch_convert_jpg_to_editable_word_with_ocr_status_progress: '{i}/{n} {name}',
	tool_batch_convert_jpg_to_editable_word_with_ocr_title: '用 OCR 批量把 JPG 转成可编辑的 Word',
	tool_batch_convert_jpg_to_editable_word_with_ocr_usecase_1: '连拍几页讲义，下载一份 Word 再改标题。',
	tool_batch_convert_jpg_to_editable_word_with_ocr_usecase_2: '菜单照片合成一份文档，每节上面带图方便对照。',
	tool_batch_convert_jpg_to_editable_word_with_ocr_usecase_3: '把几张报错截图收进一份能改的 Word 发给同事。',
	tool_batch_convert_jpg_to_editable_word_with_ocr_usecases_title: '适合什么时候',
};

export default zh;
