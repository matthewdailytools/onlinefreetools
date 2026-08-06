export const renderSidebar = ({ title, items = [], id = 'sidebarList' }) => {
  const list = items
    .map((i) => `<a class="list-group-item list-group-item-action" href="${i.href}">${i.label}</a>`)
    .join('');
  return `
    <aside id="sidebar" class="border-end">
      <h2 class="sidebar-title h6">${title}</h2>
      <div class="list-group list-group-flush small" id="${id}">${list}</div>
    </aside>`;
};
