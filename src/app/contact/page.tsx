export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-xl mx-auto px-6 py-8">
        <h1 className="text-xl font-semibold text-center text-gray-900 mb-6">联系我</h1>

        {/* 个人介绍卡片 */}
        <div className="bg-white rounded-xl border border-gray-100 p-6 mb-4">
          <div className="text-center mb-5">
            {/* 头像占位 */}
            <div className="w-20 h-20 mx-auto bg-gray-100 rounded-full flex items-center justify-center mb-4">
              <span className="text-3xl">😺</span>
            </div>
            <h2 className="text-lg font-medium text-gray-900">lazycatzzzzz</h2>
            <p className="text-sm text-gray-500 mt-1">搞笑又好玩的支付产品经理</p>
          </div>

          <div className="border-t border-gray-100 pt-5">
            <h3 className="text-sm font-medium text-gray-900 mb-3">关于我</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              一个搞笑又好玩的支付产品经理，善于探索不可能中的可能。热爱技术，关注用户体验，
              喜欢用幽默的方式解决严肃的问题。相信技术能让生活更有趣！
            </p>
          </div>
        </div>

        {/* 联系方式 */}
        <div className="bg-white rounded-xl border border-gray-100 p-5">
          <h3 className="text-sm font-medium text-gray-900 mb-4">联系方式</h3>
          <div className="space-y-3">
            <a
              href="mailto:lazycatzzzzz@qq.com"
              className="flex items-center gap-4 p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-gray-500">邮箱</p>
                <p className="text-sm text-gray-900">lazycatzzzzz@qq.com</p>
              </div>
            </a>

            <div className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
              <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-gray-500">社交媒体</p>
                <p className="text-sm text-gray-900">lazycatzzzzz</p>
              </div>
            </div>
          </div>

          <div className="mt-4 p-3 bg-blue-50 rounded-lg">
            <p className="text-xs text-blue-600">
              欢迎来找我聊天！无论是关于支付产品的话题，还是只是想找个乐子，我都很乐意奉陪~
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
