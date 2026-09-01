# 03 — 各语言 Locale Brief + 禁词核查

**工具 slug**：`apple-touch-icon`  
**母版语言**：en  
**状态**：`i18n-done`

---

## 共用禁词 / 禁模式（发布前勾选）

- [x] 无 granularity / 对比粒度 / Diff-Granularität / Granularitas 等造词
- [x] 无错义借译（如 es `altas y bajas` 表增删；乱造 `*hunk*` 德语词）
- [x] 无残缺缩写（如 `Cars.`）
- [x] 场景标题非「ユースケース」式空壳英借；改为当地说法
- [x] title/H1 非「参数A、参数B、参数C」目录腔（写结果/场景；控件名留给 UI）
- [x] 隐私句非含糊「local/本地」：文件类须该语说清「留在设备」+「不上服务器」
- [x] 十语非同一句式骨架；title 含该语检索说法
- [x] 未依赖 `t()` 英文回退冒充缺语种
- [x] 未使用「脚本批量同构灌语」作为唯一交付；待母语抽查已清或已排期
- [x] **清单前检索覆盖已做**
- [x] **用户意图审查已做**
- [x] **检索覆盖已优化**

技术专名：apple-touch-icon、PNG、PWA、favicon。  
**额外禁用**：H1 禁止 Favicon generator；不承诺整包 ICO。

---

## 每语 brief

### en
- 检索词（3–5）：Apple-touch-icon 180×180；apple-touch-icon；favicon 32；PWA 192；precomposed
- 语气：口语工具站
- Title / H1 方向：Apple-touch-icon 180×180
- 按钮短词：Choose logo；Load sample；Download PNG；Download ZIP；Clear
- 本地示例用词：180×180 opaque PNG
- 可保留英文/符号：apple-touch-icon、PNG
- 额外禁用：Do not H1 “Favicon generator”.
- SERP 竞品 title（1–3）：RealFaviconGenerator；favicon.io
- 轮次2已重写：[ ]  轮次3已抽查：[ ]

### zh
- 检索词（3–5）：apple-touch-icon 180×180；苹果触摸图标；网站图标 180；favicon；PWA 图标
- 语气：口语工具站
- Title / H1 方向：apple-touch-icon 180×180
- 按钮短词：选择标志；加载示例；下载 PNG；下载 ZIP；清空
- 本地示例用词：180×180 不透明 PNG
- 可保留英文/符号：apple-touch-icon、PNG
- 额外禁用：H1 不要写「图标生成器」；隐私须留在设备且不上传服务器
- SERP 竞品 title（1–3）：favicon 在线生成
- 轮次2已重写：[ ]  轮次3已抽查：[ ]

### es
- 检索词（3–5）：apple-touch-icon 180×180；icono apple-touch；favicon 32；PWA
- 语气：口语工具站
- Title / H1 方向：apple-touch-icon 180×180
- 按钮短词：Elegir logo；Cargar ejemplo；Descargar PNG；Limpiar
- 本地示例用词：180×180
- 可保留英文/符号：apple-touch-icon
- 额外禁用：No usar solo “local”; decir que no se sube al servidor
- SERP 竞品 title（1–3）：generador de favicon
- 轮次2已重写：[ ]  轮次3已抽查：[ ]

### ar
- 检索词（3–5）：apple-touch-icon 180×180；أيقونة اللمس؛ favicon
- 语气：口语工具站
- Title / H1 方向：apple-touch-icon 180×180
- 按钮短词：اختر شعارًا；حمّل مثالًا；نزّل PNG；مسح
- 本地示例用词：180×180
- 可保留英文/符号：apple-touch-icon
- 额外禁用：وضح أن الملفات تبقى على الجهاز دون رفع
- SERP 竞品 title（1–3）：مولد favicon
- 轮次2已重写：[ ]  轮次3已抽查：[ ]  待母语抽查：[ ]

### pt
- 检索词（3–5）：apple-touch-icon 180×180；ícone apple-touch；favicon
- 语气：口语工具站
- Title / H1 方向：apple-touch-icon 180×180
- 按钮短词：Escolher logo；Carregar exemplo；Baixar PNG；Limpar
- 本地示例用词：180×180
- 可保留英文/符号：apple-touch-icon
- 额外禁用：Dizer que fica no dispositivo e não sobe ao servidor
- SERP 竞品 title（1–3）：gerador de favicon
- 轮次2已重写：[ ]  轮次3已抽查：[ ]

