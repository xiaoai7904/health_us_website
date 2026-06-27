# AGENTS.md

## 项目说明

本项目是健康/药品相关产品官网。

核心目标：构建一个响应式公开网站，用于产品展示、证书展示、测试报告展示、企业信任内容、联系我们、问题反馈、订购提交和新闻发布。

推荐实现：Vue 3.5+ + Nuxt 4.4.8 SSR + Vite 8+ + Tailwind CSS 4.3.0 + TypeScript。

## 核心页面

需要实现和维护以下公开页面：

- 首页
- 产品列表
- 产品详情
- 产品证书信息
- 产品测试说明
- 产品测试报告
- 常见问题
- 关于我们
- 联系我们
- 用户评价
- 问题反馈
- 订购产品提交
- 新闻列表
- 新闻详情

## 技术方向

- 默认使用 Nuxt 4.4.8 SSR。
- 本项目固定采用 SSR，不实现 SPA 版本。
- 不使用纯客户端渲染作为主要页面渲染方式。
- Vue 版本使用 3.5+。
- Vite 版本使用 8+。
- Tailwind CSS 版本使用 4.3.0。
- 动画默认使用 CSS/Tailwind transition 和 keyframes。
- 复杂滚动动画可以使用 GSAP + ScrollTrigger，但必须客户端动态导入。
- 进入视口动画优先使用 IntersectionObserver 封装，不为简单 reveal 引入重依赖。
- 所有页面必须同时适配桌面、平板和移动端。
- 产品、证书、报告、评价、FAQ、新闻数据通过 API 获取。
- 使用类型化数据合同，避免在组件中直接处理无类型 API 响应。
- 保持 SSR 安全：不要在非客户端保护代码中直接使用 `window`、`document` 或其他浏览器专属 API。
- 公开详情页优先保证服务端首屏渲染内容。
- 使用页面级 SEO 元信息和 canonical URL。
- 产品卡片、报告表格、证书链接、表单、分页、空状态和错误状态应做成可复用组件。

## 部署假设

- 生产环境目标是 SSR Node 服务，前面接 Nginx，或使用支持 Nuxt server output 的部署平台。
- 静态资源应支持 CDN 缓存。
- 公开 API 数据应有明确缓存策略。
- 必需环境变量包括：
  - `NUXT_PUBLIC_SITE_URL`
  - `NUXT_PUBLIC_API_BASE`
  - `NUXT_PUBLIC_CDN_BASE`
  - 如有需要，增加仅服务端可见的 API 凭证

## 设计规则

- 全站采用上下布局：顶部 header 在页面滚动时固定在视口顶部，左侧 logo，右侧导航信息。
- 固定 header 必须有稳定高度和足够层级，页面主体需要预留顶部间距，避免内容被遮挡。
- 移动端 header 使用 logo + 菜单按钮，导航使用抽屉或下拉面板。
- 所有页面必须展示统一底部信息。
- 视觉风格应体现可信、临床、专业、商务导向。
- 避免夸张医疗效果声明或强销售感文案。
- 使用清晰字体、高对比度和克制配色。
- 产品页和报告页优先展示可快速扫描的事实数据。
- 移动端导航、筛选器、表单和表格必须易用。
- 文本不得溢出按钮、卡片、表格或表单控件。
- 使用可访问的 label、focus 状态和键盘友好交互。

## 页面功能规则

- 首页从上到下依次为：banner 信息展示、商品展示、常见问题、用户邮箱提交、底部信息。
- 商品卡片点击后进入商品详情页。
- 商品详情页桌面端采用左右布局，移动端上下堆叠。
- 商品详情左侧展示商品图片滚动区，下方展示缩略图，点击缩略图切换主图。
- 商品详情右侧展示价格、名称、套餐、产品测试报告入口和购买按钮。
- 点击购买按钮显示客服弹窗，弹窗必须支持关闭、键盘操作和移动端适配。
- 商品详情下方使用 Tab 展示商品介绍、产品证书、产品测试说明、用户评价。
- 商品详情底部展示部分相关产品列表。
- 联系我们页面收集邮箱等联系信息，并展示提交结果。
- 问题反馈页面收集用户问题，至少包含邮箱、问题类型、标题和描述。
- 新闻列表展示产品相关信息，点击进入新闻详情。
- 加载页面必须有过渡动画效果，滚动进入视口的元素需要加载进入动画。
- 参考站点用于信息架构和交互参考，不得复制其品牌、图片、文案或专有设计资产。

