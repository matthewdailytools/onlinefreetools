/**
 * Prompt 工具簇共享 UI：Expand/Polish、Turnstile、consent modal、Workers AI fetch。
 * 各 *Page.ts 传入 DOM 前缀与 slug，并实现 assembleInput / applyAi 钩子。
 */
import { escapeHtml } from './layout';

/** Turnstile 公开 sitekey（secret 仅 Worker）。 */
export const PROMPT_AI_TURNSTILE_SITEKEY = '0x4AAAAAAEKPkweeKKHYjYJX';

/** AI 面板 i18n 文案（由各工具 tx() 填入）。 */
export type PromptAiPanelLabels = {
	ai_panel_label: string;
	ai_expand: string;
	ai_polish: string;
	ai_consent_title: string;
	ai_consent_body: string;
	ai_consent_cancel: string;
	ai_consent_ok: string;
	ai_working: string;
	ai_done: string;
	ai_err_generic: string;
	ai_err_rate: string;
	ai_err_turnstile: string;
	empty?: string;
};

/**
 * 渲染 AI 面板 HTML + consent modal（不含 script）。
 * @param opts.prefix DOM id 前缀，如 ptb、wpg
 * @param opts.slug catalog slug（Turnstile action）
 * @param opts.labels 已转义前的原文案
 */
export const renderPromptAiPanelHtml = (opts: {
	prefix: string;
	slug: string;
	labels: PromptAiPanelLabels;
}): string => {
	const p = opts.prefix;
	const turnstileCb = `__${p}TurnstileOk`;
	const turnstileClear = `__${p}TurnstileClear`;
	const L = opts.labels;
	return `
      <div class="border rounded p-3 mb-3 bg-light-subtle" id="${p}AiPanel">
        <p class="small fw-semibold mb-2">${escapeHtml(L.ai_panel_label)}</p>
        <div class="d-flex flex-wrap gap-2 mb-2">
          <button type="button" id="${p}BtnAiExpand" class="btn btn-outline-primary btn-sm">${escapeHtml(L.ai_expand)}</button>
          <button type="button" id="${p}BtnAiPolish" class="btn btn-outline-primary btn-sm">${escapeHtml(L.ai_polish)}</button>
        </div>
        <div id="${p}TurnstileWrap">
          <div class="cf-turnstile" data-sitekey="${PROMPT_AI_TURNSTILE_SITEKEY}" data-action="${escapeHtml(opts.slug)}-ai" data-callback="${turnstileCb}" data-expired-callback="${turnstileClear}" data-error-callback="${turnstileClear}"></div>
        </div>
      </div>

      <div class="modal fade" id="${p}AiConsentModal" tabindex="-1" aria-labelledby="${p}AiConsentTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h2 class="modal-title h6" id="${p}AiConsentTitle">${escapeHtml(L.ai_consent_title)}</h2>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body"><p class="mb-0 small">${escapeHtml(L.ai_consent_body)}</p></div>
            <div class="modal-footer">
              <button type="button" class="btn btn-outline-secondary btn-sm" data-bs-dismiss="modal">${escapeHtml(L.ai_consent_cancel)}</button>
              <button type="button" class="btn btn-primary btn-sm" id="${p}AiConsentConfirm">${escapeHtml(L.ai_consent_ok)}</button>
            </div>
          </div>
        </div>
      </div>`;
};

/**
 * 生成 Prompt AI 客户端脚本（须在页面主 IIFE 内调用，且已实现 promptAiAssembleInput / promptAiApplyText）。
 * @param opts.prefix DOM 前缀
 * @param opts.slug API 路径 slug
 * @param opts.labels JSON 序列化后的 msg 对象键
 * @param opts.setErrorFn 页面 setError 函数名
 * @param opts.setStatusFn 页面 setStatus 函数名
 */
