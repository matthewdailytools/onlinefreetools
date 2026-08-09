# 03 — 各语言 Locale Brief + 禁词核查

**工具 slug**：`core-web-vitals-checker`  
**母版语言**：en  
**状态**：`i18n-done`

## 共用禁词 / 禁模式（发布前勾选）

- [x] 无 granularity 等造词
- [x] 无错义借译
- [x] 无残缺缩写
- [x] 场景标题非空壳英借
- [x] title/H1 非参数枚举目录腔
- [x] 隐私句说清设备 + 不上服务器
- [x] 十语非同一句式骨架
- [x] 未依赖英文回退
- [x] 未脚本同构灌语；无待母语抽查
- [x] **清单前检索覆盖已做**
- [x] **检索覆盖已优化**（定稿时勾）

技术专名 LCP / INP / CLS / FID / p75 / Core Web Vitals 可保留。

---

## 多轮记录

| 轮次 | 日期 | 做了什么 | 结果 |
|---|---|---|---|
| 0b 清单前检索覆盖 | 2026-08-09 | slug 保留 core-web-vitals-checker；H1「Core Web Vitals Checker — Grade your page-experience scores」；次词 performance metrics / thresholds / Clarity / improve LCP 落入 desc·FAQ·Rules·Use cases；禁拆 LCP/INP/CLS 薄页。 | 通过；可 ready |
| 1b 母版覆盖 | 2026-08-09 | en 母版落地后复核：主词 Core Web Vitals Checker 在 H1；次词 Performance metrics / Clarity / thresholds / improve 落入 description、Rules、FAQ、Use cases；去参数枚举。 | 通过；可 phase=2 |
| 2b 抽查语覆盖 | 2026-08-09 | 抽查 en,zh,es,ja：各语按当地检索词重跑 title/desc；zh「Core Web Vitals 检测」、es「Comprobar」、ja「チェッカー」；次词落点在 FAQ/Rules；无英模同构骨架。 | 通过；可 phase=4 |

---

### en

- 检索词：core web vitals checker；LCP INP CLS；performance metrics；page experience；improve LCP
- 语气：口语工具站偏开发者
- Title / H1：Core Web Vitals Checker — Grade your page-experience scores
- 按钮：Grade metrics / Load sample / Clear
- 可保留：LCP, INP, CLS, FID, p75, Clarity
- SERP：PageSpeed Insights；web.dev vitals；Clarity docs
- 轮次2已重写：[x]  轮次3已抽查：[x]

### zh

- 检索词：Core Web Vitals 检测；LCP INP CLS 标准；网页性能指标；页面体验；改善 LCP
- 语气：口语工具站
- Title / H1：Core Web Vitals 检测 — 给页面体验分数评级
- 按钮：开始评级 / 加载样例 / 清空
- 可保留：LCP, INP, CLS, Clarity
- 轮次2已重写：[x]  轮次3已抽查：[x]

### es

- 检索词：comprobar core web vitals；umbrales LCP INP CLS；métricas de rendimiento；experiencia de página
- Title / H1：Comprobar Core Web Vitals — Califica LCP, INP y CLS
- 按钮：Calificar / Ejemplo / Limpiar
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ar

- 检索词：فحص Core Web Vitals；عتبات LCP INP CLS；مقاييس الأداء
- Title / H1：فاحص Core Web Vitals — تقييم LCP وINP وCLS
- 按钮：قيّم / مثال / مسح
- 轮次2已重写：[x]  轮次3已抽查：[x]
- 

### pt

- 检索词：verificar core web vitals；limites LCP INP CLS；métricas de desempenho
- Title / H1：Verificar Core Web Vitals — Classifique LCP, INP e CLS
- 按钮：Classificar / Exemplo / Limpar
- 轮次2已重写：[x]  轮次3已抽查：[x]

### id

- 检索词：cek core web vitals；ambang LCP INP CLS；metrik performa
- Title / H1：Pemeriksa Core Web Vitals — Nilai LCP, INP & CLS
- 按钮：Nilai / Contoh / Bersihkan
- 轮次2已重写：[x]  轮次3已抽查：[x]

### fr

- 检索词：vérifier core web vitals；seuils LCP INP CLS；métriques de performance
- Title / H1：Vérifier les Core Web Vitals — Noter LCP, INP et CLS
- 按钮：Noter / Exemple / Effacer
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ja

- 检索词：Core Web Vitals チェッカー；LCP INP CLS しきい値；パフォーマンス指標
- Title / H1：Core Web Vitals チェッカー — LCP・INP・CLS を判定
- ボタン：判定する / サンプル / クリア
- 轮次2已重写：[x]  轮次3已抽查：[x]
- 

### ru

- 检索词：проверка Core Web Vitals；пороги LCP INP CLS；метрики производительности
- Title / H1：Проверка Core Web Vitals — оценка LCP, INP и CLS
- 按钮：Оценить / Пример / Очистить
- 轮次2已重写：[x]  轮次3已抽查：[x]
- 

### de

- 检索词：Core Web Vitals prüfen；LCP INP CLS Schwellen；Performance-Metriken
- Title / H1：Core Web Vitals prüfen — LCP, INP & CLS bewerten
- 按钮：Bewerten / Beispiel / Leeren
- 轮次2已重写：[x]  轮次3已抽查：[x]
