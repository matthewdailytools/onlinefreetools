# 03 — Locale briefs：protect-pdf

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
- 检索词：protect pdf, password protect pdf, encrypt pdf
- Title：Protect PDF — Password-Encrypt in Your Browser
- 按钮：Protect / Download / Sample / Clear
- 轮次2/3：[x]/[x]

### zh
- 检索词：PDF 加密, PDF 密码保护, 保护 PDF
- Title：保护 PDF — 在浏览器里用密码加密
- 按钮：加密 / 下载 / 样例 / 清空
- 轮次2/3：[x]/[x]

### es
- 检索词：proteger pdf, cifrar pdf con contraseña
- Title：Proteger PDF — cifre con contraseña en el navegador
- 按钮：Proteger / Descargar / Ejemplo
- 轮次2/3：[x]/[x]

### ar
- 检索词：حماية PDF، تشفير PDF بكلمة مرور
- Title：حماية PDF — شفّر بكلمة مرور في المتصفح
- 按钮：حماية / تنزيل / مثال

### pt
- 检索词：proteger pdf, criptografar pdf senha
- Title：Proteger PDF — criptografe com senha no navegador
- 按钮：Proteger / Baixar / Exemplo

### id
- 检索词：lindungi pdf, enkripsi pdf password
- Title：Lindungi PDF — enkripsi dengan kata sandi di browser
- 按钮：Lindungi / Unduh / Contoh

### fr
- 检索词：protéger pdf, chiffrer pdf mot de passe
- Title：Protéger un PDF — chiffrez par mot de passe dans le navigateur
- 按钮：Protéger / Télécharger / Exemple

### ja
- 检索词：PDF パスワード, PDF 暗号化
- Title：PDFを保護 — ブラウザでパスワード暗号化
- 按钮：保護 / ダウンロード / サンプル
- 轮次2/3：[x]/[x]

### ru
- 检索词：защитить pdf, зашифровать pdf паролем
- Title：Защитить PDF — зашифруйте паролем в браузере
- 按钮：Защитить / Скачать / Пример

### de
- 检索词：PDF schützen, PDF Passwort, PDF verschlüsseln
- Title：PDF schützen — im Browser mit Passwort verschlüsseln
- 按钮：Schützen / Download / Beispiel


## 多轮记录（摘要）

| 轮次 | 日期 | 做了什么 | 结果 |
|---|---|---|---|
| 0b 清单前检索覆盖 | 2026-08-08 | 主词回写 H1「Protect PDF — Password-Encrypt in Your Browser」；去掉初稿参数枚举「Protect PDF — User Password, Owner Password, Permissions」；次词落 desc/FAQ；覆盖表写入 02 | 通过；可 ready |
| 1b 母版生成后覆盖 | 2026-08-08 | en 母版 title/desc/FAQ 对齐 protect/password protect pdf；次词 encrypt/unlock/local 落 desc 与 FAQ；去掉权限矩阵目录腔 | 通过 phase=2 |
| 2b 抽查语生成后覆盖 | 2026-08-08 | en,zh,es,ja title 各语检索向独立；隐私句设备+不上服务器；FAQ 强调非军用级、unlock 需密码非破解 | 通过 phase=4 |
