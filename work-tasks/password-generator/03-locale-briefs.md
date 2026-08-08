# 03 — 各语言 Locale Brief + 禁词核查

**工具 slug**：`password-generator`  
**母版语言**：en  
**状态**：`i18n-done`

---

## 共用禁词 / 禁模式

- [x] 标准禁词表（实现时勾）
- [x] **清单前检索覆盖已做**（2026-08-08）
- [x] **检索覆盖已优化**（2026-08-08 实现时）

**额外禁用**：勿承诺「不可破解」；勿冒充 1Password/Bitwarden 类密码管理器

---

## 每语 brief

### en
- 检索词：password generator；random password；strong password generator；secure password online；generate password
- 语气：口语工具站
- Title / H1：Random Password Generator — Create Passwords Locally
- 按钮：Generate；Copy；Clear；Load sample；Length；Uppercase；Lowercase；Digits；Symbols；Exclude ambiguous
- 示例：16-char mixed charset
- SERP：Random Password Generator；Strong Password Generator Online

### zh
- 检索词：随机密码生成；密码生成器；强密码生成；在线生成密码；安全密码生成
- Title / H1：随机密码生成 — 在浏览器内创建密码
- 按钮：生成；复制；清空；加载示例；长度；大写；小写；数字；符号；排除易混字符

### es
- 检索词：generador de contraseñas；contraseña aleatoria；contraseña segura；generar contraseña
- Title / H1：Generador de contraseñas aleatorias — opciones locales
- 按钮：Generar；Copiar；Limpiar；Longitud；Mayúsculas；Minúsculas；Dígitos；Símbolos

### ar
- 检索词：مولد كلمات المرور؛ كلمة مرور عشوائية؛ كلمة مرور قوية
- Title / H1：مولد كلمات مرور عشوائية — محلي
- 按钮：توليد؛نسخ؛مسح؛الطول؛أحرف كبيرة؛أرقام
- 待母语抽查：[ ]

### pt
- 检索词：gerador de senha；senha aleatória；senha forte；gerar senha
- Title / H1：Gerador de senhas aleatórias — local
- 按钮：Gerar；Copiar；Limpar；Comprimento；Maiúsculas；Minúsculas；Dígitos；Símbolos

### id
- 检索词：generator password；password acak；password kuat；buat password
- Title / H1：Generator Password Acak — opsi charset, lokal
- 按钮：Generate；Salin；Hapus；Panjang；Huruf besar；Angka；Simbol

### fr
- 检索词：générateur de mot de passe；mot de passe aléatoire；mot de passe fort
- Title / H1：Générateur de mots de passe aléatoires — local
- 按钮：Générer；Copier；Effacer；Longueur；Majuscules；Minuscules；Chiffres；Symboles

### ja
- 检索词：パスワード生成；ランダムパスワード；強力なパスワード；パスワード作成
- Title / H1：ランダムパスワード生成 — 文字種を選んでローカル
- 按钮：生成；コピー；クリア；長さ；大文字；小文字；数字；記号
- 待母语抽查：[ ]

### ru
- 检索词：генератор паролей；случайный пароль；надежный пароль；создать пароль
- Title / H1：Генератор случайных паролей — локально
- 按钮：Сгенерировать；Копировать；Очистить；Длина；Заглавные；Цифры；Символы
- 待母语抽查：[ ]

### de
- 检索词：passwort generator；zufallspasswort；sicheres passwort；passwort erstellen
- Title / H1：Zufalls-Passwort-Generator — Zeichensatz, lokal
- 按钮：Generieren；Kopieren；Leeren；Länge；Großbuchstaben；Kleinbuchstaben；Ziffern；Symbole

---

## 多轮记录（摘要）

> 行 ID 供 coverage:gate 解析。

| 轮次 | 日期 | 做了什么 | 结果 |
|---|---|---|---|
| 0b 清单前检索覆盖 | 2026-08-08 | 安全免责与 H1；主词 password generator→H1；覆盖表写入 02 | 通过；可 ready |
| 1 母版+lint | 2026-08-08 | en 母版 + 10 语分片 + 可见 disclaimer | 完成 |
| 1b 母版检索覆盖优化 | 2026-08-08 | title 改为 Create Passwords Locally；去掉 Charset Options 枚举；主词在 H1 | 通过 |
| 2 按 brief 重写 | 2026-08-08 | 十语独立重写 | 完成 |
| 2b 抽查语检索覆盖优化 | 2026-08-08 | 抽查语 en,zh,es,ja；title 结果向；强度诚实说明落 FAQ | 通过 |
| 3 抽查+禁词 | 2026-08-08 | 页面+catalog+i18n 落地 | i18n-done |
