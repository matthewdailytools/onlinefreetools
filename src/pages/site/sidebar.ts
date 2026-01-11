import { escapeHtml } from './layout';

export const renderSidebar = (opts: { title: string; items: { href: string; label: string }[]; id?: string }) => {
	const list = (opts.items || [])
		.map(
			(i) =>
				`<a class="list-group-item list-group-item-action" href="${escapeHtml(i.href)}">${escapeHtml(i.label)}</a>`
		)
		.join('');

	return `
    <aside id="sidebar" class="bg-light border-end p-3">
      <h6 class="text-muted text-uppercase">${escapeHtml(opts.title)}</h6>
      <div class="list-group list-group-flush small" id="${escapeHtml(opts.id || 'sidebarList')}">${list}</div>
    </aside>`;
};
