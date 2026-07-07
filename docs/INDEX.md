# 网站管理文档总索引

> **回来第一件事：打开这个文件。**
> 这里列出了所有管理文档，告诉你该看哪个、什么时候看。

---

## 文档清单

| 文档 | 性质 | 回答什么问题 | 什么时候看 |
|------|------|------------|-----------|
| **[INDEX.md](INDEX.md)** | 导航 | 我有哪些管理文档？ | 每次回来第一件事 |
| **[operation-manual.html](operation-manual.html)** | 战略 | 网站长期怎么建？三阶段路线是什么？ | 做规划、做重大决策时 |
| **[principles.md](principles.md)** | 原则 | 内容怎么分免费/会员？格式标准是什么？栏目怎么克制？ | 新增内容、做设计选择时 |
| **[directory-guide.md](directory-guide.md)** | 结构 | 文件放哪里？free/ 和 member/ 怎么用？ | 新增文件、整理目录时 |
| **[capacity-policy.md](capacity-policy.md)** | 容量 | 什么能放 GitHub？大文件放哪里？ | 新增文件、上传资料前必看 |
| **[weekly-report-workflow.md](weekly-report-workflow.md)** | 流程 | 怎么发新一期周报？从写到发布几步？ | 每周发周报时 |
| **[content-asset-registry.html](content-asset-registry.html)** | 资产（内部） | D:\Sy课程开发 的课程资料盘点（3312个文件） | 盘点课程开发目录内容时 |
| **[content-asset-registry-v2.html](content-asset-registry-v2.html)** | 资产（内部） | 全部内容资产盘点（28877个文件，含项目管理资料库/Haoyunjp/My Document） | 全面盘点家底、做资源中心、决定哪些内容上线时 |
| **[changelog.md](changelog.md)** | 记录 | 上次改了什么？为什么改？什么时候改的？ | 想知道"上次做到哪了"时 |

---

## 快速入口

### 我想了解网站整体规划
→ 打开 [operation-manual.html](operation-manual.html)，看三阶段建设路线

### 我要新增一个页面或内容
→ 先看 [capacity-policy.md](capacity-policy.md) 确认文件能不能放 GitHub
→ 再看 [directory-guide.md](directory-guide.md) 决定放哪里
→ 最后看 [principles.md](principles.md) 确认格式标准

### 我要发新一期周报
→ 直接按 [weekly-report-workflow.md](weekly-report-workflow.md) 的步骤走

### 我要盘点课程资料 / 决定哪些内容上线
→ 打开 [content-asset-registry-v2.html](content-asset-registry-v2.html)（完整版，28877个文件）
→ 或 [content-asset-registry.html](content-asset-registry.html)（课程开发目录，3312个文件）
→ 按类型/主题/公开级别筛选

### 我忘了上次做了什么
→ 看 [changelog.md](changelog.md) 最近一条记录

### 我要推送网站更新到线上
→ 看下面「常用命令速查」，或直接用 VS Code 源代码管理面板（推荐）

### 我要做免费/会员内容决策
→ 看 [principles.md](principles.md) 第3-4节（免费与会员设计原则）

---

## 常用命令速查

> 改完文件后，用以下任一方式把更新推到 GitHub，1-2 分钟后网站自动更新。

### 方式一：VS Code 图形界面（推荐，零记忆）

1. 点击 VS Code 左侧 **源代码管理** 图标（三个圆圈连线）
2. 在输入框写一句说明（比如"更新了关于我页面"）
3. 点 **✓ 提交** 按钮
4. 点 **同步更改** 按钮

### 方式二：命令行（3 条命令）

```bash
git add .                        # 打包所有改动
git commit -m "更新说明"           # 贴标签，写改了什么
git push                         # 推到 GitHub，网站自动更新
```

### 网站地址

```
https://junping78.github.io/ai-pm/
```

---

## 文档管理规则

1. **管理文档统一放 `docs/` 目录**，不放在网站根目录
2. **网站根目录只放网站页面**（HTML、CSS），不放管理文档
3. **子目录里的 README.md 保留**——它们是"打开该目录时看的本地说明"，和 docs/ 里的正式文档不冲突
4. **每次改动网站结构后，更新 changelog.md**
5. **每次修改管理文档本身，也在 changelog.md 记一笔**

---

## 当前网站结构概览

```
网站根目录
├── index.html                      首页
├── about.html                      关于我（含联系方式）
├── ai-project-management.html       AI赋能项目管理课程页
├── teacher-ai-weekly.html          教师活动介绍页
├── weekly-list.html                周报列表页（历史期刊浏览）
├── ai-tools.html                   AI工具导航页（40+工具精选）
├── resources.html                 资源中心（6大分类，免费/会员标注）
├── tags.html                      标签浏览（60+标签，按主题浏览全站）
├── search.html                    站内搜索（页面+工具+资源，实时搜索）
├── search-index.json              搜索索引数据（66条记录）
├── style.css                       公共样式
├── docs/                           ← 管理文档（本目录）
│   ├── INDEX.md                      总索引（本文件）
│   ├── operation-manual.html         操作手册（战略层）
│   ├── principles.md                 运营原则（速查层）
│   ├── directory-guide.md            目录结构约定
│   ├── capacity-policy.md            容量策略（什么能放GitHub）
│   ├── weekly-report-workflow.md     周报工作流
│   ├── content-asset-registry.html   内容资产登记表V1（内部，已在.gitignore）
│   ├── content-asset-registry-v2.html 内容资产登记表V2（内部，已在.gitignore）
│   └── changelog.md                  变更记录
├── free/                           免费公开内容
│   ├── README.md
│   └── teacher-ai-weekly-report.html
├── free-reports/                   周报内容源（Markdown + YAML）
│   ├── README.md
│   ├── 2026-07-02.md
│   └── tools.yaml
└── member/                         会员资源（预留）
    └── README.md
```

> 结构变更后请同步更新此处。上次更新：2026-07-08
