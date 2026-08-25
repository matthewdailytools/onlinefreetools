Date: 2026-01-11 02:35
Summary: Documented Windows multi-GitHub-account fetch/push setup via SSH Host aliases or HTTPS credentials.

[question]
windows 多github账号配置fetch和push

[try to solve]
Two common approaches (pick one; SSH is recommended for multiple accounts):

### A. SSH (recommended): different Host aliases / keys per repo
1) Generate two keys (Git Bash or PowerShell; ed25519 example):
- `ssh-keygen -t ed25519 -C "work" -f ~/.ssh/id_ed25519_work`
- `ssh-keygen -t ed25519 -C "personal" -f ~/.ssh/id_ed25519_personal`

2) Add each public key to the matching GitHub account (Settings → SSH and GPG keys).

3) Configure `~/.ssh/config` (Windows usually `C:\Users\<you>\.ssh\config`):
```
Host github.com-work
  HostName github.com
  User git
  IdentityFile ~/.ssh/id_ed25519_work
  IdentitiesOnly yes

Host github.com-personal
  HostName github.com
  User git
  IdentityFile ~/.ssh/id_ed25519_personal
  IdentitiesOnly yes
```

4) Point remotes at the Host aliases:
- Work: `git remote set-url origin git@github.com-work:<org-or-user>/<repo>.git`
- Personal: `git remote set-url origin git@github.com-personal:<user>/<repo>.git`

5) Test:
- `ssh -T git@github.com-work`
- `ssh -T git@github.com-personal`

Fetch/push then use the matching key.

### B. HTTPS: Git Credential Manager + per-repo user
1) Install Git for Windows (includes Credential Manager):
- `git config --global credential.helper manager`

2) Per-repo author info:
- `git config user.name "Work Name"`
- `git config user.email "work@example.com"`

3) First push triggers browser auth; tokens are stored per repo/account.

4) Optional auto identity by folder via `includeIf` in `~/.gitconfig`:
```
[includeIf "gitdir:C:/code/work/"]
	path = .gitconfig-work
[includeIf "gitdir:C:/code/personal/"]
	path = .gitconfig-personal
```
Then create `.gitconfig-work` / `.gitconfig-personal` with the matching `[user]` blocks.

Note: HTTPS push account is determined by the authorized token; `user.name`/`email` only affect commit author metadata.

### Common pitfalls
- Wrong account: check remote Host (SSH) or clear old credentials (HTTPS).
- SSH fail: confirm config path, key path/permissions, `ssh -T`.
- Windows `includeIf`: use forward slashes `C:/...` and trailing slash on `gitdir`.
