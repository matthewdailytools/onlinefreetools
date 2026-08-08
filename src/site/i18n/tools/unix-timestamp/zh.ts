/**
 * i18n tool shard (unix-timestamp / zh). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const zh: SiteLangDict = {
  tool_unix_timestamp_article:
    'Unix 纪元时间戳与可读 UTC / 本地日期时间双向转换，支持秒/毫秒与自动识别，面向日志、API 与 JWT 过期字段。',
  tool_unix_timestamp_clear: '清空',
  tool_unix_timestamp_convert: '转换',
  tool_unix_timestamp_copy: '复制输出',
  tool_unix_timestamp_copy_done: '已复制',
  tool_unix_timestamp_desc: 'Unix 时间戳与可读日期时间互转，浏览器本地完成。',
  tool_unix_timestamp_description:
    '将 Unix 时间戳转为 UTC 与本地可读时间，或选择本地日期时间得到纪元秒/毫秒。步骤：粘贴时间戳或选日期，选择单位，然后复制结果。示例：1516239022 → 2018-01-18T01:30:22.000Z 及本地等价。适合日志与 JWT 索赔时间核对；不上传。',
  tool_unix_timestamp_dir_label: '模式',
  tool_unix_timestamp_dt_input_label: '本地日期与时间',
  tool_unix_timestamp_error_invalid: '无效的时间戳或日期时间。',
  tool_unix_timestamp_error_range: '时间戳超出 JavaScript Date 可表示范围。',
  tool_unix_timestamp_example:
    '时间戳→日期（秒）：1516239022 → UTC 2018-01-18T01:30:22.000Z 与浏览器本地时间。日期→时间戳：选 2018-01-18 09:30 本地 → 按单位输出秒或毫秒。',
  tool_unix_timestamp_example_title: '示例',
  tool_unix_timestamp_faq_a1:
    'Unix 时间通常为 1970-01-01 UTC 起的秒数。JavaScript 与许多 API 用毫秒（13 位）。10 位按秒处理；13 位或绝对值 >1e12 会自动切到毫秒。',
  tool_unix_timestamp_faq_a2:
    'UTC 是全球同一瞬间（ISO 8601 带 Z）。本地按浏览器时区与区域格式显示——日志是 UTC 时便于对照本地理解。',
  tool_unix_timestamp_faq_a3: '「现在」会填入当前 epoch（按秒/毫秒单位）或当前本地 datetime-local，并立即转换。',
  tool_unix_timestamp_faq_a4:
    'JavaScript Date 大约支持 ±1 亿年级别的毫秒值；超出会报错，避免显示错误日期。',
  tool_unix_timestamp_faq_q1: '用秒还是毫秒？',
  tool_unix_timestamp_faq_q2: 'UTC 和本地有什么区别？',
  tool_unix_timestamp_faq_q3: '「现在」按钮做什么？',
  tool_unix_timestamp_faq_q4: '有范围限制吗？',
  tool_unix_timestamp_how_body:
    '时间戳→日期：粘贴数字 epoch，尽可能自动识别秒/毫秒，显示 UTC ISO 时间与本地格式化串。日期→时间戳：选 datetime-local（按浏览器本地时区理解），输出秒或毫秒。全程本地计算。',
  tool_unix_timestamp_how_title: '怎么用',
  tool_unix_timestamp_local_label: '本地（浏览器时区）',
  tool_unix_timestamp_now: '现在',
  tool_unix_timestamp_rules_body: '关于 epoch、单位识别、时区解释与安全数值范围的说明。',
  tool_unix_timestamp_rules_item_1:
    '纪元零点是 1970-01-01T00:00:00.000Z；负值表示 1970 年之前。秒约 10 位，毫秒约 13 位。',
  tool_unix_timestamp_rules_item_2:
    '自动识别：≥13 位或绝对值 >1e12 → 毫秒；≤10 位 → 秒。可用单位开关覆盖。',
  tool_unix_timestamp_rules_item_3:
    'datetime-local 不带时区后缀，浏览器按本地墙钟理解；UTC 输出一律 ISO 8601 带 Z。',
  tool_unix_timestamp_rules_item_4:
    '隐私：不上传。仅用原生 Date/Intl。需按命名时区转换时，见 Related 中的时区工具（上线后）。',
  tool_unix_timestamp_rules_title: '你会看到的规则',
  tool_unix_timestamp_sample: '加载示例',
  tool_unix_timestamp_sample_ts: '1516239022',
  tool_unix_timestamp_tab_date_to_ts: '日期→时间戳',
  tool_unix_timestamp_tab_ts_to_date: '时间戳→日期',
  tool_unix_timestamp_title: 'Unix 时间戳转换 — 纪元时间与可读时间互转',
  tool_unix_timestamp_ts_input_label: 'Unix 时间戳',
  tool_unix_timestamp_ts_input_placeholder: '如 1516239022 或 1516239022000',
  tool_unix_timestamp_ts_output_label: '时间戳输出',
  tool_unix_timestamp_unit_label: '单位',
  tool_unix_timestamp_unit_milliseconds: '毫秒',
  tool_unix_timestamp_unit_seconds: '秒',
  tool_unix_timestamp_utc_label: 'UTC（ISO 8601）',
  tool_unix_timestamp_usecase_1: '开发者：解读 API、Webhook 或服务器日志里的 epoch 数值。',
  tool_unix_timestamp_usecase_2: 'JWT 调试：把 exp / iat 数字转成可读日期（可配合 JWT 解码器）。',
  tool_unix_timestamp_usecase_3: '运维 / 分析：快速判断字段是 10 位秒还是 13 位毫秒。',
  tool_unix_timestamp_usecases_title: '适合场景',
};
export default zh;
