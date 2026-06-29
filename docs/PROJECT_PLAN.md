# 健康药品官网项目计划

## 1. 渲染方案建议

固定方案：Vue 3.5+ + Nuxt 4.4.8 SSR，并结合静态生成或路由级缓存。

推荐理由：

- 首页、产品列表、产品详情、新闻、FAQ、关于我们、联系我们、测试报告、产品证书等公开页面需要 SEO 和社交分享能力。
- 商品和报告数据虽然通过接口获取，但 SSR 可以在服务端完成首屏数据渲染，让搜索引擎和用户更快看到有效内容。
- 该站点属于内容型、信任型官网，首屏速度、可抓取的产品详情页、可索引的检测报告页非常重要。
- Nuxt 4 仍然可以保留客户端交互能力，用于筛选、下单表单、问题反馈表单、移动端导航等功能。

本项目不采用 SPA 方式实现：

- 不做纯客户端渲染官网。
- 不以 `/index.html` 回退作为主要路由方案。
- 不把 SEO、产品详情、证书、报告、新闻详情依赖客户端接口加载后再展示。

## 2. SSR 部署方式

### 部署模型

构建产物：

- 服务端渲染 bundle 和公开静态资源。
- 需要一个 Node.js 进程在请求到来时渲染页面。

常见部署方式：

- 使用 PM2、systemd、Docker 或 Kubernetes 管理 Node.js 服务。
- 前面接 Nginx 或 CDN，用于 HTTPS、压缩、缓存和反向代理。
- API 可以在服务端渲染阶段请求，也可以在客户端 hydration 后继续请求。

优点：

- SEO 和首屏有效内容更好。
- 产品详情、证书、报告、新闻详情可以直接渲染出带数据的 HTML。
- 更容易按页面生成 Open Graph 元信息。
- 更适合医疗、药品、检测、实验室类可信官网。

缺点：

- 需要 Node 服务运行时。
- 部署链路比纯静态站多，但符合本项目 SEO 和可信内容展示要求。
- 代码必须注意 SSR 安全，避免直接使用浏览器专属 API。
- 需要设计缓存策略，避免流量高时页面渲染过慢。

Nginx 反向代理示例：

```nginx
server {
  listen 80;
  server_name example.com;

  location /_nuxt/ {
    proxy_pass http://127.0.0.1:3000;
    expires 30d;
    add_header Cache-Control "public, immutable";
  }

  location / {
    proxy_pass http://127.0.0.1:3000;
    proxy_http_version 1.1;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
  }
}
```

PM2 示例：

```bash
pnpm build
pm2 start .output/server/index.mjs --name health-us-website
pm2 save
```

Docker 示例：

```dockerfile
FROM node:22-alpine AS deps
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN corepack enable && pnpm install --frozen-lockfile

FROM node:22-alpine AS build
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN corepack enable && pnpm build

FROM node:22-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
COPY --from=build /app/.output ./.output
EXPOSE 3000
CMD ["node", ".output/server/index.mjs"]
```

## 3. 推荐技术架构

- 框架：Nuxt 4.4.8
- Vue：Vue 3.5+
- 构建工具：Vite 7.x，使用 Nuxt 4.4.8 兼容版本，不强制升级到 Vite 8
- 语言：TypeScript
- 样式：Tailwind CSS 4.3.0，视觉风格保持医疗、实验室、专业可信
- 动画：CSS/Tailwind 过渡为主，GSAP 用于复杂滚动动画，IntersectionObserver 用于进入视口触发动画
- 状态管理：只有在需要跨页面共享客户端状态时使用 Pinia
- 数据获取：Nuxt `useFetch` / `$fetch`
- SEO：页面级 `useSeoMeta`、canonical URL、Open Graph、JSON-LD
- 表单：前端校验 + 后端/API 校验
- 报告和证书：通过接口驱动，并提供稳定公开 URL
- 图片：产品图、实验室图、报告图建议走 CDN
- 部署：SSR Node 服务 + Nginx/CDN
- 缓存：静态资源走 CDN 缓存，公开产品/新闻/报告数据使用路由或接口缓存

## 4. 信息架构

必需页面：

