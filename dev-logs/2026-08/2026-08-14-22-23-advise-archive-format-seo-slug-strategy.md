Date: 2026-08-14 22:23
Summary: Advised whether multi-format archive extraction should stay under unzip-file or use a separate slug.

[question]
如果修改为解压 不同格式的文件，例如gz，7z等压缩文件，是单独启动一个slug还是合并unzip file符合seo要求

[try to solve]
Recommended not mechanically creating one page per archive extension. Based on repository SEO rules and Google Search Central principles, separate URLs should exist only when the user intent, interaction, examples, limitations, and indexed content are substantially different. If the product goal is one browser archive extractor supporting ZIP/GZ/7Z, the cleaner SEO/product path is to create or migrate to a broader archive extractor page and keep `unzip-file` as the ZIP-specific intent only if both pages can remain meaningfully different. Otherwise, expanding `unzip-file` can work short-term but weakens keyword-title alignment because "unzip" strongly implies ZIP.

[actions]
- Read local SEO/tool rules
- Checked Google Search Central guidance
