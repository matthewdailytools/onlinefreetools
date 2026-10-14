# 03 — 各语言 Locale Brief + 禁词核查

**工具 slug**：`how-to-calculate-triangle-area`  
**母版语言**：en  
**状态**：`i18n-done`  
**YMYL**：否

## 共用禁词 / 禁模式

- [x] title 非参数目录腔（H1 只含底高 / 三边两个入口；SAS、坐标进 desc 与选项）
- [x] 隐私：一句即可，不当整节卖点
- [x] 禁「Other modes are not included」「Pair with … tools」「Educational only」等空话与站内自指
- [x] 小数逗号语种（es / pt / fr / de / ru / id）：示例数字用当地小数点（26,8328；8,75；0,5），与结果区 Intl 格式一致
- [x] **清单前检索覆盖已做**
- [x] **用户意图审查已做**
- [x] **检索覆盖已优化**
- [x] 十语非同构（FAQ 题序 / Why choose 条序随语种调整）

## 每语 brief

### en
- 检索词：triangle area calculator；area of a triangle with 3 sides；heron's formula calculator；how to find the area of a triangle；area of right triangle
- Title：Triangle Area Calculator — Base and Height or Three Sides, with Working
- 按钮：Calculate / Load sample / Clear
- 轮次2已重写：[x]  轮次3已抽查：[x]

### zh
- 检索词：三角形面积计算器；三角形面积公式；已知三边求面积；海伦公式；直角三角形面积
- 语气：口语、学生向
- Title：三角形面积计算器 — 用底高或三边长求面积，附计算过程
- 按钮：计算 / 加载样例 / 清空
- 轮次2已重写：[x]  轮次3已抽查：[x]

### es
- 检索词：área de un triángulo；calculadora de área de triángulo；fórmula de Herón；área con tres lados；área de triángulo rectángulo
- Title：Calculadora de área de un triángulo — con base y altura o con los tres lados
- 按钮：Calcular / Cargar ejemplo / Borrar
- 小数逗号：是
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ar
- 检索词：مساحة المثلث；قانون مساحة المثلث；حساب مساحة المثلث بمعلومية أضلاعه；صيغة هيرون；مساحة المثلث القائم
- Title：حساب مساحة المثلث — من القاعدة والارتفاع أو من الأضلاع الثلاثة مع خطوات الحل
- 按钮：احسب / تحميل مثال / مسح
- 数字：拉丁数字 + 小数点 .
- 轮次2已重写：[x]  轮次3已抽查：[x]

### pt
- 检索词：área do triângulo；calcular área do triângulo；fórmula de Heron；área do triângulo com três lados；área do triângulo retângulo
- Title：Calculadora de área do triângulo — pela base e altura ou pelos três lados
- 按钮：Calcular / Carregar exemplo / Limpar
- 小数逗号：是
- 轮次2已重写：[x]  轮次3已抽查：[x]

### id
- 检索词：luas segitiga；rumus luas segitiga；kalkulator luas segitiga；rumus Heron；luas segitiga siku-siku
- Title：Kalkulator Luas Segitiga — dari Alas dan Tinggi atau Tiga Sisi, Lengkap dengan Caranya
- 按钮：Hitung / Muat contoh / Hapus
- 小数逗号：是
- 轮次2已重写：[x]  轮次3已抽查：[x]

### fr
- 检索词：aire d’un triangle；calcul aire triangle；formule de Héron；aire triangle rectangle；aire triangle avec les trois côtés
- Title：Aire d’un triangle — calcul avec base et hauteur ou avec les trois côtés
- 按钮：Calculer / Charger un exemple / Effacer
- 小数逗号：是
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ja
- 检索词：三角形 面積 求め方；三角形の面積 計算；ヘロンの公式；3辺から面積；直角三角形 面積
- Title：三角形の面積の計算 — 底辺と高さ、または3辺から求める（途中式つき）
- 按钮：計算する / サンプルを読み込む / クリア
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ru
- 检索词：площадь треугольника；калькулятор площади треугольника；формула Герона；площадь по трём сторонам；площадь прямоугольного треугольника
- Title：Площадь треугольника — по основанию и высоте или по трём сторонам, с решением
- 按钮：Рассчитать / Загрузить пример / Очистить
- 小数逗号：是
- 轮次2已重写：[x]  轮次3已抽查：[x]

### de
- 检索词：Dreiecksfläche berechnen；Flächeninhalt Dreieck；Satz des Heron；Dreieck Fläche drei Seiten；rechtwinkliges Dreieck Fläche
- Title：Dreiecksfläche berechnen — mit Grundseite und Höhe oder drei Seiten, mit Rechenweg
- 按钮：Berechnen / Beispiel laden / Leeren
- 小数逗号：是
- 轮次2已重写：[x]  轮次3已抽查：[x]

## 多轮记录（摘要）

| 轮次 | 日期 | 做了什么 | 结果 |
|---|---|---|---|
| 0b 清单前检索覆盖（改写） | 2026-10-13 | 保留 slug；H1 加「Base and Height or Three Sides, with Working」；02 新增同意图全表（三边/海伦、SAS、坐标、直角、等边、高的位置、三角不等式吸；周长/角度/斜边不吸）与意图审查（部分满足→满足） | 02 覆盖表与意图审查已回写 |
| 1b 母版检索覆盖优化（改写） | 2026-10-13 | en title 含 triangle area calculator + three sides；desc 写全四种方法；heron → FAQ q2；right triangle → FAQ q4；equilateral → FAQ q7；高在形外 → Formula 1 + FAQ q3 | 主词在 H1；次词逐一有落点 |
| 2b 十语检索向重写（改写） | 2026-10-13 | en / zh / es / ja / ar / pt / id / fr / ru / de 按各语 brief 独立重写：当地主词入 title（三角形面积计算器 / área de un triángulo / 三角形の面積 / Dreiecksfläche berechnen 等）；海伦公式按当地名称（Herón / Heron / ヘロンの公式 / Satz des Heron / формула Герона）；小数逗号语种示例用当地小数点；FAQ 与 Why choose 条序随语种调整 | 十语键集与 en 一致；示例数字与 Intl 输出一致 |

### 历史（2026-08-09 初版）

| 轮次 | 日期 | 做了什么 | 结果 |
|---|---|---|---|
| 初版 0b–3 | 2026-08-09 | 十语首稿 + lint，单一底×高模式 | 上线；2026-10-13 审计判定过薄，已重写 |
