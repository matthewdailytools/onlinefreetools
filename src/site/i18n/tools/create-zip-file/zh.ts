/**
 * i18n tool shard (create-zip-file / zh)。
 * H1 用当地检索句「创建 zip 文件」，不是英文直搬。
 */
import type { SiteLangDict } from '../../../types';

const zh: SiteLangDict = {
	tool_create_zip_file_article:
		'在这个标签页里选几个文件，打成一个 ZIP 再下载。文件留在你的设备上，不会上传到服务器。Gzip 只作为单文件的次要模式。',
	tool_create_zip_file_choose_files: '选择文件',
	tool_create_zip_file_clear: '清空',
	tool_create_zip_file_desc:
		'在浏览器里把多个文件或带路径的文件夹打成 zip 再下载，文件不出本机、不上传服务器。',
	tool_create_zip_file_description:
		'创建 zip 文件：选文件（浏览器给出相对路径时会保留文件夹名），默认打 ZIP 后下载。文件留在你的设备上，不会上传到服务器。示例会把 notes.txt、photo.png 和 docs/readme.md 打进 sample.zip。Gzip 只用于单个文件。加密 zip 只在问答里说明边界，不当头词承诺。',
	tool_create_zip_file_download: '下载 ZIP',
	tool_create_zip_file_drop_hint: '把文件拖到这里。拖入文件夹时，若浏览器提供相对路径会写入条目名。',
	tool_create_zip_file_empty: '请先至少选择一个文件。',
	tool_create_zip_file_err_fflate: 'ZIP 引擎加载失败。请检查网络后重试。',
	tool_create_zip_file_err_gzip_many: 'Gzip 只能压一个文件。多个文件请改回 ZIP，或只留一个文件。',
	tool_create_zip_file_err_too_large: '这一批对浏览器内存来说太大了。请减少文件后再试。',
	tool_create_zip_file_example:
		'加载示例会放入 notes.txt、一张很小的 photo.png，以及 docs/readme.md，并打成 sample.zip。首屏即可点「下载 ZIP」。',
	tool_create_zip_file_example_title: '示例',
	tool_create_zip_file_faq_a1:
		'不会。字节只在当前标签页读取。ZIP 引擎脚本从本站加载，但你的文件不会上传到我们的服务器。',
	tool_create_zip_file_faq_a2:
		'若浏览器提供 webkitRelativePath（拖文件夹或选目录），这些路径会在去掉 ../ 后写入 ZIP。这就是本页「文件夹打成 zip」的做法。',
	tool_create_zip_file_faq_a3:
		'本页不把 AES 加密 ZIP 当作首屏功能，也不破解密码。需要密码 zip 请用专门工具；这里只在问答里划清边界。',
	tool_create_zip_file_faq_a4:
		'只有一个文件、且你要的是 .gz 流时才用 Gzip。多个文件请用 ZIP。Gzip 不是 PDF 压缩器。',
	tool_create_zip_file_faq_a5:
		'特别大的集合可能把标签页撑爆。页面会提示并停止，而不是让浏览器卡死。解压请用相关的「在线解压 ZIP」页。',
	tool_create_zip_file_faq_q1: '文件会上传吗？',
	tool_create_zip_file_faq_q2: '能在线把文件夹打成 zip 吗？',
	tool_create_zip_file_faq_q3: '能做带密码的 zip 吗？',
	tool_create_zip_file_faq_q4: '什么时候用 Gzip 而不是 ZIP？',
	tool_create_zip_file_faq_q5: '超大文件怎么办？解压去哪？',
	tool_create_zip_file_file_count_label: '文件数',
	tool_create_zip_file_how_body:
		'先选出要打成一个包发出去的文件；有相对路径就保留文件夹名，然后下载 ZIP。Gzip 是单文件的另一条路。',
	tool_create_zip_file_how_item_1: '选出你要打成一个 zip 发出去的文件——这是本页的任务，不是第二个解压器。',
	tool_create_zip_file_how_item_2: '若浏览器保留相对路径，可以拖入文件夹；打包前会去掉 ../。',
	tool_create_zip_file_how_item_3: '保持默认 ZIP，再下载。进页示例已经打好三个文件。',
	tool_create_zip_file_how_item_4: '只有一个文件、且要 .gz 时才切到 Gzip。多个文件继续用 ZIP。',
	tool_create_zip_file_how_title: '怎么用',
	tool_create_zip_file_level_label: '压缩级别',
	tool_create_zip_file_load_sample: '加载示例',
	tool_create_zip_file_mode_gzip: 'Gzip（单文件）',
	tool_create_zip_file_mode_zip: 'ZIP',
	tool_create_zip_file_packed_size_label: '打包后体积',
	tool_create_zip_file_rules_body:
		'在浏览器里打包需要清理路径、区分 ZIP 与 Gzip、限制体积，并说清密码边界。',
	tool_create_zip_file_rules_item_1:
		'ZIP 用 fflate 的 zipSync 做 DEFLATE。级别 0–9 可选；示例用较低级别，让首屏快点出结果。',
	tool_create_zip_file_rules_item_2:
		'条目名来自文件名或 webkitRelativePath。前导斜杠和 ../ 会被去掉。',
	tool_create_zip_file_rules_item_3:
		'Gzip 模式只对恰好一个文件调用 gzipSync。多个文件必须用 ZIP。',
	tool_create_zip_file_rules_item_4:
		'带密码的 ZIP 不是首屏输出。本页不恢复、不破解加密压缩包。',
	tool_create_zip_file_rules_title: '规则说明',
	tool_create_zip_file_status_done: '压缩包已就绪——可以下载或换一批文件。',
	tool_create_zip_file_status_packing: '正在打包…',
	tool_create_zip_file_title: '创建 zip 文件',
	tool_create_zip_file_usecase_1:
		'发邮件：把几个附件打成一个 zip 再发，而不把文件上传到打包网站。',
	tool_create_zip_file_usecase_2:
		'交作业：老师要一个压缩包时，把笔记文件夹和截图打成 zip。',
	tool_create_zip_file_usecase_3:
		'小源码包：readme 加几个文件打好后，可到相关的文件哈希页核对 zip。',
	tool_create_zip_file_usecases_title: '适合这些场合',
};

export default zh;
