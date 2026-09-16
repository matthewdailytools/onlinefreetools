# 03 — Locale briefs

**状态**：`i18n-done`  
**母版语言**：en

| 语种 | 主检索方向 / H1 |
|---|---|
| en | m4a to mp3; m4a to mp3 converter; convert m4a; aac to mp3; m4a to mp3 without upload. H1 uses the task sentence; buttons: Convert to MP3 / Download MP3. |
| zh | m4a转mp3；m4a转换mp3；M4A 转 MP3；aac转mp3；m4a转mp3不上传。H1 用“把 M4A 文件转成 MP3”；按钮“转成 MP3”。 |
| es | convertir M4A a MP3; pasar M4A a MP3; conversor M4A MP3; AAC a MP3; sin subir archivo. H1 uses “Pasar un archivo M4A a MP3”. |
| ar | تحويل M4A إلى MP3؛ محول M4A إلى MP3؛ تحويل تسجيل M4A؛ AAC إلى MP3؛ بدون رفع. H1 names the file task, not a parameter list. |
| pt | converter M4A para MP3; conversor M4A MP3; transformar M4A em MP3; AAC para MP3; sem enviar arquivo. |
| id | ubah M4A ke MP3; konverter M4A ke MP3; mengubah rekaman M4A; AAC ke MP3; tanpa unggah. |
| fr | convertir M4A en MP3; convertisseur M4A MP3; passer M4A en MP3; AAC en MP3; sans téléverser. |
| ja | M4A MP3 変換；M4AをMP3に変換；M4A MP3 コンバーター；AAC MP3 変換；アップロードなし。 |
| ru | конвертировать M4A в MP3; конвертер M4A MP3; M4A в MP3 онлайн; AAC в MP3; без загрузки на сервер. |
| de | M4A in MP3 umwandeln; M4A MP3 Konverter; M4A Datei konvertieren; AAC in MP3; ohne Hochladen. |

各语关键词、按钮和隐私句已在上表定向；实现时每语独立重写 FAQ/Use case，明确文件留在设备且不上传服务器。

## 覆盖复核轮次

| 轮次 | 日期 | 做了什么 | 结果 |
|---|---|---|---|
| 0b | 2026-09-16 | 依据完整任务句、同意图 AAC 吸收与单文件边界更新覆盖表、意图审查和十语检索方向。 | 主词固定在 H1；AAC、隐私、批量/视频边界分别落入 description、FAQ 和 use case。 |
| 1b | 2026-09-16 | 完成英文母版，复核 M4A→MP3 主词、AAC 吸收、浏览器解码边界和按钮一致性。 | H1、description、How、Rules、FAQ 和 example 都已改为真实 M4A/AAC 输入与 MP3 输出语义。 |
| 2b | 2026-09-16 | 抽查 en、zh、es、ja 的当地 title 与 description，核对 M4A/AAC 输入、MP3 输出和不上传服务器。 | 四语主词均在 H1，隐私句没有回退为泛泛 local；其余 locale 已建立对应标题和描述。 |

## 禁词与轮次

- [x] 清单前检索覆盖、同意图搜索词和用户意图审查已写入 02
- [x] 不用参数目录腔、关键词列表、虚假“所有 M4A 都支持”或模糊 local 表述
- [x] 隐私句明确“留在设备 / 不上传服务器”
- [x] 检索覆盖已优化；1b 与 2b 见上表
- [x] 十语各 59 个字段已完整重写，逐语复核方向、隐私、AAC/ALAC 边界、码率和有损说明；FAQ 顺序与措辞按语言调整。此为代理语言复核，不声称获得真人母语审校。

## 本轮实际复核（2026-09-16）

- 完整批次：en/zh/es → ja/ar/ru → fr/de → pt/id；英文阶段 2 可执行覆盖门禁 exit 0。
- `node scripts/tool-modules/test-m4a-source.mjs` exit 0：十语各 59 个真实字段，无重复键，键集和插值占位符与英文一致，description 长度均至少 120。
- 此状态仅代表内容完成，不代表发布完成。真实五秒 M4A 示例已生成并实测转换为约 118.2 KiB MP3，与十语示例的约 120 KiB 说明一致。浏览器验收使用支持 AAC 的官方 Chrome；用户明确豁免本次超过 40 MiB 输入用例，其他检查不得一并跳过。
