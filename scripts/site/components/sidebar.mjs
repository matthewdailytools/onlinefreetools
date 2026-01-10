export const renderSidebar = ({ title, items = [], id = 'sidebarList' }) => {
  const list = items
    .map((i) => `<a class="list-group-item list-group-item-action" href="${i.href}">${i.label}</a>`)
    .join('');
  return `
    <aside id="sidebar" class="bg-light border-end p-3">
      <h6 class="text-muted text-uppercase">${title}</h6>
      <div class="list-group list-group-flush small" id="${id}">${list}</div>
    </aside>`;
};
