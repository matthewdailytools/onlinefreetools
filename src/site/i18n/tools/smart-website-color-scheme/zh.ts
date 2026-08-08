/**
 * i18n tool shard (smart-website-color-scheme / zh). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const zh: SiteLangDict = {
  tool_smart_website_color_scheme_aa_fail: '未达 AA',
  tool_smart_website_color_scheme_aa_pass: 'AA 通过',
  tool_smart_website_color_scheme_add_theme: '添加主题',
  tool_smart_website_color_scheme_article:
    '用一个品牌主色生成智能网站配色：共享中性色阶、语义 token（链接保持中性、状态色与品牌解耦）、轻量界面预览、对比度自检，以及可复制的 :root CSS——全部在浏览器本地完成。',
  tool_smart_website_color_scheme_bad_hex: '请输入合法的 3 位或 6 位 HEX（例如 #0F6E8C）。',
  tool_smart_website_color_scheme_bad_id: '主题 id 须唯一，1–32 个字符，仅字母、数字、- 或 _。',
  tool_smart_website_color_scheme_check_muted: '次要字在表面上',
  tool_smart_website_color_scheme_check_on_action: '行动色上的文字（on-action）',
  tool_smart_website_color_scheme_check_text: '正文在表面上',
  tool_smart_website_color_scheme_checks_label: '对比度自检（当前主题）',
  tool_smart_website_color_scheme_clear: '清空',
  tool_smart_website_color_scheme_col_role: '角色',
  tool_smart_website_color_scheme_col_token: 'Token',
  tool_smart_website_color_scheme_col_value: '值',
  tool_smart_website_color_scheme_copy_css: '复制 CSS',
  tool_smart_website_color_scheme_copy_done: '已复制',
  tool_smart_website_color_scheme_copy_json: '复制 JSON',
  tool_smart_website_color_scheme_cp_brand: '品牌',
  tool_smart_website_color_scheme_cp_btn: '描边按钮',
  tool_smart_website_color_scheme_cp_card_body: '卡片说明用次要字色。链接保持中性，不是品牌行动色。',
  tool_smart_website_color_scheme_cp_card_title: '卡片标题',
  tool_smart_website_color_scheme_cp_err: '错误提示用 danger，不用品牌色。',
  tool_smart_website_color_scheme_cp_link: '相关链接',
  tool_smart_website_color_scheme_cp_nav: '导航项',
  tool_smart_website_color_scheme_cp_side1: '侧栏',
  tool_smart_website_color_scheme_cp_side2: '选中',
  tool_smart_website_color_scheme_desc: '智能配色：中性色 + 语义 CSS 变量，中性链接与独立状态色，本地生成。',
  tool_smart_website_color_scheme_description:
    '在浏览器里生成智能网站配色方案。选品牌 HEX（示例青绿 #0F6E8C），得到共享中性色、行动/悬停/浅底/焦点、中性链接、固定状态色、界面预览与 AA 自检，再复制 :root CSS 或 JSON。按规则推衍，非云端 AI，不上传颜色。',
  tool_smart_website_color_scheme_empty: '请先生成方案，再复制 CSS 或 JSON。',
  tool_smart_website_color_scheme_example:
    '加载示例（主题 id teal，#0F6E8C）。预览为白表面、侧栏选中项青绿浅底（无左侧色条）、中性文字链接与红色错误提示。语义层把 --link 映射到正文字色（不是 --action）。复制 CSS 得到 :root 中性色与 html[data-theme="teal"] 覆盖。',
  tool_smart_website_color_scheme_example_title: '示例',
  tool_smart_website_color_scheme_faq_a1:
    '这里的「智能」指确定规则：中性色固定、主色衍生行动/悬停/浅底/焦点、链接保持中性、状态色不跟品牌走。没有模型调用，也不上传——计算都在本页完成。',
  tool_smart_website_color_scheme_faq_a2:
    '默认链接用正文字色，避免整页被品牌色刷成「链接墙」。品牌色留给行动、选中、焦点环和少量浅底强调。',
  tool_smart_website_color_scheme_faq_a3:
    '危险/成功/警告/提示四色跨主题固定。琥珀品牌主题下错误仍用红色，避免整站看起来像在报警。',
  tool_smart_website_color_scheme_faq_a4:
    '需要 50–950 色阶或 HEX/HSL/OKLCH 列表时，用「品牌色色阶生成」。本页负责整站浅色语义方案（背景/表面/链接/行动/状态），便于直接粘贴。',
  tool_smart_website_color_scheme_faq_a5:
    '自检只覆盖当前主题的几组关键对。任意前景/背景或要看 AAA，请打开 WCAG 对比度检测并粘贴任意 token HEX。',
  tool_smart_website_color_scheme_faq_q1: '「智能配色」是不是 AI 生成？',
  tool_smart_website_color_scheme_faq_q2: '为什么链接不是品牌色？',
  tool_smart_website_color_scheme_faq_q3: '状态色为什么不随主题变？',
  tool_smart_website_color_scheme_faq_q4: '什么时候该用品牌色色阶生成？',
  tool_smart_website_color_scheme_faq_q5: '对比度自检能覆盖多少？',
  tool_smart_website_color_scheme_generate: '生成',
  tool_smart_website_color_scheme_how_body:
    '填写一到四套品牌主题（id + HEX）。工具保持共享中性色阶，由各自主色衍生行动类 token，映射语义角色（含中性链接与固定状态色），绘制浅色界面预览，做 AA 自检，并支持复制 CSS 变量或 JSON——全程本地。',
  tool_smart_website_color_scheme_how_title: '怎么用',
  tool_smart_website_color_scheme_max_themes: '最多可添加 4 套共用中性色的主题。',
  tool_smart_website_color_scheme_preview_label: '浅色界面预览',
  tool_smart_website_color_scheme_primitives_label: '原始层（当前主题 + 共享中性）',
  tool_smart_website_color_scheme_remove_theme: '移除',
  tool_smart_website_color_scheme_role_action: '行动 / 品牌强调',
  tool_smart_website_color_scheme_role_bg: '页面 / 区块底',
  tool_smart_website_color_scheme_role_border: '边框与分隔',
  tool_smart_website_color_scheme_role_focus: '焦点环',
  tool_smart_website_color_scheme_role_link: '默认链接（中性）',
  tool_smart_website_color_scheme_role_muted: '次要文字',
  tool_smart_website_color_scheme_role_on_action: '实心行动色上的字',
  tool_smart_website_color_scheme_role_status: '状态色（与品牌解耦）',
  tool_smart_website_color_scheme_role_surface: '抬升面 / 卡片',
  tool_smart_website_color_scheme_role_text: '正文 / 强调字',
  tool_smart_website_color_scheme_rules_body: '分层 token、链接与行动分离、状态独立、对比提示与隐私。',
  tool_smart_website_color_scheme_rules_item_1:
    '原始层存放中性色与品牌衍生；语义层用用途命名（bg、surface、link、action…）。组件应只引用语义名。',
  tool_smart_website_color_scheme_rules_item_2:
    '品牌 → --action；悬停约压暗 22%；soft 约 10% 透明；focus-ring 约 40% 透明；--bg 为极淡染色中性底。',
  tool_smart_website_color_scheme_rules_item_3:
    '链接映射到正文 / 强调字（中性）。不要把默认 --link 绑到 --action。',
  tool_smart_website_color_scheme_rules_item_4:
    '危险/成功/警告/提示跨主题固定，品牌色绝不替代错误语义。',
  tool_smart_website_color_scheme_rules_item_5:
    '隐私：生成、预览与剪贴板复制都在本页完成，不上传品牌色。',
  tool_smart_website_color_scheme_rules_title: '规则说明',
  tool_smart_website_color_scheme_sample: '加载示例',
  tool_smart_website_color_scheme_semantics_label: '语义层（当前主题）',
  tool_smart_website_color_scheme_theme_hex_ph: '#0F6E8C',
  tool_smart_website_color_scheme_theme_id_ph: '主题 id',
  tool_smart_website_color_scheme_themes_hint: '中性色与状态色共享；每套主题只覆盖品牌衍生 token。最多 4 套。',
  tool_smart_website_color_scheme_themes_label: '品牌主题',
  tool_smart_website_color_scheme_title: '智能配色 — 网站颜色搭配方案与 CSS 变量',
  tool_smart_website_color_scheme_usecase_1:
    '工具站或 SaaS 外壳：浅色可读骨架上，用品牌色强调选中与焦点，而不是刷满所有链接。',
  tool_smart_website_color_scheme_usecase_2:
    '落地页换肤：切换 html[data-theme] 品牌，共用同一套中性骨架与状态色。',
  tool_smart_website_color_scheme_usecase_3:
    '设计交付前端：直接粘贴 :root CSS 变量，少从截图手抄 HEX。',
  tool_smart_website_color_scheme_usecases_title: '适用场景',
  tool_smart_website_color_scheme_warn_contrast:
    '警告：行动色上的文字对比低于 4.5:1——上线实心按钮前请加深主色或调整 --on-action。',
};
export default zh;
