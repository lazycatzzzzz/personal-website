# lazycatzzzzz 个人主页

基于 Next.js 16 + React 19 + Tailwind CSS v4 + TypeScript 构建的个人网站，部署于 GitHub Pages。

## 功能

- **首页** — 导航入口，链接到所有子页面
- **博客** — 博客文章列表 + 详情页（支持 Markdown）
- **电子宠物** — 互动猫猫 + AI 聊天（基于 DeepSeek API，无 API key 时使用本地 mock 回复）
- **图片集** — 照片轮播，含缩略图导航
- **视频作品** — 抖音视频外链集合
- **联系我** — 个人介绍与联系方式

## 国内访问方式

由于 GitHub Pages 在国内访问不稳定，提供以下访问方式：

### 方式一：Cloudflare Workers 代理（推荐）

1. 访问 https://dash.cloudflare.com/
2. 创建 Workers → 创建服务
3. 复制 `cloudflare-worker.js` 的内容到编辑器
4. 部署后获得访问地址：`https://your-worker-name.your-subdomain.workers.dev`

### 方式二：直接访问 GitHub Pages

- https://lazycatzzzzz.github.io/personal-website/

> ⚠️ 国内访问可能较慢或不稳定

## 本地运行

```bash
# 安装依赖
npm install

# 复制环境变量模板并配置
cp .env.example .env.local

# 启动开发服务器
npm run dev

# 构建静态站点
npm run build
# 输出目录: out/

# 本地预览静态站点
npx serve out
```

## 环境变量

| 变量 | 说明 | 示例 |
|------|------|------|
| `NEXT_PUBLIC_BASE_PATH` | 项目站点路径前缀 | `/personal-website` |
| `NEXT_PUBLIC_SITE_URL` | 生产环境完整 URL | `https://lazycatzzzzz.github.io/personal-website` |
| `NEXT_PUBLIC_DEEPSEEK_API_KEY` | DeepSeek API 密钥（可选） | `sk-xxx` |

## 部署到 GitHub Pages

### 自动部署

推送到 `main` 分支后，GitHub Actions 自动构建并部署。

### 手动部署

1. 在 GitHub 创建仓库 `personal-website`
2. 推送代码到 `main` 分支
3. 在仓库 Settings > Pages > Source 中选择 **GitHub Actions**

### 配置 Cloudflare Workers 代理

1. 访问 https://dash.cloudflare.com/
2. 创建 Workers → 创建服务
3. 复制 `cloudflare-worker.js` 的内容到编辑器
4. 部署后获得国内可访问地址

## 项目结构

```
src/
  app/
    layout.tsx          # 根布局（导航栏 + 页脚 + SEO metadata）
    page.tsx            # 首页
    blog/
      page.tsx          # 博客列表页
      [slug]/page.tsx   # 文章详情页
    contact/page.tsx    # 联系我
    pet/page.tsx        # 电子宠物 + 聊天
    photos/page.tsx     # 图片轮播
    videos/page.tsx     # 视频作品
  components/
    Navbar.tsx          # 导航栏
    Footer.tsx          # 页脚（含浏览计数）
    BackToTop.tsx       # 回到顶部按钮
    Cat.tsx             # 纯 CSS 互动猫组件
    ChatBubble.tsx      # 聊天气泡组件
    blog/               # 博客相关组件
  lib/
    chat.ts             # DeepSeek API 客户端 + mock 回退
    analytics.ts        # 客户端浏览计数（localStorage）
    posts.ts            # 博客文章数据解析
  content/posts/        # Markdown 文章文件
  types/
    post.ts             # 博客类型定义
public/
  photos/               # 照片静态资源
  .nojekyll             # 禁用 GitHub Pages Jekyll 处理
```

## 技术栈

- **框架**: Next.js 16.2.6 + React 19.2.4
- **样式**: Tailwind CSS v4
- **语言**: TypeScript
- **部署**: GitHub Pages + Cloudflare Workers（国内加速）
- **博客渲染**: next-mdx-remote