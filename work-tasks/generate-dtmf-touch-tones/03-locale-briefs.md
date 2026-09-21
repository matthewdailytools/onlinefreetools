# Locale briefs

**状态**：`i18n-done`
**母版语言**：en

共同边界：本机 **DTMF 双音** 键盘序列 → 16-bit WAV；标准行/列频率。**拒绝**单正弦与 UI 提示音冒充。≠ G5；≠ G12；≠ 真实外呼。

| 语种 | 当地检索词（主词；次词） | Title / H1 方向 | 按钮 | 文案切入 / 次词落点 |
|---|---|---|---|---|
| en | dtmf generator; touch tone; dial tones | Generate DTMF touch tones | Generate / Download WAV | FAQ not sine / not UI beep |
| zh | 拨号音；DTMF 发生器 | 生成 DTMF 拨号音 | 生成 / 下载 WAV | FAQ 非单正弦；desc≥120 |
| es | generador dtmf; tonos de marcación | Generar tonos DTMF táctiles | Generar / Descargar | FAQ no seno solo |
| ja | DTMFジェネレーター；ダイヤルトーン | DTMFタッチトーンを生成する | 生成 / 保存 | FAQ 単正弦ではない |
| de | DTMF-Generator; Wähltöne | DTMF-Tastentöne erzeugen | Erzeugen / Herunterladen | FAQ kein Sinus allein |
| fr | générateur DTMF; tonalités | Générer des tonalités DTMF | Générer / Télécharger | FAQ pas sinus seul |
| pt | gerador DTMF; tons de discagem | Gerar tons DTMF de toque | Gerar / Baixar | FAQ sem seno único |
| id | generator DTMF; nada dial | Hasilkan nada sentuh DTMF | Hasilkan / Unduh | FAQ bukan sine tunggal |
| ar | مولّد DTMF؛ نغمات الاتصال | توليد نغمات DTMF اللمسية | توليد / تنزيل | FAQ ليس جيباً مفرداً |
| ru | генератор DTMF; тоны набора | Сгенерировать DTMF тональные сигналы | Сгенерировать / Скачать | FAQ не одиночный синус |

- [x] 清单前检索覆盖已做
- [x] 同意图相关搜索词已写入 02
- [x] 用户意图审查已做
- [x] 检索覆盖已优化
- [x] 轮次 1 母版
- [x] 轮次 2 逐语重写
- [x] 轮次 3 抽查及禁词

## 多轮记录

| 轮次 | 日期 | 做了什么 | 结果 |
|---|---|---|---|
| 0b | 2026-09-20 | G5 后启动 G6：收束为键盘序列→标准双音 WAV；十语 H1；≠ sine/UI beep；related 用 sine + UI notify | 02 回写；briefs-ready |
| 1b | 2026-09-20 | 母版 en：长 description、How×4 / Why×4 / Rules×4 / FAQ×6；键盘；WAV | en 键齐全 |
| 2b | 2026-09-20 | 九语按当地 H1/按钮重写；抽查 en,zh,es,ja；FAQ 拒单正弦/UI beep；zh description ≥120 | 十语目录齐；i18n-done |
| 3 | 2026-09-20 | 抽查禁词：H1/主按钮无外呼冒充；占位符齐全 | i18n-done |
