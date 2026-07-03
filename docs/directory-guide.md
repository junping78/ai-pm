# 目录结构约定

> 新增文件前先看这个，决定文件放哪里。

---

## 总原则

```
网站根目录  →  只放网站页面（HTML、CSS），不放管理文档
docs/       →  只放管理文档，不放网站页面
free/       →  免费公开内容（访客可直接访问）
free-reports/ → 免费周报内容源（Markdown + YAML）
member/     →  会员资源（预留，后续接入权限管理）
```

---

## 完整目录结构

```
网站根目录
├── index.html                       首页
├── about.html                       关于我（含联系方式 #contact）
├── ai-project-management.html        AI赋能项目管理课程页
├── teacher-ai-weekly.html           教师活动介绍页
├── style.css                        公共样式（主色 #534AB7）
│
├── docs/                            管理文档
│   ├── INDEX.md                       总索引（唯一入口）
│   ├── operation-manual.html          操作手册（战略层）
│   ├── principles.md                  运营原则（速查层）
│   ├── directory-guide.md             目录结构约定（本文件）
│   ├── weekly-report-workflow.md      周报发布工作流
│   └── changelog.md                   变更记录
│
├── free/                            免费公开内容
│   ├── README.md                      目录说明
│   └── teacher-ai-weekly-report.html  周报HTML（第1期）
│
├── free-reports/                    周报内容源
│   ├── README.md                      工作流说明
│   ├── 2026-07-02.md                  Markdown 源文件
│   └── tools.yaml                     结构化工具数据
│
└── member/                          会员资源（预留）
    └── README.md                      规划说明
```

---

## 各目录详细说明

### 根目录（网站页面）

**放什么：** 访客直接访问的 HTML 页面和公共样式表

**规则：**
- 文件名用英文（`index.html`、`about.html`），不用中文
- 所有页面共享 `style.css`，不内联样式
- 导航栏5项：首页 / 关于我 / AI赋能项目管理 / 教师AI工具周报 / 联系合作
- 联系方式放在 `about.html` 底部（`#contact` 锚点），不单独建页

### docs/（管理文档）

**放什么：** 网站建设、运营、维护相关的文档

**规则：**
- 回来第一件事打开 `docs/INDEX.md`
- 不放网站页面
- 每次改动网站结构后，更新 `docs/changelog.md`
- 子目录里的 README.md 保留不动（它们是本地说明，和 docs/ 不冲突）

### free/（免费公开内容）

**放什么：** 面向所有访客的免费内容，无需登录即可访问

**当前内容：**
- `teacher-ai-weekly-report.html` — 教师免费AI工具周报（第1期）

**规则：**
- 此目录会随网站一起部署到 GitHub Pages
- HTML 内的导航链接使用 `../` 前缀返回主站（如 `../index.html`）
- 不包含任何需要付费或登录才能访问的内容
- 后续周报多时可按日期建子目录：`free/2026-07/`

### free-reports/（周报内容源）

**放什么：** 周报的 Markdown 源文件和结构化工具数据

**当前内容：**
- `2026-07-02.md` — 周报 Markdown 源文件
- `tools.yaml` — 40+ 工具的结构化数据

**规则：**
- 文件命名：`YYYY-MM-DD.md`
- YAML front matter 必须包含：日期、期号、类型、状态
- 新增工具时同步更新 `tools.yaml`
- 详见 `docs/weekly-report-workflow.md`

### member/（会员资源）

**放什么：** 需要登录或付费才能访问的会员专属资源

**当前状态：** 暂无内容，预留目录

**规划内容：**
- 会员版周报 PDF
- 视频教程 MP4
- 课件下载包 ZIP
- 深度报告 PDF

**规则：**
- 此目录不上传到 GitHub Pages 公开仓库
- 后续接入 Cloudflare R2 / Supabase Storage
- 权限管理用 Supabase Auth + RLS

---

## 新增文件决策表

| 要新增什么 | 放哪里 | 命名规则 |
|-----------|--------|---------|
| 新网页 | 根目录 | `英文名.html` |
| 管理文档 | `docs/` | `英文名.md` 或 `.html` |
| 免费周报 HTML | `free/` | `teacher-ai-weekly-report-YYYY-MM-DD.html` |
| 周报 Markdown 源 | `free-reports/` | `YYYY-MM-DD.md` |
| 会员资源 | `member/`（后续） | 按类型命名 |

> 放完文件后，记得在 `docs/changelog.md` 追加一条记录。
