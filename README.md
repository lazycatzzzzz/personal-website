# lazycatzzzzz 个人主页

基于 Next.js 16 + React 19 + Tailwind CSS v4 + TypeScript 构建的个人网站，部署于 GitHub Pages。

## 功能

- **首页** — 导航入口，链接到所有子页面
- **电子宠物** — 互动猫猫 + AI 聊天（基于 MiniMax API，无 API key 时使用本地 mock 回复）
- **图片集** — 照片轮播，含缩略图导航
- **视频作品** — 抖音视频外链集合
- **联系我** — 个人介绍与联系方式

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
| `NEXT_PUBLIC_BASE_PATH` | 项目站点路径前缀，用户站点留空 | `/personal-website` |
| `NEXT_PUBLIC_SITE_URL` | 生产环境完整 URL | `https://lazycatzzzzz.github.io/personal-website` |
| `NEXT_PUBLIC_MINIMAX_API_KEY` | MiniMax API 密钥（将暴露在客户端） | `sk-cp-xxx` |

## 部署到 GitHub Pages

1. 在 GitHub 创建仓库 `personal-website`
2. 推送代码到 `main` 分支
3. 在仓库 Settings > Pages > Source 中选择 **GitHub Actions**
4. 在 Settings > Secrets and variables > Actions 中添加 `NEXT_PUBLIC_MINIMAX_API_KEY` secret（可选，不设置则使用 mock 回复）
5. 推送后 GitHub Actions 自动构建并部署

部署地址：`https://lazycatzzzzz.github.io/personal-website`

## 项目结构

```
src/
  app/
    layout.tsx          # 根布局（导航栏 + 页脚 + SEO metadata）
    page.tsx            # 首页
    contact/page.tsx    # 联系我
    pet/page.tsx        # 电子宠物 + 聊天
    photos/page.tsx     # 图片轮播
    videos/page.tsx     # 视频作品
    robots.ts           # robots.txt 生成
    sitemap.ts          # sitemap.xml 生成
  components/
    Navbar.tsx          # 导航栏
    Footer.tsx          # 页脚（含浏览计数）
    BackToTop.tsx       # 回到顶部按钮
    Cat.tsx             # 纯 CSS 互动猫组件
    ChatBubble.tsx      # 聊天气泡组件
  lib/
    chat.ts             # MiniMax API 客户端 + mock 回退
    analytics.ts        # 客户端浏览计数（localStorage）
public/
  photos/               # 照片静态资源
  .nojekyll             # 禁用 GitHub Pages Jekyll 处理
```
