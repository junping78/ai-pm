# 网站变更记录

> 按时间倒序排列，最新的在最上面。
> 每次改动网站后在这里追加一条记录。

---

## 2026-07-04 GitHub Pages 部署上线 + 常用命令速查

### 改动
- GitHub 仓库 `junping78/ai-pm` 创建完成，代码已推送
- GitHub Pages 开启：Deploy from a branch → main → /(root)
- 网站正式上线：`https://junping78.github.io/ai-pm/`
- `docs/INDEX.md` 新增「常用命令速查」章节，包含 VS Code 图形界面操作和命令行两种推送方式
- 决定：GitHub 用户名维持 `junping78` 不改名，等以后买自定义域名时一步到位

### 原因
- 网站需要公网可访问，GitHub Pages 免费且适合静态站点
- 刘老师担心记不住 git 命令，推荐用 VS Code 源代码管理面板（图形界面，零记忆）
- 同时在 INDEX.md 记录命令速查，双保险

---

## 2026-07-04 管理文档整理

### 改动
- 创建 `docs/` 目录，将所有管理文档集中管理
- `website-operation-manual.html` → `docs/operation-manual.html`（移动）
- `website-principles.md` → `docs/principles.md`（移动）
- 修正 `principles.md` 中过时的"美国陪聊 / 英语陪练 / 跨文化交流"为"情绪陪伴 · 禅修分享"
- 新建 `docs/INDEX.md` — 管理文档总索引（唯一入口）
- 新建 `docs/changelog.md` — 变更记录（本文件）
- 新建 `docs/directory-guide.md` — 目录结构约定
- 新建 `docs/weekly-report-workflow.md` — 周报发布工作流

### 原因
- `website-operation-manual.html` 和 `website-principles.md` 内容重叠 80%，且和网站页面混在根目录，容易弄混
- `website-principles.md` 中"美国陪聊"内容已过时（网站已改为"情绪陪伴 · 禅修分享"），但文档未同步更新
- 需要一个总索引文件，回来时打开一个文件就知道该看什么

### 影响
- 根目录不再有管理文档，只放网站页面
- `docs/INDEX.md` 是回来时的唯一入口

---

## 2026-07-04 网站目录结构升级（三方案落地）

### 改动
- 创建 `free/` 目录，存放免费公开内容
- 创建 `member/` 目录，预留会员资源
- 创建 `free-reports/` 目录，存放周报 Markdown + YAML 内容源
- `teacher-ai-weekly-report.html` 从根目录移入 `free/`
- 修正周报 HTML 内导航链接（加 `../` 前缀返回主站）
- `teacher-ai-weekly.html` 中"打开周报"按钮链接更新为 `free/teacher-ai-weekly-report.html`
- 各子目录创建 README.md 说明用途

### 原因
- 刘老师确认方案1-3都可行，一次性落地
- 公开内容和会员内容需要物理分开，为后续接入权限管理做准备
- 内容源用 Markdown + YAML，方便长期维护和自动生成

---

## 2026-07-04 周报文件名修复

### 改动
- `教师免费AI工具周报.html`（中文文件名）→ `teacher-ai-weekly-report.html`（英文文件名）
- 更新 `teacher-ai-weekly.html` 中"打开周报"按钮链接
- 同步更新 `website-operation-manual.html` 和 `website-principles.md` 中的引用

### 原因
- 中文文件名在 URL 中需要编码（`%E6%95%99...`），部署到网络后路径解析不稳定
- 刘老师反馈：点击"打开周报"后浏览器跳转到另一个目录

---

## 2026-07-04 服务内容调整：美国陪聊 → 情绪陪伴 · 禅修分享

### 改动
- `about.html`：副标题、专业方向、服务介绍、适合人群、联系方式全面重写
- `index.html`：标题、描述、首页服务卡片、城市信息
- `ai-project-management.html`、`teacher-ai-weekly.html`：页脚城市信息
- 全站"美国陪聊 / 英语陪练 / 跨文化交流"替换为"情绪陪伴 · 禅修分享"
- 服务语言明确为中文（非英文）
- 所在城市更新为"武汉 / 美国纽黑文"

### 原因
- 刘老师提供截图参考，说明陪聊服务实际是基于佛学14年经验和九型人格的禅修分享
- 陪聊可行但只能基于中文服务，不能是英文

---

## 2026-07-03 网站MVP搭建

### 改动
- 搭建公开静态网站MVP，共7个文件：
  - `style.css` — 全站公共样式，主色 #534AB7
  - `index.html` — 首页（个人定位 + 三大服务卡片 + 合作咨询CTA）
  - `about.html` — 关于我（含联系方式）
  - `ai-project-management.html` — AI赋能项目管理课程页
  - `teacher-ai-weekly.html` — 教师优惠活动介绍页
  - `teacher-ai-weekly-report.html` — 周报内容（从 `2026年7月2日 教师优惠活动/` 目录复制）
  - `website-operation-manual.html` — 操作手册（原有）

### 关键决策
- 联系方式放在 about.html 底部 + 全站页脚（不单独建 contact.html）
- 抽取公共 style.css，避免每页内联样式
- 导航栏5项：首页 / 关于我 / AI赋能项目管理 / 教师AI工具周报 / 联系合作
- 纯静态HTML + CSS，无JS依赖
- 响应式设计，打印友好
