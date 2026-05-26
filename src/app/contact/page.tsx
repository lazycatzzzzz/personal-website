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
            <div className="w-24 h-24 mx-auto bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl flex items-center justify-center mb-5 shadow-sm">
              <span className="text-4xl">😺</span>
            </div>
            <h2 className="text-xl font-bold text-gray-900">lazycatzzzzz</h2>
            <p className="text-sm text-gray-500 mt-1">搞笑又好玩的支付产品经理</p>
          </div>

          <div className="border-t border-gray-100 pt-6">
            <h3 className="text-sm font-semibold text-gray-900 mb-3">关于我</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              一个搞笑又好玩的支付产品经理，善于探索不可能中的可能。热爱技术，关注用户体验，
              喜欢用幽默的方式解决严肃的问题。相信技术能让生活更有趣！
            </p>
          </div>
        </div>

        {/* Contact methods */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
          <h3 className="text-sm font-semibold text-gray-900 mb-4">联系方式</h3>

          <div className="space-y-3">
            <a
              href="mailto:lazycatzzzzz@qq.com"
              className="flex items-center gap-4 p-4 bg-gray-50 hover:bg-blue-50 rounded-xl transition-colors group"
            >
              <div className="w-11 h-11 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/20">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-gray-400">邮箱</p>
                <p className="text-sm font-medium text-gray-900 group-hover:text-primary transition-colors">
                  lazycatzzzzz@qq.com
                </p>
              </div>
              <div className="ml-auto text-gray-300 group-hover:text-primary group-hover:translate-x-1 transition-all">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </a>

            <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
              <div className="w-11 h-11 bg-gradient-to-br from-emerald-400 to-teal-600 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-500/20">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-gray-400">社交媒体</p>
                <p className="text-sm font-medium text-gray-900">lazycatzzzzz</p>
              </div>
            </div>
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
