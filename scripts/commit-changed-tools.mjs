#!/usr/bin/env node
/**
 * Stage and commit only target tool paths.
 *
 * Examples:
 *   npm run stage:tools:changed -- --slug=image-compress
 *   npm run commit:tools:changed -- --slug=image-compress --message="tools: update image compress"
 *   npm run commit:tools:changed -- --changed-tools --dry-run  # targets tools whose updatedAt is newer than local build state
 */
import { execFileSync, spawnSync } from 'node:child_process';
import {
	PROJECT_ROOT,
	buildToolCommitPathspecs,
	listGitStatusPaths,
	readArgValue,
	resolveTargetToolSlugs,
	wantsChangedTools,
} from './lib/changed-tools.mjs';

const argv = process.argv.slice(2);
const dryRun = argv.includes('--dry-run');
const stageOnly = argv.includes('--stage-only');
const noShared = argv.includes('--no-shared');
const allowEmpty = argv.includes('--allow-empty');
const noVerify = argv.includes('--no-verify');

const runGit = (args, opts = {}) =>
	execFileSync('git', args, {
		cwd: PROJECT_ROOT,
		encoding: 'utf8',
		stdio: opts.stdio || ['ignore', 'pipe', 'pipe'],
	});

const gitStatusShort = (pathspecs) => {
	if (!pathspecs.length) return '';
	return runGit(['status', '--short', '--', ...pathspecs]);
};

const gitDiffCachedNames = (pathspecs) => {
	const raw = runGit(['diff', '--cached', '--name-only', '--', ...pathspecs]);
	return raw
		.split(/\r?\n/)
		.map((s) => s.trim())
		.filter(Boolean);
};

const messageFromArgs = () =>
	readArgValue(argv, ['--message', '-m']) ||
	(process.env.COMMIT_MESSAGE ? String(process.env.COMMIT_MESSAGE) : '');

const main = () => {
	const targets = resolveTargetToolSlugs(argv, { requireTargets: wantsChangedTools(argv) });
	if (!targets.slugs.length) {
		throw new Error('No target tool slugs. Pass --slug=<slug[,slug]> or bump updatedAt and use --changed-tools.');
	}

	const changedPaths = listGitStatusPaths();
	const pathspecs = buildToolCommitPathspecs(targets.slugs, {
		includeShared: !noShared,
		changedPaths,
	});

	console.log(`[commit-tools] slugs=${targets.slugs.join(',')} source=${targets.source}`);
	console.log(`[commit-tools] pathspecs=${pathspecs.length}${noShared ? ' noShared=true' : ''}`);
	if (dryRun) {
		const status = gitStatusShort(pathspecs);
		console.log(status || '[commit-tools] no matching changed paths');
		return;
	}

	const add = spawnSync('git', ['add', '-A', '--', ...pathspecs], {
		cwd: PROJECT_ROOT,
		stdio: 'inherit',
	});
	if (add.status !== 0) process.exit(add.status || 1);

	const staged = gitDiffCachedNames(pathspecs);
	if (!staged.length && !allowEmpty) {
		console.log('[commit-tools] nothing staged for target tool pathspecs');
		return;
	}

	console.log(`[commit-tools] staged files=${staged.length}`);
	for (const file of staged.slice(0, 80)) console.log(`  ${file}`);
	if (staged.length > 80) console.log(`  ... ${staged.length - 80} more`);

	if (stageOnly) {
		console.log('[commit-tools] stage-only complete');
		return;
	}

	const message =
		messageFromArgs() ||
		`tools: update ${targets.slugs.length === 1 ? targets.slugs[0] : `${targets.slugs.length} tools`}`;
	const commitArgs = ['commit', '-m', message];
	if (allowEmpty) commitArgs.push('--allow-empty');
	if (noVerify) commitArgs.push('--no-verify');
	commitArgs.push('--', ...pathspecs);

	const commit = spawnSync('git', commitArgs, {
		cwd: PROJECT_ROOT,
		stdio: 'inherit',
	});
	if (commit.status !== 0) process.exit(commit.status || 1);
	console.log(`[commit-tools] committed: ${message}`);
};

main();