- 首页：品牌信任、产品分类、推荐产品、证书/报告搜索、用户评价、FAQ 预览、联系入口。
- 产品列表：分类筛选、搜索、排序、分页、移动端筛选抽屉。
- 产品详情：产品概览、规格参数、存储说明、批次/lot 链接、证书链接、相关报告、订购入口。
- 产品证书信息：证书列表、批次/lot 编号、签发日期、可下载文档。
- 产品测试说明：测试流程、样品要求、结果解读、检测周期。
- 产品测试报告：报告列表和详情、实验室信息、结果表格、文档下载。
- 常见问题：支持搜索和分组展示。
- 关于我们：公司介绍、合规声明、实验室/质量流程、物流能力。
- 联系我们：联系方式、营业时间、表单，如适用可展示地址或地图。
- 用户评价：评价内容、评分分布、评价列表。
- 问题反馈：反馈分类、反馈表单，如 API 支持可增加附件。
- 订购产品提交：已选产品、数量、联系信息、条款确认。
- 新闻列表：分类、标签、分页。
- 新闻详情：正文、作者/日期、相关文章、SEO 元信息。

## 5. 建议路由

```text
/
/products
/products/:slug
/certificates
/certificates/:id
/testing
/reports
/reports/:id
/faq
/about
/contact
/reviews
/feedback
/order
/news
/news/:slug
```

## 6. API 合同草案

最小 API 端点：

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

产品核心字段：

```ts
interface Product {
  id: string;
  slug: string;
  name: string;
  category: string;
  summary: string;
  description: string;
  imageUrl: string;
  specs: Record<string, string>;
  purity?: string;
  storage?: string;
  certificates: CertificateSummary[];
  reports: ReportSummary[];
}
```

## 7. 页面功能规格

### 全站布局

- 采用上下布局。
- 顶部为固定 header，页面滚动时始终固定在视口顶部。
- 桌面端 header 左侧展示 logo，右侧展示导航信息。
- 移动端顶部保留 logo 和菜单按钮，导航使用抽屉或下拉面板。
- 所有页面都必须展示统一底部信息。
- Header 固定时必须避免遮挡页面首屏内容，页面主体需要预留顶部间距。
- Header 需要设置稳定高度和足够层级，避免滚动时被 banner、弹窗、图片或 Tab 内容覆盖。
- 页面锚点跳转和 Tab 定位需要考虑固定 header 高度，避免目标内容被顶部遮挡。

### 首页

从上到下依次展示：

- 固定顶部信息。
- Banner 信息展示：主标题、辅助文案、主操作按钮、可信提示或证书/报告入口。
- 商品展示：推荐商品或产品分类，点击商品进入商品详情页。
- 常见问题：展示核心 FAQ，可进入完整 FAQ。
- 用户邮箱提交：用于订阅、咨询或获取产品资料。
- 底部信息。

首页要求：

- Banner 首屏要突出品牌和产品方向。
- 商品展示必须支持接口数据渲染、loading、empty、error 状态。
- 邮箱提交必须有格式校验、提交中状态、成功/失败提示。

### 商品详情页

页面主体采用左右布局，移动端改为上下堆叠。

左侧：

- 商品图片滚动展示。
- 下方展示缩略图。
- 点击缩略图切换主图。
- 图片区域需要支持加载占位和缺图 fallback。

右侧：

- 商品名称。
- 价格信息。
- 套餐展示。
- 产品测试报告入口。
- 购买按钮。

购买交互：

- 点击购买按钮显示客服弹窗。
- 客服弹窗展示联系渠道、咨询提示、关闭按钮。
- 弹窗必须可键盘关闭，并避免移动端内容溢出。

商品详情下方：

- Tab 区域展示：
  - 商品介绍
  - 产品证书
  - 产品测试说明
  - 用户评价
- Tab 内容通过接口或详情数据渲染。
- 商品详情底部展示部分相关产品列表。
- 页面最底部展示统一底部信息。

商品详情要求：

- 商品名称、价格、套餐、报告、证书、评价都必须有清晰空状态。
- 测试报告和产品证书要展示批次/lot、日期、来源和下载/查看入口。
- 相关产品点击后进入对应详情页。

### 联系我们

- 展示联系说明和联系表单。
- 表单收集邮箱、姓名/称呼、消息内容等信息。
- 表单必须包含校验、提交中状态、成功/失败提示。
- 如业务提供电话、WhatsApp、邮箱、地址、营业时间，可在页面同步展示。

### 问题反馈

- 收集用户问题和反馈。
- 字段建议：邮箱、问题类型、问题标题、问题描述。
- 如 API 支持，可增加附件上传。
- 反馈提交后展示明确结果，不跳转到空页面。

### 新闻列表与详情

- 新闻列表展示产品相关信息、检测说明、行业资讯、公司动态等内容。
- 列表支持分类、标签、分页或加载更多。
- 点击新闻进入详情页。
- 新闻详情展示标题、发布时间、正文、相关文章和返回列表入口。
- 新闻详情必须配置 SEO title、description、canonical 和 Open Graph。

