const contacts = [
  {
    href: "mailto:lazycatzzzzz@qq.com",
    label: "邮箱",
    value: "lazycatzzzzz@qq.com",
    gradient: "from-blue-400 to-blue-600",
    shadow: "shadow-blue-500/20",
    hoverBg: "hover:bg-blue-50",
    icon: (
      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    href: "https://github.com/lazycatzzzzz",
    label: "GitHub",
    value: "lazycatzzzzz",
    gradient: "from-gray-700 to-gray-900",
    shadow: "shadow-gray-500/20",
    hoverBg: "hover:bg-gray-50",
    icon: (
      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    href: "https://weibo.com/lazycatzzzzz",
    label: "微博",
    value: "@lazycatzzzzz",
    gradient: "from-red-400 to-red-600",
    shadow: "shadow-red-500/20",
    hoverBg: "hover:bg-red-50",
    icon: (
      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
        <path d="M10.098 20.323c-3.977.391-7.414-1.406-7.672-4.02-.259-2.609 2.759-5.047 6.74-5.441 3.979-.394 7.413 1.404 7.671 4.018.259 2.6-2.759 5.049-6.739 5.443zm7.125-10.095c-.33-.099-.558-.168-.384-.604.375-.943.414-1.756.007-2.337-.761-1.081-2.841-1.025-5.23-.03 0 0-.747.327-.555-.265.367-1.175.311-2.158-.258-2.726C9.608 3.06 7.106 3.973 4.958 6.156 3.357 7.789 2.45 9.522 2.45 11.101c0 3.104 3.989 4.991 7.892 4.991 5.116 0 8.52-2.976 8.52-5.339 0-1.427-1.202-2.238-1.64-2.525zm-6.645-1.658c1.443.16 2.441 1.374 2.237 2.712-.206 1.342-1.53 2.293-2.978 2.136-1.443-.16-2.441-1.374-2.237-2.714.206-1.34 1.531-2.293 2.978-2.134zm-.81 3.87c.501.063.832-.345.742-.905-.089-.558-.547-.959-1.046-1.021-.503-.064-.833.341-.744.9.092.558.547.961 1.048 1.026z" />
      </svg>
    ),
  },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="hero-gradient-subtle pt-24 pb-8">
        <div className="max-w-xl mx-auto px-6 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">联系我</h1>
          <p className="text-sm text-gray-500">交个朋友吧</p>
        </div>
      </div>

      <div className="max-w-xl mx-auto px-6 pb-12">
        {/* Profile card */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 mb-5">
          <div className="text-center mb-6">
            <div className="w-24 h-24 mx-auto bg-gradient-to-br from-blue-400 to-purple-600 rounded-2xl flex items-center justify-center mb-5 shadow-lg shadow-blue-500/20">
              <span className="text-4xl">😺</span>
            </div>
            <h2 className="text-xl font-bold text-gray-900">lazycatzzzzz</h2>
            <p className="text-sm text-gray-500 mt-1">搞笑又好玩的支付产品经理</p>
            <div className="flex items-center justify-center gap-1.5 mt-2">
              <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
              <span className="text-xs text-green-600">在线，随时欢迎搭话</span>
            </div>
          </div>

          <div className="border-t border-gray-100 pt-6">
            <h3 className="text-sm font-semibold text-gray-900 mb-3">关于我</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              一个搞笑又好玩的支付产品经理，善于探索不可能中的可能。热爱技术，关注用户体验，
              喜欢用幽默的方式解决严肃的问题。相信技术能让生活更有趣！
              平时也会在博客分享一些产品思考，欢迎交流~
            </p>
          </div>
        </div>

        {/* Contact methods */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
          <h3 className="text-sm font-semibold text-gray-900 mb-4">联系方式</h3>

          <div className="space-y-3">
            {contacts.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className={`flex items-center gap-4 p-4 bg-gray-50 ${c.hoverBg} rounded-xl transition-colors group`}
              >
                <div className={`w-11 h-11 bg-gradient-to-br ${c.gradient} rounded-xl flex items-center justify-center shadow-lg ${c.shadow}`}>
                  {c.icon}
                </div>
                <div>
                  <p className="text-xs text-gray-400">{c.label}</p>
                  <p className="text-sm font-medium text-gray-900 group-hover:text-primary transition-colors">
                    {c.value}
                  </p>
                </div>
                <div className="ml-auto text-gray-300 group-hover:text-primary group-hover:translate-x-1 transition-all">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </a>
            ))}
          </div>

          <div className="mt-5 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-100/50">
            <p className="text-xs text-gray-600 leading-relaxed">
              欢迎来找我聊天！无论是关于支付产品的话题，还是只是想找个乐子，我都很乐意奉陪~
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
