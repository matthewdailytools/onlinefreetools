Date: 2026-08-08 19:05
Summary: Created 24 i18n tool shard files for file-hash, uuid-generator, and password-generator in es/ar/pt/id/fr/ja/ru/de.

[question]
Create i18n tool shard files for file-hash, uuid-generator, and password-generator in languages: es, ar, pt, id, fr, ja, ru, de (8 langs × 3 tools = 24 files). Reference en.ts and zh.ts; follow locale briefs; description ≥120 chars with localized step/example keywords; FAQ ≥5 pairs; natural titles; file header comment; do not run merge:tools.

[try to solve]
已创建全部 24 个 i18n 分片文件（3 工具 × 8 语言），路径 `src/site/i18n/tools/{slug}/{lang}.ts`。

每个文件：
- 导出完整 `SiteLangDict`，键名与 `en.ts` 一致
- `description` ≥120 字符，含各语言本地化步骤/示例关键词（如 es pasos/ejemplo、ja 手順/例、de Schritte/Beispiel 等）
- FAQ 5 组（q1–q5 / a1–a5）按 `work-tasks/{slug}/03-locale-briefs.md` 重写
- Title 采用 brief 中的本地检索向说法，非英模直译
- 文件头注释 `i18n tool shard ({slug} / {lang})` + `import type { SiteLangDict } from '../../../types'`

工具与语言覆盖：
- **file-hash**：es, ar, pt, id, fr, ja, ru, de
- **uuid-generator**：es, ar, pt, id, fr, ja, ru, de
- **password-generator**：es, ar, pt, id, fr, ja, ru, de

已用脚本核对：24 文件键集合与 en 母版一致，`description` 长度均 ≥120。未执行 `merge:tools`（按请求）。

[actions]
- 新增 24 个 `src/site/i18n/tools/{file-hash,uuid-generator,password-generator}/{es,ar,pt,id,fr,ja,ru,de}.ts`
