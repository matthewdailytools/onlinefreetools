/**
 * i18n tool shard (unzip-file / zh).
 */
import type { SiteLangDict } from '../../../types';

const zh: SiteLangDict = {
  tool_unzip_file_article:
    '在浏览器内打开 ZIP 压缩包，查看文件树，预览文本或图片，并下载选中的文件。压缩包留在本机/浏览器标签页，不上传服务器。',
  tool_unzip_file_choose_file: '选择 ZIP',
  tool_unzip_file_clear: '清空',
  tool_unzip_file_desc:
    '在线解压 ZIP，在浏览器内预览内容并下载文件；文件不出本机，不上传服务器。',
  tool_unzip_file_description:
    '在线解压 ZIP 文件：选择或拖入压缩包，查看文件树，预览文本/图片，再下载单个文件或导出全部。文件留在你的设备和浏览器标签页，不上传到服务器。示例 project-files.zip 会显示 readme.txt、assets/logo.png、docs/notes.md，并演示安全路径处理。',
  tool_unzip_file_download_all: '导出全部',
  tool_unzip_file_download_file: '下载文件',
  tool_unzip_file_drop_hint: '把一个 .zip 文件拖到这里；处理只在当前标签页完成。',
  tool_unzip_file_empty: '请先选择 ZIP 文件。',
  tool_unzip_file_err_archive: '无法读取这个 ZIP。文件可能损坏、加密，或并不是 ZIP 压缩包。',
  tool_unzip_file_err_fflate: 'ZIP 引擎加载失败。请检查网络后重试。',
  tool_unzip_file_err_no_file: '还没有选中可下载的文件。',
  tool_unzip_file_example:
    '内置 project-files.zip 样例会解出 3 个安全条目：readme.txt、assets/logo.png、docs/notes.md。页面会显示文件树，预览 readme.txt，并启用“下载文件”和“导出全部”。',
  tool_unzip_file_example_title: '示例',
  tool_unzip_file_exported_all: '已把清理过路径的文件重新打包为 ZIP。',
  tool_unzip_file_faq_a1:
    '不会。ZIP 在你的浏览器标签页读取，解出的字节留在设备上。ZIP 引擎脚本从本站加载，但你的压缩包不会上传到我们的服务器。',
  tool_unzip_file_faq_a2:
    '本页首版聚焦 ZIP。RAR、7Z、ISO、TAR.GZ 需要更重的多格式归档引擎，适合后续单独做“多格式归档解压”工具。',
  tool_unzip_file_faq_a3:
    '受密码保护的 ZIP 可能无法在这里打开，除非后续加入兼容的密码支持。本工具不会破解或恢复密码。',
  tool_unzip_file_faq_a4:
    '包含绝对路径、../、空文件名或重复文件名的条目会在导出前被改名或拦截。结果列表会提示哪些路径被改过。',
  tool_unzip_file_faq_a5:
    '大 ZIP 在浏览器内可能很慢，手机上尤其容易占用内存。文件数量、解压后体积或膨胀比例异常时，页面会给出警告。',
  tool_unzip_file_faq_q1: 'ZIP 文件会上传吗？',
  tool_unzip_file_faq_q2: '能解压 RAR、7Z 或 TAR.GZ 吗？',
  tool_unzip_file_faq_q3: '能打开带密码的 ZIP 吗？',
  tool_unzip_file_faq_q4: '危险路径会怎样处理？',
  tool_unzip_file_faq_q5: '超大的 ZIP 怎么处理？',
  tool_unzip_file_file_count_label: '文件数',
  tool_unzip_file_how_body:
    '选择或拖入一个 ZIP 文件。页面会读取压缩包、整理路径、生成文件列表，并为文本和图片提供安全预览。选中任一条目可预览和下载，也可以把全部文件以清理后的路径重新打包导出。',
  tool_unzip_file_how_title: '使用方式',
  tool_unzip_file_load_sample: '加载示例',
  tool_unzip_file_no_preview:
    '这个文件类型暂不支持预览，但仍可直接下载。',
  tool_unzip_file_preview_title: '预览',
  tool_unzip_file_rules_body:
    '浏览器内解压 ZIP 时，需要明确路径、预览、下载方式与失败边界。',
  tool_unzip_file_rules_item_1:
    '路径安全：前导斜杠、盘符、../ 片段和重复文件名会在导出前清理。',
  tool_unzip_file_rules_item_2:
    '预览：小型文本、Markdown、JSON、CSV、PNG、JPEG、GIF、WebP、SVG 可预览；其他文件只显示元数据。',
  tool_unzip_file_rules_item_3:
    '下载：选中文件直接下载；导出全部会把清理后的文件重新打包为新的 ZIP。',
  tool_unzip_file_rules_item_4:
    '限制：加密、分卷、损坏或异常膨胀的压缩包可能失败，或需要后续版本再加入确认流程。',
  tool_unzip_file_rules_title: '规则与边界',
  tool_unzip_file_selected_label: '已选中',
  tool_unzip_file_size_label: '解压后大小',
  tool_unzip_file_status_done: 'ZIP 已解压，可选择文件或导出全部。',
  tool_unzip_file_status_reading: '正在读取 ZIP...',
  tool_unzip_file_title: '在线解压 ZIP — 在浏览器里查看并取出文件',
  tool_unzip_file_total_size_label: '解压后总大小',
  tool_unzip_file_usecase_1:
    '办公：打开供应商发来的 ZIP 附件，只下载需要的发票或图片。',
  tool_unzip_file_usecase_2:
    '学习：在受管电脑或平板上查看课程资料包，不安装桌面解压软件。',
  tool_unzip_file_usecase_3:
    '开发：先检查源码发布包结构，再用文件哈希校验记录原 ZIP 摘要。',
  tool_unzip_file_usecases_title: '适合这些场景',
  tool_unzip_file_warn_dangerous:
    '部分路径已在导出前为安全起见重命名。',
  tool_unzip_file_warn_large:
    '大压缩包提醒：这个 ZIP 在浏览器内可能较慢或占用较多内存。',
};

export default zh;
