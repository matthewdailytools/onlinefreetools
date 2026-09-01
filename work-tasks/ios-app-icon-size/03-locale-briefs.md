# 03 — 各语言 Locale Brief + 禁词核查

**工具 slug**：`ios-app-icon-size`  
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

技术专名：iOS、App Store、PNG、1024×1024。  
**额外禁用**：H1 禁止 App icon generator / icon pack；不承诺 xcassets 工程。

---

## 每语 brief

### en
- 检索词（3–5）：iOS app icon size；1024×1024 app icon；iPhone app icon size；iPad app icon 167；Play icon 512
- 语气：口语工具站
- Title / H1 方向：iOS app icon size
- 按钮短词：Choose logo；Load sample；Download PNG；Download ZIP；Clear
- 本地示例用词：1024×1024 opaque PNG
- 可保留英文/符号：iOS、App Store、PNG
- 额外禁用：Do not H1 “App icon generator”.
- SERP 竞品 title（1–3）：App Icon Generator；MakeAppIcon
- 轮次2已重写：[ ]  轮次3已抽查：[ ]

### zh
- 检索词（3–5）：iOS 应用图标尺寸；App Store 1024 图标；iPhone 图标 180；iPad 图标；应用图标大小
- 语气：口语工具站
- Title / H1 方向：iOS 应用图标尺寸
- 按钮短词：选择标志；加载示例；下载 PNG；下载 ZIP；清空
- 本地示例用词：1024×1024 不透明 PNG
- 可保留英文/符号：iOS、App Store、PNG
- 额外禁用：H1 不要写「图标生成器」；隐私须留在设备且不上传服务器
- SERP 竞品 title（1–3）：App 图标在线生成
- 轮次2已重写：[ ]  轮次3已抽查：[ ]

### es
- 检索词（3–5）：tamaño icono app iOS；icono 1024 App Store；icono iPhone；icono iPad
- 语气：口语工具站
- Title / H1 方向：tamaño icono app iOS
- 按钮短词：Elegir logo；Cargar ejemplo；Descargar PNG；Limpiar
- 本地示例用词：1024×1024
- 可保留英文/符号：iOS、App Store
- 额外禁用：No usar solo “local”; decir que no se sube al servidor
- SERP 竞品 title（1–3）：generador de iconos de app
- 轮次2已重写：[ ]  轮次3已抽查：[ ]

### ar
- 检索词（3–5）：حجم أيقونة تطبيق iOS；أيقونة 1024؛ أيقونة آيفون
- 语气：口语工具站
- Title / H1 方向：حجم أيقونة تطبيق iOS
- 按钮短词：اختر شعارًا；حمّل مثالًا；نزّل PNG；مسح
- 本地示例用词：1024×1024
- 可保留英文/符号：iOS
- 额外禁用：وضح أن الملفات تبقى على الجهاز دون رفع
- SERP 竞品 title（1–3）：مولد أيقونات التطبيقات
- 轮次2已重写：[ ]  轮次3已抽查：[ ]  待母语抽查：[ ]

### pt
- 检索词（3–5）：tamanho ícone app iOS；ícone 1024 App Store；ícone iPhone
- 语气：口语工具站
- Title / H1 方向：tamanho ícone app iOS
- 按钮短词：Escolher logo；Carregar exemplo；Baixar PNG；Limpar
- 本地示例用词：1024×1024
- 可保留英文/符号：iOS、App Store
- 额外禁用：Dizer que fica no dispositivo e não sobe ao servidor
- SERP 竞品 title（1–3）：gerador de ícone de app
- 轮次2已重写：[ ]  轮次3已抽查：[ ]

### id
- 检索词（3–5）：ukuran ikon aplikasi iOS；ikon App Store 1024；ikon iPhone
- 语气：口语工具站
- Title / H1 方向：ukuran ikon aplikasi iOS
- 按钮短词：Pilih logo；Muat contoh；Unduh PNG；Hapus
- 本地示例用词：1024×1024
- 可保留英文/符号：iOS
- 额外禁用：Tulis tetap di perangkat, tidak diunggah
- SERP 竞品 title（1–3）：generator ikon app
- 轮次2已重写：[ ]  轮次3已抽查：[ ]

