# 网站变更记录

> 按时间倒序排列，最新的在最上面。
> 每次改动网站后在这里追加一条记录。

---

## 2026-07-15 AI项目管理页面新增「已交付课程案例」区块

### 变更
- **新增「已交付课程案例」区块**：在 ai-project-management.html 的"课程内容"和"可解决的问题"之间，新增课程案例展示区
- **精选5个代表案例**：芯片（7月·战略项目管理）、通信（5月·目标管理与计划执行）、能源（4月·工程项目管理AI赋能）、制造（1月·研发项目管理三阶段）、航空（12月·AI赋能与最佳实践），始终可见
- **全部39个案例展开**：点击"查看全部39个案例"按钮展开剩余案例，按时间倒序排列，再点击收起
- **行业筛选栏**：12个行业标签（全部/芯片/通信/能源/制造/航空/金融/IT/工程/科技/石化/教育/综合），点击筛选对应行业案例
- **客户名称脱敏**：所有案例均不出现真实客户名称，用行业标签代替
- **时间去年份**：只保留月份，不显示年份
- **卡片设计**：左边框按行业着色（12色区分）、hover浮起效果、模块速览列表、差异化亮点标签
- **响应式布局**：桌面端2-3列网格，移动端单列

### 数据来源
- 扫描 D:\Sy课程开发\ 下39个课程大纲目录，使用 Python python-docx 批量提取大纲内容
- 逐个提炼为标准化摘要卡片：行业标签 + 月份 + 课程名称 + 时长/对象 + 模块速览 + 亮点标签

---

## 2026-07-14 关于我页面重写：从服务介绍页改为信任建立页

### 变更
- **定位调整**：about.html 从"服务介绍页"改为"信任建立页"，与首页形成"概览→详情"的分工
- **删除重复内容**：移除"我的专业方向"（与首页"三大服务"重复）、"AI赋能项目管理"详细卡片（首页已有引流）、"我能提供什么帮助"列表（与首页重复）
- **新增"我为什么做这件事"**：融入AI时代趋势（国资委强制推进、培训采购转向能力验证、AI Agent成必选项、国产大模型反超），建立紧迫感和真实感
- **新增"我的工作方式"**：用个人化语言讲述"三度模型"方法论（结构感×效率感×温度感），不再是服务卡片
- **保留独有内容**：情绪陪伴详情、适合哪些人、联系方式、在线咨询表单
- **页面副标题更新**："企业AI项目管理培训咨询师..." → "为什么是我？..."

### 页面分工确立
- 首页：你是谁？你能帮我什么？我该去哪里？（概览、入口、方向分流）
- 关于我：我为什么值得信任？我和别人有什么不同？我适不适合找你？（个人背景、方法论、风格、适合对象、联系转化）

---

## 2026-07-14 资源页去重：AI工具与教程→AI开放数据

### 变更
- **resources.html「AI工具与教程」区块精简**：移除 AI工具箱、教师免费AI工具周报 两张重复卡片（与顶部导航重复），只保留 AI工具结构化数据库
- **区块标题更名**：「AI工具与教程」→「AI 开放数据」
- **新增快捷入口**：区块底部添加一行文字链接，指向 AI工具箱 和 教师免费AI工具周报
- **meta描述更新**：AI工具导航 → AI开放数据

### 原因
- AI工具箱和教师周报已是顶部导航的一级入口，在资源页重复展示造成用户困惑和页面冗长
- 资源页应聚焦"别处没有"的内容（结构化数据库、项目管理工具包、禅修资料等）

---

## 2026-07-14 周报命名规则统一 + 列表布局调整（最新置顶）

### 变更
- **第1期文件重命名**：`teacher-ai-weekly-report.html` → `teacher-ai-weekly-report-01.html`，统一命名规则为 `teacher-ai-weekly-report-{期号}.html`
- **周报列表布局调整**：weekly-list.html 从"第1期→第2期→第3期(占位)"正序改为"最新期刊→历史期刊"分区倒序
  - 🔥 最新期刊区：第2期置顶（is-latest 高亮 + "最新"徽章）
  - 📖 历史期刊区：第1期在下方
  - 第3期占位卡片移到底部