### 动画与加载

- 页面加载增加过渡动画效果。
- 滚动页面时，下方元素增加进入视口加载动画。
- 动画使用 `opacity` 和 `transform`，避免造成布局抖动。
- 所有动画必须支持移动端降级和 `prefers-reduced-motion`。

### 参考网站

参考以下网站的信息结构和交互思路，但不直接复制视觉设计、文案、图片或品牌资产：

- https://verifiedpeptides.com/

## 8. 合规要求

- 除非业务方提供经过法律或监管确认的文案，否则不要声明疾病治疗、治愈、诊断、预防或人体使用效果。
- 如业务定位适用，应增加全站免责声明，例如仅限研究/实验室用途。
- 产品页必须把客观规格参数和营销文案分开。
- 测试报告和证书必须展示签发日期、批次/lot 编号、文档来源、更新状态。
- 联系、订购、反馈表单必须包含同意条款和隐私政策入口。
- 不要编造用户评价、实验室关系、认证、检测结果或无法验证的保证。

## 9. 实施清单

### 阶段 1 - 项目基础

- [ ] 初始化 Nuxt 4.4.8 + Vue 3.5+ + TypeScript 项目。
- [ ] 配置 Nuxt 4.4.8 兼容的 Vite 7.x 和 Tailwind CSS 4.3.0。
- [ ] 建立统一动画规范：页面切换、加载状态、进入视口动画、滚动动画、减少动态效果模式。
- [ ] 添加 ESLint、Prettier、类型检查和 package scripts。
- [ ] 配置 API base URL、站点 URL、CDN URL 等运行时环境变量。
- [ ] 建立上下布局系统：固定顶部 header、logo、导航、移动端菜单、统一底部。
- [ ] 定义设计 token：颜色、字体、间距、焦点状态、响应式断点。

### 阶段 2 - 数据层

- [ ] 创建类型化 API client。
- [ ] 增加通用错误、空数据、加载中、分页状态。
- [ ] 定义产品、证书、报告、评价、FAQ、新闻、订单、反馈类型。
- [ ] 建立 SSR 安全的数据获取模式。
- [ ] 为公开页面增加路由级缓存策略。

### 阶段 3 - 核心页面

- [ ] 构建首页：banner、商品展示、常见问题、邮箱提交、底部信息。
- [ ] 构建带筛选和分页的产品列表页。
- [ ] 构建商品详情页：左侧图片滚动和缩略图、右侧价格/名称/套餐/报告/购买按钮。
- [ ] 构建商品详情客服弹窗。
- [ ] 构建商品详情 Tab：商品介绍、产品证书、产品测试说明、用户评价。
- [ ] 构建商品详情相关产品列表。
- [ ] 构建证书列表和详情页。
- [ ] 构建测试说明页。
- [ ] 构建报告列表和详情页。
- [ ] 构建 FAQ 页面。
- [ ] 构建关于我们和联系我们页面。
- [ ] 构建用户评价页面。
- [ ] 构建问题反馈表单，收集用户问题。
- [ ] 构建订购产品提交表单。
- [ ] 构建新闻列表和新闻详情页。

### 阶段 4 - SEO 与信任建设

- [ ] 为每个页面增加 `useSeoMeta`。
- [ ] 增加 canonical URL。
- [ ] 增加 Open Graph 元信息。
- [ ] 在合适页面增加组织、面包屑、产品、文章、FAQ 的 JSON-LD。
- [ ] 增加 sitemap 和 robots 配置。
- [ ] 增加证书/报告文档下载处理。

### 阶段 5 - 响应式与可访问性

- [ ] 验证桌面、平板、移动端布局。
- [ ] 保证导航、菜单、筛选器、表单支持键盘访问。
- [ ] 增加清晰可见的 focus 状态。
- [ ] 确保颜色对比度达到 WCAG AA。
- [ ] 优化移动端触摸区域。
- [ ] 确保窄屏下文字和按钮不会溢出。
- [ ] 支持 `prefers-reduced-motion`，用户选择减少动态效果时禁用非必要动画。
- [ ] 验证动画不会造成布局抖动、遮挡内容或影响表单操作。

### 阶段 6 - 部署

- [ ] 构建生产 SSR 产物。
- [ ] 配置 Node 进程管理或 Docker 镜像。
- [ ] 配置 Nginx/CDN 反向代理。
- [ ] 配置 HTTPS。
- [ ] 配置静态资源缓存。
- [ ] 配置 API 超时和错误页。
- [ ] 配置日志和监控。

