Date: 2026-08-06 21:06
Summary: Added independent fr/de/id yaml-json i18n keys with varied FAQ order.

[question]
TASK: Add ALL `tool_yaml_json_*` keys to fr.ts, de.ts, id.ts with independent rewrite per language (NOT Translate-the-English), SEO description rules, brief titles/buttons, and FAQ order notes.

[try to solve]
Confirmed all required `tool_yaml_json_*` keys in three files (UI/IG before BMI; FAQ before BMI FAQ).

**fr.ts** — Title: « YAML vers JSON — et retour YAML (types, multi-doc) »; buttons Convertir / Copier / Télécharger / Effacer / Types JSON sûrs; samples nom/actif/éléments. Description ≥120 with étapes + exemple.
**de.ts** — Title: « YAML zu JSON — und zurück zu YAML (Typen, Multi-Doc) »; Umwandeln / kopieren / Herunterladen / Leeren / JSON-sichere Typen; samples Name/aktiv/Einträge. No Diff-Granularität. Description with Schritte + Beispiel.
**id.ts** — Title: « YAML ke JSON & sebaliknya — aturan tipe, multi-dokumen »; Konversi / Salin / Unduh / Hapus / Tipe aman JSON; samples nama/aktif/daftar. No Granularitas. Description with langkah + contoh.

FAQ topic order (≠ EN yes→multi→privacy→roundtrip→errors):
- fr: privacy → multi-doc → yes/no → round-trip → line numbers
- de: round-trip → yes/no → privacy → multi-doc → line numbers
- id: round-trip → multi-doc → privacy → yes/no → line numbers

How/Rules openings rewritten per language (not EN skeleton). Facts kept: js-yaml, CDN vs paste, DEFAULT vs JSON-safe, --- loadAll, comments/anchors loss, 200k warn, K8s/API/pipeline use cases, yes boundary example.

[actions]
- Updated `src/site/i18n/fr.ts`
- Updated `src/site/i18n/de.ts`
- Updated `src/site/i18n/id.ts`
