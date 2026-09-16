import { spawn } from 'node:child_process';
import { openSync, closeSync, readSync, fstatSync, writeFileSync, writeSync } from 'node:fs';

/** Persist actual process outcomes; a stale/running record is never success. */
export async function observedStep({ command, args, cwd, env, logPath, resultPath,
	heartbeatMs = 15000, output = process.stdout }) {
	const started = Date.now();
	const result = { command, args, cwd, status: 'running', startedAt: new Date(started).toISOString() };
	const save = () => writeFileSync(resultPath, JSON.stringify(result, null, 2) + '\n');
	// Direct file descriptors preserve child output even if pipe capture fails
	// or the observing parent is interrupted. Never buffer a full build in RAM.
	const logFd = openSync(logPath, 'w+');
	let offset = 0;
	const drain = () => {
		const size = fstatSync(logFd).size;
		while (offset < size) {
			const chunk = Buffer.alloc(Math.min(65536, size - offset));
			const count = readSync(logFd, chunk, 0, chunk.length, offset);
			if (!count) break;
			offset += count;
			output.write(chunk.subarray(0, count));
		}
	};
	save();
	let timer;
	try {
		await new Promise((resolve) => {
			const child = spawn(command, args, { cwd, env, stdio: ['ignore', logFd, logFd] });
			child.on('error', (error) => { result.error = error.message; });
			timer = setInterval(() => {
				writeSync(logFd, `[verify:tool] still running (${Math.round((Date.now() - started) / 1000)}s): ${args[0]}\n`);
				drain();
			}, heartbeatMs);
			child.on('close', (code, signal) => {
				result.exitCode = code;
				result.signal = signal;
				result.status = code === 0 && !signal && !result.error ? 'passed' : 'failed';
				resolve();
			});
		});
	} catch (error) {
		result.error = error.message;
		result.status = 'failed';
	} finally {
		clearInterval(timer);
		drain();
		closeSync(logFd);
		result.finishedAt = new Date().toISOString();
		result.elapsedMs = Date.now() - started;
		save();
	}
	return result;
}
