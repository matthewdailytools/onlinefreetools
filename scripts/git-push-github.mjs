#!/usr/bin/env node
/**
 * 把已 commit 的代码推到 GitHub，并强制区分「只备份」与「发布到 Cloudflare」。
 *
 * 本站 Cloudflare Workers Builds 只把生产分支（默认 `main`）做成线上 Worker。
 * Workers Builds 不识别 `[skip ci]`，所以不能靠 commit 文案跳过发布。
 *
 * 用法：
 *   npm run git:save                         # HEAD → origin/save，不碰 main，不上线
 *   npm run git:save -- --stamp              # HEAD → origin/save/YYYY-MM-DD-HHMM
 *   npm run git:save -- --branch=wip/docs    # HEAD → 指定非生产分支
 *   npm run git:save -- --dry-run
 *   npm run git:save -- --force-with-lease   # 仅 save 目标分支；本地 amend 后覆盖远端
 *   npm run git:deploy                       # 当前必须是 main：push origin/main，触发 CF
 *   npm run git:deploy -- --dry-run
 *
 * 对应 git 等价命令（脚本会先做安全检查）：
 *   save:   git push origin HEAD:save
 *   deploy: git push origin main
 */
import { spawnSync } from 'node:child_process';
import { PROJECT_ROOT, readArgValue } from './lib/changed-tools.mjs';

/** 允许的推送模式：save = 版本备份；deploy = 推生产分支并触发 Cloudflare。 */
const MODES = new Set(['save', 'deploy']);

/** Cloudflare 已绑定、push 后会发线上 Worker + Assets 的生产分支名。 */
const DEFAULT_PROD_BRANCH = 'main';

/** 只做 GitHub 备份、默认不触发生产部署的远端分支名。 */
const DEFAULT_SAVE_BRANCH = 'save';

/** 默认 git remote。 */
const DEFAULT_REMOTE = 'origin';

/** 禁止当作 save 目标的生产分支名（含常见别名）。 */
const FORBIDDEN_SAVE_BRANCHES = new Set(['main', 'master']);

/** 合法 git 分支名：字母数字、点、下划线、斜杠、连字符；不能以 - 开头。 */
const BRANCH_NAME_RE = /^(?!\/)[A-Za-z0-9._][A-Za-z0-9._/-]*$/;

/** 本次 CLI 参数（去掉 node 与脚本路径）。 */
const argv = process.argv.slice(2);

/**
 * 打印用法后以给定退出码结束。
 * @param {number} code 进程退出码
 * @returns {never}
 */
const printHelpAndExit = (code) => {
	console.log(`将已 commit 的代码推到 GitHub。save 不上线；deploy 推 main 并触发 Cloudflare。

用法：
  npm run git:save
  npm run git:save -- --stamp
  npm run git:save -- --branch=<name>
  npm run git:save -- --dry-run
  npm run git:save -- --force-with-lease
  npm run git:deploy
  npm run git:deploy -- --dry-run

选项：
  --remote=<name>     默认 origin
  --prod-branch=<name>  生产分支，默认 main（deploy 目标；save 禁止推到它）
  --branch=<name>     save 目标分支，默认 save
  --stamp             save 时在分支名后追加本机时间 YYYY-MM-DD-HHMM
  --dry-run           只打印将执行的 git push，不推送
  --force-with-lease  仅 save：远端 save 被改写时用 lease 覆盖（禁止用于 main）
  --fetch             推送前 git fetch（deploy 用于发现本地落后）
  --help              打印本说明
`);
	process.exit(code);
};

/**
 * 用本机本地时区格式化 save 分支时间戳。
 * @param {Date} date 当前时间
 * @returns {string} YYYY-MM-DD-HHMM
 */
