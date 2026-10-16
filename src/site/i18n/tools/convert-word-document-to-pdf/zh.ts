/**
 * i18n 工具分片（convert-word-document-to-pdf / zh）。
 * 简体中文检索向重写：把 Word 文档转成 PDF。
 * 键与 en.ts 完全一致，含 rules_item_5。
 * 流水线：.docx → HTML 预览 → PDF；只在本标签页处理，文件不上传服务器。
 */
import type { SiteLangDict } from '../../../types';

/** 简体中文文案表；键名与英文母版一一对应。 */
const zh: SiteLangDict = {
  tool_convert_word_document_to_pdf_article: "Word 转 PDF 就在这个标签页完成。文件留在你的电脑上，不会上传到服务器。",
  tool_convert_word_document_to_pdf_choose_file: "选择 Word 文件（.docx）",
  tool_convert_word_document_to_pdf_choose_files: "选择文件",
  tool_convert_word_document_to_pdf_clear: "清除",
  tool_convert_word_document_to_pdf_convert: "转换",
  tool_convert_word_document_to_pdf_desc: "把 Word 文档转成 PDF：选择 .docx，看 HTML 预览再导出。文件留在本机，不上传服务器。",
  tool_convert_word_document_to_pdf_description: "把 Word 文档转成 PDF，在浏览器标签页里做完：先点「选择 Word 文件（.docx）」，看正文的 HTML 预览，再点「转换」和「下载 PDF」。文件留在这台设备上，不会上传到服务器。「加载示例」会生成只有一句话的 Word 文件，并导出一页 PDF。页眉和浮动图形会被压平。",
  tool_convert_word_document_to_pdf_download: "下载 PDF",
  tool_convert_word_document_to_pdf_drop_hint: "也可以把 .docx 拖到这里。处理留在这个标签页。",
  tool_convert_word_document_to_pdf_empty: "请先选择一个 .docx 文件。",
  tool_convert_word_document_to_pdf_err_convert: "转换失败。请换一份更简单的文档再试。",
  tool_convert_word_document_to_pdf_err_encrypted: "这个文件像是加了密码。请先解除保护。",
  tool_convert_word_document_to_pdf_err_load: "读不了这个 .docx 文件。",
  tool_convert_word_document_to_pdf_err_notext: "文档里没有能读出来的正文。",
  tool_convert_word_document_to_pdf_err_pdfjs: "PDF 渲染组件没有加载成功。",
  tool_convert_word_document_to_pdf_example: "点「加载示例」会做出只含「这是一段用于转换的示例 Word 文字。」的 .docx，显示 HTML 预览，再导出一页 PDF。",
  tool_convert_word_document_to_pdf_example_title: "示例",
  tool_convert_word_document_to_pdf_faq_a1: "不会。读取和导出都在这个标签页里进行，页面脚本从本站加载。文档不会上传到我们的服务器。",
  tool_convert_word_document_to_pdf_faq_a2: "路径是 .docx 先变成 HTML 预览，再变成 PDF，所以页眉、浮动图形和一部分字体会被压平。手里已经是 HTML 时，用「将 HTML 转换为 PDF」。",
  tool_convert_word_document_to_pdf_faq_a3: "不能。请先另存为 .docx。这里只收 Office Open XML，扫描图片也不会做文字识别。",
  tool_convert_word_document_to_pdf_faq_a4: "这一页从已有的 Word 文件出发。「在线写 PDF 文档」是空白编辑器，从空页写起。",
  tool_convert_word_document_to_pdf_faq_a5: "很大的 .docx 会变慢。先用电脑上的浏览器试更稳。",
  tool_convert_word_document_to_pdf_faq_q1: "Word 文件会离开这台电脑吗？",
  tool_convert_word_document_to_pdf_faq_q2: "转出来的 PDF 为什么比 Word 里素？",
  tool_convert_word_document_to_pdf_faq_q3: "老的 .doc 能直接转吗？",
  tool_convert_word_document_to_pdf_faq_q4: "和在线写 PDF 文档是同一件事吗？",
  tool_convert_word_document_to_pdf_faq_q5: "很大的文档转得动吗？",
  tool_convert_word_document_to_pdf_how_body: "点「选择 Word 文件（.docx）」或「加载示例」，看完 HTML 预览，再点「转换」和「下载 PDF」。文件不会离开这个标签页。",
  tool_convert_word_document_to_pdf_how_item_1: "点击「选择 Word 文件（.docx）」或「加载示例」。",
  tool_convert_word_document_to_pdf_how_item_2: "阅读正文的 HTML 预览。",
  tool_convert_word_document_to_pdf_how_item_3: "点击「转换」，按这份预览生成 PDF。",
  tool_convert_word_document_to_pdf_how_item_4: "状态显示「完成。」后，点击「下载 PDF」。",
  tool_convert_word_document_to_pdf_how_title: "怎么把 Word 文档转成 PDF",
  tool_convert_word_document_to_pdf_preview_label: "HTML 预览",
  tool_convert_word_document_to_pdf_rules_body: "只接受 .docx。版式、页眉和复杂样式在 PDF 里可能被压平。",
  tool_convert_word_document_to_pdf_rules_item_1: "要做的事：在浏览器里把一份 Word 文档变成可打印的 PDF。",
  tool_convert_word_document_to_pdf_rules_item_2: "只在你的设备上处理，文件不会上传到服务器。",
  tool_convert_word_document_to_pdf_rules_item_3: "旧版 .doc 和只有扫描图的文件不会做文字识别。",
  tool_convert_word_document_to_pdf_rules_item_4: "有密码或已损坏的文件会失败，并给出能读懂的说明。",
  tool_convert_word_document_to_pdf_rules_item_5: "页眉、浮动图形和部分字体会被压平，因为路径是 .docx 到 HTML 再到 PDF。",
  tool_convert_word_document_to_pdf_rules_title: "Word 转 PDF 实际会留下什么",
  tool_convert_word_document_to_pdf_sample: "加载示例",
  tool_convert_word_document_to_pdf_sample_paragraph: "这是一段用于转换的示例 Word 文字。",
  tool_convert_word_document_to_pdf_status_done: "完成。",
  tool_convert_word_document_to_pdf_status_working: "正在处理…",
  tool_convert_word_document_to_pdf_title: "把 Word 文档转成 PDF",
  tool_convert_word_document_to_pdf_usecase_1: "办公室没装 Word，要把草稿交成可打印的 PDF",
  tool_convert_word_document_to_pdf_usecase_2: "学生先看短文的预览，确认后再拿去打印",
  tool_convert_word_document_to_pdf_usecase_3: "信件内容敏感，必须留在自己的电脑上",
  tool_convert_word_document_to_pdf_usecases_title: "什么时候用得上",
  tool_convert_word_document_to_pdf_warn_large: "文件较大，可能会慢。",
};
export default zh;
