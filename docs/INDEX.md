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
| **[weekly-report-workflow.md](weekly-report-workflow.md)** | 流程 | 怎么发新一期周报？从写到发布几步？ | 每周发周报时 |
| **[changelog.md](changelog.md)** | 记录 | 上次改了什么？为什么改？什么时候改的？ | 想知道"上次做到哪了"时 |

---

## 快速入口

### 我想了解网站整体规划
→ 打开 [operation-manual.html](operation-manual.html)，看三阶段建设路线

### 我要新增一个页面或内容
→ 先看 [directory-guide.md](directory-guide.md) 决定放哪里
→ 再看 [principles.md](principles.md) 确认格式标准

### 我要发新一期周报
→ 直接按 [weekly-report-workflow.md](weekly-report-workflow.md) 的步骤走

### 我忘了上次做了什么
→ 看 [changelog.md](changelog.md) 最近一条记录

### 我要做免费/会员内容决策
→ 看 [principles.md](principles.md) 第3-4节（免费与会员设计原则）

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
├── style.css                       公共样式
├── docs/                           ← 管理文档（本目录）
│   ├── INDEX.md                      总索引（本文件）
│   ├── operation-manual.html         操作手册（战略层）
│   ├── principles.md                 运营原则（速查层）
│   ├── directory-guide.md            目录结构约定
│   ├── weekly-report-workflow.md     周报工作流
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

> 结构变更后请同步更新此处。上次更新：2026-07-04
