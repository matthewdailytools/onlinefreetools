/**
 * i18n tool shard (json-schema-validator / zh). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const zh: SiteLangDict = {
  tool_json_schema_validator_article:
    '在浏览器内用 draft-07 Schema 校验 JSON。失败项给出 JSON Pointer，方便改模型输出或 feed，数据不必上传。',
  tool_json_schema_validator_bad_instance: '实例不是合法 JSON。',
  tool_json_schema_validator_bad_schema: 'Schema 不是合法 JSON（或编译失败）。',
  tool_json_schema_validator_clear: '清空',
  tool_json_schema_validator_copy_done: '已复制',
  tool_json_schema_validator_copy_errors: '复制错误',
  tool_json_schema_validator_desc: '用 Schema 校验 JSON，定位 JSON Pointer 错误——本地 draft-07。',
  tool_json_schema_validator_description:
    '在浏览器内用 JSON Schema（draft-07）校验 JSON。步骤：粘贴 Schema 与实例、点校验、按 JSON Pointer 逐条改错。示例：商品对象缺少 price 会报 missingProperty。粘贴留在本标签页；Ajv 仅从 CDN 加载库代码，不会上传你的文本。',
  tool_json_schema_validator_draft_note: '校验引擎：Ajv 8 · JSON Schema draft-07（默认）。',
  tool_json_schema_validator_empty: '请先粘贴 Schema 和实例 JSON。',
  tool_json_schema_validator_example:
    'Schema 要求 sku（字符串）与 price（数字且 ≥ 0）。合法实例：{"sku":"A-1","price":9.5}。失败实例：{"sku":"A-1"}——会在根路径 / 报告缺少 price（params 含 missingProperty）。',
  tool_json_schema_validator_example_title: '示例',
  tool_json_schema_validator_fail: '未通过 — 见下方路径',
  tool_json_schema_validator_faq_a1:
    '常见原因：缺必填字段、类型不对、或 additionalProperties:false 拒绝多余键。先看 Pointer 行和关键字说明。',
  tool_json_schema_validator_faq_a2:
    'instancePath 是指向实例的 JSON Pointer（空路径显示为 /）。缺必填时 Ajv 还会在 params 里给出 missingProperty。',
  tool_json_schema_validator_faq_a3:
    '本页默认用 Ajv 的 draft-07。更新的 2019-09 / 2020-12 需另一套构建，此处不可切换。',
  tool_json_schema_validator_faq_a4:
    'Schema 与 JSON 文本不会上传。CDN 只下载 Ajv 库代码，不是上传你的粘贴内容。',
  tool_json_schema_validator_faq_a5:
    '粘贴 Schema 与模型 JSON，校验后按 Pointer 改到通过——适合结构化输出进入下游前自检。',
  tool_json_schema_validator_faq_q1: '为什么校验失败？',
  tool_json_schema_validator_faq_q2: '怎么读 JSON Pointer 错误？',
  tool_json_schema_validator_faq_q3: '本页用哪个 draft？',
  tool_json_schema_validator_faq_q4: '我的 JSON 会离开浏览器吗？',
  tool_json_schema_validator_faq_q5: '如何检查大模型的结构化输出？',
  tool_json_schema_validator_how_body:
    '左侧贴 Schema，右侧贴实例。Ajv（draft-07）编译 Schema 后校验实例，并用 JSON Pointer 列出每条错误。可一键载入失败/合法样例；进页默认跑失败样例，立刻看到真实路径。',
  tool_json_schema_validator_how_title: '怎么用',
  tool_json_schema_validator_instance_label: '实例 JSON',
  tool_json_schema_validator_instance_placeholder: '{\\n  "sku": "A-1",\\n  "price": 9.5\\n}',
  tool_json_schema_validator_large_warn: '粘贴合计超过约 20 万字符，可能较慢，建议截短后再试。',
  tool_json_schema_validator_need_lib: '无法加载 Ajv，请检查网络后刷新。',
  tool_json_schema_validator_pass: '通过 — 实例符合 Schema',
  tool_json_schema_validator_result_label: '结果',
  tool_json_schema_validator_rules_body: '本页流程：解析 → 编译 draft-07 Schema → 校验实例 → 输出每条错误的 Pointer。',
  tool_json_schema_validator_rules_item_1:
    '解析：两侧都必须能 JSON.parse。Schema 编译失败与实例语法错误，与「校验未通过」分开提示。',
  tool_json_schema_validator_rules_item_2:
    '校验：Ajv allErrors 收集全部失败（不止第一条）。每行是 instancePath + message（缺字段时附 missingProperty）。',
  tool_json_schema_validator_rules_item_3: 'Draft：默认 draft-07。不要假定 2020-12 词汇在此可用。',
  tool_json_schema_validator_rules_item_4:
    '隐私：粘贴留在标签页。CDN 只拉 Ajv 代码，不会上传 Schema 或实例。',
  tool_json_schema_validator_rules_title: '规则说明',
  tool_json_schema_validator_sample_fail: '失败样例',
  tool_json_schema_validator_sample_instance_fail: '{\\n  "sku": "A-1"\\n}',
  tool_json_schema_validator_sample_instance_ok: '{\\n  "sku": "A-1",\\n  "price": 9.5\\n}',
  tool_json_schema_validator_sample_ok: '合法样例',
  tool_json_schema_validator_sample_schema:
    '{\\n  "$schema": "http://json-schema.org/draft-07/schema#",\\n  "type": "object",\\n  "required": ["sku", "price"],\\n  "properties": {\\n    "sku": { "type": "string", "minLength": 1 },\\n    "price": { "type": "number", "minimum": 0 }\\n  },\\n  "additionalProperties": false\\n}',
  tool_json_schema_validator_schema_label: 'JSON Schema',
  tool_json_schema_validator_schema_placeholder: '{ "type": "object", "required": ["sku"] }',
  tool_json_schema_validator_title: 'JSON Schema 校验器 — 路径错误与本地处理',
  tool_json_schema_validator_usecase_1: 'AI / Agent：检查模型结构化 JSON 是否缺字段，再交给流水线。',
  tool_json_schema_validator_usecase_2: '电商 feed：商品 JSON 对照 Schema 后再导入或分发。',
  tool_json_schema_validator_usecase_3: '接口排查：把请求/响应体贴到从契约抽出的 Schema 片段上核对。',
  tool_json_schema_validator_usecases_title: '适用场景',
  tool_json_schema_validator_validate: '校验',
};
export default zh;
