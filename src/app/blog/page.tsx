import Link from "next/link";

const posts = [
  {
    id: 1,
    date: "2025-05-20",
    tag: "产品思考",
    tagColor: "bg-blue-100 text-blue-700",
    title: "支付产品经理的日常：为什么每张需求单后面都有一个故事",
    excerpt:
      "有人说支付产品经理是最无聊的职业——你每天对着收银台和对账单，不像 C 端产品有花花绿绿的用户反馈。但当你第一次看到自己设计的支付流程被几千万人使用时，那种感觉比喝奶茶还甜。",
    readingTime: "5 分钟",
  },
  {
    id: 2,
    date: "2025-04-08",
    tag: "技术漫谈",
    tagColor: "bg-purple-100 text-purple-700",
    title: "一个产品经理眼中的 AI 支付安全：攻击者在想什么",
    excerpt:
      "反欺诈这件事，说难不难，说简单也真不简单。这篇聊聊我从产品视角观察到的那些让风控工程师头疼的场景，以及为什么「多一个验证码」并不总是正确答案。",
    readingTime: "8 分钟",
  },
  {
    id: 3,
    date: "2025-03-15",
    tag: "生活随笔",
    tagColor: "bg-amber-100 text-amber-700",
    title: "懒猫养成记：我是怎么把摸鱼时间变成副业输出的",
    excerpt:
      "上班摸鱼、下班学习，是我职业生涯前三年的标准画像。直到有一天领导说「你可以把这些整理成文档分享给团队」，我才意识到——原来摸鱼也可以是 KPI。",
    readingTime: "4 分钟",
  },
  {
    id: 4,
    date: "2025-02-01",
    tag: "产品思考",
    tagColor: "bg-blue-100 text-blue-700",
    title: "从用户投诉看支付体验：那些年我们踩过的坑",
    excerpt:
      "「我的钱扣了但没到账！」——这大概是支付产品经理最怕听到的一句话。今天来盘点几个真实的用户痛点，以及背后的产品设计取舍。",
    readingTime: "6 分钟",
  },
  {
    id: 5,
    date: "2025-01-10",
    tag: "工具分享",
    tagColor: "bg-green-100 text-green-700",
    title: "我用 AI 搭了个人网站，全程没写一行 CSS",
    excerpt:
      "作为一个写需求文档比写代码更熟练的产品经理，用 AI 搭站这件事让我重新找回了「我也能造东西」的成就感。分享一下这次折腾的过程和踩坑记录。",
    readingTime: "7 分钟",
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="hero-gradient-subtle pt-24 pb-8">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">博客</h1>
          <p className="text-sm text-gray-500">产品思考 · 技术漫谈 · 生活随笔</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 pb-16">
        {/* Stats bar */}
        <div className="flex items-center gap-6 mb-8 text-xs text-gray-400">
          <span>{posts.length} 篇文章</span>
          <span className="w-1 h-1 bg-gray-300 rounded-full" />
          <span>持续更新中</span>
          <span className="w-1 h-1 bg-gray-300 rounded-full" />
          <span className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
            最近活跃
          </span>
        </div>

        {/* Post list */}
        <div className="space-y-4">
          {posts.map((post, i) => (
            <article
              key={post.id}
              className="group bg-white rounded-2xl border border-gray-100 shadow-sm p-6 hover:-translate-y-0.5 hover:shadow-md transition-all duration-200"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <div className="flex items-start gap-4">
                {/* Timeline dot */}
                <div className="flex-shrink-0 mt-1">
                  <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-br from-primary to-accent shadow-sm" />
                </div>

                <div className="flex-1 min-w-0">
                  {/* Meta */}
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${post.tagColor}`}>
                      {post.tag}
                    </span>
                    <span className="text-xs text-gray-400">{post.date}</span>
                    <span className="text-xs text-gray-400">· {post.readingTime}阅读</span>
                  </div>

                  <h2 className="text-base font-semibold text-gray-900 mb-2 group-hover:text-primary transition-colors leading-snug">
                    {post.title}
                  </h2>
                  <p className="text-sm text-gray-500 leading-relaxed line-clamp-2">
                    {post.excerpt}
                  </p>

                  <div className="mt-4 flex items-center gap-1 text-xs font-medium text-primary opacity-0 group-hover:opacity-100 transition-all duration-200">
                    <span>阅读全文</span>
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Footer note */}
        <div className="mt-10 text-center">
          <div className="inline-flex items-center gap-2 px-5 py-3 bg-white rounded-2xl border border-gray-100 shadow-sm text-sm text-gray-500">
            <span>更多文章持续更新中</span>
            <Link href="/contact" className="text-primary font-medium hover:underline">
              想聊某个话题？戳我
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
