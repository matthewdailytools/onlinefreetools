export const mossCloneCss = `
  #content:has(.moss-clone-hero) { --tool-max: 1080px; }
  .moss-clone-hero {
    display: flex;
    align-items: center;
    gap: clamp(.85rem, 3vw, 1.5rem);
    padding: clamp(1.15rem, 4vw, 2.2rem);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    background: linear-gradient(120deg, var(--surface) 45%, var(--brand-soft));
  }
  .moss-clone-hero img { flex: none; width: clamp(2.65rem, 8vw, 4rem); height: auto; }
  .moss-clone-hero h1 {
    color: var(--text-strong);
    font-size: clamp(1.65rem, 4vw, 2.6rem);
    font-weight: 700;
    letter-spacing: -.035em;
    line-height: 1.12;
    margin-bottom: .45rem;
    overflow-wrap: anywhere;
  }
  .moss-clone-hero p { max-width: 62ch; margin: 0; }
  .moss-clone-grid {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    gap: 1rem;
    min-width: 0;
  }
  @media (min-width: 768px) {
    .moss-clone-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  }
  .moss-clone-card {
    padding: clamp(1rem, 3vw, 1.4rem);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    background: var(--surface);
    min-width: 0;
  }
  .moss-clone-title {
    display: flex;
    align-items: center;
    gap: .65rem;
    margin: 0 0 .85rem;
    font-size: 1.12rem;
    font-weight: 700;
    color: var(--text-strong);
  }
  .moss-clone-step {
    display: grid;
    place-items: center;
    flex: none;
    width: 1.85rem;
    height: 1.85rem;
    border-radius: .55rem;
    background: var(--brand-soft);
    color: var(--brand-hover);
    font-size: .75rem;
    font-variant-numeric: tabular-nums;
  }
  .moss-clone-drop {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: .65rem;
    min-height: 4.3rem;
    padding: .75rem;
    text-align: center;
    color: var(--brand-hover);
    background: var(--surface-muted);
    border: 1px dashed var(--brand);
    border-radius: .65rem;
    cursor: pointer;
  }
  .moss-clone-drop svg { flex: none; }
  .moss-clone-drop:hover, .moss-clone-drop.is-dragover { background: var(--brand-soft); }
  #mossReference:focus-visible + .moss-clone-drop { outline: 3px solid var(--focus-ring); outline-offset: 3px; }
  #mossReference:disabled + .moss-clone-drop { opacity: .6; cursor: default; }
  .moss-clone-card .form-check { padding-inline: 1.5em 0; }
  .moss-clone-card .form-check-input { float: inline-start; margin-inline: -1.5em 0; }
  .moss-clone-script { display: flex; flex-direction: column; }
  .moss-clone-script textarea { flex: 1 0 auto; min-height: 8rem; }
  .moss-clone-workspace #mossGenerate {
    min-width: min(100%, 10rem);
    min-height: 2.65rem;
    color: #fff !important;
    background: var(--action-hover) !important;
    border-color: var(--action-hover) !important;
    font-weight: 700;
  }
  .moss-clone-workspace #mossGenerate:enabled:hover { background: var(--text-strong) !important; }
  .moss-clone-workspace #mossGenerate:focus-visible {
    outline: 3px solid var(--focus-ring) !important;
    outline-offset: 3px;
  }
  .moss-clone-output { display: flex; align-items: center; flex-wrap: wrap; gap: .75rem 1rem; }
  .moss-clone-output > div { flex: 1 1 18rem; min-width: 0; }
  .moss-clone-demo figure { background: var(--surface-muted); border-radius: .65rem; padding: .8rem; }
  .moss-clone-demo figcaption { color: var(--text-strong); font-weight: 600; }
  #mossHud.is-on { top: calc(var(--header-h, 56px) + var(--lang-hint-h, 0px) + .5rem); }
`;
