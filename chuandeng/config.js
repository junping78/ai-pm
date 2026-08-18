/* 传灯 · 运行配置
 * 由 AI 填写（接收正式发布地址 / Worker 地址后），网站内容更新部署时请勿修改本文件。
 * SHARE_BASE 已填（路径确定）；API_BASE 已填（Worker 已部署）。
 */
window.CD_CONFIG = {
  // 部署后的 Cloudflare Worker 地址（统一后端，国内外都通）。例：https://chuandeng.xxx.workers.dev
  API_BASE: 'https://chuandeng.liujp8.workers.dev',
  // 分享页正式地址（用于生成二维码/链接）。例：https://junping78.github.io/ai-pm/chuandeng/
  // 留空则用「当前打开的页面地址」自动拼接 ?from=你的ID
  SHARE_BASE: 'https://junping78.github.io/ai-pm/chuandeng/'
};
