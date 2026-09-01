/**
 * Cloudflare R2 的 S3 兼容客户端工厂。
 * 远程 `upload:r2` 优先走此路径，避免逐文件 spawn wrangler。
 *
 * 凭据来源（优先级：已存在的 process.env > 仓库根 `.env` / `.env.local`）：
 *   R2_ACCOUNT_ID / CLOUDFLARE_ACCOUNT_ID
 *   R2_ACCESS_KEY_ID / AWS_ACCESS_KEY_ID
 *   R2_SECRET_ACCESS_KEY / AWS_SECRET_ACCESS_KEY
 * 可选：R2_S3_ENDPOINT（完整 endpoint URL，覆盖默认拼接）
 * 可选代理（AWS SDK 默认不读代理环境变量，须由此处注入）：
 *   R2_HTTPS_PROXY / HTTPS_PROXY / HTTP_PROXY / ALL_PROXY / 对应小写
 *   例：ssh -D 8888 后 `ALL_PROXY=socks5h://127.0.0.1:8888 npm run upload:r2`
 * 模板见仓库根 `.env.example`（复制为 `.env` 后填写，勿提交）。
 */
import { createRequire } from 'node:module';
import { S3Client, PutObjectCommand, GetObjectCommand } from '@aws-sdk/client-s3';
import { NodeHttpHandler } from '@smithy/node-http-handler';
import { loadProjectEnvSync } from './load-dotenv.mjs';

/** 仅在配置了代理时再加载 agent 包，避免直连/本地灌桶被缺依赖打断。 */
const require = createRequire(import.meta.url);

/** 模块加载时读入 `.env`，供后续 hasR2S3Credentials / 并发默认值使用 */
loadProjectEnvSync();

/**
 * 从环境变量解析出应使用的代理 URL（空字符串表示直连）。
 * 优先级：R2_HTTPS_PROXY → HTTPS_PROXY → HTTP_PROXY → ALL_PROXY（及同名小写）。
 * @returns {string}
 */
export const readR2ProxyUrl = () => {
	loadProjectEnvSync();
	/** 专用于 R2 上传的代理覆盖（避免误用 Cursor 注入的失效代理端口） */
	const r2Only = String(process.env.R2_HTTPS_PROXY || '').trim();
	if (r2Only) return r2Only;
	/** 标准代理链：HTTPS → HTTP → ALL（含小写，兼容 shell） */
	const candidates = [
		process.env.HTTPS_PROXY,
		process.env.https_proxy,
		process.env.HTTP_PROXY,
		process.env.http_proxy,
		process.env.ALL_PROXY,
		process.env.all_proxy,
	];
	for (const raw of candidates) {
		const url = String(raw || '').trim();
		if (url) return url;
	}
	return '';
};

/**
 * 根据代理 URL 创建 Node http(s) Agent；无代理返回 null。
 * socks / socks5 / socks5h → SocksProxyAgent；其余按 HTTP CONNECT 代理处理。
 * @param {string} proxyUrl
 * @returns {import('node:http').Agent | null}
 */
export const createProxyAgentFromUrl = (proxyUrl) => {
	const trimmed = String(proxyUrl || '').trim();
	if (!trimmed) return null;
	/** 协议小写，便于判断 SOCKS */
	const scheme = trimmed.split(':', 1)[0].toLowerCase();
	if (scheme === 'socks' || scheme === 'socks5' || scheme === 'socks5h' || scheme === 'socks4') {
		const { SocksProxyAgent } = require('socks-proxy-agent');
		return new SocksProxyAgent(trimmed);
	}
	const { HttpsProxyAgent } = require('https-proxy-agent');
	return new HttpsProxyAgent(trimmed);
};

/**
 * 若配置了代理，返回带 httpAgent/httpsAgent 的 NodeHttpHandler；否则 undefined（SDK 默认直连）。
 * @returns {NodeHttpHandler | undefined}
 */
export const createR2RequestHandler = () => {
	/** 当前进程应使用的代理 URL */
	const proxyUrl = readR2ProxyUrl();
	/** 对应的 Node Agent；null 表示直连 */
	const agent = createProxyAgentFromUrl(proxyUrl);
	if (!agent) return undefined;
	return new NodeHttpHandler({
		httpAgent: agent,
		httpsAgent: agent,
	});
};

/**
 * 从环境变量（含已加载的 `.env`）解析 R2 S3 凭据；缺任一关键项则返回 null。
 * @returns {{ accountId: string, accessKeyId: string, secretAccessKey: string, endpoint: string } | null}
 */
export const readR2S3Credentials = () => {
	loadProjectEnvSync();
	/** Cloudflare 账户 ID（拼 endpoint 用） */
	const accountId = String(process.env.R2_ACCOUNT_ID || process.env.CLOUDFLARE_ACCOUNT_ID || '').trim();
	/** R2 API Token 的 Access Key ID */
	const accessKeyId = String(process.env.R2_ACCESS_KEY_ID || process.env.AWS_ACCESS_KEY_ID || '').trim();
	/** R2 API Token 的 Secret Access Key */
	const secretAccessKey = String(
		process.env.R2_SECRET_ACCESS_KEY || process.env.AWS_SECRET_ACCESS_KEY || ''
	).trim();
	/** 可选：完整 S3 endpoint（默认 `https://{accountId}.r2.cloudflarestorage.com`） */
	const endpointOverride = String(process.env.R2_S3_ENDPOINT || process.env.AWS_ENDPOINT_URL || '').trim();

	if (!accessKeyId || !secretAccessKey) return null;
	if (!endpointOverride && !accountId) return null;

	const endpoint = endpointOverride || `https://${accountId}.r2.cloudflarestorage.com`;
	return { accountId, accessKeyId, secretAccessKey, endpoint };
};

