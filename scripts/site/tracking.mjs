export const getTrackingSnippets = () => {
  const headHtml = process.env.SITE_TRACKING_HEAD_HTML || '';
  const bodyHtml = process.env.SITE_TRACKING_BODY_HTML || '';
  return {
    headHtml: String(headHtml),
    bodyHtml: String(bodyHtml),
  };
};
