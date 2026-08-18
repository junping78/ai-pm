# 传灯 Chuándēng · 统一数据 Schema 与后端说明

> 本项目为「受的三毒」禅修训练产品的社交化延伸。命名「传灯」：转发 = 传，觉察之灯 = 灯。
> 发布路径：`ai-pm/chuandeng/`（PWA 主程序 `index.html`，地图页 `starfire.html`）。

## 一、统一数据模型（单一真相源）

所有端（MVP2 练习 App、星星之火地图、传灯 PWA）共用同一份学员记录：

```jsonc
{
  "app": "chuandeng",
  "version": 1,
  "updatedAt": 1692000000000,      // 毫秒时间戳
  "students": [
    {
      "id": "SR26-001",            // 全局唯一（姓名+来源+时间戳哈希，见 §三）
      "name": "张伟",
      "city": "武汉",              // 归一化后的城市名（去"省市…"后缀）
      "family": "张门",            // 家庭点灯分组（可选）
      "lamps": { "jianchi": 15, "jinjie": 12, "juezhao": 8 }, // 三阶灯
      "fromId": null,              // 传灯来源：谁把链接/二维码发给了我（null=源头）
      "forwardCount": 2,           // 我转发给了几个人（App 自动累加）
      "createdAt": 1691000000000,
      "updatedAt": 1692000000000
    }
  ]
}
```

### 传灯关系图（由 `fromId` 派生，无需单独存）
- 每条 `fromId → id` 构成一条「传灯边」。
- 地图页 `starfire.html` 点某人 → 画出他传出去的所有边（虚线 + 飘移灯💡），点另一人 → 上一个人边消失（互斥）。
- 转发越多 → `forwardCount` 越大 → 该学员灯笼越亮（期 4 视觉）。

## 二、轻后端（Cloudflare Worker）

文件：`worker/index.js` + `worker/wrangler.toml`。KV 绑定名 `CDB`。

| 端点 | 方法 | 说明 |
|---|---|---|
| `/api/students` | GET | 返回全部学员 `{app,students}` |
| `/api/data.json` | GET | 返回聚合数据 `{app,version,updatedAt,students,edges:[{from,to}]}` |
| `/api/students` | POST | upsert 一名学员（body 即上方 schema 字段）；重复 `id` 覆盖更新 |

CORS 已放开（`Access-Control-Allow-Origin: *`），便于 PWA（同域或 `workers.dev` 子域）跨域读写；上线后可收紧到指定域名。

### 部署步骤（归用户/网站内容更新执行）
```bash
cd worker
wrangler kv namespace create chuandeng          # 拿到 id 填入 wrangler.toml 的 id
wrangler deploy                                # 部署到 *.workers.dev
```
可选：绑定自定义域名（国内外统一可达、免备案顾虑另议）。

## 三、学员唯一 id 生成规则（期 3 App 侧）

```
id = hash( from(来源姓名或空) + "|" + 姓名 + "|" + 时间戳 )
```
- 扫码/开链接输入姓名即生成；URL 带 `?from=张三` 时，张三即 `from`，自动记录传灯来源。
- 同一人重装/重填用「姓名+来源」可归并（或引导登录态，后续增强）。

## 四、地图页 `starfire.html` 数据流

1. **云端优先**：打开即 `fetch('./data.json')`（或部署后指向 Worker `/api/data.json`），有数据则自动渲染。
2. **手动兜底**：拖入/导入 MVP2 导出的 JSON（本地、离线可用），覆盖云端视图。
3. **归一化**：城市名去空格/后缀后匹配坐标表；表外城市进「📍 待定位」区，不丢数据。

## 五、i18n

`i18n.js` 维护 `zh` / `en` 双字典，`t(key,vars)` 取值；`CD_LANG` 自动检测
（URL `?lang=zh|en` > 浏览器语言，默认中文）。现有中文一字不改，英文补全。
切换语言可在期 5 加一个语言切换按钮。

## 六、待办（分期）

- 期 1：星星之火地图 + 手动导入 + i18n（已落地）。
- 期 2：Worker + data schema（本文件，已落地）；starfire 读 `./data.json`。
- 期 3：传灯 PWA（可安装、姓名→id、QR/链接分发、`?from=`、转发数→灯亮度）。
- 期 4：点击连线虚线 + 飘移灯💡 + 互斥清除。
- 期 5：英文/i18n 切换按钮、链接兜底、海外可达后端。