- **全站引用更新**：5个核心文件的旧文件名引用改为新文件名
  - weekly-list.html、free/teacher-ai-weekly-report-02.html、search-index.json、sitemap.xml、tags.html

### 命名规则（正式确认）
- 格式：`teacher-ai-weekly-report-{XX}.html`
- XX 为两位数字期号：01, 02, 03, ..., 10, 11, ...
- 存放路径：`free/` 目录下
- 第1期已从无编号版本改为 `-01` 版本

---

## 2026-07-14 教师周报第2期上线

### 新增
- **第2期周报上线**：`free/teacher-ai-weekly-report-02.html`，新增"九章爱学老师版"工具，DeepSeek和腾讯元宝标注"⭐完全免费"
- 第2期文件已做网站适配（favicon、GA4、导航栏、页脚、相关推荐）
- 第1期页脚和相关推荐增加指向第2期的链接

### 更新
- **weekly-list.html**：第2期占位改为正式卡片（is-latest），第1期取消is-latest，统计栏更新（2期/07-14），新增第3期占位
- **teacher-ai-weekly.html**："打开最新一期"按钮指向第2期
- **resources.html**："查看周报"改为"查看最新周报"指向第2期
- **search-index.json**：新增第2期条目（page+resource），新增"九章爱学老师版"工具条目，腾讯元宝desc更新
- **tags.html**：新增第2期tagData（page+resource），新增"九章爱学老师版"工具条目
- **sitemap.xml**：新增第2期URL，第1期changefreq改为monthly

---

## 2026-07-14 导航优化：AI工具→AI工具箱 + 教师周报导航指向调整

### 变更
- **AI工具→AI工具箱**：全站12个HTML页面导航栏"AI工具"改为"AI工具箱"，ai-tools.html页面标题/H1/描述同步更新
- **教师周报导航指向调整**：导航"教师周报"从指向teacher-ai-weekly.html改为指向weekly-list.html（周报列表成为主入口）
- **teacher-ai-weekly.html降级为周报介绍页**：标题改为"周报介绍"，加"返回周报列表"按钮，定位为活动介绍/订阅引导页
- **weekly-list.html升级为教师周报主入口**：H1改为"教师周报"，顶部加"了解周报活动"按钮跳转到teacher-ai-weekly.html
- **页脚链接调整**：全站页脚"周报列表"改为"周报介绍"指向teacher-ai-weekly.html
- **相关推荐同步更新**：全站相关推荐卡片"AI工具导航"改为"AI工具箱"，教师周报相关卡片指向weekly-list.html
- **search-index.json**：4条记录同步更新（周报介绍、教师周报、AI工具箱×2）
- **tags.html tagData**：3条记录同步更新

### 涉及文件
- 全站12个HTML页面 + search-index.json + docs/changelog.md

---

## 2026-07-08 标签体系精简 + 项目管理资料库接入WPS云盘

### 变更
- **标签清理**：从tagData中删除19个低价值标签（英语、365、推理、出题、古诗文、清华、呼吸、短期出家、读书笔记、协作、周报、案例、方法论、联系方式、CMMI、佛学、慧灯之光、广论等）
- **标签分组精简**：核心主题去读书笔记、AI工具类型去协作、服务方向去周报/案例/方法论/联系方式、行业领域去CMMI、修行相关去佛学/慧灯之光/广论
- **项目管理资料库接入WPS云盘**：6个项目管理资源（21套方法工具包、255套表格、33套案例、39套PPT课件、甘特图模板、华为教材）链接改为WPS公开链接，access从member改为free
- **resources.html**：6个PM资源卡片标签从"会员"改为"免费"，按钮从"联系获取"改为"在线查看"，底部说明文字更新
- **search-index.json**：6个PM资源记录同步更新url和access
- **tags.html**：6个PM资源记录同步更新url、access和tags中的"会员"→"免费"

