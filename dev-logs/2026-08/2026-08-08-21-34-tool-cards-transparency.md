Date: 2026-08-08 21:34
Summary: Make home tool entry cards semi-transparent with light backdrop blur.

[question]
工具卡片增加透明度

[try to solve]
Tool entry cards use ~72% surface opacity plus light `backdrop-filter`; border uses brand tint; hover raises opacity to ~88% for readability. Ran `build:site`.

[actions]
- public/styles/site.css (.card.tool-entry-card)
- npm run build:site
