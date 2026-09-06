/**
 * i18n tool shard (archive-extractor / zh).
 */
import type { SiteLangDict } from '../../../types';

const zh: SiteLangDict = {
  tool_archive_extractor_article:
    '在浏览器里打开 ZIP、TAR 和 TAR.GZ 压缩包，查看文件树，预览常见文本或图片条目，并把支持的内容导出为干净 ZIP。压缩包留在你的设备上，不上传服务器。',
  tool_archive_extractor_choose_file: '选择压缩包',
  tool_archive_extractor_clear: '清空',
  tool_archive_extractor_desc:
    '在线解压压缩包，在浏览器里查看 ZIP、TAR、TAR.GZ 内容并导出 ZIP，不上传服务器。',
  tool_archive_extractor_description:
    '用这个压缩包在线解压工具在浏览器里打开压缩文件：选择 ZIP、TAR 或 TAR.GZ，查看文件树，预览文本或图片，下载单个文件，或把支持的内容导出为干净 ZIP。文件留在本机，不上传服务器。示例 sample-archive.tar.gz 会显示 README.txt、src/index.js 与 assets/logo.png 的安全路径。',
  tool_archive_extractor_download_all: '导出 ZIP',
  tool_archive_extractor_download_file: '下载文件',
  tool_archive_extractor_drop_hint:
    '拖入一个压缩包。ZIP、TAR、TAR.GZ 可直接处理；RAR、7Z、ISO 会显示支持说明。',
  tool_archive_extractor_empty: '请先选择压缩包。',
  tool_archive_extractor_engine_badge: '支持说明',
  tool_archive_extractor_err_archive:
    '无法读取这个压缩包。它可能已损坏、已加密、是分卷包，或使用了暂不支持的压缩方法。',
  tool_archive_extractor_err_engine:
    'RAR、7Z 和 ISO 需要更重的多格式引擎，本版本尚未打包启用。ZIP、TAR、TAR.GZ 仍可在浏览器内处理。',
  tool_archive_extractor_err_fflate: '压缩包引擎加载失败。请检查网络后重试。',
  tool_archive_extractor_err_no_file: '尚未选择已解压文件。',
  tool_archive_extractor_err_unsupported:
    '这里暂不支持这种文件类型。请尝试 ZIP、TAR 或 TAR.GZ，或用桌面解压工具处理该格式。',
  tool_archive_extractor_example:
    '内置 sample-archive.tar.gz 会作为真实压缩包打开，包含 README.txt、src/index.js 和 assets/logo.png 三个条目。页面会显示文件树、预览 README.txt，并可把支持的内容导出为 extracted-archive.zip。',
  tool_archive_extractor_example_title: '示例',
  tool_archive_extractor_exported_all: '已把文件按安全路径打包成新的 ZIP。',
  tool_archive_extractor_faq_a1:
    '不会。压缩包在你的浏览器标签页中读取，解压出的字节留在设备上。辅助脚本从本站加载，但你的文件不会上传到我们的服务器。',
  tool_archive_extractor_faq_a2:
    '本版本的可用路径是 ZIP、TAR、TAR.GZ 和 TGZ。RAR、7Z、ISO 先作为支持说明显示，等更重的多格式引擎启用后再处理。',
  tool_archive_extractor_faq_a3:
    '带密码的压缩包需要你提供密码，即使提供密码，也可能因格式或加密算法暂不支持而失败。本工具不破解、恢复或猜测密码。',
  tool_archive_extractor_faq_a4:
    '绝对路径、../ 片段、重复文件名或不安全字符会在导出前被改名或拦截。符号链接目标不会按链接写出。',
  tool_archive_extractor_faq_a5:
    '大压缩包在浏览器里可能很慢或耗尽内存，手机上尤其明显。当文件数、解压后体积或膨胀比看起来有风险时，页面会提示。',
  tool_archive_extractor_faq_a6:
    '导出 ZIP 的意思是把已成功提取的支持文件重新打包成一个安全路径 ZIP，不保证保留原压缩包的所有格式特性。',
  tool_archive_extractor_faq_q1: '我的压缩包会上传吗？',
  tool_archive_extractor_faq_q2: '支持哪些压缩包格式？',
  tool_archive_extractor_faq_q3: '能打开带密码的 RAR 或 7Z 吗？',
  tool_archive_extractor_faq_q4: '危险路径或符号链接会怎样处理？',
  tool_archive_extractor_faq_q5: '超大的压缩包怎么处理？',
  tool_archive_extractor_faq_q6: 'RAR 转 ZIP 或 7Z 转 ZIP 是真正转换吗？',
  tool_archive_extractor_file_count_label: '文件',
  tool_archive_extractor_format_label: '格式',
  tool_archive_extractor_how_body:
    '选择或拖入一个压缩包。页面会识别 ZIP、TAR 或 TAR.GZ，建立安全文件列表，并预览较小的文本或图片条目。选择一行可下载单个文件，也可把支持的解压内容导出成新的 ZIP。',
  tool_archive_extractor_how_title: '如何工作',
  tool_archive_extractor_load_engine: '加载多格式引擎',
  tool_archive_extractor_load_sample: '加载示例',
  tool_archive_extractor_no_preview: '这种文件类型无法预览，但仍可下载。',
  tool_archive_extractor_preview_title: '预览',
  tool_archive_extractor_rules_body:
    '压缩包解压需要明确格式支持、路径安全、预览与 ZIP 导出规则。',
  tool_archive_extractor_rules_item_1:
    'ZIP 会读取中央目录。TAR.GZ 分两步打开：先解 GZIP，再读取 TAR 文件头。',
  tool_archive_extractor_rules_item_2:
    'RAR、7Z 和 ISO 需要更重的多格式引擎；引擎未启用前，页面不会假装已经能完整处理。',
  tool_archive_extractor_rules_item_3:
    '路径安全：前导斜杠、盘符、../、重复文件名和不安全字符会在导出前清理。',
  tool_archive_extractor_rules_item_4:
    '预览：小型文本、Markdown、JSON、CSV、PNG、JPEG、GIF、WebP、SVG 可预览；其他文件只显示元数据。',
  tool_archive_extractor_rules_item_5:
    '边界：加密、分卷、损坏、solid 或异常膨胀的压缩包可能失败，或需要桌面工具。',
  tool_archive_extractor_rules_title: '处理规则',
  tool_archive_extractor_selected_label: '已选',
  tool_archive_extractor_size_label: '解压后大小',
  tool_archive_extractor_status_done: '压缩包已打开 — 选择文件或导出 ZIP。',
  tool_archive_extractor_status_reading: '正在读取压缩包...',
  tool_archive_extractor_title: '压缩包在线解压 — 在浏览器里查看并取出文件',
  tool_archive_extractor_total_size_label: '解压后总大小',
  tool_archive_extractor_usecase_1:
    '开发：打开源码 .tar.gz 发布包，检查 README 和 src 文件，只下载需要的内容。',
  tool_archive_extractor_usecase_2:
    '运营：查看供应商发来的 ZIP、RAR 或 7Z 素材包，再把支持的文件导出成干净 ZIP 发给同事。',
  tool_archive_extractor_usecase_3:
    '受管设备：在 Chromebook 或不能安装软件的电脑上临时查看课程资料和附件。',
  tool_archive_extractor_usecases_title: '适合这些场景',
  tool_archive_extractor_warn_dangerous: '部分路径已在导出前为安全起见改名或跳过。',
  tool_archive_extractor_warn_large: '大压缩包提示：这个文件在浏览器里可能较慢或占用大量内存。',
};

export default zh;
