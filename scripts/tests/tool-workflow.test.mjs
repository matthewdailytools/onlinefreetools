import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, writeFileSync, readFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { observedStep } from '../lib/observed-step.mjs';
import { validateArtifacts } from '../validate-tool-artifacts.mjs';

function fixture(t) {
	const root = mkdtempSync(path.join(tmpdir(), 'tool-workflow-test-'));
	t.after(() => rmSync(root, { recursive: true, force: true }));
	const put = (file, data) => {
		mkdirSync(path.dirname(path.join(root, file)), { recursive: true });
		writeFileSync(path.join(root, file), data);
	};
	return { root, put };
}

test('inventory detects missing artifacts and rejects unsafe slug', (t) => {
	const { root } = fixture(t);
	assert.ok(validateArtifacts(root, 'test-tool').some((e) => e.includes('catalog')));
	assert.deepEqual(validateArtifacts(root, '../escape'), ['invalid slug']);
});

test('inventory accepts complete source inventory, rejects draft and corrupt SVG', (t) => {
	const { root, put } = fixture(t);
	put('src/site/tool-catalog.d/test-tool.json', JSON.stringify({ slug: 'test-tool', page: { module: '../pages/testToolPage' } }));
	put('src/pages/testToolPage.ts', 'export {};');
	put('public/icons/tools/test-tool.svg', '<svg></svg>');
	for (const lang of ['en', 'zh', 'es', 'ar', 'pt', 'id', 'fr', 'ja', 'ru', 'de']) put(`src/site/i18n/tools/test-tool/${lang}.ts`, 'export {};');
	assert.deepEqual(validateArtifacts(root, 'test-tool'), []);
	put('src/pages/testToolPage.ts', "fetch('/samples/test-tool.m4a')");
	assert.ok(validateArtifacts(root, 'test-tool').some((e) => e.includes('public/samples/test-tool.m4a')));
	put('public/samples/test-tool.m4a', 'inventory fixture, not real audio');
	assert.deepEqual(validateArtifacts(root, 'test-tool'), []);
	for (const file of ['00-request', '01-direction-discussion', '02-tool-info']) put(`work-tasks/test-tool/${file}.md`, '**状态**：`ready`');
	put('work-tasks/test-tool/03-locale-briefs.md', '**状态**：`i18n-done`');
	assert.deepEqual(validateArtifacts(root, 'test-tool'), []);
	put('work-tasks/test-tool/03-locale-briefs.md', '**状态**：`draft`');
	assert.ok(validateArtifacts(root, 'test-tool').some((e) => e.includes('draft')));
	put('work-tasks/test-tool/03-locale-briefs.md', '**状态**：`pending-native-review`');
	assert.ok(validateArtifacts(root, 'test-tool').some((e) => e.includes('i18n-done')));
	put('public/icons/tools/test-tool.svg', '}\n<svg></svg>');
	assert.ok(validateArtifacts(root, 'test-tool').some((e) => e.includes('SVG')));
});

for (const [label, code, expected] of [
	['success', 'console.log("stdout"); console.error("stderr")', 0],
	['nonzero', 'process.exit(7)', 7],
	['signal', 'process.kill(process.pid, "SIGTERM")', null],
]) {
	test(`runner records ${label}`, async (t) => {
		const { root } = fixture(t);
		const result = await observedStep({ command: process.execPath, args: ['-e', code], cwd: root,
			logPath: path.join(root, 'step.log'), resultPath: path.join(root, 'step.json'), output: { write() {} } });
		assert.equal(result.exitCode, expected);
		assert.equal(result.status, expected === 0 ? 'passed' : 'failed');
		assert.deepEqual(JSON.parse(readFileSync(path.join(root, 'step.json'), 'utf8')), result);
		if (label === 'signal') assert.equal(result.signal, 'SIGTERM');
		if (label === 'success') assert.match(readFileSync(path.join(root, 'step.log'), 'utf8'), /stdout[\s\S]*stderr|stderr[\s\S]*stdout/);
	});
}

test('runner records spawn failure', async (t) => {
	const { root } = fixture(t);
	const result = await observedStep({ command: path.join(root, 'missing-executable'), args: [], cwd: root,
		logPath: path.join(root, 'step.log'), resultPath: path.join(root, 'step.json'), output: { write() {} } });
	assert.equal(result.status, 'failed');
	assert.match(result.error, /ENOENT/);
});

test('silent running process has heartbeat and running evidence before completion', async (t) => {
	const { root } = fixture(t);
	let sawRunning = false;
	const resultPath = path.join(root, 'step.json');
	const result = await observedStep({ command: process.execPath, args: ['-e', 'setTimeout(() => {}, 150)'], cwd: root,
		logPath: path.join(root, 'step.log'), resultPath, heartbeatMs: 10,
		output: { write(chunk) { if (String(chunk).includes('still running')) sawRunning = JSON.parse(readFileSync(resultPath, 'utf8')).status === 'running'; } } });
	assert.equal(sawRunning, true);
	assert.equal(result.status, 'passed');
});
