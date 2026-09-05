/**
 * i18n tool shard (base64 / zh). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const zh: SiteLangDict = {
  tool_base64_article:
    '同页 Base64 / Base64url 编解码，面向 UTF-8 文本与原始字节，适用于 API、JWT 片段与配置串；与图片专用 Base64 工具分工明确。',
  tool_base64_clear: '清空',
  tool_base64_convert: '转换',
  tool_base64_copy: '复制输出',
  tool_base64_copy_done: '已复制',
  tool_base64_desc: '在浏览器内对文本或文件字节做 Base64 编解码，本地完成。',
  tool_base64_description:
    '在浏览器内将文本或文件字节与 Base64 互转。步骤：选编码或解码，粘贴文本或选文件，按需切换 URL 安全变体，然后复制。示例：Hello 世界 → SGVsbG8g5LiW55WM。用 UTF-8 处理 Unicode；内容不离开浏览器。',
  tool_base64_dir_label: '模式',
  tool_base64_empty: '请先粘贴内容。',
  tool_base64_error_invalid: '无效的 Base64 字符或 padding。',
  tool_base64_example:
    '编码（标准）：Hello 世界 → SGVsbG8g5LiW55WM。编码（Base64url）：同样字节 → SGVsbG8g5LiW55WM（无 +/=）。解码可还原为 Hello 世界。',
  tool_base64_example_title: '示例',
  tool_base64_faq_a1:
    '标准 Base64 用 A–Z、a–z、0–9、+、/ 及 = 填充。Base64url（RFC 4648 §5）把 + 换成 -、/ 换成 _，通常去掉 =，常见于 JWT 与 URL 安全令牌。',
  tool_base64_faq_a2:
    '支持。文本先按 UTF-8 编成字节再 Base64；解码可还原 Unicode。若出现乱码，多半是输入非法或曾用其他字符集编码。',
  tool_base64_faq_a3:
    '本页处理通用文本/字节与 Base64url；「图片 ↔ Base64」专注照片预览、MIME 与下载，不适合任意 UTF-8 字符串。',
  tool_base64_faq_a4:
    '不会。转换在本地用 TextEncoder、btoa/atob 与 FileReader 完成，粘贴与文件均不上传。',
  tool_base64_faq_a5:
    '解码时会忽略空白。非法字符、错误 padding 或截断串会报错。超大粘贴（>100 万字符）可能变慢，建议缩短后再试。',
  tool_base64_faq_q1: 'Base64 和 Base64url 有什么区别？',
  tool_base64_faq_q2: '支持 Unicode / UTF-8 吗？',
  tool_base64_faq_q3: '和图片 Base64 工具有什么不同？',
  tool_base64_faq_q4: '文本或文件会上传吗？',
  tool_base64_faq_q5: '输入无效 Base64 会怎样？',
  tool_base64_file_label: '或编码文件',
  tool_base64_file_large_warn: '文件较大（>5 MB），编码可能需要一点时间。',
  tool_base64_file_loaded: '已编码文件：{name}（{size} 字节）。输出区仅显示 Base64。',
  tool_base64_how_body:
    '选「编码」把 UTF-8 文本或文件字节转为 Base64，选「解码」做反向。Unicode 经 UTF-8 字节再 btoa。勾选 Base64url 可输出 JWT 风格（- _ 替代 + /，无 padding）。文件在本地读取，不上传。',
  tool_base64_how_item_1: '选择「编码」或「解码」。',
  tool_base64_how_item_2: '编码时粘贴文本或选择文件；解码时粘贴 Base64。',
  tool_base64_how_item_3: '需要 JWT 风格的 - 和 _（无 padding）时勾选 Base64url。',
  tool_base64_how_item_4: '点击「转换」，然后复制或下载结果。',
  tool_base64_how_title: '怎么用',
  tool_base64_input_label: '输入',
  tool_base64_input_placeholder: '粘贴纯文本或 Base64 字符串…',
  tool_base64_large_warn: '粘贴过大（>100 万字符），可能变慢，建议缩短后再试。',
  tool_base64_output_label: '输出',
  tool_base64_rules_body: '编码/解码时你会看到：字母表差异、UTF-8 处理、padding 规则，以及文件与文本输入的区别。',
  tool_base64_rules_item_1:
    '标准 Base64 字母表：A–Z、a–z、0–9、+、/；长度为 4 的倍数并用 = 填充。Base64url 将 +→-、/→_，常省略 =。',
  tool_base64_rules_item_2:
    '文本一律先 UTF-8 再 Base64；一个 Unicode 字符可能对应多个 Base64 字符（如「世界」）。合法输入解码可还原原文。',
  tool_base64_rules_item_3:
    '文件编码读取原始字节，适合校验、附件或二进制块。文本与文件共用输出区；选文件后会清空文本框并显示文件信息。',
  tool_base64_rules_item_4: '隐私：不上传服务器。无外部库，转换全在浏览器内，遵循 RFC 4648。',
  tool_base64_rules_title: '你会看到的规则',
  tool_base64_sample: '加载示例',
  tool_base64_sample_decode: 'SGVsbG8g5LiW55WM',
  tool_base64_sample_encode: 'Hello 世界',
  tool_base64_tab_decode: '解码',
  tool_base64_tab_encode: '编码',
  tool_base64_title: 'Base64 编解码 — 在浏览器内转换文本',
  tool_base64_url_label: 'Base64url（用 -_ 替代 +/，无 padding）',
  tool_base64_usecase_1: '开发者：为 API 请求体、data URL 或测试数据编码 JSON / UTF-8 字符串。',
  tool_base64_usecase_2: 'JWT / OAuth：生成或核对 Base64url 片段，再粘贴到 JWT 解码器。',
  tool_base64_usecase_3: '配置 / 运维：把小段二进制或密钥以 Base64 写入 YAML、环境变量或 CI 变量。',
  tool_base64_usecases_title: '适合场景',
};
export default zh;
