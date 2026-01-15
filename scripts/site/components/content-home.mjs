import { t } from '../i18n.mjs';
import { withExplicitLangPath } from '../config.mjs';

const renderPrimaryCard = ({ title, desc, href, cta }) => `
  <div class="col">
    <div class="card h-100 shadow-sm d-flex flex-column">
      <div class="card-body d-flex flex-column">
        <h5 class="card-title">${title}</h5>
        <p class="card-text text-muted flex-grow-1">${desc}</p>
        <a href="${href}" class="mt-auto btn btn-primary btn-sm">${cta}</a>
      </div>
    </div>
  </div>`;

const renderSecondaryCard = ({ title, desc, href, cta }) => `
  <div class="col">
    <div class="card h-100 d-flex flex-column">
      <div class="card-body d-flex flex-column">
        <h6 class="card-title">${title}</h6>
        <p class="card-text small text-muted flex-grow-1">${desc}</p>
        <a href="${href}" class="mt-auto btn btn-outline-primary btn-sm">${cta}</a>
      </div>
    </div>
  </div>`;

export const renderHomeContent = ({ lang }) => {
  const toolHeadersHref = withExplicitLangPath(lang, '/tools/website-headers');
  const toolMdHref = withExplicitLangPath(lang, '/tools/markdown-to-html');
  const toolIpHref = withExplicitLangPath(lang, '/tools/ip-address');
  const toolSquareHref = withExplicitLangPath(lang, '/tools/square-feet');
  const toolBmiHref = withExplicitLangPath(lang, '/tools/how-to-calculate-bmi');
  const toolMrHref = withExplicitLangPath(lang, '/tools/how-to-calculate-marginal-revenue');

  const openCta = t(lang, 'home_open');

  return `
    <section id="featured" class="mb-4">
      <div class="d-flex justify-content-between align-items-center mb-3">
        <h2 class="h5 mb-0">${t(lang, 'home_featured')}</h2>
        <a class="btn btn-sm btn-outline-secondary" href="#all-tools">${t(lang, 'home_view_all')}</a>
      </div>
      <div class="row row-cols-1 row-cols-md-4 g-3">
        ${renderPrimaryCard({
          title: t(lang, 'tool_website_headers_title'),
          desc: t(lang, 'tool_website_headers_desc'),
          href: toolHeadersHref,
          cta: openCta,
        })}
        ${renderPrimaryCard({
          title: t(lang, 'tool_markdown_to_html_title'),
          desc: t(lang, 'tool_markdown_to_html_desc'),
          href: toolMdHref,
          cta: openCta,
        })}
        ${renderPrimaryCard({
          title: t(lang, 'tool_ip_address_title'),
          desc: t(lang, 'tool_ip_address_desc'),
          href: toolIpHref,
          cta: openCta,
        })}
        ${renderPrimaryCard({
          title: t(lang, 'tool_bmi_title'),
          desc: t(lang, 'tool_bmi_description'),
          href: toolBmiHref,
          cta: openCta,
        })}
        ${renderPrimaryCard({
          title: t(lang, 'tool_marginal_revenue_title'),
          desc: t(lang, 'tool_marginal_revenue_description'),
          href: toolMrHref,
          cta: openCta,
        })}
        ${renderPrimaryCard({
          title: t(lang, 'tool_squarefeet_title'),
          desc: t(lang, 'tool_squarefeet_description'),
          href: toolSquareHref,
          cta: openCta,
        })}
      </div>
    </section>

    <section id="all-tools">
      <div class="d-flex justify-content-between align-items-center mb-3">
        <h2 class="h5 mb-0">${t(lang, 'home_all_tools')}</h2>
      </div>

      <div class="mb-4" id="cat-text">
        <div class="d-flex align-items-center mb-2">
          <span class="badge text-bg-secondary me-2">${t(lang, 'home_cat_text')}</span>
          <span class="text-muted small">${t(lang, 'home_cat_text_desc')}</span>
        </div>
        <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-3">
          ${renderSecondaryCard({
            title: t(lang, 'tool_markdown_to_html_title'),
            desc: t(lang, 'tool_markdown_to_html_desc'),
            href: toolMdHref,
            cta: openCta,
          })}
          ${renderSecondaryCard({
            title: t(lang, 'tool_bmi_title'),
            desc: t(lang, 'tool_bmi_description'),
            href: toolBmiHref,
            cta: openCta,
          })}
          ${renderSecondaryCard({
            title: t(lang, 'tool_marginal_revenue_title'),
            desc: t(lang, 'tool_marginal_revenue_description'),
            href: toolMrHref,
            cta: openCta,
          })}
          ${renderSecondaryCard({
            title: t(lang, 'tool_squarefeet_title'),
            desc: t(lang, 'tool_squarefeet_description'),
            href: toolSquareHref,
            cta: openCta,
          })}
        </div>
      </div>

      <div class="mb-4" id="cat-dev">
        <div class="d-flex align-items-center mb-2">
          <span class="badge text-bg-secondary me-2">${t(lang, 'home_cat_dev')}</span>
          <span class="text-muted small">${t(lang, 'home_cat_dev_desc')}</span>
        </div>
        <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-3">
          ${renderSecondaryCard({
            title: t(lang, 'tool_website_headers_title'),
            desc: t(lang, 'tool_website_headers_desc'),
            href: toolHeadersHref,
            cta: openCta,
          })}
          ${renderSecondaryCard({
            title: t(lang, 'tool_ip_address_title'),
            desc: t(lang, 'tool_ip_address_desc'),
            href: toolIpHref,
            cta: openCta,
          })}
          ${renderSecondaryCard({
            title: t(lang, 'tool_squarefeet_title'),
            desc: t(lang, 'tool_squarefeet_description'),
            href: toolSquareHref,
            cta: openCta,
          })}
        </div>
      </div>
    </section>
  `;
};