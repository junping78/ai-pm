# member/ — 会员资源目录（预留）

## 目录用途

存放需要登录或付费才能访问的**会员专属资源**。

## 当前状态

**暂无内容。** 此目录为预留，等后续接入会员系统后启用。

## 规划内容

| 类型 | 格式 | 说明 |
|------|------|------|
| 会员版周报 | PDF | 比免费版更深入的工具评测、使用教程 |
| 视频教程 | MP4 | 教师AI应用实操视频 |
| 课件下载包 | ZIP | 可直接使用的课件模板、教案素材 |
| 深度报告 | PDF | AI教育趋势分析、政策解读 |

## 部署说明

- **当前阶段**：此目录不上传到 GitHub Pages 公开仓库
- **后续阶段**：会员资源建议放 Cloudflare R2 / Supabase Storage，通过 API 鉴权后访问
- 权限管理建议用 Supabase Auth + RLS（Row Level Security）

## 架构参考

```
访客 → 网站首页 → teacher-ai-weekly.html（活动介绍）
                              ↓
                    free/teacher-ai-weekly-report-01.html（免费周报，公开）
                              ↓
                    member/（会员资源，需登录）
                    ├── weekly-report-member-2026-07.pdf
                    ├── video-tutorials/
                    └── download-packs/
```
