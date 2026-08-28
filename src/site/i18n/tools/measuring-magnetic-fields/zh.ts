/**
 * i18n tool shard (measuring-magnetic-fields / zh)。
 * 检索向：测量磁场 / 磁场强度 / 磁场计算器；勿与磁力链接混淆。
 */
import type { SiteLangDict } from '../../../types';

const zh: SiteLangDict = {
	tool_measuring_magnetic_fields_title: '测量磁场 — 磁场强度计算器',
	tool_measuring_magnetic_fields_description:
		'测量磁场：把霍尔探头或高斯计读数换成特斯拉与高斯。示例：200 高斯 → 0.02 T。对照磁铁高斯强度与磁场强度表，避免把手机磁力计饱和读数当成表面场；也可按尺寸粗估条形磁铁轴上场。换算公式在浏览器里本地立刻完成，数字留在本机、不上服务器。',
	tool_measuring_magnetic_fields_article:
		'先看仪器量程和探头位置，再换算读数。磁铁估算只给轴上场数量级，不是标定测量，也不是吸力公斤数。',
	tool_measuring_magnetic_fields_calculate: '换算',
	tool_measuring_magnetic_fields_sample: '载入示例',
	tool_measuring_magnetic_fields_clear: '清空',
	tool_measuring_magnetic_fields_estimate: '估算磁场',
	tool_measuring_magnetic_fields_convert_heading: '换算仪器读数',
	tool_measuring_magnetic_fields_estimate_heading: '可选：估算磁铁旁边的场',
	tool_measuring_magnetic_fields_value_label: '读数',
	tool_measuring_magnetic_fields_value_ph: '例如 200',
	tool_measuring_magnetic_fields_unit_label: '仪器上的单位',
	tool_measuring_magnetic_fields_vacuum_label: '同时显示真空/空气下的 H（A/m 与奥斯特）',
	tool_measuring_magnetic_fields_result_t: '特斯拉 (T)',
	tool_measuring_magnetic_fields_result_mt: '毫特 (mT)',
	tool_measuring_magnetic_fields_result_ut: '微特 (µT)',
	tool_measuring_magnetic_fields_result_nt: '纳特 (nT)',
	tool_measuring_magnetic_fields_result_g: '高斯 (G)',
	tool_measuring_magnetic_fields_result_mg: '毫高斯 (mG)',
	tool_measuring_magnetic_fields_result_kg: '千高斯 (kG)',
	tool_measuring_magnetic_fields_earth_line: '大约是地磁场（教学中点 ~50 µT）的 {n} 倍。',
	tool_measuring_magnetic_fields_result_h: 'H（A/m，真空/空气）',
	tool_measuring_magnetic_fields_result_oe: '奥斯特 (Oe，真空/空气）',
	tool_measuring_magnetic_fields_result_note:
		'磁场公式：1 T = 10⁴ G。可选的 H 只用真空/空气下的 B = μ₀H；B 与 H 不是同一个物理量。',
	tool_measuring_magnetic_fields_err_generic: '请输入有限、非负的读数。',
	tool_measuring_magnetic_fields_err_negative: '本页按标量大小处理读数，负数会被拒绝。',
	tool_measuring_magnetic_fields_err_z: '轴上距离 z 必须 ≥ 0（相对表面，单位 mm）。',
	tool_measuring_magnetic_fields_err_grade: '请选择表内牌号（N35–N52）。',
	tool_measuring_magnetic_fields_err_dims: '请输入有限且为正的毫米尺寸。',
	tool_measuring_magnetic_fields_grade_label: '钕铁硼牌号（Br 中点）',
	tool_measuring_magnetic_fields_shape_label: '形状',
	tool_measuring_magnetic_fields_shape_disc: '圆片 / 圆柱',
	tool_measuring_magnetic_fields_shape_block: '方块 / 条形磁铁',
	tool_measuring_magnetic_fields_diam_label: '直径 (mm)',
	tool_measuring_magnetic_fields_thick_label: '轴向厚度 (mm)',
	tool_measuring_magnetic_fields_len_label: '端面长 (mm)',
	tool_measuring_magnetic_fields_width_label: '端面宽 (mm)',
	tool_measuring_magnetic_fields_z_label: '离表面距离 z (mm)',
	tool_measuring_magnetic_fields_estimate_out_t: '轴上场 B (T)',
	tool_measuring_magnetic_fields_estimate_out_g: '轴上场 B (G)',
	tool_measuring_magnetic_fields_estimate_note:
		'均匀轴向磁化的圆片公式（方块用等效半径）。近表面梯度很大：这不是标定高斯计，也不输出吸力公斤。',
	tool_measuring_magnetic_fields_chart_title: '磁场强度表（数量级）',
	tool_measuring_magnetic_fields_chart_col_source: '来源',
	tool_measuring_magnetic_fields_chart_col_b: '典型 B',
	tool_measuring_magnetic_fields_chart_earth: '地磁场（弱场对照）',
	tool_measuring_magnetic_fields_chart_earth_b: '约 25–65 µT（本页用 ~50 µT 作中点）',
	tool_measuring_magnetic_fields_chart_fridge: '冰箱磁 / 弱磁铁（高斯强度）',
	tool_measuring_magnetic_fields_chart_fridge_b: '近表面约 5–50 mT（约 50–500 G）',
	tool_measuring_magnetic_fields_chart_ndfeb: '钕铁硼表面（磁铁的场）',
	tool_measuring_magnetic_fields_chart_ndfeb_b: '近表面常见约 0.2–0.6 T，不是吸力公斤数',
	tool_measuring_magnetic_fields_chart_mri: '核磁设备数量级（仅对照）',
	tool_measuring_magnetic_fields_chart_mri_b: '约 1.5–3 T — 不是设备说明书或安全评级',
	tool_measuring_magnetic_fields_how_title: '怎么测磁场',
	tool_measuring_magnetic_fields_how_body:
		'先选对仪器、摆好探头、记下单位，再在本页换算。没有表的时候才用尺寸去估条形磁铁，估出来的不是标定值。',
	tool_measuring_magnetic_fields_how_item_1:
		'按任务选仪器：测磁铁用高斯计或霍尔探头（mT–T）；手机磁力计只适合地磁这种约 50 µT 的弱场。',
	tool_measuring_magnetic_fields_how_item_2:
		'把探头放在你关心的轴上，记下离面距离，并提防饱和（廉价传感器靠近钕铁硼会顶满）。',
	tool_measuring_magnetic_fields_how_item_3: '读仪器上的数字和单位（高斯或特斯拉）。',
	tool_measuring_magnetic_fields_how_item_4:
		'点「换算」，对照磁场强度表。载入示例会填 200 高斯 → 0.02 T。',
	tool_measuring_magnetic_fields_how_item_5:
		'还没有表时，打开「估算磁场」，用牌号和尺寸粗估圆片或条形磁铁的轴上场——只是估算。',
	tool_measuring_magnetic_fields_formula_title: '磁场公式',
	tool_measuring_magnetic_fields_formula_body:
		'换算以 SI 特斯拉为枢纽。只有勾选真空/空气时才给出磁场强度 H。',
	tool_measuring_magnetic_fields_formula_item_1:
		'磁场公式：1 T = 10⁴ G = 10³ mT = 10⁶ µT = 10⁹ nT；1 G = 10⁻⁴ T；1 kG = 0.1 T；1 mG = 10⁻⁷ T。',
	tool_measuring_magnetic_fields_formula_item_2:
		'磁场强度公式（真空/空气）：B(T) = μ₀ H(A/m)，μ₀ = 4π×10⁻⁷ N·A⁻²。1 Oe ≈ 79.577 A/m，该近似下 1 G 对应 1 Oe。B 与 H 不是同一物理量。',
	tool_measuring_magnetic_fields_formula_item_3:
		'圆片（均匀轴向磁化）：B_z(z) = (Br/2)·[(L+z)/√(R²+(L+z)²) − z/√(R²+z²)]，L、R、z 用米。方块/条形用等效半径 R = √(端面长×宽 / π)，不是有限元。',
	tool_measuring_magnetic_fields_formula_item_4:
		'磁通量 Φ = B A 只在均匀场且垂直于面积时成立——本页输出的是 B 不是 Φ。估算用剩磁 Br，不是完整磁矩求解。N 级 Br 中点见 Formula 表，是区间不是唯一真值。',
	tool_measuring_magnetic_fields_example_title: '示例',
	tool_measuring_magnetic_fields_example:
		'示例：霍尔探头读到 200 高斯。换算 → 0.02 T = 20 mT = 2×10⁴ µT = 200 G，大约是地磁 ~50 µT 的 400 倍。这个高斯强度介于冰箱磁和强钕铁硼表面之间。',
	tool_measuring_magnetic_fields_usecases_title: '适合什么场景',
	tool_measuring_magnetic_fields_usecase_1:
		'实验记录：高斯计显示 200 高斯，报告里要写成特斯拉（测量磁场 / 测磁场强度）。',
	tool_measuring_magnetic_fields_usecase_2:
		'查磁铁高斯强度：对照磁场强度表，避免把手机饱和读数当成表面场。',
	tool_measuring_magnetic_fields_usecase_3:
		'条形磁铁磁场：按牌号和尺寸估轴上场，不是两块磁铁的吸力。',
	tool_measuring_magnetic_fields_faq_q1: '磁场怎么测？',
	tool_measuring_magnetic_fields_faq_a1:
		'测磁铁用霍尔探头或高斯计（mT–T）。探头放在轴上，记下离面距离，并确认没超量程——手机磁力计靠近钕铁硼很容易饱和。先读单位，再在本页换算（示例：200 G → 0.02 T）。测拉力牛顿是另一件事。',
	tool_measuring_magnetic_fields_faq_q2: '磁场公式 / 磁场强度公式是什么？',
	tool_measuring_magnetic_fields_faq_a2:
		'磁感应强度 B：1 T = 10⁴ G。真空或空气中磁场强度 H 满足 B = μ₀H；只有该近似下 1 G ≈ 1 Oe。通量 Φ = BA 是另一量，本页不算。',
	tool_measuring_magnetic_fields_faq_q3: '磁铁高斯强度和磁场强度表有何不同？',
	tool_measuring_magnetic_fields_faq_a3:
		'高斯强度就是用高斯表示的 B。本页表格是地磁、冰箱磁、钕铁硼表面的数量级，不是商店里的吸力公斤表。',
	tool_measuring_magnetic_fields_faq_q4: '磁力和磁场是一回事吗？',
	tool_measuring_magnetic_fields_faq_a4:
		'不是。本页换算和估算的是 B。磁力（包括两磁铁之间，或 F = qvB）是另一套计算，这里不做。',
	tool_measuring_magnetic_fields_faq_q5: '能画出磁力线或匀强磁场示意图吗？',
	tool_measuring_magnetic_fields_faq_a5:
		'没有交互磁力线图。定性上，条形磁铁轴上场随离面距离下降。匀强场是理想化（大极靴、亥姆霍兹线圈）；冰箱磁和圆片磁铁通常很不均匀。',
	tool_measuring_magnetic_fields_disclaimer:
		'结果是教学换算与几何估算，不是标定测量，也不能当作医疗、植入物或核磁安全结论。',
	tool_measuring_magnetic_fields_references:
		'BIPM SI 手册（特斯拉）；NIST CODATA μ₀；NOAA 地磁 FAQ 提供地磁场量级语境。',
	tool_measuring_magnetic_fields_ref_bipm_label: 'BIPM — SI 手册（特斯拉）',
	tool_measuring_magnetic_fields_ref_nist_label: 'NIST — 真空磁导率 μ₀',
	tool_measuring_magnetic_fields_ref_noaa_label: 'NOAA — 地磁常见问题',
};

export default zh;
