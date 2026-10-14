# 03 — 各语言 Locale Brief + 禁词核查

**工具 slug**：`image-border`  
**母版语言**：en  
**状态**：`i18n-done`  
**YMYL**：否

## 共用禁词 / 禁模式

- [x] title 非参数目录腔（不把 1:1 / 4:5 / 9:16 / 五种填充串进 H1）
- [x] 隐私只作事实陈述（FAQ「是否上传」），不当首要卖点
- [x] 禁「Rules 节 / 见下文公式」等站内自指；禁 doorway / 薄页等元叙述
- [x] 当地说法：zh 图片加边框 / 照片加白边 / 补成正方形 / 拍立得边框；ja 写真 白枠 / 画像 枠 つける / インスタ 正方形 余白；es añadir borde a una foto / marco blanco / foto cuadrada sin recortar；pt colocar borda na foto / moldura branca / foto quadrada sem cortar；fr ajouter un cadre / bordure blanche / photo carrée sans recadrer；de Rahmen um Foto / weißer Rand / Foto quadratisch ohne Zuschneiden；ru рамка для фото / белая рамка / квадратное фото без обрезки；id bingkai foto / border putih / foto persegi tanpa crop；ar إضافة إطار للصورة / حواف بيضاء / صورة مربعة بدون قص
- [x] Example 数字固定各语不得改动：4000 × 3000、3%、90 px、4180 × 3180、4180 × 4180、590 px、4180 × 5225、1080 × 1350、4180 × 3450、360 px；FAQ 3000 × 2000 + 100 px → 3200 × 2200；2–5% / 8–12%；3 mm ≈ 35 px @ 300 dpi；rules 6000 × 4000 × 5% = 200 px；1 / 0.8 / 0.5625；4 倍
- [x] `stats_tpl` 的 `{w}` `{h}` `{ow}` `{oh}` `{t}` `{r}` `{b}` `{l}` `{fmt}` `{bytes}`、`encode_step` 的 `{fmt}`、`elapsed` 的 `{s}` 原样保留
- [x] How / FAQ 中引用的样式、填充、按钮、「More options」名须与该语控件文案一致
- [x] **清单前检索覆盖已做**
- [x] **用户意图审查已做**
- [x] **检索覆盖已优化**
- [x] 十语非同构（FAQ 题序 / Why choose 条序随语种调整）

## 每语 brief

### en
- 检索词：add border to photo；add white border to photo；make photo square without cropping；instagram no crop；polaroid frame
- 语气：口语工具站
- Title：Add a Border to a Photo — White Frame or Square Padding for Instagram Without Cropping
- 按钮：Add border / Download / Load sample / Clear
- 轮次2已重写：[x]  轮次3已抽查：[x]

### zh
- 检索词：图片加边框；照片加白边；图片补成正方形不裁剪；拍立得边框；朋友圈 / Instagram 发图不裁切
- 语气：口语
- Title：图片加边框 — 给照片加白边或补成正方形，不裁切画面也能发 Instagram
- 按钮：添加边框 / 下载 / 加载样例 / 清空
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ja
- 检索词：写真 白枠 つける；画像 枠 付ける；インスタ 正方形 余白；トリミングなし 投稿；ポラロイド風 フレーム
- 语气：です・ます
- Title：写真に白枠をつける — 余白を足して正方形や4:5にし、インスタでも切れない画像に
- 按钮：枠をつける / ダウンロード / サンプルを読み込む / クリア
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ar
- 检索词：إضافة إطار للصورة；حواف بيضاء للصورة；صورة مربعة لإنستغرام بدون قص；إطار بولارويد
- 语气：فصحى مبسطة
- Title：إضافة إطار للصورة — حواف بيضاء أو تحويلها إلى مربع لإنستغرام دون قص
- 按钮：أضف الإطار / تنزيل / تحميل مثال / مسح
- 轮次2已重写：[x]  轮次3已抽查：[x]

