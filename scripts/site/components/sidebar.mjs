/**
 * 构建侧侧栏：扁平列表（信息/主题 hub）或主题手风琴（工具页若传入 groups）。
 */

/**
 * 渲染左侧菜单。
 * @param {{title:string,items?:Array<{href:string,label:string,logo?:string,current?:boolean}>,groups?:Array<{topicId:string,label:string,hubHref:string,expanded:boolean,items:Array<{href:string,label:string,logo?:string,current?:boolean}>}>,id?:string}} opts
 */
export const renderSidebar = ({ title, items = [], groups, id = 'sidebarList' }) => {
  if (groups && groups.length) {
    const blocks = groups
      .map((g) => {
        const openAttr = g.expanded ? ' open' : '';
        const currentClass = g.expanded ? ' sidebar-topic--current' : '';
        const tools = (g.items || [])
          .map((i) => {
            const currentAttr = i.current ? ' aria-current="page"' : '';
            const activeClass = i.current ? ' active' : '';
            const icon = i.logo
              ? `<img class="sidebar-tool-logo" src="${i.logo}" width="20" height="20" alt="" decoding="async" loading="lazy" />`
              : '';
            return `<a class="list-group-item list-group-item-action sidebar-topic-tool${activeClass}" href="${i.href}"${currentAttr}>${icon}<span class="sidebar-tool-label">${i.label}</span></a>`;
          })
          .join('');
        return `<details class="sidebar-topic${currentClass}" data-topic="${g.topicId}"${openAttr}>
        <summary class="sidebar-topic-summary">
          <span class="sidebar-topic-label">${g.label}</span>
          <span class="sidebar-topic-count" aria-hidden="true">${(g.items || []).length}</span>
        </summary>
        <div class="list-group list-group-flush small sidebar-topic-tools">
          <a class="list-group-item list-group-item-action sidebar-topic-hub" href="${g.hubHref}">${g.label} →</a>
          ${tools}
        </div>
      </details>`;
      })
      .join('');
    return `
    <aside id="sidebar" class="border-end">
      <h2 class="sidebar-title h6">${title}</h2>
      <div class="sidebar-topic-accordion" id="${id}">${blocks}</div>
    </aside>`;
  }

  const list = items
    .map((i) => {
      const currentAttr = i.current ? ' aria-current="page"' : '';
      const activeClass = i.current ? ' active' : '';
      const icon = i.logo
        ? `<img class="sidebar-tool-logo" src="${i.logo}" width="20" height="20" alt="" decoding="async" loading="lazy" />`
        : '';
      return `<a class="list-group-item list-group-item-action${activeClass}" href="${i.href}"${currentAttr}>${icon}<span class="sidebar-tool-label">${i.label}</span></a>`;
    })
    .join('');
  return `
    <aside id="sidebar" class="border-end">
      <h2 class="sidebar-title h6">${title}</h2>
      <div class="list-group list-group-flush small" id="${id}">${list}</div>
    </aside>`;
};
