/**
 * i18n tool shard (password-generator / zh). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const zh: SiteLangDict = {
  tool_password_generator_article:
    '按所选字符集用 crypto.getRandomValues 生随机密码，适合临时账号、演示或对比长度/字符集策略 — 非密码管理器，也不保证绝对强度。',
  tool_password_generator_charset_label: '字符集',
  tool_password_generator_clear: '清空',
  tool_password_generator_copy: '复制',
  tool_password_generator_copy_done: '已复制',
  tool_password_generator_count_label: '数量（1–100）',
  tool_password_generator_desc: '在浏览器内本地生成随机密码。',
  tool_password_generator_description:
    '在浏览器内生成随机密码。步骤：设置长度（8–128），勾选大小写/数字/符号，可选排除易混字符，点击生成并复制结果。示例：16 位混合大小写、数字与符号。仅用浏览器安全随机源生成，不上传、不落盘；此为演示级便捷工具，主账号请用专业密码管理器。',
  tool_password_generator_digits: '数字',
  tool_password_generator_disclaimer:
    '演示级便捷工具，非密码保险箱。银行或主账号请用专业密码管理器及其生成器。密码在本地生成，不会保存在我们的服务器。',
  tool_password_generator_empty_charset: '请至少启用一种字符集（排除易混字符后仍须有余量）。',
  tool_password_generator_example:
    '长度 16、全开字符集可能类似 `Xk9#mP2$vL4@nQ8!` — 含大小写、数字与符号。每次点击为新随机串；加载示例为长度 16 且全开。',
  tool_password_generator_example_title: '示例',
  tool_password_generator_exclude_ambiguous: '排除易混字符（0 O I l 1）',
  tool_password_generator_faq_a1: '不会。完全在浏览器生成，我们不记录、不存储、不传输你创建的密码。',
  tool_password_generator_faq_a2:
    '随机性来自 crypto.getRandomValues（CSPRNG），非 Math.random。更长且字符类更多通常更抗猜测，但浏览器页无法承诺「不可破解」 — 生产密钥请用管理器并遵循团队策略。',
  tool_password_generator_faq_a3: '不能。本页只生成新随机串，无法审计、破解或恢复已有密码。',
  tool_password_generator_faq_a4: '去掉视觉易混字符（0/O、1/l/I），便于朗读或手输 — 字符池略变小。',
  tool_password_generator_faq_a5: '每次最多 100 条，输出一行一条；需要更多可再次生成。',
  tool_password_generator_faq_q1: '密码会存服务器或上传吗？',
  tool_password_generator_faq_q2: '这些密码有多强？',
  tool_password_generator_faq_q3: '能破解我现有密码吗？',
  tool_password_generator_faq_q4: '「排除易混字符」是什么？',
  tool_password_generator_faq_q5: '一次能生成多少条？',
  tool_password_generator_generate: '生成',
  tool_password_generator_how_body:
    '滑动长度、勾选字符类、可选排除易混字符、设数量后生成。每个字符从合并字符池用 crypto.getRandomValues 选取。复制即可 — 离开页面后不保留。',
  tool_password_generator_how_title: '使用方法',
  tool_password_generator_length_label: '长度',
  tool_password_generator_lower: '小写',
  tool_password_generator_output_label: '密码',
  tool_password_generator_rules_body: '字符集规则、随机源与诚实限制 — 用于真实账号前请先阅读。',
  tool_password_generator_rules_item_1:
    '字符池：A–Z、a–z、0–9 与默认符号集。勾选与排除后至少保留一类。',
  tool_password_generator_rules_item_2: '索引取自 crypto.getRandomValues 字节，绝不用 Math.random；会造成取模偏置的字节直接丢弃重取，字符池里每个字符概率相同。',
  tool_password_generator_rules_item_3: '不强制「每类至少一个字符」；请手动勾选需要的类。',
  tool_password_generator_rules_item_4: '隐私：仅本地生成；共用电脑用完后请清空输出。',
  tool_password_generator_rules_title: '规则说明',
  tool_password_generator_sample: '加载示例',
  tool_password_generator_symbols: '符号',
  tool_password_generator_title: '随机密码生成 — 在浏览器内创建密码',
  tool_password_generator_upper: '大写',
  tool_password_generator_usecase_1: '为即将轮换的 staging 账号生成一次性口令。',
  tool_password_generator_usecase_2: 'QA 脚本需要示例强密码时快速批量生成。',
  tool_password_generator_usecase_3: '更新团队策略前对比长度与符号集对可读性的影响。',
  tool_password_generator_usecases_title: '适用场景',
};
export default zh;