### WPS公开链接
- 项目管理资料库：https://whu.kdocs.cn/folder/cnms1oEoXBiP

---

## 2026-07-08 导航栏优化（10入口→7入口）

### 变更
- **主导航从10个入口缩减为7个**：首页 | 关于我 | AI项目管理 | 教师周报 | AI工具 | 资源 | 联系
- **文案缩短**：AI赋能项目管理→AI项目管理、教师AI工具周报→教师周报、AI工具导航→AI工具、资源中心→资源、联系合作→联系
- **标签、搜索、周报列表移出主导航**，放入全站页脚"footer-links"区域
- **CSS优化**：nav-links 添加 `white-space: nowrap` + `flex-wrap: nowrap` 防止换行，字号 14.5px→15px，间距 4px→6px，padding 14px→16px
- **新增 .footer-links 样式**：页脚链接区域，浅色文字，hover变白
- **全站10个页面同步更新**：9个根目录页面 + 1个子目录页面（free/）
- **active状态调整**：weekly-list→教师周报active、tags→资源active、search→资源active
- **ai-tools.html快速导航区域同步更新**：文案缩短 + 补全所有页面链接

### 原因
- 导航栏10个入口 + 中文标签偏长 → 桌面端横向空间不够 → 强行换行 → 视觉散乱
- 行业标准：主导航5-7个入口，低频功能收进页脚/下拉/资源页

---

## 2026-07-08 发布前风险检查（四项全通过）

### 1. 内容资产登记表安全风险（已修复）
- **V2（content-asset-registry-v2.html）**：含339处本地路径泄露，包括 WizNote 数据库路径、邮箱 Liujp8@163.com、客户名称（富士康等）、内部目录结构 → **已加入 .gitignore，不推送到 GitHub**
- **V1（content-asset-registry.html）**：含2处路径泄露 + 6处客户名称 → **同样加入 .gitignore**
- **生成脚本**（generate_asset_registry*.py）：含硬编码本地路径 → **加入 .gitignore**
- **resources.html**：已移除指向登记表的公开链接
- **INDEX.md**：已标注"内部"字样
- 结论：登记表保留为本地内部文档，如需公开版后续做脱敏处理

### 2. sitemap.xml 补全
- 新增 `search.html`（priority 0.6，weekly）
- 当前 sitemap 包含10个页面，全部公开页面已覆盖

### 3. 全站链接检查（219个链接，0个真断链）
- 10个HTML页面全部可访问
- 导航栏一致性：10个页面 × 9个导航链接 = 全部一致
- 42个"断链"均为误报（about.html#contact 锚点链接 + JS模板变量）
- 咨询表单：action 指向 FormSubmit.co/liujp8@163.com，正常
- search-index.json：68条记录，JSON格式有效，URL全部有效
- 锚点 #contact、#peitong 在 about.html 中存在

### 4. Google Analytics 检查（10/10页面全通过）
- 全部10个公开页面均包含 GA4 代码 G-ZWYYBYRN3S
- 每个页面同时有 gtag.js 加载 + gtag('config') 配置

### 改动
- **新建 `weekly-list.html`** — 周报列表页
  - 展示全部历史期刊，当前第1期（创刊号）+ 第2期占位
  - 每期卡片含：期号徽章、日期、标题、摘要、工具数、免费/会员标签、阅读链接
  - 最新一期高亮标注（绿色"最新"角标）
  - 统计栏：已发期数 / 工具总数 / 推荐组合 / 最新日期
  - 筛选栏：全部 / 免费 / 会员
  - 订阅通知区：微信关注 / 邮件订阅 / 收藏本页
  - 关于周报说明区：更新频率、免费版/会员版区别、信息时效说明