### fr
- 检索词（3–5）：taille icône app iOS；icône 1024 App Store；icône iPhone
- 语气：口语工具站
- Title / H1 方向：taille icône app iOS
- 按钮短词：Choisir le logo；Charger l’exemple；Télécharger PNG；Effacer
- 本地示例用词：1024×1024
- 可保留英文/符号：iOS、App Store
- 额外禁用：Dire « sur l’appareil » et « pas envoyé au serveur »
- SERP 竞品 title（1–3）：générateur d’icône d’app
- 轮次2已重写：[ ]  轮次3已抽查：[ ]

### ja
- 检索词（3–5）：iOSアプリアイコンサイズ；App Store 1024 アイコン；iPhone アイコン 180
- 语气：口语工具站
- Title / H1 方向：iOSアプリアイコンサイズ
- 按钮短词：ロゴを選ぶ；サンプル読込；PNGを保存；ZIPを保存；クリア
- 本地示例用词：1024×1024 不透明 PNG
- 可保留英文/符号：iOS、App Store
- 额外禁用：H1 に「アイコンジェネレーター」を置かない；端末内・サーバー非送信
- SERP 竞品 title（1–3）：アプリアイコン作成
- 轮次2已重写：[ ]  轮次3已抽查：[ ]  待母语抽查：[ ]

### ru
- 检索词（3–5）：размер иконки iOS приложения；иконка App Store 1024；иконка iPhone
- 语气：口语工具站
- Title / H1 方向：размер иконки iOS приложения
- 按钮短词：Выбрать логотип；Загрузить пример；Скачать PNG；Очистить
- 本地示例用词：1024×1024
- 可保留英文/符号：iOS、App Store
- 额外禁用：Файлы остаются на устройстве, на сервер не отправляются
- SERP 竞品 title（1–3）：генератор иконок приложений
- 轮次2已重写：[ ]  轮次3已抽查：[ ]  待母语抽查：[ ]

### de
- 检索词（3–5）：iOS App Icon Größe；App-Store-Icon 1024；iPhone App Icon
- 语气：口语工具站
- Title / H1 方向：iOS App Icon Größe
- 按钮短词：Logo wählen；Beispiel laden；PNG speichern；ZIP speichern；Leeren
- 本地示例用词：1024×1024
- 可保留英文/符号：iOS、App Store
- 额外禁用：Bleibt auf dem Gerät, wird nicht hochgeladen
- SERP 竞品 title（1–3）：App-Icon-Generator
- 轮次2已重写：[ ]  轮次3已抽查：[ ]

---

## 多轮记录（摘要）

| 轮次 | 日期 | 做了什么 | 结果 |
|---|---|---|---|
| 0b 清单前检索覆盖 | 2026-09-01 | 对照场景句与商店提交任务：slug 保留 ios-app-icon-size；H1 锁定 iOS app icon size；1024/180/167/Play 写入 desc·FAQ·芯片 | 覆盖表已回写 02；意图总判满足；Play 不拆 URL |
| 1 母版+lint | 2026-09-01 | 写入 en 全键：H1 iOS app icon size；How 四步；FAQ 五条 | 母版 title 非参数枚举；desc 含 1024 与设备隐私 |
| 1b 母版检索覆盖优化 | 2026-09-01 | 再扫 title/desc：主词落 H1；1024/180/167/Play 在 desc·FAQ·usecase；去掉 generator pack | H1 保持 iOS app icon size；次词均有落点 |
| 2 按 brief 重写 | 2026-09-01 | 按当地搜法重写 zh/es/ar/pt/id/fr/ja/ru/de；各语 H1 用该语检索句 | 十语非同构；隐私均写设备+不上传 |
| 2b 抽查语检索覆盖优化 | 2026-09-01 | 再扫 en,zh,es,ja 的 title/desc：主词进 H1；1024 与隐私进 desc；Play 仅 FAQ/芯片 | en,zh,es,ja 均无参数枚举 H1；次词有落点 |
| 3 抽查+禁词+lint | 2026-09-01 | 禁词表全扫；抽查 en/zh/es/ja；ar/ja/ru 未留待母语抽查 | 无 generator pack H1；无含糊 local |
