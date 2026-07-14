# 周报发布工作流

> 每周发新一期教师免费AI工具周报时，按这个流程走。

---

## 涉及的目录

| 目录 | 放什么 | 角色 |
|------|--------|------|
| `free-reports/` | Markdown 源文件 + YAML 工具数据 | 内容源（写在这里） |
| `free/` | 生成的 HTML 页面 | 发布页面（访客看到的） |
| `teacher-ai-weekly.html`（根目录） | 活动介绍页 | 入口页（链接到 free/ 下的周报） |

---

## 新增一期周报：5 步

### 第1步：复制源文件

复制 `free-reports/` 下最近一期的 `.md` 文件，重命名为新日期：

```
free-reports/2026-07-02.md  →  free-reports/2026-07-09.md
```

### 第2步：更新内容

打开新的 `.md` 文件，更新：

- YAML front matter 中的 `日期` 和 `期号`
- 正文内容（新增工具、修改描述、调整推荐组合）

### 第3步：更新工具数据

如果有新工具加入，同步更新 `free-reports/tools.yaml`：

```yaml
- name: 工具名称
  vendor: 开发商
  url: 官网链接
  category: 分类
  desc: 一句话介绍
  tags: [标签1, 标签2]
```

### 第4步：生成 HTML

目前手动：参考 `free/teacher-ai-weekly-report-01.html` 的格式，生成新 HTML 放到 `free/` 目录。

文件命名规则：
```
free/teacher-ai-weekly-report-{XX}.html
```
- XX 为两位数字期号：01, 02, 03, ..., 10, 11, ...

后续计划：开发脚本从 Markdown + YAML 自动生成 HTML（待开发）。

### 第5步：更新活动页入口

打开根目录 `teacher-ai-weekly.html`，更新"打开周报"按钮链接指向最新一期：

```html
<a href="free/teacher-ai-weekly-report-2026-07-09.html" class="btn btn-primary">
    📖 打开最新周报 →
</a>
```

---

## 文件命名规则

| 类型 | 规则 | 示例 |
|------|------|------|
| Markdown 源文件 | `YYYY-MM-DD.md` | `2026-07-02.md` |
| HTML 发布页面 | `teacher-ai-weekly-report-YYYY-MM-DD.html` | `teacher-ai-weekly-report-2026-07-02.html` |

> 全部用英文文件名 + 日期，不用中文文件名（避免 URL 编码问题）。

---

## YAML front matter 字段

```yaml
---
日期: 2026-07-02
期号: 1
类型: free        # free / member
状态: published    # draft / published
---
```

---

## 免费版 vs 会员版

| | 免费版 | 会员版 |
|---|--------|--------|
| 存放目录 | `free-reports/` + `free/` | `member-reports/` + `member/`（后续） |
| 内容深度 | 工具名称、官网、一句话介绍、适用场景 | 最佳入口、注册方法、使用技巧、Prompt、教学案例 |
| 访问方式 | 公开访问 | 需登录（后续接入） |
| 部署位置 | GitHub Pages | Cloudflare R2 / Supabase Storage |

> 原则：免费版告诉用户"是什么"，会员版告诉用户"怎么做"。官网链接不藏，会员价值在方法、经验、案例。

---

## 检查清单

发布前确认：

- [ ] Markdown 源文件已创建并更新内容
- [ ] `tools.yaml` 已同步新工具（如有）
- [ ] HTML 已生成并放入 `free/` 目录
- [ ] HTML 内导航链接使用了 `../` 前缀（能返回主站）
- [ ] `teacher-ai-weekly.html` 活动页链接已指向最新一期
- [ ] 在 `docs/changelog.md` 追加一条记录
