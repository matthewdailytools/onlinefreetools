#!/usr/bin/env node
import { siteConfig } from './site/config.mjs';
import { buildDevLogs } from './build-site.mjs';

const main = async () => {
  await buildDevLogs(siteConfig.defaultLang);
};

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
