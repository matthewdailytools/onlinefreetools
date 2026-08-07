# Vendor assets (generated)

`jsquash/` and `wasm-feature-detect/` are produced by:

```bash
npm run vendor:image-optimizer
```

Also runs at the start of `npm run build:site` / `predeploy`.

These folders are gitignored (~10MB WASM). After `npm install`, run the vendor script (or `build:site`) before testing `/tools/image-optimizer`.
