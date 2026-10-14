# 03 — 各语言 Locale Brief + 禁词核查

**工具 slug**：`image-to-base64`  
**母版语言**：en  
**状态**：`i18n-done`  
**YMYL**：否

## 共用禁词 / 禁模式

- [x] title 非参数目录腔；How 动词与按钮同词（Encode / Decode / Copy / Download）
- [x] 禁空场景；须写 HTML 嵌入 / API 字段 / 邮件 payload 等
- [x] 明确本地、data URL vs raw、默认 MIME
- [x] 占位符：`{mime}` `{chars}` `{bytes}` `{s}`
- [x] **清单前检索覆盖已做**
- [x] **用户意图审查已做**
- [x] **检索覆盖已优化**
- [x] 十语非同构

## 每语 brief

### en
- Title：Image to Base64 Converter — Encode & Decode Locally
- 按钮：Encode / Decode / Copy / Download / Load sample / Clear
- 轮次2已重写：[x]  轮次3已抽查：[x]

### zh
- 检索词：图片转Base64；Base64转图片；data URL
- Title：图片转 Base64 — 本地编码与解码
- 按钮：编码 / 解码 / 复制 / 下载 / 加载样例 / 清空
- 轮次2已重写：[x]  轮次3已抽查：[x]

### es
- 检索词：imagen a base64；base64 a imagen
- Title：Imagen a Base64 — codificar y decodificar en local
- 按钮：Codificar / Decodificar / Copiar / Descargar / Cargar ejemplo / Borrar
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ar
- 检索词：تحويل صورة إلى Base64
- Title：صورة إلى Base64 — ترميز وفك محليًا
- 按钮：ترميز / فك الترميز / نسخ / تنزيل / تحميل مثال / مسح
- 轮次2已重写：[x]  轮次3已抽查：[x]

### pt
- 检索词：imagem para base64；base64 para imagem
- Title：Imagem para Base64 — codificar e decodificar localmente
- 按钮：Codificar / Decodificar / Copiar / Baixar / Carregar exemplo / Limpar
- 轮次2已重写：[x]  轮次3已抽查：[x]

### id
- 检索词：gambar ke base64；base64 ke gambar
- Title：Gambar ke Base64 — encode & decode lokal
- 按钮：Encode / Decode / Salin / Unduh / Muat contoh / Hapus
- 轮次2已重写：[x]  轮次3已抽查：[x]

### fr
- 检索词：image en base64；base64 vers image
- Title：Image en Base64 — encoder et décoder en local
- 按钮：Encoder / Décoder / Copier / Télécharger / Charger un exemple / Effacer
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ja
- 检索词：画像 Base64；Base64 画像 変換
- Title：画像を Base64 に変換 — ローカルでエンコード／デコード
- 按钮：エンコード / デコード / コピー / ダウンロード / サンプルを読み込む / クリア
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ru
- 检索词：изображение в base64；base64 в картинку
- Title：Изображение в Base64 — кодирование и декодирование локально
- 按钮：Кодировать / Декодировать / Копировать / Скачать / Загрузить пример / Очистить
- 轮次2已重写：[x]  轮次3已抽查：[x]

### de
- 检索词：Bild zu Base64；Base64 zu Bild
- Title：Bild zu Base64 — lokal kodieren und dekodieren
- 按钮：Kodieren / Dekodieren / Kopieren / Herunterladen / Beispiel laden / Leeren
- 轮次2已重写：[x]  轮次3已抽查：[x]

## 多轮记录（摘要）

| 轮次 | 日期 | 做了什么 | 结果 |
|---|---|---|---|
| 0b 清单前检索覆盖（改写） | 2026-10-14 | 保留 slug；Encode 主按钮；decode 同页 absorb | 已回写 |
| 1b 母版检索覆盖优化（改写） | 2026-10-14 | Advanced；HUD；FAQ×7；stats；Clear 不重载 | 主词在 H1 |
| 2b 十语检索向重写（改写） | 2026-10-14 | en/zh/es/ja/ar/pt/id/fr/ru/de 按当地「图片转 Base64」说法独立重写 | 键集与 en 一致 |
