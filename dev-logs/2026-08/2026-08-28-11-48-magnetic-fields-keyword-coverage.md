Date: 2026-08-28 11:48
Summary: Re-ran the measuring-magnetic-fields brief against Keyword Planner volumes so the H1 stays measuring magnetic fields while field-strength and magnet-gauss terms absorb into desc, Formula, and FAQ.

[question]
@docs/seo/keywords/measuring-magnet-fields/keywords-search-volumns.txt 参考这个来做seo页面关键词（title以measuring magnetic fields）为核心，优化立项文件

[try to solve]
English title is now **Measuring Magnetic Fields — Field strength calculator**: the phrase before the dash is the 1,000–10k head query; the subtitle absorbs magnetic field strength and magnetic field calculator without a Tesla/Gauss/Oersted parameter list.

Same-intent Planner terms (magnetic field of magnet, gauss strength, magnet strength chart, bar magnet, field formulas) are mapped to description, Example 200 G, the typical-value table, Formula, or Use cases. Magnetic force stays FAQ-only because that SERP is F=qvB, not measuring a reading. Coulomb, tension, electric force, generic force homework, and a Lorentz-force solver are dropped and must not become extra URLs.

coverage:gate phase=0b still passes. Implementation is still waiting on an explicit build request.

[actions]
- Updated `work-tasks/measuring-magnetic-fields/` 00–03 and notes
- Appended a decision-log row in `docs/seo/keyword-to-tool-tracker.md`
- Ran `npm run coverage:gate -- --slug=measuring-magnetic-fields --phase=0b`