export const renderPromptAiClientScript = (opts: {
	prefix: string;
	slug: string;
	labelsJson: string;
	setErrorFn: string;
	setStatusFn: string;
}): string => {
	const p = opts.prefix;
	const slug = opts.slug;
	return `
      (function initPromptAi_${p}() {
        var turnstileToken = '';
        var pendingAiAction = '';
        var btnAiExpand = document.getElementById('${p}BtnAiExpand');
        var btnAiPolish = document.getElementById('${p}BtnAiPolish');
        var aiPanel = document.getElementById('${p}AiPanel');
        var consentModalEl = document.getElementById('${p}AiConsentModal');
        var consentConfirm = document.getElementById('${p}AiConsentConfirm');
        var consentStorageKey = 'oft-${slug}-ai-consent-v1';
        var aiMsg = ${opts.labelsJson};

        window.__${p}TurnstileOk = function (token) { turnstileToken = token || ''; };
        window.__${p}TurnstileClear = function () { turnstileToken = ''; };

        function readTurnstileToken() {
          if (turnstileToken) return turnstileToken;
          var el = document.querySelector('#${p}TurnstileWrap [name="cf-turnstile-response"]');
          return el && el.value ? String(el.value).trim() : '';
        }

        function resetTurnstileWidget() {
          turnstileToken = '';
          if (window.turnstile && typeof window.turnstile.reset === 'function') {
            try { window.turnstile.reset(); } catch (e) { /* ignore */ }
          }
        }

        function runAiAction(action) {
          ${opts.setErrorFn}('');
          var input = typeof promptAiAssembleInput === 'function' ? promptAiAssembleInput(action) : '';
          if (!input) {
            ${opts.setErrorFn}(aiMsg.empty || aiMsg.ai_err_generic);
            return;
          }
          var token = readTurnstileToken();
          if (!token) {
            ${opts.setErrorFn}(aiMsg.ai_err_turnstile);
            return;
          }
          ${opts.setStatusFn}(aiMsg.ai_working);
          if (btnAiExpand) btnAiExpand.disabled = true;
          if (btnAiPolish) btnAiPolish.disabled = true;
          fetch('/api/tools/${slug}/ai', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ action: action, input: input, turnstile: token })
          }).then(function (res) {
            return res.json().then(function (data) {
              return { status: res.status, data: data };
            });
          }).then(function (pack) {
            var data = pack.data || {};
            if (!data.ok) {
              var code = data.code || '';
              if (code.indexOf('rate') >= 0 || code === 'neurons_exhausted') ${opts.setErrorFn}(aiMsg.ai_err_rate);
              else if (code === 'turnstile') ${opts.setErrorFn}(aiMsg.ai_err_turnstile);
              else ${opts.setErrorFn}(aiMsg.ai_err_generic);
              ${opts.setStatusFn}('');
              return;
            }
            if (typeof promptAiApplyText === 'function') promptAiApplyText(action, String(data.text || ''));
            ${opts.setStatusFn}(aiMsg.ai_done);
          }).catch(function () {
            ${opts.setErrorFn}(aiMsg.ai_err_generic);
            ${opts.setStatusFn}('');
          }).finally(function () {
            if (btnAiExpand) btnAiExpand.disabled = false;
            if (btnAiPolish) btnAiPolish.disabled = false;
            resetTurnstileWidget();
          });
        }

        function ensureConsentThenRun(action) {
          pendingAiAction = action;
          try {
            if (localStorage.getItem(consentStorageKey) === '1') {
              runAiAction(action);
              return;
            }
          } catch (e) { /* ignore */ }
          if (consentModalEl && window.bootstrap && window.bootstrap.Modal) {
            window.bootstrap.Modal.getOrCreateInstance(consentModalEl).show();
          } else if (window.confirm(aiMsg.ai_consent_body)) {
            try { localStorage.setItem(consentStorageKey, '1'); } catch (e2) { /* ignore */ }
            runAiAction(action);
          }
        }

        if (consentConfirm) {
          consentConfirm.addEventListener('click', function () {
            try { localStorage.setItem(consentStorageKey, '1'); } catch (e) { /* ignore */ }
            if (consentModalEl && window.bootstrap && window.bootstrap.Modal) {
              window.bootstrap.Modal.getOrCreateInstance(consentModalEl).hide();
            }
            if (pendingAiAction) runAiAction(pendingAiAction);
          });
        }

        if (btnAiExpand) btnAiExpand.addEventListener('click', function () { ensureConsentThenRun('expand'); });
        if (btnAiPolish) btnAiPolish.addEventListener('click', function () { ensureConsentThenRun('polish'); });

        fetch('/api/tools/${slug}/ai/health').then(function (r) { return r.json(); }).then(function (d) {
          if (d && d.enabled === false && aiPanel) aiPanel.style.display = 'none';
        }).catch(function () { /* keep panel */ });
      })();`;
};

/** Turnstile api.js（页面 extraBodyHtml 末尾追加一次）。 */
export const PROMPT_AI_TURNSTILE_SCRIPT =
	'<script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer></script>';

/**
 * 从工具 tx 键构建 AI 面板 labels。
 * @param tx 工具 i18n 读取函数
 */
export const buildPromptAiLabels = (
	tx: (suffix: string) => string,
): PromptAiPanelLabels => ({
	ai_panel_label: tx('ai_panel_label'),
	ai_expand: tx('ai_expand'),
	ai_polish: tx('ai_polish'),
	ai_consent_title: tx('ai_consent_title'),
	ai_consent_body: tx('ai_consent_body'),
	ai_consent_cancel: tx('ai_consent_cancel'),
	ai_consent_ok: tx('ai_consent_ok'),
	ai_working: tx('ai_working'),
	ai_done: tx('ai_done'),
	ai_err_generic: tx('ai_err_generic'),
	ai_err_rate: tx('ai_err_rate'),
	ai_err_turnstile: tx('ai_err_turnstile'),
	empty: tx('empty'),
});