- **全站导航统一** — 9个页面（含free/子目录）导航栏加入「周报列表」
- **teacher-ai-weekly.html CTA更新** — 从单个"打开周报"按钮改为"打开最新一期"+"查看周报列表"双按钮
- **sitemap.xml** — 新增 weekly-list.html
- **search-index.json** — 新增周报列表页（67条记录）

### 影响
- 全站导航栏现为10个入口：首页 / 关于我 / AI赋能项目管理 / 教师AI工具周报 / 周报列表 / AI工具导航 / 资源中心 / 标签 / 搜索 / 联系合作
- 用户可从任何页面直接查看周报历史期刊

---

## 2026-07-08 B层完成：标签浏览 + 相关推荐

### 改动
- **新建 `tags.html`** — 标签浏览页面（B层第三步）
  - 全站内容按主题标签组织，66条内容条目，60+标签
  - 标签云 + 标签分组（核心主题/AI工具类型/服务方向/内容属性/行业领域/修行相关）
  - 点击标签查看相关页面、工具、资源
  - 支持按类型筛选（全部/页面/AI工具/资源）
  - 支持URL参数（`tags.html?tag=项目管理`）
- **全站导航栏更新** — 8个页面统一添加「标签」链接
- **sitemap.xml更新** — 添加tags.html
- **相关推荐区块** — 全站8个页面底部统一添加「你可能还感兴趣」
  - 每页3-4个相关链接，根据页面内容智能匹配
  - style.css新增 `.related-section` / `.related-card` 样式
  - 打印时自动隐藏

### 影响
- B层（搜索与内容互联）全部完成：资源中心 ✅ + 站内搜索 ✅ + 标签页 ✅ + 相关推荐 ✅

---

## 2026-07-08 B层第二步：站内搜索功能

### 改动
- **新建 `search.html`** — 站内搜索页面（B层第二步）
  - 客户端实时搜索，覆盖全站7个页面 + 37个AI工具 + 22个资源
  - 按相关度排序，结果分组显示（页面/AI工具/资源）
  - 支持按类型筛选 + 关键词高亮
  - 支持URL参数搜索（`search.html?q=关键词`）
  - 未搜索时显示热门搜索词和快速访问入口
- **新建 `search-index.json`** — 搜索索引数据
  - 66条记录，每条含标题、描述、关键词、分类、访问级别
  - 可在内容更新后重新生成
- **全站导航栏更新** — 7个页面统一添加「搜索」链接
  - index.html / about.html / ai-project-management.html / teacher-ai-weekly.html
  - ai-tools.html / resources.html / free/teacher-ai-weekly-report.html
- **SEO** — search.html 设置 `noindex`，不收录搜索结果页

---

## 2026-07-08 B层启动：资源中心页面 + 全站导航统一

### 改动
- **新建 `resources.html`** — 资源中心页面（B层第一步）
  - 6大分类：项目管理工具包 / AI工具与教程 / 情绪陪伴·禅修 / 招标投标资源 / 企业内训案例 / 读书笔记与参考资料
  - 每个资源卡片标注：免费/会员、文件数量、获取方式
  - 免费资源可直接索取，会员资源引导联系
  - 支持按分类/公开级别筛选 + 实时搜索
  - 底部说明大文件不存放在网站，引导通过微信/邮箱索取
  - 风格与全站统一，响应式设计，打印友好
- **全站导航栏统一添加「资源中心」链接**（7个页面）：
  - index.html、about.html、ai-project-management.html、teacher-ai-weekly.html、ai-tools.html（根目录5页）
  - free/teacher-ai-weekly-report.html（子目录，用`../`前缀）
  - resources.html 自身已有
- **sitemap.xml 新增 resources.html 条目**
- **docs/INDEX.md 更新**：结构概览新增 resources.html

### 原因
- B层第一步：先把内容"摆出来给人看"，让用户来了能直接看到"这里有东西"
- 资源中心基于内容资产登记表的高优先级文件整理，是A层成果的用户可见化
- 全站导航统一，确保用户从任何页面都能到达资源中心

