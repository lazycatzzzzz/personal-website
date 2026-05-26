import Link from "next/link";

const modules = [
  {
    href: "/pet",
    title: "电子宠物",
    description: "可爱又好玩的电子宠物猫，陪你聊天解闷",
    icon: "🐱",
    color: "bg-orange-500",
  },
  {
    href: "/photos",
    title: "图片",
    description: "精美图片轮播展示，留下美好瞬间",
    icon: "🖼️",
    color: "bg-blue-500",
  },
  {
    href: "/videos",
    title: "视频",
    description: "精彩视频作品集，记录生活点滴",
    icon: "🎬",
    color: "bg-purple-500",
  },
  {
    href: "/contact",
    title: "联系我",
    description: "了解我更多，一起交个朋友吧",
    icon: "💬",
    color: "bg-green-500",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* 顶部 Banner */}
      <div className="bg-white border-b border-gray-100 py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-3xl font-semibold text-gray-900 mb-3">
            欢迎来到我的个人主页
          </h1>
          <p className="text-gray-500">
            搞笑又好玩的支付产品经理 · 善于探索不可能中的可能
          </p>
        </div>
      </div>

      {/* 模块卡片 */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {modules.map((module) => (
            <Link
              key={module.href}
              href={module.href}
              className="group bg-white rounded-xl border border-gray-100 p-6 hover:border-blue-200 hover:shadow-sm transition-all"
            >
              {/* 图标 */}
              <div className={`w-12 h-12 ${module.color} rounded-xl flex items-center justify-center text-2xl mb-4`}>
                {module.icon}
              </div>

              {/* 文字 */}
              <h2 className="text-base font-medium text-gray-900 mb-2 group-hover:text-blue-500 transition-colors">
                {module.title}
              </h2>
              <p className="text-sm text-gray-500">
                {module.description}
              </p>
            </Link>
          ))}
        </div>
      </div>

      {/* 底部提示 */}
      <div className="text-center pb-12">
        <p className="text-gray-400 text-sm">
          点击任意卡片开始探索
        </p>
      </div>
    </div>
  );
}