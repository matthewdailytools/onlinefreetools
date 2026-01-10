日期：2026年1月11日02时35分
摘要：在 Windows 上配置多个 GitHub 账号分别用于 fetch/push（SSH 或 HTTPS 两种方案）。

【question】
windows 多github账号配置fetch和push

【try to solve】
下面给两套常用方案，二选一即可（推荐 SSH，多账号最稳）：

一、SSH（推荐）：不同仓库用不同 Host（不同 key）
1）生成两把 key（Git Bash 或 PowerShell 都可；示例用 ed25519）：
- ssh-keygen -t ed25519 -C "work" -f ~/.ssh/id_ed25519_work
- ssh-keygen -t ed25519 -C "personal" -f ~/.ssh/id_ed25519_personal

2）把公钥分别添加到对应 GitHub 账号（GitHub -> Settings -> SSH and GPG keys）：
- 复制 ~/.ssh/id_ed25519_work.pub
- 复制 ~/.ssh/id_ed25519_personal.pub

3）配置 ~/.ssh/config（Windows 下通常在 C:\Users\<你>\.ssh\config；Git Bash 用 ~/.ssh/config）：
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

4）为不同仓库设置不同的 remote（关键：remote URL 的 host 要用上面的别名）：
- 工作仓库：git remote set-url origin git@github.com-work:<org-or-user>/<repo>.git
- 个人仓库：git remote set-url origin git@github.com-personal:<user>/<repo>.git

5）验证连通性：
- ssh -T git@github.com-work
- ssh -T git@github.com-personal

之后 fetch/push 会自动走对应账号的 key。

二、HTTPS：用 Git Credential Manager + 分仓库 user（适合不想用 SSH 的情况）
1）确保安装 Git for Windows（自带 Git Credential Manager），并启用：
- git config --global credential.helper manager

2）每个仓库单独设置作者信息（提交显示用）：
- git config user.name "Work Name"
- git config user.email "work@example.com"

3）首次 push 时会弹出网页登录授权；不同仓库会在凭据管理器里保存不同 token。

4）如果你需要“按目录自动切换身份”（避免手动改 user），可用 includeIf：
编辑全局 ~/.gitconfig（C:\Users\<你>\.gitconfig），加入：
[includeIf "gitdir:C:/code/work/"]
	path = .gitconfig-work
[includeIf "gitdir:C:/code/personal/"]
	path = .gitconfig-personal

再分别创建：
C:\Users\<你>\.gitconfig-work
[user]
	name = Work Name
	email = work@example.com

C:\Users\<你>\.gitconfig-personal
[user]
	name = Personal Name
	email = personal@example.com

注意：HTTPS 的“哪个 GitHub 账号在 push”由你授权的 token 决定；user.name/email 只影响提交作者信息。

常见坑排查
- 仍然用错账号：检查 remote URL 是否用了正确 host（SSH）或清理旧凭据（HTTPS）。
- SSH 失败：确认 ~/.ssh/config 路径正确、key 权限/路径正确、并用 ssh -T 测试。
- Windows 路径 includeIf：用正斜杠 C:/...，并保证 gitdir 路径以仓库目录结尾斜杠。