### 待办
- 资源卡片内容目前为概要描述，后续可补充具体文件列表
- B层后续：站内搜索、标签页、相关推荐

---

## 2026-07-08 导航栏统一 + sitemap更新

### 改动
- **5个页面导航栏统一添加「AI工具导航」链接**：
  - index.html、about.html、ai-project-management.html、teacher-ai-weekly.html（根目录4页）
  - free/teacher-ai-weekly-report.html（子目录，用`../`前缀）
  - ai-tools.html 自身已有，无需修改
- **sitemap.xml 新增 ai-tools.html 条目**

### 原因
- AI工具导航页做完后，其他页面导航栏没有指向它的链接，用户无法从网站内部到达
- sitemap.xml 缺少 ai-tools.html，搜索引擎无法发现该页面

---

## 2026-07-08 第三阶段A层扩展：三目录内容资产登记表V2

### 改动
- **新建 `docs/content-asset-registry-v2.html`** — 扩展版内容资产登记表
  - 在 V1 基础上新增扫描三个目录：
    - `D:\Sy课程开发\项目管理资料库`（533文件，2.73GB）— 项目管理工具包/表格/案例/PPT课件/甘特图
    - `D:\Haoyunjp`（12,167文件，54.90GB）— 为知笔记数据/BookxNote读书笔记/录音文件
    - `D:\My Document`（20,201文件，216.16GB）— 企业内训/宗教禅修/国家软考/CMMI/公益/照片视频等
  - 三目录合计：**28,877个内容文件，273.79GB，20个主题**
  - 主题分布Top5：情绪陪伴·禅修(6768) / 照片(5706) / 项目管理(5552) / 国家软考(3662) / 教师AI与教育(2526)
  - 914个大文件(>50MB)单独列出，标注不适合放GitHub
  - 支持按来源/优先级/公开级别筛选 + 实时搜索 + 表头排序
  - 配套生成脚本 `generate_asset_registry_v2.py`（可重新扫描更新）
- **docs/INDEX.md 更新**：新增 content-asset-registry-v2.html 到文档清单和结构概览

### 原因
- V1只扫描了 D:\Sy课程开发 一个目录，遗漏了项目管理资料库、为知笔记、个人文档总库三大资产库
- 用户要求对三个额外目录做内容资产登记，补全家底清单
- V1(3312文件) + V2(28877文件) 合计覆盖刘老师全部内容资产

### 待办
- V1和V2后续可合并为统一登记表，或保持V2作为完整版
- 照片类5706个文件占比较大，后续可考虑按年份/事件进一步细分
- 大文件(914个>50MB)需要制定归档策略，确认是否上传到对象存储

---

## 2026-07-08 第三阶段A层：内容资产数字化 + AI工具导航页

### 改动
- **新建 `docs/content-asset-registry.html`** — 内容资产登记表
  - 扫描 D:\Sy课程开发 全部文件（7601个文件，28.74GB）
  - 过滤代码噪音后保留3312个内容文件
  - 自动打标签：类型（PPT/文档/PDF/视频/音频/图片/表格等）、主题（AI项目管理/情绪陪伴·禅修/教师AI/项目管理认证等15个主题）、栏目、公开级别（公开/部分公开/会员）、会员级别（免费/基础会员/高级会员）、优先级（高/中/低）
  - 支持搜索、分类筛选、表头排序
  - HTML格式，适合屏幕阅读和打印
  - 配套生成脚本 `generate_asset_registry.py`（可重新扫描更新）
- **新建 `ai-tools.html`** — AI工具导航页
  - 基于 tools.yaml 中40+工具数据
  - 6大分类：国内官方平台 / 国内通用大模型 / 教学/课件专用 / PPT制作 / 国外免费工具 / 国外教师专属
  - 5个推荐组合：零门槛起步 / 备课提效 / 英语教师专项 / 科研论文型 / 办公协作
  - 实时搜索 + 分类筛选 + 标签系统
  - 风格与全站统一（主色 #534AB7），响应式设计，打印友好
