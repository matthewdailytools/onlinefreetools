# 03 — Locale briefs：brand-color-token-pack

**母版语言**：en  
**状态**：`briefs-ready`

## 共用禁词

- [x] 清单前检索覆盖已做
- [x] **检索覆盖已优化**（步 2+4；抽查 en,zh,es,ja）
- [x] title 非参数枚举腔（写动作 + 色阶/色板结果；HEX/HSL/OKLCH 不进 H1）
- [x] 不拆仅 HEX 转换意图进 title
- [x] title 为动作向（Generate / 生成 / Extraer 同簇写法）

### en
- 检索词：brand color scale generator, color palette generator, 50-950 palette, css color tokens
- Title：Generate Brand Color Scale — 50–950 Palette & CSS Tokens
- 按钮：Generate / Sample / Copy CSS / Copy JSON / Clear

### zh
- 检索词：品牌色色阶生成, 色板生成, 调色板生成器, 50-950 色阶, CSS 变量
- Title：品牌色色阶生成 — 一主色出 50–950 色板与 CSS 变量
- 按钮：生成 / 样例 / 复制 CSS / 复制 JSON / 清空

### es
- 检索词：generar escala de color, paleta de marca, tokens CSS
- Title：Generar escala de color de marca — paleta 50–950 y tokens CSS

### ar
- Title：توليد مقياس ألوان العلامة — لوحة 50–950 ورموز CSS

### pt
- Title：Gerar escala de cor da marca — paleta 50–950 e tokens CSS

### id
- Title：Buat skala warna merek — palet 50–950 & token CSS

### fr
- Title：Générer l’échelle de couleur de marque — palette 50–950 et tokens CSS

### ja
- Title：ブランド色スケールを生成 — 50–950パレットとCSSトークン

### ru
- Title：Сгенерировать шкалу цвета бренда — палитра 50–950 и CSS‑токены

### de
- Title：Markenfarben-Skala erzeugen — 50–950-Palette & CSS-Tokens

## 多轮记录（摘要）

> 行 ID 供 coverage:gate 解析。

| 轮次 | 日期 | 做了什么 | 结果 |
|---|---|---|---|
| 0b 清单前检索覆盖 | 2026-08-08 | 主词 brand color scale / 色阶生成→H1；覆盖表与 SEO 卡片对齐 | 通过；可 ready |
| 1 母版+lint | 2026-08-08 | en 母版与十语落地 | 完成 |
| 1b 母版检索覆盖优化 | 2026-08-08 | title 改为动作+检索主词 Generate；去掉 HEX/HSL/OKLCH 枚举副标题 | 通过 |
| 2 按 brief 重写 | 2026-08-08 | 十语独立重写 | 完成 |
| 2b 抽查语检索覆盖优化 | 2026-08-08 | 抽查语 en,zh,es,ja；次词色空间落 desc | 通过 |
| 3 抽查+禁词+lint | 2026-08-08 | lint:seo | 完成 |