## 动画规则

- 动画必须克制，服务信息层级、加载反馈和品牌质感。
- 页面切换使用 Nuxt page transition，推荐淡入和小幅上移动画。
- 产品列表、报告列表、新闻列表加载时使用 skeleton，避免长时间全屏 loading。
- 表单提交只在按钮或局部区域显示 loading，不用全屏遮罩阻断用户。
- 滚动进入动画使用 `opacity` 和 `transform`，不要动画化 `height`、`width`、`top`、`left` 等容易触发布局计算的属性。
- 首页和测试流程页可以使用 GSAP 做复杂滚动动画，产品列表、报告列表、表单页面不使用复杂滚动动画。
- 移动端动画必须降级，避免影响滚动流畅度。
- 必须支持 `prefers-reduced-motion`，用户减少动态效果时关闭非必要动画。
- 动画不得导致布局抖动、内容遮挡、按钮不可点、表单焦点丢失。

## 合规边界

- 不要编造认证、检测结果、实验室关系、客户评价或医疗声明。
- 除非业务方明确提供经过批准的文案，否则不要写治疗、治愈、诊断、疾病预防或人体使用效果相关声明。
- 产品规格必须和营销文案分开展示。
- 证书和报告页面必须展示批次/lot 编号、签发日期、来源和可下载文件等信息。
- 收集用户数据的表单必须提供同意条款或隐私政策入口。

## API 预期

预期 API 范围：

```text
GET /api/products
GET /api/products/:slug
GET /api/categories
GET /api/certificates
GET /api/certificates/:id
GET /api/reports
GET /api/reports/:id
GET /api/faqs
GET /api/reviews
GET /api/news
GET /api/news/:slug
POST /api/orders
POST /api/feedback
POST /api/contact
```

所有 API 集成都必须处理：

- 加载中状态
- 空数据状态
- 网络/API 错误状态
- SSR 超时或降级行为
- 需要分页的列表

## 建议目录结构

```text
app.vue
nuxt.config.ts
pages/
  index.vue
  products/index.vue
  products/[slug].vue
  certificates/index.vue
  certificates/[id].vue
  testing.vue
  reports/index.vue
  reports/[id].vue
  faq.vue
  about.vue
  contact.vue
  reviews.vue
  feedback.vue
  order.vue
  news/index.vue
  news/[slug].vue
components/
  layout/
  product/
  certificate/
  report/
  forms/
  common/
composables/
  useApi.ts
  useSeo.ts
types/
  product.ts
  certificate.ts
  report.ts
  news.ts
server/
  api/
assets/
public/
tests/
```

## 开发检查清单

完成任何实现任务前：

- 如果已配置 lint，运行 lint。
- 如果已配置类型检查，运行 typecheck。
- 如果已配置测试，运行相关测试。
- UI 变更必须验证桌面端和移动端布局。
- SSR 相关变更必须验证生产构建。
- SEO 敏感页面必须确认 title、description、canonical 和结构化数据。

## 推荐命令

项目 package scripts 建立后，按实际脚本执行。预期命令：

```bash
pnpm install
pnpm dev
pnpm lint
pnpm typecheck
pnpm test
pnpm build
pnpm preview
```

## Agent 行为规则

- 编辑前先阅读现有代码。
- 变更范围保持在当前任务内。
- 保留用户在工作区已有的改动。
- 优先沿用项目现有模式，不随意新增抽象。
- 只在能解释非显然逻辑时添加注释。
- 不做无关重构。
- 搜索优先使用 `rg`。
- 手工编辑文件使用 `apply_patch`。
