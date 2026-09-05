/**
 * i18n tool shard (uuid-generator / zh). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const zh: SiteLangDict = {
  tool_uuid_generator_article:
    '在本地批量生成 UUID v4 或 ULID，使用密码学安全随机源，适合测试数据、trace id 或表结构占位 — 不上传。',
  tool_uuid_generator_clear: '清空',
  tool_uuid_generator_copy_all: '全部复制',
  tool_uuid_generator_copy_done: '已复制',
  tool_uuid_generator_count_label: '数量（1–100）',
  tool_uuid_generator_desc: '本地生成 UUID v4 与 ULID — 最多 100 条，一键复制。',
  tool_uuid_generator_description:
    '在浏览器内生成 UUID v4 或 ULID。步骤：选类型、设数量（1–100）、点「生成」、全部复制。示例：三条 RFC 风格 v4，如 `550e8400-e29b-41d4-a716-446655440000`。使用 crypto.getRandomValues，ID 不上传。',
  tool_uuid_generator_example:
    'UUID v4（小写带连字符）：`550e8400-e29b-41d4-a716-446655440000`。ULID（26 位 Crockford Base32，时间前缀可排序）：`01ARZ3NDEKTSV4RRFFQ69G5FAV`。加载示例填入三条固定 v4 便于对照格式。',
  tool_uuid_generator_example_title: '示例',
  tool_uuid_generator_faq_a1:
    'UUID v4 为 128 位随机（版本位固定），适合不透明 ID。ULID 含毫秒时间前缀，按字典序近似按创建时间排序 — 适合日志或需要时间序的主键。',
  tool_uuid_generator_faq_a2:
    '使用 crypto.getRandomValues（或 randomUUID）。对攻击者不可预测，但不保证全局唯一 — 业务仍需处理碰撞。',
  tool_uuid_generator_faq_a3: '单次最多 100 条以保持页面响应；需要更多可再次生成。',
  tool_uuid_generator_faq_a4: '不上传、无服务端生成，均在浏览器标签页内完成。',
  tool_uuid_generator_faq_a5: 'UUID v4：36 字符带连字符的小写 hex。ULID：26 位大写 Crockford Base32，无连字符。',
  tool_uuid_generator_faq_q1: 'UUID v4 与 ULID 怎么选？',
  tool_uuid_generator_faq_q2: '生成的 ID 是否密码学安全？',
  tool_uuid_generator_faq_q3: '为何批量上限 100？',
  tool_uuid_generator_faq_q4: 'ID 会离开浏览器吗？',
  tool_uuid_generator_faq_q5: '输出格式是什么？',
  tool_uuid_generator_generate: '生成',
  tool_uuid_generator_how_body:
    '选 UUID v4 为标准随机 UUID，或 ULID 为 26 字符可时间排序 ID。设置数量（1–100）后生成；全部复制为每行一条。随机字节来自浏览器 CSPRNG。',
  tool_uuid_generator_how_item_1: '选择 UUID v4 或 ULID。',
  tool_uuid_generator_how_item_2: '设置生成数量（1–100）。',
  tool_uuid_generator_how_item_3: '点击「生成」（或「加载示例」填入固定演示 ID）。',
  tool_uuid_generator_how_item_4: '点「全部复制」，每行一个 ID 到剪贴板。',
  tool_uuid_generator_how_title: '使用方法',
  tool_uuid_generator_output_label: '生成的 ID',
  tool_uuid_generator_rules_body: '格式差异与实用限制，便于写入代码或数据库。',
  tool_uuid_generator_rules_item_1:
    'UUID v4 符合 RFC 4122：`xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx`，小写 hex。',
  tool_uuid_generator_rules_item_2: 'ULID：48 位 Unix 毫秒 + 80 位随机，编码为 26 字符 Crockford Base32（无 I/L/O/U）。',
  tool_uuid_generator_rules_item_3: '不保证跨机器/时间全局唯一 — 视为强随机样本，非分布式 ID 服务。',
  tool_uuid_generator_rules_item_4: '隐私：生成无网络请求；除非你复制到别处，ID 不离开本机。',
  tool_uuid_generator_rules_title: '规则说明',
  tool_uuid_generator_sample: '加载示例',
  tool_uuid_generator_title: 'UUID / ULID 生成 — 在浏览器内创建标识符',
  tool_uuid_generator_type_label: 'ID 类型',
  tool_uuid_generator_type_ulid: 'ULID',
  tool_uuid_generator_type_v4: 'UUID v4',
  tool_uuid_generator_usecase_1: '开发库：导入 fixture 前批量生成不透明主键。',
  tool_uuid_generator_usecase_2: '集成测试：一次生成多条 trace / correlation id。',
  tool_uuid_generator_usecase_3: '原型：API 请求体需要 ULID 风格可排序标识。',
  tool_uuid_generator_usecases_title: '适用场景',
};
export default zh;
