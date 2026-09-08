/**
 * i18n tool shard (batch-convert-scanned-pdf-to-word-with-ocr / zh).
 * 当地主词：用 OCR 批量把扫描 PDF 转成 Word。
 */
import type { SiteLangDict } from '../../../types';

const zh: SiteLangDict = {
	tool_batch_convert_scanned_pdf_to_word_with_ocr_advanced: '高级设置（可选）',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_article:
		'把一份或多份扫描件 PDF 丢进来，点「全部转换」，再「下载 Word」。默认整批合成一份 Word；也可改成每个 PDF 一份（多份成功时按钮变成「下载 ZIP」）。每个文件一个标题，每一页成功认出来的字可以在 Word 里改。默认会把该页扫描图放在文字前面方便对照。某一页糊了会跳过。文件留在本机，不上传服务器。已经能选中文字的数字 PDF 请用「将 PDF 转为 Word 文档」。照片请用「用 OCR 批量把 JPG 转成可编辑的 Word」。',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_choose_files: '选择 PDF 文件',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_clear: '清空',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_col_name: '文件',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_col_notes: '说明',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_col_pages: '页数',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_col_status: '状态',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_convert_all: '全部转换',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_count_tpl: '{n} 个文件（最多 5 个，整批 20 页）',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_desc:
		'用 OCR 批量把扫描 PDF 转成 Word：排队、全部转换、下载一份 Word，处理在本机完成，不上传服务器。',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_description:
		'把扫描件 PDF 在本标签页一页页认成字，再合成一份能改的 Word，文件留在本机、不上传服务器。步骤：加入 PDF、全部转换、下载 Word。示例：两页印刷样例变成一份带标题的 Word，默认可带页图校对。也叫扫描件 PDF 转 Word、PDF OCR 转 Word。已经能选中文字的 PDF 请用「将 PDF 转为 Word 文档」。照片请走 JPG 转 Word 页。',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_download_word: '下载 Word',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_download_zip: '下载 ZIP',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_drop_hint: '把扫描 PDF 拖到这里（最多 5 个文件、整批 20 页）。处理留在本标签页。',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_empty: '请先加入扫描 PDF。',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_err_docx: '当前浏览器组不出 Word 文件。请换较新的浏览器再试。',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_err_fflate: '当前浏览器组不出 ZIP。请换较新的浏览器再试。',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_err_empty: '这一页没有认出印刷字，已跳过。换更清晰的扫描件，不要用手写便条。',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_err_encrypted: '这份 PDF 有密码，没有加入队列。',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_err_engine:
		'PDF 渲染或识别引擎没加载成功。刷新后再点全部转换。已经完成的页仍可下载。',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_err_image:
		'本页只收扫描 PDF，不收照片。JPG、PNG、WebP 请用「用 OCR 批量把 JPG 转成可编辑的 Word」。该文件没有加入。',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_err_load: '读不了这份 PDF。已跳过。',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_err_pdfjs: '本标签页加载不了 PDF 渲染。请刷新后再试。',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_err_size: '超过 12 MB。请先压缩。该文件没有加入。',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_err_too_many: '本页最多 5 个 PDF。多出来的没有加入。',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_err_too_many_pages: '整批最多认 20 页。多出来的文件没有加入。',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_example:
		'点「载入样例」会放入 sample-scan.pdf（第 1 页：ONLINEFREETOOLS 和 The quick brown fox；第 2 页：SAMPLE TWO 和 Printed sample page），自动走全部转换，并启用下载 Word，文档里一个标题、两页正文。',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_example_title: '示例',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_faq_a1:
		'不会。PDF 留在本浏览器标签页。渲染、识别和组 Word 的脚本从本站加载；文件不会上传到我们的服务器。',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_faq_a2:
		'「将 PDF 转为 Word 文档」抽的是现成文字层，不做 OCR。本页把每一页画成图再认字，所以扫出来、选不中字的 PDF 也能变成段落。如果你的 PDF 已经能划词，请用那一页。',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_faq_a3:
		'「用 OCR 批量把 JPG 转成可编辑的 Word」是照片队列。本页只收 PDF。把 JPG 丢进来会被拒绝。',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_faq_a4:
		'不会。失败的那一页会跳过，其他页和其他 PDF 仍会写进同一份 Word。',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_faq_a5:
		'默认「整批一份 Word」时，每个成功的 PDF 是一个标题（文件名）。每一成功页是可选页图、再跟 OCR 段落、再分页。若要每个 PDF 单独文档，改选「每个 PDF 一份 Word」。表格和多栏不会跟原件版式一致。',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_faq_a6:
		'不行。照片请用「用 OCR 批量把 JPG 转成可编辑的 Word」。这里的投放区只收 PDF。',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_faq_a7:
		'印刷体最稳。连笔手写常常在那一页失败。这不是手写产品。',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_faq_a8:
		'本页出 Word，不是 TXT，也不会写回可检索 PDF。搜「扫描件 PDF 转 Word」「PDF OCR 转 Word」且拿的是扫描件，就是这一页。只要文字层 TXT 请用「从 PDF 提取文本」。',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_faq_a9:
		'最多 5 个 PDF、每个 12 MB、整批 20 页。只丢一份 PDF 也走「全部转换」和「下载 Word」，没有第二个单文件网址。',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_faq_a10:
		'可以。选「每个 PDF 一份 Word」，再点全部转换。只有一份成功时按钮仍是「下载 Word」；两份及以上成功则是「下载 ZIP」，里面每个输入对应一个 .docx。默认仍是整批合成一份。',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_faq_q1: '扫描 PDF 会上传吗？',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_faq_q2: '和「将 PDF 转为 Word 文档」有什么不同？',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_faq_q3: '和「用 OCR 批量把 JPG 转成可编辑的 Word」有什么不同？',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_faq_q4: '一页失败，整份 Word 就空了吗？',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_faq_q5: 'Word 里长什么样？',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_faq_q6: '能把 JPG 照片丢进来吗？',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_faq_q7: '手写能认吗？',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_faq_q8: '这是 PDF OCR 转 Word 吗？还是只要 TXT / 可检索 PDF？',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_faq_q9: '文件和页数上限是多少？',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_faq_q10: '能不能按每个 PDF 各出一份 Word，而不是合成一份？',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_how_body:
		'把扫描 PDF 变成一份能改的 Word：加入 PDF，点全部转换（第一次会在本标签页加载 PDF 渲染和识别引擎，然后一页接一页认），再下载 Word。',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_how_item_1: '拖入一份或多份扫描 PDF（或点选文件）。',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_how_item_2: '可选：为整批选一个语种芯片（默认中文 + English）。',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_how_item_3:
		'可选：保持整批一份 Word，或改成每个 PDF 一份（多份成功时点「下载 ZIP」）。',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_how_item_4:
		'点「全部转换」——第一次会在本标签页加载 PDF 渲染和识别引擎，然后一页接一页认。失败的页会跳过。',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_how_item_5:
		'点「下载 Word」——若选了每个 PDF 一份且成功多于一份，按钮会变成「下载 ZIP」。',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_how_title: '怎么用',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_hud_elapsed_tpl: '已用 {s} 秒',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_hud_fail_hint: '刷新后再点全部转换。已经认出的页仍可下载。',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_hud_fail_title: '转换已停止',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_hud_load_api: "正在启动识别器…",
	tool_batch_convert_scanned_pdf_to_word_with_ocr_hud_load_core: "首次运行：正在加载识别引擎（约 4 MB）。请留在本页，可能要等一会儿。",
	tool_batch_convert_scanned_pdf_to_word_with_ocr_hud_load_docx: "正在加载 Word 组装模块（约 0.7 MB）…",
	tool_batch_convert_scanned_pdf_to_word_with_ocr_hud_load_lang: "首次运行：正在加载语种数据包（数 MB）。请稍候，下次会复用。",
	tool_batch_convert_scanned_pdf_to_word_with_ocr_hud_load_pdf: "首次运行：正在加载 PDF 渲染器。请留在本页。",
	tool_batch_convert_scanned_pdf_to_word_with_ocr_hud_load_script: "正在加载识别脚本…",
	tool_batch_convert_scanned_pdf_to_word_with_ocr_hud_next: '完成。下一步：下载 Word；若选了每个 PDF 一份，多份成功则下载 ZIP。',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_hud_pct_tpl: '{pct}%',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_hud_step_load: '加载',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_hud_step_pack: '组文档',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_hud_step_read: '识别',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_hud_step_render: '画页',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_hud_title: '转换进度',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_hud_working: '正在开始…',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_lang_ar: '阿拉伯语',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_lang_en: 'English',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_lang_ja: '日本語',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_lang_legend: '整批识别语种',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_lang_zh: '中文',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_lang_zh_en: '中文 + English',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_max_edge: '识别前最长边（像素）',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_max_edge_hint: '默认 2048。手机上可以改小一些。',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_output_hint: '默认整批一份 Word。每个 PDF 一份时：只有一份成功仍是「下载 Word」，多份成功则是「下载 ZIP」。',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_output_legend: 'Word 导出方式',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_output_merge: '整批合成一份 Word',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_output_split: '每个 PDF 一份 Word',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_page_hint: '默认打开。Word 里每一页会先出现扫描图，再跟认出的字，方便对照。',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_page_label: '在文字前插入该页扫描图',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_pages_tpl: '{n}',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_progress_tpl: '{file} · 第 {page}/{pages} 页',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_rules_body:
		'队列最多 5 个 PDF、整批 20 页。每一页先画出来，最长边超出上限会缩小，再按视觉顺序认字。识别引擎一次只跑一个。失败页跳过。导出可选整批一份 Word，或每个 PDF 一份。',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_rules_item_1:
		'默认整批一份 Word：每个成功 PDF 是标题（文件名），每页可选页图、OCR 段落、再分页。每个 PDF 一份时，每个成功输入各自一个 .docx，多份打成 ZIP。不是 TXT 压缩包。',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_rules_item_2: '文件留在本机，不上传服务器。脚本从本站加载。',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_rules_item_3:
		'手写、严重模糊、强透视常常在那一页失败。表格会变成阅读顺序的行。多栏不会跟原件一样。有文字层的数字 PDF 在本页仍会画成图再认；只要抽文字层请用「将 PDF 转为 Word 文档」。',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_rules_item_4:
		'不收照片。JPG 叠请用「用 OCR 批量把 JPG 转成可编辑的 Word」。本页不写回可检索 PDF，也不下载 TXT。',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_rules_title: '你该预期的规则',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_sample: '载入样例',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_st_done: '完成',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_st_queued: '排队',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_st_reading: '识别中',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_st_rendering: '画页中',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_st_skipped: '已跳过',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_st_working: '处理中',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_status_done: '完成。',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_status_loading: "首次会加载 PDF 渲染和识别引擎（约 4 MB），请留在本页…",
	tool_batch_convert_scanned_pdf_to_word_with_ocr_status_packing: '正在组成 Word 文件…',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_status_progress: '{i}/{n} {name}',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_title: '用 OCR 批量把扫描 PDF 转成 Word',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_usecase_1: '把连扫的讲义 PDF 丢进来，下载一份 Word 再改标题。',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_usecase_2: '两份合同扫描件合成一份带页图的校对稿，方便对照原件改字。',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_usecase_3: '多页发票扫描进 Word 给同事改（本页不抽发票字段）。',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_usecases_title: '适合这些情况',
};

export default zh;
