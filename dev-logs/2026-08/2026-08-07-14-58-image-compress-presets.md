Date: 2026-08-07 14:58
Summary: Added common dimension and target-KB presets to image-compress UI.

[question]
http://localhost:8787/zh/tools/image-compress 增加常用压缩到尺寸和大小）选项

[try to solve]
在图片压缩页增加「常用预设」下拉：

- **场景组合**：网页高清 1920；网页轻量 1280+200KB；邮件 1280+100KB；社交 1080+150KB；表单 1600+300KB；缩略 800+50KB；小头像 512+30KB（同时设边长/目标体积/质量）
- **仅最长边**：1920 / 1280 / 1200 / 1080 / 800 / 640
- **仅目标体积**：500 / 200 / 100 / 50 / 30 KB

选中后写入控件；已有源图则自动再压缩。手动改参数会清空预设选择。十语 UI 文案已补。

[actions]
- Updated `src/pages/imageCompressPage.ts`
- Updated `src/site/i18n/{en,zh,es,pt,id,fr,ja,ru,de,ar}.ts`
- Ran `npm run lint:seo`