/**
 * 校验 R2 S3 凭据形态（长度等），避免 SDK 抛出含糊的 InvalidArgument。
 * @param {{ accountId: string, accessKeyId: string, secretAccessKey: string }} creds
 */
export const assertR2S3CredentialShape = (creds) => {
	/** R2 Access Key ID 固定 32 字符；Secret 一般为 64 */
	const idLen = creds.accessKeyId.length;
	const secretLen = creds.secretAccessKey.length;
	const accountLen = creds.accountId.length;
	/** @type {string[]} */
	const problems = [];
	if (idLen !== 32) {
		problems.push(
			`R2_ACCESS_KEY_ID length=${idLen} (must be 32). Re-copy from R2 → Manage API Tokens, or create a new token; do not wrap in quotes.`
		);
	}
	if (secretLen !== 64) {
		problems.push(
			`R2_SECRET_ACCESS_KEY length=${secretLen} (expected 64). Re-copy Secret from the create-token page (shown once only).`
		);
	}
	if (accountLen && accountLen !== 32) {
		problems.push(
			`R2_ACCOUNT_ID length=${accountLen} (expected 32 hex). Check wrangler whoami / Dashboard Account ID.`
		);
	}
	if (problems.length) {
		throw new Error(
			`Invalid R2 S3 credentials in .env (or env):\n- ${problems.join('\n- ')}\nSee ops/worker-r2-ops.md §3.1`
		);
	}
};

/**
 * 是否已配置可用的 R2 S3 凭据。
 * @returns {boolean}
 */
export const hasR2S3Credentials = () => readR2S3Credentials() !== null;

/**
 * 创建指向本账户 R2 的 S3Client。
 * 含 checksum 兼容配置（AWS SDK ≥3.729 默认校验与 R2 不兼容）。
 * @returns {S3Client}
 */
export const createR2S3Client = () => {
	const creds = readR2S3Credentials();
	if (!creds) {
		throw new Error(
			'R2 S3 credentials missing. Copy .env.example → .env and set R2_ACCOUNT_ID + R2_ACCESS_KEY_ID + R2_SECRET_ACCESS_KEY ' +
				'(or export / CLOUDFLARE_ACCOUNT_ID / AWS_*). Create token: Dashboard → R2 → Manage R2 API Tokens. ' +
				'Or pass --wrangler to use slow wrangler r2 object put.'
		);
	}
	assertR2S3CredentialShape(creds);
	/** 可选：经本地 HTTP/SOCKS 隧道访问 R2（见 readR2ProxyUrl） */
	const requestHandler = createR2RequestHandler();
	/** 调试：确认上传是否走了代理（不打印凭据） */
	const proxyUrl = readR2ProxyUrl();
	if (proxyUrl && process.env.R2_PROXY_DEBUG === '1') {
		console.error(`[r2-s3] using proxy=${proxyUrl}`);
	}
	return new S3Client({
		region: 'auto',
		endpoint: creds.endpoint,
		credentials: {
			accessKeyId: creds.accessKeyId,
			secretAccessKey: creds.secretAccessKey,
		},
		...(requestHandler ? { requestHandler } : {}),
		// R2 尚未完整支持 SDK 默认强制 checksum；仅在必需时计算/校验
		requestChecksumCalculation: 'WHEN_REQUIRED',
		responseChecksumValidation: 'WHEN_REQUIRED',
	});
};

/**
 * S3 PutObject 上传单个对象。
 * @param {S3Client} client
 * @param {{ bucket: string, key: string, body: Buffer|Uint8Array|string, contentType?: string }} opts
 * @returns {Promise<void>}
 */
export const s3PutObject = async (client, opts) => {
	await client.send(
		new PutObjectCommand({
			Bucket: opts.bucket,
			Key: opts.key,
			Body: opts.body,
			ContentType: opts.contentType || 'application/octet-stream',
		})
	);
};

/**
 * S3 GetObject 读文本；对象不存在返回 null。
 * @param {S3Client} client
 * @param {{ bucket: string, key: string }} opts
 * @returns {Promise<string|null>}
 */
export const s3GetObjectText = async (client, opts) => {
	try {
		const out = await client.send(
			new GetObjectCommand({
				Bucket: opts.bucket,
				Key: opts.key,
			})
		);
		if (!out.Body) return null;
		return await out.Body.transformToString('utf8');
	} catch (err) {
		const name = err?.name || err?.Code || '';
		const status = err?.$metadata?.httpStatusCode;
		if (name === 'NoSuchKey' || name === 'NotFound' || status === 404) return null;
		throw err;
	}
};
