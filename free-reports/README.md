# free-reports/ — 免费周报内容源

## 目录用途

存放教师免费AI工具周报的**内容源文件**，用于长期维护和自动生成页面。

## 文件说明

| 文件 | 说明 |
|------|------|
| `2026-07-02.md` | 周报 Markdown 源文件，包含完整的文字内容和工具列表 |
| `tools.yaml` | 结构化工具数据，每个工具包含 name/vendor/url/category/desc/tags 字段 |

## 工作流程

### 新增一期周报

1. 复制最近的 `.md` 文件，重命名为新日期，如 `2026-07-09.md`
2. 更新 YAML front matter（日期、期号）
3. 更新内容（新增工具、修改描述、调整推荐组合）
4. 同步更新 `tools.yaml`（如有新工具加入）
5. 用脚本生成 HTML 到 `../free/` 目录（脚本待开发）

### 文件命名规则

```
YYYY-MM-DD.md
```

示例：`2026-07-02.md`、`2026-07-09.md`

### YAML front matter 字段

```yaml
- 日期: YYYY-MM-DD
- 期号: 数字
- 类型: free / member
- 状态: draft / published
```

## 后续计划

- [ ] 开发 Markdown -> HTML 自动生成脚本
- [ ] 会员版周报放 `../member-reports/` 目录
- [ ] 工具数据可视化（分类筛选、搜索）