### 阶段 7 - QA

- [ ] 运行 lint。
- [ ] 运行类型检查。
- [ ] 为 API mapper 和表单校验增加单元测试。
- [ ] 为核心路由增加 Playwright 冒烟测试。
- [ ] 做响应式截图检查。
- [ ] 使用 Lighthouse 检查 SEO、性能、可访问性和最佳实践。

## 10. 动画方案建议

### 推荐原则

- 官网动画要克制，重点服务信息层级、页面反馈和品牌质感，不做炫技。
- 以 CSS/Tailwind transition 和 keyframes 为默认方案，减少运行时 JS 成本。
- 产品、证书、报告、FAQ、表单等功能区应优先保证可读性和响应速度。
- 所有动画都要兼容 SSR，涉及 `window`、`document`、滚动位置、IntersectionObserver 的逻辑必须只在客户端执行。
- 必须支持 `prefers-reduced-motion`，尊重用户减少动态效果设置。

### 页面切换动画

推荐使用 Nuxt 内置 page transition：

- 页面进入：`opacity 0 -> 1`，`translateY(8px) -> 0`
- 时长：`180ms - 260ms`
- easing：`cubic-bezier(0.2, 0, 0, 1)`

适用位置：

- 普通页面切换
- 新闻详情、产品详情切换
- FAQ、报告详情等内容页进入

避免：

- 大幅位移
- 翻转、旋转、弹跳
- 每个页面使用不同动画风格

### 加载过渡动画

推荐组合：

- 首屏骨架屏：产品卡片、报告表格、新闻列表使用 skeleton。
- 局部加载：按钮 loading spinner 或进度点。
- 页面级 loading：只在首次加载或接口明显较慢时使用顶部细进度条。

适用方案：

- 产品列表：卡片 skeleton。
- 产品详情：标题、主图、规格表 skeleton。
- 报告列表：表格行 skeleton。
- 表单提交：按钮内 loading，不要全屏遮罩。

避免：

- 长时间全屏 loading。
- 随机闪烁动画。
- loading 造成布局高度变化。

### 滚动进入动画

推荐使用 IntersectionObserver 封装为 composable 或 directive。

默认效果：

- `opacity 0 -> 1`
- `translateY(16px) -> 0`
- 时长 `320ms - 480ms`
- 每个区块只触发一次

适用位置：

- 首页分区进入
- 产品分类卡片
- 信任指标
- 用户评价
- FAQ 分组

避免：

- 列表中每个元素都使用重动画。
- 滚动时持续计算布局。
- 动画触发后改变元素尺寸导致页面跳动。

### 复杂滚动动画

如需要视差、时间轴、粘性滚动叙事、实验室流程动画，推荐使用 GSAP + ScrollTrigger。

使用限制：

- 仅在客户端动态导入。
- 仅用于首页重点区域或测试流程页。
- 不用于产品列表、报告列表、表单等高频操作页面。
- 移动端必须降级为简单淡入或静态展示。

### 微交互动画

推荐使用 CSS/Tailwind：

- 按钮 hover：颜色、边框、阴影轻微变化。
- 卡片 hover：边框或阴影轻微增强，位移不超过 `2px`。
- 表单错误：错误信息淡入，不晃动输入框。
- 手风琴 FAQ：高度展开 + opacity，时长 `180ms - 240ms`。
- 移动端菜单：遮罩淡入 + 面板滑入。

### 不推荐方案

- 不推荐全站使用 AOS 这类仅做滚动 reveal 的重依赖，IntersectionObserver 足够。
- 不推荐大量 Lottie，除非已有品牌动画资产。
- 不推荐粒子背景、复杂视差背景、过多 3D 动画，健康药品官网应优先可信和清晰。
- 不推荐动画依赖页面首屏主要内容加载。

## 11. 建议技能清单

必需技能：

- Vue 3.5+ Composition API
- Nuxt 4.4.8 SSR 和 Nitro 部署
- Vite 7.x
- Tailwind CSS 4.3.0
- CSS 动画、Nuxt 页面过渡、IntersectionObserver、GSAP 基础使用
- TypeScript
- 响应式 CSS
- 内容型/产品型网站 SEO
- API 集成和错误处理
- 表单校验
- 可访问性
- Nginx/CDN 部署
- 健康、药品、检测类内容的基础合规意识

可选技能：

- Playwright 视觉检查和冒烟测试
- Docker 部署
- Edge/CDN 缓存
- 结构化数据和搜索索引
- CMS 集成
- 多语言国际化
