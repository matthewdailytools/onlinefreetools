/**
 * i18n tool shard (timezone-converter / zh). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const zh: SiteLangDict = {
  tool_timezone_converter_article:
    '选定源时区的某一时刻，一次对照 UTC、纽约、伦敦、东京等 IANA 时区的本地时间。适合远程会议、日志对齐与世界时间速查，全在浏览器用 Intl 完成，不上传。',
  tool_timezone_converter_clear: '清空',
  tool_timezone_converter_col_local: '本地日期时间',
  tool_timezone_converter_col_offset: 'UTC 偏移',
  tool_timezone_converter_col_zone: '时区',
  tool_timezone_converter_compare_zones: '对照以下时区',
  tool_timezone_converter_convert: '转换',
  tool_timezone_converter_desc: 'IANA 多时区时间对照，含夏令时说明，浏览器本地运行。',
  tool_timezone_converter_description:
    '在浏览器把某一 IANA 时区的日期时间换算到多个目标时区。步骤：输入本地时刻、选源时区、勾选对照区、点转换。示例：2026-06-15 14:30 洛杉矶 → 纽约、伦敦、东京、UTC 各行带偏移。说明夏令时跳时与重叠；本页是对照表，不是会议时区导出包。数据不上传。',
  tool_timezone_converter_error_dst_gap:
    '该本地时间在源时区不存在（夏令时「跳过」小时）。请选相邻整点。',
  tool_timezone_converter_error_empty: '请输入日期时间并至少勾选一个对照时区。',
  tool_timezone_converter_error_invalid: '日期时间格式无效，请用选择器或 YYYY-MM-DDTHH:MM。',
  tool_timezone_converter_example:
    '进页固定样例：2026-06-15 14:30（America/Los_Angeles）→ UTC、纽约、伦敦、东京的本地钟面与 UTC 偏移，按该日 IANA 规则计算。',
  tool_timezone_converter_example_title: '示例',
  tool_timezone_converter_faq_a1:
    '使用 America/New_York、Asia/Tokyo 等 IANA 名称，与浏览器和服务器一致。EST、JST 等缩写易混（标准时/夏令时），排期请用完整 IANA 名。',
  tool_timezone_converter_faq_a2:
    '夏令时开始日可能「跳过」某整点，工具会报错而不瞎猜。结束日同一本地时间可能出现两次，Intl 会取其一 — 关键会议请在那些日期人工核对。',
  tool_timezone_converter_faq_a3:
    'Unix 时间戳工具多在 UTC 与 epoch 秒互转。本页保留命名源时区，并排展示多个目标区的同一瞬间，更适合「对方那边几点」。',
  tool_timezone_converter_faq_a4:
    '不能。这是即时多区对照表，供自己查看；不提供可分享的会议包、参会人列表或 ICS 导出。',
  tool_timezone_converter_faq_a5:
    '不会。仅用内置 Intl.DateTimeFormat，日期时间不上传、不出浏览器。',
  tool_timezone_converter_faq_q1: '为什么用 IANA 名而不是 EST、PST？',
  tool_timezone_converter_faq_q2: '夏令时切换日会怎样？',
  tool_timezone_converter_faq_q3: '和 Unix 时间戳工具有什么区别？',
  tool_timezone_converter_faq_q4: '能在这里导出团队会议时区包吗？',
  tool_timezone_converter_faq_q5: '日期时间会上传到服务器吗？',
  tool_timezone_converter_how_body:
    '输入本地日期时间并选 IANA 源时区，勾选一个或多个对照区后点转换。表格显示同一瞬间在各区的本地钟面与 UTC 偏移，计算全在浏览器完成。',
  tool_timezone_converter_how_title: '怎么用',
  tool_timezone_converter_local_tz: '本机',
  tool_timezone_converter_now: '现在',
  tool_timezone_converter_rules_body: 'IANA 规则、夏令时边界，以及与 epoch / 会议导出类工具的分工。',
  tool_timezone_converter_rules_item_1:
    '时区遵循 IANA 时区数据库（tzdata）。偏移随各地夏令时变化 — 表格按你输入的日期计算，不是固定 GMT 差。',
  tool_timezone_converter_rules_item_2:
    '春跳时：被跳过的整点会提示错误。秋重叠：同一本地时间可能对应两个偏移 — 边界日期请再确认。',
  tool_timezone_converter_rules_item_3:
    'CST、IST 等缩写可能指不同地区，API、cron、日历邀请请写完整 IANA 名。',
  tool_timezone_converter_rules_item_4:
    '隐私：不上传。本页只读对照，不是会议调度器，也不是 IP 定位。',
  tool_timezone_converter_rules_title: '规则说明',
  tool_timezone_converter_sample: '加载示例',
  tool_timezone_converter_source_time: '源日期时间',
  tool_timezone_converter_source_tz: '源时区',
  tool_timezone_converter_title: '时区转换 — 同一时刻多地对照',
  tool_timezone_converter_usecase_1: '远程协作：对方说「太平洋 3:30 PM」— 一次看清纽约、伦敦、东京再入会。',
  tool_timezone_converter_usecase_2: '运维日志：某条记录是芝加哥本地时间 — 对照 UTC 和你所在时区，免心算。',
  tool_timezone_converter_usecase_3: '出行：航班落地迪拜，并排看悉尼与洛杉矶，方便衔接电话。',
  tool_timezone_converter_usecases_title: '适用场景',
};
export default zh;
