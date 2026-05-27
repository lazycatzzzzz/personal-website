import Link from "next/link";

const modules = [
  {
    href: "/blog",
    title: "博客",
    description: "分享产品思考、技术感悟和生活随笔",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
      </svg>
    ),
    gradient: "from-rose-400 to-pink-600",
    bgLight: "bg-rose-50",
    textColor: "text-rose-600",
    shadow: "shadow-rose-500/20",
  },
  {
    href: "/pet",
    title: "电子宠物",
    description: "可爱又好玩的电子宠物猫，陪你聊天解闷",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
      </svg>
    ),
    gradient: "from-amber-400 to-orange-500",
    bgLight: "bg-amber-50",
    textColor: "text-amber-600",
    shadow: "shadow-amber-500/20",
  },
  {
    href: "/photos",
    title: "图片集",
    description: "精美图片轮播展示，留下美好瞬间",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z" />
      </svg>
    ),
    gradient: "from-sky-400 to-blue-600",
    bgLight: "bg-sky-50",
    textColor: "text-sky-600",
    shadow: "shadow-sky-500/20",
  },
  {
    href: "/videos",
    title: "视频集",
    description: "精彩视频作品集，记录生活点滴",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.375 19.5h17.25a.375.375 0 00.375-.375V4.875a.375.375 0 00-.375-.375H3.375A.375.375 0 003 4.875v14.25c0 .207.168.375.375.375z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 8.746l5.625 3.254L9.75 15.254V8.746z" />
      </svg>
    ),
    gradient: "from-violet-400 to-purple-600",
    bgLight: "bg-violet-50",
    textColor: "text-violet-600",
    shadow: "shadow-violet-500/20",
  },
  {
    href: "/contact",
    title: "联系我",
    description: "了解我更多，一起交个朋友吧",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 9v.906a2.25 2.25 0 01-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 001.183 1.981l6.478 3.488m8.839 2.51l-4.66-2.51m0 0l-1.023-.55a2.25 2.25 0 00-2.134 0l-1.022.55m0 0l-4.661 2.51m16.5 1.615a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V8.844a2.25 2.25 0 011.183-1.98l7.5-4.04a2.25 2.25 0 012.134 0l7.5 4.04a2.25 2.25 0 011.183 1.98V19.5z" />
      </svg>
    ),
    gradient: "from-emerald-400 to-teal-600",
    bgLight: "bg-emerald-50",
    textColor: "text-emerald-600",
    shadow: "shadow-emerald-500/20",
  },
];

const skills = [
  { label: "支付产品", color: "bg-blue-100 text-blue-700" },
  { label: "用户体验", color: "bg-purple-100 text-purple-700" },
  { label: "需求分析", color: "bg-amber-100 text-amber-700" },
  { label: "数据驱动", color: "bg-green-100 text-green-700" },
  { label: "跨团队协作", color: "bg-rose-100 text-rose-700" },
  { label: "产品规划", color: "bg-indigo-100 text-indigo-700" },
  { label: "风险控制", color: "bg-orange-100 text-orange-700" },
  { label: "搞笑本领", color: "bg-pink-100 text-pink-700" },
];

const stats = [
  { value: "5+", label: "支付产品经验(年)" },
  { value: "100+", label: "需求落地" },
  { value: "∞", label: "搞笑能力" },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden hero-gradient pt-20 pb-28">
        <div className="orb w-72 h-72 bg-white -top-20 -right-20" />
        <div className="orb w-56 h-56 bg-white bottom-0 left-1/4" />
        <div className="orb w-40 h-40 bg-blue-300 top-1/2 right-1/3" />

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/15 backdrop-blur-sm rounded-full text-white/90 text-xs font-medium mb-8">
            <span className="w-1.5 h-1.5 bg-green-300 rounded-full animate-pulse" />
            欢迎来访
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            欢迎来到我的个人主页
          </h1>
          <p className="text-lg text-white/70 max-w-lg mx-auto leading-relaxed">
            搞笑又好玩的支付产品经理 · 善于探索不可能中的可能
          </p>

          <div className="mt-10 flex justify-center gap-8">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-2xl font-bold text-white">{s.value}</div>
                <div className="text-xs text-white/60 mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <div className="w-5 h-8 rounded-full border-2 border-white/30 flex items-start justify-center p-1">
              <div className="w-1 h-2 bg-white/60 rounded-full animate-bounce" />
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 48h1440V0c-212 32-424 24-636 16-213-8-425-24-637-8-213 16-167 40-167 40z" fill="#f8fafc" />
          </svg>
        </div>
      </section>

      {/* Module Cards Section */}
      <section className="bg-slate-50 -mt-1 pb-12">
        <div className="max-w-6xl mx-auto px-6 pt-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">探索更多</h2>
            <p className="text-gray-500 text-sm">点击卡片，发现有趣的内容</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {modules.map((mod) => (
              <Link
                key={mod.href}
                href={mod.href}
                className="group relative bg-white rounded-2xl border border-gray-100 p-6 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 overflow-hidden"
                style={{ transitionProperty: "transform, box-shadow" }}
              >
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${mod.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${mod.gradient} flex items-center justify-center text-white mb-5 shadow-lg ${mod.shadow}`}>
                  {mod.icon}
                </div>
                <h3 className="text-base font-semibold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors">
                  {mod.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">{mod.description}</p>
                <div className={`mt-4 flex items-center gap-1 text-xs font-medium ${mod.textColor} opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-0 group-hover:translate-x-1`}>
                  <span>去看看</span>
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="bg-slate-50 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="p-8 md:p-10">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                {/* Avatar */}
                <div className="flex-shrink-0 flex flex-col items-center gap-3">
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/20">
                    <span className="text-4xl">😺</span>
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1 bg-green-50 rounded-full">
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-xs text-green-600 font-medium">在线</span>
                  </div>
                </div>

                {/* Bio */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <h2 className="text-xl font-bold text-gray-900">lazycatzzzzz</h2>
                    <span className="px-2.5 py-0.5 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs font-medium rounded-full">PM</span>
                  </div>
                  <p className="text-sm text-gray-500 mb-4">搞笑又好玩的支付产品经理</p>
                  <p className="text-sm text-gray-600 leading-relaxed mb-6">
                    热爱探索支付领域每一个有趣的角落，擅长把复杂的产品逻辑用一句话讲清楚（然后讲三遍）。
                    相信好的产品是在无数次"不可能"里折腾出来的，也相信程序员都是可以被零食收买的生物。
                    本页面是用 AI + 一点点奇思妙想搭建的，欢迎撸猫、看图、聊天～
                  </p>

                  {/* Skills */}
                  <div>
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">技能标签</p>
                    <div className="flex flex-wrap gap-2">
                      {skills.map((s) => (
                        <span key={s.label} className={`px-3 py-1 rounded-full text-xs font-medium ${s.color}`}>
                          {s.label}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA bar */}
            <div className="border-t border-gray-50 px-8 md:px-10 py-4 bg-gray-50/50 flex flex-col sm:flex-row items-center justify-between gap-3">
              <p className="text-sm text-gray-500">想了解更多？去「联系我」页面打个招呼吧～</p>
              <Link
                href="/contact"
                className="flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-primary to-accent text-white text-sm font-medium rounded-xl hover:shadow-lg hover:shadow-primary/25 transition-all duration-200"
              >
                <span>联系我</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
