# 我的数据看板

专属数据看板网站，版式对标小红书 explore 页的**瀑布流卡片 + 顶部搜索 + 左侧分类**形式，但品牌、文案、图表均为原创，卡片里目前是示例数据。

## 本地预览

直接用浏览器打开 `index.html` 即可，无需构建、无需后端。

功能：搜索过滤、分类筛选、按热度/最新排序、近 7/30/90 天切换、点赞/收藏（只保存在你自己的浏览器里）、点卡片看详情和数据表。

## 换成你自己的数据

打开 `index.html`，改顶部 `KPIS`、`CATS`、`CARDS` 三处：

- `KPIS`：顶部 4 个核心指标
- `CARDS`：每张卡片的标题、描述、来源、点赞数和图表数据
- 图表类型 `kind`：`line` 折线、`bars` 柱状、`donut` 环形、`list` 排行、`progress` 进度、`insight` 洞察、`feed` 动态、`todo` 待办

## 上线：GitHub + Cloudflare Pages

1. 在 GitHub 新建一个仓库（建议名 `my-dashboard`），把 `index.html` 和本文件推上去。
2. 打开 Cloudflare Dashboard → Pages → Create application → Pages → Connect to Git：
   选择刚才的仓库。
3. 构建设置：Framework preset 选 None，Build command 留空，Build output directory 填 `/`（或留空，指向根目录）。
4. 点 Save and Deploy，拿到 `https://<项目名>.pages.dev` 就是你的专属看板地址。

以后每次改数据：改 `index.html` → 提交到 GitHub → Cloudflare Pages 自动重新部署。

## 注意

- 这是纯静态站，没有登录和后端数据库，点赞/收藏不会同步给别人。
- 不要把真实账号密码、API Key、私人数据直接写进公开仓库；公开仓库 + Cloudflare Pages 地址任何人打开都能看到。
- 如需接真实数据，下一步可以改成：数据放在私有接口里，前端用 fetch 读取；或用 Cloudflare Workers 做一层鉴权后再返回数据。
