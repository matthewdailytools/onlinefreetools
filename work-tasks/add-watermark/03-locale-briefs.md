# 03 — 各语言 Locale Brief + 禁词核查

> 规则见 `.cursor/rules/tool-i18n-localization.mdc`。

**工具 slug**：`add-watermark`  
**母版语言**：en  
**状态**：`i18n-done`

---

## 共用禁词 / 禁模式（发布前勾选）

- [x] 无造词 / 错义借译 / 残缺缩写（JPEG、PNG、WebP、EXIF、GPS、HEIC 保留）
- [x] 场景标题非空壳英借
- [x] title/H1 非参数枚举目录腔（不把透明度 / 角度 / 字体 / 格式等控件串进 H1）
- [x] 十语非同一句式骨架
- [x] 未依赖英文回退冒充缺语种
- [x] 未脚本同构灌语；待母语抽查已清
- [x] **清单前检索覆盖已做**
- [x] **用户意图审查已做**
- [x] **检索覆盖已优化**

**本工具额外禁用**：勿暗示上传到服务器；勿承诺水印「无法去除」；勿给出法律意见（版权说明只引 Circular 3 与伯尔尼公约的事实）；勿承诺 Logo 图片 / 批量 / PDF 水印（Related 划界）；样例署名 `sample_text` 各语用当地常见姓名，格式固定为「© 2026 + 姓名」，Example 中引用同一字符串。

---

## 每语 brief

### en
- 检索词：add watermark to photo；watermark image online free；copyright watermark；tiled watermark
- 语气：口语工具站
- Title：Add Watermark to Photo — Put Your Name or © on a Picture, in One Corner or Tiled
- 按钮：Add watermark / Download image / Load sample；样例署名：© 2026 Alex Rivera
- 轮次2已重写：[x]  轮次3已抽查：[x]

### zh
- 检索词：照片加水印；图片加水印 在线；加文字水印；版权水印；全屏水印 / 平铺水印；身份证加水印
- 语气：口语工具站
- Title：照片加水印 — 把名字或版权标志放在角落，或斜着铺满整张图
- 按钮：添加水印 / 下载图片 / 加载样例；样例署名：© 2026 林小雨
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ja
- 检索词：写真 透かし 入れる；画像 ウォーターマーク 入れ方；著作権表示 ©；透かし 全体 繰り返し
- 语气：です・ます
- Title：写真に透かしを入れる — 名前や©を隅に置くか、全体に繰り返し配置
- 按钮：透かしを入れる / 画像をダウンロード / サンプルを読み込む；样例署名：© 2026 佐藤 美咲
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ar
- 检索词：إضافة علامة مائية على الصور；وضع اسم على الصورة；علامة حقوق النشر ©
- 语气：فصحى مبسطة
- Title：إضافة علامة مائية إلى صورة — ضع اسمك أو رمز © في زاوية أو كرّره على الصورة كلها
- 按钮：إضافة العلامة المائية / تنزيل الصورة / تحميل مثال；样例署名：© 2026 سارة أحمد
- 轮次2已重写：[x]  轮次3已抽查：[x]

### es
- 检索词：poner marca de agua a una foto；marca de agua online gratis；marca de agua con copyright
- 语气：tú
- Title：Poner marca de agua a una foto — Añade tu nombre o © en una esquina o en mosaico
- 按钮：Añadir marca de agua / Descargar imagen / Cargar ejemplo；样例署名：© 2026 Lucía Martín
- 轮次2已重写：[x]  轮次3已抽查：[x]

### pt
- 检索词：colocar marca d’água em foto；marca d’água online grátis；marca d’água com direitos autorais
- 语气：você（pt-BR）
- Title：Colocar marca d’água em foto — Coloque seu nome ou © no canto ou repetido pela imagem
- 按钮：Adicionar marca d’água / Baixar imagem / Carregar exemplo；样例署名：© 2026 Ana Souza
- 轮次2已重写：[x]  轮次3已抽查：[x]

### fr
- 检索词：ajouter un filigrane à une photo；mettre un filigrane sur une image；filigrane copyright
- 语气：vouvoiement
- Title：Ajouter un filigrane à une photo — Votre nom ou © dans un coin ou répété sur toute l’image
- 按钮：Ajouter le filigrane / Télécharger l’image / Charger l’exemple；样例署名：© 2026 Camille Laurent
- 轮次2已重写：[x]  轮次3已抽查：[x]

### de
- 检索词：Wasserzeichen in Foto einfügen；Bild mit Wasserzeichen versehen；Copyright-Wasserzeichen
- 语气：Sie-Form
- Title：Wasserzeichen in Foto einfügen — Namen oder © in eine Ecke setzen oder über das ganze Bild wiederholen
- 按钮：Wasserzeichen einfügen / Bild herunterladen / Beispiel laden；样例署名：© 2026 Lena Fischer
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ru
- 检索词：добавить водяной знак на фото；наложить водяной знак онлайн；копирайт на фото
- 语气：нейтральный，на «вы»
- Title：Добавить водяной знак на фото — имя или © в углу либо по всему снимку
- 按钮：Добавить водяной знак / Скачать изображение / Загрузить пример；样例署名：© 2026 Анна Смирнова
- 轮次2已重写：[x]  轮次3已抽查：[x]

### id
- 检索词：tambah watermark di foto；cara memberi watermark foto online；watermark hak cipta
- 语气：Anda
- Title：Tambahkan Watermark ke Foto — Taruh Nama atau © di Pojok atau Ulangi di Seluruh Gambar
- 按钮：Tambahkan watermark / Unduh gambar / Muat contoh；样例署名：© 2026 Dewi Lestari
- 轮次2已重写：[x]  轮次3已抽查：[x]

---

## 多轮记录（摘要）

| 轮次 | 日期 | 做了什么 | 结果 |
|---|---|---|---|
| 0b 清单前检索覆盖（改写） | 2026-10-14 | 保留 slug；H1 由「Local Browser Tool」改为任务句 + 角落 / 平铺；02 同意图搜索全表（copyright ©、tiled、不易去除、大图水印太小、证件照、免费吸；Logo / 批量 / PDF / 去水印不吸）与意图审查（部分满足→满足） | 02 覆盖表与意图审查已回写 |
| 1b 母版检索覆盖优化（改写） | 2026-10-14 | en title 含 add watermark to photo + name / © + corner / tiled；desc 写 steps + example；相对大小 / 平铺 / © / 证件照 / GPS 分别落到 Why choose、FAQ q2–q7、Use cases | 主词在 H1；次词逐一有落点 |
| 2b 十语检索向重写（改写） | 2026-10-14 | 十语按各语 brief 独立重写；title 用当地说法（照片加水印、写真に透かしを入れる、poner marca de agua a una foto、Wasserzeichen in Foto einfügen 等）；样例署名换成当地姓名；FAQ 顺序各语不同 | 十语键集与 en 一致；抽查 en,zh,es,ja,de,ar |

### 历史

| 轮次 | 日期 | 做了什么 | 结果 |
|---|---|---|---|
| 初版 | 2026-08-09 | 单图文字水印立项 + 十语首稿 | 上线；2026-10-14 审计判定过薄，已重写 |
