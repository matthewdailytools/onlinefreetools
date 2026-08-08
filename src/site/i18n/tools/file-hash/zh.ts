/**
 * i18n tool shard (file-hash / zh). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const zh: SiteLangDict = {
  tool_file_hash_algo_label: '算法',
  tool_file_hash_article:
    '对粘贴文本或本地文件计算 MD5 与 SHA 十六进制摘要，用于发布校验、配置指纹或下载核对。除勾选 MD5 时会 lazy 加载 CDN 库外，哈希均在浏览器本地完成。',
  tool_file_hash_clear: '清空',
  tool_file_hash_copy: '复制全部',
  tool_file_hash_copy_done: '已复制',
  tool_file_hash_desc: '在浏览器内校验文本或文件的哈希摘要，本地完成。',
  tool_file_hash_description:
    '在浏览器内为粘贴文本或本地文件计算哈希摘要。步骤：选文本或文件，勾选 MD5/SHA 算法，点击计算，复制小写十六进制。示例：文本 `hello` → SHA-256 `2cf24dba5fb0a30e26e83b2ac5b9e29e1b161e5c1fa7425e73043362938b0184`。文件本地读取；选 MD5 时仅从 CDN 加载 crypto-js。',
  tool_file_hash_empty: '请先粘贴文本或选择文件。',
  tool_file_hash_example:
    '文本 `hello` 选 SHA-256 → `2cf24dba5fb0a30e26e83b2ac5b9e29e1b161e5c1fa7425e73043362938b0184`。同串 MD5 → `5d41402abc4b2a76b9719d911017c592`。文本按 UTF-8 字节；文件按原始字节。',
  tool_file_hash_example_title: '示例',
  tool_file_hash_faq_a1:
    'MD5 仍常见于旧版校验清单或部分 CDN ETag；安全场景（签名、防篡改）请用 SHA-256/512。SHA-1 在证书领域已弃用，但旧产物里可能仍有。',
  tool_file_hash_faq_a2:
    '大文件分块读取并显示进度。超过约 100 MB 会警告但仍尝试。超大文件可能慢或占内存 — 多 GB 归档建议用桌面工具。',
  tool_file_hash_faq_a3:
    '文本模式对 UTF-8 编码字节哈希；文件模式对文件原始字节流哈希。同一句话若编码或换行不同，摘要会不同。',
  tool_file_hash_faq_a4:
    '不上传。文本与文件都在本机处理。SHA 系列用 Web Crypto；仅 MD5 会从 jsDelivr lazy 加载 crypto-js，内容不会发给 CDN。',
  tool_file_hash_faq_a5:
    '输出小写 hex，无 `0x` 前缀，每种算法一行，与常见 `md5sum`/`sha256sum` 一致。',
  tool_file_hash_faq_q1: '何时用 MD5，何时用 SHA-256？',
  tool_file_hash_faq_q2: '大文件怎么处理？',
  tool_file_hash_faq_q3: '粘贴文本与文件哈希一样吗？',
  tool_file_hash_faq_q4: '文件或文本会上传吗？',
  tool_file_hash_faq_q5: 'hex 输出格式是什么？',
  tool_file_hash_file_bytes: '字节',
  tool_file_hash_file_label: '选择文件',
  tool_file_hash_hash: '计算哈希',
  tool_file_hash_how_body:
    '选「文本」对粘贴内容（UTF-8 字节）哈希，或选「文件」对本地文件（原始字节）哈希。勾选一个或多个算法后点「计算哈希」。SHA 用 Web Crypto；MD5 首次使用时加载小库。结果为小写 hex，每种算法一行。',
  tool_file_hash_how_title: '使用方法',
  tool_file_hash_input_mode_label: '输入方式',
  tool_file_hash_large_warn: '文件超过 100 MB，可能较慢或占用大量内存 — 超大归档建议用桌面工具。',
  tool_file_hash_md5_fail: '无法从 CDN 加载 MD5 库。可改用 SHA-256 或检查网络。',
  tool_file_hash_no_algo: '请至少选择一种算法。',
  tool_file_hash_output_label: '十六进制摘要',
  tool_file_hash_progress_label: '正在读取文件…',
  tool_file_hash_rules_body: '算法长度、字节语义与输出格式 — 便于与别处 digest 对照。',
  tool_file_hash_rules_item_1:
    'MD5 32 位 hex；SHA-1 40 位；SHA-256 64 位；SHA-384 96 位；SHA-512 128 位。均为小写、无前缀。',
  tool_file_hash_rules_item_2: '文本：UTF-8 编码。文件：完整字节流。BOM 或 CRLF 会改变与纯粘贴不同的摘要。',
  tool_file_hash_rules_item_3: '空文本或零字节文件仍会得到各算法标准的空输入 digest。',
  tool_file_hash_rules_item_4: '隐私：不上传。仅 MD5 会拉取 crypto-js；SHA 仅用内置 Web Crypto。',
  tool_file_hash_rules_title: '规则说明',
  tool_file_hash_sample: '加载示例',
  tool_file_hash_sample_text: 'hello',
  tool_file_hash_tab_file: '文件',
  tool_file_hash_tab_text: '文本',
  tool_file_hash_text_label: '文本输入',
  tool_file_hash_text_placeholder: '粘贴要哈希的文本（UTF-8）…',
  tool_file_hash_title: '文件哈希校验 — 在浏览器内查看摘要',
  tool_file_hash_usecase_1: '发布：对比安装包 SHA-256 与下载页公布值。',
  tool_file_hash_usecase_2: '配置：部署前后对 JSON 或 `.env` 片段做指纹。',
  tool_file_hash_usecase_3: '遗留 QA：核对旧 MD5 清单是否仍匹配重建产物。',
  tool_file_hash_usecases_title: '适用场景',
};
export default zh;