- **docs/INDEX.md 更新**：新增 content-asset-registry.html 到文档清单和快速入口，更新网站结构概览

### 原因
- 第三阶段调整为「内容资产数字化 → 站内搜索与内容互联 → AI知识库」三层推进
- 先盘点家底（内容资产登记表），再做展示（AI工具导航页），最后才做AI知识库
- 内容资产登记表是网站后续一切扩展的底座：资源中心、搜索、会员、AI问答都依赖它

### 待办
- 需要在 index.html、about.html、ai-project-management.html、teacher-ai-weekly.html 的导航栏中添加「AI工具导航」链接
- 内容资产登记表的标签为AI自动推断，后续可根据实际需要人工调整
- B层（站内搜索、标签页、资源中心、相关推荐）待启动

---

## 2026-07-08 容量保护策略：.gitignore 规则 + 容量策略文档

### 改动
- **.gitignore 更新**：新增大文件类型忽略规则，自动阻止 PPT/DOC/PDF/视频/压缩包/设计文件等上传到 GitHub
  - 覆盖：*.pptx *.ppt *.docx *.doc *.xlsx *.xls *.pdf *.mp4 *.mov *.avi *.wav *.mp3 *.zip *.rar *.7z *.psd *.ai *.exe 等
  - 即使执行 `git add .` 也会自动忽略，物理上不可能传上去
- **新建 docs/capacity-policy.md**：容量策略文档
  - 记录 GitHub Pages 硬限制（仓库 ≤ 1GB，单文件 ≤ 100MiB）
  - 定义三层存储架构：GitHub（展示层）→ 本地（原始资料库）→ 对象存储（大文件）
  - 明确哪些内容能放 GitHub、哪些不能
  - 提供容量检查命令和安全线/警告线
- **docs/INDEX.md 更新**：新增 capacity-policy.md 到文档清单和快速入口
- **docs/directory-guide.md 更新**：member/ 目录规则引用 capacity-policy.md

### 原因
- 第三阶段即将开始，需要防止 PPT/PDF/视频等大文件意外上传撑爆仓库
- 当前仓库仅 219K，但一个课件包就可能超过 1GB
- 趁仓库还小，把规则立死，比以后清理容易

### 待办
- 无

### 改动
- **咨询表单**：在 about.html 联系区域下方新增在线咨询表单
  - 使用 FormSubmit.co（免费无需注册），提交后自动发送到 liujp8@163.com
  - 包含：称呼、联系方式、咨询内容三个字段
  - style.css 新增 .consult-form 系列表单样式
- **SEO基础**：
  - 新建 `sitemap.xml` — 列出全站5个页面URL
  - 新建 `robots.txt` — 允许爬虫 + 声明 sitemap 位置
  - 新建 `favicon.svg` — 紫色圆角方块 + "LJ" 白字
  - 所有5个HTML页面添加 Open Graph 标签（微信/朋友圈分享时显示标题和摘要）
  - 所有5个HTML页面添加 favicon 链接
  - 修复 index.html meta description 和服务卡片中的多余感叹号
- **访问统计**：
  - 所有5个HTML页面添加 Google Analytics GA4 代码（占位 ID `G-ZWYYBYRN3S`）

### 待办
- 刘老师需到 analytics.google.com 创建 GA4 账号，获取 Measurement ID 替换 `G-ZWYYBYRN3S`
- FormSubmit 首次提交时会发确认邮件到 liujp8@163.com，需点击确认激活

### 补充（同日追加）
- **新增 `.gitattributes`**：统一文本文件使用 LF 换行符
  - 覆盖 *.html, *.css, *.js, *.md, *.txt, *.xml, *.svg, *.json, *.yml, *.yaml
  - 避免 Windows 环境下 Git 反复提示 "LF will be replaced by CRLF"
  - 二进制文件（图片/视频/PDF）标记为 binary，禁止换行转换
  - 不影响 GitHub Pages 部署效果

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
