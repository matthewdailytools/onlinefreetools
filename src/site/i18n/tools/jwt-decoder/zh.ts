/**
 * i18n tool shard (jwt-decoder / zh). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const zh: SiteLangDict = {
  tool_jwt_decoder_article:
    '在浏览器本地解码 JWT 的 Header 与 Payload，说明 Base64url 规则、注册声明时间与「不验签」边界，适合 OAuth 调试与 Bearer token 查看，不上传 token。',
  tool_jwt_decoder_claims_local: '本地',
  tool_jwt_decoder_claims_title: '注册声明时间',
  tool_jwt_decoder_claims_utc: 'UTC',
  tool_jwt_decoder_clear: '清空',
  tool_jwt_decoder_copy_done: '已复制',
  tool_jwt_decoder_copy_header: '复制 Header',
  tool_jwt_decoder_copy_payload: '复制 Payload',
  tool_jwt_decoder_decode: '解码',
  tool_jwt_decoder_desc:
    '本地解码 JWT 的 Header 与 Payload，不验证签名，粘贴内容留在浏览器。',
  tool_jwt_decoder_description:
    '粘贴 JWT，在浏览器里查看 Header 与 Payload 的 JSON——不验证签名。步骤：粘贴 token、解码、复制 Header 或 Payload。示例：样例 token 显示 alg 为 HS256、iat 为 1516239022，并给出 UTC 与本地时间。Token 不会上传。',
  tool_jwt_decoder_disclaimer:
    '未验证签名——本工具仅做 Base64url 解码，不能用于授权或安全决策。',
  tool_jwt_decoder_empty: '暂无可复制内容，请先解码 JWT。',
  tool_jwt_decoder_error_base64_header: 'Header 不是合法的 Base64url。',
  tool_jwt_decoder_error_base64_payload: 'Payload 不是合法的 Base64url。',
  tool_jwt_decoder_error_json_header: 'Header 解码后不是合法 JSON。',
  tool_jwt_decoder_error_json_payload: 'Payload 解码后不是合法 JSON。',
  tool_jwt_decoder_error_segments: 'JWT 须为三段，用两个点分隔（header.payload.signature）。',
  tool_jwt_decoder_example:
    '输入：eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9eIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c → Header：{"alg":"HS256","typ":"JWT"}；Payload：{"sub":"1234567890","name":"John Doe","iat":1516239022}，iat 会显示 UTC 与本地时间；Signature 仅展示原文，未验签。',
  tool_jwt_decoder_example_title: '示例',
  tool_jwt_decoder_faq_a1:
    '不会。解码只是把 Header/Payload 的 Base64url 还原成 JSON；任何人都能读这两段，验证签名需要发行方密钥或公钥，本页故意不做。',
  tool_jwt_decoder_faq_a2:
    '确认粘贴的是完整 token，且恰好两个点分成三段。多余点、截断粘贴，或把普通 Base64 当 JWT 都会报错。',
  tool_jwt_decoder_faq_a3:
    'JWT 用 Base64url：- 代替 +、_ 代替 /，常省略末尾 =。通用 Base64 工具可能解错 URL 安全 token——可用本页或站内 Base64 工具的 url-safe 模式。',
  tool_jwt_decoder_faq_a4:
    'exp、iat、nbf 是 UTC 的 Unix 秒。本页会转成可读的 UTC 与本地时间；判断过期请对照当前时间，其他格式可用 Unix 时间戳工具。',
  tool_jwt_decoder_faq_a5:
    '不会。拆分、Base64url 解码与 JSON 解析都在当前标签页本地完成；请勿在公用电脑上粘贴生产环境密钥。',
  tool_jwt_decoder_faq_q1: '会验证 JWT 签名吗？',
  tool_jwt_decoder_faq_q2: '为什么提示段数错误？',
  tool_jwt_decoder_faq_q3: 'JWT 的 Base64url 和普通 Base64 有何不同？',
  tool_jwt_decoder_faq_q4: 'exp、iat、nbf 怎么读？',
  tool_jwt_decoder_faq_q5: 'Token 会上传到服务器吗？',
  tool_jwt_decoder_header_label: 'Header（JSON）',
  tool_jwt_decoder_how_body:
    '粘贴完整 JWT（header.payload.signature）。页面按点拆分，对前两段做 Base64url 解码并格式化 JSON；若 payload 含 exp/iat/nbf 数字，会额外显示 UTC 与本地时间。第三段 Signature 仅原文展示，不做验证。',
  tool_jwt_decoder_how_title: '怎么用',
  tool_jwt_decoder_input_label: 'JWT 输入',
  tool_jwt_decoder_input_placeholder: '粘贴 access token 或 ID token…',
  tool_jwt_decoder_large_warn: 'Token 较大（>8 KB），解码可能变慢——不建议粘贴超大 JWE。',
  tool_jwt_decoder_payload_label: 'Payload（JSON）',
  tool_jwt_decoder_rules_body:
    '本解码器做什么、不做什么：结构、Base64url 步骤、注册声明与「不验签」边界。',
  tool_jwt_decoder_rules_item_1:
    '结构：JWS 紧凑格式分三段 Base64url——Header（alg、typ 等）、Payload（声明）、Signature（二进制，非 JSON）。',
  tool_jwt_decoder_rules_item_2:
    'Base64url：-→+、_→/，补齐 padding 至长度 %4，再 atob 得到字节、按 UTF-8 还原后 JSON.parse，含中文或带重音的 claim 不会乱码；哪段出错会单独提示 Header 或 Payload。',
  tool_jwt_decoder_rules_item_3:
    '注册声明：exp（过期）、iat（签发）、nbf（生效）为 UTC Unix 秒；能读懂 JSON 不等于 token 可信。',
  tool_jwt_decoder_rules_item_4:
    '隐私与限制：粘贴不上传；不做 HMAC/RSA 验签。生产环境不能仅凭解码结果授权。',
  tool_jwt_decoder_rules_title: '使用规则',
  tool_jwt_decoder_sample: '加载示例',
  tool_jwt_decoder_signature_label: 'Signature（原文，未验签）',
  tool_jwt_decoder_title: 'JWT 解码 — 本地查看 Header 与 Payload（不验签）',
  tool_jwt_decoder_usecase_1:
    '全栈调试：OAuth access token 的 sub、scope、exp 是否符合网关预期。',
  tool_jwt_decoder_usecase_2:
    'API 对接：核对 ID token 的 iss、aud 是否与文档一致。',
  tool_jwt_decoder_usecase_3:
    '学习 JWT：看清 Header、Payload、Signature 三段如何对应 JWS 结构。',
  tool_jwt_decoder_usecases_title: '适合场景',
};
export default zh;
