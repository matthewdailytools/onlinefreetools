# 03 — Locale briefs：unlock-pdf

**母版语言**：en  
**状态**：`i18n-done`

## 共用禁词

- [x] 无造词 / 错义借译 / 残缺缩写
- [x] title 非参数目录腔
- [x] 十语非同构骨架
- [x] **清单前检索覆盖已做**
- [x] **检索覆盖已优化**（步 2+4；抽查 en,zh,es,ja）
- [x] 隐私句须设备 + 不上服务器（见 localization 规则）

### en
- 检索词：unlock pdf, remove pdf password, decrypt pdf
- Title：Unlock PDF — Remove Password You Already Know
- 按钮：Unlock / Download / Sample / Clear
- 轮次2/3：[x]/[x]

### zh
- 检索词：PDF 解锁, 去除 PDF 密码, 解密 PDF
- Title：解锁 PDF — 用你已知的密码去掉保护
- 按钮：解锁 / 下载 / 样例 / 清空
- 轮次2/3：[x]/[x]

### es
- 检索词：desbloquear pdf, quitar contraseña pdf
- Title：Desbloquear PDF — quita una contraseña que ya conoces
- 按钮：Desbloquear / Descargar / Ejemplo
- 轮次2/3：[ ]/[ ]

### ar
- 检索词：إلغاء قفل PDF، إزالة كلمة مرور PDF
- Title：إلغاء قفل PDF — أزل كلمة مرور تعرفها مسبقًا
- 按钮：إلغاء القفل / تنزيل / مثال

### pt
- 检索词：desbloquear pdf, remover senha pdf
- Title：Desbloquear PDF — remova uma senha que você já sabe
- 按钮：Desbloquear / Baixar / Exemplo

### id
- 检索词：buka kunci pdf, hapus password pdf
- Title：Buka Kunci PDF — hapus kata sandi yang sudah Anda tahu
- 按钮：Buka kunci / Unduh / Contoh

### fr
- 检索词：déverrouiller pdf, retirer mot de passe pdf
- Title：Déverrouiller un PDF — retirez un mot de passe que vous connaissez
- 按钮：Déverrouiller / Télécharger / Exemple

### ja
- 检索词：PDF パスワード解除, PDF ロック解除
- Title：PDFロック解除 — 知っているパスワードで保護を外す
- 按钮：解除 / ダウンロード / サンプル
- 轮次2/3：[x]/[x]

### ru
- 检索词：разблокировать pdf, снять пароль pdf
- Title：Разблокировать PDF — снимите пароль, который вы знаете
- 按钮：Разблокировать / Скачать / Пример

### de
- 检索词：PDF entsperren, PDF Passwort entfernen
- Title：PDF entsperren — Passwort entfernen, das Sie kennen
- 按钮：Entsperren / Download / Beispiel


## 多轮记录（摘要）

| 轮次 | 日期 | 做了什么 | 结果 |
|---|---|---|---|
| 0b 清单前检索覆盖 | 2026-08-08 | 主词回写 H1「Unlock PDF — Remove Password You Already Know」；去掉初稿参数枚举「Unlock PDF — Crack, Brute Force, Recover Password」；次词落 desc/FAQ；覆盖表写入 02 | 通过；可 ready |
| 1b 母版生成后覆盖 | 2026-08-08 | en 母版 title/desc/FAQ 对齐 unlock pdf / remove password / known password；次词 decrypt/not cracking 落 desc 与 FAQ q1；去掉破解承诺 | 通过 phase=2 |
| 2b 抽查语生成后覆盖 | 2026-08-08 | en,zh,es,ja title 各语检索向独立；隐私句设备+不上服务器；FAQ 四语均强调非破解/非暴力猜密 | 通过 phase=4 |
