/**
 * i18n 工具分片（batch-checksum-release-files / zh）。
 * H1 用中文检索句「批量计算发版文件校验和」，不把 batch 塞进标题。
 */
import type { SiteLangDict } from '../../../types';

/** 简体中文：发版附件出 SHA-256 表并对照 SUMS，偏正式开发者语气。 */
const zh: SiteLangDict = {
	tool_batch_checksum_release_files_article:
		'给一目录发版附件在这个标签页算校验和。你拿到的是表、CSV 和 SHA256SUMS 文本，不是把安装包打成 ZIP。可贴官方清单标出一致或不一致。文件留在本机，不上传服务器。',
	tool_batch_checksum_release_files_choose_files: '选择文件',
	tool_batch_checksum_release_files_chip_md5: '同时算 MD5',
	tool_batch_checksum_release_files_clear: '清空',
	tool_batch_checksum_release_files_col_compare: '对照',
	tool_batch_checksum_release_files_col_md5: 'MD5',
	tool_batch_checksum_release_files_col_path: '路径',
	tool_batch_checksum_release_files_col_sha256: 'SHA-256',
	tool_batch_checksum_release_files_col_size: '大小',
	tool_batch_checksum_release_files_desc:
		'批量计算发版文件校验和：SHA-256 表、可选 MD5、粘贴 SHA256SUMS、导出 CSV 或 SUMS；文件留在本机，不上传服务器。',
	tool_batch_checksum_release_files_description:
		'批量计算发版文件校验和：把发版附件放进队列，在这个标签页用 SHA-256 逐个哈希，可选再算 MD5，粘贴 SHA256SUMS 对照，导出 CSV 或 SUMS 文本，不把原文件打 ZIP。步骤：选这批文件，全部哈希，有清单就粘贴，再导出。示例：两份短样例二进制填出两行 SHA-256 和对照列。文件留在本机，不上传服务器。',
	tool_batch_checksum_release_files_drop_hint: '拖入发版文件（最多 20 个）。哈希在本标签页完成。本页不把原文件打 ZIP。',
	tool_batch_checksum_release_files_empty: '请先添加文件。',
	tool_batch_checksum_release_files_err_md5: 'MD5 库没有加载成功。请换较新的浏览器，或关掉 MD5。',
	tool_batch_checksum_release_files_err_read: '这个文件读不出来。已跳过。',
	tool_batch_checksum_release_files_err_too_many: '一次最多 20 个，多出来的没有加入队列。',
	tool_batch_checksum_release_files_example:
		'载入样例会哈希两份短二进制，填出 SHA-256 行，并把第一份的 SUMS 行贴进去，该行显示一致，同时点亮 CSV 和 SUMS 导出。',
	tool_batch_checksum_release_files_example_title: '示例',
	tool_batch_checksum_release_files_export_csv: '导出 CSV',
	tool_batch_checksum_release_files_export_sums: '导出 SUMS',
	tool_batch_checksum_release_files_faq_a1:
		'不会。哈希都在本标签页。文件留在本机，不上传服务器。SHA-256 用 Web Crypto。MD5 可能从 CDN 加载 crypto-js，你的字节仍不会离开这个标签页。',
	tool_batch_checksum_release_files_faq_a2:
		'不会。导出的是校验和表（CSV）和 SHA256SUMS 文本。要把二进制打包，请用创建 ZIP——那是另一件事。',
	tool_batch_checksum_release_files_faq_a3:
		'文件哈希一次处理一份或一段粘贴。本页给一批发版文件哈希，对照粘贴的 SHA256SUMS，并导出 CSV 和 SUMS。',
	tool_batch_checksum_release_files_faq_a4:
		'打开「同时算 MD5」。SHA-256 总会算。MD5 只为旧清单准备，没有第二条网址。',
	tool_batch_checksum_release_files_faq_a5:
		'路径列优先用 webkitRelativePath。队列里重名会加数字后缀，SUMS 行才能分开。',
	tool_batch_checksum_release_files_faq_q1: '文件会不会传到你们服务器？',
	tool_batch_checksum_release_files_faq_q2: '会不会把发版二进制打成 ZIP？',
	tool_batch_checksum_release_files_faq_q3: '和文件哈希校验有什么不同？',
	tool_batch_checksum_release_files_faq_q4: 'MD5 在哪里？',
	tool_batch_checksum_release_files_faq_q5: '两个文件同名怎么办？',
	tool_batch_checksum_release_files_file_count_tpl: '队列里有 {n} 个文件',
	tool_batch_checksum_release_files_hash_all: '全部哈希',
	tool_batch_checksum_release_files_how_body:
		'把发版附件放进队列，用 SHA-256 逐个哈希，有 SHA256SUMS 就粘贴对照，再导出 CSV 或 SUMS 文本——不是把原文件打 ZIP。',
	tool_batch_checksum_release_files_how_item_1: '选出即将发布的二进制、安装包或校验文件。',
	tool_batch_checksum_release_files_how_item_2: '默认 SHA-256。只有旧清单还在用 MD5 时才打开同时算 MD5。',
	tool_batch_checksum_release_files_how_item_3: '点全部哈希。进度按文件走。读失败跳过该行。',
	tool_batch_checksum_release_files_how_item_4: '粘贴官方 SHA256SUMS，标出一致、不一致或缺失。',
	tool_batch_checksum_release_files_how_item_5: '至少成功一行后再导出 CSV 或 SUMS。只要一份，用文件哈希校验。',
	tool_batch_checksum_release_files_how_title: '怎么批量算出校验和',
	tool_batch_checksum_release_files_md5_label: '同时计算 MD5',
	tool_batch_checksum_release_files_rules_body:
		'SHA-256 用 Web Crypto，按 4 MiB 切片读入再拼起来算。产物是表、CSV 和 SUMS 文本，绝不是原文件 ZIP。',
	tool_batch_checksum_release_files_rules_item_1:
		'SHA-256 总会跑。MD5 可选，首次会从 CDN 懒加载 crypto-js；文件字节仍留在标签页。',
	tool_batch_checksum_release_files_rules_item_2:
		'SUMS 行按 GNU sha256sum：十六进制、两个空格或空格加星号、然后是文件名。粘贴里多出来的名字标缺失。',
	tool_batch_checksum_release_files_rules_item_3:
		'读失败跳过该行。队列重名加后缀。空队列不能导出。',
	tool_batch_checksum_release_files_rules_item_4:
		'文件留在本机，不上传服务器。',
	tool_batch_checksum_release_files_rules_title: '你会看到的规则',
	tool_batch_checksum_release_files_sample: '载入样例',
	tool_batch_checksum_release_files_status_done: '本批结束——核对表格后导出 CSV 或 SUMS。',
	tool_batch_checksum_release_files_status_hashing: '正在哈希每个发版文件…',
	tool_batch_checksum_release_files_status_match: '一致',
	tool_batch_checksum_release_files_status_mismatch: '不一致',
	tool_batch_checksum_release_files_status_missing: '缺失',
	tool_batch_checksum_release_files_status_none: '—',
	tool_batch_checksum_release_files_status_ok: '已哈希',
	tool_batch_checksum_release_files_status_skip: '已跳过',
	tool_batch_checksum_release_files_summary_tpl: '{ok} 已哈希 · {skip} 跳过 · {match} 一致 · {mismatch} 不一致',
	tool_batch_checksum_release_files_sums_label: '粘贴 SHA256SUMS 以对照',
	tool_batch_checksum_release_files_sums_placeholder: '十六进制  文件名',
	tool_batch_checksum_release_files_title: '批量计算发版文件校验和',
	tool_batch_checksum_release_files_usecase_1: 'GitHub Release 附件旁边要附一份 SHA256SUMS。',
	tool_batch_checksum_release_files_usecase_2: '拿镜像文件对照上游校验和清单。',
	tool_batch_checksum_release_files_usecase_3: '给多个文件算哈希，但不把二进制打进 ZIP。',
	tool_batch_checksum_release_files_usecases_title: '适合这些场合',
	tool_batch_checksum_release_files_warn_large: '有文件大于 64 MB，这一行可能把标签页内存撑满。',
};

export default zh;
