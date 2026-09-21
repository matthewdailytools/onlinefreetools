# Locale briefs

**状态**：`i18n-done`
**母版语言**：en

共同边界：本机 **短 UI 提示/点击音** 预设 → 16-bit WAV。**拒绝** DTMF 与长正弦测试音冒充。≠ G6；≠ G5。

| 语种 | 当地检索词（主词；次词） | Title / H1 方向 | 按钮 | 文案切入 / 次词落点 |
|---|---|---|---|---|
| en | notification sound maker; ui click; beep | Make a short UI notification sound | Generate / Download WAV | FAQ not DTMF / not long sine |
| zh | 提示音制作；通知音 | 制作短 UI 提示音 | 生成 / 下载 WAV | FAQ 非 DTMF；desc≥120 |
| es | sonido de notificación; clic de UI | Crear un sonido corto de notificación de UI | Generar / Descargar | FAQ no DTMF |
| ja | 通知音；UIクリック音 | 短いUI通知音を作る | 生成 / 保存 | FAQ DTMFではない |
| de | Benachrichtigungston; UI-Klick | Einen kurzen UI-Benachrichtigungston erstellen | Erzeugen / Herunterladen | FAQ kein DTMF |
| fr | son de notification; clic UI | Créer un court son de notification UI | Générer / Télécharger | FAQ pas DTMF |
| pt | som de notificação; clique de UI | Fazer um som curto de notificação de UI | Gerar / Baixar | FAQ sem DTMF |
| id | suara notifikasi; klik UI | Buat suara notifikasi UI singkat | Hasilkan / Unduh | FAQ bukan DTMF |
| ar | صوت إشعار؛ نقرة واجهة | صنع صوت إشعار واجهة قصير | توليد / تنزيل | FAQ ليس DTMF |
| ru | звук уведомления; клик UI | Сделать короткий звук UI-уведомления | Сгенерировать / Скачать | FAQ не DTMF |

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
| 0b | 2026-09-20 | G6 后启动 G12：收束为短 UI 预设→WAV；十语 H1；≠ DTMF/sine；related 用 DTMF + sine | 02 回写；briefs-ready |
| 1b | 2026-09-20 | 母版 en：长 description、How×4 / Why×4 / Rules×4 / FAQ×6；预设；WAV | en 键齐全 |
| 2b | 2026-09-20 | 九语按当地 H1/按钮重写；抽查 en,zh,es,ja；FAQ 拒 DTMF/长正弦；zh description ≥120 | 十语目录齐；i18n-done |
| 3 | 2026-09-20 | 抽查禁词：H1/主按钮无铃声/DTMF 冒充；占位符齐全 | i18n-done |
