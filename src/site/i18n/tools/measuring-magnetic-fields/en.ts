/**
 * i18n tool shard (measuring-magnetic-fields / en).
 * Master copy: H1 keeps “measuring magnetic fields”; secondary terms land in desc / FAQ / Use cases.
 */
import type { SiteLangDict } from '../../../types';

const en: SiteLangDict = {
	tool_measuring_magnetic_fields_title: 'Measuring Magnetic Fields — Field strength calculator',
	tool_measuring_magnetic_fields_description:
		'Measuring magnetic fields: enter a Hall-probe or gaussmeter reading and convert field strength. Example: 200 G → 0.02 T. Compare gauss strength of a magnet with a magnet strength chart, or estimate the axial field of a bar magnet. Numbers stay on your device and are not uploaded to a server.',
	tool_measuring_magnetic_fields_article:
		'A field-strength calculator turns a meter reading into tesla and gauss, then places it on a simple magnet strength chart. Optional geometry estimates the magnetic field of a magnet; that is not a calibrated lab measurement.',
	tool_measuring_magnetic_fields_calculate: 'Convert',
	tool_measuring_magnetic_fields_sample: 'Load sample',
	tool_measuring_magnetic_fields_clear: 'Clear',
	tool_measuring_magnetic_fields_estimate: 'Estimate field',
	tool_measuring_magnetic_fields_convert_heading: 'Convert a meter reading',
	tool_measuring_magnetic_fields_estimate_heading: 'Optional: estimate the field of a magnet',
	tool_measuring_magnetic_fields_value_label: 'Reading',
	tool_measuring_magnetic_fields_value_ph: 'e.g. 200',
	tool_measuring_magnetic_fields_unit_label: 'Unit on the device',
	tool_measuring_magnetic_fields_vacuum_label: 'Also show H in vacuum/air (A/m and oersted)',
	tool_measuring_magnetic_fields_result_t: 'Tesla (T)',
	tool_measuring_magnetic_fields_result_mt: 'Millitesla (mT)',
	tool_measuring_magnetic_fields_result_ut: 'Microtesla (µT)',
	tool_measuring_magnetic_fields_result_nt: 'Nanotesla (nT)',
	tool_measuring_magnetic_fields_result_g: 'Gauss (G)',
	tool_measuring_magnetic_fields_result_mg: 'Milligauss (mG)',
	tool_measuring_magnetic_fields_result_kg: 'Kilogauss (kG)',
	tool_measuring_magnetic_fields_earth_line: 'About {n}× Earth’s field (~50 µT teaching midpoint).',
	tool_measuring_magnetic_fields_result_h: 'H (A/m), vacuum/air',
	tool_measuring_magnetic_fields_result_oe: 'Oersted (Oe), vacuum/air',
	tool_measuring_magnetic_fields_result_note:
		'Magnetic field formula: 1 T = 10⁴ G. Optional H uses B = μ₀H in vacuum/air only — B and H are not the same quantity.',
	tool_measuring_magnetic_fields_err_generic: 'Enter a finite, non-negative reading.',
	tool_measuring_magnetic_fields_err_negative: 'This page treats the reading as a magnitude: negative values are rejected.',
	tool_measuring_magnetic_fields_err_z: 'Axial distance z must be 0 or greater (mm from the face).',
	tool_measuring_magnetic_fields_err_grade: 'Pick a listed N-grade (N35–N52).',
	tool_measuring_magnetic_fields_err_dims: 'Enter finite, positive dimensions in millimetres.',
	tool_measuring_magnetic_fields_grade_label: 'NdFeB grade (Br midpoint)',
	tool_measuring_magnetic_fields_shape_label: 'Shape',
	tool_measuring_magnetic_fields_shape_disc: 'Disc / cylinder',
	tool_measuring_magnetic_fields_shape_block: 'Block / bar magnet',
	tool_measuring_magnetic_fields_diam_label: 'Diameter (mm)',
	tool_measuring_magnetic_fields_thick_label: 'Thickness along axis (mm)',
	tool_measuring_magnetic_fields_len_label: 'Length of face (mm)',
	tool_measuring_magnetic_fields_width_label: 'Width of face (mm)',
	tool_measuring_magnetic_fields_z_label: 'Distance from face z (mm)',
	tool_measuring_magnetic_fields_estimate_out_t: 'Axial B (T)',
	tool_measuring_magnetic_fields_estimate_out_g: 'Axial B (G)',
	tool_measuring_magnetic_fields_estimate_note:
		'Uniform axial magnetisation, disc formula (blocks use an equivalent radius). Gradient is steep near the face; this is not a calibrated gaussmeter and not pull-force in kilograms.',
	tool_measuring_magnetic_fields_chart_title: 'Magnet strength chart (order of magnitude)',
	tool_measuring_magnetic_fields_chart_col_source: 'Source',
	tool_measuring_magnetic_fields_chart_col_b: 'Typical B',
	tool_measuring_magnetic_fields_chart_earth: 'Earth’s field (weak-field check)',
	tool_measuring_magnetic_fields_chart_earth_b: '~25–65 µT (this page uses ~50 µT as midpoint)',
	tool_measuring_magnetic_fields_chart_fridge: 'Fridge / weak magnet (gauss strength)',
	tool_measuring_magnetic_fields_chart_fridge_b: '~5–50 mT (~50–500 G) near the face',
	tool_measuring_magnetic_fields_chart_ndfeb: 'NdFeB surface (magnetic field of a magnet)',
	tool_measuring_magnetic_fields_chart_ndfeb_b: '~0.2–0.6 T typical near the face — not pull force in kg',
	tool_measuring_magnetic_fields_chart_mri: 'MRI (order of magnitude only)',
	tool_measuring_magnetic_fields_chart_mri_b: '~1.5–3 T — not a device spec or safety rating',
	tool_measuring_magnetic_fields_how_title: 'How to measure a magnetic field',
	tool_measuring_magnetic_fields_how_body:
		'Choose an instrument that fits the job, place the probe, read the unit on the device, then convert here. Estimating a bar magnet is optional and does not replace a meter.',
	tool_measuring_magnetic_fields_how_item_1:
		'Pick an instrument that matches the job: a gaussmeter or Hall probe for magnets (mT–T), a phone magnetometer only for weak fields like Earth’s ~50 µT.',
	tool_measuring_magnetic_fields_how_item_2:
		'Place the sensor on the axis you care about, note the distance from the face, and watch for saturation (cheap sensors peg near a neodymium magnet).',
	tool_measuring_magnetic_fields_how_item_3: 'Read the number and the unit on the device (gauss or tesla).',
	tool_measuring_magnetic_fields_how_item_4:
		'Convert that reading here (Convert) and compare it with the magnet strength chart. Load sample fills 200 G → 0.02 T.',
	tool_measuring_magnetic_fields_how_item_5:
		'If you do not have a meter yet, open Estimate field and approximate the magnetic field of a bar or disc magnet from grade and size — that is an estimate, not a calibrated measurement.',
	tool_measuring_magnetic_fields_formula_title: 'Magnetic field formula',
	tool_measuring_magnetic_fields_formula_body:
		'Conversion uses SI tesla as the hub. Magnetic field strength H is shown only when you tick vacuum/air.',
	tool_measuring_magnetic_fields_formula_item_1:
		'Magnetic field formula: 1 T = 10⁴ G = 10³ mT = 10⁶ µT = 10⁹ nT; 1 G = 10⁻⁴ T; 1 kG = 0.1 T; 1 mG = 10⁻⁷ T.',
	tool_measuring_magnetic_fields_formula_item_2:
		'Magnetic field strength formula (vacuum/air): B(T) = μ₀ H(A/m) with μ₀ = 4π×10⁻⁷ N·A⁻². 1 Oe ≈ 79.577 A/m, so 1 G corresponds to 1 Oe only in that approximation. B and H are not the same physical quantity.',
	tool_measuring_magnetic_fields_formula_item_3:
		'Disc (uniform axial magnetisation): B_z(z) = (Br/2)·[(L+z)/√(R²+(L+z)²) − z/√(R²+z²)] with L, R, z in metres. A block/bar uses equivalent radius R = √(face length × width / π); this is not a finite-element model.',
	tool_measuring_magnetic_fields_formula_item_4:
		'Magnetic flux equation Φ = B A applies only for uniform B perpendicular to the area — this tool outputs B, not Φ. The estimate uses remnant Br, not a full magnetic-moment solver. N-grade Br midpoints (T): N35 1.19, N38 1.24, N40 1.27, N42 1.30, N45 1.35, N48 1.40, N50 1.43, N52 1.45 (ranges, not unique truths).',
	tool_measuring_magnetic_fields_example_title: 'Example',
	tool_measuring_magnetic_fields_example:
		'Example: a Hall probe reads 200 G. Convert → 0.02 T = 20 mT = 2×10⁴ µT = 200 G, about 400× Earth’s ~50 µT. That gauss strength sits between a fridge magnet and a strong NdFeB face on the magnet strength chart.',
	tool_measuring_magnetic_fields_usecases_title: 'When this helps',
	tool_measuring_magnetic_fields_usecase_1:
		'Lab notes: a gaussmeter shows 200 G and you need tesla for the report (measure magnetic field / measuring magnetic field strength).',
	tool_measuring_magnetic_fields_usecase_2:
		'Gauss strength of a magnet: compare a reading with the magnet strength chart so a saturated phone sensor is not mistaken for the surface field.',
	tool_measuring_magnetic_fields_usecase_3:
		'Bar magnet magnetic field: from grade and size, estimate axial B at a chosen distance — not two-magnet pull force.',
	tool_measuring_magnetic_fields_faq_q1: 'How do I measure a magnetic field?',
	tool_measuring_magnetic_fields_faq_a1:
		'Use a Hall probe or gaussmeter for magnets (mT–T). Place the probe on the axis, note distance from the face, and stay inside the instrument range — cheap phone magnetometers saturate near neodymium. Read the unit, then convert here (sample: 200 G → 0.02 T). Force gauges that measure newtons of pull are a different job.',
	tool_measuring_magnetic_fields_faq_q2: 'What is the magnetic field formula / magnetic field strength formula?',
	tool_measuring_magnetic_fields_faq_a2:
		'Field (B) conversion: 1 T = 10⁴ G. In vacuum or air, magnetic field strength H follows B = μ₀H; 1 G ≈ 1 Oe only under that approximation. Flux Φ = BA is a separate quantity this page does not compute.',
	tool_measuring_magnetic_fields_faq_q3: 'What is gauss strength of a magnet vs a magnet strength chart?',
	tool_measuring_magnetic_fields_faq_a3:
		'Gauss strength is the B reading in gauss. The chart on this page is typical magnitudes (Earth, fridge magnet, NdFeB face), not a shop pull-force table in kilograms.',
	tool_measuring_magnetic_fields_faq_q4: 'Is magnetic force the same as magnetic field?',
	tool_measuring_magnetic_fields_faq_a4:
		'No. This page converts and estimates B. Magnetic force (including between two magnets, or F = qvB) is a different calculation and is not solved here.',
	tool_measuring_magnetic_fields_faq_q5: 'Can I plot field lines of a magnet or a uniform-field diagram?',
	tool_measuring_magnetic_fields_faq_a5:
		'Not as an interactive diagram. Qualitatively, axial B of a bar magnet falls with distance from the face. A uniform field is an idealisation (wide pole pieces, Helmholtz coils); real fridge and disc magnets are strongly non-uniform.',
	tool_measuring_magnetic_fields_disclaimer:
		'Results are educational conversions and geometry estimates, not a calibrated measurement. They are not medical, implant, or MRI safety advice.',
	tool_measuring_magnetic_fields_references:
		'BIPM SI brochure (tesla); NIST CODATA μ₀; NOAA geomagnetism FAQ for Earth-field magnitude context.',
	tool_measuring_magnetic_fields_ref_bipm_label: 'BIPM — SI Brochure (tesla)',
	tool_measuring_magnetic_fields_ref_nist_label: 'NIST — vacuum magnetic permeability μ₀',
	tool_measuring_magnetic_fields_ref_noaa_label: 'NOAA — geomagnetism FAQ',
};

export default en;