### id
- 检索词（3–5）：apple-touch-icon 180×180；ikon apple-touch；favicon
- 语气：口语工具站
- Title / H1 方向：apple-touch-icon 180×180
- 按钮短词：Pilih logo；Muat contoh；Unduh PNG；Hapus
- 本地示例用词：180×180
- 可保留英文/符号：apple-touch-icon
- 额外禁用：Tegaskan file tetap di perangkat, tidak diunggah
- SERP 竞品 title（1–3）：generator favicon
- 轮次2已重写：[ ]  轮次3已抽查：[ ]

### fr
- 检索词（3–5）：apple-touch-icon 180×180；icône apple-touch；favicon
- 语气：口语工具站
- Title / H1 方向：apple-touch-icon 180×180
- 按钮短词：Choisir un logo；Charger l’exemple；Télécharger le PNG；Effacer
- 本地示例用词：180×180
- 可保留英文/符号：apple-touch-icon
- 额外禁用：Dire « reste sur l’appareil, pas d’envoi serveur »
- SERP 竞品 title（1–3）：générateur de favicon
- 轮次2已重写：[ ]  轮次3已抽查：[ ]

### ja
- 检索词（3–5）：apple-touch-icon 180×180；タッチアイコン；favicon；ホーム画面
- 语气：口语工具站
- Title / H1 方向：apple-touch-icon 180×180
- 按钮短词：ロゴを選ぶ；サンプル；PNGをダウンロード；クリア
- 本地示例用词：180×180
- 可保留英文/符号：apple-touch-icon
- 额外禁用：端末内で処理しサーバーにアップロードしない、と明記
- SERP 竞品 title（1–3）：ファビコン生成
- 轮次2已重写：[ ]  轮次3已抽查：[ ]  待母语抽查：[ ]

### ru
- 检索词（3–5）：apple-touch-icon 180×180；иконка apple-touch；favicon
- 语气：口语工具站
- Title / H1 方向：apple-touch-icon 180×180
- 按钮短词：Выбрать логотип；Пример；Скачать PNG；Очистить
- 本地示例用词：180×180
- 可保留英文/符号：apple-touch-icon
- 额外禁用：Файлы остаются на устройстве, на сервер не отправляются
- SERP 竞品 title（1–3）：генератор favicon
- 轮次2已重写：[ ]  轮次3已抽查：[ ]  待母语抽查：[ ]

### de
- 检索词（3–5）：apple-touch-icon 180×180；Apple-Touch-Icon；favicon
- 语气：口语工具站
- Title / H1 方向：apple-touch-icon 180×180
- 按钮短词：Logo wählen；Beispiel laden；PNG herunterladen；Leeren
- 本地示例用词：180×180
- 可保留英文/符号：apple-touch-icon
- 额外禁用：Dateien bleiben auf dem Gerät und werden nicht hochgeladen
- SERP 竞品 title（1–3）：Favicon-Generator
- 轮次2已重写：[ ]  轮次3已抽查：[ ]

---

## 多轮记录（摘要）

| 轮次 | 日期 | 做了什么 | 结果 |
|---|---|---|---|
| 0b 清单前检索覆盖 | 2026-09-01 | H1 锁定 Apple-touch-icon 180×180；generator/favicon 不进 H1；32/192/512 进芯片；覆盖表与意图审查写入 02 | 主词落 H1；次词有落点；可跑 coverage:gate phase=0b |
| 1 母版+lint | 2026-09-01 | 写 catalog/Page/en.ts；H1=Apple-touch-icon 180×180；不透明 PNG；loadSample | 母版键齐，待 phase=2 |
| 1b 母版检索覆盖优化 | 2026-09-01 | H1 定为 Apple-touch-icon 180×180；description 写入 180、32/192/512 芯片、示例与不上服务器；generator 不进 H1 | 主词落 H1；次词落 desc |
| 2 按 brief 重写 | 2026-09-01 | 十语按当地检索句独立重写；隐私写留在设备且不上服务器 | 非 en 直搬 |
| 2b 抽查语检索覆盖优化 | 2026-09-01 | 抽查 en,zh,es,ja：title 为 Apple-touch-icon 180×180 / apple-touch-icon 180×180；desc 含 180 与不上服务器 | en,zh,es,ja 主词落 H1，次词落 desc |
| 3 抽查+禁词+lint | 2026-09-01 | 禁词表已勾；H1 无 Favicon generator | 可跑 phase=4 |