### es
- 检索词：añadir borde a una foto；poner marco blanco a una foto；foto cuadrada sin recortar para Instagram；marco polaroid
- 语气：tú
- Title：Añadir borde a una foto — Marco blanco o relleno cuadrado para Instagram sin recortar
- 按钮：Añadir borde / Descargar / Cargar ejemplo / Borrar
- 轮次2已重写：[x]  轮次3已抽查：[x]

### pt
- 检索词：colocar borda na foto；moldura branca na foto；foto quadrada sem cortar para Instagram；moldura polaroid
- 语气：você（pt-BR）
- Title：Colocar borda na foto — Moldura branca ou fundo quadrado para o Instagram sem cortar
- 按钮：Adicionar borda / Baixar / Carregar exemplo / Limpar
- 轮次2已重写：[x]  轮次3已抽查：[x]

### fr
- 检索词：ajouter un cadre à une photo；bordure blanche photo；photo carrée sans recadrer Instagram；cadre polaroid
- 语气：vouvoiement
- Title：Ajouter un cadre à une photo — Bordure blanche ou format carré pour Instagram sans recadrer
- 按钮：Ajouter le cadre / Télécharger / Charger un exemple / Effacer
- 轮次2已重写：[x]  轮次3已抽查：[x]

### de
- 检索词：Rahmen um Foto erstellen；weißer Rand Foto；Foto quadratisch machen ohne Zuschneiden；Polaroid Rahmen
- 语气：Sie-Form
- Title：Rahmen um ein Foto legen — Weißer Rand oder quadratisch für Instagram, ohne zuzuschneiden
- 按钮：Rahmen hinzufügen / Herunterladen / Beispiel laden / Leeren
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ru
- 检索词：добавить рамку к фото онлайн；белая рамка для фото；сделать фото квадратным без обрезки；рамка полароид
- 语气：нейтральный，на «вы»
- Title：Добавить рамку к фото — белые поля или квадрат для Instagram без обрезки
- 按钮：Добавить рамку / Скачать / Загрузить пример / Очистить
- 轮次2已重写：[x]  轮次3已抽查：[x]

### id
- 检索词：tambah bingkai foto online；border putih foto；foto persegi tanpa crop untuk Instagram；bingkai polaroid
- 语气：Anda
- Title：Tambah Bingkai pada Foto — Border Putih atau Jadi Persegi untuk Instagram Tanpa Dipotong
- 按钮：Tambah bingkai / Unduh / Muat contoh / Hapus
- 轮次2已重写：[x]  轮次3已抽查：[x]

## 多轮记录（摘要）

| 轮次 | 日期 | 做了什么 | 结果 |
|---|---|---|---|
| 0b 清单前检索覆盖（改写） | 2026-10-14 | 保留 slug；H1 由「Add Border to Image — Color & Width Online」改为动作 + 白框 + 补成正方形 + 不裁切；02 新增同意图相关搜索全表（white border / square no crop / 4:5 / 9:16 / polaroid / 边框宽度 / 模糊背景 / 圆角双边框 吸；花纹相框模板、裁剪、批量不吸）与意图审查（部分满足→满足） | 02 覆盖表与意图审查已回写 |
| 1b 母版检索覆盖优化（改写） | 2026-10-14 | en title 含 add a border to a photo + white frame + square padding for Instagram；desc 写三种样式与可验证尺寸；no crop → FAQ q3 与 Why choose 1；polaroid → rules 3 与 Use case 4；width → FAQ q4；blur → FAQ q5 | 主词在 H1；次词逐一有落点 |
| 2b 十语检索向重写（改写） | 2026-10-14 | 十语按各语 brief 独立重写；title 用当地说法（图片加边框、写真に白枠、añadir borde、colocar borda、ajouter un cadre、Rahmen、рамка、bingkai、إطار）；Example 数字不变 | 十语键集与 en 一致；抽查 en,zh,es,ja,de,ar |

### 历史

| 轮次 | 日期 | 做了什么 | 结果 |
|---|---|---|---|
| 初版 | 2026-08-09 | 四边等宽 px + 颜色立项 + 十语首稿 | 上线；2026-10-14 审计判定过薄，已重写 |
