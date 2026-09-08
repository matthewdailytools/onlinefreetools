/**
 * 金标进度 HUD 样式（对照 batch-convert-web-pages-to-jpg 的 .bcw-hud）。
 * OCR / 转换页拼进 extraHeadHtml；细条只作卡片内部 bar。
 */

/**
 * 返回金标 HUD + Convert 忙碌转圈 CSS。
 * @param opts.hudId 进度卡片根节点 id（sticky 用）
 * @param opts.convertBtnId 主 Convert 按钮 id
 */
export function bcwHudCss(opts: { hudId: string; convertBtnId: string }): string {
	const hud = opts.hudId.replace(/[^A-Za-z0-9_-]/g, '');
	const btn = opts.convertBtnId.replace(/[^A-Za-z0-9_-]/g, '');
	return `
    #${btn}[aria-busy="true"]::after {
      content: '';
      display: inline-block;
      width: 0.85em;
      height: 0.85em;
      margin-left: 0.4em;
      border: 2px solid currentColor;
      border-right-color: transparent;
      border-radius: 50%;
      animation: bcw-hud-spin 0.7s linear infinite;
      vertical-align: -0.15em;
    }
    .bcw-hud {
      border: 1px solid #0d6efd;
      border-radius: 0.5rem;
      background: #f8fbff;
      padding: 0.9rem 1rem 1rem;
      box-shadow: 0 0.5rem 1.25rem rgba(13, 110, 253, 0.12);
    }
    #${hud}.is-on {
      position: sticky;
      top: 0.5rem;
      z-index: 20;
    }
    .bcw-hud-top { display: flex; align-items: center; gap: 0.85rem; margin-bottom: 0.65rem; }
    .bcw-hud-spin {
      flex: 0 0 auto;
      width: 2.35rem;
      height: 2.35rem;
      border: 3px solid rgba(13, 110, 253, 0.22);
      border-top-color: #0d6efd;
      border-radius: 50%;
      animation: bcw-hud-spin 0.7s linear infinite;
      will-change: transform;
    }
    .bcw-hud.is-done .bcw-hud-spin { animation: none; border-color: #198754; border-top-color: #198754; }
    .bcw-hud.is-fail { border-color: #dc3545; background: #fff8f8; box-shadow: 0 0.5rem 1.25rem rgba(220, 53, 69, 0.12); }
    .bcw-hud.is-fail .bcw-hud-spin { animation: none; border-color: #dc3545; border-top-color: #dc3545; }
    .bcw-hud.is-fail .bcw-hud-pct { color: #dc3545; }
    .bcw-hud-pct {
      font-size: 1.85rem;
      font-weight: 700;
      line-height: 1;
      font-variant-numeric: tabular-nums;
      color: #0d6efd;
      min-width: 4.25rem;
    }
    .bcw-hud-copy { min-width: 0; flex: 1; }
    .bcw-hud-title { font-weight: 600; margin-bottom: 0.15rem; }
    .bcw-hud-step { font-size: 0.9rem; color: #0d6efd; }
    .bcw-hud-time { font-size: 0.8rem; color: #6c757d; }
    .bcw-hud .progress { height: 1.35rem; overflow: hidden; position: relative; }
    .bcw-hud .progress-bar {
      font-size: 0.8rem;
      font-weight: 600;
      line-height: 1.35rem;
      transition: width 0.28s ease;
    }
    .bcw-hud-sheen {
      position: absolute;
      inset: 0 auto 0 0;
      width: 40%;
      background: linear-gradient(90deg, transparent, rgba(255,255,255,0.45), transparent);
      animation: bcw-hud-sheen 1.1s linear infinite;
      will-change: transform;
      pointer-events: none;
    }
    .bcw-hud.is-done .bcw-hud-sheen, .bcw-hud.is-fail .bcw-hud-sheen { display: none; }
    .bcw-hud-steps {
      display: flex;
      gap: 0.4rem;
      list-style: none;
      padding: 0;
      margin: 0.65rem 0 0.35rem;
      flex-wrap: wrap;
    }
    .bcw-hud-steps li {
      font-size: 0.75rem;
      padding: 0.2rem 0.55rem;
      border-radius: 999px;
      border: 1px solid #cfe2ff;
      color: #6c757d;
      background: #fff;
    }
    .bcw-hud-steps li.is-on { border-color: #0d6efd; color: #0d6efd; background: #e7f1ff; font-weight: 600; }
    .bcw-hud-steps li.is-done { border-color: #198754; color: #198754; background: #eaf7ef; }
    .bcw-hud-url { font-size: 0.8rem; color: #495057; word-break: break-all; }
    @keyframes bcw-hud-spin { to { transform: rotate(360deg); } }
    @keyframes bcw-hud-sheen { from { transform: translateX(-120%); } to { transform: translateX(320%); } }
`;
}