const formatLocalStamp = (date) => {
	/** 左侧补零到指定宽度。 */
	const pad = (n, width = 2) => String(n).padStart(width, '0');
	return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}-${pad(date.getHours())}${pad(date.getMinutes())}`;
};

/**
 * 捕获 git 标准输出；失败则抛错。
 * @param {string[]} args git 参数
 * @returns {string} 去掉首尾空白的 stdout
 */
const gitCapture = (args) => {
	const res = spawnSync('git', args, {
		cwd: PROJECT_ROOT,
		encoding: 'utf8',
	});
	if (res.status !== 0) {
		const err = String(res.stderr || res.stdout || '').trim();
		throw new Error(`git ${args.join(' ')} failed${err ? `: ${err}` : ''}`);
	}
	return String(res.stdout || '').trim();
};

/**
 * 尝试捕获 git 输出；失败返回空字符串（用于探测可选 ref）。
 * @param {string[]} args git 参数
 * @returns {string}
 */
const gitCaptureOptional = (args) => {
	const res = spawnSync('git', args, {
		cwd: PROJECT_ROOT,
		encoding: 'utf8',
	});
	if (res.status !== 0) return '';
	return String(res.stdout || '').trim();
};

/**
 * 前台继承 stdio 跑 git（push 需要 SSH/凭证提示）。
 * @param {string[]} args git 参数
 * @returns {void}
 */
const gitInherit = (args) => {
	const res = spawnSync('git', args, {
		cwd: PROJECT_ROOT,
		stdio: 'inherit',
	});
	if (res.status !== 0) process.exit(res.status || 1);
};

/**
 * 校验分支名，防止把奇怪字符串传给 git。
 * @param {string} name 分支名
 * @param {string} label 用于报错的字段名
 * @returns {string}
 */
const assertBranchName = (name, label) => {
	const trimmed = String(name || '').trim();
	if (!trimmed || !BRANCH_NAME_RE.test(trimmed) || trimmed.endsWith('/')) {
		throw new Error(`Invalid ${label} branch name: ${JSON.stringify(name)}`);
	}
	return trimmed;
};

/**
 * 解析 CLI：位置参数 save|deploy，以及旗标。
 * @returns {{
 *   mode: 'save' | 'deploy',
 *   remote: string,
 *   prodBranch: string,
 *   saveBranch: string,
 *   stamp: boolean,
 *   dryRun: boolean,
 *   forceWithLease: boolean,
 *   doFetch: boolean,
 * }}
 */
const parseArgs = () => {
	if (argv.includes('--help') || argv.includes('-h')) printHelpAndExit(0);

	/** 位置参数里的模式；npm 脚本会传入 save 或 deploy。 */
	const modeArg = argv.find((a) => !a.startsWith('-'));
	if (!modeArg || !MODES.has(modeArg)) printHelpAndExit(1);

	/** 是否把本机时间戳拼进 save 分支名。 */
	const stamp = argv.includes('--stamp');
	/** 只打印、不真正 push。 */
	const dryRun = argv.includes('--dry-run');
	/** save 专用：lease 保护下的非快进覆盖。 */
	const forceWithLease = argv.includes('--force-with-lease');
	/** 推送前是否 fetch 远端。 */
	const doFetch = argv.includes('--fetch');
	/** git remote 名。 */
	const remote = assertBranchName(readArgValue(argv, ['--remote']) || DEFAULT_REMOTE, 'remote');
	/** 生产分支（Cloudflare 监听）。 */
	const prodBranch = assertBranchName(
		readArgValue(argv, ['--prod-branch']) || DEFAULT_PROD_BRANCH,
		'prod'
	);
	/** save 目标分支基名。 */
	const saveBranch = assertBranchName(
		readArgValue(argv, ['--branch']) || DEFAULT_SAVE_BRANCH,
		'save'
	);

	return {
		mode: /** @type {'save' | 'deploy'} */ (modeArg),
		remote,
		prodBranch,
		saveBranch,
		stamp,
		dryRun,
		forceWithLease,
		doFetch,
	};
};

/**
 * 当前检出分支；detached HEAD 返回空。
 * @returns {string}
 */
const currentBranch = () => {
	const name = gitCaptureOptional(['symbolic-ref', '--short', '-q', 'HEAD']);
	return name;
};

/**
 * 工作区是否有未提交改动（不含未跟踪文件时 git status --porcelain 仍会列出 ??）。
 * @returns {boolean}
 */
const isWorktreeDirty = () => Boolean(gitCaptureOptional(['status', '--porcelain']));

/**
 * 统计 left...right 的左右独有 commit 数。
 * @param {string} left 左 ref
 * @param {string} right 右 ref
 * @returns {{ behind: number, ahead: number } | null} ref 不存在时返回 null
 */
const aheadBehind = (left, right) => {
	const raw = gitCaptureOptional(['rev-list', '--left-right', '--count', `${left}...${right}`]);
	if (!raw) return null;
	const [behindText, aheadText] = raw.split(/\s+/);
	const behind = Number(behindText);
	const ahead = Number(aheadText);
	if (!Number.isFinite(behind) || !Number.isFinite(ahead)) return null;
	return { behind, ahead };
};

/**
 * 组装 save 模式的远端分支名；禁止指向生产分支。
 * @param {{ saveBranch: string, stamp: boolean, prodBranch: string }} opts
 * @returns {string}
 */
const resolveSaveDest = (opts) => {
	/** 最终远端分支：可选时间戳后缀。 */
	const dest = opts.stamp ? `${opts.saveBranch}/${formatLocalStamp(new Date())}` : opts.saveBranch;
	assertBranchName(dest, 'save dest');
	const lastSeg = dest.split('/').pop() || dest;
	if (FORBIDDEN_SAVE_BRANCHES.has(dest) || FORBIDDEN_SAVE_BRANCHES.has(lastSeg) || dest === opts.prodBranch) {
		throw new Error(`git:save refuses to push ${dest} (that would trigger Cloudflare). Use git:deploy.`);
	}
	return dest;
};

/**
 * 打印本次推送意图与 ahead/behind，避免误发 main。
 * @param {string} title 日志前缀
 * @param {{ pushArgs: string[], dest: string, current: string, destRef: string, deploys: boolean }} info
 * @returns {void}
 */
const printPlan = (title, info) => {
	console.log(`[${title}] cwd=${PROJECT_ROOT}`);
	console.log(`[${title}] current=${info.current || '(detached)'}`);
	console.log(`[${title}] command=git ${info.pushArgs.join(' ')}`);
	console.log(
		info.deploys
			? `[${title}] Cloudflare WILL deploy Worker + Assets (production branch).`
			: `[${title}] Cloudflare will NOT deploy production. Tool HTML still needs npm run upload:r2 if you later ship.`
	);
	if (!info.deploys) {
		console.log(
			`[${title}] If preview builds are on (Dashboard → Settings → Build → Branch control), origin/${info.dest} may still get a preview, not production.`
		);
	}
	const counts = aheadBehind(info.destRef, 'HEAD');
	if (counts) {
		console.log(`[${title}] vs ${info.destRef}: ahead=${counts.ahead} behind=${counts.behind}`);
	} else {
		console.log(`[${title}] ${info.destRef} not fetched locally yet (first push or run with --fetch).`);
	}
	if (isWorktreeDirty()) {
		console.log(`[${title}] warning: dirty worktree; only commits are pushed.`);
	}
};

/**
 * save：git push origin HEAD:<save-branch>，绝不更新生产分支。
 * @param {ReturnType<typeof parseArgs>} opts
 * @returns {void}
 */
const runSave = (opts) => {
	if (opts.forceWithLease && opts.stamp) {
		throw new Error('--force-with-lease with --stamp is refused; stamped branches should be new refs.');
	}
	const dest = resolveSaveDest(opts);
	const destRef = `${opts.remote}/${dest}`;
	const current = currentBranch();
	/** 实际传给 git push 的参数（save 永不带 --force，只用 --force-with-lease）。 */
	const pushArgs = ['push', opts.remote, `HEAD:${dest}`];
	if (opts.forceWithLease) pushArgs.splice(1, 0, '--force-with-lease');
	printPlan('git:save', {
		pushArgs,
		dest,
		current,
		destRef,
		deploys: false,
	});
	if (opts.dryRun) {
		console.log(`[git:save] dry-run: git ${pushArgs.join(' ')}`);
		return;
	}
	gitInherit(pushArgs);
	console.log(`[git:save] ok: ${opts.remote}/${dest}`);
	console.log('[git:save] production is unchanged. Ship later with: npm run git:deploy (from main).');
};

/**
 * deploy：仅当当前分支是生产分支时 git push origin main。
 * @param {ReturnType<typeof parseArgs>} opts
 * @returns {void}
 */
const runDeploy = (opts) => {
	if (opts.forceWithLease) {
		throw new Error('git:deploy refuses --force-with-lease. Never force-push the production branch.');
	}
	if (opts.stamp || readArgValue(argv, ['--branch'])) {
		throw new Error('git:deploy ignores --stamp/--branch. It only pushes the production branch.');
	}
	const current = currentBranch();
	if (current !== opts.prodBranch) {
		throw new Error(
			`git:deploy requires branch ${opts.prodBranch} (now ${current || 'detached'}). ` +
				`Backup without shipping: npm run git:save. ` +
				`To ship: git checkout ${opts.prodBranch} && git merge <branch> && npm run git:deploy`
		);
	}

	const destRef = `${opts.remote}/${opts.prodBranch}`;
	const counts = aheadBehind(destRef, 'HEAD');
	if (counts && counts.behind > 0) {
		throw new Error(
			`local ${opts.prodBranch} is behind ${destRef} by ${counts.behind} commit(s). ` +
				`Run git pull --rebase ${opts.remote} ${opts.prodBranch} then retry.`
		);
	}

	/** 生产 push：快进 only，对应 git push origin main。 */
	const pushArgs = ['push', opts.remote, opts.prodBranch];
	printPlan('git:deploy', {
		pushArgs,
		dest: opts.prodBranch,
		current,
		destRef,
		deploys: true,
	});
	if (opts.dryRun) {
		console.log(`[git:deploy] dry-run: git ${pushArgs.join(' ')}`);
		return;
	}
	gitInherit(pushArgs);
	console.log(`[git:deploy] ok: ${opts.remote}/${opts.prodBranch}`);
	console.log('[git:deploy] wait for Cloudflare Dashboard, then: npm run verify:r2:live');
};

/**
 * 入口：解析参数 → 可选 fetch → save 或 deploy。
 * @returns {void}
 */
const main = () => {
	const opts = parseArgs();
	gitCapture(['rev-parse', '--is-inside-work-tree']);
	if (opts.doFetch) {
		console.log(`[git:${opts.mode}] git fetch ${opts.remote}`);
		if (!opts.dryRun) gitInherit(['fetch', opts.remote]);
	}
	if (opts.mode === 'save') runSave(opts);
	else runDeploy(opts);
};

try {
	main();
} catch (err) {
	console.error(`[git] ${err instanceof Error ? err.message : err}`);
	process.exit(1);
}
