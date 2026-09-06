/**
 * i18n 工具分片（batch-compress-pdfs-for-email / zh）。
 * H1 用中文检索句「批量压缩 PDF 以便发邮件」，不把 batch 塞进标题。
 */
import type { SiteLangDict } from '../../../types';

/** 简体中文：一叠附件各自压小打 ZIP，口语工具站语气。 */
const zh: SiteLangDict = {
	tool_batch_compress_pdfs_for_email_article:
		'发邮件前把几份报价或扫描件在这个标签页各自压小。ZIP 里仍是多份 PDF，不会合成一本。加密或太重的跳过，其余照常下载。文件留在本机，不上传服务器。',
	tool_batch_compress_pdfs_for_email_choose_files: '选择 PDF',
	tool_batch_compress_pdfs_for_email_chip_email: '邮件档',
	tool_batch_compress_pdfs_for_email_chip_max: '尽量最小',
	tool_batch_compress_pdfs_for_email_chip_print: '打印档',
	tool_batch_compress_pdfs_for_email_clear: '清空',
	tool_batch_compress_pdfs_for_email_col_after: '压缩后',
	tool_batch_compress_pdfs_for_email_col_before: '压缩前',
	tool_batch_compress_pdfs_for_email_col_name: '文件',
	tool_batch_compress_pdfs_for_email_col_status: '状态',
	tool_batch_compress_pdfs_for_email_compress: '全部压缩',
	tool_batch_compress_pdfs_for_email_desc:
		'批量压缩 PDF 以便发邮件，各自压小后打成 ZIP，仍是多份文件；文件留在本机，不上传服务器。',
	tool_batch_compress_pdfs_for_email_description:
		'批量压缩 PDF 以便发邮件：把几份报价或扫描件放进队列，用同一邮件档各自压小，加密或过重的跳过，下载仍是多份 PDF 的 ZIP，不是合成一本。步骤：选这叠文件，保留邮件档，全部压缩，看合计省了多少。示例：两份短样例 PDF 在 ZIP 里仍是两份。文件留在本机，不上传服务器。',
	tool_batch_compress_pdfs_for_email_download_zip: '下载 ZIP',
	tool_batch_compress_pdfs_for_email_drop_hint: '拖入 PDF（最多 20 份）。每份单独压缩。处理在本标签页完成。',
	tool_batch_compress_pdfs_for_email_empty: '请先添加 PDF。',
	tool_batch_compress_pdfs_for_email_err_encrypted: '有打开密码。已跳过。',
	tool_batch_compress_pdfs_for_email_err_fflate: '当前浏览器打不成 ZIP。请换较新的浏览器再试。',
	tool_batch_compress_pdfs_for_email_err_load: '这份 PDF 读不出来。已跳过。',
	tool_batch_compress_pdfs_for_email_err_pdflib: 'PDF 库没有加载成功。请换较新的浏览器再试。',
	tool_batch_compress_pdfs_for_email_err_pdfjs: 'pdf.js 没有加载成功。请换较新的浏览器再试。',
	tool_batch_compress_pdfs_for_email_err_too_many: '一次最多 20 份，多出来的没有加入队列。',
	tool_batch_compress_pdfs_for_email_example:
		'载入样例会生成两份带图页的短 PDF，用邮件档各压一次，ZIP 里仍是两份，并显示合计节省。',
	tool_batch_compress_pdfs_for_email_example_title: '示例',
	tool_batch_compress_pdfs_for_email_faq_a1:
		'不会。栅格和重嵌都在本标签页。文件留在本机，不上传服务器。pdf.js、pdf-lib 和打 ZIP 的脚本从本站加载，你的 PDF 仍不会离开这个标签页。',
	tool_batch_compress_pdfs_for_email_faq_a2:
		'不会。你拿到的是 N 份 PDF 的 ZIP。要合成一本，请用合并 PDF——那是另一件事，不是这一页。',
	tool_batch_compress_pdfs_for_email_faq_a3:
		'带照片的扫描件通常能明显变小。纯文字稿可能几乎不动。表格会写出压缩前后，方便你对照。',
	tool_batch_compress_pdfs_for_email_faq_a4:
		'压缩 PDF 一次处理一份。本页给一叠文件共用邮件档，成功的打进同一个 ZIP。',
	tool_batch_compress_pdfs_for_email_faq_a5:
		'那一行跳过，其余继续。先到别处解锁，再加回来。',
	tool_batch_compress_pdfs_for_email_faq_q1: 'PDF 会不会传到你们服务器？',
	tool_batch_compress_pdfs_for_email_faq_q2: '会不会把全部合成一个 PDF？',
	tool_batch_compress_pdfs_for_email_faq_q3: '扫描件是不是比文字稿更容易压小？',
	tool_batch_compress_pdfs_for_email_faq_q4: '和单份压缩 PDF 有什么不同？',
	tool_batch_compress_pdfs_for_email_faq_q5: '有一份加了打开密码怎么办？',
	tool_batch_compress_pdfs_for_email_file_count_tpl: '队列里有 {n} 份 PDF',
	tool_batch_compress_pdfs_for_email_how_body:
		'把几份附件放进队列，选邮件档，各自压缩，再带走成功文件的 ZIP。',
	tool_batch_compress_pdfs_for_email_how_item_1: '选出必须过邮箱体积闸的报价或扫描件。',
	tool_batch_compress_pdfs_for_email_how_item_2: '默认保留邮件档；要更清晰用打印档，要更小用尽量最小。',
	tool_batch_compress_pdfs_for_email_how_item_3: '点全部压缩。每份仍是单独 PDF，不会拼成一本。',
	tool_batch_compress_pdfs_for_email_how_item_4: '加密或损坏的跳过。摘要会合计成功文件省下的字节。',
	tool_batch_compress_pdfs_for_email_how_item_5: '至少成功一份后再下载 ZIP。只要压一份，用压缩 PDF。',
	tool_batch_compress_pdfs_for_email_how_title: '怎么批量压缩以便发邮件',
	tool_batch_compress_pdfs_for_email_preset_label: '共用档位',
	tool_batch_compress_pdfs_for_email_rules_body:
		'每份 PDF 会栅格成 JPEG 页再重嵌。输出永远是多份 PDF 的 ZIP。',
	tool_batch_compress_pdfs_for_email_rules_item_1:
		'邮件档为默认：缩放约 1.0、JPEG 质量约 0.55。打印档更温和。尽量最小会再压一档。',
	tool_batch_compress_pdfs_for_email_rules_item_2:
		'加密、损坏或内存不够只跳过该行。ZIP 重名变成 名称 (2).pdf。',
	tool_batch_compress_pdfs_for_email_rules_item_3:
		'纯文字稿可能几乎不缩小，这是预期现象；表格仍会写出体积。',
	tool_batch_compress_pdfs_for_email_rules_item_4:
		'文件留在本机，不上传服务器。',
	tool_batch_compress_pdfs_for_email_rules_title: '你会看到的规则',
	tool_batch_compress_pdfs_for_email_sample: '载入样例',
	tool_batch_compress_pdfs_for_email_status_compressing: '正在按邮件档压缩每一份…',
	tool_batch_compress_pdfs_for_email_status_done: '本批结束——核对表格后下载 ZIP。',
	tool_batch_compress_pdfs_for_email_status_ok: '已压缩',
	tool_batch_compress_pdfs_for_email_status_skip: '已跳过',
	tool_batch_compress_pdfs_for_email_summary_tpl: '{ok} 份就绪 · {skip} 份跳过 · 省下 {saved}',
	tool_batch_compress_pdfs_for_email_title: '批量压缩 PDF 以便发邮件',
	tool_batch_compress_pdfs_for_email_usecase_1: '一叠报价加起来超过 25 MB 邮箱上限。',
	tool_batch_compress_pdfs_for_email_usecase_2: '扫描收据要分开当附件发，不要合成一本。',
	tool_batch_compress_pdfs_for_email_usecase_3: '发邮件前压几份 PDF，但不要合并它们。',
	tool_batch_compress_pdfs_for_email_usecases_title: '适合这些场合',
	tool_batch_compress_pdfs_for_email_warn_large: '有文件大于 40 MB，这一行可能把标签页内存撑满。',
};

export default zh;
