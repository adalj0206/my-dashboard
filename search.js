// 全站搜索：每个栏目页都有，搜标题与简介，点结果进对应页面。
// 数据只含本站已公开的内容，不含资产金额、内部标识、凭证与图片内容。
const SEARCH_INDEX = [
  {title: "微信畅谈", snippet: "自动归类，每类最新 2 条展开，其余折叠；每条同时展示微信问题与 Muse 回答。", page: "wechat.html", anchor: ""},
  {title: "个股成长", snippet: "暂按市值排序，A 股按 Finnhub 市值从大到小，两只 ETF 市值记 N/A 排在 A 股之后。", page: "stocks.html", anchor: ""},
  {title: "招聘打野", snippet: "按发布日期 Tab 切换，另有已投递 Tab，按投递时间从近到远，最新 5 个展开，其余折叠。", page: "jobs.html", anchor: ""},
  {title: "新闻聚合", snippet: "10-27 午评与 10-26 收盘，静态快照。", page: "news.html", anchor: ""},
  {title: "数据导航", snippet: "20 个直达卡片，分 5 组：ETF Monitor 与集思录各板块，直接打开对应数据页。", page: "datanav.html", anchor: ""},
  {title: "云铝股份 000807", snippet: "收盘 26.17 元 +3.44%，市值约 854.9 亿元，维持不动。", page: "stocks.html", anchor: "stock-yunlv"},
  {title: "潞安环能 601699", snippet: "收盘 14.35 元 +1.41%，市值约 422.4 亿元，维持不动。", page: "stocks.html", anchor: "stock-luan"},
  {title: "山煤国际 600546", snippet: "收盘 12.14 元 +0.58%，市值约 240.1 亿元，维持不动。", page: "stocks.html", anchor: "stock-shanmei"},
  {title: "中孚实业 600595", snippet: "收盘 5.80 元 +1.05%，市值约 222.0 亿元，维持不动。", page: "stocks.html", anchor: "stock-zhongfu"},
  {title: "平煤股份 601666", snippet: "收盘 8.01 元 +1.91%，市值约 191.7 亿元，维持不动。", page: "stocks.html", anchor: "stock-pingmei"},
  {title: "黄金股 ETF 华夏 159562", snippet: "收盘 1.823 元 -0.11%，市值 N/A，只看不买。", page: "stocks.html", anchor: "stock-gold"},
  {title: "恒生新药 520500", snippet: "收盘 1.204 元 -4.82%，市值 N/A，只看不买。", page: "stocks.html", anchor: "stock-hengsheng"},
  {title: "上海东浩人力资源有限公司 · 薪酬绩效主管", snippet: "10-26 发布，黄浦区绿地外滩中心，1.1-2 万元，未投递。", page: "jobs.html", anchor: "job-donghao"},
  {title: "外企德科 · 项目结算专员", snippet: "10-23 发布，黄浦区外企德科大厦，8000-10000 元·14薪，未投递。", page: "jobs.html", anchor: "job-waiqi"},
  {title: "上海旭载科技有限公司 · 区域人事经理", snippet: "10-21 发布，徐汇区越界锦和尚城，1.7-2.3 万元·14薪，未投递。", page: "jobs.html", anchor: "job-xuzai"},
  {title: "上海美达建筑工程有限公司 · 行政人事专员", snippet: "10-16 发布，黄浦区瞿溪路，8000-10000 元，未投递。", page: "jobs.html", anchor: "job-meida"},
  {title: "保利和润房地产投资顾问有限公司 · 薪酬与员工关系岗", snippet: "发布日期未核实，徐汇区保利西岸中心，1-1.2 万元·14薪，未投递。", page: "jobs.html", anchor: "job-baoli"},
  {title: "易薪路网络科技（上海）有限公司 · 薪酬专员", snippet: "发布日期未核实，徐汇区光启文化广场，1.2-1.5 万元，未投递。", page: "jobs.html", anchor: "job-yixinlu"},
  {title: "帮我在小红书找一些帽子钩织或者针织的图解，要好看的", snippet: "微信畅谈 · 生活兴趣，Muse 回答了小红书搜法与款式方向。", page: "wechat.html", anchor: "cat-life"},
  {title: "简单点，看不懂", snippet: "微信畅谈 · 持仓与个股，Muse 用简单话重说了上一条持仓分析。", page: "wechat.html", anchor: "cat-holdings"},
  {title: "结合图片持仓结构分析及每个个股单项深度分析", snippet: "微信畅谈 · 持仓与个股，Muse 回答了集中度、个股单项与下一步建议，资产金额已隐去。", page: "wechat.html", anchor: "cat-holdings"},
  {title: "持仓结构分析及每个个股单项深度分析", snippet: "微信畅谈 · 持仓与个股，Muse 说明缺少持仓清单，无法编造分析。", page: "wechat.html", anchor: "cat-holdings"},
  {title: "分析下我的持仓和投资行为", snippet: "微信畅谈 · 持仓与个股，Muse 说明同花顺链接打开的是未登录页面，看不到持仓。", page: "wechat.html", anchor: "cat-holdings"},
  {title: "再试一下", snippet: "微信畅谈 · 持仓与个股，Muse 重试同花顺链接，抓取失败，结论不变。", page: "wechat.html", anchor: "cat-holdings"},
  {title: "你是谁", snippet: "微信畅谈 · 其他，Muse 回答了自己的身份与微信通道说明。", page: "wechat.html", anchor: "cat-other"},
  {title: "A 股午评：沪指跌 0.13%，电机、银行、零售逆势走强", snippet: "新闻聚合 · Longbridge · 10-27 午盘。", page: "news.html", anchor: ""},
  {title: "A 股收盘：沪指微涨，创业板与科创 50 回落，人形机器人逆势活跃", snippet: "新闻聚合 · Longbridge · 10-26 收盘。", page: "news.html", anchor: ""},
  {title: "格雷厄姆指数", snippet: "数据导航 · 01 · ETF Monitor，估值与仓位。", page: "datanav.html", anchor: "nav-01"},
  {title: "动量监控首页", snippet: "数据导航 · 01 · ETF Monitor，动量与轮动。", page: "datanav.html", anchor: "nav-01"},
  {title: "可转债列表", snippet: "数据导航 · 02 · 集思录可转债，实时与双低。", page: "datanav.html", anchor: "nav-02"},
  {title: "待发转债", snippet: "数据导航 · 02 · 集思录可转债，打新与进度。", page: "datanav.html", anchor: "nav-02"},
  {title: "可转债藏宝图", snippet: "数据导航 · 02 · 集思录可转债，会员与低估。", page: "datanav.html", anchor: "nav-02"},
  {title: "ETF基金", snippet: "数据导航 · 03 · 集思录场内基金，份额与溢价率。", page: "datanav.html", anchor: "nav-03"},
  {title: "T+0 QDII", snippet: "数据导航 · 03 · 集思录场内基金，跨境与溢价率。", page: "datanav.html", anchor: "nav-03"},
  {title: "LOF基金", snippet: "数据导航 · 03 · 集思录场内基金，折溢价与套利。", page: "datanav.html", anchor: "nav-03"},
  {title: "封闭基金", snippet: "数据导航 · 03 · 集思录场内基金，折价率。", page: "datanav.html", anchor: "nav-03"},
  {title: "REITs", snippet: "数据导航 · 03 · 集思录场内基金，REITs 与分派率。", page: "datanav.html", anchor: "nav-03"},
  {title: "新股申购", snippet: "数据导航 · 04 · 集思录打新与债券，打新与A股。", page: "datanav.html", anchor: "nav-04"},
  {title: "港股IPO", snippet: "数据导航 · 04 · 集思录打新与债券，打新与港股。", page: "datanav.html", anchor: "nav-04"},
  {title: "债券", snippet: "数据导航 · 04 · 集思录打新与债券，收益率与信用。", page: "datanav.html", anchor: "nav-04"},
  {title: "新债", snippet: "数据导航 · 04 · 集思录打新与债券，新债。", page: "datanav.html", anchor: "nav-04"},
  {title: "股息率排行榜", snippet: "数据导航 · 05 · 集思录工具与比价，股息率与红利。", page: "datanav.html", anchor: "nav-05"},
  {title: "A/H比价", snippet: "数据导航 · 05 · 集思录工具与比价，AH溢价。", page: "datanav.html", anchor: "nav-05"},
  {title: "套利股", snippet: "数据导航 · 05 · 集思录工具与比价，套利与事件。", page: "datanav.html", anchor: "nav-05"},
  {title: "现金管理 · 逆回购", snippet: "数据导航 · 05 · 集思录工具与比价，逆回购与货基。", page: "datanav.html", anchor: "nav-05"},
  {title: "指数涨幅统计", snippet: "数据导航 · 05 · 集思录工具与比价，指数与融资。", page: "datanav.html", anchor: "nav-05"},
  {title: "投资日历", snippet: "数据导航 · 05 · 集思录工具与比价，日历与提醒。", page: "datanav.html", anchor: "nav-05"},
];
document.addEventListener("DOMContentLoaded", function(){
  const input = document.getElementById("global-search");
  const box = document.getElementById("search-results");
  if(!input || !box) return;
  function render(){
    const q = input.value.trim().toLowerCase();
    if(!q){ box.style.display = "none"; box.innerHTML = ""; return; }
    const hits = SEARCH_INDEX.filter(e => (e.title + " " + e.snippet).toLowerCase().includes(q)).slice(0, 10);
    if(!hits.length){ box.style.display = "block"; box.innerHTML = '<div class="search-empty">没有找到相关内容</div>'; return; }
    box.style.display = "block";
    box.innerHTML = hits.map(e => {
      const href = e.anchor ? e.page + "#" + e.anchor : e.page;
      return '<a class="search-hit" href="' + href + '"><strong>' + e.title + "</strong><span>" + e.snippet + "</span></a>";
    }).join("");
  }
  input.addEventListener("input", render);
  input.addEventListener("focus", render);
  document.addEventListener("click", function(e){
    if(!e.target.closest(".search")){ box.style.display = "none"; }
  });
});
